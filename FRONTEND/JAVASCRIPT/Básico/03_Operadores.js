//! Operadores Aritméticos 
let suma = a + b;

let resta = b - c;

let multiplicacion = a * b;

let division = b / c;

let modulo_O_residuo = a % c;

let exponenciacion = a ** c;

let pre_incremento = ++w;

let post_incremento = e++;

let pre_decremento = --w;

let post_decremento = e--;

//! Operadores de asignación
let valorA = 2;
valorA += 1; // valorA = valorA + 1

let valorB = 8;
valorB -= 2; // valorB = valorB - 2

let valorC = 7;
valorC *= 2; // valorC = valorC * 2

let valorD = 9;
valorD /= 3; // valorD = valorD / 3

let valorE = 4;
valorD %= 3; // valorD = valorD % 3

let valorF = 6;
valorD **= 3; // valorD = valorD ** 3

//! Operadores de comparación
let numero = 0;

numero == 'cero'; //operadores iguales

numero != 3; //operandos diferentes

numero === 0; //operandos estrictamente iguales

numero !== 'uno'; //operandos mismo tipo pero diferentes

numero > 1; //mayor que

numero < 1; //menor que

numero >= 2; //mayor o igual que

numero <= 1; //menor o igual que

//! Operadores lógicos
let var1 = 25;
if (var1 >= 15 && var1 <= 30) {
    console.log("Está dentro del rango");
} //! AND = &&

let vacaciones = false, diadescanso = false;
if (vacaciones || diadescanso) {
    console.log("Puedes ir de vacaciones");
} else {
    console.log("No puedes ir de vacaciones");
}//! OR = ||

let valor = false;
if (!valor) {
    console.log("El valor es falso");
} else {
    console.log("El valor es verdadero");
}//! NOT = !

//! Operador ternario --->  Condition ? Expresion1 : Expresion2
//Si la condición es verdadera, se ejecuta la expresion1, si es falsa, se ejecuta la expresión2.
let numeroP = 10, numeroR = 9;
resu = numeroP % 2 == 0 ? "Es par" : "Es impar";

//! Operador de propagación (Spread Operatos)
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5]; // array2 ahora es [1, 2, 3, 4, 5]

//! Combinar arreglos
const emotion = ['?', '?'];
const veggies = ['?', '?', '?', '?'];
const emotionalVeggies = [...emotion, ...veggies];