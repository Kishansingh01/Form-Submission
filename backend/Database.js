const mongoose = require("mongoose");
console.log("Before MongoDB connect");

mongoose.connect("mongodb://127.0.0.1:27017/formDB")
  .then(() => console.log("MongoDB connecteddd"))
  .catch(err => console.log(err));
