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

