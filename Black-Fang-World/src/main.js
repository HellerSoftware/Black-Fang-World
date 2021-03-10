const {BrowserWindow} = require('electron');


let win;

function createWindow(){
    win = new BrowserWindow({
        frame: true,
        width: 800,
        heiht: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //win.setMenu(null);
    win.loadFile('./src/app/UI/mainUI.html');
    //win.maximize();
}

module.exports = {
    createWindow,
}