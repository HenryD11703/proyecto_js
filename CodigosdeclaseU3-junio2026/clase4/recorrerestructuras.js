const frutas = ["Manzana", "Fresa", "Pera", "Durazno"];

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element)
}

for (let fruta of frutas){
    console.log(fruta)
}

const producto = {
    nombre: "Coca Cola",
    tamanio: 1,
    disponible: true,
    cantidad: 5
};

const valores = Object.values(producto);
const llaves = Object.keys(producto);
const pares = Object.entries(producto);
console.log(valores)
console.log(llaves)
console.log(pares)

for (let propiedad in producto){
    console.log(propiedad, producto[propiedad])
}

// Los mapas y conjuntos pueden ser recorridos con el for of