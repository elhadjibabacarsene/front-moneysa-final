import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePagePage } from './home-page.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePagePage,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsPageModule)
          }
        ]
      },
      {
        path: 'commissions',
        loadChildren: () => import('./commissions/commissions.module').then(m => m.CommissionsPageModule)
      },
      {
        path: 'calculateur',
        loadChildren: () => import('./calculateur/calculateur.module').then(m => m.CalculateurPageModule)
      },
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'transactions-encours',
    loadChildren: () => import('./transactions-encours/transactions-encours.module').then( m => m.TransactionsEncoursPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagePageRoutingModule {}
