/*
? API Geolocalización: Permite obtener la ubicación del dispositivo del usuario, incluyendo su latitud, longitud, precisión e información adicional como la velocidad y el rumbo.

* Funcionalidades:
    Obtener la ubicación actual: Puedes obtener la posición actual del dispositivo del usuario mediante la función //!navigator.geolocation.getCurrentPosition().
    Seguimiento de la ubicación: Puedes obtener actualizaciones periódicas de la ubicación del usuario mediante la función //!navigator.geolocation.watchPosition().
    Obtener información adicional: Puedes obtener información adicional sobre la ubicación del usuario, como la velocidad y el rumbo, utilizando la función //!Position.coords.
*/

//! Obtener ubicación actual
navigator.geolocation.getCurrentPosition((position) => {
    // La función se ejecutará con éxito
    // `position` contiene la información de la ubicación
    console.log(position.coords.latitude); // Latitud
    console.log(position.coords.longitude); // Longitud
}, (error) => {
    // La función se ejecutará si hay un error
    // `error` contiene información sobre el error
    console.log(error.message);
});

//! Seguimiento de la ubicación 
const watchId = navigator.geolocation.watchPosition((position) => {
    // La función se ejecutará cada vez que la ubicación cambie
    // `position` contiene la información de la ubicación
    console.log(position.coords.latitude); // Latitud
    console.log(position.coords.longitude); // Longitud
});
// Dejar de seguir la ubicación
navigator.geolocation.clearWatch(watchId);

//! Obtener información adicional
navigator.geolocation.getCurrentPosition((position) => {
    // La función se ejecutará con éxito
    // `position` contiene la información de la ubicación
    console.log(position.coords.latitude); // Latitud
    console.log(position.coords.longitude); // Longitud
    console.log(position.coords.accuracy); // Precisión
    console.log(position.coords.altitude); // Altitud
    console.log(position.coords.heading); // Rumbo
    console.log(position.coords.speed); // Velocidad
});
