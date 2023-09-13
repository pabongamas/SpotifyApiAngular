import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './../guards/auth.guard';

import { LayoutComponent } from './components/layout/layout.component';
import { AppAuthCallbackComponent } from './components/app-auth-callback/app-auth-callback.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'callbackAuth', component: AppAuthCallbackComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'search',

        loadChildren: () =>
          import('./pages/search/search.module').then((m) => m.SearchModule),
        canActivate: [authGuard],
      },
      {
        path: 'Categories',
        loadChildren: () =>
          import('./pages/categorias-all/categorias-all.module').then(
            (m) => m.CategoriasAllModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'newRealeses',
        loadChildren: () =>
          import('./pages/new-releases-album/new-releases-album.module').then(
            (m) => m.NewReleasesAlbumModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'categorie',
        loadChildren: () =>
          import('./pages/categorebyid/categorebyid.module').then(
            (m) => m.CategorebyidModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'playlist',
        loadChildren: () =>
        import('./pages/playlist-by-id/playlist-by-id.module').then(
          (m) => m.PlaylistByIdModule
        ),
        canActivate: [authGuard],
      },
      {
        path: 'artist',
        loadChildren: () =>
        import('./pages/artistbyid/artistbyid.module').then(
          (m) => m.ArtistbyidModule
        ),
        canActivate: [authGuard],
      },
      {
        path:'artist/:id/discography',
        loadChildren: () =>
        import('./pages/discography-artist-by-id/discography-artist-by-id.module').then(
          (m) => m.DiscographyArtistByIdModule
        ),
        canActivate: [authGuard],
      },
      {
        path: 'album',
        loadChildren: () =>
        import('./pages/albumbyid/albumbyid.module').then(
          (m) => m.AlbumbyidModule
        ),
        canActivate: [authGuard],
      },
      {
        path: 'user',
        loadChildren: () =>
        import('./pages/user/user.module').then(
          (m) => m.UserModule
        ),
        canActivate: [authGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
