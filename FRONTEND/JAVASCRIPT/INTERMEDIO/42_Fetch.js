/*
? FETCH: es una interfaz moderna introducida en ES6 (2015) para realizar peticiones HTTP asíncronas desde JavaScript. A diferencia de su predecesor 
?   XMLHttpRequest (XHR), Fetch ofrece una sintaxis más concisa y basada en promesas, facilitando el manejo de las solicitudes y respuestas.

* Sintaxis más limpia: Utiliza promesas para manejar respuestas asíncronas, resultando en código más fácil de leer y mantener.
* Basado en promesas: Las promesas son un mecanismo más moderno y eficiente para manejar código asíncrono.
* Mayor control: Permite configurar la solicitud con detalles como headers, body y métodos HTTP (GET, POST, PUT, DELETE).
* Adopción moderna: Es la forma recomendada para peticiones HTTP en navegadores actuales.
*/

//! Ejemplo
fetch('https://api.ejemplo.com/datos')
    .then(response => response.json()) // Parsear respuesta como JSON
    .then(data => {
        console.log(data); // Procesar los datos obtenidos
    })
    .catch(error => {
        console.error(error); // Manejar errores
    });

//! Ejemplo GET
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        console.log(data); // Trabajar con los datos obtenidos
    })
    .catch(error => {
        console.error('Error:', error); // Manejar errores de red o de solicitud
    });

//! Ejemplo POST
const data = {
    username: 'usuario',
    password: 'contraseña'
};
fetch('https://api.example.com/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        console.log(data); // Trabajar con los datos de la respuesta
    })
    .catch(error => {
        console.error('Error:', error); // Manejar errores de red o de solicitud
    });

//! Ejemplo de Uso en un Entorno Asíncrono:
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        const data = await response.json();
        console.log(data); // Trabajar con los datos obtenidos
    } catch (error) {
        console.error('Error:', error); // Manejar errores de red o de solicitud
    }
}
fetchData();
