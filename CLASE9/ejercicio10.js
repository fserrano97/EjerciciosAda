//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
//semana correspondiente. Si el número no está dentro de ese rango, 
//muestra un mensaje de error.

const prompt = require('prompt-sync')();
const lunes =1;
const martes = 2;
const miercoles = 3;
const jueves = 4;
const viernes = 5;
const sabado = 6;
const domingo = 7;
let numMax = 7;
let numMin = 1;

let fecha = Number(prompt('Ingrese un numero: '));

if (fecha >= numMin && fecha <=numMax){
    if (fecha === lunes){
        console.log('Es Lunes')
    }else if (fecha=== martes){
        console.log('Es martes');

    }else if (fecha=== miercoles){
        console.log('Es miercoles');
        
    }else if (fecha=== jueves){
        console.log('Es jueves');
        
    }else if (fecha=== viernes){
        console.log('Es viernes');
        
    }
    else if (fecha=== sabado){
        console.log('Es sabado');
        
    }else if (fecha=== domingo){
        console.log('Es domingo');
        
    };
}else{
    console.log('ERROR. Ese numero no es valido');
}