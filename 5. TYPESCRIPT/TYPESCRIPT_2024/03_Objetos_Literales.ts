//? OBJETOS LITERALES: Son una forma concisa de crear objetos en TypeScript. Se definen utilizando corchetes {}, con propiedades y valores separados por dos puntos :.
let programador = {
    nombre: 'Antonio',
    lenguajes: ['Python', 'Javascript', 'Typescript'],
    edad: 24,
    titulado: false
};
//! Se puede sobreescribir los datos, pero tiene que tener la misma estructura, no puede tener más propiedades ni menos.
programador = {  //* esto es CORRECTO
    nombre: 'Luis',
    lenguajes: ['Java', 'Sql', 'C++', 'C#'],
    edad: 25,
    titulado: true
}

// programador = {  //* esto es INCORRECTO
//     Nombre: 'Luis',
//     lenguajes: ['Java', 'Sql', 'C++', 'C#'],
//     edad: 25,
//     titulado: true,
//     escuela: 'TESCI'
// }