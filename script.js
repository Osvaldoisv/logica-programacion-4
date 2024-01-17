function borrarLista(lista){
    while (lista.firstChild) {              // Se selecciona el primer "hijo"
        lista.removeChild(lista.firstChild);    // Se elimina
    }
    return lista;
}



// Al dar click en el botón, se ejecuta la siguiente función
function Fibonacci(){

    // Declaramos las variables provenientes del html (el input y el resultado mostrado)
    let entrada = document.getElementById("Entrada").value;
    let resultado = document.getElementById("Resultado");
    let lista = document.getElementById("lista-nueva");     // Para borrar elementos de lista a futuro

    // Generamos los valores iniciales de la secuencia de Fibonacci
    let listaInicial = [0,1,1];

    // Comprobamos si el input es distinto de un número
    if (!isNaN(entrada)){

        // Si es que es un número, evaluamos que el número sea mayor que 0;
        if (entrada <= 0){
            resultado.innerHTML = "No hay posiciones negativas ni posición cero, intenta con otro numero";
            resultado.style.color = "red"; 
            borrarLista(lista);
            
        } else {

            // Si la posicion elegida es mayor que 3, evaluamos su posición en Fibonacci
            for (let n = 2; n < entrada - 1; n++){
                nuevoNumero = listaInicial[n] + listaInicial[n-1];
                listaInicial.push(nuevoNumero);

            }

            // Imprimimos resultado
            let rango = listaInicial.slice(0,entrada);
            resultado.style.color = "black";
            resultado.innerHTML = "Resultado final: " + rango[listaInicial.length-1] + " en posición: " + rango.length;

            borrarLista(lista); // Borramos elementos de lista

            // Creamos lista para HTML
            for (let i = 0; i < entrada; i++){
                let nuevaLista = document.createElement("li");      // Creamos elemento hijo para lista en html
                let elementoNuevo = document.createTextNode(rango[i]);      // Al elemento hijo le añadimos la variable correspondiente
                nuevaLista.appendChild(elementoNuevo);                  // Añadimos elemento hijo a la lista
                document.getElementById("lista-nueva").appendChild(nuevaLista);     // Publicamos lista en el DOM
            }
        }
    } else {

        // Si no es número, imprimimos mensaje
        resultado.innerHTML = "Ingrese un número válido";
        resultado.style.color = "red";
        borrarLista(lista);
    }
    
}

