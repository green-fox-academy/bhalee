'use strict';
const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/assets/style.css', (req,res) => {
  res.sendFile(__dirname + '/assets/style.css');
})

app.get('/assets/products.csv', (req,res) => {
  res.sendFile(__dirname + '/assets/products.csv');
})

app.listen(3000);