


function geraNumeros(){
    var mostraDiv = document.getElementById("mostraNumero")
    mostraDiv.innerHTML = ""
    var listaNumero = [] 
    const qdez = document.getElementById("quantasdezenas").value;
    console.log(qdez)
    
    var contador = 1
   
  
    while( contador <= qdez) { 
  
        var sorteado = Math.floor(Math.random() * 60 + 1);
        console.log(sorteado)

       
          
        if (listaNumero.includes(sorteado) == false){
          listaNumero.push(sorteado)
          contador = contador + 1

    }
  }

  listaNumero.map(elemento=>{
    var divResultado = document.createElement("div")
    divResultado.className = "imagemresultado"
    divResultado.innerText = elemento
    mostraDiv.appendChild(divResultado)
  })    
  
}

geraNumeros()

