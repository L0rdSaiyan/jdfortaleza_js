function imparPar(){

let num = window.parseInt(prompt("Informe um número: "));

if(num%2==1){

document.getElementById("resposta").innerHTML = `o número ${num} é impar!`

}else{

document.getElementById("resposta").innerHTML = `O número ${num} é par!`

}
}