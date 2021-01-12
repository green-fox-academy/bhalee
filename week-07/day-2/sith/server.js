const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //npm i body-parser utan igy lehet beimportalni
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('OK');
});
app.post('/sith', (req,res) =>{
  let text = req.body.text
  let sentencSplitted = text.split(".");
  let result = [];
  for (let i = 0; i < sentencSplitted.length; i++) {
    let textSplitted = sentencSplitted[i].split(" ")
    for (let j = 0; j < textSplitted.length; j+=2) {
     
      
    }
  }

  res.json({result})
})
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});