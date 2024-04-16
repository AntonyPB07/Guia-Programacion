//? Scope se refiere a la accesibilidad de las variables en diferentes partes del código (variables locales y globales).

let variableGlobal = 0;

function varGlobal(){
    console.log(variableGlobal);
}
console.log(variableGlobal);


function varLocal(){
    let variableLocal = 5;
    console.log(variableLocal);
}
varLocal();
console.log(variableLocal);