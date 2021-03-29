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

    function mapCreate(id, m, y, x){
    
        var tsh = textureSizeH;
        var idName = id;
        
        if(m[y][x] == 'ground'){
            mapElements.innerHTML += '<div element-type="g1" id="' + idName + '" style="width: ' + tsh + 'px; height: ' + tsh + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/ground.png' + ');"></div>';
        }
        if(m[y][x] == 'stone_'){
            mapElements.innerHTML += '<div element-type="s3" id="' + idName + '" style="width: ' + tsh + 'px; height: ' + tsh + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/stone.png' + ');"></div>';
        }
        if(m[y][x] == 'water_'){
            mapElements.innerHTML += '<div element-type="w1" id="' + idName + '" style="width: ' + tsh + 'px; height: ' + tsh + 'px; background-image:url(' + 'c:/HellerGames/BFW/textures/water.png' + ');"></div>';
        }
        if(m[y][x] == 'none__'){
            mapElements.innerHTML += '<div element-type="nn" id="' + idName + '" style="width: ' + tsh + 'px; height: ' + tsh + 'px;"></div>';
        }
    }
    
    console.log(map1)
    for(var i = 0 ; i < map1.length; i++) {
        for(var j = 0; j < map1[i].length; j++) {
            var idN = i + '-' + j;
            mapCreate(idN, map1, i, j);
        }
    }



    var xp = 5;
    var yp = 5;
    var lastMovementDirection;
    var mainGamePositionID = yp + '-' + xp;
    var currentPosition = document.getElementById(mainGamePositionID);
    psh = textureSizeH - 15;
    currentPosition.innerHTML = '<div style="font-size: ' + psh + 'px;">🧸</div>';
    function mp(y, x, direction){
        var tsh = textureSizeH - 5;
        var mainCurrentGamePositionID = yp + '-' + xp;
        lastMovementDirection = direction;
        if(direction == 'u'){
            y-=1;
            x+=0;
        }
        if(direction == 'd'){
            y+=1;
            x+=0;
        }
        if(direction == 'r'){
            y+=0;
            x+=1;
        }
        if(direction == 'l'){
            y+=0;
            x-=1;
        }
        var fxp = x;
        var fyp = y;
        var futurePositionID = y + '-' + x;
        //var currentPositionElement = document.getElementById('3-5').getAttribute('element-type');
        var currentPosition = document.getElementById(mainCurrentGamePositionID);
        var futurePositionElement = document.getElementById(futurePositionID).getAttribute('element-type');
        var futurePosition = document.getElementById(futurePositionID);
        if(futurePositionElement == 'g1'){
            console.log('puedes pasar');
            currentPosition.innerHTML = '';
            futurePosition.innerHTML = '<div style="font-size: ' + psh + 'px;">🧸</div>';
            xp = fxp;
            yp = fyp;
        }
        else{
            console.log('no puedes pasar');
        }
    }
    document.querySelector('#u').addEventListener('click', () =>{mp(yp, xp, "u");})
    document.querySelector('#r').addEventListener('click', () =>{mp(yp, xp, "r");})
    document.querySelector('#l').addEventListener('click', () =>{mp(yp, xp, "l");})
    document.querySelector('#d').addEventListener('click', () =>{mp(yp, xp, "d");})
    document.querySelector('#j').addEventListener('click', () =>{
        //p = posibility
        if(lastMovementDirection == 'u'){
            var jumpDestination = yp - 1;
            mp(jumpDestination, xp, "u");
        }
        if(lastMovementDirection == 'r'){
            var jumpDestination = xp + 1;
            mp(yp, jumpDestination, "r");
        }
        if(lastMovementDirection == 'l'){
            var jumpDestination = xp - 1;
            mp(yp, jumpDestination, "l");
        }
        if(lastMovementDirection == 'd'){
            var jumpDestination = yp + 1;
            mp(jumpDestination, xp, "d");
        }

        //usar el salto continuamente tiene 2 penalizaciones, por un lado gastas mas energia y por otro tine un temporizador que hace que no puedas spamear salto, ese temporizador puede tardar entre 5 y 2 segundos dependiendo de tu nivel de fuerza
    })
}

module.exports = {
    startGame
}