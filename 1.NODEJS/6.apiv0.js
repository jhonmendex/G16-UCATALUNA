import http from "node:http";
import { MongoClient } from "mongodb";
import url from "node:url";

const uriDataBase =
  "mongodb+srv://FS15:123@clusterfs16.qlofw.mongodb.net/?retryWrites=true&w=majority&appName=Clusterfs16";

const client = new MongoClient(uriDataBase);
const dataBaseName = "bookshop";

var servidor = "";

async function main() {
  await client.connect();
  console.log("Conectado al cluster...");
  const db = client.db(dataBaseName);
  console.log("Conectado a la base de datos...");
  createServer(db);
  listenServer();
}

function createServer(db) {
  servidor = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    //console.log(urlParse);

    if (urlParse.pathname == "/user") {
      switch (req.method) {
        case "GET":
          getUsers(db)
            .then((user) => {
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify(user)); //serializar en json
            })
            .catch((error) => {
              console.log(error);
            });
          break;
        case "POST":
          let body = "";
          req.on("data", (data) => {
            body += data.toString();
          });
          req.on("end", () => {
            body = JSON.parse(body); //deserializa un json
            createUser(db, body).then((resp) => {
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify(resp));
            });
          });
          break;
        case "PUT":
          updateUser();
          break;
        case "DELETE":
          deleteUser();
          break;
        default:
          break;
      }
    }
  });
}

async function getUsers(db) {
  const collection = db.collection("user");
  const users = await collection.find().toArray();
  return users;
}

async function createUser(db, body) {
  const collection = db.collection("user");
  const query = await collection.insertOne(body);
  return query;
}

function updateUser() {}

function deleteUser() {}

//escuchar el servidor
function listenServer() {
  servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
}

main();
