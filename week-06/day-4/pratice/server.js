'use strict'
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  
  res.send('helloooo');
})
app.get('/list', function (req, res) {
  
  res.sendFile(__dirname + '/list-manager.html');
})
app.get('/main.css', function (req, res) {
  
  res.sendFile(__dirname + '/main.css');
})
app.get('/main.js', function (req, res) {
  
  res.sendFile(__dirname + '/main.js');
})

app.listen(3000);

