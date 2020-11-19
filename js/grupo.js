const prox1 = function(){

    var anna = document.getElementById("ANNA");
        anna.classList.add("hide"); //adiciona a classe hide q faz esconder

        var greg = document.getElementById("GREG");
        greg.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const prox2 = function (){

    var greg = document.getElementById("GREG");
    greg.classList.add("hide"); //adicionou a classe hide, escondendo

    var laura = document.getElementById("LAURA");
    laura.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const ante2 = function (){

    var greg = document.getElementById("GREG");
    greg.classList.add("hide"); //adicionou a classe hide, escondendo

    var anna = document.getElementById("ANNA");
    anna.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const prox3 = function (){

    var laura = document.getElementById("LAURA");
    laura.classList.add("hide"); //adicionou a classe hide, escondendo

    var marcia = document.getElementById("MARCIA");
    marcia.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const ante3 = function (){

    var laura = document.getElementById("LAURA");
    laura.classList.add("hide"); //adicionou a classe hide, escondendo

    var greg = document.getElementById("GREG");
    greg.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const prox4 = function (){

    var marcia = document.getElementById("MARCIA");
    marcia.classList.add("hide"); //adicionou a classe hide, escondendo

    var santi = document.getElementById("SANTI");
    santi.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const ante4 = function (){

var marcia = document.getElementById("MARCIA");
marcia.classList.add("hide"); //adicionou a classe hide, escondendo

var laura = document.getElementById("LAURA");
laura.classList.remove("hide"); //removeu a classe hide, aparecendo
}

const ante5 = function (){

var santi = document.getElementById("SANTI");
santi.classList.add("hide"); //adicionou a classe hide, escondendo

var marcia = document.getElementById("MARCIA");
marcia.classList.remove("hide"); //removeu a classe hide, aparecendo
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);