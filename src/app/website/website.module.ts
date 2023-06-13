import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { WebsiteRoutingModule } from './website-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    LayoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,MatSlideToggleModule,MatToolbarModule,MatListModule
  ]
})
export class WebsiteModule { }
