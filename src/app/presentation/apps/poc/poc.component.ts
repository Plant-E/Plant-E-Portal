import { Component } from '@angular/core';
import {AppsLibraryService} from "../../../application/services/appsLibrary/apps-library.service";
import {App} from "../../../application/models/app/app.model";
import {NgIf} from "@angular/common";
import {
  DisplayLinkCommunicationService
} from "../../../application/services/displayLinkCommunication/display-link-communication.service";

@Component({
  selector: 'app-poc',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './poc.component.html',
  styleUrl: './poc.component.css'
})
export class PocComponent {

  public app: App  = this.library.getApp('poc');
  public offset ={
    top: 43.75,
    left: 43.75,
  }

  constructor(
    private library: AppsLibraryService,
    private com: DisplayLinkCommunicationService,
  ) {
    this.init();
  }

  init(){
    setInterval(this.runInterval.bind(this), 750);
  }

  runInterval(){
    if(!this.app.on){ return; }

    this.offset.top = Math.random() * 87.5;
    this.offset.left = Math.random() * 87.5;
  }

}
