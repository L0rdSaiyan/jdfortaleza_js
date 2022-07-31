function numeros(){

var soma = 0

for(let i=1; i<=30; i++){

soma = soma+i

let local = document.body
let elemento = document.createElement("p")
let conteudo = document.createTextNode(i)
elemento.appendChild(conteudo)
local.appendChild(elemento)


}
let local = document.body
let elemento = document.createElement("h3")
let conteudo = document.createTextNode(`A soma de todos os números é: ${soma}`)
elemento.appendChild(conteudo)
local.appendChild(elemento)


}