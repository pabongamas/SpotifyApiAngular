import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data: {
      preload: false,
    },

  },

  // {
  //   path: '**',
  //   component: NotFoundComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
