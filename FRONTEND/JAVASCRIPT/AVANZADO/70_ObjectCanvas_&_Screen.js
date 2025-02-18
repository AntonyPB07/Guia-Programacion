/*
? OBJETO SCREEN: proporciona información sobre las propiedades de la pantalla del dispositivo donde se está ejecutando el navegador. 
?   Este objeto es parte del entorno del navegador y está disponible globalmente como window.screen.
*/

//! Mostrar propiedades de la pantalla (OBJETO SCREEN)
console.log('Ancho de la pantalla:', screen.width);
console.log('Alto de la pantalla:', screen.height);
console.log('Ancho disponible de la pantalla:', screen.availWidth);
console.log('Alto disponible de la pantalla:', screen.availHeight);
console.log('Profundidad de color de la pantalla:', screen.pixelDepth);
console.log('Orientación de la pantalla:', screen.orientation.type);
console.log('Profundidad de color del monitor:', screen.colorDepth);


/*
? OBJETO CANVAS: proporciona una forma poderosa de dibujar gráficos, imágenes y animaciones dentro de un elemento <canvas> en una página web. 
?   Con el objeto Canvas, puedes manipular píxeles directamente para crear gráficos interactivos, visualizaciones de datos, juegos, y mucho más.
*/
//! Obtener una Referencia al Elemento <canvas>:
<canvas id="miCanvas" width="400" height="300"></canvas>

//! Obtener el Contexto 2D del Canvas:
const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

//! Dibujo básico CANVAS
// Dibujar un rectángulo rojo en el canvas
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 80);

// Dibujar un círculo azul en el canvas
ctx.beginPath();
ctx.arc(250, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();

// Dibujar texto en el canvas
ctx.font = '24px Arial';
ctx.fillStyle = 'green';
ctx.fillText('¡Hola, Canvas!', 150, 250);

/*
ctx.fillStyle establece el color de relleno para las formas dibujadas.
ctx.fillRect(x, y, width, height) dibuja un rectángulo relleno en las coordenadas (x, y) con el tamaño especificado.
ctx.beginPath() inicia un nuevo camino (para dibujar formas complejas).
ctx.arc(x, y, radius, startAngle, endAngle) dibuja un arco o círculo con centro en (x, y) y el radio especificado.
ctx.fillText(text, x, y) dibuja texto en el canvas en las coordenadas (x, y).
*/

//! Ejemplo
// Obtener el contexto 2D del canvas
const canvass = document.getElementById('miCanvas');
const ctx = canvass.getContext('2d');
// Dibujar un rectángulo rojo
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 80);
// Dibujar un círculo azul
ctx.beginPath();
ctx.arc(250, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
// Dibujar texto
ctx.font = '24px Arial';
ctx.fillStyle = 'green';
ctx.fillText('¡Hola, Canvas!', 150, 250);