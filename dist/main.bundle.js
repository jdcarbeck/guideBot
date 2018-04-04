webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chatpage_chatpage_component__ = __webpack_require__("./src/app/chatpage/chatpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chatpage_chatpage_component__["a" /* ChatpageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */] },
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_7__chatpage_chatpage_component__["a" /* ChatpageComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatpage/chatpage.component.css":
/***/ (function(module, exports) {

module.exports = "#wrapper{\n  padding:0px;\n}\n\n#navbarContainer {\n  margin:0px;\n  padding:0px;\n}\n\n#chatlogContainer {\n  margin:0px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#36d1dc), to(#5b86e5));\n  background-image: linear-gradient(to bottom, #36d1dc, #5b86e5);\n  width:100%;\n  height:100vh;\n  min-height:425px;\n}\n\n#chatlog {\n  background-color:white;\n  -webkit-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  min-height: calc(100% - 99px);\n  margin-top: 51px;\n}\n\n#message {\n  padding:0px;\n}\n\n#messageBar {\n  background:#dbdbdb;\n  padding:5px;\n}\n\n#messageContainer {\n  margin:0px;\n}\n\ninput[type=\"text\"], textarea {\n  outline:none;\n  -webkit-box-shadow:none !important;\n          box-shadow:none !important;\n  border:1px solid #ccc !important;\n}\n\nbutton {\n  outline:none;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  -webkit-box-shadow:none !important;\n          box-shadow:none !important;\n}\n\nul{\n  list-style:none;\n  padding:0px;\n  margin:0px;\n}\n\n.user {\n  display:table;\n  margin-right:auto;\n  padding:10px;\n  border-radius:5px;\n  border-bottom-left-radius:0px;\n  background:#2B7AF0;\n  color:white;\n  max-width:50%;\n}\n\n.bot {\n  padding:10px;\n  display:table;\n  margin-left:auto;\n  border-radius:5px;\n  background:#DBDBDB;\n  border-bottom-right-radius:0px;\n  max-width:50%;\n}\n\n"

/***/ }),

/***/ "./src/app/chatpage/chatpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" class=\"wrapper\">\n  <div class=\"row fixed-top\" id=\"navbarContainer\">\n    <div class=\"col px-0\"><app-navbar></app-navbar></div>\n  </div>\n  <div class=\"row\" id=\"chatlogContainer\">\n    <div class=\"col-lg-8 mx-auto pre-scrollable\" id=\"chatlog\"> \n     <div *ngFor=\"let message of messageLog\" class=\"my-2\" [ngClass]=\"message.sender\">\n        {{message.content}}\n    </div>\n   </div>\n  </div>\n  <div class=\"row fixed-bottom\" id=\"messageContainer\">\n    <div class=\"col-lg-8 mx-auto\">\n      <div class=\"row\" id=\"messageBar\">\n        <div class=\"col-10 mx-auto\" id=\"message\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Message here...\" #userMessage\n            (keyup.enter)=\"messageSend(userMessage.value); userMessage.value =''\"\n            (blur)=\"messageSend(userMessage.value); userMessage.value =''\"\n            ng-model=\"string\">\n            <span class=\"input-group=btn\">\n              <button class=\"btn btn-secondary\"(click)=\"messageSend(userMessage.value)\">send</button>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chatpage/chatpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatpageComponent = /** @class */ (function () {
    function ChatpageComponent() {
        this.messageLog = [];
    }
    ChatpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__();
        this.connection = this.getMessage().subscribe(function (message) {
            var newMessage = {};
            newMessage.sender = 'bot';
            newMessage.content = String(message);
            _this.messageLog.push(newMessage);
        });
    };
    ChatpageComponent.prototype.ngAfterViewChecked = function () {
        var logObj = document.getElementById("chatlog");
        logObj.scrollTop = logObj.scrollHeight;
    };
    ChatpageComponent.prototype.messageSend = function (userMessage) {
        if (userMessage) {
            var newMessage = {};
            newMessage.sender = 'user';
            newMessage.content = userMessage;
            this.messageLog.push(newMessage);
            this.socket.emit('message', newMessage.content);
        }
    };
    ChatpageComponent.prototype.getMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatpage',
            template: __webpack_require__("./src/app/chatpage/chatpage.component.html"),
            styles: [__webpack_require__("./src/app/chatpage/chatpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatpageComponent);
    return ChatpageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "a{\n  color: inherit;\n  text-decoration: none;\n}\nfooter {\n  color: #2c4272;\n  margin-top:0px;\n}\n@media screen and (max-width:  575px), screen and (max-height: 535px) {\n  li {\n    display:none;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small stylish-color-dark pt-4 mt-4\">\n  <div class=\"container-fluid text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h5 class=\"text-uppercase\">Management</h5>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"https://www.github.com/conorm16\">Conor Mugan</a></li>\n          <li><a href=\"https://www.github.com/kaytlinchal\">Kaytlin Chaloner</a></li>\n          <li><a href=\"https://www.github.com/maibrahi\">Mamhamed Ibrahim</a></li>\n        </ul>\n      </div>\n      <div class=\"col-sm-4\">\n        <h5 class=\"text-uppercase\">Project</h5>\n        <ul class=\"list-unstyled\">\n          <li><a>Github</a></li>\n          <li><a>Licence</a></li>\n        </ul>\n      </div>\n      <div class=\"col-sm-4\">\n        <h5 class=\"text-uppercase\">Developers</h5>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"https://www.github.com/jdcarbeck\">John Carbeck</a></li>\n          <li><a href=\"https://www.github.com/sickfila\">Jakub Slowinski</a></li>\n          <li><a href=\"https://www.github.com/jameskhere\">James Kelleher</a></li>\n          <li><a href=\"https://www.github.com/dconnaughton\">Daniel Conaughton</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"footer-copyright py-1 text-center\">\n      © 2018 Copyright: SWENG6\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "#mainContainer {\n  padding: 0px;\n  height:100vh;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#36d1dc), to(#5b86e5));\n  background-image: linear-gradient(to bottom, #36d1dc, #5b86e5);\n}\n\nh1 {\n  text-align:center;\n}\n\nbutton {\n  outline:none;\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n#tagLine {\n  display:none;\n}\n\n#contentContainer {\n  color:white;\n}\n\n@media screen and (max-width:  575px), screen and (max-height: 430px) {\n  #appDescription {\n    display:none;\n  }\n  #tagLine {\n    display:inline;  \n  }\n}\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex h-100 mx-auto flex-column\" id=\"mainContainer\">\n  <header class=\"masthead mb-auto\"><app-navbar></app-navbar></header>\n  <div class=\"container\" id=\"contentContainer\">\n    <div class=\"row\" id=\"brandName\">\n      <div class=\"col\">\n        <h1 class=\"display-4 text-center\">guideBot</h1>\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col p-3\">\n        <p class=\"lead\" id=\"tagLine\">A Course and University Selection Chat Bot</p>\n        <p class=\"lead\" id=\"appDescription\">\nguideBot helps sixth year secondary students find the right course and third level institution. Powered by IBM's Watson, this chat bot was developed for the software engineering project for Trinity College Dublin.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <button type=\"button\" class=\"btn btn-primary mx-auto\" routerLink=\"chat\">let's get started</button>\n    </div>\n  </div>\n  <footer class=\"mastfoot mt-auto\"><app-footer></app-footer></footer>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-default\n{ \n  border-bottom: 0px solid #ddd; \n  background: white;\n}\n\nnav {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\nspan {\n  font-size:.8em;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\"> \n    <div class=\"navbar-header\">\n      <a id=\"navL\" class = navbar-brand routerLink=\"\"><h3>guideBot</h3></a>\n      <span class=\"navbar-text navbar-right\">Powered by IBM Watson</span>\n    </div>\n  </div>\n</nav>  \n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map