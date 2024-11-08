import http from "node:http";

//api
var servidor = "";
//crear un servidor
function main() {
  crearServidor();
  escucharServidor();
}

const estudiantes = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "perez",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Lopez",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
  },
  {
    id: 4,
    nombre: "Luis",
    apellido: "Gonzalez",
  },
];

function crearServidor() {
  servidor = http.createServer((req, res) => {
    console.log("url: ", req.url);
    console.log("method: ", req.method);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(estudiantes)); //serializar en json
  });
}

//escuchar el servidor
function escucharServidor() {
  servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
}
main();
