function digito(dig){
    var num2 = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num2 + dig;
}

function limpaTudo() {
    document.getElementById('resultado').innerHTML = "";
}

function apagaCaractere() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calculo() {
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}