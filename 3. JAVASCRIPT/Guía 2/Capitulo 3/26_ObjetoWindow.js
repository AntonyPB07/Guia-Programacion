/*
closed() - indica si la ventana referenciada está cerrada o no.
stop() - detiene la carga de recursos en el contexto de navegación actual.
print() - Abre el cuadro de diálogo Imprimir para imprimir el documento actual.

screen - devuelve una referencia al objeto de pantalla asociado con la ventana.
screenLeft - devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla 
screenTop - devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla 
scrollx - devuelve el número de píxeles que el documento se desplaza actualmente horizontalmente.
scrolly - devuelve el número de píxeles que el documento se desplaza actualmente verticalmente.
scroll() - desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)

minimize() - Minimiza la ventana
resizeBy() - cambia el tamaño de la ventana actual en una cantidad específica.
resizeTo() - redimensiona dinámicamente la ventana.
moveBy() - Mueve la ventana en una ubicación relativa.
moveTo() - Mueve la ventana en una ubicación absoluta.

!Propiedades del objeto window:
window.document: Representa el documento actual cargado en la ventana.
window.location: Proporciona información sobre la URL actual y permite redirigir a otras URL.
window.location.href: Devuelve la URL completa del documento.
window.location.protocol: Devuelve el protocolo de la URL (por ejemplo, "http:" o "https:").
window.location.host: Devuelve el nombre de host y el número de puerto de la URL.
window.location.hostname: Devuelve el nombre de host de la URL.
window.location.port: Devuelve el número de puerto de la URL.
window.location.pathname: Devuelve la parte de la URL después del nombre de host y el número de puerto.
window.location.search: Devuelve la cadena de consulta de la URL (por ejemplo, todo después del "?" en la URL).
window.location.hash: Devuelve la parte de anclaje de la URL (por ejemplo, todo después del "#" en la URL).
window.innerWidth: Proporciona el ancho de la ventana interior del navegador.
window.innerHeight: Proporciona la altura de la ventana interior del navegador.
window.localStorage: Proporciona acceso al almacenamiento local del navegador.
window.sessionStorage: Proporciona acceso al almacenamiento de sesión del navegador.
window.navigator: Proporciona información sobre el navegador del usuario.
window.screen: Proporciona información sobre la pantalla del usuario.
window.history: Proporciona el historial de navegación del usuario.
window.console: Proporciona acceso a la consola del navegador para mensajes de registro y depuración.

!Métodos del objeto window:
window.alert(): Muestra un cuadro de diálogo con un mensaje para el usuario.
window.confirm(): Muestra un cuadro de diálogo con un mensaje y botones de confirmación y cancelación.
window.prompt(): Muestra un cuadro de diálogo con un mensaje y un campo de entrada para que el usuario ingrese datos.
window.setTimeout(): Ejecuta una función después de un cierto tiempo.
window.setInterval(): Ejecuta una función a intervalos regulares.
window.open(): Abre una nueva ventana del navegador o una pestaña.
window.close(): Cierra la ventana actual.
window.scrollTo(): Desplaza la ventana a una posición específica en la página.
window.focus(): Da el foco a la ventana actual.
window.blur(): Remueve el foco de la ventana actual.

!Eventos del objeto window:
window.onload: Se dispara cuando el contenido de la ventana y todos sus recursos están completamente cargados.
window.onunload: Se dispara cuando la ventana se está cerrando o navegando a otra página.
window.onresize: Se dispara cuando la ventana cambia de tamaño.
window.onbeforeunload: Se dispara antes de que la ventana se esté cerrando.
window.onfocus: Se dispara cuando la ventana recibe el foco.
window.onblur: Se dispara cuando la ventana pierde el foco.
window.onkeydown: Se dispara cuando se presiona una tecla mientras la ventana tiene el foco.
window.onkeyup: Se dispara cuando se suelta una tecla mientras la ventana tiene el foco.
window.onmousemove: Se dispara cuando el puntero del mouse se mueve dentro de la ventana.
window.onmouseup: Se dispara cuando se suelta el botón del mouse dentro de la ventana.
*/