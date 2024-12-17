//variables
var esPensionado = false;
var edad = 19;
var nombre = "Juan";
var cedula = 1445454;
//condicionales
if (edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}
//estructuras datos: tuplas
var listaNumeros = [1, 2, 3, 4, 5];
var nombreEdad = ["Juan", 20];
//ciclos
for (var i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}
//enumeraciones
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var color;
color = Color.Verde;
console.log(color);
function saludar(persona) {
    console.log("Hola ".concat(persona.nombre));
}
saludar({ nombre: "Juan", edad: 20, cedula: 1445454 });
//clases
var Saludo = /** @class */ (function () {
    function Saludo(nombre) {
        this.nombre = nombre;
    }
    Saludo.prototype.saludar = function () {
        return "Hola ".concat(this.nombre);
    };
    return Saludo;
}());
var saludo = new Saludo("jhon");
console.log(saludo);
