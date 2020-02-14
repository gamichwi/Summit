require("dotenv").config();
const fs = require('fs'); //interact with files.. delete etc.
const path = require('path'); //absolute path
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const summitsRoutes = require("./routes/summits-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();
app.use(express.static('frontend'));

app.use(bodyParser.json());

//for all urls related to images middleware
app.use('/uploads/images', express.static(path.join('uploads','images')));

// headers to be added to the responses to avoid CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //star allows every domain to send
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); //Which headers to be handled on incoming requests
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE'); //allow http requests

  next();
});

app.use("/api/summits", summitsRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (req.file) { //added file property from multer
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });//deletes file
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error has occured." });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-z3zxc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
