const { ipcRenderer } = require('electron')
ipcRenderer.invoke('perform-action', ...args)

