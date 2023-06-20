import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtistbyidComponent } from './pages/artistbyid/artistbyid.component';
import { AlbumbyidComponent } from './pages/albumbyid/albumbyid.component';
import { NewReleasesAlbumComponent } from './pages/albums/new-releases-album/new-releases-album.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'artist/:id',component:ArtistbyidComponent},
    {path:'album/:id',component:AlbumbyidComponent},
    {path:'newRealeses',component:NewReleasesAlbumComponent},

    
    
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
