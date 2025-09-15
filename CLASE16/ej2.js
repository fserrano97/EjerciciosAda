
let numeros = [1, 2, 3, 4, 5, 6];

let lista_nueva = numeros.filter(function(num){
    return num % 2===0;
});

console.log('Los numeros pares son = ',lista_nueva);