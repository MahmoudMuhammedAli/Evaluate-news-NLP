const UpdateUi = async (request) => {
    try {
        document.getElementById('text').innerHTML = `${request.text}`
        document.getElementById('score').innerHTML = `${request.score_tag}`
        document.getElementById('agreement').innerHTML = `${request.agreement}`
        document.getElementById('subjectivity').innerHTML = `${request.subjectivity}`
        document.getElementById('confidence').innerHTML = `${request.confidence}`
        document.getElementById('irony').innerHTML = `${request.irony}`
    } catch (error) { console.log("error", error) }
}
export{UpdateUi}