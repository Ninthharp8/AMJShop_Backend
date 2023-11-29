const app = require("./src/expressConfig");
const db = require("./src/mysql");
const { encryptWithSha1 } = require("./src/sha1Encrypt");
const erouting = require("./src/route_export");

const port = 3000;

// Rutas y lógica de tu aplicación aquí

app.use("/route_externa", erouting);

// Resto del código y configuraciones

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
