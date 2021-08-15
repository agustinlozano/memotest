function iniciarPartida() {
    const tablero = {};

    iniciarTablero(tablero);
    mezclarTablero(tablero);


    console.log(tablero);
}

//Iniciar tablero
function iniciarTablero(tablero) {
    obtenerPersonajes(tablero);
    obtenerColores(tablero);
    obtenerCuadros(tablero);
}

//Mezclar tablero
function mezclarTablero(tablero) { 
    const indicesMezclados = mezclarNumerosEntre(0, 15);
    const cuadrosMezclados = mezclarCuadros(tablero, indicesMezclados);

    tablero.elementos = cuadrosMezclados;
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

        for (let i = 0; i<array.length; i++) {
            if (numeroAleatorio === array[i]) {
                break;
            } else {
                count++;
            }

            if (count === array.length-1) {
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

function mezclarCuadros(tablero, indices) { 
    const colores = tablero['colores'];
    const coloresMezclados = mezclarColores(colores, indices);

    configurarCuadro(tablero, coloresMezclados);

    return tablero.elementos;
}

function mezclarColores(colores, indices) {
    const coloresMezclados = [];

    indices.forEach((indice, i) => {
        coloresMezclados[i] = colores[indice]
    });

    return coloresMezclados;
}

function configurarCuadro(tablero, colores) {
    const cuadros = tablero.elementos;
    const personajes = tablero.personajes

    cuadros.forEach((cuadro, i) => {
        if (colores[i] === 'color-1') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[0]}`
        }
        if (colores[i] === 'color-2') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[1]}`
        }
        if (colores[i] === 'color-3') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[2]}`
        }
        if (colores[i] === 'color-4') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[3]}`
        }
        if (colores[i] === 'color-5') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[4]}`
        }
        if (colores[i] === 'color-6') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[5]}`
        }
        if (colores[i] === 'color-7') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[6]}`
        }
        if (colores[i] === 'color-8') {
            cuadro.className = `col cuadro ${colores[i]}`;
            cuadro.innerHTML = `${personajes[7]}`
        }
    });
}

iniciarPartida();