const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let message = req.query.message;
  let response = {};
  let translated = 'I am Groot!';
  if (message) {
    response.received = message;
    response.translated = translated;
    res.status(200).json(response);
  } else {
    response.error = translated;
    res.status(400).json(response);
  }
});

module.exports = app;