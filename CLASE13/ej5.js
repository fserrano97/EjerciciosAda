

function concatenarNombres(nombre, apellido){
    return nombre+ ' ' +apellido;
}

let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');



let concatenar = concatenarNombres(nombre,apellido);
console.log(concatenar);