/*
? Caché: es una técnica de almacenamiento que permite guardar datos temporalmente para un acceso más rápido y eficiente. Esto 
?   se logra almacenando los resultados de operaciones costosas o repetitivas para evitar recalcularlos cada vez que se necesitan.

! Tipos de caché en JavaScript:
* 1. Caché del navegador:
El navegador web almacena en caché automáticamente varios tipos de recursos, como imágenes, CSS, JavaScript y archivos HTML.
Esto permite que las páginas web se carguen más rápido al reutilizar recursos descargados previamente en lugar de volver a 
    descargarlos del servidor.
El control sobre el caché del navegador se puede realizar mediante encabezados HTTP y configuraciones del navegador.

* 2. Caché del lado del cliente:
El desarrollador puede implementar su propia caché en el lado del cliente utilizando diversas tecnologías como:
    localStorage y sessionStorage: Almacenan datos persistentes y no persistentes en el navegador, respectivamente.
    Web Storage API: Proporciona una interfaz unificada para acceder a localStorage y sessionStorage.
    IndexedDB: Almacena datos estructurados en una base de datos local.
    La caché del lado del cliente permite almacenar datos personalizados o resultados de cálculos para su reutilización posterior en 
        la aplicación.
*/

//! Ejemplo
// Función para realizar una solicitud HTTP y almacenar en caché los resultados
function fetchDataWithCache(url) {
    const cacheKey = 'cache_' + url;
    // Verificar si los datos están en caché en localStorage
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        console.log(`Recuperando datos de caché para ${url}`);
        return Promise.resolve(JSON.parse(cachedData));
    } else {
        console.log(`Realizando solicitud GET a ${url}`);
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al recuperar datos de ${url}`);
                }
                return response.json();
            })
            .then(data => {
                // Almacenar los datos en caché en localStorage
                localStorage.setItem(cacheKey, JSON.stringify(data));
                return data;
            })
            .catch(error => {
                console.error(`Error al recuperar datos de ${url}:`, error);
                throw error; // Propagar el error para manejarlo más adelante
            });
    }
}
// Función para memoizar fetchDataWithCache
function memoize(func) {
    const cache = {};
    return function (url) {
        if (!(url in cache)) {
            cache[url] = func(url);
        }
        return cache[url];
    };
}
// Aplicar memoización a fetchDataWithCache
const memoizedFetchData = memoize(fetchDataWithCache);
// Ejemplo de uso de fetchDataWithCache con memoización y caché local
memoizedFetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Datos recibidos:', data))
    .catch(error => console.error('Error al recuperar datos:', error));
// La próxima vez que se solicite la misma URL, se recuperarán los datos desde la caché local
memoizedFetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Datos recibidos desde caché:', data))
    .catch(error => console.error('Error al recuperar datos desde caché:', error));