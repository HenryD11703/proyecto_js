const menu = new Map();

menu.set("1", "Sumar");
menu.set("2", "Restar");
menu.set("3", "Multiplicar");
menu.set("4", "Salir");

console.log(menu)

console.log(menu.get("hola"));

console.log(menu.has("4"));

console.log(menu.size);