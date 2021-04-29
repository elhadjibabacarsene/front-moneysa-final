import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TransactionService} from '../../service/transactionService/transaction.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {
  transactionInfos = {};
  isCodeOk = false;
  retraitNotAuthorize = false;
  segmentModel = 'beneficiaire';
  form = new FormGroup({
    codeTransaction: new FormControl('', [
      Validators.required
    ]),
    clientRetrait: new FormGroup({
      numCNI: new FormControl('', [
        Validators.required
      ])
    })
  });

  constructor(private httpClient: HttpClient,
              private transactionService: TransactionService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  getTransactionByCode(codeTransfert){
  }

  onKeyUp(event) {
    if (event.length === 11){
      this.loadingCtrl.create({
        keyboardClose: false,
        message: 'Vérification du code...',
      }).then(loadingEl => {
        loadingEl.present().then(() => {
          this.httpClient.post(this.transactionService.TransactionUrl + '/code', {code: this.codeTransaction})
            .subscribe(response => {
              loadingEl.dismiss().then(() => {
                // console.log(response);
                this.transactionInfos = response;
                console.log(this.transactionInfos);
                this.isCodeOk = true;
                if (response['dateRetrait']){
                  this.retraitNotAuthorize = true;
                  this.showAlert('Code déjà utilisé', 'Le code a été retiré le: ' + response['hydra:member'][0].dateRetrait);
                }
                if (response['statut'] === false){
                  this.retraitNotAuthorize = true;
                  this.showAlert('Impossible de retirer', 'Ce transaction a été annuler');
                }
              });
            }, error => {
              loadingEl.dismiss().then(() => {
                console.log(error);
              });
            });
        });
      });
    }
  }


  private showAlert(header, message: string) {
    this.alertCtrl
      .create({
        header,
        message,
        buttons: ['D\'accord']
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  get codeTransaction(){
    return this.form.value.codeTransaction;
  }
  get numCNI(){
    return this.form.value.clientRetrait.numCNI;
  }

  showConfirmModal(formValue) {
    this.alertCtrl.create({
      header: 'Confirmation',
      cssClass: 'default-alert',
      message:
        '<ion-grid class="grid-alert">' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">bénéficiare</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.clientRetrait.nom + ' ' + formValue.clientRetrait.prenom + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">téléphone</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.clientRetrait.telephone + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">N° CNI</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + this.numCNI + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">montant reçu</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.montant + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">émetteur</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.clientDepot.nom + ' ' + formValue.clientDepot.prenom + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">téléphone</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.clientDepot.telephone + '</ion-col>' +
        '</ion-row>' +
        '</ion-grid>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Confirmer',
          cssClass: 'alert-button-confirm',
          handler: () => {
            const test = this.form.value.clientRetrait.id = this.transactionInfos['id'];
            console.log(this.form.value.clientRetrait);
            this.transactionService.retrait(this.form.value.clientRetrait);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  removeTransation() {
    this.alertCtrl.create({
      header: 'Annuler la transaction',
      message: 'Voulez-vous vraiment annuler cette transaction ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Oui',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.loadingCtrl.create({
              keyboardClose: false,
              message: 'Annulation de la transaction...'
            }).then(loadingEl => {
              loadingEl.present().then(() => {
                this.httpClient.delete(environment.apiUrl + '/user/transactions/' + this.transactionInfos['id'])
                  .subscribe(res => {
                    if (res === null){
                      loadingEl.dismiss();
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
    console.log(this.transactionInfos);
  }
}
