import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { WebsiteRoutingModule } from './website-routing.module';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './pages/album/album.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NewReleasesAlbumComponent } from './pages/albums/new-releases-album/new-releases-album.component';
import { ArtistbyidComponent } from './pages/artistbyid/artistbyid.component';
import { AlbumbyidComponent } from './pages/albumbyid/albumbyid.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    LayoutComponent,
    NavComponent,
    HomeComponent,
    NewReleasesAlbumComponent,
    ArtistbyidComponent,
    AlbumbyidComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,MatSlideToggleModule,MatToolbarModule,MatListModule
  ]
})
export class WebsiteModule { }
