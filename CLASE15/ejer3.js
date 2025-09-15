//lista de pacientes: 
let lista_mascotas = ["Perro","Gato", "Conejo"];
console.log('Fila:',lista_mascotas);

//llega el paciente que se atiende primero:
lista_mascotas.unshift("Hamster");
console.log(lista_mascotas);

//hamster se atiende y se va:
console.log('Hamster ...pase a ser atendido...');
lista_mascotas.shift();

//actualizo la lista de los restantes a atender:
console.log('Actualizando..lista: ',lista_mascotas);
