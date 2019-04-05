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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\r\n    <header [currentPage]=\"currentPage\"></header>\r\n\r\n    <div class=\"large-image-container\" *ngIf=\"imageObjects.about[0]\">\r\n        <div class=\"image-container\">\r\n            <img src=\"{{imageObjects.about[0].url}}\" alt=\"{{imageObjects.about[0].title}}\">\r\n            <div class=\"image-slider-panel\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngFor=\"let eachImage of imageObjects.about_display_images; index as i\">\r\n        <div class=\"description-panel-container\" *ngIf=\"i%2 != 0\">\r\n            <div class=\"image-container\">\r\n                <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\r\n            </div>\r\n            <div class=\"description-text-container\">\r\n                <div class=\"title\">\r\n                    {{eachImage.title}}\r\n                </div>\r\n                <div class=\"text\">\r\n                    {{eachImage.description}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"detail-panel-container\" *ngIf=\"i%2 == 0\">\r\n            <div class=\"description-text-container\">\r\n                <div class=\"title\">\r\n                    {{eachImage.title}}\r\n                </div>\r\n                <div class=\"text\">\r\n                    {{eachImage.description}}\r\n                </div>\r\n            </div>\r\n            <div class=\"image-container\">\r\n                <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  background-color: #f0f0f0; }\n  .about-container .large-image-container {\n    padding: 59px 0 0 0; }\n  .about-container .large-image-container .image-container {\n      position: relative; }\n  .about-container .large-image-container .image-container > img {\n        width: 100%;\n        display: block; }\n  .about-container .large-image-container .image-container .image-slider-panel {\n        background: transparent;\n        visibility: hidden;\n        position: absolute;\n        bottom: 0;\n        width: 100%; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container {\n          text-align: center; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image {\n            box-sizing: border-box;\n            margin: 5px;\n            display: inline-block; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image > img {\n              padding: 5px;\n              width: 68px;\n              height: 68px;\n              display: block;\n              text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72); }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image:hover {\n              cursor: pointer;\n              border: 1px solid white; }\n  .about-container .large-image-container .image-container:hover .image-slider-panel {\n        visibility: visible; }\n  .about-container .large-image-container .image-container:hover .icon {\n        visibility: visible; }\n  .about-container .large-image-container .image-container .icon {\n        position: absolute;\n        visibility: hidden;\n        color: #ffffff;\n        top: 50%;\n        font-size: 90px;\n        opacity: .8;\n        text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72);\n        cursor: pointer; }\n  .about-container .large-image-container .image-container .icon > i {\n          font-weight: 600; }\n  .about-container .large-image-container .image-container .previous {\n        left: 10px; }\n  .about-container .large-image-container .image-container .next {\n        right: 10px; }\n  .about-container .description-panel-container {\n    display: block;\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%; }\n  .about-container .description-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n      object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .about-container .description-panel-container .description-text-container {\n      background: black;\n      padding: 20px;\n      color: white; }\n  .about-container .description-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .about-container .description-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n  .about-container .detail-panel-container {\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);\n    border-radius: 2px; }\n  .about-container .detail-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n         object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .about-container .detail-panel-container .description-text-container {\n      padding: 20px; }\n  .about-container .detail-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .about-container .detail-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(router) {
        this.router = router;
        this.currentPage = "About Us";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.imageObjects = this.homepageData.images;
    };
    AboutComponent.prototype.navigate = function (currentItem) {
        if (currentItem.length > 1)
            this.showProductList = !this.showProductList;
        else {
            switch (currentItem[0]) {
                case 'Home': {
                    this.router.navigate(['home']);
                    break;
                }
                case 'About Us': {
                    this.router.navigate(['about']);
                    break;
                }
                case 'Wallets': {
                    this.router.navigate(['wallets']);
                    break;
                }
                case 'Bags': {
                    this.router.navigate(['bags']);
                    break;
                }
                case 'Accessories': {
                    this.router.navigate(['accessories']);
                    break;
                }
                case 'Bespoke': {
                    this.router.navigate(['bespoke']);
                    break;
                }
                case 'Contact Us': {
                    this.router.navigate(['contactus']);
                    break;
                }
                case 'Infrastructure': {
                    this.router.navigate(['infrastructure']);
                    break;
                }
                case '': {
                    this.router.navigate(['home']);
                    break;
                }
                default: console.log("unknown", currentItem);
            }
        }
    };
    AboutComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/accessories/accessories.component.html":
/*!********************************************************!*\
  !*** ./src/app/accessories/accessories.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  accessories works!\n</p>\n"

/***/ }),

/***/ "./src/app/accessories/accessories.component.scss":
/*!********************************************************!*\
  !*** ./src/app/accessories/accessories.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accessories/accessories.component.ts":
/*!******************************************************!*\
  !*** ./src/app/accessories/accessories.component.ts ***!
  \******************************************************/
