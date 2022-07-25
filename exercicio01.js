function maiorNum(){

let n1 = window.parseInt(prompt('Informe o primeiro número:'));
while(isNaN(n1)){

    window.alert("O valor informado não é um número!");
    n1 = window.Number(prompt('Informe o primeiro número:'));


}

let n2 = window.parseInt(prompt("Informe o segundo número:"))

while(isNaN(n2)){

    window.alert("O valor informado não é um número!");
    n2 = window.parseInt(prompt('Informe o segundo número:'));


}

if(n1>n2){

    document.getElementById("resposta").innerHTML = `O maior número é: ${n1}`
}else if(n2>n1){

    document.getElementById("resposta").innerHTML = `O maior número é: ${n2}`
}else{

    document.getElementById("resposta").innerHTML = `Ambos os números digitados (${n1} e ${n2}) são iguais.`

}


}