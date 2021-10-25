import { configurarTablero, mostrarTablero } from "./tablero.js";
import {
    agregarClase,
    agregarPersonaje,
    quitarClase,
    quitarPersonaje,
    bloquearInputUsuario
} from "./cuadros.js";

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

    console.log($cuadroUsuario.className);

    if ($cuadroUsuario.className === 'img-fluid img') {
        return false;
    } else {
        $cuadrosUsuario.push($cuadroUsuario);

        agregarClase($cuadroUsuario, tablero.clases);
        agregarPersonaje($cuadroUsuario, tablero.personajes);
        count++;

        if (count === 2) {
            chequearPar($cuadrosUsuario, $cuadroUsuario, tablero, 1500);

            $cuadrosUsuario = [];
            count = 0;
        }
    }
}

function chequearPar(cuadros, cuadro, tablero, MS) {
    const clasesTablero = tablero.clases;
    const personajesTablero = tablero.personajes;

    setTimeout(function () {
        if (respuesta === 'acertado') {
            agregarClase(cuadro, clasesTablero);
            agregarPersonaje(cuadro, personajesTablero);
            desbloquearInputUsuario();
        } else {
            cuadros.forEach(cuadro => {
                quitarClase(cuadro);
                quitarPersonaje(cuadro);
                desbloquearInputUsuario();
            });
        }
    }, MS);

    agregarClase(cuadro, clasesTablero);
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

function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function ($cuadro) {
        $cuadro.onclick = manejarInputUsuario;
    });
}

function obtenerNombreUsuario() {
    nickName = document.querySelector('#user-nick').value;
}