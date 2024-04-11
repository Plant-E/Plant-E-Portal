import {Component, OnInit, NgZone} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


import {DisplayLinkConnectionService} from "../../application/displayLinkConnection/display-link-connection.service";

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

  public displayController = {
    linked: false,
  }

  constructor(
    private zone: NgZone,
    public displayLinkConnection: DisplayLinkConnectionService,
  ) {}

  ngOnInit(){}


}
