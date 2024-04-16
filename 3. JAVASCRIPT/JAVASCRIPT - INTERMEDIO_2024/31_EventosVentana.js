Eventos_de_carga:
load //Se produce cuando la página web ha terminado de cargarse por completo.
DOMContentLoaded //Se produce cuando el DOM de la página ha sido cargado y parseado, pero los recursos externos como imágenes y scripts aún pueden estar cargándose.

Eventos_de_tamaño:
resize //Se produce cuando el tamaño de la ventana del navegador cambia.

Eventos_de_navegación:
beforeunload //Se produce antes de que el usuario abandone la página (por ejemplo, al navegar a otra página).

Eventos_de_error:
error //Se produce cuando ocurre un error durante la carga de un recurso de la página.

// Agregar un evento de carga a la ventana
window.addEventListener("load", function (event) {
    console.log("La página se ha cargado completamente.");
});

// Agregar un evento de cambio de tamaño a la ventana
window.addEventListener("resize", function (event) {
    console.log("La ventana se ha redimensionado.");
});

// Agregar un evento de desplazamiento a la ventana
window.addEventListener("scroll", function (event) {
    console.log("Se ha desplazado la página.");
});
