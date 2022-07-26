function reajusteSalario(){

    let price = document.getElementById("salario").value
    let dpsReajuste=0
    if(price<=280){

       dpsReajuste = parseFloat(price) + parseFloat((price*20)/100)
       document.getElementById("percentual").innerHTML = 'Percentual do aumento aplicado: 20%. '
       document.getElementById("aumento").innerHTML = `O valor do aumento foi de: R$${(price*20)/100} reais.`


    }else if(price==281 || price<=700){

        dpsReajuste = parseFloat(price) + parseFloat((price*15)/100)
        document.getElementById("percentual").innerHTML = 'Percentual do aumento aplicado: 15%.'
        document.getElementById("aumento").innerHTML = `O valor do aumento foi de: R$${(price*15)/100} reais.`


    }else if(price==701 || price<=1500){

        dpsReajuste = parseFloat(price) + parseFloat((price*10)/100)
        document.getElementById("percentual").innerHTML = 'Percentual do aumento aplicado: 10%. '
        document.getElementById("aumento").innerHTML = `O valor do aumento foi de: R$${(price*10)/100} reais. `


    }else if(price>=1501){

        dpsReajuste = parseFloat(price) + parseFloat((price*5)/100)
        document.getElementById("percentual").innerHTML = 'Percentual do aumento aplicado: 5%. '
        document.getElementById("aumento").innerHTML = `O valor do aumento foi de: ${(price*5)/100} R$ reais.`
    }
    
    document.getElementById("antes").innerHTML = `Salário antes do reajuste: R$${price} reais.`
    document.getElementById("novosalario").innerHTML = `O novo valor do salário será de: R$${dpsReajuste} reais.`
}