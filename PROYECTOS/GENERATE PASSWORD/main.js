function generatePassword(base, length) {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
}

function generate() {
    let length = parseInt(range.value);

    let base = "";
    let baseMinus = "abcdefghijklmnopqrstuvwxyz";
    let baseMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (mayus.checked) base += baseMayus;

    if (minus.checked) base += baseMinus;

    if (nums.checked) base += numbers;

    if (char.checked) base += symbols;

    const pass = document.getElementById('password_generate');
    pass.value = generatePassword(base, length);
}

document.getElementById('button_password').addEventListener('click', function(){
    generate();
});