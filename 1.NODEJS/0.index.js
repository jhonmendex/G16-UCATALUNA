/*
0 -> MODULOS PROPIOS DE NODE

*/

//importacion de nombre directo
import { suma, resta, multiplicacion, division } from "./0.operaciones.js";
//importacion con objetos por defecto
import miModulo from "./0.operaciones2.js";
import Usuario from "./0.Usuario.js";
console.log(suma(2, 3));
console.log(resta(2, 3));
console.log(multiplicacion(2, 3));
console.log(division(2, 3));

console.log(miModulo.calcularArea(2, 3));
console.log(miModulo.mostrarMensaje("Hola mundo"));

const usuario = new Usuario("Juan", "12456");
console.log(usuario);
