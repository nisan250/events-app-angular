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
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'events/new', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["CreateEventComponent"], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventsListComponent"],
        resolve: { events: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventsListResolverService"] } },
    { path: 'events/:id', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventDetailsComponent"], canActivate: [_events_index__WEBPACK_IMPORTED_MODULE_2__["EventRouteActivatorService"]] },
    { path: 'event/session/new', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["CreateSessionComponent"] },
    { path: 'demo', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'license', component: _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_5__["LicensesComponent"] },
    { path: '404', component: _errors_error_404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/index */ "./src/app/events/index.ts");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/index */ "./src/app/common/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/navigation/navigation.component */ "./src/app/main/navigation/navigation.component.ts");
/* harmony import */ var _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./licenses/licenses.component */ "./src/app/licenses/licenses.component.ts");
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _errors_error_404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./errors/error-404.component */ "./src/app/errors/error-404.component.ts");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _events_event_details_create_session_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./events/event-details/create-session.component */ "./src/app/events/event-details/create-session.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_10__["DemoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _main_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_13__["LicensesComponent"],
                _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _main_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["EventsListComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["EventThumbnailComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["EventDetailsComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["CreateEventComponent"],
                _events_event_details_create_session_component__WEBPACK_IMPORTED_MODULE_19__["CreateSessionComponent"],
                _errors_error_404_component__WEBPACK_IMPORTED_MODULE_17__["Error404Component"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["SessionListComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_8__["CollapsibleWellComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["DurationPipe"],
                _common_index__WEBPACK_IMPORTED_MODULE_8__["SimpleModalComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_8__["ModalTriggerDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ],
            providers: [
                _events_index__WEBPACK_IMPORTED_MODULE_7__["EventService"],
                _events_index__WEBPACK_IMPORTED_MODULE_7__["EventRouteActivatorService"],
                // we suppling the string canDeactivateCreateEvent and attaching a function
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
                _events_index__WEBPACK_IMPORTED_MODULE_7__["EventsListResolverService"],
                _user_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                // ToastrService,
                { provide: _common_index__WEBPACK_IMPORTED_MODULE_8__["TOASTR_TOKEN"], useValue: toastr },
                { provide: _common_index__WEBPACK_IMPORTED_MODULE_8__["JQ_TOKEN"], useValue: jQuery }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('you have not saved this event. prees ok to leave.');
    }
    return true;
}


/***/ }),

/***/ "./src/app/common/collapsible-well.component.html":
/*!********************************************************!*\
  !*** ./src/app/common/collapsible-well.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div (click)=\"toggleContent()\" class=\"well pointable\">\n  <h4 class=\"well-title\">{{title}}</h4>\n  <div class=\"well-body\">\n      <ng-content *ngIf=\"visible\"></ng-content>\n  </div>\n</div> -->\n<div (click)=\"toggleContent()\" class=\"well pointable\">\n    <h4 class=\"well-title\">\n     <ng-content select=\"[well-title]\"></ng-content>\n    </h4>\n    <ng-content select=\"[well-body]\" *ngIf=\"visible\" select=\".body\"></ng-content>\n  </div>\n"

/***/ }),

/***/ "./src/app/common/collapsible-well.component.scss":
/*!********************************************************!*\
  !*** ./src/app/common/collapsible-well.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".well {\n  background: #6c757db5;\n  border: 1px solid  #6c757d;\n  margin: 22px 0 0 0;\n  cursor: pointer; }\n\n.well-title {\n  background: #6c757d;\n  color: #fafafa;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbW1vblxcY29sbGFwc2libGUtd2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQiwyQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLGVBQWM7RUFDZCxVQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29sbGFwc2libGUtd2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkYjU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgICM2Yzc1N2Q7XHJcbiAgbWFyZ2luOiAyMnB4IDAgMCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ud2VsbC10aXRsZSB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBjb2xvcjogI2ZhZmFmYTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/collapsible-well.component.ts":
/*!******************************************************!*\
  !*** ./src/app/common/collapsible-well.component.ts ***!
  \******************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapsibleWellComponent = /** @class */ (function () {
    function CollapsibleWellComponent() {
        // @Input() title: string;
        this.visible = true;
    }
    CollapsibleWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    CollapsibleWellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-collapsible-well',
            template: __webpack_require__(/*! ./collapsible-well.component.html */ "./src/app/common/collapsible-well.component.html"),
            styles: [__webpack_require__(/*! ./collapsible-well.component.scss */ "./src/app/common/collapsible-well.component.scss")]
        })
    ], CollapsibleWellComponent);
    return CollapsibleWellComponent;
}());



/***/ }),

/***/ "./src/app/common/index.ts":
/*!*********************************!*\
  !*** ./src/app/common/index.ts ***!
  \*********************************/
/*! exports provided: JQ_TOKEN, TOASTR_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jQuery.service */ "./src/app/common/jQuery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return _jQuery_service__WEBPACK_IMPORTED_MODULE_0__["JQ_TOKEN"]; });

