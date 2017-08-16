/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _member = __webpack_require__(2);

	var _member2 = _interopRequireDefault(_member);

	var _sketch = __webpack_require__(3);

	var _sketch2 = _interopRequireDefault(_sketch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	    function App() {
	        _classCallCheck(this, App);

	        var self = this;
	        var vue = new _vue2.default({
	            el: "#main",
	            data: {
	                members: []
	            },
	            mounted: function mounted() {
	                var _this = this;

	                self.request("/json/members.json").then(function (data) {
	                    _this.members = data.map(function (d) {
	                        return new _member2.default(d);
	                    });
	                });
	            }
	        });

	        var canvas = document.getElementById("background");
	        new _sketch2.default(canvas);
	    }

	    _createClass(App, [{
	        key: "request",
	        value: function request(path) {
	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", path, true);
	                xhr.onreadystatechange = function () {
	                    if (xhr.readyState == 4) {
	                        // `DONE`
	                        var status = xhr.status;
	                        if (status == 200) {
	                            resolve(JSON.parse(xhr.responseText));
	                        } else {
	                            reject(status);
	                        }
	                    }
	                };
	                xhr.send();
	            });
	        }
	    }]);

	    return App;
	}();

	new App();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Vue.js v2.4.1
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.Vue = e();
	}(undefined, function () {
	  "use strict";
	  function t(t) {
	    return void 0 === t || null === t;
	  }function e(t) {
	    return void 0 !== t && null !== t;
	  }function n(t) {
	    return !0 === t;
	  }function r(t) {
	    return !1 === t;
	  }function i(t) {
	    return "string" == typeof t || "number" == typeof t;
	  }function o(t) {
	    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	  }function a(t) {
	    return "[object Object]" === di.call(t);
	  }function s(t) {
	    return "[object RegExp]" === di.call(t);
	  }function c(t) {
	    var e = parseFloat(t);return e >= 0 && Math.floor(e) === e && isFinite(t);
	  }function u(t) {
	    return null == t ? "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? JSON.stringify(t, null, 2) : String(t);
	  }function l(t) {
	    var e = parseFloat(t);return isNaN(e) ? t : e;
	  }function f(t, e) {
	    for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) {
	      n[r[i]] = !0;
	    }return e ? function (t) {
	      return n[t.toLowerCase()];
	    } : function (t) {
	      return n[t];
	    };
	  }function p(t, e) {
	    if (t.length) {
	      var n = t.indexOf(e);if (n > -1) return t.splice(n, 1);
	    }
	  }function d(t, e) {
	    return mi.call(t, e);
	  }function v(t) {
	    var e = Object.create(null);return function (n) {
	      return e[n] || (e[n] = t(n));
	    };
	  }function h(t, e) {
	    function n(n) {
	      var r = arguments.length;return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
	    }return n._length = t.length, n;
	  }function m(t, e) {
	    e = e || 0;for (var n = t.length - e, r = new Array(n); n--;) {
	      r[n] = t[n + e];
	    }return r;
	  }function y(t, e) {
	    for (var n in e) {
	      t[n] = e[n];
	    }return t;
	  }function g(t) {
	    for (var e = {}, n = 0; n < t.length; n++) {
	      t[n] && y(e, t[n]);
	    }return e;
	  }function _(t, e, n) {}function b(t, e) {
	    var n = o(t),
	        r = o(e);if (!n || !r) return !n && !r && String(t) === String(e);try {
	      return JSON.stringify(t) === JSON.stringify(e);
	    } catch (n) {
	      return t === e;
	    }
	  }function $(t, e) {
	    for (var n = 0; n < t.length; n++) {
	      if (b(t[n], e)) return n;
	    }return -1;
	  }function C(t) {
	    var e = !1;return function () {
	      e || (e = !0, t.apply(this, arguments));
	    };
	  }function w(t) {
	    var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
	  }function x(t, e, n, r) {
	    Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
	  }function A(t) {
	    if (!Ti.test(t)) {
	      var e = t.split(".");return function (t) {
	        for (var n = 0; n < e.length; n++) {
	          if (!t) return;t = t[e[n]];
	        }return t;
	      };
	    }
	  }function k(t, e, n) {
	    if (Oi.errorHandler) Oi.errorHandler.call(null, t, e, n);else {
	      if (!Ni || "undefined" == typeof console) throw t;console.error(t);
	    }
	  }function O(t) {
	    return "function" == typeof t && /native code/.test(t.toString());
	  }function S(t) {
	    Zi.target && Yi.push(Zi.target), Zi.target = t;
	  }function T() {
	    Zi.target = Yi.pop();
	  }function E(t, e, n) {
	    t.__proto__ = e;
	  }function j(t, e, n) {
	    for (var r = 0, i = n.length; r < i; r++) {
	      var o = n[r];x(t, o, e[o]);
	    }
	  }function N(t, e) {
	    if (o(t)) {
	      var n;return d(t, "__ob__") && t.__ob__ instanceof no ? n = t.__ob__ : eo.shouldConvert && !Ki() && (Array.isArray(t) || a(t)) && Object.isExtensible(t) && !t._isVue && (n = new no(t)), e && n && n.vmCount++, n;
	    }
	  }function L(t, e, n, r, i) {
	    var o = new Zi(),
	        a = Object.getOwnPropertyDescriptor(t, e);if (!a || !1 !== a.configurable) {
	      var s = a && a.get,
	          c = a && a.set,
	          u = !i && N(n);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
	          var e = s ? s.call(t) : n;return Zi.target && (o.depend(), u && u.dep.depend(), Array.isArray(e) && D(e)), e;
	        }, set: function set(e) {
	          var r = s ? s.call(t) : n;e === r || e !== e && r !== r || (c ? c.call(t, e) : n = e, u = !i && N(e), o.notify());
	        } });
	    }
	  }function I(t, e, n) {
	    if (Array.isArray(t) && c(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;if (d(t, e)) return t[e] = n, n;var r = t.__ob__;return t._isVue || r && r.vmCount ? n : r ? (L(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n);
	  }function M(t, e) {
	    if (Array.isArray(t) && c(e)) t.splice(e, 1);else {
	      var n = t.__ob__;t._isVue || n && n.vmCount || d(t, e) && (delete t[e], n && n.dep.notify());
	    }
	  }function D(t) {
	    for (var e = void 0, n = 0, r = t.length; n < r; n++) {
	      (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && D(e);
	    }
	  }function P(t, e) {
	    if (!e) return t;for (var n, r, i, o = Object.keys(e), s = 0; s < o.length; s++) {
	      r = t[n = o[s]], i = e[n], d(t, n) ? a(r) && a(i) && P(r, i) : I(t, n, i);
	    }return t;
	  }function F(t, e, n) {
	    return n ? t || e ? function () {
	      var r = "function" == typeof e ? e.call(n) : e,
	          i = "function" == typeof t ? t.call(n) : void 0;return r ? P(r, i) : i;
	    } : void 0 : e ? t ? function () {
	      return P("function" == typeof e ? e.call(this) : e, t.call(this));
	    } : e : t;
	  }function R(t, e) {
	    return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
	  }function H(t, e) {
	    var n = Object.create(t || null);return e ? y(n, e) : n;
	  }function B(t) {
	    var e = t.props;if (e) {
	      var n,
	          r,
	          i = {};if (Array.isArray(e)) for (n = e.length; n--;) {
	        "string" == typeof (r = e[n]) && (i[gi(r)] = { type: null });
	      } else if (a(e)) for (var o in e) {
	        r = e[o], i[gi(o)] = a(r) ? r : { type: r };
	      }t.props = i;
	    }
	  }function U(t) {
	    var e = t.inject;if (Array.isArray(e)) for (var n = t.inject = {}, r = 0; r < e.length; r++) {
	      n[e[r]] = e[r];
	    }
	  }function V(t) {
	    var e = t.directives;if (e) for (var n in e) {
	      var r = e[n];"function" == typeof r && (e[n] = { bind: r, update: r });
	    }
	  }function z(t, e, n) {
	    function r(r) {
	      var i = ro[r] || io;c[r] = i(t[r], e[r], n, r);
	    }"function" == typeof e && (e = e.options), B(e), U(e), V(e);var i = e.extends;if (i && (t = z(t, i, n)), e.mixins) for (var o = 0, a = e.mixins.length; o < a; o++) {
	      t = z(t, e.mixins[o], n);
	    }var s,
	        c = {};for (s in t) {
	      r(s);
	    }for (s in e) {
	      d(t, s) || r(s);
	    }return c;
	  }function K(t, e, n, r) {
	    if ("string" == typeof n) {
	      var i = t[e];if (d(i, n)) return i[n];var o = gi(n);if (d(i, o)) return i[o];var a = _i(o);if (d(i, a)) return i[a];var s = i[n] || i[o] || i[a];return s;
	    }
	  }function J(t, e, n, r) {
	    var i = e[t],
	        o = !d(n, t),
	        a = n[t];if (G(Boolean, i.type) && (o && !d(i, "default") ? a = !1 : G(String, i.type) || "" !== a && a !== $i(t) || (a = !0)), void 0 === a) {
	      a = q(r, i, t);var s = eo.shouldConvert;eo.shouldConvert = !0, N(a), eo.shouldConvert = s;
	    }return a;
	  }function q(t, e, n) {
	    if (d(e, "default")) {
	      var r = e.default;return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== W(e.type) ? r.call(t) : r;
	    }
	  }function W(t) {
	    var e = t && t.toString().match(/^\s*function (\w+)/);return e ? e[1] : "";
	  }function G(t, e) {
	    if (!Array.isArray(e)) return W(e) === W(t);for (var n = 0, r = e.length; n < r; n++) {
	      if (W(e[n]) === W(t)) return !0;
	    }return !1;
	  }function Z(t) {
	    return new oo(void 0, void 0, void 0, String(t));
	  }function Y(t) {
	    var e = new oo(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.isCloned = !0, e;
	  }function Q(t) {
	    for (var e = t.length, n = new Array(e), r = 0; r < e; r++) {
	      n[r] = Y(t[r]);
	    }return n;
	  }function X(t) {
	    function e() {
	      var t = arguments,
	          n = e.fns;if (!Array.isArray(n)) return n.apply(null, arguments);for (var r = n.slice(), i = 0; i < r.length; i++) {
	        r[i].apply(null, t);
	      }
	    }return e.fns = t, e;
	  }function tt(e, n, r, i, o) {
	    var a, s, c, u;for (a in e) {
	      s = e[a], c = n[a], u = uo(a), t(s) || (t(c) ? (t(s.fns) && (s = e[a] = X(s)), r(u.name, s, u.once, u.capture, u.passive)) : s !== c && (c.fns = s, e[a] = c));
	    }for (a in n) {
	      t(e[a]) && i((u = uo(a)).name, n[a], u.capture);
	    }
	  }function et(r, i, o) {
	    function a() {
	      o.apply(this, arguments), p(s.fns, a);
	    }var s,
	        c = r[i];t(c) ? s = X([a]) : e(c.fns) && n(c.merged) ? (s = c).fns.push(a) : s = X([c, a]), s.merged = !0, r[i] = s;
	  }function nt(n, r, i) {
	    var o = r.options.props;if (!t(o)) {
	      var a = {},
	          s = n.attrs,
	          c = n.props;if (e(s) || e(c)) for (var u in o) {
	        var l = $i(u);rt(a, c, u, l, !0) || rt(a, s, u, l, !1);
	      }return a;
	    }
	  }function rt(t, n, r, i, o) {
	    if (e(n)) {
	      if (d(n, r)) return t[r] = n[r], o || delete n[r], !0;if (d(n, i)) return t[r] = n[i], o || delete n[i], !0;
	    }return !1;
	  }function it(t) {
	    for (var e = 0; e < t.length; e++) {
	      if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
	    }return t;
	  }function ot(t) {
	    return i(t) ? [Z(t)] : Array.isArray(t) ? st(t) : void 0;
	  }function at(t) {
	    return e(t) && e(t.text) && r(t.isComment);
	  }function st(r, o) {
	    var a,
	        s,
	        c,
	        u = [];for (a = 0; a < r.length; a++) {
	      t(s = r[a]) || "boolean" == typeof s || (c = u[u.length - 1], Array.isArray(s) ? u.push.apply(u, st(s, (o || "") + "_" + a)) : i(s) ? at(c) ? c.text += String(s) : "" !== s && u.push(Z(s)) : at(s) && at(c) ? u[u.length - 1] = Z(c.text + s.text) : (n(r._isVList) && e(s.tag) && t(s.key) && e(o) && (s.key = "__vlist" + o + "_" + a + "__"), u.push(s)));
	    }return u;
	  }function ct(t, e) {
	    return t.__esModule && t.default && (t = t.default), o(t) ? e.extend(t) : t;
	  }function ut(t, e, n, r, i) {
	    var o = co();return o.asyncFactory = t, o.asyncMeta = { data: e, context: n, children: r, tag: i }, o;
	  }function lt(r, i, a) {
	    if (n(r.error) && e(r.errorComp)) return r.errorComp;if (e(r.resolved)) return r.resolved;if (n(r.loading) && e(r.loadingComp)) return r.loadingComp;if (!e(r.contexts)) {
	      var s = r.contexts = [a],
	          c = !0,
	          u = function u() {
	        for (var t = 0, e = s.length; t < e; t++) {
	          s[t].$forceUpdate();
	        }
	      },
	          l = C(function (t) {
	        r.resolved = ct(t, i), c || u();
	      }),
	          f = C(function (t) {
	        e(r.errorComp) && (r.error = !0, u());
	      }),
	          p = r(l, f);return o(p) && ("function" == typeof p.then ? t(r.resolved) && p.then(l, f) : e(p.component) && "function" == typeof p.component.then && (p.component.then(l, f), e(p.error) && (r.errorComp = ct(p.error, i)), e(p.loading) && (r.loadingComp = ct(p.loading, i), 0 === p.delay ? r.loading = !0 : setTimeout(function () {
	        t(r.resolved) && t(r.error) && (r.loading = !0, u());
	      }, p.delay || 200)), e(p.timeout) && setTimeout(function () {
	        t(r.resolved) && f(null);
	      }, p.timeout))), c = !1, r.loading ? r.loadingComp : r.resolved;
	    }r.contexts.push(a);
	  }function ft(t) {
	    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) {
	      var r = t[n];if (e(r) && e(r.componentOptions)) return r;
	    }
	  }function pt(t) {
	    t._events = Object.create(null), t._hasHookEvent = !1;var e = t.$options._parentListeners;e && ht(t, e);
	  }function dt(t, e, n) {
	    n ? so.$once(t, e) : so.$on(t, e);
	  }function vt(t, e) {
	    so.$off(t, e);
	  }function ht(t, e, n) {
	    so = t, tt(e, n || {}, dt, vt, t);
	  }function mt(t, e) {
	    var n = {};if (!t) return n;for (var r = [], i = 0, o = t.length; i < o; i++) {
	      var a = t[i];if (a.context !== e && a.functionalContext !== e || !a.data || null == a.data.slot) r.push(a);else {
	        var s = a.data.slot,
	            c = n[s] || (n[s] = []);"template" === a.tag ? c.push.apply(c, a.children) : c.push(a);
	      }
	    }return r.every(yt) || (n.default = r), n;
	  }function yt(t) {
	    return t.isComment || " " === t.text;
	  }function gt(t, e) {
	    e = e || {};for (var n = 0; n < t.length; n++) {
	      Array.isArray(t[n]) ? gt(t[n], e) : e[t[n].key] = t[n].fn;
	    }return e;
	  }function _t(t) {
	    var e = t.$options,
	        n = e.parent;if (n && !e.abstract) {
	      for (; n.$options.abstract && n.$parent;) {
	        n = n.$parent;
	      }n.$children.push(t);
	    }t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
	  }function bt(t, e, n) {
	    t.$el = e, t.$options.render || (t.$options.render = co), At(t, "beforeMount");var r;return r = function r() {
	      t._update(t._render(), n);
	    }, t._watcher = new _o(t, r, _), n = !1, null == t.$vnode && (t._isMounted = !0, At(t, "mounted")), t;
	  }function $t(t, e, n, r, i) {
	    var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== Si);if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = i, t.$attrs = r.data && r.data.attrs, t.$listeners = n, e && t.$options.props) {
	      eo.shouldConvert = !1;for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
	        var u = s[c];a[u] = J(u, t.$options.props, e, t);
	      }eo.shouldConvert = !0, t.$options.propsData = e;
	    }if (n) {
	      var l = t.$options._parentListeners;t.$options._parentListeners = n, ht(t, n, l);
	    }o && (t.$slots = mt(i, r.context), t.$forceUpdate());
	  }function Ct(t) {
	    for (; t && (t = t.$parent);) {
	      if (t._inactive) return !0;
	    }return !1;
	  }function wt(t, e) {
	    if (e) {
	      if (t._directInactive = !1, Ct(t)) return;
	    } else if (t._directInactive) return;if (t._inactive || null === t._inactive) {
	      t._inactive = !1;for (var n = 0; n < t.$children.length; n++) {
	        wt(t.$children[n]);
	      }At(t, "activated");
	    }
	  }function xt(t, e) {
	    if (!(e && (t._directInactive = !0, Ct(t)) || t._inactive)) {
	      t._inactive = !0;for (var n = 0; n < t.$children.length; n++) {
	        xt(t.$children[n]);
	      }At(t, "deactivated");
	    }
	  }function At(t, e) {
	    var n = t.$options[e];if (n) for (var r = 0, i = n.length; r < i; r++) {
	      try {
	        n[r].call(t);
	      } catch (n) {
	        k(n, t, e + " hook");
	      }
	    }t._hasHookEvent && t.$emit("hook:" + e);
	  }function kt() {
	    yo = fo.length = po.length = 0, vo = {}, ho = mo = !1;
	  }function Ot() {
	    mo = !0;var t, e;for (fo.sort(function (t, e) {
	      return t.id - e.id;
	    }), yo = 0; yo < fo.length; yo++) {
	      e = (t = fo[yo]).id, vo[e] = null, t.run();
	    }var n = po.slice(),
	        r = fo.slice();kt(), Et(n), St(r), Ji && Oi.devtools && Ji.emit("flush");
	  }function St(t) {
	    for (var e = t.length; e--;) {
	      var n = t[e],
	          r = n.vm;r._watcher === n && r._isMounted && At(r, "updated");
	    }
	  }function Tt(t) {
	    t._inactive = !1, po.push(t);
	  }function Et(t) {
	    for (var e = 0; e < t.length; e++) {
	      t[e]._inactive = !0, wt(t[e], !0);
	    }
	  }function jt(t) {
	    var e = t.id;if (null == vo[e]) {
	      if (vo[e] = !0, mo) {
	        for (var n = fo.length - 1; n > yo && fo[n].id > t.id;) {
	          n--;
	        }fo.splice(n + 1, 0, t);
	      } else fo.push(t);ho || (ho = !0, Wi(Ot));
	    }
	  }function Nt(t) {
	    bo.clear(), Lt(t, bo);
	  }function Lt(t, e) {
	    var n,
	        r,
	        i = Array.isArray(t);if ((i || o(t)) && Object.isExtensible(t)) {
	      if (t.__ob__) {
	        var a = t.__ob__.dep.id;if (e.has(a)) return;e.add(a);
	      }if (i) for (n = t.length; n--;) {
	        Lt(t[n], e);
	      } else for (n = (r = Object.keys(t)).length; n--;) {
	        Lt(t[r[n]], e);
	      }
	    }
	  }function It(t, e, n) {
	    $o.get = function () {
	      return this[e][n];
	    }, $o.set = function (t) {
	      this[e][n] = t;
	    }, Object.defineProperty(t, n, $o);
	  }function Mt(t) {
	    t._watchers = [];var e = t.$options;e.props && Dt(t, e.props), e.methods && Ut(t, e.methods), e.data ? Pt(t) : N(t._data = {}, !0), e.computed && Rt(t, e.computed), e.watch && e.watch !== Hi && Vt(t, e.watch);
	  }function Dt(t, e) {
	    var n = t.$options.propsData || {},
	        r = t._props = {},
	        i = t.$options._propKeys = [],
	        o = !t.$parent;eo.shouldConvert = o;for (var a in e) {
	      !function (o) {
	        i.push(o);var a = J(o, e, n, t);L(r, o, a), o in t || It(t, "_props", o);
	      }(a);
	    }eo.shouldConvert = !0;
	  }function Pt(t) {
	    var e = t.$options.data;a(e = t._data = "function" == typeof e ? Ft(e, t) : e || {}) || (e = {});for (var n = Object.keys(e), r = t.$options.props, i = (t.$options.methods, n.length); i--;) {
	      var o = n[i];r && d(r, o) || w(o) || It(t, "_data", o);
	    }N(e, !0);
	  }function Ft(t, e) {
	    try {
	      return t.call(e);
	    } catch (t) {
	      return k(t, e, "data()"), {};
	    }
	  }function Rt(t, e) {
	    var n = t._computedWatchers = Object.create(null);for (var r in e) {
	      var i = e[r],
	          o = "function" == typeof i ? i : i.get;n[r] = new _o(t, o, _, Co), r in t || Ht(t, r, i);
	    }
	  }function Ht(t, e, n) {
	    "function" == typeof n ? ($o.get = Bt(e), $o.set = _) : ($o.get = n.get ? !1 !== n.cache ? Bt(e) : n.get : _, $o.set = n.set ? n.set : _), Object.defineProperty(t, e, $o);
	  }function Bt(t) {
	    return function () {
	      var e = this._computedWatchers && this._computedWatchers[t];if (e) return e.dirty && e.evaluate(), Zi.target && e.depend(), e.value;
	    };
	  }function Ut(t, e) {
	    t.$options.props;for (var n in e) {
	      t[n] = null == e[n] ? _ : h(e[n], t);
	    }
	  }function Vt(t, e) {
	    for (var n in e) {
	      var r = e[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
	        zt(t, n, r[i]);
	      } else zt(t, n, r);
	    }
	  }function zt(t, e, n, r) {
	    return a(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
	  }function Kt(t) {
	    var e = t.$options.provide;e && (t._provided = "function" == typeof e ? e.call(t) : e);
	  }function Jt(t) {
	    var e = qt(t.$options.inject, t);e && (eo.shouldConvert = !1, Object.keys(e).forEach(function (n) {
	      L(t, n, e[n]);
	    }), eo.shouldConvert = !0);
	  }function qt(t, e) {
	    if (t) {
	      for (var n = Object.create(null), r = qi ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) {
	        for (var o = r[i], a = t[o], s = e; s;) {
	          if (s._provided && a in s._provided) {
	            n[o] = s._provided[a];break;
	          }s = s.$parent;
	        }
	      }return n;
	    }
	  }function Wt(t, n, r, i, o) {
	    var a = {},
	        s = t.options.props;if (e(s)) for (var c in s) {
	      a[c] = J(c, s, n || {});
	    } else e(r.attrs) && Gt(a, r.attrs), e(r.props) && Gt(a, r.props);var u = Object.create(i),
	        l = t.options.render.call(null, function (t, e, n, r) {
	      return ee(u, t, e, n, r, !0);
	    }, { data: r, props: a, children: o, parent: i, listeners: r.on || {}, injections: qt(t.options.inject, i), slots: function slots() {
	        return mt(o, i);
	      } });return l instanceof oo && (l.functionalContext = i, l.functionalOptions = t.options, r.slot && ((l.data || (l.data = {})).slot = r.slot)), l;
	  }function Gt(t, e) {
	    for (var n in e) {
	      t[gi(n)] = e[n];
	    }
	  }function Zt(r, i, a, s, c) {
	    if (!t(r)) {
	      var u = a.$options._base;if (o(r) && (r = u.extend(r)), "function" == typeof r) {
	        var l;if (t(r.cid) && (l = r, void 0 === (r = lt(l, u, a)))) return ut(l, i, a, s, c);i = i || {}, me(r), e(i.model) && te(r.options, i);var f = nt(i, r, c);if (n(r.options.functional)) return Wt(r, f, i, a, s);var p = i.on;if (n(r.options.abstract)) {
	          var d = i.slot;i = {}, d && (i.slot = d);
	        }Qt(i);var v = r.options.name || c;return new oo("vue-component-" + r.cid + (v ? "-" + v : ""), i, void 0, void 0, void 0, a, { Ctor: r, propsData: f, listeners: p, tag: c, children: s }, l);
	      }
	    }
	  }function Yt(t, n, r, i) {
	    var o = t.componentOptions,
	        a = { _isComponent: !0, parent: n, propsData: o.propsData, _componentTag: o.tag, _parentVnode: t, _parentListeners: o.listeners, _renderChildren: o.children, _parentElm: r || null, _refElm: i || null },
	        s = t.data.inlineTemplate;return e(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns), new o.Ctor(a);
	  }function Qt(t) {
	    t.hook || (t.hook = {});for (var e = 0; e < xo.length; e++) {
	      var n = xo[e],
	          r = t.hook[n],
	          i = wo[n];t.hook[n] = r ? Xt(i, r) : i;
	    }
	  }function Xt(t, e) {
	    return function (n, r, i, o) {
	      t(n, r, i, o), e(n, r, i, o);
	    };
	  }function te(t, n) {
	    var r = t.model && t.model.prop || "value",
	        i = t.model && t.model.event || "input";(n.props || (n.props = {}))[r] = n.model.value;var o = n.on || (n.on = {});e(o[i]) ? o[i] = [n.model.callback].concat(o[i]) : o[i] = n.model.callback;
	  }function ee(t, e, r, o, a, s) {
	    return (Array.isArray(r) || i(r)) && (a = o, o = r, r = void 0), n(s) && (a = ko), ne(t, e, r, o, a);
	  }function ne(t, n, r, i, o) {
	    if (e(r) && e(r.__ob__)) return co();if (e(r) && e(r.is) && (n = r.is), !n) return co();Array.isArray(i) && "function" == typeof i[0] && ((r = r || {}).scopedSlots = { default: i[0] }, i.length = 0), o === ko ? i = ot(i) : o === Ao && (i = it(i));var a, s;if ("string" == typeof n) {
	      var c;s = Oi.getTagNamespace(n), a = Oi.isReservedTag(n) ? new oo(Oi.parsePlatformTagName(n), r, i, void 0, void 0, t) : e(c = K(t.$options, "components", n)) ? Zt(c, r, t, i, n) : new oo(n, r, i, void 0, void 0, t);
	    } else a = Zt(n, r, t, i);return e(a) ? (s && re(a, s), a) : co();
	  }function re(n, r) {
	    if (n.ns = r, "foreignObject" !== n.tag && e(n.children)) for (var i = 0, o = n.children.length; i < o; i++) {
	      var a = n.children[i];e(a.tag) && t(a.ns) && re(a, r);
	    }
	  }function ie(t, n) {
	    var r, i, a, s, c;if (Array.isArray(t) || "string" == typeof t) for (r = new Array(t.length), i = 0, a = t.length; i < a; i++) {
	      r[i] = n(t[i], i);
	    } else if ("number" == typeof t) for (r = new Array(t), i = 0; i < t; i++) {
	      r[i] = n(i + 1, i);
	    } else if (o(t)) for (s = Object.keys(t), r = new Array(s.length), i = 0, a = s.length; i < a; i++) {
	      c = s[i], r[i] = n(t[c], c, i);
	    }return e(r) && (r._isVList = !0), r;
	  }function oe(t, e, n, r) {
	    var i = this.$scopedSlots[t];if (i) return n = n || {}, r && (n = y(y({}, r), n)), i(n) || e;var o = this.$slots[t];return o || e;
	  }function ae(t) {
	    return K(this.$options, "filters", t, !0) || wi;
	  }function se(t, e, n) {
	    var r = Oi.keyCodes[e] || n;return Array.isArray(r) ? -1 === r.indexOf(t) : r !== t;
	  }function ce(t, e, n, r, i) {
	    if (n) if (o(n)) {
	      Array.isArray(n) && (n = g(n));var a;for (var s in n) {
	        !function (o) {
	          if ("class" === o || "style" === o || hi(o)) a = t;else {
	            var s = t.attrs && t.attrs.type;a = r || Oi.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
	          }o in a || (a[o] = n[o], i && ((t.on || (t.on = {}))["update:" + o] = function (t) {
	            n[o] = t;
	          }));
	        }(s);
	      }
	    } else ;return t;
	  }function ue(t, e) {
	    var n = this._staticTrees[t];return n && !e ? Array.isArray(n) ? Q(n) : Y(n) : (n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), fe(n, "__static__" + t, !1), n);
	  }function le(t, e, n) {
	    return fe(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
	  }function fe(t, e, n) {
	    if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
	      t[r] && "string" != typeof t[r] && pe(t[r], e + "_" + r, n);
	    } else pe(t, e, n);
	  }function pe(t, e, n) {
	    t.isStatic = !0, t.key = e, t.isOnce = n;
	  }function de(t, e) {
	    if (e) if (a(e)) {
	      var n = t.on = t.on ? y({}, t.on) : {};for (var r in e) {
	        var i = n[r],
	            o = e[r];n[r] = i ? [].concat(o, i) : o;
	      }
	    } else ;return t;
	  }function ve(t) {
	    t._vnode = null, t._staticTrees = null;var e = t.$vnode = t.$options._parentVnode,
	        n = e && e.context;t.$slots = mt(t.$options._renderChildren, n), t.$scopedSlots = Si, t._c = function (e, n, r, i) {
	      return ee(t, e, n, r, i, !1);
	    }, t.$createElement = function (e, n, r, i) {
	      return ee(t, e, n, r, i, !0);
	    };var r = e && e.data;L(t, "$attrs", r && r.attrs, null, !0), L(t, "$listeners", r && r.on, null, !0);
	  }function he(t, e) {
	    var n = t.$options = Object.create(t.constructor.options);n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
	  }function me(t) {
	    var e = t.options;if (t.super) {
	      var n = me(t.super);if (n !== t.superOptions) {
	        t.superOptions = n;var r = ye(t);r && y(t.extendOptions, r), (e = t.options = z(n, t.extendOptions)).name && (e.components[e.name] = t);
	      }
	    }return e;
	  }function ye(t) {
	    var e,
	        n = t.options,
	        r = t.extendOptions,
	        i = t.sealedOptions;for (var o in n) {
	      n[o] !== i[o] && (e || (e = {}), e[o] = ge(n[o], r[o], i[o]));
	    }return e;
	  }function ge(t, e, n) {
	    if (Array.isArray(t)) {
	      var r = [];n = Array.isArray(n) ? n : [n], e = Array.isArray(e) ? e : [e];for (var i = 0; i < t.length; i++) {
	        (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
	      }return r;
	    }return t;
	  }function _e(t) {
	    this._init(t);
	  }function be(t) {
	    t.use = function (t) {
	      var e = this._installedPlugins || (this._installedPlugins = []);if (e.indexOf(t) > -1) return this;var n = m(arguments, 1);return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this;
	    };
	  }function $e(t) {
	    t.mixin = function (t) {
	      return this.options = z(this.options, t), this;
	    };
	  }function Ce(t) {
	    t.cid = 0;var e = 1;t.extend = function (t) {
	      t = t || {};var n = this,
	          r = n.cid,
	          i = t._Ctor || (t._Ctor = {});if (i[r]) return i[r];var o = t.name || n.options.name,
	          a = function a(t) {
	        this._init(t);
	      };return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = z(n.options, t), a.super = n, a.options.props && we(a), a.options.computed && xe(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Ai.forEach(function (t) {
	        a[t] = n[t];
	      }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = y({}, a.options), i[r] = a, a;
	    };
	  }function we(t) {
	    var e = t.options.props;for (var n in e) {
	      It(t.prototype, "_props", n);
	    }
	  }function xe(t) {
	    var e = t.options.computed;for (var n in e) {
	      Ht(t.prototype, n, e[n]);
	    }
	  }function Ae(t) {
	    Ai.forEach(function (e) {
	      t[e] = function (t, n) {
	        return n ? ("component" === e && a(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = { bind: n, update: n }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
	      };
	    });
	  }function ke(t) {
	    return t && (t.Ctor.options.name || t.tag);
	  }function Oe(t, e) {
	    return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!s(t) && t.test(e);
	  }function Se(t, e, n) {
	    for (var r in t) {
	      var i = t[r];if (i) {
	        var o = ke(i.componentOptions);o && !n(o) && (i !== e && Te(i), t[r] = null);
	      }
	    }
	  }function Te(t) {
	    t && t.componentInstance.$destroy();
	  }function Ee(t) {
	    for (var n = t.data, r = t, i = t; e(i.componentInstance);) {
	      (i = i.componentInstance._vnode).data && (n = je(i.data, n));
	    }for (; e(r = r.parent);) {
	      r.data && (n = je(n, r.data));
	    }return Ne(n.staticClass, n.class);
	  }function je(t, n) {
	    return { staticClass: Le(t.staticClass, n.staticClass), class: e(t.class) ? [t.class, n.class] : n.class };
	  }function Ne(t, n) {
	    return e(t) || e(n) ? Le(t, Ie(n)) : "";
	  }function Le(t, e) {
	    return t ? e ? t + " " + e : t : e || "";
	  }function Ie(t) {
	    return Array.isArray(t) ? Me(t) : o(t) ? De(t) : "string" == typeof t ? t : "";
	  }function Me(t) {
	    for (var n, r = "", i = 0, o = t.length; i < o; i++) {
	      e(n = Ie(t[i])) && "" !== n && (r && (r += " "), r += n);
	    }return r;
	  }function De(t) {
	    var e = "";for (var n in t) {
	      t[n] && (e && (e += " "), e += n);
	    }return e;
	  }function Pe(t) {
	    return Zo(t) ? "svg" : "math" === t ? "math" : void 0;
	  }function Fe(t) {
	    if ("string" == typeof t) {
	      var e = document.querySelector(t);return e || document.createElement("div");
	    }return t;
	  }function Re(t, e) {
	    var n = t.data.ref;if (n) {
	      var r = t.context,
	          i = t.componentInstance || t.elm,
	          o = r.$refs;e ? Array.isArray(o[n]) ? p(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i;
	    }
	  }function He(r, i) {
	    return r.key === i.key && (r.tag === i.tag && r.isComment === i.isComment && e(r.data) === e(i.data) && Be(r, i) || n(r.isAsyncPlaceholder) && r.asyncFactory === i.asyncFactory && t(i.asyncFactory.error));
	  }function Be(t, n) {
	    if ("input" !== t.tag) return !0;var r;return (e(r = t.data) && e(r = r.attrs) && r.type) === (e(r = n.data) && e(r = r.attrs) && r.type);
	  }function Ue(t, n, r) {
	    var i,
	        o,
	        a = {};for (i = n; i <= r; ++i) {
	      e(o = t[i].key) && (a[o] = i);
	    }return a;
	  }function Ve(t, e) {
	    (t.data.directives || e.data.directives) && ze(t, e);
	  }function ze(t, e) {
	    var n,
	        r,
	        i,
	        o = t === ea,
	        a = e === ea,
	        s = Ke(t.data.directives, t.context),
	        c = Ke(e.data.directives, e.context),
	        u = [],
	        l = [];for (n in c) {
	      r = s[n], i = c[n], r ? (i.oldValue = r.value, qe(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i)) : (qe(i, "bind", e, t), i.def && i.def.inserted && u.push(i));
	    }if (u.length) {
	      var f = function f() {
	        for (var n = 0; n < u.length; n++) {
	          qe(u[n], "inserted", e, t);
	        }
	      };o ? et(e.data.hook || (e.data.hook = {}), "insert", f) : f();
	    }if (l.length && et(e.data.hook || (e.data.hook = {}), "postpatch", function () {
	      for (var n = 0; n < l.length; n++) {
	        qe(l[n], "componentUpdated", e, t);
	      }
	    }), !o) for (n in s) {
	      c[n] || qe(s[n], "unbind", t, t, a);
	    }
	  }function Ke(t, e) {
	    var n = Object.create(null);if (!t) return n;var r, i;for (r = 0; r < t.length; r++) {
	      (i = t[r]).modifiers || (i.modifiers = ia), n[Je(i)] = i, i.def = K(e.$options, "directives", i.name, !0);
	    }return n;
	  }function Je(t) {
	    return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
	  }function qe(t, e, n, r, i) {
	    var o = t.def && t.def[e];if (o) try {
	      o(n.elm, t, n, r, i);
	    } catch (r) {
	      k(r, n.context, "directive " + t.name + " " + e + " hook");
	    }
	  }function We(n, r) {
	    var i = r.componentOptions;if (!(e(i) && !1 === i.Ctor.options.inheritAttrs || t(n.data.attrs) && t(r.data.attrs))) {
	      var o,
	          a,
	          s = r.elm,
	          c = n.data.attrs || {},
	          u = r.data.attrs || {};e(u.__ob__) && (u = r.data.attrs = y({}, u));for (o in u) {
	        a = u[o], c[o] !== a && Ge(s, o, a);
	      }Mi && u.value !== c.value && Ge(s, "value", u.value);for (o in c) {
	        t(u[o]) && (Ko(o) ? s.removeAttributeNS(zo, Jo(o)) : Uo(o) || s.removeAttribute(o));
	      }
	    }
	  }function Ge(t, e, n) {
	    Vo(e) ? qo(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : Uo(e) ? t.setAttribute(e, qo(n) || "false" === n ? "false" : "true") : Ko(e) ? qo(n) ? t.removeAttributeNS(zo, Jo(e)) : t.setAttributeNS(zo, e, n) : qo(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
	  }function Ze(n, r) {
	    var i = r.elm,
	        o = r.data,
	        a = n.data;if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
	      var s = Ee(r),
	          c = i._transitionClasses;e(c) && (s = Le(s, Ie(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s);
	    }
	  }function Ye(t) {
	    function e() {
	      (a || (a = [])).push(t.slice(v, i).trim()), v = i + 1;
	    }var n,
	        r,
	        i,
	        o,
	        a,
	        s = !1,
	        c = !1,
	        u = !1,
	        l = !1,
	        f = 0,
	        p = 0,
	        d = 0,
	        v = 0;for (i = 0; i < t.length; i++) {
	      if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (c) 34 === n && 92 !== r && (c = !1);else if (u) 96 === n && 92 !== r && (u = !1);else if (l) 47 === n && 92 !== r && (l = !1);else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || p || d) {
	        switch (n) {case 34:
	            c = !0;break;case 39:
	            s = !0;break;case 96:
	            u = !0;break;case 40:
	            d++;break;case 41:
	            d--;break;case 91:
	            p++;break;case 93:
	            p--;break;case 123:
	            f++;break;case 125:
	            f--;}if (47 === n) {
	          for (var h = i - 1, m = void 0; h >= 0 && " " === (m = t.charAt(h)); h--) {}m && ca.test(m) || (l = !0);
	        }
	      } else void 0 === o ? (v = i + 1, o = t.slice(0, i).trim()) : e();
	    }if (void 0 === o ? o = t.slice(0, i).trim() : 0 !== v && e(), a) for (i = 0; i < a.length; i++) {
	      o = Qe(o, a[i]);
	    }return o;
	  }function Qe(t, e) {
	    var n = e.indexOf("(");return n < 0 ? '_f("' + e + '")(' + t + ")" : '_f("' + e.slice(0, n) + '")(' + t + "," + e.slice(n + 1);
	  }function Xe(t) {
	    console.error("[Vue compiler]: " + t);
	  }function tn(t, e) {
	    return t ? t.map(function (t) {
	      return t[e];
	    }).filter(function (t) {
	      return t;
	    }) : [];
	  }function en(t, e, n) {
	    (t.props || (t.props = [])).push({ name: e, value: n });
	  }function nn(t, e, n) {
	    (t.attrs || (t.attrs = [])).push({ name: e, value: n });
	  }function rn(t, e, n, r, i, o) {
	    (t.directives || (t.directives = [])).push({ name: e, rawName: n, value: r, arg: i, modifiers: o });
	  }function on(t, e, n, r, i, o) {
	    r && r.capture && (delete r.capture, e = "!" + e), r && r.once && (delete r.once, e = "~" + e), r && r.passive && (delete r.passive, e = "&" + e);var a;r && r.native ? (delete r.native, a = t.nativeEvents || (t.nativeEvents = {})) : a = t.events || (t.events = {});var s = { value: n, modifiers: r },
	        c = a[e];Array.isArray(c) ? i ? c.unshift(s) : c.push(s) : a[e] = c ? i ? [s, c] : [c, s] : s;
	  }function an(t, e, n) {
	    var r = sn(t, ":" + e) || sn(t, "v-bind:" + e);if (null != r) return Ye(r);if (!1 !== n) {
	      var i = sn(t, e);if (null != i) return JSON.stringify(i);
	    }
	  }function sn(t, e) {
	    var n;if (null != (n = t.attrsMap[e])) for (var r = t.attrsList, i = 0, o = r.length; i < o; i++) {
	      if (r[i].name === e) {
	        r.splice(i, 1);break;
	      }
	    }return n;
	  }function cn(t, e, n) {
	    var r = n || {},
	        i = r.number,
	        o = "$$v";r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");var a = un(e, o);t.model = { value: "(" + e + ")", expression: '"' + e + '"', callback: "function ($$v) {" + a + "}" };
	  }function un(t, e) {
	    var n = ln(t);return null === n.idx ? t + "=" + e : "$set(" + n.exp + ", " + n.idx + ", " + e + ")";
	  }function ln(t) {
	    if (jo = t, Eo = jo.length, Lo = Io = Mo = 0, t.indexOf("[") < 0 || t.lastIndexOf("]") < Eo - 1) return { exp: t, idx: null };for (; !pn();) {
	      dn(No = fn()) ? hn(No) : 91 === No && vn(No);
	    }return { exp: t.substring(0, Io), idx: t.substring(Io + 1, Mo) };
	  }function fn() {
	    return jo.charCodeAt(++Lo);
	  }function pn() {
	    return Lo >= Eo;
	  }function dn(t) {
	    return 34 === t || 39 === t;
	  }function vn(t) {
	    var e = 1;for (Io = Lo; !pn();) {
	      if (t = fn(), dn(t)) hn(t);else if (91 === t && e++, 93 === t && e--, 0 === e) {
	        Mo = Lo;break;
	      }
	    }
	  }function hn(t) {
	    for (var e = t; !pn() && (t = fn()) !== e;) {}
	  }function mn(t, e, n) {
	    var r = n && n.number,
	        i = an(t, "value") || "null",
	        o = an(t, "true-value") || "true",
	        a = an(t, "false-value") || "false";en(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === o ? ":(" + e + ")" : ":_q(" + e + "," + o + ")")), on(t, la, "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + e + "=$$a.concat($$v))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + un(e, "$$c") + "}", null, !0);
	  }function yn(t, e, n) {
	    var r = n && n.number,
	        i = an(t, "value") || "null";en(t, "checked", "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"), on(t, la, un(e, i), null, !0);
	  }function gn(t, e, n) {
	    var r = "var $$selectedVal = " + ('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "})") + ";";on(t, "change", r = r + " " + un(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
	  }function _n(t, e, n) {
	    var r = t.attrsMap.type,
	        i = n || {},
	        o = i.lazy,
	        a = i.number,
	        s = i.trim,
	        c = !o && "range" !== r,
	        u = o ? "change" : "range" === r ? ua : "input",
	        l = "$event.target.value";s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");var f = un(e, l);c && (f = "if($event.target.composing)return;" + f), en(t, "value", "(" + e + ")"), on(t, u, f, null, !0), (s || a) && on(t, "blur", "$forceUpdate()");
	  }function bn(t) {
	    var n;e(t[ua]) && (t[n = Ii ? "change" : "input"] = [].concat(t[ua], t[n] || []), delete t[ua]), e(t[la]) && (t[n = Ri ? "click" : "change"] = [].concat(t[la], t[n] || []), delete t[la]);
	  }function $n(t, _e2, n, r, i) {
	    if (n) {
	      var o = _e2,
	          a = Po;_e2 = function e(n) {
	        null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) && Cn(t, _e2, r, a);
	      };
	    }Po.addEventListener(t, _e2, Bi ? { capture: r, passive: i } : r);
	  }function Cn(t, e, n, r) {
	    (r || Po).removeEventListener(t, e, n);
	  }function wn(n, r) {
	    var i = e(r.componentOptions),
	        o = i ? n.data.nativeOn : n.data.on,
	        a = i ? r.data.nativeOn : r.data.on;t(o) && t(a) || (a = a || {}, o = o || {}, Po = r.elm, bn(a), tt(a, o, $n, Cn, r.context));
	  }function xn(n, r) {
	    if (!t(n.data.domProps) || !t(r.data.domProps)) {
	      var i,
	          o,
	          a = r.elm,
	          s = n.data.domProps || {},
	          c = r.data.domProps || {};e(c.__ob__) && (c = r.data.domProps = y({}, c));for (i in s) {
	        t(c[i]) && (a[i] = "");
	      }for (i in c) {
	        if (o = c[i], "textContent" !== i && "innerHTML" !== i || (r.children && (r.children.length = 0), o !== s[i])) if ("value" === i) {
	          a._value = o;var u = t(o) ? "" : String(o);An(a, r, u) && (a.value = u);
	        } else a[i] = o;
	      }
	    }
	  }function An(t, e, n) {
	    return !t.composing && ("option" === e.tag || kn(t, n) || On(t, n));
	  }function kn(t, e) {
	    return document.activeElement !== t && t.value !== e;
	  }function On(t, n) {
	    var r = t.value,
	        i = t._vModifiers;return e(i) && i.number ? l(r) !== l(n) : e(i) && i.trim ? r.trim() !== n.trim() : r !== n;
	  }function Sn(t) {
	    var e = Tn(t.style);return t.staticStyle ? y(t.staticStyle, e) : e;
	  }function Tn(t) {
	    return Array.isArray(t) ? g(t) : "string" == typeof t ? da(t) : t;
	  }function En(t, e) {
	    var n,
	        r = {};if (e) for (var i = t; i.componentInstance;) {
	      (i = i.componentInstance._vnode).data && (n = Sn(i.data)) && y(r, n);
	    }(n = Sn(t.data)) && y(r, n);for (var o = t; o = o.parent;) {
	      o.data && (n = Sn(o.data)) && y(r, n);
	    }return r;
	  }function jn(n, r) {
	    var i = r.data,
	        o = n.data;if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
	      var a,
	          s,
	          c = r.elm,
	          u = o.staticStyle,
	          l = o.normalizedStyle || o.style || {},
	          f = u || l,
	          p = Tn(r.data.style) || {};r.data.normalizedStyle = e(p.__ob__) ? y({}, p) : p;var d = En(r, !0);for (s in f) {
	        t(d[s]) && ma(c, s, "");
	      }for (s in d) {
	        (a = d[s]) !== f[s] && ma(c, s, null == a ? "" : a);
	      }
	    }
	  }function Nn(t, e) {
	    if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
	      return t.classList.add(e);
	    }) : t.classList.add(e);else {
	      var n = " " + (t.getAttribute("class") || "") + " ";n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
	    }
	  }function Ln(t, e) {
	    if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
	      return t.classList.remove(e);
	    }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");else {
	      for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) {
	        n = n.replace(r, " ");
	      }(n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
	    }
	  }function In(t) {
	    if (t) {
	      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
	        var e = {};return !1 !== t.css && y(e, ba(t.name || "v")), y(e, t), e;
	      }return "string" == typeof t ? ba(t) : void 0;
	    }
	  }function Mn(t) {
	    Sa(function () {
	      Sa(t);
	    });
	  }function Dn(t, e) {
	    var n = t._transitionClasses || (t._transitionClasses = []);n.indexOf(e) < 0 && (n.push(e), Nn(t, e));
	  }function Pn(t, e) {
	    t._transitionClasses && p(t._transitionClasses, e), Ln(t, e);
	  }function Fn(t, e, n) {
	    var r = Rn(t, e),
	        i = r.type,
	        o = r.timeout,
	        a = r.propCount;if (!i) return n();var s = i === Ca ? Aa : Oa,
	        c = 0,
	        u = function u() {
	      t.removeEventListener(s, l), n();
	    },
	        l = function l(e) {
	      e.target === t && ++c >= a && u();
	    };setTimeout(function () {
	      c < a && u();
	    }, o + 1), t.addEventListener(s, l);
	  }function Rn(t, e) {
	    var n,
	        r = window.getComputedStyle(t),
	        i = r[xa + "Delay"].split(", "),
	        o = r[xa + "Duration"].split(", "),
	        a = Hn(i, o),
	        s = r[ka + "Delay"].split(", "),
	        c = r[ka + "Duration"].split(", "),
	        u = Hn(s, c),
	        l = 0,
	        f = 0;return e === Ca ? a > 0 && (n = Ca, l = a, f = o.length) : e === wa ? u > 0 && (n = wa, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? Ca : wa : null) ? n === Ca ? o.length : c.length : 0, { type: n, timeout: l, propCount: f, hasTransform: n === Ca && Ta.test(r[xa + "Property"]) };
	  }function Hn(t, e) {
	    for (; t.length < e.length;) {
	      t = t.concat(t);
	    }return Math.max.apply(null, e.map(function (e, n) {
	      return Bn(e) + Bn(t[n]);
	    }));
	  }function Bn(t) {
	    return 1e3 * Number(t.slice(0, -1));
	  }function Un(n, r) {
	    var i = n.elm;e(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());var a = In(n.data.transition);if (!t(a) && !e(i._enterCb) && 1 === i.nodeType) {
	      for (var s = a.css, c = a.type, u = a.enterClass, f = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, b = a.beforeAppear, $ = a.appear, w = a.afterAppear, x = a.appearCancelled, A = a.duration, k = lo, O = lo.$vnode; O && O.parent;) {
	        k = (O = O.parent).context;
	      }var S = !k._isMounted || !n.isRootInsert;if (!S || $ || "" === $) {
	        var T = S && d ? d : u,
	            E = S && h ? h : p,
	            j = S && v ? v : f,
	            N = S ? b || m : m,
	            L = S && "function" == typeof $ ? $ : y,
	            I = S ? w || g : g,
	            M = S ? x || _ : _,
	            D = l(o(A) ? A.enter : A),
	            P = !1 !== s && !Mi,
	            F = Kn(L),
	            R = i._enterCb = C(function () {
	          P && (Pn(i, j), Pn(i, E)), R.cancelled ? (P && Pn(i, T), M && M(i)) : I && I(i), i._enterCb = null;
	        });n.data.show || et(n.data.hook || (n.data.hook = {}), "insert", function () {
	          var t = i.parentNode,
	              e = t && t._pending && t._pending[n.key];e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), L && L(i, R);
	        }), N && N(i), P && (Dn(i, T), Dn(i, E), Mn(function () {
	          Dn(i, j), Pn(i, T), R.cancelled || F || (zn(D) ? setTimeout(R, D) : Fn(i, c, R));
	        })), n.data.show && (r && r(), L && L(i, R)), P || F || R();
	      }
	    }
	  }function Vn(n, r) {
	    function i() {
	      x.cancelled || (n.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n), v && v(a), b && (Dn(a, f), Dn(a, d), Mn(function () {
	        Dn(a, p), Pn(a, f), x.cancelled || $ || (zn(w) ? setTimeout(x, w) : Fn(a, u, x));
	      })), h && h(a, x), b || $ || x());
	    }var a = n.elm;e(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());var s = In(n.data.transition);if (t(s)) return r();if (!e(a._leaveCb) && 1 === a.nodeType) {
	      var c = s.css,
	          u = s.type,
	          f = s.leaveClass,
	          p = s.leaveToClass,
	          d = s.leaveActiveClass,
	          v = s.beforeLeave,
	          h = s.leave,
	          m = s.afterLeave,
	          y = s.leaveCancelled,
	          g = s.delayLeave,
	          _ = s.duration,
	          b = !1 !== c && !Mi,
	          $ = Kn(h),
	          w = l(o(_) ? _.leave : _),
	          x = a._leaveCb = C(function () {
	        a.parentNode && a.parentNode._pending && (a.parentNode._pending[n.key] = null), b && (Pn(a, p), Pn(a, d)), x.cancelled ? (b && Pn(a, f), y && y(a)) : (r(), m && m(a)), a._leaveCb = null;
	      });g ? g(i) : i();
	    }
	  }function zn(t) {
	    return "number" == typeof t && !isNaN(t);
	  }function Kn(n) {
	    if (t(n)) return !1;var r = n.fns;return e(r) ? Kn(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1;
	  }function Jn(t, e) {
	    !0 !== e.data.show && Un(e);
	  }function qn(t, e, n) {
	    var r = e.value,
	        i = t.multiple;if (!i || Array.isArray(r)) {
	      for (var o, a, s = 0, c = t.options.length; s < c; s++) {
	        if (a = t.options[s], i) o = $(r, Gn(a)) > -1, a.selected !== o && (a.selected = o);else if (b(Gn(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
	      }i || (t.selectedIndex = -1);
	    }
	  }function Wn(t, e) {
	    for (var n = 0, r = e.length; n < r; n++) {
	      if (b(Gn(e[n]), t)) return !1;
	    }return !0;
	  }function Gn(t) {
	    return "_value" in t ? t._value : t.value;
	  }function Zn(t) {
	    t.target.composing = !0;
	  }function Yn(t) {
	    t.target.composing && (t.target.composing = !1, Qn(t.target, "input"));
	  }function Qn(t, e) {
	    var n = document.createEvent("HTMLEvents");n.initEvent(e, !0, !0), t.dispatchEvent(n);
	  }function Xn(t) {
	    return !t.componentInstance || t.data && t.data.transition ? t : Xn(t.componentInstance._vnode);
	  }function tr(t) {
	    var e = t && t.componentOptions;return e && e.Ctor.options.abstract ? tr(ft(e.children)) : t;
	  }function er(t) {
	    var e = {},
	        n = t.$options;for (var r in n.propsData) {
	      e[r] = t[r];
	    }var i = n._parentListeners;for (var o in i) {
	      e[gi(o)] = i[o];
	    }return e;
	  }function nr(t, e) {
	    if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData });
	  }function rr(t) {
	    for (; t = t.parent;) {
	      if (t.data.transition) return !0;
	    }
	  }function ir(t, e) {
	    return e.key === t.key && e.tag === t.tag;
	  }function or(t) {
	    return t.isComment && t.asyncFactory;
	  }function ar(t) {
	    t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
	  }function sr(t) {
	    t.data.newPos = t.elm.getBoundingClientRect();
	  }function cr(t) {
	    var e = t.data.pos,
	        n = t.data.newPos,
	        r = e.left - n.left,
	        i = e.top - n.top;if (r || i) {
	      t.data.moved = !0;var o = t.elm.style;o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
	    }
	  }function ur(t, e) {
	    var n = e ? Ba(e) : Ra;if (n.test(t)) {
	      for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(t);) {
	        (i = r.index) > a && o.push(JSON.stringify(t.slice(a, i)));var s = Ye(r[1].trim());o.push("_s(" + s + ")"), a = i + r[0].length;
	      }return a < t.length && o.push(JSON.stringify(t.slice(a))), o.join("+");
	    }
	  }function lr(t, e) {
	    var n = e ? Cs : $s;return t.replace(n, function (t) {
	      return bs[t];
	    });
	  }function fr(t, e) {
	    function n(e) {
	      l += e, t = t.substring(e);
	    }function r(t, n, r) {
	      var i, s;if (null == n && (n = l), null == r && (r = l), t && (s = t.toLowerCase()), t) for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--) {} else i = 0;if (i >= 0) {
	        for (var c = a.length - 1; c >= i; c--) {
	          e.end && e.end(a[c].tag, n, r);
	        }a.length = i, o = i && a[i - 1].tag;
	      } else "br" === s ? e.start && e.start(t, [], !0, n, r) : "p" === s && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r));
	    }for (var i, o, a = [], s = e.expectHTML, c = e.isUnaryTag || Ci, u = e.canBeLeftOpenTag || Ci, l = 0; t;) {
	      if (i = t, o && gs(o)) {
	        var f = 0,
	            p = o.toLowerCase(),
	            d = _s[p] || (_s[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
	            v = t.replace(d, function (t, n, r) {
	          return f = r.length, gs(p) || "noscript" === p || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), xs(p, n) && (n = n.slice(1)), e.chars && e.chars(n), "";
	        });l += t.length - v.length, t = v, r(p, l - f, l);
	      } else {
	        xs(o, t) && n(1);var h = t.indexOf("<");if (0 === h) {
	          if (os.test(t)) {
	            var m = t.indexOf("--\x3e");if (m >= 0) {
	              e.shouldKeepComment && e.comment(t.substring(4, m)), n(m + 3);continue;
	            }
	          }if (as.test(t)) {
	            var y = t.indexOf("]>");if (y >= 0) {
	              n(y + 2);continue;
	            }
	          }var g = t.match(is);if (g) {
	            n(g[0].length);continue;
	          }var _ = t.match(rs);if (_) {
	            var b = l;n(_[0].length), r(_[1], b, l);continue;
	          }var $ = function () {
	            var e = t.match(es);if (e) {
	              var r = { tagName: e[1], attrs: [], start: l };n(e[0].length);for (var i, o; !(i = t.match(ns)) && (o = t.match(Qa));) {
	                n(o[0].length), r.attrs.push(o);
	              }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r;
	            }
	          }();if ($) {
	            !function (t) {
	              var n = t.tagName,
	                  i = t.unarySlash;s && ("p" === o && Ja(n) && r(o), u(n) && o === n && r(n));for (var l = c(n) || !!i, f = t.attrs.length, p = new Array(f), d = 0; d < f; d++) {
	                var v = t.attrs[d];ss && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3], "" === v[4] && delete v[4], "" === v[5] && delete v[5]);var h = v[3] || v[4] || v[5] || "";p[d] = { name: v[1], value: lr(h, e.shouldDecodeNewlines) };
	              }l || (a.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: p }), o = n), e.start && e.start(n, p, l, t.start, t.end);
	            }($);continue;
	          }
	        }var C = void 0,
	            w = void 0,
	            x = void 0;if (h >= 0) {
	          for (w = t.slice(h); !(rs.test(w) || es.test(w) || os.test(w) || as.test(w) || (x = w.indexOf("<", 1)) < 0);) {
	            h += x, w = t.slice(h);
	          }C = t.substring(0, h), n(h);
	        }h < 0 && (C = t, t = ""), e.chars && C && e.chars(C);
	      }if (t === i) {
	        e.chars && e.chars(t);break;
	      }
	    }r();
	  }function pr(t, e) {
	    function n(t) {
	      t.pre && (s = !1), ds(t.tag) && (c = !1);
	    }cs = e.warn || Xe, ds = e.isPreTag || Ci, vs = e.mustUseProp || Ci, hs = e.getTagNamespace || Ci, ls = tn(e.modules, "transformNode"), fs = tn(e.modules, "preTransformNode"), ps = tn(e.modules, "postTransformNode"), us = e.delimiters;var r,
	        i,
	        o = [],
	        a = !1 !== e.preserveWhitespace,
	        s = !1,
	        c = !1;return fr(t, { warn: cs, expectHTML: e.expectHTML, isUnaryTag: e.isUnaryTag, canBeLeftOpenTag: e.canBeLeftOpenTag, shouldDecodeNewlines: e.shouldDecodeNewlines, shouldKeepComment: e.comments, start: function start(t, a, u) {
	        function l(t) {}var f = i && i.ns || hs(t);Ii && "svg" === f && (a = jr(a));var p = { type: 1, tag: t, attrsList: a, attrsMap: Sr(a), parent: i, children: [] };f && (p.ns = f), Er(p) && !Ki() && (p.forbidden = !0);for (var d = 0; d < fs.length; d++) {
	          fs[d](p, e);
	        }if (s || (dr(p), p.pre && (s = !0)), ds(p.tag) && (c = !0), s) vr(p);else {
	          yr(p), gr(p), Cr(p), hr(p), p.plain = !p.key && !a.length, mr(p), wr(p), xr(p);for (var v = 0; v < ls.length; v++) {
	            ls[v](p, e);
	          }Ar(p);
	        }if (r ? o.length || r.if && (p.elseif || p.else) && (l(), $r(r, { exp: p.elseif, block: p })) : (r = p, l()), i && !p.forbidden) if (p.elseif || p.else) _r(p, i);else if (p.slotScope) {
	          i.plain = !1;var h = p.slotTarget || '"default"';(i.scopedSlots || (i.scopedSlots = {}))[h] = p;
	        } else i.children.push(p), p.parent = i;u ? n(p) : (i = p, o.push(p));for (var m = 0; m < ps.length; m++) {
	          ps[m](p, e);
	        }
	      }, end: function end() {
	        var t = o[o.length - 1],
	            e = t.children[t.children.length - 1];e && 3 === e.type && " " === e.text && !c && t.children.pop(), o.length -= 1, i = o[o.length - 1], n(t);
	      }, chars: function chars(t) {
	        if (i && (!Ii || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
	          var e = i.children;if (t = c || t.trim() ? Tr(i) ? t : Ns(t) : a && e.length ? " " : "") {
	            var n;!s && " " !== t && (n = ur(t, us)) ? e.push({ type: 2, expression: n, text: t }) : " " === t && e.length && " " === e[e.length - 1].text || e.push({ type: 3, text: t });
	          }
	        }
	      }, comment: function comment(t) {
	        i.children.push({ type: 3, text: t, isComment: !0 });
	      } }), r;
	  }function dr(t) {
	    null != sn(t, "v-pre") && (t.pre = !0);
	  }function vr(t) {
	    var e = t.attrsList.length;if (e) for (var n = t.attrs = new Array(e), r = 0; r < e; r++) {
	      n[r] = { name: t.attrsList[r].name, value: JSON.stringify(t.attrsList[r].value) };
	    } else t.pre || (t.plain = !0);
	  }function hr(t) {
	    var e = an(t, "key");e && (t.key = e);
	  }function mr(t) {
	    var e = an(t, "ref");e && (t.ref = e, t.refInFor = kr(t));
	  }function yr(t) {
	    var e;if (e = sn(t, "v-for")) {
	      var n = e.match(Os);if (!n) return;t.for = n[2].trim();var r = n[1].trim(),
	          i = r.match(Ss);i ? (t.alias = i[1].trim(), t.iterator1 = i[2].trim(), i[3] && (t.iterator2 = i[3].trim())) : t.alias = r;
	    }
	  }function gr(t) {
	    var e = sn(t, "v-if");if (e) t.if = e, $r(t, { exp: e, block: t });else {
	      null != sn(t, "v-else") && (t.else = !0);var n = sn(t, "v-else-if");n && (t.elseif = n);
	    }
	  }function _r(t, e) {
	    var n = br(e.children);n && n.if && $r(n, { exp: t.elseif, block: t });
	  }function br(t) {
	    for (var e = t.length; e--;) {
	      if (1 === t[e].type) return t[e];t.pop();
	    }
	  }function $r(t, e) {
	    t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
	  }function Cr(t) {
	    null != sn(t, "v-once") && (t.once = !0);
	  }function wr(t) {
	    if ("slot" === t.tag) t.slotName = an(t, "name");else {
	      var e = an(t, "slot");e && (t.slotTarget = '""' === e ? '"default"' : e), "template" === t.tag && (t.slotScope = sn(t, "scope"));
	    }
	  }function xr(t) {
	    var e;(e = an(t, "is")) && (t.component = e), null != sn(t, "inline-template") && (t.inlineTemplate = !0);
	  }function Ar(t) {
	    var e,
	        n,
	        r,
	        i,
	        o,
	        a,
	        s,
	        c = t.attrsList;for (e = 0, n = c.length; e < n; e++) {
	      if (r = i = c[e].name, o = c[e].value, ks.test(r)) {
	        if (t.hasBindings = !0, (a = Or(r)) && (r = r.replace(js, "")), Es.test(r)) r = r.replace(Es, ""), o = Ye(o), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = gi(r)) && (r = "innerHTML")), a.camel && (r = gi(r)), a.sync && on(t, "update:" + gi(r), un(o, "$event"))), t.component || !s && !vs(t.tag, t.attrsMap.type, r) ? nn(t, r, o) : en(t, r, o);else if (As.test(r)) on(t, r = r.replace(As, ""), o, a, !1, cs);else {
	          var u = (r = r.replace(ks, "")).match(Ts),
	              l = u && u[1];l && (r = r.slice(0, -(l.length + 1))), rn(t, r, i, o, l, a);
	        }
	      } else nn(t, r, JSON.stringify(o));
	    }
	  }function kr(t) {
	    for (var e = t; e;) {
	      if (void 0 !== e.for) return !0;e = e.parent;
	    }return !1;
	  }function Or(t) {
	    var e = t.match(js);if (e) {
	      var n = {};return e.forEach(function (t) {
	        n[t.slice(1)] = !0;
	      }), n;
	    }
	  }function Sr(t) {
	    for (var e = {}, n = 0, r = t.length; n < r; n++) {
	      e[t[n].name] = t[n].value;
	    }return e;
	  }function Tr(t) {
	    return "script" === t.tag || "style" === t.tag;
	  }function Er(t) {
	    return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type);
	  }function jr(t) {
	    for (var e = [], n = 0; n < t.length; n++) {
	      var r = t[n];Ls.test(r.name) || (r.name = r.name.replace(Is, ""), e.push(r));
	    }return e;
	  }function Nr(t, e) {
	    t && (ms = Ms(e.staticKeys || ""), ys = e.isReservedTag || Ci, Lr(t), Ir(t, !1));
	  }function Lr(t) {
	    if (t.static = Mr(t), 1 === t.type) {
	      if (!ys(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;for (var e = 0, n = t.children.length; e < n; e++) {
	        var r = t.children[e];Lr(r), r.static || (t.static = !1);
	      }if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
	        var a = t.ifConditions[i].block;Lr(a), a.static || (t.static = !1);
	      }
	    }
	  }function Ir(t, e) {
	    if (1 === t.type) {
	      if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);if (t.staticRoot = !1, t.children) for (var n = 0, r = t.children.length; n < r; n++) {
	        Ir(t.children[n], e || !!t.for);
	      }if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
	        Ir(t.ifConditions[i].block, e);
	      }
	    }
	  }function Mr(t) {
	    return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || vi(t.tag) || !ys(t.tag) || Dr(t) || !Object.keys(t).every(ms))));
	  }function Dr(t) {
	    for (; t.parent;) {
	      if ("template" !== (t = t.parent).tag) return !1;if (t.for) return !0;
	    }return !1;
	  }function Pr(t, e, n) {
	    var r = e ? "nativeOn:{" : "on:{";for (var i in t) {
	      var o = t[i];r += '"' + i + '":' + Fr(i, o) + ",";
	    }return r.slice(0, -1) + "}";
	  }function Fr(t, e) {
	    if (!e) return "function(){}";if (Array.isArray(e)) return "[" + e.map(function (e) {
	      return Fr(t, e);
	    }).join(",") + "]";var n = Ps.test(e.value),
	        r = Ds.test(e.value);if (e.modifiers) {
	      var i = "",
	          o = "",
	          a = [];for (var s in e.modifiers) {
	        Hs[s] ? (o += Hs[s], Fs[s] && a.push(s)) : a.push(s);
	      }return a.length && (i += Rr(a)), o && (i += o), "function($event){" + i + (n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value) + "}";
	    }return n || r ? e.value : "function($event){" + e.value + "}";
	  }function Rr(t) {
	    return "if(!('button' in $event)&&" + t.map(Hr).join("&&") + ")return null;";
	  }function Hr(t) {
	    var e = parseInt(t, 10);if (e) return "$event.keyCode!==" + e;var n = Fs[t];return "_k($event.keyCode," + JSON.stringify(t) + (n ? "," + JSON.stringify(n) : "") + ")";
	  }function Br(t, e) {
	    var n = new Us(e);return { render: "with(this){return " + (t ? Ur(t, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns };
	  }function Ur(t, e) {
	    if (t.staticRoot && !t.staticProcessed) return Vr(t, e);if (t.once && !t.onceProcessed) return zr(t, e);if (t.for && !t.forProcessed) return qr(t, e);if (t.if && !t.ifProcessed) return Kr(t, e);if ("template" !== t.tag || t.slotTarget) {
	      if ("slot" === t.tag) return ai(t, e);var n;if (t.component) n = si(t.component, t, e);else {
	        var r = t.plain ? void 0 : Wr(t, e),
	            i = t.inlineTemplate ? null : ti(t, e, !0);n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
	      }for (var o = 0; o < e.transforms.length; o++) {
	        n = e.transforms[o](t, n);
	      }return n;
	    }return ti(t, e) || "void 0";
	  }function Vr(t, e) {
	    return t.staticProcessed = !0, e.staticRenderFns.push("with(this){return " + Ur(t, e) + "}"), "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")";
	  }function zr(t, e) {
	    if (t.onceProcessed = !0, t.if && !t.ifProcessed) return Kr(t, e);if (t.staticInFor) {
	      for (var n = "", r = t.parent; r;) {
	        if (r.for) {
	          n = r.key;break;
	        }r = r.parent;
	      }return n ? "_o(" + Ur(t, e) + "," + e.onceId++ + (n ? "," + n : "") + ")" : Ur(t, e);
	    }return Vr(t, e);
	  }function Kr(t, e, n, r) {
	    return t.ifProcessed = !0, Jr(t.ifConditions.slice(), e, n, r);
	  }function Jr(t, e, n, r) {
	    function i(t) {
	      return n ? n(t, e) : t.once ? zr(t, e) : Ur(t, e);
	    }if (!t.length) return r || "_e()";var o = t.shift();return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + Jr(t, e, n, r) : "" + i(o.block);
	  }function qr(t, e, n, r) {
	    var i = t.for,
	        o = t.alias,
	        a = t.iterator1 ? "," + t.iterator1 : "",
	        s = t.iterator2 ? "," + t.iterator2 : "";return t.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Ur)(t, e) + "})";
	  }function Wr(t, e) {
	    var n = "{",
	        r = Gr(t, e);r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');for (var i = 0; i < e.dataGenFns.length; i++) {
	      n += e.dataGenFns[i](t);
	    }if (t.attrs && (n += "attrs:{" + ci(t.attrs) + "},"), t.props && (n += "domProps:{" + ci(t.props) + "},"), t.events && (n += Pr(t.events, !1, e.warn) + ","), t.nativeEvents && (n += Pr(t.nativeEvents, !0, e.warn) + ","), t.slotTarget && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += Yr(t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
	      var o = Zr(t, e);o && (n += o + ",");
	    }return n = n.replace(/,$/, "") + "}", t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n;
	  }function Gr(t, e) {
	    var n = t.directives;if (n) {
	      var r,
	          i,
	          o,
	          a,
	          s = "directives:[",
	          c = !1;for (r = 0, i = n.length; r < i; r++) {
	        o = n[r], a = !0;var u = e.directives[o.name];u && (a = !!u(t, o, e.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
	      }return c ? s.slice(0, -1) + "]" : void 0;
	    }
	  }function Zr(t, e) {
	    var n = t.children[0];if (1 === n.type) {
	      var r = Br(n, e.options);return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (t) {
	        return "function(){" + t + "}";
	      }).join(",") + "]}";
	    }
	  }function Yr(t, e) {
	    return "scopedSlots:_u([" + Object.keys(t).map(function (n) {
	      return Qr(n, t[n], e);
	    }).join(",") + "])";
	  }function Qr(t, e, n) {
	    return e.for && !e.forProcessed ? Xr(t, e, n) : "{key:" + t + ",fn:function(" + String(e.attrsMap.scope) + "){return " + ("template" === e.tag ? ti(e, n) || "void 0" : Ur(e, n)) + "}}";
	  }function Xr(t, e, n) {
	    var r = e.for,
	        i = e.alias,
	        o = e.iterator1 ? "," + e.iterator1 : "",
	        a = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, "_l((" + r + "),function(" + i + o + a + "){return " + Qr(t, e, n) + "})";
	  }function ti(t, e, n, r, i) {
	    var o = t.children;if (o.length) {
	      var a = o[0];if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || Ur)(a, e);var s = n ? ei(o, e.maybeComponent) : 0,
	          c = i || ri;return "[" + o.map(function (t) {
	        return c(t, e);
	      }).join(",") + "]" + (s ? "," + s : "");
	    }
	  }function ei(t, e) {
	    for (var n = 0, r = 0; r < t.length; r++) {
	      var i = t[r];if (1 === i.type) {
	        if (ni(i) || i.ifConditions && i.ifConditions.some(function (t) {
	          return ni(t.block);
	        })) {
	          n = 2;break;
	        }(e(i) || i.ifConditions && i.ifConditions.some(function (t) {
	          return e(t.block);
	        })) && (n = 1);
	      }
	    }return n;
	  }function ni(t) {
	    return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
	  }function ri(t, e) {
	    return 1 === t.type ? Ur(t, e) : 3 === t.type && t.isComment ? oi(t) : ii(t);
	  }function ii(t) {
	    return "_v(" + (2 === t.type ? t.expression : ui(JSON.stringify(t.text))) + ")";
	  }function oi(t) {
	    return "_e('" + t.text + "')";
	  }function ai(t, e) {
	    var n = t.slotName || '"default"',
	        r = ti(t, e),
	        i = "_t(" + n + (r ? "," + r : ""),
	        o = t.attrs && "{" + t.attrs.map(function (t) {
	      return gi(t.name) + ":" + t.value;
	    }).join(",") + "}",
	        a = t.attrsMap["v-bind"];return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")";
	  }function si(t, e, n) {
	    var r = e.inlineTemplate ? null : ti(e, n, !0);return "_c(" + t + "," + Wr(e, n) + (r ? "," + r : "") + ")";
	  }function ci(t) {
	    for (var e = "", n = 0; n < t.length; n++) {
	      var r = t[n];e += '"' + r.name + '":' + ui(r.value) + ",";
	    }return e.slice(0, -1);
	  }function ui(t) {
	    return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	  }function li(t, e) {
	    try {
	      return new Function(t);
	    } catch (n) {
	      return e.push({ err: n, code: t }), _;
	    }
	  }function fi(t) {
	    var e = Object.create(null);return function (n, r, i) {
	      var o = (r = r || {}).delimiters ? String(r.delimiters) + n : n;if (e[o]) return e[o];var a = t(n, r),
	          s = {},
	          c = [];return s.render = li(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (t) {
	        return li(t, c);
	      }), e[o] = s;
	    };
	  }function pi(t) {
	    if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
	  }var di = Object.prototype.toString,
	      vi = f("slot,component", !0),
	      hi = f("key,ref,slot,is"),
	      mi = Object.prototype.hasOwnProperty,
	      yi = /-(\w)/g,
	      gi = v(function (t) {
	    return t.replace(yi, function (t, e) {
	      return e ? e.toUpperCase() : "";
	    });
	  }),
	      _i = v(function (t) {
	    return t.charAt(0).toUpperCase() + t.slice(1);
	  }),
	      bi = /([^-])([A-Z])/g,
	      $i = v(function (t) {
	    return t.replace(bi, "$1-$2").replace(bi, "$1-$2").toLowerCase();
	  }),
	      Ci = function Ci(t, e, n) {
	    return !1;
	  },
	      wi = function wi(t) {
	    return t;
	  },
	      xi = "data-server-rendered",
	      Ai = ["component", "directive", "filter"],
	      ki = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
	      Oi = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: Ci, isReservedAttr: Ci, isUnknownElement: Ci, getTagNamespace: _, parsePlatformTagName: wi, mustUseProp: Ci, _lifecycleHooks: ki },
	      Si = Object.freeze({}),
	      Ti = /[^\w.$]/,
	      Ei = _,
	      ji = "__proto__" in {},
	      Ni = "undefined" != typeof window,
	      Li = Ni && window.navigator.userAgent.toLowerCase(),
	      Ii = Li && /msie|trident/.test(Li),
	      Mi = Li && Li.indexOf("msie 9.0") > 0,
	      Di = Li && Li.indexOf("edge/") > 0,
	      Pi = Li && Li.indexOf("android") > 0,
	      Fi = Li && /iphone|ipad|ipod|ios/.test(Li),
	      Ri = Li && /chrome\/\d+/.test(Li) && !Di,
	      Hi = {}.watch,
	      Bi = !1;if (Ni) try {
	    var Ui = {};Object.defineProperty(Ui, "passive", { get: function get() {
	        Bi = !0;
	      } }), window.addEventListener("test-passive", null, Ui);
	  } catch (t) {}var Vi,
	      zi,
	      Ki = function Ki() {
	    return void 0 === Vi && (Vi = !Ni && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Vi;
	  },
	      Ji = Ni && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
	      qi = "undefined" != typeof Symbol && O(Symbol) && "undefined" != typeof Reflect && O(Reflect.ownKeys),
	      Wi = function () {
	    function t() {
	      r = !1;var t = n.slice(0);n.length = 0;for (var e = 0; e < t.length; e++) {
	        t[e]();
	      }
	    }var e,
	        n = [],
	        r = !1;if ("undefined" != typeof Promise && O(Promise)) {
	      var i = Promise.resolve(),
	          o = function o(t) {
	        console.error(t);
	      };e = function e() {
	        i.then(t).catch(o), Fi && setTimeout(_);
	      };
	    } else if ("undefined" == typeof MutationObserver || !O(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) e = function e() {
	      setTimeout(t, 0);
	    };else {
	      var a = 1,
	          s = new MutationObserver(t),
	          c = document.createTextNode(String(a));s.observe(c, { characterData: !0 }), e = function e() {
	        a = (a + 1) % 2, c.data = String(a);
	      };
	    }return function (t, i) {
	      var o;if (n.push(function () {
	        if (t) try {
	          t.call(i);
	        } catch (t) {
	          k(t, i, "nextTick");
	        } else o && o(i);
	      }), r || (r = !0, e()), !t && "undefined" != typeof Promise) return new Promise(function (t, e) {
	        o = t;
	      });
	    };
	  }();zi = "undefined" != typeof Set && O(Set) ? Set : function () {
	    function t() {
	      this.set = Object.create(null);
	    }return t.prototype.has = function (t) {
	      return !0 === this.set[t];
	    }, t.prototype.add = function (t) {
	      this.set[t] = !0;
	    }, t.prototype.clear = function () {
	      this.set = Object.create(null);
	    }, t;
	  }();var Gi = 0,
	      Zi = function Zi() {
	    this.id = Gi++, this.subs = [];
	  };Zi.prototype.addSub = function (t) {
	    this.subs.push(t);
	  }, Zi.prototype.removeSub = function (t) {
	    p(this.subs, t);
	  }, Zi.prototype.depend = function () {
	    Zi.target && Zi.target.addDep(this);
	  }, Zi.prototype.notify = function () {
	    for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) {
	      t[e].update();
	    }
	  }, Zi.target = null;var Yi = [],
	      Qi = Array.prototype,
	      Xi = Object.create(Qi);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
	    var e = Qi[t];x(Xi, t, function () {
	      for (var n = [], r = arguments.length; r--;) {
	        n[r] = arguments[r];
	      }var i,
	          o = e.apply(this, n),
	          a = this.__ob__;switch (t) {case "push":case "unshift":
	          i = n;break;case "splice":
	          i = n.slice(2);}return i && a.observeArray(i), a.dep.notify(), o;
	    });
	  });var to = Object.getOwnPropertyNames(Xi),
	      eo = { shouldConvert: !0 },
	      no = function no(t) {
	    this.value = t, this.dep = new Zi(), this.vmCount = 0, x(t, "__ob__", this), Array.isArray(t) ? ((ji ? E : j)(t, Xi, to), this.observeArray(t)) : this.walk(t);
	  };no.prototype.walk = function (t) {
	    for (var e = Object.keys(t), n = 0; n < e.length; n++) {
	      L(t, e[n], t[e[n]]);
	    }
	  }, no.prototype.observeArray = function (t) {
	    for (var e = 0, n = t.length; e < n; e++) {
	      N(t[e]);
	    }
	  };var ro = Oi.optionMergeStrategies;ro.data = function (t, e, n) {
	    return n ? F(t, e, n) : e && "function" != typeof e ? t : F.call(this, t, e);
	  }, ki.forEach(function (t) {
	    ro[t] = R;
	  }), Ai.forEach(function (t) {
	    ro[t + "s"] = H;
	  }), ro.watch = function (t, e) {
	    if (t === Hi && (t = void 0), e === Hi && (e = void 0), !e) return Object.create(t || null);if (!t) return e;var n = {};y(n, t);for (var r in e) {
	      var i = n[r],
	          o = e[r];i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : Array.isArray(o) ? o : [o];
	    }return n;
	  }, ro.props = ro.methods = ro.inject = ro.computed = function (t, e) {
	    if (!e) return Object.create(t || null);if (!t) return e;var n = Object.create(null);return y(n, t), y(n, e), n;
	  }, ro.provide = F;var io = function io(t, e) {
	    return void 0 === e ? t : e;
	  },
	      oo = function oo(t, e, n, r, i, o, a, s) {
	    this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
	  },
	      ao = { child: {} };ao.child.get = function () {
	    return this.componentInstance;
	  }, Object.defineProperties(oo.prototype, ao);var so,
	      co = function co(t) {
	    void 0 === t && (t = "");var e = new oo();return e.text = t, e.isComment = !0, e;
	  },
	      uo = v(function (t) {
	    var e = "&" === t.charAt(0),
	        n = "~" === (t = e ? t.slice(1) : t).charAt(0),
	        r = "!" === (t = n ? t.slice(1) : t).charAt(0);return t = r ? t.slice(1) : t, { name: t, once: n, capture: r, passive: e };
	  }),
	      lo = null,
	      fo = [],
	      po = [],
	      vo = {},
	      ho = !1,
	      mo = !1,
	      yo = 0,
	      go = 0,
	      _o = function _o(t, e, n, r) {
	    this.vm = t, t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++go, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new zi(), this.newDepIds = new zi(), this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = A(e), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
	  };_o.prototype.get = function () {
	    S(this);var t,
	        e = this.vm;try {
	      t = this.getter.call(e, e);
	    } catch (t) {
	      if (!this.user) throw t;k(t, e, 'getter for watcher "' + this.expression + '"');
	    } finally {
	      this.deep && Nt(t), T(), this.cleanupDeps();
	    }return t;
	  }, _o.prototype.addDep = function (t) {
	    var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
	  }, _o.prototype.cleanupDeps = function () {
	    for (var t = this, e = this.deps.length; e--;) {
	      var n = t.deps[e];t.newDepIds.has(n.id) || n.removeSub(t);
	    }var r = this.depIds;this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
	  }, _o.prototype.update = function () {
	    this.lazy ? this.dirty = !0 : this.sync ? this.run() : jt(this);
	  }, _o.prototype.run = function () {
	    if (this.active) {
	      var t = this.get();if (t !== this.value || o(t) || this.deep) {
	        var e = this.value;if (this.value = t, this.user) try {
	          this.cb.call(this.vm, t, e);
	        } catch (t) {
	          k(t, this.vm, 'callback for watcher "' + this.expression + '"');
	        } else this.cb.call(this.vm, t, e);
	      }
	    }
	  }, _o.prototype.evaluate = function () {
	    this.value = this.get(), this.dirty = !1;
	  }, _o.prototype.depend = function () {
	    for (var t = this, e = this.deps.length; e--;) {
	      t.deps[e].depend();
	    }
	  }, _o.prototype.teardown = function () {
	    var t = this;if (this.active) {
	      this.vm._isBeingDestroyed || p(this.vm._watchers, this);for (var e = this.deps.length; e--;) {
	        t.deps[e].removeSub(t);
	      }this.active = !1;
	    }
	  };var bo = new zi(),
	      $o = { enumerable: !0, configurable: !0, get: _, set: _ },
	      Co = { lazy: !0 },
	      wo = { init: function init(t, e, n, r) {
	      if (!t.componentInstance || t.componentInstance._isDestroyed) (t.componentInstance = Yt(t, lo, n, r)).$mount(e ? t.elm : void 0, e);else if (t.data.keepAlive) {
	        var i = t;wo.prepatch(i, i);
	      }
	    }, prepatch: function prepatch(t, e) {
	      var n = e.componentOptions;$t(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
	    }, insert: function insert(t) {
	      var e = t.context,
	          n = t.componentInstance;n._isMounted || (n._isMounted = !0, At(n, "mounted")), t.data.keepAlive && (e._isMounted ? Tt(n) : wt(n, !0));
	    }, destroy: function destroy(t) {
	      var e = t.componentInstance;e._isDestroyed || (t.data.keepAlive ? xt(e, !0) : e.$destroy());
	    } },
	      xo = Object.keys(wo),
	      Ao = 1,
	      ko = 2,
	      Oo = 0;!function (t) {
	    t.prototype._init = function (t) {
	      var e = this;e._uid = Oo++, e._isVue = !0, t && t._isComponent ? he(e, t) : e.$options = z(me(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, _t(e), pt(e), ve(e), At(e, "beforeCreate"), Jt(e), Mt(e), Kt(e), At(e, "created"), e.$options.el && e.$mount(e.$options.el);
	    };
	  }(_e), function (t) {
	    var e = {};e.get = function () {
	      return this._data;
	    };var n = {};n.get = function () {
	      return this._props;
	    }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = I, t.prototype.$delete = M, t.prototype.$watch = function (t, e, n) {
	      var r = this;if (a(e)) return zt(r, t, e, n);(n = n || {}).user = !0;var i = new _o(r, t, e, n);return n.immediate && e.call(r, i.value), function () {
	        i.teardown();
	      };
	    };
	  }(_e), function (t) {
	    var e = /^hook:/;t.prototype.$on = function (t, n) {
	      var r = this,
	          i = this;if (Array.isArray(t)) for (var o = 0, a = t.length; o < a; o++) {
	        r.$on(t[o], n);
	      } else (i._events[t] || (i._events[t] = [])).push(n), e.test(t) && (i._hasHookEvent = !0);return i;
	    }, t.prototype.$once = function (t, e) {
	      function n() {
	        r.$off(t, n), e.apply(r, arguments);
	      }var r = this;return n.fn = e, r.$on(t, n), r;
	    }, t.prototype.$off = function (t, e) {
	      var n = this,
	          r = this;if (!arguments.length) return r._events = Object.create(null), r;if (Array.isArray(t)) {
	        for (var i = 0, o = t.length; i < o; i++) {
	          n.$off(t[i], e);
	        }return r;
	      }var a = r._events[t];if (!a) return r;if (1 === arguments.length) return r._events[t] = null, r;for (var s, c = a.length; c--;) {
	        if ((s = a[c]) === e || s.fn === e) {
	          a.splice(c, 1);break;
	        }
	      }return r;
	    }, t.prototype.$emit = function (t) {
	      var e = this,
	          n = e._events[t];if (n) {
	        n = n.length > 1 ? m(n) : n;for (var r = m(arguments, 1), i = 0, o = n.length; i < o; i++) {
	          try {
	            n[i].apply(e, r);
	          } catch (n) {
	            k(n, e, 'event handler for "' + t + '"');
	          }
	        }
	      }return e;
	    };
	  }(_e), function (t) {
	    t.prototype._update = function (t, e) {
	      var n = this;n._isMounted && At(n, "beforeUpdate");var r = n.$el,
	          i = n._vnode,
	          o = lo;lo = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), lo = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
	    }, t.prototype.$forceUpdate = function () {
	      var t = this;t._watcher && t._watcher.update();
	    }, t.prototype.$destroy = function () {
	      var t = this;if (!t._isBeingDestroyed) {
	        At(t, "beforeDestroy"), t._isBeingDestroyed = !0;var e = t.$parent;!e || e._isBeingDestroyed || t.$options.abstract || p(e.$children, t), t._watcher && t._watcher.teardown();for (var n = t._watchers.length; n--;) {
	          t._watchers[n].teardown();
	        }t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), At(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null);
	      }
	    };
	  }(_e), function (t) {
	    t.prototype.$nextTick = function (t) {
	      return Wi(t, this);
	    }, t.prototype._render = function () {
	      var t = this,
	          e = t.$options,
	          n = e.render,
	          r = e.staticRenderFns,
	          i = e._parentVnode;if (t._isMounted) for (var o in t.$slots) {
	        t.$slots[o] = Q(t.$slots[o]);
	      }t.$scopedSlots = i && i.data.scopedSlots || Si, r && !t._staticTrees && (t._staticTrees = []), t.$vnode = i;var a;try {
	        a = n.call(t._renderProxy, t.$createElement);
	      } catch (e) {
	        k(e, t, "render function"), a = t._vnode;
	      }return a instanceof oo || (a = co()), a.parent = i, a;
	    }, t.prototype._o = le, t.prototype._n = l, t.prototype._s = u, t.prototype._l = ie, t.prototype._t = oe, t.prototype._q = b, t.prototype._i = $, t.prototype._m = ue, t.prototype._f = ae, t.prototype._k = se, t.prototype._b = ce, t.prototype._v = Z, t.prototype._e = co, t.prototype._u = gt, t.prototype._g = de;
	  }(_e);var So = [String, RegExp, Array],
	      To = { KeepAlive: { name: "keep-alive", abstract: !0, props: { include: So, exclude: So }, created: function created() {
	        this.cache = Object.create(null);
	      }, destroyed: function destroyed() {
	        var t = this;for (var e in t.cache) {
	          Te(t.cache[e]);
	        }
	      }, watch: { include: function include(t) {
	          Se(this.cache, this._vnode, function (e) {
	            return Oe(t, e);
	          });
	        }, exclude: function exclude(t) {
	          Se(this.cache, this._vnode, function (e) {
	            return !Oe(t, e);
	          });
	        } }, render: function render() {
	        var t = ft(this.$slots.default),
	            e = t && t.componentOptions;if (e) {
	          var n = ke(e);if (n && (this.include && !Oe(this.include, n) || this.exclude && Oe(this.exclude, n))) return t;var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t, t.data.keepAlive = !0;
	        }return t;
	      } } };!function (t) {
	    var e = {};e.get = function () {
	      return Oi;
	    }, Object.defineProperty(t, "config", e), t.util = { warn: Ei, extend: y, mergeOptions: z, defineReactive: L }, t.set = I, t.delete = M, t.nextTick = Wi, t.options = Object.create(null), Ai.forEach(function (e) {
	      t.options[e + "s"] = Object.create(null);
	    }), t.options._base = t, y(t.options.components, To), be(t), $e(t), Ce(t), Ae(t);
	  }(_e), Object.defineProperty(_e.prototype, "$isServer", { get: Ki }), Object.defineProperty(_e.prototype, "$ssrContext", { get: function get() {
	      return this.$vnode && this.$vnode.ssrContext;
	    } }), _e.version = "2.4.1";var Eo,
	      jo,
	      No,
	      Lo,
	      Io,
	      Mo,
	      Do,
	      Po,
	      Fo,
	      Ro = f("style,class"),
	      Ho = f("input,textarea,option,select"),
	      Bo = function Bo(t, e, n) {
	    return "value" === n && Ho(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
	  },
	      Uo = f("contenteditable,draggable,spellcheck"),
	      Vo = f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
	      zo = "http://www.w3.org/1999/xlink",
	      Ko = function Ko(t) {
	    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
	  },
	      Jo = function Jo(t) {
	    return Ko(t) ? t.slice(6, t.length) : "";
	  },
	      qo = function qo(t) {
	    return null == t || !1 === t;
	  },
	      Wo = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
	      Go = f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
	      Zo = f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
	      Yo = function Yo(t) {
	    return Go(t) || Zo(t);
	  },
	      Qo = Object.create(null),
	      Xo = Object.freeze({ createElement: function createElement(t, e) {
	      var n = document.createElement(t);return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
	    }, createElementNS: function createElementNS(t, e) {
	      return document.createElementNS(Wo[t], e);
	    }, createTextNode: function createTextNode(t) {
	      return document.createTextNode(t);
	    }, createComment: function createComment(t) {
	      return document.createComment(t);
	    }, insertBefore: function insertBefore(t, e, n) {
	      t.insertBefore(e, n);
	    }, removeChild: function removeChild(t, e) {
	      t.removeChild(e);
	    }, appendChild: function appendChild(t, e) {
	      t.appendChild(e);
	    }, parentNode: function parentNode(t) {
	      return t.parentNode;
	    }, nextSibling: function nextSibling(t) {
	      return t.nextSibling;
	    }, tagName: function tagName(t) {
	      return t.tagName;
	    }, setTextContent: function setTextContent(t, e) {
	      t.textContent = e;
	    }, setAttribute: function setAttribute(t, e, n) {
	      t.setAttribute(e, n);
	    } }),
	      ta = { create: function create(t, e) {
	      Re(e);
	    }, update: function update(t, e) {
	      t.data.ref !== e.data.ref && (Re(t, !0), Re(e));
	    }, destroy: function destroy(t) {
	      Re(t, !0);
	    } },
	      ea = new oo("", {}, []),
	      na = ["create", "activate", "update", "remove", "destroy"],
	      ra = { create: Ve, update: Ve, destroy: function destroy(t) {
	      Ve(t, ea);
	    } },
	      ia = Object.create(null),
	      oa = [ta, ra],
	      aa = { create: We, update: We },
	      sa = { create: Ze, update: Ze },
	      ca = /[\w).+\-_$\]]/,
	      ua = "__r",
	      la = "__c",
	      fa = { create: wn, update: wn },
	      pa = { create: xn, update: xn },
	      da = v(function (t) {
	    var e = {},
	        n = /;(?![^(]*\))/g,
	        r = /:(.+)/;return t.split(n).forEach(function (t) {
	      if (t) {
	        var n = t.split(r);n.length > 1 && (e[n[0].trim()] = n[1].trim());
	      }
	    }), e;
	  }),
	      va = /^--/,
	      ha = /\s*!important$/,
	      ma = function ma(t, e, n) {
	    if (va.test(e)) t.style.setProperty(e, n);else if (ha.test(n)) t.style.setProperty(e, n.replace(ha, ""), "important");else {
	      var r = ga(e);if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
	        t.style[r] = n[i];
	      } else t.style[r] = n;
	    }
	  },
	      ya = ["Webkit", "Moz", "ms"],
	      ga = v(function (t) {
	    if (Fo = Fo || document.createElement("div").style, "filter" !== (t = gi(t)) && t in Fo) return t;for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ya.length; n++) {
	      var r = ya[n] + e;if (r in Fo) return r;
	    }
	  }),
	      _a = { create: jn, update: jn },
	      ba = v(function (t) {
	    return { enterClass: t + "-enter", enterToClass: t + "-enter-to", enterActiveClass: t + "-enter-active", leaveClass: t + "-leave", leaveToClass: t + "-leave-to", leaveActiveClass: t + "-leave-active" };
	  }),
	      $a = Ni && !Mi,
	      Ca = "transition",
	      wa = "animation",
	      xa = "transition",
	      Aa = "transitionend",
	      ka = "animation",
	      Oa = "animationend";$a && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (xa = "WebkitTransition", Aa = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ka = "WebkitAnimation", Oa = "webkitAnimationEnd"));var Sa = Ni && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
	      Ta = /\b(transform|all)(,|$)/,
	      Ea = function (r) {
	    function o(t) {
	      return new oo(E.tagName(t).toLowerCase(), {}, [], void 0, t);
	    }function a(t, e) {
	      function n() {
	        0 == --n.listeners && s(t);
	      }return n.listeners = e, n;
	    }function s(t) {
	      var n = E.parentNode(t);e(n) && E.removeChild(n, t);
	    }function c(t, r, i, o, a) {
	      if (t.isRootInsert = !a, !u(t, r, i, o)) {
	        var s = t.data,
	            c = t.children,
	            l = t.tag;e(l) ? (t.elm = t.ns ? E.createElementNS(t.ns, l) : E.createElement(l, t), y(t), v(t, c, r), e(s) && m(t, r), d(i, t.elm, o)) : n(t.isComment) ? (t.elm = E.createComment(t.text), d(i, t.elm, o)) : (t.elm = E.createTextNode(t.text), d(i, t.elm, o));
	      }
	    }function u(t, r, i, o) {
	      var a = t.data;if (e(a)) {
	        var s = e(t.componentInstance) && a.keepAlive;if (e(a = a.hook) && e(a = a.init) && a(t, !1, i, o), e(t.componentInstance)) return l(t, r), n(s) && p(t, r, i, o), !0;
	      }
	    }function l(t, n) {
	      e(t.data.pendingInsert) && (n.push.apply(n, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, h(t) ? (m(t, n), y(t)) : (Re(t), n.push(t));
	    }function p(t, n, r, i) {
	      for (var o, a = t; a.componentInstance;) {
	        if (a = a.componentInstance._vnode, e(o = a.data) && e(o = o.transition)) {
	          for (o = 0; o < S.activate.length; ++o) {
	            S.activate[o](ea, a);
	          }n.push(a);break;
	        }
	      }d(r, t.elm, i);
	    }function d(t, n, r) {
	      e(t) && (e(r) ? r.parentNode === t && E.insertBefore(t, n, r) : E.appendChild(t, n));
	    }function v(t, e, n) {
	      if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) {
	        c(e[r], n, t.elm, null, !0);
	      } else i(t.text) && E.appendChild(t.elm, E.createTextNode(t.text));
	    }function h(t) {
	      for (; t.componentInstance;) {
	        t = t.componentInstance._vnode;
	      }return e(t.tag);
	    }function m(t, n) {
	      for (var r = 0; r < S.create.length; ++r) {
	        S.create[r](ea, t);
	      }e(k = t.data.hook) && (e(k.create) && k.create(ea, t), e(k.insert) && n.push(t));
	    }function y(t) {
	      for (var n, r = t; r;) {
	        e(n = r.context) && e(n = n.$options._scopeId) && E.setAttribute(t.elm, n, ""), r = r.parent;
	      }e(n = lo) && n !== t.context && e(n = n.$options._scopeId) && E.setAttribute(t.elm, n, "");
	    }function g(t, e, n, r, i, o) {
	      for (; r <= i; ++r) {
	        c(n[r], o, t, e);
	      }
	    }function _(t) {
	      var n,
	          r,
	          i = t.data;if (e(i)) for (e(n = i.hook) && e(n = n.destroy) && n(t), n = 0; n < S.destroy.length; ++n) {
	        S.destroy[n](t);
	      }if (e(n = t.children)) for (r = 0; r < t.children.length; ++r) {
	        _(t.children[r]);
	      }
	    }function b(t, n, r, i) {
	      for (; r <= i; ++r) {
	        var o = n[r];e(o) && (e(o.tag) ? ($(o), _(o)) : s(o.elm));
	      }
	    }function $(t, n) {
	      if (e(n) || e(t.data)) {
	        var r,
	            i = S.remove.length + 1;for (e(n) ? n.listeners += i : n = a(t.elm, i), e(r = t.componentInstance) && e(r = r._vnode) && e(r.data) && $(r, n), r = 0; r < S.remove.length; ++r) {
	          S.remove[r](t, n);
	        }e(r = t.data.hook) && e(r = r.remove) ? r(t, n) : n();
	      } else s(t.elm);
	    }function C(n, r, i, o, a) {
	      for (var s, u, l, f = 0, p = 0, d = r.length - 1, v = r[0], h = r[d], m = i.length - 1, y = i[0], _ = i[m], $ = !a; f <= d && p <= m;) {
	        t(v) ? v = r[++f] : t(h) ? h = r[--d] : He(v, y) ? (w(v, y, o), v = r[++f], y = i[++p]) : He(h, _) ? (w(h, _, o), h = r[--d], _ = i[--m]) : He(v, _) ? (w(v, _, o), $ && E.insertBefore(n, v.elm, E.nextSibling(h.elm)), v = r[++f], _ = i[--m]) : He(h, y) ? (w(h, y, o), $ && E.insertBefore(n, h.elm, v.elm), h = r[--d], y = i[++p]) : (t(s) && (s = Ue(r, f, d)), t(u = e(y.key) ? s[y.key] : null) ? (c(y, o, n, v.elm), y = i[++p]) : He(l = r[u], y) ? (w(l, y, o), r[u] = void 0, $ && E.insertBefore(n, l.elm, v.elm), y = i[++p]) : (c(y, o, n, v.elm), y = i[++p]));
	      }f > d ? g(n, t(i[m + 1]) ? null : i[m + 1].elm, i, p, m, o) : p > m && b(n, r, f, d);
	    }function w(r, i, o, a) {
	      if (r !== i) {
	        var s = i.elm = r.elm;if (n(r.isAsyncPlaceholder)) e(i.asyncFactory.resolved) ? A(r.elm, i, o) : i.isAsyncPlaceholder = !0;else if (n(i.isStatic) && n(r.isStatic) && i.key === r.key && (n(i.isCloned) || n(i.isOnce))) i.componentInstance = r.componentInstance;else {
	          var c,
	              u = i.data;e(u) && e(c = u.hook) && e(c = c.prepatch) && c(r, i);var l = r.children,
	              f = i.children;if (e(u) && h(i)) {
	            for (c = 0; c < S.update.length; ++c) {
	              S.update[c](r, i);
	            }e(c = u.hook) && e(c = c.update) && c(r, i);
	          }t(i.text) ? e(l) && e(f) ? l !== f && C(s, l, f, o, a) : e(f) ? (e(r.text) && E.setTextContent(s, ""), g(s, null, f, 0, f.length - 1, o)) : e(l) ? b(s, l, 0, l.length - 1) : e(r.text) && E.setTextContent(s, "") : r.text !== i.text && E.setTextContent(s, i.text), e(u) && e(c = u.hook) && e(c = c.postpatch) && c(r, i);
	        }
	      }
	    }function x(t, r, i) {
	      if (n(i) && e(t.parent)) t.parent.data.pendingInsert = r;else for (var o = 0; o < r.length; ++o) {
	        r[o].data.hook.insert(r[o]);
	      }
	    }function A(t, r, i) {
	      if (n(r.isComment) && e(r.asyncFactory)) return r.elm = t, r.isAsyncPlaceholder = !0, !0;r.elm = t;var o = r.tag,
	          a = r.data,
	          s = r.children;if (e(a) && (e(k = a.hook) && e(k = k.init) && k(r, !0), e(k = r.componentInstance))) return l(r, i), !0;if (e(o)) {
	        if (e(s)) if (t.hasChildNodes()) {
	          for (var c = !0, u = t.firstChild, f = 0; f < s.length; f++) {
	            if (!u || !A(u, s[f], i)) {
	              c = !1;break;
	            }u = u.nextSibling;
	          }if (!c || u) return !1;
	        } else v(r, s, i);if (e(a)) for (var p in a) {
	          if (!j(p)) {
	            m(r, i);break;
	          }
	        }
	      } else t.data !== r.text && (t.data = r.text);return !0;
	    }var k,
	        O,
	        S = {},
	        T = r.modules,
	        E = r.nodeOps;for (k = 0; k < na.length; ++k) {
	      for (S[na[k]] = [], O = 0; O < T.length; ++O) {
	        e(T[O][na[k]]) && S[na[k]].push(T[O][na[k]]);
	      }
	    }var j = f("attrs,style,class,staticClass,staticStyle,key");return function (r, i, a, s, u, l) {
	      if (!t(i)) {
	        var f = !1,
	            p = [];if (t(r)) f = !0, c(i, p, u, l);else {
	          var d = e(r.nodeType);if (!d && He(r, i)) w(r, i, p, s);else {
	            if (d) {
	              if (1 === r.nodeType && r.hasAttribute(xi) && (r.removeAttribute(xi), a = !0), n(a) && A(r, i, p)) return x(i, p, !0), r;r = o(r);
	            }var v = r.elm,
	                m = E.parentNode(v);if (c(i, p, v._leaveCb ? null : m, E.nextSibling(v)), e(i.parent)) {
	              for (var y = i.parent; y;) {
	                y.elm = i.elm, y = y.parent;
	              }if (h(i)) for (var g = 0; g < S.create.length; ++g) {
	                S.create[g](ea, i.parent);
	              }
	            }e(m) ? b(m, [r], 0, 0) : e(r.tag) && _(r);
	          }
	        }return x(i, p, f), i.elm;
	      }e(r) && _(r);
	    };
	  }({ nodeOps: Xo, modules: [aa, sa, fa, pa, _a, Ni ? { create: Jn, activate: Jn, remove: function remove(t, e) {
	        !0 !== t.data.show ? Vn(t, e) : e();
	      } } : {}].concat(oa) }),
	      ja = f("text,number,password,search,email,tel,url");Mi && document.addEventListener("selectionchange", function () {
	    var t = document.activeElement;t && t.vmodel && Qn(t, "input");
	  });var Na = { model: { inserted: function inserted(t, e, n) {
	        if ("select" === n.tag) {
	          var r = function r() {
	            qn(t, e, n.context);
	          };r(), (Ii || Di) && setTimeout(r, 0);
	        } else ("textarea" === n.tag || ja(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("change", Yn), Pi || (t.addEventListener("compositionstart", Zn), t.addEventListener("compositionend", Yn)), Mi && (t.vmodel = !0)));
	      }, componentUpdated: function componentUpdated(t, e, n) {
	        "select" === n.tag && (qn(t, e, n.context), (t.multiple ? e.value.some(function (e) {
	          return Wn(e, t.options);
	        }) : e.value !== e.oldValue && Wn(e.value, t.options)) && Qn(t, "change"));
	      } }, show: { bind: function bind(t, e, n) {
	        var r = e.value,
	            i = (n = Xn(n)).data && n.data.transition,
	            o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;r && i && !Mi ? (n.data.show = !0, Un(n, function () {
	          t.style.display = o;
	        })) : t.style.display = r ? o : "none";
	      }, update: function update(t, e, n) {
	        var r = e.value;r !== e.oldValue && ((n = Xn(n)).data && n.data.transition && !Mi ? (n.data.show = !0, r ? Un(n, function () {
	          t.style.display = t.__vOriginalDisplay;
	        }) : Vn(n, function () {
	          t.style.display = "none";
	        })) : t.style.display = r ? t.__vOriginalDisplay : "none");
	      }, unbind: function unbind(t, e, n, r, i) {
	        i || (t.style.display = t.__vOriginalDisplay);
	      } } },
	      La = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
	      Ia = { name: "transition", props: La, abstract: !0, render: function render(t) {
	      var e = this,
	          n = this.$options._renderChildren;if (n && (n = n.filter(function (t) {
	        return t.tag || or(t);
	      })).length) {
	        var r = this.mode,
	            o = n[0];if (rr(this.$vnode)) return o;var a = tr(o);if (!a) return o;if (this._leaving) return nr(t, o);var s = "__transition-" + this._uid + "-";a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;var c = (a.data || (a.data = {})).transition = er(this),
	            u = this._vnode,
	            l = tr(u);if (a.data.directives && a.data.directives.some(function (t) {
	          return "show" === t.name;
	        }) && (a.data.show = !0), l && l.data && !ir(a, l) && !or(l)) {
	          var f = l && (l.data.transition = y({}, c));if ("out-in" === r) return this._leaving = !0, et(f, "afterLeave", function () {
	            e._leaving = !1, e.$forceUpdate();
	          }), nr(t, o);if ("in-out" === r) {
	            if (or(a)) return u;var p,
	                d = function d() {
	              p();
	            };et(c, "afterEnter", d), et(c, "enterCancelled", d), et(f, "delayLeave", function (t) {
	              p = t;
	            });
	          }
	        }return o;
	      }
	    } },
	      Ma = y({ tag: String, moveClass: String }, La);delete Ma.mode;var Da = { Transition: Ia, TransitionGroup: { props: Ma, render: function render(t) {
	        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = er(this), s = 0; s < i.length; s++) {
	          var c = i[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a);
	        }if (r) {
	          for (var u = [], l = [], f = 0; f < r.length; f++) {
	            var p = r[f];p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p);
	          }this.kept = t(e, null, u), this.removed = l;
	        }return t(e, null, o);
	      }, beforeUpdate: function beforeUpdate() {
	        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
	      }, updated: function updated() {
	        var t = this.prevChildren,
	            e = this.moveClass || (this.name || "v") + "-move";if (t.length && this.hasMove(t[0].elm, e)) {
	          t.forEach(ar), t.forEach(sr), t.forEach(cr);document.body.offsetHeight;t.forEach(function (t) {
	            if (t.data.moved) {
	              var n = t.elm,
	                  r = n.style;Dn(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Aa, n._moveCb = function t(r) {
	                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Aa, t), n._moveCb = null, Pn(n, e));
	              });
	            }
	          });
	        }
	      }, methods: { hasMove: function hasMove(t, e) {
	          if (!$a) return !1;if (this._hasMove) return this._hasMove;var n = t.cloneNode();t._transitionClasses && t._transitionClasses.forEach(function (t) {
	            Ln(n, t);
	          }), Nn(n, e), n.style.display = "none", this.$el.appendChild(n);var r = Rn(n);return this.$el.removeChild(n), this._hasMove = r.hasTransform;
	        } } } };_e.config.mustUseProp = Bo, _e.config.isReservedTag = Yo, _e.config.isReservedAttr = Ro, _e.config.getTagNamespace = Pe, _e.config.isUnknownElement = function (t) {
	    if (!Ni) return !0;if (Yo(t)) return !1;if (t = t.toLowerCase(), null != Qo[t]) return Qo[t];var e = document.createElement(t);return t.indexOf("-") > -1 ? Qo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Qo[t] = /HTMLUnknownElement/.test(e.toString());
	  }, y(_e.options.directives, Na), y(_e.options.components, Da), _e.prototype.__patch__ = Ni ? Ea : _, _e.prototype.$mount = function (t, e) {
	    return t = t && Ni ? Fe(t) : void 0, bt(this, t, e);
	  }, setTimeout(function () {
	    Oi.devtools && Ji && Ji.emit("init", _e);
	  }, 0);var Pa,
	      Fa = !!Ni && function (t, e) {
	    var n = document.createElement("div");return n.innerHTML = '<div a="' + t + '"/>', n.innerHTML.indexOf(e) > 0;
	  }("\n", "&#10;"),
	      Ra = /\{\{((?:.|\n)+?)\}\}/g,
	      Ha = /[-.*+?^${}()|[\]\/\\]/g,
	      Ba = v(function (t) {
	    var e = t[0].replace(Ha, "\\$&"),
	        n = t[1].replace(Ha, "\\$&");return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
	  }),
	      Ua = [{ staticKeys: ["staticClass"], transformNode: function transformNode(t, e) {
	      e.warn;var n = sn(t, "class");n && (t.staticClass = JSON.stringify(n));var r = an(t, "class", !1);r && (t.classBinding = r);
	    }, genData: function genData(t) {
	      var e = "";return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e;
	    } }, { staticKeys: ["staticStyle"], transformNode: function transformNode(t, e) {
	      e.warn;var n = sn(t, "style");n && (t.staticStyle = JSON.stringify(da(n)));var r = an(t, "style", !1);r && (t.styleBinding = r);
	    }, genData: function genData(t) {
	      var e = "";return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e;
	    } }],
	      Va = { model: function model(t, e, n) {
	      Do = n;var r = e.value,
	          i = e.modifiers,
	          o = t.tag,
	          a = t.attrsMap.type;if (t.component) return cn(t, r, i), !1;if ("select" === o) gn(t, r, i);else if ("input" === o && "checkbox" === a) mn(t, r, i);else if ("input" === o && "radio" === a) yn(t, r, i);else if ("input" === o || "textarea" === o) _n(t, r, i);else if (!Oi.isReservedTag(o)) return cn(t, r, i), !1;return !0;
	    }, text: function text(t, e) {
	      e.value && en(t, "textContent", "_s(" + e.value + ")");
	    }, html: function html(t, e) {
	      e.value && en(t, "innerHTML", "_s(" + e.value + ")");
	    } },
	      za = f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
	      Ka = f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
	      Ja = f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
	      qa = { expectHTML: !0, modules: Ua, directives: Va, isPreTag: function isPreTag(t) {
	      return "pre" === t;
	    }, isUnaryTag: za, mustUseProp: Bo, canBeLeftOpenTag: Ka, isReservedTag: Yo, getTagNamespace: Pe, staticKeys: function (t) {
	      return t.reduce(function (t, e) {
	        return t.concat(e.staticKeys || []);
	      }, []).join(",");
	    }(Ua) },
	      Wa = { decode: function decode(t) {
	      return Pa = Pa || document.createElement("div"), Pa.innerHTML = t, Pa.textContent;
	    } },
	      Ga = /([^\s"'<>/=]+)/,
	      Za = /(?:=)/,
	      Ya = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
	      Qa = new RegExp("^\\s*" + Ga.source + "(?:\\s*(" + Za.source + ")\\s*(?:" + Ya.join("|") + "))?"),
	      Xa = "[a-zA-Z_][\\w\\-\\.]*",
	      ts = "((?:" + Xa + "\\:)?" + Xa + ")",
	      es = new RegExp("^<" + ts),
	      ns = /^\s*(\/?)>/,
	      rs = new RegExp("^<\\/" + ts + "[^>]*>"),
	      is = /^<!DOCTYPE [^>]+>/i,
	      os = /^<!--/,
	      as = /^<!\[/,
	      ss = !1;"x".replace(/x(.)?/g, function (t, e) {
	    ss = "" === e;
	  });var cs,
	      us,
	      ls,
	      fs,
	      ps,
	      ds,
	      vs,
	      hs,
	      ms,
	      ys,
	      gs = f("script,style,textarea", !0),
	      _s = {},
	      bs = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n" },
	      $s = /&(?:lt|gt|quot|amp);/g,
	      Cs = /&(?:lt|gt|quot|amp|#10);/g,
	      ws = f("pre,textarea", !0),
	      xs = function xs(t, e) {
	    return t && ws(t) && "\n" === e[0];
	  },
	      As = /^@|^v-on:/,
	      ks = /^v-|^@|^:/,
	      Os = /(.*?)\s+(?:in|of)\s+(.*)/,
	      Ss = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
	      Ts = /:(.*)$/,
	      Es = /^:|^v-bind:/,
	      js = /\.[^.]+/g,
	      Ns = v(Wa.decode),
	      Ls = /^xmlns:NS\d+/,
	      Is = /^NS\d+:/,
	      Ms = v(function (t) {
	    return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""));
	  }),
	      Ds = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
	      Ps = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
	      Fs = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
	      Rs = function Rs(t) {
	    return "if(" + t + ")return null;";
	  },
	      Hs = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: Rs("$event.target !== $event.currentTarget"), ctrl: Rs("!$event.ctrlKey"), shift: Rs("!$event.shiftKey"), alt: Rs("!$event.altKey"), meta: Rs("!$event.metaKey"), left: Rs("'button' in $event && $event.button !== 0"), middle: Rs("'button' in $event && $event.button !== 1"), right: Rs("'button' in $event && $event.button !== 2") },
	      Bs = { on: function on(t, e) {
	      t.wrapListeners = function (t) {
	        return "_g(" + t + "," + e.value + ")";
	      };
	    }, bind: function bind(t, e) {
	      t.wrapData = function (n) {
	        return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")";
	      };
	    }, cloak: _ },
	      Us = function Us(t) {
	    this.options = t, this.warn = t.warn || Xe, this.transforms = tn(t.modules, "transformCode"), this.dataGenFns = tn(t.modules, "genData"), this.directives = y(y({}, Bs), t.directives);var e = t.isReservedTag || Ci;this.maybeComponent = function (t) {
	      return !e(t.tag);
	    }, this.onceId = 0, this.staticRenderFns = [];
	  },
	      Vs = function (t) {
	    return function (e) {
	      function n(n, r) {
	        var i = Object.create(e),
	            o = [],
	            a = [];if (i.warn = function (t, e) {
	          (e ? a : o).push(t);
	        }, r) {
	          r.modules && (i.modules = (e.modules || []).concat(r.modules)), r.directives && (i.directives = y(Object.create(e.directives), r.directives));for (var s in r) {
	            "modules" !== s && "directives" !== s && (i[s] = r[s]);
	          }
	        }var c = t(n, i);return c.errors = o, c.tips = a, c;
	      }return { compile: n, compileToFunctions: fi(n) };
	    };
	  }(function (t, e) {
	    var n = pr(t.trim(), e);Nr(n, e);var r = Br(n, e);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
	  })(qa).compileToFunctions,
	      zs = v(function (t) {
	    var e = Fe(t);return e && e.innerHTML;
	  }),
	      Ks = _e.prototype.$mount;return _e.prototype.$mount = function (t, e) {
	    if ((t = t && Fe(t)) === document.body || t === document.documentElement) return this;var n = this.$options;if (!n.render) {
	      var r = n.template;if (r) {
	        if ("string" == typeof r) "#" === r.charAt(0) && (r = zs(r));else {
	          if (!r.nodeType) return this;r = r.innerHTML;
	        }
	      } else t && (r = pi(t));if (r) {
	        var i = Vs(r, { shouldDecodeNewlines: Fa, delimiters: n.delimiters, comments: n.comments }, this),
	            o = i.render,
	            a = i.staticRenderFns;n.render = o, n.staticRenderFns = a;
	      }
	    }return Ks.call(this, t, e);
	  }, _e.compile = Vs, _e;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Member = function Member(data) {
	    _classCallCheck(this, Member);

	    this.name = data.name;
	    this.github = "https://github.com/" + data.github;
	    this.twitter = data.twitter ? "https://twitter.com/" + data.twitter : "";
	    this.personal = data.personal ? "http://" + data.personal : "";
	};

	exports.default = Member;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _datGui = __webpack_require__(4);

	var _datGui2 = _interopRequireDefault(_datGui);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	var _background = __webpack_require__(13);

	var _background2 = _interopRequireDefault(_background);

	var _composite = __webpack_require__(16);

	var _composite2 = _interopRequireDefault(_composite);

	var _particle = __webpack_require__(18);

	var _particle2 = _interopRequireDefault(_particle);

	var _hypershape = __webpack_require__(25);

	var _hypershape2 = _interopRequireDefault(_hypershape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sketch = function (_THREE$EventDispatche) {
	    _inherits(Sketch, _THREE$EventDispatche);

	    function Sketch(dom) {
	        _classCallCheck(this, Sketch);

	        var _this = _possibleConstructorReturn(this, (Sketch.__proto__ || Object.getPrototypeOf(Sketch)).call(this));

	        _this.clock = new THREE.Clock();
	        _this.frame = 0;

	        _this.updaters = [];

	        _this.renderer = new THREE.WebGLRenderer({
	            antialias: true,
	            canvas: dom
	        });
	        _this.renderer.setClearColor(new THREE.Color("rgb(0, 0, 0)"));

	        _this.setupScene();
	        _this.setupComposer();
	        // this.system.material.uniforms.textureEnv.value = this.background.backbuffer.texture;
	        _this.system.material.uniforms.textureEnv.value = _this.composite.backbuffer.texture;

	        window.addEventListener("resize", function (e) {
	            _this.resize();
	        });

	        window.addEventListener("mousemove", function (e) {
	            var mx = e.clientX,
	                my = e.clientY;
	            _this.interact(mx, my);
	        });

	        var loop = function loop(time) {
	            _this.loop(time);
	            requestAnimationFrame(loop);
	        };
	        _this.resize();
	        requestAnimationFrame(loop);
	        return _this;
	    }

	    _createClass(Sketch, [{
	        key: "interact",
	        value: function interact(mx, my) {
	            var vector = new THREE.Vector3(mx / window.innerWidth * 2 - 1, -(my / window.innerHeight) * 2 + 1, 0.5);
	            vector.unproject(this.camera);

	            var dir = vector.sub(this.camera.position).normalize();
	            var distance = -this.camera.position.z / dir.z;
	            var p = this.camera.position.clone().add(dir.multiplyScalar(distance));
	            this.system.interact(p);
	        }
	    }, {
	        key: "setupScene",
	        value: function setupScene() {
	            this.scene = new THREE.Scene();

	            var w = window.innerWidth,
	                h = window.innerHeight;

	            this.camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
	            this.camera.position.set(0, 0, 10.75);
	            this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	            // let helper = new THREE.CameraHelper(this.camera);
	            // this.scene.add(helper);

	            var shape = new _hypershape2.default();
	            shape.scale.set(2.5, 2.5, 2.5);
	            this.updaters.push(shape);
	            this.scene.add(shape);

	            this.overlay = new THREE.Scene();

	            this.system = new _particle2.default(this.renderer, {});
	            this.overlay.add(this.system);
	            this.updaters.push(this.system);

	            // this.debugTexture(this.system.texturePosition);

	            var gui = new _datGui2.default.GUI();
	            gui.add(this.system.material.uniforms.displacement, "value").min(0.0).max(0.5).step(0.01).name("displacement");
	            gui.add(this.system.material.uniforms.refractionRatio, "value").min(0.0).max(3.0).name("ratio");
	            gui.add(this.system.material.uniforms.fresnelBias, "value").min(0.0).max(0.5).name("bias");
	            gui.add(this.system.material.uniforms.fresnelPower, "value").min(0.0).max(3.0).name("power");
	            gui.add(this.system.material.uniforms.fresnelScale, "value").min(0.0).max(3.0).name("scale");
	        }
	    }, {
	        key: "debugTexture",
	        value: function debugTexture(texture) {
	            var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	            var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

	            var plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshBasicMaterial({
	                map: texture,
	                side: THREE.DoubleSide
	            }));
	            plane.scale.set(width, height, 1);
	            this.scene.add(plane);

	            return plane;
	        }
	    }, {
	        key: "setupComposer",
	        value: function setupComposer() {
	            var w = window.innerWidth,
	                h = window.innerHeight;

	            var background = new _background2.default();
	            this.background = background;

	            var rpass = new THREE.RenderPass(this.scene, this.camera);
	            rpass.clear = false;rpass.clearDepth = true;

	            this.composite = new _composite2.default({
	                backbuffer: true
	            });
	            // this.composite.clear = false; this.composite.clearDepth = true;
	            this.updaters.push(this.composite);

	            var overlay = new THREE.RenderPass(this.overlay, this.camera);
	            overlay.clear = false;overlay.clearDepth = true;

	            var composite2 = new _composite2.default({
	                backbuffer: false
	            });

	            this.composer = new THREE.EffectComposer(this.renderer);
	            this.composer.addPass(background);
	            this.composer.addPass(rpass);
	            this.composer.addPass(this.composite);
	            this.composer.addPass(overlay);
	            this.composer.addPass(composite2);

	            var passes = this.composer.passes;
	            passes[passes.length - 1].renderToScreen = true;

	            this.composer.setSize(w, h);
	        }
	    }, {
	        key: "loop",
	        value: function loop(time) {
	            var dt = this.clock.getDelta();
	            this.update(Math.min(dt, 0.1), this.clock.elapsedTime);
	            this.render();
	        }
	    }, {
	        key: "update",
	        value: function update(dt, time) {
	            var _this2 = this;

	            this.updaters.forEach(function (updater) {
	                updater.update(dt, time, _this2.frame);
	            });

	            this.frame++;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            // this.renderer.render(this.scene, this.camera);
	            this.composer.render();
	        }
	    }, {
	        key: "resize",
	        value: function resize() {
	            var w = window.innerWidth,
	                h = window.innerHeight;
	            this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
	            this.renderer.setSize(w, h);

	            this.camera.aspect = w / h;
	            this.camera.updateProjectionMatrix();
	            this.composer.setSize(w, h);

	            this.system.resize(w, h);
	        }
	    }]);

	    return Sketch;
	}(THREE.EventDispatcher);

	exports.default = Sketch;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * dat-gui JavaScript Controller Library
	 * https://github.com/dataarts/dat.gui
	 *
	 * Copyright 2016 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.dat = t() : e.dat = t();
	}(undefined, function () {
	  return function (e) {
	    function t(o) {
	      if (n[o]) return n[o].exports;var i = n[o] = { exports: {}, id: o, loaded: !1 };return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
	    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	  }([function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }var i = n(1),
	        r = o(i);e.exports = r["default"];
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }t.__esModule = !0;var i = n(2),
	        r = o(i),
	        a = n(6),
	        l = o(a),
	        s = n(3),
	        u = o(s),
	        d = n(7),
	        c = o(d),
	        f = n(8),
	        _ = o(f),
	        p = n(10),
	        h = o(p),
	        m = n(11),
	        b = o(m),
	        g = n(12),
	        v = o(g),
	        y = n(13),
	        w = o(y),
	        x = n(14),
	        E = o(x),
	        C = n(15),
	        A = o(C),
	        S = n(16),
	        k = o(S),
	        O = n(9),
	        T = o(O),
	        R = n(17),
	        L = o(R);t["default"] = { color: { Color: r["default"], math: l["default"], interpret: u["default"] }, controllers: { Controller: c["default"], BooleanController: _["default"], OptionController: h["default"], StringController: b["default"], NumberController: v["default"], NumberControllerBox: w["default"], NumberControllerSlider: E["default"], FunctionController: A["default"], ColorController: k["default"] }, dom: { dom: T["default"] }, gui: { GUI: L["default"] }, GUI: L["default"] };
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t, n) {
	      Object.defineProperty(e, t, { get: function get() {
	          return "RGB" === this.__state.space ? this.__state[t] : (h.recalculateRGB(this, t, n), this.__state[t]);
	        }, set: function set(e) {
	          "RGB" !== this.__state.space && (h.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e;
	        } });
	    }function a(e, t) {
	      Object.defineProperty(e, t, { get: function get() {
	          return "HSV" === this.__state.space ? this.__state[t] : (h.recalculateHSV(this), this.__state[t]);
	        }, set: function set(e) {
	          "HSV" !== this.__state.space && (h.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e;
	        } });
	    }t.__esModule = !0;var l = n(3),
	        s = o(l),
	        u = n(6),
	        d = o(u),
	        c = n(4),
	        f = o(c),
	        _ = n(5),
	        p = o(_),
	        h = function () {
	      function e() {
	        if (i(this, e), this.__state = s["default"].apply(this, arguments), this.__state === !1) throw new Error("Failed to interpret color arguments");this.__state.a = this.__state.a || 1;
	      }return e.prototype.toString = function () {
	        return (0, f["default"])(this);
	      }, e.prototype.toHexString = function () {
	        return (0, f["default"])(this, !0);
	      }, e.prototype.toOriginal = function () {
	        return this.__state.conversion.write(this);
	      }, e;
	    }();h.recalculateRGB = function (e, t, n) {
	      if ("HEX" === e.__state.space) e.__state[t] = d["default"].component_from_hex(e.__state.hex, n);else {
	        if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");p["default"].extend(e.__state, d["default"].hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
	      }
	    }, h.recalculateHSV = function (e) {
	      var t = d["default"].rgb_to_hsv(e.r, e.g, e.b);p["default"].extend(e.__state, { s: t.s, v: t.v }), p["default"].isNaN(t.h) ? p["default"].isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h;
	    }, h.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r(h.prototype, "r", 2), r(h.prototype, "g", 1), r(h.prototype, "b", 0), a(h.prototype, "h"), a(h.prototype, "s"), a(h.prototype, "v"), Object.defineProperty(h.prototype, "a", { get: function get() {
	        return this.__state.a;
	      }, set: function set(e) {
	        this.__state.a = e;
	      } }), Object.defineProperty(h.prototype, "hex", { get: function get() {
	        return "HEX" !== !this.__state.space && (this.__state.hex = d["default"].rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
	      }, set: function set(e) {
	        this.__state.space = "HEX", this.__state.hex = e;
	      } }), t["default"] = h;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }t.__esModule = !0;var i = n(4),
	        r = o(i),
	        a = n(5),
	        l = o(a),
	        s = [{ litmus: l["default"].isString, conversions: { THREE_CHAR_HEX: { read: function read(e) {
	            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
	          }, write: r["default"] }, SIX_CHAR_HEX: { read: function read(e) {
	            var t = e.match(/^#([A-F0-9]{6})$/i);return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
	          }, write: r["default"] }, CSS_RGB: { read: function read(e) {
	            var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
	          }, write: r["default"] }, CSS_RGBA: { read: function read(e) {
	            var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
	          }, write: r["default"] } } }, { litmus: l["default"].isNumber, conversions: { HEX: { read: function read(e) {
	            return { space: "HEX", hex: e, conversionName: "HEX" };
	          }, write: function write(e) {
	            return e.hex;
	          } } } }, { litmus: l["default"].isArray, conversions: { RGB_ARRAY: { read: function read(e) {
	            return 3 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2] };
	          }, write: function write(e) {
	            return [e.r, e.g, e.b];
	          } }, RGBA_ARRAY: { read: function read(e) {
	            return 4 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
	          }, write: function write(e) {
	            return [e.r, e.g, e.b, e.a];
	          } } } }, { litmus: l["default"].isObject, conversions: { RGBA_OBJ: { read: function read(e) {
	            return !!(l["default"].isNumber(e.r) && l["default"].isNumber(e.g) && l["default"].isNumber(e.b) && l["default"].isNumber(e.a)) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a };
	          }, write: function write(e) {
	            return { r: e.r, g: e.g, b: e.b, a: e.a };
	          } }, RGB_OBJ: { read: function read(e) {
	            return !!(l["default"].isNumber(e.r) && l["default"].isNumber(e.g) && l["default"].isNumber(e.b)) && { space: "RGB", r: e.r, g: e.g, b: e.b };
	          }, write: function write(e) {
	            return { r: e.r, g: e.g, b: e.b };
	          } }, HSVA_OBJ: { read: function read(e) {
	            return !!(l["default"].isNumber(e.h) && l["default"].isNumber(e.s) && l["default"].isNumber(e.v) && l["default"].isNumber(e.a)) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a };
	          }, write: function write(e) {
	            return { h: e.h, s: e.s, v: e.v, a: e.a };
	          } }, HSV_OBJ: { read: function read(e) {
	            return !!(l["default"].isNumber(e.h) && l["default"].isNumber(e.s) && l["default"].isNumber(e.v)) && { space: "HSV", h: e.h, s: e.s, v: e.v };
	          }, write: function write(e) {
	            return { h: e.h, s: e.s, v: e.v };
	          } } } }],
	        u = void 0,
	        d = void 0,
	        c = function c() {
	      d = !1;var e = arguments.length > 1 ? l["default"].toArray(arguments) : arguments[0];return l["default"].each(s, function (t) {
	        if (t.litmus(e)) return l["default"].each(t.conversions, function (t, n) {
	          if (u = t.read(e), d === !1 && u !== !1) return d = u, u.conversionName = n, u.conversion = t, l["default"].BREAK;
	        }), l["default"].BREAK;
	      }), d;
	    };t["default"] = c;
	  }, function (e, t) {
	    "use strict";
	    t.__esModule = !0, t["default"] = function (e, t) {
	      var n = e.__state.conversionName.toString(),
	          o = Math.round(e.r),
	          i = Math.round(e.g),
	          r = Math.round(e.b),
	          a = e.a,
	          l = Math.round(e.h),
	          s = e.s.toFixed(1),
	          u = e.v.toFixed(1);if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
	        for (var d = e.hex.toString(16); d.length < 6;) {
	          d = "0" + d;
	        }return "#" + d;
	      }return "CSS_RGB" === n ? "rgb(" + o + "," + i + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + o + "," + i + "," + r + "," + a + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + o + "," + i + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + o + "," + i + "," + r + "," + a + "]" : "RGB_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + ",a:" + a + "}" : "HSV_OBJ" === n ? "{h:" + l + ",s:" + s + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + l + ",s:" + s + ",v:" + u + ",a:" + a + "}" : "unknown format";
	    };
	  }, function (e, t) {
	    "use strict";
	    t.__esModule = !0;var n = Array.prototype.forEach,
	        o = Array.prototype.slice,
	        i = { BREAK: {}, extend: function extend(e) {
	        return this.each(o.call(arguments, 1), function (t) {
	          var n = this.isObject(t) ? Object.keys(t) : [];n.forEach(function (n) {
	            this.isUndefined(t[n]) || (e[n] = t[n]);
	          }.bind(this));
	        }, this), e;
	      }, defaults: function defaults(e) {
	        return this.each(o.call(arguments, 1), function (t) {
	          var n = this.isObject(t) ? Object.keys(t) : [];n.forEach(function (n) {
	            this.isUndefined(e[n]) && (e[n] = t[n]);
	          }.bind(this));
	        }, this), e;
	      }, compose: function compose() {
	        var e = o.call(arguments);return function () {
	          for (var t = o.call(arguments), n = e.length - 1; n >= 0; n--) {
	            t = [e[n].apply(this, t)];
	          }return t[0];
	        };
	      }, each: function each(e, t, o) {
	        if (e) if (n && e.forEach && e.forEach === n) e.forEach(t, o);else if (e.length === e.length + 0) {
	          var i = void 0,
	              r = void 0;for (i = 0, r = e.length; i < r; i++) {
	            if (i in e && t.call(o, e[i], i) === this.BREAK) return;
	          }
	        } else for (var a in e) {
	          if (t.call(o, e[a], a) === this.BREAK) return;
	        }
	      }, defer: function defer(e) {
	        setTimeout(e, 0);
	      }, debounce: function debounce(e, t) {
	        var n = void 0;return function () {
	          function o() {
	            n = null;
	          }var i = this,
	              r = arguments,
	              a = !n;clearTimeout(n), n = setTimeout(o, t), a && e.apply(i, r);
	        };
	      }, toArray: function toArray(e) {
	        return e.toArray ? e.toArray() : o.call(e);
	      }, isUndefined: function isUndefined(e) {
	        return void 0 === e;
	      }, isNull: function isNull(e) {
	        return null === e;
	      }, isNaN: function (e) {
	        function t(t) {
	          return e.apply(this, arguments);
	        }return t.toString = function () {
	          return e.toString();
	        }, t;
	      }(function (e) {
	        return isNaN(e);
	      }), isArray: Array.isArray || function (e) {
	        return e.constructor === Array;
	      }, isObject: function isObject(e) {
	        return e === Object(e);
	      }, isNumber: function isNumber(e) {
	        return e === e + 0;
	      }, isString: function isString(e) {
	        return e === e + "";
	      }, isBoolean: function isBoolean(e) {
	        return e === !1 || e === !0;
	      }, isFunction: function isFunction(e) {
	        return "[object Function]" === Object.prototype.toString.call(e);
	      } };t["default"] = i;
	  }, function (e, t) {
	    "use strict";
	    t.__esModule = !0;var n = void 0,
	        o = { hsv_to_rgb: function hsv_to_rgb(e, t, n) {
	        var o = Math.floor(e / 60) % 6,
	            i = e / 60 - Math.floor(e / 60),
	            r = n * (1 - t),
	            a = n * (1 - i * t),
	            l = n * (1 - (1 - i) * t),
	            s = [[n, l, r], [a, n, r], [r, n, l], [r, a, n], [l, r, n], [n, r, a]][o];return { r: 255 * s[0], g: 255 * s[1], b: 255 * s[2] };
	      }, rgb_to_hsv: function rgb_to_hsv(e, t, n) {
	        var o = Math.min(e, t, n),
	            i = Math.max(e, t, n),
	            r = i - o,
	            a = void 0,
	            l = void 0;return 0 === i ? { h: NaN, s: 0, v: 0 } : (l = r / i, a = e === i ? (t - n) / r : t === i ? 2 + (n - e) / r : 4 + (e - t) / r, a /= 6, a < 0 && (a += 1), { h: 360 * a, s: l, v: i / 255 });
	      }, rgb_to_hex: function rgb_to_hex(e, t, n) {
	        var o = this.hex_with_component(0, 2, e);return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n);
	      }, component_from_hex: function component_from_hex(e, t) {
	        return e >> 8 * t & 255;
	      }, hex_with_component: function hex_with_component(e, t, o) {
	        return o << (n = 8 * t) | e & ~(255 << n);
	      } };t["default"] = o;
	  }, function (e, t) {
	    "use strict";
	    function n(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }t.__esModule = !0;var o = function () {
	      function e(t, o) {
	        n(this, e), this.initialValue = t[o], this.domElement = document.createElement("div"), this.object = t, this.property = o, this.__onChange = void 0, this.__onFinishChange = void 0;
	      }return e.prototype.onChange = function (e) {
	        return this.__onChange = e, this;
	      }, e.prototype.onFinishChange = function (e) {
	        return this.__onFinishChange = e, this;
	      }, e.prototype.setValue = function (e) {
	        return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this;
	      }, e.prototype.getValue = function () {
	        return this.object[this.property];
	      }, e.prototype.updateDisplay = function () {
	        return this;
	      }, e.prototype.isModified = function () {
	        return this.initialValue !== this.getValue();
	      }, e;
	    }();t["default"] = o;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }t.__esModule = !0;var l = n(7),
	        s = o(l),
	        u = n(9),
	        d = o(u),
	        c = function (e) {
	      function t(n, o) {
	        function a() {
	          s.setValue(!s.__prev);
	        }i(this, t);var l = r(this, e.call(this, n, o)),
	            s = l;return l.__prev = l.getValue(), l.__checkbox = document.createElement("input"), l.__checkbox.setAttribute("type", "checkbox"), d["default"].bind(l.__checkbox, "change", a, !1), l.domElement.appendChild(l.__checkbox), l.updateDisplay(), l;
	      }return a(t, e), t.prototype.setValue = function (t) {
	        var n = e.prototype.setValue.call(this, t);return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n;
	      }, t.prototype.updateDisplay = function () {
	        return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, e.prototype.updateDisplay.call(this);
	      }, t;
	    }(s["default"]);t["default"] = c;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e) {
	      if ("0" === e || a["default"].isUndefined(e)) return 0;var t = e.match(u);return a["default"].isNull(t) ? 0 : parseFloat(t[1]);
	    }t.__esModule = !0;var r = n(5),
	        a = o(r),
	        l = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] },
	        s = {};a["default"].each(l, function (e, t) {
	      a["default"].each(e, function (e) {
	        s[e] = t;
	      });
	    });var u = /(\d+(\.\d+)?)px/,
	        d = { makeSelectable: function makeSelectable(e, t) {
	        void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
	          return !1;
	        } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
	      }, makeFullscreen: function makeFullscreen(e, t, n) {
	        var o = n,
	            i = t;a["default"].isUndefined(i) && (i = !0), a["default"].isUndefined(o) && (o = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), o && (e.style.top = 0, e.style.bottom = 0);
	      }, fakeEvent: function fakeEvent(e, t, n, o) {
	        var i = n || {},
	            r = s[t];if (!r) throw new Error("Event type " + t + " not supported.");var l = document.createEvent(r);switch (r) {case "MouseEvents":
	            var u = i.x || i.clientX || 0,
	                d = i.y || i.clientY || 0;l.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, u, d, !1, !1, !1, !1, 0, null);break;case "KeyboardEvents":
	            var c = l.initKeyboardEvent || l.initKeyEvent;a["default"].defaults(i, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), c(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);break;default:
	            l.initEvent(t, i.bubbles || !1, i.cancelable || !0);}a["default"].defaults(l, o), e.dispatchEvent(l);
	      }, bind: function bind(e, t, n, o) {
	        var i = o || !1;return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), d;
	      }, unbind: function unbind(e, t, n, o) {
	        var i = o || !1;return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), d;
	      }, addClass: function addClass(e, t) {
	        if (void 0 === e.className) e.className = t;else if (e.className !== t) {
	          var n = e.className.split(/ +/);n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
	        }return d;
	      }, removeClass: function removeClass(e, t) {
	        if (t) {
	          if (e.className === t) e.removeAttribute("class");else {
	            var n = e.className.split(/ +/),
	                o = n.indexOf(t);o !== -1 && (n.splice(o, 1), e.className = n.join(" "));
	          }
	        } else e.className = void 0;return d;
	      }, hasClass: function hasClass(e, t) {
	        return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
	      }, getWidth: function getWidth(e) {
	        var t = getComputedStyle(e);return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width);
	      }, getHeight: function getHeight(e) {
	        var t = getComputedStyle(e);return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height);
	      }, getOffset: function getOffset(e) {
	        var t = e,
	            n = { left: 0, top: 0 };if (t.offsetParent) do {
	          n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
	        } while (t);return n;
	      }, isActive: function isActive(e) {
	        return e === document.activeElement && (e.type || e.href);
	      } };t["default"] = d;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }t.__esModule = !0;var l = n(7),
	        s = o(l),
	        u = n(9),
	        d = o(u),
	        c = n(5),
	        f = o(c),
	        _ = function (e) {
	      function t(n, o, a) {
	        i(this, t);var l = r(this, e.call(this, n, o)),
	            s = a,
	            u = l;return l.__select = document.createElement("select"), f["default"].isArray(s) && !function () {
	          var e = {};f["default"].each(s, function (t) {
	            e[t] = t;
	          }), s = e;
	        }(), f["default"].each(s, function (e, t) {
	          var n = document.createElement("option");n.innerHTML = t, n.setAttribute("value", e), u.__select.appendChild(n);
	        }), l.updateDisplay(), d["default"].bind(l.__select, "change", function () {
	          var e = this.options[this.selectedIndex].value;u.setValue(e);
	        }), l.domElement.appendChild(l.__select), l;
	      }return a(t, e), t.prototype.setValue = function (t) {
	        var n = e.prototype.setValue.call(this, t);return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n;
	      }, t.prototype.updateDisplay = function () {
	        return d["default"].isActive(this.__select) ? this : (this.__select.value = this.getValue(), e.prototype.updateDisplay.call(this));
	      }, t;
	    }(s["default"]);t["default"] = _;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }t.__esModule = !0;var l = n(7),
	        s = o(l),
	        u = n(9),
	        d = o(u),
	        c = function (e) {
	      function t(n, o) {
	        function a() {
	          u.setValue(u.__input.value);
	        }function l() {
	          u.__onFinishChange && u.__onFinishChange.call(u, u.getValue());
	        }i(this, t);var s = r(this, e.call(this, n, o)),
	            u = s;return s.__input = document.createElement("input"), s.__input.setAttribute("type", "text"), d["default"].bind(s.__input, "keyup", a), d["default"].bind(s.__input, "change", a), d["default"].bind(s.__input, "blur", l), d["default"].bind(s.__input, "keydown", function (e) {
	          13 === e.keyCode && this.blur();
	        }), s.updateDisplay(), s.domElement.appendChild(s.__input), s;
	      }return a(t, e), t.prototype.updateDisplay = function () {
	        return d["default"].isActive(this.__input) || (this.__input.value = this.getValue()), e.prototype.updateDisplay.call(this);
	      }, t;
	    }(s["default"]);t["default"] = c;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }function l(e) {
	      var t = e.toString();return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
	    }t.__esModule = !0;var s = n(7),
	        u = o(s),
	        d = n(5),
	        c = o(d),
	        f = function (e) {
	      function t(n, o, a) {
	        i(this, t);var s = r(this, e.call(this, n, o)),
	            u = a || {};return s.__min = u.min, s.__max = u.max, s.__step = u.step, c["default"].isUndefined(s.__step) ? 0 === s.initialValue ? s.__impliedStep = 1 : s.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)) / 10 : s.__impliedStep = s.__step, s.__precision = l(s.__impliedStep), s;
	      }return a(t, e), t.prototype.setValue = function (t) {
	        var n = t;return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step !== 0 && (n = Math.round(n / this.__step) * this.__step), e.prototype.setValue.call(this, n);
	      }, t.prototype.min = function (e) {
	        return this.__min = e, this;
	      }, t.prototype.max = function (e) {
	        return this.__max = e, this;
	      }, t.prototype.step = function (e) {
	        return this.__step = e, this.__impliedStep = e, this.__precision = l(e), this;
	      }, t;
	    }(u["default"]);t["default"] = f;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }function l(e, t) {
	      var n = Math.pow(10, t);return Math.round(e * n) / n;
	    }t.__esModule = !0;var s = n(12),
	        u = o(s),
	        d = n(9),
	        c = o(d),
	        f = n(5),
	        _ = o(f),
	        p = function (e) {
	      function t(n, o, a) {
	        function l() {
	          var e = parseFloat(m.__input.value);_["default"].isNaN(e) || m.setValue(e);
	        }function s() {
	          m.__onFinishChange && m.__onFinishChange.call(m, m.getValue());
	        }function u() {
	          s();
	        }function d(e) {
	          var t = b - e.clientY;m.setValue(m.getValue() + t * m.__impliedStep), b = e.clientY;
	        }function f() {
	          c["default"].unbind(window, "mousemove", d), c["default"].unbind(window, "mouseup", f), s();
	        }function p(e) {
	          c["default"].bind(window, "mousemove", d), c["default"].bind(window, "mouseup", f), b = e.clientY;
	        }i(this, t);var h = r(this, e.call(this, n, o, a));h.__truncationSuspended = !1;var m = h,
	            b = void 0;return h.__input = document.createElement("input"), h.__input.setAttribute("type", "text"), c["default"].bind(h.__input, "change", l), c["default"].bind(h.__input, "blur", u), c["default"].bind(h.__input, "mousedown", p), c["default"].bind(h.__input, "keydown", function (e) {
	          13 === e.keyCode && (m.__truncationSuspended = !0, this.blur(), m.__truncationSuspended = !1, s());
	        }), h.updateDisplay(), h.domElement.appendChild(h.__input), h;
	      }return a(t, e), t.prototype.updateDisplay = function () {
	        return this.__input.value = this.__truncationSuspended ? this.getValue() : l(this.getValue(), this.__precision), e.prototype.updateDisplay.call(this);
	      }, t;
	    }(u["default"]);t["default"] = p;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }function l(e, t, n, o, i) {
	      return o + (i - o) * ((e - t) / (n - t));
	    }t.__esModule = !0;var s = n(12),
	        u = o(s),
	        d = n(9),
	        c = o(d),
	        f = function (e) {
	      function t(n, o, a, s, u) {
	        function d(e) {
	          document.activeElement.blur(), c["default"].bind(window, "mousemove", f), c["default"].bind(window, "mouseup", _), f(e);
	        }function f(e) {
	          e.preventDefault();var t = h.__background.getBoundingClientRect();return h.setValue(l(e.clientX, t.left, t.right, h.__min, h.__max)), !1;
	        }function _() {
	          c["default"].unbind(window, "mousemove", f), c["default"].unbind(window, "mouseup", _), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue());
	        }i(this, t);var p = r(this, e.call(this, n, o, { min: a, max: s, step: u })),
	            h = p;return p.__background = document.createElement("div"), p.__foreground = document.createElement("div"), c["default"].bind(p.__background, "mousedown", d), c["default"].addClass(p.__background, "slider"), c["default"].addClass(p.__foreground, "slider-fg"), p.updateDisplay(), p.__background.appendChild(p.__foreground), p.domElement.appendChild(p.__background), p;
	      }return a(t, e), t.prototype.updateDisplay = function () {
	        var t = (this.getValue() - this.__min) / (this.__max - this.__min);return this.__foreground.style.width = 100 * t + "%", e.prototype.updateDisplay.call(this);
	      }, t;
	    }(u["default"]);t["default"] = f;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }t.__esModule = !0;var l = n(7),
	        s = o(l),
	        u = n(9),
	        d = o(u),
	        c = function (e) {
	      function t(n, o, a) {
	        i(this, t);var l = r(this, e.call(this, n, o)),
	            s = l;return l.__button = document.createElement("div"), l.__button.innerHTML = void 0 === a ? "Fire" : a, d["default"].bind(l.__button, "click", function (e) {
	          return e.preventDefault(), s.fire(), !1;
	        }), d["default"].addClass(l.__button, "button"), l.domElement.appendChild(l.__button), l;
	      }return a(t, e), t.prototype.fire = function () {
	        this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
	      }, t;
	    }(s["default"]);t["default"] = c;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function r(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }function l(e, t, n, o) {
	      e.style.background = "", g["default"].each(y, function (i) {
	        e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); ";
	      });
	    }function s(e) {
	      e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
	    }t.__esModule = !0;var u = n(7),
	        d = o(u),
	        c = n(9),
	        f = o(c),
	        _ = n(2),
	        p = o(_),
	        h = n(3),
	        m = o(h),
	        b = n(5),
	        g = o(b),
	        v = function (e) {
	      function t(n, o) {
	        function a(e) {
	          h(e), f["default"].bind(window, "mousemove", h), f["default"].bind(window, "mouseup", u);
	        }function u() {
	          f["default"].unbind(window, "mousemove", h), f["default"].unbind(window, "mouseup", u), _();
	        }function d() {
	          var e = (0, m["default"])(this.value);e !== !1 ? (y.__color.__state = e, y.setValue(y.__color.toOriginal())) : this.value = y.__color.toString();
	        }function c() {
	          f["default"].unbind(window, "mousemove", b), f["default"].unbind(window, "mouseup", c), _();
	        }function _() {
	          y.__onFinishChange && y.__onFinishChange.call(y, y.__color.toOriginal());
	        }function h(e) {
	          e.preventDefault();var t = y.__saturation_field.getBoundingClientRect(),
	              n = (e.clientX - t.left) / (t.right - t.left),
	              o = 1 - (e.clientY - t.top) / (t.bottom - t.top);return o > 1 ? o = 1 : o < 0 && (o = 0), n > 1 ? n = 1 : n < 0 && (n = 0), y.__color.v = o, y.__color.s = n, y.setValue(y.__color.toOriginal()), !1;
	        }function b(e) {
	          e.preventDefault();var t = y.__hue_field.getBoundingClientRect(),
	              n = 1 - (e.clientY - t.top) / (t.bottom - t.top);return n > 1 ? n = 1 : n < 0 && (n = 0), y.__color.h = 360 * n, y.setValue(y.__color.toOriginal()), !1;
	        }i(this, t);var v = r(this, e.call(this, n, o));v.__color = new p["default"](v.getValue()), v.__temp = new p["default"](0);var y = v;v.domElement = document.createElement("div"), f["default"].makeSelectable(v.domElement, !1), v.__selector = document.createElement("div"), v.__selector.className = "selector", v.__saturation_field = document.createElement("div"), v.__saturation_field.className = "saturation-field", v.__field_knob = document.createElement("div"), v.__field_knob.className = "field-knob", v.__field_knob_border = "2px solid ", v.__hue_knob = document.createElement("div"), v.__hue_knob.className = "hue-knob", v.__hue_field = document.createElement("div"), v.__hue_field.className = "hue-field", v.__input = document.createElement("input"), v.__input.type = "text", v.__input_textShadow = "0 1px 1px ", f["default"].bind(v.__input, "keydown", function (e) {
	          13 === e.keyCode && d.call(this);
	        }), f["default"].bind(v.__input, "blur", d), f["default"].bind(v.__selector, "mousedown", function () {
	          f["default"].addClass(this, "drag").bind(window, "mouseup", function () {
	            f["default"].removeClass(y.__selector, "drag");
	          });
	        });var w = document.createElement("div");return g["default"].extend(v.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), g["default"].extend(v.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: v.__field_knob_border + (v.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), g["default"].extend(v.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), g["default"].extend(v.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), g["default"].extend(w.style, { width: "100%", height: "100%", background: "none" }), l(w, "top", "rgba(0,0,0,0)", "#000"), g["default"].extend(v.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), s(v.__hue_field), g["default"].extend(v.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: v.__input_textShadow + "rgba(0,0,0,0.7)" }), f["default"].bind(v.__saturation_field, "mousedown", a), f["default"].bind(v.__field_knob, "mousedown", a), f["default"].bind(v.__hue_field, "mousedown", function (e) {
	          b(e), f["default"].bind(window, "mousemove", b), f["default"].bind(window, "mouseup", c);
	        }), v.__saturation_field.appendChild(w), v.__selector.appendChild(v.__field_knob), v.__selector.appendChild(v.__saturation_field), v.__selector.appendChild(v.__hue_field), v.__hue_field.appendChild(v.__hue_knob), v.domElement.appendChild(v.__input), v.domElement.appendChild(v.__selector), v.updateDisplay(), v;
	      }return a(t, e), t.prototype.updateDisplay = function () {
	        var e = (0, m["default"])(this.getValue());if (e !== !1) {
	          var t = !1;g["default"].each(p["default"].COMPONENTS, function (n) {
	            if (!g["default"].isUndefined(e[n]) && !g["default"].isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {};
	          }, this), t && g["default"].extend(this.__color.__state, e);
	        }g["default"].extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
	            o = 255 - n;g["default"].extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, l(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), g["default"].extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n + "," + n + "," + n + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" });
	      }, t;
	    }(d["default"]),
	        y = ["-moz-", "-o-", "-webkit-", "-ms-", ""];t["default"] = v;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t, n) {
	      var o = document.createElement("li");return t && o.appendChild(t), n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o), e.onResize(), o;
	    }function r(e, t) {
	      var n = e.__preset_select[e.__preset_select.selectedIndex];t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value;
	    }function a(e, t, n) {
	      if (n.__li = t, n.__gui = e, U["default"].extend(n, { options: function options(t) {
	          if (arguments.length > 1) {
	            var o = n.__li.nextElementSibling;return n.remove(), s(e, n.object, n.property, { before: o, factoryArgs: [U["default"].toArray(arguments)] });
	          }if (U["default"].isArray(t) || U["default"].isObject(t)) {
	            var i = n.__li.nextElementSibling;return n.remove(), s(e, n.object, n.property, { before: i, factoryArgs: [t] });
	          }
	        }, name: function name(e) {
	          return n.__li.firstElementChild.firstElementChild.innerHTML = e, n;
	        }, listen: function listen() {
	          return n.__gui.listen(n), n;
	        }, remove: function remove() {
	          return n.__gui.remove(n), n;
	        } }), n instanceof B["default"]) !function () {
	        var e = new N["default"](n.object, n.property, { min: n.__min, max: n.__max, step: n.__step });U["default"].each(["updateDisplay", "onChange", "onFinishChange", "step"], function (t) {
	          var o = n[t],
	              i = e[t];n[t] = e[t] = function () {
	            var t = Array.prototype.slice.call(arguments);return i.apply(e, t), o.apply(n, t);
	          };
	        }), z["default"].addClass(t, "has-slider"), n.domElement.insertBefore(e.domElement, n.domElement.firstElementChild);
	      }();else if (n instanceof N["default"]) {
	        var o = function o(t) {
	          if (U["default"].isNumber(n.__min) && U["default"].isNumber(n.__max)) {
	            var o = n.__li.firstElementChild.firstElementChild.innerHTML,
	                i = n.__gui.__listening.indexOf(n) > -1;n.remove();var r = s(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] });return r.name(o), i && r.listen(), r;
	          }return t;
	        };n.min = U["default"].compose(o, n.min), n.max = U["default"].compose(o, n.max);
	      } else n instanceof O["default"] ? (z["default"].bind(t, "click", function () {
	        z["default"].fakeEvent(n.__checkbox, "click");
	      }), z["default"].bind(n.__checkbox, "click", function (e) {
	        e.stopPropagation();
	      })) : n instanceof R["default"] ? (z["default"].bind(t, "click", function () {
	        z["default"].fakeEvent(n.__button, "click");
	      }), z["default"].bind(t, "mouseover", function () {
	        z["default"].addClass(n.__button, "hover");
	      }), z["default"].bind(t, "mouseout", function () {
	        z["default"].removeClass(n.__button, "hover");
	      })) : n instanceof j["default"] && (z["default"].addClass(t, "color"), n.updateDisplay = U["default"].compose(function (e) {
	        return t.style.borderLeftColor = n.__color.toString(), e;
	      }, n.updateDisplay), n.updateDisplay());n.setValue = U["default"].compose(function (t) {
	        return e.getRoot().__preset_select && n.isModified() && r(e.getRoot(), !0), t;
	      }, n.setValue);
	    }function l(e, t) {
	      var n = e.getRoot(),
	          o = n.__rememberedObjects.indexOf(t.object);if (o !== -1) {
	        var i = n.__rememberedObjectIndecesToControllers[o];if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) {
	          var r = n.load.remembered,
	              a = void 0;if (r[e.preset]) a = r[e.preset];else {
	            if (!r[Q]) return;a = r[Q];
	          }if (a[o] && void 0 !== a[o][t.property]) {
	            var l = a[o][t.property];t.initialValue = l, t.setValue(l);
	          }
	        }
	      }
	    }function s(e, t, n, o) {
	      if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');var r = void 0;if (o.color) r = new j["default"](t, n);else {
	        var s = [t, n].concat(o.factoryArgs);r = C["default"].apply(e, s);
	      }o.before instanceof S["default"] && (o.before = o.before.__li), l(e, r), z["default"].addClass(r.domElement, "c");var u = document.createElement("span");z["default"].addClass(u, "property-name"), u.innerHTML = r.property;var d = document.createElement("div");d.appendChild(u), d.appendChild(r.domElement);var c = i(e, d, o.before);return z["default"].addClass(c, oe.CLASS_CONTROLLER_ROW), r instanceof j["default"] ? z["default"].addClass(c, "color") : z["default"].addClass(c, g(r.getValue())), a(e, c, r), e.__controllers.push(r), r;
	    }function u(e, t) {
	      return document.location.href + "." + t;
	    }function d(e, t, n) {
	      var o = document.createElement("option");o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
	    }function c(e, t) {
	      t.style.display = e.useLocalStorage ? "block" : "none";
	    }function f(e) {
	      var t = e.__save_row = document.createElement("li");z["default"].addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), z["default"].addClass(t, "save-row");var n = document.createElement("span");n.innerHTML = "&nbsp;", z["default"].addClass(n, "button gears");var o = document.createElement("span");o.innerHTML = "Save", z["default"].addClass(o, "button"), z["default"].addClass(o, "save");var i = document.createElement("span");i.innerHTML = "New", z["default"].addClass(i, "button"), z["default"].addClass(i, "save-as");var r = document.createElement("span");r.innerHTML = "Revert", z["default"].addClass(r, "button"), z["default"].addClass(r, "revert");var a = e.__preset_select = document.createElement("select");e.load && e.load.remembered ? U["default"].each(e.load.remembered, function (t, n) {
	        d(e, n, n === e.preset);
	      }) : d(e, Q, !1), z["default"].bind(a, "change", function () {
	        for (var t = 0; t < e.__preset_select.length; t++) {
	          e.__preset_select[t].innerHTML = e.__preset_select[t].value;
	        }e.preset = this.value;
	      }), t.appendChild(a), t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(r), q && !function () {
	        var t = document.getElementById("dg-local-explain"),
	            n = document.getElementById("dg-local-storage"),
	            o = document.getElementById("dg-save-locally");o.style.display = "block", "true" === localStorage.getItem(u(e, "isLocal")) && n.setAttribute("checked", "checked"), c(e, t), z["default"].bind(n, "change", function () {
	          e.useLocalStorage = !e.useLocalStorage, c(e, t);
	        });
	      }();var l = document.getElementById("dg-new-constructor");z["default"].bind(l, "keydown", function (e) {
	        !e.metaKey || 67 !== e.which && 67 !== e.keyCode || Z.hide();
	      }), z["default"].bind(n, "click", function () {
	        l.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), Z.show(), l.focus(), l.select();
	      }), z["default"].bind(o, "click", function () {
	        e.save();
	      }), z["default"].bind(i, "click", function () {
	        var t = prompt("Enter a new preset name.");t && e.saveAs(t);
	      }), z["default"].bind(r, "click", function () {
	        e.revert();
	      });
	    }function _(e) {
	      function t(t) {
	        return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1;
	      }function n() {
	        z["default"].removeClass(e.__closeButton, oe.CLASS_DRAG), z["default"].unbind(window, "mousemove", t), z["default"].unbind(window, "mouseup", n);
	      }function o(o) {
	        return o.preventDefault(), i = o.clientX, z["default"].addClass(e.__closeButton, oe.CLASS_DRAG), z["default"].bind(window, "mousemove", t), z["default"].bind(window, "mouseup", n), !1;
	      }var i = void 0;e.__resize_handle = document.createElement("div"), U["default"].extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), z["default"].bind(e.__resize_handle, "mousedown", o), z["default"].bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
	    }function p(e, t) {
	      e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
	    }function h(e, t) {
	      var n = {};return U["default"].each(e.__rememberedObjects, function (o, i) {
	        var r = {},
	            a = e.__rememberedObjectIndecesToControllers[i];U["default"].each(a, function (e, n) {
	          r[n] = t ? e.initialValue : e.getValue();
	        }), n[i] = r;
	      }), n;
	    }function m(e) {
	      for (var t = 0; t < e.__preset_select.length; t++) {
	        e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
	      }
	    }function b(e) {
	      0 !== e.length && D["default"].call(window, function () {
	        b(e);
	      }), U["default"].each(e, function (e) {
	        e.updateDisplay();
	      });
	    }var g = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    },
	        v = n(18),
	        y = o(v),
	        w = n(19),
	        x = o(w),
	        E = n(20),
	        C = o(E),
	        A = n(7),
	        S = o(A),
	        k = n(8),
	        O = o(k),
	        T = n(15),
	        R = o(T),
	        L = n(13),
	        N = o(L),
	        M = n(14),
	        B = o(M),
	        H = n(16),
	        j = o(H),
	        P = n(21),
	        D = o(P),
	        V = n(22),
	        F = o(V),
	        I = n(9),
	        z = o(I),
	        G = n(5),
	        U = o(G),
	        X = n(23),
	        K = o(X);y["default"].inject(K["default"]);var Y = "dg",
	        J = 72,
	        W = 20,
	        Q = "Default",
	        q = function () {
	      try {
	        return "localStorage" in window && null !== window.localStorage;
	      } catch (e) {
	        return !1;
	      }
	    }(),
	        Z = void 0,
	        $ = !0,
	        ee = void 0,
	        te = !1,
	        ne = [],
	        oe = function ie(e) {
	      function t() {
	        var e = n.getRoot();e.width += 1, U["default"].defer(function () {
	          e.width -= 1;
	        });
	      }var n = this,
	          o = e || {};this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), z["default"].addClass(this.domElement, Y), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o = U["default"].defaults(o, { autoPlace: !0, width: ie.DEFAULT_WIDTH }), o = U["default"].defaults(o, { resizable: o.autoPlace, hideable: o.autoPlace }), U["default"].isUndefined(o.load) ? o.load = { preset: Q } : o.preset && (o.load.preset = o.preset), U["default"].isUndefined(o.parent) && o.hideable && ne.push(this), o.resizable = U["default"].isUndefined(o.parent) && o.resizable, o.autoPlace && U["default"].isUndefined(o.scrollable) && (o.scrollable = !0);var r = q && "true" === localStorage.getItem(u(this, "isLocal")),
	          a = void 0;if (Object.defineProperties(this, { parent: { get: function get() {
	            return o.parent;
	          } }, scrollable: { get: function get() {
	            return o.scrollable;
	          } }, autoPlace: { get: function get() {
	            return o.autoPlace;
	          } }, preset: { get: function get() {
	            return n.parent ? n.getRoot().preset : o.load.preset;
	          }, set: function set(e) {
	            n.parent ? n.getRoot().preset = e : o.load.preset = e, m(this), n.revert();
	          } }, width: { get: function get() {
	            return o.width;
	          }, set: function set(e) {
	            o.width = e, p(n, e);
	          } }, name: { get: function get() {
	            return o.name;
	          }, set: function set(e) {
	            o.name = e, titleRowName && (titleRowName.innerHTML = o.name);
	          } }, closed: { get: function get() {
	            return o.closed;
	          }, set: function set(e) {
	            o.closed = e, o.closed ? z["default"].addClass(n.__ul, ie.CLASS_CLOSED) : z["default"].removeClass(n.__ul, ie.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? ie.TEXT_OPEN : ie.TEXT_CLOSED);
	          } }, load: { get: function get() {
	            return o.load;
	          } }, useLocalStorage: { get: function get() {
	            return r;
	          }, set: function set(e) {
	            q && (r = e, e ? z["default"].bind(window, "unload", a) : z["default"].unbind(window, "unload", a), localStorage.setItem(u(n, "isLocal"), e));
	          } } }), U["default"].isUndefined(o.parent)) {
	        if (o.closed = !1, z["default"].addClass(this.domElement, ie.CLASS_MAIN), z["default"].makeSelectable(this.domElement, !1), q && r) {
	          n.useLocalStorage = !0;var l = localStorage.getItem(u(this, "gui"));l && (o.load = JSON.parse(l));
	        }this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = ie.TEXT_CLOSED, z["default"].addClass(this.__closeButton, ie.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), z["default"].bind(this.__closeButton, "click", function () {
	          n.closed = !n.closed;
	        });
	      } else {
	        void 0 === o.closed && (o.closed = !0);var s = document.createTextNode(o.name);z["default"].addClass(s, "controller-name");var d = i(n, s),
	            c = function c(e) {
	          return e.preventDefault(), n.closed = !n.closed, !1;
	        };z["default"].addClass(this.__ul, ie.CLASS_CLOSED), z["default"].addClass(d, "title"), z["default"].bind(d, "click", c), o.closed || (this.closed = !1);
	      }o.autoPlace && (U["default"].isUndefined(o.parent) && ($ && (ee = document.createElement("div"), z["default"].addClass(ee, Y), z["default"].addClass(ee, ie.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(ee), $ = !1), ee.appendChild(this.domElement), z["default"].addClass(this.domElement, ie.CLASS_AUTO_PLACE)), this.parent || p(n, o.width)), this.__resizeHandler = function () {
	        n.onResizeDebounced();
	      }, z["default"].bind(window, "resize", this.__resizeHandler), z["default"].bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), z["default"].bind(this.__ul, "transitionend", this.__resizeHandler), z["default"].bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o.resizable && _(this), a = function a() {
	        q && "true" === localStorage.getItem(u(n, "isLocal")) && localStorage.setItem(u(n, "gui"), JSON.stringify(n.getSaveObject()));
	      }, this.saveToLocalStorageIfPossible = a, o.parent || t();
	    };oe.toggleHide = function () {
	      te = !te, U["default"].each(ne, function (e) {
	        e.domElement.style.display = te ? "none" : "";
	      });
	    }, oe.CLASS_AUTO_PLACE = "a", oe.CLASS_AUTO_PLACE_CONTAINER = "ac", oe.CLASS_MAIN = "main", oe.CLASS_CONTROLLER_ROW = "cr", oe.CLASS_TOO_TALL = "taller-than-window", oe.CLASS_CLOSED = "closed", oe.CLASS_CLOSE_BUTTON = "close-button", oe.CLASS_DRAG = "drag", oe.DEFAULT_WIDTH = 245, oe.TEXT_CLOSED = "Close Controls", oe.TEXT_OPEN = "Open Controls", oe._keydownHandler = function (e) {
	      "text" === document.activeElement.type || e.which !== J && e.keyCode !== J || oe.toggleHide();
	    }, z["default"].bind(window, "keydown", oe._keydownHandler, !1), U["default"].extend(oe.prototype, { add: function add(e, t) {
	        return s(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
	      }, addColor: function addColor(e, t) {
	        return s(this, e, t, { color: !0 });
	      }, remove: function remove(e) {
	        this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);var t = this;U["default"].defer(function () {
	          t.onResize();
	        });
	      }, destroy: function destroy() {
	        this.autoPlace && ee.removeChild(this.domElement), z["default"].unbind(window, "keydown", oe._keydownHandler, !1), z["default"].unbind(window, "resize", this.__resizeHandler), this.saveToLocalStorageIfPossible && z["default"].unbind(window, "unload", this.saveToLocalStorageIfPossible);
	      }, addFolder: function addFolder(e) {
	        if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');var t = { name: e, parent: this };t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);var n = new oe(t);this.__folders[e] = n;var o = i(this, n.domElement);return z["default"].addClass(o, "folder"), n;
	      }, open: function open() {
	        this.closed = !1;
	      }, close: function close() {
	        this.closed = !0;
	      }, onResize: function onResize() {
	        var e = this.getRoot();if (e.scrollable) {
	          var t = z["default"].getOffset(e.__ul).top,
	              n = 0;U["default"].each(e.__ul.childNodes, function (t) {
	            e.autoPlace && t === e.__save_row || (n += z["default"].getHeight(t));
	          }), window.innerHeight - t - W < n ? (z["default"].addClass(e.domElement, oe.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - W + "px") : (z["default"].removeClass(e.domElement, oe.CLASS_TOO_TALL), e.__ul.style.height = "auto");
	        }e.__resize_handle && U["default"].defer(function () {
	          e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
	        }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
	      }, onResizeDebounced: U["default"].debounce(function () {
	        this.onResize();
	      }, 200), remember: function remember() {
	        if (U["default"].isUndefined(Z) && (Z = new F["default"](), Z.domElement.innerHTML = x["default"]), this.parent) throw new Error("You can only call remember on a top level GUI.");var e = this;U["default"].each(Array.prototype.slice.call(arguments), function (t) {
	          0 === e.__rememberedObjects.length && f(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
	        }), this.autoPlace && p(this, this.width);
	      }, getRoot: function getRoot() {
	        for (var e = this; e.parent;) {
	          e = e.parent;
	        }return e;
	      }, getSaveObject: function getSaveObject() {
	        var e = this.load;return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = h(this)), e.folders = {}, U["default"].each(this.__folders, function (t, n) {
	          e.folders[n] = t.getSaveObject();
	        }), e;
	      }, save: function save() {
	        this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = h(this), r(this, !1), this.saveToLocalStorageIfPossible();
	      }, saveAs: function saveAs(e) {
	        this.load.remembered || (this.load.remembered = {}, this.load.remembered[Q] = h(this, !0)), this.load.remembered[e] = h(this), this.preset = e, d(this, e, !0), this.saveToLocalStorageIfPossible();
	      }, revert: function revert(e) {
	        U["default"].each(this.__controllers, function (t) {
	          this.getRoot().load.remembered ? l(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
	        }, this), U["default"].each(this.__folders, function (e) {
	          e.revert(e);
	        }), e || r(this.getRoot(), !1);
	      }, listen: function listen(e) {
	        var t = 0 === this.__listening.length;this.__listening.push(e), t && b(this.__listening);
	      }, updateDisplay: function updateDisplay() {
	        U["default"].each(this.__controllers, function (e) {
	          e.updateDisplay();
	        }), U["default"].each(this.__folders, function (e) {
	          e.updateDisplay();
	        });
	      } }), e.exports = oe;
	  }, function (e, t) {
	    "use strict";
	    e.exports = { load: function load(e, t) {
	        var n = t || document,
	            o = n.createElement("link");o.type = "text/css", o.rel = "stylesheet", o.href = e, n.getElementsByTagName("head")[0].appendChild(o);
	      }, inject: function inject(e, t) {
	        var n = t || document,
	            o = document.createElement("style");o.type = "text/css", o.innerHTML = e;var i = n.getElementsByTagName("head")[0];try {
	          i.appendChild(o);
	        } catch (r) {}
	      } };
	  }, function (e, t) {
	    e.exports = "<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>";
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }t.__esModule = !0;var i = n(10),
	        r = o(i),
	        a = n(13),
	        l = o(a),
	        s = n(14),
	        u = o(s),
	        d = n(11),
	        c = o(d),
	        f = n(15),
	        _ = o(f),
	        p = n(8),
	        h = o(p),
	        m = n(5),
	        b = o(m),
	        g = function g(e, t) {
	      var n = e[t];return b["default"].isArray(arguments[2]) || b["default"].isObject(arguments[2]) ? new r["default"](e, t, arguments[2]) : b["default"].isNumber(n) ? b["default"].isNumber(arguments[2]) && b["default"].isNumber(arguments[3]) ? b["default"].isNumber(arguments[4]) ? new u["default"](e, t, arguments[2], arguments[3], arguments[4]) : new u["default"](e, t, arguments[2], arguments[3]) : b["default"].isNumber(arguments[4]) ? new l["default"](e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new l["default"](e, t, { min: arguments[2], max: arguments[3] }) : b["default"].isString(n) ? new c["default"](e, t) : b["default"].isFunction(n) ? new _["default"](e, t, "") : b["default"].isBoolean(n) ? new h["default"](e, t) : null;
	    };t["default"] = g;
	  }, function (e, t) {
	    "use strict";
	    function n(e) {
	      setTimeout(e, 1e3 / 60);
	    }t.__esModule = !0, t["default"] = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || n;
	  }, function (e, t, n) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function i(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }t.__esModule = !0;var r = n(9),
	        a = o(r),
	        l = n(5),
	        s = o(l),
	        u = function () {
	      function e() {
	        i(this, e), this.backgroundElement = document.createElement("div"), s["default"].extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), a["default"].makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), s["default"].extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);var t = this;a["default"].bind(this.backgroundElement, "click", function () {
	          t.hide();
	        });
	      }return e.prototype.show = function () {
	        var e = this;this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), s["default"].defer(function () {
	          e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)";
	        });
	      }, e.prototype.hide = function t() {
	        var e = this,
	            t = function n() {
	          e.domElement.style.display = "none", e.backgroundElement.style.display = "none", a["default"].unbind(e.domElement, "webkitTransitionEnd", n), a["default"].unbind(e.domElement, "transitionend", n), a["default"].unbind(e.domElement, "oTransitionEnd", n);
	        };a["default"].bind(this.domElement, "webkitTransitionEnd", t), a["default"].bind(this.domElement, "transitionend", t), a["default"].bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
	      }, e.prototype.layout = function () {
	        this.domElement.style.left = window.innerWidth / 2 - a["default"].getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - a["default"].getHeight(this.domElement) / 2 + "px";
	      }, e;
	    }();t["default"] = u;
	  }, function (e, t, n) {
	    t = e.exports = n(24)(), t.push([e.id, ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}", ""]);
	  }, function (e, t) {
	    e.exports = function () {
	      var e = [];return e.toString = function () {
	        for (var e = [], t = 0; t < this.length; t++) {
	          var n = this[t];n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
	        }return e.join("");
	      }, e.i = function (t, n) {
	        "string" == typeof t && (t = [[null, t, ""]]);for (var o = {}, i = 0; i < this.length; i++) {
	          var r = this[i][0];"number" == typeof r && (o[r] = !0);
	        }for (i = 0; i < t.length; i++) {
	          var a = t[i];"number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
	        }
	      }, e;
	    };
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.EffectComposer = function (renderer, renderTarget) {

		this.renderer = renderer;

		if (renderTarget === undefined) {

			var parameters = {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat,
				stencilBuffer: false
			};

			var size = renderer.getSize();
			renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, parameters);
			renderTarget.texture.name = 'EffectComposer.rt1';
		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();
		this.renderTarget2.texture.name = 'EffectComposer.rt2';

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		this.passes = [];

		// dependencies

		if (THREE.CopyShader === undefined) {

			console.error('THREE.EffectComposer relies on THREE.CopyShader');
		}

		if (THREE.ShaderPass === undefined) {

			console.error('THREE.EffectComposer relies on THREE.ShaderPass');
		}

		this.copyPass = new THREE.ShaderPass(THREE.CopyShader);
	};

	Object.assign(THREE.EffectComposer.prototype, {

		swapBuffers: function swapBuffers() {

			var tmp = this.readBuffer;
			this.readBuffer = this.writeBuffer;
			this.writeBuffer = tmp;
		},

		addPass: function addPass(pass) {

			this.passes.push(pass);

			var size = this.renderer.getSize();
			pass.setSize(size.width, size.height);
		},

		insertPass: function insertPass(pass, index) {

			this.passes.splice(index, 0, pass);
		},

		render: function render(delta) {

			var maskActive = false;

			var pass,
			    i,
			    il = this.passes.length;

			for (i = 0; i < il; i++) {

				pass = this.passes[i];

				if (pass.enabled === false) continue;

				pass.render(this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive);

				if (pass.needsSwap) {

					if (maskActive) {

						var context = this.renderer.context;

						context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);

						this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, delta);

						context.stencilFunc(context.EQUAL, 1, 0xffffffff);
					}

					this.swapBuffers();
				}

				if (THREE.MaskPass !== undefined) {

					if (pass instanceof THREE.MaskPass) {

						maskActive = true;
					} else if (pass instanceof THREE.ClearMaskPass) {

						maskActive = false;
					}
				}
			}
		},

		reset: function reset(renderTarget) {

			if (renderTarget === undefined) {

				var size = this.renderer.getSize();

				renderTarget = this.renderTarget1.clone();
				renderTarget.setSize(size.width, size.height);
			}

			this.renderTarget1.dispose();
			this.renderTarget2.dispose();
			this.renderTarget1 = renderTarget;
			this.renderTarget2 = renderTarget.clone();

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;
		},

		setSize: function setSize(width, height) {

			this.renderTarget1.setSize(width, height);
			this.renderTarget2.setSize(width, height);

			for (var i = 0; i < this.passes.length; i++) {

				this.passes[i].setSize(width, height);
			}
		}

	});

	THREE.Pass = function () {

		// if set to true, the pass is processed by the composer
		this.enabled = true;

		// if set to true, the pass indicates to swap read and write buffer after rendering
		this.needsSwap = true;

		// if set to true, the pass clears its buffer before rendering
		this.clear = false;

		// if set to true, the result of the pass is rendered to screen
		this.renderToScreen = false;
	};

	Object.assign(THREE.Pass.prototype, {

		setSize: function setSize(width, height) {},

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

			console.error('THREE.Pass: .render() must be implemented in derived pass.');
		}

	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 *
	 * Full-screen textured quad shader
	 */

	THREE.CopyShader = {

		uniforms: {

			"tDiffuse": { value: null },
			"opacity": { value: 1.0 }

		},

		vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

		fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")

	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.RenderPass = function (scene, camera, overrideMaterial, clearColor, clearAlpha) {

		THREE.Pass.call(this);

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = clearAlpha !== undefined ? clearAlpha : 0;

		this.clear = true;
		this.clearDepth = false;
		this.needsSwap = false;
	};

	THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

		constructor: THREE.RenderPass,

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

			var oldAutoClear = renderer.autoClear;
			renderer.autoClear = false;

			this.scene.overrideMaterial = this.overrideMaterial;

			var oldClearColor, oldClearAlpha;

			if (this.clearColor) {

				oldClearColor = renderer.getClearColor().getHex();
				oldClearAlpha = renderer.getClearAlpha();

				renderer.setClearColor(this.clearColor, this.clearAlpha);
			}

			if (this.clearDepth) {

				renderer.clearDepth();
			}

			renderer.render(this.scene, this.camera, this.renderToScreen ? null : readBuffer, this.clear);

			if (this.clearColor) {

				renderer.setClearColor(oldClearColor, oldClearAlpha);
			}

			this.scene.overrideMaterial = null;
			renderer.autoClear = oldAutoClear;
		}

	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.ShaderPass = function (shader, textureID) {

		THREE.Pass.call(this);

		this.textureID = textureID !== undefined ? textureID : "tDiffuse";

		if (shader instanceof THREE.ShaderMaterial) {

			this.uniforms = shader.uniforms;

			this.material = shader;
		} else if (shader) {

			this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);

			this.material = new THREE.ShaderMaterial({

				defines: shader.defines || {},
				uniforms: this.uniforms,
				vertexShader: shader.vertexShader,
				fragmentShader: shader.fragmentShader

			});
		}

		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		this.scene = new THREE.Scene();

		this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
		this.quad.frustumCulled = false; // Avoid getting clipped
		this.scene.add(this.quad);
	};

	THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

		constructor: THREE.ShaderPass,

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

			if (this.uniforms[this.textureID]) {

				this.uniforms[this.textureID].value = readBuffer.texture;
			}

			this.quad.material = this.material;

			if (this.renderToScreen) {

				renderer.render(this.scene, this.camera);
			} else {

				renderer.render(this.scene, this.camera, writeBuffer, this.clear);
			}
		}

	});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.SavePass = function (renderTarget) {

		THREE.Pass.call(this);

		if (THREE.CopyShader === undefined) console.error("THREE.SavePass relies on THREE.CopyShader");

		var shader = THREE.CopyShader;

		this.textureID = "tDiffuse";

		this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);

		this.material = new THREE.ShaderMaterial({

			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		});

		this.renderTarget = renderTarget;

		if (this.renderTarget === undefined) {

			this.renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false });
			this.renderTarget.texture.name = "SavePass.rt";
		}

		this.needsSwap = false;

		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		this.scene = new THREE.Scene();

		this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
		this.quad.frustumCulled = false; // Avoid getting clipped
		this.scene.add(this.quad);
	};

	THREE.SavePass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

		constructor: THREE.SavePass,

		render: function render(renderer, writeBuffer, readBuffer) {

			if (this.uniforms[this.textureID]) {

				this.uniforms[this.textureID].value = readBuffer.texture;
			}

			this.quad.material = this.material;

			renderer.render(this.scene, this.camera, this.renderTarget, this.clear);
		}

	});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	THREE.MaskPass = function (scene, camera) {

		THREE.Pass.call(this);

		this.scene = scene;
		this.camera = camera;

		this.clear = true;
		this.needsSwap = false;

		this.inverse = false;
	};

	THREE.MaskPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

		constructor: THREE.MaskPass,

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

			var context = renderer.context;
			var state = renderer.state;

			// don't update color or depth

			state.buffers.color.setMask(false);
			state.buffers.depth.setMask(false);

			// lock buffers

			state.buffers.color.setLocked(true);
			state.buffers.depth.setLocked(true);

			// set up stencil

			var writeValue, clearValue;

			if (this.inverse) {

				writeValue = 0;
				clearValue = 1;
			} else {

				writeValue = 1;
				clearValue = 0;
			}

			state.buffers.stencil.setTest(true);
			state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
			state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 0xffffffff);
			state.buffers.stencil.setClear(clearValue);

			// draw into the stencil buffer

			renderer.render(this.scene, this.camera, readBuffer, this.clear);
			renderer.render(this.scene, this.camera, writeBuffer, this.clear);

			// unlock color and depth buffer for subsequent rendering

			state.buffers.color.setLocked(false);
			state.buffers.depth.setLocked(false);

			// only render where stencil is set to 1

			state.buffers.stencil.setFunc(context.EQUAL, 1, 0xffffffff); // draw if == 1
			state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
		}

	});

	THREE.ClearMaskPass = function () {

		THREE.Pass.call(this);

		this.needsSwap = false;
	};

	THREE.ClearMaskPass.prototype = Object.create(THREE.Pass.prototype);

	Object.assign(THREE.ClearMaskPass.prototype, {

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

			renderer.state.buffers.stencil.setTest(false);
		}

	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * @author Eberhard Graether / http://egraether.com/
	 * @author Mark Lundin 	/ http://mark-lundin.com
	 * @author Simone Manini / http://daron1337.github.io
	 * @author Luca Antiga 	/ http://lantiga.github.io
	 */

	THREE.TrackballControls = function (object, domElement) {

		var _this = this;
		var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

		this.object = object;
		this.domElement = domElement !== undefined ? domElement : document;

		// API

		this.enabled = true;

		this.screen = { left: 0, top: 0, width: 0, height: 0 };

		this.rotateSpeed = 1.0;
		this.zoomSpeed = 1.2;
		this.panSpeed = 0.3;

		this.noRotate = false;
		this.noZoom = false;
		this.noPan = false;

		this.staticMoving = false;
		this.dynamicDampingFactor = 0.2;

		this.minDistance = 0;
		this.maxDistance = Infinity;

		this.keys = [65 /*A*/, 83 /*S*/, 68 /*D*/];

		// internals

		this.target = new THREE.Vector3();

		var EPS = 0.000001;

		var lastPosition = new THREE.Vector3();

		var _state = STATE.NONE,
		    _prevState = STATE.NONE,
		    _eye = new THREE.Vector3(),
		    _movePrev = new THREE.Vector2(),
		    _moveCurr = new THREE.Vector2(),
		    _lastAxis = new THREE.Vector3(),
		    _lastAngle = 0,
		    _zoomStart = new THREE.Vector2(),
		    _zoomEnd = new THREE.Vector2(),
		    _touchZoomDistanceStart = 0,
		    _touchZoomDistanceEnd = 0,
		    _panStart = new THREE.Vector2(),
		    _panEnd = new THREE.Vector2();

		// for reset

		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.up0 = this.object.up.clone();

		// events

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		// methods

		this.handleResize = function () {

			if (this.domElement === document) {

				this.screen.left = 0;
				this.screen.top = 0;
				this.screen.width = window.innerWidth;
				this.screen.height = window.innerHeight;
			} else {

				var box = this.domElement.getBoundingClientRect();
				// adjustments come from similar code in the jquery offset() function
				var d = this.domElement.ownerDocument.documentElement;
				this.screen.left = box.left + window.pageXOffset - d.clientLeft;
				this.screen.top = box.top + window.pageYOffset - d.clientTop;
				this.screen.width = box.width;
				this.screen.height = box.height;
			}
		};

		this.handleEvent = function (event) {

			if (typeof this[event.type] == 'function') {

				this[event.type](event);
			}
		};

		var getMouseOnScreen = function () {

			var vector = new THREE.Vector2();

			return function getMouseOnScreen(pageX, pageY) {

				vector.set((pageX - _this.screen.left) / _this.screen.width, (pageY - _this.screen.top) / _this.screen.height);

				return vector;
			};
		}();

		var getMouseOnCircle = function () {

			var vector = new THREE.Vector2();

			return function getMouseOnCircle(pageX, pageY) {

				vector.set((pageX - _this.screen.width * 0.5 - _this.screen.left) / (_this.screen.width * 0.5), (_this.screen.height + 2 * (_this.screen.top - pageY)) / _this.screen.width // screen.width intentional
				);

				return vector;
			};
		}();

		this.rotateCamera = function () {

			var axis = new THREE.Vector3(),
			    quaternion = new THREE.Quaternion(),
			    eyeDirection = new THREE.Vector3(),
			    objectUpDirection = new THREE.Vector3(),
			    objectSidewaysDirection = new THREE.Vector3(),
			    moveDirection = new THREE.Vector3(),
			    angle;

			return function rotateCamera() {

				moveDirection.set(_moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0);
				angle = moveDirection.length();

				if (angle) {

					_eye.copy(_this.object.position).sub(_this.target);

					eyeDirection.copy(_eye).normalize();
					objectUpDirection.copy(_this.object.up).normalize();
					objectSidewaysDirection.crossVectors(objectUpDirection, eyeDirection).normalize();

					objectUpDirection.setLength(_moveCurr.y - _movePrev.y);
					objectSidewaysDirection.setLength(_moveCurr.x - _movePrev.x);

					moveDirection.copy(objectUpDirection.add(objectSidewaysDirection));

					axis.crossVectors(moveDirection, _eye).normalize();

					angle *= _this.rotateSpeed;
					quaternion.setFromAxisAngle(axis, angle);

					_eye.applyQuaternion(quaternion);
					_this.object.up.applyQuaternion(quaternion);

					_lastAxis.copy(axis);
					_lastAngle = angle;
				} else if (!_this.staticMoving && _lastAngle) {

					_lastAngle *= Math.sqrt(1.0 - _this.dynamicDampingFactor);
					_eye.copy(_this.object.position).sub(_this.target);
					quaternion.setFromAxisAngle(_lastAxis, _lastAngle);
					_eye.applyQuaternion(quaternion);
					_this.object.up.applyQuaternion(quaternion);
				}

				_movePrev.copy(_moveCurr);
			};
		}();

		this.zoomCamera = function () {

			var factor;

			if (_state === STATE.TOUCH_ZOOM_PAN) {

				factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
				_touchZoomDistanceStart = _touchZoomDistanceEnd;
				_eye.multiplyScalar(factor);
			} else {

				factor = 1.0 + (_zoomEnd.y - _zoomStart.y) * _this.zoomSpeed;

				if (factor !== 1.0 && factor > 0.0) {

					_eye.multiplyScalar(factor);
				}

				if (_this.staticMoving) {

					_zoomStart.copy(_zoomEnd);
				} else {

					_zoomStart.y += (_zoomEnd.y - _zoomStart.y) * this.dynamicDampingFactor;
				}
			}
		};

		this.panCamera = function () {

			var mouseChange = new THREE.Vector2(),
			    objectUp = new THREE.Vector3(),
			    pan = new THREE.Vector3();

			return function panCamera() {

				mouseChange.copy(_panEnd).sub(_panStart);

				if (mouseChange.lengthSq()) {

					mouseChange.multiplyScalar(_eye.length() * _this.panSpeed);

					pan.copy(_eye).cross(_this.object.up).setLength(mouseChange.x);
					pan.add(objectUp.copy(_this.object.up).setLength(mouseChange.y));

					_this.object.position.add(pan);
					_this.target.add(pan);

					if (_this.staticMoving) {

						_panStart.copy(_panEnd);
					} else {

						_panStart.add(mouseChange.subVectors(_panEnd, _panStart).multiplyScalar(_this.dynamicDampingFactor));
					}
				}
			};
		}();

		this.checkDistances = function () {

			if (!_this.noZoom || !_this.noPan) {

				if (_eye.lengthSq() > _this.maxDistance * _this.maxDistance) {

					_this.object.position.addVectors(_this.target, _eye.setLength(_this.maxDistance));
					_zoomStart.copy(_zoomEnd);
				}

				if (_eye.lengthSq() < _this.minDistance * _this.minDistance) {

					_this.object.position.addVectors(_this.target, _eye.setLength(_this.minDistance));
					_zoomStart.copy(_zoomEnd);
				}
			}
		};

		this.update = function () {

			_eye.subVectors(_this.object.position, _this.target);

			if (!_this.noRotate) {

				_this.rotateCamera();
			}

			if (!_this.noZoom) {

				_this.zoomCamera();
			}

			if (!_this.noPan) {

				_this.panCamera();
			}

			_this.object.position.addVectors(_this.target, _eye);

			_this.checkDistances();

			_this.object.lookAt(_this.target);

			if (lastPosition.distanceToSquared(_this.object.position) > EPS) {

				_this.dispatchEvent(changeEvent);

				lastPosition.copy(_this.object.position);
			}
		};

		this.reset = function () {

			_state = STATE.NONE;
			_prevState = STATE.NONE;

			_this.target.copy(_this.target0);
			_this.object.position.copy(_this.position0);
			_this.object.up.copy(_this.up0);

			_eye.subVectors(_this.object.position, _this.target);

			_this.object.lookAt(_this.target);

			_this.dispatchEvent(changeEvent);

			lastPosition.copy(_this.object.position);
		};

		// listeners

		function keydown(event) {

			if (_this.enabled === false) return;

			window.removeEventListener('keydown', keydown);

			_prevState = _state;

			if (_state !== STATE.NONE) {

				return;
			} else if (event.keyCode === _this.keys[STATE.ROTATE] && !_this.noRotate) {

				_state = STATE.ROTATE;
			} else if (event.keyCode === _this.keys[STATE.ZOOM] && !_this.noZoom) {

				_state = STATE.ZOOM;
			} else if (event.keyCode === _this.keys[STATE.PAN] && !_this.noPan) {

				_state = STATE.PAN;
			}
		}

		function keyup(event) {

			if (_this.enabled === false) return;

			_state = _prevState;

			window.addEventListener('keydown', keydown, false);
		}

		function mousedown(event) {

			if (_this.enabled === false) return;

			event.preventDefault();
			event.stopPropagation();

			if (_state === STATE.NONE) {

				_state = event.button;
			}

			if (_state === STATE.ROTATE && !_this.noRotate) {

				_moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
				_movePrev.copy(_moveCurr);
			} else if (_state === STATE.ZOOM && !_this.noZoom) {

				_zoomStart.copy(getMouseOnScreen(event.pageX, event.pageY));
				_zoomEnd.copy(_zoomStart);
			} else if (_state === STATE.PAN && !_this.noPan) {

				_panStart.copy(getMouseOnScreen(event.pageX, event.pageY));
				_panEnd.copy(_panStart);
			}

			document.addEventListener('mousemove', mousemove, false);
			document.addEventListener('mouseup', mouseup, false);

			_this.dispatchEvent(startEvent);
		}

		function mousemove(event) {

			if (_this.enabled === false) return;

			event.preventDefault();
			event.stopPropagation();

			if (_state === STATE.ROTATE && !_this.noRotate) {

				_movePrev.copy(_moveCurr);
				_moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
			} else if (_state === STATE.ZOOM && !_this.noZoom) {

				_zoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
			} else if (_state === STATE.PAN && !_this.noPan) {

				_panEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
			}
		}

		function mouseup(event) {

			if (_this.enabled === false) return;

			event.preventDefault();
			event.stopPropagation();

			_state = STATE.NONE;

			document.removeEventListener('mousemove', mousemove);
			document.removeEventListener('mouseup', mouseup);
			_this.dispatchEvent(endEvent);
		}

		function mousewheel(event) {

			if (_this.enabled === false) return;

			event.preventDefault();
			event.stopPropagation();

			switch (event.deltaMode) {

				case 2:
					// Zoom in pages
					_zoomStart.y -= event.deltaY * 0.025;
					break;

				case 1:
					// Zoom in lines
					_zoomStart.y -= event.deltaY * 0.01;
					break;

				default:
					// undefined, 0, assume pixels
					_zoomStart.y -= event.deltaY * 0.00025;
					break;

			}

			_this.dispatchEvent(startEvent);
			_this.dispatchEvent(endEvent);
		}

		function touchstart(event) {

			if (_this.enabled === false) return;

			switch (event.touches.length) {

				case 1:
					_state = STATE.TOUCH_ROTATE;
					_moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
					_movePrev.copy(_moveCurr);
					break;

				default:
					// 2 or more
					_state = STATE.TOUCH_ZOOM_PAN;
					var dx = event.touches[0].pageX - event.touches[1].pageX;
					var dy = event.touches[0].pageY - event.touches[1].pageY;
					_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);

					var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
					var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
					_panStart.copy(getMouseOnScreen(x, y));
					_panEnd.copy(_panStart);
					break;

			}

			_this.dispatchEvent(startEvent);
		}

		function touchmove(event) {

			if (_this.enabled === false) return;

			event.preventDefault();
			event.stopPropagation();

			switch (event.touches.length) {

				case 1:
					_movePrev.copy(_moveCurr);
					_moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
					break;

				default:
					// 2 or more
					var dx = event.touches[0].pageX - event.touches[1].pageX;
					var dy = event.touches[0].pageY - event.touches[1].pageY;
					_touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);

					var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
					var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
					_panEnd.copy(getMouseOnScreen(x, y));
					break;

			}
		}

		function touchend(event) {

			if (_this.enabled === false) return;

			switch (event.touches.length) {

				case 0:
					_state = STATE.NONE;
					break;

				case 1:
					_state = STATE.TOUCH_ROTATE;
					_moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
					_movePrev.copy(_moveCurr);
					break;

			}

			_this.dispatchEvent(endEvent);
		}

		function contextmenu(event) {

			if (_this.enabled === false) return;

			event.preventDefault();
		}

		this.dispose = function () {

			this.domElement.removeEventListener('contextmenu', contextmenu, false);
			this.domElement.removeEventListener('mousedown', mousedown, false);
			this.domElement.removeEventListener('wheel', mousewheel, false);

			this.domElement.removeEventListener('touchstart', touchstart, false);
			this.domElement.removeEventListener('touchend', touchend, false);
			this.domElement.removeEventListener('touchmove', touchmove, false);

			document.removeEventListener('mousemove', mousemove, false);
			document.removeEventListener('mouseup', mouseup, false);

			window.removeEventListener('keydown', keydown, false);
			window.removeEventListener('keyup', keyup, false);
		};

		this.domElement.addEventListener('contextmenu', contextmenu, false);
		this.domElement.addEventListener('mousedown', mousedown, false);
		this.domElement.addEventListener('wheel', mousewheel, false);

		this.domElement.addEventListener('touchstart', touchstart, false);
		this.domElement.addEventListener('touchend', touchend, false);
		this.domElement.addEventListener('touchmove', touchmove, false);

		window.addEventListener('keydown', keydown, false);
		window.addEventListener('keyup', keyup, false);

		this.handleResize();

		// force an update at start
		this.update();
	};

	THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);
	THREE.TrackballControls.prototype.constructor = THREE.TrackballControls;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BackgroundPass = function (_THREE$ShaderPass) {
	    _inherits(BackgroundPass, _THREE$ShaderPass);

	    function BackgroundPass(options) {
	        _classCallCheck(this, BackgroundPass);

	        options = options || {};

	        var _this = _possibleConstructorReturn(this, (BackgroundPass.__proto__ || Object.getPrototypeOf(BackgroundPass)).call(this, {
	            uniforms: {
	                time: { type: "f", value: 0.0 },
	                resolution: { type: "v2", value: new THREE.Vector2(512, 512) },
	                color: { type: "c", value: new THREE.Color(0x253759) },
	                darkness: { type: "f", value: 1.0 },
	                offset: { type: "f", value: 1.5 },
	                textureGrid: { type: "t", value: null }
	            },
	            vertexShader: __webpack_require__(14),
	            fragmentShader: __webpack_require__(15)
	        }));

	        var width = _this.material.uniforms.resolution.x;
	        var height = _this.material.uniforms.resolution.y;
	        // this.backbuffer = new THREE.WebGLRenderTarget(width, height, {});

	        _this.loadTexture("/textures/grid.jpg");
	        return _this;
	    }

	    _createClass(BackgroundPass, [{
	        key: "setSize",
	        value: function setSize(width, height) {
	            _get(BackgroundPass.prototype.__proto__ || Object.getPrototypeOf(BackgroundPass.prototype), "setSize", this).call(this, width, height);
	            // this.backbuffer.setSize(width, height);
	            this.material.uniforms.resolution.value = new THREE.Vector2(width, height);
	        }
	    }, {
	        key: "update",
	        value: function update(dt, t, frame) {
	            this.material.uniforms.time.value = t;
	            if (frame % 2 == 0) {
	                this.material.uniforms.noiseOffset.value.set(Math.random(), Math.random());
	            }
	        }
	    }, {
	        key: "render",
	        value: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
	            _get(BackgroundPass.prototype.__proto__ || Object.getPrototypeOf(BackgroundPass.prototype), "render", this).call(this, renderer, writeBuffer, readBuffer, delta, maskActive);

	            // renderer.render(this.scene, this.camera, this.backbuffer, false);
	        }
	    }, {
	        key: "loadTexture",
	        value: function loadTexture(path) {
	            var _this2 = this;

	            var loader = new THREE.TextureLoader();
	            loader.load(path, function (texture) {
	                _this2.material.uniforms.textureGrid.value = texture;
	            });
	        }
	    }]);

	    return BackgroundPass;
	}(THREE.ShaderPass);

	exports.default = BackgroundPass;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1_0(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1_1(vec3 x) {\n  return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2_3(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_2_3(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_2_4(vec4 x) {\n     return mod289_2_3(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_2_5(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_2_6(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_2_7 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_2_8 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_2_8;\n  vec3 i1 = min( g_2_8.xyz, l.zxy );\n  vec3 i2 = max( g_2_8.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_2_7.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_2_3(i);\n  vec4 p = permute_2_4( permute_2_4( permute_2_4(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_2_7.wyz - D_2_7.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_2_9 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_2_10 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_2_9.xy,h.z);\n  vec3 p3 = vec3(a1_2_9.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_2_5(vec4(dot(p0_2_10,p0_2_10), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_2_10 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_2_10,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nuniform vec2 resolution;\n\nuniform float time;\nuniform vec3 color;\nuniform float offset, darkness;\n\nuniform sampler2D textureGrid;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec2 uv = (vUv - vec2(0.5)) * vec2(offset);\n    vec3 col = mix(color, vec3(1.0 - darkness), dot(uv, uv));\n    // col = texture2D(textureGrid, vUv).rgb;\n    gl_FragColor = vec4(col, 1);\n}\n"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CompositePass = function (_THREE$ShaderPass) {
	    _inherits(CompositePass, _THREE$ShaderPass);

	    function CompositePass(options) {
	        _classCallCheck(this, CompositePass);

	        options = options || {};

	        var _this = _possibleConstructorReturn(this, (CompositePass.__proto__ || Object.getPrototypeOf(CompositePass)).call(this, {
	            uniforms: {
	                time: { type: "f", value: 0.0 },
	                resolution: { type: "v2", value: new THREE.Vector2(512, 512) },
	                tDiffuse: { type: "t", value: null },
	                noiseOffset: { type: "v2", value: new THREE.Vector2(0, 0) }
	            },
	            vertexShader: __webpack_require__(14),
	            fragmentShader: __webpack_require__(17)
	        }));

	        if (options.backbuffer) {
	            var width = _this.material.uniforms.resolution.x;
	            var height = _this.material.uniforms.resolution.y;
	            _this.backbuffer = new THREE.WebGLRenderTarget(width, height, {});
	        }
	        return _this;
	    }

	    _createClass(CompositePass, [{
	        key: "setSize",
	        value: function setSize(width, height) {
	            _get(CompositePass.prototype.__proto__ || Object.getPrototypeOf(CompositePass.prototype), "setSize", this).call(this, width, height);
	            this.material.uniforms.resolution.value = new THREE.Vector2(width, height);
	            if (this.backbuffer) {
	                this.backbuffer.setSize(width, height);
	            }
	        }
	    }, {
	        key: "update",
	        value: function update(dt, t, frame) {
	            this.material.uniforms.time.value = t;
	            if (frame % 2 == 0) {
	                this.material.uniforms.noiseOffset.value.set(Math.random(), Math.random());
	            }
	        }
	    }, {
	        key: "render",
	        value: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
	            _get(CompositePass.prototype.__proto__ || Object.getPrototypeOf(CompositePass.prototype), "render", this).call(this, renderer, writeBuffer, readBuffer, delta, maskActive);
	            if (this.backbuffer) {
	                renderer.render(this.scene, this.camera, this.backbuffer, this.clear);
	            }
	        }
	    }]);

	    return CompositePass;
	}(THREE.ShaderPass);

	exports.default = CompositePass;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nhighp float random_2_0(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_2(vec4 x) {\n     return mod289_1_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_3(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_4(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_5 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_6 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_6;\n  vec3 i1 = min( g_1_6.xyz, l.zxy );\n  vec3 i2 = max( g_1_6.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_5.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_1(i);\n  vec4 p = permute_1_2( permute_1_2( permute_1_2(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_5.wyz - D_1_5.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_7 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_8 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_7.xy,h.z);\n  vec3 p3 = vec3(a1_1_7.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_3(vec4(dot(p0_1_8,p0_1_8), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_8 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_8,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D tDiffuse;\n\nuniform vec2 noiseOffset;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 color = texture2D(tDiffuse, vUv);\n\n    float whiteNoise = random_2_0(vUv + noiseOffset);\n    color.rgb *= vec3(1. - whiteNoise * 0.15);\n    \n    gl_FragColor = color;\n}\n"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GPUComputationRenderer = __webpack_require__(19);

	var _GPUComputationRenderer2 = _interopRequireDefault(_GPUComputationRenderer);

	var _perlin = __webpack_require__(20);

	var _perlin2 = _interopRequireDefault(_perlin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var build = function build() {
	    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 64;
	    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	    var geometry = new THREE.BufferGeometry();

	    var vertices = [];
	    var uv = [],
	        uv2 = [];

	    var inv = 1 / count;
	    for (var y = 0; y < count; y++) {
	        for (var x = 0; x < count; x++) {
	            var u = x * inv;
	            var v = y * inv;

	            vertices.push(x, y, 0); // lt
	            uv.push(u, v);
	            uv2.push(0, 0);

	            vertices.push(x + size, y, 0); // rt
	            uv.push(u, v);
	            uv2.push(1, 0);

	            vertices.push(x + size, y + size, 0); // rb
	            uv.push(u, v);
	            uv2.push(1, 1);

	            vertices.push(x, y + size, 0); // lb
	            uv.push(u, v);
	            uv2.push(0, 1);
	        }
	    }

	    var indices = [];
	    var len = vertices.length / 3;
	    for (var i = 0; i < len; i += 4) {
	        var a = i,
	            b = i + 1,
	            c = i + 2,
	            d = i + 3;
	        indices.push(a, c, b);
	        indices.push(d, c, a);
	    }

	    geometry.setIndex(indices);
	    geometry.addAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
	    geometry.addAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
	    geometry.addAttribute("uv2", new THREE.Float32BufferAttribute(uv2, 2));

	    return geometry;
	};

	var ParticleSystem = function (_THREE$Mesh) {
	    _inherits(ParticleSystem, _THREE$Mesh);

	    function ParticleSystem(renderer, options) {
	        _classCallCheck(this, ParticleSystem);

	        options = options || {};

	        var count = options.count || 32;
	        var geometry = build(count, 1);

	        var _this = _possibleConstructorReturn(this, (ParticleSystem.__proto__ || Object.getPrototypeOf(ParticleSystem)).call(this, geometry, new THREE.RawShaderMaterial({
	            vertexShader: options.vertexShader || __webpack_require__(21),
	            fragmentShader: options.fragmentShader || __webpack_require__(22),
	            uniforms: THREE.UniformsUtils.merge([{
	                texturePosition: { type: "t", value: null },
	                textureVelocity: { type: "t", value: null },
	                textureEnv: { type: "t", value: null },
	                size: { type: "f", value: 0.5 },
	                alpha: { type: "f", value: 0.75 },
	                displacement: { type: "f", value: 0.1 },
	                refractionRatio: { type: "f", value: 0.85 },
	                fresnelBias: { type: "f", value: 0.113 },
	                fresnelPower: { type: "f", value: 2.6 },
	                fresnelScale: { type: "f", value: 0.68 },
	                resolution: { type: "v4", value: new THREE.Vector4(512, 512, 1 / 512, 1 / 512) }
	            }, options.uniforms]),
	            side: THREE.DoubleSide,
	            transparent: true,
	            depthTest: false
	            // blending: THREE.AdditiveBlending
	        })));

	        _this.frustumCulled = false;

	        _this.setup(renderer, count, options);

	        _this.material.uniforms.texturePosition.value = _this.texturePosition;
	        _this.material.uniforms.textureVelocity.value = _this.textureVelocity;
	        // this.material.uniforms.textureEnv.value = options.env;
	        return _this;
	    }

	    _createClass(ParticleSystem, [{
	        key: "setup",
	        value: function setup(renderer, count, options) {
	            options = options || {};

	            this.gpuCompute = new _GPUComputationRenderer2.default(count, count, renderer);
	            var pos = this.gpuCompute.createTexture();
	            var vel = this.gpuCompute.createTexture();

	            var position = options.position || __webpack_require__(23);
	            var velocity = options.position || __webpack_require__(24);

	            this.posVar = this.gpuCompute.addVariable("texturePosition", position, vel, options);
	            this.velVar = this.gpuCompute.addVariable("textureVelocity", velocity, pos, options);

	            this.gpuCompute.setVariableDependencies(this.velVar, [this.velVar, this.posVar]);
	            this.gpuCompute.setVariableDependencies(this.posVar, [this.velVar, this.posVar]);
	            this.gpuCompute.init();

	            this.uniforms = {
	                mode: this.addUniform([this.posVar, this.velVar], "mode", { type: "i", value: 0 }),
	                dt: this.addUniform([this.posVar, this.velVar], "dt", { type: "f", value: 0.0 }),
	                time: this.addUniform([this.posVar, this.velVar], "time", { type: "f", value: 0.0 }),
	                emitter: this.addUniform([this.posVar], "emitter", { type: "v3", value: new THREE.Vector3(0, 0, 0) }),
	                radius: this.addUniform([this.posVar], "radius", { type: "f", value: options.radius || 10.0 }),
	                boundsMin: this.addUniform([this.posVar], "boundsMin", { type: "v3", value: options.boundsMin || new THREE.Vector3(-15, -10, -20) }),
	                boundsMax: this.addUniform([this.posVar], "boundsMax", { type: "v3", value: options.boundsMax || new THREE.Vector3(15, 8, 0) }),
	                decay: this.addUniform([this.posVar], "decay", { type: "f", value: 0.1 }),
	                point: this.addUniform([this.velVar], "point", { type: "v3", value: new THREE.Vector3(0, 0, 0) }),
	                force: this.addUniform([this.velVar], "force", { type: "f", value: 0.0 }),
	                speed: this.addUniform([this.velVar], "speed", { type: "f", value: 1.5 }),
	                noise: this.addUniform([this.velVar], "noise", { type: "f", value: 1.0 })
	            };
	            this.update(0, 0);

	            this.uniforms.mode.value = 1;
	        }
	    }, {
	        key: "addUniform",
	        value: function addUniform(variables, key, uniform) {
	            variables.forEach(function (variable) {
	                variable.material.uniforms[key] = uniform;
	            });
	            return uniform;
	        }
	    }, {
	        key: "update",
	        value: function update(dt, time) {
	            this.uniforms.dt.value = dt;
	            this.uniforms.time.value = time;
	            this.uniforms.force.value *= 0.95;

	            this.gpuCompute.compute();
	        }
	    }, {
	        key: "interact",
	        value: function interact(world) {
	            var local = this.worldToLocal(world);
	            this.uniforms.point.value = local;
	            this.uniforms.force.value = 0.5;
	        }
	    }, {
	        key: "resize",
	        value: function resize(width, height) {
	            this.material.uniforms.resolution.value.set(width, height, 1 / width, 1 / height);
	        }
	    }, {
	        key: "texturePosition",
	        get: function get() {
	            return this.gpuCompute.getCurrentRenderTarget(this.posVar).texture;
	        }
	    }, {
	        key: "textureVelocity",
	        get: function get() {
	            return this.gpuCompute.getCurrentRenderTarget(this.velVar).texture;
	        }
	    }]);

	    return ParticleSystem;
	}(THREE.Mesh);

	exports.default = ParticleSystem;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * @author yomboprime https://github.com/yomboprime
	 *
	 * GPUComputationRenderer, based on SimulationRenderer by zz85
	 *
	 * The GPUComputationRenderer uses the concept of variables. These variables are RGBA float textures that hold 4 floats
	 * for each compute element (texel)
	 *
	 * Each variable has a fragment shader that defines the computation made to obtain the variable in question.
	 * You can use as many variables you need, and make dependencies so you can use textures of other variables in the shader
	 * (the sampler uniforms are added automatically) Most of the variables will need themselves as dependency.
	 *
	 * The renderer has actually two render targets per variable, to make ping-pong. Textures from the current frame are used
	 * as inputs to render the textures of the next frame.
	 *
	 * The render targets of the variables can be used as input textures for your visualization shaders.
	 *
	 * Variable names should be valid identifiers and should not collide with THREE GLSL used identifiers.
	 * a common approach could be to use 'texture' prefixing the variable name; i.e texturePosition, textureVelocity...
	 *
	 * The size of the computation (sizeX * sizeY) is defined as 'resolution' automatically in the shader. For example:
	 * #DEFINE resolution vec2( 1024.0, 1024.0 )
	 *
	 * -------------
	 *
	 * Basic use:
	 *
	 * // Initialization...
	 *
	 * // Create computation renderer
	 * var gpuCompute = new GPUComputationRenderer( 1024, 1024, renderer );
	 *
	 * // Create initial state float textures
	 * var pos0 = gpuCompute.createTexture();
	 * var vel0 = gpuCompute.createTexture();
	 * // and fill in here the texture data...
	 *
	 * // Add texture variables
	 * var velVar = gpuCompute.addVariable( "textureVelocity", fragmentShaderVel, pos0 );
	 * var posVar = gpuCompute.addVariable( "texturePosition", fragmentShaderPos, vel0 );
	 *
	 * // Add variable dependencies
	 * gpuCompute.setVariableDependencies( velVar, [ velVar, posVar ] );
	 * gpuCompute.setVariableDependencies( posVar, [ velVar, posVar ] );
	 *
	 * // Add custom uniforms
	 * velVar.material.uniforms.time = { value: 0.0 };
	 *
	 * // Check for completeness
	 * var error = gpuCompute.init();
	 * if ( error !== null ) {
	 *		console.error( error );
	  * }
	 *
	 *
	 * // In each frame...
	 *
	 * // Compute!
	 * gpuCompute.compute();
	 *
	 * // Update texture uniforms in your visualization materials with the gpu renderer output
	 * myMaterial.uniforms.myTexture.value = gpuCompute.getCurrentRenderTarget( posVar ).texture;
	 *
	 * // Do your rendering
	 * renderer.render( myScene, myCamera );
	 *
	 * -------------
	 *
	 * Also, you can use utility functions to create ShaderMaterial and perform computations (rendering between textures)
	 * Note that the shaders can have multiple input textures.
	 *
	 * var myFilter1 = gpuCompute.createShaderMaterial( myFilterFragmentShader1, { theTexture: { value: null } } );
	 * var myFilter2 = gpuCompute.createShaderMaterial( myFilterFragmentShader2, { theTexture: { value: null } } );
	 *
	 * var inputTexture = gpuCompute.createTexture();
	 *
	 * // Fill in here inputTexture...
	 *
	 * myFilter1.uniforms.theTexture.value = inputTexture;
	 *
	 * var myRenderTarget = gpuCompute.createRenderTarget();
	 * myFilter2.uniforms.theTexture.value = myRenderTarget.texture;
	 *
	 * var outputRenderTarget = gpuCompute.createRenderTarget();
	 *
	 * // Now use the output texture where you want:
	 * myMaterial.uniforms.map.value = outputRenderTarget.texture;
	 *
	 * // And compute each frame, before rendering to screen:
	 * gpuCompute.doRenderTarget( myFilter1, myRenderTarget );
	 * gpuCompute.doRenderTarget( myFilter2, outputRenderTarget );
	 * 
	 *
	 *
	 * @param {int} sizeX Computation problem size is always 2d: sizeX * sizeY elements.
	 * @param {int} sizeY Computation problem size is always 2d: sizeX * sizeY elements.
	 * @param {WebGLRenderer} renderer The renderer
	  */

	function GPUComputationRenderer(sizeX, sizeY, renderer) {

		this.variables = [];

		this.currentTextureIndex = 0;

		var scene = new THREE.Scene();

		var camera = new THREE.Camera();
		camera.position.z = 1;

		var passThruUniforms = {
			texture: { value: null }
		};

		var passThruShader = createShaderMaterial(getPassThroughFragmentShader(), passThruUniforms);

		var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), passThruShader);
		scene.add(mesh);

		this.addVariable = function (variableName, computeFragmentShader, initialValueTexture) {

			var material = this.createShaderMaterial(computeFragmentShader);

			var variable = {
				name: variableName,
				initialValueTexture: initialValueTexture,
				material: material,
				dependencies: null,
				renderTargets: [],
				wrapS: null,
				wrapT: null,
				minFilter: THREE.NearestFilter,
				magFilter: THREE.NearestFilter
			};

			this.variables.push(variable);

			return variable;
		};

		this.setVariableDependencies = function (variable, dependencies) {

			variable.dependencies = dependencies;
		};

		this.init = function () {

			if (!renderer.extensions.get("OES_texture_float")) {

				return "No OES_texture_float support for float textures.";
			}

			if (renderer.capabilities.maxVertexTextures === 0) {

				return "No support for vertex shader textures.";
			}

			for (var i = 0; i < this.variables.length; i++) {

				var variable = this.variables[i];

				// Creates rendertargets and initialize them with input texture
				variable.renderTargets[0] = this.createRenderTarget(sizeX, sizeY, variable.wrapS, variable.wrapT, variable.minFilter, variable.magFilter);
				variable.renderTargets[1] = this.createRenderTarget(sizeX, sizeY, variable.wrapS, variable.wrapT, variable.minFilter, variable.magFilter);
				this.renderTexture(variable.initialValueTexture, variable.renderTargets[0]);
				this.renderTexture(variable.initialValueTexture, variable.renderTargets[1]);

				// Adds dependencies uniforms to the ShaderMaterial
				var material = variable.material;
				var uniforms = material.uniforms;
				if (variable.dependencies !== null) {

					for (var d = 0; d < variable.dependencies.length; d++) {

						var depVar = variable.dependencies[d];

						if (depVar.name !== variable.name) {

							// Checks if variable exists
							var found = false;
							for (var j = 0; j < this.variables.length; j++) {

								if (depVar.name === this.variables[j].name) {
									found = true;
									break;
								}
							}
							if (!found) {
								return "Variable dependency not found. Variable=" + variable.name + ", dependency=" + depVar.name;
							}
						}

						uniforms[depVar.name] = { value: null };

						material.fragmentShader = "\nuniform sampler2D " + depVar.name + ";\n" + material.fragmentShader;
					}
				}
			}

			this.currentTextureIndex = 0;

			return null;
		};

		this.compute = function () {

			var currentTextureIndex = this.currentTextureIndex;
			var nextTextureIndex = this.currentTextureIndex === 0 ? 1 : 0;

			for (var i = 0, il = this.variables.length; i < il; i++) {

				var variable = this.variables[i];

				// Sets texture dependencies uniforms
				if (variable.dependencies !== null) {

					var uniforms = variable.material.uniforms;
					for (var d = 0, dl = variable.dependencies.length; d < dl; d++) {

						var depVar = variable.dependencies[d];

						uniforms[depVar.name].value = depVar.renderTargets[currentTextureIndex].texture;
					}
				}

				// Performs the computation for this variable
				this.doRenderTarget(variable.material, variable.renderTargets[nextTextureIndex]);
			}

			this.currentTextureIndex = nextTextureIndex;
		};

		this.getCurrentRenderTarget = function (variable) {

			return variable.renderTargets[this.currentTextureIndex];
		};

		this.getAlternateRenderTarget = function (variable) {

			return variable.renderTargets[this.currentTextureIndex === 0 ? 1 : 0];
		};

		function addResolutionDefine(materialShader) {

			materialShader.defines.resolution = 'vec2( ' + sizeX.toFixed(1) + ', ' + sizeY.toFixed(1) + " )";
		}
		this.addResolutionDefine = addResolutionDefine;

		// The following functions can be used to compute things manually

		function createShaderMaterial(computeFragmentShader, uniforms) {

			uniforms = uniforms || {};

			var material = new THREE.ShaderMaterial({
				uniforms: uniforms,
				vertexShader: getPassThroughVertexShader(),
				fragmentShader: computeFragmentShader
			});

			addResolutionDefine(material);

			return material;
		}
		this.createShaderMaterial = createShaderMaterial;

		this.createRenderTarget = function (sizeXTexture, sizeYTexture, wrapS, wrapT, minFilter, magFilter) {

			sizeXTexture = sizeXTexture || sizeX;
			sizeYTexture = sizeYTexture || sizeY;

			wrapS = wrapS || THREE.ClampToEdgeWrapping;
			wrapT = wrapT || THREE.ClampToEdgeWrapping;

			minFilter = minFilter || THREE.NearestFilter;
			magFilter = magFilter || THREE.NearestFilter;

			var renderTarget = new THREE.WebGLRenderTarget(sizeXTexture, sizeYTexture, {
				wrapS: wrapS,
				wrapT: wrapT,
				minFilter: minFilter,
				magFilter: magFilter,
				format: THREE.RGBAFormat,
				type: /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType,
				stencilBuffer: false
			});

			return renderTarget;
		};

		this.createTexture = function (sizeXTexture, sizeYTexture) {

			sizeXTexture = sizeXTexture || sizeX;
			sizeYTexture = sizeYTexture || sizeY;

			var a = new Float32Array(sizeXTexture * sizeYTexture * 4);
			var texture = new THREE.DataTexture(a, sizeX, sizeY, THREE.RGBAFormat, THREE.FloatType);
			texture.needsUpdate = true;

			return texture;
		};

		this.renderTexture = function (input, output) {

			// Takes a texture, and render out in rendertarget
			// input = Texture
			// output = RenderTarget

			passThruUniforms.texture.value = input;

			this.doRenderTarget(passThruShader, output);

			passThruUniforms.texture.value = null;
		};

		this.doRenderTarget = function (material, output) {

			mesh.material = material;
			renderer.render(scene, camera, output);
			mesh.material = passThruShader;
		};

		// Shaders

		function getPassThroughVertexShader() {

			return "void main()	{\n" + "\n" + "	gl_Position = vec4( position, 1.0 );\n" + "\n" + "}\n";
		}

		function getPassThroughFragmentShader() {

			return "uniform sampler2D texture;\n" + "\n" + "void main() {\n" + "\n" + "	vec2 uv = gl_FragCoord.xy / resolution.xy;\n" + "\n" + "	gl_FragColor = texture2D( texture, uv );\n" + "\n" + "}\n";
		}
	}

	exports.default = GPUComputationRenderer;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	 * A speed-improved perlin and simplex noise algorithms for 2D.
	 *
	 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
	 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
	 * Better rank ordering method by Stefan Gustavson in 2012.
	 * Converted to Javascript by Joseph Gentle.
	 *
	 * Version 2012-03-09
	 *
	 * This code was placed in the public domain by its original author,
	 * Stefan Gustavson. You may use it as you see fit, but
	 * attribution is appreciated.
	 *
	 */

	var _module = {};

	function Grad(x, y, z) {
	    this.x = x;this.y = y;this.z = z;
	}

	Grad.prototype.dot2 = function (x, y) {
	    return this.x * x + this.y * y;
	};

	Grad.prototype.dot3 = function (x, y, z) {
	    return this.x * x + this.y * y + this.z * z;
	};

	var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];

	var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
	// To remove the need for index wrapping, double the permutation table length
	var perm = new Array(512);
	var gradP = new Array(512);

	// This isn't a very good seeding function, but it works ok. It supports 2^16
	// different seed values. Write something better if you need more seeds.
	_module.seed = function (seed) {
	    if (seed > 0 && seed < 1) {
	        // Scale the seed out
	        seed *= 65536;
	    }

	    seed = Math.floor(seed);
	    if (seed < 256) {
	        seed |= seed << 8;
	    }

	    for (var i = 0; i < 256; i++) {
	        var v;
	        if (i & 1) {
	            v = p[i] ^ seed & 255;
	        } else {
	            v = p[i] ^ seed >> 8 & 255;
	        }

	        perm[i] = perm[i + 256] = v;
	        gradP[i] = gradP[i + 256] = grad3[v % 12];
	    }
	};

	_module.seed(0);

	/*
	  for(var i=0; i<256; i++) {
	    perm[i] = perm[i + 256] = p[i];
	    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
	  }*/

	// Skewing and unskewing factors for 2, 3, and 4 dimensions
	var F2 = 0.5 * (Math.sqrt(3) - 1);
	var G2 = (3 - Math.sqrt(3)) / 6;

	var F3 = 1 / 3;
	var G3 = 1 / 6;

	// 2D simplex noise
	_module.simplex2 = function (xin, yin) {
	    var n0, n1, n2; // Noise contributions from the three corners
	    // Skew the input space to determine which simplex cell we're in
	    var s = (xin + yin) * F2; // Hairy factor for 2D
	    var i = Math.floor(xin + s);
	    var j = Math.floor(yin + s);
	    var t = (i + j) * G2;
	    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
	    var y0 = yin - j + t;
	    // For the 2D case, the simplex shape is an equilateral triangle.
	    // Determine which simplex we are in.
	    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
	    if (x0 > y0) {
	        // lower triangle, XY order: (0,0)->(1,0)->(1,1)
	        i1 = 1;j1 = 0;
	    } else {
	        // upper triangle, YX order: (0,0)->(0,1)->(1,1)
	        i1 = 0;j1 = 1;
	    }
	    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
	    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
	    // c = (3-sqrt(3))/6
	    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
	    var y1 = y0 - j1 + G2;
	    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
	    var y2 = y0 - 1 + 2 * G2;
	    // Work out the hashed gradient indices of the three simplex corners
	    i &= 255;
	    j &= 255;
	    var gi0 = gradP[i + perm[j]];
	    var gi1 = gradP[i + i1 + perm[j + j1]];
	    var gi2 = gradP[i + 1 + perm[j + 1]];
	    // Calculate the contribution from the three corners
	    var t0 = 0.5 - x0 * x0 - y0 * y0;
	    if (t0 < 0) {
	        n0 = 0;
	    } else {
	        t0 *= t0;
	        n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
	    }
	    var t1 = 0.5 - x1 * x1 - y1 * y1;
	    if (t1 < 0) {
	        n1 = 0;
	    } else {
	        t1 *= t1;
	        n1 = t1 * t1 * gi1.dot2(x1, y1);
	    }
	    var t2 = 0.5 - x2 * x2 - y2 * y2;
	    if (t2 < 0) {
	        n2 = 0;
	    } else {
	        t2 *= t2;
	        n2 = t2 * t2 * gi2.dot2(x2, y2);
	    }
	    // Add contributions from each corner to get the final noise value.
	    // The result is scaled to return values in the interval [-1,1].
	    return 70 * (n0 + n1 + n2);
	};

	// 3D simplex noise
	_module.simplex3 = function (xin, yin, zin) {
	    var n0, n1, n2, n3; // Noise contributions from the four corners

	    // Skew the input space to determine which simplex cell we're in
	    var s = (xin + yin + zin) * F3; // Hairy factor for 2D
	    var i = Math.floor(xin + s);
	    var j = Math.floor(yin + s);
	    var k = Math.floor(zin + s);

	    var t = (i + j + k) * G3;
	    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
	    var y0 = yin - j + t;
	    var z0 = zin - k + t;

	    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
	    // Determine which simplex we are in.
	    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
	    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
	    if (x0 >= y0) {
	        if (y0 >= z0) {
	            i1 = 1;j1 = 0;k1 = 0;i2 = 1;j2 = 1;k2 = 0;
	        } else if (x0 >= z0) {
	            i1 = 1;j1 = 0;k1 = 0;i2 = 1;j2 = 0;k2 = 1;
	        } else {
	            i1 = 0;j1 = 0;k1 = 1;i2 = 1;j2 = 0;k2 = 1;
	        }
	    } else {
	        if (y0 < z0) {
	            i1 = 0;j1 = 0;k1 = 1;i2 = 0;j2 = 1;k2 = 1;
	        } else if (x0 < z0) {
	            i1 = 0;j1 = 1;k1 = 0;i2 = 0;j2 = 1;k2 = 1;
	        } else {
	            i1 = 0;j1 = 1;k1 = 0;i2 = 1;j2 = 1;k2 = 0;
	        }
	    }
	    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
	    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
	    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
	    // c = 1/6.
	    var x1 = x0 - i1 + G3; // Offsets for second corner
	    var y1 = y0 - j1 + G3;
	    var z1 = z0 - k1 + G3;

	    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
	    var y2 = y0 - j2 + 2 * G3;
	    var z2 = z0 - k2 + 2 * G3;

	    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
	    var y3 = y0 - 1 + 3 * G3;
	    var z3 = z0 - 1 + 3 * G3;

	    // Work out the hashed gradient indices of the four simplex corners
	    i &= 255;
	    j &= 255;
	    k &= 255;
	    var gi0 = gradP[i + perm[j + perm[k]]];
	    var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
	    var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
	    var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];

	    // Calculate the contribution from the four corners
	    var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
	    if (t0 < 0) {
	        n0 = 0;
	    } else {
	        t0 *= t0;
	        n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
	    }
	    var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
	    if (t1 < 0) {
	        n1 = 0;
	    } else {
	        t1 *= t1;
	        n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
	    }
	    var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
	    if (t2 < 0) {
	        n2 = 0;
	    } else {
	        t2 *= t2;
	        n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
	    }
	    var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
	    if (t3 < 0) {
	        n3 = 0;
	    } else {
	        t3 *= t3;
	        n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
	    }
	    // Add contributions from each corner to get the final noise value.
	    // The result is scaled to return values in the interval [-1,1].
	    return 32 * (n0 + n1 + n2 + n3);
	};

	// ##### Perlin noise stuff

	function fade(t) {
	    return t * t * t * (t * (t * 6 - 15) + 10);
	}

	function lerp(a, b, t) {
	    return (1 - t) * a + t * b;
	}

	// 2D Perlin Noise
	_module.perlin2 = function (x, y) {
	    // Find unit grid cell containing point
	    var X = Math.floor(x),
	        Y = Math.floor(y);
	    // Get relative xy coordinates of point within that cell
	    x = x - X;y = y - Y;
	    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
	    X = X & 255;Y = Y & 255;

	    // Calculate noise contributions from each of the four corners
	    var n00 = gradP[X + perm[Y]].dot2(x, y);
	    var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
	    var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
	    var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);

	    // Compute the fade curve value for x
	    var u = fade(x);

	    // Interpolate the four results
	    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
	};

	// 3D Perlin Noise
	_module.perlin3 = function (x, y, z) {
	    // Find unit grid cell containing point
	    var X = Math.floor(x),
	        Y = Math.floor(y),
	        Z = Math.floor(z);
	    // Get relative xyz coordinates of point within that cell
	    x = x - X;y = y - Y;z = z - Z;
	    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
	    X = X & 255;Y = Y & 255;Z = Z & 255;

	    // Calculate noise contributions from each of the eight corners
	    var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
	    var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
	    var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
	    var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
	    var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
	    var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
	    var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
	    var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);

	    // Compute the fade curve value for x, y, z
	    var u = fade(x);
	    var v = fade(y);
	    var w = fade(z);

	    // Interpolate
	    return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
	};

	exports.default = _module;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "precision mediump float;\nprecision mediump int;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\n\nuniform sampler2D texturePosition, textureVelocity;\nuniform float size;\n\nattribute vec3 position;\nattribute vec2 uv, uv2;\n\nvarying vec2 vUv;\nvarying vec3 vWorld;\n\nvec4 billboard(vec3 pos, vec2 uv, float scale) {\n    mat4 billboardMatrix = viewMatrix;\n    // billboardMatrix[0][3] = billboardMatrix[1][3] = billboardMatrix[2][3] = billboardMatrix[3][3] = 0.0;\n    billboardMatrix[3][0] = billboardMatrix[3][1] = billboardMatrix[3][2] = billboardMatrix[3][3] = 0.0;\n\n    vec4 p = vec4(vec4(pos, 1.0) + vec4((uv * 2.0 - vec2(1.0, 1.0)) * scale, 0, 1) * billboardMatrix);\n    return p;\n}\n\nvoid main() {\n    vec4 pos = texture2D(texturePosition, uv);\n    float s = smoothstep(0.0, 0.3, pos.w) * smoothstep(1.0, 0.8, pos.w);\n\n    vec3 mp = (modelMatrix * vec4(pos.xyz, 1.0)).xyz;\n    vec4 world = billboard(mp, uv2, size * s);\n    vWorld = world.xyz;\n    vUv = uv2;\n\n    // vec4 mvPosition = (modelViewMatrix * vec4(pos.xyz, 1.0));\n    // gl_Position = projectionMatrix * mvPosition;\n    gl_Position = projectionMatrix * (viewMatrix * world);\n\n    // gl_PointSize = size * s;\n}\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "precision mediump float;\nprecision mediump int;\n#define GLSLIFY 1\n\nuniform sampler2D textureEnv;\n// uniform samplerCube textureEnv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\n\nuniform vec3 cameraPosition;\n\nuniform float alpha;\nuniform float displacement;\nuniform float refractionRatio;\nuniform float fresnelBias, fresnelScale, fresnelPower;\n\nuniform vec4 resolution;\n\nvarying vec3 vWorld;\nvarying vec2 vUv;\n\nvec4 sample(vec3 v) {\n    vec2 uv = gl_FragCoord.xy * resolution.zw;\n    return texture2D(textureEnv, uv + v.xy * displacement);\n}\n\nvoid main() {\n    vec2 uv = vUv;\n    // uv.y = 1.0 - uv.y;\n\n    vec3 normal = vec3(0, 0, 0);\n    normal.xy = (uv - 0.5) * 2.0;\n    float r2 = dot(normal.xy, normal.xy);\n    if(r2 > 1.0) {\n        discard;\n    }\n    normal.z = sqrt(1.0 - r2);\n\n    vec3 worldPosition = vWorld.xyz;\n    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);\n\n    vec3 I = worldPosition.xyz - cameraPosition;\n\n    vec3 ni = normalize(I);\n    vec3 reflection = reflect(ni, worldNormal);\n\tfloat fresnel = fresnelBias + fresnelScale * pow(1.0 + dot(ni, worldNormal), fresnelPower);\n\n    // vec3 viewDir = normalize(-(viewMatrix * vec4(worldPosition, 1.0)).xyz);\n    // float rim = dot(viewDir, worldNormal);\n\n    vec4 reflectedColor = sample(reflection);\n    vec4 refractedColor = sample(refract(ni, worldNormal, refractionRatio));\n    vec4 color = mix(refractedColor, reflectedColor, fresnel);\n    color.a *= alpha;\n\n    gl_FragColor = color;\n}\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nhighp float random_1_0(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\n#define PI 3.1415926\n\nuniform int mode;\nuniform float dt, time, decay;\n\nuniform vec3 emitter;\nuniform vec3 boundsMin, boundsMax;\n\nvec3 random_point_on_sphere(vec2 uv) {\n    float u = random_1_0(uv) * 2.0 - 1.0;\n    float theta = random_1_0(uv + 0.333) * PI * 2.0;\n    float u2 = sqrt(1.0 - u * u);\n    return vec3(u2 * cos(theta), u2 * sin(theta), u);\n}\n\nvoid init(vec2 uv) {\n    // gl_FragColor = vec4(emitter + random_point_on_sphere(uv + vec2(dt, time)) * radius, 1);\n\n    float x = random_1_0(uv);\n    float y = random_1_0(uv + 0.333);\n    float z = random_1_0(uv + 0.713);\n    gl_FragColor = vec4(\n        mix(boundsMin.x, boundsMax.x, x),\n        mix(boundsMin.y, boundsMax.y, y),\n        mix(boundsMin.z, boundsMax.z, z),\n        1.0\n    );\n}\n\nvoid update(vec2 uv) {\n    vec4 pos = texture2D(texturePosition, uv);\n    vec4 vel = texture2D(textureVelocity, uv);\n\n    float r = random_1_0(vec2(uv.yx));\n    pos.w -= dt * decay * (1.0 + 0.5 * r);\n\n    if(pos.w < 0.0)  {\n        init(uv);\n    } else {\n        pos.xyz += vel.xyz * dt;\n        gl_FragColor = pos;\n    }\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    if(mode == 0) {\n        init(uv);\n        gl_FragColor.a = random_1_0(uv);\n    } else {\n        update(uv);\n    }\n}\n"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\nhighp float random_2_8(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\nuniform int mode;\nuniform float dt, time, speed, noise;\n\nuniform vec3 point;\nuniform float force;\n\nconst float seedScale = 100.0;\n\nvoid init() {\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    float r = random_2_8(uv);\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.8 + 0.1 * r);\n}\n\nvec3 snoiseVec3 (vec3 x){\n    float s = snoise_1_3(vec3(x));\n    float s1 = snoise_1_3(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));\n    float s2 = snoise_1_3(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));\n    vec3 c = vec3(s, s1, s2);\n    return c;\n}\n\nvec3 curlNoise(vec3 p) {\n    const float e = 0.0009765625;\n\n    vec3 dx = vec3(e, 0, 0);\n    vec3 dy = vec3(0, e, 0);\n    vec3 dz = vec3(0, 0, e);\n\n    vec3 p_x0 = snoiseVec3(p - dx);\n    vec3 p_x1 = snoiseVec3(p + dx);\n    vec3 p_y0 = snoiseVec3(p - dy);\n    vec3 p_y1 = snoiseVec3(p + dy);\n    vec3 p_z0 = snoiseVec3(p - dz);\n    vec3 p_z1 = snoiseVec3(p + dz);\n\n    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n    const float divisor = 1.0 / (2.0 * e);\n    return normalize(vec3(x, y, z) * divisor);\n}\n\nvoid update() {\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n    vec4 pos = texture2D(texturePosition, uv);\n    if(pos.w < 0.0) {\n        init();\n    } else {\n        vec4 vel = texture2D(textureVelocity, uv);\n        vel.xyz *= vel.w;\n\n        vel.xyz += speed * dt * (vec3(0, 1, 0) + noise * curlNoise(pos.xyz + vec3(0, time * 0.25, 0)));\n\n        // vec3 dir = pos.xyz - point;\n        // float l = length(dir);\n        // vel.xyz += (1.0 - l) * normalize(dir) * force;\n\n        gl_FragColor = vel;\n    }\n}\n\nvoid main() {\n    if(mode == 0) {\n        init();\n    } else {\n        update();\n    }\n}\n"

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hypershape = function (_THREE$Mesh) {
	    _inherits(Hypershape, _THREE$Mesh);

	    function Hypershape() {
	        _classCallCheck(this, Hypershape);

	        var _this = _possibleConstructorReturn(this, (Hypershape.__proto__ || Object.getPrototypeOf(Hypershape)).call(this, new THREE.IcosahedronGeometry(1, 1), new THREE.RawShaderMaterial({
	            vertexShader: __webpack_require__(26),
	            fragmentShader: __webpack_require__(27),
	            uniforms: {
	                time: { type: "f", value: 0 },
	                speed: { type: "f", value: 0.25 },
	                scale: { type: "v3", value: new THREE.Vector3(3, 3, 3) },
	                intensity: { type: "v3", value: new THREE.Vector3(2, 2, 2) }
	            },
	            side: THREE.DoubleSide
	        })));

	        _this.acceleration = 1.0;
	        return _this;
	    }

	    _createClass(Hypershape, [{
	        key: "update",
	        value: function update(dt, time, frame) {
	            this.acceleration = Math.max(1, this.acceleration * 0.9);
	            this.material.uniforms.time.value += dt * this.acceleration;

	            if (Math.random() < 0.02) {
	                this.acceleration = 10.0;
	            }

	            this.rotation.set(time, time, 0);
	        }
	    }]);

	    return Hypershape;
	}(THREE.Mesh);

	exports.default = Hypershape;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = "precision mediump float;\nprecision mediump int;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_1(vec4 x) {\n     return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_2(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_5 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_5;\n  vec3 i1 = min( g_1_5.xyz, l.zxy );\n  vec3 i2 = max( g_1_5.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_0(i);\n  vec4 p = permute_1_1( permute_1_1( permute_1_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_7 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_6.xy,h.z);\n  vec3 p3 = vec3(a1_1_6.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_7 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nuniform float time, speed;\nuniform vec3 scale, intensity;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nvarying vec3 vPosition;\n\nvoid main() {\n    vec3 pos = position.xyz;\n    float n = snoise_1_3(pos * scale + vec3(0.0, time * speed, 0.0));\n    pos += normal * n * intensity;\n    vPosition = pos;\n    gl_Position = projectionMatrix * (modelViewMatrix * vec4(pos, 1.0));\n}\n"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "#extension GL_OES_standard_derivatives : enable\n\nprecision mediump float;\nprecision mediump int;\n#define GLSLIFY 1\n\nvarying vec3 vPosition;\n\nvec3 flatNormal(vec3 p) {\n    vec3 dx = dFdx(p);\n    vec3 dy = dFdy(p);\n    return normalize(cross(normalize(dx), normalize(dy)));\n}\n\nvoid main() {\n    vec3 normal = flatNormal(vPosition);\n    // vec3 normal = vNormal;\n    gl_FragColor = vec4((normal + 1.0) * 0.5, 1.0);\n}\n"

/***/ })
/******/ ]);