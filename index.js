// importing node framework
const express = require("express");

const app = express();

const mongoose = require("mongoose");

var uri = "mongodb://45.77.40.117:27017/details";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// Respond with "Hello World via Github Actions" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World via Github Actions");
});

app.get("/test", function (req, res) {
 return res.send("new api");
});


app.get("/thai", function (req, res) {
 return res.send("Thai da code api nay");
});


app.get("/tuan", function (req, res) {
 return res.send("Tuan da sua code");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;
