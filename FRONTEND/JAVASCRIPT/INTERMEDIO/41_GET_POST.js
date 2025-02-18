/*
! GET:
* Uso: Se utiliza principalmente para recuperar datos de un servidor.
* Datos: Los datos se envían en la URL después del signo de interrogación (?). La longitud de los datos está limitada por el navegador y el servidor.
* Seguridad: Los datos enviados con GET son visibles en la URL y se pueden registrar en el historial del navegador y los registros del servidor. 
*   No se debe usar para enviar información confidencial.
* Ejemplo: Obtener una lista de productos de un servidor.

! POST
* Uso: Se utiliza principalmente para enviar datos a un servidor, por ejemplo, para crear o actualizar recursos.
* Datos: Los datos se envían en el cuerpo de la solicitud y no son visibles en la URL. Esto permite enviar una mayor cantidad de datos que con GET.
* Seguridad: Los datos enviados con POST no son visibles en la URL, lo que lo hace más seguro que GET para enviar información confidencial.
* Ejemplo: Enviar un formulario de inicio de sesión a un servidor.
*/