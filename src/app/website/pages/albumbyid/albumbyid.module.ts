import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumbyidRoutingModule } from './albumbyid-routing.module';
import { AlbumbyidComponent } from './albumbyid.component';
import { SharedModule } from '../../modulos/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbumbyidRoutingModule,SharedModule
  ]
})
export class AlbumbyidModule { }
