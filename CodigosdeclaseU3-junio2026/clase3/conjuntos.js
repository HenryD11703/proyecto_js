let balotas = new Set();

balotas.add("B1");
balotas.add("I21");
balotas.add("O65");
balotas.add("B1");

console.log(balotas);

balotas.delete("O65");

console.log(balotas);

console.log(balotas.has("B2"));

console.log(balotas.size);

balotas.clear();

// Como convertir conjuntos en listas y listas en conjuntos