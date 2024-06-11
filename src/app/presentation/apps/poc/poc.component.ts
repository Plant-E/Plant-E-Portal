import { Component } from '@angular/core';
import {AppsLibraryService} from "../../../application/services/appsLibrary/apps-library.service";
import {App} from "../../../application/models/app/app.model";
import {NgIf} from "@angular/common";
import {
  DisplayLinkCommunicationService
} from "../../../application/services/displayLinkCommunication/display-link-communication.service";
import {Poc} from "../../../application/models/poc/poc.model";
import {Plong} from "../../../application/models/Plong/plong.model";

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

  public app: any = this.library.getApp('poc');

  constructor(
    private library: AppsLibraryService,
  ) {}

}
