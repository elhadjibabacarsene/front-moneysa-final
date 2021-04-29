import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';

const TRANSACTION_URL = environment.apiUrl + '/user/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions = [];
  page = 1;

  constructor(private httpClient: HttpClient,
              private alertctrl: AlertController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }

  get TransactionUrl() {
    return TRANSACTION_URL;
  }

  /**
   * Fonction qui permet de faire un dépôt
   * @param depotData object
   */
  depot(depotData: object) {
    this.loadingCtrl.create({
      keyboardClose: false,
      message: 'Envoi en cours...'
    }).then(loadingEl => {
      loadingEl.present().then(() => {
        this.httpClient.post(TRANSACTION_URL, depotData).subscribe(response => {
          loadingEl.dismiss().then(() => {
            console.log(response);
            this.showConfirmModal(response);
          });
        }, error => {
          loadingEl.dismiss().then(() => {
            console.log(error);
            this.showAlert('Echec de l\'envoi', error.error);
          });
        });
      });
    });
  }

  retrait(retraitData: object) {
    this.loadingCtrl.create({
      keyboardClose: false,
      message: 'Veuillez patienter...'
    }).then(loadingEl => {
      loadingEl.present().then(() => {
        this.httpClient.put(TRANSACTION_URL + '/retrait/' + retraitData['id'], retraitData).subscribe(response => {
          loadingEl.dismiss().then(() => {
            // console.log(response);
            this.showAlert('Tout est OK', 'Vous pouvez faire le nécessaire');
          });
        }, error => {
          loadingEl.dismiss().then(() => {
            console.log(error);
          });
        });
      });
    });
  }

  showConfirmModal(response) {
    this.alertctrl.create({
      header: 'Transfert Réussi',
      cssClass: 'default-alert',
      message:
        '<ion-grid class="grid-alert">' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">infos</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">Vous avez envoyé ' + Number(response.montant).toLocaleString('fi-FI') + ' à \n' +
        response.clientRetrait.nom.toUpperCase() + ' ' + response.clientRetrait.prenom + ' le ' + response.dateDepot + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">code de transaction</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + response.codeTransfert + '</ion-col>' +
        '</ion-row>' +
        '</ion-grid>',
      buttons: [
        {
          text: 'D\'accord',
          role: 'cancel',
          cssClass: 'alert-button-confirm'
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  private showAlert(header, message: string) {
    this.alertctrl
      .create({
        header,
        message,
        buttons: ['D\'accord']
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
