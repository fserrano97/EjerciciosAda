
//Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos 
//saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías 
//devolverlo.

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let Nombre = nombres.find(function(nombre){
    return nombre=== 'Laura'; 

});

console.log(Nombre);
console.log(nombres);