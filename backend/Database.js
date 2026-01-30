// const mongoose = require("mongoose");
// console.log("Before MongoDB connect");

// mongoose.connect("mongodb://127.0.0.1:27017/formDB")
//   .then(() => console.log("MongoDB connecteddd"))
//   .catch(err => console.log(err));

const mongoose = require("mongoose");
require("dotenv").config();

console.log("Before MongoDB connect");

const mongoURI = process.env.MONGODB_URI;
console.log("Mongo URI:", process.env.MONGODB_URI);


mongoose

  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

  // mongodb+srv://kishansingh9006866:ro5yRwVhQwnV9JM2@cluster0.sy5p0.mongodb.net/?appName=Cluster0