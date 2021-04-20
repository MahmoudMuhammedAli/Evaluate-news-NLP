import 'babel-polyfill'
import {UpdateUi} from "./update"



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


export const handleSubmit = async () => {
    const url = document.getElementById("url").value;
    console.log(url)
    const data = await postData('/all', { url: url })
    UpdateUi(data);
}
 document.getElementById("sub").addEventListener("click", handleSubmit);