/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toastr.service */ "./src/app/common/toastr.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return _toastr_service__WEBPACK_IMPORTED_MODULE_1__["TOASTR_TOKEN"]; });

/* harmony import */ var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapsible-well.component */ "./src/app/common/collapsible-well.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__["CollapsibleWellComponent"]; });

/* harmony import */ var _simple_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-modal.component */ "./src/app/common/simple-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return _simple_modal_component__WEBPACK_IMPORTED_MODULE_3__["SimpleModalComponent"]; });

/* harmony import */ var _modal_trigger_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-trigger.directive */ "./src/app/common/modal-trigger.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return _modal_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["ModalTriggerDirective"]; });








/***/ }),

/***/ "./src/app/common/jQuery.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/jQuery.service.ts ***!
  \******************************************/
/*! exports provided: JQ_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return JQ_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('jQuery');


/***/ }),

/***/ "./src/app/common/modal-trigger.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/common/modal-trigger.directive.ts ***!
  \***************************************************/
/*! exports provided: ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return ModalTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jQuery.service */ "./src/app/common/jQuery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import $ from 'jquery';
var ModalTriggerDirective = /** @class */ (function () {
    function ModalTriggerDirective(ref, $) {
        this.$ = $;
        // we want the actual dom element and not just the wrapper.
        this.el = ref.nativeElement;
    }
    ModalTriggerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.addEventListener('click', function (e) {
            // $(document).ready(function() {
            // NOT GENERIC generic
            // $('#simple-modal').modal('show');
            // $('#simple-modal').removeClass('fade').addClass('in d-block');
            // this.$('#simple-modal').removeClass('fade').addClass('in d-block');
            // this.$('#simple-modal').modal({});
            // });
            // MORE GENERIC
            _this.$("#" + _this.aaModalTrigger).modal({});
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalTriggerDirective.prototype, "aaModalTrigger", void 0);
    ModalTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[aaModalTrigger]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_jQuery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], ModalTriggerDirective);
    return ModalTriggerDirective;
}());



/***/ }),

/***/ "./src/app/common/simple-modal.component.html":
/*!****************************************************!*\
  !*** ./src/app/common/simple-modal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{elementId}}\" class=\"modal fade\" tabindex=\"-1\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span>&times;</span>\n          </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/simple-modal.component.scss":
/*!****************************************************!*\
  !*** ./src/app/common/simple-modal.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  height: 250px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbW1vblxcc2ltcGxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaW1wbGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/common/simple-modal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/common/simple-modal.component.ts ***!
  \**************************************************/
/*! exports provided: SimpleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return SimpleModalComponent; });
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

var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent() {
    }
    SimpleModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "elementId", void 0);
    SimpleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-simple-modal',
            template: __webpack_require__(/*! ./simple-modal.component.html */ "./src/app/common/simple-modal.component.html"),
            styles: [__webpack_require__(/*! ./simple-modal.component.scss */ "./src/app/common/simple-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());



/***/ }),

/***/ "./src/app/common/toastr.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/toastr.service.ts ***!
  \******************************************/
