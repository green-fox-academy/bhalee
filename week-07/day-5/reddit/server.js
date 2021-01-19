'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
app.use(express.static('public'));

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

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT title, url, timestamp, score, owner, vote FROM posts WHERE status = 'active'`, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title,url,timestamp,score) VALUES (?,?,now(),0);`, [req.body.title, req.body.url, req.body.score], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    let post_id = rows.insertId;
    res.status(200);
    conn.query(`SELECT title, url, timestamp, score, owner, vote FROM posts WHERE id = (?)`, [post_id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
        // let user_id = req.headers.user_id;
        let id = req.params.id;
        conn.query(`UPDATE posts SET score = score + 1 WHERE id = (?);`, [id], (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          res.status(200);

            
            conn.query(
              `SELECT title, score
                FROM posts
                WHERE id = (?);`,
              [id],
              (err, rows) => {
                if (err) {
                  res.status(500).json(err);
                  return;
                }

                res.status(200).json(rows);
              }
            );
          });
        });

app.put('/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = (?);`, [id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200);
    conn.query(`SELECT title, url, timestamp, score, owner, vote FROM posts WHERE id = (?)`, [id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.put('/posts/:id', (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let url = req.body.url;
  conn.query(`UPDATE posts SET title = (?), url = (?) WHERE id = (?);`, [title, url, id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200);
    conn.query(`SELECT title, url, timestamp, score, owner, vote FROM posts WHERE id = (?)`, [id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  let deletedPost = req.body;
  let status = 'inactive';
  let id = req.params.id;
  conn.query(`UPDATE posts SET status = (?) WHERE id = (?);`, [status, id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200);
    conn.query(`SELECT title, url, timestamp, score, owner, vote FROM posts WHERE id = (?)`, [id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.listen(3000);

app.get('/users', (req, res) => {
  conn.query(`SELECT username FROM users WHERE status = 'active'`, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/users', (req, res) => {
  conn.query(`INSERT INTO users (username) VALUES (?);`, [req.body.username], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    let post_id = rows.insertId;
    res.status(200);
    conn.query(`SELECT username FROM users WHERE user_id = (?);`, [post_id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.delete('/users/:id', (req, res) => {
  let deletedPost = req.body;
  let status = 'inactive';
  let id = req.params.id;
  conn.query(`UPDATE users SET status = (?) WHERE user_id = (?);`, [status, id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200);
    conn.query(`SELECT username FROM users WHERE user_id = (?)`, [id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(rows);
    });
  });
});
