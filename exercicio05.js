

function bruh(){

 let conteudo = window.prompt("Informe o seu turno: ");

 if(conteudo.toLowerCase()=="m" || conteudo.toLowerCase() == "M-matutino"){

  document.getElementById("resposta").innerHTML = "Bom dia ";

 }else if(conteudo.toLowerCase()=="v" || conteudo.toLowerCase()=="V-Vespertino"){

  document.getElementById("resposta").innerHTML = "Boa tarde!";

  }else if(conteudo.toLowerCase()=="n" || conteudo.toLowerCase() ==  "N- Noturno" ){

    document.getElementById("resposta").innerHTML = "Boa noite";

  }else{

     document.getElementById("resposta").innerHTML = "Resposta inválida!"

  }




}
