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


// import { PreloadAllModules } from '@angular/router';





var routes = [
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'events/new', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["CreateEventComponent"], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventsListComponent"],
        resolve: { events: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventsListResolverService"] } },
    { path: 'events/:id', component: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventDetailsComponent"], resolve: { event: _events_index__WEBPACK_IMPORTED_MODULE_2__["EventResolverService"] } },
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
            // for downloading all modules before live
            // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
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
/* harmony import */ var _rxjs_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxjs-extensions */ "./src/app/rxjs-extensions.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/index */ "./src/app/events/index.ts");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/index */ "./src/app/common/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/navigation/navigation.component */ "./src/app/main/navigation/navigation.component.ts");
/* harmony import */ var _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./licenses/licenses.component */ "./src/app/licenses/licenses.component.ts");
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _errors_error_404_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./errors/error-404.component */ "./src/app/errors/error-404.component.ts");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _events_event_details_create_session_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./events/event-details/create-session.component */ "./src/app/events/event-details/create-session.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["DemoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _main_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
                _licenses_licenses_component__WEBPACK_IMPORTED_MODULE_15__["LicensesComponent"],
                _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _main_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["EventsListComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["EventThumbnailComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["EventDetailsComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["CreateEventComponent"],
                _events_event_details_create_session_component__WEBPACK_IMPORTED_MODULE_21__["CreateSessionComponent"],
                _errors_error_404_component__WEBPACK_IMPORTED_MODULE_19__["Error404Component"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["SessionListComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_10__["CollapsibleWellComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["DurationPipe"],
                _common_index__WEBPACK_IMPORTED_MODULE_10__["SimpleModalComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_10__["ModalTriggerDirective"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["UpvoteComponent"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["LocationValidatorDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ],
            providers: [
                _events_index__WEBPACK_IMPORTED_MODULE_9__["EventService"],
                // we suppling the string canDeactivateCreateEvent and attaching a function
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
                _events_index__WEBPACK_IMPORTED_MODULE_9__["EventsListResolverService"],
                _events_index__WEBPACK_IMPORTED_MODULE_9__["EventResolverService"],
                _user_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                // ToastrService,
                { provide: _common_index__WEBPACK_IMPORTED_MODULE_10__["TOASTR_TOKEN"], useValue: toastr },
                { provide: _common_index__WEBPACK_IMPORTED_MODULE_10__["JQ_TOKEN"], useValue: jQuery },
                _events_index__WEBPACK_IMPORTED_MODULE_9__["VoterService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
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

module.exports = "<div id=\"{{elementId}}\" #modalcontainer class=\"modal fade\" tabindex=\"-1\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span>&times;</span>\n          </button>\n      </div>\n\n      <div class=\"modal-body\" (click)=\"closeModal()\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

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


var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent($) {
        this.$ = $;
    }
    SimpleModalComponent.prototype.ngOnInit = function () {
    };
    SimpleModalComponent.prototype.closeModal = function () {
        if (this.closeOnBodyClick === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "closeOnBodyClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalcontainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SimpleModalComponent.prototype, "containerEl", void 0);
    SimpleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-simple-modal',
            template: __webpack_require__(/*! ./simple-modal.component.html */ "./src/app/common/simple-modal.component.html"),
            styles: [__webpack_require__(/*! ./simple-modal.component.scss */ "./src/app/common/simple-modal.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_jQuery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"])),
        __metadata("design:paramtypes", [Object])
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h2>{{pageTitle}}</h2>\n\n<div class=\"d-flex flex-row\">\n\n  <div class=\"col-sm col-sm-auto\">\n    <p>\n      Playing Around...\n    </p>\n  </div>\n\n  <div class=\"col\">\n    <!--Body content-->\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <!-- <button (click)=\"handleClick('Hola')\">toastr notification with external library</button> -->\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <button type=\"button\" class=\"btn\">Basic</button>\n        <button type=\"button\" class=\"btn btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-link\">Link</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n          ToolTip Button :\n          <button type=\"button\" class=\"btn btn-primary\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n          Button with tooltip\n          </button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <p>Carousel :</p>\n          <carousel>\n            <slide>\n              <img src=\"assets/img/temp/1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"assets/img/temp/2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"assets/img/temp/3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n      </div>\n    </div>\n\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-4\">\n                  <div class=\"card\" style=\"width: 20rem;\">\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Card title</h4>\n                      <p class=\"card-text\">Some quick example text ...</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-8\">\n                  <h1>Example heading\n                    <span class=\"badge badge-secondary\">New</span>\n                  </h1>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n</div>\n</div>\n</div>\n"

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

module.exports = "<h2>{{pageTitle}}</h2>\n\n<div class=\"col-md-6\">\n  <form #newEventForm=\"ngForm\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\n      <label for=\"eventName\">Event Name:</label>\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\n      <input (ngModel)=\"name\" name=\"name\" required id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name of your event...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\n      <label for=\"eventDate\">Event Date:</label>\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\n      <input (ngModel)=\"date\" name=\"date\" required id=\"eventDate\" type=\"text\" class=\"form-control\" placeholder=\"format (mm/dd/yyyy)...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\n      <label for=\"eventTime\">Event Time:</label>\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\n      <input (ngModel)=\"time\" name=\"time\" required id=\"eventTime\" type=\"text\" class=\"form-control\" placeholder=\"start and end time...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\n      <label for=\"eventPrice\">Event Price:</label>\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\n      <input (ngModel)=\"price\" name=\"price\" required id=\"eventPrice\" type=\"text\" type=\"number\" class=\"form-control\" placeholder=\"event price...\" />\n    </div>\n\n    <div ngModelGroup=\"location\" #locationGroup=\"ngModelGroup\" aaLocationValidator>\n        <div class=\"form-group\">\n        <label for=\"address\">Event Location:</label>\n        <em *ngIf=\"locationGroup?.invalid && locationGroup?.touched\">You must enter either the full loacation OR an online Url</em>\n        <input (ngModel)=\"address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address of event...\" />\n        </div>\n        <div class=\"row\">\n        <div class=\"col-md-6\">\n            <input (ngModel)=\"city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City...\" />\n        </div>\n        <div class=\"col-md-6\" >\n            <input (ngModel)=\"country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country...\" />\n        </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"onlineUrl\">Online Url:</label>\n      <input (ngModel)=\"onlineUrl\" name=\"onlineUrl\" id=\"onlineUrl\" (change)=\"locationGroup.control.controls.address.updateValueAndValidity()\" type=\"text\" class=\"form-control\" placeholder=\"Online Url...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\n      <label for=\"imageUrl\">Image:</label>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\n      <input (ngModel)=\"imageUrl\" name=\"imageUrl\" required pattern=\".*\\/.*.(png|jpg)\" id=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"url of image...\" />\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls.imageUrl?.value\"/>\n    </div>\n\n    <button type=\"submit\" [disabled]=\"newEventForm.invalid\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n  </form>\n</div>\n"

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
        // WITH RESOLVER
        //   this.route.data.forEach((data) => {
        //   console.log('onComponentInit event-detail:  this.route.snapshot.data["event"]',
        //                 data['event']);
        var _this = this;
        //   this.event = data['event'];
        //   this.addMode = false;
        //   this.filterBy = 'all';
        //   this.sortBy = 'votes';
        // });
        // WITHOUT RESOLVER
        this.route.params.forEach(function (params) {
            // console.log('+params[id]', this.eventService.getEvent(+params['id']));
            _this.eventService.getEvent(+params['id']).subscribe(function (event) {
                // console.log('event detail - ', event);
                _this.event = event;
                _this.addMode = false;
                _this.filterBy = 'all';
                _this.sortBy = 'votes';
            }, function (error) { return _this.errorMessage = error; });
        });
        // console.log(this.route.snapshot.params['id']);
        // this.route.params.forEach((params: Params) => {
        //   this.event = this.eventService.getEvent(+params['id']);
        //   this.addMode = false;
        //   this.filterBy = 'all';
        //   this.sortBy = 'votes';
        // });
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

/***/ "./src/app/events/event-details/index.ts":
/*!***********************************************!*\
  !*** ./src/app/events/event-details/index.ts ***!
  \***********************************************/
/*! exports provided: CreateSessionComponent, EventDetailsComponent, SessionListComponent, UpvoteComponent, VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.component */ "./src/app/events/event-details/event-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailsComponent"]; });

/* harmony import */ var _create_session_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-session.component */ "./src/app/events/event-details/create-session.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _create_session_component__WEBPACK_IMPORTED_MODULE_1__["CreateSessionComponent"]; });

/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list.component */ "./src/app/events/event-details/session-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _session_list_component__WEBPACK_IMPORTED_MODULE_2__["SessionListComponent"]; });

/* harmony import */ var _upvote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upvote.component */ "./src/app/events/event-details/upvote.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return _upvote_component__WEBPACK_IMPORTED_MODULE_3__["UpvoteComponent"]; });

/* harmony import */ var _voter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voter.service */ "./src/app/events/event-details/voter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _voter_service__WEBPACK_IMPORTED_MODULE_4__["VoterService"]; });


// export * from './event-route-activator.service';






/***/ }),

/***/ "./src/app/events/event-details/session-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\n  <div class=\"col-md-1\">\n    <div *ngIf=\"!auth.isAuthenticated()\" class=\"mt-4\">\n      please Log-In to see votes\n    </div>\n    <div *ngIf=\"auth.isAuthenticated()\">\n        <aa-upvote\n        (vote)=\"toggleVote(session)\"\n        [count]=\"session.voters.length\"\n        [voted]=\"userHasVoted(session)\">\n      </aa-upvote>\n    </div>\n  </div>\n  <div class=\"col-md-10\">\n    <aa-collapsible-well [title]=\"session.name\">\n      <div class=\"title\" well-title>\n          {{session.name}}\n          <!--class=\"glyphicon glyphicon-fire on-fire\"-->\n          <i *ngIf=\"session.voters.length > 2\" class=\"fa fa-fire fa-1x\" style=\"color: red\"></i>\n      </div>\n      <div class=\"body\" well-body>\n          <h6>{{session.presenter}}</h6>\n          <span>Duration: {{session.duration | duration}}</span><br />\n          <span>Level: {{session.level}}</span>\n          <div>{{session.abstract}}</div>\n      </div>\n    </aa-collapsible-well>\n  </div>\n</div>\n"

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
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _voter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voter.service */ "./src/app/events/event-details/voter.service.ts");
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
    function SessionListComponent(auth, voterService) {
        this.auth = auth;
        this.voterService = voterService;
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        // console.log(this.sessions);
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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
        __metadata("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _voter_service__WEBPACK_IMPORTED_MODULE_2__["VoterService"]])
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

/***/ "./src/app/events/event-details/upvote.component.html":
/*!************************************************************!*\
  !*** ./src/app/events/event-details/upvote.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"votingWidgetContainer upvote\" (click)=\"onClick()\">\n  <div class=\"well votingWidget\">\n    <div class=\"votingButton\">\n      <i  class=\"fa fa-heart fa-1x unvoted-heart\" [style.color]=\"iconColor\"></i>\n    </div>\n    <div class=\"badge badge-inverse votingCount\">\n      <div>{{count}}</div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/events/event-details/upvote.component.scss":
/*!************************************************************!*\
  !*** ./src/app/events/event-details/upvote.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upvote {\n  background: #6c757db5;\n  border: 2px solid #6c757d;\n  display: flex;\n  margin: auto;\n  height: 100px;\n  margin-top: 20px;\n  cursor: pointer; }\n  .upvote .well {\n    margin: auto; }\n  .unvoted-heart {\n  color: #6c757db5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbHMvRDpcXGFwcHNcXGV2ZW50cy1hcHAtYW5ndWxhci9zcmNcXGFwcFxcZXZlbnRzXFxldmVudC1kZXRhaWxzXFx1cHZvdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBcUI7RUFDckIsMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixnQkFBZSxFQUtoQjtFQVpEO0lBVUksYUFBWSxFQUNiO0VBRUg7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnQtZGV0YWlscy91cHZvdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXB2b3RlIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkYjU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzZjNzU3ZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAud2VsbCAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4udW52b3RlZC1oZWFydCB7XHJcbiAgY29sb3I6ICM2Yzc1N2RiNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/events/event-details/upvote.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/events/event-details/upvote.component.ts ***!
  \**********************************************************/
/*! exports provided: UpvoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return UpvoteComponent; });
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

var UpvoteComponent = /** @class */ (function () {
    function UpvoteComponent() {
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(UpvoteComponent.prototype, "voted", {
        set: function (val) {
            this.iconColor = val ? 'red' : 'white';
        },
        enumerable: true,
        configurable: true
    });
    UpvoteComponent.prototype.onClick = function () {
        this.vote.emit({});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UpvoteComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UpvoteComponent.prototype, "voted", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpvoteComponent.prototype, "vote", void 0);
    UpvoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-upvote',
            template: __webpack_require__(/*! ./upvote.component.html */ "./src/app/events/event-details/upvote.component.html"),
            styles: [__webpack_require__(/*! ./upvote.component.scss */ "./src/app/events/event-details/upvote.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpvoteComponent);
    return UpvoteComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/voter.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/events/event-details/voter.service.ts ***!
  \*******************************************************/
/*! exports provided: VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return VoterService; });
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

var VoterService = /** @class */ (function () {
    function VoterService() {
    }
    VoterService.prototype.deleteVoter = function (session, voterName) {
        session.voters = session.voters.filter(function (voter) { return voter !== voterName; });
    };
    VoterService.prototype.addVoter = function (session, voterName) {
        session.voters.push(voterName);
    };
    VoterService.prototype.userHasVoted = function (session, voterName) {
        return session.voters.some(function (voter) { return voter === voterName; });
    };
    VoterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], VoterService);
    return VoterService;
}());



/***/ }),

/***/ "./src/app/events/event-resolver.service.ts":
/*!**************************************************!*\
  !*** ./src/app/events/event-resolver.service.ts ***!
  \**************************************************/
/*! exports provided: EventResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResolverService", function() { return EventResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventResolverService = /** @class */ (function () {
    function EventResolverService(eventService) {
        this.eventService = eventService;
    }
    EventResolverService.prototype.resolve = function (route) {
        console.log('in EventResolverService -> i return -> this.eventService.getEvent(route.params["i"])', this.eventService.getEvent(route.params['i']));
        return this.eventService.getEvent(route.params['i']);
    };
    EventResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventResolverService);
    return EventResolverService;
}());



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

module.exports = ".card {\n  cursor: pointer;\n  height: 300px; }\n\n.card:hover {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGV2ZW50c1xcZXZlbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnQtdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5jYXJkOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuIl19 */"

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
        this.eventService.getAllEvents().subscribe(function (events) {
            console.log('in EventsListResolverService -> i return events', events);
            return events;
        });
        // this.eventService.getAllEvents().map(res => res.json()).subscribe(items => console.log(items));
        // this.eventService.getAllEvents().pipe().subscribe((events) => {
        //   return events;
        // });
        // this.eventService.getAllEvents().pipe(map((events) => {
        //   return events;
        // }),
        // catchError( (err) => Observable.throw(err.json().error) )
        // );
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

module.exports = "@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n\n@media (min-width: 992px) {\n  .card-columns {\n    -webkit-column-count: 3;\n    column-count: 3; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXGV2ZW50c1xcZXZlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUFnQix3QkFBdUI7SUFBRSxnQkFBZSxFQUFJLEVBQUE7O0FBRTlEO0VBQ0U7SUFBZ0Isd0JBQXVCO0lBQUUsZ0JBQWUsRUFBSSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcmQtY29sdW1ucyB7IC13ZWJraXQtY29sdW1uLWNvdW50OiAyOyBjb2x1bW4tY291bnQ6IDI7IH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuY2FyZC1jb2x1bW5zIHsgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDM7IGNvbHVtbi1jb3VudDogMzsgfVxyXG59XHJcbiJdfQ== */"

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
        // WITH RESOLVER
        // console.log(' onComponentInit events-list:  this.route.snapshot.data["events"]', this.route.snapshot.data['events'] );
        // this.events = this.route.snapshot.data['events'];
        var _this = this;
        // WITHOUT RESOLVER
        this.events = this.route.snapshot.data['events'];
        this.eventService.getAllEvents().subscribe(function (events) {
            _this.events = events;
        });
        // for local data demonstration
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
/*! exports provided: CreateEventComponent, EventThumbnailComponent, EventsListResolverService, EventsListComponent, CreateSessionComponent, LocationValidatorDirective, EventResolverService, EventService, restrictedWords, DurationPipe, EventDetailsComponent, SessionListComponent, UpvoteComponent, VoterService */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["UpvoteComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _event_details___WEBPACK_IMPORTED_MODULE_5__["VoterService"]; });

/* harmony import */ var _location_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-validator.directive */ "./src/app/events/location-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationValidatorDirective", function() { return _location_validator_directive__WEBPACK_IMPORTED_MODULE_6__["LocationValidatorDirective"]; });

/* harmony import */ var _event_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-resolver.service */ "./src/app/events/event-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventResolverService", function() { return _event_resolver_service__WEBPACK_IMPORTED_MODULE_7__["EventResolverService"]; });











/***/ }),

