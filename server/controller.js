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
    getFortune: (req, res) => {
        const fortunes = ["All we have to decide is what to do with the time given to us", "It is never too late to be what you might have been","Every new begining comes from some other beginning's end."];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
   
    getsubmit: (req,res) =>{
        const submit = ["You're All Done"]

        res.status(200).send(submit)
    },
    getFeeling: (req,res) => {
        res.status(200).send(feelings)
    }, 
    deleteFeeling: (req,res) => {
        let index = feelings.findindex(elm => elem.id === +req.params.id)
        feelings.splic(index, 1)
        res.staus(200).send(feelings)
    },
    updateFeeling: (req,res) => {
        const {type} = req.body;
        let index = feeling.findindex(elem => elem.id === +req.params.id);
        res.status(200).send(goals);
    }, 
    createfeeling: (req,res) => {
        console.log(req.body)
        const {title} = req.body;
        let newFeeling = {
            id:globalID,
            titleLtitle
        }
        feeling.push(newFeeling);
        globalID++;
        res.status(200).send(feeling)
    }
}


// const empty = document.form1.text1.value;
// if (empty === ""){
//     alert ("Please inpust a value");
// } else {
//     alert ("You submitted your response");
// }