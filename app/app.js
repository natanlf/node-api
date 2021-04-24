const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const clientRoutes = require("./routes/clients");

const app = express();

mongoose
  .connect(
    "mongodb+srv://natanlf:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.u82vc.mongodb.net/myFirstDatabase"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next(); //se o next, não chamamos o próximo Middleware e ao chamar no browser fica carregando infinitamente
});


app.use('/api/clients', clientRoutes);

module.exports = app; //exporta todos os middlewares