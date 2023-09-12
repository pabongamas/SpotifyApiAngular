import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesAlbumComponent } from './new-releases-album.component';

const routes: Routes = [
  {path:'',component:NewReleasesAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewReleasesAlbumRoutingModule { }
