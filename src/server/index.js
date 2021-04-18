const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static('dist'))

//GETs
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

app.listen(8081, function () {
    console.log('listening on port 8081!')
})
//POST
app.post("/analysis", async (req, res) => {

    const endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`;
    try {
        const response = await fetch(endpoint)
            .then(res => {
                return res.json()
            }).then(function (results) {
                const data = {
                    text: results.data.sentence_list[0].text,
                    score_tag: results.data.score_tag,
                    agreement: results.data.agreement,
                    subjectivity: results.data.subjectivity,
                    confidence: results.data.confidence,
                    irony: results.data.irony,
                };
                res.send(data);
            })
    } catch (error) {
        console.log(error.message);
    }
});



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