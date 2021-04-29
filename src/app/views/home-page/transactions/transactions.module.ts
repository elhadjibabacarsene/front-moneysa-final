import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import {PipeFilterService} from '../../../service/pipes/pipeFilter/pipe-filter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule
  ],
    declarations: [TransactionsPage, PipeFilterService]
})
export class TransactionsPageModule {}