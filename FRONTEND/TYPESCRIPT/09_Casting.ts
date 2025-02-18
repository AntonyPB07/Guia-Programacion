//! Casting with AS
let x: unknown = 'hello';
console.log((x as string).length); //* En este caso se hace la conversión con (x as string) ya que realmente es un dato string.

let x1: unknown = 4;
console.log((x as string).length); //* Esto no es posible ya que no puede realizar conversiones, si es number tiene que ser (x as number).

//! Casting with <>
let x2: unknown = 'hello';
console.log((<string>x).length); //* Funciona igual que con AS