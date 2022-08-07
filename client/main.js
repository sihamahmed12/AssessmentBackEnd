//const { default: axios } = require("axios");

const feelingContainer = document.querySelector("#feeling-container");
const form = document.querySelector("form");
const initialURL = `http://localhost:4000/api/feelings`;

const complimentBtn = document.getElementById("complimentButton");
const humbledBtn = document.getElementById("humbledButton");
const getSubmitBtn = document.getElementById("submitBtn");
const fortuneBtn = document.getElementById("fortuneButton");

const feelingsCallback = (res) => displayFeeling(res.data);
const errCallback = (err) => console.log(err); // Originally was `err.response.data` which was correct, but I changed it to handle errors from both axios and the browser in general

const getALLFeeling = () => axios.get(initialURL).then(feelingsCallback).catch(errCallback);
const creatfeeling = (body) => axios.post(initialURL, body).then(feelingsCallback).catch(errCallback);
const deleteFeeling = (id) => axios.delete(`${initialURL}/${id}`).then(feelingsCallback).catch(errCallback);
const updateFeeling = (id, type) =>
    axios.put(`${initialURL}/${id}`, { type }).then(feelingsCallback).catch(errCallback);

function submitHandler(event) {
    event.preventDefault();
    let title = document.querySelector("#title");

    let bodyobj = {
        title: title.value
    };
    creatfeeling(bodyobj);

    title.value = "";
}

function createFeeling(feeling) {
    const feelingcard = document.createElement("div");
    feelingcard.classList.add("feeling-card");

    feelingcard.innerHTML = `<p class="feeling-title">${feeling.title}</p>
    <div class="btns-container"></div>
    <button onclick="deleteFeeling(${feeling.id})">delete</button>`;

    feelingContainer.appendChild(feelingcard)
}

function displayFeeling(arr) {
    feelingContainer.innerHTML = ``;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        createFeeling(arr[i]);
    }
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

const getHumbled = () => {
    axios.get("http://localhost:4000/api/humbled/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener("click", getCompliment);
humbledBtn.addEventListener("click", getHumbled);
form.addEventListener("submit", submitHandler);
fortuneBtn.addEventListener("click", getFortune);
