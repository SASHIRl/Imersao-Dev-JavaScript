var carta1 = {
    nome: "Sora",
    image: "https://i.pinimg.com/originals/a2/ad/7b/a2ad7be2590637e074ca612ea089b863.jpg",
    atributos: {
        ataque: 10,
        defesa: 6,
        magia: 7
    }
};

var carta2 = {
    nome: "Link",
    image: "https://i.pinimg.com/originals/2e/ff/e3/2effe3db2eace12322518fbce986546e.png",
    atributos: {
        ataque: 10,
        defesa: 9,
        magia: 0
    }
};

var carta3 = {
    nome: "Gandalf",
    image: "https://i.pinimg.com/originals/f3/49/65/f34965f45bb1466fd0ac88ec5247a0af.jpg",
    atributos: {
        ataque: 8,
        defesa: 3,
        magia: 10
    }
};

var carta4 = {
    nome: "Dumbledore",
    image: "https://i.pinimg.com/736x/fa/eb/fd/faebfd090ec6ddac6b2188c3e4fb87b8.jpg",
    atributos: {
        ataque: 3,
        defesa: 8,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3, carta4];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {

    while(numeroCartaMaquina == numeroCartaJogador) {
        var numeroCartaMaquina = parseInt(Math.random() * 4);
        var numeroCartaJogador = parseInt(Math.random() * 4);
    }

    cartaMaquina = cartas[numeroCartaMaquina];
    cartaJogador = cartas[numeroCartaJogador];


    console.log(cartaJogador)
    console.log(cartaMaquina)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;   

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for(var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(atributoSelecionado == null) {
        elementoHtmlResultado = "<p class='resultado-final'>É necessário selecionar um dos atributos</p>"
    }

    if(valorCartaJogador > valorCartaMaquina) {
        elementoHtmlResultado = "<p class='resultado-final'> Venceu</p>"
    } else if(valorCartaMaquina > valorCartaJogador) {
        elementoHtmlResultado = "<p class='resultado-final'> Perdeu</p>"
    } else if(valorCartaJogador != null && valorCartaJogador == valorCartaMaquina){
        elementoHtmlResultado = "<p class='resultado-final'> Empatou</p>"
    }
    elementoResultado.innerHTML = elementoHtmlResultado;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.image})`;
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.image + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";


    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + 
        cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    //var nome = "<p class='carta-subtitle'>" + cartaJogador.nome + "</p>";
    //moldura: A imagem da moldura criada pela Alura
    //nome: a var nome criada utilizando a tag p com template string
    //tagHTML: tagHTML utilizada para criar a div 'opcoes'
    //opcoesTexto: cada um dos atributos que serão escritos na tagHTML
    //</div> fechamento da div aberta em tagHTML
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.image})`;
    //divCartaMaquina.style.backgroundImage = "url(" + divCartaMaquina.image + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";


    var opcoesTexto = "";
    for(var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " +
        cartaMaquina.atributos[atributo] + "<br>";
    }
    

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}