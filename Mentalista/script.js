var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;


function Chutar() {
    const vidas = parseInt(3);
    tentativas = parseInt(tentativas + 1);
    var chute = parseInt(document.getElementById("valor").value);
    console.log(tentativas);

    if (chute < numeroSecreto) {
        document.getElementById("resultado").innerHTML = "O número é maior!"
    } else if (chute > numeroSecreto) {
        document.getElementById("resultado").innerHTML = "O número é menor!"
    } else if (chute == numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Acertou!"
        tentativas = 0;
    }

    if (tentativas >= vidas) {
        document.getElementById("resultado").innerHTML = "Acabaram as tentativas, o número secreto é: " + numeroSecreto;
        console.log("Cai aqui")
    }
}