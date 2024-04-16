//? Métodos Avanzados para el Manejo de Objetos en JavaScript

//! Object.defineProperty()
//* Permite definir o modificar propiedades en un objeto con opciones detalladas, como configurar si una propiedad es escribible, enumerable y/o configurable.

let persona = {};
// Definir una propiedad nombre con opciones personalizadas
Object.defineProperty(persona, 'nombre', {
    value: 'Juan',
    writable: false, // La propiedad no puede ser modificada
    enumerable: true, // La propiedad es enumerable
    configurable: false // La propiedad no puede ser eliminada ni sus configuraciones cambiadas
});
console.log(persona.nombre); // Juan


//! Object.defineProperties()
//* Permite definir múltiples propiedades en un objeto con opciones personalizadas.
let persona = {};
// Definir múltiples propiedades con opciones personalizadas
Object.defineProperties(persona, {
    nombre: {
        value: 'Juan',
        writable: false,
        enumerable: true
    },
    edad: {
        value: 30,
        writable: true,
        enumerable: true
    }
});

console.log(persona.nombre); // Juan
console.log(persona.edad); // 30

//! Object.getOwnPropertyDescriptor()
//* Permite obtener las configuraciones de una propiedad específica de un objeto, como si es writable, enumerable y configurable.
let persona = {
    nombre: 'Juan'
};
let descriptor = Object.getOwnPropertyDescriptor(persona, 'nombre');
console.log(descriptor);
// { value: 'Juan', writable: true, enumerable: true, configurable: true }

//! Object.preventExtensions()
//* Previene que se añadan nuevas propiedades a un objeto, aunque las propiedades existentes todavía se pueden modificar o eliminar.
let persona = {
    nombre: 'Juan'
};
Object.preventExtensions(persona);
persona.edad = 30; // No se añadirá la propiedad 'edad'
console.log(persona); // { nombre: 'Juan' }

//! Object.seal()
//* Previene que se añadan nuevas propiedades y que las existentes sean eliminadas en un objeto. Además, todas las propiedades existentes se convierten en no configurables.
let persona = {
    nombre: 'Juan'
};
Object.seal(persona);
delete persona.nombre; // No se puede eliminar la propiedad 'nombre'
console.log(Object.getOwnPropertyDescriptor(persona, 'nombre'));
// { value: 'Juan', writable: true, enumerable: true, configurable: false }

//! Object.freeze()
//* Previene que se añadan, modifiquen o eliminen propiedades en un objeto. Todas las propiedades existentes se convierten en no configurables y no escribibles.
let persona = {
    nombre: 'Juan'
};
Object.freeze(persona);
persona.edad = 30; // No se añadirá la propiedad 'edad'
delete persona.nombre; // No se puede eliminar la propiedad 'nombre'
console.log(Object.getOwnPropertyDescriptor(persona, 'nombre'));
// { value: 'Juan', writable: false, enumerable: true, configurable: false }