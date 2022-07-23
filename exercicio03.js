let num1 = window.parseInt(prompt("Informe o primeiro número: "));

while(isNaN(num1)){
window.alert("O valor inserido não é um número válido! Insira um valor válido.");
num1 = window.parseInt(prompt("Informe o primeiro número"))

};

let num2 = window.parseInt(prompt("Informe o segundo número: "));

while(isNaN(num2)){

window.alert("O valor inserido não é um número válido! Insira um valor válido!");
num2 = window.parseInt(prompt("Informe o segundo número: "));

};

//FUNÇÃO QUE SOMA OS NÚMEROS 
function somarNumeros(n1,n2){
soma = n1+n2;
window.alert("A soma dos números é: "+soma);
document.write("A soma dos números é: "+soma);
};
somarNumeros(num1,num2);