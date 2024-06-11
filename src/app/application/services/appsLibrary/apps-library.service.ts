import { Injectable } from '@angular/core';
import {App} from "../../models/app/app.model";
import {UtilityService} from "../utility/utility.service";
import {Plong} from "../../models/Plong/plong.model";
import {Poc} from "../../models/poc/poc.model";

@Injectable({
  providedIn: 'root'
})
export class AppsLibraryService {

  private apps = [
    { class: Poc, key: 'poc', name: 'Proof of Concept', active: 1 },
    { class: Plong, key: 'plong', name: 'Plong', active: 1 },
  ];

  constructor(
    private utility: UtilityService,
  ) {

  }

  getApps(){
    return this.apps.filter(app => app.active).map(app => new app.class(app));
  }
  getApp(key: string){
    const app = this.apps.find(app => app.key == key);
    if(!app){ return null; }

    return new app.class(app);
  }

  openApp(key: string){
    this.utility.href(`apps/${key}`);
  }

}
