import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TopTrackUserViewComponent } from '../top-track-user-view/top-track-user-view.component';
import { TopArtistUserViewComponent } from '../top-artist-user-view/top-artist-user-view.component';
import { PlaylistByUserComponent } from '../playlist-by-user/playlist-by-user.component';
import { SharedModule } from '../../modulos/shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [UserComponent,TopTrackUserViewComponent,TopArtistUserViewComponent,PlaylistByUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,FormsModule, ReactiveFormsModule,QuicklinkModule
  ]
})
export class UserModule { }
