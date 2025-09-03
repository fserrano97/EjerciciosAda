//Define una constante PI con el valor de pi (3.14159). Pide al usuario 
//que ingrese el radio de un círculo y calcula su área y perímetro 
//utilizando la constante PI.

const prompt = require('prompt-sync')();

const PI = 3.14159;


let radio = Number(prompt('Ingrese el radio de un círculo: '));


let perimetro = 2 * PI * radio;
let area = PI * radio * radio;


console.log(`Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`);