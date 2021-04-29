import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './service/guardService/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'splashsreen',
    loadChildren: () => import('./views/splashsreen/splashsreen.module').then( m => m.SplashsreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home-page/home-page.module').then( m => m.HomePagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'depot',
    loadChildren: () => import('./views/depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./views/retrait/retrait.module').then(m => m.RetraitPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