/*! exports provided: AccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function() { return AccessoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessoriesComponent = /** @class */ (function () {
    function AccessoriesComponent() {
    }
    AccessoriesComponent.prototype.ngOnInit = function () {
    };
    AccessoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accessories',
            template: __webpack_require__(/*! ./accessories.component.html */ "./src/app/accessories/accessories.component.html"),
            styles: [__webpack_require__(/*! ./accessories.component.scss */ "./src/app/accessories/accessories.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessoriesComponent);
    return AccessoriesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _wallets_wallets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wallets/wallets.component */ "./src/app/wallets/wallets.component.ts");
/* harmony import */ var _bags_bags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bags/bags.component */ "./src/app/bags/bags.component.ts");
/* harmony import */ var _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accessories/accessories.component */ "./src/app/accessories/accessories.component.ts");
/* harmony import */ var _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./infrastructure/infrastructure.component */ "./src/app/infrastructure/infrastructure.component.ts");
/* harmony import */ var _bespoke_bespoke_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bespoke/bespoke.component */ "./src/app/bespoke/bespoke.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'wallets', component: _wallets_wallets_component__WEBPACK_IMPORTED_MODULE_9__["WalletsComponent"] },
    { path: 'bags', component: _bags_bags_component__WEBPACK_IMPORTED_MODULE_10__["BagsComponent"] },
    { path: 'accessories', component: _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_11__["AccessoriesComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'bespoke', component: _bespoke_bespoke_component__WEBPACK_IMPORTED_MODULE_13__["BespokeComponent"] },
    { path: 'infrastructure', component: _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_12__["InfrastructureComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _wallets_wallets_component__WEBPACK_IMPORTED_MODULE_9__["WalletsComponent"],
                _bags_bags_component__WEBPACK_IMPORTED_MODULE_10__["BagsComponent"],
                _accessories_accessories_component__WEBPACK_IMPORTED_MODULE_11__["AccessoriesComponent"],
                _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_12__["InfrastructureComponent"],
                _bespoke_bespoke_component__WEBPACK_IMPORTED_MODULE_13__["BespokeComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bags/bags.component.html":
/*!******************************************!*\
  !*** ./src/app/bags/bags.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bags-container\">\n    <header [currentPage]=\"currentPage\"></header>\n    <div class=\"bags-content\">\n        \n    <div class=\"bags-main-text\">\n        Lorem ipsum fhreighiyehvrte fersyvbyerbe cerivbyerbvuytrb\n    </div>\n\n    <div class=\"each-style-gallery\" *ngFor=\"let eachStyle of stylesList; index as i\">\n        <div class=\"gallery-attempt\" *ngIf=\"galleryOptions\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"eachStyle.images\"></ngx-gallery>\n        </div>\n    </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/bags/bags.component.scss":
/*!******************************************!*\
  !*** ./src/app/bags/bags.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bags-container {\n  background-color: #f0f0f0; }\n  .bags-container .bags-content {\n    padding-top: 59px; }\n  .bags-container .bags-content .bags-main-text {\n      padding: 20px 0;\n      justify-content: center;\n      margin: 20px auto;\n      width: 70%;\n      background-color: black;\n      color: white;\n      text-align: center; }\n  .bags-container .bags-content .each-style-gallery {\n      justify-content: center;\n      margin: 20px auto;\n      width: 70%;\n      background-color: black;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/bags/bags.component.ts":
/*!****************************************!*\
  !*** ./src/app/bags/bags.component.ts ***!
  \****************************************/
/*! exports provided: BagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BagsComponent", function() { return BagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BagsComponent = /** @class */ (function () {
    function BagsComponent(router) {
        this.router = router;
        this.currentPage = "Bags";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    BagsComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.stylesList = this.homepageData.images.bagstyles;
        this.galleryOptions = [
            {
                width: '555px',
                height: '700px',
                thumbnailsColumns: 3,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryAnimation"].Slide,
                imageSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryImageSize"].Contain,
                lazyLoading: false
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    BagsComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    BagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bags',
            template: __webpack_require__(/*! ./bags.component.html */ "./src/app/bags/bags.component.html"),
            styles: [__webpack_require__(/*! ./bags.component.scss */ "./src/app/bags/bags.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BagsComponent);
    return BagsComponent;
}());



/***/ }),

/***/ "./src/app/bespoke/bespoke.component.html":
/*!************************************************!*\
  !*** ./src/app/bespoke/bespoke.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <header [currentPage]=\"currentPage\"></header>\n\n  <div class=\"large-image-container\" *ngIf=\"imageObjects.bespoke[0]\">\n      <div class=\"image-container\">\n          <img src=\"{{imageObjects.bespoke[0].url}}\" alt=\"{{imageObjects.bespoke[0].title}}\">\n          <div class=\"image-slider-panel\"></div>\n      </div>\n  </div>\n\n  <ng-container *ngFor=\"let eachImage of imageObjects.bespoke_display_images; index as i\">\n      <div class=\"description-panel-container\" *ngIf=\"i%2 != 0\">\n          <div class=\"image-container\">\n              <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n          </div>\n          <div class=\"description-text-container\">\n              <div class=\"title\">\n                  {{eachImage.title}}\n              </div>\n              <div class=\"text\">\n                  {{eachImage.description}}\n              </div>\n          </div>\n      </div>\n      <div class=\"detail-panel-container\" *ngIf=\"i%2 == 0\">\n          <div class=\"description-text-container\">\n              <div class=\"title\">\n                  {{eachImage.title}}\n              </div>\n              <div class=\"text\">\n                  {{eachImage.description}}\n              </div>\n          </div>\n          <div class=\"image-container\">\n              <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n          </div>\n      </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/bespoke/bespoke.component.scss":
/*!************************************************!*\
  !*** ./src/app/bespoke/bespoke.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  background-color: #f0f0f0; }\n  .about-container .large-image-container {\n    padding: 59px 0 0 0; }\n  .about-container .large-image-container .image-container {\n      position: relative; }\n  .about-container .large-image-container .image-container > img {\n        width: 100%;\n        display: block; }\n  .about-container .large-image-container .image-container .image-slider-panel {\n        background: transparent;\n        visibility: hidden;\n        position: absolute;\n        bottom: 0;\n        width: 100%; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container {\n          text-align: center; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image {\n            box-sizing: border-box;\n            margin: 5px;\n            display: inline-block; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image > img {\n              padding: 5px;\n              width: 68px;\n              height: 68px;\n              display: block;\n              text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72); }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image:hover {\n              cursor: pointer;\n              border: 1px solid white; }\n  .about-container .large-image-container .image-container:hover .image-slider-panel {\n        visibility: visible; }\n  .about-container .large-image-container .image-container:hover .icon {\n        visibility: visible; }\n  .about-container .large-image-container .image-container .icon {\n        position: absolute;\n        visibility: hidden;\n        color: #ffffff;\n        top: 50%;\n        font-size: 90px;\n        opacity: .8;\n        text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72);\n        cursor: pointer; }\n  .about-container .large-image-container .image-container .icon > i {\n          font-weight: 600; }\n  .about-container .large-image-container .image-container .previous {\n        left: 10px; }\n  .about-container .large-image-container .image-container .next {\n        right: 10px; }\n  .about-container .description-panel-container {\n    display: block;\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%; }\n  .about-container .description-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n      object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .about-container .description-panel-container .description-text-container {\n      background: black;\n      padding: 20px;\n      color: white; }\n  .about-container .description-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .about-container .description-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n  .about-container .detail-panel-container {\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3); }\n  .about-container .detail-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n         object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .about-container .detail-panel-container .description-text-container {\n      padding: 20px; }\n  .about-container .detail-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .about-container .detail-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n"

/***/ }),

/***/ "./src/app/bespoke/bespoke.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bespoke/bespoke.component.ts ***!
  \**********************************************/
/*! exports provided: BespokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BespokeComponent", function() { return BespokeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BespokeComponent = /** @class */ (function () {
    function BespokeComponent(router) {
        this.router = router;
        this.currentPage = "Bespoke";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    BespokeComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.imageObjects = this.homepageData.images;
    };
    BespokeComponent.prototype.navigate = function (currentItem) {
        if (currentItem.length > 1)
            this.showProductList = !this.showProductList;
        else {
            switch (currentItem[0]) {
                case 'Home': {
                    this.router.navigate(['home']);
                    break;
                }
                case 'About Us': {
                    this.router.navigate(['about']);
                    break;
                }
                case 'Wallets': {
                    this.router.navigate(['wallets']);
                    break;
                }
                case 'Bags': {
                    this.router.navigate(['bags']);
                    break;
                }
                case 'Accessories': {
                    this.router.navigate(['accessories']);
                    break;
                }
                case 'Bespoke': {
                    this.router.navigate(['bespoke']);
                    break;
                }
                case 'Contact Us': {
                    this.router.navigate(['contactus']);
                    break;
                }
                case 'Infrastructure': {
                    this.router.navigate(['infrastructure']);
                    break;
                }
                case '': {
                    this.router.navigate(['home']);
                    break;
                }
                default: console.log("unknown", currentItem);
            }
        }
    };
    BespokeComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    BespokeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bespoke',
            template: __webpack_require__(/*! ./bespoke.component.html */ "./src/app/bespoke/bespoke.component.html"),
            styles: [__webpack_require__(/*! ./bespoke.component.scss */ "./src/app/bespoke/bespoke.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BespokeComponent);
    return BespokeComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header [currentPage]=\"currentPage\"></header>\n  <div class=\"iframe-container\">\n\n  <iframe src=\"./email/index.html\" name=\"iframe_a\"></iframe>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0;\n  background-color: #f0f0f0; }\n  .container iframe {\n    width: 98vw;\n    min-height: 660px;\n    border: none;\n    margin-top: 60px; }\n  .container .iframe-container {\n  padding-top: 59px; }\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(router) {
        this.router = router;
        this.currentPage = "Contact Us";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        console.log("Contact form loaded");
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.imageObjects = this.homepageData.images;
    };
    ContactusComponent.prototype.navigate = function (currentItem) {
        if (currentItem.length > 1)
            this.showProductList = !this.showProductList;
        else {
            switch (currentItem[0]) {
                case 'Home': {
                    this.router.navigate(['home']);
                    break;
                }
                case 'About Us': {
                    this.router.navigate(['about']);
                    break;
                }
                case 'Wallets': {
                    this.router.navigate(['wallets']);
                    break;
                }
                case 'Bags': {
                    this.router.navigate(['bags']);
                    break;
                }
                case 'Accessories': {
                    this.router.navigate(['accessories']);
                    break;
                }
                case 'Bespoke': {
                    this.router.navigate(['bespoke']);
                    break;
                }
                case 'Contact Us': {
                    this.router.navigate(['contactus']);
                    break;
                }
                case 'Infrastructure': {
                    this.router.navigate(['infrastructure']);
                    break;
                }
                case '': {
                    this.router.navigate(['home']);
                    break;
                }
                default: console.log("unknown", currentItem);
            }
        }
    };
    ContactusComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/app/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
    "page_list": [
        ["Home"],
        ["About Us"],
        ["Product Categories", ["Bags"], ["Wallets"], ["Accessories"]],
        ["Infrastructure"],
        ["Bespoke"],
        ["Contact Us"]
    ],
    "images": {
        "logo": {
            "url": "../assets/static/placeholdericon.png",
            "description": "",
            "title": ""
        },
        "thumbnails": [
            {
                "url": "../assets/static/placeholdericon.png",
                "description": "",
                "title": ""
            },
            {
                "url": "../assets/static/placeholdericon.png",
                "description": "",
                "title": ""
            },
            {
                "url": "../assets/static/placeholdericon.png",
                "description": "",
                "title": ""
            }
        ],
        "large_images": [
            {
                "small": "../assets/static/stock1.jpg",
                "medium": "../assets/static/stock1.jpg",
                "big": "../assets/static/stock1.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image1"
            },
            {
                "small": "../assets/static/stock2.jpg",
                "medium": "../assets/static/stock2.jpg",
                "big": "../assets/static/stock2.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image2"
            },
            {
                "small": "../assets/static/stock3.jpg",
                "medium": "../assets/static/stock3.jpg",
                "big": "../assets/static/stock3.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image3"
            },
            {
                "small": "../assets/static/stock4.jpg",
                "medium": "../assets/static/stock4.jpg",
                "big": "../assets/static/stock4.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image4"
            },
            {
                "small": "../assets/static/stock5.jpg",
                "medium": "../assets/static/stock5.jpg",
                "big": "../assets/static/stock5.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image5"
            }, {
                "small": "../assets/static/stock6.jpg",
                "medium": "../assets/static/stock6.jpg",
                "big": "../assets/static/stock6.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image6"
            }, {
                "small": "../assets/static/stock7.jpg",
                "medium": "../assets/static/stock7.jpg",
                "big": "../assets/static/stock7.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image7"
            }
        ],
        "display_images": [
            {
                "url": "../assets/static/stock6.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image1"
            },
            {
                "url": "../assets/static/stock7.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image2"
            },
            {
                "url": "../assets/static/stock4.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image3"
            }
        ],
        "about": [
            {
                "url": "../assets/static/stock6.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "About Image"
            }
        ],
        "about_display_images": [
            {
                "url": "../assets/static/stock2.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image1"
            },
            {
                "url": "../assets/static/stock7.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image2"
            },
            {
                "url": "../assets/static/stock5.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image3"
            }
        ],
        "bespoke": [
            {
                "url": "../assets/static/stock3.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "Bespoke Image"
            }
        ],
        "bespoke_display_images": [
            {
                "url": "../assets/static/stock4.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image1"
            },
            {
                "url": "../assets/static/stock2.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image2"
            },
            {
                "url": "../assets/static/stock1.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image3"
            }
        ],
        "infrastructure": [
            {
                "url": "../assets/static/stock5.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "Infrastructure Image"
            }
        ],
        "infrastructure_display_images": [
            {
                "url": "../assets/static/stock3.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image1"
            },
            {
                "url": "../assets/static/stock5.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image2"
            },
            {
                "url": "../assets/static/stock4.jpg",
                "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                "title": "image3"
            }
        ],
        "bagstyles": [
            {
                "styleName": "s20205",
                "images": [
                    {
                        "small": "../assets/static/bags/20205/20205-1.jpg",
                        "medium": "../assets/static/bags/20205/20205-1.jpg",
                        "big": "../assets/static/bags/20205/20205-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20205/20205-2.jpg",
                        "medium": "../assets/static/bags/20205/20205-2.jpg",
                        "big": "../assets/static/bags/20205/20205-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20205/20205-3.jpg",
                        "medium": "../assets/static/bags/20205/20205-3.jpg",
                        "big": "../assets/static/bags/20205/20205-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20205/20205-4.jpg",
                        "medium": "../assets/static/bags/20205/20205-4.jpg",
                        "big": "../assets/static/bags/20205/20205-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                ]
            },
            {
                "styleName": "s20208",
                "images": [
                    {
                        "small": "../assets/static/bags/20208/20208-1.jpg",
                        "medium": "../assets/static/bags/20208/20208-1.jpg",
                        "big": "../assets/static/bags/20208/20208-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20208/20208-2.jpg",
                        "medium": "../assets/static/bags/20208/20208-2.jpg",
                        "big": "../assets/static/bags/20208/20208-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20208/20208-3.jpg",
                        "medium": "../assets/static/bags/20208/20208-3.jpg",
                        "big": "../assets/static/bags/20208/20208-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s20211",
                "images": [
                    {
                        "small": "../assets/static/bags/20211/20211-1.jpg",
                        "medium": "../assets/static/bags/20211/20211-1.jpg",
                        "big": "../assets/static/bags/20211/20211-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20211/20211-2.jpg",
                        "medium": "../assets/static/bags/20211/20211-2.jpg",
                        "big": "../assets/static/bags/20211/20211-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20211/20211-3.jpg",
                        "medium": "../assets/static/bags/20211/20211-3.jpg",
                        "big": "../assets/static/bags/20211/20211-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20211/20211-4.jpg",
                        "medium": "../assets/static/bags/20211/20211-4.jpg",
                        "big": "../assets/static/bags/20211/20211-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20211/20211-5.jpg",
                        "medium": "../assets/static/bags/20211/20211-5.jpg",
                        "big": "../assets/static/bags/20211/20211-5.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s20213",
                "images": [
                    {
                        "small": "../assets/static/bags/20213/20213-1.jpg",
                        "medium": "../assets/static/bags/20213/20213-1.jpg",
                        "big": "../assets/static/bags/20213/20213-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20213/20213-2.jpg",
                        "medium": "../assets/static/bags/20213/20213-2.jpg",
                        "big": "../assets/static/bags/20213/20213-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20213/20213-3.jpg",
                        "medium": "../assets/static/bags/20213/20213-3.jpg",
                        "big": "../assets/static/bags/20213/20213-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20213/20213-4.jpg",
                        "medium": "../assets/static/bags/20213/20213-4.jpg",
                        "big": "../assets/static/bags/20213/20213-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                ]
            },
            {
                "styleName": "s20216",
                "images": [
                    {
                        "small": "../assets/static/bags/20216/20216-1.jpg",
                        "medium": "../assets/static/bags/20216/20216-1.jpg",
                        "big": "../assets/static/bags/20216/20216-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-2.jpg",
                        "medium": "../assets/static/bags/20216/20216-2.jpg",
                        "big": "../assets/static/bags/20216/20216-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-3.jpg",
                        "medium": "../assets/static/bags/20216/20216-3.jpg",
                        "big": "../assets/static/bags/20216/20216-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-4.jpg",
                        "medium": "../assets/static/bags/20216/20216-4.jpg",
                        "big": "../assets/static/bags/20216/20216-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-5.jpg",
                        "medium": "../assets/static/bags/20216/20216-5.jpg",
                        "big": "../assets/static/bags/20216/20216-5.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-6.jpg",
                        "medium": "../assets/static/bags/20216/20216-6.jpg",
                        "big": "../assets/static/bags/20216/20216-6.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-7.jpg",
                        "medium": "../assets/static/bags/20216/20216-7.jpg",
                        "big": "../assets/static/bags/20216/20216-7.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20216/20216-8.jpg",
                        "medium": "../assets/static/bags/20216/20216-8.jpg",
                        "big": "../assets/static/bags/20216/20216-8.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s20217",
                "images": [
                    {
                        "small": "../assets/static/bags/20217/20217-1.jpg",
                        "medium": "../assets/static/bags/20217/20217-1.jpg",
                        "big": "../assets/static/bags/20217/20217-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20217/20217-2.jpg",
                        "medium": "../assets/static/bags/20217/20217-2.jpg",
                        "big": "../assets/static/bags/20217/20217-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20217/20217-3.jpg",
                        "medium": "../assets/static/bags/20217/20217-3.jpg",
                        "big": "../assets/static/bags/20217/20217-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s20219",
                "images": [
                    {
                        "small": "../assets/static/bags/20219/20219-1.jpg",
                        "medium": "../assets/static/bags/20219/20219-1.jpg",
                        "big": "../assets/static/bags/20219/20219-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20219/20219-2.jpg",
                        "medium": "../assets/static/bags/20219/20219-2.jpg",
                        "big": "../assets/static/bags/20219/20219-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20219/20219-3.jpg",
                        "medium": "../assets/static/bags/20219/20219-3.jpg",
                        "big": "../assets/static/bags/20219/20219-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s20220",
                "images": [
                    {
                        "small": "../assets/static/bags/20220/20220-1.jpg",
                        "medium": "../assets/static/bags/20220/20220-1.jpg",
                        "big": "../assets/static/bags/20220/20220-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20220/20220-2.jpg",
                        "medium": "../assets/static/bags/20220/20220-2.jpg",
                        "big": "../assets/static/bags/20220/20220-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20220/20220-3.jpg",
                        "medium": "../assets/static/bags/20220/20220-3.jpg",
                        "big": "../assets/static/bags/20220/20220-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/bags/20220/20220-4.jpg",
                        "medium": "../assets/static/bags/20220/20220-4.jpg",
                        "big": "../assets/static/bags/20220/20220-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                ]
            },
        ],
        "walletstyles": [
            {
                "styleName": "s1046",
                "images": [
                    {
                        "small": "../assets/static/wallets/1046/1046-1.jpg",
                        "medium": "../assets/static/wallets/1046/1046-1.jpg",
                        "big": "../assets/static/wallets/1046/1046-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/1046/1046-2.jpg",
                        "medium": "../assets/static/wallets/1046/1046-2.jpg",
                        "big": "../assets/static/wallets/1046/1046-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/1046/1046-3.jpg",
                        "medium": "../assets/static/wallets/1046/1046-3.jpg",
                        "big": "../assets/static/wallets/1046/1046-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/1046/1046-4.jpg",
                        "medium": "../assets/static/wallets/1046/1046-4.jpg",
                        "big": "../assets/static/wallets/1046/1046-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/1046/1046-5.jpg",
                        "medium": "../assets/static/wallets/1046/1046-5.jpg",
                        "big": "../assets/static/wallets/1046/1046-5.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s17031",
                "images": [
                    {
                        "small": "../assets/static/wallets/17031/17031-1.jpg",
                        "medium": "../assets/static/wallets/17031/17031-1.jpg",
                        "big": "../assets/static/wallets/17031/17031-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17031/17031-2.jpg",
                        "medium": "../assets/static/wallets/17031/17031-2.jpg",
                        "big": "../assets/static/wallets/17031/17031-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17031/17031-3.jpg",
                        "medium": "../assets/static/wallets/17031/17031-3.jpg",
                        "big": "../assets/static/wallets/17031/17031-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17031/17031-4.jpg",
                        "medium": "../assets/static/wallets/17031/17031-4.jpg",
                        "big": "../assets/static/wallets/17031/17031-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17031/17031-5.jpg",
                        "medium": "../assets/static/wallets/17031/17031-5.jpg",
                        "big": "../assets/static/wallets/17031/17031-5.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17031/17031-6.jpg",
                        "medium": "../assets/static/wallets/17031/17031-6.jpg",
                        "big": "../assets/static/wallets/17031/17031-6.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "s17034",
                "images": [
                    {
                        "small": "../assets/static/wallets/17034/17034-1.jpg",
                        "medium": "../assets/static/wallets/17034/17034-1.jpg",
                        "big": "../assets/static/wallets/17034/17034-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17034/17034-2.jpg",
                        "medium": "../assets/static/wallets/17034/17034-2.jpg",
                        "big": "../assets/static/wallets/17034/17034-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17034/17034-3.jpg",
                        "medium": "../assets/static/wallets/17034/17034-3.jpg",
                        "big": "../assets/static/wallets/17034/17034-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17034/17034-4.jpg",
                        "medium": "../assets/static/wallets/17034/17034-4.jpg",
                        "big": "../assets/static/wallets/17034/17034-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/17034/17034-5.jpg",
                        "medium": "../assets/static/wallets/17034/17034-5.jpg",
                        "big": "../assets/static/wallets/17034/17034-5.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            },
            {
                "styleName": "sLW15",
                "images": [
                    {
                        "small": "../assets/static/wallets/LW15/LW15-1.jpg",
                        "medium": "../assets/static/wallets/LW15/LW15-1.jpg",
                        "big": "../assets/static/wallets/LW15/LW15-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/LW15/LW15-2.jpg",
                        "medium": "../assets/static/wallets/LW15/LW15-2.jpg",
                        "big": "../assets/static/wallets/LW15/LW15-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/LW15/LW15-3.jpg",
                        "medium": "../assets/static/wallets/LW15/LW15-3.jpg",
                        "big": "../assets/static/wallets/LW15/LW15-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/LW15/LW15-4.jpg",
                        "medium": "../assets/static/wallets/LW15/LW15-4.jpg",
                        "big": "../assets/static/wallets/LW15/LW15-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                ]
            },
            {
                "styleName": "sSW02",
                "images": [
                    {
                        "small": "../assets/static/wallets/SW02/SW02-1.jpg",
                        "medium": "../assets/static/wallets/SW02/SW02-1.jpg",
                        "big": "../assets/static/wallets/SW02/SW02-1.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/SW02/SW02-2.jpg",
                        "medium": "../assets/static/wallets/SW02/SW02-2.jpg",
                        "big": "../assets/static/wallets/SW02/SW02-2.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/SW02/SW02-3.jpg",
                        "medium": "../assets/static/wallets/SW02/SW02-3.jpg",
                        "big": "../assets/static/wallets/SW02/SW02-3.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    },
                    {
                        "small": "../assets/static/wallets/SW02/SW02-4.jpg",
                        "medium": "../assets/static/wallets/SW02/SW02-4.jpg",
                        "big": "../assets/static/wallets/SW02/SW02-4.jpg",
                        "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Duis a dui sapien. Praesent efficitur consectetur mi sed maximus. Pellentesque in nunc dignissim, imperdiet mi quiscursus massa. Proin elementum molestie diam, non congue tortor. Donec ac dapibus nisi. Nunc tincidunt maximus loremac hendrerit. Donec sit amet tristique tellus. Integer vehicula dapibus accumsan.",
                        "title": "image5"
                    }
                ]
            }
        ]
    }
};


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"top\">\n    <div class=\"top-header\">\n      <div class=\"top-header-left\">\n        AICreations\n      </div>\n      <div class=\"top-header-right-panel\" *ngIf=\"linkList\">\n        <span class=\"top-header-right-panel-item\" [ngClass]=\"{'active': currentPage == eachlink[0]}\" *ngFor=\"let eachlink of linkList\" (click)=\"navigate(eachlink)\">\n          <span>{{eachlink[0]}}</span>\n          <span class=\"icon\" *ngIf=\"eachlink.length > 1\">\n            <i class=\"fas fa-angle-down\"></i>\n          </span>\n          <div class=\"product-list-container\" *ngIf=\"showProductList && eachlink.length > 1\">\n            <div class=\"product-list\" *ngFor=\"let link of eachlink | slice:1\" (click)=\"navigate(link)\">\n              <span>{{link[0]}}</span>\n            </div>\n          </div>\n        </span>\n        <div class=\"top-header-right-panel-small-screen\">\n          <div (click)=\"showHideRightPanel()\">\n            <i class=\"fas fa-bars\"></i>\n          </div>\n          <div class=\"top-header-right-panel-small-screen-item-container\" *ngIf=\"showHideRightPanelFlag\">\n            <div class=\"top-header-right-panel-item-collapsed\" *ngFor=\"let eachlink of linkList\" (click)=\"navigate(eachlink)\">\n              <span>{{eachlink[0]}}</span>\n              <span class=\"icon\" *ngIf=\"eachlink.length > 1\">\n                <i class=\"fas fa-angle-left\"></i>\n              </span>\n              <div class=\"product-list-container\" *ngIf=\"showProductList && eachlink.length > 1\">\n                <div class=\"product-list\" *ngFor=\"let link of eachlink | slice:1\" (click)=\"navigate(link)\">\n                  <span>{{link[0]}}</span>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0; }\n  .container .top {\n    background: white;\n    position: fixed;\n    z-index: 5000;\n    width: 100%; }\n  .container .top .top-header {\n      border-bottom: 1px solid black;\n      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.8); }\n  .container .top .top-header .top-header-left {\n        padding: 20px;\n        display: inline-block; }\n  .container .top .top-header .top-header-right-panel {\n        box-sizing: border-box;\n        padding: 0 20px;\n        display: inline-block; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item {\n          padding: 20px 20px 15px;\n          display: none;\n          cursor: pointer;\n          box-sizing: border-box;\n          position: relative; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item:hover {\n            border-bottom: 5px solid blue; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item .icon {\n            margin-left: 7px; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item .icon > i {\n              vertical-align: bottom;\n              font-weight: 600; }\n  @media screen and (min-width: 1025px) {\n            .container .top .top-header .top-header-right-panel .top-header-right-panel-item {\n              display: inline-block; } }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item .product-list-container {\n            position: absolute;\n            box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);\n            background: #f4f4f4;\n            z-index: 1;\n            padding: 10px 15px;\n            width: 100%;\n            top: 46px;\n            border-radius: 1px 1px 3px 3px; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item .product-list-container .product-list {\n              padding: 6px;\n              margin: 4px 0;\n              color: #666666;\n              background-color: white;\n              box-shadow: 1px 1px 2px 0px rgba(150, 150, 150, 0.45); }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-item .product-list-container .product-list:hover {\n                color: black;\n                box-shadow: 1px 1px 6px 0px rgba(150, 150, 150, 0.75); }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen {\n          display: none;\n          position: relative;\n          cursor: pointer;\n          padding-top: 20px; }\n  @media screen and (max-width: 1024px) {\n            .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen {\n              display: block; } }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen .top-header-right-panel-small-screen-item-container {\n            position: absolute;\n            right: 0px;\n            box-shadow: -2px -2px 5px -1px rgba(163, 163, 163, 0.65);\n            text-align: right;\n            background: #f8f8f8;\n            padding: 10px 0;\n            border-radius: 3px;\n            font-size: 14px;\n            width: 160px;\n            box-sizing: border-box;\n            cursor: default; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen .top-header-right-panel-small-screen-item-container .top-header-right-panel-item-collapsed {\n              padding: 2px 10px;\n              margin: 6px 0;\n              border-radius: 1px;\n              cursor: pointer; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen .top-header-right-panel-small-screen-item-container .top-header-right-panel-item-collapsed:hover {\n                font-weight: 600; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen .top-header-right-panel-small-screen-item-container .top-header-right-panel-item-collapsed .product-list-container {\n                margin: 4px 8px;\n                font-weight: 400;\n                color: #666666; }\n  .container .top .top-header .top-header-right-panel .top-header-right-panel-small-screen .top-header-right-panel-small-screen-item-container .top-header-right-panel-item-collapsed .product-list-container .product-list {\n                  cursor: pointer; }\n  .container .top .top-header .top-header-right-panel .active {\n          background: black;\n          color: white;\n          border-bottom: 5px solid blue; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.currentPage = "Home";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.imageObjects = this.homepageData.images;
    };
    HeaderComponent.prototype.navigate = function (currentItem) {
        if (currentItem.length > 1) {
            this.showProductList = !this.showProductList;
            this.currentPage = "Product Categories";
        }
        else {
            this.currentPage = currentItem;
            switch (currentItem[0]) {
                case 'Home': {
                    this.router.navigate(['home']);
                    break;
                }
                case 'About Us': {
                    this.router.navigate(['about']);
                    break;
                }
                case 'Wallets': {
                    this.router.navigate(['wallets']);
                    break;
                }
                case 'Bags': {
                    this.router.navigate(['bags']);
                    break;
                }
                case 'Accessories': {
                    this.router.navigate(['accessories']);
                    break;
                }
                case 'Bespoke': {
                    this.router.navigate(['bespoke']);
                    break;
                }
                case 'Contact Us': {
                    this.router.navigate(['contactus']);
                    break;
                }
                case 'Infrastructure': {
                    this.router.navigate(['infrastructure']);
                    break;
                }
                case '': {
                    this.router.navigate(['home']);
                    break;
                }
                default: console.log("unknown", currentItem);
            }
        }
    };
    HeaderComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "currentPage", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header [currentPage]=\"currentPage\"></header>\n  <!-- <div class=\"large-image-container\" *ngIf=\"imageObjects.large_images\">\n    <div class=\"image-container\">\n      <span class=\"icon previous\" (click)=\"browseImages(-1)\">\n          <i class=\"fas fa-angle-left\"></i>\n      </span>\n      <img src=\"{{imageObjects.large_images[0].url}}\" alt=\"{{imageObjects.large_images[0].title}}\">\n      <div class=\"image-slider-panel\">\n        <div class=\"panel-image-container\" *ngIf=\"imageObjects.thumbnails\">\n          <div class=\"image\" *ngFor=\"let eachImage of imageObjects.thumbnails; index as i\" (click)=\"browseImages(i)\">\n            <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n          </div>\n        </div>\n      </div>\n      <span class=\"icon next\" (click)=\"browseImages(-2)\">\n          <i class=\"fas fa-angle-right\"></i>\n      </span>\n    </div>\n\n  </div> -->\n\n  <div class=\"large-image-container\" *ngIf=\"galleryOptions && imageObjects.large_images\">\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"imageObjects.large_images\"></ngx-gallery>\n</div>\n\n  <ng-container *ngFor=\"let eachImage of imageObjects.display_images; index as i\">\n    <div class=\"description-panel-container\" *ngIf=\"i%2 == 0\">\n      <div class=\"image-container\">\n        <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n      </div>\n      <div class=\"description-text-container\">\n        <div class=\"title\">\n          {{eachImage.title}}\n        </div>\n        <div class=\"text\">\n          {{eachImage.description}}\n        </div>\n      </div>\n    </div>\n    <div class=\"detail-panel-container\" *ngIf=\"i%2 != 0\">\n      <div class=\"description-text-container\">\n        <div class=\"title\">\n          {{eachImage.title}}\n        </div>\n        <div class=\"text\">\n          {{eachImage.description}}\n        </div>\n      </div>\n      <div class=\"image-container\">\n        <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n      </div>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0;\n  background-color: #f0f0f0; }\n  .container .large-image-container {\n    padding: 59px 0 0 0; }\n  .container .large-image-container .image-container {\n      position: relative; }\n  .container .large-image-container .image-container > img {\n        width: 100%;\n        display: block; }\n  .container .large-image-container .image-container .image-slider-panel {\n        background: transparent;\n        visibility: hidden;\n        position: absolute;\n        bottom: 0;\n        width: 100%; }\n  .container .large-image-container .image-container .image-slider-panel .panel-image-container {\n          text-align: center; }\n  .container .large-image-container .image-container .image-slider-panel .panel-image-container .image {\n            box-sizing: border-box;\n            margin: 5px;\n            display: inline-block; }\n  .container .large-image-container .image-container .image-slider-panel .panel-image-container .image > img {\n              padding: 5px;\n              width: 68px;\n              height: 68px;\n              display: block;\n              text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72); }\n  .container .large-image-container .image-container .image-slider-panel .panel-image-container .image:hover {\n              cursor: pointer;\n              border: 1px solid white; }\n  .container .large-image-container .image-container:hover .image-slider-panel {\n        visibility: visible; }\n  .container .large-image-container .image-container:hover .icon {\n        visibility: visible; }\n  .container .large-image-container .image-container .icon {\n        position: absolute;\n        visibility: hidden;\n        color: #ffffff;\n        top: 50%;\n        font-size: 90px;\n        opacity: .8;\n        text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72);\n        cursor: pointer; }\n  .container .large-image-container .image-container .icon > i {\n          font-weight: 600; }\n  .container .large-image-container .image-container .previous {\n        left: 10px; }\n  .container .large-image-container .image-container .next {\n        right: 10px; }\n  .container .description-panel-container {\n    display: block;\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%; }\n  @media screen and (min-width: 1025px) {\n      .container .description-panel-container {\n        display: flex; } }\n  @media screen and (min-width: 1025px) {\n      .container .description-panel-container .image-container {\n        width: 50%; } }\n  .container .description-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n      object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .container .description-panel-container .description-text-container {\n      background: black;\n      padding: 20px;\n      color: white; }\n  @media screen and (min-width: 1300px) {\n        .container .description-panel-container .description-text-container {\n          width: 50%; } }\n  .container .description-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .container .description-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n  .container .detail-panel-container {\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3); }\n  @media screen and (min-width: 1300px) {\n      .container .detail-panel-container {\n        display: flex; } }\n  @media screen and (min-width: 1300px) {\n      .container .detail-panel-container .image-container {\n        width: 50%; } }\n  .container .detail-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n         object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .container .detail-panel-container .description-text-container {\n      padding: 20px; }\n  @media screen and (min-width: 1300px) {\n        .container .detail-panel-container .description-text-container {\n          width: 50%; } }\n  .container .detail-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .container .detail-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.currentPage = "Home";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.imageObjects = this.homepageData.images;
        this.galleryOptions = [
            {
                width: '100%',
                height: '100%',
                fullWidth: true,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryAnimation"].Slide,
                imageSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryImageSize"].Contain,
                lazyLoading: false,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                imageBullets: true,
                thumbnails: false
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    HomeComponent.prototype.navigate = function (currentItem) {
        if (currentItem.length > 1)
            this.showProductList = !this.showProductList;
        else {
            switch (currentItem[0]) {
                case 'Home': {
                    this.router.navigate(['home']);
                    break;
                }
                case 'About Us': {
                    this.router.navigate(['about']);
                    break;
                }
                case 'Wallets': {
                    this.router.navigate(['wallets']);
                    break;
                }
                case 'Bags': {
                    this.router.navigate(['bags']);
                    break;
                }
                case 'Accessories': {
                    this.router.navigate(['accessories']);
                    break;
                }
                case 'Bespoke': {
                    this.router.navigate(['bespoke']);
                    break;
                }
                case 'Contact Us': {
                    this.router.navigate(['contactus']);
                    break;
                }
                case 'Infrastructure': {
                    this.router.navigate(['infrastructure']);
                    break;
                }
                case '': {
                    this.router.navigate(['home']);
                    break;
                }
                default: console.log("unknown", currentItem);
            }
        }
    };
    HomeComponent.prototype.browseImages = function (flag) {
        if (flag == -2) {
            var temp = this.imageObjects.large_images.shift();
            this.imageObjects.large_images.push(temp);
            temp = this.imageObjects.thumbnails.shift();
            this.imageObjects.thumbnails.push(temp);
            console.log(this.imageObjects.large_images[0].title);
        }
        else if (flag == -1) {
            var temp = this.imageObjects.large_images.pop();
            this.imageObjects.large_images.unshift(temp);
            temp = this.imageObjects.thumbnails.pop();
            this.imageObjects.thumbnails.unshift(temp);
            console.log(this.imageObjects.large_images[0].title);
        }
        else {
            var temp = this.imageObjects.large_images[flag];
            this.imageObjects.large_images[flag] = this.imageObjects.large_images[0];
            this.imageObjects.large_images[0] = temp;
            temp = this.imageObjects.thumbnails[flag];
            this.imageObjects.thumbnails[flag] = this.imageObjects.thumbnails[0];
            this.imageObjects.thumbnails[0] = temp;
            console.log(this.imageObjects.large_images[0].title);
        }
    };
    HomeComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/infrastructure.component.html":
/*!**************************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <header [currentPage]=\"currentPage\"></header>\n\n  <div class=\"large-image-container\" *ngIf=\"imageObjects.infrastructure[0]\">\n      <div class=\"image-container\">\n          <img src=\"{{imageObjects.infrastructure[0].url}}\" alt=\"{{imageObjects.infrastructure[0].title}}\">\n          <div class=\"image-slider-panel\"></div>\n      </div>\n  </div>\n\n  <ng-container *ngFor=\"let eachImage of imageObjects.infrastructure_display_images; index as i\">\n      <div class=\"description-panel-container\" *ngIf=\"i%2 != 0\">\n          <div class=\"image-container\">\n              <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n          </div>\n          <div class=\"description-text-container\">\n              <div class=\"title\">\n                  {{eachImage.title}}\n              </div>\n              <div class=\"text\">\n                  {{eachImage.description}}\n              </div>\n          </div>\n      </div>\n      <div class=\"detail-panel-container\" *ngIf=\"i%2 == 0\">\n          <div class=\"description-text-container\">\n              <div class=\"title\">\n                  {{eachImage.title}}\n              </div>\n              <div class=\"text\">\n                  {{eachImage.description}}\n              </div>\n          </div>\n          <div class=\"image-container\">\n              <img src=\"{{eachImage.url}}\" alt=\"{{eachImage.title}}\">\n          </div>\n      </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/infrastructure/infrastructure.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-container {\n  background-color: #f0f0f0; }\n  .about-container .large-image-container {\n    padding: 59px 0 0 0; }\n  .about-container .large-image-container .image-container {\n      position: relative; }\n  .about-container .large-image-container .image-container > img {\n        width: 100%;\n        display: block; }\n  .about-container .large-image-container .image-container .image-slider-panel {\n        background: transparent;\n        visibility: hidden;\n        position: absolute;\n        bottom: 0;\n        width: 100%; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container {\n          text-align: center; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image {\n            box-sizing: border-box;\n            margin: 5px;\n            display: inline-block; }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image > img {\n              padding: 5px;\n              width: 68px;\n              height: 68px;\n              display: block;\n              text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72); }\n  .about-container .large-image-container .image-container .image-slider-panel .panel-image-container .image:hover {\n              cursor: pointer;\n              border: 1px solid white; }\n  .about-container .large-image-container .image-container:hover .image-slider-panel {\n        visibility: visible; }\n  .about-container .large-image-container .image-container:hover .icon {\n        visibility: visible; }\n  .about-container .large-image-container .image-container .icon {\n        position: absolute;\n        visibility: hidden;\n        color: #ffffff;\n        top: 50%;\n        font-size: 90px;\n        opacity: .8;\n        text-shadow: -3px 3px 9px rgba(0, 0, 0, 0.72);\n        cursor: pointer; }\n  .about-container .large-image-container .image-container .icon > i {\n          font-weight: 600; }\n  .about-container .large-image-container .image-container .previous {\n        left: 10px; }\n  .about-container .large-image-container .image-container .next {\n        right: 10px; }\n  .about-container .description-panel-container {\n    display: block;\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%; }\n  .about-container .description-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n      object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .about-container .description-panel-container .description-text-container {\n      background: black;\n      padding: 20px;\n      color: white; }\n  .about-container .description-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .about-container .description-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n  .about-container .detail-panel-container {\n    justify-content: center;\n    margin: 20px auto;\n    width: 70%;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3); }\n  .about-container .detail-panel-container .image-container > img {\n      display: block;\n      -o-object-fit: cover;\n         object-fit: cover;\n      height: 100%;\n      width: 100%; }\n  .about-container .detail-panel-container .description-text-container {\n      padding: 20px; }\n  .about-container .detail-panel-container .description-text-container > .title {\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 26px; }\n  .about-container .detail-panel-container .description-text-container > .text {\n        font-size: 14px;\n        font-weight: 100;\n        padding-top: 10px;\n        letter-spacing: 1.25px;\n        line-height: 20px; }\n"

/***/ }),

/***/ "./src/app/infrastructure/infrastructure.component.ts":
/*!************************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.component.ts ***!
  \************************************************************/
/*! exports provided: InfrastructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureComponent", function() { return InfrastructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfrastructureComponent = /** @class */ (function () {
    function InfrastructureComponent(router) {
        this.router = router;
        this.currentPage = "Infrastructure";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    InfrastructureComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.imageObjects = this.homepageData.images;
    };
    InfrastructureComponent.prototype.navigate = function (currentItem) {
        if (currentItem.length > 1)
            this.showProductList = !this.showProductList;
        else {
            switch (currentItem[0]) {
                case 'Home': {
                    this.router.navigate(['home']);
                    break;
                }
                case 'About Us': {
                    this.router.navigate(['about']);
                    break;
                }
                case 'Wallets': {
                    this.router.navigate(['wallets']);
                    break;
                }
                case 'Bags': {
                    this.router.navigate(['bags']);
                    break;
                }
                case 'Accessories': {
                    this.router.navigate(['accessories']);
                    break;
                }
                case 'Bespoke': {
                    this.router.navigate(['bespoke']);
                    break;
                }
                case 'Contact Us': {
                    this.router.navigate(['contactus']);
                    break;
                }
                case 'Infrastructure': {
                    this.router.navigate(['infrastructure']);
                    break;
                }
                case '': {
                    this.router.navigate(['home']);
                    break;
                }
                default: console.log("unknown", currentItem);
            }
        }
    };
    InfrastructureComponent.prototype.showHideRightPanel = function () {
        this.showHideRightPanelFlag = !this.showHideRightPanelFlag;
    };
    InfrastructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infrastructure',
            template: __webpack_require__(/*! ./infrastructure.component.html */ "./src/app/infrastructure/infrastructure.component.html"),
            styles: [__webpack_require__(/*! ./infrastructure.component.scss */ "./src/app/infrastructure/infrastructure.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InfrastructureComponent);
    return InfrastructureComponent;
}());



/***/ }),

/***/ "./src/app/wallets/wallets.component.html":
/*!************************************************!*\
  !*** ./src/app/wallets/wallets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bags-container\">\n  <header [currentPage]=\"currentPage\"></header>\n  <div class=\"bags-content\">\n      \n  <div class=\"bags-main-text\">\n      Lorem ipsum fhreighiyehvrte fersyvbyerbe cerivbyerbvuytrb\n  </div>\n\n  <div class=\"each-style-gallery\" *ngFor=\"let eachStyle of stylesList; index as i\">\n      <div class=\"gallery-attempt\" *ngIf=\"galleryOptions\">\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"eachStyle.images\"></ngx-gallery>\n      </div>\n  </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/wallets/wallets.component.scss":
/*!************************************************!*\
  !*** ./src/app/wallets/wallets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bags-container {\n  background-color: #f0f0f0; }\n  .bags-container .bags-content {\n    padding-top: 59px; }\n  .bags-container .bags-content .bags-main-text {\n      padding: 20px 0;\n      justify-content: center;\n      margin: 20px auto;\n      width: 70%;\n      background-color: black;\n      color: white;\n      text-align: center; }\n  .bags-container .bags-content .each-style-gallery {\n      justify-content: center;\n      margin: 20px auto;\n      width: 70%;\n      background-color: black;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/wallets/wallets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wallets/wallets.component.ts ***!
  \**********************************************/
/*! exports provided: WalletsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsComponent", function() { return WalletsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletsComponent = /** @class */ (function () {
    function WalletsComponent(router) {
        this.router = router;
        this.currentPage = "Wallets";
        this.showHideRightPanelFlag = false;
        this.showProductList = false;
    }
    WalletsComponent.prototype.ngOnInit = function () {
        this.homepageData = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.linkList = this.homepageData.page_list;
        this.stylesList = this.homepageData.images.walletstyles;
        this.galleryOptions = [
            {
                width: '555px',
                height: '700px',
                thumbnailsColumns: 3,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryAnimation"].Slide,
                imageSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryImageSize"].Contain,
                lazyLoading: false
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    WalletsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallets',
            template: __webpack_require__(/*! ./wallets.component.html */ "./src/app/wallets/wallets.component.html"),
            styles: [__webpack_require__(/*! ./wallets.component.scss */ "./src/app/wallets/wallets.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WalletsComponent);
    return WalletsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\code\aicreations\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map