//Declara dos variables numéricas numero1 y numero2. Pide al usuario 
//que ingrese dos números y muestra cuál es mayor o si son iguales.
const prompt = require('prompt-sync')();
 
let num1, num2;

num1 = parseFloat(prompt('INGRESE PRIMER NUMERO: '));
num2 = parseFloat(prompt(' INGRESE SEGUNDO UN NUMERO: '));

if (num1 > num2){
    console.log('EL PRIMER NUMERO ES EL MAYOR :',num1);
} else if (num2 > num1){
    console.log('EL SEGUNDO NUMERO INGRESADO ES EL MAYOR: ',num2);
}else {
    console.log('SON IGUALES');
}