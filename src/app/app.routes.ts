import { Routes } from '@angular/router';
import {PlongComponent} from "./presentation/apps/plong/plong.component";
import {TextComponent} from "./presentation/apps/text/text.component";
import {HomeComponent} from "./presentation/home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'plong', component: PlongComponent },
  { path: 'text', component: TextComponent },
  { path: 'home', component: HomeComponent },
];
