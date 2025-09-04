
const prompt = require('prompt-sync')();

let azar = Math.floor(Math.random()*5)+1;
let num;
for (let i=1 ; i<=3 ; i++){
    num=Number(prompt('Adivina el numero: '));
    if (num === azar){
        console.log('Felicitaciones, haz acertado!');
        break;

    }else{
        console.log('Vuelve a intentarlo....');
    }
}
console.log('El numero secreto es= ',azar);
