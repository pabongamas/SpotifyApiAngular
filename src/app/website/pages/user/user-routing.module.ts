import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { TopTrackUserViewComponent } from '../top-track-user-view/top-track-user-view.component';
import { TopArtistUserViewComponent } from '../top-artist-user-view/top-artist-user-view.component';
import { PlaylistByUserComponent } from '../playlist-by-user/playlist-by-user.component';

const routes: Routes = [
  { path: ':id', component: UserComponent },
  {
    path: ':id/top/tracks/time_range/:range',
    component: TopTrackUserViewComponent,
  },
  {
    path: ':id/top/artists/time_range/:range',
    component: TopArtistUserViewComponent,
  },
  {
    path: ':id/playlists',
    component: PlaylistByUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
