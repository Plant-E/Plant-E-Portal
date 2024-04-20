import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private router: Router,
  ) { }

  href(url: string){
    try{
      this.router.navigate([url]);
    }
    catch (e) {
      console.log(e);
    }
  }

}
