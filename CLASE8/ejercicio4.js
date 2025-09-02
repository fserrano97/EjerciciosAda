const prompt = require('prompt-sync')();

let num = parseInt(prompt('Ingrese un número entero: '));

if (num % 2 === 0) {
    console.log('EL NÚMERO ES PAR');
} else {
    console.log('EL NÚMERO ES IMPAR');
}