/*! exports provided: TOASTR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return TOASTR_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// import { toastr } from 'toastr/build/';

// import { OpaqueToken } from '@angular/core';
// export let TOASTR_TOKEN = new OpaqueToken('toastr');
var TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('toastr');
// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title);
//   }
//   info(message: string, title?: string) {
//     toastr.info(message, title);
//   }
//   warning(message: string, title?: string) {
//     toastr.warning(message, title);
//   }
//   error(message: string, title?: string) {
//     toastr.error(message, title);
//   }
// }


/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h2>{{pageTitle}}</h2>\n\n<div class=\"d-flex flex-row\">\n\n  <div class=\"col-sm col-sm-auto\">\n    <p>\n      checking external stuff\n    </p>\n    <ul class=\"list-group list-group-flush\">Libraries\n        <li class=\"list-group-item\">bootstrap (style)</li>\n        <li class=\"list-group-item\">ngx-bootstrap (js)</li>\n      </ul>\n  </div>\n\n  <div class=\"col\">\n    <!--Body content-->\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <!-- <button (click)=\"handleClick('Hola')\">toastr notification with external library</button> -->\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <button type=\"button\" class=\"btn\">Basic</button>\n        <button type=\"button\" class=\"btn btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-link\">Link</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n          ToolTip Button :\n          <button type=\"button\" class=\"btn btn-primary\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n          Button with tooltip\n          </button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <p>Carousel :</p>\n          <carousel>\n            <slide>\n              <img src=\"assets/img/temp/1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"assets/img/temp/2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"assets/img/temp/3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n      </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"card\" style=\"width: 20rem;\">\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Card title</h4>\n                      <p class=\"card-text\">Some quick example text ...</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-8\">\n                  <h1>Example heading\n                    <span class=\"badge badge-secondary\">New</span>\n                  </h1>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n</div>\n</div>\n</div>\n"

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
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/toastr.service */ "./src/app/common/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { ToastrService } from '../common/toastr.service';
var DemoComponent = /** @class */ (function () {
    // constructor(private toastrService: ToastrService) { }
    function DemoComponent(toastr) {
        this.toastr = toastr;
        this.pageTitle = 'Demo Page - playground area';
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.handleClick = function () {
        // this.toastrService.success('YOOHOOOO');
        this.toastr.success('YOOHOOOO');
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_common_toastr_service__WEBPACK_IMPORTED_MODULE_1__["TOASTR_TOKEN"])),
        __metadata("design:paramtypes", [Object])
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

module.exports = "<h2>{{pageTitle}}</h2>\n\n<div class=\"col-md-6\">\n  <form #newEventForm=\"ngForm\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\n      <label for=\"eventName\">Event Name:</label>\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\n      <input (ngModel)=\"name\" name=\"name\" required id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name of your event...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\n      <label for=\"eventDate\">Event Date:</label>\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\n      <input (ngModel)=\"date\" name=\"date\" required id=\"eventDate\" type=\"text\" class=\"form-control\" placeholder=\"format (mm/dd/yyyy)...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\n      <label for=\"eventTime\">Event Time:</label>\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\n      <input (ngModel)=\"time\" name=\"time\" required id=\"eventTime\" type=\"text\" class=\"form-control\" placeholder=\"start and end time...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\n      <label for=\"eventPrice\">Event Price:</label>\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\n      <input (ngModel)=\"price\" name=\"price\" required id=\"eventPrice\" type=\"text\" type=\"number\" class=\"form-control\" placeholder=\"event price...\" />\n    </div>\n\n    <div ngModelGroup=\"location\">\n        <div class=\"form-group\">\n        <label for=\"address\">Event Location:</label>\n        <input (ngModel)=\"address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address of event...\" />\n        </div>\n        <div class=\"row\">\n        <div class=\"col-md-6\">\n            <input (ngModel)=\"city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City...\" />\n        </div>\n        <div class=\"col-md-6\" >\n            <input (ngModel)=\"country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country...\" />\n        </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"onlineUrl\">Online Url:</label>\n      <input (ngModel)=\"onlineUrl\" name=\"onlineUrl\" id=\"onlineUrl\" type=\"text\" class=\"form-control\" placeholder=\"Online Url...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\n      <label for=\"imageUrl\">Image:</label>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\n      <input (ngModel)=\"imageUrl\" name=\"imageUrl\" required pattern=\".*\\/.*.(png|jpg)\" id=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"url of image...\" />\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls.imageUrl?.value\"/>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" [disabled]=\"newEventForm.invalid\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/events/create-event.component.scss":
/*!****************************************************!*\
  !*** ./src/app/events/create-event.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\n  float: right;\n  color: #E05c65;\n  padding-left: 10px; }\n\n.error input {\n  background-color: #E3c3c5; }\n\n.error ::-webkit-input-placeholder {\n  color: #999; }\n\n.error ::-moz-input-placeholder {\n  color: #999; }\n\n.error :-moz-input-placeholder {\n  color: #999; }\n\n.error :ms-input-placeholder {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGV2ZW50c1xcY3JlYXRlLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGVBQWM7RUFDZCxtQkFBa0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkFDRixFQUFDOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2NyZWF0ZS1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImVtIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjRTA1YzY1O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmVycm9yIGlucHV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojRTNjM2M1XHJcbiAgICB9XHJcbiAgICAuZXJyb3IgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgICAuZXJyb3IgOjotbW96LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgICAuZXJyb3IgOi1tb3otaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICAgIC5lcnJvciA6bXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICAgICJdfQ== */"

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
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");
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
    function CreateEventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.pageTitle = 'Create an Event';
        this.isDirty = true;
    }
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/events/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.scss */ "./src/app/events/create-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/create-session.component.html":
/*!********************************************************************!*\
  !*** ./src/app/events/event-details/create-session.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <h3>Create Session</h3>\n</div>\n<div class=\"col-md-6\">\n  <form [formGroup]=\"newSessionForm\" (ngSubmit)=\"saveSession(newSessionForm.value)\" autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{error: name.invalid && name.dirty}\">\n      <label for=\"sessionName\">Session Name:</label>\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\n      <input formControlName=\"name\" id=\"sessionName\" type=\"text\" class=\"form-control\" placeholder=\"session name...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{error: presenter.invalid && presenter.dirty}\">\n      <label for=\"eventDate\">Presenter:</label>\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\n      <input formControlName=\"presenter\" id=\"presenter\" type=\"text\" class=\"form-control\" placeholder=\"presenter...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{error: duration.invalid && duration.dirty}\">\n      <label for=\"duration\">Duration:</label>\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\n      <select formControlName=\"duration\" class=\"form-control\">\n        <option value=\"\">select duration...</option>\n        <option value=\"1\">Half Hour</option>\n        <option value=\"2\">1 Hour</option>\n        <option value=\"3\">Half Day</option>\n        <option value=\"4\">Full Day</option>\n      </select>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{error: level.invalid && level.dirty}\">\n      <label for=\"level\">Level:</label>\n      <em *ngIf=\"level.invalid && level.dirty\">Required</em>\n      <select formControlName=\"level\" class=\"form-control\">\n        <option value=\"\">select level...</option>\n        <option value=\"Beginner\">Beginner</option>\n        <option value=\"Intermediate\">Intermediate</option>\n        <option value=\"Advanced\">Advanced</option>\n      </select>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{error: abstract.invalid && abstract.dirty}\">\n      <label for=\"abstract\">Abstract:</label>\n      <em *ngIf=\"(abstract.invalid && abstract.dirty && abstract.errors.required)\">Required</em>\n      <em *ngIf=\"(abstract.invalid && abstract.dirty && abstract.errors.maxLength)\">Cannot exceed 400 characters</em>\n      <em *ngIf=\"(abstract.invalid && abstract.dirty && abstract.errors.restrictedWords)\">Restricted words found:  {{abstract.errors.restrictedWords}}</em>\n      <textarea formControlName=\"abstract\" id=\"abstract\" rows=3 class=\"form-control\" placeholder=\"abstract...\"></textarea>\n      <em>dont type here the words \"foo\" or \"bar\"</em>\n    </div>\n    <button type=\"submit\" [disabled]=\"newSessionForm.invalid\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/events/event-details/create-session.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/events/event-details/create-session.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\n  float: right;\n  color: #E05c65;\n  padding-left: 10px; }\n\n.error input, .error input, .error textarea {\n  background-color: #E3c3c5; }\n\n.error ::-webkit-input-placeholder {\n  color: #999; }\n\n.error ::-moz-input-placeholder {\n  color: #999; }\n\n.error :-moz-input-placeholder {\n  color: #999; }\n\n.error :ms-input-placeholder {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbHMvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcZXZlbnRzXFxldmVudC1kZXRhaWxzXFxjcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixlQUFjO0VBQ2QsbUJBQWtCLEVBQ2pCOztBQUNEO0VBQ0UsMEJBQ0YsRUFBQzs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudC1kZXRhaWxzL2NyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZW0ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI0UwNWM2NTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5lcnJvciBpbnB1dCwgLmVycm9yIGlucHV0LCAuZXJyb3IgdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTNjM2M1XHJcbiAgfVxyXG4gIC5lcnJvciA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIC5lcnJvciA6Oi1tb3otaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIC5lcnJvciA6LW1vei1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiAgLmVycm9yIDptcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/events/event-details/create-session.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/create-session.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return CreateSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/index */ "./src/app/events/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSessionComponent = /** @class */ (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelAddSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.presenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.abstract = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400), Object(_shared_index__WEBPACK_IMPORTED_MODULE_2__["restrictedWords"])(['foo', 'bar'])]);
        this.newSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formVAlues) {
        var session = {
            id: undefined,
            name: formVAlues.name,
            duration: +formVAlues.duration,
            level: formVAlues.level,
            presenter: formVAlues.presenter,
            abstract: formVAlues.abstract,
            voters: [],
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-create-session',
            template: __webpack_require__(/*! ./create-session.component.html */ "./src/app/events/event-details/create-session.component.html"),
            styles: [__webpack_require__(/*! ./create-session.component.scss */ "./src/app/events/event-details/create-session.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n<div class=\"\">\n  <div class=\"\">\n    <h4> {{event?.name | uppercase}}</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img [src]=\"event.imageUrl\" width=200>\n    </div>\n    <div class=\"col-md-6\">\n      <div><strong>Date:</strong> {{event?.date | date: 'shortDate'}}</div>\n      <div [ngClass]=\"{'font-weight-bold': event?.time === '8:00 am'}\">\n        <strong>Time:</strong> {{event?.time}} -\n        <span [ngSwitch]=\"event?.time\">\n          <span *ngSwitchCase=\"'8:00 am'\">\n            Early Start\n          </span>\n          <span *ngSwitchCase=\"'10:00 am'\">\n            Late Start\n          </span>\n          <span *ngSwitchDefault>\n            Normal Start\n          </span>\n        </span>\n      </div>\n      <div><strong>Price:</strong> {{event?.price | currency:'USD':true}}</div>\n    </div>\n    <div class=\"col-md-6\">\n      <address *ngIf=\"event?.location\">\n        <strong>Address:</strong><br />\n        {{event?.location?.address}}<br />\n        {{event?.location?.city}}, {{event?.location?.country}}\n      </address>\n      <div *ngIf=\"event?.onlineUrl\">\n          Online URL: <a href=\"event?.onlineUrl\">{{event?.onlineUrl}}</a>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h3 style=\"margin:0\">Sessions</h3>\n    </div>\n\n    <div class=\"col-md-7\">\n      <div class=\"btn-group btn-group-sm\" style=\"margin:0 10px\">\n        <button class=\"btn btn-default\" [class.active]=\"sortBy==='name'\" (click)=\"sortBy='name'\">By Name</button>\n        <button class=\"btn btn-default\" [class.active]=\"sortBy==='votes'\" (click)=\"sortBy='votes'\">By Votes</button>\n      </div>\n\n      <div class=\"btn-group btn-group-sm\">\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='all'\" (click)=\"filterBy='all'\">All</button>\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='beginner'\" (click)=\"filterBy='beginner'\">Beginner</button>\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='intermediate'\" (click)=\"filterBy='intermediate'\">Intermediate</button>\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='advanced'\" (click)=\"filterBy='advanced'\">Advanced</button>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <a (click)=\"addSession()\">Add Session</a>\n    </div>\n  </div>\n\n  <aa-session-list [sortBy]=\"sortBy\" [filterBy]=\"filterBy\" *ngIf=\"!addMode\" [sessions]=\"event?.sessions\"></aa-session-list>\n  <aa-create-session (saveNewSession)=\"saveNewSession($event)\" (cancelAddSession)=\"cancelAddSession()\" *ngIf=\"addMode\"></aa-create-session>\n</div>\n"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:not([href]):not([tabindex]) {\n  text-decoration: underline;\n  color: #a52a2a;\n  cursor: pointer; }\n\na:not([href]):not([tabindex]):hover {\n  text-decoration: none; }\n\n.btn-default {\n  margin: 0 10px;\n  box-shadow: 0 0 0 transparent;\n  background: #fafafa;\n  border: 2px solid #a9a9a9; }\n\n.active {\n  background: #ab9768; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbHMvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcZXZlbnRzXFxldmVudC1kZXRhaWxzXFxldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTBCO0VBQzFCLGVBQWM7RUFDZCxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGVBQWM7RUFDZCw4QkFBNkI7RUFDN0Isb0JBQW1CO0VBQ25CLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICNhNTJhMmE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2E5YTlhOTtcclxufVxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjYWI5NzY4O1xyXG59XHJcblxyXG5cclxuIl19 */"

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
        this.filterBy = 'all';
        this.sortBy = 'votes';
        this.pageTitle = 'Event Deatail';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        // console.log(this.route.snapshot.params['id']);
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.event = _this.eventService.getEvent(+params['id']);
        });
        // good only when i come from different component
        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    };
    // put us in "add" MODE
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        // return us the maximum session id;
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.upadteEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
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
/*! exports provided: CreateSessionComponent, EventDetailsComponent, EventRouteActivatorService, SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.component */ "./src/app/events/event-details/event-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailsComponent"]; });

