//? DESTRUCTURACIÓN: Permite descomponer o extraer valores de arrays o objetos en variables individuales de forma más concisa. Facilita el acceso a datos 
//?     estructurados y simplifica el código al evitar la necesidad de acceder a cada propiedad o elemento manualmente.

//! Destructurando Arreglos
// Definir un array de ejemplo
let numeros = [1, 2, 3, 4, 5];
// Destructuración de array para asignar valores a variables individuales
let [a, b, c, d, e] = numeros;
console.log(a); // Resultado: 1
console.log(b); // Resultado: 2
console.log(c); // Resultado: 3
console.log(d); // Resultado: 4
console.log(e); // Resultado: 5

//! Destructurando Objetos
// Definir un objeto de ejemplo
let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};
// Destructuración de objeto para asignar valores a variables individuales
let { nombre, edad, ciudad } = persona;
console.log(nombre); // Resultado: 'Juan'
console.log(edad);   // Resultado: 30
console.log(ciudad); // Resultado: 'Madrid'

//? Uso Avanzado de Destructuración
//* La destructuración también se puede utilizar de manera más avanzada para extraer valores de arrays anidados u objetos anidados, 
//*     especificar valores predeterminados y utilizar alias para variables.

//! Destructuración de Arrays Anidados:
let datos = ['Juan', [30, 'Madrid']];
let [nombre1, [edad1, ciudad1]] = datos;
console.log(nombre1); // Resultado: 'Juan'
console.log(edad1);   // Resultado: 30
console.log(ciudad1); // Resultado: 'Madrid'

//! Destructuración con Valores Predeterminados y Alias:
let configuracion = {
    color: 'rojo',
    ancho: 200
};
// Destructuración con valores predeterminados y alias
let { color: colorFondo = 'blanco', ancho: width } = configuracion;
console.log(colorFondo); // Resultado: 'rojo' (valor original de color)
console.log(width);      // Resultado: 200 (valor original de ancho)
