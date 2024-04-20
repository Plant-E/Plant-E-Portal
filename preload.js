const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendDataToElectron: (channel, data) => ipcRenderer.invoke(channel, data),
  receiveDataFromElectron: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});
