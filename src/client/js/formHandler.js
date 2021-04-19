import 'babel-polyfill'


let endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=3579de072e89f52887632392cea60905&url=`


 const getAPI = async (url) => {
    const result = await fetch(endpoint + url + "&lang=en")
    try {
        const finalRes = await result.json();
        console.log(finalRes)
        return finalRes;
    }
    catch (err) {
        console.error(err)
    }
}

document.getElementById('sub').addEventListener('click', () => {
    let url = document.getElementById('url').value;
    getAPI(url)
        .then(() => {
            entry = {
                text: results.data.sentence_list[0].text,
                score_tag: results.data.score_tag,
                agreement: results.data.agreement,
                subjectivity: results.data.subjectivity,
                confidence: results.data.confidence,
                irony: results.data.irony,
            }
            console.log(entry)
            postData('/all', entry)
            UpdateUi();
        })

});

const   UpdateUi = async()=>{
    const request = await fetch ('/all')
    try{
        const Data = await request.json();
        document.getElementById('text').innerHTML = `${Data.text}`
        document.getElementById('score_tag').innerHTML = `${Data.score_tag}`
        document.getElementById('agreement').innerHTML = `${Data.agreement}`
        document.getElementById('subjectivity').innerHTML = `${Data.subjectivity}`
        document.getElementById('confidence').innerHTML = `${Data.confidence}`
        document.getElementById('irony').innerHTML = `${Data.irony}`
    }catch(error){console.log("error", error)}
}

const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value

//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => {
//         return res.json()
//     })
//     .then(function(data) {
//         document.getElementById('results').innerHTML = data.message
//     })
// }

 export {getAPI}