class Persona {
    static contadorPersonas = 0;
    constructor(Nombre, Apellido, Edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._Nombre = Nombre;
        this._Apellido = Apellido;
        this._Edad = Edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get Nombre() {
        return this._Nombre;
    }
    set Nombre(Nombre) {
        this._Nombre = Nombre;
    }
    get Apellido() {
        return this._Apellido;
    }
    set Apellido(Apellido) {
        this._Apellido = Apellido;
    }
    get Edad() {
        return this._Edad;
    }
    set Edad(Edad) {
        this._Edad = Edad;
    }
    toString() {
        return `${this.idPersona} ${this.Nombre} ${this.Apellido} ${this.Edad}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(Nombre, Apellido, Edad, Sueldo) {
        super(Nombre, Apellido, Edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._Sueldo = Sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get Sueldo() {
        return this._Sueldo;
    }
    set Sueldo(Sueldo) {
        this._Sueldo = Sueldo;
    }
    toString() {
        return `${super.toString()} ${this.idEmpleado} ${this.Sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(Nombre, Apellido, Edad, FechaRegistro) {
        super(Nombre, Apellido, Edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._FechaRegistro = FechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get FechaRegistro() {
        return this._FechaRegistro;
    }
    set FechaRegistro(FechaRegistro) {
        this._FechaRegistro = FechaRegistro;
    }
    toString() {
        return `${super.toString()} ${this.idCliente} ${this.FechaRegistro}`;
    }
}

let persona1 = new Persona("Antonio", "Pérez", "24");
console.log(persona1.toString());
let persona2 = new Persona("Alejandro", "Becerra", "18");
console.log(persona2.toString());

let empleado1 = new Empleado("Cristian", "Miranda", "19", "$20,000");
console.log(empleado1.toString());
let empleado2 = new Empleado("Karla", "Miranda", "22", "$15,000");
console.log(empleado2.toString());

let cliente1 = new Cliente("Miguel", "Pineda", "32", new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Andrés", "Manuel", "60", new Date());
console.log(cliente2.toString());