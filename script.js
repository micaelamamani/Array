//Ejercicio 1
let array= ["Jazz", "Blues"];
array.push("Rock-n-Roll");
document.write("Items: "+array);
console.log("Items: "+array);
let vmedio= Math.floor(array.length/2);
array[vmedio]= "Classic";
document.write("<br>Cambio: "+array);
console.log("<br>Cambio: "+array);
let primerValor= array.shift();
document.write("<br>Eliminado: "+primerValor);
console.log("Eliminado: "+primerValor);
array.unshift("Rap", "Reagae");
document.write("<br>Agregado final: "+array);
console.log("<br>Agregado final: "+array);
