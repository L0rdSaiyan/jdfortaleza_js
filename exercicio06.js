function maiorNum(){

let n1 = window.parseInt(prompt("Informe o primeiro número: ")) 

while(isNaN(n1))
{

window.alert("O valor informado")
n1 = window.parseInt(prompt("Informe o primeiro número: ")) 

}

let n2 = window.parseInt(prompt("Informe o segundo número: ")) 

while(isNaN(n2))
{

window.alert("O valor informado")
n2 = window.parseInt(prompt("Informe o segundo número: ")) 


}

let n3 = window.parseInt(prompt("Informe o terceiro número: ")) 

while(isNaN(n3))
{

window.alert("O valor informado")
n3 = window.parseInt(prompt("Informe o terceiro número: ")) 

}


if(n1>n2 && n1>n3){

 document.getElementById("resposta").innerHTML = `O Maior número é ${n1}`

}else if(n2>n1 && n2>n3){

   document.getElementById("resposta").innerHTML = `O maior número é ${n2}`

}else if(n3>n1 && n3>n2){

   document.getElementById("resposta").innerHTML = `O maior número é: ${n3}`

}else{

   document.getElementById("resposta").innerHTML = `Ambos os números são iguais! (${n1} ${n2} ${n3})`

}


}