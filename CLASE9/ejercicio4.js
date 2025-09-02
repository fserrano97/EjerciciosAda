//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre.


const prompt = require('prompt-sync')();
const X = 'Florencia';

let nombre = prompt('Ingrese su nombre: ');

if (nombre.toLowerCase() === X.toLowerCase()) { 
    console.log('Son iguales');
} else {
    console.log('No son iguales');
}
