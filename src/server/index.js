const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');
projectData ={};

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
app.post("/all", async (req, res) => {

    // const endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`;
    try {
        // const response = await axios(endpoint)
                // const data = {
                //     text: results.data.sentence_list[0].text,
                //     score_tag: results.data.score_tag,
                //     agreement: results.data.agreement,
                //     subjectivity: results.data.subjectivity,
                //     confidence: results.data.confidence,
                //     irony: results.data.irony,
                // };
                projectData["text"]=`${req.body.text}`
                projectData["score_tag"]=`${req.body.score_tag}`
                projectData["agreement"]=`${req.body.agreement}`
                projectData["subjectivity"]=`${req.body.subjectivity}`
                projectData["confidence"]=`${req.body.confidence}`
                projectData["irony"]=`${req.body.irony}`
                res.send(projectData);
            
    } catch (error) {
        console.log("error occured in server's post data");
    }
});

// my POST route from weather journal 
// app.post('/all', (req, res) => {
//   console.log(req.body);
//   projectData["date"] = `${req.body.date}`;
//   projectData["temp"] = `${req.body.temp}`;
//   projectData["response"] = `${req.body.response}`;
//   res.send(projectData);
// })

//EXAMPLE CODE FROM MEANING CLOUD
/*
const formdata = new FormData();
formdata.append("key", "3579de072e89f52887632392cea60905");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));
*/