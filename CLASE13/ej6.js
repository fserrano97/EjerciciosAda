

function convertirHorasAMinutos(horas){
    return horas*60;

};

let Cant_horas = parseInt(prompt('Ingrese cantidad de horas: '));

console.log('La cantidad de ' ,Cant_horas, ' horas es de : ',convertirHorasAMinutos(Cant_horas), ' minutos.');