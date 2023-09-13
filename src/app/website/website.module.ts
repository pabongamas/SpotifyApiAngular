import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuicklinkModule } from 'ngx-quicklink';

import { WebsiteRoutingModule } from './website-routing.module';
import {SharedModule} from './modulos/shared/shared.module';

import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { AppAuthCallbackComponent } from './components/app-auth-callback/app-auth-callback.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { PlaylistByIdComponent } from './pages/playlist-by-id/playlist-by-id.component';
import { TopTrackUserViewComponent } from './pages/top-track-user-view/top-track-user-view.component';
import { TopArtistUserViewComponent } from './pages/top-artist-user-view/top-artist-user-view.component';
import { PlaylistByUserComponent } from './pages/playlist-by-user/playlist-by-user.component';





@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    AppAuthCallbackComponent,
    TopTrackUserViewComponent,
    TopArtistUserViewComponent,
    PlaylistByUserComponent,
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    WebsiteRoutingModule,MatSlideToggleModule,
    MatToolbarModule,MatListModule,MatTooltipModule,MatMenuModule,MatIconModule,FontAwesomeModule,SharedModule,QuicklinkModule
  ]
  ,exports:[
  ]
})
export class WebsiteModule { }
