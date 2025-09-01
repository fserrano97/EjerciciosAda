
const prompt = require('prompt-sync')({sigint: true});

let num = prompt('Ingrese un número: ');
num = Number(num);

if (num < 0) {
    console.log('ES UN NÚMERO NEGATIVO');
} else if (num > 0) {
    console.log('ES POSITIVO');
} else {
    console.log('EL NÚMERO ES CERO');
}
