let numero = window.parseInt(prompt("Informe o número: "));

while(isNaN(numero)){

window.alert("O número informado não é um valor válido!");
numero = window.parseInt(prompt("Informe o número: "));

};

function mostrarNumero(num){

sucessor = num+1;
antecess = num-1;
window.alert("O antecessor de "+numero+" é: "+antecess+" e o seu sucessor é: "+sucessor);
document.write("O antecessor de "+numero+" é: "+antecess+" e o seu sucessor é: "+sucessor);

}

mostrarNumero(numero);