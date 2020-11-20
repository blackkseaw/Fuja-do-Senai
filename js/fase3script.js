var resposta = 0;

var vidas = 2;

function funfa(){

    var divA = document.getElementById("divvA");
    divA.classList.add("hide"); //adiciona a classe hide q faz esconder

    var div1 = document.getElementById("divv");
    div1.classList.remove("hide"); //removeu a classe hide, aparecendo
} 

const verificar = function (alternativa) {

    var div1 = document.getElementById("divv");
    div1.classList.add("hide"); //adiciona a classe hide q faz esconder

    var div2 = document.getElementById("divv2");
    div2.classList.remove("hide"); //removeu a classe hide, aparecendo

    switch (alternativa) {
        case 'certo':
            resposta = resposta + 5
            console.log('Somou 5')
            break;

        default:
            resposta = resposta + 0
            vidas--
            console.log('somou 0')
            break;
    }

    document.getElementById("pts").value = resposta
    document.getElementById("vida").value = vidas

    if(vidas == 0){
        window.location.href="gameover.html"
    }
}

const verificar2 = function (alternativa) {

    var div2 = document.getElementById("divv2");
    div2.classList.add("hide"); //adicionou a classe hide, escondendo

    var div3 = document.getElementById("divv3");
    div3.classList.remove("hide"); //removeu a classe hide, aparecendo

    switch (alternativa) {
        case 'certo':
            resposta = resposta + 5
            console.log('Somou 5')
            break;

        default:
            resposta = resposta + 0
            vidas--
            console.log('somou 0')
            break;
    }

    document.getElementById("pts").value = resposta
    document.getElementById("vida").value = vidas

    if(vidas == 0){
        window.location.href="gameover.html"
    }
}

const verificar3 = function (alternativa) {
    var div3 = document.getElementById("divv3");
    div3.classList.add("hide"); //adicionou a classe hide, escondendo

    var div4 = document.getElementById("divv4");
    div4.classList.remove("hide"); //removeu a classe hide, aparecendo

    switch (alternativa) {
        case 'certo':
            resposta = resposta + 5
            console.log('Somou 5')
            break;

        default:
            resposta = resposta + 0
            vidas--
            console.log('somou 0')
            break;
    }

    document.getElementById("pts").value = resposta
    document.getElementById("vida").value = vidas

    if(vidas == 0){
        window.location.href="gameover.html"
    }
}


const verificar4 = function (alternativa) {

    var div4 = document.getElementById("divv4");
    div4.classList.add("hide"); //adicionou a classe hide, escondendoo

    var div5 = document.getElementById("divv5");
    div5.classList.remove("hide"); //removeu a classe hide, aparecendo

    switch (alternativa) {
        case 'certo':
            resposta = resposta + 5
            console.log('Somou 5')
            break;

        default:
            resposta = resposta + 0
            vidas--
            console.log('somou 0')
            break;
    }

    document.getElementById("pts").value = resposta
    document.getElementById("vida").value = vidas

    if (vidas == 0) {
        window.location.href="gameover.html"
    }
}

const verificar5 = function (alternativa) {

    var div5 = document.getElementById("divv5");
    div5.classList.add("hide"); //adicionou a classe hide, escondendo

    switch (alternativa) {
        case 'certo':
            resposta + 5
            console.log('Somou 5')
            break;

        default:
            resposta = resposta + 0
            vidas--
            console.log('somou 0')
            break;
    }

    document.getElementById("pts").value = resposta
    document.getElementById("vida").value = vidas

    

    if (vidas == 0) {
        window.location.href = "gameover.html"
    }
}

function sai(){
    window.location.href = './fase4.html'
} 