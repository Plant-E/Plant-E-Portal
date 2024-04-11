const { app, BrowserWindow } = require('electron');
const { usb } = require('usb');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const { isJson } = require('./electron/utility');

const node_path = require('node:path')

let window;

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
}

app.on('ready', createWindow);

usb.on('attach', pingPorts);
usb.on('detach', pingPorts);

async function pingPorts(){
  const ports = await SerialPort.list()

  for(const port of ports){
    const serialport = new SerialPort({ baudRate: 115200, path: port.path });
    const parser = new ReadlineParser();
    parser.on('data', data => { verifyPort(data, port) });
    serialport.pipe(parser);
    serialport.write(JSON.stringify({ command: 'INIT' }));
  }

  return null;
}
function selectPort(port){
  window.webContents.send('display-controller-connected', port);
}
function verifyPort(data, port){
  data = data.trim();
  if(data === "OK"){
    selectPort(port)
  }
}
