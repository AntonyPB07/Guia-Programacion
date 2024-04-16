/*
? Drag and drop, también conocido como "arrastrar y soltar", es una técnica de interacción en las interfaces gráficas de usuario (GUI) que 
?   permite a los usuarios mover objetos digitales haciendo clic y manteniéndolos presionados con un dispositivo señalador (como un mouse o una 
?   pantalla táctil) y luego arrastrándolos a una nueva ubicación o sobre otro objeto.*/
/*
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo Drag and Drop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Lista de tareas</h1>
    <ul id="lista-tareas">
        <li draggable="true" id="tarea-1">Tarea 1</li>
        <li draggable="true" id="tarea-2">Tarea 2</li>
        <li draggable="true" id="tarea-3">Tarea 3</li>
    </ul>
    <h2>Zona de destino</h2>
    <div id="zona-destino" ondrop="soltarTarea(event)">
        <p>Arrastra las tareas aquí para completarlas</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
*/

/*
#lista-tareas {
    list-style: none;
    padding: 0;
}
#lista-tareas li {
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    cursor: grab;
}
#lista-tareas li:active {
    cursor: grabbing;
    opacity: 0.5;
}
#zona-destino {
    border: 1px dashed #ccc;
    padding: 20px;
    text-align: center;
}
#zona-destino.over {
    background-color: #f7f7f7;
}
*/

// Función para iniciar el arrastre
function iniciarArrastre(event) {
    event.dataTransfer.setData("id", event.target.id);
}
// Función para permitir la caída en la zona de destino
function permitirCaida(event) {
    event.preventDefault();
}
// Función para gestionar la acción al soltar un elemento
function soltarTarea(event) {
    event.preventDefault();
    const idTarea = event.dataTransfer.getData("id");
    // Completar la tarea con el ID "idTarea"
    // ...
    const elementoTarea = document.getElementById(idTarea);
    elementoTarea.parentNode.removeChild(elementoTarea);
    mostrarMensaje("Tarea completada");
}
// Función para mostrar un mensaje al usuario
function mostrarMensaje(mensaje) {
    const zonaMensajes = document.getElementById("zona-mensajes");
    zonaMensajes.textContent = mensaje;
    setTimeout(() => {
        zonaMensajes.textContent = "";
    }, 2000);
}
// Registrar eventos
document.querySelectorAll("#lista-tareas li").forEach((elemento) => {
    elemento.addEventListener("dragstart", iniciarArrastre);
});

document.getElementById("zona-destino").addEventListener("dragover", permitirCaida);

document.getElementById("zona-destino").addEventListener("drop", soltarTarea);

/*
* Eventos:
dragstart: Se dispara cuando un usuario comienza a arrastrar un elemento.
drag: Se dispara mientras el usuario está arrastrando un elemento.
dragend: Se dispara cuando el usuario deja de arrastrar un elemento.
dragenter: Se dispara cuando un elemento arrastrado ingresa a una zona de destino.
dragover: Se dispara mientras un elemento arrastrado está sobre una zona de destino.
dragleave: Se dispara cuando un elemento arrastrado sale de una zona de destino.
drop: Se dispara cuando un elemento arrastrado se suelta sobre una zona de destino.

* Propiedades:
dataTransfer: Objeto que permite la transferencia de datos entre elementos arrastrados y zonas de destino.
effectAllowed: Define los efectos visuales que se muestran durante el arrastre (copiar, mover, etc.).
dropEffect: Indica el efecto que se aplicó al soltar el elemento.*/