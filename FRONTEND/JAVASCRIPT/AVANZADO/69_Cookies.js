/*
? Las cookies son pequeños fragmentos de datos que se almacenan en el navegador web del usuario. Se utilizan principalmente para recordar 
?   información específica sobre el usuario o la sesión, como preferencias, identificadores de sesión, información de inicio de sesión, etc. 
?   Se puede crear, leer y manipular cookies utilizando el objeto document.cookie y algunas funciones auxiliares.
*/

//! Crear cookie
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
/*
username=John Doe es el nombre y el valor de la cookie.
expires=Thu, 18 Dec 2025 12:00:00 UTC especifica la fecha de caducidad de la cookie.
path=/ indica el alcance de la cookie (en este caso, es válida para todo el sitio).
*/

//! Leer una cookie
const cookies = document.cookie;
console.log(cookies);

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
const usernames = getCookie('usernames');
console.log('Username:', usernames);

//! Eliminar cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//! Ejemplo
// Función para crear una cookie
function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}
// Función para obtener el valor de una cookie por nombre
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
// Función para eliminar una cookie por nombre
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// Ejemplo de uso
setCookie('username', 'John Doe', 30); // Crear una cookie que caduca en 30 días
const username = getCookie('username');
console.log('Username:', username);
// Eliminar la cookie 'username'
deleteCookie('username');
console.log('Cookie eliminada:', getCookie('username'));
