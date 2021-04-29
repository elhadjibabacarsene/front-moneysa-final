import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AlertController, ModalController} from '@ionic/angular';
import {TransactionService} from '../../service/transactionService/transaction.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
  segmentModel = 'emetteur';
  total = 0;
  frais: any;
  form = new FormGroup({
    montant: new FormControl('', [
      Validators.required
    ]),
    clientDepot: new FormGroup({
      prenom: new FormControl('', [
        Validators.required
      ]),
      nom: new FormControl('', [
        Validators.required
      ]),
      telephone: new FormControl('', [
        Validators.required
      ]),
      numCNI: new FormControl('', [
        Validators.required
      ])
    }),
    clientRetrait: new FormGroup({
      prenom: new FormControl('', [
        Validators.required
      ]),
      nom: new FormControl('', [
        Validators.required
      ]),
      telephone: new FormControl('', [
        Validators.required
      ])
    })
  });

  constructor(private httpClient: HttpClient,
              private alertCtrl: AlertController,
              private transactionService: TransactionService,
              private modalCtrl: ModalController) {
  }

  get montant() {
    return this.form.get('montant').value;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  calculTotal() {
    return parseFloat(this.montant) + parseFloat(this.frais);
  }

  calculFrais(sendData) {
    if (sendData.montant !== null) {
      this.httpClient.post(environment.apiUrl + '/user/calculfrais', sendData).subscribe(data => {
        this.frais = data;
      });
    } else {
      this.frais = 0;
    }
  }

  closeModal(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  showConfirmModal(formValue) {
    this.alertCtrl.create({
      header: 'Confirmation',
      cssClass: 'default-alert',
      message:
        '<ion-grid class="grid-alert">' +
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
        '<ion-row>' +
        '<ion-col class="label-alert-title">N° CNI</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.clientDepot.numCNI + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">montant à envoyer</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-value">' + formValue.montant + '</ion-col>' +
        '</ion-row>' +
        '<ion-row>' +
        '<ion-col class="label-alert-title">récepteur</ion-col>' +
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
            // console.log(this.form.value);
            this.transactionService.depot(formValue);
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
}
