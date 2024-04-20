import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


import {DisplayLinkConnectionService} from "../../application/services/displayLinkConnection/display-link-connection.service";
import {
  DisplayLinkCommunicationService
} from "../../application/services/displayLinkCommunication/display-link-communication.service";
import {UtilityService} from "../../application/services/utility/utility.service";

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
    public DLConnection: DisplayLinkConnectionService,
    public utility: UtilityService,
  ) {}

  ngOnInit(){}

}
