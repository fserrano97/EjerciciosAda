let lista = [5, 8, 12, 20, 3];

let numMayor = lista.find(function(num){
    return num>10;
});

console.log('El primer numero mayor a 10 es: ',numMayor);