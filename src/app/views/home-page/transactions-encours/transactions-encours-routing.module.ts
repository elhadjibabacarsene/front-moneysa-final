import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsEncoursPage } from './transactions-encours.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsEncoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsEncoursPageRoutingModule {}
