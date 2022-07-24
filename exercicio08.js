function media()
{

let n1 = window.parseFloat(prompt("Informe a primeira nota parcial do aluno: "))

while(isNaN(n1))
{

 alert("O valor informado não é um valor válido!");
 n1 = window.parseFloat(prompt("Informe a primeira nota parcial do aluno: "))

}

let n2 = window.parseFloat(prompt("Informe a segunda nota parcial do aluno: "))

while(isNaN(n2))
{

alert("O valor informado não é um valor válido!")
n2 = window.parseFloat(prompt("Informe a segunda nota parcial do aluno: "))

}


let result = (n1+n2)/2

if(result>=10)
{

 document.getElementById("resposta").innerHTML = `Aprovado com distinção! ${result} `

}else if(result<7)
{

    document.getElementById("resposta").innerHTML = `Reprovado ${result}`

}else if(result>=7)
{

    document.getElementById("resposta").innerHTML = `Aprovado ${result}`

}



}