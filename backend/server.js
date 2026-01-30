const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./Database"); 

const app = express();

// middleware
app.use(cors());
app.use(express.json());

require("./router/route")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});