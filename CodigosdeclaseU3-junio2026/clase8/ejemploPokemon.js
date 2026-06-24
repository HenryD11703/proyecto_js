// Capturar de elementos HTML
const consola = document.getElementById("consola");

const btnCapturar = document.getElementById("btn-capturar");
const btnMostrar = document.getElementById("btn-mostrar");
const btnBuscar = document.getElementById("btn-buscar");
const btnSubir = document.getElementById("btn-subir");
const btnLiberar = document.getElementById("btn-liberar");

const formularioCapturar = document.getElementById("form-capturar");
const formularioBuscar = document.getElementById("form-buscar");
const formularioSubir = document.getElementById("form-subir");
const formularioLiberar = document.getElementById("form-liberar");

const capturarNombre = document.getElementById("capturar-nombre");
const capturarTipo = document.getElementById("capturar-tipo");
const capturarNivel = document.getElementById("capturar-nivel");
const capturarEstado = document.getElementById("capturar-estado");

const buscarNombre = document.getElementById("buscar-nombre");
const subirNombre = document.getElementById("subir-nombre");
const liberarNombre = document.getElementById("liberar-nombre");

// Inicialización de variables
let pokedex = [{
        nombre: "Pikachu",
        tipo: "Electrico",
        nivel: 20,
        estado: "Saludable"
    }];

// Asignación de eventos
function registroEventos(){

    btnCapturar.addEventListener("click", function(){
        formularioCapturar.classList.toggle("oculto");
    })
    
    btnMostrar.addEventListener("click", function(){
        consultarPokedex();
    })
    
    btnBuscar.addEventListener("click", function(){
        formularioBuscar.classList.toggle("oculto");
    })
    
    btnSubir.addEventListener("click", function(){
        formularioSubir.classList.toggle("oculto");
    })
    
    btnLiberar.addEventListener("click", function(){
        formularioLiberar.classList.toggle("oculto");
    })
    
    formularioCapturar.addEventListener("submit", function(e){
        e.preventDefault();
        capturar();
        formularioCapturar.reset();
    })
    
    formularioBuscar.addEventListener("submit", function(e){
        e.preventDefault();
        buscarPokemon();
        formularioBuscar.reset();
    })
    
    formularioSubir.addEventListener("submit", function(e){
        e.preventDefault();
        subirNivel();
        formularioSubir.reset();
    })
    
    formularioLiberar.addEventListener("submit", function(e){
        e.preventDefault();
        liberarPokemon();
        formularioLiberar.reset();
    })

    document.addEventListener("pokemonCapturado", (e)=>{
        imprimir(`Se agrega ${e.detail.nombre} a la pokedex 🙌🏻`);
    })
}




// Funciones útiles
function limpiarConsola(){
    consola.replaceChildren();
}

function simulacionTiempoEspera(tiempo){
    return new Promise(function(resolve){
        setTimeout(resolve,tiempo);
    })
}

function imprimir(texto){
    // const p = "<p>"+texto+"</p>";
    // consola.innerHTML += p;

    const p = document.createElement("p");
    p.classList.add("impresion");
    p.textContent = texto;
    consola.appendChild(p);
}

// Funcionalidades
function consultarPokedex(){
    limpiarConsola();
    imprimir("********* Lista de Pokemon *********");
    if (pokedex.length === 0){
        imprimir("No hay ningún Pokemon registrado!!");
    }else{
        pokedex.forEach(p =>{
            imprimir(`Nombre: ${p.nombre} - Tipo: ${p.tipo} - Nivel: ${p.nivel} - Estado: ${p.estado}`)
        })
    }
}

async function capturar(){
    limpiarConsola();
    let nombre = capturarNombre.value;
    let tipo = capturarTipo.value;
    let nivel = Number(capturarNivel.value);
    let estado = capturarEstado.value;

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

    document.dispatchEvent(
        new CustomEvent("pokemonCapturado", {
            detail: pokemon
        })
    );
};

async function buscarPokemon(){
    limpiarConsola();
    let nombre = buscarNombre.value;
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
};

async function subirNivel(){
    limpiarConsola();
    let nombre = subirNombre.value;
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
};

function liberarPokemon(){
    limpiarConsola()
    let nombre = liberarNombre.value;
    let indicePokemon = pokedex.findIndex(p => {
            return p.nombre.toLowerCase() === nombre.toLowerCase();
    });
    if (indicePokemon !== -1){
        pokedex.splice(indicePokemon, 1);
        imprimir("Pokemon liberado... 😵");
    }else{
        imprimir("Pokemon no encontrado...");
    }
}

// Ejecucion
function ejecucion(){
    registroEventos();
    consultarPokedex();
};

document.addEventListener("DOMContentLoaded", ejecucion);

// mejora de formulario capturar (tipos en lista y estado en radio)
// dinamismo en botones de formularios
// refactorizacion de funciones