/* harmony import */ var _event_route_activator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-route-activator.service */ "./src/app/events/event-details/event-route-activator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return _event_route_activator_service__WEBPACK_IMPORTED_MODULE_1__["EventRouteActivatorService"]; });

/* harmony import */ var _create_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-session.component */ "./src/app/events/event-details/create-session.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _create_session_component__WEBPACK_IMPORTED_MODULE_2__["CreateSessionComponent"]; });

/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-list.component */ "./src/app/events/event-details/session-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _session_list_component__WEBPACK_IMPORTED_MODULE_3__["SessionListComponent"]; });







/***/ }),

/***/ "./src/app/events/event-details/session-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\n  <div class=\"col-md-12\">\n    <aa-collapsible-well [title]=\"session.name\">\n      <div class=\"title\" well-title>\n          {{session.name}}\n          <!--class=\"glyphicon glyphicon-fire on-fire\"-->\n          <i *ngIf=\"session.voters.length > 2\" class=\"fa fa-fire fa-1x\" style=\"color: red\"></i>\n      </div>\n      <div class=\"body\" well-body>\n          <h6>{{session.presenter}}</h6>\n          <span>Duration: {{session.duration | duration}}</span><br />\n          <span>Level: {{session.level}}</span>\n          <div>{{session.abstract}}</div>\n      </div>\n    </aa-collapsible-well>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/event-details/session-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  padding: 10px; }\n\n.body {\n  padding: 10px;\n  color: #fafafa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbHMvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcZXZlbnRzXFxldmVudC1kZXRhaWxzXFxzZXNzaW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbHMvc2Vzc2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2ZhZmFmYTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/events/event-details/session-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.ts ***!
  \****************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
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

