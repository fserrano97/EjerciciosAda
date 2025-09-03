//Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
//edad. Muestra un mensaje personalizado según el caso.
const prompt = require('prompt-sync')();

const EdadMax = 18;
let edad = Number(prompt('Ingrese su edad: '));

if (edad < EdadMax) {
    console.log('Tienes' ,edad, ' años. Eres menor de edad, vuelva pronto');
} else {
    console.log('Tienes',edad, ' años. Ingreso aprobado');
}

