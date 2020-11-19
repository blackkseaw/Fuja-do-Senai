function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 50 * i) // tempo de surgimento das letras

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);