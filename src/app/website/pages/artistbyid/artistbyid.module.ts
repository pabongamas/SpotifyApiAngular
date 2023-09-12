import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistbyidRoutingModule } from './artistbyid-routing.module';
import { ArtistbyidComponent } from './artistbyid.component';
import { SharedModule } from '../../modulos/shared/shared.module';

@NgModule({
  declarations: [ArtistbyidComponent],
  imports: [
    CommonModule,
    ArtistbyidRoutingModule,SharedModule
  ]
})
export class ArtistbyidModule { }
