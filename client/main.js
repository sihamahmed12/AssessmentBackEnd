//const { default: axios } = require("axios");



const feelingContainer = document.querySelector('#feeling-container')
const form = document.querySelector('form')
const initialURL=(`http://localhost:4000/api/feelings`)

const complimentBtn = document.getElementById("complimentButton")
const humbledBtn = document.getElementById("humbledButton")
const getSubmitBtn = document.getElementById('getSubmit')
const fortuneBtn = document.getElementById("fortuneButton");

const feelingsCallback = ({data: feelings}) => deisplyFeelings(feelings)
const errCallback = err => console.log(err.res.data)

const getALLFeeling = () => axios.get(initialURL).then(feelingCallback).catch(errCallback) 
const creatfeeling = () => body => axios.post(initialURL, body).then(feelingCallback).catch(errCallback)
const deleteFeeling = id => axios.delete(`${initialURL}/${id}`).then(feelingCallback).catch(errCallback)
const updateFeeling = (id, type) => axios.put(`${initialURL}/${id}`, {type}).then(feelingCallback).catch(errCallback)



function submitHandler (event) {
    event.preventDefault() 
    let title = document.querySelector('#title')

    let bodyobj = {
        title: title.ariaValueMax,
    }
    creatfeeling( bodyobj)

    title.value =''
}

function createFeeling(feeling){
    const feelingcard = document.createElement('div')
    feelingcard.classList.add('feeling-card')

    feelingcard.innerHTEML = `<p class="feeling-title">${feeling.title}</p>
    <div class="btns-container"></div>
    <button onclick="deletefeeling(${feeling.id})">delete</button>`
}

function displayFeeling(arr){
    feelingContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i ++){
        createFeeling(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getHumbled = () =>{
    axios.get("http://localhost:4000/api/humbled/")
    .then(res=> {
        const data = res.data;
        alert(data);
    })
}; 


const getFortune = () =>{
    axios.get("http://localhost:4000/api/fortune/").then(res => {
        const data = res.data;
        alert(data);
    });

};

complimentBtn.addEventListener('click', getCompliment)
humbledBtn.addEventListener('click', getHumbled)
getSubmitBtn.addEventListener('click', getSubmit)
fortuneBtn.addEventListener('click', getFortune);




