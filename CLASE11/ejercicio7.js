
const prompt = require('prompt-sync')();

let num = Number(prompt('INGRESE UN NUMERO: '));
let num2 = Number(prompt('INGRESE OTRO NUMERO: '));
let oper = prompt('INGRESE OPERANDO(suma,resta,dividir,multiplicar): ');
let total;

switch (oper.toLowerCase()){
    case 'suma':
        total = num + num2
        console.log('Total= ',total);
        break;
    case 'resta':
        total=num - num2
        console.log('Total= ',total);
        break;
    case 'dividir':
        if (num2 === 0) {
            console.log('ERROR. No se puede dividir entre 0.');
        } else {
            total = num / num2;
            console.log('Total= ',total);
        }
        total = num / num2
        console.log('Total= ',total);
        break;
    case 'multiplicar':
        total = num*num2
        console.log('Total= ',total);
        break;
    default:
    console.log('Operacion invalidad. ERROR! Debes ingresar suma, resta, dividir o multiplicar..');
}