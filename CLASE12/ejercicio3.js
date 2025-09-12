
let X = parseInt(prompt('iNGRESE UN NUMERO:')); //5
let cant_Impar=0;

for (let i=0 ; i<=X ; i++){ //1 .... 5

    if (i % 2 === 1){
        cant_Impar++;
    }

};
console.log(`La cantidad de numero IMPARES desde 0 hasta ${X}(inclusive) es ${cant_Impar}`);


