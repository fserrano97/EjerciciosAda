//Los números pueden ser pares o impares. Escribe un programa que le pida al 
//usuario un número y determine si es par o impar. Muestra un mensaje 
//explicativo indicando qué significa cada caso.

const prompt = require('prompt-sync')();

let num = Number(prompt('Ingrese un numero: '));

if (num % 2 === 0){
    console.log('El numero ingreso es PAR..');
}else {
    console.log('El numero es impar');
}