//archivos lectura sincrona

import { readFileSync } from "node:fs";
import { readFile } from "node:fs";
import FileReader from "node:fs";

const archivo1 = readFileSync("./archivos/archivo1.txt", "utf-8");
const archivo2 = readFileSync("./archivos/archivo2.txt", "utf-8");

readFile("./archivos/archivo1.txt", "utf-8", (err, text) => {
  console.log("archivo 3", text);
});

console.log("archivo 1", archivo1);
console.log("archivo 1", archivo2);

//lectura archivos json
const estudiantes = readFileSync("./archivos/estudiantes.json", "utf-8");

console.log(estudiantes[0].nombre);
//convertir json a js (deserializar archivo json)
const estudiantesJS = JSON.parse(estudiantes);
console.log(estudiantesJS[0].nombre);

//convertir objeto a json (serializar)

const estudiantesLista = [
  {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingenieria de Sistemas",
  },
  {
    nombre: "Maria",
    edad: 22,
    carrera: "Ingenieria de Sistemas",
  },
  {
    nombre: "Pedro",
    edad: 21,
    carrera: "Ingenieria de Sistemas",
  },
];

const estudiantesJson = JSON.stringify(estudiantesLista);

FileReader.writeFileSync(
  "./archivos/estudiantes.json",
  estudiantesJson,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo creado");
    }
  }
);
