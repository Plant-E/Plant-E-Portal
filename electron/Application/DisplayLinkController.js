const { usb } = require('usb');
const {SerialPort} = require("serialport");
const {ReadlineParser} = require("@serialport/parser-readline");
const {timestamp} = require("rxjs");
const {ipcMain} = require("electron");

class DisplayLinkController{

  constructor(params) {

    this.window = params.window;

    this.serialport = null
    this.parser = null;

    usb.on('attach', this.pingPorts);
    usb.on('detach', this.pingPorts);

    ipcMain.handle('send-data-to-dlc', async (event, data) => {
      return await this.sendData(data);
    });

    this.pingPorts();
  }

  async pingPorts(){
    const ports = await SerialPort.list()
    for(const port of ports){
      const serialport = new SerialPort({ baudRate: 115200, path: port.path });
      const parser = new ReadlineParser();
      parser.on('data', async data => {
        data = data.trim();
        if (data !== 'OK') {
          return;
        }

        await serialport.close();

        this.selectPort(port);
      })
      serialport.pipe(parser);
      serialport.write(JSON.stringify({ command: 'INIT' }));
    }
  }
  selectPort(port){
    this.window.webContents.send('display-controller-connected', port);

    this.serialport = new SerialPort({ baudRate: 115200, path: port.path });
    this.parser = new ReadlineParser();
    this.serialport.pipe(this.parser);
  }

  sendData(data){
    if(!this.serialport){ return }

    return new Promise(resolve => {
      this.serialport.write(JSON.stringify(data));
      this.parser.on('data', data => {
        resolve(data);
      });
    })

  }


}

module.exports = DisplayLinkController;
