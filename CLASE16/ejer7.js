
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresA= nombres.filter(function(nombre){
  return nombre.startsWith('A');
});

console.log(nombresA);