

const prompt = require('prompt-sync')();

let num = Number(prompt('Ingrese un numero: '));//2


for (let i=1; i <=10; i++){ // +1
    
    console.log(num,'X',i,'=',num*i);
};
