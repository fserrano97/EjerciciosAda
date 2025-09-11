

let num=parseInt(prompt('Ingrese un numero positivo'));
let lista=[];

while (num>0) {
    lista.push(num);
    num=parseInt(prompt('Ingrese un numero positivo'));
    
}

console.log(`Los numeros ingresados son: `,lista);