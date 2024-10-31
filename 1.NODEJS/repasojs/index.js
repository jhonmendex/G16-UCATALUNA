//variables, condicionales, ciclos, estructuras de datos, funciones, objetos.

let nombre = "Juan"; //local
const PI = 3.1416; //constante
var edad = 25; //global

let numero1 = 1;
let numero2 = "1";

if (numero1 === numero2) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}

listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(listaNumeros[0]);

listaNumeros.forEach((numero) => {
  console.log(numero);
});

const listaPares = listaNumeros.map((numero) => {
  if (numero % 2 === 0) {
    return numero;
  }
});

//console.log(listaPares);

function suma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(`la suma es ${suma(1, 2)} ${listaPares}..`);

const resta = (numero1, numero2) => {
  return numero1 - numero2;
};

console.log(`la resta es ${resta(1, 2)}`);

//funciones autoinvocables
(() => {
  console.log("Hola mundo");
})();
