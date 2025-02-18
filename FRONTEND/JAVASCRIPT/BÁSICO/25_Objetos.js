// CREAR OBJETO
    let tlou = {
        personaje: "principal",
        nombre: "joel",
        apellido: "miller",
        edad: 38
    } //este es un objeto
    console.log(tlou.nombre);

//Agregar métodos al objeto
    let tlouPart2 = {
        personaje: "principal",
        nombre: "elli",
        apellido: "idontknow",
        edad: 26,
        nomCompPersonajes: function(){ // este es el método agregado al objeto
            return this.nombre + " " + this.apellido;
        }
    }
    console.log(tlouPart2.nomCompPersonajes());

// CREAR OBJETO CON NEW
    let residentEvil = new Object();
    residentEvil.personaje1 = "Jill";
    residentEvil.personaje2 = "Chris";
    residentEvil.personaje3 = "Leon";
    console.log(residentEvil);
    console.log(residentEvil["personaje1"]); // esta es otra manera de acceder a las propiedades de un objeto, mediante un arreglo

// FOR IN
    for (nombrePropiedad in residentEvil){ // accedemos a las propiedades mediante un for
        console.log(nombrePropiedad);
        console.log(residentEvil[nombrePropiedad]);
        console.log(nombrePropiedad + ": " + residentEvil[nombrePropiedad]);
    }
// AGREGAR Y ELIMINAR PROPIEDADES DE UN OBJETO
    residentEvil.personaje4 = "Krauser";
    residentEvil.personaje5 = "Ada"; // se agregó al objeto llamado residentEvil las propiedades de personaje 4 y personaje 5.
    console.log(residentEvil);
    
    delete residentEvil.personaje5; // con esto se eliminó la propiedad llamada personaje5 del objeto residentEvil.
    console.log(residentEvil);

// DISTINTAS FORMAS DE DE INMPIMIR UN OBJETO
    //Concatenar cada valor de cada propiedad
    console.log(residentEvil.personaje1 + ", " + residentEvil.personaje2);

    //for in
    for (nombrePropiedad in residentEvil){
        console.log(residentEvil[nombrePropiedad]);
    }

    // mediantte un arreglo
    let personajeArray = Object.values(residentEvil);
    console.log(personajeArray);

    // JSON
    let personajeString = JSON.stringify(residentEvil);
    console.log(personajeString);

// Método GET
    let futbol = {
        equipo: "america",
        estadio: "estadio azteca",
        patrocinador: "nike",
        get plantel (){ // al poner get indicamos que va a obtener algo, sabiendo que al poner get es una funcion y por eso ya no se escribe la palabra function.
            return "el equipo de futbol " + this.equipo + " juega en el " + this.estadio;
        } 
    } // al imprimir el resultado, se quitan los parentesis, debido que al poner get, se sabe que va a obtener algo de esa funcion
    console.log(futbol.plantel);

// Método SET ---> modificar los valores de un atributo
    let equipoFutbol = {
        equipo: "america",
        estadio: "estadio azteca",
        patrocinador: "nike",
        pais: "MX",
        get lang (){
            return this.pais.toLowerCase();
        },
        set lang(lang){
            this.pais = lang.toLowerCase();
        },
        get plantel (){ // al poner get indicamos que va a obtener algo, sabiendo que al poner get es una funcion y por eso ya no se escribe la palabra function.
            return "el equipo de futbol " + this.equipo + " juega en el " + this.estadio;
        } 
    }
    console.log(equipoFutbol.lang);
    // Se modificó el valor de pais, mediante lang se modificó y se puso el texto en minusculas
    equipoFutbol.lang = "Mexico";
    console.log(equipoFutbol.lang);
    console.log(equipoFutbol.pais);

// Metodo constructor de objetos ---> se usa para reutilizar código
    function Persona(nombres, apellidos, emil){
        this.nom = nombres;
        this.apelli = apellidos;
        this.correo = emil;
        this.nombreCompleto = function(){ // aquí se agrega el método "nombreCompleto" al metodo constructor
            return this.nom + " " + this.apelli;
        }
    }
    let padre = new Persona("Antonio","Peres","Sanchez"); // aquí se crea al constructor
    console.log(padre);
    console.log(padre.nombreCompleto());
    padre.nom = "Antoniete";// aqui se cambia la propiedad del nombre de padre
    console.log(padre);

    let madre = new Persona("Norma","Becerra","nbecerra@gmail.com");
    console.log(madre);
    console.log(madre.nombreCompleto());

//FORMAS DE CREAR OBJETOS
    let miObjeto = new Object(); //forma tradicional
    let miObjeto2 = {}; //forma simplificada

    let miCadena = new String ("Hola");
    let miCadena2 = "Hola";

    let miNumero = new Number(1);
    let miNumero2 = 1;

    let miBoolean = new Boolean(false);
    let miBoolean2 = false;

    let miArreglo = new Array();
    let miArreglo2 = [];

    let miFuncion = new Function();
    let miFuncion2 = function(){};

// PROTOTYPE ---> se usa para agregar una nueva propiedad para todos los objetos
    Persona.prototype.sexo = "M"; // se agregó una nueva propiedad al objeto Persona anteriormente creada
    console.log(padre);
    padre.sexo = "M"; //aqui se le agrega esa propiedad al constructor "padre"
    console.log(padre);

// CALL ---> nos permite mandar a llamar un metodo que está en un objeto diferente y usarlo en otro objeto
    let persona1 = {
        nombre: "Luis",
        apellido: "Pérez",
        nombreComplete: function(titulo){ //el argumento titulo le pasaremos valores
            return titulo + ": " + this.nombre + " " + this.apellido;
        }
    }

    let persona2 = {
        nombre: "Javier",
        apellido: "Cordeiro"
    }

    console.log(persona1.nombreComplete("Ingeniero")); //este es el valor que se le pasó al argumento titulo
    //Agegando call hace que el metodo usado en persona1 funcione en persona2
    console.log(persona1.nombreComplete.call(persona2, "Licenciado"));

//APPLY ---> sirve para pasar valores a cierto objeto por medio de un array. es lo mismo que call, solo que este se maneja con array.
let persona11 = {
    nombre: "Luis",
    apellido: "Pérez",
    nombreComplete: function(titulo){ //el argumento titulo le pasaremos valores
        return titulo + ": " + this.nombre + " " + this.apellido;
    }
}

let persona22 = {
    nombre: "Javier",
    apellido: "Cordeiro"
}

console.log(persona11.nombreComplete("Ingeniero")); 
let tituloArray = ["Licenciado en Ingeniería"]; //creamos el arreglo para usarlo en persona22
console.log(persona11.nombreComplete.apply(persona22, tituloArray));