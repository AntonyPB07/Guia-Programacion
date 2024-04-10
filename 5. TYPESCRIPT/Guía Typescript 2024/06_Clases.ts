//! CREACIÓN CLASE
class clasePersona {
    nombre: string;
    edad: number
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

//! CREACIÓN INSTANCIA
let tony = new clasePersona("Juan", 30);
tony.saludar(); // Salida: Hola, soy Juan y tengo 30 años.

//! HERENCIA DE CLASES
class Empleado extends clasePersona {
    salario: number;
    constructor(nombre: string, edad: number, salario: number) {
        super(nombre, edad); // Llamada al constructor de la clase base (Persona)
        this.salario = salario;
    }
    trabajar() {
        console.log(`${this.nombre} está trabajando.`);
    }
}

//! ENCAPSULAMIENTO
class datesPersona {
    private nombre: string;
    protected edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    public saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
let antony = new datesPersona("Juan", 30);
antony.saludar(); // Acceso público al método saludar
console.log(juan.nombre); // Error: 'nombre' es privado y solo accesible dentro de la clase Persona
console.log(juan.edad); // Error: 'edad' es protegido y solo accesible dentro de la clase Persona y sus subclases

//! POLIMORFISMO
class Animal {
    hablar() {
        console.log("Habla un animal");
    }
}
class Perro extends Animal {
    hablar() {
        console.log("Guau! Soy un perro");
    }
}
class Gato extends Animal {
    hablar() {
        console.log("Miau! Soy un gato");
    }
}
let miPerro = new Perro();
let miGato = new Gato();
miPerro.hablar(); // Salida: "Guau! Soy un perro"
miGato.hablar(); // Salida: "Miau! Soy un gato"
