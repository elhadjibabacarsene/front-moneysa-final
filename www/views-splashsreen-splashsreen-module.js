(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-splashsreen-splashsreen-module"],{

/***/ "05wM":
/*!*********************************************************!*\
  !*** ./src/app/views/splashsreen/splashsreen.module.ts ***!
  \*********************************************************/
/*! exports provided: SplashsreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashsreenPageModule", function() { return SplashsreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splashsreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splashsreen-routing.module */ "mr2e");
/* harmony import */ var _splashsreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splashsreen.page */ "WzKe");







let SplashsreenPageModule = class SplashsreenPageModule {
};
SplashsreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splashsreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashsreenPageRoutingModule"]
        ],
        declarations: [_splashsreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashsreenPage"]]
    })
], SplashsreenPageModule);



/***/ }),

/***/ "KS36":
/*!*********************************************************!*\
  !*** ./src/app/views/splashsreen/splashsreen.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  height: 100%;\n  width: 100%;\n  background: url('bg-splashscreen.jpeg') no-repeat center center/cover;\n}\nion-grid ion-row {\n  height: 100%;\n}\nion-grid ion-row div {\n  padding-top: 50px;\n  margin: auto;\n  width: 262px;\n  height: 262px;\n  border-radius: 50%;\n  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);\n  background: var(--ion-color-primary-contrast);\n}\nion-grid ion-row div ion-img {\n  margin: auto;\n  width: 120px;\n  height: 109px;\n}\nion-grid ion-row div ion-spinner {\n  margin: auto;\n}\n/*.bg-img{\n  div{\n    width: 262px;\n    height: 262px;\n    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);\n    background-color: var(--ion-color-secondary);\n  }\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwbGFzaHNyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUVBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBREk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2Q0FBQTtBQUdOO0FBRk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJUjtBQUZNO0VBQ0UsWUFBQTtBQUlSO0FBQ0E7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcGxhc2hzcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXNwbGFzaHNjcmVlbi5qcGVnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgaW9uLXJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGl2e1xuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogMjYycHg7XG4gICAgICBoZWlnaHQ6IDI2MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgaW9uLWltZ3tcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTA5cHg7XG4gICAgICB9XG4gICAgICBpb24tc3Bpbm5lcntcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyouYmctaW1ne1xuICBkaXZ7XG4gICAgd2lkdGg6IDI2MnB4O1xuICAgIGhlaWdodDogMjYycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG59Ki9cbiJdfQ== */");

/***/ }),

/***/ "WzKe":
/*!*******************************************************!*\
  !*** ./src/app/views/splashsreen/splashsreen.page.ts ***!
  \*******************************************************/
/*! exports provided: SplashsreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashsreenPage", function() { return SplashsreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splashsreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splashsreen.page.html */ "q6hc");
/* harmony import */ var _splashsreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashsreen.page.scss */ "KS36");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SplashsreenPage = class SplashsreenPage {
    constructor() { }
    ngOnInit() {
    }
};
SplashsreenPage.ctorParameters = () => [];
SplashsreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splashsreen',
        template: _raw_loader_splashsreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splashsreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashsreenPage);



/***/ }),

/***/ "mr2e":
/*!*****************************************************************!*\
  !*** ./src/app/views/splashsreen/splashsreen-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SplashsreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashsreenPageRoutingModule", function() { return SplashsreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splashsreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splashsreen.page */ "WzKe");




const routes = [
    {
        path: '',
        component: _splashsreen_page__WEBPACK_IMPORTED_MODULE_3__["SplashsreenPage"]
    }
];
let SplashsreenPageRoutingModule = class SplashsreenPageRoutingModule {
};
SplashsreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashsreenPageRoutingModule);



/***/ }),

/***/ "q6hc":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/splashsreen/splashsreen.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n    <ion-row class=\"ion-justify-content-start ion-align-items-center\">\n          <ion-col class=\"ion-text-center ion-margin-end\">\n            <div>\n              <ion-img src=\"../../../assets/images/logo-money-sa.png\"></ion-img>\n              <ion-spinner name=\"crescent\" color=\"secondary\"></ion-spinner>\n            </div>\n          </ion-col>\n    </ion-row>\n</ion-grid>\n\n");

/***/ })

}]);
//# sourceMappingURL=views-splashsreen-splashsreen-module.js.map