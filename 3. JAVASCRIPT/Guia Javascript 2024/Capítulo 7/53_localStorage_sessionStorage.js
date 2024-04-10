/*
? localStorage: Permite almacenar datos de manera persistente en el navegador web. Los datos almacenados en localStorage permanecen incluso 
?   después de cerrar y volver a abrir el navegador, y solo se eliminan cuando se borran explícitamente mediante JavaScript o cuando el 
?   usuario borra los datos del navegador.

? sessionStorage: Permite almacenar datos de forma transitoria que están disponibles solo durante la duración de la sesión del navegador. Los 
?   datos almacenados en sessionStorage se eliminan automáticamente cuando se cierra la pestaña o la ventana del navegador.
*/

//! Ejemplo 1 localStorage
localStorage.setItem('usuario', 'Juan');
const usuario = localStorage.getItem('usuario');
console.log(usuario); // Salida: "Juan"
localStorage.removeItem('usuario');

//! Ejemplo 2 localStorage
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IktleW5vdG9uIiwiZXhwIjoxNjQ4NTc1OTQxfQ.T34567890');
const token = localStorage.getItem('token');
if (token) {
    // El usuario está conectado
} else {
    // El usuario no está conectado
}


//! Ejemplo 1 sessionStorage
sessionStorage.setItem('colorFondo', 'azul');
const color = sessionStorage.getItem('colorFondo');
console.log(color); // Salida: "azul"
sessionStorage.removeItem('colorFondo');

//! Ejemplo 2 sessionStorage
sessionStorage.setItem('producto-1', JSON.stringify({
    id: 1,
    nombre: 'Producto 1',
    precio: 100
}));
const carrito = JSON.parse(sessionStorage.getItem('carrito'));
sessionStorage.removeItem('producto-1');
