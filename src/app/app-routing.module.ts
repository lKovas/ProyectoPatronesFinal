import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ LoginComponent } from './views/login/login.component';
import{ PokemonsComponent } from './views/pokemons/pokemons.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
