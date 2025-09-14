//variable globall:
let hora_Actual= 15;

function mostrarSaludo (){
    if (hora_Actual >=6 && hora_Actual<=12){
        console.log('Buen dia!');
    }else if (hora_Actual >12 && hora_Actual<=18){
        console.log('Buenas tardes!');

    }else {
        console.log('Ups.Buenas Noches! ZzzZzzZz...');
    }
};

mostrarSaludo();