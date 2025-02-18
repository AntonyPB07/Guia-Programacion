const array = [1, 2, 3, 4, 5];

//! Control arreglo
let accederArreglo = array[1]; //acceder al arreglo
let contarArreglo = array.length; //obtener cantidad de elementos  
array[0] = 6; //modificar elementos del arreglo

//! Constructor
const array = new Array(); //crear un nuevo arreglo vacío
let arregloConElementos = new Array(1, 2, 3, 4, 5); // crear un arreglo con elementos predefinidos
let arregloConLongitud = new Array(10); // Crea un arreglo con una longitud de 10, pero sin elementos definidos
let arregloUnicoElemento = new Array('carro'); // Crea un arreglo con un solo elemento, el número 5

//! Métodos de Modificación:
array.lenght// Cuenta los elemntos de un array
push()// Agrega uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
pop()// Elimina el último elemento del arreglo y devuelve ese elemento.
shift()// Elimina el primer elemento del arreglo y devuelve ese elemento.
unshift()// Agrega uno o más elementos al principio del arreglo y devuelve la nueva longitud del arreglo.
splice()// Permite agregar, eliminar o reemplazar elementos en cualquier posición del arreglo.
reverse()// Invierte el orden de los elementos en el arreglo.
sort()// Ordena los elementos del arreglo (por defecto, se ordenan como cadenas de texto).
fill()// Rellena todos los elementos del arreglo con un valor estático.

//! Métodos de Acceso
concat()// Retorna un nuevo arreglo que combina el arreglo original con otro arreglo o valores.
slice()// Retorna una copia superficial de una porción del arreglo en un nuevo arreglo.
join()// Une todos los elementos del arreglo en una cadena y devuelve esta cadena.
indexOf()// Retorna el primer índice en el que se encuentra un elemento especificado en el arreglo.
lastIndexOf()// Retorna el último índice en el que se encuentra un elemento especificado en el arreglo.
findIndex()// Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -11.
includes()// Determina si un array incluye un determinado elemento y retorna un booleano según corresponda1.
at()// Recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

//! Métodos de Iteración:
forEach()// Ejecuta una función para cada elemento del arreglo.
map()// Crea un nuevo arreglo con los resultados de llamar a una función proporcionada para cada elemento del arreglo.
filter()// Crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por la función proporcionada.
reduce()// Aplica una función a un acumulador y a cada valor del arreglo (de izquierda a derecha) para reducirlo a un solo valor.
reduceRight()// Aplica una función a un acumulador y a cada valor del arreglo (de derecha a izquierda) para reducirlo a un solo valor.
every()// Retorna true si todos los elementos en el arreglo pasan la prueba implementada por la función proporcionada.
some()// Retorna true si al menos un elemento en el arreglo pasa la prueba implementada por la función proporcionada.
find()// Regresa el primer elemento encontrado del arreglo que satisface la condición de la función
//! PREGUNTAR SI ES UN ARREGLO
console.log(Array.isArray(array));