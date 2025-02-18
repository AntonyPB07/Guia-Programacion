/*
? El lazy loading en JavaScript es una técnica utilizada para cargar recursos (como imágenes, scripts o estilos) de una página web de 
?   forma diferida, es decir, solo cuando el usuario los necesita, como cuando se desplaza hasta cierta parte de la página. Esto mejora 
?   el rendimiento de la página al reducir el tiempo de carga inicial y optimizar el uso de los recursos del navegador.
*/

/*
! Así es como se hace desde HTML, con la propiedad loading = lazy
<img src="imagen-pequena.jpg" loading="lazy" alt="Descripción de la imagen">
*/

//! Ejemplo 1
// Función para cargar un script de forma diferida
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}

// Llamar a la función loadScript cuando sea necesario, por ejemplo, al hacer scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 1000; // Posición de desplazamiento para cargar el script

    if (scrollPosition > triggerPosition) {
        loadScript('mi-script.js');
    }
});

//! Ejemplo 2
/*
    <h1>Lazy Loading de Imágenes</h1>
    <!-- Imágenes con atributo data-src -->
    <img data-src="imagen1.jpg" alt="Imagen 1">
    <img data-src="imagen2.jpg" alt="Imagen 2">
    <img data-src="imagen3.jpg" alt="Imagen 3">
    <img data-src="imagen4.jpg" alt="Imagen 4">
*/
// Función para cargar imágenes de forma lazy
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    // Opciones de Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Se activa cuando al menos el 50% de la imagen está visible
    };
    // Crear una instancia de Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                // Cargar la imagen y quitar el atributo data-src
                img.setAttribute('src', src);
                img.removeAttribute('data-src');
                // Dejar de observar la imagen una vez cargada
                observer.unobserve(img);
            }
        });
    }, options);
    // Observar cada imagen
    images.forEach(image => {
        observer.observe(image);
    });
}
// Llamar a lazyLoadImages cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', lazyLoadImages);
