const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(range.value);

    let base = "";
    let baseMinus = "abcdefghijklmnopqrstuvwxyz";
    let baseMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (mayus.checked) base += baseMayus;

    if (minus.checked) base += baseMinus;

    if (nums.checked) base += numbers;

    if (char.checked) base += symbols;

    const passwordGenerateElement = document.getElementById('password_generate');
    passwordGenerateElement.value = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    button_password.addEventListener("click", () => {
        generate();
    });
});
