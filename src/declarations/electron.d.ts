export {};

declare global {
  interface Window {
    electronAPI: {
      sendDataToAngular: (channel: string, data: any) => void;
      receiveDataFromElectron: (channel: string, func: (data: any) => void) => void;
    };
  }
}
