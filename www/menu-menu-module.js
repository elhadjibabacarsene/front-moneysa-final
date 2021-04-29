(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "4XGU":
/*!***************************************************!*\
  !*** ./src/app/views/home-page/menu/menu.page.ts ***!
  \***************************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "iimi");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "yHeA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _depot_depot_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../depot/depot.page */ "V0L1");
/* harmony import */ var _retrait_retrait_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../retrait/retrait.page */ "skvL");
/* harmony import */ var _transactions_transactions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transactions/transactions.page */ "Pvyw");
/* harmony import */ var _calculateur_calculateur_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../calculateur/calculateur.page */ "n27r");









let MenuPage = class MenuPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.currentModal = null;
        this.props = '';
    }
    ngOnInit() {
    }
    presentModal(component) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (component) {
                case 'Depot':
                    component = _depot_depot_page__WEBPACK_IMPORTED_MODULE_5__["DepotPage"];
                    break;
                case 'Retrait':
                    component = _retrait_retrait_page__WEBPACK_IMPORTED_MODULE_6__["RetraitPage"];
                    break;
                case 'Transactions':
                    component = _transactions_transactions_page__WEBPACK_IMPORTED_MODULE_7__["TransactionsPage"];
                    this.props = 'transactions';
                    break;
                case 'All-Transactions':
                    component = _transactions_transactions_page__WEBPACK_IMPORTED_MODULE_7__["TransactionsPage"];
                    this.props = 'all-transactions';
                    break;
                case 'commissions':
                    component = _transactions_transactions_page__WEBPACK_IMPORTED_MODULE_7__["TransactionsPage"];
                    this.props = 'commissions';
                    break;
                case 'calculatrice':
                    component = _calculateur_calculateur_page__WEBPACK_IMPORTED_MODULE_8__["CalculateurPage"];
                    this.props = 'calculatrice';
                    break;
            }
            const modal = yield this.modalCtrl.create({
                component,
                componentProps: { typeTransaction: this.props }
            });
            yield modal.present().then();
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ }),

