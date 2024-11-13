import http from "node:http";
import { MongoClient, ObjectId } from "mongodb";
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
      }
    } else if ((req.method = "PUT" && urlParse.pathname.includes("/user"))) {
      const id = urlParse.pathname.split("/")[2];
      let body = "";
      req.on("data", (data) => {
        body += data.toString();
      });
      req.on("end", () => {
        body = JSON.parse(body); //deserializa un json
        updateUser(db, id, body).then((resp) => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(resp));
        });
      });
    } else if ((req.method = "PUT" && urlParse.pathname.includes("/user"))) {
      const id = urlParse.pathname.split("/")[2];
      let body = "";
      req.on("data", (data) => {
        body += data.toString();
      });
      req.on("end", () => {
        body = JSON.parse(body); //deserializa un json
        updateUser(db, id, body).then((resp) => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(resp));
        });
      });
    } else if ((req.method = "DELETE" && urlParse.pathname.includes("/user"))) {
      const id = urlParse.pathname.split("/")[2];
      deleteUser(db, id).then((resp) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(resp));
      });
    }
  });
}

///user/672d7a6df899f165ca59461b

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

async function updateUser(db, id, body) {
  const collection = db.collection("user");
  const query = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: body }
  );
  return query;
}

async function deleteUser(db, id) {
  const collection = db.collection("user");
  const query = await collection.deleteOne({ _id: new ObjectId(id) });
  return query;
}

//escuchar el servidor
function listenServer() {
  servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
}

main();
