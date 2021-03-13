const {app, BrowserWindow} = require('electron');
const path = require('path');


function createWindow(){
    let mainWindow = new BrowserWindow({
        frame: true,
        width: 800,
        heiht: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false,
            //preload: path.join(__dirname, 'preload.js')
        }
    })
    //win.setMenu(null);
    mainWindow.loadFile('./src/app/UI/UI.html');
    //win.maximize();
}

require('electron-reload')(__dirname)

app.whenReady().then(createWindow);