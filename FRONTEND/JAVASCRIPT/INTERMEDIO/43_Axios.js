/*
? Axios es una biblioteca popular de JavaScript creada para simplificar las peticiones HTTP asíncronas utilizando promesas. 
?   Se basa en la Fetch API pero agrega características adicionales que facilitan el manejo de solicitudes y respuestas.

* Sintaxis más concisa: Axios ofrece una sintaxis más simple y legible que la Fetch API básica.
* Manejo automático de errores: Axios intercepta automáticamente los errores de la red y del servidor, simplificando el manejo de excepciones.
* Interceptores: Permite configurar interceptores para transformar las solicitudes y respuestas antes de que se envíen o se procesen.
* Soporte para cancelación de solicitudes: Axios permite cancelar solicitudes en curso, lo cual es útil en escenarios donde el usuario ya no necesita la información.
* Transformación automática de datos: Convierte automáticamente los cuerpos de las solicitudes y respuestas JSON.
*/

//! Ejemplo de una petición GET con Axios:
axios.get('https://api.ejemplo.com/datos')
    .then(response => {
        console.log(response.data); // Los datos están en response.data
    })
    .catch(error => {
        console.error(error);
    });

//! Ejemplo de una solicitud POST con datos
const data = {
    username: 'usuario',
    password: 'contraseña'
};
axios.post('https://api.example.com/login', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
//! Interceptor de Respuestas y Solicitudes:
// Interceptor para agregar encabezados comunes
axios.interceptors.request.use(config => {
    // Modificar la configuración de la solicitud
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config;
});
axios.interceptors.response.use(response => {
    return response;
}, error => {
    console.error('Error de respuesta:', error);
    return Promise.reject(error);
});
