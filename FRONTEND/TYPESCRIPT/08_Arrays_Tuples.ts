//! Array
//? Inferencia es la capacidad del compilador para deducir el tipo de los elementos dentro de un array en base a los valores con los que inicializa.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error ya que es un valor :number
//numbers.push("2"); Error: ya que es un string  el array es de numeros

//! Tuplas
let definiendoTupla: [number, boolean, string];
definiendoTupla = [5, false, 'Coding God was here'];

//* Como recomendación se sugiere que las tuplas sean de solo lectura para evitar la mutación de elementos.
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'Tupla de solo lectura (readonly)'];
//ourReadonlyTuple.push('Coding God took a day off'); Dará error ya que no se puede modificar la tupla.

//* Nombras tuplas: Las tuplas con nombre nos permiten proporcionar contexto para nuestros valores en cada índice.
const graph: [x: number, y: number] = [55.2, 41.3];

//* Desctructuración de tuplas: Dado que las tuplas son matrices, también podemos desestructurarlas.
const graph1: [number, number] = [55.2, 41.3];
const [x, y] = graph;

//! Destructurando Arrays
//* Antes
const vehicles = ['mustang', 'f-150', 'expedition'];
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

//* Ahora
const vehicles1 = ['mustang', 'f-150', 'expedition'];
const [car1, truck1, suv1] = vehicles1;

//! Ejemplo de destructuración
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(4, 7);