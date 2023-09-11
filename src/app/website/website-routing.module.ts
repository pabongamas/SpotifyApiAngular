import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {authGuard} from './../guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { ArtistbyidComponent } from './pages/artistbyid/artistbyid.component';
import { AlbumbyidComponent } from './pages/albumbyid/albumbyid.component';
import { NewReleasesAlbumComponent } from './pages/albums/new-releases-album/new-releases-album.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppAuthCallbackComponent } from './components/app-auth-callback/app-auth-callback.component';
import { UserComponent } from './components/user/user.component';
import { CategoriasAllComponent } from './components/categorias-all/categorias-all.component';
import { CategorebyidComponent } from './pages/categorebyid/categorebyid.component';
import {PlaylistByIdComponent} from './pages/playlist-by-id/playlist-by-id.component';
import {DiscographyArtistByIDComponent} from './pages/discography-artist-by-id/discography-artist-by-id.component'
import {TopTrackUserViewComponent} from './pages/top-track-user-view/top-track-user-view.component'
import { TopArtistUserViewComponent } from './pages/top-artist-user-view/top-artist-user-view.component';
import {PlaylistByUserComponent} from './pages/playlist-by-user/playlist-by-user.component';





const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'artist/:id',component:ArtistbyidComponent, canActivate:[authGuard]},
    {path:'album/:id',component:AlbumbyidComponent, canActivate:[authGuard]},
    {path:'newRealeses',component:NewReleasesAlbumComponent,canActivate:[authGuard]},
    { path: 'callbackAuth', component: AppAuthCallbackComponent },
    { path: 'user/:id', component: UserComponent,canActivate:[authGuard] },
    {path:'Categories',component:CategoriasAllComponent,canActivate:[authGuard]},
    { path: 'categorie/:id', component: CategorebyidComponent,canActivate:[authGuard] },
    {path:'playlist/:id',component:PlaylistByIdComponent,canActivate:[authGuard]},
    {path:'artist/:id/discography/:type', component: DiscographyArtistByIDComponent,canActivate:[authGuard] },
    {path:'user/:id/top/tracks/time_range/:range', component: TopTrackUserViewComponent,canActivate:[authGuard] },
    {path:'user/:id/top/artists/time_range/:range', component: TopArtistUserViewComponent,canActivate:[authGuard] },
    {path:'user/:id/playlists', component: PlaylistByUserComponent,canActivate:[authGuard]},
    {
      path: 'search', // Ruta relativa al módulo principal
      loadChildren: () =>
        import('./modulos/search/search.module').then((m) => m.SearchModule), // Lazy loading del módulo
    },







    // {
    //   path: 'category',
    //   loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
    //   data: {
    //     preload: true,
    //   }
    // },
    // {path:'product/:id',component:ProductDetailComponent},
    // {
    //   path: 'my-cart',
    //   component: MycartComponent
    // },
    // {
    //   path: 'login',
    //   component: LoginComponent
    // },
    // {
    //   path: 'register',
    //   canDeactivate:[ExitGuard],
    //   component: RegisterComponent
    // },
    // {
    //   path: 'recovery',
    //   component: RecoveryComponent
    // },
    // {
    //   path: 'profile',
    //   canActivate:[AuthGuard],
    //   component: ProfileComponent
    // },
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
