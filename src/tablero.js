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

function mezclarClases(Clases, indices) {
    const clasesMezcladas = [];

    indices.forEach((indice, i) => {
        clasesMezcladas[i] = Clases[indice]
    });

    return clasesMezcladas;
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

function mostrarTablero() {
    const $tablero = document.querySelector('#tablero');

    $tablero.className = '';
}