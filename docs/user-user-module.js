(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/user/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<div class=\"col-md-4\">\n  <form #loginForm=\"ngForm\"  (ngSubmit)=\"login(loginForm.value)\"  ngNativeValidate autocomplete=\"off\">\n    <div class=\"form-group\" >\n      <label for=\"userName\">User Name:</label>\n      <em *ngIf=\"loginForm.controls.userName?.invalid &&\n                (loginForm.controls.userName?.touched ||\n                 mouseoverLogin)\"\n          class=\"invalid-feedback\">Required</em>\n      <input id=\"userName\" (ngModel)=\"userName\" name=\"userName\" required type=\"text\" class=\"form-control\" placeholder=\"User Name...\" />\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"password\">Password:</label>\n      <em *ngIf=\"loginForm.controls.password?.invalid &&\n                (loginForm.controls.password?.touched ||\n                 mouseoverLogin)\"\n          class=\"invalid-feedback\">Required</em>\n      <input id=\"password\" (ngModel)=\"password\" name=\"password\" required type=\"password\" class=\"form-control\"placeholder=\"Password...\" />\n    </div>\n    <span (mouseenter)=\"mouseoverLogin=true\"\n          (mouseleave)=\"mouseoverLogin=false\">\n        <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-primary\">Login</button>\n    </span>\n    <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-default\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login.component.scss":
/*!*******************************************!*\
  !*** ./src/app/user/login.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback {\n  display: inline-block;\n  width: auto;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9EOlxcYXBwc1xcZXZlbnRzLWFwcC1hbmd1bGFyL3NyY1xcYXBwXFx1c2VyXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/toastr.service */ "./src/app/common/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastrService) {
        this.authService = authService;
        this.router = router;
        this.toastrService = toastrService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log();
    };
    LoginComponent.prototype.login = function (formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
        this.toastrService.success('Success');
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aa-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/profile.component.html":
/*!*********************************************!*\
  !*** ./src/app/user/profile.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Edit Your Profile </h2>\n  <div class=\"col-md-4\">\n    <form [formGroup]=\"profileForm\" autocomplete=\"off\" (ngSubmit)=\"saveProfile(profileForm.value)\" novalidate>\n      <div class=\"form-group\"\n            [ngClass]=\"{'error': !validateFirstName()}\">\n        <label for=\"firstName\">First Name:</label>\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.required\">Required</em>\n        <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.pattern\">Must start with a letter</em>\n        <input id=\"firstName\" formControlName=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name...\" />\n      </div>\n      <div class=\"form-group\"\n            [ngClass]=\"{'error': !validateLastName()}\">\n        <label for=\"lastName\">Last Name:</label>\n        <em *ngIf=\"!validateLastName()\">Required</em>\n        <input id=\"lastName\" formControlName=\"lastName\"   type=\"text\" class=\"form-control\" placeholder=\"Last Name...\" />\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/profile.component.scss":
/*!*********************************************!*\
  !*** ./src/app/user/profile.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\n  float: right;\n  color: #E05c65;\n  padding-left: 10px; }\n\n.error input {\n  background-color: #E3c3c5; }\n\n.error ::-webkit-input-placeholder {\n  color: #999; }\n\n.error ::-moz-input-placeholder {\n  color: #999; }\n\n.error :-moz-input-placeholder {\n  color: #999; }\n\n.error :ms-input-placeholder {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9EOlxcYXBwc1xcZXZlbnRzLWFwcC1hbmd1bGFyL3NyY1xcYXBwXFx1c2VyXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsYUFBWTtFQUNaLGVBQWM7RUFDZCxtQkFBa0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkFDRixFQUFDOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZW0ge1xyXG5mbG9hdDogcmlnaHQ7XHJcbmNvbG9yOiAjRTA1YzY1O1xyXG5wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmVycm9yIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNFM2MzYzVcclxufVxyXG4uZXJyb3IgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG4uZXJyb3IgOjotbW96LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG4uZXJyb3IgOi1tb3otaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5lcnJvciA6bXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/profile.component.ts":
/*!*******************************************!*\
  !*** ./src/app/user/profile.component.ts ***!
  \*******************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        if (this.auth.currentUser) {
            console.log(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"], 'Validators');
            this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.currentUser.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z].*')]);
            this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.currentUser.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                firstName: this.firstName,
                lastName: this.lastName,
            });
        }
        else {
            this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](' ', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](' ', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                firstName: this.firstName,
                lastName: this.lastName,
            });
        }
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    ProfileComponent.prototype.saveProfile = function (formValues) {
        if (this.profileForm.valid) {
            this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events']);
        }
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/user/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routes */ "./src/app/user/user.routes.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_4__["userRoutes"])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.routes.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.routes.ts ***!
  \*************************************/
/*! exports provided: userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");


var userRoutes = [
    { path: 'profile', component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map