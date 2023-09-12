import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './search.component';
// import {AlbumsComponent } from './../../pages/albums/albums.component';



@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    RouterModule,SearchRoutingModule,MatIconModule
  ]
})
export class SearchModule { }
