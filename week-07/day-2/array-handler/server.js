const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //npm i body-parser utan igy lehet beimportalni
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('OK');
});

app.post('/arrays', (req, res) => {
  let what = req.body.what;
  if (what === undefined || req.body.numbers === null || req.body.numbers === undefined || req.body.numbers.length === 0){
    res.status(404).json({ "error": "Please provide what to do with the numbers!" })
  }else
  if (what === 'sum') {
    let numbers = req.body.numbers;
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    res.json({"result": result});
  }else
  if (what === 'multiply') {
    let numbers = req.body.numbers;
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
      result *= numbers[i];
    }
    res.json({"result": result});
  }else
  if (what === 'double') {
    let numbers = req.body.numbers;
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i] + numbers[i];
      result.push(element);
    }
    res.json({"result": result});
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
