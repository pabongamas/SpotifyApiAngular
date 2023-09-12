import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {SearchModule} from './../search/search.module';
import { SearchComponent } from '../search/search.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlbumComponent} from './components/album/album.component'
import {AlbumsComponent} from './components/albums/albums.component';
import {NewReleasesAlbumComponent} from './components/albums/new-releases-album/new-releases-album.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategorieComponent} from './components/categorie/categorie.component';


@NgModule({
  declarations: [SearchComponent,AlbumComponent,AlbumsComponent,NewReleasesAlbumComponent,CategoriesComponent,CategorieComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SearchModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule,
  ],
  exports:[
    SearchComponent,AlbumsComponent,NewReleasesAlbumComponent,CategoriesComponent,CategorieComponent
  ]
})
export class SharedModule { }
