// funcionamiento básico de variable - var
// Hoisting - Las declaraciones suben al inicio siempre
var edad;
var nombre = "Juan";
nombre = "Luis";

console.log(nombre);
console.log(edad);

edad = 70;

console.log(edad);

var x = 40;
function asignarValor(){
    x = 50;
    console.log(x)
}
asignarValor();
console.log(x)

// const
const altura = 1.8; //Debe inicializarse al declararse
console.log(altura)
// altura = 1.7; // No puede reasignarse un valor


// let - let no permite redeclaración
let z = 70;
z = 80;
console.log(z);

console.log(w); //No tienen hoisting
let w = 60;