let calificaciones = [8.1, 9, 10, 6.3, 4.2, 9.4, 8.7, 6.7, 7, 5.2, 10, 10];
let cantidad_calif = calificaciones.length;
calificaciones[0] = 5
calificaciones.push(5); //agrega nuevo elemento
calificaciones.push(5);
calificaciones.pop(); //elimina
calificaciones.shift(); // elimina el primer elemento
calificaciones.unshift('palabra', 'agregada', 'al', 'arreglo'); //agrega elementos al inicio del arreglo
calificaciones.splice(3, 3, 100, 100, 99, 88, 77) //el primer digito se posiciona en el indice del arreglo, el segundo valor es para saber cuantos valores se eliminarán a partir de el, y los siguientes valores son los nuevos que se le agregan al arreglo.
calificaciones.reverse(); //ordena los elementos de manera inversa
calificaciones.sort(); //ordena elementos de manerea alfabetica
calificaciones.fill(); // rellena todos los elementos con un valor estático
console.log(calificaciones);
console.log(cantidad_calif);

let nombres = ['antonio', 'luis', 'cristiano', 'messi'];
let apellidos = ['perez', 'becerra', 'ronaldo', 'lionel']
let nombre_completo = nombres.concat(apellidos);
console.log(nombre_completo);
let nombres_slcie = nombres.slice(1, 3);
console.log(nombres_slcie);
let nombres_join = nombres.join();
console.log(nombres_join);

let numeros_pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num_par = numeros_pares.filter(numero => {
    return numero % 2 == 0;
});
console.log(num_par);

let frutas = ['manzana', 'fresa', 'mango', 'uva', 'mango', 'melon'];
let frutes = frutas.some(frutita => {
    return frutita.length > 6;
});
console.log(frutes);


let cadena = ('Hola, mi nombre es Luis Antonio Pérez Becerra');
let contador = 0;
let caracteres = cadena.split('');
caracteres.forEach(caracter => {
    if (caracter.toLowerCase() === 'a'){
        contador++;
    }
});
console.log(contador)