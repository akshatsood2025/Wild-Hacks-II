const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/animal.route');
const mongoose = require('mongoose')

const app = express();

var mongoDB =
  "mongodb+srv://Aadi1110:11102001@cluster0.xs4oo30.mongodb.net/AnimalLocationDB";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Successfully connected to db");
  return;
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
