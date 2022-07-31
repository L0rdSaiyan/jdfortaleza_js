function mostrarInt(){

    let numero1 = document.getElementById("num1").value
    let numero2 = document.getElementById("num2").value
    
  
   
if(numero1<=numero2){


    while(numero1<=numero2){
        
        
        let content1 = document.createTextNode(numero1) 
        let local = document.body
        let elemento = document.createElement("p")
        elemento.appendChild(content1)
        local.appendChild(elemento)
        numero1++



}
}
else if(numero2<=numero1){

    while(numero2<=numero1){

        let local = document.body
        let elemento = document.createElement("p")
        let content = document.createTextNode(numero2)
        elemento.appendChild(content)
        local.append(elemento)
        numero2++

   

    }


}






}



