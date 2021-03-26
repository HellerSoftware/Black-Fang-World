function startGame(playerName){

    var Map1Code = fs.readFileSync('c:/HellerGames/BFW/maps/surface/map1/x1y1/map.bfwmap', 'utf8');
    var map1Y = Map1Code.split('\n');
    var map1 = [];
    for(var i = 0; i < map1Y.length; i++){
        var map = map1Y[i];
        for(var j = 0; j < map1Y[i].length; j++){
        map1[i] = map.split('-');
        }
    }
    appUI.innerHTML = '';
    appUI.innerHTML = '<div id="el" style="float: right;"></div>';

    var mapElements = document.getElementById('el');
    
    var textureSizeH = (windowResolution[1] / 25);
    var textureSizeW = (windowResolution[0] / 25);

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
}

module.exports = {
    startGame
}