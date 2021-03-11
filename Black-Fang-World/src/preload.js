const {game} = require('./app/JS/app_index')
function winChange(winCode){
    var appUI = document.getElementById('AppUI');
        if(appUI){
        appUI.innerHTML = winCode;
    }
    else{alert('no existe')}

}

window.addEventListener('DOMContentLoaded', () => {

    winChange('Que tal?');
    game();

})