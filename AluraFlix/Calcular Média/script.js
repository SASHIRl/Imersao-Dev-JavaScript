var btn = document.querySelector('#enviar');
btn.addEventListener("click", function(e) {
    e.preventDefault();

    var nota1 = parseFloat(document.querySelector('#primeiraNota').value);
    var nota2 = parseFloat(document.querySelector('#segundaNota').value);
    var nota3 = parseFloat(document.querySelector('#terceiraNota').value);
    var nota4 = parseFloat(document.querySelector('#quartaNota').value);
    var notaFinal = parseFloat((nota1 + nota2 + nota3 + nota4)/4)
    alert("A média é de: " + notaFinal);
})