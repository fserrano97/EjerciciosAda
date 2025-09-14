function encontrarMayor(num1,num2){
    if (num1>num2){
        return num1;
    }else
        return num2;
}

let num1 = parseInt(prompt('Ingresa un numero'));
let num2 = parseInt(prompt('Ingresa otro numero'));

let mayor = encontrarMayor(num1,num2);

console.log('El numero mayor es: ',mayor);