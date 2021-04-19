const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");
const path = require('path')
const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');
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
  console.log("post is envoked!!!");
  console.log(req.body.url)
  const endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=3579de072e89f52887632392cea60905&url=${req.body.url}&lang=en`;
  try {
    fetch(endpoint)
    .then(response => response.json())
    .then(results => {
      console.log("your inside results \n" + results.agreement )
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
    // projectData["text"]=`${req.body.text}`
    // projectData["score_tag"]=`${req.body.score_tag}`
    // projectData["agreement"]=`${req.body.agreement}`
    // projectData["subjectivity"]=`${req.body.subjectivity}`
    // projectData["confidence"]=`${req.body.confidence}`
    // projectData["irony"]=`${req.body.irony}`

  } catch (error) {
    console.log(error);
  }
});
