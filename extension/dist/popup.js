var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x) => obj[k](x);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw") throw v;
        return v;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x = obj[k](v);
          if (!(x instanceof Object)) __typeError("Object expected");
          resolve(x);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
    throw x;
  }, "return" in obj && method("return"), it;
};
var require_popup = __commonJS({
  "popup.js"(exports) {
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    function getAugmentedNamespace(n2) {
      if (n2.__esModule) return n2;
      var f2 = n2.default;
      if (typeof f2 == "function") {
        var a = function a2() {
          if (this instanceof a2) {
            return Reflect.construct(f2, arguments, this.constructor);
          }
          return f2.apply(this, arguments);
        };
        a.prototype = f2.prototype;
      } else a = {};
      Object.defineProperty(a, "__esModule", { value: true });
      Object.keys(n2).forEach(function(k2) {
        var d = Object.getOwnPropertyDescriptor(n2, k2);
        Object.defineProperty(a, k2, d.get ? d : {
          enumerable: true,
          get: function() {
            return n2[k2];
          }
        });
      });
      return a;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
    function A$1(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z$1 && a[z$1] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b, e) {
      var d, c = {}, k2 = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
        c.children = f2;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
    }
    function N$1(a, b) {
      return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$1;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R$1(a, b, e, d, c) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k2) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l$1:
            case n$1:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I$1(a)) for (var g = 0; g < a.length; g++) {
        k2 = a[g];
        var f2 = d + Q$1(k2, g);
        h += R$1(k2, b, e, f2, c);
      }
      else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
      else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S$1(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R$1(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    function X$1() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
      S$1(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S$1(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$2;
    react_production_min.Profiler = r;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$1;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.act = X$1;
    react_production_min.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2) d.children = e;
      else if (1 < f2) {
        g = Array(f2);
        for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
        d.children = g;
      }
      return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t$2, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b = M$1.bind(null, a);
      b.type = a;
      return b;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v$1, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function(a) {
      var b = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b;
      }
    };
    react_production_min.unstable_act = X$1;
    react_production_min.useCallback = function(a, b) {
      return U$1.current.useCallback(a, b);
    };
    react_production_min.useContext = function(a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b) {
      return U$1.current.useEffect(a, b);
    };
    react_production_min.useId = function() {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b, e) {
      return U$1.current.useImperativeHandle(a, b, e);
    };
    react_production_min.useInsertionEffect = function(a, b) {
      return U$1.current.useInsertionEffect(a, b);
    };
    react_production_min.useLayoutEffect = function(a, b) {
      return U$1.current.useLayoutEffect(a, b);
    };
    react_production_min.useMemo = function(a, b) {
      return U$1.current.useMemo(a, b);
    };
    react_production_min.useReducer = function(a, b, e) {
      return U$1.current.useReducer(a, b, e);
    };
    react_production_min.useRef = function(a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b, e) {
      return U$1.current.useSyncExternalStore(a, b, e);
    };
    react_production_min.useTransition = function() {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
            var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
            if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
            else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t2); null !== b; ) {
          if (null === b.callback) k2(t2);
          else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
          else break;
          b = h(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
        else {
          var b = h(t2);
          null !== b && K2(H2, b.startTime - a);
        }
      }
      function J2(a, b) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c = y2;
        try {
          G2(b);
          for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b);
              b = exports2.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
              G2(b);
            } else k2(r2);
            v2 = h(r2);
          }
          if (null !== v2) var w2 = true;
          else {
            var m2 = h(t2);
            null !== m2 && K2(H2, m2.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O2(true, a);
          } finally {
            b ? S2() : (N2 = false, O2 = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function() {
        F2(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else S2 = function() {
        D2(R2, 0);
      };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c = y2;
        y2 = b;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b, c) {
        var d = exports2.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b = y2;
        return function() {
          var c = y2;
          y2 = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f2, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f2;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l2) {
            var d = l2;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l2) {
            d = l2;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l2) {
            d = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d && "string" === typeof l2.stack) {
          for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f2[h]) {
                  var k2 = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f2 = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f2.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    function Nb(a, b, c, d, e, f2, g, h, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f2, g, h, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f2, g, h, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f2 = e.alternate;
        if (null === f2) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f2.child) {
          for (f2 = e.child; f2; ) {
            if (f2 === c) return Xb(e), a;
            if (f2 === d) return Xb(e), b;
            f2 = f2.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f2;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f2;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f2;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f2.child; h; ) {
              if (h === c) {
                g = true;
                c = f2;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f2;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
        if (-1 === k2) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k2 <= b && (a.expiredLanes |= h);
        f2 &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f2 = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f2;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f2) {
      if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f2 = e.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b, c, d) {
      var e = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f2;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f2;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f2 = Cb(e);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b, c, d);
            null === f2 && hd(a, b, d, id, c);
            if (f2 === e) break;
            e = f2;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f2, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f2;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null, qe = null;
    function re$3(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re$3, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f2 = Math.min(d.start, e);
            d = void 0 === d.end ? f2 : Math.min(d.end, e);
            !a.extend && f2 > d && (e = d, d = f2, f2 = e);
            e = Ke(c, f2);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f2 = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k2 = h.instance, l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped()) break a;
            nf(e, h, l2);
            f2 = k2;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k2 = h.instance;
            l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped()) break a;
            nf(e, h, l2);
            f2 = k2;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f2 = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k2 = g.tag;
            if (3 === k2 || 4 === k2) {
              if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f2, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
            t2 = [];
            for (var w2 = d2, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2) break;
              w2 = w2.return;
            }
            0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
            if (k3 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k3) {
                if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
              } else k3 = null, n2 = d2;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h2 : ue(k3);
                u2 = null == n2 ? h2 : ue(n2);
                h2 = new t2(F2, w2 + "leave", k3, c, e2);
                h2.target = J2;
                h2.relatedTarget = u2;
                F2 = null;
                Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2) b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2)) w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2)) u2++;
                  for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
                else t2 = null;
                null !== k3 && wf(g2, h2, k3, t2, false);
                null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k3 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f2 = e.stateNode;
        5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k2 = h.alternate, l2 = h.stateNode;
        if (null !== k2 && k2 === d) break;
        5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f2;
      for (f2 in c) e[f2] = b[f2];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f2 = 32 - oc(b) + e;
      if (30 < f2) {
        var g = e - e % 5;
        f2 = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f2 + a;
      } else rg = 1 << f2 | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f2 = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f2] : b2[f2] = a2;
          };
          b._stringRef = f2;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k2(a2, b2, c2, d2) {
        var f3 = c2.type;
        if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l2(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m2(a2, b2, c2, d2, f3) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q2(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q2(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r2(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r2(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y2(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
            case Ha:
              var f3 = d2._init;
              return y2(a2, b2, c2, f3(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n2(e2, g2, h2, k3) {
        for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e2, u2, h2[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b(e2, u2);
          g2 = f2(n3, g2, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
        if (null === u2) {
          for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I && tg(e2, w2);
          return l3;
        }
        for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function t2(e2, g2, h2, k3) {
        var l3 = Ka(h2);
        if ("function" !== typeof l3) throw Error(p(150));
        h2 = l3.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e2, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b(e2, m3);
          g2 = f2(t3, g2, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done) return c(
          e2,
          m3
        ), I && tg(e2, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I && tg(e2, w2);
          return l3;
        }
        for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function J2(a2, d2, f3, h2) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c(a2, l3.sibling);
                        d2 = e(l3, f3.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props);
                      d2.ref = Lg(a2, l3, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l3);
                    break;
                  } else b(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d2; ) {
                  if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f3.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f3, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
          }
          if (eb(f3)) return n2(a2, d2, f3, h2);
          if (Ka(f3)) return t2(a2, d2, f3, h2);
          Mg(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J2;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f2 = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f2 ? e = f2 = g : f2 = f2.next = g;
            c = c.next;
          } while (null !== c);
          null === f2 ? e = f2 = b : f2 = f2.next = b;
        } else e = f2 = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k2 = h, l2 = k2.next;
        k2.next = null;
        null === g ? f2 = l2 : g.next = l2;
        g = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e.baseState;
        g = 0;
        m2 = l2 = k2 = null;
        h = f2;
        do {
          var r2 = h.lane, y2 = h.eventTime;
          if ((d & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h;
              r2 = b;
              y2 = c;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2) break a;
                  q2 = A({}, q2, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
          } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e.baseState = k2;
        e.firstBaseUpdate = l2;
        e.lastBaseUpdate = m2;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f2 && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q2;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f2) {
      Hh = f2;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f2 = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f2) throw Error(p(301));
          f2 += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f2 = c.pending;
      if (null !== f2) {
        if (null !== e) {
          var g = e.next;
          e.next = f2.next;
          f2.next = g;
        }
        d.baseQueue = e = f2;
        c.pending = null;
      }
      if (null !== e) {
        f2 = e.next;
        d = d.baseState;
        var h = g = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
            M.lanes |= m2;
            rh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g = d : k2.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k2;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f2 = a(f2, g.action), g = g.next;
        while (g !== e);
        He(f2, b.memoizedState) || (dh = true);
        b.memoizedState = f2;
        null === b.baseQueue && (b.baseState = f2);
        c.lastRenderedState = f2;
      }
      return [f2, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
      f2 && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f2 = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f2 = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f2, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f2, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
          var g = b.lastRenderedState, h = f2(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k2 = b.interleaved;
            null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l2) {
        } finally {
        }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f2 = { value: c, getSnapshot: b };
      e.queue = f2;
      mi(ai.bind(
        null,
        d,
        f2,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f2, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false }, Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f2 = mh(d, e);
      f2.payload = b;
      void 0 !== c && null !== c && (f2.callback = c);
      b = nh(a, f2, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f2 = mh(d, e);
      f2.tag = 1;
      f2.payload = b;
      void 0 !== c && null !== c && (f2.callback = c);
      b = nh(a, f2, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f2, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f2);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
      e.state = a.memoizedState;
      f2 = b.getDerivedStateFromProps;
      "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f2) {
        e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f2 = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f2, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f2 = c.type;
        if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e)) {
        var g = f2.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f2, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f2 ? f2.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f2 = Zf(c) ? Xf : H.current;
      f2 = Yf(b, f2);
      ch(b, e);
      c = Nh(a, b, c, d, f2, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f2 = true;
        cg(b);
      } else f2 = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k2 = g.context, l2 = c.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
        var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
        jh = false;
        var r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        k2 = b.memoizedState;
        h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l2 = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l2;
        q2 = b.pendingProps;
        r2 = g.context;
        k2 = c.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
        var y2 = c.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
        jh = false;
        r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        var n2 = b.memoizedState;
        h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f2, e);
    }
    function jj(a, b, c, d, e, f2) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f2 = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f2) {
        f2 = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k2 = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
        f2.return = b;
        d.return = b;
        d.sibling = f2;
        b.child = d;
        d = f2;
        f2 = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f2.memoizedState = g;
        f2.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f2 = a.child;
      a = f2.sibling;
      d = Pg(f2, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f2, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f2 = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f2 = Tg(f2, e, g, null);
        f2.flags |= 2;
        d.return = b;
        f2.return = b;
        d.sibling = f2;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f2;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f2 = Error(p(419));
        d = Ki(f2, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f2.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f2);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f2);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj, Aj, Bj, Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f2 = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f2 = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f2 = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
          var h = e[l2];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d) {
          var k2 = d[l2];
          h = null != e ? e[l2] : void 0;
          if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else c || (f2 || (f2 = []), f2.push(
            l2,
            c
          )), c = k2;
          else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c && (f2 = f2 || []).push("style", c);
        var l2 = f2;
        if (b.updateQueue = l2) b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f2 = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f2;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f2);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f2), D("invalid", d);
              }
              ub(c, f2);
              e = null;
              for (var g in f2) if (f2.hasOwnProperty(g)) {
                var h = f2[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f2, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f2 in h) if (h.hasOwnProperty(f2)) {
                  var k2 = h[f2];
                  "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f2 = d.value;
                    null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f2 = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f2 && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
            else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f2) throw Error(p(318));
                f2 = b.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2) throw Error(p(317));
                f2[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f2 = false;
            } else null !== zg && (Fj(zg), zg = null), f2 = true;
            if (!f2) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f2 = b.memoizedState;
          if (null === f2) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f2.rendering;
          if (null === g) if (d) Dj(f2, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
          }
          if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f2 = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f2.nodeType;
            } catch (F2) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
            b: for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild)) break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a) break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling)) break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
            c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n2) {
                var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
                x2.__reactInternalSnapshotBeforeUpdate = w2;
              }
              break;
            case 3:
              var u2 = b.stateNode.containerInfo;
              1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n2 = Nj;
      Nj = false;
      return n2;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f2 = e.destroy;
            e.destroy = void 0;
            void 0 !== f2 && Mj(b, c, f2);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
    }
    var X = null, Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X, e = Xj;
          X = null;
          Yj(a, b, c);
          X = d;
          Xj = e;
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
          break;
        case 18:
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
          break;
        case 4:
          d = X;
          e = Xj;
          X = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f2 = e, g = f2.destroy;
              f2 = f2.tag;
              void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f2 = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X) throw Error(p(160));
          Zj(f2, g, e);
          X = null;
          Xj = false;
          var k2 = e.alternate;
          null !== k2 && (k2.return = null);
          e.return = null;
        } catch (l2) {
          W(e, b, l2);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t2) {
              W(a, a.return, t2);
            }
            try {
              Pj(5, a, a.return);
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2) try {
              "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
              vb(h, g);
              var l2 = vb(h, f2);
              for (g = 0; g < k2.length; g += 2) {
                var m2 = k2[g], q2 = k2[g + 1];
                "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
              }
              switch (h) {
                case "input":
                  bb(e, f2);
                  break;
                case "textarea":
                  ib(e, f2);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e[Pf] = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e.nodeValue = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t2) {
            W(a, a.return, t2);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m2 = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
              for (q2 = V = m2; null !== V; ) {
                r2 = V;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W(d, c, t2);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
              }
              m2 = m2.sibling;
            }
            a: for (m2 = null, q2 = a; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2) try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a) break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a) break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f2 = Uj(a);
              Wj(a, f2, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k2) {
          W(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f2 = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l2 = U;
            Jj = g;
            if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
            for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
            V = e;
            Jj = h;
            U = l2;
          }
          kk(a);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f2 = b.updateQueue;
                null !== f2 && sh(b, f2, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k2 = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c.focus();
                      break;
                    case "img":
                      k2.src && (c.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l2 = b.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r2) {
            W(b, b.return, r2);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k2) {
                W(b, c, k2);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k2) {
                  W(b, e, k2);
                }
              }
              var f2 = b.return;
              try {
                Rj(b);
              } catch (k2) {
                W(b, f2, k2);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k2) {
                W(b, g, k2);
              }
          }
        } catch (k2) {
          W(b, b.return, k2);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f2 = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f2;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f2 = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f2;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f2 = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f2(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f2 = c.pending;
          if (null !== f2) {
            var g = f2.next;
            f2.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f2 = a, g = c.return, h = c, k2 = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Ui(g);
              if (null !== y2) {
                y2.flags &= -257;
                Vi(y2, g, h, f2, b);
                y2.mode & 1 && Si(f2, l2, b);
                b = y2;
                k2 = l2;
                var n2 = b.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b.updateQueue = t2;
                } else n2.add(k2);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f2, l2, b);
                  tj();
                  break a;
                }
                k2 = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J2 = Ui(g);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Vi(J2, g, h, f2, b);
                Jg(Ji(k2, h));
                break a;
              }
            }
            f2 = k2 = Ji(k2, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f2] : sk.push(f2);
            f2 = g;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var x2 = Ni(f2, k2, b);
                  ph(f2, x2);
                  break a;
                case 1:
                  h = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var F2 = Qi(f2, h, b);
                    ph(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c.lanes | c.childLanes;
      Bc(a, f2);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f2 = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f2) {
        f2 = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c);
        dc();
        K = h;
        C = g;
        ok.transition = f2;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f2 = a.pendingLanes;
      0 === f2 && (Ri = null);
      mc(c.stateNode);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f2 = V, g = f2.child;
              if (0 !== (V.flags & 16)) {
                var h = f2.deletions;
                if (null !== h) {
                  for (var k2 = 0; k2 < h.length; k2++) {
                    var l2 = h[k2];
                    for (V = l2; null !== V; ) {
                      var m2 = V;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2) q2.return = m2, V = q2;
                      else for (; null !== V; ) {
                        m2 = V;
                        var r2 = m2.sibling, y2 = m2.return;
                        Sj(m2);
                        if (m2 === l2) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V = r2;
                          break;
                        }
                        V = y2;
                      }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
              else b: for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f2, f2.return);
                }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
            }
            var w2 = a.current;
            for (V = w2; null !== V; ) {
              g = V;
              var u2 = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
              else b: for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f2 = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f2 = b.memoizedState;
            e = f2.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f2 = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f2) if (He(f2.value, g)) {
              if (f2.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = mh(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    bh(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f2.sibling;
              } else g = f2.child;
              if (null !== g) g.return = f2;
              else for (g = f2; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f2 = g.sibling;
                if (null !== f2) {
                  f2.return = g.return;
                  g = f2;
                  break;
                }
                g = g.return;
              }
              f2 = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f2) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return pj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f2;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f2, g, h, k2) {
      a = new al(a, b, c, h, k2);
      1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
      f2 = Bg(3, null, null, b);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f2);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f2, g, h, k2) {
      a = bl(c, d, true, a, e, f2, g, h, k2);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f2 = mh(d, e);
      f2.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f2, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f2 = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f2, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f2), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f2 = d;
          d = function() {
            var a2 = gl(g);
            f2.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k2);
          h.call(a2);
        };
      }
      var k2 = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k2, c, d);
      });
      return k2;
    }
    function rl(a, b, c, d, e) {
      var f2 = c._reactRootContainer;
      if (f2) {
        var g = f2;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    reactDom_production_min.createRoot = function(a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    reactDom_production_min.hydrateRoot = function(a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    reactDom_production_min.render = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    var createRoot;
    var m = reactDomExports;
    {
      createRoot = m.createRoot;
      m.hydrateRoot;
    }
    var dist$8 = {};
    var chunkKUKZKOBU = {};
    var chunkHP7EYLLY = {};
    var chunkQ4DN6VYN = {};
    var chunkO5ECOCX2 = {};
    var chunk6QNVTE4W = {};
    var chunkZOFGBGOM = {};
    Object.defineProperty(chunkZOFGBGOM, "__esModule", { value: true });
    var ERC721 = "ERC721";
    var ERC1155 = "ERC1155";
    var ERC20 = "ERC20";
    chunkZOFGBGOM.ERC721 = ERC721;
    chunkZOFGBGOM.ERC1155 = ERC1155;
    chunkZOFGBGOM.ERC20 = ERC20;
    var chunk4EQNSGSR = {};
    Object.defineProperty(chunk4EQNSGSR, "__esModule", { value: true });
    var messages = {
      errors: {
        disconnected: () => "MetaMask: Disconnected from chain. Attempting to connect.",
        permanentlyDisconnected: () => "MetaMask: Disconnected from MetaMask background. Page reload required.",
        sendSiteMetadata: () => `MetaMask: Failed to send site metadata. This is an internal error, please report this bug.`,
        unsupportedSync: (method) => `MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
        invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
        invalidNetworkParams: () => "MetaMask: Received invalid network parameters. Please report this bug.",
        invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
        invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
        invalidRequestParams: () => `'args.params' must be an object or array if provided.`,
        invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
        invalidLoggerMethod: (method) => `'args.logger' must include required method '${method}'.`
      },
      info: {
        connected: (chainId) => `MetaMask: Connected to chain with ID "${chainId}".`
      },
      warnings: {
        // deprecated properties
        chainIdDeprecation: `MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23`,
        networkVersionDeprecation: `MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23`,
        selectedAddressDeprecation: `MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23`,
        // deprecated methods
        enableDeprecation: `MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
        sendDeprecation: `MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
        // deprecated events
        events: {
          close: `MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect`,
          data: `MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
          networkChanged: `MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged`,
          notification: `MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`
        },
        rpc: {
          ethDecryptDeprecation: `MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.
For more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
          ethGetEncryptionPublicKeyDeprecation: `MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.
For more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
          walletWatchAssetNFTExperimental: `MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle`
        },
        // misc
        experimentalMethods: `MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`
      }
    };
    var messages_default = messages;
    chunk4EQNSGSR.messages_default = messages_default;
    Object.defineProperty(chunk6QNVTE4W, "__esModule", { value: true });
    function _optionalChain$3(ops) {
      let lastAccessLHS = void 0;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
          return void 0;
        }
        if (op === "access" || op === "optionalAccess") {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = void 0;
        }
      }
      return value;
    }
    var _chunkZOFGBGOMjs = chunkZOFGBGOM;
    var _chunk4EQNSGSRjs$4 = chunk4EQNSGSR;
    function createRpcWarningMiddleware(log) {
      const sentWarnings = {
        ethDecryptDeprecation: false,
        ethGetEncryptionPublicKeyDeprecation: false,
        walletWatchAssetNFTExperimental: false
      };
      return (req, _res, next) => {
        if (!sentWarnings.ethDecryptDeprecation && req.method === "eth_decrypt") {
          log.warn(_chunk4EQNSGSRjs$4.messages_default.warnings.rpc.ethDecryptDeprecation);
          sentWarnings.ethDecryptDeprecation = true;
        } else if (!sentWarnings.ethGetEncryptionPublicKeyDeprecation && req.method === "eth_getEncryptionPublicKey") {
          log.warn(_chunk4EQNSGSRjs$4.messages_default.warnings.rpc.ethGetEncryptionPublicKeyDeprecation);
          sentWarnings.ethGetEncryptionPublicKeyDeprecation = true;
        } else if (!sentWarnings.walletWatchAssetNFTExperimental && req.method === "wallet_watchAsset" && [_chunkZOFGBGOMjs.ERC721, _chunkZOFGBGOMjs.ERC1155].includes(
          _optionalChain$3([req, "access", (_) => _.params, "optionalAccess", (_2) => _2.type]) || ""
        )) {
          log.warn(_chunk4EQNSGSRjs$4.messages_default.warnings.rpc.walletWatchAssetNFTExperimental);
          sentWarnings.walletWatchAssetNFTExperimental = true;
        }
        next();
      };
    }
    chunk6QNVTE4W.createRpcWarningMiddleware = createRpcWarningMiddleware;
    var dist$7 = {};
    var chunkZYXL5TCS = {};
    Object.defineProperty(chunkZYXL5TCS, "__esModule", { value: true });
    function createAsyncMiddleware(asyncMiddleware) {
      return (request, response, next, end) => __async(this, null, function* () {
        let resolveNextPromise;
        const nextPromise = new Promise((resolve) => {
          resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        const asyncNext = () => __async(this, null, function* () {
          nextWasCalled = true;
          next((runReturnHandlersCallback) => {
            returnHandlerCallback = runReturnHandlersCallback;
            resolveNextPromise();
          });
          return nextPromise;
        });
        try {
          yield asyncMiddleware(request, response, asyncNext);
          if (nextWasCalled) {
            yield nextPromise;
            returnHandlerCallback(null);
          } else {
            end(null);
          }
        } catch (error2) {
          if (returnHandlerCallback) {
            returnHandlerCallback(error2);
          } else {
            end(error2);
          }
        }
      });
    }
    chunkZYXL5TCS.createAsyncMiddleware = createAsyncMiddleware;
    var chunk3AC2MIND = {};
    Object.defineProperty(chunk3AC2MIND, "__esModule", { value: true });
    function createScaffoldMiddleware(handlers) {
      return (req, res, next, end) => {
        const handler = handlers[req.method];
        if (handler === void 0) {
          return next();
        }
        if (typeof handler === "function") {
          return handler(req, res, next, end);
        }
        res.result = handler;
        return end();
      };
    }
    chunk3AC2MIND.createScaffoldMiddleware = createScaffoldMiddleware;
    var chunkPBQXMZM5 = {};
    var chunkXDGWQHNY = {};
    Object.defineProperty(chunkXDGWQHNY, "__esModule", { value: true });
    var MAX = 4294967295;
    var idCounter = Math.floor(Math.random() * MAX);
    function getUniqueId() {
      idCounter = (idCounter + 1) % MAX;
      return idCounter;
    }
    chunkXDGWQHNY.getUniqueId = getUniqueId;
    Object.defineProperty(chunkPBQXMZM5, "__esModule", { value: true });
    var _chunkXDGWQHNYjs$1 = chunkXDGWQHNY;
    function createIdRemapMiddleware() {
      return (request, response, next, _end) => {
        const originalId = request.id;
        const newId = _chunkXDGWQHNYjs$1.getUniqueId.call(void 0);
        request.id = newId;
        response.id = newId;
        next((done2) => {
          request.id = originalId;
          response.id = originalId;
          done2();
        });
      };
    }
    chunkPBQXMZM5.createIdRemapMiddleware = createIdRemapMiddleware;
    var chunkVK4MHWJV = {};
    var chunk2LXAFMJD = {};
    var chunkZ4BLTVTB = {};
    Object.defineProperty(chunkZ4BLTVTB, "__esModule", { value: true });
    var __accessCheck$1 = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    var __privateGet$1 = (obj, member, getter) => {
      __accessCheck$1(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    };
    var __privateAdd$1 = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateSet$1 = (obj, member, value, setter) => {
      __accessCheck$1(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    };
    var __privateMethod = (obj, member, method) => {
      __accessCheck$1(obj, member, "access private method");
      return method;
    };
    chunkZ4BLTVTB.__privateGet = __privateGet$1;
    chunkZ4BLTVTB.__privateAdd = __privateAdd$1;
    chunkZ4BLTVTB.__privateSet = __privateSet$1;
    chunkZ4BLTVTB.__privateMethod = __privateMethod;
    var dist$6 = {};
    var classes = {};
    var dist$5 = {};
    var assert$4 = {};
    var dist$4 = {};
    var error = {};
    Object.defineProperty(error, "__esModule", { value: true });
    error.StructError = void 0;
    class StructError extends TypeError {
      constructor(failure, failures) {
        let cached;
        const _a = failure, { message, explanation } = _a, rest = __objRest(_a, ["message", "explanation"]);
        const { path } = failure;
        const cause = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
        super(explanation != null ? explanation : cause);
        if (explanation !== null && explanation !== void 0) {
          this.cause = cause;
        }
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => {
          return cached != null ? cached : cached = [failure, ...failures()];
        };
      }
    }
    error.StructError = StructError;
    var struct = {};
    var utils$2 = {};
    Object.defineProperty(utils$2, "__esModule", { value: true });
    utils$2.run = utils$2.toFailures = utils$2.toFailure = utils$2.shiftIterator = utils$2.print = utils$2.isPlainObject = utils$2.isObject = void 0;
    function isIterable(value) {
      return isObject(value) && typeof value[Symbol.iterator] === "function";
    }
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    utils$2.isObject = isObject;
    function isPlainObject(value) {
      if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    }
    utils$2.isPlainObject = isPlainObject;
    function print(value) {
      if (typeof value === "symbol") {
        return value.toString();
      }
      return typeof value === "string" ? JSON.stringify(value) : `${value}`;
    }
    utils$2.print = print;
    function shiftIterator(input) {
      const { done: done2, value } = input.next();
      return done2 ? void 0 : value;
    }
    utils$2.shiftIterator = shiftIterator;
    function toFailure(result, context, struct2, value) {
      if (result === true) {
        return void 0;
      } else if (result === false) {
        result = {};
      } else if (typeof result === "string") {
        result = { message: result };
      }
      const { path, branch } = context;
      const { type } = struct2;
      const { refinement, message = `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\`` } = result;
      return __spreadProps(__spreadValues({
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch
      }, result), {
        message
      });
    }
    utils$2.toFailure = toFailure;
    function* toFailures(result, context, struct2, value) {
      if (!isIterable(result)) {
        result = [result];
      }
      for (const validationResult of result) {
        const failure = toFailure(validationResult, context, struct2, value);
        if (failure) {
          yield failure;
        }
      }
    }
    utils$2.toFailures = toFailures;
    function* run(value, struct2, options = {}) {
      const { path = [], branch = [value], coerce: coerce2 = false, mask: mask2 = false } = options;
      const context = { path, branch };
      if (coerce2) {
        value = struct2.coercer(value, context);
        if (mask2 && struct2.type !== "type" && isObject(struct2.schema) && isObject(value) && !Array.isArray(value)) {
          for (const key in value) {
            if (struct2.schema[key] === void 0) {
              delete value[key];
            }
          }
        }
      }
      let status = "valid";
      for (const failure of struct2.validator(value, context)) {
        failure.explanation = options.message;
        status = "not_valid";
        yield [failure, void 0];
      }
      for (let [innerKey, innerValue, innerStruct] of struct2.entries(value, context)) {
        const iterable = run(innerValue, innerStruct, {
          path: innerKey === void 0 ? path : [...path, innerKey],
          branch: innerKey === void 0 ? branch : [...branch, innerValue],
          coerce: coerce2,
          mask: mask2,
          message: options.message
        });
        for (const result of iterable) {
          if (result[0]) {
            status = result[0].refinement === null || result[0].refinement === void 0 ? "not_valid" : "not_refined";
            yield [result[0], void 0];
          } else if (coerce2) {
            innerValue = result[1];
            if (innerKey === void 0) {
              value = innerValue;
            } else if (value instanceof Map) {
              value.set(innerKey, innerValue);
            } else if (value instanceof Set) {
              value.add(innerValue);
            } else if (isObject(value)) {
              if (innerValue !== void 0 || innerKey in value) {
                value[innerKey] = innerValue;
              }
            }
          }
        }
      }
      if (status !== "not_valid") {
        for (const failure of struct2.refiner(value, context)) {
          failure.explanation = options.message;
          status = "not_refined";
          yield [failure, void 0];
        }
      }
      if (status === "valid") {
        yield [void 0, value];
      }
    }
    utils$2.run = run;
    Object.defineProperty(struct, "__esModule", { value: true });
    struct.validate = struct.is = struct.mask = struct.create = struct.assert = struct.ExactOptionalStruct = struct.Struct = void 0;
    const error_js_1 = error;
    const utils_js_1$2 = utils$2;
    class Struct {
      constructor(props) {
        const { type, schema, validator, refiner, coercer = (value) => value, entries = function* () {
        } } = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) {
          this.validator = (value, context) => {
            const result = validator(value, context);
            return (0, utils_js_1$2.toFailures)(result, context, this, value);
          };
        } else {
          this.validator = () => [];
        }
        if (refiner) {
          this.refiner = (value, context) => {
            const result = refiner(value, context);
            return (0, utils_js_1$2.toFailures)(result, context, this, value);
          };
        } else {
          this.refiner = () => [];
        }
      }
      /**
       * Assert that a value passes the struct's validation, throwing if it doesn't.
       */
      assert(value, message) {
        return assert$3(value, this, message);
      }
      /**
       * Create a value with the struct's coercion logic, then validate it.
       */
      create(value, message) {
        return create(value, this, message);
      }
      /**
       * Check if a value passes the struct's validation.
       */
      is(value) {
        return is(value, this);
      }
      /**
       * Mask a value, coercing and validating it, but returning only the subset of
       * properties defined by the struct's schema.
       */
      mask(value, message) {
        return mask(value, this, message);
      }
      /**
       * Validate a value with the struct's validation logic, returning a tuple
       * representing the result.
       *
       * You may optionally pass `true` for the `withCoercion` argument to coerce
       * the value before attempting to validate it. If you do, the result will
       * contain the coerced result when successful.
       */
      validate(value, options = {}) {
        return validate(value, this, options);
      }
    }
    struct.Struct = Struct;
    const ExactOptionalBrand = "EXACT_OPTIONAL";
    class ExactOptionalStruct extends Struct {
      constructor(props) {
        super(__spreadProps(__spreadValues({}, props), {
          type: `exact optional ${props.type}`
        }));
        this.brand = ExactOptionalBrand;
      }
      static isExactOptional(value) {
        return (0, utils_js_1$2.isObject)(value) && "brand" in value && value.brand === ExactOptionalBrand;
      }
    }
    struct.ExactOptionalStruct = ExactOptionalStruct;
    function assert$3(value, struct2, message) {
      const result = validate(value, struct2, { message });
      if (result[0]) {
        throw result[0];
      }
    }
    struct.assert = assert$3;
    function create(value, struct2, message) {
      const result = validate(value, struct2, { coerce: true, message });
      if (result[0]) {
        throw result[0];
      } else {
        return result[1];
      }
    }
    struct.create = create;
    function mask(value, struct2, message) {
      const result = validate(value, struct2, { coerce: true, mask: true, message });
      if (result[0]) {
        throw result[0];
      } else {
        return result[1];
      }
    }
    struct.mask = mask;
    function is(value, struct2) {
      const result = validate(value, struct2);
      return !result[0];
    }
    struct.is = is;
    function validate(value, struct2, options = {}) {
      const tuples = (0, utils_js_1$2.run)(value, struct2, options);
      const tuple = (0, utils_js_1$2.shiftIterator)(tuples);
      if (tuple[0]) {
        const error2 = new error_js_1.StructError(tuple[0], function* () {
          for (const innerTuple of tuples) {
            if (innerTuple[0]) {
              yield innerTuple[0];
            }
          }
        });
        return [error2, void 0];
      }
      const validatedValue = tuple[1];
      return [void 0, validatedValue];
    }
    struct.validate = validate;
    var coercions = {};
    var types = {};
    var utilities = {};
    var hasRequiredUtilities;
    function requireUtilities() {
      if (hasRequiredUtilities) return utilities;
      hasRequiredUtilities = 1;
      Object.defineProperty(utilities, "__esModule", { value: true });
      utilities.pick = utilities.partial = utilities.omit = utilities.lazy = utilities.dynamic = utilities.deprecated = utilities.define = utilities.assign = void 0;
      const struct_js_12 = struct;
      const types_js_12 = requireTypes();
      function assign(...Structs) {
        var _a;
        const isType = ((_a = Structs[0]) == null ? void 0 : _a.type) === "type";
        const schemas = Structs.map(({ schema: schema2 }) => schema2);
        const schema = Object.assign({}, ...schemas);
        return isType ? (0, types_js_12.type)(schema) : (0, types_js_12.object)(schema);
      }
      utilities.assign = assign;
      function define(name, validator) {
        return new struct_js_12.Struct({ type: name, schema: null, validator });
      }
      utilities.define = define;
      function deprecated(struct2, log) {
        return new struct_js_12.Struct(__spreadProps(__spreadValues({}, struct2), {
          refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx),
          validator(value, ctx) {
            if (value === void 0) {
              return true;
            }
            log(value, ctx);
            return struct2.validator(value, ctx);
          }
        }));
      }
      utilities.deprecated = deprecated;
      function dynamic(fn) {
        return new struct_js_12.Struct({
          type: "dynamic",
          schema: null,
          *entries(value, ctx) {
            const struct2 = fn(value, ctx);
            yield* __yieldStar(struct2.entries(value, ctx));
          },
          validator(value, ctx) {
            const struct2 = fn(value, ctx);
            return struct2.validator(value, ctx);
          },
          coercer(value, ctx) {
            const struct2 = fn(value, ctx);
            return struct2.coercer(value, ctx);
          },
          refiner(value, ctx) {
            const struct2 = fn(value, ctx);
            return struct2.refiner(value, ctx);
          }
        });
      }
      utilities.dynamic = dynamic;
      function lazy(fn) {
        let struct2;
        return new struct_js_12.Struct({
          type: "lazy",
          schema: null,
          *entries(value, ctx) {
            struct2 != null ? struct2 : struct2 = fn();
            yield* __yieldStar(struct2.entries(value, ctx));
          },
          validator(value, ctx) {
            struct2 != null ? struct2 : struct2 = fn();
            return struct2.validator(value, ctx);
          },
          coercer(value, ctx) {
            struct2 != null ? struct2 : struct2 = fn();
            return struct2.coercer(value, ctx);
          },
          refiner(value, ctx) {
            struct2 != null ? struct2 : struct2 = fn();
            return struct2.refiner(value, ctx);
          }
        });
      }
      utilities.lazy = lazy;
      function omit(struct2, keys) {
        const { schema } = struct2;
        const subschema = __spreadValues({}, schema);
        for (const key of keys) {
          delete subschema[key];
        }
        switch (struct2.type) {
          case "type":
            return (0, types_js_12.type)(subschema);
          default:
            return (0, types_js_12.object)(subschema);
        }
      }
      utilities.omit = omit;
      function partial(struct2) {
        const isStruct = struct2 instanceof struct_js_12.Struct;
        const schema = isStruct ? __spreadValues({}, struct2.schema) : __spreadValues({}, struct2);
        for (const key in schema) {
          schema[key] = (0, types_js_12.optional)(schema[key]);
        }
        if (isStruct && struct2.type === "type") {
          return (0, types_js_12.type)(schema);
        }
        return (0, types_js_12.object)(schema);
      }
      utilities.partial = partial;
      function pick(struct2, keys) {
        const { schema } = struct2;
        const subschema = {};
        for (const key of keys) {
          subschema[key] = schema[key];
        }
        switch (struct2.type) {
          case "type":
            return (0, types_js_12.type)(subschema);
          default:
            return (0, types_js_12.object)(subschema);
        }
      }
      utilities.pick = pick;
      return utilities;
    }
    var hasRequiredTypes;
    function requireTypes() {
      if (hasRequiredTypes) return types;
      hasRequiredTypes = 1;
      Object.defineProperty(types, "__esModule", { value: true });
      types.unknown = types.union = types.type = types.tuple = types.string = types.set = types.regexp = types.record = types.exactOptional = types.optional = types.object = types.number = types.nullable = types.never = types.map = types.literal = types.intersection = types.integer = types.instance = types.func = types.enums = types.date = types.boolean = types.bigint = types.array = types.any = void 0;
      const struct_js_12 = struct;
      const utils_js_12 = utils$2;
      const utilities_js_1 = requireUtilities();
      function any() {
        return (0, utilities_js_1.define)("any", () => true);
      }
      types.any = any;
      function array(Element) {
        return new struct_js_12.Struct({
          type: "array",
          schema: Element,
          *entries(value) {
            if (Element && Array.isArray(value)) {
              for (const [index, arrayValue] of value.entries()) {
                yield [index, arrayValue, Element];
              }
            }
          },
          coercer(value) {
            return Array.isArray(value) ? value.slice() : value;
          },
          validator(value) {
            return Array.isArray(value) || `Expected an array value, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.array = array;
      function bigint() {
        return (0, utilities_js_1.define)("bigint", (value) => {
          return typeof value === "bigint";
        });
      }
      types.bigint = bigint;
      function boolean() {
        return (0, utilities_js_1.define)("boolean", (value) => {
          return typeof value === "boolean";
        });
      }
      types.boolean = boolean;
      function date() {
        return (0, utilities_js_1.define)("date", (value) => {
          return value instanceof Date && !isNaN(value.getTime()) || `Expected a valid \`Date\` object, but received: ${(0, utils_js_12.print)(value)}`;
        });
      }
      types.date = date;
      function enums(values) {
        const schema = {};
        const description = values.map((value) => (0, utils_js_12.print)(value)).join();
        for (const key of values) {
          schema[key] = key;
        }
        return new struct_js_12.Struct({
          type: "enums",
          schema,
          validator(value) {
            return values.includes(value) || `Expected one of \`${description}\`, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.enums = enums;
      function func() {
        return (0, utilities_js_1.define)("func", (value) => {
          return typeof value === "function" || `Expected a function, but received: ${(0, utils_js_12.print)(value)}`;
        });
      }
      types.func = func;
      function instance(Class) {
        return (0, utilities_js_1.define)("instance", (value) => {
          return value instanceof Class || `Expected a \`${Class.name}\` instance, but received: ${(0, utils_js_12.print)(value)}`;
        });
      }
      types.instance = instance;
      function integer() {
        return (0, utilities_js_1.define)("integer", (value) => {
          return typeof value === "number" && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${(0, utils_js_12.print)(value)}`;
        });
      }
      types.integer = integer;
      function intersection(Structs) {
        return new struct_js_12.Struct({
          type: "intersection",
          schema: null,
          *entries(value, context) {
            for (const { entries } of Structs) {
              yield* __yieldStar(entries(value, context));
            }
          },
          *validator(value, context) {
            for (const { validator } of Structs) {
              yield* __yieldStar(validator(value, context));
            }
          },
          *refiner(value, context) {
            for (const { refiner } of Structs) {
              yield* __yieldStar(refiner(value, context));
            }
          }
        });
      }
      types.intersection = intersection;
      function literal(constant) {
        const description = (0, utils_js_12.print)(constant);
        const valueType = typeof constant;
        return new struct_js_12.Struct({
          type: "literal",
          schema: valueType === "string" || valueType === "number" || valueType === "boolean" ? constant : null,
          validator(value) {
            return value === constant || `Expected the literal \`${description}\`, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.literal = literal;
      function map(Key, Value) {
        return new struct_js_12.Struct({
          type: "map",
          schema: null,
          *entries(value) {
            if (Key && Value && value instanceof Map) {
              for (const [mapKey, mapValue] of value.entries()) {
                yield [mapKey, mapKey, Key];
                yield [mapKey, mapValue, Value];
              }
            }
          },
          coercer(value) {
            return value instanceof Map ? new Map(value) : value;
          },
          validator(value) {
            return value instanceof Map || `Expected a \`Map\` object, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.map = map;
      function never() {
        return (0, utilities_js_1.define)("never", () => false);
      }
      types.never = never;
      function nullable(struct2) {
        return new struct_js_12.Struct(__spreadProps(__spreadValues({}, struct2), {
          validator: (value, ctx) => value === null || struct2.validator(value, ctx),
          refiner: (value, ctx) => value === null || struct2.refiner(value, ctx)
        }));
      }
      types.nullable = nullable;
      function number2() {
        return (0, utilities_js_1.define)("number", (value) => {
          return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${(0, utils_js_12.print)(value)}`;
        });
      }
      types.number = number2;
      function object(schema) {
        const knowns = schema ? Object.keys(schema) : [];
        const Never = never();
        return new struct_js_12.Struct({
          type: "object",
          schema: schema != null ? schema : null,
          *entries(value) {
            if (schema && (0, utils_js_12.isObject)(value)) {
              const unknowns = new Set(Object.keys(value));
              for (const key of knowns) {
                unknowns.delete(key);
                const propertySchema = schema[key];
                if (struct_js_12.ExactOptionalStruct.isExactOptional(propertySchema) && !Object.prototype.hasOwnProperty.call(value, key)) {
                  continue;
                }
                yield [key, value[key], schema[key]];
              }
              for (const key of unknowns) {
                yield [key, value[key], Never];
              }
            }
          },
          validator(value) {
            return (0, utils_js_12.isObject)(value) || `Expected an object, but received: ${(0, utils_js_12.print)(value)}`;
          },
          coercer(value) {
            return (0, utils_js_12.isObject)(value) ? __spreadValues({}, value) : value;
          }
        });
      }
      types.object = object;
      function optional(struct2) {
        return new struct_js_12.Struct(__spreadProps(__spreadValues({}, struct2), {
          validator: (value, ctx) => value === void 0 || struct2.validator(value, ctx),
          refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx)
        }));
      }
      types.optional = optional;
      function exactOptional(struct2) {
        return new struct_js_12.ExactOptionalStruct(struct2);
      }
      types.exactOptional = exactOptional;
      function record(Key, Value) {
        return new struct_js_12.Struct({
          type: "record",
          schema: null,
          *entries(value) {
            if ((0, utils_js_12.isObject)(value)) {
              for (const objectKey in value) {
                const objectValue = value[objectKey];
                yield [objectKey, objectKey, Key];
                yield [objectKey, objectValue, Value];
              }
            }
          },
          validator(value) {
            return (0, utils_js_12.isObject)(value) || `Expected an object, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.record = record;
      function regexp() {
        return (0, utilities_js_1.define)("regexp", (value) => {
          return value instanceof RegExp;
        });
      }
      types.regexp = regexp;
      function set(Element) {
        return new struct_js_12.Struct({
          type: "set",
          schema: null,
          *entries(value) {
            if (Element && value instanceof Set) {
              for (const setValue of value) {
                yield [setValue, setValue, Element];
              }
            }
          },
          coercer(value) {
            return value instanceof Set ? new Set(value) : value;
          },
          validator(value) {
            return value instanceof Set || `Expected a \`Set\` object, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.set = set;
      function string() {
        return (0, utilities_js_1.define)("string", (value) => {
          return typeof value === "string" || `Expected a string, but received: ${(0, utils_js_12.print)(value)}`;
        });
      }
      types.string = string;
      function tuple(Structs) {
        const Never = never();
        return new struct_js_12.Struct({
          type: "tuple",
          schema: null,
          *entries(value) {
            if (Array.isArray(value)) {
              const length = Math.max(Structs.length, value.length);
              for (let i = 0; i < length; i++) {
                yield [i, value[i], Structs[i] || Never];
              }
            }
          },
          validator(value) {
            return Array.isArray(value) || `Expected an array, but received: ${(0, utils_js_12.print)(value)}`;
          }
        });
      }
      types.tuple = tuple;
      function type(schema) {
        const keys = Object.keys(schema);
        return new struct_js_12.Struct({
          type: "type",
          schema,
          *entries(value) {
            if ((0, utils_js_12.isObject)(value)) {
              for (const k2 of keys) {
                yield [k2, value[k2], schema[k2]];
              }
            }
          },
          validator(value) {
            return (0, utils_js_12.isObject)(value) || `Expected an object, but received: ${(0, utils_js_12.print)(value)}`;
          },
          coercer(value) {
            return (0, utils_js_12.isObject)(value) ? __spreadValues({}, value) : value;
          }
        });
      }
      types.type = type;
      function union(Structs) {
        const description = Structs.map((struct2) => struct2.type).join(" | ");
        return new struct_js_12.Struct({
          type: "union",
          schema: null,
          coercer(value) {
            for (const InnerStruct of Structs) {
              const [error2, coerced] = InnerStruct.validate(value, { coerce: true });
              if (!error2) {
                return coerced;
              }
            }
            return value;
          },
          validator(value, ctx) {
            const failures = [];
            for (const InnerStruct of Structs) {
              const [...tuples] = (0, utils_js_12.run)(value, InnerStruct, ctx);
              const [first] = tuples;
              if (!(first == null ? void 0 : first[0])) {
                return [];
              }
              for (const [failure] of tuples) {
                if (failure) {
                  failures.push(failure);
                }
              }
            }
            return [
              `Expected the value to satisfy a union of \`${description}\`, but received: ${(0, utils_js_12.print)(value)}`,
              ...failures
            ];
          }
        });
      }
      types.union = union;
      function unknown() {
        return (0, utilities_js_1.define)("unknown", () => true);
      }
      types.unknown = unknown;
      return types;
    }
    Object.defineProperty(coercions, "__esModule", { value: true });
    coercions.trimmed = coercions.defaulted = coercions.coerce = void 0;
    const struct_js_1$1 = struct;
    const utils_js_1$1 = utils$2;
    const types_js_1 = requireTypes();
    function coerce(struct2, condition, coercer) {
      return new struct_js_1$1.Struct(__spreadProps(__spreadValues({}, struct2), {
        coercer: (value, ctx) => {
          return (0, struct_js_1$1.is)(value, condition) ? struct2.coercer(coercer(value, ctx), ctx) : struct2.coercer(value, ctx);
        }
      }));
    }
    coercions.coerce = coerce;
    function defaulted(struct2, fallback, options = {}) {
      return coerce(struct2, (0, types_js_1.unknown)(), (value) => {
        const result = typeof fallback === "function" ? fallback() : fallback;
        if (value === void 0) {
          return result;
        }
        if (!options.strict && (0, utils_js_1$1.isPlainObject)(value) && (0, utils_js_1$1.isPlainObject)(result)) {
          const ret = __spreadValues({}, value);
          let changed = false;
          for (const key in result) {
            if (ret[key] === void 0) {
              ret[key] = result[key];
              changed = true;
            }
          }
          if (changed) {
            return ret;
          }
        }
        return value;
      });
    }
    coercions.defaulted = defaulted;
    function trimmed(struct2) {
      return coerce(struct2, (0, types_js_1.string)(), (value) => value.trim());
    }
    coercions.trimmed = trimmed;
    var refinements = {};
    Object.defineProperty(refinements, "__esModule", { value: true });
    refinements.refine = refinements.size = refinements.pattern = refinements.nonempty = refinements.min = refinements.max = refinements.empty = void 0;
    const struct_js_1 = struct;
    const utils_js_1 = utils$2;
    function empty(struct2) {
      return refine(struct2, "empty", (value) => {
        const size2 = getSize(value);
        return size2 === 0 || `Expected an empty ${struct2.type} but received one with a size of \`${size2}\``;
      });
    }
    refinements.empty = empty;
    function getSize(value) {
      if (value instanceof Map || value instanceof Set) {
        return value.size;
      }
      return value.length;
    }
    function max(struct2, threshold, options = {}) {
      const { exclusive } = options;
      return refine(struct2, "max", (value) => {
        return exclusive ? value < threshold : value <= threshold || `Expected a ${struct2.type} less than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``;
      });
    }
    refinements.max = max;
    function min(struct2, threshold, options = {}) {
      const { exclusive } = options;
      return refine(struct2, "min", (value) => {
        return exclusive ? value > threshold : value >= threshold || `Expected a ${struct2.type} greater than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``;
      });
    }
    refinements.min = min;
    function nonempty(struct2) {
      return refine(struct2, "nonempty", (value) => {
        const size2 = getSize(value);
        return size2 > 0 || `Expected a nonempty ${struct2.type} but received an empty one`;
      });
    }
    refinements.nonempty = nonempty;
    function pattern(struct2, regexp) {
      return refine(struct2, "pattern", (value) => {
        return regexp.test(value) || `Expected a ${struct2.type} matching \`/${regexp.source}/\` but received "${value}"`;
      });
    }
    refinements.pattern = pattern;
    function size(struct2, minimum, maximum = minimum) {
      const expected = `Expected a ${struct2.type}`;
      const of2 = minimum === maximum ? `of \`${minimum}\`` : `between \`${minimum}\` and \`${maximum}\``;
      return refine(struct2, "size", (value) => {
        if (typeof value === "number" || value instanceof Date) {
          return minimum <= value && value <= maximum || // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${expected} ${of2} but received \`${value}\``;
        } else if (value instanceof Map || value instanceof Set) {
          const { size: size2 } = value;
          return minimum <= size2 && size2 <= maximum || `${expected} with a size ${of2} but received one with a size of \`${size2}\``;
        }
        const { length } = value;
        return minimum <= length && length <= maximum || `${expected} with a length ${of2} but received one with a length of \`${length}\``;
      });
    }
    refinements.size = size;
    function refine(struct2, name, refiner) {
      return new struct_js_1.Struct(__spreadProps(__spreadValues({}, struct2), {
        *refiner(value, ctx) {
          yield* __yieldStar(struct2.refiner(value, ctx));
          const result = refiner(value, ctx);
          const failures = (0, utils_js_1.toFailures)(result, ctx, struct2, value);
          for (const failure of failures) {
            yield __spreadProps(__spreadValues({}, failure), { refinement: name });
          }
        }
      }));
    }
    refinements.refine = refine;
    (function(exports2) {
      var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m2, k2);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      } : function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        o[k22] = m2[k2];
      });
      var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports3) {
        for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2)) __createBinding(exports3, m2, p2);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(error, exports2);
      __exportStar(struct, exports2);
      __exportStar(coercions, exports2);
      __exportStar(refinements, exports2);
      __exportStar(requireTypes(), exports2);
      __exportStar(requireUtilities(), exports2);
    })(dist$4);
    var errors$2 = {};
    let ErrorWithCause$1 = class ErrorWithCause2 extends Error {
      /**
       * @param {string} message
       * @param {{ cause?: T }} options
       */
      constructor(message, { cause } = {}) {
        super(message);
        this.name = ErrorWithCause2.name;
        if (cause) {
          this.cause = cause;
        }
        this.message = message;
      }
    };
    const errorWithCause = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      ErrorWithCause: ErrorWithCause$1
    }, Symbol.toStringTag, { value: "Module" }));
    const require$$0 = /* @__PURE__ */ getAugmentedNamespace(errorWithCause);
    const findCauseByReference$1 = (err, reference) => {
      if (!err || !reference) return;
      if (!(err instanceof Error)) return;
      if (!(reference.prototype instanceof Error) && // @ts-ignore
      reference !== Error) return;
      const seen = /* @__PURE__ */ new Set();
      let currentErr = err;
      while (currentErr && !seen.has(currentErr)) {
        seen.add(currentErr);
        if (currentErr instanceof reference) {
          return currentErr;
        }
        currentErr = getErrorCause$1(currentErr);
      }
    };
    const getErrorCause$1 = (err) => {
      if (!err || typeof err !== "object" || !("cause" in err)) {
        return;
      }
      if (typeof err.cause === "function") {
        const causeResult = err.cause();
        return causeResult instanceof Error ? causeResult : void 0;
      } else {
        return err.cause instanceof Error ? err.cause : void 0;
      }
    };
    const _stackWithCauses = (err, seen) => {
      if (!(err instanceof Error)) return "";
      const stack = err.stack || "";
      if (seen.has(err)) {
        return stack + "\ncauses have become circular...";
      }
      const cause = getErrorCause$1(err);
      if (cause) {
        seen.add(err);
        return stack + "\ncaused by: " + _stackWithCauses(cause, seen);
      } else {
        return stack;
      }
    };
    const stackWithCauses$1 = (err) => _stackWithCauses(err, /* @__PURE__ */ new Set());
    const _messageWithCauses = (err, seen, skip) => {
      if (!(err instanceof Error)) return "";
      const message = skip ? "" : err.message || "";
      if (seen.has(err)) {
        return message + ": ...";
      }
      const cause = getErrorCause$1(err);
      if (cause) {
        seen.add(err);
        const skipIfVErrorStyleCause = "cause" in err && typeof err.cause === "function";
        return message + (skipIfVErrorStyleCause ? "" : ": ") + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
      } else {
        return message;
      }
    };
    const messageWithCauses$1 = (err) => _messageWithCauses(err, /* @__PURE__ */ new Set());
    const helpers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      findCauseByReference: findCauseByReference$1,
      getErrorCause: getErrorCause$1,
      messageWithCauses: messageWithCauses$1,
      stackWithCauses: stackWithCauses$1
    }, Symbol.toStringTag, { value: "Module" }));
    const require$$1 = /* @__PURE__ */ getAugmentedNamespace(helpers);
    const { ErrorWithCause } = require$$0;
    const {
      // linemod-replace-with: export {
      findCauseByReference,
      getErrorCause,
      messageWithCauses,
      stackWithCauses
    } = require$$1;
    var ponyCause = {
      // linemod-remove
      ErrorWithCause
    };
    var misc$1 = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.calculateNumberSize = exports2.calculateStringSize = exports2.isASCII = exports2.isPlainObject = exports2.ESCAPE_CHARACTERS_REGEXP = exports2.JsonSize = exports2.getKnownPropertyNames = exports2.hasProperty = exports2.isObject = exports2.isNullOrUndefined = exports2.isNonEmptyArray = void 0;
      function isNonEmptyArray(value) {
        return Array.isArray(value) && value.length > 0;
      }
      exports2.isNonEmptyArray = isNonEmptyArray;
      function isNullOrUndefined(value) {
        return value === null || value === void 0;
      }
      exports2.isNullOrUndefined = isNullOrUndefined;
      function isObject2(value) {
        return Boolean(value) && typeof value === "object" && !Array.isArray(value);
      }
      exports2.isObject = isObject2;
      const hasProperty = (objectToCheck, name) => Object.hasOwnProperty.call(objectToCheck, name);
      exports2.hasProperty = hasProperty;
      function getKnownPropertyNames(object) {
        return Object.getOwnPropertyNames(object);
      }
      exports2.getKnownPropertyNames = getKnownPropertyNames;
      (function(JsonSize) {
        JsonSize[JsonSize["Null"] = 4] = "Null";
        JsonSize[JsonSize["Comma"] = 1] = "Comma";
        JsonSize[JsonSize["Wrapper"] = 1] = "Wrapper";
        JsonSize[JsonSize["True"] = 4] = "True";
        JsonSize[JsonSize["False"] = 5] = "False";
        JsonSize[JsonSize["Quote"] = 1] = "Quote";
        JsonSize[JsonSize["Colon"] = 1] = "Colon";
        JsonSize[JsonSize["Date"] = 24] = "Date";
      })(exports2.JsonSize || (exports2.JsonSize = {}));
      exports2.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
      function isPlainObject2(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          let proto = value;
          while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
          }
          return Object.getPrototypeOf(value) === proto;
        } catch (_) {
          return false;
        }
      }
      exports2.isPlainObject = isPlainObject2;
      function isASCII(character) {
        return character.charCodeAt(0) <= 127;
      }
      exports2.isASCII = isASCII;
      function calculateStringSize(value) {
        var _a;
        const size2 = value.split("").reduce((total, character) => {
          if (isASCII(character)) {
            return total + 1;
          }
          return total + 2;
        }, 0);
        return size2 + ((_a = value.match(exports2.ESCAPE_CHARACTERS_REGEXP)) != null ? _a : []).length;
      }
      exports2.calculateStringSize = calculateStringSize;
      function calculateNumberSize(value) {
        return value.toString().length;
      }
      exports2.calculateNumberSize = calculateNumberSize;
    })(misc$1);
    Object.defineProperty(errors$2, "__esModule", { value: true });
    errors$2.wrapError = errors$2.getErrorMessage = errors$2.isErrorWithStack = errors$2.isErrorWithMessage = errors$2.isErrorWithCode = void 0;
    const pony_cause_1$1 = ponyCause;
    const misc_1$1 = misc$1;
    function isError$1(error2) {
      return error2 instanceof Error || (0, misc_1$1.isObject)(error2) && error2.constructor.name === "Error";
    }
    function isErrorWithCode$1(error2) {
      return typeof error2 === "object" && error2 !== null && "code" in error2;
    }
    errors$2.isErrorWithCode = isErrorWithCode$1;
    function isErrorWithMessage$1(error2) {
      return typeof error2 === "object" && error2 !== null && "message" in error2;
    }
    errors$2.isErrorWithMessage = isErrorWithMessage$1;
    function isErrorWithStack$1(error2) {
      return typeof error2 === "object" && error2 !== null && "stack" in error2;
    }
    errors$2.isErrorWithStack = isErrorWithStack$1;
    function getErrorMessage$1(error2) {
      if (isErrorWithMessage$1(error2) && typeof error2.message === "string") {
        return error2.message;
      }
      if ((0, misc_1$1.isNullOrUndefined)(error2)) {
        return "";
      }
      return String(error2);
    }
    errors$2.getErrorMessage = getErrorMessage$1;
    function wrapError$1(originalError, message) {
      if (isError$1(originalError)) {
        let error2;
        if (Error.length === 2) {
          error2 = new Error(message, { cause: originalError });
        } else {
          error2 = new pony_cause_1$1.ErrorWithCause(message, { cause: originalError });
        }
        if (isErrorWithCode$1(originalError)) {
          error2.code = originalError.code;
        }
        return error2;
      }
      if (message.length > 0) {
        return new Error(`${String(originalError)}: ${message}`);
      }
      return new Error(String(originalError));
    }
    errors$2.wrapError = wrapError$1;
    Object.defineProperty(assert$4, "__esModule", { value: true });
    assert$4.assertExhaustive = assert$4.assertStruct = assert$4.assert = assert$4.AssertionError = void 0;
    const superstruct_1$7 = dist$4;
    const errors_1$1 = errors$2;
    function isConstructable$1(fn) {
      var _a, _b;
      return Boolean(typeof ((_b = (_a = fn == null ? void 0 : fn.prototype) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name) === "string");
    }
    function getErrorMessageWithoutTrailingPeriod$1(error2) {
      return (0, errors_1$1.getErrorMessage)(error2).replace(/\.$/u, "");
    }
    function getError$1(ErrorWrapper, message) {
      if (isConstructable$1(ErrorWrapper)) {
        return new ErrorWrapper({
          message
        });
      }
      return ErrorWrapper({
        message
      });
    }
    let AssertionError$1 = class AssertionError extends Error {
      constructor(options) {
        super(options.message);
        this.code = "ERR_ASSERTION";
      }
    };
    assert$4.AssertionError = AssertionError$1;
    function assert$2(value, message = "Assertion failed.", ErrorWrapper = AssertionError$1) {
      if (!value) {
        if (message instanceof Error) {
          throw message;
        }
        throw getError$1(ErrorWrapper, message);
      }
    }
    assert$4.assert = assert$2;
    function assertStruct$1(value, struct2, errorPrefix = "Assertion failed", ErrorWrapper = AssertionError$1) {
      try {
        (0, superstruct_1$7.assert)(value, struct2);
      } catch (error2) {
        throw getError$1(ErrorWrapper, `${errorPrefix}: ${getErrorMessageWithoutTrailingPeriod$1(error2)}.`);
      }
    }
    assert$4.assertStruct = assertStruct$1;
    function assertExhaustive$1(_object) {
      throw new Error("Invalid branch reached. Should be detected during compilation.");
    }
    assert$4.assertExhaustive = assertExhaustive$1;
    var base64$3 = {};
    Object.defineProperty(base64$3, "__esModule", { value: true });
    base64$3.base64 = void 0;
    const superstruct_1$6 = dist$4;
    const assert_1$5 = assert$4;
    const base64$2 = (struct2, options = {}) => {
      var _a, _b;
      const paddingRequired = (_a = options.paddingRequired) != null ? _a : false;
      const characterSet = (_b = options.characterSet) != null ? _b : "base64";
      let letters;
      if (characterSet === "base64") {
        letters = String.raw`[A-Za-z0-9+\/]`;
      } else {
        (0, assert_1$5.assert)(characterSet === "base64url");
        letters = String.raw`[-_A-Za-z0-9]`;
      }
      let re2;
      if (paddingRequired) {
        re2 = new RegExp(`^(?:${letters}{4})*(?:${letters}{3}=|${letters}{2}==)?$`, "u");
      } else {
        re2 = new RegExp(`^(?:${letters}{4})*(?:${letters}{2,3}|${letters}{3}=|${letters}{2}==)?$`, "u");
      }
      return (0, superstruct_1$6.pattern)(struct2, re2);
    };
    base64$3.base64 = base64$2;
    var bytes$1 = {};
    var lib = {};
    (function(exports2) {
      /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.bytes = exports2.stringToBytes = exports2.str = exports2.bytesToString = exports2.hex = exports2.utf8 = exports2.bech32m = exports2.bech32 = exports2.base58check = exports2.createBase58check = exports2.base58xmr = exports2.base58xrp = exports2.base58flickr = exports2.base58 = exports2.base64urlnopad = exports2.base64url = exports2.base64nopad = exports2.base64 = exports2.base32crockford = exports2.base32hexnopad = exports2.base32hex = exports2.base32nopad = exports2.base32 = exports2.base16 = exports2.utils = void 0;
      function isBytes(a) {
        return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
      }
      function abytes(b, ...lengths) {
        if (!isBytes(b))
          throw new Error("Uint8Array expected");
        if (lengths.length > 0 && !lengths.includes(b.length))
          throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
      }
      function isArrayOf(isString, arr2) {
        if (!Array.isArray(arr2))
          return false;
        if (arr2.length === 0)
          return true;
        if (isString) {
          return arr2.every((item) => typeof item === "string");
        } else {
          return arr2.every((item) => Number.isSafeInteger(item));
        }
      }
      function afn(input) {
        if (typeof input !== "function")
          throw new Error("function expected");
        return true;
      }
      function astr(label, input) {
        if (typeof input !== "string")
          throw new Error(`${label}: string expected`);
        return true;
      }
      function anumber(n2) {
        if (!Number.isSafeInteger(n2))
          throw new Error(`invalid integer: ${n2}`);
      }
      function aArr(input) {
        if (!Array.isArray(input))
          throw new Error("array expected");
      }
      function astrArr(label, input) {
        if (!isArrayOf(true, input))
          throw new Error(`${label}: array of strings expected`);
      }
      function anumArr(label, input) {
        if (!isArrayOf(false, input))
          throw new Error(`${label}: array of numbers expected`);
      }
      // @__NO_SIDE_EFFECTS__
      function chain(...args) {
        const id2 = (a) => a;
        const wrap = (a, b) => (c) => a(b(c));
        const encode = args.map((x2) => x2.encode).reduceRight(wrap, id2);
        const decode = args.map((x2) => x2.decode).reduce(wrap, id2);
        return { encode, decode };
      }
      // @__NO_SIDE_EFFECTS__
      function alphabet(letters) {
        const lettersA = typeof letters === "string" ? letters.split("") : letters;
        const len = lettersA.length;
        astrArr("alphabet", lettersA);
        const indexes = new Map(lettersA.map((l2, i) => [l2, i]));
        return {
          encode: (digits) => {
            aArr(digits);
            return digits.map((i) => {
              if (!Number.isSafeInteger(i) || i < 0 || i >= len)
                throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
              return lettersA[i];
            });
          },
          decode: (input) => {
            aArr(input);
            return input.map((letter) => {
              astr("alphabet.decode", letter);
              const i = indexes.get(letter);
              if (i === void 0)
                throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
              return i;
            });
          }
        };
      }
      // @__NO_SIDE_EFFECTS__
      function join(separator = "") {
        astr("join", separator);
        return {
          encode: (from) => {
            astrArr("join.decode", from);
            return from.join(separator);
          },
          decode: (to) => {
            astr("join.decode", to);
            return to.split(separator);
          }
        };
      }
      // @__NO_SIDE_EFFECTS__
      function padding(bits, chr = "=") {
        anumber(bits);
        astr("padding", chr);
        return {
          encode(data) {
            astrArr("padding.encode", data);
            while (data.length * bits % 8)
              data.push(chr);
            return data;
          },
          decode(input) {
            astrArr("padding.decode", input);
            let end = input.length;
            if (end * bits % 8)
              throw new Error("padding: invalid, string should have whole number of bytes");
            for (; end > 0 && input[end - 1] === chr; end--) {
              const last = end - 1;
              const byte = last * bits;
              if (byte % 8 === 0)
                throw new Error("padding: invalid, string has too much padding");
            }
            return input.slice(0, end);
          }
        };
      }
      // @__NO_SIDE_EFFECTS__
      function normalize(fn) {
        afn(fn);
        return { encode: (from) => from, decode: (to) => fn(to) };
      }
      function convertRadix(data, from, to) {
        if (from < 2)
          throw new Error(`convertRadix: invalid from=${from}, base cannot be less than 2`);
        if (to < 2)
          throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
        aArr(data);
        if (!data.length)
          return [];
        let pos = 0;
        const res = [];
        const digits = Array.from(data, (d) => {
          anumber(d);
          if (d < 0 || d >= from)
            throw new Error(`invalid integer: ${d}`);
          return d;
        });
        const dlen = digits.length;
        while (true) {
          let carry = 0;
          let done2 = true;
          for (let i = pos; i < dlen; i++) {
            const digit = digits[i];
            const fromCarry = from * carry;
            const digitBase = fromCarry + digit;
            if (!Number.isSafeInteger(digitBase) || fromCarry / from !== carry || digitBase - digit !== fromCarry) {
              throw new Error("convertRadix: carry overflow");
            }
            const div = digitBase / to;
            carry = digitBase % to;
            const rounded = Math.floor(div);
            digits[i] = rounded;
            if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
              throw new Error("convertRadix: carry overflow");
            if (!done2)
              continue;
            else if (!rounded)
              pos = i;
            else
              done2 = false;
          }
          res.push(carry);
          if (done2)
            break;
        }
        for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
          res.push(0);
        return res.reverse();
      }
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from, to) => from + (to - gcd(from, to));
      const powers = /* @__PURE__ */ (() => {
        let res = [];
        for (let i = 0; i < 40; i++)
          res.push(__pow(2, i));
        return res;
      })();
      function convertRadix2(data, from, to, padding2) {
        aArr(data);
        if (from <= 0 || from > 32)
          throw new Error(`convertRadix2: wrong from=${from}`);
        if (to <= 0 || to > 32)
          throw new Error(`convertRadix2: wrong to=${to}`);
        if (/* @__PURE__ */ radix2carry(from, to) > 32) {
          throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${/* @__PURE__ */ radix2carry(from, to)}`);
        }
        let carry = 0;
        let pos = 0;
        const max2 = powers[from];
        const mask2 = powers[to] - 1;
        const res = [];
        for (const n2 of data) {
          anumber(n2);
          if (n2 >= max2)
            throw new Error(`convertRadix2: invalid data word=${n2} from=${from}`);
          carry = carry << from | n2;
          if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
          pos += from;
          for (; pos >= to; pos -= to)
            res.push((carry >> pos - to & mask2) >>> 0);
          const pow = powers[pos];
          if (pow === void 0)
            throw new Error("invalid carry");
          carry &= pow - 1;
        }
        carry = carry << to - pos & mask2;
        if (!padding2 && pos >= from)
          throw new Error("Excess padding");
        if (!padding2 && carry > 0)
          throw new Error(`Non-zero padding: ${carry}`);
        if (padding2 && pos > 0)
          res.push(carry >>> 0);
        return res;
      }
      // @__NO_SIDE_EFFECTS__
      function radix(num) {
        anumber(num);
        const _256 = __pow(2, 8);
        return {
          encode: (bytes2) => {
            if (!isBytes(bytes2))
              throw new Error("radix.encode input should be Uint8Array");
            return convertRadix(Array.from(bytes2), _256, num);
          },
          decode: (digits) => {
            anumArr("radix.decode", digits);
            return Uint8Array.from(convertRadix(digits, num, _256));
          }
        };
      }
      // @__NO_SIDE_EFFECTS__
      function radix2(bits, revPadding = false) {
        anumber(bits);
        if (bits <= 0 || bits > 32)
          throw new Error("radix2: bits should be in (0..32]");
        if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (bytes2) => {
            if (!isBytes(bytes2))
              throw new Error("radix2.encode input should be Uint8Array");
            return convertRadix2(Array.from(bytes2), 8, bits, !revPadding);
          },
          decode: (digits) => {
            anumArr("radix2.decode", digits);
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
          }
        };
      }
      function unsafeWrapper(fn) {
        afn(fn);
        return function(...args) {
          try {
            return fn.apply(null, args);
          } catch (e) {
          }
        };
      }
      function checksum2(len, fn) {
        anumber(len);
        afn(fn);
        return {
          encode(data) {
            if (!isBytes(data))
              throw new Error("checksum.encode: input should be Uint8Array");
            const sum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(sum, data.length);
            return res;
          },
          decode(data) {
            if (!isBytes(data))
              throw new Error("checksum.decode: input should be Uint8Array");
            const payload = data.slice(0, -len);
            const oldChecksum = data.slice(-len);
            const newChecksum = fn(payload).slice(0, len);
            for (let i = 0; i < len; i++)
              if (newChecksum[i] !== oldChecksum[i])
                throw new Error("Invalid checksum");
            return payload;
          }
        };
      }
      exports2.utils = {
        alphabet,
        chain,
        checksum: checksum2,
        convertRadix,
        convertRadix2,
        radix,
        radix2,
        join,
        padding
      };
      exports2.base16 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(4), /* @__PURE__ */ alphabet("0123456789ABCDEF"), /* @__PURE__ */ join(""));
      exports2.base32 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));
      exports2.base32nopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ join(""));
      exports2.base32hex = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));
      exports2.base32hexnopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), /* @__PURE__ */ join(""));
      exports2.base32crockford = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), /* @__PURE__ */ join(""), /* @__PURE__ */ normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
      const hasBase64Builtin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toBase64 === "function" && typeof Uint8Array.fromBase64 === "function")();
      const decodeBase64Builtin = (s, isUrl) => {
        astr("base64", s);
        const re2 = isUrl ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/;
        const alphabet2 = isUrl ? "base64url" : "base64";
        if (s.length > 0 && !re2.test(s))
          throw new Error("invalid base64");
        return Uint8Array.fromBase64(s, { alphabet: alphabet2, lastChunkHandling: "strict" });
      };
      exports2.base64 = hasBase64Builtin ? {
        encode(b) {
          abytes(b);
          return b.toBase64();
        },
        decode(s) {
          return decodeBase64Builtin(s, false);
        }
      } : /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ padding(6), /* @__PURE__ */ join(""));
      exports2.base64nopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ join(""));
      exports2.base64url = hasBase64Builtin ? {
        encode(b) {
          abytes(b);
          return b.toBase64({ alphabet: "base64url" });
        },
        decode(s) {
          return decodeBase64Builtin(s, true);
        }
      } : /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), /* @__PURE__ */ padding(6), /* @__PURE__ */ join(""));
      exports2.base64urlnopad = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(6), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), /* @__PURE__ */ join(""));
      const genBase58 = /* @__NO_SIDE_EFFECTS__ */ (abc) => /* @__PURE__ */ chain(/* @__PURE__ */ radix(58), /* @__PURE__ */ alphabet(abc), /* @__PURE__ */ join(""));
      exports2.base58 = /* @__PURE__ */ genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      exports2.base58flickr = /* @__PURE__ */ genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
      exports2.base58xrp = /* @__PURE__ */ genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
      const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
      exports2.base58xmr = {
        encode(data) {
          let res = "";
          for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += exports2.base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
          }
          return res;
        },
        decode(str) {
          let res = [];
          for (let i = 0; i < str.length; i += 11) {
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = exports2.base58.decode(slice);
            for (let j = 0; j < block.length - blockLen; j++) {
              if (block[j] !== 0)
                throw new Error("base58xmr: wrong padding");
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
          }
          return Uint8Array.from(res);
        }
      };
      const createBase58check = (sha256) => /* @__PURE__ */ chain(checksum2(4, (data) => sha256(sha256(data))), exports2.base58);
      exports2.createBase58check = createBase58check;
      exports2.base58check = exports2.createBase58check;
      const BECH_ALPHABET = /* @__PURE__ */ chain(/* @__PURE__ */ alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), /* @__PURE__ */ join(""));
      const POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function bech32Polymod(pre) {
        const b = pre >> 25;
        let chk = (pre & 33554431) << 5;
        for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
          if ((b >> i & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
        }
        return chk;
      }
      function bechChecksum(prefix, words, encodingConst = 1) {
        const len = prefix.length;
        let chk = 1;
        for (let i = 0; i < len; i++) {
          const c = prefix.charCodeAt(i);
          if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
          chk = bech32Polymod(chk) ^ c >> 5;
        }
        chk = bech32Polymod(chk);
        for (let i = 0; i < len; i++)
          chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
        for (let v2 of words)
          chk = bech32Polymod(chk) ^ v2;
        for (let i = 0; i < 6; i++)
          chk = bech32Polymod(chk);
        chk ^= encodingConst;
        return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
      }
      // @__NO_SIDE_EFFECTS__
      function genBech32(encoding) {
        const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
        const _words = /* @__PURE__ */ radix2(5);
        const fromWords = _words.decode;
        const toWords = _words.encode;
        const fromWordsUnsafe = unsafeWrapper(fromWords);
        function encode(prefix, words, limit = 90) {
          astr("bech32.encode prefix", prefix);
          if (isBytes(words))
            words = Array.from(words);
          anumArr("bech32.encode", words);
          const plen = prefix.length;
          if (plen === 0)
            throw new TypeError(`Invalid prefix length ${plen}`);
          const actualLength = plen + 7 + words.length;
          if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
          const lowered = prefix.toLowerCase();
          const sum = bechChecksum(lowered, words, ENCODING_CONST);
          return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
        }
        function decode(str, limit = 90) {
          astr("bech32.decode input", str);
          const slen = str.length;
          if (slen < 8 || limit !== false && slen > limit)
            throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
          const lowered = str.toLowerCase();
          if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
          const sepIndex = lowered.lastIndexOf("1");
          if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
          const prefix = lowered.slice(0, sepIndex);
          const data = lowered.slice(sepIndex + 1);
          if (data.length < 6)
            throw new Error("Data must be at least 6 characters long");
          const words = BECH_ALPHABET.decode(data).slice(0, -6);
          const sum = bechChecksum(prefix, words, ENCODING_CONST);
          if (!data.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
          return { prefix, words };
        }
        const decodeUnsafe = unsafeWrapper(decode);
        function decodeToBytes(str) {
          const { prefix, words } = decode(str, false);
          return { prefix, words, bytes: fromWords(words) };
        }
        function encodeFromBytes(prefix, bytes2) {
          return encode(prefix, toWords(bytes2));
        }
        return {
          encode,
          decode,
          encodeFromBytes,
          decodeToBytes,
          decodeUnsafe,
          fromWords,
          fromWordsUnsafe,
          toWords
        };
      }
      exports2.bech32 = /* @__PURE__ */ genBech32("bech32");
      exports2.bech32m = /* @__PURE__ */ genBech32("bech32m");
      exports2.utf8 = {
        encode: (data) => new TextDecoder().decode(data),
        decode: (str) => new TextEncoder().encode(str)
      };
      const hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")();
      const hexBuiltin = {
        encode(data) {
          abytes(data);
          return data.toHex();
        },
        decode(s) {
          astr("hex", s);
          return Uint8Array.fromHex(s);
        }
      };
      exports2.hex = hasHexBuiltin ? hexBuiltin : /* @__PURE__ */ chain(/* @__PURE__ */ radix2(4), /* @__PURE__ */ alphabet("0123456789abcdef"), /* @__PURE__ */ join(""), /* @__PURE__ */ normalize((s) => {
        if (typeof s !== "string" || s.length % 2 !== 0)
          throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
        return s.toLowerCase();
      }));
      const CODERS = {
        utf8: exports2.utf8,
        hex: exports2.hex,
        base16: exports2.base16,
        base32: exports2.base32,
        base64: exports2.base64,
        base64url: exports2.base64url,
        base58: exports2.base58,
        base58xmr: exports2.base58xmr
      };
      const coderTypeError = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
      const bytesToString = (type, bytes2) => {
        if (typeof type !== "string" || !CODERS.hasOwnProperty(type))
          throw new TypeError(coderTypeError);
        if (!isBytes(bytes2))
          throw new TypeError("bytesToString() expects Uint8Array");
        return CODERS[type].encode(bytes2);
      };
      exports2.bytesToString = bytesToString;
      exports2.str = exports2.bytesToString;
      const stringToBytes = (type, str) => {
        if (!CODERS.hasOwnProperty(type))
          throw new TypeError(coderTypeError);
        if (typeof str !== "string")
          throw new TypeError("stringToBytes() expects string");
        return CODERS[type].decode(str);
      };
      exports2.stringToBytes = stringToBytes;
      exports2.bytes = exports2.stringToBytes;
    })(lib);
    var hex$1 = {};
    var sha3 = {};
    var _u64 = {};
    Object.defineProperty(_u64, "__esModule", { value: true });
    _u64.toBig = _u64.shrSL = _u64.shrSH = _u64.rotrSL = _u64.rotrSH = _u64.rotrBL = _u64.rotrBH = _u64.rotr32L = _u64.rotr32H = _u64.rotlSL = _u64.rotlSH = _u64.rotlBL = _u64.rotlBH = _u64.add5L = _u64.add5H = _u64.add4L = _u64.add4H = _u64.add3L = _u64.add3H = void 0;
    _u64.add = add;
    _u64.fromBig = fromBig;
    _u64.split = split;
    const U32_MASK64 = /* @__PURE__ */ BigInt(__pow(2, 32) - 1);
    const _32n = /* @__PURE__ */ BigInt(32);
    function fromBig(n2, le2 = false) {
      if (le2)
        return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
      return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
    }
    function split(lst, le2 = false) {
      const len = lst.length;
      let Ah2 = new Uint32Array(len);
      let Al = new Uint32Array(len);
      for (let i = 0; i < len; i++) {
        const { h, l: l2 } = fromBig(lst[i], le2);
        [Ah2[i], Al[i]] = [h, l2];
      }
      return [Ah2, Al];
    }
    const toBig = (h, l2) => BigInt(h >>> 0) << _32n | BigInt(l2 >>> 0);
    _u64.toBig = toBig;
    const shrSH = (h, _l, s) => h >>> s;
    _u64.shrSH = shrSH;
    const shrSL = (h, l2, s) => h << 32 - s | l2 >>> s;
    _u64.shrSL = shrSL;
    const rotrSH = (h, l2, s) => h >>> s | l2 << 32 - s;
    _u64.rotrSH = rotrSH;
    const rotrSL = (h, l2, s) => h << 32 - s | l2 >>> s;
    _u64.rotrSL = rotrSL;
    const rotrBH = (h, l2, s) => h << 64 - s | l2 >>> s - 32;
    _u64.rotrBH = rotrBH;
    const rotrBL = (h, l2, s) => h >>> s - 32 | l2 << 64 - s;
    _u64.rotrBL = rotrBL;
    const rotr32H = (_h, l2) => l2;
    _u64.rotr32H = rotr32H;
    const rotr32L = (h, _l) => h;
    _u64.rotr32L = rotr32L;
    const rotlSH = (h, l2, s) => h << s | l2 >>> 32 - s;
    _u64.rotlSH = rotlSH;
    const rotlSL = (h, l2, s) => l2 << s | h >>> 32 - s;
    _u64.rotlSL = rotlSL;
    const rotlBH = (h, l2, s) => l2 << s - 32 | h >>> 64 - s;
    _u64.rotlBH = rotlBH;
    const rotlBL = (h, l2, s) => h << s - 32 | l2 >>> 64 - s;
    _u64.rotlBL = rotlBL;
    function add(Ah2, Al, Bh2, Bl) {
      const l2 = (Al >>> 0) + (Bl >>> 0);
      return { h: Ah2 + Bh2 + (l2 / __pow(2, 32) | 0) | 0, l: l2 | 0 };
    }
    const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    _u64.add3L = add3L;
    const add3H = (low, Ah2, Bh2, Ch2) => Ah2 + Bh2 + Ch2 + (low / __pow(2, 32) | 0) | 0;
    _u64.add3H = add3H;
    const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    _u64.add4L = add4L;
    const add4H = (low, Ah2, Bh2, Ch2, Dh2) => Ah2 + Bh2 + Ch2 + Dh2 + (low / __pow(2, 32) | 0) | 0;
    _u64.add4H = add4H;
    const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    _u64.add5L = add5L;
    const add5H = (low, Ah2, Bh2, Ch2, Dh2, Eh2) => Ah2 + Bh2 + Ch2 + Dh2 + Eh2 + (low / __pow(2, 32) | 0) | 0;
    _u64.add5H = add5H;
    const u64 = {
      fromBig,
      split,
      toBig,
      shrSH,
      shrSL,
      rotrSH,
      rotrSL,
      rotrBH,
      rotrBL,
      rotr32H,
      rotr32L,
      rotlSH,
      rotlSL,
      rotlBH,
      rotlBL,
      add,
      add3L,
      add3H,
      add4L,
      add4H,
      add5H,
      add5L
    };
    _u64.default = u64;
    var utils$1 = {};
    var crypto = {};
    Object.defineProperty(crypto, "__esModule", { value: true });
    crypto.crypto = void 0;
    crypto.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
    (function(exports2) {
      /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.wrapXOFConstructorWithOpts = exports2.wrapConstructorWithOpts = exports2.wrapConstructor = exports2.Hash = exports2.nextTick = exports2.swap32IfBE = exports2.byteSwapIfBE = exports2.swap8IfBE = exports2.isLE = void 0;
      exports2.isBytes = isBytes;
      exports2.anumber = anumber;
      exports2.abytes = abytes;
      exports2.ahash = ahash;
      exports2.aexists = aexists;
      exports2.aoutput = aoutput;
      exports2.u8 = u8;
      exports2.u32 = u32;
      exports2.clean = clean;
      exports2.createView = createView;
      exports2.rotr = rotr;
      exports2.rotl = rotl;
      exports2.byteSwap = byteSwap;
      exports2.byteSwap32 = byteSwap32;
      exports2.bytesToHex = bytesToHex;
      exports2.hexToBytes = hexToBytes;
      exports2.asyncLoop = asyncLoop;
      exports2.utf8ToBytes = utf8ToBytes;
      exports2.bytesToUtf8 = bytesToUtf8;
      exports2.toBytes = toBytes;
      exports2.kdfInputToBytes = kdfInputToBytes;
      exports2.concatBytes = concatBytes;
      exports2.checkOpts = checkOpts;
      exports2.createHasher = createHasher;
      exports2.createOptHasher = createOptHasher;
      exports2.createXOFer = createXOFer;
      exports2.randomBytes = randomBytes;
      const crypto_1 = crypto;
      function isBytes(a) {
        return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
      }
      function anumber(n2) {
        if (!Number.isSafeInteger(n2) || n2 < 0)
          throw new Error("positive integer expected, got " + n2);
      }
      function abytes(b, ...lengths) {
        if (!isBytes(b))
          throw new Error("Uint8Array expected");
        if (lengths.length > 0 && !lengths.includes(b.length))
          throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
      }
      function ahash(h) {
        if (typeof h !== "function" || typeof h.create !== "function")
          throw new Error("Hash should be wrapped by utils.createHasher");
        anumber(h.outputLen);
        anumber(h.blockLen);
      }
      function aexists(instance, checkFinished = true) {
        if (instance.destroyed)
          throw new Error("Hash instance has been destroyed");
        if (checkFinished && instance.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function aoutput(out, instance) {
        abytes(out);
        const min2 = instance.outputLen;
        if (out.length < min2) {
          throw new Error("digestInto() expects output buffer of length at least " + min2);
        }
      }
      function u8(arr2) {
        return new Uint8Array(arr2.buffer, arr2.byteOffset, arr2.byteLength);
      }
      function u32(arr2) {
        return new Uint32Array(arr2.buffer, arr2.byteOffset, Math.floor(arr2.byteLength / 4));
      }
      function clean(...arrays) {
        for (let i = 0; i < arrays.length; i++) {
          arrays[i].fill(0);
        }
      }
      function createView(arr2) {
        return new DataView(arr2.buffer, arr2.byteOffset, arr2.byteLength);
      }
      function rotr(word, shift) {
        return word << 32 - shift | word >>> shift;
      }
      function rotl(word, shift) {
        return word << shift | word >>> 32 - shift >>> 0;
      }
      exports2.isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
      function byteSwap(word) {
        return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
      }
      exports2.swap8IfBE = exports2.isLE ? (n2) => n2 : (n2) => byteSwap(n2);
      exports2.byteSwapIfBE = exports2.swap8IfBE;
      function byteSwap32(arr2) {
        for (let i = 0; i < arr2.length; i++) {
          arr2[i] = byteSwap(arr2[i]);
        }
        return arr2;
      }
      exports2.swap32IfBE = exports2.isLE ? (u2) => u2 : byteSwap32;
      const hasHexBuiltin = /* @__PURE__ */ (() => (
        // @ts-ignore
        typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
      ))();
      const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
      function bytesToHex(bytes2) {
        abytes(bytes2);
        if (hasHexBuiltin)
          return bytes2.toHex();
        let hex2 = "";
        for (let i = 0; i < bytes2.length; i++) {
          hex2 += hexes[bytes2[i]];
        }
        return hex2;
      }
      const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function asciiToBase16(ch2) {
        if (ch2 >= asciis._0 && ch2 <= asciis._9)
          return ch2 - asciis._0;
        if (ch2 >= asciis.A && ch2 <= asciis.F)
          return ch2 - (asciis.A - 10);
        if (ch2 >= asciis.a && ch2 <= asciis.f)
          return ch2 - (asciis.a - 10);
        return;
      }
      function hexToBytes(hex2) {
        if (typeof hex2 !== "string")
          throw new Error("hex string expected, got " + typeof hex2);
        if (hasHexBuiltin)
          return Uint8Array.fromHex(hex2);
        const hl2 = hex2.length;
        const al2 = hl2 / 2;
        if (hl2 % 2)
          throw new Error("hex string expected, got unpadded hex of length " + hl2);
        const array = new Uint8Array(al2);
        for (let ai2 = 0, hi2 = 0; ai2 < al2; ai2++, hi2 += 2) {
          const n1 = asciiToBase16(hex2.charCodeAt(hi2));
          const n2 = asciiToBase16(hex2.charCodeAt(hi2 + 1));
          if (n1 === void 0 || n2 === void 0) {
            const char = hex2[hi2] + hex2[hi2 + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi2);
          }
          array[ai2] = n1 * 16 + n2;
        }
        return array;
      }
      const nextTick = () => __async(this, null, function* () {
      });
      exports2.nextTick = nextTick;
      function asyncLoop(iters, tick, cb2) {
        return __async(this, null, function* () {
          let ts = Date.now();
          for (let i = 0; i < iters; i++) {
            cb2(i);
            const diff = Date.now() - ts;
            if (diff >= 0 && diff < tick)
              continue;
            yield (0, exports2.nextTick)();
            ts += diff;
          }
        });
      }
      function utf8ToBytes(str) {
        if (typeof str !== "string")
          throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(str));
      }
      function bytesToUtf8(bytes2) {
        return new TextDecoder().decode(bytes2);
      }
      function toBytes(data) {
        if (typeof data === "string")
          data = utf8ToBytes(data);
        abytes(data);
        return data;
      }
      function kdfInputToBytes(data) {
        if (typeof data === "string")
          data = utf8ToBytes(data);
        abytes(data);
        return data;
      }
      function concatBytes(...arrays) {
        let sum = 0;
        for (let i = 0; i < arrays.length; i++) {
          const a = arrays[i];
          abytes(a);
          sum += a.length;
        }
        const res = new Uint8Array(sum);
        for (let i = 0, pad = 0; i < arrays.length; i++) {
          const a = arrays[i];
          res.set(a, pad);
          pad += a.length;
        }
        return res;
      }
      function checkOpts(defaults, opts) {
        if (opts !== void 0 && {}.toString.call(opts) !== "[object Object]")
          throw new Error("options should be object or undefined");
        const merged = Object.assign(defaults, opts);
        return merged;
      }
      class Hash {
      }
      exports2.Hash = Hash;
      function createHasher(hashCons) {
        const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
        const tmp = hashCons();
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = () => hashCons();
        return hashC;
      }
      function createOptHasher(hashCons) {
        const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
        const tmp = hashCons({});
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = (opts) => hashCons(opts);
        return hashC;
      }
      function createXOFer(hashCons) {
        const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
        const tmp = hashCons({});
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = (opts) => hashCons(opts);
        return hashC;
      }
      exports2.wrapConstructor = createHasher;
      exports2.wrapConstructorWithOpts = createOptHasher;
      exports2.wrapXOFConstructorWithOpts = createXOFer;
      function randomBytes(bytesLength = 32) {
        if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
          return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
        }
        if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === "function") {
          return Uint8Array.from(crypto_1.crypto.randomBytes(bytesLength));
        }
        throw new Error("crypto.getRandomValues must be defined");
      }
    })(utils$1);
    Object.defineProperty(sha3, "__esModule", { value: true });
    sha3.shake256 = sha3.shake128 = sha3.keccak_512 = sha3.keccak_384 = sha3.keccak_256 = sha3.keccak_224 = sha3.sha3_512 = sha3.sha3_384 = sha3.sha3_256 = sha3.sha3_224 = sha3.Keccak = void 0;
    sha3.keccakP = keccakP;
    const _u64_ts_1 = _u64;
    const utils_ts_1 = utils$1;
    const _0n = BigInt(0);
    const _1n = BigInt(1);
    const _2n = BigInt(2);
    const _7n = BigInt(7);
    const _256n = BigInt(256);
    const _0x71n = BigInt(113);
    const SHA3_PI = [];
    const SHA3_ROTL = [];
    const _SHA3_IOTA = [];
    for (let round = 0, R2 = _1n, x2 = 1, y2 = 0; round < 24; round++) {
      [x2, y2] = [y2, (2 * x2 + 3 * y2) % 5];
      SHA3_PI.push(2 * (5 * y2 + x2));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t2 = _0n;
      for (let j = 0; j < 7; j++) {
        R2 = (R2 << _1n ^ (R2 >> _7n) * _0x71n) % _256n;
        if (R2 & _2n)
          t2 ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t2);
    }
    const IOTAS = (0, _u64_ts_1.split)(_SHA3_IOTA, true);
    const SHA3_IOTA_H = IOTAS[0];
    const SHA3_IOTA_L = IOTAS[1];
    const rotlH = (h, l2, s) => s > 32 ? (0, _u64_ts_1.rotlBH)(h, l2, s) : (0, _u64_ts_1.rotlSH)(h, l2, s);
    const rotlL = (h, l2, s) => s > 32 ? (0, _u64_ts_1.rotlBL)(h, l2, s) : (0, _u64_ts_1.rotlSL)(h, l2, s);
    function keccakP(s, rounds = 24) {
      const B2 = new Uint32Array(5 * 2);
      for (let round = 24 - rounds; round < 24; round++) {
        for (let x2 = 0; x2 < 10; x2++)
          B2[x2] = s[x2] ^ s[x2 + 10] ^ s[x2 + 20] ^ s[x2 + 30] ^ s[x2 + 40];
        for (let x2 = 0; x2 < 10; x2 += 2) {
          const idx1 = (x2 + 8) % 10;
          const idx0 = (x2 + 2) % 10;
          const B0 = B2[idx0];
          const B1 = B2[idx0 + 1];
          const Th2 = rotlH(B0, B1, 1) ^ B2[idx1];
          const Tl = rotlL(B0, B1, 1) ^ B2[idx1 + 1];
          for (let y2 = 0; y2 < 50; y2 += 10) {
            s[x2 + y2] ^= Th2;
            s[x2 + y2 + 1] ^= Tl;
          }
        }
        let curH = s[2];
        let curL = s[3];
        for (let t2 = 0; t2 < 24; t2++) {
          const shift = SHA3_ROTL[t2];
          const Th2 = rotlH(curH, curL, shift);
          const Tl = rotlL(curH, curL, shift);
          const PI = SHA3_PI[t2];
          curH = s[PI];
          curL = s[PI + 1];
          s[PI] = Th2;
          s[PI + 1] = Tl;
        }
        for (let y2 = 0; y2 < 50; y2 += 10) {
          for (let x2 = 0; x2 < 10; x2++)
            B2[x2] = s[y2 + x2];
          for (let x2 = 0; x2 < 10; x2++)
            s[y2 + x2] ^= ~B2[(x2 + 2) % 10] & B2[(x2 + 4) % 10];
        }
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
      }
      (0, utils_ts_1.clean)(B2);
    }
    class Keccak extends utils_ts_1.Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        (0, utils_ts_1.anumber)(outputLen);
        if (!(0 < blockLen && blockLen < 200))
          throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_ts_1.u32)(this.state);
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        (0, utils_ts_1.swap32IfBE)(this.state32);
        keccakP(this.state32, this.rounds);
        (0, utils_ts_1.swap32IfBE)(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        (0, utils_ts_1.aexists)(this);
        data = (0, utils_ts_1.toBytes)(data);
        (0, utils_ts_1.abytes)(data);
        const { blockLen, state: state2 } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state2[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state: state2, suffix, pos, blockLen } = this;
        state2[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state2[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        (0, utils_ts_1.aexists)(this, false);
        (0, utils_ts_1.abytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes2) {
        (0, utils_ts_1.anumber)(bytes2);
        return this.xofInto(new Uint8Array(bytes2));
      }
      digestInto(out) {
        (0, utils_ts_1.aoutput)(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        (0, utils_ts_1.clean)(this.state);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    }
    sha3.Keccak = Keccak;
    const gen = (suffix, blockLen, outputLen) => (0, utils_ts_1.createHasher)(() => new Keccak(blockLen, suffix, outputLen));
    sha3.sha3_224 = (() => gen(6, 144, 224 / 8))();
    sha3.sha3_256 = (() => gen(6, 136, 256 / 8))();
    sha3.sha3_384 = (() => gen(6, 104, 384 / 8))();
    sha3.sha3_512 = (() => gen(6, 72, 512 / 8))();
    sha3.keccak_224 = (() => gen(1, 144, 224 / 8))();
    sha3.keccak_256 = (() => gen(1, 136, 256 / 8))();
    sha3.keccak_384 = (() => gen(1, 104, 384 / 8))();
    sha3.keccak_512 = (() => gen(1, 72, 512 / 8))();
    const genShake = (suffix, blockLen, outputLen) => (0, utils_ts_1.createXOFer)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    sha3.shake128 = (() => genShake(31, 168, 128 / 8))();
    sha3.shake256 = (() => genShake(31, 136, 256 / 8))();
    var hasRequiredHex$1;
    function requireHex$1() {
      if (hasRequiredHex$1) return hex$1;
      hasRequiredHex$1 = 1;
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.remove0x = exports2.add0x = exports2.isValidChecksumAddress = exports2.getChecksumAddress = exports2.isValidHexAddress = exports2.assertIsStrictHexString = exports2.assertIsHexString = exports2.isStrictHexString = exports2.isHexString = exports2.HexChecksumAddressStruct = exports2.HexAddressStruct = exports2.StrictHexStruct = exports2.HexStruct = void 0;
        const superstruct_12 = dist$4;
        const sha3_1 = sha3;
        const assert_12 = assert$4;
        const bytes_12 = requireBytes$1();
        exports2.HexStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^(?:0x)?[0-9a-f]+$/iu);
        exports2.StrictHexStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^0x[0-9a-f]+$/iu);
        exports2.HexAddressStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^0x[0-9a-f]{40}$/u);
        exports2.HexChecksumAddressStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^0x[0-9a-fA-F]{40}$/u);
        function isHexString(value) {
          return (0, superstruct_12.is)(value, exports2.HexStruct);
        }
        exports2.isHexString = isHexString;
        function isStrictHexString(value) {
          return (0, superstruct_12.is)(value, exports2.StrictHexStruct);
        }
        exports2.isStrictHexString = isStrictHexString;
        function assertIsHexString(value) {
          (0, assert_12.assert)(isHexString(value), "Value must be a hexadecimal string.");
        }
        exports2.assertIsHexString = assertIsHexString;
        function assertIsStrictHexString(value) {
          (0, assert_12.assert)(isStrictHexString(value), 'Value must be a hexadecimal string, starting with "0x".');
        }
        exports2.assertIsStrictHexString = assertIsStrictHexString;
        function isValidHexAddress(possibleAddress) {
          return (0, superstruct_12.is)(possibleAddress, exports2.HexAddressStruct) || isValidChecksumAddress(possibleAddress);
        }
        exports2.isValidHexAddress = isValidHexAddress;
        function getChecksumAddress(address) {
          (0, assert_12.assert)((0, superstruct_12.is)(address, exports2.HexChecksumAddressStruct), "Invalid hex address.");
          const unPrefixed = remove0x(address.toLowerCase());
          const unPrefixedHash = remove0x((0, bytes_12.bytesToHex)((0, sha3_1.keccak_256)(unPrefixed)));
          return `0x${unPrefixed.split("").map((character, nibbleIndex) => {
            const hashCharacter = unPrefixedHash[nibbleIndex];
            (0, assert_12.assert)((0, superstruct_12.is)(hashCharacter, (0, superstruct_12.string)()), "Hash shorter than address.");
            return parseInt(hashCharacter, 16) > 7 ? character.toUpperCase() : character;
          }).join("")}`;
        }
        exports2.getChecksumAddress = getChecksumAddress;
        function isValidChecksumAddress(possibleChecksum) {
          if (!(0, superstruct_12.is)(possibleChecksum, exports2.HexChecksumAddressStruct)) {
            return false;
          }
          return getChecksumAddress(possibleChecksum) === possibleChecksum;
        }
        exports2.isValidChecksumAddress = isValidChecksumAddress;
        function add0x(hexadecimal) {
          if (hexadecimal.startsWith("0x")) {
            return hexadecimal;
          }
          if (hexadecimal.startsWith("0X")) {
            return `0x${hexadecimal.substring(2)}`;
          }
          return `0x${hexadecimal}`;
        }
        exports2.add0x = add0x;
        function remove0x(hexadecimal) {
          if (hexadecimal.startsWith("0x") || hexadecimal.startsWith("0X")) {
            return hexadecimal.substring(2);
          }
          return hexadecimal;
        }
        exports2.remove0x = remove0x;
      })(hex$1);
      return hex$1;
    }
    var hasRequiredBytes$1;
    function requireBytes$1() {
      if (hasRequiredBytes$1) return bytes$1;
      hasRequiredBytes$1 = 1;
      Object.defineProperty(bytes$1, "__esModule", { value: true });
      bytes$1.createDataView = bytes$1.concatBytes = bytes$1.valueToBytes = bytes$1.base64ToBytes = bytes$1.stringToBytes = bytes$1.numberToBytes = bytes$1.signedBigIntToBytes = bytes$1.bigIntToBytes = bytes$1.hexToBytes = bytes$1.bytesToBase64 = bytes$1.bytesToString = bytes$1.bytesToNumber = bytes$1.bytesToSignedBigInt = bytes$1.bytesToBigInt = bytes$1.bytesToHex = bytes$1.assertIsBytes = bytes$1.isBytes = void 0;
      const base_1 = lib;
      const assert_12 = assert$4;
      const hex_12 = requireHex$1();
      const HEX_MINIMUM_NUMBER_CHARACTER = 48;
      const HEX_MAXIMUM_NUMBER_CHARACTER = 58;
      const HEX_CHARACTER_OFFSET = 87;
      function getPrecomputedHexValuesBuilder() {
        const lookupTable = [];
        return () => {
          if (lookupTable.length === 0) {
            for (let i = 0; i < 256; i++) {
              lookupTable.push(i.toString(16).padStart(2, "0"));
            }
          }
          return lookupTable;
        };
      }
      const getPrecomputedHexValues = getPrecomputedHexValuesBuilder();
      function isBytes(value) {
        return value instanceof Uint8Array;
      }
      bytes$1.isBytes = isBytes;
      function assertIsBytes(value) {
        (0, assert_12.assert)(isBytes(value), "Value must be a Uint8Array.");
      }
      bytes$1.assertIsBytes = assertIsBytes;
      function bytesToHex(bytes2) {
        assertIsBytes(bytes2);
        if (bytes2.length === 0) {
          return "0x";
        }
        const lookupTable = getPrecomputedHexValues();
        const hexadecimal = new Array(bytes2.length);
        for (let i = 0; i < bytes2.length; i++) {
          hexadecimal[i] = lookupTable[bytes2[i]];
        }
        return (0, hex_12.add0x)(hexadecimal.join(""));
      }
      bytes$1.bytesToHex = bytesToHex;
      function bytesToBigInt(bytes2) {
        assertIsBytes(bytes2);
        const hexadecimal = bytesToHex(bytes2);
        return BigInt(hexadecimal);
      }
      bytes$1.bytesToBigInt = bytesToBigInt;
      function bytesToSignedBigInt(bytes2) {
        assertIsBytes(bytes2);
        let value = BigInt(0);
        for (const byte of bytes2) {
          value = (value << BigInt(8)) + BigInt(byte);
        }
        return BigInt.asIntN(bytes2.length * 8, value);
      }
      bytes$1.bytesToSignedBigInt = bytesToSignedBigInt;
      function bytesToNumber(bytes2) {
        assertIsBytes(bytes2);
        const bigint = bytesToBigInt(bytes2);
        (0, assert_12.assert)(bigint <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead.");
        return Number(bigint);
      }
      bytes$1.bytesToNumber = bytesToNumber;
      function bytesToString(bytes2) {
        assertIsBytes(bytes2);
        return new TextDecoder().decode(bytes2);
      }
      bytes$1.bytesToString = bytesToString;
      function bytesToBase64(bytes2) {
        assertIsBytes(bytes2);
        return base_1.base64.encode(bytes2);
      }
      bytes$1.bytesToBase64 = bytesToBase64;
      function hexToBytes(value) {
        var _a;
        if (((_a = value == null ? void 0 : value.toLowerCase) == null ? void 0 : _a.call(value)) === "0x") {
          return new Uint8Array();
        }
        (0, hex_12.assertIsHexString)(value);
        const strippedValue = (0, hex_12.remove0x)(value).toLowerCase();
        const normalizedValue = strippedValue.length % 2 === 0 ? strippedValue : `0${strippedValue}`;
        const bytes2 = new Uint8Array(normalizedValue.length / 2);
        for (let i = 0; i < bytes2.length; i++) {
          const c1 = normalizedValue.charCodeAt(i * 2);
          const c2 = normalizedValue.charCodeAt(i * 2 + 1);
          const n1 = c1 - (c1 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
          const n2 = c2 - (c2 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
          bytes2[i] = n1 * 16 + n2;
        }
        return bytes2;
      }
      bytes$1.hexToBytes = hexToBytes;
      function bigIntToBytes(value) {
        (0, assert_12.assert)(typeof value === "bigint", "Value must be a bigint.");
        (0, assert_12.assert)(value >= BigInt(0), "Value must be a non-negative bigint.");
        const hexadecimal = value.toString(16);
        return hexToBytes(hexadecimal);
      }
      bytes$1.bigIntToBytes = bigIntToBytes;
      function bigIntFits(value, bytes2) {
        (0, assert_12.assert)(bytes2 > 0);
        const mask2 = value >> BigInt(31);
        return !((~value & mask2) + (value & ~mask2) >> BigInt(bytes2 * 8 + -1));
      }
      function signedBigIntToBytes(value, byteLength) {
        (0, assert_12.assert)(typeof value === "bigint", "Value must be a bigint.");
        (0, assert_12.assert)(typeof byteLength === "number", "Byte length must be a number.");
        (0, assert_12.assert)(byteLength > 0, "Byte length must be greater than 0.");
        (0, assert_12.assert)(bigIntFits(value, byteLength), "Byte length is too small to represent the given value.");
        let numberValue = value;
        const bytes2 = new Uint8Array(byteLength);
        for (let i = 0; i < bytes2.length; i++) {
          bytes2[i] = Number(BigInt.asUintN(8, numberValue));
          numberValue >>= BigInt(8);
        }
        return bytes2.reverse();
      }
      bytes$1.signedBigIntToBytes = signedBigIntToBytes;
      function numberToBytes(value) {
        (0, assert_12.assert)(typeof value === "number", "Value must be a number.");
        (0, assert_12.assert)(value >= 0, "Value must be a non-negative number.");
        (0, assert_12.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToBytes` instead.");
        const hexadecimal = value.toString(16);
        return hexToBytes(hexadecimal);
      }
      bytes$1.numberToBytes = numberToBytes;
      function stringToBytes(value) {
        (0, assert_12.assert)(typeof value === "string", "Value must be a string.");
        return new TextEncoder().encode(value);
      }
      bytes$1.stringToBytes = stringToBytes;
      function base64ToBytes(value) {
        (0, assert_12.assert)(typeof value === "string", "Value must be a string.");
        return base_1.base64.decode(value);
      }
      bytes$1.base64ToBytes = base64ToBytes;
      function valueToBytes(value) {
        if (typeof value === "bigint") {
          return bigIntToBytes(value);
        }
        if (typeof value === "number") {
          return numberToBytes(value);
        }
        if (typeof value === "string") {
          if (value.startsWith("0x")) {
            return hexToBytes(value);
          }
          return stringToBytes(value);
        }
        if (isBytes(value)) {
          return value;
        }
        throw new TypeError(`Unsupported value type: "${typeof value}".`);
      }
      bytes$1.valueToBytes = valueToBytes;
      function concatBytes(values) {
        const normalizedValues = new Array(values.length);
        let byteLength = 0;
        for (let i = 0; i < values.length; i++) {
          const value = valueToBytes(values[i]);
          normalizedValues[i] = value;
          byteLength += value.length;
        }
        const bytes2 = new Uint8Array(byteLength);
        for (let i = 0, offset = 0; i < normalizedValues.length; i++) {
          bytes2.set(normalizedValues[i], offset);
          offset += normalizedValues[i].length;
        }
        return bytes2;
      }
      bytes$1.concatBytes = concatBytes;
      function createDataView(bytes2) {
        if (typeof Buffer !== "undefined" && bytes2 instanceof Buffer) {
          const buffer = bytes2.buffer.slice(bytes2.byteOffset, bytes2.byteOffset + bytes2.byteLength);
          return new DataView(buffer);
        }
        return new DataView(bytes2.buffer, bytes2.byteOffset, bytes2.byteLength);
      }
      bytes$1.createDataView = createDataView;
      return bytes$1;
    }
    var caipTypes$1 = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.toCaipChainId = exports2.parseCaipAccountId = exports2.parseCaipChainId = exports2.isCaipAssetId = exports2.isCaipAssetType = exports2.isCaipAccountAddress = exports2.isCaipAccountId = exports2.isCaipReference = exports2.isCaipNamespace = exports2.isCaipChainId = exports2.KnownCaipNamespace = exports2.CaipAssetIdStruct = exports2.CaipAssetTypeStruct = exports2.CaipAccountAddressStruct = exports2.CaipAccountIdStruct = exports2.CaipReferenceStruct = exports2.CaipNamespaceStruct = exports2.CaipChainIdStruct = exports2.CAIP_ASSET_ID_REGEX = exports2.CAIP_ASSET_TYPE_REGEX = exports2.CAIP_ACCOUNT_ADDRESS_REGEX = exports2.CAIP_ACCOUNT_ID_REGEX = exports2.CAIP_REFERENCE_REGEX = exports2.CAIP_NAMESPACE_REGEX = exports2.CAIP_CHAIN_ID_REGEX = void 0;
      const superstruct_12 = dist$4;
      exports2.CAIP_CHAIN_ID_REGEX = new RegExp("^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$", "u");
      exports2.CAIP_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u;
      exports2.CAIP_REFERENCE_REGEX = /^[-_a-zA-Z0-9]{1,32}$/u;
      exports2.CAIP_ACCOUNT_ID_REGEX = new RegExp("^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$", "u");
      exports2.CAIP_ACCOUNT_ADDRESS_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u;
      exports2.CAIP_ASSET_TYPE_REGEX = new RegExp("^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})$", "u");
      exports2.CAIP_ASSET_ID_REGEX = new RegExp("^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})\\/(?<tokenId>[-.%a-zA-Z0-9]{1,78})$", "u");
      exports2.CaipChainIdStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_CHAIN_ID_REGEX);
      exports2.CaipNamespaceStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_NAMESPACE_REGEX);
      exports2.CaipReferenceStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_REFERENCE_REGEX);
      exports2.CaipAccountIdStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_ACCOUNT_ID_REGEX);
      exports2.CaipAccountAddressStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_ACCOUNT_ADDRESS_REGEX);
      exports2.CaipAssetTypeStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_ASSET_TYPE_REGEX);
      exports2.CaipAssetIdStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_ASSET_ID_REGEX);
      (function(KnownCaipNamespace) {
        KnownCaipNamespace["Bip122"] = "bip122";
        KnownCaipNamespace["Eip155"] = "eip155";
        KnownCaipNamespace["Wallet"] = "wallet";
      })(exports2.KnownCaipNamespace || (exports2.KnownCaipNamespace = {}));
      function isCaipChainId(value) {
        return (0, superstruct_12.is)(value, exports2.CaipChainIdStruct);
      }
      exports2.isCaipChainId = isCaipChainId;
      function isCaipNamespace(value) {
        return (0, superstruct_12.is)(value, exports2.CaipNamespaceStruct);
      }
      exports2.isCaipNamespace = isCaipNamespace;
      function isCaipReference(value) {
        return (0, superstruct_12.is)(value, exports2.CaipReferenceStruct);
      }
      exports2.isCaipReference = isCaipReference;
      function isCaipAccountId(value) {
        return (0, superstruct_12.is)(value, exports2.CaipAccountIdStruct);
      }
      exports2.isCaipAccountId = isCaipAccountId;
      function isCaipAccountAddress(value) {
        return (0, superstruct_12.is)(value, exports2.CaipAccountAddressStruct);
      }
      exports2.isCaipAccountAddress = isCaipAccountAddress;
      function isCaipAssetType(value) {
        return (0, superstruct_12.is)(value, exports2.CaipAssetTypeStruct);
      }
      exports2.isCaipAssetType = isCaipAssetType;
      function isCaipAssetId(value) {
        return (0, superstruct_12.is)(value, exports2.CaipAssetIdStruct);
      }
      exports2.isCaipAssetId = isCaipAssetId;
      function parseCaipChainId(caipChainId) {
        const match = exports2.CAIP_CHAIN_ID_REGEX.exec(caipChainId);
        if (!(match == null ? void 0 : match.groups)) {
          throw new Error("Invalid CAIP chain ID.");
        }
        return {
          namespace: match.groups.namespace,
          reference: match.groups.reference
        };
      }
      exports2.parseCaipChainId = parseCaipChainId;
      function parseCaipAccountId(caipAccountId) {
        const match = exports2.CAIP_ACCOUNT_ID_REGEX.exec(caipAccountId);
        if (!(match == null ? void 0 : match.groups)) {
          throw new Error("Invalid CAIP account ID.");
        }
        return {
          address: match.groups.accountAddress,
          chainId: match.groups.chainId,
          chain: {
            namespace: match.groups.namespace,
            reference: match.groups.reference
          }
        };
      }
      exports2.parseCaipAccountId = parseCaipAccountId;
      function toCaipChainId(namespace, reference) {
        if (!isCaipNamespace(namespace)) {
          throw new Error(`Invalid "namespace", must match: ${exports2.CAIP_NAMESPACE_REGEX.toString()}`);
        }
        if (!isCaipReference(reference)) {
          throw new Error(`Invalid "reference", must match: ${exports2.CAIP_REFERENCE_REGEX.toString()}`);
        }
        return `${namespace}:${reference}`;
      }
      exports2.toCaipChainId = toCaipChainId;
    })(caipTypes$1);
    var checksum$1 = {};
    Object.defineProperty(checksum$1, "__esModule", { value: true });
    checksum$1.ChecksumStruct = void 0;
    const superstruct_1$5 = dist$4;
    const base64_1$1 = base64$3;
    checksum$1.ChecksumStruct = (0, superstruct_1$5.size)((0, base64_1$1.base64)((0, superstruct_1$5.string)(), { paddingRequired: true }), 44, 44);
    var coercers$1 = {};
    Object.defineProperty(coercers$1, "__esModule", { value: true });
    coercers$1.createHex = coercers$1.createBytes = coercers$1.createBigInt = coercers$1.createNumber = void 0;
    const superstruct_1$4 = dist$4;
    const assert_1$4 = assert$4;
    const bytes_1$1 = requireBytes$1();
    const hex_1$3 = requireHex$1();
    const NumberLikeStruct$1 = (0, superstruct_1$4.union)([(0, superstruct_1$4.number)(), (0, superstruct_1$4.bigint)(), (0, superstruct_1$4.string)(), hex_1$3.StrictHexStruct]);
    const NumberCoercer$1 = (0, superstruct_1$4.coerce)((0, superstruct_1$4.number)(), NumberLikeStruct$1, Number);
    const BigIntCoercer$1 = (0, superstruct_1$4.coerce)((0, superstruct_1$4.bigint)(), NumberLikeStruct$1, BigInt);
    (0, superstruct_1$4.union)([hex_1$3.StrictHexStruct, (0, superstruct_1$4.instance)(Uint8Array)]);
    const BytesCoercer$1 = (0, superstruct_1$4.coerce)((0, superstruct_1$4.instance)(Uint8Array), (0, superstruct_1$4.union)([hex_1$3.StrictHexStruct]), bytes_1$1.hexToBytes);
    const HexCoercer$1 = (0, superstruct_1$4.coerce)(hex_1$3.StrictHexStruct, (0, superstruct_1$4.instance)(Uint8Array), bytes_1$1.bytesToHex);
    function createNumber$1(value) {
      try {
        const result = (0, superstruct_1$4.create)(value, NumberCoercer$1);
        (0, assert_1$4.assert)(Number.isFinite(result), `Expected a number-like value, got "${value}".`);
        return result;
      } catch (error2) {
        if (error2 instanceof superstruct_1$4.StructError) {
          throw new Error(`Expected a number-like value, got "${value}".`);
        }
        throw error2;
      }
    }
    coercers$1.createNumber = createNumber$1;
    function createBigInt$1(value) {
      try {
        return (0, superstruct_1$4.create)(value, BigIntCoercer$1);
      } catch (error2) {
        if (error2 instanceof superstruct_1$4.StructError) {
          throw new Error(`Expected a number-like value, got "${String(error2.value)}".`);
        }
        throw error2;
      }
    }
    coercers$1.createBigInt = createBigInt$1;
    function createBytes$1(value) {
      if (typeof value === "string" && value.toLowerCase() === "0x") {
        return new Uint8Array();
      }
      try {
        return (0, superstruct_1$4.create)(value, BytesCoercer$1);
      } catch (error2) {
        if (error2 instanceof superstruct_1$4.StructError) {
          throw new Error(`Expected a bytes-like value, got "${String(error2.value)}".`);
        }
        throw error2;
      }
    }
    coercers$1.createBytes = createBytes$1;
    function createHex$1(value) {
      if (value instanceof Uint8Array && value.length === 0 || typeof value === "string" && value.toLowerCase() === "0x") {
        return "0x";
      }
      try {
        return (0, superstruct_1$4.create)(value, HexCoercer$1);
      } catch (error2) {
        if (error2 instanceof superstruct_1$4.StructError) {
          throw new Error(`Expected a bytes-like value, got "${String(error2.value)}".`);
        }
        throw error2;
      }
    }
    coercers$1.createHex = createHex$1;
    var collections$1 = {};
    var __classPrivateFieldGet$1 = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function(receiver, state2, kind, f2) {
      if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
    };
    var __classPrivateFieldSet$1 = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function(receiver, state2, value, kind, f2) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
    };
    var _FrozenMap_map$1, _FrozenSet_set$1;
    Object.defineProperty(collections$1, "__esModule", { value: true });
    collections$1.FrozenSet = collections$1.FrozenMap = void 0;
    let FrozenMap$1 = class FrozenMap {
      get size() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").size;
      }
      [(_FrozenMap_map$1 = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f")[Symbol.iterator]();
      }
      constructor(entries) {
        _FrozenMap_map$1.set(this, void 0);
        __classPrivateFieldSet$1(this, _FrozenMap_map$1, new Map(entries), "f");
        Object.freeze(this);
      }
      entries() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").entries();
      }
      forEach(callbackfn, thisArg) {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").forEach((value, key, _map) => callbackfn.call(thisArg, value, key, this));
      }
      get(key) {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").get(key);
      }
      has(key) {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").has(key);
      }
      keys() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").keys();
      }
      values() {
        return __classPrivateFieldGet$1(this, _FrozenMap_map$1, "f").values();
      }
      toString() {
        return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([key, value]) => `${String(key)} => ${String(value)}`).join(", ")} ` : ""}}`;
      }
    };
    collections$1.FrozenMap = FrozenMap$1;
    let FrozenSet$1 = class FrozenSet {
      get size() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f").size;
      }
      [(_FrozenSet_set$1 = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f")[Symbol.iterator]();
      }
      constructor(values) {
        _FrozenSet_set$1.set(this, void 0);
        __classPrivateFieldSet$1(this, _FrozenSet_set$1, new Set(values), "f");
        Object.freeze(this);
      }
      entries() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f").entries();
      }
      forEach(callbackfn, thisArg) {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f").forEach((value, value2, _set) => callbackfn.call(thisArg, value, value2, this));
      }
      has(value) {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f").has(value);
      }
      keys() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f").keys();
      }
      values() {
        return __classPrivateFieldGet$1(this, _FrozenSet_set$1, "f").values();
      }
      toString() {
        return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((member) => String(member)).join(", ")} ` : ""}}`;
      }
    };
    collections$1.FrozenSet = FrozenSet$1;
    Object.freeze(FrozenMap$1);
    Object.freeze(FrozenMap$1.prototype);
    Object.freeze(FrozenSet$1);
    Object.freeze(FrozenSet$1.prototype);
    var encryptionTypes$1 = {};
    Object.defineProperty(encryptionTypes$1, "__esModule", { value: true });
    var json$1 = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getJsonRpcIdValidator = exports2.assertIsJsonRpcError = exports2.isJsonRpcError = exports2.assertIsJsonRpcFailure = exports2.isJsonRpcFailure = exports2.assertIsJsonRpcSuccess = exports2.isJsonRpcSuccess = exports2.assertIsJsonRpcResponse = exports2.isJsonRpcResponse = exports2.assertIsPendingJsonRpcResponse = exports2.isPendingJsonRpcResponse = exports2.JsonRpcResponseStruct = exports2.JsonRpcFailureStruct = exports2.JsonRpcSuccessStruct = exports2.PendingJsonRpcResponseStruct = exports2.assertIsJsonRpcRequest = exports2.isJsonRpcRequest = exports2.assertIsJsonRpcNotification = exports2.isJsonRpcNotification = exports2.JsonRpcNotificationStruct = exports2.JsonRpcRequestStruct = exports2.JsonRpcParamsStruct = exports2.JsonRpcErrorStruct = exports2.JsonRpcIdStruct = exports2.JsonRpcVersionStruct = exports2.jsonrpc2 = exports2.getJsonSize = exports2.getSafeJson = exports2.isValidJson = exports2.JsonStruct = exports2.UnsafeJsonStruct = exports2.exactOptional = exports2.object = void 0;
      const superstruct_12 = dist$4;
      const assert_12 = assert$4;
      const misc_12 = misc$1;
      const object = (schema) => (
        // The type is slightly different from a regular object struct, because we
        // want to make properties with `undefined` in their type optional, but not
        // `undefined` itself. This means that we need a type cast.
        (0, superstruct_12.object)(schema)
      );
      exports2.object = object;
      function hasOptional({ path, branch }) {
        const field = path[path.length - 1];
        return (0, misc_12.hasProperty)(branch[branch.length - 2], field);
      }
      function exactOptional(struct2) {
        return new superstruct_12.Struct(__spreadProps(__spreadValues({}, struct2), {
          type: `optional ${struct2.type}`,
          validator: (value, context) => !hasOptional(context) || struct2.validator(value, context),
          refiner: (value, context) => !hasOptional(context) || struct2.refiner(value, context)
        }));
      }
      exports2.exactOptional = exactOptional;
      const finiteNumber = () => (0, superstruct_12.define)("finite number", (value) => {
        return (0, superstruct_12.is)(value, (0, superstruct_12.number)()) && Number.isFinite(value);
      });
      exports2.UnsafeJsonStruct = (0, superstruct_12.union)([
        (0, superstruct_12.literal)(null),
        (0, superstruct_12.boolean)(),
        finiteNumber(),
        (0, superstruct_12.string)(),
        (0, superstruct_12.array)((0, superstruct_12.lazy)(() => exports2.UnsafeJsonStruct)),
        (0, superstruct_12.record)((0, superstruct_12.string)(), (0, superstruct_12.lazy)(() => exports2.UnsafeJsonStruct))
      ]);
      exports2.JsonStruct = (0, superstruct_12.coerce)(exports2.UnsafeJsonStruct, (0, superstruct_12.any)(), (value) => {
        (0, assert_12.assertStruct)(value, exports2.UnsafeJsonStruct);
        return JSON.parse(JSON.stringify(value, (propKey, propValue) => {
          if (propKey === "__proto__" || propKey === "constructor") {
            return void 0;
          }
          return propValue;
        }));
      });
      function isValidJson(value) {
        try {
          getSafeJson(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports2.isValidJson = isValidJson;
      function getSafeJson(value) {
        return (0, superstruct_12.create)(value, exports2.JsonStruct);
      }
      exports2.getSafeJson = getSafeJson;
      function getJsonSize(value) {
        (0, assert_12.assertStruct)(value, exports2.JsonStruct, "Invalid JSON value");
        const json2 = JSON.stringify(value);
        return new TextEncoder().encode(json2).byteLength;
      }
      exports2.getJsonSize = getJsonSize;
      exports2.jsonrpc2 = "2.0";
      exports2.JsonRpcVersionStruct = (0, superstruct_12.literal)(exports2.jsonrpc2);
      exports2.JsonRpcIdStruct = (0, superstruct_12.nullable)((0, superstruct_12.union)([(0, superstruct_12.number)(), (0, superstruct_12.string)()]));
      exports2.JsonRpcErrorStruct = (0, exports2.object)({
        code: (0, superstruct_12.integer)(),
        message: (0, superstruct_12.string)(),
        data: exactOptional(exports2.JsonStruct),
        stack: exactOptional((0, superstruct_12.string)())
      });
      exports2.JsonRpcParamsStruct = (0, superstruct_12.union)([(0, superstruct_12.record)((0, superstruct_12.string)(), exports2.JsonStruct), (0, superstruct_12.array)(exports2.JsonStruct)]);
      exports2.JsonRpcRequestStruct = (0, exports2.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        method: (0, superstruct_12.string)(),
        params: exactOptional(exports2.JsonRpcParamsStruct)
      });
      exports2.JsonRpcNotificationStruct = (0, exports2.object)({
        jsonrpc: exports2.JsonRpcVersionStruct,
        method: (0, superstruct_12.string)(),
        params: exactOptional(exports2.JsonRpcParamsStruct)
      });
      function isJsonRpcNotification(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcNotificationStruct);
      }
      exports2.isJsonRpcNotification = isJsonRpcNotification;
      function assertIsJsonRpcNotification(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", ErrorWrapper);
      }
      exports2.assertIsJsonRpcNotification = assertIsJsonRpcNotification;
      function isJsonRpcRequest(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcRequestStruct);
      }
      exports2.isJsonRpcRequest = isJsonRpcRequest;
      function assertIsJsonRpcRequest(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcRequestStruct, "Invalid JSON-RPC request", ErrorWrapper);
      }
      exports2.assertIsJsonRpcRequest = assertIsJsonRpcRequest;
      exports2.PendingJsonRpcResponseStruct = (0, superstruct_12.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        result: (0, superstruct_12.optional)((0, superstruct_12.unknown)()),
        error: (0, superstruct_12.optional)(exports2.JsonRpcErrorStruct)
      });
      exports2.JsonRpcSuccessStruct = (0, exports2.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        result: exports2.JsonStruct
      });
      exports2.JsonRpcFailureStruct = (0, exports2.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        error: exports2.JsonRpcErrorStruct
      });
      exports2.JsonRpcResponseStruct = (0, superstruct_12.union)([
        exports2.JsonRpcSuccessStruct,
        exports2.JsonRpcFailureStruct
      ]);
      function isPendingJsonRpcResponse(response) {
        return (0, superstruct_12.is)(response, exports2.PendingJsonRpcResponseStruct);
      }
      exports2.isPendingJsonRpcResponse = isPendingJsonRpcResponse;
      function assertIsPendingJsonRpcResponse(response, ErrorWrapper) {
        (0, assert_12.assertStruct)(response, exports2.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", ErrorWrapper);
      }
      exports2.assertIsPendingJsonRpcResponse = assertIsPendingJsonRpcResponse;
      function isJsonRpcResponse(response) {
        return (0, superstruct_12.is)(response, exports2.JsonRpcResponseStruct);
      }
      exports2.isJsonRpcResponse = isJsonRpcResponse;
      function assertIsJsonRpcResponse(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcResponseStruct, "Invalid JSON-RPC response", ErrorWrapper);
      }
      exports2.assertIsJsonRpcResponse = assertIsJsonRpcResponse;
      function isJsonRpcSuccess(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcSuccessStruct);
      }
      exports2.isJsonRpcSuccess = isJsonRpcSuccess;
      function assertIsJsonRpcSuccess(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", ErrorWrapper);
      }
      exports2.assertIsJsonRpcSuccess = assertIsJsonRpcSuccess;
      function isJsonRpcFailure(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcFailureStruct);
      }
      exports2.isJsonRpcFailure = isJsonRpcFailure;
      function assertIsJsonRpcFailure(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", ErrorWrapper);
      }
      exports2.assertIsJsonRpcFailure = assertIsJsonRpcFailure;
      function isJsonRpcError(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcErrorStruct);
      }
      exports2.isJsonRpcError = isJsonRpcError;
      function assertIsJsonRpcError(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcErrorStruct, "Invalid JSON-RPC error", ErrorWrapper);
      }
      exports2.assertIsJsonRpcError = assertIsJsonRpcError;
      function getJsonRpcIdValidator(options) {
        const { permitEmptyString, permitFractions, permitNull } = __spreadValues({
          permitEmptyString: true,
          permitFractions: false,
          permitNull: true
        }, options);
        const isValidJsonRpcId = (id2) => {
          return Boolean(typeof id2 === "number" && (permitFractions || Number.isInteger(id2)) || typeof id2 === "string" && (permitEmptyString || id2.length > 0) || permitNull && id2 === null);
        };
        return isValidJsonRpcId;
      }
      exports2.getJsonRpcIdValidator = getJsonRpcIdValidator;
    })(json$1);
    var keyring$1 = {};
    Object.defineProperty(keyring$1, "__esModule", { value: true });
    var logging$1 = {};
    var browser$3 = { exports: {} };
    var ms;
    var hasRequiredMs;
    function requireMs() {
      if (hasRequiredMs) return ms;
      hasRequiredMs = 1;
      var s = 1e3;
      var m2 = s * 60;
      var h = m2 * 60;
      var d = h * 24;
      var w2 = d * 7;
      var y2 = d * 365.25;
      ms = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse2(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse2(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match) {
          return;
        }
        var n2 = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n2 * y2;
          case "weeks":
          case "week":
          case "w":
            return n2 * w2;
          case "days":
          case "day":
          case "d":
            return n2 * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n2 * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n2 * m2;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n2 * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n2;
          default:
            return void 0;
        }
      }
      function fmtShort(ms2) {
        var msAbs = Math.abs(ms2);
        if (msAbs >= d) {
          return Math.round(ms2 / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms2 / h) + "h";
        }
        if (msAbs >= m2) {
          return Math.round(ms2 / m2) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms2 / s) + "s";
        }
        return ms2 + "ms";
      }
      function fmtLong(ms2) {
        var msAbs = Math.abs(ms2);
        if (msAbs >= d) {
          return plural(ms2, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms2, msAbs, h, "hour");
        }
        if (msAbs >= m2) {
          return plural(ms2, msAbs, m2, "minute");
        }
        if (msAbs >= s) {
          return plural(ms2, msAbs, s, "second");
        }
        return ms2 + " ms";
      }
      function plural(ms2, msAbs, n2, name) {
        var isPlural = msAbs >= n2 * 1.5;
        return Math.round(ms2 / n2) + " " + name + (isPlural ? "s" : "");
      }
      return ms;
    }
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce2;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = requireMs();
      createDebug.destroy = destroy2;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug2(...args) {
          if (!debug2.enabled) {
            return;
          }
          const self2 = debug2;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms2 = curr - (prevTime || curr);
          self2.diff = ms2;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug2.namespace = namespace;
        debug2.useColors = createDebug.useColors();
        debug2.color = createDebug.selectColor(namespace);
        debug2.extend = extend;
        debug2.destroy = createDebug.destroy;
        Object.defineProperty(debug2, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v2) => {
            enableOverride = v2;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug2);
        }
        return debug2;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split2 = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split2) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce2(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy2() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    var common = setup;
    (function(module2, exports2) {
      var define_process_env_default2 = {};
      exports2.formatArgs = formatArgs;
      exports2.save = save;
      exports2.load = load;
      exports2.useColors = useColors;
      exports2.storage = localstorage();
      exports2.destroy = /* @__PURE__ */ (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports2.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let m2;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      exports2.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports2.storage.setItem("debug", namespaces);
          } else {
            exports2.storage.removeItem("debug");
          }
        } catch (error2) {
        }
      }
      function load() {
        let r2;
        try {
          r2 = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
        } catch (error2) {
        }
        if (!r2 && typeof process !== "undefined" && "env" in process) {
          r2 = define_process_env_default2.DEBUG;
        }
        return r2;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error2) {
        }
      }
      module2.exports = common(exports2);
      const { formatters } = module2.exports;
      formatters.j = function(v2) {
        try {
          return JSON.stringify(v2);
        } catch (error2) {
          return "[UnexpectedJSONParseError]: " + error2.message;
        }
      };
    })(browser$3, browser$3.exports);
    var browserExports = browser$3.exports;
    var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(logging$1, "__esModule", { value: true });
    logging$1.createModuleLogger = logging$1.createProjectLogger = void 0;
    const debug_1$2 = __importDefault$3(browserExports);
    const globalLogger$1 = (0, debug_1$2.default)("metamask");
    function createProjectLogger$1(projectName) {
      return globalLogger$1.extend(projectName);
    }
    logging$1.createProjectLogger = createProjectLogger$1;
    function createModuleLogger$1(projectLogger, moduleName) {
      return projectLogger.extend(moduleName);
    }
    logging$1.createModuleLogger = createModuleLogger$1;
    var number$1 = {};
    Object.defineProperty(number$1, "__esModule", { value: true });
    number$1.hexToBigInt = number$1.hexToNumber = number$1.bigIntToHex = number$1.numberToHex = void 0;
    const assert_1$3 = assert$4;
    const hex_1$2 = requireHex$1();
    const numberToHex$1 = (value) => {
      (0, assert_1$3.assert)(typeof value === "number", "Value must be a number.");
      (0, assert_1$3.assert)(value >= 0, "Value must be a non-negative number.");
      (0, assert_1$3.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToHex` instead.");
      return (0, hex_1$2.add0x)(value.toString(16));
    };
    number$1.numberToHex = numberToHex$1;
    const bigIntToHex$1 = (value) => {
      (0, assert_1$3.assert)(typeof value === "bigint", "Value must be a bigint.");
      (0, assert_1$3.assert)(value >= 0, "Value must be a non-negative bigint.");
      return (0, hex_1$2.add0x)(value.toString(16));
    };
    number$1.bigIntToHex = bigIntToHex$1;
    const hexToNumber$1 = (value) => {
      (0, hex_1$2.assertIsHexString)(value);
      const numberValue = parseInt(value, 16);
      (0, assert_1$3.assert)(Number.isSafeInteger(numberValue), "Value is not a safe integer. Use `hexToBigInt` instead.");
      return numberValue;
    };
    number$1.hexToNumber = hexToNumber$1;
    const hexToBigInt$1 = (value) => {
      (0, hex_1$2.assertIsHexString)(value);
      return BigInt((0, hex_1$2.add0x)(value));
    };
    number$1.hexToBigInt = hexToBigInt$1;
    var opaque$1 = {};
    Object.defineProperty(opaque$1, "__esModule", { value: true });
    var promise$1 = {};
    Object.defineProperty(promise$1, "__esModule", { value: true });
    promise$1.createDeferredPromise = void 0;
    function createDeferredPromise$1({ suppressUnhandledRejection = false } = {}) {
      let resolve;
      let reject;
      const promise2 = new Promise((innerResolve, innerReject) => {
        resolve = innerResolve;
        reject = innerReject;
      });
      if (suppressUnhandledRejection) {
        promise2.catch((_error) => {
        });
      }
      return { promise: promise2, resolve, reject };
    }
    promise$1.createDeferredPromise = createDeferredPromise$1;
    var time$1 = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.timeSince = exports2.inMilliseconds = exports2.Duration = void 0;
      (function(Duration) {
        Duration[Duration["Millisecond"] = 1] = "Millisecond";
        Duration[Duration["Second"] = 1e3] = "Second";
        Duration[Duration["Minute"] = 6e4] = "Minute";
        Duration[Duration["Hour"] = 36e5] = "Hour";
        Duration[Duration["Day"] = 864e5] = "Day";
        Duration[Duration["Week"] = 6048e5] = "Week";
        Duration[Duration["Year"] = 31536e6] = "Year";
      })(exports2.Duration || (exports2.Duration = {}));
      const isNonNegativeInteger = (number2) => Number.isInteger(number2) && number2 >= 0;
      const assertIsNonNegativeInteger = (number2, name) => {
        if (!isNonNegativeInteger(number2)) {
          throw new Error(`"${name}" must be a non-negative integer. Received: "${number2}".`);
        }
      };
      function inMilliseconds(count, duration) {
        assertIsNonNegativeInteger(count, "count");
        return count * duration;
      }
      exports2.inMilliseconds = inMilliseconds;
      function timeSince(timestamp) {
        assertIsNonNegativeInteger(timestamp, "timestamp");
        return Date.now() - timestamp;
      }
      exports2.timeSince = timeSince;
    })(time$1);
    var transactionTypes$1 = {};
    Object.defineProperty(transactionTypes$1, "__esModule", { value: true });
    var versions$1 = {};
    var re$2 = { exports: {} };
    const SEMVER_SPEC_VERSION = "2.0.0";
    const MAX_LENGTH$1 = 256;
    const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    const MAX_SAFE_COMPONENT_LENGTH = 16;
    const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
    const RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    var constants$1 = {
      MAX_LENGTH: MAX_LENGTH$1,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
    var define_process_env_default = {};
    const debug$1 = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    var debug_1$1 = debug$1;
    (function(module2, exports2) {
      const {
        MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
        MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
        MAX_LENGTH: MAX_LENGTH2
      } = constants$1;
      const debug2 = debug_1$1;
      exports2 = module2.exports = {};
      const re2 = exports2.re = [];
      const safeRe = exports2.safeRe = [];
      const src = exports2.src = [];
      const safeSrc = exports2.safeSrc = [];
      const t2 = exports2.t = {};
      let R2 = 0;
      const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
      const safeRegexReplacements = [
        ["\\s", 1],
        ["\\d", MAX_LENGTH2],
        [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
      ];
      const makeSafeRegex = (value) => {
        for (const [token, max2] of safeRegexReplacements) {
          value = value.split(`${token}*`).join(`${token}{0,${max2}}`).split(`${token}+`).join(`${token}{1,${max2}}`);
        }
        return value;
      };
      const createToken = (name, value, isGlobal) => {
        const safe = makeSafeRegex(value);
        const index = R2++;
        debug2(name, index, value);
        t2[name] = index;
        src[index] = value;
        safeSrc[index] = safe;
        re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
        safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
      };
      createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
      createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
      createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
      createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
      createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
      createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
      createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
      createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
      createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
      createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
      createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
      createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
      createToken("GTLT", "((?:<|>)?=?)");
      createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
      createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
      createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
      createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
      createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
      createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
      createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
      createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
      createToken("COERCERTL", src[t2.COERCE], true);
      createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
      createToken("LONETILDE", "(?:~>?)");
      createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
      exports2.tildeTrimReplace = "$1~";
      createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
      createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
      createToken("LONECARET", "(?:\\^)");
      createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
      exports2.caretTrimReplace = "$1^";
      createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
      createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
      createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
      createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
      createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
      exports2.comparatorTrimReplace = "$1$2$3";
      createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
      createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
      createToken("STAR", "(<|>)?=?\\s*\\*");
      createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    })(re$2, re$2.exports);
    var reExports = re$2.exports;
    const looseOption = Object.freeze({ loose: true });
    const emptyOpts = Object.freeze({});
    const parseOptions$1 = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    var parseOptions_1 = parseOptions$1;
    const numeric = /^[0-9]+$/;
    const compareIdentifiers$1 = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
    var identifiers$1 = {
      compareIdentifiers: compareIdentifiers$1,
      rcompareIdentifiers
    };
    const debug = debug_1$1;
    const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$1;
    const { safeRe: re$1, t: t$1 } = reExports;
    const parseOptions = parseOptions_1;
    const { compareIdentifiers } = identifiers$1;
    let SemVer$3 = class SemVer2 {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof SemVer2) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m2 = version.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
        if (!m2) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m2[1];
        this.minor = +m2[2];
        this.patch = +m2[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m2[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m2[4].split(".").map((id2) => {
            if (/^[0-9]+$/.test(id2)) {
              const num = +id2;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id2;
          });
        }
        this.build = m2[5] ? m2[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof SemVer2)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new SemVer2(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof SemVer2)) {
          other = new SemVer2(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof SemVer2)) {
          other = new SemVer2(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof SemVer2)) {
          other = new SemVer2(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re$1[t$1.PRERELEASELOOSE] : re$1[t$1.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    var semver$1 = SemVer$3;
    const SemVer$2 = semver$1;
    const parse$1 = (version, options, throwErrors = false) => {
      if (version instanceof SemVer$2) {
        return version;
      }
      try {
        return new SemVer$2(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    var parse_1 = parse$1;
    const parse = parse_1;
    const valid$2 = (version, options) => {
      const v2 = parse(version, options);
      return v2 ? v2.version : null;
    };
    var valid_1 = valid$2;
    const SemVer$1 = semver$1;
    const compare$6 = (a, b, loose) => new SemVer$1(a, loose).compare(new SemVer$1(b, loose));
    var compare_1 = compare$6;
    const compare$5 = compare_1;
    const gt$3 = (a, b, loose) => compare$5(a, b, loose) > 0;
    var gt_1 = gt$3;
    const compare$4 = compare_1;
    const lt$2 = (a, b, loose) => compare$4(a, b, loose) < 0;
    var lt_1 = lt$2;
    const compare$3 = compare_1;
    const eq$1 = (a, b, loose) => compare$3(a, b, loose) === 0;
    var eq_1 = eq$1;
    const compare$2 = compare_1;
    const neq$1 = (a, b, loose) => compare$2(a, b, loose) !== 0;
    var neq_1 = neq$1;
    const compare$1 = compare_1;
    const gte$2 = (a, b, loose) => compare$1(a, b, loose) >= 0;
    var gte_1 = gte$2;
    const compare = compare_1;
    const lte$2 = (a, b, loose) => compare(a, b, loose) <= 0;
    var lte_1 = lte$2;
    const eq = eq_1;
    const neq = neq_1;
    const gt$2 = gt_1;
    const gte$1 = gte_1;
    const lt$1 = lt_1;
    const lte$1 = lte_1;
    const cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt$2(a, b, loose);
        case ">=":
          return gte$1(a, b, loose);
        case "<":
          return lt$1(a, b, loose);
        case "<=":
          return lte$1(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    var cmp_1 = cmp;
    const { safeRe: re, t } = reExports;
    class LRUCache {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    }
    var lrucache = LRUCache;
    var range;
    var hasRequiredRange;
    function requireRange() {
      if (hasRequiredRange) return range;
      hasRequiredRange = 1;
      const SPACE_CHARACTERS = /\s+/g;
      class Range2 {
        constructor(range2, options) {
          options = parseOptions2(options);
          if (range2 instanceof Range2) {
            if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
              return range2;
            } else {
              return new Range2(range2.raw, options);
            }
          }
          if (range2 instanceof Comparator2) {
            this.raw = range2.value;
            this.set = [[range2]];
            this.formatted = void 0;
            return this;
          }
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
          this.set = this.raw.split("||").map((r2) => this.parseRange(r2.trim())).filter((c) => c.length);
          if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          }
          if (this.set.length > 1) {
            const first = this.set[0];
            this.set = this.set.filter((c) => !isNullSet(c[0]));
            if (this.set.length === 0) {
              this.set = [first];
            } else if (this.set.length > 1) {
              for (const c of this.set) {
                if (c.length === 1 && isAny(c[0])) {
                  this.set = [c];
                  break;
                }
              }
            }
          }
          this.formatted = void 0;
        }
        get range() {
          if (this.formatted === void 0) {
            this.formatted = "";
            for (let i = 0; i < this.set.length; i++) {
              if (i > 0) {
                this.formatted += "||";
              }
              const comps = this.set[i];
              for (let k2 = 0; k2 < comps.length; k2++) {
                if (k2 > 0) {
                  this.formatted += " ";
                }
                this.formatted += comps[k2].toString().trim();
              }
            }
          }
          return this.formatted;
        }
        format() {
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(range2) {
          const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
          const memoKey = memoOpts + ":" + range2;
          const cached = cache.get(memoKey);
          if (cached) {
            return cached;
          }
          const loose = this.options.loose;
          const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
          range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
          debug2("hyphen replace", range2);
          range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
          debug2("comparator trim", range2);
          range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
          debug2("tilde trim", range2);
          range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
          debug2("caret trim", range2);
          let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
          if (loose) {
            rangeList = rangeList.filter((comp) => {
              debug2("loose invalid filter", comp, this.options);
              return !!comp.match(re2[t2.COMPARATORLOOSE]);
            });
          }
          debug2("range list", rangeList);
          const rangeMap = /* @__PURE__ */ new Map();
          const comparators = rangeList.map((comp) => new Comparator2(comp, this.options));
          for (const comp of comparators) {
            if (isNullSet(comp)) {
              return [comp];
            }
            rangeMap.set(comp.value, comp);
          }
          if (rangeMap.size > 1 && rangeMap.has("")) {
            rangeMap.delete("");
          }
          const result = [...rangeMap.values()];
          cache.set(memoKey, result);
          return result;
        }
        intersects(range2, options) {
          if (!(range2 instanceof Range2)) {
            throw new TypeError("a Range is required");
          }
          return this.set.some((thisComparators) => {
            return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
              return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
                return rangeComparators.every((rangeComparator) => {
                  return thisComparator.intersects(rangeComparator, options);
                });
              });
            });
          });
        }
        // if ANY of the sets match ALL of its comparators, then pass
        test(version) {
          if (!version) {
            return false;
          }
          if (typeof version === "string") {
            try {
              version = new SemVer2(version, this.options);
            } catch (er) {
              return false;
            }
          }
          for (let i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version, this.options)) {
              return true;
            }
          }
          return false;
        }
      }
      range = Range2;
      const LRU = lrucache;
      const cache = new LRU();
      const parseOptions2 = parseOptions_1;
      const Comparator2 = requireComparator();
      const debug2 = debug_1$1;
      const SemVer2 = semver$1;
      const {
        safeRe: re2,
        t: t2,
        comparatorTrimReplace,
        tildeTrimReplace,
        caretTrimReplace
      } = reExports;
      const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$1;
      const isNullSet = (c) => c.value === "<0.0.0-0";
      const isAny = (c) => c.value === "";
      const isSatisfiable = (comparators, options) => {
        let result = true;
        const remainingComparators = comparators.slice();
        let testComparator = remainingComparators.pop();
        while (result && remainingComparators.length) {
          result = remainingComparators.every((otherComparator) => {
            return testComparator.intersects(otherComparator, options);
          });
          testComparator = remainingComparators.pop();
        }
        return result;
      };
      const parseComparator = (comp, options) => {
        debug2("comp", comp, options);
        comp = replaceCarets(comp, options);
        debug2("caret", comp);
        comp = replaceTildes(comp, options);
        debug2("tildes", comp);
        comp = replaceXRanges(comp, options);
        debug2("xrange", comp);
        comp = replaceStars(comp, options);
        debug2("stars", comp);
        return comp;
      };
      const isX = (id2) => !id2 || id2.toLowerCase() === "x" || id2 === "*";
      const replaceTildes = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
      };
      const replaceTilde = (comp, options) => {
        const r2 = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
        return comp.replace(r2, (_, M2, m2, p2, pr) => {
          debug2("tilde", comp, _, M2, m2, p2, pr);
          let ret;
          if (isX(M2)) {
            ret = "";
          } else if (isX(m2)) {
            ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
          } else if (isX(p2)) {
            ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
          } else if (pr) {
            debug2("replaceTilde pr", pr);
            ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
          } else {
            ret = `>=${M2}.${m2}.${p2} <${M2}.${+m2 + 1}.0-0`;
          }
          debug2("tilde return", ret);
          return ret;
        });
      };
      const replaceCarets = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
      };
      const replaceCaret = (comp, options) => {
        debug2("caret", comp, options);
        const r2 = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
        const z2 = options.includePrerelease ? "-0" : "";
        return comp.replace(r2, (_, M2, m2, p2, pr) => {
          debug2("caret", comp, _, M2, m2, p2, pr);
          let ret;
          if (isX(M2)) {
            ret = "";
          } else if (isX(m2)) {
            ret = `>=${M2}.0.0${z2} <${+M2 + 1}.0.0-0`;
          } else if (isX(p2)) {
            if (M2 === "0") {
              ret = `>=${M2}.${m2}.0${z2} <${M2}.${+m2 + 1}.0-0`;
            } else {
              ret = `>=${M2}.${m2}.0${z2} <${+M2 + 1}.0.0-0`;
            }
          } else if (pr) {
            debug2("replaceCaret pr", pr);
            if (M2 === "0") {
              if (m2 === "0") {
                ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${m2}.${+p2 + 1}-0`;
              } else {
                ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
              }
            } else {
              ret = `>=${M2}.${m2}.${p2}-${pr} <${+M2 + 1}.0.0-0`;
            }
          } else {
            debug2("no pr");
            if (M2 === "0") {
              if (m2 === "0") {
                ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${m2}.${+p2 + 1}-0`;
              } else {
                ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${+m2 + 1}.0-0`;
              }
            } else {
              ret = `>=${M2}.${m2}.${p2} <${+M2 + 1}.0.0-0`;
            }
          }
          debug2("caret return", ret);
          return ret;
        });
      };
      const replaceXRanges = (comp, options) => {
        debug2("replaceXRanges", comp, options);
        return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
      };
      const replaceXRange = (comp, options) => {
        comp = comp.trim();
        const r2 = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
        return comp.replace(r2, (ret, gtlt, M2, m2, p2, pr) => {
          debug2("xRange", comp, ret, gtlt, M2, m2, p2, pr);
          const xM = isX(M2);
          const xm = xM || isX(m2);
          const xp = xm || isX(p2);
          const anyX = xp;
          if (gtlt === "=" && anyX) {
            gtlt = "";
          }
          pr = options.includePrerelease ? "-0" : "";
          if (xM) {
            if (gtlt === ">" || gtlt === "<") {
              ret = "<0.0.0-0";
            } else {
              ret = "*";
            }
          } else if (gtlt && anyX) {
            if (xm) {
              m2 = 0;
            }
            p2 = 0;
            if (gtlt === ">") {
              gtlt = ">=";
              if (xm) {
                M2 = +M2 + 1;
                m2 = 0;
                p2 = 0;
              } else {
                m2 = +m2 + 1;
                p2 = 0;
              }
            } else if (gtlt === "<=") {
              gtlt = "<";
              if (xm) {
                M2 = +M2 + 1;
              } else {
                m2 = +m2 + 1;
              }
            }
            if (gtlt === "<") {
              pr = "-0";
            }
            ret = `${gtlt + M2}.${m2}.${p2}${pr}`;
          } else if (xm) {
            ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
          } else if (xp) {
            ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
          }
          debug2("xRange return", ret);
          return ret;
        });
      };
      const replaceStars = (comp, options) => {
        debug2("replaceStars", comp, options);
        return comp.trim().replace(re2[t2.STAR], "");
      };
      const replaceGTE0 = (comp, options) => {
        debug2("replaceGTE0", comp, options);
        return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
      };
      const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb2, to, tM, tm, tp, tpr) => {
        if (isX(fM)) {
          from = "";
        } else if (isX(fm)) {
          from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
        } else if (isX(fp)) {
          from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
        } else if (fpr) {
          from = `>=${from}`;
        } else {
          from = `>=${from}${incPr ? "-0" : ""}`;
        }
        if (isX(tM)) {
          to = "";
        } else if (isX(tm)) {
          to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
          to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
          to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
          to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
          to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
      };
      const testSet = (set, version, options) => {
        for (let i = 0; i < set.length; i++) {
          if (!set[i].test(version)) {
            return false;
          }
        }
        if (version.prerelease.length && !options.includePrerelease) {
          for (let i = 0; i < set.length; i++) {
            debug2(set[i].semver);
            if (set[i].semver === Comparator2.ANY) {
              continue;
            }
            if (set[i].semver.prerelease.length > 0) {
              const allowed = set[i].semver;
              if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                return true;
              }
            }
          }
          return false;
        }
        return true;
      };
      return range;
    }
    var comparator;
    var hasRequiredComparator;
    function requireComparator() {
      if (hasRequiredComparator) return comparator;
      hasRequiredComparator = 1;
      const ANY2 = Symbol("SemVer ANY");
      class Comparator2 {
        static get ANY() {
          return ANY2;
        }
        constructor(comp, options) {
          options = parseOptions2(options);
          if (comp instanceof Comparator2) {
            if (comp.loose === !!options.loose) {
              return comp;
            } else {
              comp = comp.value;
            }
          }
          comp = comp.trim().split(/\s+/).join(" ");
          debug2("comparator", comp, options);
          this.options = options;
          this.loose = !!options.loose;
          this.parse(comp);
          if (this.semver === ANY2) {
            this.value = "";
          } else {
            this.value = this.operator + this.semver.version;
          }
          debug2("comp", this);
        }
        parse(comp) {
          const r2 = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
          const m2 = comp.match(r2);
          if (!m2) {
            throw new TypeError(`Invalid comparator: ${comp}`);
          }
          this.operator = m2[1] !== void 0 ? m2[1] : "";
          if (this.operator === "=") {
            this.operator = "";
          }
          if (!m2[2]) {
            this.semver = ANY2;
          } else {
            this.semver = new SemVer2(m2[2], this.options.loose);
          }
        }
        toString() {
          return this.value;
        }
        test(version) {
          debug2("Comparator.test", version, this.options.loose);
          if (this.semver === ANY2 || version === ANY2) {
            return true;
          }
          if (typeof version === "string") {
            try {
              version = new SemVer2(version, this.options);
            } catch (er) {
              return false;
            }
          }
          return cmp2(version, this.operator, this.semver, this.options);
        }
        intersects(comp, options) {
          if (!(comp instanceof Comparator2)) {
            throw new TypeError("a Comparator is required");
          }
          if (this.operator === "") {
            if (this.value === "") {
              return true;
            }
            return new Range2(comp.value, options).test(this.value);
          } else if (comp.operator === "") {
            if (comp.value === "") {
              return true;
            }
            return new Range2(this.value, options).test(comp.semver);
          }
          options = parseOptions2(options);
          if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
            return false;
          }
          if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
            return false;
          }
          if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
            return true;
          }
          if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
            return true;
          }
          if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
            return true;
          }
          if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
            return true;
          }
          if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
            return true;
          }
          return false;
        }
      }
      comparator = Comparator2;
      const parseOptions2 = parseOptions_1;
      const { safeRe: re2, t: t2 } = reExports;
      const cmp2 = cmp_1;
      const debug2 = debug_1$1;
      const SemVer2 = semver$1;
      const Range2 = requireRange();
      return comparator;
    }
    const Range$2 = requireRange();
    const satisfies$2 = (version, range2, options) => {
      try {
        range2 = new Range$2(range2, options);
      } catch (er) {
        return false;
      }
      return range2.test(version);
    };
    var satisfies_1 = satisfies$2;
    requireRange();
    requireRange();
    requireRange();
    requireRange();
    const Range$1 = requireRange();
    const validRange$1 = (range2, options) => {
      try {
        return new Range$1(range2, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    var valid$1 = validRange$1;
    const SemVer = semver$1;
    const Comparator$1 = requireComparator();
    const { ANY: ANY$1 } = Comparator$1;
    const Range = requireRange();
    const satisfies$1 = satisfies_1;
    const gt$1 = gt_1;
    const lt = lt_1;
    const lte = lte_1;
    const gte = gte_1;
    const outside$1 = (version, range2, hilo, options) => {
      version = new SemVer(version, options);
      range2 = new Range(range2, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt$1;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt$1;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies$1(version, range2, options)) {
        return false;
      }
      for (let i = 0; i < range2.set.length; ++i) {
        const comparators = range2.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator2) => {
          if (comparator2.semver === ANY$1) {
            comparator2 = new Comparator$1(">=0.0.0");
          }
          high = high || comparator2;
          low = low || comparator2;
          if (gtfn(comparator2.semver, high.semver, options)) {
            high = comparator2;
          } else if (ltfn(comparator2.semver, low.semver, options)) {
            low = comparator2;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    var outside_1 = outside$1;
    const outside = outside_1;
    const gtr$1 = (version, range2, options) => outside(version, range2, ">", options);
    var gtr_1 = gtr$1;
    requireRange();
    requireRange();
    const Comparator = requireComparator();
    const { ANY } = Comparator;
    [new Comparator(">=0.0.0-0")];
    [new Comparator(">=0.0.0")];
    const internalRe = reExports;
    const constants = constants$1;
    const identifiers = identifiers$1;
    const valid = valid_1;
    const gt = gt_1;
    requireComparator();
    requireRange();
    const satisfies = satisfies_1;
    const validRange = valid$1;
    const gtr = gtr_1;
    var semver = {
      valid,
      gt,
      satisfies,
      validRange,
      gtr,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.satisfiesVersionRange = exports2.gtRange = exports2.gtVersion = exports2.assertIsSemVerRange = exports2.assertIsSemVerVersion = exports2.isValidSemVerRange = exports2.isValidSemVerVersion = exports2.VersionRangeStruct = exports2.VersionStruct = void 0;
      const superstruct_12 = dist$4;
      const semver_1 = semver;
      const assert_12 = assert$4;
      exports2.VersionStruct = (0, superstruct_12.refine)((0, superstruct_12.string)(), "Version", (value) => {
        if ((0, semver_1.valid)(value) === null) {
          return `Expected SemVer version, got "${value}"`;
        }
        return true;
      });
      exports2.VersionRangeStruct = (0, superstruct_12.refine)((0, superstruct_12.string)(), "Version range", (value) => {
        if ((0, semver_1.validRange)(value) === null) {
          return `Expected SemVer range, got "${value}"`;
        }
        return true;
      });
      function isValidSemVerVersion(version) {
        return (0, superstruct_12.is)(version, exports2.VersionStruct);
      }
      exports2.isValidSemVerVersion = isValidSemVerVersion;
      function isValidSemVerRange(versionRange) {
        return (0, superstruct_12.is)(versionRange, exports2.VersionRangeStruct);
      }
      exports2.isValidSemVerRange = isValidSemVerRange;
      function assertIsSemVerVersion(version) {
        (0, assert_12.assertStruct)(version, exports2.VersionStruct);
      }
      exports2.assertIsSemVerVersion = assertIsSemVerVersion;
      function assertIsSemVerRange(range2) {
        (0, assert_12.assertStruct)(range2, exports2.VersionRangeStruct);
      }
      exports2.assertIsSemVerRange = assertIsSemVerRange;
      function gtVersion(version1, version2) {
        return (0, semver_1.gt)(version1, version2);
      }
      exports2.gtVersion = gtVersion;
      function gtRange(version, range2) {
        return (0, semver_1.gtr)(version, range2);
      }
      exports2.gtRange = gtRange;
      function satisfiesVersionRange(version, versionRange) {
        return (0, semver_1.satisfies)(version, versionRange, {
          includePrerelease: true
        });
      }
      exports2.satisfiesVersionRange = satisfiesVersionRange;
    })(versions$1);
    (function(exports2) {
      var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m2, k2);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      } : function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        o[k22] = m2[k2];
      });
      var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports3) {
        for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2)) __createBinding(exports3, m2, p2);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(assert$4, exports2);
      __exportStar(base64$3, exports2);
      __exportStar(requireBytes$1(), exports2);
      __exportStar(caipTypes$1, exports2);
      __exportStar(checksum$1, exports2);
      __exportStar(coercers$1, exports2);
      __exportStar(collections$1, exports2);
      __exportStar(encryptionTypes$1, exports2);
      __exportStar(errors$2, exports2);
      __exportStar(requireHex$1(), exports2);
      __exportStar(json$1, exports2);
      __exportStar(keyring$1, exports2);
      __exportStar(logging$1, exports2);
      __exportStar(misc$1, exports2);
      __exportStar(number$1, exports2);
      __exportStar(opaque$1, exports2);
      __exportStar(promise$1, exports2);
      __exportStar(time$1, exports2);
      __exportStar(transactionTypes$1, exports2);
      __exportStar(versions$1, exports2);
    })(dist$5);
    var fastSafeStringify = stringify;
    stringify.default = stringify;
    stringify.stable = deterministicStringify;
    stringify.stableStringify = deterministicStringify;
    var LIMIT_REPLACE_NODE = "[...]";
    var CIRCULAR_REPLACE_NODE = "[Circular]";
    var arr = [];
    var replacerStack = [];
    function defaultOptions() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function stringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      decirc(obj, "", 0, [], void 0, 0, options);
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(obj, replacer, spacer);
        } else {
          res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
        }
      } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function setReplace(replace, val, k2, parent) {
      var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k2);
      if (propertyDescriptor.get !== void 0) {
        if (propertyDescriptor.configurable) {
          Object.defineProperty(parent, k2, { value: replace });
          arr.push([parent, k2, val, propertyDescriptor]);
        } else {
          replacerStack.push([val, k2, replace]);
        }
      } else {
        parent[k2] = replace;
        arr.push([parent, k2, val]);
      }
    }
    function decirc(val, k2, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i;
      if (typeof val === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
          if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k2, parent);
            return;
          }
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i = 0; i < val.length; i++) {
            decirc(val[i], i, i, stack, val, depth, options);
          }
        } else {
          var keys = Object.keys(val);
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            decirc(val[key], key, i, stack, val, depth, options);
          }
        }
        stack.pop();
      }
    }
    function compareFunction(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    function deterministicStringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(tmp, replacer, spacer);
        } else {
          res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
        }
      } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function deterministicDecirc(val, k2, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i;
      if (typeof val === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
          if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k2, parent);
            return;
          }
        }
        try {
          if (typeof val.toJSON === "function") {
            return;
          }
        } catch (_) {
          return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i = 0; i < val.length; i++) {
            deterministicDecirc(val[i], i, i, stack, val, depth, options);
          }
        } else {
          var tmp = {};
          var keys = Object.keys(val).sort(compareFunction);
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            deterministicDecirc(val[key], key, i, stack, val, depth, options);
            tmp[key] = val[key];
          }
          if (typeof parent !== "undefined") {
            arr.push([parent, k2, val]);
            parent[k2] = tmp;
          } else {
            return tmp;
          }
        }
        stack.pop();
      }
    }
    function replaceGetterValues(replacer) {
      replacer = typeof replacer !== "undefined" ? replacer : function(k2, v2) {
        return v2;
      };
      return function(key, val) {
        if (replacerStack.length > 0) {
          for (var i = 0; i < replacerStack.length; i++) {
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
              val = part[2];
              replacerStack.splice(i, 1);
              break;
            }
          }
        }
        return replacer.call(this, key, val);
      };
    }
    var utils = {};
    var errorConstants = {};
    Object.defineProperty(errorConstants, "__esModule", { value: true });
    errorConstants.errorValues = errorConstants.errorCodes = void 0;
    errorConstants.errorCodes = {
      rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
      },
      provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
      }
    };
    errorConstants.errorValues = {
      "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
      },
      "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
      },
      "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
      },
      "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
      },
      "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
      },
      "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
      },
      "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
      },
      "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
      },
      "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
      },
      "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
      },
      "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
      },
      "4001": {
        standard: "EIP-1193",
        message: "User rejected the request."
      },
      "4100": {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
      },
      "4200": {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
      },
      "4900": {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
      },
      "4901": {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
      }
    };
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.dataHasCause = exports2.serializeCause = exports2.serializeError = exports2.isValidCode = exports2.getMessageFromCode = exports2.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
      const utils_12 = dist$5;
      const error_constants_12 = errorConstants;
      const FALLBACK_ERROR_CODE = error_constants_12.errorCodes.rpc.internal;
      const FALLBACK_MESSAGE = "Unspecified error message. This is a bug, please report it.";
      const FALLBACK_ERROR = {
        code: FALLBACK_ERROR_CODE,
        message: getMessageFromCode(FALLBACK_ERROR_CODE)
      };
      exports2.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
      function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
        if (isValidCode(code)) {
          const codeString = code.toString();
          if ((0, utils_12.hasProperty)(error_constants_12.errorValues, codeString)) {
            return error_constants_12.errorValues[codeString].message;
          }
          if (isJsonRpcServerError(code)) {
            return exports2.JSON_RPC_SERVER_ERROR_MESSAGE;
          }
        }
        return fallbackMessage;
      }
      exports2.getMessageFromCode = getMessageFromCode;
      function isValidCode(code) {
        return Number.isInteger(code);
      }
      exports2.isValidCode = isValidCode;
      function serializeError(error2, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = true } = {}) {
        if (!(0, utils_12.isJsonRpcError)(fallbackError)) {
          throw new Error("Must provide fallback error with integer number code and string message.");
        }
        const serialized = buildError(error2, fallbackError);
        if (!shouldIncludeStack) {
          delete serialized.stack;
        }
        return serialized;
      }
      exports2.serializeError = serializeError;
      function buildError(error2, fallbackError) {
        if (error2 && typeof error2 === "object" && "serialize" in error2 && typeof error2.serialize === "function") {
          return error2.serialize();
        }
        if ((0, utils_12.isJsonRpcError)(error2)) {
          return error2;
        }
        const cause = serializeCause(error2);
        const fallbackWithCause = __spreadProps(__spreadValues({}, fallbackError), {
          data: { cause }
        });
        return fallbackWithCause;
      }
      function isJsonRpcServerError(code) {
        return code >= -32099 && code <= -32e3;
      }
      function serializeCause(error2) {
        if (Array.isArray(error2)) {
          return error2.map((entry) => {
            if ((0, utils_12.isValidJson)(entry)) {
              return entry;
            } else if ((0, utils_12.isObject)(entry)) {
              return serializeObject(entry);
            }
            return null;
          });
        } else if ((0, utils_12.isObject)(error2)) {
          return serializeObject(error2);
        }
        if ((0, utils_12.isValidJson)(error2)) {
          return error2;
        }
        return null;
      }
      exports2.serializeCause = serializeCause;
      function serializeObject(object) {
        return Object.getOwnPropertyNames(object).reduce((acc, key) => {
          const value = object[key];
          if ((0, utils_12.isValidJson)(value)) {
            acc[key] = value;
          }
          return acc;
        }, {});
      }
      function dataHasCause(data) {
        return (0, utils_12.isObject)(data) && (0, utils_12.hasProperty)(data, "cause") && (0, utils_12.isObject)(data.cause);
      }
      exports2.dataHasCause = dataHasCause;
    })(utils);
    var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(classes, "__esModule", { value: true });
    classes.EthereumProviderError = classes.JsonRpcError = void 0;
    const utils_1$1 = dist$5;
    const fast_safe_stringify_1 = __importDefault$2(fastSafeStringify);
    const utils_2 = utils;
    class JsonRpcError extends Error {
      constructor(code, message, data) {
        if (!Number.isInteger(code)) {
          throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a non-empty string.');
        }
        if ((0, utils_2.dataHasCause)(data)) {
          super(message, { cause: data.cause });
          if (!(0, utils_1$1.hasProperty)(this, "cause")) {
            Object.assign(this, { cause: data.cause });
          }
        } else {
          super(message);
        }
        if (data !== void 0) {
          this.data = data;
        }
        this.code = code;
      }
      /**
       * Get the error as JSON-serializable object.
       *
       * @returns A plain object with all public class properties.
       */
      serialize() {
        const serialized = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          serialized.data = this.data;
          if ((0, utils_1$1.isPlainObject)(this.data)) {
            serialized.data.cause = (0, utils_2.serializeCause)(this.data.cause);
          }
        }
        if (this.stack) {
          serialized.stack = this.stack;
        }
        return serialized;
      }
      /**
       * Get a string representation of the serialized error, omitting any circular
       * references.
       *
       * @returns A string representation of the serialized error.
       */
      toString() {
        return (0, fast_safe_stringify_1.default)(this.serialize(), stringifyReplacer, 2);
      }
    }
    classes.JsonRpcError = JsonRpcError;
    class EthereumProviderError extends JsonRpcError {
      /**
       * Create an Ethereum Provider JSON-RPC error.
       *
       * @param code - The JSON-RPC error code. Must be an integer in the
       * `1000 <= n <= 4999` range.
       * @param message - The JSON-RPC error message.
       * @param data - Optional data to include in the error.
       */
      constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
          throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
      }
    }
    classes.EthereumProviderError = EthereumProviderError;
    function isValidEthProviderCode(code) {
      return Number.isInteger(code) && code >= 1e3 && code <= 4999;
    }
    function stringifyReplacer(_, value) {
      if (value === "[Circular]") {
        return void 0;
      }
      return value;
    }
    var errors$1 = {};
    Object.defineProperty(errors$1, "__esModule", { value: true });
    errors$1.providerErrors = errors$1.rpcErrors = void 0;
    const classes_1 = classes;
    const error_constants_1 = errorConstants;
    const utils_1 = utils;
    errors$1.rpcErrors = {
      /**
       * Get a JSON RPC 2.0 Parse (-32700) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      parse: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
      /**
       * Get a JSON RPC 2.0 Invalid Request (-32600) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      invalidRequest: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
      /**
       * Get a JSON RPC 2.0 Invalid Params (-32602) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      invalidParams: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
      /**
       * Get a JSON RPC 2.0 Method Not Found (-32601) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      methodNotFound: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
      /**
       * Get a JSON RPC 2.0 Internal (-32603) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      internal: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
      /**
       * Get a JSON RPC 2.0 Server error.
       * Permits integer error codes in the [ -32099 <= -32005 ] range.
       * Codes -32000 through -32004 are reserved by EIP-1474.
       *
       * @param opts - The error options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      server: (opts) => {
        if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
          throw new Error("Ethereum RPC Server errors must provide single object argument.");
        }
        const { code } = opts;
        if (!Number.isInteger(code) || code > -32005 || code < -32099) {
          throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
        }
        return getJsonRpcError(code, opts);
      },
      /**
       * Get an Ethereum JSON RPC Invalid Input (-32000) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      invalidInput: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
      /**
       * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      resourceNotFound: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
      /**
       * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      resourceUnavailable: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
      /**
       * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      transactionRejected: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
      /**
       * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      methodNotSupported: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
      /**
       * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link JsonRpcError} class.
       */
      limitExceeded: (arg) => getJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg)
    };
    errors$1.providerErrors = {
      /**
       * Get an Ethereum Provider User Rejected Request (4001) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link EthereumProviderError} class.
       */
      userRejectedRequest: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
      },
      /**
       * Get an Ethereum Provider Unauthorized (4100) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link EthereumProviderError} class.
       */
      unauthorized: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
      },
      /**
       * Get an Ethereum Provider Unsupported Method (4200) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link EthereumProviderError} class.
       */
      unsupportedMethod: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
      },
      /**
       * Get an Ethereum Provider Not Connected (4900) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link EthereumProviderError} class.
       */
      disconnected: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
      },
      /**
       * Get an Ethereum Provider Chain Not Connected (4901) error.
       *
       * @param arg - The error message or options bag.
       * @returns An instance of the {@link EthereumProviderError} class.
       */
      chainDisconnected: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
      },
      /**
       * Get a custom Ethereum Provider error.
       *
       * @param opts - The error options bag.
       * @returns An instance of the {@link EthereumProviderError} class.
       */
      custom: (opts) => {
        if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
          throw new Error("Ethereum Provider custom errors must provide single object argument.");
        }
        const { code, message, data } = opts;
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a nonempty string');
        }
        return new classes_1.EthereumProviderError(code, message, data);
      }
    };
    function getJsonRpcError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new classes_1.JsonRpcError(code, message != null ? message : (0, utils_1.getMessageFromCode)(code), data);
    }
    function getEthProviderError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new classes_1.EthereumProviderError(code, message != null ? message : (0, utils_1.getMessageFromCode)(code), data);
    }
    function parseOpts(arg) {
      if (arg) {
        if (typeof arg === "string") {
          return [arg];
        } else if (typeof arg === "object" && !Array.isArray(arg)) {
          const { message, data } = arg;
          if (message && typeof message !== "string") {
            throw new Error("Must specify string message.");
          }
          return [message != null ? message : void 0, data];
        }
      }
      return [];
    }
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.errorCodes = exports2.providerErrors = exports2.rpcErrors = exports2.getMessageFromCode = exports2.serializeError = exports2.serializeCause = exports2.dataHasCause = exports2.EthereumProviderError = exports2.JsonRpcError = void 0;
      var classes_12 = classes;
      Object.defineProperty(exports2, "JsonRpcError", { enumerable: true, get: function() {
        return classes_12.JsonRpcError;
      } });
      Object.defineProperty(exports2, "EthereumProviderError", { enumerable: true, get: function() {
        return classes_12.EthereumProviderError;
      } });
      var utils_12 = utils;
      Object.defineProperty(exports2, "dataHasCause", { enumerable: true, get: function() {
        return utils_12.dataHasCause;
      } });
      Object.defineProperty(exports2, "serializeCause", { enumerable: true, get: function() {
        return utils_12.serializeCause;
      } });
      Object.defineProperty(exports2, "serializeError", { enumerable: true, get: function() {
        return utils_12.serializeError;
      } });
      Object.defineProperty(exports2, "getMessageFromCode", { enumerable: true, get: function() {
        return utils_12.getMessageFromCode;
      } });
      var errors_12 = errors$1;
      Object.defineProperty(exports2, "rpcErrors", { enumerable: true, get: function() {
        return errors_12.rpcErrors;
      } });
      Object.defineProperty(exports2, "providerErrors", { enumerable: true, get: function() {
        return errors_12.providerErrors;
      } });
      var error_constants_12 = errorConstants;
      Object.defineProperty(exports2, "errorCodes", { enumerable: true, get: function() {
        return error_constants_12.errorCodes;
      } });
    })(dist$6);
    var cjs = {};
    const __viteBrowserExternal = {};
    const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: __viteBrowserExternal
    }, Symbol.toStringTag, { value: "Module" }));
    const require$$3$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
    Object.defineProperty(cjs, "__esModule", { value: true });
    const events_1 = require$$3$1;
    function safeApply(handler, context, args) {
      try {
        Reflect.apply(handler, context, args);
      } catch (err) {
        setTimeout(() => {
          throw err;
        });
      }
    }
    function arrayClone(arr2) {
      const n2 = arr2.length;
      const copy = new Array(n2);
      for (let i = 0; i < n2; i += 1) {
        copy[i] = arr2[i];
      }
      return copy;
    }
    class SafeEventEmitter extends events_1.EventEmitter {
      emit(type, ...args) {
        let doError = type === "error";
        const events = this._events;
        if (events !== void 0) {
          doError = doError && events.error === void 0;
        } else if (!doError) {
          return false;
        }
        if (doError) {
          let er;
          if (args.length > 0) {
            [er] = args;
          }
          if (er instanceof Error) {
            throw er;
          }
          const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
          err.context = er;
          throw err;
        }
        const handler = events[type];
        if (handler === void 0) {
          return false;
        }
        if (typeof handler === "function") {
          safeApply(handler, this, args);
        } else {
          const len = handler.length;
          const listeners = arrayClone(handler);
          for (let i = 0; i < len; i += 1) {
            safeApply(listeners[i], this, args);
          }
        }
        return true;
      }
    }
    cjs.default = SafeEventEmitter;
    var dist$3 = {};
    var assert$1 = {};
    var errors = {};
    var misc = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.calculateNumberSize = exports2.calculateStringSize = exports2.isASCII = exports2.isPlainObject = exports2.ESCAPE_CHARACTERS_REGEXP = exports2.JsonSize = exports2.getKnownPropertyNames = exports2.hasProperty = exports2.isObject = exports2.isNullOrUndefined = exports2.isNonEmptyArray = void 0;
      function isNonEmptyArray(value) {
        return Array.isArray(value) && value.length > 0;
      }
      exports2.isNonEmptyArray = isNonEmptyArray;
      function isNullOrUndefined(value) {
        return value === null || value === void 0;
      }
      exports2.isNullOrUndefined = isNullOrUndefined;
      function isObject2(value) {
        return Boolean(value) && typeof value === "object" && !Array.isArray(value);
      }
      exports2.isObject = isObject2;
      const hasProperty = (objectToCheck, name) => Object.hasOwnProperty.call(objectToCheck, name);
      exports2.hasProperty = hasProperty;
      function getKnownPropertyNames(object) {
        return Object.getOwnPropertyNames(object);
      }
      exports2.getKnownPropertyNames = getKnownPropertyNames;
      (function(JsonSize) {
        JsonSize[JsonSize["Null"] = 4] = "Null";
        JsonSize[JsonSize["Comma"] = 1] = "Comma";
        JsonSize[JsonSize["Wrapper"] = 1] = "Wrapper";
        JsonSize[JsonSize["True"] = 4] = "True";
        JsonSize[JsonSize["False"] = 5] = "False";
        JsonSize[JsonSize["Quote"] = 1] = "Quote";
        JsonSize[JsonSize["Colon"] = 1] = "Colon";
        JsonSize[JsonSize["Date"] = 24] = "Date";
      })(exports2.JsonSize || (exports2.JsonSize = {}));
      exports2.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
      function isPlainObject2(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          let proto = value;
          while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
          }
          return Object.getPrototypeOf(value) === proto;
        } catch (_) {
          return false;
        }
      }
      exports2.isPlainObject = isPlainObject2;
      function isASCII(character) {
        return character.charCodeAt(0) <= 127;
      }
      exports2.isASCII = isASCII;
      function calculateStringSize(value) {
        var _a;
        const size2 = value.split("").reduce((total, character) => {
          if (isASCII(character)) {
            return total + 1;
          }
          return total + 2;
        }, 0);
        return size2 + ((_a = value.match(exports2.ESCAPE_CHARACTERS_REGEXP)) != null ? _a : []).length;
      }
      exports2.calculateStringSize = calculateStringSize;
      function calculateNumberSize(value) {
        return value.toString().length;
      }
      exports2.calculateNumberSize = calculateNumberSize;
    })(misc);
    Object.defineProperty(errors, "__esModule", { value: true });
    errors.wrapError = errors.getErrorMessage = errors.isErrorWithStack = errors.isErrorWithMessage = errors.isErrorWithCode = void 0;
    const pony_cause_1 = ponyCause;
    const misc_1 = misc;
    function isError(error2) {
      return error2 instanceof Error || (0, misc_1.isObject)(error2) && error2.constructor.name === "Error";
    }
    function isErrorWithCode(error2) {
      return typeof error2 === "object" && error2 !== null && "code" in error2;
    }
    errors.isErrorWithCode = isErrorWithCode;
    function isErrorWithMessage(error2) {
      return typeof error2 === "object" && error2 !== null && "message" in error2;
    }
    errors.isErrorWithMessage = isErrorWithMessage;
    function isErrorWithStack(error2) {
      return typeof error2 === "object" && error2 !== null && "stack" in error2;
    }
    errors.isErrorWithStack = isErrorWithStack;
    function getErrorMessage(error2) {
      if (isErrorWithMessage(error2) && typeof error2.message === "string") {
        return error2.message;
      }
      if ((0, misc_1.isNullOrUndefined)(error2)) {
        return "";
      }
      return String(error2);
    }
    errors.getErrorMessage = getErrorMessage;
    function wrapError(originalError, message) {
      if (isError(originalError)) {
        let error2;
        if (Error.length === 2) {
          error2 = new Error(message, { cause: originalError });
        } else {
          error2 = new pony_cause_1.ErrorWithCause(message, { cause: originalError });
        }
        if (isErrorWithCode(originalError)) {
          error2.code = originalError.code;
        }
        return error2;
      }
      if (message.length > 0) {
        return new Error(`${String(originalError)}: ${message}`);
      }
      return new Error(String(originalError));
    }
    errors.wrapError = wrapError;
    Object.defineProperty(assert$1, "__esModule", { value: true });
    assert$1.assertExhaustive = assert$1.assertStruct = assert$1.assert = assert$1.AssertionError = void 0;
    const superstruct_1$3 = dist$4;
    const errors_1 = errors;
    function isConstructable(fn) {
      var _a, _b;
      return Boolean(typeof ((_b = (_a = fn == null ? void 0 : fn.prototype) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name) === "string");
    }
    function getErrorMessageWithoutTrailingPeriod(error2) {
      return (0, errors_1.getErrorMessage)(error2).replace(/\.$/u, "");
    }
    function getError(ErrorWrapper, message) {
      if (isConstructable(ErrorWrapper)) {
        return new ErrorWrapper({
          message
        });
      }
      return ErrorWrapper({
        message
      });
    }
    class AssertionError extends Error {
      constructor(options) {
        super(options.message);
        this.code = "ERR_ASSERTION";
      }
    }
    assert$1.AssertionError = AssertionError;
    function assert(value, message = "Assertion failed.", ErrorWrapper = AssertionError) {
      if (!value) {
        if (message instanceof Error) {
          throw message;
        }
        throw getError(ErrorWrapper, message);
      }
    }
    assert$1.assert = assert;
    function assertStruct(value, struct2, errorPrefix = "Assertion failed", ErrorWrapper = AssertionError) {
      try {
        (0, superstruct_1$3.assert)(value, struct2);
      } catch (error2) {
        throw getError(ErrorWrapper, `${errorPrefix}: ${getErrorMessageWithoutTrailingPeriod(error2)}.`);
      }
    }
    assert$1.assertStruct = assertStruct;
    function assertExhaustive(_object) {
      throw new Error("Invalid branch reached. Should be detected during compilation.");
    }
    assert$1.assertExhaustive = assertExhaustive;
    var base64$1 = {};
    Object.defineProperty(base64$1, "__esModule", { value: true });
    base64$1.base64 = void 0;
    const superstruct_1$2 = dist$4;
    const assert_1$2 = assert$1;
    const base64 = (struct2, options = {}) => {
      var _a, _b;
      const paddingRequired = (_a = options.paddingRequired) != null ? _a : false;
      const characterSet = (_b = options.characterSet) != null ? _b : "base64";
      let letters;
      if (characterSet === "base64") {
        letters = String.raw`[A-Za-z0-9+\/]`;
      } else {
        (0, assert_1$2.assert)(characterSet === "base64url");
        letters = String.raw`[-_A-Za-z0-9]`;
      }
      let re2;
      if (paddingRequired) {
        re2 = new RegExp(`^(?:${letters}{4})*(?:${letters}{3}=|${letters}{2}==)?$`, "u");
      } else {
        re2 = new RegExp(`^(?:${letters}{4})*(?:${letters}{2,3}|${letters}{3}=|${letters}{2}==)?$`, "u");
      }
      return (0, superstruct_1$2.pattern)(struct2, re2);
    };
    base64$1.base64 = base64;
    var bytes = {};
    var hex = {};
    var hasRequiredHex;
    function requireHex() {
      if (hasRequiredHex) return hex;
      hasRequiredHex = 1;
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.remove0x = exports2.add0x = exports2.isValidChecksumAddress = exports2.getChecksumAddress = exports2.isValidHexAddress = exports2.assertIsStrictHexString = exports2.assertIsHexString = exports2.isStrictHexString = exports2.isHexString = exports2.HexChecksumAddressStruct = exports2.HexAddressStruct = exports2.StrictHexStruct = exports2.HexStruct = void 0;
        const superstruct_12 = dist$4;
        const sha3_1 = sha3;
        const assert_12 = assert$1;
        const bytes_12 = requireBytes();
        exports2.HexStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^(?:0x)?[0-9a-f]+$/iu);
        exports2.StrictHexStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^0x[0-9a-f]+$/iu);
        exports2.HexAddressStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^0x[0-9a-f]{40}$/u);
        exports2.HexChecksumAddressStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), /^0x[0-9a-fA-F]{40}$/u);
        function isHexString(value) {
          return (0, superstruct_12.is)(value, exports2.HexStruct);
        }
        exports2.isHexString = isHexString;
        function isStrictHexString(value) {
          return (0, superstruct_12.is)(value, exports2.StrictHexStruct);
        }
        exports2.isStrictHexString = isStrictHexString;
        function assertIsHexString(value) {
          (0, assert_12.assert)(isHexString(value), "Value must be a hexadecimal string.");
        }
        exports2.assertIsHexString = assertIsHexString;
        function assertIsStrictHexString(value) {
          (0, assert_12.assert)(isStrictHexString(value), 'Value must be a hexadecimal string, starting with "0x".');
        }
        exports2.assertIsStrictHexString = assertIsStrictHexString;
        function isValidHexAddress(possibleAddress) {
          return (0, superstruct_12.is)(possibleAddress, exports2.HexAddressStruct) || isValidChecksumAddress(possibleAddress);
        }
        exports2.isValidHexAddress = isValidHexAddress;
        function getChecksumAddress(address) {
          (0, assert_12.assert)((0, superstruct_12.is)(address, exports2.HexChecksumAddressStruct), "Invalid hex address.");
          const unPrefixed = remove0x(address.toLowerCase());
          const unPrefixedHash = remove0x((0, bytes_12.bytesToHex)((0, sha3_1.keccak_256)(unPrefixed)));
          return `0x${unPrefixed.split("").map((character, nibbleIndex) => {
            const hashCharacter = unPrefixedHash[nibbleIndex];
            (0, assert_12.assert)((0, superstruct_12.is)(hashCharacter, (0, superstruct_12.string)()), "Hash shorter than address.");
            return parseInt(hashCharacter, 16) > 7 ? character.toUpperCase() : character;
          }).join("")}`;
        }
        exports2.getChecksumAddress = getChecksumAddress;
        function isValidChecksumAddress(possibleChecksum) {
          if (!(0, superstruct_12.is)(possibleChecksum, exports2.HexChecksumAddressStruct)) {
            return false;
          }
          return getChecksumAddress(possibleChecksum) === possibleChecksum;
        }
        exports2.isValidChecksumAddress = isValidChecksumAddress;
        function add0x(hexadecimal) {
          if (hexadecimal.startsWith("0x")) {
            return hexadecimal;
          }
          if (hexadecimal.startsWith("0X")) {
            return `0x${hexadecimal.substring(2)}`;
          }
          return `0x${hexadecimal}`;
        }
        exports2.add0x = add0x;
        function remove0x(hexadecimal) {
          if (hexadecimal.startsWith("0x") || hexadecimal.startsWith("0X")) {
            return hexadecimal.substring(2);
          }
          return hexadecimal;
        }
        exports2.remove0x = remove0x;
      })(hex);
      return hex;
    }
    var hasRequiredBytes;
    function requireBytes() {
      if (hasRequiredBytes) return bytes;
      hasRequiredBytes = 1;
      Object.defineProperty(bytes, "__esModule", { value: true });
      bytes.createDataView = bytes.concatBytes = bytes.valueToBytes = bytes.base64ToBytes = bytes.stringToBytes = bytes.numberToBytes = bytes.signedBigIntToBytes = bytes.bigIntToBytes = bytes.hexToBytes = bytes.bytesToBase64 = bytes.bytesToString = bytes.bytesToNumber = bytes.bytesToSignedBigInt = bytes.bytesToBigInt = bytes.bytesToHex = bytes.assertIsBytes = bytes.isBytes = void 0;
      const base_1 = lib;
      const assert_12 = assert$1;
      const hex_12 = requireHex();
      const HEX_MINIMUM_NUMBER_CHARACTER = 48;
      const HEX_MAXIMUM_NUMBER_CHARACTER = 58;
      const HEX_CHARACTER_OFFSET = 87;
      function getPrecomputedHexValuesBuilder() {
        const lookupTable = [];
        return () => {
          if (lookupTable.length === 0) {
            for (let i = 0; i < 256; i++) {
              lookupTable.push(i.toString(16).padStart(2, "0"));
            }
          }
          return lookupTable;
        };
      }
      const getPrecomputedHexValues = getPrecomputedHexValuesBuilder();
      function isBytes(value) {
        return value instanceof Uint8Array;
      }
      bytes.isBytes = isBytes;
      function assertIsBytes(value) {
        (0, assert_12.assert)(isBytes(value), "Value must be a Uint8Array.");
      }
      bytes.assertIsBytes = assertIsBytes;
      function bytesToHex(bytes2) {
        assertIsBytes(bytes2);
        if (bytes2.length === 0) {
          return "0x";
        }
        const lookupTable = getPrecomputedHexValues();
        const hexadecimal = new Array(bytes2.length);
        for (let i = 0; i < bytes2.length; i++) {
          hexadecimal[i] = lookupTable[bytes2[i]];
        }
        return (0, hex_12.add0x)(hexadecimal.join(""));
      }
      bytes.bytesToHex = bytesToHex;
      function bytesToBigInt(bytes2) {
        assertIsBytes(bytes2);
        const hexadecimal = bytesToHex(bytes2);
        return BigInt(hexadecimal);
      }
      bytes.bytesToBigInt = bytesToBigInt;
      function bytesToSignedBigInt(bytes2) {
        assertIsBytes(bytes2);
        let value = BigInt(0);
        for (const byte of bytes2) {
          value = (value << BigInt(8)) + BigInt(byte);
        }
        return BigInt.asIntN(bytes2.length * 8, value);
      }
      bytes.bytesToSignedBigInt = bytesToSignedBigInt;
      function bytesToNumber(bytes2) {
        assertIsBytes(bytes2);
        const bigint = bytesToBigInt(bytes2);
        (0, assert_12.assert)(bigint <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead.");
        return Number(bigint);
      }
      bytes.bytesToNumber = bytesToNumber;
      function bytesToString(bytes2) {
        assertIsBytes(bytes2);
        return new TextDecoder().decode(bytes2);
      }
      bytes.bytesToString = bytesToString;
      function bytesToBase64(bytes2) {
        assertIsBytes(bytes2);
        return base_1.base64.encode(bytes2);
      }
      bytes.bytesToBase64 = bytesToBase64;
      function hexToBytes(value) {
        var _a;
        if (((_a = value == null ? void 0 : value.toLowerCase) == null ? void 0 : _a.call(value)) === "0x") {
          return new Uint8Array();
        }
        (0, hex_12.assertIsHexString)(value);
        const strippedValue = (0, hex_12.remove0x)(value).toLowerCase();
        const normalizedValue = strippedValue.length % 2 === 0 ? strippedValue : `0${strippedValue}`;
        const bytes2 = new Uint8Array(normalizedValue.length / 2);
        for (let i = 0; i < bytes2.length; i++) {
          const c1 = normalizedValue.charCodeAt(i * 2);
          const c2 = normalizedValue.charCodeAt(i * 2 + 1);
          const n1 = c1 - (c1 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
          const n2 = c2 - (c2 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
          bytes2[i] = n1 * 16 + n2;
        }
        return bytes2;
      }
      bytes.hexToBytes = hexToBytes;
      function bigIntToBytes(value) {
        (0, assert_12.assert)(typeof value === "bigint", "Value must be a bigint.");
        (0, assert_12.assert)(value >= BigInt(0), "Value must be a non-negative bigint.");
        const hexadecimal = value.toString(16);
        return hexToBytes(hexadecimal);
      }
      bytes.bigIntToBytes = bigIntToBytes;
      function bigIntFits(value, bytes2) {
        (0, assert_12.assert)(bytes2 > 0);
        const mask2 = value >> BigInt(31);
        return !((~value & mask2) + (value & ~mask2) >> BigInt(bytes2 * 8 + -1));
      }
      function signedBigIntToBytes(value, byteLength) {
        (0, assert_12.assert)(typeof value === "bigint", "Value must be a bigint.");
        (0, assert_12.assert)(typeof byteLength === "number", "Byte length must be a number.");
        (0, assert_12.assert)(byteLength > 0, "Byte length must be greater than 0.");
        (0, assert_12.assert)(bigIntFits(value, byteLength), "Byte length is too small to represent the given value.");
        let numberValue = value;
        const bytes2 = new Uint8Array(byteLength);
        for (let i = 0; i < bytes2.length; i++) {
          bytes2[i] = Number(BigInt.asUintN(8, numberValue));
          numberValue >>= BigInt(8);
        }
        return bytes2.reverse();
      }
      bytes.signedBigIntToBytes = signedBigIntToBytes;
      function numberToBytes(value) {
        (0, assert_12.assert)(typeof value === "number", "Value must be a number.");
        (0, assert_12.assert)(value >= 0, "Value must be a non-negative number.");
        (0, assert_12.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToBytes` instead.");
        const hexadecimal = value.toString(16);
        return hexToBytes(hexadecimal);
      }
      bytes.numberToBytes = numberToBytes;
      function stringToBytes(value) {
        (0, assert_12.assert)(typeof value === "string", "Value must be a string.");
        return new TextEncoder().encode(value);
      }
      bytes.stringToBytes = stringToBytes;
      function base64ToBytes(value) {
        (0, assert_12.assert)(typeof value === "string", "Value must be a string.");
        return base_1.base64.decode(value);
      }
      bytes.base64ToBytes = base64ToBytes;
      function valueToBytes(value) {
        if (typeof value === "bigint") {
          return bigIntToBytes(value);
        }
        if (typeof value === "number") {
          return numberToBytes(value);
        }
        if (typeof value === "string") {
          if (value.startsWith("0x")) {
            return hexToBytes(value);
          }
          return stringToBytes(value);
        }
        if (isBytes(value)) {
          return value;
        }
        throw new TypeError(`Unsupported value type: "${typeof value}".`);
      }
      bytes.valueToBytes = valueToBytes;
      function concatBytes(values) {
        const normalizedValues = new Array(values.length);
        let byteLength = 0;
        for (let i = 0; i < values.length; i++) {
          const value = valueToBytes(values[i]);
          normalizedValues[i] = value;
          byteLength += value.length;
        }
        const bytes2 = new Uint8Array(byteLength);
        for (let i = 0, offset = 0; i < normalizedValues.length; i++) {
          bytes2.set(normalizedValues[i], offset);
          offset += normalizedValues[i].length;
        }
        return bytes2;
      }
      bytes.concatBytes = concatBytes;
      function createDataView(bytes2) {
        if (typeof Buffer !== "undefined" && bytes2 instanceof Buffer) {
          const buffer = bytes2.buffer.slice(bytes2.byteOffset, bytes2.byteOffset + bytes2.byteLength);
          return new DataView(buffer);
        }
        return new DataView(bytes2.buffer, bytes2.byteOffset, bytes2.byteLength);
      }
      bytes.createDataView = createDataView;
      return bytes;
    }
    var caipTypes = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.toCaipChainId = exports2.parseCaipAccountId = exports2.parseCaipChainId = exports2.isCaipAccountAddress = exports2.isCaipAccountId = exports2.isCaipReference = exports2.isCaipNamespace = exports2.isCaipChainId = exports2.KnownCaipNamespace = exports2.CaipAccountAddressStruct = exports2.CaipAccountIdStruct = exports2.CaipReferenceStruct = exports2.CaipNamespaceStruct = exports2.CaipChainIdStruct = exports2.CAIP_ACCOUNT_ADDRESS_REGEX = exports2.CAIP_ACCOUNT_ID_REGEX = exports2.CAIP_REFERENCE_REGEX = exports2.CAIP_NAMESPACE_REGEX = exports2.CAIP_CHAIN_ID_REGEX = void 0;
      const superstruct_12 = dist$4;
      exports2.CAIP_CHAIN_ID_REGEX = new RegExp("^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$", "u");
      exports2.CAIP_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u;
      exports2.CAIP_REFERENCE_REGEX = /^[-_a-zA-Z0-9]{1,32}$/u;
      exports2.CAIP_ACCOUNT_ID_REGEX = new RegExp("^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$", "u");
      exports2.CAIP_ACCOUNT_ADDRESS_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u;
      exports2.CaipChainIdStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_CHAIN_ID_REGEX);
      exports2.CaipNamespaceStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_NAMESPACE_REGEX);
      exports2.CaipReferenceStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_REFERENCE_REGEX);
      exports2.CaipAccountIdStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_ACCOUNT_ID_REGEX);
      exports2.CaipAccountAddressStruct = (0, superstruct_12.pattern)((0, superstruct_12.string)(), exports2.CAIP_ACCOUNT_ADDRESS_REGEX);
      (function(KnownCaipNamespace) {
        KnownCaipNamespace["Eip155"] = "eip155";
      })(exports2.KnownCaipNamespace || (exports2.KnownCaipNamespace = {}));
      function isCaipChainId(value) {
        return (0, superstruct_12.is)(value, exports2.CaipChainIdStruct);
      }
      exports2.isCaipChainId = isCaipChainId;
      function isCaipNamespace(value) {
        return (0, superstruct_12.is)(value, exports2.CaipNamespaceStruct);
      }
      exports2.isCaipNamespace = isCaipNamespace;
      function isCaipReference(value) {
        return (0, superstruct_12.is)(value, exports2.CaipReferenceStruct);
      }
      exports2.isCaipReference = isCaipReference;
      function isCaipAccountId(value) {
        return (0, superstruct_12.is)(value, exports2.CaipAccountIdStruct);
      }
      exports2.isCaipAccountId = isCaipAccountId;
      function isCaipAccountAddress(value) {
        return (0, superstruct_12.is)(value, exports2.CaipAccountAddressStruct);
      }
      exports2.isCaipAccountAddress = isCaipAccountAddress;
      function parseCaipChainId(caipChainId) {
        const match = exports2.CAIP_CHAIN_ID_REGEX.exec(caipChainId);
        if (!(match == null ? void 0 : match.groups)) {
          throw new Error("Invalid CAIP chain ID.");
        }
        return {
          namespace: match.groups.namespace,
          reference: match.groups.reference
        };
      }
      exports2.parseCaipChainId = parseCaipChainId;
      function parseCaipAccountId(caipAccountId) {
        const match = exports2.CAIP_ACCOUNT_ID_REGEX.exec(caipAccountId);
        if (!(match == null ? void 0 : match.groups)) {
          throw new Error("Invalid CAIP account ID.");
        }
        return {
          address: match.groups.accountAddress,
          chainId: match.groups.chainId,
          chain: {
            namespace: match.groups.namespace,
            reference: match.groups.reference
          }
        };
      }
      exports2.parseCaipAccountId = parseCaipAccountId;
      function toCaipChainId(namespace, reference) {
        if (!isCaipNamespace(namespace)) {
          throw new Error(`Invalid "namespace", must match: ${exports2.CAIP_NAMESPACE_REGEX.toString()}`);
        }
        if (!isCaipReference(reference)) {
          throw new Error(`Invalid "reference", must match: ${exports2.CAIP_REFERENCE_REGEX.toString()}`);
        }
        return `${namespace}:${reference}`;
      }
      exports2.toCaipChainId = toCaipChainId;
    })(caipTypes);
    var checksum = {};
    Object.defineProperty(checksum, "__esModule", { value: true });
    checksum.ChecksumStruct = void 0;
    const superstruct_1$1 = dist$4;
    const base64_1 = base64$1;
    checksum.ChecksumStruct = (0, superstruct_1$1.size)((0, base64_1.base64)((0, superstruct_1$1.string)(), { paddingRequired: true }), 44, 44);
    var coercers = {};
    Object.defineProperty(coercers, "__esModule", { value: true });
    coercers.createHex = coercers.createBytes = coercers.createBigInt = coercers.createNumber = void 0;
    const superstruct_1 = dist$4;
    const assert_1$1 = assert$1;
    const bytes_1 = requireBytes();
    const hex_1$1 = requireHex();
    const NumberLikeStruct = (0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.bigint)(), (0, superstruct_1.string)(), hex_1$1.StrictHexStruct]);
    const NumberCoercer = (0, superstruct_1.coerce)((0, superstruct_1.number)(), NumberLikeStruct, Number);
    const BigIntCoercer = (0, superstruct_1.coerce)((0, superstruct_1.bigint)(), NumberLikeStruct, BigInt);
    (0, superstruct_1.union)([hex_1$1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array)]);
    const BytesCoercer = (0, superstruct_1.coerce)((0, superstruct_1.instance)(Uint8Array), (0, superstruct_1.union)([hex_1$1.StrictHexStruct]), bytes_1.hexToBytes);
    const HexCoercer = (0, superstruct_1.coerce)(hex_1$1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array), bytes_1.bytesToHex);
    function createNumber(value) {
      try {
        const result = (0, superstruct_1.create)(value, NumberCoercer);
        (0, assert_1$1.assert)(Number.isFinite(result), `Expected a number-like value, got "${value}".`);
        return result;
      } catch (error2) {
        if (error2 instanceof superstruct_1.StructError) {
          throw new Error(`Expected a number-like value, got "${value}".`);
        }
        throw error2;
      }
    }
    coercers.createNumber = createNumber;
    function createBigInt(value) {
      try {
        return (0, superstruct_1.create)(value, BigIntCoercer);
      } catch (error2) {
        if (error2 instanceof superstruct_1.StructError) {
          throw new Error(`Expected a number-like value, got "${String(error2.value)}".`);
        }
        throw error2;
      }
    }
    coercers.createBigInt = createBigInt;
    function createBytes(value) {
      if (typeof value === "string" && value.toLowerCase() === "0x") {
        return new Uint8Array();
      }
      try {
        return (0, superstruct_1.create)(value, BytesCoercer);
      } catch (error2) {
        if (error2 instanceof superstruct_1.StructError) {
          throw new Error(`Expected a bytes-like value, got "${String(error2.value)}".`);
        }
        throw error2;
      }
    }
    coercers.createBytes = createBytes;
    function createHex(value) {
      if (value instanceof Uint8Array && value.length === 0 || typeof value === "string" && value.toLowerCase() === "0x") {
        return "0x";
      }
      try {
        return (0, superstruct_1.create)(value, HexCoercer);
      } catch (error2) {
        if (error2 instanceof superstruct_1.StructError) {
          throw new Error(`Expected a bytes-like value, got "${String(error2.value)}".`);
        }
        throw error2;
      }
    }
    coercers.createHex = createHex;
    var collections = {};
    var __classPrivateFieldGet = commonjsGlobal && commonjsGlobal.__classPrivateFieldGet || function(receiver, state2, kind, f2) {
      if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
    };
    var __classPrivateFieldSet = commonjsGlobal && commonjsGlobal.__classPrivateFieldSet || function(receiver, state2, value, kind, f2) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
    };
    var _FrozenMap_map, _FrozenSet_set;
    Object.defineProperty(collections, "__esModule", { value: true });
    collections.FrozenSet = collections.FrozenMap = void 0;
    class FrozenMap {
      get size() {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").size;
      }
      [(_FrozenMap_map = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f")[Symbol.iterator]();
      }
      constructor(entries) {
        _FrozenMap_map.set(this, void 0);
        __classPrivateFieldSet(this, _FrozenMap_map, new Map(entries), "f");
        Object.freeze(this);
      }
      entries() {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").entries();
      }
      forEach(callbackfn, thisArg) {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").forEach((value, key, _map) => callbackfn.call(thisArg, value, key, this));
      }
      get(key) {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").get(key);
      }
      has(key) {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").has(key);
      }
      keys() {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").keys();
      }
      values() {
        return __classPrivateFieldGet(this, _FrozenMap_map, "f").values();
      }
      toString() {
        return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([key, value]) => `${String(key)} => ${String(value)}`).join(", ")} ` : ""}}`;
      }
    }
    collections.FrozenMap = FrozenMap;
    class FrozenSet {
      get size() {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f").size;
      }
      [(_FrozenSet_set = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f")[Symbol.iterator]();
      }
      constructor(values) {
        _FrozenSet_set.set(this, void 0);
        __classPrivateFieldSet(this, _FrozenSet_set, new Set(values), "f");
        Object.freeze(this);
      }
      entries() {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f").entries();
      }
      forEach(callbackfn, thisArg) {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f").forEach((value, value2, _set) => callbackfn.call(thisArg, value, value2, this));
      }
      has(value) {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f").has(value);
      }
      keys() {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f").keys();
      }
      values() {
        return __classPrivateFieldGet(this, _FrozenSet_set, "f").values();
      }
      toString() {
        return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((member) => String(member)).join(", ")} ` : ""}}`;
      }
    }
    collections.FrozenSet = FrozenSet;
    Object.freeze(FrozenMap);
    Object.freeze(FrozenMap.prototype);
    Object.freeze(FrozenSet);
    Object.freeze(FrozenSet.prototype);
    var encryptionTypes = {};
    Object.defineProperty(encryptionTypes, "__esModule", { value: true });
    var json = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getJsonRpcIdValidator = exports2.assertIsJsonRpcError = exports2.isJsonRpcError = exports2.assertIsJsonRpcFailure = exports2.isJsonRpcFailure = exports2.assertIsJsonRpcSuccess = exports2.isJsonRpcSuccess = exports2.assertIsJsonRpcResponse = exports2.isJsonRpcResponse = exports2.assertIsPendingJsonRpcResponse = exports2.isPendingJsonRpcResponse = exports2.JsonRpcResponseStruct = exports2.JsonRpcFailureStruct = exports2.JsonRpcSuccessStruct = exports2.PendingJsonRpcResponseStruct = exports2.assertIsJsonRpcRequest = exports2.isJsonRpcRequest = exports2.assertIsJsonRpcNotification = exports2.isJsonRpcNotification = exports2.JsonRpcNotificationStruct = exports2.JsonRpcRequestStruct = exports2.JsonRpcParamsStruct = exports2.JsonRpcErrorStruct = exports2.JsonRpcIdStruct = exports2.JsonRpcVersionStruct = exports2.jsonrpc2 = exports2.getJsonSize = exports2.getSafeJson = exports2.isValidJson = exports2.JsonStruct = exports2.UnsafeJsonStruct = exports2.exactOptional = exports2.object = void 0;
      const superstruct_12 = dist$4;
      const assert_12 = assert$1;
      const misc_12 = misc;
      const object = (schema) => (
        // The type is slightly different from a regular object struct, because we
        // want to make properties with `undefined` in their type optional, but not
        // `undefined` itself. This means that we need a type cast.
        (0, superstruct_12.object)(schema)
      );
      exports2.object = object;
      function hasOptional({ path, branch }) {
        const field = path[path.length - 1];
        return (0, misc_12.hasProperty)(branch[branch.length - 2], field);
      }
      function exactOptional(struct2) {
        return new superstruct_12.Struct(__spreadProps(__spreadValues({}, struct2), {
          type: `optional ${struct2.type}`,
          validator: (value, context) => !hasOptional(context) || struct2.validator(value, context),
          refiner: (value, context) => !hasOptional(context) || struct2.refiner(value, context)
        }));
      }
      exports2.exactOptional = exactOptional;
      const finiteNumber = () => (0, superstruct_12.define)("finite number", (value) => {
        return (0, superstruct_12.is)(value, (0, superstruct_12.number)()) && Number.isFinite(value);
      });
      exports2.UnsafeJsonStruct = (0, superstruct_12.union)([
        (0, superstruct_12.literal)(null),
        (0, superstruct_12.boolean)(),
        finiteNumber(),
        (0, superstruct_12.string)(),
        (0, superstruct_12.array)((0, superstruct_12.lazy)(() => exports2.UnsafeJsonStruct)),
        (0, superstruct_12.record)((0, superstruct_12.string)(), (0, superstruct_12.lazy)(() => exports2.UnsafeJsonStruct))
      ]);
      exports2.JsonStruct = (0, superstruct_12.coerce)(exports2.UnsafeJsonStruct, (0, superstruct_12.any)(), (value) => {
        (0, assert_12.assertStruct)(value, exports2.UnsafeJsonStruct);
        return JSON.parse(JSON.stringify(value, (propKey, propValue) => {
          if (propKey === "__proto__" || propKey === "constructor") {
            return void 0;
          }
          return propValue;
        }));
      });
      function isValidJson(value) {
        try {
          getSafeJson(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports2.isValidJson = isValidJson;
      function getSafeJson(value) {
        return (0, superstruct_12.create)(value, exports2.JsonStruct);
      }
      exports2.getSafeJson = getSafeJson;
      function getJsonSize(value) {
        (0, assert_12.assertStruct)(value, exports2.JsonStruct, "Invalid JSON value");
        const json2 = JSON.stringify(value);
        return new TextEncoder().encode(json2).byteLength;
      }
      exports2.getJsonSize = getJsonSize;
      exports2.jsonrpc2 = "2.0";
      exports2.JsonRpcVersionStruct = (0, superstruct_12.literal)(exports2.jsonrpc2);
      exports2.JsonRpcIdStruct = (0, superstruct_12.nullable)((0, superstruct_12.union)([(0, superstruct_12.number)(), (0, superstruct_12.string)()]));
      exports2.JsonRpcErrorStruct = (0, exports2.object)({
        code: (0, superstruct_12.integer)(),
        message: (0, superstruct_12.string)(),
        data: exactOptional(exports2.JsonStruct),
        stack: exactOptional((0, superstruct_12.string)())
      });
      exports2.JsonRpcParamsStruct = (0, superstruct_12.union)([(0, superstruct_12.record)((0, superstruct_12.string)(), exports2.JsonStruct), (0, superstruct_12.array)(exports2.JsonStruct)]);
      exports2.JsonRpcRequestStruct = (0, exports2.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        method: (0, superstruct_12.string)(),
        params: exactOptional(exports2.JsonRpcParamsStruct)
      });
      exports2.JsonRpcNotificationStruct = (0, exports2.object)({
        jsonrpc: exports2.JsonRpcVersionStruct,
        method: (0, superstruct_12.string)(),
        params: exactOptional(exports2.JsonRpcParamsStruct)
      });
      function isJsonRpcNotification(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcNotificationStruct);
      }
      exports2.isJsonRpcNotification = isJsonRpcNotification;
      function assertIsJsonRpcNotification(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", ErrorWrapper);
      }
      exports2.assertIsJsonRpcNotification = assertIsJsonRpcNotification;
      function isJsonRpcRequest(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcRequestStruct);
      }
      exports2.isJsonRpcRequest = isJsonRpcRequest;
      function assertIsJsonRpcRequest(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcRequestStruct, "Invalid JSON-RPC request", ErrorWrapper);
      }
      exports2.assertIsJsonRpcRequest = assertIsJsonRpcRequest;
      exports2.PendingJsonRpcResponseStruct = (0, superstruct_12.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        result: (0, superstruct_12.optional)((0, superstruct_12.unknown)()),
        error: (0, superstruct_12.optional)(exports2.JsonRpcErrorStruct)
      });
      exports2.JsonRpcSuccessStruct = (0, exports2.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        result: exports2.JsonStruct
      });
      exports2.JsonRpcFailureStruct = (0, exports2.object)({
        id: exports2.JsonRpcIdStruct,
        jsonrpc: exports2.JsonRpcVersionStruct,
        error: exports2.JsonRpcErrorStruct
      });
      exports2.JsonRpcResponseStruct = (0, superstruct_12.union)([
        exports2.JsonRpcSuccessStruct,
        exports2.JsonRpcFailureStruct
      ]);
      function isPendingJsonRpcResponse(response) {
        return (0, superstruct_12.is)(response, exports2.PendingJsonRpcResponseStruct);
      }
      exports2.isPendingJsonRpcResponse = isPendingJsonRpcResponse;
      function assertIsPendingJsonRpcResponse(response, ErrorWrapper) {
        (0, assert_12.assertStruct)(response, exports2.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", ErrorWrapper);
      }
      exports2.assertIsPendingJsonRpcResponse = assertIsPendingJsonRpcResponse;
      function isJsonRpcResponse(response) {
        return (0, superstruct_12.is)(response, exports2.JsonRpcResponseStruct);
      }
      exports2.isJsonRpcResponse = isJsonRpcResponse;
      function assertIsJsonRpcResponse(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcResponseStruct, "Invalid JSON-RPC response", ErrorWrapper);
      }
      exports2.assertIsJsonRpcResponse = assertIsJsonRpcResponse;
      function isJsonRpcSuccess(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcSuccessStruct);
      }
      exports2.isJsonRpcSuccess = isJsonRpcSuccess;
      function assertIsJsonRpcSuccess(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", ErrorWrapper);
      }
      exports2.assertIsJsonRpcSuccess = assertIsJsonRpcSuccess;
      function isJsonRpcFailure(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcFailureStruct);
      }
      exports2.isJsonRpcFailure = isJsonRpcFailure;
      function assertIsJsonRpcFailure(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", ErrorWrapper);
      }
      exports2.assertIsJsonRpcFailure = assertIsJsonRpcFailure;
      function isJsonRpcError(value) {
        return (0, superstruct_12.is)(value, exports2.JsonRpcErrorStruct);
      }
      exports2.isJsonRpcError = isJsonRpcError;
      function assertIsJsonRpcError(value, ErrorWrapper) {
        (0, assert_12.assertStruct)(value, exports2.JsonRpcErrorStruct, "Invalid JSON-RPC error", ErrorWrapper);
      }
      exports2.assertIsJsonRpcError = assertIsJsonRpcError;
      function getJsonRpcIdValidator(options) {
        const { permitEmptyString, permitFractions, permitNull } = __spreadValues({
          permitEmptyString: true,
          permitFractions: false,
          permitNull: true
        }, options);
        const isValidJsonRpcId = (id2) => {
          return Boolean(typeof id2 === "number" && (permitFractions || Number.isInteger(id2)) || typeof id2 === "string" && (permitEmptyString || id2.length > 0) || permitNull && id2 === null);
        };
        return isValidJsonRpcId;
      }
      exports2.getJsonRpcIdValidator = getJsonRpcIdValidator;
    })(json);
    var keyring = {};
    Object.defineProperty(keyring, "__esModule", { value: true });
    var logging = {};
    var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(logging, "__esModule", { value: true });
    logging.createModuleLogger = logging.createProjectLogger = void 0;
    const debug_1 = __importDefault$1(browserExports);
    const globalLogger = (0, debug_1.default)("metamask");
    function createProjectLogger(projectName) {
      return globalLogger.extend(projectName);
    }
    logging.createProjectLogger = createProjectLogger;
    function createModuleLogger(projectLogger, moduleName) {
      return projectLogger.extend(moduleName);
    }
    logging.createModuleLogger = createModuleLogger;
    var number = {};
    Object.defineProperty(number, "__esModule", { value: true });
    number.hexToBigInt = number.hexToNumber = number.bigIntToHex = number.numberToHex = void 0;
    const assert_1 = assert$1;
    const hex_1 = requireHex();
    const numberToHex = (value) => {
      (0, assert_1.assert)(typeof value === "number", "Value must be a number.");
      (0, assert_1.assert)(value >= 0, "Value must be a non-negative number.");
      (0, assert_1.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToHex` instead.");
      return (0, hex_1.add0x)(value.toString(16));
    };
    number.numberToHex = numberToHex;
    const bigIntToHex = (value) => {
      (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
      (0, assert_1.assert)(value >= 0, "Value must be a non-negative bigint.");
      return (0, hex_1.add0x)(value.toString(16));
    };
    number.bigIntToHex = bigIntToHex;
    const hexToNumber = (value) => {
      (0, hex_1.assertIsHexString)(value);
      const numberValue = parseInt(value, 16);
      (0, assert_1.assert)(Number.isSafeInteger(numberValue), "Value is not a safe integer. Use `hexToBigInt` instead.");
      return numberValue;
    };
    number.hexToNumber = hexToNumber;
    const hexToBigInt = (value) => {
      (0, hex_1.assertIsHexString)(value);
      return BigInt((0, hex_1.add0x)(value));
    };
    number.hexToBigInt = hexToBigInt;
    var opaque = {};
    Object.defineProperty(opaque, "__esModule", { value: true });
    var promise = {};
    Object.defineProperty(promise, "__esModule", { value: true });
    promise.createDeferredPromise = void 0;
    function createDeferredPromise({ suppressUnhandledRejection = false } = {}) {
      let resolve;
      let reject;
      const promise2 = new Promise((innerResolve, innerReject) => {
        resolve = innerResolve;
        reject = innerReject;
      });
      if (suppressUnhandledRejection) {
        promise2.catch((_error) => {
        });
      }
      return { promise: promise2, resolve, reject };
    }
    promise.createDeferredPromise = createDeferredPromise;
    var time = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.timeSince = exports2.inMilliseconds = exports2.Duration = void 0;
      (function(Duration) {
        Duration[Duration["Millisecond"] = 1] = "Millisecond";
        Duration[Duration["Second"] = 1e3] = "Second";
        Duration[Duration["Minute"] = 6e4] = "Minute";
        Duration[Duration["Hour"] = 36e5] = "Hour";
        Duration[Duration["Day"] = 864e5] = "Day";
        Duration[Duration["Week"] = 6048e5] = "Week";
        Duration[Duration["Year"] = 31536e6] = "Year";
      })(exports2.Duration || (exports2.Duration = {}));
      const isNonNegativeInteger = (number2) => Number.isInteger(number2) && number2 >= 0;
      const assertIsNonNegativeInteger = (number2, name) => {
        if (!isNonNegativeInteger(number2)) {
          throw new Error(`"${name}" must be a non-negative integer. Received: "${number2}".`);
        }
      };
      function inMilliseconds(count, duration) {
        assertIsNonNegativeInteger(count, "count");
        return count * duration;
      }
      exports2.inMilliseconds = inMilliseconds;
      function timeSince(timestamp) {
        assertIsNonNegativeInteger(timestamp, "timestamp");
        return Date.now() - timestamp;
      }
      exports2.timeSince = timeSince;
    })(time);
    var transactionTypes = {};
    Object.defineProperty(transactionTypes, "__esModule", { value: true });
    var versions = {};
    (function(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.satisfiesVersionRange = exports2.gtRange = exports2.gtVersion = exports2.assertIsSemVerRange = exports2.assertIsSemVerVersion = exports2.isValidSemVerRange = exports2.isValidSemVerVersion = exports2.VersionRangeStruct = exports2.VersionStruct = void 0;
      const superstruct_12 = dist$4;
      const semver_1 = semver;
      const assert_12 = assert$1;
      exports2.VersionStruct = (0, superstruct_12.refine)((0, superstruct_12.string)(), "Version", (value) => {
        if ((0, semver_1.valid)(value) === null) {
          return `Expected SemVer version, got "${value}"`;
        }
        return true;
      });
      exports2.VersionRangeStruct = (0, superstruct_12.refine)((0, superstruct_12.string)(), "Version range", (value) => {
        if ((0, semver_1.validRange)(value) === null) {
          return `Expected SemVer range, got "${value}"`;
        }
        return true;
      });
      function isValidSemVerVersion(version) {
        return (0, superstruct_12.is)(version, exports2.VersionStruct);
      }
      exports2.isValidSemVerVersion = isValidSemVerVersion;
      function isValidSemVerRange(versionRange) {
        return (0, superstruct_12.is)(versionRange, exports2.VersionRangeStruct);
      }
      exports2.isValidSemVerRange = isValidSemVerRange;
      function assertIsSemVerVersion(version) {
        (0, assert_12.assertStruct)(version, exports2.VersionStruct);
      }
      exports2.assertIsSemVerVersion = assertIsSemVerVersion;
      function assertIsSemVerRange(range2) {
        (0, assert_12.assertStruct)(range2, exports2.VersionRangeStruct);
      }
      exports2.assertIsSemVerRange = assertIsSemVerRange;
      function gtVersion(version1, version2) {
        return (0, semver_1.gt)(version1, version2);
      }
      exports2.gtVersion = gtVersion;
      function gtRange(version, range2) {
        return (0, semver_1.gtr)(version, range2);
      }
      exports2.gtRange = gtRange;
      function satisfiesVersionRange(version, versionRange) {
        return (0, semver_1.satisfies)(version, versionRange, {
          includePrerelease: true
        });
      }
      exports2.satisfiesVersionRange = satisfiesVersionRange;
    })(versions);
    (function(exports2) {
      var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m2, k2);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      } : function(o, m2, k2, k22) {
        if (k22 === void 0) k22 = k2;
        o[k22] = m2[k2];
      });
      var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports3) {
        for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2)) __createBinding(exports3, m2, p2);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(assert$1, exports2);
      __exportStar(base64$1, exports2);
      __exportStar(requireBytes(), exports2);
      __exportStar(caipTypes, exports2);
      __exportStar(checksum, exports2);
      __exportStar(coercers, exports2);
      __exportStar(collections, exports2);
      __exportStar(encryptionTypes, exports2);
      __exportStar(errors, exports2);
      __exportStar(requireHex(), exports2);
      __exportStar(json, exports2);
      __exportStar(keyring, exports2);
      __exportStar(logging, exports2);
      __exportStar(misc, exports2);
      __exportStar(number, exports2);
      __exportStar(opaque, exports2);
      __exportStar(promise, exports2);
      __exportStar(time, exports2);
      __exportStar(transactionTypes, exports2);
      __exportStar(versions, exports2);
    })(dist$3);
    Object.defineProperty(chunk2LXAFMJD, "__esModule", { value: true });
    function _interopRequireDefault$4(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _chunkZ4BLTVTBjs = chunkZ4BLTVTB;
    var _rpcerrors$3 = dist$6;
    var _safeeventemitter$2 = cjs;
    var _safeeventemitter2$2 = _interopRequireDefault$4(_safeeventemitter$2);
    var _utils$1 = dist$3;
    var DESTROYED_ERROR_MESSAGE = "This engine is destroyed and can no longer be used.";
    var _isDestroyed, _middleware, _notificationHandler, _assertIsNotDestroyed, assertIsNotDestroyed_fn, _handleBatch, handleBatch_fn, _handle, handle_fn, _processRequest, processRequest_fn, _runAllMiddleware, runAllMiddleware_fn, _runMiddleware, runMiddleware_fn, _runReturnHandlers, runReturnHandlers_fn, _checkForCompletion, checkForCompletion_fn;
    var _JsonRpcEngine = class _JsonRpcEngine2 extends _safeeventemitter2$2.default {
      /**
       * Constructs a {@link JsonRpcEngine} instance.
       *
       * @param options - Options bag.
       * @param options.notificationHandler - A function for handling JSON-RPC
       * notifications. A JSON-RPC notification is defined as a JSON-RPC request
       * without an `id` property. If this option is _not_ provided, notifications
       * will be treated the same as requests. If this option _is_ provided,
       * notifications will be passed to the handler function without touching
       * the engine's middleware stack. This function should not throw or reject.
       */
      constructor({ notificationHandler } = {}) {
        super();
        _chunkZ4BLTVTBjs.__privateAdd.call(void 0, this, _assertIsNotDestroyed);
        _chunkZ4BLTVTBjs.__privateAdd.call(void 0, this, _handleBatch);
        _chunkZ4BLTVTBjs.__privateAdd.call(void 0, this, _handle);
        _chunkZ4BLTVTBjs.__privateAdd.call(void 0, this, _isDestroyed, false);
        _chunkZ4BLTVTBjs.__privateAdd.call(void 0, this, _middleware, void 0);
        _chunkZ4BLTVTBjs.__privateAdd.call(void 0, this, _notificationHandler, void 0);
        _chunkZ4BLTVTBjs.__privateSet.call(void 0, this, _middleware, []);
        _chunkZ4BLTVTBjs.__privateSet.call(void 0, this, _notificationHandler, notificationHandler);
      }
      /**
       * Calls the `destroy()` function of any middleware with that property, clears
       * the middleware array, and marks this engine as destroyed. A destroyed
       * engine cannot be used.
       */
      destroy() {
        _chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _middleware).forEach(
          (middleware) => {
            if (
              // `in` walks the prototype chain, which is probably the desired
              // behavior here.
              "destroy" in middleware && typeof middleware.destroy === "function"
            ) {
              middleware.destroy();
            }
          }
        );
        _chunkZ4BLTVTBjs.__privateSet.call(void 0, this, _middleware, []);
        _chunkZ4BLTVTBjs.__privateSet.call(void 0, this, _isDestroyed, true);
      }
      /**
       * Add a middleware function to the engine's middleware stack.
       *
       * @param middleware - The middleware function to add.
       */
      push(middleware) {
        _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _assertIsNotDestroyed, assertIsNotDestroyed_fn).call(this);
        _chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _middleware).push(middleware);
      }
      handle(req, callback) {
        _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _assertIsNotDestroyed, assertIsNotDestroyed_fn).call(this);
        if (callback && typeof callback !== "function") {
          throw new Error('"callback" must be a function if provided.');
        }
        if (Array.isArray(req)) {
          if (callback) {
            return _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _handleBatch, handleBatch_fn).call(
              this,
              req,
              // This assertion is safe because of the runtime checks validating that `req` is an array and `callback` is defined.
              // There is only one overload signature that satisfies both conditions, and its `callback` type is the one that's being asserted.
              callback
            );
          }
          return _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _handleBatch, handleBatch_fn).call(this, req);
        }
        if (callback) {
          return _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _handle, handle_fn).call(this, req, callback);
        }
        return this._promiseHandle(req);
      }
      /**
       * Returns this engine as a middleware function that can be pushed to other
       * engines.
       *
       * @returns This engine as a middleware function.
       */
      asMiddleware() {
        _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _assertIsNotDestroyed, assertIsNotDestroyed_fn).call(this);
        return (req, res, next, end) => __async(this, null, function* () {
          var _a, _b;
          try {
            const [middlewareError, isComplete, returnHandlers] = yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _a = _JsonRpcEngine2, _runAllMiddleware, runAllMiddleware_fn).call(_a, req, res, _chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _middleware));
            if (isComplete) {
              yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _b = _JsonRpcEngine2, _runReturnHandlers, runReturnHandlers_fn).call(_b, returnHandlers);
              return end(middlewareError);
            }
            return next((handlerCallback) => __async(this, null, function* () {
              var _a2;
              try {
                yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _a2 = _JsonRpcEngine2, _runReturnHandlers, runReturnHandlers_fn).call(_a2, returnHandlers);
              } catch (error2) {
                return handlerCallback(error2);
              }
              return handlerCallback();
            }));
          } catch (error2) {
            return end(error2);
          }
        });
      }
      /**
       * A promise-wrapped _handle.
       *
       * @param request - The JSON-RPC request.
       * @returns The JSON-RPC response.
       */
      // This function is used in tests, so we cannot easily change it to use the
      // hash syntax.
      // eslint-disable-next-line no-restricted-syntax
      _promiseHandle(request) {
        return __async(this, null, function* () {
          return new Promise((resolve, reject) => {
            _chunkZ4BLTVTBjs.__privateMethod.call(void 0, this, _handle, handle_fn).call(this, request, (error2, res) => {
              if (error2 && res === void 0) {
                reject(error2);
              } else {
                resolve(res);
              }
            }).catch(reject);
          });
        });
      }
    };
    _isDestroyed = /* @__PURE__ */ new WeakMap();
    _middleware = /* @__PURE__ */ new WeakMap();
    _notificationHandler = /* @__PURE__ */ new WeakMap();
    _assertIsNotDestroyed = /* @__PURE__ */ new WeakSet();
    assertIsNotDestroyed_fn = function() {
      if (_chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _isDestroyed)) {
        throw new Error(DESTROYED_ERROR_MESSAGE);
      }
    };
    _handleBatch = /* @__PURE__ */ new WeakSet();
    handleBatch_fn = function(requests, callback) {
      return __async(this, null, function* () {
        try {
          if (requests.length === 0) {
            const response = [
              {
                id: null,
                jsonrpc: "2.0",
                error: new (0, _rpcerrors$3.JsonRpcError)(
                  _rpcerrors$3.errorCodes.rpc.invalidRequest,
                  "Request batch must contain plain objects. Received an empty array"
                )
              }
            ];
            if (callback) {
              return callback(null, response);
            }
            return response;
          }
          const responses = (yield Promise.all(
            // 1. Begin executing each request in the order received
            requests.map(this._promiseHandle.bind(this))
          )).filter(
            // Filter out any notification responses.
            (response) => response !== void 0
          );
          if (callback) {
            return callback(null, responses);
          }
          return responses;
        } catch (error2) {
          if (callback) {
            return callback(error2);
          }
          throw error2;
        }
      });
    };
    _handle = /* @__PURE__ */ new WeakSet();
    handle_fn = function(callerReq, callback) {
      return __async(this, null, function* () {
        var _a2;
        var _a;
        if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== "object") {
          const error22 = new _rpcerrors$3.JsonRpcError(
            _rpcerrors$3.errorCodes.rpc.invalidRequest,
            `Requests must be plain objects. Received: ${typeof callerReq}`,
            { request: callerReq }
          );
          return callback(error22, { id: null, jsonrpc: "2.0", error: error22 });
        }
        if (typeof callerReq.method !== "string") {
          const error22 = new _rpcerrors$3.JsonRpcError(
            _rpcerrors$3.errorCodes.rpc.invalidRequest,
            `Must specify a string method. Received: ${typeof callerReq.method}`,
            { request: callerReq }
          );
          if (_chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _notificationHandler) && !_utils$1.isJsonRpcRequest.call(void 0, callerReq)) {
            return callback(null);
          }
          return callback(error22, {
            // Typecast: This could be a notification, but we want to access the
            // `id` even if it doesn't exist.
            id: (_a2 = callerReq.id) != null ? _a2 : null,
            jsonrpc: "2.0",
            error: error22
          });
        } else if (_chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _notificationHandler) && _utils$1.isJsonRpcNotification.call(void 0, callerReq) && !_utils$1.isJsonRpcRequest.call(void 0, callerReq)) {
          try {
            yield _chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _notificationHandler).call(this, callerReq);
          } catch (error22) {
            return callback(error22);
          }
          return callback(null);
        }
        let error2 = null;
        const req = __spreadValues({}, callerReq);
        const res = {
          id: req.id,
          jsonrpc: req.jsonrpc
        };
        try {
          yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _a = _JsonRpcEngine, _processRequest, processRequest_fn).call(_a, req, res, _chunkZ4BLTVTBjs.__privateGet.call(void 0, this, _middleware));
        } catch (_error) {
          error2 = _error;
        }
        if (error2) {
          delete res.result;
          if (!res.error) {
            res.error = _rpcerrors$3.serializeError.call(void 0, error2);
          }
        }
        return callback(error2, res);
      });
    };
    _processRequest = /* @__PURE__ */ new WeakSet();
    processRequest_fn = function(req, res, middlewares) {
      return __async(this, null, function* () {
        var _a, _b, _c;
        const [error2, isComplete, returnHandlers] = yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _a = _JsonRpcEngine, _runAllMiddleware, runAllMiddleware_fn).call(_a, req, res, middlewares);
        _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _b = _JsonRpcEngine, _checkForCompletion, checkForCompletion_fn).call(_b, req, res, isComplete);
        yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _c = _JsonRpcEngine, _runReturnHandlers, runReturnHandlers_fn).call(_c, returnHandlers);
        if (error2) {
          throw error2;
        }
      });
    };
    _runAllMiddleware = /* @__PURE__ */ new WeakSet();
    runAllMiddleware_fn = function(req, res, middlewares) {
      return __async(this, null, function* () {
        var _a;
        const returnHandlers = [];
        let error2 = null;
        let isComplete = false;
        for (const middleware of middlewares) {
          [error2, isComplete] = yield _chunkZ4BLTVTBjs.__privateMethod.call(void 0, _a = _JsonRpcEngine, _runMiddleware, runMiddleware_fn).call(_a, req, res, middleware, returnHandlers);
          if (isComplete) {
            break;
          }
        }
        return [error2, isComplete, returnHandlers.reverse()];
      });
    };
    _runMiddleware = /* @__PURE__ */ new WeakSet();
    runMiddleware_fn = function(request, response, middleware, returnHandlers) {
      return __async(this, null, function* () {
        return new Promise((resolve) => {
          const end = (error2) => {
            const parsedError = error2 || response.error;
            if (parsedError) {
              response.error = _rpcerrors$3.serializeError.call(void 0, parsedError);
            }
            resolve([parsedError, true]);
          };
          const next = (returnHandler) => {
            if (response.error) {
              end(response.error);
            } else {
              if (returnHandler) {
                if (typeof returnHandler !== "function") {
                  end(
                    new _rpcerrors$3.JsonRpcError(
                      _rpcerrors$3.errorCodes.rpc.internal,
                      `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof returnHandler}" for request:
${jsonify(
                        request
                      )}`,
                      { request }
                    )
                  );
                }
                returnHandlers.push(returnHandler);
              }
              resolve([null, false]);
            }
          };
          try {
            middleware(request, response, next, end);
          } catch (error2) {
            end(error2);
          }
        });
      });
    };
    _runReturnHandlers = /* @__PURE__ */ new WeakSet();
    runReturnHandlers_fn = function(handlers) {
      return __async(this, null, function* () {
        for (const handler of handlers) {
          yield new Promise((resolve, reject) => {
            handler((error2) => error2 ? reject(error2) : resolve());
          });
        }
      });
    };
    _checkForCompletion = /* @__PURE__ */ new WeakSet();
    checkForCompletion_fn = function(request, response, isComplete) {
      if (!_utils$1.hasProperty.call(void 0, response, "result") && !_utils$1.hasProperty.call(void 0, response, "error")) {
        throw new _rpcerrors$3.JsonRpcError(
          _rpcerrors$3.errorCodes.rpc.internal,
          `JsonRpcEngine: Response has no error or result for request:
${jsonify(
            request
          )}`,
          { request }
        );
      }
      if (!isComplete) {
        throw new _rpcerrors$3.JsonRpcError(
          _rpcerrors$3.errorCodes.rpc.internal,
          `JsonRpcEngine: Nothing ended request:
${jsonify(request)}`,
          { request }
        );
      }
    };
    _chunkZ4BLTVTBjs.__privateAdd.call(void 0, _JsonRpcEngine, _processRequest);
    _chunkZ4BLTVTBjs.__privateAdd.call(void 0, _JsonRpcEngine, _runAllMiddleware);
    _chunkZ4BLTVTBjs.__privateAdd.call(void 0, _JsonRpcEngine, _runMiddleware);
    _chunkZ4BLTVTBjs.__privateAdd.call(void 0, _JsonRpcEngine, _runReturnHandlers);
    _chunkZ4BLTVTBjs.__privateAdd.call(void 0, _JsonRpcEngine, _checkForCompletion);
    var JsonRpcEngine = _JsonRpcEngine;
    function jsonify(request) {
      return JSON.stringify(request, null, 2);
    }
    chunk2LXAFMJD.JsonRpcEngine = JsonRpcEngine;
    Object.defineProperty(chunkVK4MHWJV, "__esModule", { value: true });
    var _chunk2LXAFMJDjs$1 = chunk2LXAFMJD;
    function mergeMiddleware(middlewareStack) {
      const engine = new _chunk2LXAFMJDjs$1.JsonRpcEngine();
      middlewareStack.forEach((middleware) => engine.push(middleware));
      return engine.asMiddleware();
    }
    chunkVK4MHWJV.mergeMiddleware = mergeMiddleware;
    Object.defineProperty(dist$7, "__esModule", { value: true });
    var _chunkZYXL5TCSjs = chunkZYXL5TCS;
    var _chunk3AC2MINDjs = chunk3AC2MIND;
    var _chunkPBQXMZM5js = chunkPBQXMZM5;
    var _chunkXDGWQHNYjs = chunkXDGWQHNY;
    var _chunkVK4MHWJVjs = chunkVK4MHWJV;
    var _chunk2LXAFMJDjs = chunk2LXAFMJD;
    dist$7.JsonRpcEngine = _chunk2LXAFMJDjs.JsonRpcEngine;
    dist$7.createAsyncMiddleware = _chunkZYXL5TCSjs.createAsyncMiddleware;
    dist$7.createIdRemapMiddleware = _chunkPBQXMZM5js.createIdRemapMiddleware;
    dist$7.createScaffoldMiddleware = _chunk3AC2MINDjs.createScaffoldMiddleware;
    dist$7.getUniqueId = _chunkXDGWQHNYjs.getUniqueId;
    dist$7.mergeMiddleware = _chunkVK4MHWJVjs.mergeMiddleware;
    Object.defineProperty(chunkO5ECOCX2, "__esModule", { value: true });
    var _chunk6QNVTE4Wjs = chunk6QNVTE4W;
    var _jsonrpcengine$1 = dist$7;
    var _rpcerrors$2 = dist$6;
    var EMITTED_NOTIFICATIONS = Object.freeze([
      "eth_subscription"
      // per eth-json-rpc-filters/subscriptionManager
    ]);
    var getDefaultExternalMiddleware = (logger = console) => [
      _jsonrpcengine$1.createIdRemapMiddleware.call(void 0),
      createErrorMiddleware(logger),
      _chunk6QNVTE4Wjs.createRpcWarningMiddleware.call(void 0, logger)
    ];
    function createErrorMiddleware(log) {
      return (request, response, next) => {
        if (typeof request.method !== "string" || !request.method) {
          response.error = _rpcerrors$2.rpcErrors.invalidRequest({
            message: `The request 'method' must be a non-empty string.`,
            data: request
          });
        }
        next((done2) => {
          const { error: error2 } = response;
          if (!error2) {
            return done2();
          }
          log.error(`MetaMask - RPC Error: ${error2.message}`, error2);
          return done2();
        });
      };
    }
    var getRpcPromiseCallback = (resolve, reject, unwrapResult = true) => (error2, response) => {
      if (error2 || response.error) {
        reject(error2 || response.error);
      } else {
        !unwrapResult || Array.isArray(response) ? resolve(response) : resolve(response.result);
      }
    };
    var isValidChainId = (chainId) => Boolean(chainId) && typeof chainId === "string" && chainId.startsWith("0x");
    var isValidNetworkVersion = (networkVersion) => Boolean(networkVersion) && typeof networkVersion === "string";
    var NOOP = () => void 0;
    chunkO5ECOCX2.EMITTED_NOTIFICATIONS = EMITTED_NOTIFICATIONS;
    chunkO5ECOCX2.getDefaultExternalMiddleware = getDefaultExternalMiddleware;
    chunkO5ECOCX2.getRpcPromiseCallback = getRpcPromiseCallback;
    chunkO5ECOCX2.isValidChainId = isValidChainId;
    chunkO5ECOCX2.isValidNetworkVersion = isValidNetworkVersion;
    chunkO5ECOCX2.NOOP = NOOP;
    Object.defineProperty(chunkQ4DN6VYN, "__esModule", { value: true });
    var _chunkO5ECOCX2js$4 = chunkO5ECOCX2;
    var _chunk4EQNSGSRjs$3 = chunk4EQNSGSR;
    function sendSiteMetadata(engine, log) {
      return __async(this, null, function* () {
        try {
          const domainMetadata = yield getSiteMetadata();
          engine.handle(
            {
              jsonrpc: "2.0",
              id: 1,
              method: "metamask_sendDomainMetadata",
              params: domainMetadata
            },
            _chunkO5ECOCX2js$4.NOOP
          );
        } catch (error2) {
          log.error({
            message: _chunk4EQNSGSRjs$3.messages_default.errors.sendSiteMetadata(),
            originalError: error2
          });
        }
      });
    }
    function getSiteMetadata() {
      return __async(this, null, function* () {
        return {
          name: getSiteName(window),
          icon: yield getSiteIcon(window)
        };
      });
    }
    function getSiteName(windowObject) {
      const { document: document2 } = windowObject;
      const siteName = document2.querySelector(
        'head > meta[property="og:site_name"]'
      );
      if (siteName) {
        return siteName.content;
      }
      const metaTitle = document2.querySelector(
        'head > meta[name="title"]'
      );
      if (metaTitle) {
        return metaTitle.content;
      }
      if (document2.title && document2.title.length > 0) {
        return document2.title;
      }
      return window.location.hostname;
    }
    function getSiteIcon(windowObject) {
      return __async(this, null, function* () {
        const { document: document2 } = windowObject;
        const icons = document2.querySelectorAll(
          'head > link[rel~="icon"]'
        );
        for (const icon of Array.from(icons)) {
          if (icon && (yield imgExists(icon.href))) {
            return icon.href;
          }
        }
        return null;
      });
    }
    function imgExists(url) {
      return __async(this, null, function* () {
        return new Promise((resolve, reject) => {
          try {
            const img = document.createElement("img");
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
          } catch (error2) {
            reject(error2);
          }
        });
      });
    }
    chunkQ4DN6VYN.sendSiteMetadata = sendSiteMetadata;
    var chunkDWR5HIZK = {};
    var chunkA3W22U42 = {};
    var chunk3W5G4CYI = {};
    Object.defineProperty(chunk3W5G4CYI, "__esModule", { value: true });
    var __accessCheck = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    var __privateGet = (obj, member, getter) => {
      __accessCheck(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    };
    var __privateAdd = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    var __privateSet = (obj, member, value, setter) => {
      __accessCheck(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    };
    chunk3W5G4CYI.__privateGet = __privateGet;
    chunk3W5G4CYI.__privateAdd = __privateAdd;
    chunk3W5G4CYI.__privateSet = __privateSet;
    var fastDeepEqual = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
    Object.defineProperty(chunkA3W22U42, "__esModule", { value: true });
    function _interopRequireDefault$3(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _nullishCoalesce$2(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
    var _chunkO5ECOCX2js$3 = chunkO5ECOCX2;
    var _chunk4EQNSGSRjs$2 = chunk4EQNSGSR;
    var _chunk3W5G4CYIjs$1 = chunk3W5G4CYI;
    var _jsonrpcengine = dist$7;
    var _rpcerrors$1 = dist$6;
    var _safeeventemitter$1 = cjs;
    var _safeeventemitter2$1 = _interopRequireDefault$3(_safeeventemitter$1);
    var _fastdeepequal = fastDeepEqual;
    var _fastdeepequal2 = _interopRequireDefault$3(_fastdeepequal);
    var _chainId, _selectedAddress;
    var _BaseProvider = class _BaseProvider2 extends _safeeventemitter2$1.default {
      /**
       * Create a new instance of the provider.
       *
       * @param options - An options bag.
       * @param options.logger - The logging API to use. Default: `console`.
       * @param options.maxEventListeners - The maximum number of event
       * listeners. Default: 100.
       * @param options.rpcMiddleware - The RPC middleware stack. Default: [].
       */
      constructor({
        logger = console,
        maxEventListeners = 100,
        rpcMiddleware = []
      } = {}) {
        super();
        _chunk3W5G4CYIjs$1.__privateAdd.call(void 0, this, _chainId, void 0);
        _chunk3W5G4CYIjs$1.__privateAdd.call(void 0, this, _selectedAddress, void 0);
        this._log = logger;
        this.setMaxListeners(maxEventListeners);
        this._state = __spreadValues({}, _BaseProvider2._defaultState);
        _chunk3W5G4CYIjs$1.__privateSet.call(void 0, this, _selectedAddress, null);
        _chunk3W5G4CYIjs$1.__privateSet.call(void 0, this, _chainId, null);
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
        this._handleConnect = this._handleConnect.bind(this);
        this._handleChainChanged = this._handleChainChanged.bind(this);
        this._handleDisconnect = this._handleDisconnect.bind(this);
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this);
        this._rpcRequest = this._rpcRequest.bind(this);
        this.request = this.request.bind(this);
        const rpcEngine = new _jsonrpcengine.JsonRpcEngine();
        rpcMiddleware.forEach((middleware) => rpcEngine.push(middleware));
        this._rpcEngine = rpcEngine;
      }
      //====================
      // Public Properties
      //====================
      get chainId() {
        return _chunk3W5G4CYIjs$1.__privateGet.call(void 0, this, _chainId);
      }
      get selectedAddress() {
        return _chunk3W5G4CYIjs$1.__privateGet.call(void 0, this, _selectedAddress);
      }
      //====================
      // Public Methods
      //====================
      /**
       * Returns whether the provider can process RPC requests.
       *
       * @returns Whether the provider can process RPC requests.
       */
      isConnected() {
        return this._state.isConnected;
      }
      /**
       * Submits an RPC request for the given method, with the given params.
       * Resolves with the result of the method call, or rejects on error.
       *
       * @param args - The RPC request arguments.
       * @param args.method - The RPC method name.
       * @param args.params - The parameters for the RPC method.
       * @returns A Promise that resolves with the result of the RPC method,
       * or rejects if an error is encountered.
       */
      request(args) {
        return __async(this, null, function* () {
          if (!args || typeof args !== "object" || Array.isArray(args)) {
            throw _rpcerrors$1.rpcErrors.invalidRequest({
              message: _chunk4EQNSGSRjs$2.messages_default.errors.invalidRequestArgs(),
              data: args
            });
          }
          const { method, params } = args;
          if (typeof method !== "string" || method.length === 0) {
            throw _rpcerrors$1.rpcErrors.invalidRequest({
              message: _chunk4EQNSGSRjs$2.messages_default.errors.invalidRequestMethod(),
              data: args
            });
          }
          if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
            throw _rpcerrors$1.rpcErrors.invalidRequest({
              message: _chunk4EQNSGSRjs$2.messages_default.errors.invalidRequestParams(),
              data: args
            });
          }
          const payload = params === void 0 || params === null ? {
            method
          } : {
            method,
            params
          };
          return new Promise((resolve, reject) => {
            this._rpcRequest(payload, _chunkO5ECOCX2js$3.getRpcPromiseCallback.call(void 0, resolve, reject));
          });
        });
      }
      //====================
      // Private Methods
      //====================
      /**
       * MUST be called by child classes.
       *
       * Sets initial state if provided and marks this provider as initialized.
       * Throws if called more than once.
       *
       * Permits the `networkVersion` field in the parameter object for
       * compatibility with child classes that use this value.
       *
       * @param initialState - The provider's initial state.
       * @param initialState.accounts - The user's accounts.
       * @param initialState.chainId - The chain ID.
       * @param initialState.isUnlocked - Whether the user has unlocked MetaMask.
       * @param initialState.networkVersion - The network version.
       * @fires BaseProvider#_initialized - If `initialState` is defined.
       * @fires BaseProvider#connect - If `initialState` is defined.
       */
      _initializeState(initialState) {
        if (this._state.initialized) {
          throw new Error("Provider already initialized.");
        }
        if (initialState) {
          const { accounts, chainId, isUnlocked, networkVersion } = initialState;
          this._handleConnect(chainId);
          this._handleChainChanged({ chainId, networkVersion });
          this._handleUnlockStateChanged({ accounts, isUnlocked });
          this._handleAccountsChanged(accounts);
        }
        this._state.initialized = true;
        this.emit("_initialized");
      }
      /**
       * Internal RPC method. Forwards requests to background via the RPC engine.
       * Also remap ids inbound and outbound.
       *
       * @param payload - The RPC request object.
       * @param callback - The consumer's callback.
       * @returns The result of the RPC request.
       */
      _rpcRequest(payload, callback) {
        let callbackWrapper = callback;
        if (!Array.isArray(payload)) {
          if (!payload.jsonrpc) {
            payload.jsonrpc = "2.0";
          }
          if (payload.method === "eth_accounts" || payload.method === "eth_requestAccounts") {
            callbackWrapper = (error2, response) => {
              this._handleAccountsChanged(
                _nullishCoalesce$2(response.result, () => []),
                payload.method === "eth_accounts"
              );
              callback(error2, response);
            };
          }
          return this._rpcEngine.handle(payload, callbackWrapper);
        }
        return this._rpcEngine.handle(payload, callbackWrapper);
      }
      /**
       * When the provider becomes connected, updates internal state and emits
       * required events. Idempotent.
       *
       * @param chainId - The ID of the newly connected chain.
       * @fires MetaMaskInpageProvider#connect
       */
      _handleConnect(chainId) {
        if (!this._state.isConnected) {
          this._state.isConnected = true;
          this.emit("connect", { chainId });
          this._log.debug(_chunk4EQNSGSRjs$2.messages_default.info.connected(chainId));
        }
      }
      /**
       * When the provider becomes disconnected, updates internal state and emits
       * required events. Idempotent with respect to the isRecoverable parameter.
       *
       * Error codes per the CloseEvent status codes as required by EIP-1193:
       * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes.
       *
       * @param isRecoverable - Whether the disconnection is recoverable.
       * @param errorMessage - A custom error message.
       * @fires BaseProvider#disconnect - If the disconnection is not recoverable.
       */
      _handleDisconnect(isRecoverable, errorMessage) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !isRecoverable) {
          this._state.isConnected = false;
          let error2;
          if (isRecoverable) {
            error2 = new _rpcerrors$1.JsonRpcError(
              1013,
              // Try again later
              _nullishCoalesce$2(errorMessage, () => _chunk4EQNSGSRjs$2.messages_default.errors.disconnected())
            );
            this._log.debug(error2);
          } else {
            error2 = new _rpcerrors$1.JsonRpcError(
              1011,
              // Internal error
              _nullishCoalesce$2(errorMessage, () => _chunk4EQNSGSRjs$2.messages_default.errors.permanentlyDisconnected())
            );
            this._log.error(error2);
            _chunk3W5G4CYIjs$1.__privateSet.call(void 0, this, _chainId, null);
            this._state.accounts = null;
            _chunk3W5G4CYIjs$1.__privateSet.call(void 0, this, _selectedAddress, null);
            this._state.isUnlocked = false;
            this._state.isPermanentlyDisconnected = true;
          }
          this.emit("disconnect", error2);
        }
      }
      /**
       * Upon receipt of a new `chainId`, emits the corresponding event and sets
       * and sets relevant public state. Does nothing if the given `chainId` is
       * equivalent to the existing value.
       *
       * Permits the `networkVersion` field in the parameter object for
       * compatibility with child classes that use this value.
       *
       * @fires BaseProvider#chainChanged
       * @param networkInfo - An object with network info.
       * @param networkInfo.chainId - The latest chain ID.
       */
      _handleChainChanged({
        chainId
      } = {}) {
        if (!_chunkO5ECOCX2js$3.isValidChainId.call(void 0, chainId)) {
          this._log.error(_chunk4EQNSGSRjs$2.messages_default.errors.invalidNetworkParams(), { chainId });
          return;
        }
        this._handleConnect(chainId);
        if (chainId !== _chunk3W5G4CYIjs$1.__privateGet.call(void 0, this, _chainId)) {
          _chunk3W5G4CYIjs$1.__privateSet.call(void 0, this, _chainId, chainId);
          if (this._state.initialized) {
            this.emit("chainChanged", _chunk3W5G4CYIjs$1.__privateGet.call(void 0, this, _chainId));
          }
        }
      }
      /**
       * Called when accounts may have changed. Diffs the new accounts value with
       * the current one, updates all state as necessary, and emits the
       * accountsChanged event.
       *
       * @param accounts - The new accounts value.
       * @param isEthAccounts - Whether the accounts value was returned by
       * a call to eth_accounts.
       */
      _handleAccountsChanged(accounts, isEthAccounts = false) {
        let _accounts = accounts;
        if (!Array.isArray(accounts)) {
          this._log.error(
            "MetaMask: Received invalid accounts parameter. Please report this bug.",
            accounts
          );
          _accounts = [];
        }
        for (const account of accounts) {
          if (typeof account !== "string") {
            this._log.error(
              "MetaMask: Received non-string account. Please report this bug.",
              accounts
            );
            _accounts = [];
            break;
          }
        }
        if (!_fastdeepequal2.default.call(void 0, this._state.accounts, _accounts)) {
          if (isEthAccounts && this._state.accounts !== null) {
            this._log.error(
              `MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.`,
              _accounts
            );
          }
          this._state.accounts = _accounts;
          if (_chunk3W5G4CYIjs$1.__privateGet.call(void 0, this, _selectedAddress) !== _accounts[0]) {
            _chunk3W5G4CYIjs$1.__privateSet.call(void 0, this, _selectedAddress, _accounts[0] || null);
          }
          if (this._state.initialized) {
            const _nextAccounts = [..._accounts];
            this.emit("accountsChanged", _nextAccounts);
          }
        }
      }
      /**
       * Upon receipt of a new isUnlocked state, sets relevant public state.
       * Calls the accounts changed handler with the received accounts, or an empty
       * array.
       *
       * Does nothing if the received value is equal to the existing value.
       * There are no lock/unlock events.
       *
       * @param opts - Options bag.
       * @param opts.accounts - The exposed accounts, if any.
       * @param opts.isUnlocked - The latest isUnlocked value.
       */
      _handleUnlockStateChanged({
        accounts,
        isUnlocked
      } = {}) {
        if (typeof isUnlocked !== "boolean") {
          this._log.error(
            "MetaMask: Received invalid isUnlocked parameter. Please report this bug."
          );
          return;
        }
        if (isUnlocked !== this._state.isUnlocked) {
          this._state.isUnlocked = isUnlocked;
          this._handleAccountsChanged(_nullishCoalesce$2(accounts, () => []));
        }
      }
    };
    _chainId = /* @__PURE__ */ new WeakMap();
    _selectedAddress = /* @__PURE__ */ new WeakMap();
    _BaseProvider._defaultState = {
      accounts: null,
      isConnected: false,
      isUnlocked: false,
      initialized: false,
      isPermanentlyDisconnected: false
    };
    var BaseProvider = _BaseProvider;
    chunkA3W22U42.BaseProvider = BaseProvider;
    var dist$2 = {};
    var chunkIDTAZSDC = {};
    var readableBrowser = { exports: {} };
    var streamBrowser = require$$3$1.EventEmitter;
    var buffer_list;
    var hasRequiredBuffer_list;
    function requireBuffer_list() {
      if (hasRequiredBuffer_list) return buffer_list;
      hasRequiredBuffer_list = 1;
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint);
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(input);
      }
      var _require = require$$3$1, Buffer2 = _require.Buffer;
      var _require2 = require$$3$1, inspect = _require2.inspect;
      var custom = inspect && inspect.custom || "inspect";
      function copyBuffer(src, target, offset) {
        Buffer2.prototype.copy.call(src, target, offset);
      }
      buffer_list = /* @__PURE__ */ function() {
        function BufferList() {
          _classCallCheck(this, BufferList);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        _createClass(BufferList, [{
          key: "push",
          value: function push(v2) {
            var entry = {
              data: v2,
              next: null
            };
            if (this.length > 0) this.tail.next = entry;
            else this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        }, {
          key: "unshift",
          value: function unshift(v2) {
            var entry = {
              data: v2,
              next: this.head
            };
            if (this.length === 0) this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0) return;
            var ret = this.head.data;
            if (this.length === 1) this.head = this.tail = null;
            else this.head = this.head.next;
            --this.length;
            return ret;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        }, {
          key: "join",
          value: function join(s) {
            if (this.length === 0) return "";
            var p2 = this.head;
            var ret = "" + p2.data;
            while (p2 = p2.next) ret += s + p2.data;
            return ret;
          }
        }, {
          key: "concat",
          value: function concat(n2) {
            if (this.length === 0) return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n2 >>> 0);
            var p2 = this.head;
            var i = 0;
            while (p2) {
              copyBuffer(p2.data, ret, i);
              i += p2.data.length;
              p2 = p2.next;
            }
            return ret;
          }
          // Consumes a specified amount of bytes or characters from the buffered data.
        }, {
          key: "consume",
          value: function consume(n2, hasStrings) {
            var ret;
            if (n2 < this.head.data.length) {
              ret = this.head.data.slice(0, n2);
              this.head.data = this.head.data.slice(n2);
            } else if (n2 === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
            }
            return ret;
          }
        }, {
          key: "first",
          value: function first() {
            return this.head.data;
          }
          // Consumes a specified amount of characters from the buffered data.
        }, {
          key: "_getString",
          value: function _getString(n2) {
            var p2 = this.head;
            var c = 1;
            var ret = p2.data;
            n2 -= ret.length;
            while (p2 = p2.next) {
              var str = p2.data;
              var nb2 = n2 > str.length ? str.length : n2;
              if (nb2 === str.length) ret += str;
              else ret += str.slice(0, n2);
              n2 -= nb2;
              if (n2 === 0) {
                if (nb2 === str.length) {
                  ++c;
                  if (p2.next) this.head = p2.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p2;
                  p2.data = str.slice(nb2);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
          // Consumes a specified amount of bytes from the buffered data.
        }, {
          key: "_getBuffer",
          value: function _getBuffer(n2) {
            var ret = Buffer2.allocUnsafe(n2);
            var p2 = this.head;
            var c = 1;
            p2.data.copy(ret);
            n2 -= p2.data.length;
            while (p2 = p2.next) {
              var buf = p2.data;
              var nb2 = n2 > buf.length ? buf.length : n2;
              buf.copy(ret, ret.length - n2, 0, nb2);
              n2 -= nb2;
              if (n2 === 0) {
                if (nb2 === buf.length) {
                  ++c;
                  if (p2.next) this.head = p2.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p2;
                  p2.data = buf.slice(nb2);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
          // Make sure the linked list only shows the minimal necessary information.
        }, {
          key: custom,
          value: function value(_, options) {
            return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
              // Only inspect one level.
              depth: 0,
              // It should not recurse.
              customInspect: false
            }));
          }
        }]);
        return BufferList;
      }();
      return buffer_list;
    }
    function destroy(err, cb2) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb2) {
          cb2(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb2 && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb2) {
          process.nextTick(emitCloseNT, _this);
          cb2(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose) return;
      if (self2._readableState && !self2._readableState.emitClose) return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
      else stream.emit("error", err);
    }
    var destroy_1 = {
      destroy,
      undestroy,
      errorOrDestroy
    };
    var errorsBrowser = {};
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = /* @__PURE__ */ function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
          return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError2;
      }(Base);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(0, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(typeof actual);
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    errorsBrowser.codes = codes;
    var ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state2, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state2.objectMode ? 16 : 16 * 1024;
    }
    var state = {
      getHighWaterMark
    };
    var inherits_browser = { exports: {} };
    if (typeof Object.create === "function") {
      inherits_browser.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      inherits_browser.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
    var inherits_browserExports = inherits_browser.exports;
    var browser$2 = deprecate;
    function deprecate(fn, msg) {
      if (config$1("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config$1("throwDeprecation")) {
            throw new Error(msg);
          } else if (config$1("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config$1(name) {
      try {
        if (!globalThis.localStorage) return false;
      } catch (_) {
        return false;
      }
      var val = globalThis.localStorage[name];
      if (null == val) return false;
      return String(val).toLowerCase() === "true";
    }
    var _stream_writable;
    var hasRequired_stream_writable;
    function require_stream_writable() {
      if (hasRequired_stream_writable) return _stream_writable;
      hasRequired_stream_writable = 1;
      _stream_writable = Writable;
      function CorkedRequest(state2) {
        var _this = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
          onCorkedFinish(_this, state2);
        };
      }
      var Duplex2;
      Writable.WritableState = WritableState;
      var internalUtil = {
        deprecate: browser$2
      };
      var Stream = streamBrowser;
      var Buffer2 = require$$3$1.Buffer;
      var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var destroyImpl = destroy_1;
      var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
      var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK2 = _require$codes2.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes2.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED2 = _require$codes2.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes2.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes2.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes2.ERR_UNKNOWN_ENCODING;
      var errorOrDestroy2 = destroyImpl.errorOrDestroy;
      inherits_browserExports(Writable, Stream);
      function nop() {
      }
      function WritableState(options, stream, isDuplex) {
        Duplex2 = Duplex2 || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex2;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
        this.highWaterMark = getHighWaterMark2(this, options, "writableHighWaterMark", isDuplex);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(er) {
          onwrite(stream, er);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
          out.push(current);
          current = current.next;
        }
        return out;
      };
      (function() {
        try {
          Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (_) {
        }
      })();
      var realHasInstance;
      if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
          }
        });
      } else {
        realHasInstance = function realHasInstance2(object) {
          return object instanceof this;
        };
      }
      function Writable(options) {
        Duplex2 = Duplex2 || require_stream_duplex();
        var isDuplex = this instanceof Duplex2;
        if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        this.writable = true;
        if (options) {
          if (typeof options.write === "function") this._write = options.write;
          if (typeof options.writev === "function") this._writev = options.writev;
          if (typeof options.destroy === "function") this._destroy = options.destroy;
          if (typeof options.final === "function") this._final = options.final;
        }
        Stream.call(this);
      }
      Writable.prototype.pipe = function() {
        errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
      };
      function writeAfterEnd(stream, cb2) {
        var er = new ERR_STREAM_WRITE_AFTER_END();
        errorOrDestroy2(stream, er);
        process.nextTick(cb2, er);
      }
      function validChunk(stream, state2, chunk, cb2) {
        var er;
        if (chunk === null) {
          er = new ERR_STREAM_NULL_VALUES();
        } else if (typeof chunk !== "string" && !state2.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
        }
        if (er) {
          errorOrDestroy2(stream, er);
          process.nextTick(cb2, er);
          return false;
        }
        return true;
      }
      Writable.prototype.write = function(chunk, encoding, cb2) {
        var state2 = this._writableState;
        var ret = false;
        var isBuf = !state2.objectMode && _isUint8Array(chunk);
        if (isBuf && !Buffer2.isBuffer(chunk)) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (typeof encoding === "function") {
          cb2 = encoding;
          encoding = null;
        }
        if (isBuf) encoding = "buffer";
        else if (!encoding) encoding = state2.defaultEncoding;
        if (typeof cb2 !== "function") cb2 = nop;
        if (state2.ending) writeAfterEnd(this, cb2);
        else if (isBuf || validChunk(this, state2, chunk, cb2)) {
          state2.pendingcb++;
          ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb2);
        }
        return ret;
      };
      Writable.prototype.cork = function() {
        this._writableState.corked++;
      };
      Writable.prototype.uncork = function() {
        var state2 = this._writableState;
        if (state2.corked) {
          state2.corked--;
          if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) clearBuffer(this, state2);
        }
      };
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        if (typeof encoding === "string") encoding = encoding.toLowerCase();
        if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      function decodeChunk(state2, chunk, encoding) {
        if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
          chunk = Buffer2.from(chunk, encoding);
        }
        return chunk;
      }
      Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get2() {
          return this._writableState.highWaterMark;
        }
      });
      function writeOrBuffer(stream, state2, isBuf, chunk, encoding, cb2) {
        if (!isBuf) {
          var newChunk = decodeChunk(state2, chunk, encoding);
          if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
          }
        }
        var len = state2.objectMode ? 1 : chunk.length;
        state2.length += len;
        var ret = state2.length < state2.highWaterMark;
        if (!ret) state2.needDrain = true;
        if (state2.writing || state2.corked) {
          var last = state2.lastBufferedRequest;
          state2.lastBufferedRequest = {
            chunk,
            encoding,
            isBuf,
            callback: cb2,
            next: null
          };
          if (last) {
            last.next = state2.lastBufferedRequest;
          } else {
            state2.bufferedRequest = state2.lastBufferedRequest;
          }
          state2.bufferedRequestCount += 1;
        } else {
          doWrite(stream, state2, false, len, chunk, encoding, cb2);
        }
        return ret;
      }
      function doWrite(stream, state2, writev, len, chunk, encoding, cb2) {
        state2.writelen = len;
        state2.writecb = cb2;
        state2.writing = true;
        state2.sync = true;
        if (state2.destroyed) state2.onwrite(new ERR_STREAM_DESTROYED2("write"));
        else if (writev) stream._writev(chunk, state2.onwrite);
        else stream._write(chunk, encoding, state2.onwrite);
        state2.sync = false;
      }
      function onwriteError(stream, state2, sync, er, cb2) {
        --state2.pendingcb;
        if (sync) {
          process.nextTick(cb2, er);
          process.nextTick(finishMaybe, stream, state2);
          stream._writableState.errorEmitted = true;
          errorOrDestroy2(stream, er);
        } else {
          cb2(er);
          stream._writableState.errorEmitted = true;
          errorOrDestroy2(stream, er);
          finishMaybe(stream, state2);
        }
      }
      function onwriteStateUpdate(state2) {
        state2.writing = false;
        state2.writecb = null;
        state2.length -= state2.writelen;
        state2.writelen = 0;
      }
      function onwrite(stream, er) {
        var state2 = stream._writableState;
        var sync = state2.sync;
        var cb2 = state2.writecb;
        if (typeof cb2 !== "function") throw new ERR_MULTIPLE_CALLBACK2();
        onwriteStateUpdate(state2);
        if (er) onwriteError(stream, state2, sync, er, cb2);
        else {
          var finished = needFinish(state2) || stream.destroyed;
          if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
            clearBuffer(stream, state2);
          }
          if (sync) {
            process.nextTick(afterWrite, stream, state2, finished, cb2);
          } else {
            afterWrite(stream, state2, finished, cb2);
          }
        }
      }
      function afterWrite(stream, state2, finished, cb2) {
        if (!finished) onwriteDrain(stream, state2);
        state2.pendingcb--;
        cb2();
        finishMaybe(stream, state2);
      }
      function onwriteDrain(stream, state2) {
        if (state2.length === 0 && state2.needDrain) {
          state2.needDrain = false;
          stream.emit("drain");
        }
      }
      function clearBuffer(stream, state2) {
        state2.bufferProcessing = true;
        var entry = state2.bufferedRequest;
        if (stream._writev && entry && entry.next) {
          var l2 = state2.bufferedRequestCount;
          var buffer = new Array(l2);
          var holder = state2.corkedRequestsFree;
          holder.entry = entry;
          var count = 0;
          var allBuffers = true;
          while (entry) {
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
          }
          buffer.allBuffers = allBuffers;
          doWrite(stream, state2, true, state2.length, buffer, "", holder.finish);
          state2.pendingcb++;
          state2.lastBufferedRequest = null;
          if (holder.next) {
            state2.corkedRequestsFree = holder.next;
            holder.next = null;
          } else {
            state2.corkedRequestsFree = new CorkedRequest(state2);
          }
          state2.bufferedRequestCount = 0;
        } else {
          while (entry) {
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb2 = entry.callback;
            var len = state2.objectMode ? 1 : chunk.length;
            doWrite(stream, state2, false, len, chunk, encoding, cb2);
            entry = entry.next;
            state2.bufferedRequestCount--;
            if (state2.writing) {
              break;
            }
          }
          if (entry === null) state2.lastBufferedRequest = null;
        }
        state2.bufferedRequest = entry;
        state2.bufferProcessing = false;
      }
      Writable.prototype._write = function(chunk, encoding, cb2) {
        cb2(new ERR_METHOD_NOT_IMPLEMENTED2("_write()"));
      };
      Writable.prototype._writev = null;
      Writable.prototype.end = function(chunk, encoding, cb2) {
        var state2 = this._writableState;
        if (typeof chunk === "function") {
          cb2 = chunk;
          chunk = null;
          encoding = null;
        } else if (typeof encoding === "function") {
          cb2 = encoding;
          encoding = null;
        }
        if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
        if (state2.corked) {
          state2.corked = 1;
          this.uncork();
        }
        if (!state2.ending) endWritable(this, state2, cb2);
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get3() {
          return this._writableState.length;
        }
      });
      function needFinish(state2) {
        return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
      }
      function callFinal(stream, state2) {
        stream._final(function(err) {
          state2.pendingcb--;
          if (err) {
            errorOrDestroy2(stream, err);
          }
          state2.prefinished = true;
          stream.emit("prefinish");
          finishMaybe(stream, state2);
        });
      }
      function prefinish2(stream, state2) {
        if (!state2.prefinished && !state2.finalCalled) {
          if (typeof stream._final === "function" && !state2.destroyed) {
            state2.pendingcb++;
            state2.finalCalled = true;
            process.nextTick(callFinal, stream, state2);
          } else {
            state2.prefinished = true;
            stream.emit("prefinish");
          }
        }
      }
      function finishMaybe(stream, state2) {
        var need = needFinish(state2);
        if (need) {
          prefinish2(stream, state2);
          if (state2.pendingcb === 0) {
            state2.finished = true;
            stream.emit("finish");
            if (state2.autoDestroy) {
              var rState = stream._readableState;
              if (!rState || rState.autoDestroy && rState.endEmitted) {
                stream.destroy();
              }
            }
          }
        }
        return need;
      }
      function endWritable(stream, state2, cb2) {
        state2.ending = true;
        finishMaybe(stream, state2);
        if (cb2) {
          if (state2.finished) process.nextTick(cb2);
          else stream.once("finish", cb2);
        }
        state2.ended = true;
        stream.writable = false;
      }
      function onCorkedFinish(corkReq, state2, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while (entry) {
          var cb2 = entry.callback;
          state2.pendingcb--;
          cb2(err);
          entry = entry.next;
        }
        state2.corkedRequestsFree.next = corkReq;
      }
      Object.defineProperty(Writable.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get4() {
          if (this._writableState === void 0) {
            return false;
          }
          return this._writableState.destroyed;
        },
        set: function set(value) {
          if (!this._writableState) {
            return;
          }
          this._writableState.destroyed = value;
        }
      });
      Writable.prototype.destroy = destroyImpl.destroy;
      Writable.prototype._undestroy = destroyImpl.undestroy;
      Writable.prototype._destroy = function(err, cb2) {
        cb2(err);
      };
      return _stream_writable;
    }
    var _stream_duplex;
    var hasRequired_stream_duplex;
    function require_stream_duplex() {
      if (hasRequired_stream_duplex) return _stream_duplex;
      hasRequired_stream_duplex = 1;
      var objectKeys = Object.keys || function(obj) {
        var keys2 = [];
        for (var key in obj) keys2.push(key);
        return keys2;
      };
      _stream_duplex = Duplex2;
      var Readable = require_stream_readable();
      var Writable = require_stream_writable();
      inherits_browserExports(Duplex2, Readable);
      {
        var keys = objectKeys(Writable.prototype);
        for (var v2 = 0; v2 < keys.length; v2++) {
          var method = keys[v2];
          if (!Duplex2.prototype[method]) Duplex2.prototype[method] = Writable.prototype[method];
        }
      }
      function Duplex2(options) {
        if (!(this instanceof Duplex2)) return new Duplex2(options);
        Readable.call(this, options);
        Writable.call(this, options);
        this.allowHalfOpen = true;
        if (options) {
          if (options.readable === false) this.readable = false;
          if (options.writable === false) this.writable = false;
          if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
          }
        }
      }
      Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      Object.defineProperty(Duplex2.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      Object.defineProperty(Duplex2.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function onend() {
        if (this._writableState.ended) return;
        process.nextTick(onEndNT, this);
      }
      function onEndNT(self2) {
        self2.end();
      }
      Object.defineProperty(Duplex2.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(value) {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return;
          }
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });
      return _stream_duplex;
    }
    var string_decoder = {};
    var safeBuffer = { exports: {} };
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var hasRequiredSafeBuffer;
    function requireSafeBuffer() {
      if (hasRequiredSafeBuffer) return safeBuffer.exports;
      hasRequiredSafeBuffer = 1;
      (function(module2, exports2) {
        var buffer = require$$3$1;
        var Buffer2 = buffer.Buffer;
        function copyProps(src, dst) {
          for (var key in src) {
            dst[key] = src[key];
          }
        }
        if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
          module2.exports = buffer;
        } else {
          copyProps(buffer, exports2);
          exports2.Buffer = SafeBuffer;
        }
        function SafeBuffer(arg, encodingOrOffset, length) {
          return Buffer2(arg, encodingOrOffset, length);
        }
        SafeBuffer.prototype = Object.create(Buffer2.prototype);
        copyProps(Buffer2, SafeBuffer);
        SafeBuffer.from = function(arg, encodingOrOffset, length) {
          if (typeof arg === "number") {
            throw new TypeError("Argument must not be a number");
          }
          return Buffer2(arg, encodingOrOffset, length);
        };
        SafeBuffer.alloc = function(size2, fill, encoding) {
          if (typeof size2 !== "number") {
            throw new TypeError("Argument must be a number");
          }
          var buf = Buffer2(size2);
          if (fill !== void 0) {
            if (typeof encoding === "string") {
              buf.fill(fill, encoding);
            } else {
              buf.fill(fill);
            }
          } else {
            buf.fill(0);
          }
          return buf;
        };
        SafeBuffer.allocUnsafe = function(size2) {
          if (typeof size2 !== "number") {
            throw new TypeError("Argument must be a number");
          }
          return Buffer2(size2);
        };
        SafeBuffer.allocUnsafeSlow = function(size2) {
          if (typeof size2 !== "number") {
            throw new TypeError("Argument must be a number");
          }
          return buffer.SlowBuffer(size2);
        };
      })(safeBuffer, safeBuffer.exports);
      return safeBuffer.exports;
    }
    var hasRequiredString_decoder;
    function requireString_decoder() {
      if (hasRequiredString_decoder) return string_decoder;
      hasRequiredString_decoder = 1;
      var Buffer2 = requireSafeBuffer().Buffer;
      var isEncoding = Buffer2.isEncoding || function(encoding) {
        encoding = "" + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      function _normalizeEncoding(enc) {
        if (!enc) return "utf8";
        var retried;
        while (true) {
          switch (enc) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return enc;
            default:
              if (retried) return;
              enc = ("" + enc).toLowerCase();
              retried = true;
          }
        }
      }
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
        return nenc || enc;
      }
      string_decoder.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb2;
        switch (this.encoding) {
          case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb2 = 4;
            break;
          case "utf8":
            this.fillLast = utf8FillLast;
            nb2 = 4;
            break;
          case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb2 = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer2.allocUnsafe(nb2);
      }
      StringDecoder.prototype.write = function(buf) {
        if (buf.length === 0) return "";
        var r2;
        var i;
        if (this.lastNeed) {
          r2 = this.fillLast(buf);
          if (r2 === void 0) return "";
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length) return r2 ? r2 + this.text(buf, i) : this.text(buf, i);
        return r2 || "";
      };
      StringDecoder.prototype.end = utf8End;
      StringDecoder.prototype.text = utf8Text;
      StringDecoder.prototype.fillLast = function(buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };
      function utf8CheckByte(byte) {
        if (byte <= 127) return 0;
        else if (byte >> 5 === 6) return 2;
        else if (byte >> 4 === 14) return 3;
        else if (byte >> 3 === 30) return 4;
        return byte >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(self2, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb2 = utf8CheckByte(buf[j]);
        if (nb2 >= 0) {
          if (nb2 > 0) self2.lastNeed = nb2 - 1;
          return nb2;
        }
        if (--j < i || nb2 === -2) return 0;
        nb2 = utf8CheckByte(buf[j]);
        if (nb2 >= 0) {
          if (nb2 > 0) self2.lastNeed = nb2 - 2;
          return nb2;
        }
        if (--j < i || nb2 === -2) return 0;
        nb2 = utf8CheckByte(buf[j]);
        if (nb2 >= 0) {
          if (nb2 > 0) {
            if (nb2 === 2) nb2 = 0;
            else self2.lastNeed = nb2 - 3;
          }
          return nb2;
        }
        return 0;
      }
      function utf8CheckExtraBytes(self2, buf, p2) {
        if ((buf[0] & 192) !== 128) {
          self2.lastNeed = 0;
          return "�";
        }
        if (self2.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 192) !== 128) {
            self2.lastNeed = 1;
            return "�";
          }
          if (self2.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
              self2.lastNeed = 2;
              return "�";
            }
          }
        }
      }
      function utf8FillLast(buf) {
        var p2 = this.lastTotal - this.lastNeed;
        var r2 = utf8CheckExtraBytes(this, buf);
        if (r2 !== void 0) return r2;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p2, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p2, 0, buf.length);
        this.lastNeed -= buf.length;
      }
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString("utf8", i, end);
      }
      function utf8End(buf) {
        var r2 = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) return r2 + "�";
        return r2;
      }
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r2 = buf.toString("utf16le", i);
          if (r2) {
            var c = r2.charCodeAt(r2.length - 1);
            if (c >= 55296 && c <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r2.slice(0, -1);
            }
          }
          return r2;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString("utf16le", i, buf.length - 1);
      }
      function utf16End(buf) {
        var r2 = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r2 + this.lastChar.toString("utf16le", 0, end);
        }
        return r2;
      }
      function base64Text(buf, i) {
        var n2 = (buf.length - i) % 3;
        if (n2 === 0) return buf.toString("base64", i);
        this.lastNeed = 3 - n2;
        this.lastTotal = 3;
        if (n2 === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString("base64", i, buf.length - n2);
      }
      function base64End(buf) {
        var r2 = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) return r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return r2;
      }
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }
      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
      }
      return string_decoder;
    }
    var ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;
    function once$3(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop$1() {
    }
    function isRequest$1(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos$1(stream, opts, callback) {
      if (typeof opts === "function") return eos$1(stream, null, opts);
      if (!opts) opts = {};
      callback = once$3(callback || noop$1);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable) onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest$1(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false) stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    var endOfStream = eos$1;
    var async_iterator;
    var hasRequiredAsync_iterator;
    function requireAsync_iterator() {
      if (hasRequiredAsync_iterator) return async_iterator;
      hasRequiredAsync_iterator = 1;
      var _Object$setPrototypeO;
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint);
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var finished = endOfStream;
      var kLastResolve = Symbol("lastResolve");
      var kLastReject = Symbol("lastReject");
      var kError = Symbol("error");
      var kEnded = Symbol("ended");
      var kLastPromise = Symbol("lastPromise");
      var kHandlePromise = Symbol("handlePromise");
      var kStream = Symbol("stream");
      function createIterResult(value, done2) {
        return {
          value,
          done: done2
        };
      }
      function readAndResolve(iter) {
        var resolve = iter[kLastResolve];
        if (resolve !== null) {
          var data = iter[kStream].read();
          if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
          }
        }
      }
      function onReadable(iter) {
        process.nextTick(readAndResolve, iter);
      }
      function wrapForNext(lastPromise, iter) {
        return function(resolve, reject) {
          lastPromise.then(function() {
            if (iter[kEnded]) {
              resolve(createIterResult(void 0, true));
              return;
            }
            iter[kHandlePromise](resolve, reject);
          }, reject);
        };
      }
      var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
      });
      var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
        get stream() {
          return this[kStream];
        },
        next: function next() {
          var _this = this;
          var error2 = this[kError];
          if (error2 !== null) {
            return Promise.reject(error2);
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult(void 0, true));
          }
          if (this[kStream].destroyed) {
            return new Promise(function(resolve, reject) {
              process.nextTick(function() {
                if (_this[kError]) {
                  reject(_this[kError]);
                } else {
                  resolve(createIterResult(void 0, true));
                }
              });
            });
          }
          var lastPromise = this[kLastPromise];
          var promise2;
          if (lastPromise) {
            promise2 = new Promise(wrapForNext(lastPromise, this));
          } else {
            var data = this[kStream].read();
            if (data !== null) {
              return Promise.resolve(createIterResult(data, false));
            }
            promise2 = new Promise(this[kHandlePromise]);
          }
          this[kLastPromise] = promise2;
          return promise2;
        }
      }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
      }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2[kStream].destroy(null, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(createIterResult(void 0, true));
          });
        });
      }), _Object$setPrototypeO), AsyncIteratorPrototype);
      var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
        var _Object$create;
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
          value: stream,
          writable: true
        }), _defineProperty(_Object$create, kLastResolve, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kLastReject, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kError, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kEnded, {
          value: stream._readableState.endEmitted,
          writable: true
        }), _defineProperty(_Object$create, kHandlePromise, {
          value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult(data, false));
            } else {
              iterator[kLastResolve] = resolve;
              iterator[kLastReject] = reject;
            }
          },
          writable: true
        }), _Object$create));
        iterator[kLastPromise] = null;
        finished(stream, function(err) {
          if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            if (reject !== null) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              reject(err);
            }
            iterator[kError] = err;
            return;
          }
          var resolve = iterator[kLastResolve];
          if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(void 0, true));
          }
          iterator[kEnded] = true;
        });
        stream.on("readable", onReadable.bind(null, iterator));
        return iterator;
      };
      async_iterator = createReadableStreamAsyncIterator;
      return async_iterator;
    }
    var fromBrowser;
    var hasRequiredFromBrowser;
    function requireFromBrowser() {
      if (hasRequiredFromBrowser) return fromBrowser;
      hasRequiredFromBrowser = 1;
      fromBrowser = function() {
        throw new Error("Readable.from is not available in the browser");
      };
      return fromBrowser;
    }
    var _stream_readable;
    var hasRequired_stream_readable;
    function require_stream_readable() {
      if (hasRequired_stream_readable) return _stream_readable;
      hasRequired_stream_readable = 1;
      _stream_readable = Readable;
      var Duplex2;
      Readable.ReadableState = ReadableState;
      require$$3$1.EventEmitter;
      var EElistenerCount = function EElistenerCount2(emitter, type) {
        return emitter.listeners(type).length;
      };
      var Stream = streamBrowser;
      var Buffer2 = require$$3$1.Buffer;
      var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var debugUtil = require$$3$1;
      var debug2;
      if (debugUtil && debugUtil.debuglog) {
        debug2 = debugUtil.debuglog("stream");
      } else {
        debug2 = function debug22() {
        };
      }
      var BufferList = requireBuffer_list();
      var destroyImpl = destroy_1;
      var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
      var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      var StringDecoder;
      var createReadableStreamAsyncIterator;
      var from;
      inherits_browserExports(Readable, Stream);
      var errorOrDestroy2 = destroyImpl.errorOrDestroy;
      var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
      function prependListener(emitter, event, fn) {
        if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
        else emitter._events[event] = [fn, emitter._events[event]];
      }
      function ReadableState(options, stream, isDuplex) {
        Duplex2 = Duplex2 || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex2;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
        this.highWaterMark = getHighWaterMark2(this, options, "readableHighWaterMark", isDuplex);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.paused = true;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.destroyed = false;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
          if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
          this.decoder = new StringDecoder(options.encoding);
          this.encoding = options.encoding;
        }
      }
      function Readable(options) {
        Duplex2 = Duplex2 || require_stream_duplex();
        if (!(this instanceof Readable)) return new Readable(options);
        var isDuplex = this instanceof Duplex2;
        this._readableState = new ReadableState(options, this, isDuplex);
        this.readable = true;
        if (options) {
          if (typeof options.read === "function") this._read = options.read;
          if (typeof options.destroy === "function") this._destroy = options.destroy;
        }
        Stream.call(this);
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0) {
            return false;
          }
          return this._readableState.destroyed;
        },
        set: function set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      });
      Readable.prototype.destroy = destroyImpl.destroy;
      Readable.prototype._undestroy = destroyImpl.undestroy;
      Readable.prototype._destroy = function(err, cb2) {
        cb2(err);
      };
      Readable.prototype.push = function(chunk, encoding) {
        var state2 = this._readableState;
        var skipChunkCheck;
        if (!state2.objectMode) {
          if (typeof chunk === "string") {
            encoding = encoding || state2.defaultEncoding;
            if (encoding !== state2.encoding) {
              chunk = Buffer2.from(chunk, encoding);
              encoding = "";
            }
            skipChunkCheck = true;
          }
        } else {
          skipChunkCheck = true;
        }
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
      };
      Readable.prototype.unshift = function(chunk) {
        return readableAddChunk(this, chunk, null, true, false);
      };
      function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
        debug2("readableAddChunk", chunk);
        var state2 = stream._readableState;
        if (chunk === null) {
          state2.reading = false;
          onEofChunk(stream, state2);
        } else {
          var er;
          if (!skipChunkCheck) er = chunkInvalid(state2, chunk);
          if (er) {
            errorOrDestroy2(stream, er);
          } else if (state2.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
              chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
              if (state2.endEmitted) errorOrDestroy2(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
              else addChunk(stream, state2, chunk, true);
            } else if (state2.ended) {
              errorOrDestroy2(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state2.destroyed) {
              return false;
            } else {
              state2.reading = false;
              if (state2.decoder && !encoding) {
                chunk = state2.decoder.write(chunk);
                if (state2.objectMode || chunk.length !== 0) addChunk(stream, state2, chunk, false);
                else maybeReadMore(stream, state2);
              } else {
                addChunk(stream, state2, chunk, false);
              }
            }
          } else if (!addToFront) {
            state2.reading = false;
            maybeReadMore(stream, state2);
          }
        }
        return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
      }
      function addChunk(stream, state2, chunk, addToFront) {
        if (state2.flowing && state2.length === 0 && !state2.sync) {
          state2.awaitDrain = 0;
          stream.emit("data", chunk);
        } else {
          state2.length += state2.objectMode ? 1 : chunk.length;
          if (addToFront) state2.buffer.unshift(chunk);
          else state2.buffer.push(chunk);
          if (state2.needReadable) emitReadable(stream);
        }
        maybeReadMore(stream, state2);
      }
      function chunkInvalid(state2, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
        return er;
      }
      Readable.prototype.isPaused = function() {
        return this._readableState.flowing === false;
      };
      Readable.prototype.setEncoding = function(enc) {
        if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
        var decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        var p2 = this._readableState.buffer.head;
        var content = "";
        while (p2 !== null) {
          content += decoder.write(p2.data);
          p2 = p2.next;
        }
        this._readableState.buffer.clear();
        if (content !== "") this._readableState.buffer.push(content);
        this._readableState.length = content.length;
        return this;
      };
      var MAX_HWM = 1073741824;
      function computeNewHighWaterMark(n2) {
        if (n2 >= MAX_HWM) {
          n2 = MAX_HWM;
        } else {
          n2--;
          n2 |= n2 >>> 1;
          n2 |= n2 >>> 2;
          n2 |= n2 >>> 4;
          n2 |= n2 >>> 8;
          n2 |= n2 >>> 16;
          n2++;
        }
        return n2;
      }
      function howMuchToRead(n2, state2) {
        if (n2 <= 0 || state2.length === 0 && state2.ended) return 0;
        if (state2.objectMode) return 1;
        if (n2 !== n2) {
          if (state2.flowing && state2.length) return state2.buffer.head.data.length;
          else return state2.length;
        }
        if (n2 > state2.highWaterMark) state2.highWaterMark = computeNewHighWaterMark(n2);
        if (n2 <= state2.length) return n2;
        if (!state2.ended) {
          state2.needReadable = true;
          return 0;
        }
        return state2.length;
      }
      Readable.prototype.read = function(n2) {
        debug2("read", n2);
        n2 = parseInt(n2, 10);
        var state2 = this._readableState;
        var nOrig = n2;
        if (n2 !== 0) state2.emittedReadable = false;
        if (n2 === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
          debug2("read: emitReadable", state2.length, state2.ended);
          if (state2.length === 0 && state2.ended) endReadable(this);
          else emitReadable(this);
          return null;
        }
        n2 = howMuchToRead(n2, state2);
        if (n2 === 0 && state2.ended) {
          if (state2.length === 0) endReadable(this);
          return null;
        }
        var doRead = state2.needReadable;
        debug2("need readable", doRead);
        if (state2.length === 0 || state2.length - n2 < state2.highWaterMark) {
          doRead = true;
          debug2("length less than watermark", doRead);
        }
        if (state2.ended || state2.reading) {
          doRead = false;
          debug2("reading or ended", doRead);
        } else if (doRead) {
          debug2("do read");
          state2.reading = true;
          state2.sync = true;
          if (state2.length === 0) state2.needReadable = true;
          this._read(state2.highWaterMark);
          state2.sync = false;
          if (!state2.reading) n2 = howMuchToRead(nOrig, state2);
        }
        var ret;
        if (n2 > 0) ret = fromList(n2, state2);
        else ret = null;
        if (ret === null) {
          state2.needReadable = state2.length <= state2.highWaterMark;
          n2 = 0;
        } else {
          state2.length -= n2;
          state2.awaitDrain = 0;
        }
        if (state2.length === 0) {
          if (!state2.ended) state2.needReadable = true;
          if (nOrig !== n2 && state2.ended) endReadable(this);
        }
        if (ret !== null) this.emit("data", ret);
        return ret;
      };
      function onEofChunk(stream, state2) {
        debug2("onEofChunk");
        if (state2.ended) return;
        if (state2.decoder) {
          var chunk = state2.decoder.end();
          if (chunk && chunk.length) {
            state2.buffer.push(chunk);
            state2.length += state2.objectMode ? 1 : chunk.length;
          }
        }
        state2.ended = true;
        if (state2.sync) {
          emitReadable(stream);
        } else {
          state2.needReadable = false;
          if (!state2.emittedReadable) {
            state2.emittedReadable = true;
            emitReadable_(stream);
          }
        }
      }
      function emitReadable(stream) {
        var state2 = stream._readableState;
        debug2("emitReadable", state2.needReadable, state2.emittedReadable);
        state2.needReadable = false;
        if (!state2.emittedReadable) {
          debug2("emitReadable", state2.flowing);
          state2.emittedReadable = true;
          process.nextTick(emitReadable_, stream);
        }
      }
      function emitReadable_(stream) {
        var state2 = stream._readableState;
        debug2("emitReadable_", state2.destroyed, state2.length, state2.ended);
        if (!state2.destroyed && (state2.length || state2.ended)) {
          stream.emit("readable");
          state2.emittedReadable = false;
        }
        state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
        flow(stream);
      }
      function maybeReadMore(stream, state2) {
        if (!state2.readingMore) {
          state2.readingMore = true;
          process.nextTick(maybeReadMore_, stream, state2);
        }
      }
      function maybeReadMore_(stream, state2) {
        while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
          var len = state2.length;
          debug2("maybeReadMore read 0");
          stream.read(0);
          if (len === state2.length)
            break;
        }
        state2.readingMore = false;
      }
      Readable.prototype._read = function(n2) {
        errorOrDestroy2(this, new ERR_METHOD_NOT_IMPLEMENTED2("_read()"));
      };
      Readable.prototype.pipe = function(dest, pipeOpts) {
        var src = this;
        var state2 = this._readableState;
        switch (state2.pipesCount) {
          case 0:
            state2.pipes = dest;
            break;
          case 1:
            state2.pipes = [state2.pipes, dest];
            break;
          default:
            state2.pipes.push(dest);
            break;
        }
        state2.pipesCount += 1;
        debug2("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
        var endFn = doEnd ? onend : unpipe;
        if (state2.endEmitted) process.nextTick(endFn);
        else src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
          debug2("onunpipe");
          if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
              unpipeInfo.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          debug2("onend");
          dest.end();
        }
        var ondrain = pipeOnDrain(src);
        dest.on("drain", ondrain);
        var cleanedUp = false;
        function cleanup() {
          debug2("cleanup");
          dest.removeListener("close", onclose);
          dest.removeListener("finish", onfinish);
          dest.removeListener("drain", ondrain);
          dest.removeListener("error", onerror);
          dest.removeListener("unpipe", onunpipe);
          src.removeListener("end", onend);
          src.removeListener("end", unpipe);
          src.removeListener("data", ondata);
          cleanedUp = true;
          if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
        }
        src.on("data", ondata);
        function ondata(chunk) {
          debug2("ondata");
          var ret = dest.write(chunk);
          debug2("dest.write", ret);
          if (ret === false) {
            if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
              debug2("false write response, pause", state2.awaitDrain);
              state2.awaitDrain++;
            }
            src.pause();
          }
        }
        function onerror(er) {
          debug2("onerror", er);
          unpipe();
          dest.removeListener("error", onerror);
          if (EElistenerCount(dest, "error") === 0) errorOrDestroy2(dest, er);
        }
        prependListener(dest, "error", onerror);
        function onclose() {
          dest.removeListener("finish", onfinish);
          unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
          debug2("onfinish");
          dest.removeListener("close", onclose);
          unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
          debug2("unpipe");
          src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (!state2.flowing) {
          debug2("pipe resume");
          src.resume();
        }
        return dest;
      };
      function pipeOnDrain(src) {
        return function pipeOnDrainFunctionResult() {
          var state2 = src._readableState;
          debug2("pipeOnDrain", state2.awaitDrain);
          if (state2.awaitDrain) state2.awaitDrain--;
          if (state2.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state2.flowing = true;
            flow(src);
          }
        };
      }
      Readable.prototype.unpipe = function(dest) {
        var state2 = this._readableState;
        var unpipeInfo = {
          hasUnpiped: false
        };
        if (state2.pipesCount === 0) return this;
        if (state2.pipesCount === 1) {
          if (dest && dest !== state2.pipes) return this;
          if (!dest) dest = state2.pipes;
          state2.pipes = null;
          state2.pipesCount = 0;
          state2.flowing = false;
          if (dest) dest.emit("unpipe", this, unpipeInfo);
          return this;
        }
        if (!dest) {
          var dests = state2.pipes;
          var len = state2.pipesCount;
          state2.pipes = null;
          state2.pipesCount = 0;
          state2.flowing = false;
          for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
          return this;
        }
        var index = indexOf(state2.pipes, dest);
        if (index === -1) return this;
        state2.pipes.splice(index, 1);
        state2.pipesCount -= 1;
        if (state2.pipesCount === 1) state2.pipes = state2.pipes[0];
        dest.emit("unpipe", this, unpipeInfo);
        return this;
      };
      Readable.prototype.on = function(ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
        var state2 = this._readableState;
        if (ev === "data") {
          state2.readableListening = this.listenerCount("readable") > 0;
          if (state2.flowing !== false) this.resume();
        } else if (ev === "readable") {
          if (!state2.endEmitted && !state2.readableListening) {
            state2.readableListening = state2.needReadable = true;
            state2.flowing = false;
            state2.emittedReadable = false;
            debug2("on readable", state2.length, state2.reading);
            if (state2.length) {
              emitReadable(this);
            } else if (!state2.reading) {
              process.nextTick(nReadingNextTick, this);
            }
          }
        }
        return res;
      };
      Readable.prototype.addListener = Readable.prototype.on;
      Readable.prototype.removeListener = function(ev, fn) {
        var res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      Readable.prototype.removeAllListeners = function(ev) {
        var res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === void 0) {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      function updateReadableListening(self2) {
        var state2 = self2._readableState;
        state2.readableListening = self2.listenerCount("readable") > 0;
        if (state2.resumeScheduled && !state2.paused) {
          state2.flowing = true;
        } else if (self2.listenerCount("data") > 0) {
          self2.resume();
        }
      }
      function nReadingNextTick(self2) {
        debug2("readable nexttick read 0");
        self2.read(0);
      }
      Readable.prototype.resume = function() {
        var state2 = this._readableState;
        if (!state2.flowing) {
          debug2("resume");
          state2.flowing = !state2.readableListening;
          resume(this, state2);
        }
        state2.paused = false;
        return this;
      };
      function resume(stream, state2) {
        if (!state2.resumeScheduled) {
          state2.resumeScheduled = true;
          process.nextTick(resume_, stream, state2);
        }
      }
      function resume_(stream, state2) {
        debug2("resume", state2.reading);
        if (!state2.reading) {
          stream.read(0);
        }
        state2.resumeScheduled = false;
        stream.emit("resume");
        flow(stream);
        if (state2.flowing && !state2.reading) stream.read(0);
      }
      Readable.prototype.pause = function() {
        debug2("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
          debug2("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        this._readableState.paused = true;
        return this;
      };
      function flow(stream) {
        var state2 = stream._readableState;
        debug2("flow", state2.flowing);
        while (state2.flowing && stream.read() !== null) ;
      }
      Readable.prototype.wrap = function(stream) {
        var _this = this;
        var state2 = this._readableState;
        var paused = false;
        stream.on("end", function() {
          debug2("wrapped end");
          if (state2.decoder && !state2.ended) {
            var chunk = state2.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
          }
          _this.push(null);
        });
        stream.on("data", function(chunk) {
          debug2("wrapped data");
          if (state2.decoder) chunk = state2.decoder.write(chunk);
          if (state2.objectMode && (chunk === null || chunk === void 0)) return;
          else if (!state2.objectMode && (!chunk || !chunk.length)) return;
          var ret = _this.push(chunk);
          if (!ret) {
            paused = true;
            stream.pause();
          }
        });
        for (var i in stream) {
          if (this[i] === void 0 && typeof stream[i] === "function") {
            this[i] = /* @__PURE__ */ function methodWrap(method) {
              return function methodWrapReturnFunction() {
                return stream[method].apply(stream, arguments);
              };
            }(i);
          }
        }
        for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
          stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
        }
        this._read = function(n22) {
          debug2("wrapped _read", n22);
          if (paused) {
            paused = false;
            stream.resume();
          }
        };
        return this;
      };
      if (typeof Symbol === "function") {
        Readable.prototype[Symbol.asyncIterator] = function() {
          if (createReadableStreamAsyncIterator === void 0) {
            createReadableStreamAsyncIterator = requireAsync_iterator();
          }
          return createReadableStreamAsyncIterator(this);
        };
      }
      Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get2() {
          return this._readableState.highWaterMark;
        }
      });
      Object.defineProperty(Readable.prototype, "readableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get3() {
          return this._readableState && this._readableState.buffer;
        }
      });
      Object.defineProperty(Readable.prototype, "readableFlowing", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get4() {
          return this._readableState.flowing;
        },
        set: function set2(state2) {
          if (this._readableState) {
            this._readableState.flowing = state2;
          }
        }
      });
      Readable._fromList = fromList;
      Object.defineProperty(Readable.prototype, "readableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get5() {
          return this._readableState.length;
        }
      });
      function fromList(n2, state2) {
        if (state2.length === 0) return null;
        var ret;
        if (state2.objectMode) ret = state2.buffer.shift();
        else if (!n2 || n2 >= state2.length) {
          if (state2.decoder) ret = state2.buffer.join("");
          else if (state2.buffer.length === 1) ret = state2.buffer.first();
          else ret = state2.buffer.concat(state2.length);
          state2.buffer.clear();
        } else {
          ret = state2.buffer.consume(n2, state2.decoder);
        }
        return ret;
      }
      function endReadable(stream) {
        var state2 = stream._readableState;
        debug2("endReadable", state2.endEmitted);
        if (!state2.endEmitted) {
          state2.ended = true;
          process.nextTick(endReadableNT, state2, stream);
        }
      }
      function endReadableNT(state2, stream) {
        debug2("endReadableNT", state2.endEmitted, state2.length);
        if (!state2.endEmitted && state2.length === 0) {
          state2.endEmitted = true;
          stream.readable = false;
          stream.emit("end");
          if (state2.autoDestroy) {
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
              stream.destroy();
            }
          }
        }
      }
      if (typeof Symbol === "function") {
        Readable.from = function(iterable, opts) {
          if (from === void 0) {
            from = requireFromBrowser();
          }
          return from(Readable, iterable, opts);
        };
      }
      function indexOf(xs, x2) {
        for (var i = 0, l2 = xs.length; i < l2; i++) {
          if (xs[i] === x2) return i;
        }
        return -1;
      }
      return _stream_readable;
    }
    var _stream_transform = Transform$1;
    var _require$codes$1 = errorsBrowser.codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    inherits_browserExports(Transform$1, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb2 = ts.writecb;
      if (cb2 === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb2(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform$1(options) {
      if (!(this instanceof Transform$1)) return new Transform$1(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform$1.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform$1.prototype._transform = function(chunk, encoding, cb2) {
      cb2(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform$1.prototype._write = function(chunk, encoding, cb2) {
      var ts = this._transformState;
      ts.writecb = cb2;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform$1.prototype._read = function(n2) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform$1.prototype._destroy = function(err, cb2) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb2(err2);
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
    var _stream_passthrough = PassThrough;
    var Transform = _stream_transform;
    inherits_browserExports(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb2) {
      cb2(null, chunk);
    };
    var eos;
    function once$2(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = errorsBrowser.codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err) throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once$2(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0) eos = endOfStream;
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length) return noop;
      if (typeof streams[streams.length - 1] !== "function") return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0])) streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error2;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error2) error2 = err;
          if (err) destroys.forEach(call);
          if (reading) return;
          destroys.forEach(call);
          callback(error2);
        });
      });
      return streams.reduce(pipe);
    }
    var pipeline_1 = pipeline;
    (function(module2, exports2) {
      exports2 = module2.exports = require_stream_readable();
      exports2.Stream = exports2;
      exports2.Readable = exports2;
      exports2.Writable = require_stream_writable();
      exports2.Duplex = require_stream_duplex();
      exports2.Transform = _stream_transform;
      exports2.PassThrough = _stream_passthrough;
      exports2.finished = endOfStream;
      exports2.pipeline = pipeline_1;
    })(readableBrowser, readableBrowser.exports);
    var readableBrowserExports = readableBrowser.exports;
    Object.defineProperty(chunkIDTAZSDC, "__esModule", { value: true });
    var _readablestream$2 = readableBrowserExports;
    function createEngineStream(opts) {
      if (!(opts == null ? void 0 : opts.engine)) {
        throw new Error("Missing engine parameter!");
      }
      const { engine } = opts;
      const stream = new _readablestream$2.Duplex({ objectMode: true, read: () => void 0, write });
      if (engine.on) {
        engine.on("notification", (message) => {
          stream.push(message);
        });
      }
      return stream;
      function write(req, _encoding, streamWriteCallback) {
        engine.handle(req, (_err, res) => {
          stream.push(res);
        });
        streamWriteCallback();
      }
    }
    chunkIDTAZSDC.createEngineStream = createEngineStream;
    var chunk3SFZPJR3 = {};
    Object.defineProperty(chunk3SFZPJR3, "__esModule", { value: true });
    function _interopRequireDefault$2(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _safeeventemitter = cjs;
    var _safeeventemitter2 = _interopRequireDefault$2(_safeeventemitter);
    var _readablestream$1 = readableBrowserExports;
    function createStreamMiddleware(options = {}) {
      const idMap = {};
      const stream = new _readablestream$1.Duplex({
        objectMode: true,
        read: () => void 0,
        write: processMessage
      });
      const events = new _safeeventemitter2.default();
      const middleware = (req, res, next, end) => {
        idMap[req.id] = { req, res, next, end };
        sendToStream(req);
      };
      return { events, middleware, stream };
      function sendToStream(req) {
        stream.push(req);
      }
      function processMessage(res, _encoding, streamWriteCallback) {
        let errorObj = null;
        try {
          const isNotification = !res.id;
          if (isNotification) {
            processNotification(res);
          } else {
            processResponse(res);
          }
        } catch (_err) {
          errorObj = _err;
        }
        streamWriteCallback(errorObj);
      }
      function processResponse(res) {
        const { id: responseId } = res;
        if (responseId === null) {
          return;
        }
        const context = idMap[responseId];
        if (!context) {
          console.warn(`StreamMiddleware - Unknown response id "${responseId}"`);
          return;
        }
        delete idMap[responseId];
        Object.assign(context.res, res);
        setTimeout(context.end);
      }
      function processNotification(notif) {
        if ((options == null ? void 0 : options.retryOnMessage) && notif.method === options.retryOnMessage) {
          retryStuckRequests();
        }
        events.emit("notification", notif);
      }
      function retryStuckRequests() {
        Object.values(idMap).forEach(({ req, retryCount = 0 }) => {
          if (!req.id) {
            return;
          }
          if (retryCount >= 3) {
            throw new Error(
              `StreamMiddleware - Retry limit exceeded for request id "${req.id}"`
            );
          }
          const idMapObject = idMap[req.id];
          if (idMapObject) {
            idMapObject.retryCount = retryCount + 1;
          }
          sendToStream(req);
        });
      }
    }
    chunk3SFZPJR3.createStreamMiddleware = createStreamMiddleware;
    Object.defineProperty(dist$2, "__esModule", { value: true });
    var _chunkIDTAZSDCjs = chunkIDTAZSDC;
    var _chunk3SFZPJR3js = chunk3SFZPJR3;
    dist$2.createEngineStream = _chunkIDTAZSDCjs.createEngineStream;
    dist$2.createStreamMiddleware = _chunk3SFZPJR3js.createStreamMiddleware;
    var ObjectMultiplex$1 = {};
    var once$1 = { exports: {} };
    var wrappy_1 = wrappy$1;
    function wrappy$1(fn, cb2) {
      if (fn && cb2) return wrappy$1(fn)(cb2);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k2) {
        wrapper[k2] = fn[k2];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb3 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb3) {
          Object.keys(cb3).forEach(function(k2) {
            ret[k2] = cb3[k2];
          });
        }
        return ret;
      }
    }
    var wrappy = wrappy_1;
    once$1.exports = wrappy(once);
    once$1.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f2 = function() {
        if (f2.called) return f2.value;
        f2.called = true;
        return f2.value = fn.apply(this, arguments);
      };
      f2.called = false;
      return f2;
    }
    function onceStrict(fn) {
      var f2 = function() {
        if (f2.called)
          throw new Error(f2.onceError);
        f2.called = true;
        return f2.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f2.onceError = name + " shouldn't be called more than once";
      f2.called = false;
      return f2;
    }
    var onceExports = once$1.exports;
    var Substream$1 = {};
    var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
        t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
          if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
            t2[p2[i]] = s[p2[i]];
        }
      return t2;
    };
    Object.defineProperty(Substream$1, "__esModule", { value: true });
    Substream$1.Substream = void 0;
    const readable_stream_1$2 = readableBrowserExports;
    class Substream extends readable_stream_1$2.Duplex {
      constructor(_a) {
        var { parent, name } = _a, streamOptions = __rest(_a, ["parent", "name"]);
        super(Object.assign({ objectMode: true }, streamOptions));
        this._parent = parent;
        this._name = name;
      }
      /**
       * Explicitly sets read operations to a no-op.
       */
      _read() {
        return void 0;
      }
      /**
       * Called when data should be written to this writable stream.
       *
       * @param chunk - Arbitrary object to write
       * @param encoding - Encoding to use when writing payload
       * @param callback - Called when writing is complete or an error occurs
       */
      _write(chunk, _encoding, callback) {
        this._parent.push({
          name: this._name,
          data: chunk
        });
        callback();
      }
    }
    Substream$1.Substream = Substream;
    var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(ObjectMultiplex$1, "__esModule", { value: true });
    ObjectMultiplex$1.ObjectMultiplex = void 0;
    const readable_stream_1$1 = readableBrowserExports;
    const once_1 = __importDefault(onceExports);
    const Substream_1 = Substream$1;
    const IGNORE_SUBSTREAM = Symbol("IGNORE_SUBSTREAM");
    class ObjectMultiplex extends readable_stream_1$1.Duplex {
      constructor(opts = {}) {
        super(Object.assign({ objectMode: true }, opts));
        this._substreams = {};
      }
      createStream(name, opts = {}) {
        if (this.destroyed) {
          throw new Error(`ObjectMultiplex - parent stream for name "${name}" already destroyed`);
        }
        if (this._readableState.ended || this._writableState.ended) {
          throw new Error(`ObjectMultiplex - parent stream for name "${name}" already ended`);
        }
        if (!name) {
          throw new Error("ObjectMultiplex - name must not be empty");
        }
        if (this._substreams[name]) {
          throw new Error(`ObjectMultiplex - Substream for name "${name}" already exists`);
        }
        const substream = new Substream_1.Substream(Object.assign({ name, parent: this }, opts));
        this._substreams[name] = substream;
        anyStreamEnd(this, (_error) => {
          return substream.destroy(_error || void 0);
        });
        return substream;
      }
      // ignore streams (dont display orphaned data warning)
      ignoreStream(name) {
        if (!name) {
          throw new Error("ObjectMultiplex - name must not be empty");
        }
        if (this._substreams[name]) {
          throw new Error(`ObjectMultiplex - Substream for name "${name}" already exists`);
        }
        this._substreams[name] = IGNORE_SUBSTREAM;
      }
      _read() {
        return void 0;
      }
      _write(chunk, _encoding, callback) {
        const { name, data } = chunk;
        if (!name) {
          console.warn(`ObjectMultiplex - malformed chunk without name "${chunk}"`);
          return callback();
        }
        const substream = this._substreams[name];
        if (!substream) {
          console.warn(`ObjectMultiplex - orphaned data for stream "${name}"`);
          return callback();
        }
        if (substream !== IGNORE_SUBSTREAM) {
          substream.push(data);
        }
        return callback();
      }
    }
    ObjectMultiplex$1.ObjectMultiplex = ObjectMultiplex;
    function anyStreamEnd(stream, _cb) {
      const cb2 = (0, once_1.default)(_cb);
      (0, readable_stream_1$1.finished)(stream, { readable: false }, cb2);
      (0, readable_stream_1$1.finished)(stream, { writable: false }, cb2);
    }
    const ObjectMultiplex_1 = ObjectMultiplex$1;
    var dist$1 = ObjectMultiplex_1.ObjectMultiplex;
    const isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    var isStream_1 = isStream;
    Object.defineProperty(chunkDWR5HIZK, "__esModule", { value: true });
    function _interopRequireDefault$1(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _optionalChain$2(ops) {
      let lastAccessLHS = void 0;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
          return void 0;
        }
        if (op === "access" || op === "optionalAccess") {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = void 0;
        }
      }
      return value;
    }
    var _chunkA3W22U42js$1 = chunkA3W22U42;
    var _chunkO5ECOCX2js$2 = chunkO5ECOCX2;
    var _chunk4EQNSGSRjs$1 = chunk4EQNSGSR;
    var _jsonrpcmiddlewarestream = dist$2;
    var _objectmultiplex = dist$1;
    var _objectmultiplex2 = _interopRequireDefault$1(_objectmultiplex);
    var _isstream = isStream_1;
    var _readablestream = readableBrowserExports;
    var AbstractStreamProvider = class extends _chunkA3W22U42js$1.BaseProvider {
      /**
       * Creates a new AbstractStreamProvider instance.
       *
       * @param connectionStream - A Node.js duplex stream.
       * @param options - An options bag.
       * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
       * @param options.logger - The logging API to use. Default: `console`.
       * @param options.maxEventListeners - The maximum number of event
       * listeners. Default: 100.
       * @param options.rpcMiddleware - The RPC middleware stack to use.
       */
      constructor(connectionStream, {
        jsonRpcStreamName,
        logger = console,
        maxEventListeners = 100,
        rpcMiddleware = []
      }) {
        super({ logger, maxEventListeners, rpcMiddleware });
        if (!_isstream.duplex.call(void 0, connectionStream)) {
          throw new Error(_chunk4EQNSGSRjs$1.messages_default.errors.invalidDuplexStream());
        }
        this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
        const mux = new _objectmultiplex2.default();
        _readablestream.pipeline.call(
          void 0,
          connectionStream,
          mux,
          connectionStream,
          this._handleStreamDisconnect.bind(this, "MetaMask")
        );
        this._jsonRpcConnection = _jsonrpcmiddlewarestream.createStreamMiddleware.call(void 0, {
          retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY"
        });
        _readablestream.pipeline.call(
          void 0,
          this._jsonRpcConnection.stream,
          mux.createStream(jsonRpcStreamName),
          this._jsonRpcConnection.stream,
          this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")
        );
        this._rpcEngine.push(this._jsonRpcConnection.middleware);
        this._jsonRpcConnection.events.on("notification", (payload) => {
          const { method, params } = payload;
          if (method === "metamask_accountsChanged") {
            this._handleAccountsChanged(params);
          } else if (method === "metamask_unlockStateChanged") {
            this._handleUnlockStateChanged(params);
          } else if (method === "metamask_chainChanged") {
            this._handleChainChanged(params);
          } else if (_chunkO5ECOCX2js$2.EMITTED_NOTIFICATIONS.includes(method)) {
            this.emit("message", {
              type: method,
              data: params
            });
          } else if (method === "METAMASK_STREAM_FAILURE") {
            connectionStream.destroy(
              new Error(_chunk4EQNSGSRjs$1.messages_default.errors.permanentlyDisconnected())
            );
          }
        });
      }
      //====================
      // Private Methods
      //====================
      /**
       * MUST be called by child classes.
       *
       * Calls `metamask_getProviderState` and passes the result to
       * {@link BaseProvider._initializeState}. Logs an error if getting initial state
       * fails. Throws if called after initialization has completed.
       */
      _initializeStateAsync() {
        return __async(this, null, function* () {
          let initialState;
          try {
            initialState = yield this.request({
              method: "metamask_getProviderState"
            });
          } catch (error2) {
            this._log.error(
              "MetaMask: Failed to get initial state. Please report this bug.",
              error2
            );
          }
          this._initializeState(initialState);
        });
      }
      /**
       * Called when connection is lost to critical streams. Emits an 'error' event
       * from the provider with the error message and stack if present.
       *
       * @param streamName - The name of the stream that disconnected.
       * @param error - The error that caused the disconnection.
       * @fires BaseProvider#disconnect - If the provider is not already
       * disconnected.
       */
      // eslint-disable-next-line no-restricted-syntax
      _handleStreamDisconnect(streamName, error2) {
        let warningMsg = `MetaMask: Lost connection to "${streamName}".`;
        if (_optionalChain$2([error2, "optionalAccess", (_) => _.stack])) {
          warningMsg += `
${error2.stack}`;
        }
        this._log.warn(warningMsg);
        if (this.listenerCount("error") > 0) {
          this.emit("error", warningMsg);
        }
        this._handleDisconnect(false, error2 ? error2.message : void 0);
      }
      /**
       * Upon receipt of a new chainId and networkVersion, emits corresponding
       * events and sets relevant public state. This class does not have a
       * `networkVersion` property, but we rely on receiving a `networkVersion`
       * with the value of `loading` to detect when the network is changing and
       * a recoverable `disconnect` even has occurred. Child classes that use the
       * `networkVersion` for other purposes must implement additional handling
       * therefore.
       *
       * @fires BaseProvider#chainChanged
       * @param networkInfo - An object with network info.
       * @param networkInfo.chainId - The latest chain ID.
       * @param networkInfo.networkVersion - The latest network ID.
       */
      _handleChainChanged({
        chainId,
        networkVersion
      } = {}) {
        if (!_chunkO5ECOCX2js$2.isValidChainId.call(void 0, chainId) || !_chunkO5ECOCX2js$2.isValidNetworkVersion.call(void 0, networkVersion)) {
          this._log.error(_chunk4EQNSGSRjs$1.messages_default.errors.invalidNetworkParams(), {
            chainId,
            networkVersion
          });
          return;
        }
        if (networkVersion === "loading") {
          this._handleDisconnect(true);
        } else {
          super._handleChainChanged({ chainId });
        }
      }
    };
    var StreamProvider = class extends AbstractStreamProvider {
      /**
       * MUST be called after instantiation to complete initialization.
       *
       * Calls `metamask_getProviderState` and passes the result to
       * {@link BaseProvider._initializeState}. Logs an error if getting initial state
       * fails. Throws if called after initialization has completed.
       */
      initialize() {
        return __async(this, null, function* () {
          return this._initializeStateAsync();
        });
      }
    };
    chunkDWR5HIZK.AbstractStreamProvider = AbstractStreamProvider;
    chunkDWR5HIZK.StreamProvider = StreamProvider;
    Object.defineProperty(chunkHP7EYLLY, "__esModule", { value: true });
    function _nullishCoalesce$1(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
    function _optionalChain$1(ops) {
      let lastAccessLHS = void 0;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
          return void 0;
        }
        if (op === "access" || op === "optionalAccess") {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = void 0;
        }
      }
      return value;
    }
    var _chunkQ4DN6VYNjs = chunkQ4DN6VYN;
    var _chunkDWR5HIZKjs$2 = chunkDWR5HIZK;
    var _chunkO5ECOCX2js$1 = chunkO5ECOCX2;
    var _chunk4EQNSGSRjs = chunk4EQNSGSR;
    var _chunk3W5G4CYIjs = chunk3W5G4CYI;
    var _rpcerrors = dist$6;
    var MetaMaskInpageProviderStreamName = "metamask-provider";
    var _networkVersion;
    var MetaMaskInpageProvider$1 = class MetaMaskInpageProvider extends _chunkDWR5HIZKjs$2.AbstractStreamProvider {
      /**
       * Creates a new `MetaMaskInpageProvider`.
       *
       * @param connectionStream - A Node.js duplex stream.
       * @param options - An options bag.
       * @param options.jsonRpcStreamName - The name of the internal JSON-RPC stream.
       * Default: `metamask-provider`.
       * @param options.logger - The logging API to use. Default: `console`.
       * @param options.maxEventListeners - The maximum number of event
       * listeners. Default: 100.
       * @param options.shouldSendMetadata - Whether the provider should
       * send page metadata. Default: `true`.
       */
      constructor(connectionStream, {
        jsonRpcStreamName = MetaMaskInpageProviderStreamName,
        logger = console,
        maxEventListeners = 100,
        shouldSendMetadata
      } = {}) {
        super(connectionStream, {
          jsonRpcStreamName,
          logger,
          maxEventListeners,
          rpcMiddleware: _chunkO5ECOCX2js$1.getDefaultExternalMiddleware.call(void 0, logger)
        });
        this._sentWarnings = {
          // properties
          chainId: false,
          networkVersion: false,
          selectedAddress: false,
          // methods
          enable: false,
          experimentalMethods: false,
          send: false,
          // events
          events: {
            close: false,
            data: false,
            networkChanged: false,
            notification: false
          }
        };
        _chunk3W5G4CYIjs.__privateAdd.call(void 0, this, _networkVersion, void 0);
        this._initializeStateAsync();
        _chunk3W5G4CYIjs.__privateSet.call(void 0, this, _networkVersion, null);
        this.isMetaMask = true;
        this._sendSync = this._sendSync.bind(this);
        this.enable = this.enable.bind(this);
        this.send = this.send.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        this._warnOfDeprecation = this._warnOfDeprecation.bind(this);
        this._metamask = this._getExperimentalApi();
        this._jsonRpcConnection.events.on("notification", (payload) => {
          const { method } = payload;
          if (_chunkO5ECOCX2js$1.EMITTED_NOTIFICATIONS.includes(method)) {
            this.emit("data", payload);
            this.emit("notification", payload.params.result);
          }
        });
        if (shouldSendMetadata) {
          if (document.readyState === "complete") {
            _chunkQ4DN6VYNjs.sendSiteMetadata.call(void 0, this._rpcEngine, this._log);
          } else {
            const domContentLoadedHandler = () => {
              _chunkQ4DN6VYNjs.sendSiteMetadata.call(void 0, this._rpcEngine, this._log);
              window.removeEventListener(
                "DOMContentLoaded",
                domContentLoadedHandler
              );
            };
            window.addEventListener("DOMContentLoaded", domContentLoadedHandler);
          }
        }
      }
      //====================
      // Deprecated Properties
      //====================
      get chainId() {
        if (!this._sentWarnings.chainId) {
          this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.chainIdDeprecation);
          this._sentWarnings.chainId = true;
        }
        return super.chainId;
      }
      get networkVersion() {
        if (!this._sentWarnings.networkVersion) {
          this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.networkVersionDeprecation);
          this._sentWarnings.networkVersion = true;
        }
        return _chunk3W5G4CYIjs.__privateGet.call(void 0, this, _networkVersion);
      }
      get selectedAddress() {
        if (!this._sentWarnings.selectedAddress) {
          this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.selectedAddressDeprecation);
          this._sentWarnings.selectedAddress = true;
        }
        return super.selectedAddress;
      }
      //====================
      // Public Methods
      //====================
      /**
       * Submits an RPC request per the given JSON-RPC request object.
       *
       * @param payload - The RPC request object.
       * @param callback - The callback function.
       */
      sendAsync(payload, callback) {
        this._rpcRequest(payload, callback);
      }
      /**
       * We override the following event methods so that we can warn consumers
       * about deprecated events:
       * `addListener`, `on`, `once`, `prependListener`, `prependOnceListener`.
       */
      addListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.addListener(eventName, listener);
      }
      on(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.on(eventName, listener);
      }
      once(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.once(eventName, listener);
      }
      prependListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.prependListener(eventName, listener);
      }
      prependOnceListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.prependOnceListener(eventName, listener);
      }
      //====================
      // Private Methods
      //====================
      /**
       * When the provider becomes disconnected, updates internal state and emits
       * required events. Idempotent with respect to the isRecoverable parameter.
       *
       * Error codes per the CloseEvent status codes as required by EIP-1193:
       * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes.
       *
       * @param isRecoverable - Whether the disconnection is recoverable.
       * @param errorMessage - A custom error message.
       * @fires BaseProvider#disconnect - If the disconnection is not recoverable.
       */
      _handleDisconnect(isRecoverable, errorMessage) {
        super._handleDisconnect(isRecoverable, errorMessage);
        if (_chunk3W5G4CYIjs.__privateGet.call(void 0, this, _networkVersion) && !isRecoverable) {
          _chunk3W5G4CYIjs.__privateSet.call(void 0, this, _networkVersion, null);
        }
      }
      /**
       * Warns of deprecation for the given event, if applicable.
       *
       * @param eventName - The name of the event.
       */
      _warnOfDeprecation(eventName) {
        if (_optionalChain$1([this, "access", (_) => _._sentWarnings, "optionalAccess", (_2) => _2.events, "access", (_3) => _3[eventName]]) === false) {
          this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.events[eventName]);
          this._sentWarnings.events[eventName] = true;
        }
      }
      //====================
      // Deprecated Methods
      //====================
      /**
       * Equivalent to: `ethereum.request('eth_requestAccounts')`.
       *
       * @deprecated Use request({ method: 'eth_requestAccounts' }) instead.
       * @returns A promise that resolves to an array of addresses.
       */
      enable() {
        return __async(this, null, function* () {
          if (!this._sentWarnings.enable) {
            this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.enableDeprecation);
            this._sentWarnings.enable = true;
          }
          return new Promise((resolve, reject) => {
            try {
              this._rpcRequest(
                { method: "eth_requestAccounts", params: [] },
                _chunkO5ECOCX2js$1.getRpcPromiseCallback.call(void 0, resolve, reject)
              );
            } catch (error2) {
              reject(error2);
            }
          });
        });
      }
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      send(methodOrPayload, callbackOrArgs) {
        if (!this._sentWarnings.send) {
          this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.sendDeprecation);
          this._sentWarnings.send = true;
        }
        if (typeof methodOrPayload === "string" && (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
          return new Promise((resolve, reject) => {
            try {
              this._rpcRequest(
                { method: methodOrPayload, params: callbackOrArgs },
                _chunkO5ECOCX2js$1.getRpcPromiseCallback.call(void 0, resolve, reject, false)
              );
            } catch (error2) {
              reject(error2);
            }
          });
        } else if (methodOrPayload && typeof methodOrPayload === "object" && typeof callbackOrArgs === "function") {
          return this._rpcRequest(
            methodOrPayload,
            callbackOrArgs
          );
        }
        return this._sendSync(methodOrPayload);
      }
      /**
       * Internal backwards compatibility method, used in send.
       *
       * @param payload - A JSON-RPC request object.
       * @returns A JSON-RPC response object.
       * @deprecated
       */
      _sendSync(payload) {
        let result;
        switch (payload.method) {
          case "eth_accounts":
            result = this.selectedAddress ? [this.selectedAddress] : [];
            break;
          case "eth_coinbase":
            result = _nullishCoalesce$1(this.selectedAddress, () => null);
            break;
          case "eth_uninstallFilter":
            this._rpcRequest(payload, _chunkO5ECOCX2js$1.NOOP);
            result = true;
            break;
          case "net_version":
            result = _nullishCoalesce$1(_chunk3W5G4CYIjs.__privateGet.call(void 0, this, _networkVersion), () => null);
            break;
          default:
            throw new Error(_chunk4EQNSGSRjs.messages_default.errors.unsupportedSync(payload.method));
        }
        return {
          id: payload.id,
          jsonrpc: payload.jsonrpc,
          result
        };
      }
      /**
       * Constructor helper.
       *
       * Gets the experimental _metamask API as Proxy, so that we can warn consumers
       * about its experimental nature.
       *
       * @returns The experimental _metamask API.
       */
      _getExperimentalApi() {
        return new Proxy(
          {
            /**
             * Determines if MetaMask is unlocked by the user.
             *
             * @returns Promise resolving to true if MetaMask is currently unlocked.
             */
            isUnlocked: () => __async(this, null, function* () {
              if (!this._state.initialized) {
                yield new Promise((resolve) => {
                  this.on("_initialized", () => resolve());
                });
              }
              return this._state.isUnlocked;
            }),
            /**
             * Make a batch RPC request.
             *
             * @param requests - The RPC requests to make.
             */
            requestBatch: (requests) => __async(this, null, function* () {
              if (!Array.isArray(requests)) {
                throw _rpcerrors.rpcErrors.invalidRequest({
                  message: "Batch requests must be made with an array of request objects.",
                  data: requests
                });
              }
              return new Promise((resolve, reject) => {
                this._rpcRequest(requests, _chunkO5ECOCX2js$1.getRpcPromiseCallback.call(void 0, resolve, reject));
              });
            })
          },
          {
            get: (obj, prop, ...args) => {
              if (!this._sentWarnings.experimentalMethods) {
                this._log.warn(_chunk4EQNSGSRjs.messages_default.warnings.experimentalMethods);
                this._sentWarnings.experimentalMethods = true;
              }
              return Reflect.get(obj, prop, ...args);
            }
          }
        );
      }
      /**
       * Upon receipt of a new chainId and networkVersion, emits corresponding
       * events and sets relevant public state. Does nothing if neither the chainId
       * nor the networkVersion are different from existing values.
       *
       * @fires MetamaskInpageProvider#networkChanged
       * @param networkInfo - An object with network info.
       * @param networkInfo.chainId - The latest chain ID.
       * @param networkInfo.networkVersion - The latest network ID.
       */
      _handleChainChanged({
        chainId,
        networkVersion
      } = {}) {
        super._handleChainChanged({ chainId, networkVersion });
        if (this._state.isConnected && networkVersion !== _chunk3W5G4CYIjs.__privateGet.call(void 0, this, _networkVersion)) {
          _chunk3W5G4CYIjs.__privateSet.call(void 0, this, _networkVersion, networkVersion);
          if (this._state.initialized) {
            this.emit("networkChanged", _chunk3W5G4CYIjs.__privateGet.call(void 0, this, _networkVersion));
          }
        }
      }
    };
    _networkVersion = /* @__PURE__ */ new WeakMap();
    chunkHP7EYLLY.MetaMaskInpageProviderStreamName = MetaMaskInpageProviderStreamName;
    chunkHP7EYLLY.MetaMaskInpageProvider = MetaMaskInpageProvider$1;
    var __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l2 = from.length, ar; i < l2; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var BrowserInfo = (
      /** @class */
      /* @__PURE__ */ function() {
        function BrowserInfo2(name, version, os) {
          this.name = name;
          this.version = version;
          this.os = os;
          this.type = "browser";
        }
        return BrowserInfo2;
      }()
    );
    var NodeInfo = (
      /** @class */
      /* @__PURE__ */ function() {
        function NodeInfo2(version) {
          this.version = version;
          this.type = "node";
          this.name = "node";
          this.os = process.platform;
        }
        return NodeInfo2;
      }()
    );
    var SearchBotDeviceInfo = (
      /** @class */
      /* @__PURE__ */ function() {
        function SearchBotDeviceInfo2(name, version, os, bot) {
          this.name = name;
          this.version = version;
          this.os = os;
          this.bot = bot;
          this.type = "bot-device";
        }
        return SearchBotDeviceInfo2;
      }()
    );
    var BotInfo = (
      /** @class */
      /* @__PURE__ */ function() {
        function BotInfo2() {
          this.type = "bot";
          this.bot = true;
          this.name = "bot";
          this.version = null;
          this.os = null;
        }
        return BotInfo2;
      }()
    );
    var ReactNativeInfo = (
      /** @class */
      /* @__PURE__ */ function() {
        function ReactNativeInfo2() {
          this.type = "react-native";
          this.name = "react-native";
          this.version = null;
          this.os = null;
        }
        return ReactNativeInfo2;
      }()
    );
    var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
    var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    var REQUIRED_VERSION_PARTS = 3;
    var userAgentRules = [
      ["aol", /AOLShield\/([0-9\._]+)/],
      ["edge", /Edge\/([0-9\._]+)/],
      ["edge-ios", /EdgiOS\/([0-9\._]+)/],
      ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
      ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
      ["samsung", /SamsungBrowser\/([0-9\.]+)/],
      ["silk", /\bSilk\/([0-9._-]+)\b/],
      ["miui", /MiuiBrowser\/([0-9\.]+)$/],
      ["beaker", /BeakerBrowser\/([0-9\.]+)/],
      ["edge-chromium", /EdgA?\/([0-9\.]+)/],
      [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
      ],
      ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
      ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
      ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
      ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
      ["fxios", /FxiOS\/([0-9\.]+)/],
      ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
      ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
      ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
      ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
      ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
      ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
      ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
      ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
      ["ie", /MSIE\s(7\.0)/],
      ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
      ["android", /Android\s([0-9\.]+)/],
      ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
      ["safari", /Version\/([0-9\._]+).*Safari/],
      ["facebook", /FB[AS]V\/([0-9\.]+)/],
      ["instagram", /Instagram\s([0-9\.]+)/],
      ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
      ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
      ["curl", /^curl\/([0-9\.]+)$/],
      ["searchbot", SEARCHBOX_UA_REGEX]
    ];
    var operatingSystemRules = [
      ["iOS", /iP(hone|od|ad)/],
      ["Android OS", /Android/],
      ["BlackBerry OS", /BlackBerry|BB10/],
      ["Windows Mobile", /IEMobile/],
      ["Amazon OS", /Kindle/],
      ["Windows 3.11", /Win16/],
      ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
      ["Windows 98", /(Windows 98)|(Win98)/],
      ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
      ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
      ["Windows Server 2003", /(Windows NT 5.2)/],
      ["Windows Vista", /(Windows NT 6.0)/],
      ["Windows 7", /(Windows NT 6.1)/],
      ["Windows 8", /(Windows NT 6.2)/],
      ["Windows 8.1", /(Windows NT 6.3)/],
      ["Windows 10", /(Windows NT 10.0)/],
      ["Windows ME", /Windows ME/],
      ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
      ["Open BSD", /OpenBSD/],
      ["Sun OS", /SunOS/],
      ["Chrome OS", /CrOS/],
      ["Linux", /(Linux)|(X11)/],
      ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
      ["QNX", /QNX/],
      ["BeOS", /BeOS/],
      ["OS/2", /OS\/2/]
    ];
    function detect$1(userAgent) {
      if (!!userAgent) {
        return parseUserAgent(userAgent);
      }
      if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        return new ReactNativeInfo();
      }
      if (typeof navigator !== "undefined") {
        return parseUserAgent(navigator.userAgent);
      }
      return getNodeVersion();
    }
    function matchUserAgent(ua2) {
      return ua2 !== "" && userAgentRules.reduce(function(matched, _a) {
        var browser2 = _a[0], regex = _a[1];
        if (matched) {
          return matched;
        }
        var uaMatch = regex.exec(ua2);
        return !!uaMatch && [browser2, uaMatch];
      }, false);
    }
    function browserName(ua2) {
      var data = matchUserAgent(ua2);
      return data ? data[0] : null;
    }
    function parseUserAgent(ua2) {
      var matchedRule = matchUserAgent(ua2);
      if (!matchedRule) {
        return null;
      }
      var name = matchedRule[0], match = matchedRule[1];
      if (name === "searchbot") {
        return new BotInfo();
      }
      var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
      if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
          versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
      } else {
        versionParts = [];
      }
      var version = versionParts.join(".");
      var os = detectOS(ua2);
      var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
      if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
      }
      return new BrowserInfo(name, version, os);
    }
    function detectOS(ua2) {
      for (var ii2 = 0, count = operatingSystemRules.length; ii2 < count; ii2++) {
        var _a = operatingSystemRules[ii2], os = _a[0], regex = _a[1];
        var match = regex.exec(ua2);
        if (match) {
          return os;
        }
      }
      return null;
    }
    function getNodeVersion() {
      var isNode = typeof process !== "undefined" && process.version;
      return isNode ? new NodeInfo(process.version.slice(1)) : null;
    }
    function createVersionParts(count) {
      var output = [];
      for (var ii2 = 0; ii2 < count; ii2++) {
        output.push("0");
      }
      return output;
    }
    const es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      BotInfo,
      BrowserInfo,
      NodeInfo,
      ReactNativeInfo,
      SearchBotDeviceInfo,
      browserName,
      detect: detect$1,
      detectOS,
      getNodeVersion,
      parseUserAgent
    }, Symbol.toStringTag, { value: "Module" }));
    const require$$2 = /* @__PURE__ */ getAugmentedNamespace(es);
    var dist = {};
    Object.defineProperty(dist, "__esModule", { value: true });
    const readable_stream_1 = readableBrowserExports;
    class PortDuplexStream extends readable_stream_1.Duplex {
      /**
       * @param port - An instance of WebExtensions Runtime.Port. See:
       * {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port}
       */
      constructor(port) {
        super({ objectMode: true });
        this._port = port;
        this._port.onMessage.addListener((msg) => this._onMessage(msg));
        this._port.onDisconnect.addListener(() => this._onDisconnect());
        this._log = () => null;
      }
      /**
       * Callback triggered when a message is received from
       * the remote Port associated with this Stream.
       *
       * @param msg - Payload from the onMessage listener of the port
       */
      _onMessage(msg) {
        if (Buffer.isBuffer(msg)) {
          const data = Buffer.from(msg);
          this._log(data, false);
          this.push(data);
        } else {
          this._log(msg, false);
          this.push(msg);
        }
      }
      /**
       * Callback triggered when the remote Port associated with this Stream
       * disconnects.
       */
      _onDisconnect() {
        this.destroy();
      }
      /**
       * Explicitly sets read operations to a no-op.
       */
      _read() {
        return void 0;
      }
      /**
       * Called internally when data should be written to this writable stream.
       *
       * @param msg - Arbitrary object to write
       * @param encoding - Encoding to use when writing payload
       * @param cb - Called when writing is complete or an error occurs
       */
      _write(msg, _encoding, cb2) {
        try {
          if (Buffer.isBuffer(msg)) {
            const data = msg.toJSON();
            data._isBuffer = true;
            this._log(data, true);
            this._port.postMessage(data);
          } else {
            this._log(msg, true);
            this._port.postMessage(msg);
          }
        } catch (error2) {
          return cb2(new Error("PortDuplexStream - disconnected"));
        }
        return cb2();
      }
      /**
       * Call to set a custom logger for incoming/outgoing messages
       *
       * @param log - the logger function
       */
      _setLogger(log) {
        this._log = log;
      }
    }
    dist.default = PortDuplexStream;
    Object.defineProperty(chunkKUKZKOBU, "__esModule", { value: true });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
    function _optionalChain(ops) {
      let lastAccessLHS = void 0;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
          return void 0;
        }
        if (op === "access" || op === "optionalAccess") {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = void 0;
        }
      }
      return value;
    }
    var _chunkHP7EYLLYjs$2 = chunkHP7EYLLY;
    var _chunkDWR5HIZKjs$1 = chunkDWR5HIZK;
    var _chunkO5ECOCX2js = chunkO5ECOCX2;
    var _detectbrowser = require$$2;
    var _extensionportstream = dist;
    var _extensionportstream2 = _interopRequireDefault(_extensionportstream);
    var external_extension_config_default = {
      chromeIds: {
        stable: "nkbihfbeogaeaoehlefnkodbefgpgknn",
        beta: "pbbkamfgmaedccnfkmjcofcecjhfgldn",
        flask: "ljfoeinjpaedjfecbmggjgodbgkmjkjk"
      },
      firefoxIds: {
        stable: "webextension@metamask.io",
        beta: "webextension-beta@metamask.io",
        flask: "webextension-flask@metamask.io"
      }
    };
    var browser$1 = _detectbrowser.detect.call(void 0);
    function createExternalExtensionProvider(typeOrId = "stable") {
      let provider;
      try {
        const extensionId = getExtensionId(typeOrId);
        const metamaskPort = chrome.runtime.connect(extensionId);
        const pluginStream = new (0, _extensionportstream2.default)(metamaskPort);
        provider = new (0, _chunkDWR5HIZKjs$1.StreamProvider)(pluginStream, {
          jsonRpcStreamName: _chunkHP7EYLLYjs$2.MetaMaskInpageProviderStreamName,
          logger: console,
          rpcMiddleware: _chunkO5ECOCX2js.getDefaultExternalMiddleware.call(void 0, console)
        });
        provider.initialize();
      } catch (error2) {
        console.dir(`MetaMask connect error.`, error2);
        throw error2;
      }
      return provider;
    }
    function getExtensionId(typeOrId) {
      const ids = _optionalChain([browser$1, "optionalAccess", (_) => _.name]) === "firefox" ? external_extension_config_default.firefoxIds : external_extension_config_default.chromeIds;
      return _nullishCoalesce(ids[typeOrId], () => typeOrId);
    }
    chunkKUKZKOBU.createExternalExtensionProvider = createExternalExtensionProvider;
    var chunkIZY7ABOL = {};
    var chunkDD6YP3BV = {};
    Object.defineProperty(chunkDD6YP3BV, "__esModule", { value: true });
    function shimWeb3(provider, log = console) {
      let loggedCurrentProvider = false;
      let loggedMissingProperty = false;
      if (!window.web3) {
        const SHIM_IDENTIFIER = "__isMetaMaskShim__";
        let web3Shim = { currentProvider: provider };
        Object.defineProperty(web3Shim, SHIM_IDENTIFIER, {
          value: true,
          enumerable: true,
          configurable: false,
          writable: false
        });
        web3Shim = new Proxy(web3Shim, {
          get: (target, property, ...args) => {
            if (property === "currentProvider" && !loggedCurrentProvider) {
              loggedCurrentProvider = true;
              log.warn(
                "You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"
              );
            } else if (property !== "currentProvider" && property !== SHIM_IDENTIFIER && !loggedMissingProperty) {
              loggedMissingProperty = true;
              log.error(
                `MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3`
              );
              provider.request({ method: "metamask_logWeb3ShimUsage" }).catch((error2) => {
                log.debug("MetaMask: Failed to log web3 shim usage.", error2);
              });
            }
            return Reflect.get(target, property, ...args);
          },
          set: (...args) => {
            log.warn(
              "You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"
            );
            return Reflect.set(...args);
          }
        });
        Object.defineProperty(window, "web3", {
          value: web3Shim,
          enumerable: false,
          configurable: true,
          writable: true
        });
      }
    }
    chunkDD6YP3BV.shimWeb3 = shimWeb3;
    var chunkWBB62AKC = {};
    Object.defineProperty(chunkWBB62AKC, "__esModule", { value: true });
    var _utils = dist$3;
    var UUID_V4_REGEX = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u;
    var FQDN_REGEX = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/u;
    function requestProvider(handleProvider) {
      window.addEventListener(
        "eip6963:announceProvider",
        (event) => {
          if (!isValidAnnounceProviderEvent(event)) {
            throwErrorEIP6963(
              `Invalid EIP-6963 AnnounceProviderEvent object received from ${"eip6963:announceProvider"} event.`
            );
          }
          handleProvider(event.detail);
        }
      );
      window.dispatchEvent(new Event(
        "eip6963:requestProvider"
        /* Request */
      ));
    }
    function announceProvider(providerDetail) {
      if (!isValidProviderDetail(providerDetail)) {
        throwErrorEIP6963("Invalid EIP-6963 ProviderDetail object.");
      }
      const { info, provider } = providerDetail;
      const _announceProvider = () => window.dispatchEvent(
        new CustomEvent("eip6963:announceProvider", {
          detail: Object.freeze({ info: __spreadValues({}, info), provider })
        })
      );
      _announceProvider();
      window.addEventListener(
        "eip6963:requestProvider",
        (event) => {
          if (!isValidRequestProviderEvent(event)) {
            throwErrorEIP6963(
              `Invalid EIP-6963 RequestProviderEvent object received from ${"eip6963:requestProvider"} event.`
            );
          }
          _announceProvider();
        }
      );
    }
    function isValidRequestProviderEvent(event) {
      return event instanceof Event && event.type === "eip6963:requestProvider";
    }
    function isValidAnnounceProviderEvent(event) {
      return event instanceof CustomEvent && event.type === "eip6963:announceProvider" && Object.isFrozen(event.detail) && isValidProviderDetail(event.detail);
    }
    function isValidProviderDetail(providerDetail) {
      if (!_utils.isObject.call(void 0, providerDetail) || !_utils.isObject.call(void 0, providerDetail.info) || !_utils.isObject.call(void 0, providerDetail.provider)) {
        return false;
      }
      const { info } = providerDetail;
      return typeof info.uuid === "string" && UUID_V4_REGEX.test(info.uuid) && typeof info.name === "string" && Boolean(info.name) && typeof info.icon === "string" && info.icon.startsWith("data:image") && typeof info.rdns === "string" && FQDN_REGEX.test(info.rdns);
    }
    function throwErrorEIP6963(message) {
      throw new Error(
        `${message} See https://eips.ethereum.org/EIPS/eip-6963 for requirements.`
      );
    }
    chunkWBB62AKC.requestProvider = requestProvider;
    chunkWBB62AKC.announceProvider = announceProvider;
    Object.defineProperty(chunkIZY7ABOL, "__esModule", { value: true });
    var _chunkDD6YP3BVjs$1 = chunkDD6YP3BV;
    var _chunkWBB62AKCjs$1 = chunkWBB62AKC;
    var _chunkHP7EYLLYjs$1 = chunkHP7EYLLY;
    function initializeProvider({
      connectionStream,
      jsonRpcStreamName,
      logger = console,
      maxEventListeners = 100,
      providerInfo,
      shouldSendMetadata = true,
      shouldSetOnWindow = true,
      shouldShimWeb3 = false
    }) {
      const provider = new _chunkHP7EYLLYjs$1.MetaMaskInpageProvider(connectionStream, {
        jsonRpcStreamName,
        logger,
        maxEventListeners,
        shouldSendMetadata
      });
      const proxiedProvider = new Proxy(provider, {
        // some common libraries, e.g. web3@1.x, mess with our API
        deleteProperty: () => true,
        // fix issue with Proxy unable to access private variables from getters
        // https://stackoverflow.com/a/73051482
        get(target, propName) {
          return target[propName];
        }
      });
      if (providerInfo) {
        _chunkWBB62AKCjs$1.announceProvider.call(void 0, {
          info: providerInfo,
          provider: proxiedProvider
        });
      }
      if (shouldSetOnWindow) {
        setGlobalProvider(proxiedProvider);
      }
      if (shouldShimWeb3) {
        _chunkDD6YP3BVjs$1.shimWeb3.call(void 0, proxiedProvider, logger);
      }
      return proxiedProvider;
    }
    function setGlobalProvider(providerInstance) {
      window.ethereum = providerInstance;
      window.dispatchEvent(new Event("ethereum#initialized"));
    }
    chunkIZY7ABOL.initializeProvider = initializeProvider;
    chunkIZY7ABOL.setGlobalProvider = setGlobalProvider;
    Object.defineProperty(dist$8, "__esModule", { value: true });
    var _chunkKUKZKOBUjs = chunkKUKZKOBU;
    var _chunkIZY7ABOLjs = chunkIZY7ABOL;
    var _chunkDD6YP3BVjs = chunkDD6YP3BV;
    var _chunkWBB62AKCjs = chunkWBB62AKC;
    var _chunkHP7EYLLYjs = chunkHP7EYLLY;
    var _chunkDWR5HIZKjs = chunkDWR5HIZK;
    var _chunkA3W22U42js = chunkA3W22U42;
    dist$8.BaseProvider = _chunkA3W22U42js.BaseProvider;
    dist$8.MetaMaskInpageProvider = _chunkHP7EYLLYjs.MetaMaskInpageProvider;
    dist$8.MetaMaskInpageProviderStreamName = _chunkHP7EYLLYjs.MetaMaskInpageProviderStreamName;
    dist$8.StreamProvider = _chunkDWR5HIZKjs.StreamProvider;
    dist$8.createExternalExtensionProvider = _chunkKUKZKOBUjs.createExternalExtensionProvider;
    dist$8.eip6963AnnounceProvider = _chunkWBB62AKCjs.announceProvider;
    dist$8.eip6963RequestProvider = _chunkWBB62AKCjs.requestProvider;
    dist$8.initializeProvider = _chunkIZY7ABOLjs.initializeProvider;
    dist$8.setGlobalProvider = _chunkIZY7ABOLjs.setGlobalProvider;
    dist$8.shimWeb3 = _chunkDD6YP3BVjs.shimWeb3;
    const CHROME_ID = "nkbihfbeogaeaoehlefnkodbefgpgknn";
    const FIREFOX_ID = "webextension@metamask.io";
    const require$$3 = {
      CHROME_ID,
      FIREFOX_ID
    };
    const { MetaMaskInpageProvider } = dist$8;
    const PortStream = dist.default;
    const { detect } = require$$2;
    const browser = detect();
    const config = require$$3;
    var metamaskExtensionProvider = function createMetaMaskProvider() {
      let provider;
      try {
        let currentMetaMaskId = getMetaMaskId();
        const metamaskPort = chrome.runtime.connect(currentMetaMaskId);
        const pluginStream = new PortStream(metamaskPort);
        provider = new MetaMaskInpageProvider(pluginStream);
      } catch (e) {
        console.dir(`Metamask connect error `, e);
        throw e;
      }
      return provider;
    };
    function getMetaMaskId() {
      switch (browser && browser.name) {
        case "chrome":
          return config.CHROME_ID;
        case "firefox":
          return config.FIREFOX_ID;
        default:
          return config.CHROME_ID;
      }
    }
    const createExtensionProvider = /* @__PURE__ */ getDefaultExportFromCjs(metamaskExtensionProvider);
    const _MetaMaskService = class _MetaMaskService {
      constructor() {
        __publicField(this, "provider", null);
        __publicField(this, "state", {
          isAvailable: false,
          accounts: [],
          chainId: null,
          isConnected: false
        });
        __publicField(this, "eventListeners", /* @__PURE__ */ new Map());
        this.initializeProvider();
      }
      static getInstance() {
        if (!_MetaMaskService.instance) {
          _MetaMaskService.instance = new _MetaMaskService();
        }
        return _MetaMaskService.instance;
      }
      initializeProvider() {
        return __async(this, null, function* () {
          try {
            this.provider = createExtensionProvider();
            if (this.provider) {
              this.state.isAvailable = true;
              this.setupEventListeners();
              this.emit("metamask_ready", { available: true });
              console.log("MetaMask provider initialized successfully");
              yield this.checkExistingConnection();
            } else {
              this.state.isAvailable = false;
              this.emit("metamask_ready", { available: false });
              console.log("MetaMask provider not available");
            }
          } catch (error2) {
            console.error("Error initializing MetaMask provider:", error2);
            this.state.isAvailable = false;
            this.emit("metamask_ready", { available: false });
          }
        });
      }
      setupEventListeners() {
        if (!this.provider) return;
        this.provider.on("accountsChanged", (accounts) => {
          this.state.accounts = accounts;
          this.state.isConnected = accounts.length > 0;
          this.emit("accounts_changed", { accounts });
        });
        this.provider.on("chainChanged", (chainId) => {
          this.state.chainId = chainId;
          this.emit("chain_changed", { chainId });
        });
        this.provider.on("connect", (connectInfo) => {
          this.state.isConnected = true;
          this.emit("wallet_connected", connectInfo);
        });
        this.provider.on("disconnect", (error2) => {
          this.state.isConnected = false;
          this.state.accounts = [];
          this.emit("wallet_disconnected", { error: error2 });
        });
      }
      checkExistingConnection() {
        return __async(this, null, function* () {
          if (!this.provider) return;
          try {
            const accounts = yield this.provider.request({ method: "eth_accounts" });
            if (accounts && accounts.length > 0) {
              this.state.accounts = accounts;
              this.state.isConnected = true;
              const chainId = yield this.provider.request({ method: "eth_chainId" });
              this.state.chainId = chainId;
            }
          } catch (error2) {
            console.error("Error checking existing connection:", error2);
          }
        });
      }
      // Méthodes publiques
      isMetaMaskAvailable() {
        return __async(this, null, function* () {
          return new Promise((resolve) => {
            if (this.state.isAvailable) {
              resolve(true);
              return;
            }
            const timeout = setTimeout(() => {
              this.off("metamask_ready", onReady);
              resolve(false);
            }, 5e3);
            const onReady = (data) => {
              clearTimeout(timeout);
              resolve(data.available);
            };
            this.on("metamask_ready", onReady);
          });
        });
      }
      connectWallet() {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            const accounts = yield this.provider.request({ method: "eth_requestAccounts" });
            if (accounts && accounts.length > 0) {
              this.state.accounts = accounts;
              this.state.isConnected = true;
              const chainId = yield this.provider.request({ method: "eth_chainId" });
              this.state.chainId = chainId;
              return accounts[0];
            } else {
              throw new Error("No accounts returned from MetaMask");
            }
          } catch (error2) {
            if (error2.message.includes("User rejected") || error2.code === 4001) {
              throw new Error("Connexion refusée par l'utilisateur");
            }
            throw new Error(`Erreur lors de la connexion: ${error2.message}`);
          }
        });
      }
      getCurrentAccount() {
        return __async(this, null, function* () {
          if (!this.provider) return null;
          try {
            const accounts = yield this.provider.request({ method: "eth_accounts" });
            return accounts && accounts.length > 0 ? accounts[0] : null;
          } catch (error2) {
            console.error("Error getting current account:", error2);
            return null;
          }
        });
      }
      getBalance(address) {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            const balance = yield this.provider.request({
              method: "eth_getBalance",
              params: [address, "latest"]
            });
            const balanceInEth = parseInt(balance, 16) / Math.pow(10, 18);
            return balanceInEth.toFixed(6);
          } catch (error2) {
            console.error("Error getting balance:", error2);
            throw new Error("Erreur lors de la récupération du solde");
          }
        });
      }
      getCurrentChainId() {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            const chainId = yield this.provider.request({ method: "eth_chainId" });
            this.state.chainId = chainId;
            return chainId;
          } catch (error2) {
            console.error("Error getting chain ID:", error2);
            throw new Error("Erreur lors de la récupération de l'ID du réseau");
          }
        });
      }
      switchNetwork(chainId) {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            yield this.provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId }]
            });
          } catch (error2) {
            console.error("Error switching network:", error2);
            throw new Error("Erreur lors du changement de réseau");
          }
        });
      }
      addNetwork(network) {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            yield this.provider.request({
              method: "wallet_addEthereumChain",
              params: [network]
            });
          } catch (error2) {
            console.error("Error adding network:", error2);
            throw new Error("Erreur lors de l'ajout du réseau");
          }
        });
      }
      signMessage(message, address) {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            const signature = yield this.provider.request({
              method: "personal_sign",
              params: [message, address]
            });
            return signature;
          } catch (error2) {
            if (error2.message.includes("User rejected") || error2.code === 4001) {
              throw new Error("Signature refusée par l'utilisateur");
            }
            throw new Error(`Erreur lors de la signature: ${error2.message}`);
          }
        });
      }
      sendTransaction(transaction) {
        return __async(this, null, function* () {
          if (!this.provider) {
            throw new Error("MetaMask provider not available");
          }
          try {
            const txHash = yield this.provider.request({
              method: "eth_sendTransaction",
              params: [transaction]
            });
            return txHash;
          } catch (error2) {
            if (error2.message.includes("User rejected") || error2.code === 4001) {
              throw new Error("Transaction refusée par l'utilisateur");
            }
            throw new Error(`Erreur lors de l'envoi: ${error2.message}`);
          }
        });
      }
      // Getters pour l'état
      get isAvailable() {
        return this.state.isAvailable;
      }
      get isConnected() {
        return this.state.isConnected;
      }
      get accounts() {
        return this.state.accounts;
      }
      get chainId() {
        return this.state.chainId;
      }
      // Système d'événements
      on(event, listener) {
        if (!this.eventListeners.has(event)) {
          this.eventListeners.set(event, []);
        }
        this.eventListeners.get(event).push(listener);
      }
      off(event, listener) {
        const listeners = this.eventListeners.get(event);
        if (listeners) {
          const index = listeners.indexOf(listener);
          if (index > -1) {
            listeners.splice(index, 1);
          }
        }
      }
      emit(event, data) {
        const listeners = this.eventListeners.get(event);
        if (listeners) {
          listeners.forEach((listener) => listener(data));
        }
      }
      // Diagnostics
      getDiagnostics() {
        return {
          state: this.state,
          hasProvider: !!this.provider,
          providerType: this.provider ? "metamask-extension-provider" : "none",
          isExtensionContext: typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.id
        };
      }
    };
    __publicField(_MetaMaskService, "instance");
    let MetaMaskService = _MetaMaskService;
    const MetaMaskConnect = () => {
      const [state2, setState] = reactExports.useState({
        isAvailable: false,
        isConnected: false,
        account: null,
        balance: null,
        chainId: null,
        error: null
      });
      const [isConnecting, setIsConnecting] = reactExports.useState(false);
      const [metaMaskService] = reactExports.useState(() => MetaMaskService.getInstance());
      reactExports.useEffect(() => {
        initializeMetaMask();
        setupEventListeners();
      }, []);
      const initializeMetaMask = () => __async(exports, null, function* () {
        try {
          const isAvailable = yield metaMaskService.isMetaMaskAvailable();
          setState((prev) => __spreadProps(__spreadValues({}, prev), { isAvailable }));
          if (isAvailable) {
            const account = yield metaMaskService.getCurrentAccount();
            if (account) {
              setState((prev) => __spreadProps(__spreadValues({}, prev), {
                isConnected: true,
                account,
                error: null
              }));
              yield loadAccountData(account);
            }
          } else {
            setState((prev) => __spreadProps(__spreadValues({}, prev), {
              error: "MetaMask n'est pas installé ou n'est pas accessible"
            }));
          }
        } catch (error2) {
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            error: error2.message || "Erreur lors de l'initialisation"
          }));
        }
      });
      const setupEventListeners = () => {
        metaMaskService.on("accounts_changed", (data) => {
          if (data.accounts.length > 0) {
            setState((prev) => __spreadProps(__spreadValues({}, prev), {
              account: data.accounts[0],
              isConnected: true,
              error: null
            }));
            loadAccountData(data.accounts[0]);
          } else {
            setState((prev) => __spreadProps(__spreadValues({}, prev), {
              account: null,
              isConnected: false,
              balance: null
            }));
          }
        });
        metaMaskService.on("chain_changed", (data) => {
          setState((prev) => __spreadProps(__spreadValues({}, prev), { chainId: data.chainId }));
          if (state2.account) {
            loadAccountData(state2.account);
          }
        });
        metaMaskService.on("wallet_disconnected", () => {
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            isConnected: false,
            account: null,
            balance: null
          }));
        });
      };
      const loadAccountData = (account) => __async(exports, null, function* () {
        try {
          const [balance, chainId] = yield Promise.all([
            metaMaskService.getBalance(account),
            metaMaskService.getCurrentChainId()
          ]);
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            balance,
            chainId
          }));
        } catch (error2) {
          console.error("Error loading account data:", error2);
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            error: `Erreur lors du chargement des données: ${error2.message}`
          }));
        }
      });
      const handleConnect = () => __async(exports, null, function* () {
        setIsConnecting(true);
        setState((prev) => __spreadProps(__spreadValues({}, prev), { error: null }));
        try {
          const account = yield metaMaskService.connectWallet();
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            account,
            isConnected: true,
            error: null
          }));
          yield loadAccountData(account);
        } catch (error2) {
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            error: error2.message || "Erreur lors de la connexion"
          }));
        } finally {
          setIsConnecting(false);
        }
      });
      const handleDisconnect = () => {
        setState((prev) => __spreadProps(__spreadValues({}, prev), {
          account: null,
          isConnected: false,
          balance: null,
          error: null
        }));
      };
      const handleSwitchToChiliz = () => __async(exports, null, function* () {
        try {
          const chilizNetwork = {
            chainId: "0x15B32",
            // 88888 en hexadécimal
            chainName: "Chiliz Chain",
            nativeCurrency: {
              name: "CHZ",
              symbol: "CHZ",
              decimals: 18
            },
            rpcUrls: ["https://spicy-rpc.chiliz.com"],
            blockExplorerUrls: ["https://chiliscan.com"]
          };
          try {
            yield metaMaskService.switchNetwork(chilizNetwork.chainId);
          } catch (switchError) {
            if (switchError.message.includes("Unrecognized chain ID")) {
              yield metaMaskService.addNetwork(chilizNetwork);
            } else {
              throw switchError;
            }
          }
        } catch (error2) {
          setState((prev) => __spreadProps(__spreadValues({}, prev), {
            error: `Erreur lors du changement de réseau: ${error2.message}`
          }));
        }
      });
      const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
      };
      const formatBalance = (balance) => {
        return parseFloat(balance).toFixed(4);
      };
      const getChainName = (chainId) => {
        const chains = {
          "0x1": "Ethereum",
          "0x89": "Polygon",
          "0x15B32": "Chiliz Chain",
          "0x15B38": "Chiliz Testnet"
        };
        return chains[chainId] || `Chain ${chainId}`;
      };
      const showDiagnostics = () => {
        const diagnostics = metaMaskService.getDiagnostics();
        console.log("MetaMask Diagnostics:", diagnostics);
        alert("Diagnostics affichés dans la console");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metamask-connect", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metamask-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🦊 MetaMask Connection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: showDiagnostics,
              className: "diagnostics-btn",
              title: "Afficher les diagnostics",
              children: "🔍"
            }
          )
        ] }),
        !state2.isAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metamask-error", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "❌ MetaMask n'est pas détecté" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Veuillez installer MetaMask et redémarrer Chrome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => window.open("https://metamask.io/", "_blank"),
              className: "install-btn",
              children: "Installer MetaMask"
            }
          )
        ] }),
        state2.isAvailable && !state2.isConnected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metamask-connect-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✅ MetaMask détecté" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleConnect,
              disabled: isConnecting,
              className: "connect-btn",
              children: isConnecting ? "⏳ Connexion..." : "🔗 Connecter MetaMask"
            }
          )
        ] }),
        state2.isConnected && state2.account && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metamask-connected", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "account-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compte:" }),
              " ",
              formatAddress(state2.account)
            ] }),
            state2.balance && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Solde:" }),
              " ",
              formatBalance(state2.balance),
              " ETH"
            ] }),
            state2.chainId && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Réseau:" }),
              " ",
              getChainName(state2.chainId)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-buttons", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSwitchToChiliz,
                className: "switch-network-btn",
                children: "🌶️ Passer à Chiliz Chain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleDisconnect,
                className: "disconnect-btn",
                children: "🔌 Déconnecter"
              }
            )
          ] })
        ] }),
        state2.error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metamask-error", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "❌ ",
            state2.error
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setState((prev) => __spreadProps(__spreadValues({}, prev), { error: null })),
              className: "clear-error-btn",
              children: "✖️ Effacer"
            }
          )
        ] })
      ] });
    };
    const Popup = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popup-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "popup-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "CHZ Extension" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "version", children: "v1.0.0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "popup-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MetaMaskConnect, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "popup-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Extension Chrome pour Chiliz Chain 2.0" }) })
      ] });
    };
    const container = document.getElementById("root");
    if (container) {
      const root = createRoot(container);
      root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Popup, {}));
    }
  }
});
export default require_popup();
