import 'babel-polyfill'
import { UpdateUi } from "./update"



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
// using this method to check if the input is an actual URL 
const regURL = (url) => {
    var pattern = new RegExp(
        // RegEx is "borrowed" from stack over flow  (just for the lack of experience on the topic)
        "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
        "i"
    );
    return !!pattern.test(url);
};


const handleSubmit = async () => {
    const url = document.getElementById("url").value;
    if (regURL(url)) {
        const data = await postData('/all', { url: url })
        UpdateUi(data);
    } else {
        alert("invalid URL");
    }

}
// had to encase it here to avoid e1 being undefiend so i wait until it's fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const e1 = document.getElementById("sub");
    e1.addEventListener("click", handleSubmit);
}) 
export{handleSubmit ,regURL,postData }