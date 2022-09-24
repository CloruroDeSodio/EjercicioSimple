function agarre(){
let primero = document.getElementById("cuadro1").value;
let segundo = document.getElementById("cuadro2").value;

/*inicio del ejercicio*/

if(primero>segundo)

document.write("El primer numero es mayor que el segundo")

else if (primero<segundo)
document.write("El segundo numero es mayor que el primero")

else if(primero===segundo)
document.write("Son exactamente iguales")
}
