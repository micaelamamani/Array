let dias= ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

document.getElementById('ingresar').addEventListener('click', ingresar);

function ingresar(){
    let numero= parseInt(document.getElementById("numero").value);
    console.log("El dia de la semana es: "+ dias[numero]);
    document.write("El dia de la semana es: "+ dias[numero]);
    
}
