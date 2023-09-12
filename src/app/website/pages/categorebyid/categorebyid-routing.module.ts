import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorebyidComponent } from './categorebyid.component';

const routes: Routes = [
  {path:':id',component: CategorebyidComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorebyidRoutingModule { }
