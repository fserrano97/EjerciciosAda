
let lista_nombres = [];
//let nombre = prompt('Ingrese un nombre: ');


//Creamos lista con nombres:
for (let i=0 ; i<= 4; i++){ //del 0,.....,4 =5 posiciones
    let nombre= prompt('Ingrese un nombre');
    lista_nombres.push(nombre);
};

console.log(lista_nombres);

//Buscamos si existe el nombre ingresado:
let nombreX= prompt('Ingrese un nombre para BUSCAR en lista');
let encontramos=false;

//recorremos lista:
 for (let i=0 ; i<lista_nombres.length ;i++){
    if(lista_nombres[i] === nombreX){
        console.log(`El nombre: ${nombreX} esta en la posicion: ${i}`);
        encontramos=true;
        break
    };
    };

    if(encontramos =false){
        (`Lo siento, ese nombre no existe en la lista!`);
    };
