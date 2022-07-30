function enviarInfo(){

let nome = document.getElementById("texto").value
let senha = document.getElementById("senha").value
let confirmar = window.confirm(`Seu nome é: ${nome} e sua senha é: ${senha}?`)

    if(confirmar==true){

        window.alert(`Login bem sucedido. Bem-vindo(a) ${nome}!`);

    }else{

        window.alert("Verifique suas informações e tente novamente.")

}
}