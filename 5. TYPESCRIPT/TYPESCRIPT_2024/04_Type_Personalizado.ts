//? TYPE: Se utiliza para definir y crear tipos personalizados. Pueden representar una variedad de estructuras de datos, desde tipos simples como números y 
//?     cadenas hasta tipos complejos como objetos, uniones, intersecciones y tipos genéricos.

type Programador = {
    nombre: string,
    tecnologias: string[],
    pc: boolean | string
}

let personaProgramador: Programador = {
    nombre: 'Luis',
    tecnologias: ['Java', 'SQL'],
    pc: false
}

let personaProgramador2: Programador = {
    nombre: 'Pérez',
    tecnologias: ['Java', 'SQL'],
    pc: 'No tiene pc'
}

//* Alias de tipos: Permiten crear nuevos nombres para tipos existentes, mejorando la legibilidad y el mantenimiento del código al proporcionar nombres más descriptivos para tipos complejos.
type Edad = number;
type Nombre = string;
let persona: { nombre: Nombre; edad: Edad } = { nombre: "Alice", edad: 30 };

//* Tipos de Unión: Se pueden usar para definir tipos de unión, que representan una variable que puede contener uno de varios tipos posibles.
/*
type ResultadoInicioSesion = string | boolean; // El inicio de sesión puede retornar una cadena (mensaje de error) o true (éxito)
function iniciarSesion(usuario: string, contrasena: string): ResultadoInicioSesion {
    ... lógica de inicio de sesión
}
let respuestaInicioSesion: ResultadoInicioSesion = iniciarSesion("usuario", "contraseña"); // respuestaInicioSesion puede ser de tipo cadena o booleano
*/

//* Tipos de Intersección: Permiten definir tipos de intersección, que combinan propiedades de múltiples tipos.
/*
type Producto = { nombre: string; precio: number };
type ConId<T> = T & { id: number }; // Tipo de intersección con propiedad 'id' adicional
type ProductoConId = WithId<Producto>; // Combinar Producto y WithId
let producto: ProductoConId = { id: 1, nombre: "Camisa", precio: 20 };
*/

//* Tipos Genéricos: Se pueden usar con genéricos para crear componentes reutilizables que funcionan con diferentes tipos.
type Contenedor<T> = {
    valor: T;
    obtenerValor(): T;
};
let contenedorCadena: Contenedor<string> = { valor: "Hola", obtenerValor: () => "Hola" };
let contenedorNumero: Contenedor<number> = { valor: 42, obtenerValor: () => 42 };
