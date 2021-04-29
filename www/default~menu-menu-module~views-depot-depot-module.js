(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~menu-menu-module~views-depot-depot-module"],{

/***/ "Q88z":
/*!*********************************************!*\
  !*** ./src/app/views/depot/depot.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-toolbar {\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);\n  border-radius: 0 0 30px 30px;\n  --padding-bottom: 0;\n}\nion-header ion-toolbar ion-grid {\n  padding-bottom: 0;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content .row-frais {\n  background: var(--ion-color-light);\n}\nion-content .btn-submit {\n  margin-top: 30px;\n}\nion-content ion-segment {\n  --background: white;\n  height: 55px;\n}\nion-content ion-segment ion-segment-button {\n  margin-bottom: 0;\n  border-radius: 0;\n}\nion-content ion-segment ion-segment-button.segment-button-checked {\n  border-bottom: 2px solid var(--ion-color-primary);\n  --indicator-box-shadow: none;\n}\nion-content ion-item {\n  --background: var(--ion-color-light);\n}\nion-content ion-item ion-label {\n  --color: #919191;\n}\n#logo {\n  width: 70px;\n  height: 70px;\n}\n#home-icon {\n  font-size: 20px;\n}\n.col-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-icon {\n  font-size: 22px;\n}\n#row-top {\n  margin-bottom: 12px;\n}\n#col-title {\n  border-bottom: 2px solid var(--ion-color-secondary);\n}\n#title {\n  color: var(--ion-color-title);\n}\n.tete {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlcG90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7QUFBRTtFQUNFLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFDRSxpQkFBQTtBQUdOO0FBQ0E7RUFDRSxvQ0FBQTtBQUVGO0FBREU7RUFDRSxrQ0FBQTtBQUdKO0FBREU7RUFDRSxnQkFBQTtBQUdKO0FBREU7RUFDRSxtQkFBQTtFQUVBLFlBQUE7QUFFSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUdOO0FBREk7RUFDRSxpREFBQTtFQUNBLDRCQUFBO0FBR047QUFBRTtFQUNFLG9DQUFBO0FBRUo7QUFESTtFQUNFLGdCQUFBO0FBR047QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQURBO0VBQ0UsZUFBQTtBQUlGO0FBRkE7RUFDRSxtQkFBQTtBQUtGO0FBSEE7RUFDRSxtREFBQTtBQU1GO0FBSkE7RUFDRSw2QkFBQTtBQU9GO0FBSkE7RUFDRSxVQUFBO0FBT0YiLCJmaWxlIjoiZGVwb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaW9uLXRvb2xiYXJ7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzMHB4IDMwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICBpb24tZ3JpZHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLnJvdy1mcmFpc3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG4gIC5idG4tc3VibWl0e1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgaW9uLXNlZ21lbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaW9uLWxhYmVse1xuICAgICAgLS1jb2xvcjogIzkxOTE5MTtcbiAgICAgIC8vIG9wYWNpdHk6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuI2xvZ297XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4jaG9tZS1pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29sLXRvcHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taWNvbntcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuI3Jvdy10b3B7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4jY29sLXRpdGxle1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4jdGl0bGV7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGl0bGUpO1xufVxuLy9BbGVydFxuLnRldGV7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */");

/***/ }),

/***/ "V0L1":
/*!*******************************************!*\
  !*** ./src/app/views/depot/depot.page.ts ***!
  \*******************************************/
/*! exports provided: DepotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotPage", function() { return DepotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_depot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./depot.page.html */ "wOih");
/* harmony import */ var _depot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./depot.page.scss */ "Q88z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_transactionService_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/transactionService/transaction.service */ "Gs+E");









