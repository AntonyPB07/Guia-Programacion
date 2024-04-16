//? ARROW FUNCTION : FUNCIONES FLECHA, Ofrecen una forma más concisa y elegante de escribir funciones, especialmente para funciones simples.
//! NO SON ADECUADAS PARA SER USADAS COMO MÉTODOS NI COMO CONSTRUCTORES.


//* Las funciones de flecha nos permiten escribir sintaxis de función más corta:
let myFunction = (a, b) => a * b;

//* Antes de la flecha:
hello = function () {
    return "Hello World!";
}

//* Con función de flecha:
hello = () => {
    return "Hello World!";
}

//* Las funciones de flecha devuelven el valor de forma predeterminada:
hello = () => "Hello World!";

//* Función de flecha con parámetros:
hello = (val) => "Hello " + val;

//* Función de flecha sin paréntesis:
hello = val => "Hello " + val;

/*
? Las funciones flecha NO tienen .THIS
* Las funciones flecha NO tienen un .this propio porque están diseñadas para ser funciones simples y concisas que capturan el contexto léxico del lugar donde se definen.
* Y esto es porque capturan el contexto léxico del lugar donde se definen. Esto significa que el valor de THIS dentro de una función 
*   flecha se determina por el ámbito en el que se define, no por el contexto en el que se ejecuta.
*/

//! Ejemplo de una función normal y una función flecha con el .THIS en ambas.
const persona = {
    nombre: "Juan",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}!`); // "Hola, soy Juan!"
    },
    saludarFlecha: () => {
        console.log(`Hola, soy ${this.nombre}!`); // "Hola, soy undefined!"
    }
};
persona.saludar(); // "Hola, soy Juan!"
persona.saludarFlecha(); // "Hola, soy undefined!"

const saludarPersona = (persona) => {
    console.log(`Hola, soy ${persona.nombre}!`); // "Hola, soy Juan!"
};
saludarPersona(persona);


//! Uso de call(), apply(), y bind() con Funciones Flecha
let nombre = 'Ana';

let funcionFlecha = () => {
    console.log(`Hola, soy ${this.nombre}`);
};

funcionFlecha.call({ nombre: 'Carlos' }); // Hola, soy Ana (this no cambia)
/*
En este ejemplo, aunque intentamos usar call() para cambiar this dentro de la función flecha, this sigue refiriéndose al contexto 
léxico externo donde se definió la función flecha (nombre = 'Ana'), no al objeto pasado como argumento a call().
*/
