(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/index */ "./src/app/events/index.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./licenses/licenses.component */ "./src/app/licenses/licenses.component.ts");
/* harmony import */ var _errors_error_404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/error-404.component */ "./src/app/errors/error-404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'events/new', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["CreateEventComponent"], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventsListComponent"],
        resolve: { events: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventsListResolverService"] } },
    { path: 'events/:id', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventDetailsComponent"], canActivate: [_events_index__WEBPACK_IMPORTED_MODULE_2__["EventRouteActivatorService"]] },
    { path: 'demo', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'license', component: _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_5__["LicensesComponent"] },
    { path: '404', component: _errors_error_404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    // { path: '**', component: HomeComponent},
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<!-- <div class=\"app-container d-flex flex-column\"> -->\n  <aa-header></aa-header>\n  <aa-main></aa-main>\n  <aa-footer></aa-footer>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-main-container {\n  overflow: auto;\n  flex-grow: 1;\n  background: #dbdbdb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGFBQVk7RUFDWixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1haW4tY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYmFja2dyb3VuZDogI2RiZGJkYjtcclxufVxyXG4iXX0= */"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'Events App Angular';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.app-container'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "true", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-root',
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
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/index */ "./src/app/events/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/navigation/navigation.component */ "./src/app/main/navigation/navigation.component.ts");
/* harmony import */ var _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./licenses/licenses.component */ "./src/app/licenses/licenses.component.ts");
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _errors_error_404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errors/error-404.component */ "./src/app/errors/error-404.component.ts");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["DemoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _main_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_11__["LicensesComponent"],
                _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _main_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_6__["EventsListComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_6__["EventThumbnailComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_6__["EventDetailsComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_6__["CreateEventComponent"],
                _errors_error_404_component__WEBPACK_IMPORTED_MODULE_15__["Error404Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ],
            providers: [
                _events_index__WEBPACK_IMPORTED_MODULE_6__["EventService"],
                _events_index__WEBPACK_IMPORTED_MODULE_6__["EventRouteActivatorService"],
                // we suppling the string canDeactivateCreateEvent and attaching a function
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
                _events_index__WEBPACK_IMPORTED_MODULE_6__["EventsListResolverService"],
                _user_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('you have not saved this event. prees ok to leave.');
    }
    return false;
}


/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h2>{{pageTitle}}</h2>\n\n<div class=\"d-flex flex-row\">\n\n  <div class=\"col-sm col-sm-auto\">\n    <p>\n      checking external stuff\n    </p>\n    <ul class=\"list-group list-group-flush\">Libraries\n        <li class=\"list-group-item\">bootstrap (style)</li>\n        <li class=\"list-group-item\">ngx-bootstrap (js)</li>\n      </ul>\n  </div>\n\n  <div class=\"col\">\n    <!--Body content-->\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <button type=\"button\" class=\"btn\">Basic</button>\n        <button type=\"button\" class=\"btn btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-link\">Link</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n          ToolTip Button :\n          <button type=\"button\" class=\"btn btn-primary\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n          Button with tooltip\n          </button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <p>Carousel :</p>\n          <carousel>\n            <slide>\n              <img src=\"assets/img/temp/1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"assets/img/temp/2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"assets/img/temp/3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n      </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"card\" style=\"width: 20rem;\">\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Card title</h4>\n                      <p class=\"card-text\">Some quick example text ...</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-8\">\n                  <h1>Example heading\n                    <span class=\"badge badge-secondary\">New</span>\n                  </h1>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border-radius: 6px;\n  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);\n  background-color: #f5f6f7;\n  color: #252422;\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9EOlxcYXBwc1xcZXZlbnRzLWFwcC1hbmd1bGFyL3NyY1xcYXBwXFxkZW1vXFxkZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLCtDQUE4QztFQUM5QywwQkFBeUI7RUFDekIsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvZGVtby9kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgyMDQsIDE5NywgMTg1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XHJcbiAgY29sb3I6ICMyNTI0MjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
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

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.pageTitle = 'Demo Page - playground area';
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.useToasterService = function (eventName) {
        console.log(eventName);
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/errors/error-404.component.ts":
/*!***********************************************!*\
  !*** ./src/app/errors/error-404.component.ts ***!
  \***********************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
            styles: ["\n    .errorMessage {\n      margin-top:150px;\n      font-size: 170px;\n      text-align: center;\n    }"]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/events/create-event.component.html":
/*!****************************************************!*\
  !*** ./src/app/events/create-event.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n<div>\n  <div>\n      create-event\n  </div>\n  <div>\n      <button class=\"btn btn-primary\">Save</button>\n      <button class=\"btn btn-warning\" (click)=\"goBack()\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/create-event.component.scss":
/*!****************************************************!*\
  !*** ./src/app/events/create-event.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jcmVhdGUtZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/events/create-event.component.ts":
/*!**************************************************!*\
  !*** ./src/app/events/create-event.component.ts ***!
  \**************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router) {
        this.router = router;
        this.pageTitle = 'Create an Event';
        this.isDirty = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent.prototype.goBack = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/events/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.scss */ "./src/app/events/create-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n<div class=\"card\">\n    <div class=\"card-header\">\n      <h4> {{event?.name}}</h4>\n    </div>\n    <div class=\"card-body\">\n      <img [src]=\"event.imageUrl\" width=200>\n      <div>Date: {{event?.date}}</div>\n      <div [ngClass]=\"{'font-weight-bold': event?.time === '8:00 am'}\">Time: {{event?.time}} -\n        <span [ngSwitch]=\"event?.time\">\n          <span *ngSwitchCase=\"'8:00 am'\">\n            Early Start\n          </span>\n          <span *ngSwitchCase=\"'10:00 am'\">\n            Late Start\n          </span>\n          <span *ngSwitchDefault>\n            Normal Start\n          </span>\n        </span>\n      </div>\n      <div>Price: {{event?.price}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span>&nbsp;</span>\n        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">\n        Online URL: <a href=\"event?.onlineUrl\">{{event?.onlineUrl}}</a>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/event.service */ "./src/app/events/shared/event.service.ts");
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



var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.pageTitle = 'Event Deatail';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        // console.log(this.route.snapshot.params['id']);
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    };
    EventDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-event-details',
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/events/event-details/event-details.component.html"),
            styles: [__webpack_require__(/*! ./event-details.component.scss */ "./src/app/events/event-details/event-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-route-activator.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/events/event-details/event-route-activator.service.ts ***!
  \***********************************************************************/
/*! exports provided: EventRouteActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return EventRouteActivatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/event.service */ "./src/app/events/shared/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// NS
// Guarding Against Route Activation
//  if a detail page not exist   than 404 will show
var EventRouteActivatorService = /** @class */ (function () {
    function EventRouteActivatorService(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouteActivatorService.prototype.canActivate = function (route) {
        console.log(route, 'this.route');
        var eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    };
    EventRouteActivatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventRouteActivatorService);
    return EventRouteActivatorService;
}());



/***/ }),

/***/ "./src/app/events/event-details/index.ts":
/*!***********************************************!*\
  !*** ./src/app/events/event-details/index.ts ***!
  \***********************************************/
/*! exports provided: EventDetailsComponent, EventRouteActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.component */ "./src/app/events/event-details/event-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailsComponent"]; });

/* harmony import */ var _event_route_activator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-route-activator.service */ "./src/app/events/event-details/event-route-activator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return _event_route_activator_service__WEBPACK_IMPORTED_MODULE_1__["EventRouteActivatorService"]; });





/***/ }),

