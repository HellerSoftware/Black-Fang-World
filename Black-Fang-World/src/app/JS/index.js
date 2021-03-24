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

var Map1Code = fs.readFileSync('c:/HellerGames/BFW/maps/surface/map1/x1y1/map.bfwmap', 'utf8');
var map1Y = Map1Code.split('\n');
var map1 = [];
for(var i = 0; i < map1Y.length; i++){
    var map = map1Y[i];
    for(var j = 0; j < map1Y[i].length; j++){
    map1[i] = map.split('-');
    }
}
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

/*for(var i = 0; i < 25; i++){
    //console.log(mapX[0][0])
    document.write(map1[3][35] + '<br>');
    //document.write('var y' + i + '= []; <br>')
}*/

function tamVentana(){var tam = [0, 0];if (typeof window.innerWidth != 'undefined'){tam = [window.innerWidth,window.innerHeight];}else if (typeof document.documentElement != 'undefined'&& typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0){tam = [document.documentElement.clientWidth,document.documentElement.clientHeight];}else{tam = [document.getElementsByTagName('body')[0].clientWidth,document.getElementsByTagName('body')[0].clientHeight];}return tam;}


var heightScreenResolution = screen.height;
var WindowResolution = tamVentana();
var textureSizeH = (WindowResolution[1] / 25);
var textureSizeW = (WindowResolution[0] / 25);
console.log(tamVentana());
appUI.innerHTML = '<div id="el" style="text-align: center;"></div>';// style="float: right";
var mapElements = document.getElementById('el');
function mapCreate(m, y, x){

    tsh = textureSizeH;
    
    if(m[y][x] == 'ground'){
        mapElements.innerHTML += '<div class="ground" style="width: ' + tsh + 'px; height: ' + tsh + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/ground.png' + ');"></div>';
    }
    if(m[y][x] == 'stone_'){
        mapElements.innerHTML += '<div class="stone" style="width: ' + tsh + 'px; height: ' + tsh + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/stone.png' + ');"></div>';
    }
    if(m[y][x] == 'water_'){
        mapElements.innerHTML += '<div class="water" style="width: ' + tsh + 'px; height: ' + tsh + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/water.png' + ');"></div>';
    }
    if(m[y][x] == 'none__'){
        mapElements.innerHTML += '<div class="none" style="width: ' + tsh + 'px; height: ' + tsh + 'px;"></div>';
    }
}

console.log(map1)
for(var i = 0 ; i < map1.length; i++) {
    for(var j = 0; j < map1[i].length; j++) {
        mapCreate(map1, i, j);
    }
}

/*
for(var i = 0; i < 25; i++){
    console.log(mapX[i])
    document.write(mapY[0] + '<br>');
    //document.write('var y' + i + '= []; <br>')
}*/
