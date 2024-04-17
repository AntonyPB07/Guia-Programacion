/*
? Visibility Change: capacidad de detectar cuándo una página web se vuelve visible o invisible para el usuario (cambia de pestaña en un 
?   navegador o minimiza la ventana). Este tipo de eventos son útiles para realizar acciones específicas cuando la visibilidad de la página 
?   cambia, como detener animaciones o pausar contenido multimedia para ahorrar recursos cuando la página no está activa.

* Puedes detectar cambios de visibilidad utilizando el evento visibilitychange que está disponible en la API del Document Object Model (DOM). 
*   Este evento se dispara cuando la visibilidad de la página cambia, es decir, cuando la página pasa de estar visible a estar oculta o viceversa.
*/

//! Ejemplo
// Función que se ejecutará cuando cambie la visibilidad de la página
function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        // La página ya no es visible (p. ej., se cambió de pestaña o se minimizó)
        console.log('La página ya no es visible.');
        // Aquí puedes pausar animaciones, videos, o detener actividades que consumen recursos
    } else if (document.visibilityState === 'visible') {
        // La página se volvió a hacer visible (p. ej., se volvió a la pestaña o se restauró)
        console.log('La página es visible nuevamente.');
        // Aquí puedes reanudar animaciones, videos, u otras actividades
    }
}
// Agregar un event listener para el evento 'visibilitychange'
document.addEventListener('visibilitychange', handleVisibilityChange);
