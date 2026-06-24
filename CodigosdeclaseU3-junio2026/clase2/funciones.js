// funciones declarativas

// def saludar(nombre):
//     print("Hola "+nombre+" bienvenid@")
//     return "ABC"

function saludar(nombre){
    // console.log(`Hola ${nombre} bienvenido`)
    console.log("Hola "+nombre+" bienvenid@")
    return "ABC"
}

saludar("Randolh");
saludar("Lesli");
let respuesta = saludar("Juan");
console.log(respuesta)

// funciones de expresion (anonimas)
let sumar = function(a,b){
    return a+b;
}

let restar = (a,b) => {
    return a-b;
}

let multiplicar = (a,b) => a * b;

let incrementar = a => a + 1;

console.log(sumar(4,5));
console.log(restar(4,5));
console.log(multiplicar(4,5));

(function(nombre){
    console.log("Comienza el aplicativo");
    console.log("Bienvendio "+nombre);
    let x = 50;
})("Luis");