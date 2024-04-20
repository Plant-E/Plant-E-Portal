export {};

declare global {
  interface Window {
    electronAPI: {
      sendDataToElectron: (channel: string, data: any) => any;
      receiveDataFromElectron: (channel: string, func: (data: any) => void) => void;
    };
  }
}
