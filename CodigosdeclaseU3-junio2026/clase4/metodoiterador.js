const numeros = [6,3,15,1,7,4];

numeros.sort(function(a,b){
    return b - a;
});

console.log(numeros);

const campers = [
    {nombre: "Luis", edad: 20},
    {nombre: "Lesli", edad: 21},
    {nombre: "Alan", edad: 15},
    {nombre: "Pepito", edad: 18}
];

campers.sort(function(a,b){
    return a.edad - b.edad;
});

console.log(campers)

campers.sort(function(a,b){
    return a.nombre.localeCompare(b.nombre);
});

// métodos iteradores que no modifican, generan una nueva lista

const numerosPares = numeros.filter(n => {
    return n % 2 === 0;
})

console.log(numerosPares)

const campersMayores = campers.filter(c => {
    return c.edad >= 20;
});

console.log(campersMayores)

const nombresCampers = campers.map(c => {
    return c.nombre;
})

console.log(nombresCampers)

const camperLesli = campers.find(c => {
    return c.nombre === "Lesli";
})

console.log(camperLesli);

campers.forEach(c => {
    console.log(c)
})

const videojuegos = [
    {nombre: "Zelda BOTW", calificacion: 10},
    {nombre: "Smash Bros", calificacion: 8.25},
    {nombre: "Pubg", calificacion: 4},
    {nombre: "Battlefront", calificacion: 9},
    {nombre: "The last of Us 2", calificacion: 9.5},
    {nombre: "Clash of Clans", calificacion: 5}
];

const juegosFavoritos = videojuegos
    .filter(j => j.calificacion >= 8)
    .sort((a,b) => a.calificacion - b.calificacion)
    .map(j => j.nombre);

console.log(juegosFavoritos);