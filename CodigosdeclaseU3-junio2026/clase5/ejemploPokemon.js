let pokedex = [];

function simulacionTiempoEspera(tiempo){
    return new Promise(function(resolve){
        setTimeout(resolve,tiempo);
    })
}

async function mostrarMenu(){
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
            consultarPokedex();
            break;
        case "3":
            await buscarPokemon();
            break;
        case "4":
            await subirNivel();
            break;
        case "5":
            liberarPokemon();
            break;
        case "6":
            console.log("Bye bye...");
            return;
        default:
            console.log("Lea bien...");
            
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

    console.log("Lanzando PokeBall...🙀");
    await simulacionTiempoEspera(3000);

    pokedex.push(pokemon);
    console.log("Pokemon Capturado ✅");
    console.log(`Se agrega ${nombre} a la pokedex 🙌🏻`);
};

function consultarPokedex(){
    console.log("********* Lista de Pokemon *********");
    if (pokedex.length === 0){
        console.log("No hay ningún Pokemon registrado!!");
    }else{
        pokedex.forEach(p =>{
            console.log(`Nombre: ${p.nombre} - Tipo: ${p.tipo} - Nivel: ${p.nivel} - Estado: ${p.estado}`)
        })
    }
}

async function buscarPokemon(){
    let nombre = prompt("Nombre del Pokemon a buscar");
    console.log("Consultando la Pokedex... 🫪");
    await simulacionTiempoEspera(2000);
    let pokemonBuscado = pokedex.find(p => {
        return p.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if(pokemonBuscado){
        console.log("Pokemon encontrado... ✅");
        console.log(`Nombre: ${pokemonBuscado.nombre} - Tipo: ${pokemonBuscado.tipo} - Nivel: ${pokemonBuscado.nivel} - Estado: ${pokemonBuscado.estado}`)
    }else{
        console.log("Sigue participando... 🤪");
    }
};

async function subirNivel(){
    let nombre = prompt("Nombre del Pokemon a buscar");
    console.log("Consultando nivel de Pokemon... 🫨");
    await simulacionTiempoEspera(3000);
    let pokemonBuscado = pokedex.find(p => {
        return p.nombre.toLowerCase() === nombre.toLowerCase();
    });

    if(pokemonBuscado){
        pokemonBuscado.nivel = pokemonBuscado.nivel + 1;

        console.log("Nivel actualizado....")

        console.log(`Nombre: ${pokemonBuscado.nombre} - Tipo: ${pokemonBuscado.tipo} - Nivel: ${pokemonBuscado.nivel} - Estado: ${pokemonBuscado.estado}`)
    }else{
        console.log("Sigue participando... 🤪");
    }
};

function liberarPokemon(){
    let nombre = prompt("Nombre del Pokemon a buscar");
    let indicePokemon = pokedex.findIndex(p => {
            return p.nombre.toLowerCase() === nombre.toLowerCase();
    });
    if (indicePokemon !== -1){
        pokedex.splice(indicePokemon, 1);
        console.log("Pokemon liberado... 😵");
    }else{
        console.log("Pokemon no encontrado...");
    }
}