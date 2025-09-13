//Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
//parámetros: la base y la altura de un triángulo. La función debe devolver el 
//área del triángulo.
function calcularAreaTriangulo (base,altura){
    return base*altura/2;
};


let base =parseFloat(prompt('Ingrese base: '));
let altura = parseFloat(prompt('Ingrese altura'));

console.log('El area del triangulo es: ',calcularAreaTriangulo(base,altura));
