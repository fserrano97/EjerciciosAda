//Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa 
//que le pida al usuario un número cualquiera. El programa deberá analizar si el 
//número ingresado es positivo, negativo o cero. Utiliza estructuras if para 
//resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require('prompt-sync')();

let num = Number(prompt('Ingrese un número cualquiera: '));

if (num < 0) {
    console.log(`El número ${num} es negativo.`);
} else if (num > 0) {
    console.log(`El número ${num} es positivo.`);
} else {
    console.log('El número es CERO.');
}
