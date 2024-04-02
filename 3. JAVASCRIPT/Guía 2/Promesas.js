/* Permiten ejecutar código de manera asincrónica y gestionar el resultado exitoso o el error que pueda ocurrir en esa operación. 
Son especialmente útiles cuando se realizan solicitudes a servidores, se leen archivos, se realizan animaciones u otras operaciones que pueden llevar tiempo.*/
let miPromesa = new Promise((resolve, reject) => { //creamos la promesa
    let valor = true;
    if(valor){
        resolve("El valor es verdadero");
    } else{
        reject("El valor es falso");
    }
});
            //resolve toma el valor de value y reject toma el valor de error
miPromesa.then(value => console.log(value), error => console.log(error)); //opcion para invocar la promesa

miPromesa
.then(value => console.log(value))
.catch(error => console.log(error)); //otra opcion para invocar la promesa

//PROMESA CON LA FUNCIÓN setTimeOut
let promesa = new Promise((resolver)=>{
    console.log("Inicio de la Promesa");
    setTimeout(() => resolver("Ejecución de promesa con la función setTimeOut"),5000);
    console.log("Promesa concluida");
});

promesa.then(valor => console.log(valor));

//PROMESA CON ASYNC ---> Indica que una función regresará una promesa
async function misPromesas(){
    return "Uso de ASYCN en PROMESA";
}
misPromesas().then(valores => console.log(valores));

/* PROMESA CON ASYNC Y AWAIT ---> ASYNC indica que una funcion va a regresar una promesa, 
    y AWAIT esperar el resultado de una promesa (solo se puede usar dentro de una funcion declarada con ASYNC)*/
async function PromesaAsyncAwait(){
    let PAA = new Promise((resolver) => {
        resolver("Promesa con AWAIT");
    });
    console.log(await PAA);
}
PromesaAsyncAwait();

//PROMESA CON ASYNC, AWAIT Y SETTIMEOUT
async function PromesaAwaitAsyncTimeout(){
    console.log("Antes de la promesa");
    let promise = new Promise((resolver) => {
        setTimeout(() => resolver("Ejecución de promesa con Await, Async y SetTimeOut"),8000);
    });
    console.log(await promise);
    console.log("Despues de la promesa");
}
PromesaAwaitAsyncTimeout();