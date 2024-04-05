/*
? eventHandlers (manejadores de eventos): son funciones que se ejecutan cuando ocurre un evento específico. 
? Se asignan directamente a una propiedad de un elemento HTML, como onclick, onmouseover, onchange, etc. 

? eventListener (escuchadores de eventos): son funciones que esperan a que ocurra un evento en un elemento 
? específico y luego se activan. Se añaden utilizando el método addEventListener() del objeto del elemento. 

? Objeto event: Proporciona información detallada sobre el evento que ocurrió, como qué tipo de evento fue, 
? en qué elemento ocurrió, las coordenadas del puntero del mouse en el momento del evento, teclas presionadas, 
? etc. Este objeto se pasa como argumento a las funciones de los manejadores de eventos. 

? Flujo de eventos (capturing, bubbling): se refiere al orden en que los eventos son disparados y manejados 
? en una página web. El flujo de eventos sigue una jerarquía en la cual los eventos se propagan desde el 
? elemento que desencadena el evento hacia arriba o hacia abajo en la jerarquía de los elementos del DOM.
*/

//! eventHandlers
<button onclick="saludar()">Saludar al usuario</button>
function saludar() {
    alert('Hola, muchacho');
}

//! eventListener
const boton = document.getElementById('boton');
boton.addEventListener('click', function () {
    alert('Click!');
});

//! Objeto event
event.target;// Devuelve una referencia al elemento que desencadenó el evento.
event.type;// Devuelve el tipo de evento que ocurrió (por ejemplo, "click", "mouseover", "keydown", etc.).
event.preventDefault();// Cancela el comportamiento predeterminado del evento (por ejemplo, la acción de un enlace o un envío de formulario).
event.stopPropagation();// Detiene la propagación del evento a través de la jerarquía de elementos del DOM.
event.key;// Devuelve el código o el valor de la tecla que se presionó en un evento de teclado.
event.clientX; // Devuelve las coordenadas del puntero del mouse en relación con la ventana del navegador.
event.clientY;// Devuelve las coordenadas del puntero del mouse en relación con la ventana del navegador.
document.getElementById('miElemento').addEventListener('click',function(event){ //se puede poner event o e
    console.log('Tipo de evento: ', event.type );
    console.log('Elemento de destino', event.target);
    console.log('Coordenadas del puntero', event.clientX, event.clientY);
});

//! Event Bubbling y Event Capturing
/*
* Para registrar un manejador de eventos en la fase de captura o de burbujeo, puede usar el método addEventListener() y pasar true como 
* tercer parámetro para la fase de captura, o false para la fase de burbujeo (o simplemente omitir el tercer parámetro ya que false es 
* el valor por defecto).
*/
document.getElementById('boton').addEventListener('click',function(event){
    console.log('Event Bubbling');
});

document.getElementById('boton').addEventListener(click,function(event){
    console.log('Event Capturing');
},true);

//! Modificando flujo de eventos
event.stopPropagation();// Detiene la propagación del evento en la fase actual, evitando que se propague a las fases posteriores.
event.preventDefault();// Previene la acción predeterminada del evento, como seguir un enlace al hacer clic.