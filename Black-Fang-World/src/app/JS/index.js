// modulo fs
var fs = require("fs");
//

//modulos de las funciones basicas
//dc para crear carpetas
//encoderReturn y decoderReturn para codificar y codificar informacion respectivamente
//las demas funciones son para activar las acciones de cada pantalla
const {gameObject, dc, encoderReturn, decoderReturn, function_registration_and_login} = require('../modules/modules/functions');
//funciones relacionadas con la UI, son usados por gameObject
const {viewChange, viewReturn} = require('../modules/UI_modules/ui_functions');

const {startGame} = require('../JS/game/game');

//variable que recoge el elemnto sustituible de la interfaz grafica
var appUI = document.getElementById('AppUI');
//

//variables para el mapa
//variable que recoge la informacion del terreno del mapa que recog
var allWorld = [
    [''],
    ['',            'p', 'a    ', 'y'],
    ['',            'l', 'map1', 'm'],
    ['',            'q', 'b    ', 'v']
];


//

//
var game = new gameObject();
//

//
console.log(appUI);
console.log('Version del juego: ' + game.gameVersion);
console.log('Vista 1: ' + game.currentView);
console.log(game.changeCurrentView('view_registration_and_login_1'));
console.log('Vista de registro: ' + game.currentView);
//

//
if (fs.existsSync(game.userInfoDir)){
    console.log('BFW STARTED');
}
else{
    dc(game.userInfoDir);
    alert('no se ha encontrado el directorio "' + game.userInfoDir + '", en el cual se guardan los registros, asi que se ha creado automaticamente.')
}
//

function winResolutionReturn(){var res = [0, 0];if(typeof window.innerWidth != 'undefined'){res = [window.innerWidth,window.innerHeight];}else if(typeof document.documentElement != 'undefined'&& typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0){res = [document.documentElement.clientWidth,document.documentElement.clientHeight];}else{res = [document.getElementsByTagName('body')[0].clientWidth,document.getElementsByTagName('body')[0].clientHeight];}return res;}


var heightScreenResolution = screen.height;
var heightScreenResolution = screen.height;
var windowResolution = winResolutionReturn();
console.log('Resolucion de la pantalla: ' + windowResolution[0] + ' x ' + windowResolution[1]);
startGame();
