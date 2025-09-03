//Escribe un programa que pida al usuario que ingrese tres números y 
//determine cuál es el mayor de los tres.
const prompt = require('prompt-sync')();

let num1 = Number(prompt('Ingrese primer número: '));
let num2 = Number(prompt('Ingrese segundo número: '));
let num3 = Number(prompt('Ingrese tercer número: '));

let mayor = Math.max(num1, num2, num3);

console.log('El número mayor es:', mayor);

