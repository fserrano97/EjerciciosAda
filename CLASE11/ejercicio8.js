//Escribe un programa que le pida al usuario un número entero positivo y 
//muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for 
//para resolverlo

const prompt = require('prompt-sync')();

let num =Number(prompt('Ingrese un numero entero positivo: ')); 

if (Number.isInteger(num) && num > 0){
    for (let i = 1; i<= 100; i++){
        if (i % num === 0) {
            console.log(i);
        }
    }
}else {
    console.log("Error: Debes ingresar un número entero positivo.");
}