var SessionListComponent = /** @class */ (function () {
    function SessionListComponent() {
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        // console.log(this.sessions);
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.filterSessions = function (filter) {
        // console.log(filter);
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLowerCase() === filter;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "filterBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "sortBy", void 0);
    SessionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-session-list',
            template: __webpack_require__(/*! ./session-list.component.html */ "./src/app/events/event-details/session-list.component.html"),
            styles: [__webpack_require__(/*! ./session-list.component.scss */ "./src/app/events/event-details/session-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SessionListComponent);
    return SessionListComponent;
}());

// stateless functions
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}


/***/ }),

/***/ "./src/app/events/event-thumbnail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n      <h4> {{event?.name | uppercase}}</h4>\n    </div>\n    <div class=\"card-body\">\n      <img [src]=\"event.imageUrl\" width=100>\n      <div>Date: {{event?.date | date: 'shortDate'}}</div>\n      <div [ngClass]=\"{'font-weight-bold': event?.time === '8:00 am'}\">Time: {{event?.time}} -\n        <span [ngSwitch]=\"event?.time\">\n          <span *ngSwitchCase=\"'8:00 am'\">\n            Early Start\n          </span>\n          <span *ngSwitchCase=\"'10:00 am'\">\n            Late Start\n          </span>\n          <span *ngSwitchDefault>\n            Normal Start\n          </span>\n        </span>\n      </div>\n      <div>Price: {{event?.price | currency:'USD':true}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span>&nbsp;</span>\n        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">\n        Online URL: <a href=\"event?.onlineUrl\">{{event?.onlineUrl}}</a>\n      </div>\n      <!-- <button class=\"btn btn-primary\" (click)=\"handleClick()\">click</button> -->\n    </div>\n</div>\n"

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
/*! exports provided: CreateEventComponent, EventThumbnailComponent, EventsListResolverService, EventsListComponent, CreateSessionComponent, EventService, restrictedWords, DurationPipe, EventDetailsComponent, EventRouteActivatorService, SessionListComponent */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__["restrictedWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__["DurationPipe"]; });

/* harmony import */ var _event_details___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details/ */ "./src/app/events/event-details/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["CreateSessionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivatorService", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["EventRouteActivatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"]; });









/***/ }),

