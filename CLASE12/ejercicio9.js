
//creamos matriz 4x7
let gastos = [];
let gastosMes=0;

for (let i = 0 ; i<4 ; i++){
     gastos[i] = []; 
    for (let j=0 ; j<7; j++){
            let valor = parseFloat(prompt(`Ingrese el gasto de la semana ${i+1} dia ${j+1}= `));
            gastos[i].push(valor);
            gastosMes+=valor;
    };
};

let semana = parseInt(prompt('Ingrese semana 1, 2, 3 o 4')) - 1;

let total =0;

    if (semana >= 0 && semana < 4){
       let DiaParticular = parseInt(prompt('Ingrese un día en particular (1 a 7)')) - 1;
         if (DiaParticular >= 0 && DiaParticular < 7){

            for (let dia=0 ; dia<7; dia++){
                total+= gastos[semana][dia];
    
            }

         


            
            console.log(`total de la semana ${semana} es de: ${total}`);
            console.log('Gasto del dia en particular : ',gastos[semana][DiaParticular]);
                } else {
        console.log('⚠️ Día fuera de rango. Debe ser entre 1 y 7.');
    };
    }else{
        console.log('errorrrr');
};
console.log(`eL GASTO del mes es de: ${gastosMes}`);

    
