//const { default: axios } = require("axios");

const { default: axios } = require("axios");

const complimentBtn = document.getElementById("complimentButton")
const humbledBtn = document.getElementById("humbledButton")
const getSubmitBtn = document.getElementById('getSubmit')

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

const getSubmit = () =>{
    axios.get("http://localhost:4000/api/submit/")
    .then(res => {
        const data = res.data;
        alreat(data);
    })

}



complimentBtn.addEventListener('click', getCompliment)
humbledBtn.addEventListener('click', getHumbled)
getSubmitBtn.addEventListener('click', getSubmit)




