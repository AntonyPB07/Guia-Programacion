/*
? Memoization: es una técnica de optimización utilizada en programación para mejorar el rendimiento al almacenar en caché los resultados 
?   de funciones costosas en memoria y devolver el resultado almacenado cuando se vuelva a llamar la función con los mismos parámetros. 
?   Se puede implementar la memoización de funciones de varias formas, utilizando principalmente el concepto de closures y estructuras de 
?   datos como objetos o mapas.
 */

//! Método 1: Memoización manual con closures
/*En este método, puedes crear una función que devuelva otra función que realizará la memoización. Utilizarás un objeto o un mapa para 
almacenar en caché los resultados de las llamadas anteriores.*/
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            console.log(`Calculando el resultado para ${args}`);
            cache[key] = func(...args);
        }
        return cache[key];
    };
}
// Ejemplo de función costosa a memoizar
function sum(a, b) {
    console.log('Ejecutando sum(', a, ',', b, ')');
    return a + b;
}
// Aplicar memoización a la función sum
const memoizedSum = memoize(sum);
// Ejecutar la función memoizada
console.log(memoizedSum(3, 4)); // Calculando el resultado para [3,4], resultado: 7
console.log(memoizedSum(3, 4)); // Usando el resultado en caché, resultado: 7
console.log(memoizedSum(5, 6)); // Calculando el resultado para [5,6], resultado: 11
console.log(memoizedSum(5, 6)); // Usando el resultado en caché, resultado: 11

//! Método 2: Uso de un Map para memoización
// Este método utiliza un objeto Map en lugar de un objeto normal para almacenar los resultados en caché.
function memoize(func) {
    const cache = new Map();
    return function(...args) {
        const key = args.join(',');
        if (!cache.has(key)) {
            console.log(`Calculando el resultado para ${args}`);
            cache.set(key, func(...args));
        }
        return cache.get(key);
    };
}
// Ejemplo de función costosa a memoizar
function factorial(n) {
    console.log('Ejecutando factorial(', n, ')');
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// Aplicar memoización a la función factorial
const memoizedFactorial = memoize(factorial);
// Ejecutar la función memoizada
console.log(memoizedFactorial(5)); // Calculando el resultado para 5, resultado: 120
console.log(memoizedFactorial(5)); // Usando el resultado en caché, resultado: 120
console.log(memoizedFactorial(3)); // Calculando el resultado para 3, resultado: 6
console.log(memoizedFactorial(3)); // Usando el resultado en caché, resultado: 6
