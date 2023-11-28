const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const sha1 = require("sha1");
const ip = require("ip");

const app = express();
const port = 3000;

// Configurar body-parser para procesar datos en los requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "AMJShop",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL: " + err.stack);
    return;
  }
  console.log("Conexión a MySQL establecida con el ID " + connection.threadId);
});

// Rutas y lógica de tu aplicación aquí

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
