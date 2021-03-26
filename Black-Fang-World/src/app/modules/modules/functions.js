function gameObject(){
    this.gameVersion = '1.0.0';
    this.currentView;
    this.userInfoDir = 'c:/HellerGames/BFW/';
    /*this.gameFilesSRC = gameFilesSRC;
    this.LocalTexturesSRC = LocalTexturesSRC;
    this.userLogsSRC = userLogsSRC;
    this.userPath = userPath;
    this.userName = userName;
    this.currentUserInfo = currentUserInfo;
    this.UserEncodedInfo = UserEncodedInfo;*/

    this.changeCurrentView = function(view){viewChange(viewReturn(view));this.currentView = view; return 'vista cambiada a: ' + this.currentView;}

}

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





function dc(path = 'c:/', fileName = '', content = ''){
    var fs = require('fs');
    if(path == '' && fileName == ''){
        return 'error';
    }
    if(path == ''){
        path = 'c:/';
    }
    if(path == 'c:/' || path == 'C:/'){
        if(fileName == ''){
            return 'error';
        }
        else{    
            var fileDir = path + '/' + fileName;
            fs.writeFile(fileDir, content, (err) => {if (err) throw err;});
        }
    }
    else{
        var pathArray = path.split('/');
        if(pathArray[0] == 'c:' || pathArray[0] == 'C:'){
            for(var i = 1; i < pathArray.length; i++){
                var imo = i-1;
                pathArray[i] = pathArray[imo] + '/' + pathArray[i];
                fs.mkdir(pathArray[i], { recursive: true }, (err) => {if (err) throw err;});
            }
        }
        else{
            path = 'c:/' + path;
            var pathArray = path.split('/');
            for(var i = 1; i < pathArray.length; i++){
                var imo = i-1;
                pathArray[i] = pathArray[imo] + '/' + pathArray[i];
                fs.mkdir(pathArray[i], { recursive: true }, (err) => {if (err) throw err;});
            }
        }
        if(path != '' && fileName != ''){
            var fileDir = path + '/' + fileName;
            fs.writeFile(fileDir, content, (err) => {if (err) throw err;});
        }
    }
}

function de(path){

}


function winResolutionReturn(){var res = [0, 0];if(typeof window.innerWidth != 'undefined'){res = [window.innerWidth,window.innerHeight];}else if(typeof document.documentElement != 'undefined'&& typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0){res = [document.documentElement.clientWidth,document.documentElement.clientHeight];}else{res = [document.getElementsByTagName('body')[0].clientWidth,document.getElementsByTagName('body')[0].clientHeight];}return res;}


function function_registration_and_login(){
    console.log('Ejecutando funcion de registro e inicio de sesion');
}


module.exports = {
    gameObject,
    encoderReturn,
    decoderReturn,
    dc,
    winResolutionReturn,
    function_registration_and_login
}