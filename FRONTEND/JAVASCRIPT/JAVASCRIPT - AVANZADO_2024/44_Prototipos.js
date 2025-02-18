/*
? PROTOTIPO: Es un objeto que sirve como plantilla para crear otros objetos. Los objetos creados a partir de un prototipo heredan sus propiedades y métodos.

* Todos los objetos JavaScript heredan propiedades y métodos de un prototipo:
*   Date Los objetos heredan de Date.prototype
*   Array Los objetos heredan de Array.prototype
*   Person Los objetos heredan de Person.prototype
*   El está en la parte superior de la cadena de herencia del prototipo:Object.prototype

*/

//! Ejemplo 1
function validarCampo(campo) {
    if (campo.value === '') {
        return 'El campo no puede estar vacío.';
    } else if (!campo.validity.valid) {
        return 'El valor introducido no es válido.';
    } else {
        return true;
    }
}
validarCampo.prototype.mostrarMensajeError = function (mensaje) {
    const elementoError = document.getElementById(this.id + '-error');
    elementoError.textContent = mensaje;
    elementoError.classList.add('visible');
};

//! Ejemplo 2
function Animal(nombre) {
    this.nombre = nombre;
}
// Agregar un método al prototipo de Animal
Animal.prototype.saludar = function () {
    console.log(`¡Hola! Soy ${this.nombre}.`);
};
let perro = new Animal('Rex');
let gato = new Animal('Whiskers');
perro.saludar(); // Imprime: ¡Hola! Soy Rex.
gato.saludar(); // Imprime: ¡Hola! Soy Whiskers.

// Extender el prototipo de Animal con un nuevo método
Animal.prototype.emitirSonido = function () {
    console.log(`${this.nombre} emite un sonido.`);
};
// Utilizar el nuevo método emitirSonido
perro.emitirSonido(); // Imprime: Rex emite un sonido.
gato.emitirSonido(); // Imprime: Whiskers emite un sonido.

/*
Animal: Es una función constructora que crea instancias de objetos Animal con una propiedad nombre.
Animal.prototype: Se utiliza para agregar métodos que son compartidos por todas las instancias de Animal.
saludar(): Es un método agregado al prototipo de Animal que permite que cada instancia de Animal salude utilizando su nombre.
emitirSonido(): Es un método adicional agregado al prototipo de Animal que simula que cada animal puede emitir un sonido.
*/