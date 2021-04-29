import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.page.html',
  styleUrls: ['./calculateur.page.scss'],
})
export class CalculateurPage implements OnInit {
  frais;

  constructor(private httpClient: HttpClient,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (!f.valid){
      return;
    }else{
      const montant = f.value.montant;
      this.calculFrais( {montant});
    }
  }
  calculFrais(sendData) {
    if (sendData.montant !== null) {
      this.httpClient.post(environment.apiUrl + '/user/calculfrais', sendData).subscribe(data => {
        this.frais = data;
        this.alertCtrl.create({
          header: 'Calculateur de frais',
          message: `Pour une transaction de ${sendData.montant}, le frais est égal à: <strong>${data}</strong>`,
          buttons: ['Retour']
        }).then(alertEl => {
          alertEl.present();
        });
      }, error => {
        console.log(error);
      });
    } else {
      this.frais = 0;
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
