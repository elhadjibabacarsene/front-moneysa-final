(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "+R0T":
/*!*****************************************************************************!*\
  !*** ./src/app/views/home-page/transactions/transactions-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "Pvyw");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "EGV6":
/*!*****************************************************************!*\
  !*** ./src/app/service/pipes/pipeFilter/pipe-filter.service.ts ***!
  \*****************************************************************/
/*! exports provided: PipeFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeFilterService", function() { return PipeFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let PipeFilterService = class PipeFilterService {
    transform(items, filter, isAnd) {
        // On vérifie si les données existes
        if (filter && Array.isArray(items)) {
            // On extrait les keys de l'objet à filtrer
            const filterKeys = Object.keys(filter);
            if (isAnd) { // True strict filter, false unstrict filter
                return items.filter(item => filterKeys.reduce((memo, keyName) => 
                // On contrôle pour clé
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
                    });
                });
            }
        }
        else {
            return items;
        }
    }
};
PipeFilterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], PipeFilterService);



/***/ }),

/***/ "mY62":
/*!*********************************************************************!*\
  !*** ./src/app/views/home-page/transactions/transactions.module.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "+R0T");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "Pvyw");
/* harmony import */ var _service_pipes_pipeFilter_pipe_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pipes/pipeFilter/pipe-filter.service */ "EGV6");








let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"], _service_pipes_pipeFilter_pipe_filter_service__WEBPACK_IMPORTED_MODULE_7__["PipeFilterService"]]
    })
], TransactionsPageModule);



/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module.js.map