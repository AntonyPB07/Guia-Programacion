/*
? Notification API: muestrar notificaciones nativas en el sistema operativo del usuario desde una aplicación web. Las notificaciones
?   pueden ser útiles para informar al usuario sobre eventos importantes, actualizaciones de la aplicación o interacciones relevantes, 
?   incluso si la aplicación web no está abierta en primer plano.
*/

//! Ejemplo 1
if ('Notification' in window) {
    console.log('La API de Notificaciones es compatible con este navegador.');
} else {
    console.log('La API de Notificaciones no es compatible con este navegador.');
}
if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Permiso para mostrar notificaciones concedido.');
        }
    });
}
function mostrarNotificacion() {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('¡Hola!', {
            body: 'Esta es una notificación de ejemplo.',
            icon: 'ruta/a/imagen.png'
        });
        // Manejar eventos de interacción con la notificación (opcional)
        notificacion.onclick = () => {
            console.log('La notificación fue clickeada.');
            // Aquí puedes redirigir a una URL o realizar otra acción al hacer clic en la notificación
        };
        // Cerrar automáticamente la notificación después de 5 segundos (opcional)
        setTimeout(() => {
            notificacion.close();
        }, 5000);
    }
}
// Llamar a la función mostrarNotificacion cuando sea necesario
mostrarNotificacion();

//! Ejemplo 2
function showNotification() {
    // Solicitar permiso
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                createNotification();
            }
        });
    } else {
        createNotification();
    }
}
function createNotification() {
    const notification = new Notification('Nueva notificación!', {
        body: 'Este es el contenido de la notificación.',
        icon: 'icono.png', // Ruta a tu icono
    });
    // Manejar eventos (opcional)
    notification.onclick = () => {
        console.log("El usuario hizo clic en la notificación");
        // Abrir una ventana, etc.
    };
}