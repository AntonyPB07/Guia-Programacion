/*
? AJAX: (Asynchronous JavaScript and XML) es una técnica utilizada en desarrollo web para realizar solicitudes asíncronas a un servidor desde un navegador web utilizando JavaScript.
?   permite que una página web envíe y reciba datos del servidor en segundo plano, sin necesidad de recargar la página completa. 

! 1. Se crea una instancia de XMLHttpRequest (XHR) o se utiliza la función fetch() para realizar una solicitud HTTP desde JavaScript.
! 2. Configuración de la Solicitud: Se especifica el tipo de solicitud (GET, POST, PUT, DELETE, etc.), la URL del recurso a solicitar y cualquier dato adicional que se deba enviar 
!   al servidor (como parámetros o datos de formulario).
! 3. Envío de la Solicitud: La solicitud se envía al servidor de forma asíncrona. Mientras tanto, el navegador sigue ejecutando otras tareas sin bloquearse.
! 4. Manejo de la Respuesta: Cuando el servidor responde con los datos solicitados, se activa un evento de onreadystatechange (en el caso de XMLHttpRequest) o se resuelve la Promesa 
!   (en el caso de fetch()). Se procesa la respuesta del servidor, generalmente interpretando los datos recibidos (por ejemplo, convirtiéndolos de JSON a objetos JavaScript) y 
!   actualizando la interfaz de usuario en consecuencia.


! Ejemplo de Uso con XMLHttpRequest:
*/
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
        } else {
            console.error('Error al realizar la solicitud');
        }
    }
};
xhr.send();

// ! Ejemplo con FECTH: --> FETCH es más moderno y mejor.
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al realizar la solicitud');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));