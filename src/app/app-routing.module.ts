import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';


const routes: Routes = [
  {
    path: 'pokemon-add',
    component: PokemonAddComponent,
    data: { title: 'Add Pokemon'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
