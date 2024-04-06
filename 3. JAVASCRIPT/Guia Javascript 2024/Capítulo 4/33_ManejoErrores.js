//! TRY-CATCH
try {
    let resultado = 10 / A;
    console.log(resultado);
} catch (error) {
    console.error("No se puede dividir 10 entre A: ", error.message);
} finally {
    // Bloque finally (opcional) --> se ejecutará siempre, así se controle un error o no.
    console.log("Haz la división con números, no con letras.");
}

//! THROW ---> Se utiliza para generar manualmente una excepción. Comúnmente se lanza un objeto de error para proporcionar información detallada sobre el error.
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
    console.error("Se ha producido un error: ", error.message);
}