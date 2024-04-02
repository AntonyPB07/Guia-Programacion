//TRY-CATCH
try {
    // Código que puede generar una excepción
    let resultado = 10 / A; // Esto generará una excepción de división por cero
    console.log(resultado); // Esta línea nunca se ejecutará debido a la excepción
} catch (error) {
    // Bloque catch para manejar la excepción
    console.error("Se ha producido un mega error, cuate:", error.message);
} finally {
    // Bloque finally (opcional)
    console.log("El bloque finally siempre se ejecuta, independientemente de si hubo una excepción o no.");
}

//THROW ---> Se utiliza para generar manualmente una excepción. Comúnmente se lanza un objeto de error para proporcionar información detallada sobre el error.
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}
try {
    let resultado = dividir(10, 0); // Esto generará una excepción usando throw
    console.log("El resultado de la división es:", resultado); // Esta línea nunca se ejecutará
} catch (error) {
    console.error("Se ha producido un error, cuate:", error.message);
}