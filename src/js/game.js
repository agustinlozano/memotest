//Iniciar partida
function configurarTablero(tablero) {
    iniciarTablero(tablero);
    mezclarTablero(tablero);
    console.log(tablero);

    return tablero;
}

function iniciarTablero(tablero) {
    obtenerPersonajes(tablero);
    obtenerColores(tablero);
    obtenerCuadros(tablero);
}

function mezclarTablero(tablero) {
    const indicesMezclados = mezclarNumerosEntre(0, 15);
    mezclarColoresCuadros(tablero, indicesMezclados);
}

function mezclarColoresCuadros(tablero, indices) {
    const colores = tablero['colores'];
    const coloresMezclados = mezclarColores(colores, indices);

    tablero['colores'] = coloresMezclados;
}

function agregarColor(cuadro, colores) {
    if (cuadro.id === 'cuadro-1') {
        cuadro.className = `col cuadro ${colores[0]}`;
    }
    if (cuadro.id === 'cuadro-2') {
        cuadro.className = `col cuadro ${colores[1]}`;
    }
    if (cuadro.id === 'cuadro-3') {
        cuadro.className = `col cuadro ${colores[2]}`;
    }
    if (cuadro.id === 'cuadro-4') {
        cuadro.className = `col cuadro ${colores[3]}`;
    }
    if (cuadro.id === 'cuadro-5') {
        cuadro.className = `col cuadro ${colores[4]}`;
    }
    if (cuadro.id === 'cuadro-6') {
        cuadro.className = `col cuadro ${colores[5]}`;
    }
    if (cuadro.id === 'cuadro-7') {
        cuadro.className = `col cuadro ${colores[6]}`;
    }
    if (cuadro.id === 'cuadro-8') {
        cuadro.className = `col cuadro ${colores[7]}`;
    }
    if (cuadro.id === 'cuadro-9') {
        cuadro.className = `col cuadro ${colores[8]}`;
    }
    if (cuadro.id === 'cuadro-10') {
        cuadro.className = `col cuadro ${colores[9]}`;
    }
    if (cuadro.id === 'cuadro-11') {
        cuadro.className = `col cuadro ${colores[10]}`;
    }
    if (cuadro.id === 'cuadro-12') {
        cuadro.className = `col cuadro ${colores[11]}`;
    }
    if (cuadro.id === 'cuadro-13') {
        cuadro.className = `col cuadro ${colores[12]}`;
    }
    if (cuadro.id === 'cuadro-14') {
        cuadro.className = `col cuadro ${colores[13]}`;
    }
    if (cuadro.id === 'cuadro-15') {
        cuadro.className = `col cuadro ${colores[14]}`;
    }
    if (cuadro.id === 'cuadro-16') {
        cuadro.className = `col cuadro ${colores[15]}`;
    }
}

function agregarPersonaje(cuadro, personajes) {
    const claseColor = cuadro.className;
    console.log(claseColor);
    if (claseColor === 'col cuadro color-1') {
        cuadro.innerHTML = `${personajes[0]}`;
    }
    if (claseColor === 'col cuadro color-2') {
        cuadro.innerHTML = `${personajes[1]}`;
    }
    if (claseColor === 'col cuadro color-3') {
        cuadro.innerHTML = `${personajes[2]}`;
    }
    if (claseColor === 'col cuadro color-4') {
        cuadro.innerHTML = `${personajes[3]}`;
    }
    if (claseColor === 'col cuadro color-5') {
        cuadro.innerHTML = `${personajes[4]}`;
    }
    if (claseColor === 'col cuadro color-6') {
        cuadro.innerHTML = `${personajes[5]}`;
    }
    if (claseColor === 'col cuadro color-7') {
        cuadro.innerHTML = `${personajes[6]}`;
    }
    if (claseColor === 'col cuadro color-8') {
        cuadro.innerHTML = `${personajes[7]}`;
    }
}

function obtenerPersonajes(tablero) {
    tablero['personajes'] = [
        'Aragorn',
        'Frodo',
        'Gandalf',
        'Gimli',
        'Gollum',
        'Legolas',
        'Sam',
        'Sauron'
    ]
}

function obtenerColores(tablero) {
    tablero['colores'] = [
        'color-1',
        'color-2',
        'color-3',
        'color-4',
        'color-5',
        'color-6',
        'color-7',
        'color-8',
        'color-1',
        'color-2',
        'color-3',
        'color-4',
        'color-5',
        'color-6',
        'color-7',
        'color-8'
    ]
}

function obtenerCuadros(tablero) {
    tablero['elementos'] = document.querySelectorAll('.cuadro');
}

function mezclarNumerosEntre(minimo, maximo) {
    let posicion = 0;

    const array = obtenerArrayNulo(tablero);

    while (posicion < array.length) {
        let numeroAleatorio = generarNumeroEntre(minimo, maximo);
        let count = 0;

        for (let i = 0; i < array.length; i++) {
            if (numeroAleatorio === array[i]) {
                break;
            } else {
                count++;
            }

            if (count === array.length - 1) {
                array[posicion] = numeroAleatorio;
                posicion++;
                break;
            }
        }
    }

    return array;
}

function obtenerArrayNulo() {
    const NUMERO_INDICES = 16, VALOR_NULO = null;
    const array = [];

    for (let i = 0; i < NUMERO_INDICES; i++) {
        array[i] = VALOR_NULO;
    }

    return array;
}

function generarNumeroEntre(minimo, maximo) {
    const numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
    return numero;
}

function mezclarColores(colores, indices) {
    const coloresMezclados = [];

    indices.forEach((indice, i) => {
        coloresMezclados[i] = colores[indice]
    });

    return coloresMezclados;
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

function bloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = function() {
        };
    });
}

function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = manejarInputUsuario;
    });
}