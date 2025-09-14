

function convertirCelsiusAFahrenheit(grados){
    return (grados*9/5)+32;
}

let grados = (parseFloat(prompt('Ingrese temperatura en grados: ')));

console.log(convertirCelsiusAFahrenheit(grados));