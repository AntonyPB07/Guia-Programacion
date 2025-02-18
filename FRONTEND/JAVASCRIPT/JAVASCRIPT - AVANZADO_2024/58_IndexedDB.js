/*
? IndexedDB es una API de JavaScript que proporciona una forma de almacenar datos estructurados de manera persistente en el navegador 
?   web del usuario. Piense en ello como una base de datos ligera que se ejecuta dentro del navegador, ofreciendo capacidades de 
?   almacenamiento mucho mayores que las del almacenamiento local tradicional.


! Características clave:
Almacenamiento persistente: Los datos guardados en IndexedDB permanecen disponibles incluso después de que el usuario cierre la ventana 
del navegador o apague su dispositivo. Esto lo diferencia del almacenamiento local, que es volátil y se borra cuando se cierra la ventana.

Estructura flexible: Utiliza almacenes de objetos para organizar los datos. Cada almacén de objetos es como una tabla en una base de datos
relacional, y puede contener pares clave-valor donde la clave identifica de forma única cada elemento de datos.

Capacidad de búsqueda: Puede crear índices en los almacenes de objetos para realizar búsquedas rápidas y eficientes de datos específicos. 
Esto es particularmente útil para aplicaciones web que manejan grandes conjuntos de datos.

Transacciones: IndexedDB admite transacciones, lo que garantiza la coherencia de los datos. Esto significa que puede agrupar varias 
operaciones de lectura y escritura en una sola unidad, y si alguna operación falla, toda la transacción se cancela, evitando datos corruptos.

Consideraciones de seguridad: IndexedDB solo puede acceder a los datos del origen del sitio web (dominio o subdominio). Esto ayuda a proteger 
los datos del usuario de otros sitios web.
*/

//! Ejemplo 
// Abrir o crear una base de datos
const dbName = 'mi_basededatos';
const request = indexedDB.open(dbName, 1); // El segundo parámetro es la versión de la base de datos

// Manejar eventos de éxito o error al abrir la base de datos
request.onerror = function (event) {
    console.error('Error al abrir la base de datos:', event.target.error);
};

request.onsuccess = function (event) {
    console.log('Base de datos abierta con éxito');
    const db = event.target.result;
    // Agregar datos a un objeto de almacén (store)
    const transaction = db.transaction(['usuarios'], 'readwrite');
    const store = transaction.objectStore('usuarios');
    const usuario = { id: 1, nombre: 'Ejemplo', email: 'ejemplo@example.com' };
    const requestAdd = store.add(usuario);
    requestAdd.onsuccess = function (event) {
        console.log('Usuario agregado correctamente');
    };
    requestAdd.onerror = function (event) {
        console.error('Error al agregar usuario:', event.target.error);
    };
    // Obtener datos de un objeto de almacén (store)
    const getRequest = store.get(1);
    getRequest.onsuccess = function (event) {
        const userData = event.target.result;
        console.log('Datos del usuario obtenidos:', userData);
    };
    getRequest.onerror = function (event) {
        console.error('Error al obtener usuario:', event.target.error);
    };
};

// Manejar evento para la creación de la base de datos
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    // Crear un nuevo objeto de almacén (store) para almacenar usuarios
    const store = db.createObjectStore('usuarios', { keyPath: 'id' });
    // Crear un índice para buscar usuarios por su email
    store.createIndex('email', 'email', { unique: true });
    console.log('Base de datos creada y lista para su uso');
};
