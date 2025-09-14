
function calcularFactorial(num) { //3
    let resultado = 1;

    for (let i = 1; i <= num; i++) {
        resultado *= i;// 1*2*3=6
    }
    return resultado;
}
let num = parseInt(prompt('Ingrese un numero entero: '));

if (!isNaN(num) && num >= 0) {
    console.log('El factorial de:', num, 'es', calcularFactorial(num));
} else {
    console.log('Ese número no es correcto!.. Debe ser un entero positivo!');
};
