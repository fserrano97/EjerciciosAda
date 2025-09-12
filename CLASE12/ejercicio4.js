

let notas = [];
let nota_Alumno = parseFloat(prompt('Ingrese nota del alumno: ')); 
let cant_Notas = parseInt(prompt('Dime la CANTIDAD de notas que vas a ingresar: '));

for (let i=0 ; i<cant_Notas ; i++){

    notas.push(nota_Alumno);
    nota_Alumno = parseFloat(prompt('Ingrese otra nota de alumno: '));
}
console.log('Las notas ingresadas de los alumnos son: ',notas);