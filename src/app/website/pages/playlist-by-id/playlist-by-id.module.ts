import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistByIdComponent } from './playlist-by-id.component';
import { PlaylistByIdRoutingModule } from './playlist-by-id-routing.module';
import {SharedModule} from './../../modulos/shared/shared.module';

@NgModule({
  declarations: [PlaylistByIdComponent],
  imports: [
    CommonModule,
    PlaylistByIdRoutingModule,SharedModule
  ]
})
export class PlaylistByIdModule { }
