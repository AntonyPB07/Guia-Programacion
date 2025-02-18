/*
? MatchMedia es una función en JavaScript que permite realizar consultas de medios (media queries) desde scripts. Esta función 
?   es útil para realizar acciones basadas en las características del medio en el que se está ejecutando la aplicación, como el 
?   tamaño de la pantalla, la orientación del dispositivo, o la capacidad de color del dispositivo, entre otros.
*/

//! Ejemplo 
// Definir la consulta de medios que deseamos evaluar
const mediaQuery = '(max-width: 600px)';
// Evaluar la consulta de medios usando matchMedia
const mediaQueryList = window.matchMedia(mediaQuery);
// Verificar si la consulta coincide inicialmente
if (mediaQueryList.matches) {
    console.log('La pantalla tiene un ancho máximo de 600px o menos.');
} else {
    console.log('La pantalla tiene un ancho mayor a 600px.');
}
// Agregar un listener para detectar cambios en la coincidencia de la consulta
function handleMediaQueryChange(event) {
    if (event.matches) {
        console.log('Ahora la pantalla tiene un ancho máximo de 600px o menos.');
    } else {
        console.log('Ahora la pantalla tiene un ancho mayor a 600px.');
    }
}
mediaQueryList.addListener(handleMediaQueryChange);
// Para remover el listener cuando ya no se necesite
// mediaQueryList.removeListener(handleMediaQueryChange);

/*
! Métodos y Propiedades de MediaQueryList
* El objeto MediaQueryList devuelto por matchMedia tiene las siguientes propiedades y métodos principales:
*   matches: Una propiedad booleana que indica si la consulta de medios coincide actualmente con el entorno.
*   media: La cadena de texto que representa la consulta de medios.
*   addListener(listener): Método para agregar un listener que se llama cada vez que cambia la coincidencia de la consulta de medios.
*   removeListener(listener): Método para remover un listener previamente agregado.
*/