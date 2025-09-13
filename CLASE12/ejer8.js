

function SumaDiagonalRoja (){
    let diagonal_Roja=[];
        
        let contador=0;
    //agregamos valores de la diagonal roja a la lista
    for (let i = 0 ; i <= 9 ; i++){
        let valor = 1 + i*11;
        diagonal_Roja.push(valor);
        
    }
    //sumamos
    for(let i=0 ;i<10; i++){
        contador+=diagonal_Roja[i];
    }

return contador;
}
function SumaDiagonalVerde(){
    let diagonal_verde=[];
    let contador=0;

   for (let i = 0 ; i <10 ; i++){
        let valor = 10 + i*9;
        diagonal_verde.push(valor);
        
    }
       for(let i=0 ;i<10; i++){
        contador+=diagonal_verde[i];
    }
return contador;
}

console.log(SumaDiagonalRoja());
console.log(SumaDiagonalVerde());