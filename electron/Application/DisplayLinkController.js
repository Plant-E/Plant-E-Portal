const { usb } = require('usb');
const {SerialPort} = require("serialport");
const {ReadlineParser} = require("@serialport/parser-readline");
const {ipcMain} = require("electron");

class DisplayLinkController{

  constructor(params) {

    this.window = params.window;

    this.serialport = null
    this.parser = null;

    usb.on('attach', this.pingPorts.bind(this));
    usb.on('detach', this.pingPorts.bind(this));

    ipcMain.handle('send-data-to-dlc', async (event, data) => {
      return await this.sendData(data);
    });

    this.pingPorts();
  }

  selectPort(port){
    this.window.webContents.send('display-controller-connected', port);

    this.serialport = new SerialPort({ baudRate: 115200, path: port.path });
    this.parser = new ReadlineParser();
    this.serialport.pipe(this.parser);
  }
  async pingPorts(){
    console.log('ping');
    this.window.webContents.send('display-controller-disconnected');

    const ports = await SerialPort.list()
    for(const port of ports){
      const serialport = await new SerialPort({ baudRate: 115200, path: port.path });
      const parser = await new ReadlineParser();

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

  sendData(data){
    if(!this.serialport){ return }

    return new Promise(resolve => {
      this.serialport.write(JSON.stringify(data));
      this.parser.on('data', response => {
        resolve(response);
      });
    })

  }


}

module.exports = DisplayLinkController;
