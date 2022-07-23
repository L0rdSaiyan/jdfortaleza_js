let salarioHora = window.parseFloat(prompt("Quanto você ganha por hora?: "));
let horas = window.parseInt(prompt("Quantas horas você trabalhou no mês?: "));

//onload e nan 
function calcSalario(salario,hora){

salarioMensal = salario*hora;

window.alert("O seu salário no final do mês será de: R$"+salarioMensal)+" Reais.";
document.write("O seu salário no final do mês será R$"+salarioMensal+" Reais.");

};

calcSalario(salarioHora,horas);