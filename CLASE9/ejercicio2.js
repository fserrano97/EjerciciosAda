//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un 
//número y verifica si está dentro del rango definido por las constantes.
const prompt = require('prompt-sync')();
const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 100;
let num;

num = prompt('Ingrese un numero: ');

if ((num >= RANGO_MINIMO) && (num <= RANGO_MAXIMO)){
    console.log('ESE NUMERO ES VALIDO :)');
}else{
    console.log('ERRORRRRR');
};
