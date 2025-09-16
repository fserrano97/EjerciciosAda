//Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos 
//saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol' 
//tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.


let nombres = ['sol', 'luna', 'estrella'];

let total = nombres.reduce((acum, nombre) => acum + nombre.length, 0);
console.log(total);