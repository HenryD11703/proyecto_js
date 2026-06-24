// for i in [iterable]: iterable (lista, cadena, range)
for (let i = 0; i < 10; i += 2){
    console.log(i);
}
console.log("Fin del for")

let personas = ["Henry", "Lesli", "Stefanny", "Luis"];
// for i in personas:
for (let i = 0; i < personas.length; i++){
    console.log(i)
    console.log(personas[i])
}

for (let i of personas){
    console.log(i)
}

// while
let numero = 1;
while (numero <= 10){
    console.log(numero)
    numero++;
}

// let opc = -1;
// while (opc != 3){
//     console.log("Ingrese\n1. Para la opcion 1\n2. Para la opcion 2\n3. para salir");
//     opc = Number(prompt("Ingrese su opcion"));
//     switch(opc){
//         case 1:
//             console.log("opcion 1")
//             break;
//         case 2:
//             console.log("opcion 2")
//             break;
//         case 3:
//             console.log("Bye bye...")
//             break;
//         default:
//             console.log("Lea bien!!!")
//     }
// }

do {
    console.log("Ingrese\n1. Para la opcion 1\n2. Para la opcion 2\n3. para salir");
    var opc = Number(prompt("Ingrese su opcion"));
    switch(opc){
        case 1:
            console.log("opcion 1")
            break;
        case 2:
            console.log("opcion 2")
            break;
        case 3:
            console.log("Bye bye...")
            break;
        default:
            console.log("Lea bien!!!")
    }
} while (opc != 3);