import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsEncoursPageRoutingModule } from './transactions-encours-routing.module';

import { TransactionsEncoursPage } from './transactions-encours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsEncoursPageRoutingModule
  ],
  declarations: [TransactionsEncoursPage]
})
export class TransactionsEncoursPageModule {}
