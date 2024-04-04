//Es una función que se pasa como argumento a otra función y se ejecuta después de que esa función haya terminado de ejecutarse

function imprimirResultado(mensaje) {
    console.log(mensaje);
}

function suma(num1, num2, funcionCallback) {
    let res = num1 + num2;
    funcionCallback(`Resultado es: ${res}`);
}
suma(5, 3, imprimirResultado);

//FUNCIÓN setTimeOut

function Callback() {
    console.log("Después de 3 segundos se mostrará esto");
}

setTimeout(Callback, 3000); //despues de 3 segundos se mostró el mensaje. Primero le pasamos la funcion y despues el tiempo que transcurrirá.

setTimeout(function () { console.log("Después de 5 segundos") }, 5000);

setTimeout(() => console.log("Después de 7 segundos"), 7000);

//FUNCIÓN setInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()},${fecha.getMinutes()},${fecha.getSeconds()}`);
}
setInterval(reloj,1000);

/*Las funciones setTimeout y setInterval son dos funciones en JavaScript que se utilizan para programar tareas que se ejecutarán en el futuro de manera asincrónica. 
Ambas funciones son útiles para manejar temporizadores en aplicaciones web y para realizar tareas repetitivas o diferidas.*/

//La función setTimeout se utiliza para ejecutar una función o un fragmento de código después de un retraso específico, medido en milisegundos.

//La función setInterval se utiliza para ejecutar una función o un fragmento de código a intervalos regulares, también medidos en milisegundos.