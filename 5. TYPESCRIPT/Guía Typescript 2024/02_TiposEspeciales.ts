//! NUNCA USAR ANY, EVITARLO A TODA COSTA
//? ANY: Se utiliza para indicar que una variable puede contener cualquier tipo de valor y TypeScript no realizará ningún tipo de verificación de tipo en tiempo de compilación.

let myVariable: any;
// Asignación de diferentes tipos de datos a una variable 'any'
myVariable = 10;               // Número
myVariable = "Hello";          // Cadena de texto
myVariable = true;             // Booleano
myVariable = [1, 2, 3];        // Arreglo
myVariable = { name: "John" }; // Objeto
myVariable = () => console.log("Function"); // Función

// También puedes usar 'any' con arrays y objetos
let myArray: any[] = [1, "two", true];
let myObject: any = { key: "value", count: 5, isEnabled: true };


//! UNKNOWN - EVITAR USARLO --> representa un valor cuyo tipo no se conoce en tiempo de compilación. Requiere una validación de tipo explícita antes de realizar operaciones con él. 
let userInput: unknown = 'hola'
if (typeof userInput === 'string') {
    let strLength = userInput.length; // TypeScript permite el acceso a length porque ahora se conoce que userInput es string
}

//! NEVER -->  representa el tipo de valores que nunca ocurren.
function throwError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
        // do something infinitely
    }
}

//! UNDEFINED --> representa la ausencia intencional de un valor. 
let myVar: number | undefined;
console.log(myVar); // Output: undefined
function getValue(): number | undefined  {
    return myVar = 58;// Function might return a number or undefined
}

//! NULL --> representa la ausencia intencional de un objeto. Se utiliza comúnmente para indicar la ausencia de un valor donde se espera un objeto.
let myObj: string | null = null;
function getObject(): string | null {
    return myObj = 'retornado';// Function might return an object or null
}