/***/ "./src/app/events/event-thumbnail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n      <h4> {{event?.name}}</h4>\n    </div>\n    <div class=\"card-body\">\n      <img [src]=\"event.imageUrl\" width=100>\n      <div>Date: {{event?.date}}</div>\n      <div [ngClass]=\"{'font-weight-bold': event?.time === '8:00 am'}\">Time: {{event?.time}} -\n        <span [ngSwitch]=\"event?.time\">\n          <span *ngSwitchCase=\"'8:00 am'\">\n            Early Start\n          </span>\n          <span *ngSwitchCase=\"'10:00 am'\">\n            Late Start\n          </span>\n          <span *ngSwitchDefault>\n            Normal Start\n          </span>\n        </span>\n      </div>\n      <div>Price: {{event?.price}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span>&nbsp;</span>\n        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">\n        Online URL: <a href=\"event?.onlineUrl\">{{event?.onlineUrl}}</a>\n      </div>\n      <!-- <button class=\"btn btn-primary\" (click)=\"handleClick()\">click</button> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/event-thumbnail.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  cursor: pointer; }\n\n.card:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGV2ZW50c1xcZXZlbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/events/event-thumbnail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.ts ***!
  \*****************************************************/
/*! exports provided: EventThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return EventThumbnailComponent; });
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

var EventThumbnailComponent = /** @class */ (function () {
    function EventThumbnailComponent() {
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventThumbnailComponent.prototype.ngOnInit = function () {
    };
    EventThumbnailComponent.prototype.handleClick = function () {
        this.eventClick.emit(this.event.name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventThumbnailComponent.prototype, "eventClick", void 0);
    EventThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-event-thumbnail',
            template: __webpack_require__(/*! ./event-thumbnail.component.html */ "./src/app/events/event-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./event-thumbnail.component.scss */ "./src/app/events/event-thumbnail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/events/events-list-resolver.service.ts":
/*!********************************************************!*\
  !*** ./src/app/events/events-list-resolver.service.ts ***!
  \********************************************************/
/*! exports provided: EventsListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListResolverService", function() { return EventsListResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsListResolverService = /** @class */ (function () {
    function EventsListResolverService(eventService) {
        this.eventService = eventService;
    }
    EventsListResolverService.prototype.resolve = function () {
        // this.eventService.getAllEvents().map(res => res.json()).subscribe(items => console.log(items));
        this.eventService.getAllEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (events) {
            return events;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.json().error); })); // NOT WORKING
    };
    EventsListResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventsListResolverService);
    return EventsListResolverService;
}());



/***/ }),

