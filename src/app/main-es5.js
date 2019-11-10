function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blink.directive */
    "./src/app/blink.directive.ts");
    /* harmony import */


    var _bounce_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bounce.directive */
    "./src/app/bounce.directive.ts");
    /* harmony import */


    var _drag_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./drag.directive */
    "./src/app/drag.directive.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 1,
      consts: [["blink", ""], ["bounce", ""], ["blink", "", 3, "speed"], ["makeDraggable", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I Blink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This bounces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This blinks faster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Drag Me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("speed", 200);
        }
      },
      directives: [_blink_directive__WEBPACK_IMPORTED_MODULE_1__["BlinkDirective"], _bounce_directive__WEBPACK_IMPORTED_MODULE_2__["BounceDirective"], _drag_directive__WEBPACK_IMPORTED_MODULE_3__["DragDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: './app.component.html'
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _blink_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blink.directive */
    "./src/app/blink.directive.ts");
    /* harmony import */


    var _bounce_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bounce.directive */
    "./src/app/bounce.directive.ts");
    /* harmony import */


    var _drag_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./drag.directive */
    "./src/app/drag.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _blink_directive__WEBPACK_IMPORTED_MODULE_3__["BlinkDirective"], _bounce_directive__WEBPACK_IMPORTED_MODULE_4__["BounceDirective"], _drag_directive__WEBPACK_IMPORTED_MODULE_5__["DragDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _blink_directive__WEBPACK_IMPORTED_MODULE_3__["BlinkDirective"], _bounce_directive__WEBPACK_IMPORTED_MODULE_4__["BounceDirective"], _drag_directive__WEBPACK_IMPORTED_MODULE_5__["DragDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/blink.directive.ts":
  /*!************************************!*\
    !*** ./src/app/blink.directive.ts ***!
    \************************************/

  /*! exports provided: BlinkDirective */

  /***/
  function srcAppBlinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlinkDirective", function () {
      return BlinkDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlinkDirective =
    /*#__PURE__*/
    function () {
      function BlinkDirective() {
        _classCallCheck(this, BlinkDirective);

        this.viz = 'visible';
      }

      _createClass(BlinkDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.intervalId) {
            this.start(500);
          }
        }
      }, {
        key: "start",
        value: function start(ms) {
          var _this = this;

          this.intervalId = window.setInterval(function () {
            _this.viz = _this.viz === 'visible' ? 'hidden' : 'visible';
          }, ms);
        }
      }, {
        key: "stop",
        value: function stop() {
          if (this.intervalId) {
            window.clearInterval(this.intervalId);
            this.intervalId = undefined;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stop();
        }
      }, {
        key: "speed",
        set: function set(rawSpeed) {
          this.stop();
          this.start(Number(rawSpeed) || 500);
        }
      }]);

      return BlinkDirective;
    }();

    BlinkDirective.ɵfac = function BlinkDirective_Factory(t) {
      return new (t || BlinkDirective)();
    };

    BlinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BlinkDirective,
      selectors: [["", "blink", ""]],
      hostBindings: function BlinkDirective_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.viz);
        }
      },
      inputs: {
        speed: "speed"
      }
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlinkDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[blink]'
      }]
    }], null, {
      viz: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.visibility']
      }],
      speed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/bounce.directive.ts":
  /*!*************************************!*\
    !*** ./src/app/bounce.directive.ts ***!
    \*************************************/

  /*! exports provided: BounceDirective */

  /***/
  function srcAppBounceDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BounceDirective", function () {
      return BounceDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BounceDirective =
    /*#__PURE__*/
    function () {
      function BounceDirective() {
        var _this2 = this;

        _classCallCheck(this, BounceDirective);

        this.transform = '';
        this.speed = 25;
        this.n = 0;
        this.intervalId = window.setInterval(function () {
          _this2.n = _this2.n + 0.1;
          var rotation = Math.sin(_this2.n) * 5;
          _this2.transform = "rotate(".concat(rotation, "deg)");
        }, this.speed);
      }

      _createClass(BounceDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.intervalId);
        }
      }]);

      return BounceDirective;
    }();

    BounceDirective.ɵfac = function BounceDirective_Factory(t) {
      return new (t || BounceDirective)();
    };

    BounceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BounceDirective,
      selectors: [["", "bounce", ""]],
      hostBindings: function BounceDirective_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.transform);
        }
      },
      inputs: {
        speed: "speed"
      }
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BounceDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[bounce]'
      }]
    }], function () {
      return [];
    }, {
      transform: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.transform']
      }],
      speed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/drag.directive.ts":
  /*!***********************************!*\
    !*** ./src/app/drag.directive.ts ***!
    \***********************************/

  /*! exports provided: DragDirective */

  /***/
  function srcAppDragDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDirective", function () {
      return DragDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DragDirective =
    /*#__PURE__*/
    function () {
      function DragDirective() {
        _classCallCheck(this, DragDirective);

        this.position = 'relative';
        this.border = '1px solid green';
        this.padding = '3px';
        this.backgroundColor = '#EEE';
        this.cursor = 'pointer';
        this.x = 0;
        this.y = 0;
        this.startX = 0;
        this.startY = 0;
        this.mm = this.mousemove.bind(this);
        this.mu = this.mouseup.bind(this);
      }

      _createClass(DragDirective, [{
        key: "mousedown",
        value: function mousedown(event) {
          event.preventDefault();
          this.startX = event.pageX - this.x;
          this.startY = event.pageY - this.y; // watch the whole window

          document.addEventListener('mousemove', this.mm);
          document.addEventListener('mouseup', this.mu);
        }
      }, {
        key: "mousemove",
        value: function mousemove(event) {
          this.x = event.pageX - this.startX;
          this.y = event.pageY - this.startY;
        }
      }, {
        key: "mouseup",
        value: function mouseup() {
          document.removeEventListener('mousemove', this.mm);
          document.removeEventListener('mouseup', this.mu);
        }
      }]);

      return DragDirective;
    }();

    DragDirective.ɵfac = function DragDirective_Factory(t) {
      return new (t || DragDirective)();
    };

    DragDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DragDirective,
      selectors: [["", "makeDraggable", ""]],
      hostBindings: function DragDirective_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DragDirective_mousedown_HostBindingHandler($event) {
            return ctx.mousedown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("position", ctx.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.border);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.padding);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", ctx.cursor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.x, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.y, "px");
        }
      }
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[makeDraggable]'
      }]
    }], null, {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.position']
      }],
      border: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.border']
      }],
      padding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.padding']
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.backgroundColor']
      }],
      cursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.cursor']
      }],
      x: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.left.px']
      }],
      y: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.top.px']
      }],
      mousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }]
    });
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map