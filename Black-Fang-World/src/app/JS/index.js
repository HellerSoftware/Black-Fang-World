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

var Map1Code = fs.readFileSync('c:/HellerGames/BFW/maps/surface/'+ allWorld[2][2] + '/x1y1/map.bfwmap', 'utf8');
var map1Y = Map1Code.split('\n');
var map1 = [];
for(var i = 0; i < map1Y.length; i++){
    var map = map1Y[i];
    map1[i] = map.split('-');
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
heightScreenResolution = screen.height;
textureSize = heightScreenResolution / 26 - 1;
console.log(textureSize);
appUI.innerHTML = '<div id="el"></div>';
var mapElements = document.getElementById('el');
function mapCreate(y, x){

    ts = textureSize;
    
    if(map1[y][x] == 'ground'){
        mapElements.innerHTML += '<div class="ground" style="width: ' + ts + 'px; height: ' + ts + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/ground.png' + ');"></div>';
    }
    if(map1[y][x] == 'stone_'){
        mapElements.innerHTML += '<div class="stone" style="width: ' + ts + 'px; height: ' + ts + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/stone.png' + ');"></div>';
    }
    if(map1[y][x] == 'water_'){
        mapElements.innerHTML += '<div class="water" style="width: ' + ts + 'px; height: ' + ts + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/water.png' + ');"></div>';
    }
    if(map1[y][x] == 'none__'){
        mapElements.innerHTML += '<div class="none" style="width: ' + ts + 'px; height: ' + ts + 'px;"></div>';
    }
}


for(var i=1; i<26; i++) {
    for(var j=1; j<36; j++) {
        mapCreate(i, j);
    }
}

/*
    var i2 = 1;
    if(i2 == 1)
    for(var i = 1; i < 36; i++){
console.log(map1)}
for(var i=0; i<map1.length; i++) {
    for(var j=0; j<map1[i].length; j++) {

        var e = map1[i][j];
        console.log(e)
        if(e == 'ground'){
            mapElements.innerHTML = '<div class="ground" style="width: 56px;height: 56px; background-image:url(' + 'c:/HellerGames/BFW/textures/ground.png' + ');"></div>';
        }
        if(e == 'stone'){
            mapElements.innerHTML = 'div class="stone" style="width: 56px;height: 56px; background-image:url(' + 'c:/HellerGames/BFW/textures/stone.png' + ');"></div>';
        }
        if(e == 'water'){
            mapElements.innerHTML = '<div class="water" style="width: 56px;height: 56px; background-image:url(' + 'c:/HellerGames/BFW/textures/water.png' + ');"></div>';
        }
        if(e == 'none'){
            mapElements.innerHTML = '<div class="none" style="width: 56px;height: 56px;"></div>';
        }
    }
}
/*
for(var i = 0; i < 25; i++){
    console.log(mapX[i])
    document.write(mapY[0] + '<br>');
    //document.write('var y' + i + '= []; <br>')
}*/
