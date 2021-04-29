import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import {DepotPage} from '../../depot/depot.page';
import {RetraitPage} from '../../retrait/retrait.page';
import {TransactionsPage} from '../transactions/transactions.page';
import {CalculateurPage} from '../calculateur/calculateur.page';
import {TransactionsEncoursPage} from '../transactions-encours/transactions-encours.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public currentModal = null;
  public props = '';

  constructor(public modalCtrl: ModalController,
              private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  async presentModal(component){
    switch (component) {
      case 'Depot':
        component = DepotPage;
        break;
      case 'Retrait':
        component = RetraitPage;
        break;
      case 'Transactions':
        component = TransactionsPage;
        this.props = 'transactions';
        break;
      case 'All-Transactions':
        component = TransactionsPage;
        this.props = 'all-transactions';
        break;
      case 'commissions':
        component = TransactionsPage;
        this.props = 'commissions';
        break;
      case 'calculatrice':
        component = CalculateurPage;
        this.props = 'calculatrice';
        break;
      case 'Transactions-Encours':
        component = TransactionsEncoursPage;
        break;
    }
    const modal = await this.modalCtrl.create({
      component,
      componentProps: {typeTransaction: this.props}
    });
    await modal.present().then();
  }

  /**
   * Fonctions de gestion du menu side
   */
  openFirst(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }
  openEnd(){
  }

}
