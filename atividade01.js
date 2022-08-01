function numeros(){

let pares = 0
let impares = 0

for(let i=1;i<=10;i++){

let numeros = window.parseInt(prompt(`Informe o ${i} número: `))

if(numeros%2==1){

impares++

}else{

    pares++

}


}


console.log(`Quanidade de pares: ${pares}. Quantidade de impares: ${impares}.`)

}

