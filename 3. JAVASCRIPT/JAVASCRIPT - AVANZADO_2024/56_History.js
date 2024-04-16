//? HISTORY: Proporciona una interfaz para interactuar con el historial del navegador del usuario (acceder y manipular las entradas en el historial de navegación del usuario).

//! Métodos y Propiedades del Objeto history
//* back()
//    El método back() te permite navegar hacia atrás en el historial del navegador, esencialmente equivalente a hacer clic en el botón "Atrás" del navegador.*/
window.history.back();

//* forward()
//    Permite navegar hacia adelante en el historial del navegador, esencialmente equivalente a hacer clic en el botón "Adelante" del navegador.
window.history.forward();

//* go()
//    Permite navegar hacia adelante o hacia atrás en el historial del navegador. Un número positivo navega hacia adelante y un número negativo navega hacia atrás.
window.history.go(1); // Navegar hacia adelante en el historial por una página

window.history.go(-2); // Navegar hacia atrás en el historial por dos páginas

//* length
//    La propiedad length te da el número total de entradas en el historial del navegador.
const totalEntradas = window.history.length;
console.log(`Número total de entradas en el historial: ${totalEntradas}`);

//! Ejemplo
// Navegar hacia atrás en el historial
function retrocederEnHistorial() {
    window.history.back();
}
// Navegar hacia adelante en el historial
function avanzarEnHistorial() {
    window.history.forward();
}
// Obtener el número total de entradas en el historial
function obtenerTotalEntradasHistorial() {
    const totalEntradas = window.history.length;
    console.log(`Número total de entradas en el historial: ${totalEntradas}`);
}
// Ejemplo de uso
retrocederEnHistorial(); // Navegar hacia atrás
avanzarEnHistorial(); // Navegar hacia adelante
obtenerTotalEntradasHistorial(); // Obtener el número total de entradas en el historial