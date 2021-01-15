const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if (!req.query.name) {
    res.render('home', {
      welcome: `Welcome back, Guest!`,
    });
  } else {
    res.render('home', {
      welcome: `Welcome back, ${req.query.name}!`,
    });
  }
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