/***/ "./src/app/events/events-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/events/events-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n<div class=\"card-columns\">\n    <aa-event-thumbnail\n      [event]=\"event\"\n      *ngFor=\"let event of events\"\n      [routerLink]=\"[ '/events', event.id ]\"\n      ></aa-event-thumbnail>\n</div>\n<!--(eventClick)=\"handleEventClicked($event)\"-->\n\n"

/***/ }),

/***/ "./src/app/events/events-list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/events/events-list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/events/events-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/events/events-list.component.ts ***!
  \*************************************************/
/*! exports provided: EventsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return EventsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");
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



var EventsListComponent = /** @class */ (function () {
    function EventsListComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.pageTitle = 'Events';
    }
    EventsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // we dont need that anymore  we get it from resolver
        this.eventService.getAllEvents().subscribe(function (events) {
            _this.events = events;
        });
        // console.log(this.route.snapshot.data, 'this.route.snapshot.data');
        // this.events = this.route.snapshot.data['events'];
        // setTimeout(() => {
        //   console.log(this.route.snapshot.data, 'this.route.snapshot.data');
        //   this.events = this.route.snapshot.data['events'];
        // }, 5000);
    };
    EventsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./events-list.component.html */ "./src/app/events/events-list.component.html"),
            styles: [__webpack_require__(/*! ./events-list.component.scss */ "./src/app/events/events-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventsListComponent);
    return EventsListComponent;
}());



