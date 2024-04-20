import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayLinkCommunicationService {

  constructor() { }

  send(data: object){
    return window.electronAPI.sendDataToElectron('send-data-to-dlc', data);
  }

}
