//! FUNCION NORMAL
function suma(num1, num2) {
    return num1 + num2;
};
console.log(suma(6, 3));

//! EXPRESIÓN FUNCION
const cuadrado = function (numero) {
    return numero * numero;
};
console.log(cuadrado(7));

//! FUNCIÓN SE LLAMA ASÍ MISMA
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
}
console.log(factorial(5));

//! FUNCIÖN SELF INVOKING ---> no se puede volver a llamar
(function (a, b) {
    console.log("Ejecutando la funcióm: " + (a + b));
})(8, 5);

//! FUNCION FLECHA
const suma = (a, b) => a + b;
console.log(suma(2, 3));

const mensaje = (nombre) => {
    if (nombre === "Ana") {
        return "Hola Ana, ¿cómo estás?";
    } else {
        return "Hola " + nombre + ", bienvenido/a";
    }
};
console.log(mensaje("Ana"));

/*
¿Cuándo usar funciones flecha y funciones normales?
Funciones flecha:
    Funciones simples: ideales para funciones de una sola línea que no necesitan contexto propio.
    Callbacks: especialmente útiles en métodos como map, filter o forEach.
    Eventos: prácticas para definir manejadores de eventos en frameworks como React.
    Promesas: útiles para definir el comportamiento de las promesas.

Funciones normales:
    Funciones complejas: adecuadas para funciones con lógica compleja o que necesitan acceder a su propio contexto.
    Métodos: la forma tradicional de definir métodos en objetos.
    Constructores: para crear objetos con propiedades y métodos personalizados.
    Funciones con nombre: si se necesita referenciar la función posteriormente o usarla como un valor.
*/

//! PARÁMETROS Y ARGUMENTOS
let operacion = function (a, b) { // a y b son los parámetros
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}
resultado = operacion(6, 9, 7); // 6, 9 y 7 son los argumentos
console.log(resultado);