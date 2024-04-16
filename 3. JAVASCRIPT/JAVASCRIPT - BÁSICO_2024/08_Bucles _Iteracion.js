let contador = 0;

//! CICLO FOR
for (contador = 0; i < 10; i++) {
    console.log(i + " for");
}

//! CICLO WHILE
while (contador < 3) {
    console.log(contador + " while");
    contador++;
}
console.log("Fin del ciclo while"); 

//! CICLO DO WHILE
do {
    console.log(contador + " do while");
    contador++;
} while (contador < 10);
console.log("Fin del ciclo do while"); 

//! LABELED
miEtiqueta: 
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
            break miEtiqueta; // Sale del bucle externo cuando i es igual a 2 y j es igual a 2
        }
        console.log(i, j);
    }
}

//! BREAK
let o;
for (o = 7; o < 100; o++) {
    if (o % 2 == 0) {
        console.log(o);
        break; //aqui rompe el ciclo, obteniendo el primer valor par de la serie, en este caso es 8 ya que empezamos desde el 7.
    }
}

//! CONTINUE
for (let po = 0; po < 20; po++) {
    if (po % 2 !== 0) {
        continue;
        console.log("hola"); //console ya no se ejecuta porque está despues de continue, por que lo pasa al siguiente console.
    }
    console.log(po);
}

//! FOR OF ---> Itera sobre los elementos de un objeto iterable, como un arreglo.
const array = [1, 2, 3, 4, 5];
for (const elemento of array) {
    console.log(elemento);
}

//! FOR IN ---> Itera sobre los índices o claves (posiciones) del arreglo.(MEJOR USAR FOR OF)
const array2 = [6,7,8,9,10];
for (const elemento in array){
    console.log(elemento);
}