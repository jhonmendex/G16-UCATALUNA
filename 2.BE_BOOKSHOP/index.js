import express, { json } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/v1/userRoutes.js";
import bookRoutes from "./routes/v1/bookRoutes.js";
import authorRoutes from "./routes/v1/authorRoutes.js";
import editorialRoutes from "./routes/v1/editorialRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//crear servidor
const app = express();
dotenv.config();

//midleware formato json
//verificar cookies
app.use(cookieParser());
app.use(
  cors({
    origin: "*", // Permite solicitudes solo desde http://example.com
    methods: "GET,POST,PUT,DELETE", // Métodos HTTP permitidos
    allowedHeaders: "Content-Type,Authorization", // Encabezados permitidos
    credentials: true, // Permite el envío de cookies y encabezados de autenticación
  })
);
//routing
app.use(json());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/author", authorRoutes);
app.use("/api/v1/editorial", editorialRoutes);

//midlewares
app.use((req, res) => {
  res.status(404).json({
    error: {
      status: 400,
      message: "string",
    },
  });
});

//esuchar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
