import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorebyidRoutingModule } from './categorebyid-routing.module';
import { CategorebyidComponent } from './categorebyid.component';
import {SharedModule} from './../../modulos/shared/shared.module';

@NgModule({
  declarations: [CategorebyidComponent],
  imports: [
    CommonModule,
    CategorebyidRoutingModule,SharedModule
  ]
})
export class CategorebyidModule { }
