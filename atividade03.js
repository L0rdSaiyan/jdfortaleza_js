function diaSemana(){

let dia = window.parseInt(prompt("Informe o número do dia da semana: "));

switch (dia){

    case 1:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Domingo"
    break;

    case 2:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Segunda-Feira"
    break;

    case 3:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Terça-Feira"
    break;

    case 4:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Quarta-Feira"
    break;

    case 5:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Quinta-Feira"
    break;

    case 6:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Sexta-Feira"
    break;

    case 7:
        document.getElementById("resposta").innerHTML = "O dia da semana é: Sábado"
    break;

    default:
        alert("Valor inválido!")

}


}