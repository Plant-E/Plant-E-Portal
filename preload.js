const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendDataToAngular: (channel, data) => ipcRenderer.send(channel, data),
  receiveDataFromElectron: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});
