var ptsFase1 = document.getElementById("pts1").value

var ptsFase2 = document.getElementById("pts2").value

var ptsFase3 = document.getElementById("pts3").value

var ptsSoma = 0

const pontos = function() {
    console.log("Fase1: " + ptsFase1)
    console.log("Fase2: " + ptsFase2)
    console.log("Fase3: " + ptsFase3)
    ptsSoma = ptsFase1 + ptsFase2 + ptsFase3
}
