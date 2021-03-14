//codificador y decodificador
function encoderReturn(te){
    var teD1 = btoa(te);
    var teD2 = btoa(teD1);
    var teD3 = btoa(teD2);
    var teD4 = btoa(teD3);
    var teD5 = btoa(teD4);
    var teD6 = btoa(teD5);
    var teD7 = btoa(teD6);
    var teD8 = btoa(teD7);
    var teD9 = btoa(teD8);
    var teDf = btoa(teD9);
    return teDf;
}

function decoderReturn(te){
    var teD1 = atob(te);
    var teD2 = atob(teD1);
    var teD3 = atob(teD2);
    var teD4 = atob(teD3);
    var teD5 = atob(teD4);
    var teD6 = atob(teD5);
    var teD7 = atob(teD6);
    var teD8 = atob(teD7);
    var teD9 = atob(teD8);
    var teDf = atob(teD9);
    return teDf;
}








//creador de ficheros
var fs = require('fs');
function folderCreator(path){

    fs.mkdir(path, { recursive: true }, (err) => {
        if (err) throw err;
    });

}








//creador de archivos
var fs = require("fs");
function fileCreator(path, content){

    let promesaEscrituraArchivo = new Promise((resolve, reject) => {
        fs.writeFile(path, content, (error) => {
            if(error){
                reject(error);
            } else {
                resolve();
            }
        });
    });

    promesaEscrituraArchivo
    .then(() => {
        console.log('1');
    })
    .catch((error) => {
        console.log('0 err', error);
    });

}




function function_registration_and_login(){
    console.log('Esto es lo que hace la funcion de registro');
}


module.exports = {
    encoderReturn,
    decoderReturn,
    folderCreator,
    fileCreator,
    function_registration_and_login
}