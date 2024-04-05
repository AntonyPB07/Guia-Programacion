/*
? setTimeout(): Esta función ejecuta una función específica después de un retraso especificado, en milisegundos. Después de que se completa el 
? tiempo de espera, la función especificada se ejecuta una vez.

? setInterval(): Esta función ejecuta una función específica repetidamente, cada cierto intervalo de tiempo, también especificado en milisegundos.
*/

let timeoutId = setTimeout(function () {
    console.log("¡Han pasado 2 segundos!");
}, 2000);

// Luego de 1 segundo, cancelamos el temporizador
setTimeout(function () {
    clearTimeout(timeoutId);
    console.log("El temporizador ha sido cancelado.");
}, 1000);

let intervalId = setInterval(function () {
    console.log("Este mensaje se imprimirá cada segundo.");
}, 1000);

// Luego de 5 segundos, cancelamos el temporizador
setTimeout(function () {
    clearInterval(intervalId);
    console.log("El temporizador ha sido cancelado.");
}, 5000);