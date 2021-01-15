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
  if(err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.send('server running');
});

app.get('/posts', (req,res) => {
  conn.query(`SELECT * FROM posts WHERE status = 'active'`, (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  })
})

app.post('/posts', (req,res) => {
  conn.query(`INSERT INTO posts (title,url,timestamp,score)
  VALUES (?,?,now(),0);`, [req.body.title, req.body.url, req.body.score], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
}
res.status(200).json(req.body);
})
})

app.put('/posts/:id/upvote', (req,res) => {
  let id = req.params.id;
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = (?);`,[id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
}
res.status(200).json(req.body);
})
})

app.put('/posts/:id/downvote', (req,res) => {
  let id = req.params.id;
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = (?);`,[id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
}
res.status(200).json(req.body);
})
})

app.put('/posts/:id', (req,res) => {
  let id = req.params.id;
  let title = req.body.title;
  let url = req.body.url;
  conn.query(`UPDATE posts SET title = (?), url = (?) WHERE id = (?);`,[title, url, id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
}
res.status(200).json(req.body);
})
})

app.delete('/posts/:id', (req,res) => {
  let deletedPost = req.body;
  let status = 'inactive';
  let id = req.params.id;
  conn.query(`UPDATE posts SET status = (?) WHERE id = (?);`,[status, id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
}
res.status(200).json(deletedPost);
})
})

app.listen(3000);