const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./Database"); 

const app = express();

// middleware
app.use(cors());
app.use(express.json());

require("./router/route")(app);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});