import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewReleasesAlbumRoutingModule } from './new-releases-album-routing.module';
import { NewReleasesAlbumComponent } from './new-releases-album.component';
import { SharedModule } from '../../modulos/shared/shared.module';

@NgModule({
  declarations: [NewReleasesAlbumComponent],
  imports: [
    CommonModule,
    NewReleasesAlbumRoutingModule,SharedModule
  ]
})
export class NewReleasesAlbumModule { }
