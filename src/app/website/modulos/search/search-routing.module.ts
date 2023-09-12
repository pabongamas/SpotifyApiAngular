import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {path:'',component:SearchComponent},
];



@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    [RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ]]
})
export class SearchRoutingModule { }
