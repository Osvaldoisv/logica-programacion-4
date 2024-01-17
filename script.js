// Al dar click en el botón, se ejecuta la siguiente función
function Fibonacci(){

    // Declaramos las variables provenientes del html (el input y el resultado mostrado)
    let entrada = document.getElementById("Entrada").value;
    let resultado = document.getElementById("Resultado");

    // Generamos los valores iniciales de la secuencia de Fibonacci
    let listaInicial = [0,1,1];

    // Comprobamos si el input es distinto de un número
    if (!isNaN(entrada)){

        // Si es que es un número, evaluamos que el número sea mayor que 0;
        if (entrada <= 0){
            resultado.innerHTML = "No hay posiciones negativas ni posición cero, intenta con otro numero";
            resultado.style.color = "red"; 
            
            // Imprimimos los primeros 3 valores del array dependiendo del caso
        } else if (entrada == 1){
            resultado.innerHTML ="Resultado: " + listaInicial[0];
        } else if (entrada == 2){
            resultado.innerHTML ="Resultado: " + listaInicial[0] + "," + listaInicial[1];
        } else if (entrada == 3){
            resultado.innerHTML ="Resultado: " + listaInicial[0] + "," + listaInicial[1] + "," + listaInicial[2];
        } else {
            
            // Si la posicion elegida es mayor que 3, evaluamos su posición en Fibonacci
            for (let n = 2; n < entrada - 1; n++){
                nuevoNumero = listaInicial[n] + listaInicial[n-1];
                listaInicial.push(nuevoNumero);
            }

            // Imprimimos resultado
            resultado.style.color = "black";
            resultado.innerHTML = "Resultado: " + listaInicial;
        }
    } else {

        // Si no es número, imprimimos mensaje
        resultado.innerHTML = "Ingrese un número válido";
        resultado.style.color = "red";
    }
}

