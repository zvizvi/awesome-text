(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-home></app-home>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  background: #f8f8f8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGdpdGh1YlxcdGV4dC1hd2Vzb21lXFxhcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'text-awesome';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_effect_effect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/effect/effect.component */ "./src/app/home/effect/effect.component.ts");








Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _home_effect_effect_component__WEBPACK_IMPORTED_MODULE_6__["EffectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/effect/effect.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/effect/effect.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"effect\" [style.background]=\"effect.background+'' || ''\">\n  <div class=\"effect-inner\">\n    <div class=\"name\">Effect Name: {{effect.name}}</div>\n    <div class=\"preview\" [style]=\"getStyle(effect.code)\">{{effect.title || effect.name || 'This is a font effect!'}}</div>\n    <div>\n      <span class=\"code\">{{effect.code}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/effect/effect.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/effect/effect.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".effect {\n  display: block;\n  width: 900px;\n  padding: 16px;\n  max-width: 100%;\n  background: #fff;\n  box-shadow: 2px 1px 4px #ccc;\n  border-radius: 4px;\n  margin: 20px; }\n  .effect .preview {\n    font-family: 'Source Sans Pro', Poppins, sans-serif;\n    font-size: 40px;\n    font-weight: 900;\n    line-height: 56px;\n    padding: 10px 0; }\n  .effect .preview span {\n      display: inline-block; }\n  .effect .code {\n    display: block;\n    white-space: pre-line;\n    background-color: rgba(0, 0, 0, 0.85);\n    padding: 10px;\n    color: #f0f0f0;\n    text-shadow: #000 0 1px 0;\n    font-family: \"Consolas\", \"Courier New\", \"Courier\";\n    font-size: 1.45em;\n    line-height: 1.2em;\n    border-radius: 4px;\n    box-shadow: inset 0 0 7px #aaa;\n    font-weight: 500;\n    text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lZmZlY3QvRDpcXGdpdGh1YlxcdGV4dC1hd2Vzb21lXFxhcHAvc3JjXFxhcHBcXGhvbWVcXGVmZmVjdFxcZWZmZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQVJkO0lBV0ksbURBQW1EO0lBQ25ELGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQWZuQjtNQWtCTSxxQkFBcUIsRUFBQTtFQWxCM0I7SUF1QkksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsaURBQWlEO0lBQ2pELGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2VmZmVjdC9lZmZlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWZmZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MDBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMXB4IDRweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMjBweDtcblxuICAucHJldmlldyB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5jb2RlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZjBmMGYwO1xuICAgIHRleHQtc2hhZG93OiAjMDAwIDAgMXB4IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29uc29sYXNcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIkNvdXJpZXJcIjtcbiAgICBmb250LXNpemU6IDEuNDVlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA3cHggI2FhYTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/effect/effect.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/effect/effect.component.ts ***!
  \*************************************************/
/*! exports provided: EffectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectComponent", function() { return EffectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var EffectComponent = /** @class */ (function () {
    function EffectComponent(el, sanitizer) {
        this.el = el;
        this.sanitizer = sanitizer;
    }
    EffectComponent.prototype.ngOnInit = function () { };
    EffectComponent.prototype.getStyle = function (code) {
        if (!code) {
            return '';
        }
        return this.sanitizer.bypassSecurityTrustStyle(code);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EffectComponent.prototype, "effect", void 0);
    EffectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'effect',
            template: __webpack_require__(/*! ./effect.component.html */ "./src/app/home/effect/effect.component.html"),
            styles: [__webpack_require__(/*! ./effect.component.scss */ "./src/app/home/effect/effect.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EffectComponent);
    return EffectComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <h1>textAwesome</h1>\n  <article>\n    <div class=\"effect-list\">\n      <effect *ngFor=\"let effect of list\" [effect]=\"effect\"></effect>\n    </div>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  min-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  color: #212121; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcZ2l0aHViXFx0ZXh0LWF3ZXNvbWVcXGFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library.service */ "./src/app/library.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(libraryService) {
        this.libraryService = libraryService;
        this.list = libraryService.list;
        this.selected = this.list[0];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"]],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/library.service.ts":
/*!************************************!*\
  !*** ./src/app/library.service.ts ***!
  \************************************/
/*! exports provided: LibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibraryService = /** @class */ (function () {
    function LibraryService() {
        this.list = [
            {
                name: 'anaglyph',
                code: "text-shadow: -0.06em 0 red, 0.06em 0 cyan;\n      ",
                type: 'text-shadow',
                source: 'google fonts',
                tags: ['google-fonts', 'text-shadow']
            },
            {
                name: 'brick-sign',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/brick-sign.png);\n      color: #600;\n      ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'canvas-print',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/canvas-print.png);\n      color: #776d63;\n      ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'crackle',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/crackle.png);\n      color: #963;\n      ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'decaying',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/decaying.png);\n      color: #958e75;\n      ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'destruction',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/destruction.png);\n      color: #000;\n      ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'distressed',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/distress-light.png);\n      color: #306;\n      ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'distressed-wood',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/distressed-wood.png);\n      color: #4d2e0d;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'emboss',
                code: "text-shadow: 0px 1px 1px #fff, 0 -1px 1px #000;\n      color: #ddd;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'fire',
                code: "text-shadow: 0 -0.05em 0.2em #FFF,\n        0.01em -0.02em 0.15em #FE0, 0.01em -0.05em 0.15em #FC0,\n      0.02em -0.15em 0.2em #F90,\n      0.04em -0.2em 0.3em #F70,\n      0.05em -0.25em 0.4em #F70,\n      0.06em -0.2em 0.9em #F50,\n      0.1em -0.1em 1em #F40;\n      color: #ffe;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'fragile',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/fragile.png);\n      color: #663;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'grass',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/grass.png);\n      color: #390;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'ice',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/ice.png);\n      color: #0cf;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'mitosis',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/mitosis.png);\n      color: #600;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'neon',
                code: "text-shadow: 0 0 0.1em #fff, 0 0 0.2em #fff, 0 0 0.3em #fff, 0 0 0.4em #f7f, 0 0 0.6em #f0f, 0 0 0.8em #f0f, 0 0 1em #f0f, 0 0 1.2em #f0f;\n      color: #fff;\n        ",
                type: 'text-shadow',
                source: 'google fonts',
                tags: ['google-fonts', 'text-shadow']
            },
            {
                name: 'outline',
                code: "text-shadow: 0 1px 1px #000, 0 -1px 1px #000, 1px 0 1px #000, -1px 0 1px #000;\n      color: #fff;\n        ",
                type: 'text-shadow',
                source: 'google fonts',
                tags: ['google-fonts', 'text-shadow']
            },
            {
                name: 'putting-green',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);\n        color: #9c7;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'scuffed-steel',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);\n        color: #9c7;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'shadow-multiple',
                code: "text-shadow: 0.04em 0.04em 0 #fff, 0.08em 0.08em 0 #aaa;\n      -webkit-text-shadow: .04em .04em 0 #fff, .08em .08em 0 #aaa;\n        ",
                type: 'text-shadow',
                source: 'google fonts',
                tags: ['google-fonts', 'text-shadow']
            },
            {
                name: 'splintered',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);\n        color: #9c7;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'static',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);\n        color: #9c7;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'stonewash',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);\n        color: #9c7;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: '3d',
                title: 'Three Dimensional',
                background: '#ebebeb',
                code: "text-shadow: 0px 1px 0px #c7c8ca, 0px 2px 0px #b1b3b6, 0px 3px 0px #9d9fa2, 0px 4px 0px #8a8c8e, 0px 5px 0px #77787b, 0px 6px 0px #636466, 0px 7px 0px #4d4d4f, 0px 8px 7px #001135;\n      color: #fff;\n        ",
                type: 'text-shadow',
                source: 'google fonts',
                tags: ['google-fonts', 'text-shadow']
            },
            {
                name: '3d-float',
                title: 'Three Dimensional Float',
                background: '#ebebeb',
                code: "text-shadow: 0 0.032em 0 #b0b0b0, 0px 0.15em 0.11em rgba(0,0,0,0.15), 0px 0.25em 0.021em rgba(0,0,0,0.1), 0px 0.32em 0.32em rgba(0,0,0,0.1);\n      color: #fff;\n        ",
                type: 'text-shadow',
                source: 'google fonts',
                tags: ['google-fonts', 'text-shadow']
            },
            {
                name: 'vintage',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/distress-medium.png);\n      color: #db8;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            },
            {
                name: 'wallpaper',
                code: "-webkit-mask-image: url(//themes.googleusercontent.com/static/patterns/wallpaper.png);\n        color: #9c7;\n        ",
                type: 'mask-image',
                source: 'google fonts',
                tags: ['google-fonts', 'mask-image']
            }
        ];
    }
    LibraryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\text-awesome\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map