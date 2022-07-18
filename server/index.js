const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment} = require('./controller')
const {getHumbled} = require ('./controller')
const {getsubmit} = require ('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/humbled", getHumbled)
//app.get("/api/submit", getsubmit)

app.listen(4000, () => console.log("Server running on 4000"));
