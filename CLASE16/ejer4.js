
let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce(function(acum,num){
    return acum+num;
});

console.log('Suma total: ',suma); 