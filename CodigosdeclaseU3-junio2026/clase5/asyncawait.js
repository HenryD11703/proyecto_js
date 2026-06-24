// Ejemplo 1 

function proceso(nombre){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(nombre);
            resolve();
        }, 2000)
    })
}

async function ejecucion() {
    await proceso("Solicitando historias!");
    await proceso("Procesando historias!");
    await proceso("Se envían resultados!");
    await proceso("Mostramos historias!");
    await proceso("Fin del proceso!!");
    console.log("Proceso final al final de todos los finales");
}

// ejecucion();

// Ejemplo 2
function validarUsuario(usuario){
    return new Promise(function(resolve, reject){
        console.log("Validando usuario....");
        setTimeout(function(){
            console.log("procesando....")
            if (usuario === "Luis"){
                resolve(`Usuario ${usuario} tiene acceso ✅`);
            }else{
                reject(`Usuario ${usuario} no tiene acceso ❌`);
            }
                        
        }, 3000);
    })
};

async function validacion(){
    try {
        let respuesta = await validarUsuario("Lesli");
        console.log(respuesta);
        console.log("Usuario entrando al sistema...");
    } catch (error) {
        console.log(error);
    }  
    
    console.log("Fin");
}

validacion();