let telefono = {
    marca: "Samsung",
    modelo: "S25",
    ram: 16,
    esNuevo: true,
    precio: 11000,
    aplicativos: ["Fotos", "WhatsApp", "Facebook", "TikTok"],
    tienda: {
        nombre: "Intelaf",
        direccion: "Direccion de Intelaf"
    }
};

function mostrarProducto({marca, modelo, precio}){
    console.log(`el producto: ${marca} ${modelo} tiene un precio de ${precio} Quetzales`)
}

mostrarProducto(telefono);

// let marca = "Apple";
let precio = 5000;
// let marca = telefono.marca;
// let modelo = telefono.modelo;
let {marca: marcaTelefono, modelo, precio: precioTelefono = 10000, tienda: {nombre}} = telefono;
// console.log(marca)
console.log(marcaTelefono)
console.log(modelo)
console.log(precio)
console.log(precioTelefono)
console.log(nombre)


// operadore Rest ...

let {marca, modelo: modeloTelefono, ...otras} = telefono;
console.log(marca)
console.log(modeloTelefono)
console.log(otras)

let telefono2 = {
    ...telefono,
    cantidad: 50
}

console.log(telefono2)

let telefono3 = {...telefono}; //clonamos el objeto
console.log(telefono)
console.log(telefono3)
telefono.modelo = "S26";
console.log(telefono)
console.log(telefono3)