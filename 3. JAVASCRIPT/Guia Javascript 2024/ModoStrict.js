"use strict"; // se tiene que poner al inicio del programa o al inicio de una función
//su función es trabajar de manera estricta, no puede manejar variables sin antes definirlas

//EJEMPLO
/*x=10;
console.log(x); nos da error ya que la x no está definida*/

let y = 10;
console.log(y); // esta es la manera correcta, ya que se está definiendo la variable

function miFuncion(){
    "use strict"; //aquí lo estamos poniendo al inicio de la función
    let q = 1;
    console.log(q);
}
miFuncion();