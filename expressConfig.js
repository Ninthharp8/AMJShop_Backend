// expressConfig.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Configurar body-parser para procesar datos en los requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
