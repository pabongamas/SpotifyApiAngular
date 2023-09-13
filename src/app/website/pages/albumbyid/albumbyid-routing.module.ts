import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumbyidComponent } from './albumbyid.component';

const routes: Routes = [
  {path:':id',component:AlbumbyidComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumbyidRoutingModule { }
