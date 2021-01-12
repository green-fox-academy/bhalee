const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //npm i body-parser utan igy lehet beimportalni
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let result = input * 2;
  if (input === undefined || input === null) {
    res.status(200).json({ error: 'Please provide an input!' });
  } else {
    res.json({ received: Number(input), result: result });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name === undefined && title === undefined) {
    res.status(400).json({ error: 'Please provide a name and a title!' });
  } else if (name === undefined) {
    res.status(400).json({ error: 'Please provide a name!' });
  } else if (title === undefined) {
    res.status(400).json({ error: 'Please provide a title!' });
  } else {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  let appended = appendable + 'a';

  res.json({ "appended": appended });
});

app.post('/dountil/:action', (req,res) => {
  let action = req.params.action
  console.log(req)
  if (action === 'sum'){
    let sumUntil = req.body.until;
    let result = 0;
    for (let i = 0; i < sumUntil+1; i++) {
      result = result + i
    }
    res.json({"result": result});
  }
  if (action === 'factor'){
    function factorial(n){
      let answer = 1;
      if (n == 0 || n == 1){
        return answer;
      }else{
        for(var i = n; i >= 1; i--){
          answer = answer * i;
        }
        return answer;
      }  
    }
    let sumUntil = req.body.until;
    let result = factorial(sumUntil);

    res.json({"result": result});
  }

})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
