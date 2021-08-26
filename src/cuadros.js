export function agregarClase(cuadro, clases) {
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

export function agregarPersonaje(cuadro, personajes) {
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

export function quitarClase(cuadro) {
    cuadro.className = 'col cuadro bloqueado';
}

export function quitarPersonaje(cuadro) {
    cuadro.firstElementChild.src = '';
}

export function bloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
        $cuadro.onclick = function() {
        };
    });
}
