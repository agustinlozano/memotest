let nickName = 'usuario';

document.querySelector('#start').onclick = function (event) {
    event.preventDefault();
    obtenerNombreUsuario();
    iniciarPartida();
}

function iniciarPartida() {
    const tablero = {};
    let $cuadrosUsuario = [], count = 0;

    configurarTablero(tablero);
    mostrarTablero();

    //Manejar el imput del usuario
    document.querySelectorAll('.cuadro').forEach($cuadro => {
        $cuadro.onclick = function manejarInputUsuario(event) {
            const $cuadroUsuario = event.target;
            
            $cuadrosUsuario.push($cuadroUsuario);

            agregarColor($cuadroUsuario, tablero.colores);
            agregarPersonaje($cuadroUsuario, tablero.personajes);
            count++;

            if (count === 2) {
                chequearPar($cuadrosUsuario, $cuadroUsuario, tablero, 1500);

                $cuadrosUsuario = [];
                count = 0;
            }
        }
    });
}

function chequearPar(cuadros, cuadro, tablero, MS) {
    const coloresTablero = tablero.colores;
    const personajesTablero = tablero.personajes;

    setTimeout(function () {
        if (respuesta === 'acertado') {
            agregarColor(cuadro, coloresTablero);
            agregarPersonaje(cuadro, personajesTablero);
        } else {
            cuadros.forEach(cuadro => {
                quitarColor(cuadro);
                quitarPersonaje(cuadro);
                //desbloquarInputUsuario();
            });
        }
    }, MS);
    
    //bloquarInputUsuario();
    agregarColor(cuadro, coloresTablero);
    agregarPersonaje(cuadro, personajesTablero);
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

function quitarColor(cuadro) {
    cuadro.className = 'col cuadro bloqueado';
}

function quitarPersonaje(cuadro) {
    cuadro.innerHTML = '';
}

function obtenerNombreUsuario() {
    nickName = document.querySelector('#user-nick').value;
}

function mostrarTablero() {
    const $tablero = document.querySelector('#tablero');

    $tablero.className = '';
}

function bloquarInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = function() {
        };
    });
}

function desbloquarInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = manejarInputUsuario;
    });
}