const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");
const path = require('path')
const express = require('express')
const cors = require('cors');
projectData = {};

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static('dist'))

//GET
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

//Express server
app.listen(8081, function () {
  console.log('listening on port 8081!')
})


//POST
app.post('/all', async (req, res) => {

  const endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`;
  try {
    fetch(endpoint)
    .then(response => response.json())
    .then(results => {
      data = {
      text: results.sentence_list[0].text,
      score_tag: results.score_tag,
      agreement: results.agreement,
      subjectivity: results.subjectivity,
      confidence: results.confidence,
      irony: results.irony,
    }
    res.send(data);
  });
    
  } catch (error) {
    console.log(error);
  }
});
