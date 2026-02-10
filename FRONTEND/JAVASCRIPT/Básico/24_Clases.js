// CONSTRUIR NUESTRA CLASE
class Consolas {
    constructor(nombre, compañia) {
        this.nombre = nombre;
        this.compañia = compañia;
    }
}

let persona = new Consolas("Playstation", "Sony");
console.log(persona);

// MÉTODO GET Y SET EN UNA CLASE
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Luis", "Pérez");
console.log(persona1);

persona1.nombre = "Luis Antonio"; //se hace uso de set

console.log(persona1.nombre); // se hace uso de get

/* NOTA: al trabajar con clases, no se puede hacer HOISTING, es decir, primero la declaramos y luego se ocupa, 
a diferencia de una función que se puede usar antes o despues de definirla. */

// al inicializar quokka, ya nos muestra el mensaje que debemos de ponerlo despues de inicializar la clase Color.

//let col = new Color("Rojo","Azul"); aqui lo comenté, pero se quito el comentario se ve el error
class Color {
    constructor(color1, color2) {
        this._color1 = color1;
        this._color2 = color2;
        return this._color1;
    }
} // para que esto sea correcto, debemos de poner primero la clase y luego el objeto.

// HERENCIA ---> nos permite hacer que un objeto herede los comportamientos de otro
class Padre {
    constructor(edad, profesion) {
        this._edad = edad;
        this._profesion = profesion;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get profesion() {
        return this._profesion;
    }
    set profesion(profesion) {
        this._profesion = profesion;
    }
    datosCompletos() { //este metodo lo vamos a heredar a la clase hijo
        return "Tiene " + this.edad + " años, y su profesión es: " + this.profesion;
    }
}

class Hijo extends Padre {
    constructor(edad, profesion, carrera) { //en el constructor se tiene que poner todos los parámetros, incluyendo los de la clase padre o clase donde lo está heredando
        super(edad, profesion);// esta linea es para que trabaje con los datos de la clase padre, sin esta linea no podría funcionar
        this._carrera = carrera;
    }
    get carrera() {
        return this._carrera;
    }
    set carrera(carrera) {
        this._carrera = carrera;
    }
}

let hijo1 = new Hijo("24", "Analista de datos", "Ingeniero en sistemas");

console.log(hijo1);

// se ve que el metodo fue heredado correctamente ya que podemos hacer uso del metodo llamando a hijo por medio de hijo1
console.log(hijo1.datosCompletos() + " y estudió la carrera de: " + hijo1._carrera)

// SOBREESCRITURA
class Madre {
    constructor(ocupacion, estcivil) {
        this._ocupacion = ocupacion;
        this._estcivil = estcivil;
    }
    get ocupacion() {
        return this._ocupacion;
    }
    set ocupacion(ocupacion) {
        this._ocupacion = ocupacion;
    }
    get estcivil() {
        return this._estcivil;
    }
    set estcivil(estcivil) {
        this._estcivil = estcivil;
    }
    datesCompletes() {
        return this._ocupacion + "" + this._estcivil
    }
    toString() { // este es el metodo toString
        //aquí se aplica el polimorfismo (multiples formas en tiempo de ejecucion)
        return this.datesCompletes();
    }
    static saludar() {
        console.log("hola putos");
    }
    static saludos(persona) {
        console.log(madre.ocupacion);
    }
}

class Hija extends Madre {
    constructor(ocupacion, estcivil, gradoescolar) {
        super(ocupacion, estcivil);
        this._gradoescolar = gradoescolar;
    }
    get gradoescolar() {
        return this._gradoescolar;
    }
    set gradoescolar(gradoescolar) {
        this._gradoescolar = gradoescolar;
    }
    datesCompletes() { //para sobreescribir el metodo, se tiene que poner el metodo que está en la clase padre en la clase hijo, mismo nombre debe de tener
        return super.datesCompletes() + " " + this._gradoescolar; //con el super retornamos todo el valor que hay en ese metodo de la clase padre, solo le concatenamos el valor de gradoescolar de la clase hija
    }
    static saludos(persona) {
        console.log(madre._estcivil);
    }
}

let madre = new Madre("Enfermera", "Casada");
console.log(madre.toString());

let hija1 = new Hija("mama luchona ", "soltera", "primaria trunca");
console.log(hija1);
console.log(hija1.datesCompletes());

//aqui se aplica el metodo toString
console.log(hija1.toString());


//CLASE OBJECT ---> esta clase es la clase "padre" de todo javascript


//STATIC ---> el metodo static solamente se pueden mandar a llamar desde la clase, no por medio de un objeto.
//en la linea 115 agregué el metodo static saludar, este devuelve un impresion en consola. Para llamarlo se hace con el nombre de la CLASE, seguido del nombre del metodo
Madre.saludar(); //linea 115 de la clase Madre.
Hija.saludar(); //linea 134 de la clase Hija.

Hija.saludos(); //imprime Casada
Madre.saludos(); // imprime Enfermera

//ATRIBUTOS ESTÁTICOS
class primario {

    static contadorPersonaje = 100; // atrbituto de nuestra clase, ya que es estático, por lo tanto no se maneja por objetos

    lugarAscendencia = "México"; // atributo no estático, este es de los objetos, se maneja por medio de objetos, no de la clase

    constructor(personaje, raza) {
        this._personaje = personaje;
        this._raza = raza;
    }
    get personaje() {
        return this._personaje;
    }
    set personaje(personaje) {
        this._personaje = personaje;
    }
    get raza() {
        return this._raza;
    }
    set raza(raza) {
        this._raza = raza;
    }
}
class secundario extends primario {
    constructor(personaje, raza, vestimenta) {
        super(personaje, raza);
        this._vestimenta = vestimenta;
    }
    get vestimenta() {
        return this._vestimenta;
    }
    set vestimenta(vestimenta) {
        this._vestimenta = vestimenta;
    }
}

let contador = new primario();
//por medio de un OBJETO NO SE PUEDE, tiene que ser directo de la clase

console.log(contador.contadorPersonaje); //por medio de objeto

console.log(primario.contadorPersonaje); //por medio de la clase

console.log(secundario.contadorPersonaje); //al ingresar mediante la clase hija tambien nos da

primario.contadorPersonaje++;

console.log(primario.contadorPersonaje);

let naci = new primario();

console.log(naci.lugarAscendencia); // se manda a llamar por medio de un objeto, ya que si lo hacemos por medio de la clase da error

// CREACIÓN DE CONSTANTES ESTÁTICAS EN JAVASCRIPT
class futbol {
    static personas = 0;
    static get partesEstadio() { //aquí se creo al constante estática, solo es para lectura, no se puede modificar
        return 3;
    }
    constructor(edificio, carrera) {
        this._edificio = edificio;
        this._carrera = carrera;
        if (futbol.personas < futbol.partesEstadio) {
            this.fanID = ++futbol.personas;
        }
        else {
            console.log("Ha sobrepasado la capacidad");
        }
    }
}
let aficionado1 = new futbol();
let aficionado2 = new futbol();
let aficionado3 = new futbol();
let aficionado4 = new futbol();

//nos tira 3 porque creamos 4 vaces un objeto de la clase futbol, por eso no sale el mensaje de que hemos sobrepasado la capacidad
console.log(futbol.personas);