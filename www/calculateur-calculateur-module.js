(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculateur-calculateur-module"],{

/***/ "/Rxx":
/*!***************************************************************************!*\
  !*** ./src/app/views/home-page/calculateur/calculateur-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CalculateurPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateurPageRoutingModule", function() { return CalculateurPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calculateur_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateur.page */ "n27r");




const routes = [
    {
        path: '',
        component: _calculateur_page__WEBPACK_IMPORTED_MODULE_3__["CalculateurPage"]
    }
];
let CalculateurPageRoutingModule = class CalculateurPageRoutingModule {
};
CalculateurPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculateurPageRoutingModule);



/***/ }),

/***/ "awa9":
/*!*******************************************************************!*\
  !*** ./src/app/views/home-page/calculateur/calculateur.module.ts ***!
  \*******************************************************************/
/*! exports provided: CalculateurPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateurPageModule", function() { return CalculateurPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calculateur_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculateur-routing.module */ "/Rxx");
/* harmony import */ var _calculateur_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculateur.page */ "n27r");







let CalculateurPageModule = class CalculateurPageModule {
};
CalculateurPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calculateur_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculateurPageRoutingModule"]
        ],
        declarations: [_calculateur_page__WEBPACK_IMPORTED_MODULE_6__["CalculateurPage"]]
    })
], CalculateurPageModule);



/***/ })

}]);
//# sourceMappingURL=calculateur-calculateur-module.js.map