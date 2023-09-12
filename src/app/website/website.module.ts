import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WebsiteRoutingModule } from './website-routing.module';
import {SharedModule} from './modulos/shared/shared.module';

import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
// import { HomeComponent } from './pages/home/home.component';
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
// import { PipeMsToMinutesPipe } from './modulos/shared/pipes/pipes/pipe-ms-to-minutes.pipe';
// import { ColorByImagePipe } from './modulos/shared/pipes/pipes/color-by-image.pipe';
// import { CategoriasAllComponent } from './pages/categorias-all/categorias-all.component';
// import { CategoriesComponent } from './components/categories/categories.component';
// import { CategorieComponent } from './modulos/shared/components/categorie/categorie.component';
// import { CategorebyidComponent } from './pages/categorebyid/categorebyid.component';
// import { PlaylistAllComponent } from './modulos/shared/components/playlist-all/playlist-all.component';
// import { PlaylistsComponent } from './modulos/shared/components/playlists/playlists.component';
// import { PlaylistComponent } from './modulos/shared/components/playlist/playlist.component';
import { PlaylistByIdComponent } from './pages/playlist-by-id/playlist-by-id.component';
import { DiscographyArtistByIDComponent } from './pages/discography-artist-by-id/discography-artist-by-id.component';
import { TopTracksUserComponent } from './components/top-tracks-user/top-tracks-user.component';
import { TopTrackUserViewComponent } from './pages/top-track-user-view/top-track-user-view.component';
import { TopArtistsUserComponent } from './components/top-artists-user/top-artists-user.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TopArtistUserViewComponent } from './pages/top-artist-user-view/top-artist-user-view.component';
import { PlaylistByUserComponent } from './pages/playlist-by-user/playlist-by-user.component';





@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    // HomeComponent,
    ArtistbyidComponent,
    AlbumbyidComponent,
    TracksComponent,
    TrackComponent,
    ArtistsTopTracksComponent,
    AppAuthCallbackComponent,
    UserComponent,
    // PipeMsToMinutesPipe,
    // ColorByImagePipe,
    // CategoriasAllComponent,
    // CategoriesComponent,
    // CategorieComponent,
    // CategorebyidComponent,
    // PlaylistAllComponent,
    // PlaylistsComponent,
    // PlaylistComponent,
    PlaylistByIdComponent,
    DiscographyArtistByIDComponent,
    TopTracksUserComponent,
    TopTrackUserViewComponent,
    TopArtistsUserComponent,
    ArtistsComponent,
    ArtistComponent,
    TopArtistUserViewComponent,
    PlaylistByUserComponent,
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    WebsiteRoutingModule,MatSlideToggleModule,
    MatToolbarModule,MatListModule,MatTooltipModule,MatMenuModule,MatIconModule,FontAwesomeModule,SharedModule
  ]
  ,exports:[
  ]
})
export class WebsiteModule { }
