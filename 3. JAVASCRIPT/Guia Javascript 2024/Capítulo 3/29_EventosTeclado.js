/*
keydown: Se dispara cuando una tecla se presiona hacia abajo.

keyup: Se dispara cuando una tecla se suelta después de ser presionada.

keypress: Se dispara cuando una tecla que genera un carácter Unicode es presionada y luego liberada.
*/

//! Agregar un evento de teclado al documento
document.addEventListener('keydown',function(event){
    console.log('Tecla presionada', event.key);    
});

//! Agregar un evento de teclado a un elemento específico
let input = document.getElementById('nuevoInput');
input.addEventListener('keyup',function(event){
    console.log('Texto ingresado', event.target.value);
});