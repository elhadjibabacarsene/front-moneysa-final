(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-depot-depot-module"],{

/***/ "/2DA":
/*!*****************************************************!*\
  !*** ./src/app/views/depot/depot-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DepotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotPageRoutingModule", function() { return DepotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _depot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./depot.page */ "V0L1");




const routes = [
    {
        path: '',
        component: _depot_page__WEBPACK_IMPORTED_MODULE_3__["DepotPage"]
    }
];
let DepotPageRoutingModule = class DepotPageRoutingModule {
};
DepotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DepotPageRoutingModule);



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

/***/ "fCZ+":
/*!*********************************************!*\
  !*** ./src/app/views/depot/depot.module.ts ***!
  \*********************************************/
/*! exports provided: DepotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotPageModule", function() { return DepotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _depot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./depot-routing.module */ "/2DA");
/* harmony import */ var _depot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./depot.page */ "V0L1");







let DepotPageModule = class DepotPageModule {
};
DepotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _depot_routing_module__WEBPACK_IMPORTED_MODULE_5__["DepotPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_depot_page__WEBPACK_IMPORTED_MODULE_6__["DepotPage"]]
    })
], DepotPageModule);



/***/ })

}]);
//# sourceMappingURL=views-depot-depot-module.js.map