const $saludarUsuario = document.querySelector('#boton-enviar');

$saludarUsuario.onclick = function() {
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apelidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;

    const resultado = apelidoUsuario + ", " + nombreUsuario + ", " + segundoNombreUsuario + ", " + edadUsuario + "años";
    document.querySelector('#resultado').value = resultado;

    document.querySelector('#saludo').innerText = "Bienvenido/a " + nombreUsuario;
    
    return false;
}