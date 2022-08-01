function mediaNotas(){

let qnt = window.parseInt(prompt("Quantas notas você deseja calcular?"))
let soma = 0
let media = 0
let qnt2 = qnt

while(qnt>0){

let notas = window.parseFloat(prompt(`Informe a ${qnt} nota: `))
soma = notas+soma
qnt--


}
media = soma/qnt2

console.log(media)

}