/***/ }),

/***/ "./src/app/events/index.ts":
/*!*********************************!*\
  !*** ./src/app/events/index.ts ***!
  \*********************************/
/*! exports provided: CreateEventComponent, EventThumbnailComponent, EventsListResolverService, EventsListComponent, EventService, EventDetailsComponent, EventRouteActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event.component */ "./src/app/events/create-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return _create_event_component__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"]; });

/* harmony import */ var _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-thumbnail.component */ "./src/app/events/event-thumbnail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__["EventThumbnailComponent"]; });

/* harmony import */ var _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-list-resolver.service */ "./src/app/events/events-list-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListResolverService", function() { return _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__["EventsListResolverService"]; });

/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-list.component */ "./src/app/events/events-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return _events_list_component__WEBPACK_IMPORTED_MODULE_3__["EventsListComponent"]; });

/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/index */ "./src/app/events/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__["EventService"]; });

/* harmony import */ var _event_details___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details/ */ "./src/app/events/event-details/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["EventRouteActivatorService"]; });









/***/ }),

/***/ "./src/app/events/shared/event.service.ts":
/*!************************************************!*\
  !*** ./src/app/events/shared/event.service.ts ***!
  \************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Subject } from 'rxjs/RX';

var EventService = /** @class */ (function () {
    function EventService() {
        this.EventsUrl = 'api/events-data.json';
    }
    EventService.prototype.getAllEvents = function () {
        // let subject = new Subject();
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // return this.http.get(this.EventsUrl);
        setTimeout(function () {
            subject.next(EVENTS);
            subject.complete();
        }, 100);
        return subject;
    };
    EventService.prototype.getEvent = function (eventId) {
        return EVENTS.find(function (event) { return eventId === event.id; });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());

var EVENTS = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('2/10/2019'),
        time: '8:00 am',
        price: 599.99,
        imageUrl: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 pipes',
                presenter: 'Jermy White',
                duration: 2,
                level: 'begginer',
                abstract: 'blab bla bla blab bla bla blab bla bla ',
                voters: ['bradgreen', 'igorma', 'john']
            },
            {
                id: 1,
                name: 'Using Angular 5 components',
                presenter: 'Julia Shapira',
                duration: 3,
                level: 'expert',
                abstract: 'blab 2bla2 bla 2blab2 b2la bla blab bla bla ',
                voters: [, 'igorma', 'john']
            }
        ]
    },
    {
        id: 2,
        name: 'Angular meetup',
        date: new Date('3/11/2019'),
        time: '10:00 am',
        price: 399.99,
        imageUrl: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
        onlineUrl: 'http://demo-url',
        sessions: [
            {
                id: 1,
                name: 'Using Angular 6 pipes',
                presenter: 'Roberta White',
                duration: 2,
                level: 'begginer',
                abstract: 'blab bla bla blab bla bla blab bla bla ',
                voters: ['bradgreen', 'igorma', 'john']
            },
            {
                id: 1,
                name: 'Using Angular 7 components',
                presenter: 'Simon Shultz',
                duration: 3,
                level: 'expert',
                abstract: 'blab 2bla2 bla 2blab2 b2la bla blab bla bla ',
                voters: [, 'igorma', 'john']
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/events/shared/index.ts":
/*!****************************************!*\
  !*** ./src/app/events/shared/index.ts ***!
  \****************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.service */ "./src/app/events/shared/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });




/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n<div>\n       this is Home Page\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
    function HomeComponent() {
        this.pageTitle = 'Home';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/licenses/licenses.component.html":
/*!**************************************************!*\
  !*** ./src/app/licenses/licenses.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n<div>\n       this is the License and Agreament page\n</div>\n\n"

/***/ }),

/***/ "./src/app/licenses/licenses.component.scss":
/*!**************************************************!*\
  !*** ./src/app/licenses/licenses.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpY2Vuc2VzL2xpY2Vuc2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/licenses/licenses.component.ts":
/*!************************************************!*\
  !*** ./src/app/licenses/licenses.component.ts ***!
  \************************************************/
/*! exports provided: LicensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesComponent", function() { return LicensesComponent; });
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

var LicensesComponent = /** @class */ (function () {
    function LicensesComponent() {
        this.pageTitle = 'License Agreement';
    }
    LicensesComponent.prototype.ngOnInit = function () {
    };
    LicensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-licenses',
            template: __webpack_require__(/*! ./licenses.component.html */ "./src/app/licenses/licenses.component.html"),
            styles: [__webpack_require__(/*! ./licenses.component.scss */ "./src/app/licenses/licenses.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LicensesComponent);
    return LicensesComponent;
}());



/***/ }),

/***/ "./src/app/main/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-area d-flex justify-content-between\">\n  <nav class=\"pull-left\">\n      <ul>\n          <li>\n              <a [routerLink]=\"['/license']\">\n                  License\n              </a>\n          </li>\n      </ul>\n  </nav>\n  <div class=\"copyright pull-right\">\n      2018, made with\n      <i class=\"fa fa-heart heart\"></i>\n      by <a [routerLink]=\"['/home']\">Web Ninja NS</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/main/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-area {\n  background: #e7e7e7;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.footer-area nav ul a:not(.btn) {\n  color: #2b3046;\n  display: block;\n  margin-bottom: 3px; }\n\n.footer-area nav ul a:not(.btn) {\n  color: #66615b;\n  display: block;\n  margin-bottom: 3px; }\n\na {\n  color: #97a2b0; }\n\n.footer-area .copyright {\n  color: #2b3046;\n  padding: 10px 15px;\n  font-size: 14px;\n  white-space: nowrap;\n  margin: 15px 3px;\n  line-height: 20px;\n  text-align: center; }\n\n.footer-area nav ul li {\n  display: inline-block;\n  padding: 10px 15px;\n  margin: 15px 3px;\n  line-height: 20px;\n  text-align: center; }\n\n.footer-area a:hover, .footer-area a:focus {\n  color: #97a2b0;\n  text-decoration: none; }\n\n.footer-area nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb290ZXIvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcbWFpblxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFDbkIseUNBQXdDLEVBQ3pDOztBQUVEO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZUFBYztFQUNkLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsZUFBYztFQUNkLHNCQUFxQixFQUN0Qjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixVQUFTO0VBQ1QsV0FBVTtFQUNWLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYXJlYSB7XHJcbiAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZm9vdGVyLWFyZWEgbmF2IHVsIGE6bm90KC5idG4pIHtcclxuICBjb2xvcjogIzJiMzA0NjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLmZvb3Rlci1hcmVhIG5hdiB1bCBhOm5vdCguYnRuKSB7XHJcbiAgY29sb3I6ICM2NjYxNWI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjOTdhMmIwO1xyXG59XHJcbi5mb290ZXItYXJlYSAuY29weXJpZ2h0IHtcclxuICBjb2xvcjogIzJiMzA0NjtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luOiAxNXB4IDNweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1hcmVhIG5hdiB1bCBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBtYXJnaW46IDE1cHggM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyLWFyZWEgYTpob3ZlciwgLmZvb3Rlci1hcmVhIGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjOTdhMmIwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9vdGVyLWFyZWEgbmF2IHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.app-footer-container'),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "true", void 0);
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/main/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/main/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-area\">\n    <!-- <h1 class=\"text-center\">{{appTitle}}</h1> -->\n    <aa-navigation></aa-navigation>\n</header>\n"

/***/ }),

