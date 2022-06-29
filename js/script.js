var cartaScorpion = {
    nome: "Scorpion",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ab/Scorpion.png/200px-Scorpion.png",
    atributos: {
        ataque: 80,
        defesa: 80,
        magics:  80,
    }
}

var cartaSubZero = {
    nome: "Sub Zero",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVzSrVfi335a-Zwn0-hSXG2BTliecP7CLVQ&usqp=CAU",
    atributos: {
        ataque: 80,
        defesa: 85,
        magics: 85
    }
}

var cartaSheeva = {
    nome: "Sheeva",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGaIPyeJXhJsh4wBVF7QwKMbZymBlP9exrw&usqp=CAU",
    atributos: {
        ataque: 90,
        defesa: 80,
        magics: 60
    }
}

var cartaSonya = {
    nome: "Sonya Blade",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3E5hoYAGmCNkCn5KfFJo5GRZwfMdI8o4Syg&usqp=CAU",
    atributos: {
        ataque: 75,
        defesa: 75,
        magics: 10
    }
}

var cartaMileena = {
    nome: "Mileena",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNqR4AVQNAKrLXFzYeRq-WMqp1APIs4s7cQ&usqp=CAUv",
    atributos: {
        ataque: 80,
        defesa: 70,
        magics: 80,
    }
}

var cartaGoro = {
    nome: "Goro",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlJnv7i3JB6YS7xfAALYCTxPk5PC57IOeyg&usqp=CAU",
    atributos: {
        ataque: 92,
        defesa: 80,
        magics: 50,
    }
}

var cartaJax = {
    nome: "Jax Briggs",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJrSYZU_mJlqPC93X3gGr-n4iybx6y5VmrA&usqp=CAU",
    atributos: {
        ataque: 80,
        defesa: 90,
        magics:  10,
    }
}

var cartaRaiden = {
    nome: "Raiden",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0zDZUKrYOdk8DkGMFExr-_FTk97ZAup2og&usqp=CAU",
    atributos: {
        ataque: 90,
        defesa: 80,
        magics:  99,
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaScorpion, cartaSubZero, cartaSheeva, cartaSonya, cartaMileena, cartaGoro, cartaJax, cartaRaiden]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPontos()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas() {
    var divQuantidadeCartas = document.getElementById("quantidade-cartas")
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPontos() {
    var divPlacar = document.getElementById("placar")
    var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de Jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPontos()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById("cartas")
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
}

