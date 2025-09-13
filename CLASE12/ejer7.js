let matriz = [
 [10, 5, 34, 20, 4],
 [23, 66, 3, 77, 90],
 [1, 45, 72, 63, 8],
 [90, 85, 53, 24, 6],
 [98, 85, 55, 99, 0]
 ];
 
 let sumar=0;
 
 for (let i = 0 ; i<matriz.length; i++){
    for (let j = 0 ; j<matriz[i].length; j++){
      sumar+=matriz[i][j];
 }
};


 console.log('total=  ',sumar);