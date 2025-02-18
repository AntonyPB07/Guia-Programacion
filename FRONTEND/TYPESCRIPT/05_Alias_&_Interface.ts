//? INTERFACES: Permite definir la estructura y los tipos de datos de un objeto. Proporcionan una forma de describir la forma que debe tener un objeto, 
//?     incluyendo los nombres de sus propiedades y los tipos de datos correspondientes.

//! Se define la interfaz
interface datosPersona {
    nombre: string;
    edad: number;
    ciudad?: string; // Propiedad opcional
}

//! Utilizando la interfaz
function hola(persona: datosPersona) {
    console.log(`Hola, soy ${persona.nombre} y tengo ${persona.edad} años.`);
}
let juan: datosPersona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
hola(juan); // Llamada a la función     'saludar' con un objeto que cumple la interfaz 'Persona'

//! Ejemplo 2
interface User {
    name: string;
    id: number;
}
class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
const user: User = new UserAccount("Murphy", 1);

//! Ejemplo 3 - extends
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

/*
* Las interfaces en TypeScript permiten definir la estructura y los tipos de objetos.
* Se utilizan para establecer contratos o requerimientos que deben cumplir ciertos objetos.
* Pueden incluir propiedades obligatorias, propiedades opcionales, propiedades de solo lectura y métodos.
* Las interfaces pueden extender otras interfaces para heredar propiedades y comportamientos.
* Ayudan a escribir código más robusto y seguro al proporcionar verificación de tipos estática en tiempo de compilación.
*/

//! ALIAS --> permiten definir tipos con un nombre personalizado (un alias).
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}
const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const carro: Car = {
    year: carYear,
    type: carType,
    model: carModel
};