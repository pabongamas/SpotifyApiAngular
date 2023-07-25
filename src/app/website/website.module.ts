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
import { TracksComponent } from './components/tracks/tracks.component';
import { TrackComponent } from './components/track/track.component';
import { ArtistsTopTracksComponent } from './components/artists-top-tracks/artists-top-tracks.component';
import { AppAuthCallbackComponent } from './components/app-auth-callback/app-auth-callback.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { UserComponent } from './components/user/user.component';
import { PipeMsToMinutesPipe } from './pipes/pipe-ms-to-minutes.pipe';
import { ColorByImagePipe } from './pipes/color-by-image.pipe';
import { CategoriasAllComponent } from './components/categorias-all/categorias-all.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CategorebyidComponent } from './pages/categorebyid/categorebyid.component';
import { PlaylistAllComponent } from './components/playlist-all/playlist-all.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistByIdComponent } from './pages/playlist-by-id/playlist-by-id.component';
import { DiscographyArtistByIDComponent } from './pages/discography-artist-by-id/discography-artist-by-id.component';
import { TopTracksUserComponent } from './components/top-tracks-user/top-tracks-user.component';
import { TopTrackUserViewComponent } from './pages/top-track-user-view/top-track-user-view.component';
import { TopArtistsUserComponent } from './components/top-artists-user/top-artists-user.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TopArtistUserViewComponent } from './pages/top-artist-user-view/top-artist-user-view.component';




@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    LayoutComponent,
    NavComponent,
    HomeComponent,
    NewReleasesAlbumComponent,
    ArtistbyidComponent,
    AlbumbyidComponent,
    TracksComponent,
    TrackComponent,
    ArtistsTopTracksComponent,
    AppAuthCallbackComponent,
    UserComponent,
    PipeMsToMinutesPipe,
    ColorByImagePipe,
    CategoriasAllComponent,
    CategoriesComponent,
    CategorieComponent,
    CategorebyidComponent,
    PlaylistAllComponent,
    PlaylistsComponent,
    PlaylistComponent,
    PlaylistByIdComponent,
    DiscographyArtistByIDComponent,
    TopTracksUserComponent,
    TopTrackUserViewComponent,
    TopArtistsUserComponent,
    ArtistsComponent,
    ArtistComponent,
    TopArtistUserViewComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,MatSlideToggleModule,MatToolbarModule,MatListModule,MatTooltipModule,MatMenuModule,MatIconModule
  ]
})
export class WebsiteModule { }
