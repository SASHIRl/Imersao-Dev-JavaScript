function ConverterDolarParaReal() {
    var valorElemento = parseFloat(document.getElementById("valor").value);

    var valorConvertido = valorElemento * 5;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var resultado = "O resultado em real é R$ " + valorConvertido;
    elementoValorConvertido.innerHTML = resultado;
}

function ConverterRealParaDolar() {
    var valorElemento = parseFloat(document.getElementById("valor").value);

    var valorConvertido = valorElemento / 5;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var resultado = "O resultado em real é R$ " + valorConvertido;
    elementoValorConvertido.innerHTML = resultado;
}

function ConverterEuroParaReal() {
    var valorElemento = parseFloat(document.getElementById("valor").value);

    var valorConvertido = valorElemento * 5.50;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var resultado = "O resultado em real é R$ " + valorConvertido;
    elementoValorConvertido.innerHTML = resultado;
}