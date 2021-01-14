'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
const path = require('path');
app.use(express.static('assets'));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo',
  insecureAuth: 'true', //ez akkor, ha minden rendben van es megis auth security errort kaptok?
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/listAll', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/all', (req,res) => {
  
  conn.query('SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM author INNER JOIN book_mast ON author.aut_id = book_mast.aut_id INNER JOIN category ON category.cate_id = book_mast.cate_id INNER JOIN publisher ON publisher.pub_id = book_mast.pub_id order by author.aut_id;', (err, rows) => {
    // console.log(rows);
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    return res.send(rows);
  });
});

app.listen(3000);
