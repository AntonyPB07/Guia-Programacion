/*
? Web workers: Son scripts que se ejecutan en segundo plano, independientemente del hilo principal de la página. Esto permite realizar 
?   tareas costosas sin bloquear la interfaz de usuario (UI) y mantener la capacidad de respuesta de tu aplicación web.
*/

//! Worker.js
self.addEventListener('message', function (event) {
    const num = event.data;
    let primos = [];

    for (let i = 2; i <= num; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    self.postMessage(primos);
});
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

//! script.js
const worker = new Worker('worker.js');
const inputNumero = document.getElementById('numero');
const resultado = document.getElementById('resultado');
inputNumero.addEventListener('input', function () {
    const numero = parseInt(inputNumero.value);
    if (isNaN(numero) || numero < 1) {
        resultado.textContent = 'Ingrese un número válido mayor que 0';
        return;
    }
    worker.postMessage(numero);
    worker.onmessage = function (event) {
        const primos = event.data;
        resultado.textContent = `Números primos hasta ${numero}: ${primos.join(', ')}`;
    };
});

/*
? "Same-origin" (mismo origen) es un concepto fundamental en seguridad web que se refiere a la política de seguridad implementada por los navegadores 
?   web para restringir las interacciones entre recursos de diferentes orígenes. En términos simples, dos URLs tienen el mismo origen si tienen el mismo 
?   protocolo (como HTTP o HTTPS), el mismo dominio y el mismo puerto.

* Acceso al DOM (Document Object Model)
Un script ejecutado en una página web solo puede acceder al DOM de esa página y no puede acceder al DOM de otras páginas que tengan un origen diferente.
Esto significa que un script en https://example.com no puede acceder al DOM de https://anotherdomain.com debido a la política de same-origin.

! Ejemplo
* URLs con el mismo origen: https://example.com/page1 y https://example.com/page2 tienen el mismo origen porque tienen el mismo protocolo (https), el 
*   mismo dominio (example.com) y el mismo puerto (puerto estándar para HTTPS).

* URLs con orígenes diferentes: https://example.com y https://anotherdomain.com tienen orígenes diferentes porque sus dominios (example.com y 
*   anotherdomain.com) son diferentes.
*/