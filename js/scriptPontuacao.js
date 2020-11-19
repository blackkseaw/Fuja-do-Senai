var jogadores = new Array();

function cadastrarDados(){
    
    jogadores = JSON.parse(localStorage.getItem("Jogadores"))
    if(jogadores == null)
        jogadores = new Array()
    
    var usuario = {
        nome:document.getElementById('nome').value,
        pontuacao:document.getElementById('pontuacao').value
    }
  
    jogadores.push(usuario)
    alert("Cadastro ralizado com sucesso!");
    
    localStorage.setItem("Jogadores", JSON.stringify(jogadores))


}

document.getElementById("submitButton").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById('submitButton').disabled = true;
}

function teste(){
    jogadores = JSON.parse(localStorage.getItem("Jogadores"))
    if(jogadores != null){
        var tabela = document.getElementById("tabela")
        
        for(var i=0; i<jogadores.length; i++){
            var tr = document.createElement("tr")

            var th = document.createElement("th")
            th.innerHTML = (i+1)
            tr.appendChild(th);

            var tdNome = document.createElement("td")
            tdNome.innerHTML = jogadores[i].nome
            tr.appendChild(tdNome);

            var tdPontuacao = document.createElement("td")
            tdPontuacao.innerHTML = jogadores[i].pontuacao
            tr.appendChild(tdPontuacao);

            tabela.appendChild(tr)
        }
    }    
}