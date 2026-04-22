let nombres=[];

document.getElementById("agregar").addEventListener("click", agregar);
function agregar(){
    let nombre=document.getElementById("nombre").value.toUpperCase();
    if(nombre!="" && nombres.length<6){
        nombres.push(nombre);
    }
    document.getElementById("nombre").value="";
};
document.getElementById("mostrar").addEventListener("click", mostrar);
function mostrar(){
    nombres.sort();
    document.write("Array: ");
    for(let i=0; i<nombres.length; i++){
        document.write(nombres[i]);
        console.log(nombres[i]);
    }
    document.write("Cantidad: "+nombres.length);
};
document.getElementById("btnBuscar").addEventListener("click", buscar);
function buscar(){
    let buscar=document.getElementById("buscar").value.toUpperCase();
    let contador=0;

    for(let i=0; i<nombres.length; i++){
        if(nombres[i]==buscar){
            document.write("Está en la posición: "+i);
            contador++;
        }
    }
};