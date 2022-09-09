$numerosResultado = document.querySelector('#resultado');


const $numerosLista = document.querySelectorAll("li");
let numerosArray = [];
for(i = 0; i < $numerosLista.length; i++){
    numerosArray.push(Number($numerosLista[i].innerText))
}

function calcularPromedio() {
    let sumaTotal = 0;
    for(i = 0; i < numerosArray.length; i++){
        sumaTotal += numerosArray[i];
    }
    return sumaTotal / numerosArray.length;
}

function mostrarElNumeroMasPequenio() {
    let numeroPequenio = numerosArray[0];
    for(i = 1; i < numerosArray.length; i++){
        if(numerosArray[i]<numeroPequenio){
            numeroPequenio = numerosArray[i];
        }
        return numeroPequenio;
    }
}

function mostrarElNumeroMasGrande() {
    let numeroMayor = numerosArray[0];
    for(i = 1; i < numerosArray.length; i++){
        if(numerosArray[i]>numeroMayor){
            numeroMayor = numerosArray[i];
        }
        return numeroMayor;
    }
}
console.log(mostrarElNumeroMasGrande());

