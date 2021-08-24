const tablero = {};
let $cuadrosUsuario = [], count = 0;
let nickName = 'usuario';

document.querySelector('#start').onclick = function (event) {
    event.preventDefault();
    obtenerNombreUsuario();
    iniciarPartida();
}

function iniciarPartida() {
    configurarTablero(tablero);
    mostrarTablero();

    //Manejar el imput del usuario
    document.querySelectorAll('.cuadro').forEach($cuadro => {
        $cuadro.onclick = manejarInputUsuario;
    });
}

function manejarInputUsuario(event) {
    const $cuadroUsuario = event.target;

    $cuadrosUsuario.push($cuadroUsuario);

    agregarColor($cuadroUsuario, tablero.colores);
    agregarPersonaje($cuadroUsuario, tablero.personajes);
    count++;

    if (count === 2) {
        console.log($cuadrosUsuario)
        chequearPar($cuadrosUsuario, $cuadroUsuario, tablero, 1500);

        $cuadrosUsuario = [];
        count = 0;
    }
}

function chequearPar(cuadros, cuadro, tablero, MS) {
    const coloresTablero = tablero.colores;
    const personajesTablero = tablero.personajes;

    setTimeout(function () {
        if (respuesta === 'acertado') {
            agregarColor(cuadro, coloresTablero);
            agregarPersonaje(cuadro, personajesTablero);
            desbloquearInputUsuario();
        } else {
            cuadros.forEach(cuadro => {
                quitarColor(cuadro);
                quitarPersonaje(cuadro);
                desbloquearInputUsuario();
            });
        }
    }, MS);

    agregarColor(cuadro, coloresTablero);
    agregarPersonaje(cuadro, personajesTablero);
    bloquearInputUsuario();
    let respuesta = compararClases(cuadros);

}

function compararClases(cuadros) {
    let respuesta;
    const primerCuadro = cuadros[0], segundoCuadro = cuadros[1];

    const primerClase = primerCuadro.className;
    const segundaClase = segundoCuadro.className;

    if (primerClase === segundaClase) {
        console.log(`Acertaste, ${nickName}!`);
        respuesta = 'acertado';
    }

    return respuesta;
}