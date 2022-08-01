function maiorNum(){

    let n1 = window.parseInt(prompt('Informe o número:'));
    while(isNaN(n1)){
    
        window.alert("O valor informado não é um número!");
        n1 = window.Number(prompt('Informe o primeiro número:'));
    
    }

    while(n1>10 || n1<0){

        window.alert("Esse valor é inválido!")
        n1 = window.Number(prompt('Informe o primeiro número:'));


    }


    window.alert(`O número informado foi: ${n1}`)
    
}