const prompt = require('prompt-sync')();
let num1, num2, suma;

num1 = parseFloat(prompt('Ingrese primer numero: ')) ;
num2 = parseFloat(prompt ('Ingrese segundo numero: '));
suma= num1 + num2;
console.log('El numero total es de ',suma);