/***/ "./src/app/events/shared/duration.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/events/shared/duration.pipe.ts ***!
  \************************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, args) {
        switch (value) {
            case 1:
                return 'Half Hour';
            case 2:
                return 'One Hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
            default:
                return value.toString();
        }
    };
    DurationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'duration'
        })
    ], DurationPipe);
    return DurationPipe;
}());



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
    EventService.prototype.saveEvent = function (event) {
        event.id = 999;
        event.sessions = [];
        EVENTS.push(event);
    };
    EventService.prototype.upadteEvent = function (event) {
        var index = EVENTS.findIndex(function (x) { return x.id === event.id; });
        EVENTS[index] = event;
        // throw new Error('Method not implemented.');
    };
    EventService.prototype.searchSessions = function (searchTerm) {
        var term = searchTerm.toLowerCase();
        var results = [];
        EVENTS.forEach(function (event) {
            // results.push(event.map());
            var matchingSessions = event.sessions.filter(function (session) {
                return session.name.toLowerCase().indexOf(term) > -1;
            });
            matchingSessions = matchingSessions.map(function (session) {
                session.eventId = event.id;
                return session;
            });
            results = results.concat(matchingSessions);
        });
        // tslint:disable-next-line:prefer-const
        var emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        setTimeout(function () {
            emitter.emit(results);
        }, 100);
        return emitter;
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
        name: 'Angular Engage',
        date: new Date('9/26/2026'),
        time: '10:00 am',
        price: 299.99,
        imageUrl: 'assets/images/angularb.png',
        location: {
            address: 'Igal Alon 30',
            city: 'TLV',
            country: 'Israel'
        },
        sessions: [
            {
                id: 1,
                name: 'Angular Best Practices',
                presenter: 'Kyle Simpson',
                duration: 1,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges', 'vardaraz']
            },
            {
                id: 2,
                name: 'Angular Deployment',
                presenter: 'Tracy Lee',
                duration: 1,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['jackdaniel', 'nisansabag', 'jeffbridges', 'vardaraz']
            },
            {
                id: 3,
                name: 'Angular Performance',
                presenter: 'Kyle Simpson',
                duration: 2,
                level: 'Advanced',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: []
            },
            {
                id: 4,
                name: 'Angular On Breakfast',
                presenter: 'David Walsh',
                duration: 2,
                level: 'Advanced',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: []
            },
            {
                id: 5,
                name: 'Angular Now',
                presenter: 'Douglas Crockford',
                duration: 2,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges']
            }
        ]
    },
    {
        id: 2,
        name: 'ng-conf 2020',
        date: new Date('3/3/2020'),
        time: '9:00 am',
        price: 199.00,
        imageUrl: 'assets/images/ng-conf.png',
        location: {
            address: 'Igal Alon 100',
            city: 'TLV',
            country: 'Isreal'
        },
        sessions: [
            {
                id: 1,
                name: 'Angular Tests',
                presenter: 'David Walsh',
                duration: 4,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges']
            },
            {
                id: 2,
                name: 'Angular Firebase',
                presenter: 'David Walsh',
                duration: 3,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges', 'jackdaniel']
            },
            {
                id: 3,
                name: 'Angular 7 Updates',
                presenter: 'Wes Bos',
                duration: 2,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['vardaraz']
            },
            {
                id: 4,
                name: 'Content Projection',
                presenter: 'Kyle Simpson',
                duration: 1,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag']
            },
        ]
    },
    {
        id: 3,
        name: 'React Fire',
        date: new Date('5/4/2037'),
        time: '9:00 am',
        price: 359.00,
        imageUrl: 'assets/images/react.png',
        location: {
            address: 'Sokolov 50',
            city: 'TLV',
            country: 'Isreal'
        },
        sessions: [
            {
                id: 1,
                name: 'React Get Started',
                presenter: 'Kyle Simpson',
                duration: 2,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'vardaraz', 'jeffbridges']
            },
            {
                id: 2,
                name: 'Angular and React',
                presenter: 'Kyle Simpson',
                duration: 2,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'vardaraz']
            },
            {
                id: 3,
                name: 'React and Redux',
                presenter: 'Kyle Simpson',
                duration: 1,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'vardaraz', 'jackdaniel']
            },
            {
                id: 4,
                name: 'React on steroids',
                presenter: 'David Walsh',
                duration: 1,
                level: 'Advanced',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'vardaraz', 'jeffbridges', 'jackdaniel']
            },
            {
                id: 5,
                name: 'React Bits',
                presenter: 'David Walsh',
                duration: 2,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'vardaraz']
            },
            {
                id: 6,
                name: 'React Deep Dive',
                presenter: 'Douglas Crockford',
                duration: 2,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'vardaraz']
            },
        ]
    },
    {
        id: 4,
        name: 'All About Angular',
        date: new Date('6/10/2037'),
        time: '8:00 am',
        price: 1000.00,
        imageUrl: 'assets/images/angularb.png',
        location: {
            address: 'Hertsel 17',
            city: 'TLV',
            country: 'Isreal'
        },
        sessions: [
            {
                id: 1,
                name: 'Angula Get Strated',
                presenter: 'David Walsh',
                duration: 2,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges']
            },
            {
                id: 2,
                name: 'Great Angular',
                presenter: 'Kyle Simpson',
                duration: 2,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges', 'jackdaniel']
            },
            {
                id: 3,
                name: 'Angular on steroids',
                presenter: 'Paul Irish',
                duration: 3,
                level: 'Advanced',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['jeffbridges', 'jackdaniel']
            },
        ]
    },
    {
        id: 5,
        name: 'ng-tlv',
        date: new Date('2/10/2037'),
        time: '9:00 am',
        price: 550.00,
        imageUrl: 'assets/images/angularb.png',
        location: {
            address: 'Sokolov 222',
            city: 'TLV',
            country: 'Isreal'
        },
        sessions: [
            {
                id: 1,
                name: 'ng-bootstrap',
                presenter: 'Douglas Crockford',
                duration: 1,
                level: 'Intermediate',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges']
            },
            {
                id: 2,
                name: 'Angular 4',
                presenter: 'Paul Irish',
                duration: 2,
                level: 'Beginner',
                abstract: "Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,\n        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla\n        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit\n        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra\n        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,\n        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper\n        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida\n        convallis ullamcorper, in senectus.",
                voters: ['nisansabag', 'jeffbridges', 'jackdaniel']
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/events/shared/index.ts":
/*!****************************************!*\
  !*** ./src/app/events/shared/index.ts ***!
  \****************************************/
/*! exports provided: EventService, restrictedWords, DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.service */ "./src/app/events/shared/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });

/* harmony import */ var _restricted_words_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restricted-words-validator */ "./src/app/events/shared/restricted-words-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _restricted_words_validator__WEBPACK_IMPORTED_MODULE_1__["restrictedWords"]; });

/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duration.pipe */ "./src/app/events/shared/duration.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _duration_pipe__WEBPACK_IMPORTED_MODULE_2__["DurationPipe"]; });






/***/ }),

/***/ "./src/app/events/shared/restricted-words-validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/events/shared/restricted-words-validator.ts ***!
  \*************************************************************/
/*! exports provided: restrictedWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return restrictedWords; });
function restrictedWords(words) {
    return function (control) {
        if (!words) {
            return null;
        }
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(',') }
            : null;
    };
}
// private restrictedWords(control: FormControl): {[key: string]: any};
// restrictedWords(control: FormControl): {[key: string]: any} {
//   return control.value.includes('foo')
//     ? { 'restrictedWords': 'foo'}
//     : null;
// }


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

module.exports = "<footer class=\"footer-area fluid-container\">\n  <!-- <nav class=\"navbar navbar-expand-lg\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li>\n              <a  class=\"nav-link\" >\n\n              </a>\n          </li>\n      </ul>\n  </nav> -->\n\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav navbar-nav\">\n        <li ><a routerLinkActive=\"active\" class=\"nav-link\" [routerLink]=\"['/license']\">License</a></li>\n      </ul>\n      <div class=\"navbar-header\">\n          <div class=\"footer-copyright\">© 2018 Copyright:\n            <a [routerLink]=\"['/home']\"> Web Ninja NS</a>\n          </div>\n      </div>\n    </div>\n  </nav>\n\n\n</footer>\n"

/***/ }),

