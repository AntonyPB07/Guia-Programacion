//? CLAUSURAS (closures):  Es la capacidad de una función interna de acceder a variables de su función externa, incluso después de que la función externa haya finalizado su ejecución.

//! Ejemplo 1
function exterior() {
    let mensaje = "Hola"; // Variable local dentro de exterior
    function interior() {
        console.log(mensaje); // Accede a la variable mensaje de exterior
    }
    // Devuelve la función interior, que forma una clausura con mensaje
    return interior;
}
// Asigna la función devuelta por exterior a una variable
let funcionClausurada = exterior();
// Llama a la función clausurada
funcionClausurada(); // Resultado: "Hola"

/*
! Explicación del Ejemplo 1
* La función exterior define una variable local mensaje y luego define una función interna interior que tiene acceso a esta variable mensaje debido a la clausura.
* La función exterior devuelve la función interior, formando así una clausura.
* La variable funcionClausurada ahora contiene la función interior que aún tiene acceso a la variable mensaje a pesar de que exterior ya ha terminado de ejecutarse.
* Al llamar a funcionClausurada(), se imprime "Hola" en la consola porque la función interior todavía tiene acceso a la variable mensaje gracias a la clausura.

! Uso Común de Clausuras
* Encapsulación y Modularidad: Permiten crear funciones internas que pueden acceder a variables privadas de una función externa, proporcionando encapsulación y 
*   modularidad en el código.
* Manejo de Eventos y Callbacks: Las clausuras son comunes en el manejo de eventos y callbacks, donde una función interna puede recordar ciertas variables incluso 
*   después de que el evento haya ocurrido o la función externa haya terminado su ejecución.
* Iteradores y Generadores: Los iteradores y generadores en JavaScript a menudo utilizan clausuras para mantener el estado interno y permitir iteraciones controladas.
*/