//? REST: Denotado por ...nombreParametro, permite capturar un número variable de argumentos de una función en forma de un array.

//! Sintaxis de REST
function nombreFuncion(...nombreParametro) {
    // Cuerpo de la función usando nombreParametro como array
}

//! Ejemplo 1
function sumar(...numeros) {
    let resultado = 0;

    // Iterar sobre el array de números utilizando forEach
    numeros.forEach(numero => {
        resultado += numero;
    });

    return resultado;
}

// Llamar a la función sumar con diferentes números de argumentos
console.log(sumar(1, 2)); // Resultado: 3
console.log(sumar(1, 2, 3, 4)); // Resultado: 10
console.log(sumar(5, 10, 15, 20, 25)); // Resultado: 75

/*
! Restricciones y Consideraciones:
* Al utilizar el parámetro REST, ten en cuenta lo siguiente:
* El parámetro REST debe ser el último parámetro en la lista de parámetros de una función, ya que captura todos los argumentos restantes después de los 
*   parámetros definidos explícitamente.
* El parámetro REST recoge todos los argumentos restantes en forma de array, incluso si no se pasa ningún argumento a la función (en ese caso, el array estará vacío).
*/