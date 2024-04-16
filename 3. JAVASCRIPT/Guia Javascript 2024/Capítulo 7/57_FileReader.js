/* 
? FileReader: permite leer de forma asíncrona el contenido de los archivos seleccionados por el usuario desde su dispositivo. 
?   Es particularmente útil para aplicaciones web que necesitan procesar archivos cargados por el usuario, como vistas previas
?   de imágenes, procesamiento de archivos de texto o cargas de datos.
*/

/*
* Operación asíncrona: La lectura de archivos puede llevar tiempo dependiendo del tamaño del archivo y del dispositivo del usuario. 
*   FileReader utiliza eventos para notificar a tu código cuando el proceso de lectura se ha completado.

* Restricciones de seguridad: Por razones de seguridad, FileReader solo puede acceder a los archivos que el usuario ha elegido 
*   explícitamente utilizando un elemento <input type="file"> o la funcionalidad de arrastrar y soltar. No puede leer directamente 
*   archivos del sistema de archivos del usuario utilizando una ruta.

! Métodos principales:
* readAsText(blob, [encoding]): Lee el contenido del archivo como una cadena de texto, opcionalmente especificando la codificación 
*   de caracteres (la predeterminada es UTF-8). Una vez finalizada la lectura, la propiedad result del objeto FileReader contendrá el 
*   contenido del texto.

* readAsDataURL(blob): Lee el contenido del archivo como una URL de datos, que es una representación codificada en base64 de los 
*   datos del archivo. Esto se usa a menudo para mostrar vistas previas de imágenes en aplicaciones web.

* readAsArrayBuffer(blob): Lee el contenido del archivo como un ArrayBuffer, que es un búfer binario que contiene los bytes sin 
*   procesar del archivo. Esto es útil para procesar formatos de archivo no textuales.

* abort(): Cancela la operación de lectura en curso.


! Manejo de eventos:
* onload: Se activa cuando el proceso de lectura es exitoso.
* onerror: Se activa si se produce un error durante la lectura.
* onloadend: Se activa independientemente del éxito o el fracaso, indicando la finalización de la operación.
*/

//! Ejemplo 1
const input = document.getElementById('fileInput');
const preview = document.getElementById('preview');
input.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Obtener el primer archivo seleccionado
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            // Procesar el contenido del archivo en función del método elegido:
            // - reader.result: contenido de texto (readAsText)
            // - reader.result: URL de datos (readAsDataURL)
            // - reader.result: ArrayBuffer (readAsArrayBuffer)
            if (file.type.match('image.*')) {
                preview.src = event.target.result; // Establecer la fuente de la imagen para la vista previa
            } else {
                console.log(event.target.result); // Manejar otros tipos de archivos
            }
        };
        reader.readAsDataURL(file); // Elegir el método de lectura adecuado
    }
});


//! Ejemplo 2
// Función para manejar la carga de archivos
function handleFileSelect(event) {
    const file = event.target.files[0]; // Obtenemos el primer archivo seleccionado
    if (!file) {
        console.error('No se ha seleccionado ningún archivo');
        return;
    }
    const reader = new FileReader(); // Creamos un nuevo FileReader
    // Configuramos el evento onload (cuando la lectura del archivo es completada)
    reader.onload = function (e) {
        const contents = e.target.result; // Aquí están los datos del archivo leído
        console.log(contents); // Hacemos algo con los datos, por ejemplo, imprimirlos en la consola
        // Aquí puedes manipular 'contents', por ejemplo, mostrarlo en una área de texto en tu página
    };
    // Comenzamos a leer el archivo como texto
    reader.readAsText(file);
}
// Obtener el elemento de input de tipo file
const inputElement = document.getElementById('fileInput');
// Añadir un listener para el evento 'change' del input
inputElement.addEventListener('change', handleFileSelect, false);
