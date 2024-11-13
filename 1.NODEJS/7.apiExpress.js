import express, { json } from "express";

//crear servidor
const app = express();

//objetos de prueba
const users = [
  {
    id: 1,
    email: "Juan@gmail",
    password: "123",
  },
  {
    id: 2,
    email: "Maria@gmail.com",
    password: "4556",
  },
];

//midlewares
app.use(json());
app.use((req, res) => {
  res.status(404).send("Not found");
});

//peticiones y respuestas de http
app.get("/user", (req, res) => {
  res.json(users);
});
app.post("/user", (req, res) => {
  const body = req.body;
  users.push(body);
  res.json(users);
});
//esuchar el servidor

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
