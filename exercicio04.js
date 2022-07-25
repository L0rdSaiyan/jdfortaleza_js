function mostrar(){

const conteudo = document.getElementById("field").value

if(conteudo=="M" || conteudo=="m" || conteudo=="masculino")
{

document.getElementById("resultado").innerHTML = "Masculino"
document.getElementById("field").value = ""
}else if(conteudo=="F" || conteudo=="f" || conteudo=="Feminino" || conteudo=="feminino"){

  document.getElementById("resultado").innerHTML = "Feminino";
  document.getElementById("field").value = ""
}else{

 document.getElementById("resultado").innerHTML = "Valor inválido!"
 document.getElementById("field").value = ""

}

}