//? GENÉRICOS: Son una característica poderosa que te permite escribir código flexible y reutilizable al trabajar con tipos de datos. Los genéricos 
//?     permiten definir funciones, clases o interfaces que pueden trabajar con diferentes tipos de datos, manteniendo al mismo tiempo la integridad del tipo. 

// Función genérica que recibe un argumento de tipo T y lo devuelve como string
function imprimirValor<T>(valor: T): void {
    console.log(`El valor es: ${valor}`);
}
// Uso de la función genérica con diferentes tipos
imprimirValor<number>(10); // Salida: El valor es: 10
imprimirValor<string>("Hola"); // Salida: El valor es: Hola
imprimirValor<boolean>(true); // Salida: El valor es: true


// Clase genérica que almacena un valor de tipo T
class Caja<T> {
    private valor: T;
    constructor(valor: T) {
        this.valor = valor;
    }
    obtenerValor(): T {
        return this.valor;
    }
}
// Uso de la clase genérica con diferentes tipos
let cajaNumero = new Caja<number>(100);
console.log(cajaNumero.obtenerValor()); // Salida: 100
let cajaTexto = new Caja<string>("Hola");
console.log(cajaTexto.obtenerValor()); // Salida: Hola


// Función genérica que suma dos valores de tipo numérico
// function suma<T extends number>(a: T, b: T): T {
//     return a + b;
// }

//console.log(suma(10, 20)); // Salida: 30
// console.log(suma("10", "20")); // Error: Argument of type '"10"' is not assignable to parameter of type 'number'
