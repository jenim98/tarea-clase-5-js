$numerosResultado = document.querySelector('#resultado');


const $numerosLista = document.querySelectorAll("li");
let numerosArray = [];
for(i = 0; i < $numerosLista.length; i++){
    numerosArray.push(Number($numerosLista[i].innerText))
}

function calcularPromedio(numerosArray) {
    let sumaTotal = 0;
    for(i = 0; i < numerosArray.length; i++){
        sumaTotal += numerosArray[i];
    }
    return sumaTotal / numerosArray.length;
}

function mostrarElNumeroMasPequenio(numerosArray) {
    let numeroPequenio = numerosArray[0];
    for(i = 1; i < numerosArray.length; i++){
        if(numerosArray[i]<numeroPequenio){
            numeroPequenio = numerosArray[i];
        }
        return numeroPequenio;
    }
}

function mostrarElNumeroMasGrande(numerosArray) {
    let numeroMayor = numerosArray[0];
    for(i = 1; i < numerosArray.length; i++){
        if(numerosArray[i]>numeroMayor){
            numeroMayor = numerosArray[i];
        }
        
    }
    return numeroMayor;
}

function mostrarNumeroRepetido(numerosArray) {
    let numeroRepetido = numerosArray[0];
    for(i = 0; i = numerosArray.length; i++){
        if(numerosArray[i]=numeroRepetido){
            numeroRepetido = numerosArray[i];
        }
        return numeroRepetido;
    }
}

$numerosResultado.onclick = function() {
    document.querySelector('#promedio').innerText = "El promedio es " + calcularPromedio(numerosArray);
    document.querySelector('#numero-pequeño').innerText = "El número más pequeño es " + mostrarElNumeroMasPequenio(numerosArray);
    document.querySelector('#numero-grande').innerText = "El número más grande es " + mostrarElNumeroMasGrande(numerosArray);
    document.querySelector('#numero-frecuente').innerText = "El número más frecuente es " + mostrarNumeroRepetido(numerosArray);
}