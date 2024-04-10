//! PRIMITIVOS
//* string, number, boolean, undefined, null.
const nombre: string = 'Antonio';
const edad: number = 24;
let mentira: boolean = true;
let indefinido: undefined;
let anulado: null = null;

//* Template literals (backticks)
const frase: string = `Mi nombre es ${nombre}`;

//! COMPUESTOS ESTRUCTURADO
//* objetc, array, enum, function.
const objeto = {
    nombre: 'Antonio',
    apellido: 'Pérez',
    edad: 24,
    lenguajes: ['Python', 'Javascript', 'SQL']
};


const palabras: string[] = ['Sony', 'Microsoft', 'Nintendo'];
const numeros: number[] = [1, 5, 7, 3, 5, 9];
const mezclaTextoNumeros: (string|number)[] = [1, 'Antonio', 24, 'Luis'];

enum personajes {
    thor,
    spiderman,
    galactus,
    hulk
};

enum clubesFutbol { //! STRING ENUM
    mexico = 'America',
    inglaterra = 'Liverpool',
    españa = 'Real madrid'
};


function sumar(a: number, b: number): number { //! TIPADO EXPLÍCITO
    return a + b;
};

const dividir = (a: number, b: number) => a / b; //! FUNCIÓN FLECHA CON RETORNO EXPLÍCITO

function saludar1(nombre: string, apellido: string, edad: number): string { //! FUNCIÓN CON PARAMETOS OPCIONALES
    if (edad !== undefined) {
        return `Mi nombre completo es ${nombre} ${apellido} y tengo ${edad} años de edad.`
    } else {
        return `Mi nombre completo es ${nombre} ${apellido}.`
    }
};

function saludar2(nombre: string, edad: number = 24): string { //! Funciones con parámetros por defecto.
    return `Mi nombre es ${nombre} y tengo ${edad} años.`;
};

//! DEFINIDOS POR EL USUARIO
//* class, interface, type.
class Persona {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    saludar2() {
        console.log(`Mi nombre es ${nombre}`);
    }
};


interface America { //! Interface básica
    nombre: string;
    fundacion: string;
    titulos: number;
};

interface Jugador { //! Interface con propiedades opcionales "?""
    numeroPlayera: number;
    colorCalcetas?: string;
    equipo: string;
}

interface Comparador { //! Interface para funciones
    (a: number, b: number): boolean;
};

interface Persona2 { //! Interface para clases
    nombre: string;
    edad: number;
    saludar2(): void;
}


type Numero = number; //! Type básico

type Persona1 = { //! Type básico objeto literal
    nombre: string;
    edad: number;
}

type nombre = string | null; //! Type con union types

type Producto1 = { //! Type con propiedades opcionales
    nombre: string;
    descripcion?: string;
}

type Comparador1 = { //! Type para funciones
    (a: number, b: number):boolean;
}

type Persona3 = { //! Type para clases
    nombre:string;
    edad:number;
    saludar():void;
}