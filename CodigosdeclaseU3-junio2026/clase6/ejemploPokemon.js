const consola = document.getElementById("consola");
let pokedex = [];

function simulacionTiempoEspera(tiempo){
    return new Promise(function(resolve){
        setTimeout(resolve,tiempo);
    })
}

function imprimir(texto){
    const p = "<p>"+texto+"</p>";
    consola.innerHTML += p;
}

function esperarVista(){
    return simulacionTiempoEspera(0);
}

async function mostrarMenu(){
    await esperarVista();
    let menu = "************** Biblioteca pokemon de Stefanny **************\n"+
        "1. Capturar Pokemon\n"+
        "2. Ver lista de Pokemon\n"+
        "3. Buscar pokemon por nombre\n"+
        "4. Subir nivel\n"+
        "5. Liberar Pokemon\n"+
        "6. Salir";
    let opcion = prompt(menu);

    switch(opcion){
        case "1":
            await capturar();
            break;
        case "2":
            await consultarPokedex();
            break;
        case "3":
            await buscarPokemon();
            break;
        case "4":
            await subirNivel();
            break;
        case "5":
            await liberarPokemon();
            break;
        case "6":
            imprimir("Bye bye...");
            return;
        default:
            imprimir("Lea bien...");
            
    }
    mostrarMenu();
}

mostrarMenu();

async function capturar(){
    let nombre = prompt("Nombre del Pokemon");
    let tipo = prompt("Tipo del Pokemon");
    let nivel = Number(prompt("Nivel del Pokemon"));
    let estado = prompt("Estado (Debilitado, Saludable) del Pokemon");

    let pokemon = {
        nombre,
        tipo,
        nivel,
        estado
    };

    imprimir("Lanzando PokeBall...🙀");
    await simulacionTiempoEspera(3000);

    pokedex.push(pokemon);
    imprimir("Pokemon Capturado ✅");
    imprimir(`Se agrega ${nombre} a la pokedex 🙌🏻`);
    await esperarVista();
};

async function consultarPokedex(){
    imprimir("********* Lista de Pokemon *********");
    if (pokedex.length === 0){
        imprimir("No hay ningún Pokemon registrado!!");
    }else{
        pokedex.forEach(p =>{
            imprimir(`Nombre: ${p.nombre} - Tipo: ${p.tipo} - Nivel: ${p.nivel} - Estado: ${p.estado}`)
        })
    }
    await esperarVista();
}

async function buscarPokemon(){
    let nombre = prompt("Nombre del Pokemon a buscar");
    imprimir("Consultando la Pokedex... 🫪");
    await simulacionTiempoEspera(2000);
    let pokemonBuscado = pokedex.find(p => {
        return p.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if(pokemonBuscado){
        imprimir("Pokemon encontrado... ✅");
        imprimir(`Nombre: ${pokemonBuscado.nombre} - Tipo: ${pokemonBuscado.tipo} - Nivel: ${pokemonBuscado.nivel} - Estado: ${pokemonBuscado.estado}`)
    }else{
        imprimir("Sigue participando... 🤪");
    }
    await esperarVista();
};

async function subirNivel(){
    let nombre = prompt("Nombre del Pokemon a buscar");
    imprimir("Consultando nivel de Pokemon... 🫨");
    await simulacionTiempoEspera(3000);
    let pokemonBuscado = pokedex.find(p => {
        return p.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if(pokemonBuscado){
        pokemonBuscado.nivel = pokemonBuscado.nivel + 1;

        imprimir("Nivel actualizado....")

        imprimir(`Nombre: ${pokemonBuscado.nombre} - Tipo: ${pokemonBuscado.tipo} - Nivel: ${pokemonBuscado.nivel} - Estado: ${pokemonBuscado.estado}`)
    }else{
        imprimir("Sigue participando... 🤪");
    }
    await esperarVista();
};

async function liberarPokemon(){
    let nombre = prompt("Nombre del Pokemon a buscar");
    let indicePokemon = pokedex.findIndex(p => {
            return p.nombre.toLowerCase() === nombre.toLowerCase();
    });
    if (indicePokemon !== -1){
        pokedex.splice(indicePokemon, 1);
        imprimir("Pokemon liberado... 😵");
    }else{
        imprimir("Pokemon no encontrado...");
    }
    await esperarVista();
}