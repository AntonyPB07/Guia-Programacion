//? <script src="exerciseCap1.js"></script>

/* 
*Luis tiene que comprar una computadora para su carrera, pero no tiene dinero, si su papá le da dinero se la va a comprar. 
*Una vez comprada debe de ver si tiene office incluido, si no lo tiene instalado el lo tiene que comprar.
*/

let regaloPapa = false;
let dineroPapa = prompt('Cantidad de dinero que tiene papá');
let precioCompu = prompt('Precio computadora');
let precioOffice = prompt('Precio Office');

if (!regaloPapa && dineroPapa >= precioCompu) {
    console.log(`El papá de Luis le dio ${dineroPapa}.`);
    console.log(`Puede comprarse la computadora ya que cuesta ${precioCompu}.`);
    if (dineroPapa - precioCompu >= precioOffice) {
        console.log(`Luis puede comprar la licencia de Office ya que cuesta ${precioOffice}.`);
    } else {
        console.log(`No le alcanza para comprar la licencia ya que cuesta ${precioOffice}.`);
    }
} else if (!regaloPapa && dineroPapa < precioCompu) {
    console.log('El papá de Luis le dio dinero, pero no le alcanza para la computadora.');
} else {
    console.log('Su papá no le dio dinero');
}

let w = 6; 
let e = 10;
let ww = 7;
let ee = 11;
// Pre-incremento
let pre_incremento = ++w;
console.log("Pre-incremento de w:", pre_incremento); // Output: 7
console.log("Valor de w después del pre-incremento:", w + '\n'); // Output: 7

// Post-incremento
let post_incremento = e++;
console.log("Post-incremento de e:", post_incremento); // Output: 10
console.log("Valor de e después del post-incremento:", e + '\n'); // Output: 11

// Pre-decremento
let pre_decremento = --ww;
console.log("Pre-decremento de ww:", pre_decremento); // Output: 6
console.log("Valor de ww después del pre-decremento:", ww + '\n'); // Output: 6

// Post-decremento
let post_decremento = ee--;
console.log("Post-decremento de ee:", post_decremento); // Output: 11
console.log("Valor de ee después del post-decremento:", ee + '\n'); // Output: 10
