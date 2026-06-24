//Ejemplo 1
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

// validarUsuario("Luis")
//     .then(function(mensaje){
//         console.log(mensaje)
//     })
//     .then(function(){
//         console.log("Usuario entrando al sistema...");
//     })
//     .catch(function(mensaje){
//         console.log(mensaje)
//     })
//     .finally(function(){
//         console.log("Fin");
//     });

// try / catch

//Ejemplo 2

function proceso(nombre){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(nombre);
            resolve();
        }, 2000)
    })
}

proceso("Solicitando historias!")
    .then(()=> proceso("Procesando historias!"))
    .then(()=> proceso("Se envían resultados!"))
    .then(()=> proceso("Mostramos historias!"))
    .then(()=> proceso("Fin del proceso!!"))
    .then(()=> {
        console.log("Proceso final al final de todos los finales")
    });

console.log("Proceso por fuera")