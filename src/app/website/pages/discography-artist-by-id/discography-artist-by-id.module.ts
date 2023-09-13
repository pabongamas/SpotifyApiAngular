import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../modulos/shared/shared.module';
import { DiscographyArtistByIdRoutingModule } from './discography-artist-by-id-routing.module';
import { DiscographyArtistByIDComponent } from './discography-artist-by-id.component';
import { AlbumbyidComponent } from '../albumbyid/albumbyid.component';

@NgModule({
  declarations: [DiscographyArtistByIDComponent,AlbumbyidComponent],
  imports: [
    CommonModule,
    DiscographyArtistByIdRoutingModule,SharedModule
  ]
})
export class DiscographyArtistByIdModule { }
