const $calcularTiempo = document.querySelector('#calcular');

$calcularTiempo.onclick = function() {
    const $horas = document.querySelectorAll('.horas');
    const $minutos = document.querySelectorAll('.minutos');
    const $segundos = document.querySelectorAll('.segundos');

    let horasSumadas = 0;
    for(let i = 0; i < $horas.length; i++){
        horasSumadas += Number($horas[i].value);
    }

    let segundosSumados = 0;
    for(let i = 0; i < $segundos.length; i++){
        segundosSumados += Number($segundos[i].value);
    }

    let minutosSumados = 0;
    for(let i = 0; i < $minutos.length; i++){
        minutosSumados += Number($minutos[i].value);
    }

    const horasASegundos = horasSumadas * 3600;
    const minutosASegundos = minutosSumados * 60;
    
    let totalSegundos = horasASegundos + minutosASegundos + segundosSumados;

    let minutosDeSegundos = Math.floor(totalSegundos / 60);
    const segundosRestantes = totalSegundos % 60;

    const horasDeMinutos = Math.floor(minutosDeSegundos / 60);
    minutosDeSegundos = minutosDeSegundos % 60;

    document.querySelector('#resultado').innerText = horasDeMinutos + " horas, " + minutosDeSegundos + " minutos, " + segundosRestantes + " segundos.";

    return false;
}