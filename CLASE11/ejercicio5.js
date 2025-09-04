

const prompt = require('prompt-sync')();

let inicio = Number(prompt('Ingrese un numero: '));//2
let fin = Number(prompt('Ingrese otro numero: '));//5

if (inicio <= fin){
    console.log('Los numeros pares desde:', inicio , 'a', fin, 'son: ');
    
        for(let i = inicio ; i<= fin; i++){
                if (i % 2 === 0){
                    console.log(i);
                }
        }
}else{
    console.log('Los valores son invalidos..');
}
    
