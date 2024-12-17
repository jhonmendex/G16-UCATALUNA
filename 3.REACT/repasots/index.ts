//variables
let esPensionado:boolean = false
let edad:number = 19
let nombre:string = "Juan"
let cedula:any = 1445454
//condicionales
if(edad >= 18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}
//estructuras datos: tuplas
let listaNumeros:number[] = [1,2,3,4,5]
let nombreEdad:[string, number] = ["Juan", 20]
//ciclos
for(let i=0; i<listaNumeros.length; i++){
    console.log(listaNumeros[i])
}
//enumeraciones
enum Color {
    Rojo,
    Verde,
    Azul
}

let color:Color;
color = Color.Verde
console.log(color)
//interfaces
interface Persona{
    nombre:string,
    edad:number,
    cedula:any
}
interface IAcariciar{
    acariciar():void
}

function saludar(persona:Persona):void{
    console.log(`Hola ${persona.nombre}`)
}

saludar({nombre:"Juan", edad:20, cedula:1445454})

//clases
class Saludo{
    private nombre:string
    constructor(nombre:string){
        this.nombre = nombre
    }
    saludar():string{
        return `Hola ${this.nombre}`
    }
}

let saludo:Saludo = new Saludo("jhon")
console.log(saludo)