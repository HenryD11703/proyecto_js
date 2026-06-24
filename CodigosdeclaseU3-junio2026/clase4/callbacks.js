// function validarUsuario(callback){
//     console.log("Validando usuario....");
//     setTimeout(function(){
//         console.log("procesando....")
//         console.log("Usuario tiene acceso ✅");
//         callback();
//     }, 3000);
// }

// validarUsuario(function(){
//     console.log("Usuario entrando al sistema...");
//     console.log("Fin")
// });

function solicitud(callback){
    setTimeout(function(){
        console.log("Solicitando historias!");
        callback();
    }, 2000);
}

function procesamiento(callback){
    setTimeout(function(){
        console.log("Procesando historias!");
        console.log("Se envían resultados!");
        callback();
    }, 3000);
}

function visualizacion(callback){
    setTimeout(function(){
        console.log("Mostramos historias!");
        callback();
    }, 1000);
}

solicitud(function(){
    procesamiento(function(){
        visualizacion(function(){
            console.log("Fin del proceso!!");
        })
    })
});


if (x < 18){
    console.log("Algo");
}else{
    if (x< 30){
        console.log("Algo");
    }else{
        if(x<50){
            console.log("Algo");
        }
    }
}