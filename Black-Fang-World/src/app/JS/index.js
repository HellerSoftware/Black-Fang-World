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
var xp = 5;
var yp = 5;
var mainGamePositionID = yp + '-' + xp;
var currentPosition = document.getElementById(mainGamePositionID);
currentPosition.innerHTML = 'hola';
function mp(y, x, direction){
    var mainCurrentGamePositionID = yp + '-' + xp;
    y+=0;
    x+=0;
    var fxp = x;
    var fyp = y;
    var futurePositionID = y + '-' + x;
    //var currentPositionElement = document.getElementById('3-5').getAttribute('element-type');
    var currentPosition = document.getElementById(mainCurrentGamePositionID);
    currentPosition.innerHTML = 'hola';
    var futurePositionElement = document.getElementById(futurePositionID).getAttribute('element-type');
    var futurePosition = document.getElementById(futurePositionID);
    if(futurePositionElement == 'g1'){
        console.log('puedes pasar');
        currentPosition.innerHTML = '';
        futurePosition.innerHTML = 'hola';
        xp = fxp;
        yp = fyp;
    }
    else{
        console.log('no puedes pasar');
    }
}
var aaa = setInterval('mp(yp, xp)', 750);
//mp(yp, xp);
//var cookieValue = cument.getElementById('3-16').getAttribute('element-type');
//alert(cookieValue);