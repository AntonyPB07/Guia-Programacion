/*
? Intersection Observer: Es una API de JavaScript que permite detectar cuándo un elemento entra o sale del viewport (la parte visible 
?   de la ventana del navegador) o de otro elemento contenedor.

* Carga perezosa de imágenes (lazy loading): Solo se cargan las imágenes que están visibles en la pantalla, mejorando el rendimiento de la página.
* Animaciones con scroll: Activar animaciones en elementos a medida que el usuario se desplaza por la página.
* Precarga de contenido:**Cargar contenido adicional (por ejemplo, nuevos artículos en un blog) cuando el usuario se acerca al final de la página.
*/

//! Ejemplo
// Crear una nueva instancia de Intersection Observer
const observer = new IntersectionObserver(entries => {
    // El callback se ejecutará cada vez que haya cambios en la intersección

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento objetivo está siendo intersectado por el contenedor o el viewport
            console.log('El elemento está completamente visible');

            // Aquí puedes realizar acciones, por ejemplo, cargar una imagen
            // entry.target.src = 'ruta_de_la_imagen.jpg';
        } else {
            // El elemento ya no está siendo intersectado
            console.log('El elemento ya no es visible');
        }
    });
}, {
    threshold: 1.0 // Umbral de intersección (1.0 significa que el 100% del elemento debe ser visible)
});
// Obtener el elemento objetivo que se desea observar
const targetElement = document.querySelector('#miElemento');
// Comenzar a observar el elemento objetivo
observer.observe(targetElement);

/*
! Métodos y Propiedades del Intersection Observer
* El objeto IntersectionObserver tiene métodos y propiedades útiles:

*   observe(targetElement): Comienza a observar el elemento especificado.

*   unobserve(targetElement): Deja de observar el elemento especificado.

*   disconnect(): Detiene todas las observaciones activas del IntersectionObserver.

*   takeRecords(): Devuelve una lista de las entradas cuyas intersecciones han cambiado desde la última vez que se llamó a este método.

*   El callback que proporcionas al IntersectionObserver recibe un array de IntersectionObserverEntry como argumento. Cada objeto IntersectionObserverEntry 
*       contiene información sobre un cambio en la intersección entre el elemento objetivo y el contenedor. Algunas propiedades importantes de 
*       IntersectionObserverEntry son:
*          isIntersecting: Un booleano que indica si el elemento objetivo está siendo intersectado por el contenedor o el viewport.
*          intersectionRatio: El porcentaje del elemento objetivo que está siendo intersectado.
*          target: La referencia al elemento objetivo que está siendo observado.
*/