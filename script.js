//funcion que quitara los elementos de la salida del texto al momento de encriptar o desencriptar
function salidaFinal(){

    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("copiar").style.display = "inline";
}
//funcion que encripta el texto
function encriptarTexto(){
        
    let entrada =  document.getElementById("areatexto").value;
    let salida = document.getElementById("resultado");

    if(/[áéíóúÁÉÍÓÚ_]/.test(entrada)||entrada.toLowerCase() != entrada || /[^\w\s]/.test(entrada)){
        
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
    if(/[áéíóúÁÉÍÓÚ_]/.test(entrada)||entrada.toLowerCase() != entrada || /[^\w\s]/.test(entrada)){
        
    }
    else if(entrada == ""){
        
    }
    else{
    salida.innerText = entrada.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    salidaFinal();

    }
}

function copiar(){

    let salida = document.getElementById("resultado").innerText
    navigator.clipboard.writeText(salida)
    document.getElementById("areatexto").value = "";

}
//funcio que valida el texto si el usuario ingresa mayusculas, palabras con acento o caracteres especiales. En caso de ser asi el mensaje inicial pasara a ser rojo y se hara mas grande 
function validartexto(){

    let entrada =  document.getElementById("areatexto").value;
    let salida = document.getElementById("resultado");
    if (entrada == ""){
        error.style.color = "#616970"
        error.style.fontSize = "10px"
    }
    else if(/[áéíóúÁÉÍÓÚ_]/.test(entrada)||entrada.toLowerCase() != entrada || /[^\w\s]/.test(entrada)){

        error.style.color = "red"
        error.style.fontSize = "11px"
    }
    else{
        error.style.color = "#616970"
        error.style.fontSize = "10px"
    }

        }


    

    



