import { NgModule } from '@angular/core';
import { CommonModule,NgOptimizedImage } from '@angular/common';

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
import { TopTracksUserComponent } from './components/top-tracks-user/top-tracks-user.component';
import { TopArtistsUserComponent } from './components/top-artists-user/top-artists-user.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { PipeMsToMinutesPipe } from './pipes/pipes/pipe-ms-to-minutes.pipe';
import { ColorByImagePipe } from './pipes/pipes/color-by-image.pipe';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { QuicklinkModule } from 'ngx-quicklink';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ArtistsComponent,
    ArtistComponent,
    TopArtistsUserComponent,
    TopTracksUserComponent,
    PipeMsToMinutesPipe,
    ColorByImagePipe,
    AudioPlayerComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatIconModule,QuicklinkModule,
    NgOptimizedImage,
    FontAwesomeModule
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
    ArtistsComponent,
    ArtistComponent,
    TopArtistsUserComponent,
    TopTracksUserComponent,
    PipeMsToMinutesPipe,
    ColorByImagePipe,
    MatMenuModule,
    MatIconModule
  ],
})
export class SharedModule {}
