function operaciones(operador) {
    let numero1 = parseFloat(document.getElementById('numberOne').value);
    let numero2 = parseFloat(document.getElementById('numberTwo').value);
    let res;

    switch (operador) {
        case '+':
            res = numero1 + numero2;
            break;
        case '-':
            res = numero1 - numero2;
            break;
        case '*':
            res = numero1 * numero2;
            break;
        case '/':
            if (numero2 == 0) {
                document.getElementById('resultado').innerText = 'Error, no se puede dividir entre 0 (cero)'
                return;
            }
            res = numero1 / numero2;
            break;
        default:
            document.getElementById('resultado').innerText = 'Error en la operación.'
            return;
    }
    document.getElementById('resultado').innerText = res;
}

document.getElementById('suma').addEventListener('click', function(){
    operaciones('+')
});

document.getElementById('resta').addEventListener('click', function(){
    operaciones('-')
});

document.getElementById('multi').addEventListener('click', function(){
    operaciones('*')
});

document.getElementById('division').addEventListener('click', function(){
    operaciones('/')
});