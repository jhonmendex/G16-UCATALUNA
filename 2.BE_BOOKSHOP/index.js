import express, { json } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/v1/userRoutes.js";
//crear servidor
const app = express();
dotenv.config();

//routing
app.use("/api/v1/user", userRoutes);

//midlewares
app.use(json());
app.use((req, res) => {
  res.status(404).send("Not found");
});

//esuchar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
