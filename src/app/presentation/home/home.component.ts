import { Component } from '@angular/core';
import {DisplayLinkConnectionService} from "../../application/services/displayLinkConnection/display-link-connection.service";
import {AppsLibraryService} from "../../application/services/appsLibrary/apps-library.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    public DLConnection: DisplayLinkConnectionService,
    public library: AppsLibraryService,
  ) {}

  openApp(key: string){
    if(!this.DLConnection.linked){ return; }
    this.library.openApp(key);
  }

}
