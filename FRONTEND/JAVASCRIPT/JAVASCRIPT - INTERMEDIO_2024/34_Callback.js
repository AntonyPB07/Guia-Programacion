/*
? Callback: es una función que se pasa como argumento a otra función. 
?   Esta función externa la invoca en un momento posterior para completar una tarea o acción específica.

* Funciones de orden superior: Las funciones que aceptan otras funciones como argumentos se llaman funciones de orden superior. 
*   Son las que permiten trabajar con callbacks.

* Asincronía: Los callbacks son muy utilizados en la programación asincrona. Esto significa que la función externa puede continuar 
*   ejecutándose mientras la función callback se ejecuta en algún momento en el futuro (por ejemplo, después de que se complete una 
*   operación que toma tiempo como peticiones http, temporizadores, eventos del DOM).

* Manejo de errores: En ocasiones, el primer argumento de la función callback se reserva para manejar posibles errores. Si ocurre 
*   un error, la función callback se llamará con el error como argumento. De lo contrario, se llamará con el resultado exitoso de la operación.
*/

//! Ejemplo Callback no asíncrono
function saludar(nombre, callback) {
    console.log("Hola " + nombre);
    callback();
}
function despedirse() {
    console.log("Adios!");
}
saludar("Juan", despedirse); // Salida: Hola Juan, Adios!

//! Ejemplo Callback asíncrono
function obtenerUsuario(id, callback) {
    setTimeout(() => {
        const usuario = { nombre: "Juan", apellido: "Pérez" };
        callback(usuario);
    }, 2000);
}
obtenerUsuario(123, (usuario) => {
    console.log(`Nombre: ${usuario.nombre} ${usuario.apellido}`); // Salida: "Nombre: Juan Pérez"
});
