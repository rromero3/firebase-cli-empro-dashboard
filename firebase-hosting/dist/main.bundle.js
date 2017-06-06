webpackJsonp([1,4],{

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 158;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(167);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/main.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_af__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(db, router, afService) {
        var _this = this;
        this.router = router;
        this.afService = afService;
        this.title = "sample";
        this.afService.user.subscribe(function (auth) {
            if (auth == null) {
                console.log("Not Logged in.");
                _this.router.navigate(['login']);
                _this.isLoggedIn = false;
            }
            else {
                console.log("Successfully Logged in.");
                _this.isLoggedIn = true;
                // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
                // the user did not get redirected to the home page.
                _this.router.navigate(['']);
                _this.items = db.list('/items');
                console.log("google display name");
                _this.afService.displayName = auth.displayName;
                _this.afService.email = auth.email;
                console.log("displayName " + auth.displayName);
                console.log("email " + auth.email);
            }
        });
        this.isLoggedIn = true;
        this.router.navigate(['']);
    }
    AppComponent.prototype.login = function () {
        this.afService.loginWithGoogle();
        this.isLoggedIn = false;
    };
    AppComponent.prototype.logout = function () {
        this.afService.logout();
        this.isLoggedIn = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(330),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_af__["a" /* AF */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/app.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_af__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_page_home_page_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Custom Firebase modules


// Providers

// Components


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__["a" /* LoginPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_page_home_page_component__["a" /* HomePageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__providers_af__["a" /* AF */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/app.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(afService) {
        this.afService = afService;
        this.messages = this.afService.messages;
    }
    HomePageComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.isYou = function (email) {
        if (email == this.afService.email)
            return true;
        else
            return false;
    };
    HomePageComponent.prototype.isMe = function (email) {
        if (email == this.afService.email)
            return false;
        else
            return true;
    };
    HomePageComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Scroll to bottom failed yo!');
        }
    };
    // I forgot to add this but thanks for letting me know in the comments so I could update it!
    HomePageComponent.prototype.sendMessage = function () {
        this.afService.sendMessage(this.newMessage);
        this.newMessage = '';
    };
    return HomePageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], HomePageComponent.prototype, "myScrollContainer", void 0);
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__(331),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/home-page.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function () {
        this.afService.loginWithGoogle();
        this.router.navigate(['']);
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__(332),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/login-page.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n.bs-example {\n  position: relative;\n  padding: 15px 15px 15px;\n  margin: 0 -15px 0px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  background-color: #E1E2E3;\n  box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n  height: 60vh;\n  overflow-y: scroll;\n}\n#messages {\n  background-color: #2d384a !important;\n}\n.author {\n  font-size: 12px;\n}\n.send-message {\n  color: #ffffff;\n  background-color: #4184f3;\n  text-decoration: none;\n  padding: 10px 20px 10px 20px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n}\n.message-text {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\np {\n  font-size: 16px;\n}\n.bubble{\n  background-color: #F2F2F2;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #B2B2B2;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  vertical-align: top;\n}\n.bubble::before {\n  background-color: #F2F2F2;\n  content: \"\\A0\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  top: 11px;\n  transform:             rotate( 29deg ) skew( -35deg );\n  -moz-transform:    rotate( 29deg ) skew( -35deg );\n  -ms-transform:     rotate( 29deg ) skew( -35deg );\n  -o-transform:      rotate( 29deg ) skew( -35deg );\n  -webkit-transform: rotate( 29deg ) skew( -35deg );\n  width:  20px;\n}\n.me {\n  display: inherit;\n  margin: 5px 45px 5px 20px;\n}\n.me::before {\n  box-shadow: -2px 2px 2px 0 rgba( 178, 178, 178, .4 );\n  left: -9px;\n}\n.you {\n  display: inherit;\n  margin: 5px 20px 5px 45px;\n}\n.you::before {\n  box-shadow: 2px -2px 2px 0 rgba( 178, 178, 178, .4 );\n  right: -9px;\n}\n.bs-example+.highlight, .bs-example+.zero-clipboard+.highlight {\n  margin: 0px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "// src/app/login-page/login-page.component.css\n\n.loginmodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n.loginmodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n.loginmodal-submit {\n  /* border: 1px solid #3079ed; */\n  width: 100%;\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1);\n  background-color: #4d90fe;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 21px;\n   background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed));\n}\n.loginmodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #357ae8;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n.loginmodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  transition: opacity ease 0.5s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}} asdasda\n</h1>\n\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Firebase Crud</a>\n    </div>\n    <div *ngIf=\"isLoggedIn\" class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <h3> {{ afService.displayName}} | {{afService.email}} </h3>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"!isLoggedIn\" class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a (click)=\"login()\">Login</a></li>\n      </ul>\n    </div>\n\n  </div>\n</nav>\n\n<ul>\n  <li class=\"text\" *ngFor=\"let item of items | async\">\n     {{item.other}} | {{item.name}}\n  </li>\n</ul>\n\n\n<div class=\"app-content\">\n <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<!--  src/app/home-page/home-page.component.html -->\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n     \n     <div #scrollMe class=\"bs-example\" id=\"messages\">\n\t   <div *ngFor=\"let message of messages | async\">\n\t       <div class=\"bubble\" [class.you]=\"isYou(message.email)\" [class.me]=\"isMe(message.email)\">\n\t          <p>{{ message.message }}</p>\n\t          <div class=\"author\">\n\t              {{ message.displayName }} | {{ message.email }} | {{ message.timestamp | date:\"dd-MMM-yyyy hh:mm a\" }}\n\t          </div>\n\t       </div>\n\t   </div>\n\t</div>\n\n      <figure class=\"highlight\">\n        \n        <!-- Point: 3 -->\n        <input type=\"textarea\" class=\"message-text\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"sendMessage()\">\n        <a class=\"send-message\" (click)=\"sendMessage()\">SEND</a>\n        \n      </figure>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-dialog\">\n  <div class=\"loginmodal-container\">\n    <h1>Login to Your Account</h1><br>\n    <button class=\"login loginmodal-submit\" (click)=\"login()\">Login With Google</button>\n  </div>\n</div>"

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/app/providers/af.ts

// Custom Firebase modules



var AF = (function () {
    function AF(afAuth, db) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
        this.messages = db.list('messages');
    }
    /**
     * Logs in the user
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithGoogle = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        this.afAuth.auth.signOut();
        /* return this.af.auth.logout(); */
    };
    /**
     * Saves a message to the Firebase Realtime Database
     * @param text
     */
    AF.prototype.sendMessage = function (text) {
        var message = {
            message: text,
            displayName: this.displayName,
            email: this.email,
            timestamp: Date.now()
        };
        this.messages.push(message);
    };
    return AF;
}());
AF = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AF);

var _a, _b;
//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/af.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAXEk2HP64wvaqOdUG19QvrxQip9VqRgdA",
        authDomain: "empro-dashboard.firebaseapp.com",
        databaseURL: "https://empro-dashboard.firebaseio.com",
        projectId: "empro-dashboard",
        storageBucket: "empro-dashboard.appspot.com",
        messagingSenderId: "674783942733"
    }
};
//# sourceMappingURL=/Users/rromero/Google Drive/Proyectos/Personales/FirebaseProjects/empro-dashboard/src/environment.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.bundle.js.map