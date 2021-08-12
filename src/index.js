let nickName = ''; 
const $comenzar = document.querySelector('#start');

$comenzar.onclick = function (event) {
    event.preventDefault();
    document.querySelector('#tablero').className = '';
    nickName = document.querySelector('#user-nick').value;
}
