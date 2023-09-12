import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasAllComponent } from './categorias-all.component';

const routes: Routes = [
  {path:'',component:CategoriasAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasAllRoutingModule { }
