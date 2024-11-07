/*
2-> MODULOS DE TERCEROS -
se instalan mediante npm
*/
//variables de entorno para la app - dotenviroment

import dotenv from "dotenv";
dotenv.config();

console.log("base de datos", process.env.URL_BASE_DATOS);
console.log("base de datos", process.env.NOMBRE_APP);