/***/ "./src/app/main/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-area {\n  background: #e7e7e7;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 14px; }\n\n.footer-area .copyright {\n  color: #2b3046; }\n\n.navbar {\n  padding: 0; }\n\na {\n  color: #97a2b0; }\n\nul a:not(.btn) {\n  color: #66615b; }\n\nul a.active:not(.btn) {\n  color: #ab9768; }\n\nul a:not(.btn):hover {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb290ZXIvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcbWFpblxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFDbkIseUNBQXdDO0VBQ3hDLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1hcmVhIHtcclxuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWFyZWEgLmNvcHlyaWdodCB7XHJcbiAgY29sb3I6ICMyYjMwNDY7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTdhMmIwO1xyXG59XHJcbnVsIGE6bm90KC5idG4pIHtcclxuICBjb2xvcjogIzY2NjE1YjtcclxufVxyXG51bCBhLmFjdGl2ZTpub3QoLmJ0bikge1xyXG4gIGNvbG9yOiAjYWI5NzY4O1xyXG59XHJcbnVsIGE6bm90KC5idG4pOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4iXX0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "<!-- Navigation -->\n<div class=\"navbar navbar-default navbar-dark bg-dark navbar-expand-lg p-0\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img class=\"company-logo\" height=70 src=\"assets/img/logo-cut.png\" alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse justify-content-between\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\"  routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\n          true}\">\n          <a  [routerLink]=\"['/events']\" class=\"nav-link\">All Events</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\n          true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/events/new']\">Create Event</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a [routerLink]=\"['/demo']\" class=\"nav-link\" >Demo</a>\n        </li>\n      </ul>\n\n      <div class=\"d-inline-flex\">\n        <form (ngSubmit)=\"searchSessions(searchTerm)\" id=\"searchForm\"  class=\"form-inline mr-sm-4\">\n          <div class=\"form-group\">\n            <input [(ngModel)]=\"searchTerm\" name=\"searchTerm\" type=\"text\" class=\"form-control mr-sm-2\" placeholder=\"Search Sessions\" >\n          </div>\n          <button class=\"btn btn-outline-secondary\" aaModalTrigger=\"searchResults\">\n            Search\n          </button>\n        </form>\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a *ngIf=\"!auth?.isAuthenticated()\" [routerLink]=\"['/user/login']\"  class=\"nav-link\"> Login</a>\n            <a *ngIf=\"auth?.isAuthenticated()\" [routerLink]=\"['/user/profile']\" class=\"nav-link\">Hi {{auth?.currentUser?.firstName}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<aa-simple-modal elementId=\"searchResults\" title=\"Matching Sessions\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let session of foundSessions\" [routerLink]=\"['/events', session.eventId]\">\n      {{session.name}}\n    </a>\n  </div>\n</aa-simple-modal>\n"

