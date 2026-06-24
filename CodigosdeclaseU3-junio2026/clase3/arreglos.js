const campers = ["Luis", "Lesli", "Randolh", "Victor", "Stefanny", "Alan", "Henry"];

console.log(campers)

console.log(campers[5]);

campers[3] = "Alex";

console.log(campers);

console.log("Longitud: "+campers.length)

campers.push("Victor"); // Agregamos un elemento al final

console.log(campers);

campers.unshift("Juan"); // Agregamos un elemento al inicio

console.log(campers);

campers.shift() // Eliminamos del inicio

console.log(campers)

let eliminado = campers.pop() // Eliminamos del final

console.log(eliminado)

console.log(campers)

campers.pop()

console.log(campers.indexOf("Alex"));

// splice
console.log(campers)
campers.splice(2, 2, "Bianca", "Jorge", "Pepito") //eliminar un elemento
console.log(campers)

// join
let unionCampers = campers.join(",");
console.log(unionCampers)

let campers2 = unionCampers.split(",")
console.log(campers2)

// sort
console.log(campers)
campers.sort() // funcion para organizar... próximamente
console.log(campers)