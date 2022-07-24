function maiorNum(){

let n1 = window.parseInt(prompt("Informe o primeiro número:"))


while(isNaN(n1)){

    alert("O valor informado não é um número!")
    n1 = window.parseInt(prompt("Informe o primeiro número:")) 

}


let n2 = window.parseInt(prompt("Informe o segundo número:"))

while(isNaN(n2)){

    alert("O valor informado não é um número!")
    n2 = window.parseInt(prompt("Informe o segundo número:"))

}


let n3 = window.parseInt(prompt("Informe o primeiro número:"))


while(isNaN(n3)){

    alert("O valor informado não é um número!");
    n3 = window.parseInt(prompt("Informe o terceiro número:"));

}

    if(n1>n2 && n1>n3){

   document.getElementById("resposta").innerHTML = `O maior número é: ${n1}`
  
    }else if(n2>n1 && n2>n3){

    document.getElementById("resposta").innerHTML = `O maior número é: ${n2}`

    }else if(n3>n1 && n3>n2){

    document.getElementById("resposta").innerHTML = `O maior número é: ${n3}`

    }else{

    document.getElementById("resposta").innerHTML = `Os números inseridos (${n1}, ${n2} e ${n3}) são iguais.`


    }



}