/***/ }),

/***/ "./src/app/main/navigation/navigation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/navigation/navigation.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link,\na.nav-link:not([href]) {\n  color: #fff;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.nav-link:hover, .nav-link:focus {\n  color: #ccc; }\n\n.nav-link:hover, .nav-link:focus {\n  color: #ccc; }\n\n.active .nav-link {\n  color: #ab9768; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9uYXZpZ2F0aW9uL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXG1haW5cXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURBOztFQUVFLFlBQVc7RUFFWCxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY29tcGFueS1sb2dvIHtcclxuLy8gICBoZWlnaHQ6IDg2cHg7XHJcbi8vICB9XHJcbi8vIC8vRjVGNkY2XHJcbi8vIC8vOTQ5MzkzXHJcbi8vIC8vOTg5Q0EzXHJcbi8vIC8vODU2NjVBXHJcbi8vIC8vM0YzOTNCXHJcbi8vIC8vI2U3ZTdlNyAjMTkxOTE5XHJcbi8vIC5uYXZiYXIge1xyXG4vLyAgIGJhY2tncm91bmQ6ICMyYjMwNDY7XHJcbi8vICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggMHB4IDBweCAjOWM5YzljO1xyXG4vLyB9XHJcbi8vIC5uYXZiYXIge1xyXG4vLyAgIC8vIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuLy8gICBwYWRkaW5nOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAubmF2LWl0ZW0ge1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBvdXRsaW5lOiAwO1xyXG4vLyB9XHJcbi8vIC5uYXYtbGluayxcclxuLy8gYS5uYXYtbGluazpub3QoW2hyZWZdKSB7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgLy8gbWFyZ2luOiAwO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vICAgb3BhY2l0eTogMC43O1xyXG4vLyB9XHJcblxyXG4vLyAubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluazpmb2N1cyB7XHJcbi8vICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG4vLyAuYWN0aXZlICAubmF2LWxpbmt7XHJcbi8vICAgY29sb3I6ICNhYjk3Njg7XHJcbi8vICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG5cclxuLy8gLnVzZXItbGluayB7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG5cclxuLy8gICBhIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG4ubmF2LWxpbmssXHJcbmEubmF2LWxpbms6bm90KFtocmVmXSkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8vIG1hcmdpbjogMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5hY3RpdmUgLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjYWI5NzY4O1xyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var src_app_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/events */ "./src/app/events/index.ts");
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
    function NavigationComponent(auth, eventService) {
        this.auth = auth;
        this.eventService = eventService;
        this.searchTerm = '';
        // console.log(auth, 'auth');
    }
    NavigationComponent.prototype.searchSessions = function (searchTerm) {
        var _this = this;
        this.eventService.searchSessions(searchTerm).subscribe(function (sessions) {
            _this.foundSessions = sessions;
        });
        // this.eventService.searchSessions(searchTerm).pipe(map((sessions) => {
        //   this.foundSessions = sessions;
        //   console.log(this.foundSessions, '2');
        // })
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/main/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/main/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_events__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
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
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
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