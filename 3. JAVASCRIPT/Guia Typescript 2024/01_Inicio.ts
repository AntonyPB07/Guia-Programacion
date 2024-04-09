//! Variables en Typescript (tipado)
let numero: number = 5;
let texto: string = 'Hola';
let boleano: boolean = true;
let indefinido: undefined;
let nulo_: null;

interface Personita {
    nombre: string,
    edad: number,
    direccion?: string; // propiedad opcional
}

let myPersona1 : Personita = {
    nombre: "Ana",
    edad: 25,
    direccion: "Calle Mayor 123"
};

//! Inferencia --> No es necesario tipar la variable, TS sabe que tipo es el valor asignado (USAR SIEMPRE QUE SE PUEDA).
const valorPI = 3.14;
let equipo = 'Club América';

//! ANY -->  Indica que una variable puede contener cualquier tipo de dato. Se debe utilizar con precaución, ya que evita la detección de errores de tipo en tiempo de compilación (TRATAR DE NO USARLO NUNCA).
let variableAny: any = "cadena";
variableAny = 10; // Asignar un número no genera error
variableAny = true; // Asignar un booleano tampoco
//! UNKOWN --> Es similar a any, pero ofrece un poco más de seguridad. Indica que el tipo de dato de una variable es desconocido en un momento dado. Se utiliza cuando se trabaja con valores obtenidos de fuentes externas o desconocidas (por ejemplo, proveniente de una API).
function obtenerValorDeAPI(): unknown {
    // Simulamos una llamada a una API que devuelve un dato desconocido
    return "Hola";
}
let valorAPI: unknown = obtenerValorDeAPI();
// No se puede acceder a las propiedades del valor directamente
// valorAPI.length  // Error: Object is of type 'unknown'
// Se debe realizar una comprobación de tipo antes de utilizar el valor
if (typeof valorAPI === "string") {
    console.log(valorAPI.length); // Ahora sí se puede acceder a la propiedad 'length'
}