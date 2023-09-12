import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasAllRoutingModule } from './categorias-all-routing.module';
import {CategoriasAllComponent} from './categorias-all.component';
import {SharedModule} from './../../modulos/shared/shared.module';


@NgModule({
  declarations: [CategoriasAllComponent],
  imports: [
    CommonModule,
    CategoriasAllRoutingModule,SharedModule
  ]
})
export class CategoriasAllModule { }