/***/ "./src/app/events/location-validator.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/events/location-validator.directive.ts ***!
  \********************************************************/
/*! exports provided: LocationValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationValidatorDirective", function() { return LocationValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocationValidatorDirective = /** @class */ (function () {
    function LocationValidatorDirective() {
    }
    LocationValidatorDirective_1 = LocationValidatorDirective;
    LocationValidatorDirective.prototype.validate = function (formGroup) {
        var addressControl = formGroup.controls['address'];
        var cityControl = formGroup.controls['city'];
        var countryControl = formGroup.controls['country'];
        var onLineUrlControl = formGroup.controls['onLineUrl'];
        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value) || (onLineUrlControl && onLineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false };
        }
    };
    var LocationValidatorDirective_1;
    LocationValidatorDirective = LocationValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[aaLocationValidator]',
            // add validator to the NG List oof Validators with ulti: true
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: LocationValidatorDirective_1, multi: true }]
        })
    ], LocationValidatorDirective);
    return LocationValidatorDirective;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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


// import { Http } from '@angular/http';
// import { Subject } from 'rxjs/RX';


var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.eventsUrl = 'api/events-data.json';
        this.eventUrl = 'api/event-data.json';
    } // private http: HttpClient
    EventService.prototype.getAllEvents = function () {
        // return this.http.get<IEvent[]>(this.eventsUrl).pipe(
        //   tap(data => console.log('getAllEvents')),
        //   catchError(this.handleError)
        // );
        // old - for local data
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        setTimeout(function () {
            subject.next(EVENTS);
            subject.complete();
        }, 100);
        // console.log('subject returned', subject);
        return subject;
        // return this.http.get(this.EventsUrl).map((response) => {
        //   return <IEvent[]>response.json();
        // });
    };
    EventService.prototype.getEvent = function (eventId) {
        // return this.getAllEvents().pipe(
        //   map((events: IEvent[]) => events.find(event => event.id === eventId))
        // );
        // good if i had server that gives me : "api/events/:1"
        // return this.http.get<IEvent>(this.eventUrl).pipe(
        //   tap(data => console.log(JSON.stringify(data))),
        //   catchError(this.handleError)
        // );
        // old - for local data
        return this.getAllEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (events) { return events.find(function (e) { return e.id === eventId; }); }));
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
    EventService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client-side or network error
            errorMessage = "error  " + err.error.message;
        }
        else {
            // backend error with response code
            errorMessage = "error " + err.error.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "<!-- Navigation -->\r\n<div class=\"navbar navbar-default navbar-dark bg-dark navbar-expand-lg p-0\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n        <img class=\"company-logo\" height=70 src=\"assets/img/logo-cut.png\" alt=\"\">\r\n      </a>\r\n    </div>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse justify-content-between\" [ngClass]=\"{ 'show': navbarOpen }\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item\"  routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\r\n          true}\">\r\n          <a  [routerLink]=\"['/events']\" class=\"nav-link\">All Events</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\r\n          true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/events/new']\">Create Event</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a [routerLink]=\"['/demo']\" class=\"nav-link\" >Demo</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"d-inline-flex nav-area\">\r\n        <form (ngSubmit)=\"searchSessions(searchTerm)\" id=\"searchForm\"  class=\"form-inline mr-sm-4\">\r\n          <div class=\"form-group\">\r\n            <input [(ngModel)]=\"searchTerm\" name=\"searchTerm\" type=\"text\" class=\"form-control mr-sm-2\" placeholder=\"Search Sessions\" >\r\n          </div>\r\n          <button class=\"btn btn-outline-secondary\" aaModalTrigger=\"searchResults\">\r\n            Search\r\n          </button>\r\n        </form>\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a *ngIf=\"!auth?.isAuthenticated()\" [routerLink]=\"['/user/login']\"  class=\"nav-link\"> Login</a>\r\n            <a *ngIf=\"auth?.isAuthenticated()\" [routerLink]=\"['/user/profile']\" class=\"nav-link\">Hi {{auth?.currentUser?.firstName}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aa-simple-modal closeOnBodyClick=\"true\" elementId=\"searchResults\" title=\"Matching Sessions\">\r\n  <div class=\"list-group\">\r\n    <a class=\"list-group-item\" *ngFor=\"let session of foundSessions\" [routerLink]=\"['/events', session.eventId]\">\r\n      {{session.name}}\r\n    </a>\r\n  </div>\r\n</aa-simple-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/navigation/navigation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/navigation/navigation.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link,\na.nav-link:not([href]) {\n  color: #fff;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.nav-link:hover, .nav-link:focus {\n  color: #ccc; }\n\n.nav-link:hover, .nav-link:focus {\n  color: #ccc; }\n\n.active .nav-link {\n  color: #ab9768; }\n\n/* Medium Devices, Desktops */\n\n@media only screen and (max-width: 992px) {\n  .navbar-brand {\n    padding-left: 12px;\n    padding-right: 12px; }\n  .navbar-toggler {\n    margin-left: 12px;\n    margin-right: 12px; }\n  .show > div {\n    padding-bottom: 10px; }\n  .show .nav-link {\n    padding: 0.5rem 28px; }\n    .show .nav-link:hover {\n      background: rgba(0, 0, 0, 0.160784); }\n  .show .nav-area {\n    padding: 16px 28px;\n    border-top: 2px solid #333;\n    width: 100%; }\n  .show .active .nav-link {\n    background: rgba(0, 0, 0, 0.360784); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9uYXZpZ2F0aW9uL0Q6XFxhcHBzXFxldmVudHMtYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXG1haW5cXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURBOztFQUVFLFlBQVc7RUFFWCxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUVELDhCQUE4Qjs7QUFDOUI7RUFDRTtJQUNFLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLGtCQUFpQjtJQUNqQixtQkFBa0IsRUFDbkI7RUFDRDtJQUlJLHFCQUFvQixFQUNyQjtFQUxIO0lBUUkscUJBQW9CLEVBTXJCO0lBZEg7TUFZTSxvQ0FBNkMsRUFDOUM7RUFiTDtJQWdCSSxtQkFBa0I7SUFDbEIsMkJBQTBCO0lBQzFCLFlBQVcsRUFDWjtFQW5CSDtJQXVCTSxvQ0FBbUMsRUFDcEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbXBhbnktbG9nbyB7XHJcbi8vICAgaGVpZ2h0OiA4NnB4O1xyXG4vLyAgfVxyXG4vLyAvL0Y1RjZGNlxyXG4vLyAvLzk0OTM5M1xyXG4vLyAvLzk4OUNBM1xyXG4vLyAvLzg1NjY1QVxyXG4vLyAvLzNGMzkzQlxyXG4vLyAvLyNlN2U3ZTcgIzE5MTkxOVxyXG4vLyAubmF2YmFyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMmIzMDQ2O1xyXG4vLyAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDBweCAwcHggIzljOWM5YztcclxuLy8gfVxyXG4vLyAubmF2YmFyIHtcclxuLy8gICAvLyBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLy8gLm5hdi1pdGVtIHtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgb3V0bGluZTogMDtcclxuLy8gfVxyXG4vLyAubmF2LWxpbmssXHJcbi8vIGEubmF2LWxpbms6bm90KFtocmVmXSkge1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIC8vIG1hcmdpbjogMDtcclxuLy8gICBsaW5lLWhlaWdodDogMzBweDtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyAgIG9wYWNpdHk6IDAuNztcclxuLy8gfVxyXG5cclxuLy8gLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xyXG4vLyAgIG9wYWNpdHk6IDE7XHJcbi8vIH1cclxuLy8gLmFjdGl2ZSAgLm5hdi1saW5re1xyXG4vLyAgIGNvbG9yOiAjYWI5NzY4O1xyXG4vLyAgIG9wYWNpdHk6IDE7XHJcbi8vIH1cclxuXHJcbi8vIC51c2VyLWxpbmsge1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuXHJcbi8vICAgYSB7XHJcbi8vICAgICBmb250LXdlaWdodDogMTAwO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLm5hdi1saW5rLFxyXG5hLm5hdi1saW5rOm5vdChbaHJlZl0pIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICAvLyBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5uYXYtbGluazpob3ZlciwgLm5hdi1saW5rOmZvY3VzIHtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG4uYWN0aXZlIC5uYXYtbGlua3tcclxuICBjb2xvcjogI2FiOTc2ODtcclxufVxyXG5cclxuLyogTWVkaXVtIERldmljZXMsIERlc2t0b3BzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KSB7XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIC5zaG93IHtcclxuICAgIC8vIHBhZGRpbmc6IDAgMjhweDtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAyOHB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNzI1NDkwMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXYtYXJlYSB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjhweDtcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMzM7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAubmF2LWxpbmt7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2MDc4NCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

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
        this.navbarOpen = false;
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
    NavigationComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
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

/***/ "./src/app/rxjs-extensions.ts":
/*!************************************!*\
  !*** ./src/app/rxjs-extensions.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");








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