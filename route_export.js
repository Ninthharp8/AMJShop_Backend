// route_export.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Ruta externa: Prueba node.js & mysql");
});

router.get("/about", (req, res) => {
  res.send("Acerca de la ruta externa");
});

module.exports = router;
