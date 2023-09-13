import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscographyArtistByIDComponent } from './discography-artist-by-id.component';

const routes: Routes = [
  {path:':type',component:DiscographyArtistByIDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscographyArtistByIdRoutingModule { }
