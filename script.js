

function Fibonacci(){
    entrada = document.getElementById("Entrada").value;
    let resultado = document.getElementById("Resultado");

    let listaInicial = [0,1,1];
    if (!isNaN(entrada)){
        if (entrada <= 0){
            resultado.innerHTML = "No hay posiciones negativas ni posición cero, intenta con otro numero"
            resultado.style.color = "red";
        } else if (entrada == 1){
            resultado.innerHTML ="Resultado: " + listaInicial[0]
        } else if (entrada == 2){
            resultado.innerHTML ="Resultado: " + listaInicial[0] + "," + listaInicial[1]
        } else if (entrada == 3){
            resultado.innerHTML ="Resultado: " + listaInicial[0] + "," + listaInicial[1] + "," + listaInicial[2]
        } else {
            for (let n = 2; n < entrada - 1; n++){
                nuevoNumero = listaInicial[n] + listaInicial[n-1]
                listaInicial.push(nuevoNumero)
            }
            resultado.innerHTML = "Resultado: " + listaInicial
        }
    } else {
        resultado = "Ingrese un número válido";
    }
    
    
}