/***/ "./src/app/main/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-area {\n  background: #e7e7e7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9oZWFkZXIvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcbWFpblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlci1hcmVhIHtcclxuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.app-header-container'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "true", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-area p-3\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-area {\n  background: #dbdbdb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcYXBwc1xcZXZlbnRzLWFwcC1hbmd1bGFyL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CLEVBSXBCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYXJlYSB7XHJcbiAgYmFja2dyb3VuZDogI2RiZGJkYjtcclxuICAvLyBmbGV4OiAxIDEgYXV0bztcclxuICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAvLyBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.app-main-container'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "true", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/navigation/navigation.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/navigation/navigation.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg \"><!-- navbar-dark bg-dark fixed-top -->\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img class=\"company-logo\" src=\"assets/img/logo-cut.png\" alt=\"\">\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\" >\n          <li class=\"nav-item\"  routerLinkActive=\"active\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\n            true}\">\n            <a  [routerLink]=\"['/events']\" class=\"nav-link\">All Events</a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\n            true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/events/new']\">Create Event</a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a [routerLink]=\"['/demo']\" class=\"nav-link\" >Demo</a>\n          </li>\n          <li class=\"nav-item user-link\" routerLinkActive=\"active\">\n            <a *ngIf=\"!auth?.isAuthenticated()\" [routerLink]=\"['/user/login']\"  class=\"nav-link\" > Login</a>\n            <a *ngIf=\"auth?.isAuthenticated()\" [routerLink]=\"['/user/profile']\" class=\"nav-link\" >Hi {{auth?.currentUser?.firstName}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/main/navigation/navigation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/navigation/navigation.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-logo {\n  height: 86px; }\n\n.navbar {\n  background: #2b3046;\n  box-shadow: inset 0px -1px 0px 0px #9c9c9c; }\n\n.nav-item {\n  cursor: pointer;\n  outline: 0; }\n\n.nav-link,\na.nav-link:not([href]) {\n  color: #fff;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  opacity: 0.7; }\n\n.nav-link:hover, .nav-link:focus {\n  opacity: 1; }\n\n.active .nav-link {\n  color: #ab9768;\n  opacity: 1; }\n\n.user-link {\n  margin-left: 10px;\n  padding-left: 10px;\n  border-left: 1px solid rgba(255, 255, 255, 0.2); }\n\n.user-link a {\n    font-weight: 100;\n    text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9uYXZpZ2F0aW9uL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXG1haW5cXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ1o7O0FBT0Y7RUFDRSxvQkFBbUI7RUFDbkIsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixXQUFVLEVBQ1g7O0FBQ0Q7O0VBRUUsWUFBVztFQUVYLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwwQkFBeUI7RUFDekIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsZUFBYztFQUNkLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0RBQStDLEVBTWhEOztBQVREO0lBTUksaUJBQWdCO0lBQ2hCLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktbG9nbyB7XHJcbiAgaGVpZ2h0OiA4NnB4O1xyXG4gfVxyXG4vL0Y1RjZGNlxyXG4vLzk0OTM5M1xyXG4vLzk4OUNBM1xyXG4vLzg1NjY1QVxyXG4vLzNGMzkzQlxyXG4vLyNlN2U3ZTcgIzE5MTkxOVxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjMmIzMDQ2O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDBweCAwcHggIzljOWM5YztcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG4ubmF2LWxpbmssXHJcbmEubmF2LWxpbms6bm90KFtocmVmXSkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8vIG1hcmdpbjogMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmFjdGl2ZSAgLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjYWI5NzY4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi51c2VyLWxpbmsge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/navigation/navigation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(auth) {
        this.auth = auth;
        // console.log(auth, 'auth');
    }
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/main/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/main/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // constructor() { }
    AuthService.prototype.loginUser = function (userName, password) {
        // a call to the server and log the user in and than set the user propert. but for now...
        // setTimeout(() => {
        // }, 1000);
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: userName,
            lastName: 'sabag'
        };
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(
        // {
        // // providedIn: 'root'}
        )
    ], AuthService);
    return AuthService;
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

module.exports = __webpack_require__(/*! D:\apps\events-app-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map