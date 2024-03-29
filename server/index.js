const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");
const { getHumbled } = require("./controller");
const { getsubmit } = require("./controller");
const { getFortune } = require("./controller");
const { createfeeling } = require("./controller");
const { deleteFeeling } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/humbled", getHumbled);
app.get("/api/fortune", getFortune);
app.post("/api/submit", getsubmit);
app.post("/api/feelings", createfeeling);
app.delete("/api/feelings/:id", deleteFeeling);

app.listen(4000, () => console.log("Server running on 4000"));
