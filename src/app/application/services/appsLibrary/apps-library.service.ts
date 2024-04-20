import { Injectable } from '@angular/core';
import {App} from "../../models/app/app.model";
import {UtilityService} from "../utility/utility.service";

@Injectable({
  providedIn: 'root'
})
export class AppsLibraryService {

  private apps = [
    { key: 'plong', name: 'Plong', active: 1 },
    { key: 'text', name: 'Text', active: 0 },
    { key: 'poc', name: 'Proof of Concept', active: 1 },
  ];

  constructor(
    private utility: UtilityService,
  ) {

  }

  getApps(){
    return this.apps.filter(app => app.active).map(app => new App(app));
  }
  getApp(key: string){
    const app = this.apps.find(app => app.key == key);
    return new App(app);
  }

  openApp(key: string){
    this.utility.href(`apps/${key}`);
  }

}
