/*
? Las funciones ASYNC devuelven promesas automáticamente, y AWAIT pausa la ejecución de una función ASYNC hasta que una promesa se resuelva, 
?   lo que hace que el código asíncrono se comporte de manera más similar a código síncrono.

* ASYNC: Declaración que define una función como asíncrona, lo que significa que automáticamente devuelve una promesa.
* AWAIT: Operador utilizado dentro de funciones async para pausar la ejecución y esperar a que una promesa se resuelva. 
*   Solo puede utilizarse dentro de funciones async.
* Se pueden usar bloques try...catch para manejar errores de las promesas.
*/

//! Ejemplo 1
async function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Datos obtenidos');
        }, 2000); // Simular un retardo de 2 segundos
    });
}
async function procesarDatos() {
    console.log('Iniciando proceso...');
    let datos = await obtenerDatos(); // Esperar a que se resuelva la promesa
    console.log('Datos:', datos);
    console.log('Proceso finalizado');
}
procesarDatos();

//! Ejemplo 2
// Función asíncrona que realiza una solicitud HTTP usando Fetch
async function obtenerDatos() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error; // relanzar el error para manejarlo en el código que llama a esta función
    }
}
// Uso de async/await para manejar la promesa
async function procesarDatos() {
    console.log('Iniciando proceso...');
    try {
        const datos = await obtenerDatos();
        console.log('Datos obtenidos:', datos);
        // Aquí se pueden realizar más operaciones con los datos obtenidos
    } catch (error) {
        console.error('Error al procesar datos:', error);
    }
    console.log('Proceso finalizado');
}
// Llamar a la función async que utiliza await
procesarDatos();
