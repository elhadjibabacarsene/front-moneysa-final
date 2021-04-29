(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-retrait-retrait-module"],{

/***/ "+i91":
/*!*************************************************!*\
  !*** ./src/app/views/retrait/retrait.module.ts ***!
  \*************************************************/
/*! exports provided: RetraitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetraitPageModule", function() { return RetraitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _retrait_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retrait-routing.module */ "/j2e");
/* harmony import */ var _retrait_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retrait.page */ "skvL");







let RetraitPageModule = class RetraitPageModule {
};
RetraitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retrait_routing_module__WEBPACK_IMPORTED_MODULE_5__["RetraitPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_retrait_page__WEBPACK_IMPORTED_MODULE_6__["RetraitPage"]]
    })
], RetraitPageModule);



/***/ }),

/***/ "/j2e":
/*!*********************************************************!*\
  !*** ./src/app/views/retrait/retrait-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RetraitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetraitPageRoutingModule", function() { return RetraitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _retrait_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retrait.page */ "skvL");




const routes = [
    {
        path: '',
        component: _retrait_page__WEBPACK_IMPORTED_MODULE_3__["RetraitPage"]
    }
];
let RetraitPageRoutingModule = class RetraitPageRoutingModule {
};
RetraitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RetraitPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-retrait-retrait-module.js.map