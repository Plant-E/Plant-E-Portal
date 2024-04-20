import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


import {DisplayLinkConnectionService} from "../../application/displayLinkConnection/display-link-connection.service";
import {
  DisplayLinkCommunicationService
} from "../../application/displayLinkCommunication/display-link-communication.service";

@Component({
  selector: 'app-nav',
  standalone: true,
    imports: [
        RouterOutlet,
        CommonModule
    ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  constructor(
    public displayLinkConnection: DisplayLinkConnectionService,
    private displayLinkCommunication: DisplayLinkCommunicationService,
  ) {}

  ngOnInit(){}

  async send(){
    console.log({command: 'VISUALIZE', image: 'test'})
    const response = await this.displayLinkCommunication.send({command: 'VISUALIZE', image: 'test'});
    console.log(response);
  }

}