let DepotPage = class DepotPage {
    constructor(httpClient, alertCtrl, transactionService, modalCtrl) {
        this.httpClient = httpClient;
        this.alertCtrl = alertCtrl;
        this.transactionService = transactionService;
        this.modalCtrl = modalCtrl;
        this.segmentModel = 'emetteur';
        this.total = 0;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            montant: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            clientDepot: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                prenom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                numCNI: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])
            }),
            clientRetrait: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                prenom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]),
                telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])
            })
        });
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
            this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/user/calculfrais', sendData).subscribe(data => {
                this.frais = data;
            });
        }
        else {
            this.frais = 0;
        }
    }
    closeModal() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
    showConfirmModal(formValue) {
        this.alertCtrl.create({
            header: 'Confirmation',
            cssClass: 'default-alert',
            message: '<ion-grid class="grid-alert">' +
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
};
DepotPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _service_transactionService_transaction_service__WEBPACK_IMPORTED_MODULE_8__["TransactionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
DepotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-depot',
        template: _raw_loader_depot_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_depot_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DepotPage);



/***/ }),

/***/ "wOih":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/depot/depot.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row id=\"row-top\">\n        <ion-col class=\"col-top\">\n          <ion-icon name=\"home\" id=\"home-icon\" color=\"tertiary\" (click)=\"dismissModal()\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"col-top\">\n          <ion-img src=\"../../../assets/images/logo-money-sa.png\" id=\"logo\"></ion-img>\n        </ion-col>\n        <ion-col class=\"col-top\"></ion-col>\n      </ion-row>\n      <ion-row id=\"row-second\">\n        <ion-col class=\"col-top\"></ion-col>\n        <ion-col class=\"col-top\" id=\"col-title\">\n          <ion-icon name=\"arrow-redo-outline\" color=\"tertiary\" (click)=\"closeModal()\"></ion-icon>\n          <span id=\"title\">Dépôt</span>\n        </ion-col>\n        <ion-col class=\"col-top\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment value=\"emetteur\" [(ngModel)]=\"segmentModel\">\n          <ion-segment-button value=\"emetteur\">Emetteur</ion-segment-button>\n          <ion-segment-button value=\"beneficiaire\">Bénéficiare</ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"form\">\n      <ion-row>\n        <ion-col>\n          <div *ngIf=\"segmentModel === 'emetteur'\">\n            <ion-list>\n              <div formGroupName=\"clientDepot\">\n                <ion-item>\n                  <ion-label position=\"floating\">N°CNI</ion-label>\n                  <ion-input type=\"text\" formControlName=\"numCNI\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Nom</ion-label>\n                  <ion-input type=\"text\" formControlName=\"nom\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Prénom</ion-label>\n                  <ion-input type=\"text\" formControlName=\"prenom\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Téléphone</ion-label>\n                  <ion-input type=\"text\" formControlName=\"telephone\"></ion-input>\n                </ion-item>\n              </div>\n              <ion-item>\n                <ion-label position=\"floating\">Montant</ion-label>\n                <ion-input type=\"number\" formControlName=\"montant\" (focusout)=\"calculFrais({montant: this.montant})\"></ion-input>\n              </ion-item>\n              <ion-row class=\"row-frais\">\n                <ion-col size=\"6\"></ion-col>\n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\">Frais</ion-label>\n                    <ion-input class=\"fixedLabel\" type=\"number\" placeholder=\"0\" [value]=\"frais\" color=\"primary\" [readonly]=\"true\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-item>\n                <ion-label position=\"floating\">Total</ion-label>\n                <ion-input type=\"number\" [value]=\"calculTotal()\" placeholder=\"0\" color=\"primary\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </div>\n          <div *ngIf=\"segmentModel === 'beneficiaire'\" formGroupName=\"clientRetrait\">\n            <ion-item>\n              <ion-label position=\"floating\">Nom</ion-label>\n              <ion-input type=\"text\" formControlName=\"nom\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Prénom</ion-label>\n              <ion-input type=\"text\" formControlName=\"prenom\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Téléphone</ion-label>\n              <ion-input type=\"text\" formControlName=\"telephone\"></ion-input>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row-signin-btn btn-submit\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"submit\" shape=\"round\" color=\"primary\" expand=\"block\" size=\"large\" (click)=\"showConfirmModal(this.form.value)\">\n            Suivant\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~menu-menu-module~views-depot-depot-module.js.map