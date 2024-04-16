/*
? JSON: (JavaScript Object Notation), es un formato ligero de intercambio de datos. Es un lenguaje de marcado ligero para el 
?   intercambio de información entre sistemas. 

! JSON se basa en dos estructuras básicas:
* Objetos: Son colecciones de pares clave-valor.
* Arreglos: Son colecciones ordenadas de valores.


! Ejemplo Objeto JSON {}
{
    "nombre": "Juan",
    "edad": 30,
    "activo": true,
    "dirección": {
        "calle": "Calle Principal",
        "ciudad": "Ciudad Ejemplo"
    },
    "intereses": ["música", "viajes", "fotografía"]
}

! Ejemplos Arreglo JSON []
[
    "manzana",
    "naranja",
    "plátano"
]

! Ejemplo Con AMBOS (OBJETO, ARREGLO)
{
    "nombre": "Juan",
    "edad": 30,
    "activo": true,
    "dirección": {
        "calle": "Calle Principal",
        "ciudad": "Ciudad Ejemplo",
        "código_postal": "12345"
    },
    "intereses": ["música", "viajes", "fotografía"],
    "amigos": [
    {
        "nombre": "María",
        "edad": 28,
        "activo": false
    },
    {
        "nombre": "Pedro",
        "edad": 32,
        "activo": true
    }
    ]
}

! JSON.parse() --> Se utiliza para converir una cadena JSON válida en un objeto Javascript.
* Sintaxis
let objeto = JSON.parse(cadenaJSON);
* Ejemplo
let jsonString = '{"nombre": "Juan", "edad": 30, "activo": true}';
let objeto = JSON.parse(jsonString);
console.log(objeto.nombre); // Output: Juan
console.log(objeto.edad);   // Output: 30
console.log(objeto.activo); // Output: true

!JSON.stringify() --> Se utiliza para convertir un objeto Javascript en una cadena JSON.
* Sintaxis
let cadenaJSON = JSON.stringify(objeto);
* Ejemplo
let persona = {
    nombre: "Juan",
    edad: 30,
    activo: true,
    intereses: ["música", "viajes", "fotografía"]
};
let jsonString = JSON.stringify(persona);
console.log(jsonString);

Output:
'{"nombre":"Juan","edad":30,"activo":true,"intereses":["música","viajes","fotografía"]}'

? JSON.parse(): Se utiliza principalmente cuando se reciben datos en formato JSON (por ejemplo, desde una API web) y se necesita trabajar con 
?   ellos como objetos JavaScript en el código.

? JSON.stringify(): Se utiliza principalmente cuando se desea enviar datos en formato JSON (por ejemplo, al enviar datos a un servidor a 
?   través de una solicitud HTTP) convirtiendo objetos JavaScript en cadenas JSON para su transmisión.
*/