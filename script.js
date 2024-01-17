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
            
        } else {

            // Si la posicion elegida es mayor que 3, evaluamos su posición en Fibonacci
            for (let n = 2; n < entrada - 1; n++){
                nuevoNumero = listaInicial[n] + listaInicial[n-1];
                listaInicial.push(nuevoNumero);

                // let nuevaLista = document.createElement("li");
                // let elementoNuevo = document.createTextNode(nuevoNumero);
                // nuevaLista.appendChild(elementoNuevo);
                // document.getElementById("lista-nueva").appendChild(nuevaLista);
            }

            // Imprimimos resultado

            let rango = listaInicial.slice(0,entrada);
            console.log(rango)
            resultado.style.color = "black";
            resultado.innerHTML = "Resultado: " + rango;



            // let nuevaLista = document.createElement("li");
            // let adios = document.createTextNode("adios")
            // nuevaLista.appendChild(adios);
            // document.getElementById("lista-nueva").appendChild(nuevaLista);
        }
    } else {

        // Si no es número, imprimimos mensaje
        resultado.innerHTML = "Ingrese un número válido";
        resultado.style.color = "red";
    }
    
}

