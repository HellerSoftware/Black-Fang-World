var fs = require("fs");

const {fileCreator, folderCreator, encoderReturn, decoderReturn, function_registration_and_login} = require('../modules/modules/functions')
const {viewChange, viewReturn} = require('../modules/UI_modules/ui_functions')

var appUI = document.getElementById('AppUI');

//viewChange(viewReturn('view_registration_and_login'));

function gameObject(currentView, gameFilesSRC, LocalTexturesSRC, userLogsSRC, userPath, userName, currentUserInfo, UserEncodedInfo){
    this.gameVersion = '1.0.0';
    this.currentView = currentView;
    this.gameFilesSRC = gameFilesSRC;
    this.LocalTexturesSRC = LocalTexturesSRC;
    this.userLogsSRC = userLogsSRC;
    this.userPath = userPath;
    this.userName = userName;
    this.currentUserInfo = currentUserInfo;
    this.UserEncodedInfo = UserEncodedInfo;

    this.changeCurrentView = function(view){viewChange(viewReturn(view));this.currentView = view}

}
    



var game = new gameObject('view_1');
console.log(game.gameVersion);
console.log(game.currentView);
game.changeCurrentView('view_registration_and_login');
console.log(game.currentView);