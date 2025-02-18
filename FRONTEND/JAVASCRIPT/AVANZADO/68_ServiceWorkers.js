/*
? Service workers: son herramientas avanzadas en JavaScript que te permiten ejecutar scripts en segundo plano, independientemente 
?   del hilo principal del navegador. Esto habilita funcionalidades como la funcionalidad sin conexión, las notificaciones push y un 
?   mejor rendimiento para tus aplicaciones web.

* ¿Qué son los trabajadores de servicio?
Los trabajadores de servicio son scripts controlados por eventos que se ejecutan en un hilo separado del hilo principal del navegador.
Pueden interceptar solicitudes de red, manejar notificaciones push e incluso controlar el ciclo de vida de la aplicación (como almacenar
    en caché recursos para uso sin conexión).
Proporcionan una forma de extender las capacidades de las aplicaciones web más allá de las limitaciones de las páginas web tradicionales.

! Ciclo de Vida del Service Worker
* El ciclo de vida de un Service Worker generalmente involucra tres etapas:
    Instalación: El Service Worker se instala por primera vez.
    Activación: El Service Worker se activa después de la instalación.
    Fetch: El Service Worker maneja eventos de solicitud de red (fetch) para interceptar y responder a las solicitudes.
*/

//! main.js
// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registrado con éxito!', registration);
            })
            .catch(error => {
                console.error('Error al registrar el Service Worker:', error);
            });
    });
}
// Función para realizar una solicitud HTTP
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al recuperar datos.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);
        })
        .catch(error => {
            console.error('Error al recuperar datos:', error);
        });
}
// Ejemplo de solicitud HTTP
fetchData();

//! sw.js
// Instalación del Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker instalado.');
    // Precachear archivos estáticos
    event.waitUntil(
        caches.open('static-cache-v1')
            .then(cache => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/main.js'
                ]);
            })
    );
});
// Activación del Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker activado.');
    // Limpiar cachés antiguas
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('static-cache-') && cacheName !== 'static-cache-v1';
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
// Interceptar y responder a eventos de solicitud de red
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Devolver la respuesta desde la caché si está disponible
                if (response) {
                    return response;
                }

                // De lo contrario, realizar la solicitud a la red
                return fetch(event.request);
            })
    );
});

/*
! Explicación
main.js: Contiene la lógica principal de la aplicación, incluido el registro del Service Worker y una función fetchData para realizar 
    una solicitud HTTP.
sw.js: Es el archivo del Service Worker que se registra en la aplicación. Este archivo implementa el ciclo de vida del Service Worker 
    (install, activate) y maneja eventos de solicitud de red (fetch) para interceptar y responder con recursos desde la caché.
*/