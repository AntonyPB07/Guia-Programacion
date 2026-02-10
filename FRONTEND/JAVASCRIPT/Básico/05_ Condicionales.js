let numero = 0;

//! IF
if (numero > 0) {
    console.log('Es mayor a cero');
}

//! IF-ELSE
if (numero == 0) {
    console.log('El producto es gratis');
} else {
    console.log('el producto tiene un costo');
}

//! IF-ELSE IF
if (numero < 10) {
    console.log('Numero menor que 10');
} else if (numero > 5) {
    console.log('Numero mayor que 5');
} else {
    console.log('Numero mayor a 10');
}

//! SWITCH
let mes = 12, estacion = " ";
switch (mes) {
    case 1: case 2: case 12:
        estacion = "invierno";
        break;
    case 3: case 4: case 5:
        estacion = "primavera";
        break;
    case 6: case 7: case 8:
        estacion = "verano";
        break;
    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    default:
        estacion = "no existe";
}