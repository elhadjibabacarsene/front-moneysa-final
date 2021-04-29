(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-page-home-page-module"],{

/***/ "1wKE":
/*!*************************************************************!*\
  !*** ./src/app/views/home-page/home-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePageRoutingModule", function() { return HomePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.page */ "VXmy");




const routes = [
    {
        path: 'tabs',
        component: _home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"],
        children: [
            {
                path: 'menu',
                loadChildren: () => Promise.all(/*! import() | menu-menu-module */[__webpack_require__.e("default~menu-menu-module~transactions-transactions-module"), __webpack_require__.e("default~menu-menu-module~views-retrait-retrait-module"), __webpack_require__.e("default~menu-menu-module~views-depot-depot-module"), __webpack_require__.e("default~calculateur-calculateur-module~menu-menu-module"), __webpack_require__.e("menu-menu-module")]).then(__webpack_require__.bind(null, /*! ./menu/menu.module */ "csXs")).then(m => m.MenuPageModule)
            },
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | transactions-transactions-module */[__webpack_require__.e("default~menu-menu-module~transactions-transactions-module"), __webpack_require__.e("transactions-transactions-module")]).then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "mY62")).then(m => m.TransactionsPageModule)
                    }
                ]
            },
            {
                path: 'commissions',
                loadChildren: () => __webpack_require__.e(/*! import() | commissions-commissions-module */ "commissions-commissions-module").then(__webpack_require__.bind(null, /*! ./commissions/commissions.module */ "HLhA")).then(m => m.CommissionsPageModule)
            },
            {
                path: 'calculateur',
                loadChildren: () => Promise.all(/*! import() | calculateur-calculateur-module */[__webpack_require__.e("default~calculateur-calculateur-module~menu-menu-module"), __webpack_require__.e("calculateur-calculateur-module")]).then(__webpack_require__.bind(null, /*! ./calculateur/calculateur.module */ "awa9")).then(m => m.CalculateurPageModule)
            },
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'
            }
        ]
    }
];
let HomePagePageRoutingModule = class HomePagePageRoutingModule {
};
HomePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePagePageRoutingModule);



/***/ }),

/***/ "CD60":
/*!*****************************************************!*\
  !*** ./src/app/views/home-page/home-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar {\n  --border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFye1xuICAtLWJvcmRlcjogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "KEUv":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home-page/home-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n</ion-content>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"menu\">\n        <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"transactions\">\n      <ion-icon name=\"refresh-circle\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"commissions\">\n      <ion-icon name=\"wallet-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"calculateur\">\n      <ion-icon name=\"calculator\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "VXmy":
/*!***************************************************!*\
  !*** ./src/app/views/home-page/home-page.page.ts ***!
  \***************************************************/
/*! exports provided: HomePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePage", function() { return HomePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-page.page.html */ "KEUv");
/* harmony import */ var _home_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.page.scss */ "CD60");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePagePage = class HomePagePage {
    constructor() {
    }
    ngOnInit() {
    }
};
HomePagePage.ctorParameters = () => [];
HomePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-page',
        template: _raw_loader_home_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePagePage);



/***/ }),

/***/ "XBIb":
/*!*****************************************************!*\
  !*** ./src/app/views/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePageModule", function() { return HomePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page-routing.module */ "1wKE");
/* harmony import */ var _home_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page.page */ "VXmy");







let HomePagePageModule = class HomePagePageModule {
};
HomePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePagePageRoutingModule"]
        ],
        declarations: [_home_page_page__WEBPACK_IMPORTED_MODULE_6__["HomePagePage"]]
    })
], HomePagePageModule);



/***/ })

}]);
//# sourceMappingURL=views-home-page-home-page-module.js.map