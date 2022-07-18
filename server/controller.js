module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
         res.status(200).send(randomCompliment);
    },
    getHumbled: (req,res)=>{
        const humbled = ["Keep talking, someday you'll say something intelligent","As an outsider, what do you think of the human race?","How did you get here? Did someone leave your cage open?" ] 

        let randomIndex1 = Math.floor(Math.random() * humbled.length);
        let randomhumbled = humbled[randomIndex1];

        res.status(200).send(randomhumbled);

    },
    // getsubmit: (req,res) =>{
    //     const submit = ["You're All Done"]

    //     res.status(200).send(submit)
    // }
}


// const empty = document.form1.text1.value;
// if (empty === ""){
//     alert ("Please inpust a value");
// } else {
//     alert ("You submitted your response");
// }