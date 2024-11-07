import http from "node:http";

//api
var servidor = "";
//crear un servidor
function main() {
  crearServidor();
  escucharServidor();
}

function crearServidor() {
  servidor = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo");
  });
}

//escuchar el servidor
function escucharServidor() {
  servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
}
main();
