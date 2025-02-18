/*
? Promises: son un objeto que representa el resultado eventual de una operación asincrónica. Es decir, son una
?   forma de manejar el flujo de código cuando no sabemos cuánto tiempo tardará una operación en completarse.
*/
//! Sintaxis
let myPromise = new Promise(function (myResolve, myReject) {
    //"Producing Code" (May take some time)
    myResolve(); // when successful
    myReject();  // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);

//! Ejemplo Promesa no Asíncrona
let promesa = new Promise((resolve, reject) => {
    let res = 0;
    if (res == 0) {
        resolve("¡Éxito!");
    } else {
        reject(Error("¡Falló!"));
    }
});
//Para manejar una promesa, puedes usar los métodos .then(), .catch(), y .finally()4. Por ejemplo:
promesa.then((resultado) => {
    console.log(resultado); // "¡Éxito!"
}, (error) => {
    console.log(error); // Error: "¡Falló!"
});

//! Ejmplos Promesa Asíncrona
function hacerAlgoAsincrono() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultado = Math.random();
            if (resultado > 0.5) {
                resolve(resultado);
            } else {
                reject('Hubo un error');
            }
        }, 1000);
    });
}
hacerAlgoAsincrono()
    .then(resultado => {
        console.log(`El resultado es ${resultado}`);
    })
    .catch(error => {
        console.error(`Hubo un error: ${error}`);
    });