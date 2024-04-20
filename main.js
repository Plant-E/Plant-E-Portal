const { app, BrowserWindow, ipcMain } = require('electron');

const DisplayLinkController = require('./electron/Application/DisplayLinkController');
const node_path = require('node:path')

let window;
let DLC;

app.on('ready', createWindow);


function createWindow(){
  window = new BrowserWindow({
    width: 1400,
    height: 900,
    backgroundColor: '#292C35',
    webPreferences: {
      preload: node_path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    }
  })

  window.loadFile('./dist/plant-e-electron/browser/index.html');
  window.webContents.openDevTools();
  window.setMenu(null);

  DLC = new DisplayLinkController({
    window: window,
  })
}





