import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    // {path:'',redirectTo:'/home',pathMatch:'full'},
    // {path:'home',component:HomeComponent},
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
