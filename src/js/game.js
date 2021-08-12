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
        'rojo',
        'azul',
        'amarillo',
        'violeta',
        'verde',
        'rosa',
        'naranja',
        'marron'
    ]
}

function obtenerCuadros(tablero) {
    tablero['elementos-ordenados'] = document.querySelectorAll('.cuadro');
}


//Mezclar tablero
function mezclarTablero(tablero) {
    obtenerIndicesNulos(tablero);
    mezclarArray(tablero.indices);
}

function obtenerIndicesNulos(tablero) {
    const NUMERO_CUADROS = 16, VALOR_NULO = -1;

    tablero['indices'] = [];

    for (let i = 0; i < NUMERO_CUADROS; i++) {
        tablero['indices'][i] = VALOR_NULO;
    }
}

function mezclarArray(indices) {
    let posicion = 0;

    while (posicion < 16) {
        let numeroAleatorio = generarNumeroEntre(1, 16);
        let count = 0;

        for (let i = 0; i<indices.length; i++) {
            if (numeroAleatorio === indices[i]) {
                break;
            } else {
                count++;
            }

            if (count === indices.length-1) {
                indices[posicion] = numeroAleatorio;
                posicion++;
                break;
            }
        }
    }
}

function generarNumeroEntre(minimo, maximo) {
    const numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
    return numero;
}


iniciarPartida();