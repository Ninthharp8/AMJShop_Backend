// database.js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "tienda",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL: " + err.stack);
    return;
  }
  console.log("Conexión a MySQL establecida con el ID " + connection.threadId);
});

module.exports = connection;
