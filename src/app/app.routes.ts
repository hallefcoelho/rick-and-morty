import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home.component';
import { CharactersComponent } from './features/characters/component/characters.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
];
