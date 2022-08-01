function fatorial(){

let numero = window.parseInt(prompt("Informe um número: "))
let fatoria = 0
let mult = 1

while(numero>1){

console.log(numero)
mult = numero*mult


numero--

}

console.log(mult)


}