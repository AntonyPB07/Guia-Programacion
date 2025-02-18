//? RECURSIVIDAD: una función que se llama a sí misma de forma repetida para resolver un problema o realizar un cálculo. 

//! Ejemplo 1
function factorial(n) {
    // Caso base: factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Llamada recursiva: n * factorial(n - 1)
        return n * factorial(n - 1);
    }
}
// Calculando el factorial de 5 (5!)
console.log(factorial(5)); // Resultado: 120 (5 * 4 * 3 * 2 * 1)

//! Ejemplo 2
let cuentaAtras = numero => {
    // caso base
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5)); // 5, 4, 3, 2, 1
