import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { PlaylistAllComponent } from './components/playlist-all/playlist-all.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { TrackComponent } from './components/track/track.component';
import { ArtistsTopTracksComponent } from './components/artists-top-tracks/artists-top-tracks.component';
import { PipeMsToMinutesPipe } from './pipes/pipes/pipe-ms-to-minutes.pipe';
import { ColorByImagePipe } from './pipes/pipes/color-by-image.pipe';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AlbumComponent,
    AlbumsComponent,
    CategoriesComponent,
    CategorieComponent,
    PlaylistAllComponent,
    PlaylistsComponent,
    PlaylistComponent,
    TracksComponent,
    TrackComponent,
    ArtistsTopTracksComponent,
    PipeMsToMinutesPipe,
    ColorByImagePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    AlbumsComponent,
    CategoriesComponent,
    CategorieComponent,
    PlaylistAllComponent,
    PlaylistsComponent,
    PlaylistComponent,
    TracksComponent,
    TrackComponent,
    ArtistsTopTracksComponent,
    PipeMsToMinutesPipe,
    ColorByImagePipe,
    MatMenuModule,
    MatIconModule
  ],
})
export class SharedModule {}
