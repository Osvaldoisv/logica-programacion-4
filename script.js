let entrada = 8;

let listaInicial = [0,1,1];

let largoLista = listaInicial.length
console.log("hola")
for (let n = 2; n < entrada - 1; n++){
    nuevoNumero = listaInicial[n] + listaInicial[n-1]
    console.log(nuevoNumero)
    listaInicial.push(nuevoNumero)
}

console.log(listaInicial)