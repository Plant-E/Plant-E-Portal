import { Routes } from '@angular/router';
import {PlongComponent} from "./presentation/apps/plong/plong.component";
import {TextComponent} from "./presentation/apps/text/text.component";
import {HomeComponent} from "./presentation/home/home.component";
import {PocComponent} from "./presentation/apps/poc/poc.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apps/plong', component: PlongComponent },
  { path: 'apps/text', component: TextComponent },
  { path: 'apps/poc', component: PocComponent },
];
