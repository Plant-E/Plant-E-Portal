const { app, BrowserWindow, ipcMain } = require('electron');

const DisplayLinkController = require('./electron/Application/DisplayLinkController');
const node_path = require('node:path')

let window;

app.on('ready', createWindow);


function createWindow(){
  window = new BrowserWindow({
    width: 1200,
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

  window.webContents.on('did-finish-load', () => {
    new DisplayLinkController({
      window: window,
    });
  });
}





