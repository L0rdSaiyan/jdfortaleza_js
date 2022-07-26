function msg(){

let mensagem = window.parseFloat(prompt("Informe a hora do dia"));    

if(mensagem<=12){

document.getElementById("resultado").innerHTML = "Bom Dia!"

}else if(mensagem<19){

document.getElementById("resultado").innerHTML = "Boa Tarde!"

}else if(mensagem>=19){

document.getElementById("resultado").innerHTML = "Boa Noite!";

}


}