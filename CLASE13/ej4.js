

function esPar(numero){
   let resultado =''; 
   if (numero % 2 === 0){
   resultado ='Es par';
   }else{ 
    resultado = 'Es impar';
}return resultado;
}



let numero = parseInt(prompt('Ingrese un numero'));

console.log(esPar(numero));
