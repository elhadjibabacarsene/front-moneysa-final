(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~menu-menu-module~views-retrait-retrait-module"],{

/***/ "4CfH":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/retrait/retrait.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row id=\"row-top\">\n        <ion-col class=\"col-top\">\n          <ion-icon name=\"home\" id=\"home-icon\" color=\"tertiary\" (click)=\"dismissModal()\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"col-top\">\n          <ion-img src=\"../../../assets/images/logo-money-sa.png\" id=\"logo\"></ion-img>\n        </ion-col>\n        <ion-col class=\"col-top\"></ion-col>\n      </ion-row>\n      <ion-row id=\"row-second\">\n        <ion-col class=\"col-top\"></ion-col>\n        <ion-col class=\"col-top\" id=\"col-title\">\n          <ion-icon name=\"arrow-redo-outline\" color=\"tertiary\"></ion-icon>\n          <span id=\"title\">Retrait</span>\n        </ion-col>\n        <ion-col class=\"col-top\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <!-- Code transaction -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Code</ion-label>\n            <ion-input type=\"text\" formControlName=\"codeTransaction\" (keyup)=\"onKeyUp($event.target.value)\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Segment -->\n      <div *ngIf=\"isCodeOk\">\n      <ion-row>\n        <ion-col>\n          <ion-segment value=\"beneficiaire\" [(ngModel)]=\"segmentModel\" [ngModelOptions]=\"{standalone: true}\">\n            <ion-segment-button value=\"beneficiaire\">Bénéficiare</ion-segment-button>\n            <ion-segment-button value=\"emetteur\">Emetteur</ion-segment-button>\n          </ion-segment>\n        </ion-col>\n      </ion-row>\n      <!-- Beneficiare -->\n      <div *ngIf=\"segmentModel === 'beneficiaire'\">\n        <ion-row formGroupName=\"clientRetrait\">\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">N°CNI</ion-label>\n              <ion-input type=\"text\" formControlName=\"numCNI\" *ngIf=\"!retraitNotAuthorize\"></ion-input>\n              <ion-input type=\"text\" formControlName=\"numCNI\" [value]=\"transactionInfos?.clientRetrait?.numCNI\" *ngIf=\"retraitNotAuthorize\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div class=\"list\">\n          <ion-row>\n            <ion-col class=\"label-alert-title\">Nom & Prénom</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-value\">{{transactionInfos?.clientRetrait?.nom.toUpperCase()+ ' ' + transactionInfos?.clientRetrait?.prenom}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-title\">montant à recevoir</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-value\">{{transactionInfos?.montant}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-title\">Téléphone</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-value\">{{transactionInfos?.clientRetrait?.telephone}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-title\">Date d'envoi</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"label-alert-value\">{{transactionInfos?.dateDepot}}</ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <!-- Emetteur -->\n      <div *ngIf=\"segmentModel === 'emetteur'\">\n        <div class=\"list\">\n        <ion-row>\n          <ion-col class=\"label-alert-title\">N°CNI</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-value\">{{transactionInfos?.clientDepot?.numCNI}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-title\">Nom & Prénom</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-value\">{{transactionInfos?.clientDepot?.nom.toUpperCase()+ ' ' + transactionInfos?.clientDepot?.prenom}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-title\">montant envoyé</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-value\">{{transactionInfos?.montant}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-title\">Téléphone</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-value\">{{transactionInfos?.clientDepot?.telephone}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-title\">Date d'envoi</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"label-alert-value\">{{transactionInfos?.dateDepot}}</ion-col>\n        </ion-row>\n        </div>\n      </div>\n      <ion-row class=\"row-signin-btn btn-submit\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"submit\" shape=\"round\" color=\"primary\" expand=\"block\" size=\"large\" (click)=\"showConfirmModal(this.transactionInfos)\" [disabled]=\"retraitNotAuthorize\">\n            Retirer\n          </ion-button>\n        </ion-col>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"submit\" shape=\"round\" color=\"primary\" expand=\"block\" size=\"large\">\n            Annuler\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      </div>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "Gs+E":
/*!*******************************************************************!*\
  !*** ./src/app/service/transactionService/transaction.service.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





const TRANSACTION_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/user/transactions';
let TransactionService = class TransactionService {
    constructor(httpClient, alertctrl, loadingCtrl, toastCtrl) {
        this.httpClient = httpClient;
        this.alertctrl = alertctrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.transactions = [];
        this.page = 1;
    }
    get TransactionUrl() {
        return TRANSACTION_URL;
    }
    /**
     * Fonction qui permet de faire un dépôt
     * @param depotData object
     */
    depot(depotData) {
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
    retrait(retraitData) {
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
            message: '<ion-grid class="grid-alert">' +
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
    showAlert(header, message) {
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
};
TransactionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
TransactionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TransactionService);



/***/ }),