/***/ "aqMm":
/*!*************************************************************!*\
  !*** ./src/app/views/home-page/menu/menu-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "4XGU");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "csXs":
/*!*****************************************************!*\
  !*** ./src/app/views/home-page/menu/menu.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "aqMm");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "4XGU");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "iimi":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home-page/menu/menu.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n\n        </ion-col>\n        <ion-col class=\"col-top\">\n          <ion-img src=\"../../assets/images/logo-money-sa.png\" id=\"logo\"></ion-img>\n        </ion-col>\n        <ion-col class=\"col-top\">\n          <ion-img src=\"../../assets/images/avatar.svg\" id=\"avatar\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <!--Affichage soldes-->\n    <ion-row id=\"row-solde\">\n      <ion-col id=\"solde\" size=\"7\">\n        <ion-text>\n          <p class=\"text-1\">Mon solde disponible</p>\n          <p class=\"text-2\">150 000 <span>FCFA</span></p>\n          <p class=\"text-3\">Mise à jour le 22/02/21 à 13:15</p>\n        </ion-text>\n      </ion-col>\n      <ion-col id=\"icon-eye\">\n        <ion-icon name=\"eye-off\" color=\"tertiary\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <!--Menu-->\n    <ion-row id=\"row-menu\">\n      <!--Depot-->\n      <ion-col size=\"12\" (click)=\"presentModal('Depot')\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"arrow-redo-outline\" color=\"primary\"></ion-icon>\n        </span>\n        Dépôt\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n      <!--Retrait-->\n      <ion-col size=\"12\" (click)=\"presentModal('Retrait')\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"arrow-undo-outline\" color=\"primary\"></ion-icon>\n        </span>\n        Retrait\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n      <!--Mes transactions-->\n      <ion-col size=\"12\" (click)=\"presentModal('Transactions')\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"refresh-outline\" color=\"primary\"></ion-icon>\n        </span>\n        Mes transactions\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n      <!--Toutes mes transactions-->\n      <ion-col size=\"12\" (click)=\"presentModal('All-Transactions')\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"refresh-circle-outline\" color=\"primary\"></ion-icon>\n        </span>\n        Toutes mes transactions\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n      <!--Mes commissions-->\n      <ion-col size=\"12\" (click)=\"presentModal('commissions')\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"wallet-outline\" color=\"primary\"></ion-icon>\n        </span>\n        Mes commissions\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n      <!--Calculateur-->\n      <ion-col size=\"12\" (click)=\"presentModal('calculatrice')\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"calculator\" color=\"primary\"></ion-icon>\n        </span>\n        Calculateur de frais\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n      <!--Deconnexion-->\n      <ion-col size=\"12\">\n        <span class=\"icon-left\">\n          <ion-icon name=\"log-out-outline\" color=\"primary\"></ion-icon>\n        </span>\n        Déconnexion\n        <span class=\"icon-right\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "yHeA":
/*!*****************************************************!*\
  !*** ./src/app/views/home-page/menu/menu.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-style: none;\n}\n\n.col-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logo {\n  width: 50px;\n  height: 50px;\n}\n\n#avatar {\n  width: 25px;\n  height: 25px;\n}\n\nion-content {\n  --background: var(--ion-color-light);\n}\n\nion-content #row-solde {\n  margin: 50px auto;\n  width: 95%;\n  height: 100px;\n  background-color: white;\n  border-radius: 8px;\n  border-bottom: 2px solid var(--ion-color-tertiary);\n}\n\nion-content #row-solde #solde {\n  display: flex;\n  justify-content: start;\n  margin-left: 5px;\n  align-items: center;\n}\n\nion-content #row-solde #icon-eye {\n  font-size: 20px;\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: right;\n  margin-right: 20px;\n}\n\nion-content #row-solde p {\n  margin: 0;\n  font-style: normal;\n  font-weight: normal;\n}\n\nion-content #row-solde .text-1 {\n  font-size: 12px;\n}\n\nion-content #row-solde .text-2 {\n  font-size: 40px;\n  line-height: 46px;\n  color: var(--ion-color-secondary);\n}\n\nion-content #row-solde .text-2 span {\n  font-size: 10px;\n  line-height: 11px;\n  color: black;\n}\n\nion-content #row-solde .text-3 {\n  font-size: 10px;\n  line-height: 11px;\n}\n\nion-content #row-menu {\n  background-color: white;\n  padding: 18px 15px 0 15px;\n}\n\nion-content #row-menu ion-col {\n  padding-bottom: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid var(--ion-color-primary);\n}\n\nion-content #row-menu ion-col ion-icon {\n  font-size: 22px;\n}\n\nion-content #row-menu ion-col .icon-right {\n  color: var(--ion-color-primary);\n  position: absolute;\n  left: 96%;\n  right: 5%;\n  top: 12%;\n  bottom: 68%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0Usb0NBQUE7QUFLRjs7QUFKRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7QUFNSjs7QUFMSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFPTjs7QUFMSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9OOztBQUxJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFPTjs7QUFMSTtFQUNFLGVBQUE7QUFPTjs7QUFMSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBT047O0FBTk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBUVI7O0FBTEk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFPTjs7QUFKRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFMSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FBT047O0FBTk07RUFDRSxlQUFBO0FBUVI7O0FBTk07RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQVFSIiwiZmlsZSI6Im1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG4uY29sLXRvcHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jbG9nb3tcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbiNhdmF0YXJ7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAjcm93LXNvbGRle1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgI3NvbGRle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2ljb24tZXlle1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIC50ZXh0LTF7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC50ZXh0LTJ7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtM3tcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgIH1cbiAgfVxuICAjcm93LW1lbnV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMThweCAxNXB4IDAgMTVweDtcbiAgICBpb24tY29se1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgfVxuICAgICAgLmljb24tcmlnaHR7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOTYlO1xuICAgICAgICByaWdodDogNSU7XG4gICAgICAgIHRvcDogMTIlO1xuICAgICAgICBib3R0b206IDY4JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map