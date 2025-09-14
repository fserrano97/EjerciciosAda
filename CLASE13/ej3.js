
let saludoGlobal = "Hola desde el Scope Global";

function mostrarMensaje(){
   let saludoLocal = "Hola desde el scope local";
    console.log(saludoGlobal);
    console.log(saludoLocal);
}

mostrarMensaje();