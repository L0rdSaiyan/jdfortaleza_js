let nota1 = window.parseInt(prompt("Informe a primeira nota: "));

while(isNaN(nota1)){

  window.alert("O valor inserido não é válido!");
  nota1 = window.parseInt(prompt("Informe a primeira nota: "));

};

let nota2 = window.parseInt(prompt("Informe a segunda nota: "));

while(isNaN(nota2)){

    window.alert("O valor inserido não é válido!");
    nota2 = window.parseInt(prompt("Informe a segunda nota: "));

};

let nota3 = window.parseInt(prompt("Informe a terceira nota: "));

while(isNaN(nota3)){

    window.alert("O valor inserido não é válido!");
    nota3 = window.parseInt(prompt("Informe a terceira nota: "));

};

let nota4 = window.parseInt(prompt("informe a quarta nota: "));

while(isNaN(nota4)){

    window.alert("O valor inserido não é válido!");
    nota4 = window.parseInt(prompt("Informe a quarta nota: "));

};

function calculaMedia(n1,n2,n3,n4){

soma = (n1+n2+n3+n4)/4

if(soma<6){

    window.alert("A nota do aluno é: "+soma+". O aluno ficou abaixo da média.");
    document.write("A nota do aluno é: "+soma+". O aluno ficou abaixo da média.");
}else if(soma<=9){

 window.alert("A nota do aluno é: "+soma+". O aluno está na média.");
 document.write("A nota do aluno é: "+soma+". O aluno está na média.");
}else if(soma==10){

  window.alert("A nota do aluno é: "+soma+". O aluno tirou a nota máxima!");
  document.write("A nota do aluno é: "+soma+". O aluno tirou a nota máxima!")
 };
};

calculaMedia(nota1,nota2,nota3,nota4);
