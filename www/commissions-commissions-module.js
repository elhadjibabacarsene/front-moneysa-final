(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commissions-commissions-module"],{

/***/ "EO+8":
/*!***************************************************************************!*\
  !*** ./src/app/views/home-page/commissions/commissions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommissionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionsPageRoutingModule", function() { return CommissionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _commissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commissions.page */ "g4yB");




const routes = [
    {
        path: '',
        component: _commissions_page__WEBPACK_IMPORTED_MODULE_3__["CommissionsPage"]
    }
];
let CommissionsPageRoutingModule = class CommissionsPageRoutingModule {
};
CommissionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommissionsPageRoutingModule);



/***/ }),

/***/ "HLhA":
/*!*******************************************************************!*\
  !*** ./src/app/views/home-page/commissions/commissions.module.ts ***!
  \*******************************************************************/
/*! exports provided: CommissionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionsPageModule", function() { return CommissionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _commissions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commissions-routing.module */ "EO+8");
/* harmony import */ var _commissions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commissions.page */ "g4yB");







let CommissionsPageModule = class CommissionsPageModule {
};
CommissionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _commissions_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommissionsPageRoutingModule"]
        ],
        declarations: [_commissions_page__WEBPACK_IMPORTED_MODULE_6__["CommissionsPage"]]
    })
], CommissionsPageModule);



/***/ }),

/***/ "Kdi4":
/*!*******************************************************************!*\
  !*** ./src/app/views/home-page/commissions/commissions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21taXNzaW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cvMk":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home-page/commissions/commissions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>commissions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "g4yB":
/*!*****************************************************************!*\
  !*** ./src/app/views/home-page/commissions/commissions.page.ts ***!
  \*****************************************************************/
/*! exports provided: CommissionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionsPage", function() { return CommissionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_commissions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./commissions.page.html */ "cvMk");
/* harmony import */ var _commissions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commissions.page.scss */ "Kdi4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CommissionsPage = class CommissionsPage {
    constructor() { }
    ngOnInit() {
    }
};
CommissionsPage.ctorParameters = () => [];
CommissionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-commissions',
        template: _raw_loader_commissions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_commissions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommissionsPage);



/***/ })

}]);
//# sourceMappingURL=commissions-commissions-module.js.map