//! "use strict"; --> Así se pone. 
//! Se tiene que poner al inicio del programa o al inicio de una función.

//* Su función es trabajar de manera estricta, no puede manejar variables sin antes definirlas.

function miFuncion() {
    "use strict"; //aquí lo estamos poniendo al inicio de la función
    let q = 1;
    console.log(q);
}
miFuncion();

//! Cosas que NO se pueden realizar:

//* Using a variable, without declaring it, is not allowed:
x = 3.14;

//* Using an object, without declaring it, is not allowed:
x = { p1: 10, p2: 20 };

//* Deleting a variable (or object) is not allowed.
let x = 3.14;
delete x;

//* Deleting a function is not allowed.
function x(p1, p2) { };
delete x;

//* Duplicating a parameter name is not allowed:
function x(p1, p1) { };

//* Octal numeric literals are not allowed:
// let x = 010;

//* Octal escape characters are not allowed:
// let x = "\010";

//* Writing to a read-only property is not allowed:
const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14;

//* Writing to a get-only property is not allowed:
const obj = { get x() { return 0 } };
obj.x = 3.14;

//* Deleting an undeletable property is not allowed:
delete Object.prototype;

//* The word eval cannot be used as a variable:
let eval = 3.14;

//* The word arguments cannot be used as a variable:
let arguments = 3.14;

//* The with statement is not allowed:
with (Math) { x = cos(2) };

//* In strict mode, a variable can not be used before it is declared:
eval("x = 2");
alert(x);

//* In strict mode, eval() can not declare a variable using the var keyword:
eval("var x = 2");
alert(x);

//* eval() can not declare a variable using the let keyword:
eval("let x = 2");
alert(x);

//* The this keyword in functions behaves differently in strict mode.
//  The this keyword refers to the object that called the function.
//  If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
"use strict";
function myFunction() {
    alert(this); // will alert "undefined"
}
myFunction();