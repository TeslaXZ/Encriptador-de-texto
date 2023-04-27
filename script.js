//funcion que quitara los elementos de la salida del texto
function salidaFinal(){

    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("copiar").style.display = "inline";
}
//funcion que encripta el texto  z
function encriptarTexto(){

    let entrada =  document.getElementById("areatexto").value;
    let salida = document.getElementById("resultado");
    if(/[áéíóúÁÉÍÓÚ]/.test(entrada)||entrada.toLowerCase() != entrada ){
        
    }
    else if(entrada == ""){

    }
    else {
        salida.innerText = entrada.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
        salidaFinal();
    }    
}
//funcion que desencripta el texto
function desencriptarTexto(){
    
    let entrada =  document.getElementById("areatexto").value;
    let salida = document.getElementById("resultado");

    if(/[áéíóúÁÉÍÓÚ]/.test(entrada)||entrada.toLowerCase() != entrada ){
        
    }
    else if(entrada == ""){
        
    }
    else{
    salida.innerText = entrada.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    salidaFinal();
    }
}
//funcion copiar
function copiar(){

    let salida = document.getElementById("resultado").innerHTML
    navigator.clipboard.writeText(salida)
    document.getElementById("areatexto").value = "";

}
//funcio que valida el texto si el usuario ingresa mayusculas o palabras con acento. En caso de ser asi el mensaje inicial pasara a ser rojo y se hara mas grande 
function validartexto(){

        let entrada = document.getElementById("areatexto").value;
        let error = document.getElementById("error")

        if (entrada == ""){
            error.style.color = "#616970"
            error.style.fontSize = "10px"
        }
        else if(/[áéíóúÁÉÍÓÚ]/.test(entrada)||entrada.toLowerCase() != entrada ){
            
                error.style.color = "red"
                error.style.fontSize = "11px"
            }
        else{
                error.style.color = "#616970"
                error.style.fontSize = "10px"
            }

    }


    

    



