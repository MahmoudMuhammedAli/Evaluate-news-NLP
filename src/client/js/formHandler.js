import 'babel-polyfill'


export const handleSubmit = async () => {
    console.log("HANDELSUBMIT is envoked!!!");
    const url = document.getElementById("url").value;
    console.log(url)
    const data = await postData('/all', { url: url })
    UpdateUi(data);
};


const el = document.getElementById("sub");
el.addEventListener("click", handleSubmit);

const postData = async (url = '', data = {}) => {
    console.log("your now in post data" + data.url)
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


const UpdateUi = async () => {
    const request = fetch('/all')
    // why is it returning 404!!!
    // it's comming back with the data there is no need to json it
    console.log("you're in updateUI")
    try {
        document.getElementById('text').innerHTML = `${request.text}`
        document.getElementById('score_tag').innerHTML = `${request.score_tag}`
        document.getElementById('agreement').innerHTML = `${request.agreement}`
        document.getElementById('subjectivity').innerHTML = `${request.subjectivity}`
        document.getElementById('confidence').innerHTML = `${request.confidence}`
        document.getElementById('irony').innerHTML = `${request.irony}`
    } catch (error) { console.log("error", error) }
}




//  const getAPI = async (url) => {
//     const result = await fetch(endpoint + url + "&lang=en")
//     try {
//         const finalRes = await result.json();
//         console.log(finalRes)
//         return finalRes;
//     }
//     catch (err) {
//         console.error(err)
//     }
// }

// document.getElementById('sub').addEventListener('click', () => {
//     let url = document.getElementById('url').value;
//     getAPI(url)
//         .then((res) => {
//             entry = {

//                 score_tag: res.score_tag,
//                 agreement: res.agreement,
//                 subjectivity: res.subjectivity,
//                 confidence: res.confidence,
//                 irony: res.irony,
//             }
//             postData('/all', url)
//             UpdateUi();
//         })


