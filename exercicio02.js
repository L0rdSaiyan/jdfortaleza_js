function mostrarNum(){

let n1 = window.parseInt(prompt("Informe o primeiro número: "));

while(isNaN(n1)){

window.alert("O valor informado não é um número!");
n1 = window.parseInt.prompt("Informe o primeiro número: ");

}

if(n1>0){

document.getElementById("resultado").innerHTML = `O número ${n1} é um número positivo!`

}else{

document.getElementById("resultado").innerHTML = `O número ${n1} é um número negativo!`

}


}