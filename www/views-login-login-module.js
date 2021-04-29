(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-login-login-module"],{

/***/ "6Gs0":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  height: 40%;\n  background: var(--ion-color-light);\n}\nion-header ion-toolbar {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  border-radius: 0px 0px 30px 30px;\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);\n  --background: var(--ion-color-primary-contrast);\n}\nion-header ion-toolbar ion-img {\n  margin: auto;\n  width: 120px;\n  height: 109px;\n}\nion-header ion-toolbar ion-title {\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  display: flex;\n  line-height: 20.7px;\n  align-items: flex-end;\n}\nion-header ion-toolbar hr {\n  width: 134px;\n  height: 3px;\n  background: var(--ion-color-secondary);\n  margin-bottom: 0;\n  box-shadow: 0px 4px 4px rgba(196, 63, 21, 0.1);\n  border-radius: 40px;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content ion-grid p {\n  font-size: 12px;\n}\nion-content ion-grid ion-item {\n  --background: var(--ion-color-light);\n}\nion-content ion-grid .row-signin-btn {\n  margin-top: 100px;\n}\nion-content ion-grid .row-password {\n  margin-top: 20px;\n}\nion-content ion-label {\n  --color: #919191;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtDQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUdOO0FBREk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBR047QUFESTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQUVBO0VBQ0Usb0NBQUE7QUFDRjtBQUNJO0VBQ0UsZUFBQTtBQUNOO0FBQ0k7RUFDRSxvQ0FBQTtBQUNOO0FBQ0k7RUFDRSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBRUU7RUFDRSxnQkFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDQwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIGlvbi1pbWd7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDEwOXB4O1xuICAgIH1cbiAgICBpb24tdGl0bGV7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMC43cHg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIGhye1xuICAgICAgd2lkdGg6IDEzNHB4O1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDE5NiwgNjMsIDIxLCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGlvbi1ncmlke1xuICAgIHB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICAucm93LXNpZ25pbi1idG57XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB9XG4gICAgLnJvdy1wYXNzd29yZHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1sYWJlbHtcbiAgICAtLWNvbG9yOiAjOTE5MTkxO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "GJO7":
/*!*****************************************************!*\
  !*** ./src/app/views/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "Klcu");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "Klcu":
/*!*******************************************!*\
  !*** ./src/app/views/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "Q39c");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "6Gs0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/authService/auth.service */ "h9fW");





let LoginPage = class LoginPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onSubmit(f) {
        if (!f.valid) {
            return;
        }
        else {
            const username = f.value.email;
            const password = f.value.password;
            this.authService.login({ username, password });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _service_authService_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "OwWB":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "GJO7");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "Klcu");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "Q39c":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-img src=\"../../../assets/images/logo-money-sa.png\"></ion-img>\n    <ion-title>\n      Login\n      <hr>\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <ion-grid class=\"ion-margin-top\">\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\"\n                         ngModel\n                         name=\"email\"\n                         required\n                         #emailCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" lines=\"none\">\n              <p>Ce champs est obligatoire</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\" class=\"row-password\">Mot de passe</ion-label>\n              <ion-input type=\"password\"\n                         ngModel\n                         name=\"password\"\n                         required\n                         #passwordCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" lines=\"none\">\n              <p>Ce champ est obligatoire</p>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-left\">\n          <ion-button type=\"button\" color=\"secondary\" fill=\"clear\">Mot de passe oublié ?</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row-signin-btn\">\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button type=\"submit\" shape=\"round\" color=\"tertiary\" expand=\"block\" size=\"large\" [disabled]=\"!f.valid\">\n            Se connecter\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=views-login-login-module.js.map