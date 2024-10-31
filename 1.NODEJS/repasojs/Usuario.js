class Usuario {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  saludar() {
    console.log(`hola ${this.email}`);
  }
}

const usuario = new Usuario("jhon@gmail.com", "123456");
console.log(usuario.email);

const estudiante = new Object();
estudiante.nombre = "jhon";
estudiante.apellido = "mendez";
estudiante.saludo = () => {
  console.log("hola todos");
};

console.log(estudiante.nombre);
console.log(estudiante.saludo());

const libro = {
  titulo: "El principito",
  autor: "Antoine de Saint-Exupery",
  año: 1943,
  genero: "Novela",
  imprimir: () => {
    console.log("imprimir libro");
  },
};

console.log(libro.titulo);
console.log(libro.imprimir());

//prototipo
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
Persona.prototype.saludar = (nombre) => {
  console.log(`hola ${nombre}`);
};
const persona = new Persona("jhon", 25);
persona.apellido = "mendez";
console.log(persona.saludar(persona.nombre));
