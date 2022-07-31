function maiorNum(){

    let maiorNum = 0


for(let i=1; i<=5; i++){

 let numeros = parseInt(prompt("Informe o "+i+" número"))

 if(numeros>maiorNum){

    maiorNum = numeros
    console.log("O maior número é: "+maiorNum)

 }


}




}