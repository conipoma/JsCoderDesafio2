let numeroUsuario = parseInt(prompt('Ingrese un número'));

if (numeroUsuario > 1000) {
    alert('El número ingresado es mayor a 1000');
};

let textoUsuario = prompt('Ingrese un texto').toLowerCase();

if (textoUsuario === 'hola') {
    alert('Hola a vos también! :)');
};

let numeroUsuario2 = parseInt(prompt('Ingresa un número'));

if (numeroUsuario2 > 10 && numeroUsuario2 < 50) {
    alert('Tu número es ' + numeroUsuario2 + ' y es mayor a 10 y menor a 50');    
}