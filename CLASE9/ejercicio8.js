//Pide al usuario que ingrese las longitudes de los tres lados de un 
//triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
//escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require('prompt-sync')();

// Pedimos los lados al usuario
let ladoA = Number(prompt("Ingrese el lado a: "));
let ladoB = Number(prompt("Ingrese el lado b: "));
let ladoC = Number(prompt("Ingrese el lado c: "));


if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("El triángulo es equilátero.");
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        console.log("El triángulo es isósceles.");
    } else {
        console.log("El triángulo es escaleno.");
    }
} else {
    console.log("Los lados ingresados no forman un triángulo válido.");
}
