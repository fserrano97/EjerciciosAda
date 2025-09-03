const prompt = require('prompt-sync')();

let color = prompt('Ingrese un color: ').toLowerCase();

switch (color) {
    case 'rojo': 
        console.log('Alto, no puedes avanzar.');
        break;
    case 'amarillo':
        console.log('Precaución, prepárate para avanzar.');
        break;
    case 'verde':
        console.log('Avanza con seguridad.');
        break;
    default:
        console.log('Color no reconocido, ingresa amarillo, verde o rojo.');
}
