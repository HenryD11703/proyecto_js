let pokedex = [];


function mostrarMenu(){
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
            capturar(mostrarMenu);
            break;
        case "2":
            consultarPokedex(mostrarMenu);
            break;
        case "3":
            buscarPokemon(mostrarMenu);
            break;
        case "4":
            subirNivel(mostrarMenu);
            break;
        case "5":
            liberarPokemon(mostrarMenu);
            break;
        case "6":
            console.log("Bye bye...");
            break;
        default:
            console.log("Lea bien...");
            mostrarMenu();
    }
}

mostrarMenu();

function capturar(callback){
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
    setTimeout(function(){
        pokedex.push(pokemon);
        console.log("Pokemon Capturado ✅");
        console.log(`Se agrega ${nombre} a la pokedex 🙌🏻`);
        callback();
    }, 3000);
};

function consultarPokedex(callback){
    console.log("********* Lista de Pokemon *********");
    if (pokedex.length === 0){
        console.log("No hay ningún Pokemon registrado!!");
    }else{
        pokedex.forEach(p =>{
            console.log(`Nombre: ${p.nombre} - Tipo: ${p.tipo} - Nivel: ${p.nivel} - Estado: ${p.estado}`)
        })
    }
    callback();
}

function buscarPokemon(callback){
    let nombre = prompt("Nombre del Pokemon a buscar");
    console.log("Consultando la Pokedex... 🫪");
    setTimeout(function(){
        let pokemonBuscado = pokedex.find(p => {
            return p.nombre.toLowerCase() === nombre.toLowerCase();
        });

        if(pokemonBuscado){
            console.log("Pokemon encontrado... ✅");
            console.log(`Nombre: ${pokemonBuscado.nombre} - Tipo: ${pokemonBuscado.tipo} - Nivel: ${pokemonBuscado.nivel} - Estado: ${pokemonBuscado.estado}`)
        }else{
            console.log("Sigue participando... 🤪");
        }
        callback();
    },2000);
};

function subirNivel(callback){
    let nombre = prompt("Nombre del Pokemon a buscar");
    console.log("Consultando nivel de Pokemon... 🫨");
    setTimeout(function(){
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
        callback();
    },3000);
};

function liberarPokemon(callback){
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
    callback();
}