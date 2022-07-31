function imprimirNum(){

for(let num=1;num<=20; num++){

    let elemento = document.getElementById("container") 
    let paragrafo = document.createElement('p')
    let conteudo = document.createTextNode(num)
    paragrafo.appendChild(conteudo)
    elemento.appendChild(paragrafo)

}

}