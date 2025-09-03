   // Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
   // libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
   // kg a libras, Pista: 2.20462)   

const prompt = require('prompt-sync')();

function Convertidor(peso) {
    const libras = 2.20462;
    return peso * libras;
}

let peso = Number(prompt('Ingrese su peso en kg: '));
let pesoEnLibra = Convertidor(peso);


console.log(`${peso} kg son ${pesoEnLibra.toFixed(2)} libras.`);
