const prompt = require('prompt-sync')(); // Carga la librería para pedir input

let num = parseFloat(prompt('Ingrese un número: ')); // Convierte la entrada a número decimal

if (num < 0) {
    console.log('ES UN NÚMERO NEGATIVO');
} else if (num > 0) {
    console.log('ES POSITIVO');
} else {
    console.log('EL NÚMERO ES CERO');
}