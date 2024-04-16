//! ID - getElementById
const porID = document.getElementById("miId");

//! CLASE - getElementsByClassName
const porClase = document.getElementsByClassName("miClase");

//! ETIQUETA - getElementsByTagName
const porNombreEtiqueta = document.getElementsByTagName("div");

//! ELEMENTOS POR SU ATRIBUTO "NAME" - getElementsByName
const atributoName = document.getElementsByName("nombre");

//! PRIMER ELEMENTO QUE COINCIDA CON UN SELECTOR CSS - querySelector
const selectorCSS = document.querySelector("#miId .miClase");

//! TODOS LOS ELEMENTOS QUE COINCIDAN CON UN SELECTOR CSS - querySelectorAll
const selectorCssTodos = document.querySelectorAll("div.miClase");