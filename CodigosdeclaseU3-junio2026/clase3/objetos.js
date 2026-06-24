let persona = {
    nombre: "Henry",
    hobbies: ["leer", "correr", "cantar", "saltar"],
    edad: 75,
    "fecha nacimiento": "3/06/1990",
    lugarEstudio: {
        nombre: "CampusLands",
        direccion: "Direccion de campuslands"
    },
    caminar: function(lugar){
        console.log("Estoy caminando en "+lugar)
    },
    mostrarHobbies: function(){
        console.log(this.hobbies)
    }
}

let producto = {
    nombre: "Coca Cola",
    precio: 5,
    cantidad: 46,
    calcularTotal: function(){
        console.log("El total de dinero en "+this.nombre+" es:")
        console.log(this.precio*this.cantidad)
    },
    vender: function(unidades){
        if (unidades <= this.cantidad){
            console.log("Vendiendo....");
            this.cantidad -= unidades;
            console.log("El valor a pagar es "+unidades*this.precio)
        }
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona["fecha nacimiento"]);
persona.nombre = "Luis"; //persona["nombre"] = "Luis"
console.log(persona);
persona.telefono = "13982893";
console.log(persona);
persona.caminar("El centro comercial");
persona.mostrarHobbies();
console.log(persona.lugarEstudio.direccion)

producto.calcularTotal();
producto.vender(15);
producto.calcularTotal();

// let CALCULADORA = {
//     sumar: function(a,b){
//         return a+b;
//     },
//     restar: function(a,b){
//         return a-b
//     }
// }

// CALCULADORA.sumar()

let objetoJson = JSON.stringify(producto, function(key, value){
    if(key === "precio"){
        return value-1;
    }
    return value;
});
console.log(objetoJson);

let objetoProducto = JSON.parse(objetoJson, function(key, value){
    if (key === "precio"){
        return value+1
    }
    return value;
});

console.log(objetoProducto);