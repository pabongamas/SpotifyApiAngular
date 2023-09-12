import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistbyidComponent } from './artistbyid.component';

const routes: Routes = [
  {path:':id',component:ArtistbyidComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistbyidRoutingModule { }
