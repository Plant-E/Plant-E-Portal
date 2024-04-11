import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayLinkConnectionService {

  public linked =  false;

  constructor(
    private zone: NgZone,
  ) {
    this.listenToUsb();
  }

  listenToUsb(){
    window.electronAPI.receiveDataFromElectron('display-controller-connected', (device: any) => {
      this.zone.run(() => {
        this.linked = true;
      })
    })
    window.electronAPI.receiveDataFromElectron('display-controller-disconnected', () => {
      this.zone.run(() => {
        this.linked = false;
      })
    })
  }

}
