const button = document.getElementById('ejecutar');

function suma(n1, n2) {
    return n1 + n2;
}

window.addEventListener("DOMContentLoaded", () => {
    ejecutar.addEventListener("click", () => {
        console.log(suma(5, 18));
    })
})
