import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    RouterModule,SearchRoutingModule,MatIconModule
  ]
})
export class SearchModule { }
