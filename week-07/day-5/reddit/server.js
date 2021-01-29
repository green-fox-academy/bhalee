'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
app.use(express.static('assets'));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/posts', (req, res) => {
  if (req.header('user_id')) {
    let userId = req.header('user_id');
    conn.query(`SELECT title, url, timestamp, score, owner, post_id FROM posts WHERE status = 'active' ORDER BY score DESC;`, (err, rows) => {
      ifError(res, err);
      conn.query(`SELECT post_id, user_id, vote FROM votes WHERE ${userId};`, (err, rows2) => {
        ifError(res, err);
        rows.forEach((element) => {
          rows2.forEach((element2) => {
            if (element.post_id === element2.post_id && element2.user_id === Number(userId)) {
              element['vote'] = element2.vote;
            }
          });
        });
        res.status(200).json(rows);
      });
    });
  } else {
    conn.query(`SELECT title, url, timestamp, score, owner, post_id FROM posts WHERE status = 'active' ORDER BY score DESC;`, (err, rows) => {
      ifError(res, err);
      res.status(200).json(rows);
    });
  }
});

app.get('/posts/:id', (req, res) => {
  let postId = req.params.id;
  conn.query(`Select title, url, timestamp, score, owner, post_id FROM posts WHERE post_id = (?)`, [postId], (err, res) => {
    ifError(res, err);
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  if (req.header('user_id')) {
    let date = new Date().getTime();
    let userId = req.header('user_id');
    let voteNull = 0;

    conn.query(`SELECT username FROM users WHERE user_id = (?)`, [userId], (err, rows) => {
      ifError(res, err);

      let username = rows[0].username;
      conn.query(`INSERT INTO posts (title,url,timestamp,score,user_id,owner) VALUES (?,?,?,?,?,?);`, [req.body.title, req.body.url, date, voteNull, userId, username], (err, rows) => {
        ifError(res, err);
        let postId = Number(rows.insertId);
        resPost(res, conn, postId, rows);
      });
    });
  } else {
    res.status(500).json('user id missing');
    return;
  }
});

app.put('/posts/:id/upvote', (req, res) => {
  if (req.header('user_id') && req.params.id) {
    let userId = req.header('user_id');
    let postId = req.params.id;
    let voteId = Number(userId.toString() + postId.toString());
    let vote;
    conn.query(`SELECT * FROM votes WHERE vote_id = ${voteId}`, (err, rows) => {
      ifError(res, err);

      try {
        vote = rows[0].vote;
      } catch (e) {
        vote = undefined;
      }

      if (vote === undefined) {
        newVote('+ 1', '1', voteId, postId, userId, res, conn);
      } else if (vote === -1) {
        updateVote('+ 1', '0', postId, voteId, res, conn);
      } else if (vote === 0) {
        updateVote('+ 1', '1', postId, voteId, res, conn);
      } else {
        resPost(res, conn, postId, rows);
      }
    });
  } else {
    res.status(500).json('post id or user id missing');
    return;
  }
});

app.put('/posts/:id/downvote', (req, res) => {
  if (req.header('user_id') && req.params.id) {
    let userId = req.header('user_id');
    let postId = req.params.id;
    let voteId = Number(userId.toString() + postId.toString());
    let vote;
    conn.query(`SELECT * FROM votes WHERE vote_id = ${voteId}`, (err, rows) => {
      ifError(res, err);

      try {
        vote = rows[0].vote;
      } catch (e) {
        vote = undefined;
      }

      if (vote === undefined) {
        newVote('- 1', '-1', voteId, postId, userId, res, conn);
      } else if (vote === 1) {
        updateVote('- 1', '0', postId, voteId, res, conn);
      } else if (vote === 0) {
        updateVote('- 1', '-1', postId, voteId, res, conn);
      } else {
        resPost(res, conn, postId, rows);
      }
    });
  } else {
    res.status(500).json('post id or user id missing');
    return;
  }
});

app.put('/posts/:id', (req, res) => {
  if (req.header('user_id') && req.params.id) {
    let userId = Number(req.header('user_id'));
    let postId = req.params.id;

    conn.query(`SELECT title, url, timestamp, score, owner, user_id FROM posts WHERE post_id = (?)`, [postId], (err, rows) => {
      ifError(res, err);
      if (userId === 1 || rows[0].user_id === userId) {
        if (req.body.title && req.body.url) {
          let title = req.body.title;
          let url = req.body.url;

          conn.query(`UPDATE posts SET title = (?), url = (?) WHERE post_id = (?);`, [title, url, postId], (err, rows) => {
            ifError(res, err);

            resPost(res, conn, postId, rows);
          });
        } else if (req.body.title) {
          let title = req.body.title;
          let url = rows[0].url;
          conn.query(`UPDATE posts SET title = (?), url = (?) WHERE post_id = (?);`, [title, url, postId], (err, rows) => {
            ifError(res, err);

            resPost(res, conn, postId, rows);
          });
        } else if (req.body.url) {
          let title = rows[0].title;
          let url = req.body.url;
          conn.query(`UPDATE posts SET title = (?), url = (?) WHERE post_id = (?);`, [title, url, postId], (err, rows) => {
            ifError(res, err);

            resPost(res, conn, postId, rows);
          });
        }
      } else {
        res.status(500).json('you have no acces update the post');
        return;
      }
    });
  } else {
    res.status(500).json('user id or post id missing');
  }
});

app.delete('/posts/:id', (req, res) => {
  if (req.header('user_id') && req.params.id) {
    let userId = Number(req.header('user_id'));
    let postId = req.params.id;

    conn.query(`SELECT title, url, timestamp, score, owner, user_id FROM posts WHERE post_id = (?)`, [postId], (err, rows) => {
      ifError(res, err);
      if (userId === 1 || rows[0].user_id === userId) {
        let status = 'inactive';
        conn.query(`UPDATE posts SET status = (?) WHERE post_id = (?);`, [status, postId], (err, rows) => {
          ifError(res, err);
          resPost(res, conn, postId, rows);
        });
      } else {
        res.status(500).json('you have no acces delete the post');
      }
    });
  } else {
    res.status(500).json('user id or post id missing');
  }
});
/*---------- users API----------*/
app.get('/users', (req, res) => {
  conn.query(`SELECT username FROM users WHERE status = 'active'`, (err, rows) => {
    ifError(res, err);
    res.status(200).json(rows);
  });
});

app.post('/users', (req, res) => {
  conn.query(`INSERT INTO users (username) VALUES (?);`, [req.body.username], (err, rows) => {
    ifError(res, err);
    let post_id = rows.insertId;
    res.status(200);
    conn.query(`SELECT username FROM users WHERE user_id = (?);`, [post_id], (err, rows) => {
      ifError(res, err);
      res.status(200).json(rows);
    });
  });
});

app.delete('/users/:id', (req, res) => {
  let deletedPost = req.body;
  let status = 'inactive';
  let id = req.params.id;
  conn.query(`UPDATE users SET status = (?) WHERE user_id = (?);`, [status, id], (err, rows) => {
    ifError(res, err);

    res.status(200);
    conn.query(`SELECT username FROM users WHERE user_id = (?)`, [id], (err, rows) => {
      ifError(res, err);
      res.status(200).json(rows);
    });
  });
});

app.listen(3000);
/*---------- functions ----------*/
function resPost(res, conn, postId, rows) {
  conn.query(`SELECT title, url, timestamp, score, owner, post_id FROM posts WHERE post_id = (?)`, [postId], (err, rows) => {
    ifError(res, err);
    res.status(200).json(rows);
    return;
  });
}

function ifError(res, err) {
  if (err) {
    res.status(500).json(err);
    return;
  }
}

function updateVote(setScore, setVote, postId, voteId, res, conn) {
  conn.query(`UPDATE posts SET score = score ${setScore} WHERE post_id = (?);`, [postId], (err, rows) => {
    ifError(res, err);
    conn.query(`UPDATE votes SET vote = ${setVote} WHERE vote_id = (?)`, [voteId], (err, rows2) => {
      ifError(res, err);
      conn.query(`SELECT vote FROM votes WHERE vote_id = (?)`, [voteId], (err, rows3) => {
        conn.query(`SELECT title, url, timestamp, score, owner, post_id FROM posts WHERE post_id = (?)`, [postId], (err, rows4) => {
          ifError(res, err);
          rows4[0]['vote'] = rows3[0].vote;
          res.status(200).json(rows4);
        });
      });
    });
  });
}

function newVote(setScore, setVote, voteId, postId, userId, res, conn) {
  conn.query(`UPDATE posts SET score = score ${setScore} WHERE post_id = (?);`, [postId], (err, rows) => {
    ifError(res, err);
    conn.query(`INSERT INTO votes (post_id, user_id, vote, vote_id) SELECT * FROM (SELECT ?,?,${setVote},?) AS tmp WHERE NOT EXISTS (SELECT * FROM votes WHERE vote_id = ${voteId}) LIMIT 1;`, [postId, userId, voteId], (err, rows) => {
      ifError(res, err);
      resPost(res, conn, postId, rows);
    });
  });
}
module.exports = app;
