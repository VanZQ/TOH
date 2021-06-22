(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_io_example"] = self["webpackChunkangular_io_example"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      7528);
      /* harmony import */


      var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./heroes/heroes.component */
      1680);
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      4598);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'detail/:id',
        component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_2__.HeroDetailComponent
      }, {
        path: 'heroes',
        component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__.HeroesComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./messages/messages.component */
      5298);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = '英雄之旅';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 14,
        vars: 1,
        consts: [["autoplay", "", "loop", "", "muted", ""], ["src", "\n  https://video.qiantucdn.com/58pic/37/43/09/64I58PICJBwIy9kh3gHHW.mp4_10s.mp4?e=1624350123&token=OyzEe_0O8H433pm7zVEjtnSy5dVdfpsIawO2nx3f:s7YsvBk4ESI5MvW8gKUOOVRUL44=", "type", "video/mp4"], ["routerLink", "/dashboard"], ["routerLink", "/heroes"], ["href", "https://vanzq.github.io/Website/Conclusion.HTML", "target", "_blank"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "video", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "source", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\nYour browser does not support the video tag.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u62A5\u544A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-messages");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent],
        styles: ["h1[_ngcontent-%COMP%] {\n  color: rgb(236, 74, 25);\n  margin-bottom: 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-decoration: none;\n  margin-top: 10px;\n  margin-right: 10px;\n  display: inline-block;\n  background-color: #4e4c4c;\n  color: #ffffff;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #dd8f85;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: dd8f85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICBjb2xvcjogcmdiKDIzNiwgNzQsIDI1KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGM0YztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ4Zjg1O1xufVxubmF2IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGQ4Zjg1O1xufVxuIl19 */", "*[_ngcontent-%COMP%]{  \n             margin: 0px;  \n             padding: 0px;  \n         }  \n         video[_ngcontent-%COMP%]{  \n             position: fixed;  \n             right: 0px;  \n             bottom: 0px;  \n             min-width: 100%;  \n             min-height: 100%;  \n             height: auto;  \n             width: auto;  \n             \n             \n               \n               \n             z-index:-11\n         }  \n         source[_ngcontent-%COMP%]{  \n             min-width: 100%;  \n             min-height: 100%;  \n             height: auto;  \n             width: auto;  \n         } \n     p[_ngcontent-%COMP%]{\n         width: 100%;\n       text-align: center;\n       font-size: 40px;\n       color: white;\n     }"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      5233);
      /* harmony import */


      var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./in-memory-data.service */
      2003);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      7528);
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      4598);
      /* harmony import */


      var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./heroes/heroes.component */
      1680);
      /* harmony import */


      var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./hero-search/hero-search.component */
      3671);
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./messages/messages.component */
      5298);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule.forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__.InMemoryDataService, {
          dataEncapsulation: false
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__.HeroesComponent, _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__.HeroDetailComponent, _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent, _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_7__.HeroSearchComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.HttpClientInMemoryWebApiModule]
        });
      })();
      /***/

    },

    /***/
    7528:
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../hero-search/hero-search.component */
      3671);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function DashboardComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", hero_r1.name, " ");
        }
      }

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(heroService) {
          _classCallCheck(this, _DashboardComponent);

          this.heroService = heroService;
          this.heroes = [];
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeroes();
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            var _this = this;

            this.heroService.getHeroes().subscribe(function (heroes) {
              return _this.heroes = heroes.slice(1, 5);
            });
          }
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 5,
        vars: 1,
        consts: [[1, "heroes-menu"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Top Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_a_3_Template, 2, 2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-hero-search");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heroes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_1__.HeroSearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: antiquewhite;\n}\n\n.heroes-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: auto;\n  max-width: 1000px;\n\n  \n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: #232324;\n  border-radius: 2px;\n  padding: 1rem;\n  font-size: 1.2rem;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  min-width: 70px;\n  margin: .5rem auto;\n  box-sizing: border-box;\n\n  \n  order: 0;\n  flex: 0 1 auto;\n  align-self: auto;\n}\n\n@media (min-width: 600px) {\n  a[_ngcontent-%COMP%] {\n    width: 18%;\n    box-sizing: content-box;\n  }\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 116, 116);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUM7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLFlBQVk7RUFLWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmhlcm9lcy1tZW51IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcblxuICAvKiBmbGV4Ym94ICovXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWFyZ2luOiAuNXJlbSBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC8qIGZsZXhib3ggKi9cbiAgb3JkZXI6IDA7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBhbGlnbi1zZWxmOiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYSB7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgfVxufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTE2LCAxMTYpO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4598:
    /*!******************************************************!*\
      !*** ./src/app/hero-detail/hero-detail.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroDetailComponent": function HeroDetailComponent() {
          return (
            /* binding */
            _HeroDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function HeroDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u82F1\u96C4\u540D\u79F0: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.hero.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u8FD4\u56DE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u4FDD\u5B58");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r0.hero.name), " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.hero.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.hero.name);
        }
      }

      var _HeroDetailComponent = /*#__PURE__*/function () {
        function _HeroDetailComponent(route, heroService, location) {
          _classCallCheck(this, _HeroDetailComponent);

          this.route = route;
          this.heroService = heroService;
          this.location = location;
        }

        _createClass(_HeroDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHero();
          }
        }, {
          key: "getHero",
          value: function getHero() {
            var _this2 = this;

            var id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
            this.heroService.getHero(id).subscribe(function (hero) {
              return _this2.hero = hero;
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            if (this.hero) {
              this.heroService.updateHero(this.hero).subscribe(function () {
                return _this3.goBack();
              });
            }
          }
        }]);

        return _HeroDetailComponent;
      }();

      _HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
        return new (t || _HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
      };

      _HeroDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeroDetailComponent,
        selectors: [["app-hero-detail"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "name"], ["for", "hero-name"], ["id", "hero-name", "placeholder", "Hero name", 3, "ngModel", "ngModelChange"], [3, "click"]],
        template: function HeroDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 16, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hero);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe],
        styles: ["label[_ngcontent-%COMP%] {\n  color: rgb(250, 208, 208);\n  font-weight: bold;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: .5rem;\n}\nbutton[_ngcontent-%COMP%] {\n  color: aliceblue;\n  margin-top: 20px;\n  margin-right: .5rem;\n  background-color: rgb(56, 55, 55);\n  padding: 1rem;\n  border-radius: 4px;\n  font-size: 1rem;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #dd8f85;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: rgb(238, 133, 133);\n  color: rgb(243, 235, 235);\n  cursor: auto;\n}\n.name[_ngcontent-%COMP%]{\n  color: rgb(250, 208, 208);\n}\nh2[_ngcontent-%COMP%]{\n  color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Imhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5sYWJlbCB7XG4gIGNvbG9yOiByZ2IoMjUwLCAyMDgsIDIwOCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW5wdXQge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogLjVyZW07XG59XG5idXR0b24ge1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU1LCA1NSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkOGY4NTtcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDEzMywgMTMzKTtcbiAgY29sb3I6IHJnYigyNDMsIDIzNSwgMjM1KTtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLm5hbWV7XG4gIGNvbG9yOiByZ2IoMjUwLCAyMDgsIDIwOCk7XG59XG5oMntcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    3671:
    /*!******************************************************!*\
      !*** ./src/app/hero-search/hero-search.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroSearchComponent": function HeroSearchComponent() {
          return (
            /* binding */
            _HeroSearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      4395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      7519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function HeroSearchComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
        }
      }

      var _HeroSearchComponent = /*#__PURE__*/function () {
        function _HeroSearchComponent(heroService) {
          _classCallCheck(this, _HeroSearchComponent);

          this.heroService = heroService;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        } // Push a search term into the observable stream.


        _createClass(_HeroSearchComponent, [{
          key: "search",
          value: function search(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.heroes$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(300), // ignore new term if same as previous term
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), // switch to new search observable each time the term changes
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (term) {
              return _this4.heroService.searchHeroes(term);
            }));
          }
        }]);

        return _HeroSearchComponent;
      }();

      _HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) {
        return new (t || _HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService));
      };

      _HeroSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeroSearchComponent,
        selectors: [["app-hero-search"]],
        decls: 8,
        vars: 3,
        consts: [["id", "search-component"], ["for", "search-box"], ["id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function HeroSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u641C\u7D22\u82F1\u96C4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeroSearchComponent_li_6_Template, 3, 2, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 1, ctx.heroes$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
        styles: ["label[_ngcontent-%COMP%] {\n  color: rgb(240, 173, 173);\n  font-weight: bold;\n  font-size: 2rem;\n  margin-top: 21rem;\n  margin-bottom: 5px;\n\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: .5rem;\n  width: 100%;\n  max-width: 600px;\n  box-sizing: border-box;\n  display: block;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: #336699 auto 1px;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgb(230, 17, 17);\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  display: inline-block;\n  width: 100%;\n  max-width: 600px;\n  padding: .5rem;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: rgb(230, 214, 214);\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #435A60;\n  color: white;\n}\n\nul.search-result[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCOztBQUU5QjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakIiLCJmaWxlIjoiaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cblxubGFiZWwge1xuICBjb2xvcjogcmdiKDI0MCwgMTczLCAxNzMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tdG9wOiAyMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG59XG5pbnB1dCB7XG4gIHBhZGRpbmc6IC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogIzMzNjY5OSBhdXRvIDFweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzAsIDE3LCAxNyk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYigyMzAsIDIxNCwgMjE0KTtcbn1cblxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzVBNjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    2342:
    /*!*********************************!*\
      !*** ./src/app/hero.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroService": function HeroService() {
          return (
            /* binding */
            _HeroService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message.service */
      4206);

      var _HeroService = /*#__PURE__*/function () {
        function _HeroService(http, messageService) {
          _classCallCheck(this, _HeroService);

          this.http = http;
          this.messageService = messageService;
          this.heroesUrl = 'api/heroes'; // URL to web api

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
        }
        /** GET heroes from the server */


        _createClass(_HeroService, [{
          key: "getHeroes",
          value: function getHeroes() {
            var _this5 = this;

            return this.http.get(this.heroesUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this5.log('fetched heroes');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getHeroes', [])));
          }
          /** GET hero by id. Return `undefined` when id not found */

        }, {
          key: "getHeroNo404",
          value: function getHeroNo404(id) {
            var _this6 = this;

            var url = "".concat(this.heroesUrl, "/?id=").concat(id);
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (heroes) {
              return heroes[0];
            }), // returns a {0|1} element array
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (h) {
              var outcome = h ? "fetched" : "did not find";

              _this6.log("".concat(outcome, " hero id=").concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError("getHero id=".concat(id))));
          }
          /** GET hero by id. Will 404 if id not found */

        }, {
          key: "getHero",
          value: function getHero(id) {
            var _this7 = this;

            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this7.log("fetched hero id=".concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError("getHero id=".concat(id))));
          }
          /* GET heroes whose name contains search term */

        }, {
          key: "searchHeroes",
          value: function searchHeroes(term) {
            var _this8 = this;

            if (!term.trim()) {
              // if not search term, return empty hero array.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
            }

            return this.http.get("".concat(this.heroesUrl, "/?name=").concat(term)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (x) {
              return x.length ? _this8.log("found heroes matching \"".concat(term, "\"")) : _this8.log("no heroes matching \"".concat(term, "\""));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('searchHeroes', [])));
          } //////// Save methods //////////

          /** POST: add a new hero to the server */

        }, {
          key: "addHero",
          value: function addHero(hero) {
            var _this9 = this;

            return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (newHero) {
              return _this9.log("added hero w/ id=".concat(newHero.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('addHero')));
          }
          /** DELETE: delete the hero from the server */

        }, {
          key: "deleteHero",
          value: function deleteHero(id) {
            var _this10 = this;

            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http["delete"](url, this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this10.log("deleted hero id=".concat(id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('deleteHero')));
          }
          /** PUT: update the hero on the server */

        }, {
          key: "updateHero",
          value: function updateHero(hero) {
            var _this11 = this;

            return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (_) {
              return _this11.log("updated hero id=".concat(hero.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('updateHero')));
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this12 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this12.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
            };
          }
          /** Log a HeroService message with the MessageService */

        }, {
          key: "log",
          value: function log(message) {
            this.messageService.add("HeroService: ".concat(message));
          }
        }]);

        return _HeroService;
      }();

      _HeroService.ɵfac = function HeroService_Factory(t) {
        return new (t || _HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _HeroService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _HeroService,
        factory: _HeroService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1680:
    /*!********************************************!*\
      !*** ./src/app/heroes/heroes.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeroesComponent": function HeroesComponent() {
          return (
            /* binding */
            _HeroesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../hero.service */
      2342);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);

      function HeroesComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroesComponent_li_10_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var hero_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3["delete"](hero_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hero_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
        }
      }

      var _HeroesComponent = /*#__PURE__*/function () {
        function _HeroesComponent(heroService) {
          _classCallCheck(this, _HeroesComponent);

          this.heroService = heroService;
          this.heroes = [];
        }

        _createClass(_HeroesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeroes();
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            var _this13 = this;

            this.heroService.getHeroes().subscribe(function (heroes) {
              return _this13.heroes = heroes;
            });
          }
        }, {
          key: "add",
          value: function add(name) {
            var _this14 = this;

            name = name.trim();

            if (!name) {
              return;
            }

            this.heroService.addHero({
              name: name
            }).subscribe(function (hero) {
              _this14.heroes.push(hero);
            });
          }
        }, {
          key: "delete",
          value: function _delete(hero) {
            this.heroes = this.heroes.filter(function (h) {
              return h !== hero;
            });
            this.heroService.deleteHero(hero.id).subscribe();
          }
        }]);

        return _HeroesComponent;
      }();

      _HeroesComponent.ɵfac = function HeroesComponent_Factory(t) {
        return new (t || _HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_0__.HeroService));
      };

      _HeroesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeroesComponent,
        selectors: [["app-heroes"]],
        decls: 11,
        vars: 1,
        consts: [["for", "new-hero"], ["id", "new-hero"], ["heroName", ""], [1, "add-button", 3, "click"], [1, "heroes"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], ["title", "delete hero", 1, "delete", 3, "click"]],
        template: function HeroesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "My Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u82F1\u96C4\u540D\u79F0\uFF1A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroesComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

              ctx.add(_r0.value);
              return _r0.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u6DFB\u52A0\u82F1\u96C4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeroesComponent_li_10_Template, 7, 3, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.heroes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: [".heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: .5rem;\n  margin: 1rem 0;\n  box-sizing: border-box;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  left: .1em;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n  display: block;\n  width: 100%;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #e6e6e6;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  background-color: #525252;\n  color: #fafafa;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: rgb(214, 169, 169);\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#4c4d4e;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.add-button[_ngcontent-%COMP%] {\n padding: .5rem 1.5rem; \n font-size: 1rem;\n margin-bottom: 2rem;\n background-color: #851c1c;\n color\uFF1Argb: rgb(236, 217, 217);\n}\n.add-button[_ngcontent-%COMP%]:hover {\n  color: rgb(219, 38, 38);\n  background-color: #14181a;\n}\nbutton.delete[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 210px;\n  top: 5px;\n  background-color: rgb(233, 103, 103);\n  color:  #f1e5e5;\n  font-size: 1.1rem;\n  padding: 1px 10px 3px 10px;\n}\nbutton.delete[_ngcontent-%COMP%]:hover {\n  background-color: #525252;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsNkJBQTZCO0FBQzlCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoiaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5oZXJvZXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbn1cblxuaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhlcm9lcyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVyb2VzIGxpOmhvdmVyIHtcbiAgbGVmdDogLjFlbTtcbn1cblxuLmhlcm9lcyBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVyb2VzIGE6aG92ZXIge1xuICBjb2xvcjogIzJjM2E0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmhlcm9lcyBhOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuXG4uaGVyb2VzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHJnYigyMTQsIDE2OSwgMTY5KTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNGM0ZDRlO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLmFkZC1idXR0b24ge1xuIHBhZGRpbmc6IC41cmVtIDEuNXJlbTsgXG4gZm9udC1zaXplOiAxcmVtO1xuIG1hcmdpbi1ib3R0b206IDJyZW07XG4gYmFja2dyb3VuZC1jb2xvcjogIzg1MWMxYztcbiBjb2xvcu+8mnJnYjogcmdiKDIzNiwgMjE3LCAyMTcpO1xufVxuXG4uYWRkLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjE5LCAzOCwgMzgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxODFhO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDEwMywgMTAzKTtcbiAgY29sb3I6ICAjZjFlNWU1O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMXB4IDEwcHggM3B4IDEwcHg7XG59XG5cbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    2003:
    /*!*******************************************!*\
      !*** ./src/app/in-memory-data.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InMemoryDataService": function InMemoryDataService() {
          return (
            /* binding */
            _InMemoryDataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _InMemoryDataService = /*#__PURE__*/function () {
        function _InMemoryDataService() {
          _classCallCheck(this, _InMemoryDataService);
        }

        _createClass(_InMemoryDataService, [{
          key: "createDb",
          value: function createDb() {
            var heroes = [{
              id: 11,
              name: 'Dr Nice'
            }, {
              id: 12,
              name: 'Narco'
            }, {
              id: 13,
              name: 'Bombasto'
            }, {
              id: 14,
              name: 'Celeritas'
            }, {
              id: 15,
              name: 'Magneta'
            }, {
              id: 16,
              name: 'RubberMan'
            }, {
              id: 17,
              name: 'Dynama'
            }, {
              id: 18,
              name: 'Dr IQ'
            }, {
              id: 19,
              name: 'Magma'
            }, {
              id: 20,
              name: 'Tornado'
            }];
            return {
              heroes: heroes
            };
          } // Overrides the genId method to ensure that a hero always has an id.
          // If the heroes array is empty,
          // the method below returns the initial number (11).
          // if the heroes array is not empty, the method below returns the highest
          // hero id + 1.

        }, {
          key: "genId",
          value: function genId(heroes) {
            return heroes.length > 0 ? Math.max.apply(Math, _toConsumableArray(heroes.map(function (hero) {
              return hero.id;
            }))) + 1 : 11;
          }
        }]);

        return _InMemoryDataService;
      }();

      _InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
        return new (t || _InMemoryDataService)();
      };

      _InMemoryDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _InMemoryDataService,
        factory: _InMemoryDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4206:
    /*!************************************!*\
      !*** ./src/app/message.service.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* binding */
            _MessageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MessageService = /*#__PURE__*/function () {
        function _MessageService() {
          _classCallCheck(this, _MessageService);

          this.messages = [];
        }

        _createClass(_MessageService, [{
          key: "add",
          value: function add(message) {
            this.messages.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messages = [];
          }
        }]);

        return _MessageService;
      }();

      _MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || _MessageService)();
      };

      _MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MessageService,
        factory: _MessageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    5298:
    /*!************************************************!*\
      !*** ./src/app/messages/messages.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagesComponent": function MessagesComponent() {
          return (
            /* binding */
            _MessagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../message.service */
      4206);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function MessagesComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r2, " ");
        }
      }

      function MessagesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u4FE1\u606F");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.messageService.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u6E05\u9664");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
        }
      }

      var _MessagesComponent = /*#__PURE__*/function () {
        function _MessagesComponent(messageService) {
          _classCallCheck(this, _MessagesComponent);

          this.messageService = messageService;
        }

        _createClass(_MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MessagesComponent;
      }();

      _MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || _MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService));
      };

      _MessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MessagesComponent,
        selectors: [["app-messages"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "clear", 3, "click"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"]],
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: ["h2[_ngcontent-%COMP%] {\n  color: #e47373;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n.clear[_ngcontent-%COMP%] {\n  color: rgb(240, 223, 223);\n  background-color: rgb(73, 69, 69);\n  margin-bottom: 12px;\n  padding: 1rem;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.clear[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #dd8f85;\n}\n.message[_ngcontent-%COMP%]{\n  color:antiquewhite\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6ICNlNDczNzM7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmNsZWFyIHtcbiAgY29sb3I6IHJnYigyNDAsIDIyMywgMjIzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA2OSwgNjkpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jbGVhcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ4Zjg1O1xufVxuLm1lc3NhZ2V7XG4gIGNvbG9yOmFudGlxdWV3aGl0ZVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map