(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calculateur-calculateur-module~menu-menu-module"],{

/***/ "+VJM":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home-page/calculateur/calculateur.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row id=\"row-top\">\n        <ion-col class=\"col-top\">\n          <ion-icon name=\"home\" id=\"home-icon\" color=\"tertiary\" (click)=\"dismissModal()\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"col-top\">\n          <ion-img src=\"../../../assets/images/logo-money-sa.png\" id=\"logo\"></ion-img>\n        </ion-col>\n        <ion-col class=\"col-top\"></ion-col>\n      </ion-row>\n      <ion-row id=\"row-second\">\n        <ion-col class=\"col-top\"></ion-col>\n        <ion-col class=\"col-top\" id=\"col-title\">\n          <ion-icon name=\"arrow-redo-outline\" color=\"tertiary\"></ion-icon>\n          <span id=\"title\">Calculatrice Frais</span>\n        </ion-col>\n        <ion-col class=\"col-top\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Montant</ion-label>\n            <ion-input type=\"number\"\n                       ngModel\n                       name=\"montant\"\n                       required\n                       #montant=\"ngModel\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button type=\"submit\" shape=\"round\" color=\"primary\" expand=\"block\" size=\"large\" [disabled]=\"!f.valid\">\n            Calculer\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "03uR":
/*!*******************************************************************!*\
  !*** ./src/app/views/home-page/calculateur/calculateur.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-toolbar {\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);\n  border-radius: 0 0 30px 30px;\n  --padding-bottom: 0;\n}\nion-header ion-toolbar ion-grid {\n  padding-bottom: 0;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content .row-frais {\n  background: var(--ion-color-light);\n}\nion-content .btn-submit {\n  margin-top: 30px;\n}\nion-content ion-segment {\n  --background: white;\n  margin-top: 20px;\n  height: 55px;\n}\nion-content ion-segment ion-segment-button {\n  margin-bottom: 0;\n  border-radius: 0;\n}\nion-content ion-segment ion-segment-button.segment-button-checked {\n  border-bottom: 2px solid var(--ion-color-primary);\n  --indicator-box-shadow: none;\n}\nion-content ion-item {\n  --background: var(--ion-color-light);\n}\nion-content ion-item ion-label {\n  --color: #919191;\n}\n#logo {\n  width: 70px;\n  height: 70px;\n}\n#home-icon {\n  font-size: 20px;\n}\n.col-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-icon {\n  font-size: 22px;\n}\n#row-top {\n  margin-bottom: 12px;\n}\n#col-title {\n  border-bottom: 2px solid var(--ion-color-secondary);\n}\n#title {\n  color: var(--ion-color-title);\n}\n.tete {\n  color: red;\n}\n.list {\n  margin-top: 50px;\n  margin-left: 20px;\n}\n.title {\n  font-size: 12.8px;\n  color: var(--ion-color-title);\n}\n.col-title {\n  border-bottom: 2px solid var(--ion-color-secondary);\n}\n.row-title-table {\n  text-align: center;\n  font-weight: bold;\n  font-size: 12px;\n}\n.row-content-table {\n  font-size: 11px;\n  text-align: center;\n}\nion-select {\n  background: white;\n  border-radius: 70px;\n  font-size: 15px;\n  color: black;\n}\n.select-icon-inner {\n  opacity: 3;\n  color: red;\n}\n.date-select {\n  background: white;\n  border-radius: 70px;\n  font-size: 13px;\n}\n#total-title {\n  font-size: 16px;\n  background: var(--ion-color-primary);\n  color: white;\n  display: flex;\n  justify-content: center;\n  border-radius: 5px 0 0 5px;\n}\n#total-title-price {\n  border-radius: 0 5px 5px 0;\n  display: flex;\n  justify-content: center;\n  border: 1px solid var(--ion-color-primary);\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3JldHJhaXQvcmV0cmFpdC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9jYWxjdWxhdGV1ci5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FDQ0Y7QURBRTtFQUNFLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxpQkFBQTtBQ0dOO0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGO0FEREU7RUFDRSxrQ0FBQTtBQ0dKO0FEREU7RUFDRSxnQkFBQTtBQ0dKO0FEREU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDR047QURESTtFQUNFLGlEQUFBO0VBQ0EsNEJBQUE7QUNHTjtBREFFO0VBQ0Usb0NBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7QUNHTjtBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtBQ0VGO0FEQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dGO0FEREE7RUFDRSxlQUFBO0FDSUY7QURGQTtFQUNFLG1CQUFBO0FDS0Y7QURIQTtFQUNFLG1EQUFBO0FDTUY7QURKQTtFQUNFLDZCQUFBO0FDT0Y7QURKQTtFQUNFLFVBQUE7QUNPRjtBRExBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1FGO0FDOUVBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBRGlGRjtBQy9FQTtFQUNFLG1EQUFBO0FEa0ZGO0FDaEZBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURtRkY7QUNqRkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURvRkY7QUNsRkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURxRkY7QUNqRkE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBRG1GRjtBQ2pGQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEb0ZGO0FDbEZBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FEcUZGO0FDbkZBO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FEc0ZGIiwiZmlsZSI6ImNhbGN1bGF0ZXVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGlvbi10b29sYmFye1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgaW9uLWdyaWR7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC5yb3ctZnJhaXN7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuICAuYnRuLXN1Ym1pdHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIGlvbi1zZWdtZW50e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaW9uLWxhYmVse1xuICAgICAgLS1jb2xvcjogIzkxOTE5MTtcbiAgICAgIC8vIG9wYWNpdHk6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuI2xvZ297XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4jaG9tZS1pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29sLXRvcHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taWNvbntcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuI3Jvdy10b3B7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4jY29sLXRpdGxle1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4jdGl0bGV7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGl0bGUpO1xufVxuLy9BbGVydFxuLnRldGV7XG4gIGNvbG9yOiByZWQ7XG59XG4ubGlzdHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzMHB4IDMwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1ncmlkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuaW9uLWNvbnRlbnQgLnJvdy1mcmFpcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tY29udGVudCAuYnRuLXN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tY29udGVudCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5pb24tY29udGVudCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIC0tY29sb3I6ICM5MTkxOTE7XG59XG5cbiNsb2dvIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuI2hvbWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbC10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbiNyb3ctdG9wIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuI2NvbC10aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuI3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aXRsZSk7XG59XG5cbi50ZXRlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMi44cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGl0bGUpO1xufVxuXG4uY29sLXRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ucm93LXRpdGxlLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucm93LWNvbnRlbnQtdGFibGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zZWxlY3QtaWNvbi1pbm5lciB7XG4gIG9wYWNpdHk6IDM7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kYXRlLXNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiN0b3RhbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuI3RvdGFsLXRpdGxlLXByaWNlIHtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiQGltcG9ydCBcIi4uLy4uL3JldHJhaXQvcmV0cmFpdC5wYWdlXCI7XG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMTIuOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRpdGxlKTtcbn1cbi5jb2wtdGl0bGV7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5yb3ctdGl0bGUtdGFibGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yb3ctY29udGVudC10YWJsZXtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tc2VsZWN0e1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIC5zZWxlY3QtcGxhY2Vob2xkZXJ7XG4gIH1cbn1cbi5zZWxlY3QtaWNvbi1pbm5lcntcbiAgb3BhY2l0eTogMztcbiAgY29sb3I6IHJlZDtcbn1cbi5kYXRlLXNlbGVjdHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiN0b3RhbC10aXRsZXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4IDtcbn1cbiN0b3RhbC10aXRsZS1wcmljZXtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "n27r":
/*!*****************************************************************!*\
  !*** ./src/app/views/home-page/calculateur/calculateur.page.ts ***!
  \*****************************************************************/
/*! exports provided: CalculateurPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateurPage", function() { return CalculateurPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculateur_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculateur.page.html */ "+VJM");
/* harmony import */ var _calculateur_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateur.page.scss */ "03uR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let CalculateurPage = class CalculateurPage {
    constructor(httpClient, modalCtrl, alertCtrl) {
        this.httpClient = httpClient;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    onSubmit(f) {
        if (!f.valid) {
            return;
        }
        else {
            const montant = f.value.montant;
            this.calculFrais({ montant });
        }
    }
    calculFrais(sendData) {
        if (sendData.montant !== null) {
            this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/user/calculfrais', sendData).subscribe(data => {
                this.frais = data;
                this.alertCtrl.create({
                    header: 'Calculateur de frais',
                    message: `Pour une transaction de ${sendData.montant}, le frais est ??gal ??: <strong>${data}</strong>`,
                    buttons: ['Retour']
                }).then(alertEl => {
                    alertEl.present();
                });
            }, error => {
                console.log(error);
            });
        }
        else {
            this.frais = 0;
        }
    }
    dismissModal() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }
};
CalculateurPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
CalculateurPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculateur',
        template: _raw_loader_calculateur_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculateur_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculateurPage);



/***/ })

}]);
//# sourceMappingURL=default~calculateur-calculateur-module~menu-menu-module.js.map