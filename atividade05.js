function numeros(){

    let soma = 0

    for(let i=1; i<=5;+i++){


        let numeros = window.parseInt(prompt(`Informe o ${i} número: `))
        soma=numeros+soma


    }

    alert(`soma: ${soma}`)
    alert(`Media: ${soma/5}`)




}