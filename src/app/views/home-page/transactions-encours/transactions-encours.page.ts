import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../service/authService/auth.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-transactions-encours',
  templateUrl: './transactions-encours.page.html',
  styleUrls: ['./transactions-encours.page.scss'],
})
export class TransactionsEncoursPage implements OnInit {
  transactionsDepots = [];

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private alertCtrl: AlertController,
              private loadCtrl: LoadingController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getAllTransctionDepotByUser();
  }
  getAllTransctionDepotByUser(){
    this.httpClient.get(environment.apiUrl + '/user/' + this.authService.userData.getValue().id + '/transactions/depots')
      .subscribe(res => {
        this.transactionsDepots = [];
        this.transactionsDepots = this.transactionsDepots.concat(res);
        console.log(this.transactionsDepots);
      }, error => {
        console.log(error);
      });
  }
  getBtnValue(statut)
  {
    if (statut === true){
      return 'En cours';
    }else{
      return 'Annuler';
    }
  }
  statutChange(depot){
    if (depot.statut === true){
      this.alertCtrl.create({
        header: 'Annuler transaction',
        message: 'Cette transaction est en cours, voulez-vous vraiment l\'annuler ?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            cssClass: 'alert-button-cancel'
          },
          {
            text: 'Oui',
            cssClass: 'alert-button-confirm',
            handler: () => {
              this.loadCtrl.create({
                keyboardClose: false,
                message: 'Annulation de la transaction...'
              }).then(loadingEl => {
                loadingEl.present().then(() => {
                  this.httpClient.delete(environment.apiUrl + '/user/transactions/' + depot.id)
                    .subscribe(res => {
                      if (res === null){
                        loadingEl.dismiss();
                        this.getAllTransctionDepotByUser();
                      }
                    }, error => {
                      console.log(error);
                    });
                });
              });
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
    }else{
      this.alertCtrl.create({
        header: 'Relancez',
        message: 'Cette transaction a été annulée. Vous voulez vraiment le relancez ?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            cssClass: 'alert-button-cancel'
          },
          {
            text: 'Oui',
            cssClass: 'alert-button-confirm',
            handler: () => {
              this.loadCtrl.create({
                keyboardClose: false,
                message: 'Relance en cours...'
              }).then(loadingEl => {
                loadingEl.present().then(() => {
                  this.httpClient.put(environment.apiUrl + '/user/transactions/' + depot.id + '/relance', {})
                    .subscribe(res => {
                      if (res === 'success'){
                        loadingEl.dismiss().then(() => {
                          this.getAllTransctionDepotByUser();
                        });
                      }
                    }, error => {
                      console.log(error);
                    });
                });
              });
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      } );
    }
  }
  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
