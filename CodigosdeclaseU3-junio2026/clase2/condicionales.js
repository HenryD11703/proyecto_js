// let edad = Number(prompt("Ingrese su edad!"));
let edad = 50;
if (edad < 18){
    console.log("Usted es menor de edad!");
} else if (edad < 70){
    console.log("Usted es adulto!")
} else {
    console.log("Usted es un adulto mayor!")
}

console.log("Fin del programa!!")

// operador ternario
const esMayorDeEdad = (edad < 18) ? "Usted es un niño": "Usted es un adulto!";
console.log(esMayorDeEdad)

// Switch - estructura condicional donde la comparacion es de igualdad con un valor siempre
let mes = "mayo";

switch(mes){
    case "enero":
        console.log("Este es el mes 1");
        break;
    case "febrero":
        console.log("Este es el mes 2");
        break;
    case "marzo":
        console.log("Este es el mes 3");
        break;
    case "abril":
        console.log("Este es el mes 4");
        break;
    case "mayo":
        console.log("Este es el mes 5");
        break;
    case "junio":
        console.log("Este es el mes 6");
        break;
    case "julio":
        console.log("Este es el mes 7");
        break;
    case "agosto":
        console.log("Este es el mes 8");
        break;
    case "septiembre":
        console.log("Este es el mes 9");
        break;
    case "octubre":
        console.log("Este es el mes 10");
        break;
    case "noviembre":
        console.log("Este es el mes 11");
        break;
    case "diciembre":
        console.log("Este es el mes 12");
        break;
    default:
        console.log("Ese mes no existe!!")
}