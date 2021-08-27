//Iniciar partida
function configurarTablero(tablero) {
    iniciarTablero(tablero);
    mezclarTablero(tablero);
    console.log(tablero);

    return tablero;
}

function iniciarTablero(tablero) {
    obtenerPersonajes(tablero);
    obtenerClases(tablero);
    obtenerCuadros(tablero);
}

function mezclarTablero(tablero) {
    const indicesMezclados = mezclarNumerosEntre(0, 15);
    mezclarClaseCuadro(tablero, indicesMezclados);
}

function mezclarClaseCuadro(tablero, indices) {
    const clases = tablero['clases'];
    const clasesMezcladas = mezclarClases(clases, indices);

    tablero['clases'] = clasesMezcladas;
}

function agregarClase(cuadro, clases) {
    if (cuadro.id === 'cuadro-1') {
        cuadro.className = `col cuadro ${clases[0]}`;
    }
    if (cuadro.id === 'cuadro-2') {
        cuadro.className = `col cuadro ${clases[1]}`;
    }
    if (cuadro.id === 'cuadro-3') {
        cuadro.className = `col cuadro ${clases[2]}`;
    }
    if (cuadro.id === 'cuadro-4') {
        cuadro.className = `col cuadro ${clases[3]}`;
    }
    if (cuadro.id === 'cuadro-5') {
        cuadro.className = `col cuadro ${clases[4]}`;
    }
    if (cuadro.id === 'cuadro-6') {
        cuadro.className = `col cuadro ${clases[5]}`;
    }
    if (cuadro.id === 'cuadro-7') {
        cuadro.className = `col cuadro ${clases[6]}`;
    }
    if (cuadro.id === 'cuadro-8') {
        cuadro.className = `col cuadro ${clases[7]}`;
    }
    if (cuadro.id === 'cuadro-9') {
        cuadro.className = `col cuadro ${clases[8]}`;
    }
    if (cuadro.id === 'cuadro-10') {
        cuadro.className = `col cuadro ${clases[9]}`;
    }
    if (cuadro.id === 'cuadro-11') {
        cuadro.className = `col cuadro ${clases[10]}`;
    }
    if (cuadro.id === 'cuadro-12') {
        cuadro.className = `col cuadro ${clases[11]}`;
    }
    if (cuadro.id === 'cuadro-13') {
        cuadro.className = `col cuadro ${clases[12]}`;
    }
    if (cuadro.id === 'cuadro-14') {
        cuadro.className = `col cuadro ${clases[13]}`;
    }
    if (cuadro.id === 'cuadro-15') {
        cuadro.className = `col cuadro ${clases[14]}`;
    }
    if (cuadro.id === 'cuadro-16') {
        cuadro.className = `col cuadro ${clases[15]}`;
    }
}

function agregarPersonaje(cuadro, personajes) {
    const claseCuadro = cuadro.className;

    if (claseCuadro === 'col cuadro c-1') {
        cuadro.firstElementChild.src = `${personajes.Aragorn}`;
    }
    if (claseCuadro === 'col cuadro c-2') {
        cuadro.firstElementChild.src = `${personajes.Frodo}`;
    }
    if (claseCuadro === 'col cuadro c-3') {
        cuadro.firstElementChild.src = `${personajes.Gandalf}`;
    }
    if (claseCuadro === 'col cuadro c-4') {
        cuadro.firstElementChild.src = `${personajes.Gimli}`;
    }
    if (claseCuadro === 'col cuadro c-5') {
        cuadro.firstElementChild.src = `${personajes.Gollum}`;
    }
    if (claseCuadro === 'col cuadro c-6') {
        cuadro.firstElementChild.src = `${personajes.Legolas}`;
    }
    if (claseCuadro === 'col cuadro c-7') {
        cuadro.firstElementChild.src = `${personajes.Sam}`;
    }
    if (claseCuadro === 'col cuadro c-8') {
        cuadro.firstElementChild.src = `${personajes.Sauron}`;
    }
}

function obtenerPersonajes(tablero) {
    tablero['personajes'] = {
        'Aragorn': 'src/img/lotr-aragorn.jpg',
        'Frodo': 'src/img/lotr-frodo.jpg',
        'Gandalf': 'src/img/lotr-gandalf.jpg',
        'Gimli': 'src/img/lotr-gimli.jpg',
        'Gollum': 'src/img/lotr-gollum.jpg',
        'Legolas': 'src/img/lotr-legolas.jpg',
        'Sam': 'src/img/lotr-sam.jpg',
        'Sauron': 'src/img/lotr-sauron.jpg'
    }
}

function obtenerClases(tablero) {
    tablero['clases'] = [
        'c-1',
        'c-2',
        'c-3',
        'c-4',
        'c-5',
        'c-6',
        'c-7',
        'c-8',
        'c-1',
        'c-2',
        'c-3',
        'c-4',
        'c-5',
        'c-6',
        'c-7',
        'c-8'
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

function mezclarClases(Clases, indices) {
    const clasesMezcladas = [];

    indices.forEach((indice, i) => {
        clasesMezcladas[i] = Clases[indice]
    });

    return clasesMezcladas;
}

function quitarClase(cuadro) {
    cuadro.className = 'col cuadro bloqueado';
}

function quitarPersonaje(cuadro) {
    cuadro.firstElementChild.src = '';
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