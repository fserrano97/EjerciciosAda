let matriz = [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
    ];
let suma=0; //inicializo contador

    
for (let i = 0; i < matriz.length; i++) { //recorro fila
 for (let j = 0; j < matriz[i].length; j++) { //recorro columnas de la fila
    valor=matriz[i][j];
    if (valor >= 10 && valor <1000){
      suma +=valor;
    }
  }
}console.log('la suma es: ',suma);