/***/ "JkJO":
/*!*************************************************!*\
  !*** ./src/app/views/retrait/retrait.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-toolbar {\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);\n  border-radius: 0 0 30px 30px;\n  --padding-bottom: 0;\n}\nion-header ion-toolbar ion-grid {\n  padding-bottom: 0;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content .row-frais {\n  background: var(--ion-color-light);\n}\nion-content .btn-submit {\n  margin-top: 30px;\n}\nion-content ion-segment {\n  --background: white;\n  margin-top: 20px;\n  height: 55px;\n}\nion-content ion-segment ion-segment-button {\n  margin-bottom: 0;\n  border-radius: 0;\n}\nion-content ion-segment ion-segment-button.segment-button-checked {\n  border-bottom: 2px solid var(--ion-color-primary);\n  --indicator-box-shadow: none;\n}\nion-content ion-item {\n  --background: var(--ion-color-light);\n}\nion-content ion-item ion-label {\n  --color: #919191;\n}\n#logo {\n  width: 70px;\n  height: 70px;\n}\n#home-icon {\n  font-size: 20px;\n}\n.col-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-icon {\n  font-size: 22px;\n}\n#row-top {\n  margin-bottom: 12px;\n}\n#col-title {\n  border-bottom: 2px solid var(--ion-color-secondary);\n}\n#title {\n  color: var(--ion-color-title);\n}\n.tete {\n  color: red;\n}\n.list {\n  margin-top: 50px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JldHJhaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUFDRjtBQUFFO0VBQ0UsMENBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFESTtFQUNFLGlCQUFBO0FBR047QUFDQTtFQUNFLG9DQUFBO0FBRUY7QUFERTtFQUNFLGtDQUFBO0FBR0o7QUFERTtFQUNFLGdCQUFBO0FBR0o7QUFERTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0FBRUo7QUFESTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHTjtBQURJO0VBQ0UsaURBQUE7RUFDQSw0QkFBQTtBQUdOO0FBQUU7RUFDRSxvQ0FBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtBQUdOO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDRSxlQUFBO0FBRUY7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFEQTtFQUNFLGVBQUE7QUFJRjtBQUZBO0VBQ0UsbUJBQUE7QUFLRjtBQUhBO0VBQ0UsbURBQUE7QUFNRjtBQUpBO0VBQ0UsNkJBQUE7QUFPRjtBQUpBO0VBQ0UsVUFBQTtBQU9GO0FBTEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUUYiLCJmaWxlIjoicmV0cmFpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBpb24tdG9vbGJhcntcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDMwcHggMzBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIGlvbi1ncmlke1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAucm93LWZyYWlze1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cbiAgLmJ0bi1zdWJtaXR7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBpb24tc2VnbWVudHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLy9ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGlvbi1sYWJlbHtcbiAgICAgIC0tY29sb3I6ICM5MTkxOTE7XG4gICAgICAvLyBvcGFjaXR5OiB1bnNldDtcbiAgICB9XG4gIH1cbn1cbiNsb2dve1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuI2hvbWUtaWNvbntcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbC10b3B7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbiNyb3ctdG9we1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuI2NvbC10aXRsZXtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuI3RpdGxle1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRpdGxlKTtcbn1cbi8vQWxlcnRcbi50ZXRle1xuICBjb2xvcjogcmVkO1xufVxuLmxpc3R7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "skvL":
/*!***********************************************!*\
  !*** ./src/app/views/retrait/retrait.page.ts ***!
  \***********************************************/
/*! exports provided: RetraitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetraitPage", function() { return RetraitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_retrait_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./retrait.page.html */ "4CfH");
/* harmony import */ var _retrait_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrait.page.scss */ "JkJO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_transactionService_transaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/transactionService/transaction.service */ "Gs+E");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let RetraitPage = class RetraitPage {
    constructor(httpClient, transactionService, loadingCtrl, alertCtrl, modalCtrl) {
        this.httpClient = httpClient;
        this.transactionService = transactionService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.transactionInfos = {};
        this.isCodeOk = false;
        this.retraitNotAuthorize = false;
        this.segmentModel = 'beneficiaire';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            codeTransaction: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            clientRetrait: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                numCNI: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])
            })
        });
    }
    ngOnInit() {
    }
    getTransactionByCode(codeTransfert) {
    }
    onKeyUp(event) {
        if (event.length === 11) {
            this.loadingCtrl.create({
                keyboardClose: false,
                message: 'Vérification du code...',
            }).then(loadingEl => {
                loadingEl.present().then(() => {
                    this.httpClient.post(this.transactionService.TransactionUrl + '/code', { code: this.codeTransaction })
                        .subscribe(response => {
                        loadingEl.dismiss().then(() => {
                            // console.log(response);
                            this.transactionInfos = response;
                            console.log(this.transactionInfos);
                            this.isCodeOk = true;
                            if (response['dateRetrait']) {
                                this.retraitNotAuthorize = true;
                                this.showAlert('Code déjà utilisé', 'Le code a été retiré le: ' + response['hydra:member'][0].dateRetrait);
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
    showAlert(header, message) {
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
    get codeTransaction() {
        return this.form.value.codeTransaction;
    }
    get numCNI() {
        return this.form.value.clientRetrait.numCNI;
    }
    showConfirmModal(formValue) {
        this.alertCtrl.create({
            header: 'Confirmation',
            cssClass: 'default-alert',
            message: '<ion-grid class="grid-alert">' +
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
};
RetraitPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _service_transactionService_transaction_service__WEBPACK_IMPORTED_MODULE_6__["TransactionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
RetraitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-retrait',
        template: _raw_loader_retrait_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_retrait_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RetraitPage);



/***/ })

}]);
//# sourceMappingURL=default~menu-menu-module~views-retrait-retrait-module.js.map