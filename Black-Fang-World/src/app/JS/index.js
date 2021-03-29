// modulo fs
var fs = require("fs");
//modulos de las funciones basicas
//dc para crear carpetas
//encoderReturn y decoderReturn para codificar y codificar informacion respectivamente
//las demas funciones son para activar las acciones de cada pantalla
const {gameObject, dc, encoderReturn, decoderReturn, winResolutionReturn, function_registration_and_login} = require('../modules/modules/functions');
//funciones relacionadas con la UI, son usados por gameObject
const {viewChange, viewReturn} = require('../modules/UI_modules/ui_functions');
//funcion para comenzar el juego
const {startGame} = require('../JS/game/game');

//variable que recoge el elemnto sustituible de la interfaz grafica
var appUI = document.getElementById('AppUI');

//variables para el mapa
//variable que recoge la informacion del terreno del mapa que recog
var allWorld = [
    [''],
    ['',            'p', 'a    ', 'y'],
    ['',            'l', 'map1', 'm'],
    ['',            'q', 'b    ', 'v']
];


 
//
var game = new gameObject();

//
console.log(appUI);
console.log('Version del juego: ' + game.gameVersion);
console.log('Vista 1: ' + game.currentView);
console.log(game.changeCurrentView('view_registration_and_login_1'));
console.log('Vista de registro: ' + game.currentView);

//Verificacion de existencia de directorios necesarios
if (fs.existsSync(game.userInfoDir)){
    console.log('BFW STARTED');
}
else{
    dc(game.userInfoDir);
    alert('no se ha encontrado el directorio "' + game.userInfoDir + '", en el cual se guardan los registros, asi que se ha creado automaticamente.');
}
//




var heightScreenResolution = screen.height;
var widthScreenResolution = screen.width;
var windowResolution = winResolutionReturn();
console.log('Resolucion de la ventana: ' + windowResolution[0] + ' x ' + windowResolution[1] + '\n' + 'Resolucion de la pantalla: ' + widthScreenResolution + ' x ' + heightScreenResolution);
//game.changeCurrentView('view_registration_and_login_1');
startGame();

//var aaa = setInterval('mp(yp, xp, "d")', 750);
//mp(yp, xp);
//var cookieValue = cument.getElementById('3-16').getAttribute('element-type');
//alert(cookieValue);