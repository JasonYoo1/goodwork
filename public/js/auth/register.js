(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/auth/register"],{

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.10.2\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/vue-fontawesome/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fortawesome/vue-fontawesome/index.es.js ***!
  \***************************************************************/
/*! exports provided: FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeLayers", function() { return FontAwesomeLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeLayersText", function() { return FontAwesomeLayersText; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");


var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (false) {} else if ( true && module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    acc[prop] = value;

    return acc;
  }, {});
}

function classToObject(cls) {
  return cls.split(/\s+/).reduce(function (acc, c) {
    acc[c] = true;

    return acc;
  }, {});
}

function combineClassObjects() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return objs.reduce(function (acc, obj) {
    if (Array.isArray(obj)) {
      acc = acc.concat(obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, []);
}

function convert(h, element) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var children = (element.children || []).map(convert.bind(null, h));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc['class'] = classToObject(val);
        break;
      case 'style':
        acc['style'] = styleToObject(val);
        break;
      default:
        acc.attrs[key] = val;
    }

    return acc;
  }, { 'class': {}, style: {}, attrs: {} });

  var _data$class = data.class,
      dClass = _data$class === undefined ? {} : _data$class,
      _data$style = data.style,
      dStyle = _data$style === undefined ? {} : _data$style,
      _data$attrs = data.attrs,
      dAttrs = _data$attrs === undefined ? {} : _data$attrs,
      remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);


  if (typeof element === 'string') {
    return element;
  } else {
    return h(element.tag, _extends({
      class: combineClassObjects(mixins.class, dClass),
      style: _extends({}, mixins.style, dStyle),
      attrs: _extends({}, mixins.attrs, dAttrs)
    }, remainingData, {
      props: props
    }), children);
  }
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function addStaticClass(to, what) {
  var val = (to || '').length === 0 ? [] : [to];

  return val.concat(what).join(' ');
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return { prefix: icon$$1[0], iconName: icon$$1[1] };
  }

  if (typeof icon$$1 === 'string') {
    return { prefix: 'fas', iconName: icon$$1 };
  }
}

var FontAwesomeIcon = {
  name: 'FontAwesomeIcon',

  functional: true,

  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['right', 'left'].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator(value) {
        return [90, 180, 270].indexOf(parseInt(value, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;
    var iconArgs = props.icon,
        maskArgs = props.mask,
        symbol = props.symbol,
        title = props.title;

    var icon$$1 = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', classList(props));
    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

    var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(icon$$1, _extends({}, classes, transform, mask, { symbol: symbol, title: title }));

    if (!renderedIcon) {
      return log('Could not find one or more icon(s)', icon$$1, mask);
    }

    var abstract = renderedIcon.abstract;

    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};

var FontAwesomeLayers = {
  name: 'FontAwesomeLayers',

  functional: true,

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  render: function render(createElement, context) {
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].familyPrefix;
    var staticClass = context.data.staticClass;


    var classes = [familyPrefix + '-layers'].concat(toConsumableArray(context.props.fixedWidth ? [familyPrefix + '-fw'] : []));

    return createElement('div', _extends({}, context.data, {
      staticClass: addStaticClass(staticClass, classes)
    }), context.children);
  }
};

var FontAwesomeLayersText = {
  name: 'FontAwesomeLayersText',

  functional: true,

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;

    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);

    var renderedText = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["text"])(props.value.toString(), _extends({}, transform));

    var abstract = renderedText.abstract;


    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      token: Laravel.csrfToken,
      errors: errors,
      url: url
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    /**
     * Create a new class instance.
     */
    function Connector(options) {
        classCallCheck(this, Connector);

        /**
         * Default connector options.
         */
        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }
    /**
     * Merge the custom options with the defaults.
     */


    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
        /**
         * Extract the CSRF token from the page.
         */

    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

/**
 * This class represents a basic channel.
 */
var Channel = function () {
  function Channel() {
    classCallCheck(this, Channel);
  }

  createClass(Channel, [{
    key: 'listenForWhisper',

    /**
     * Listen for a whisper event on the channel instance.
     */
    value: function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'notification',
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
  }]);
  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = function () {
    /**
     * Create a new class instance.
     */
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }
    /**
     * Format the given event name.
     */


    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
        /**
         * Set the event namespace.
         */

    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */
var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }
    /**
     * Subscribe to a Pusher channel.
     */


    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
        /**
         * Unsubscribe from a Pusher channel.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
        /**
         * Bind a channel to an event.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */
var PusherPrivateChannel = function (_PusherChannel) {
  inherits(PusherPrivateChannel, _PusherChannel);

  function PusherPrivateChannel() {
    classCallCheck(this, PusherPrivateChannel);
    return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
  }

  createClass(PusherPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
      return this;
    }
  }]);
  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */
var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Trigger client event on the channel.
         */

    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */
var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        /**
         * The event callbacks applied to the channel.
         */
        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }
    /**
     * Subscribe to a Socket.io channel.
     */


    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Unsubscribe from channel and ubind event callbacks.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            var name = this.eventFormatter.format(event);
            this.socket.removeListener(name);
            delete this.events[name];
            return this;
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
        /**
         * Attach a 'reconnect' listener and bind the event.
         */

    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
        /**
         * Unbind the channel's socket from all stored event callbacks.
         */

    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */
var NullChannel = function (_Channel) {
  inherits(NullChannel, _Channel);

  function NullChannel() {
    classCallCheck(this, NullChannel);
    return possibleConstructorReturn(this, (NullChannel.__proto__ || Object.getPrototypeOf(NullChannel)).apply(this, arguments));
  }

  createClass(NullChannel, [{
    key: 'subscribe',

    /**
     * Subscribe to a channel.
     */
    value: function subscribe() {}
    //

    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {}
    //

    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: 'stopListening',
    value: function stopListening(event) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      return this;
    }
  }]);
  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */
var NullPrivateChannel = function (_NullChannel) {
  inherits(NullPrivateChannel, _NullChannel);

  function NullPrivateChannel() {
    classCallCheck(this, NullPrivateChannel);
    return possibleConstructorReturn(this, (NullPrivateChannel.__proto__ || Object.getPrototypeOf(NullPrivateChannel)).apply(this, arguments));
  }

  createClass(NullPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */
var NullPresenceChannel = function (_NullChannel) {
  inherits(NullPresenceChannel, _NullChannel);

  function NullPresenceChannel() {
    classCallCheck(this, NullPresenceChannel);
    return possibleConstructorReturn(this, (NullPresenceChannel.__proto__ || Object.getPrototypeOf(NullPresenceChannel)).apply(this, arguments));
  }

  createClass(NullPresenceChannel, [{
    key: 'here',

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: 'joining',
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: 'leaving',
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: 'whisper',
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPresenceChannel;
}(NullChannel);

/**
 * This class creates a connector to Pusher.
 */
var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        classCallCheck(this, PusherConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Pusher connection.
     */


    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            if (typeof this.options.client !== 'undefined') {
                this.pusher = this.options.client;
            } else {
                this.pusher = new Pusher(this.options.key, this.options);
            }
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
        /**
         * Disconnect Pusher connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */
var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        classCallCheck(this, SocketIoConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Socket.io connection.
     */


    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
        /**
         * Get socket.io module from global scope or options.
         */

    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof this.options.client !== 'undefined') {
                return this.options.client;
            }
            if (typeof io !== 'undefined') {
                return io;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
        /**
         * Disconnect Socketio connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */
var NullConnector = function (_Connector) {
  inherits(NullConnector, _Connector);

  function NullConnector() {
    classCallCheck(this, NullConnector);

    /**
     * All of the subscribed channel names.
     */
    var _this = possibleConstructorReturn(this, (NullConnector.__proto__ || Object.getPrototypeOf(NullConnector)).apply(this, arguments));

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  createClass(NullConnector, [{
    key: 'connect',
    value: function connect() {}
    //

    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: 'channel',
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: 'privateChannel',
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: 'presenceChannel',
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: 'leave',
    value: function leave(name) {}
    //

    /**
     * Leave the given channel.
     */

  }, {
    key: 'leaveChannel',
    value: function leaveChannel(name) {}
    //

    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: 'socketId',
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      //
    }
  }]);
  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = function () {
    /**
     * Create a new class instance.
     */
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        this.connect();
        this.registerInterceptors();
    }
    /**
     * Get a channel instance by name.
     */


    createClass(Echo, [{
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
        /**
         * Create a new connection.
         */

    }, {
        key: 'connect',
        value: function connect() {
            if (this.options.broadcaster == 'pusher') {
                this.connector = new PusherConnector(this.options);
            } else if (this.options.broadcaster == 'socket.io') {
                this.connector = new SocketIoConnector(this.options);
            } else if (this.options.broadcaster == 'null') {
                this.connector = new NullConnector(this.options);
            }
        }
        /**
         * Disconnect from the Echo server.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(channel) {
            this.connector.leaveChannel(channel);
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
        /**
         * Get the Socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
        /**
         * Register 3rd party request interceptiors. These are used to automatically
         * send a connections socket id to a Laravel app with a X-Socket-Id header.
         */

    }, {
        key: 'registerInterceptors',
        value: function registerInterceptors() {
            if (typeof Vue === 'function' && Vue.http) {
                this.registerVueRequestInterceptor();
            }
            if (typeof axios === 'function') {
                this.registerAxiosRequestInterceptor();
            }
            if (typeof jQuery === 'function') {
                this.registerjQueryAjaxSetup();
            }
        }
        /**
         * Register a Vue HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
        /**
         * Register an Axios HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
        /**
         * Register jQuery AjaxSetup to add the X-Socket-ID header.
         */

    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }]);
    return Echo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Echo);


/***/ }),

/***/ "./node_modules/linkifyjs/element.js":
/*!*******************************************!*\
  !*** ./node_modules/linkifyjs/element.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify-element */ "./node_modules/linkifyjs/lib/linkify-element.js").default;


/***/ }),

/***/ "./node_modules/linkifyjs/index.js":
/*!*****************************************!*\
  !*** ./node_modules/linkifyjs/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify */ "./node_modules/linkifyjs/lib/linkify.js");


/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify-element.js":
/*!*******************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify-element.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _linkify = __webpack_require__(/*! ./linkify */ "./node_modules/linkifyjs/lib/linkify.js");

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tokenize = linkify.tokenize,
    options = linkify.options; /**
                               	Linkify a HTML DOM node
                               */

var Options = options.Options;


var TEXT_TOKEN = linkify.parser.TOKENS.TEXT;

var HTML_NODE = 1,
    TXT_NODE = 3;

/**
	Given a parent element and child node that the parent contains, replaces
	that child with the given array of new children
*/
function replaceChildWithChildren(parent, oldChild, newChildren) {
	var lastNewChild = newChildren[newChildren.length - 1];
	parent.replaceChild(lastNewChild, oldChild);
	for (var i = newChildren.length - 2; i >= 0; i--) {
		parent.insertBefore(newChildren[i], lastNewChild);
		lastNewChild = newChildren[i];
	}
}

/**
	Given an array of MultiTokens, return an array of Nodes that are either
	(a) Plain Text nodes (node type 3)
	(b) Anchor tag nodes (usually, unless tag name is overridden in the options)

	Takes the same options as linkifyElement and an optional doc element
	(this should be passed in by linkifyElement)
*/
function tokensToNodes(tokens, opts, doc) {
	var result = [];

	for (var _iterator = tokens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var token = _ref;

		if (token.type === 'nl' && opts.nl2br) {
			result.push(doc.createElement('br'));
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push(doc.createTextNode(token.toString()));
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    events = _opts$resolve.events,
		    attributes = _opts$resolve.attributes;

		// Build the link


		var link = doc.createElement(tagName);
		link.setAttribute('href', formattedHref);

		if (className) {
			link.setAttribute('class', className);
		}

		if (target) {
			link.setAttribute('target', target);
		}

		// Build up additional attributes
		if (attributes) {
			for (var attr in attributes) {
				link.setAttribute(attr, attributes[attr]);
			}
		}

		if (events) {
			for (var event in events) {
				if (link.addEventListener) {
					link.addEventListener(event, events[event]);
				} else if (link.attachEvent) {
					link.attachEvent('on' + event, events[event]);
				}
			}
		}

		link.appendChild(doc.createTextNode(formatted));
		result.push(link);
	}

	return result;
}

// Requires document.createElement
function linkifyElementHelper(element, opts, doc) {

	// Can the element be linkified?
	if (!element || element.nodeType !== HTML_NODE) {
		throw new Error('Cannot linkify ' + element + ' - Invalid DOM Node type');
	}

	var ignoreTags = opts.ignoreTags;

	// Is this element already a link?
	if (element.tagName === 'A' || options.contains(ignoreTags, element.tagName)) {
		// No need to linkify
		return element;
	}

	var childElement = element.firstChild;

	while (childElement) {
		var str = void 0,
		    tokens = void 0,
		    nodes = void 0;

		switch (childElement.nodeType) {
			case HTML_NODE:
				linkifyElementHelper(childElement, opts, doc);
				break;
			case TXT_NODE:
				{
					str = childElement.nodeValue;
					tokens = tokenize(str);

					if (tokens.length === 0 || tokens.length === 1 && tokens[0] instanceof TEXT_TOKEN) {
						// No node replacement required
						break;
					}

					nodes = tokensToNodes(tokens, opts, doc);

					// Swap out the current child for the set of nodes
					replaceChildWithChildren(element, childElement, nodes);

					// so that the correct sibling is selected next
					childElement = nodes[nodes.length - 1];

					break;
				}
		}

		childElement = childElement.nextSibling;
	}

	return element;
}

function linkifyElement(element, opts) {
	var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	try {
		doc = doc || document || window && window.document || global && global.document;
	} catch (e) {/* do nothing for now */}

	if (!doc) {
		throw new Error('Cannot find document implementation. ' + 'If you are in a non-browser environment like Node.js, ' + 'pass the document implementation as the third argument to linkifyElement.');
	}

	opts = new Options(opts);
	return linkifyElementHelper(element, opts, doc);
}

// Maintain reference to the recursive helper to cache option-normalization
linkifyElement.helper = linkifyElementHelper;
linkifyElement.normalize = function (opts) {
	return new Options(opts);
};

exports.default = linkifyElement;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify.js":
/*!***********************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(/*! ./linkify/utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _options = __webpack_require__(/*! ./linkify/utils/options */ "./node_modules/linkifyjs/lib/linkify/utils/options.js");

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(/*! ./linkify/core/scanner */ "./node_modules/linkifyjs/lib/linkify/core/scanner.js");

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(/*! ./linkify/core/parser */ "./node_modules/linkifyjs/lib/linkify/core/parser.js");

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _multi = __webpack_require__(/*! ./tokens/multi */ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js");

var MULTI_TOKENS = _interopRequireWildcard(_multi);

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/scanner.js":
/*!************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/scanner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);
domainStates.push.apply(domainStates, partialProtocolMailtoStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/state.js":
/*!**********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(/*! ../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js":
/*!*****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _text = __webpack_require__(/*! ./text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js":
/*!****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/text.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/plugins/mention.js":
/*!***************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/plugins/mention.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mention;
/**
	Mention parser plugin for linkify
*/
function mention(linkify) {
	var TT = linkify.scanner.TOKENS; // Text tokens
	var _linkify$parser = linkify.parser,
	    MT = _linkify$parser.TOKENS,
	    State = _linkify$parser.State; // Multi tokens, state

	var MultiToken = MT.Base;
	var S_START = linkify.parser.start;

	var TT_DOMAIN = TT.DOMAIN;
	var TT_LOCALHOST = TT.LOCALHOST;
	var TT_NUM = TT.NUM;
	var TT_SLASH = TT.SLASH;
	var TT_TLD = TT.TLD;
	var TT_UNDERSCORE = TT.UNDERSCORE;
	var TT_DOT = TT.DOT;
	var TT_AT = TT.AT;

	function MENTION(value) {
		this.v = value;
	}

	linkify.inherits(MultiToken, MENTION, {
		type: 'mention',
		isLink: true,
		toHref: function toHref() {
			return '/' + this.toString().substr(1);
		}
	});

	var S_AT = S_START.jump(TT.AT); // @
	var S_AT_SYMS = new State();
	var S_MENTION = new State(MENTION);
	var S_MENTION_DIVIDER = new State();
	var S_MENTION_DIVIDER_SYMS = new State();

	// @_,
	S_AT.on(TT_UNDERSCORE, S_AT_SYMS);

	//  @_*
	S_AT_SYMS.on(TT_UNDERSCORE, S_AT_SYMS).on(TT_DOT, S_AT_SYMS);

	// Valid mention (not made up entirely of symbols)
	S_AT.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);

	S_AT_SYMS.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);

	// More valid mentions
	S_MENTION.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION).on(TT_UNDERSCORE, S_MENTION);

	// Mention with a divider
	S_MENTION.on(TT_SLASH, S_MENTION_DIVIDER).on(TT_DOT, S_MENTION_DIVIDER).on(TT_AT, S_MENTION_DIVIDER);

	// Mention _ trailing stash plus syms
	S_MENTION_DIVIDER.on(TT_UNDERSCORE, S_MENTION_DIVIDER_SYMS);
	S_MENTION_DIVIDER_SYMS.on(TT_UNDERSCORE, S_MENTION_DIVIDER_SYMS);

	// Once we get a word token, mentions can start up again
	S_MENTION_DIVIDER.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);

	S_MENTION_DIVIDER_SYMS.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/class.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/class.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/options.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/options.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' // Deprecated value - no default class will be provided in the future
};

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
	this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
	this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
	this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
	this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
	this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
	this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
	this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

	// Make all tags names upper case
	var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param {String} key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param {MultiToken} token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var optionValue = void 0,
		    option = this[key];
		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),

/***/ "./node_modules/linkifyjs/plugins/mention.js":
/*!***************************************************!*\
  !*** ./node_modules/linkifyjs/plugins/mention.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../lib/linkify/plugins/mention */ "./node_modules/linkifyjs/lib/linkify/plugins/mention.js").default;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/register.vue?vue&type=template&id=5564e1a3&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/register.vue?vue&type=template&id=5564e1a3& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "md:bg-white container md:mx-4 md:mx-auto md:shadow-lg rounded md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", {}),
      _vm._v(" "),
      _c("div", { staticClass: "w-full md:bg-indigo-100 md:w-1/2 p-8" }, [
        _c(
          "form",
          { attrs: { role: "form", method: "POST", action: _vm.url } },
          [
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.token }
            }),
            _vm._v(" "),
            _c("div", {}, [
              _c("p", { staticClass: "py-4" }, [
                _c("input", {
                  staticClass:
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
                  attrs: {
                    id: "name",
                    type: "text",
                    name: "name",
                    placeholder: "Full Name"
                  }
                }),
                _vm._v(" "),
                _vm.errors
                  ? _c("span", { staticClass: "text-red-400 block pt-2" }, [
                      _vm._v(_vm._s(_vm.errors.name))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "py-4" }, [
                _c("input", {
                  staticClass:
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
                  attrs: {
                    id: "username",
                    type: "text",
                    name: "username",
                    placeholder: "Username"
                  }
                }),
                _vm._v(" "),
                _vm.errors
                  ? _c("span", { staticClass: "text-red-400 block pt-2" }, [
                      _vm._v(_vm._s(_vm.errors.username))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "py-4" }, [
                _c("input", {
                  staticClass:
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
                  attrs: {
                    id: "email",
                    type: "text",
                    name: "email",
                    placeholder: "E-mail"
                  }
                }),
                _vm._v(" "),
                _vm.errors
                  ? _c("span", { staticClass: "text-red-400 block pt-2" }, [
                      _vm._v(_vm._s(_vm.errors.email))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "py-4" }, [
                _c("input", {
                  staticClass:
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
                  attrs: {
                    id: "password",
                    type: "password",
                    name: "password",
                    placeholder: "Password"
                  }
                }),
                _vm._v(" "),
                _vm.errors
                  ? _c("span", { staticClass: "text-red-400 block pt-2" }, [
                      _vm._v(_vm._s(_vm.errors.password))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "py-4" }, [
                _c("input", {
                  staticClass:
                    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
                  attrs: {
                    id: "password_confirmation",
                    type: "password",
                    name: "password_confirmation",
                    placeholder: "Confirm Your Password"
                  }
                }),
                _vm._v(" "),
                _vm.errors
                  ? _c("span", { staticClass: "text-red-400 block pt-2" }, [
                      _vm._v(_vm._s(_vm.errors.password_confirmation))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "md:w-1/2 text-center px-8 py-4 md:block" },
      [
        _c("div", { staticClass: "text-teal-500 font-bold text-4xl md:pt-8" }, [
          _vm._v("GOODWORK")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-teal-500 text-xl" }, [
          _vm._v(
            " Sensible Approach to Work & Collaboration for Software Teams "
          )
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "pt-16 hidden md:block",
          attrs: { src: "/image/register.svg", alt: "work desk" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-teal-500 hover:bg-teal-600 text-white text-xl font-medium py-2 px-4 rounded",
          attrs: { type: "submit" }
        },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var linkifyjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs */ "./node_modules/linkifyjs/index.js");
/* harmony import */ var linkifyjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var linkifyjs_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linkifyjs/element */ "./node_modules/linkifyjs/element.js");
/* harmony import */ var linkifyjs_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! linkifyjs/plugins/mention */ "./node_modules/linkifyjs/plugins/mention.js");
/* harmony import */ var linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5__);






linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5___default()(linkifyjs__WEBPACK_IMPORTED_MODULE_3__);
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.luxon = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};

if (typeof io !== 'undefined') {
  window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    namespace: 'App.Core.Events'
  });
}

window.Vue.mixin({
  methods: {
    generateUrl: function generateUrl(value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg';
      value = value.toString();
      return window.location.protocol + '//' + window.location.host + '/' + value;
    }
  }
});
window.Vue.filter('localize', function (value) {
  if (!value) return '';
  value = value.toString();
  return window.lang[value] ? window.lang[value] : value;
});
window.Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
window.Vue.filter('clip', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.substr(0, 20) + '...';
});
window.Vue.directive('linkify', {
  inserted: function inserted(el) {
    linkifyjs_element__WEBPACK_IMPORTED_MODULE_4___default()(el, {
      className: 'text-blue-500',
      formatHref: function formatHref(href, type) {
        if (type === 'mention') {
          return window.location.origin + '/users' + href;
        }

        return href;
      }
    });
  }
});
window.Vue.directive('click-outside', vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a);
window.Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"]);
window.EventBus = new Vue();

/***/ }),

/***/ "./resources/assets/js/components/auth/register.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/auth/register.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_5564e1a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=5564e1a3& */ "./resources/assets/js/components/auth/register.vue?vue&type=template&id=5564e1a3&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_5564e1a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_5564e1a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/auth/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/auth/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/auth/register.vue?vue&type=template&id=5564e1a3&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/register.vue?vue&type=template&id=5564e1a3& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5564e1a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=5564e1a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/register.vue?vue&type=template&id=5564e1a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5564e1a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5564e1a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/pages/auth/register.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/pages/auth/register.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bootstrap */ "./resources/assets/js/bootstrap.js");
/* harmony import */ var _components_auth_register_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/auth/register.vue */ "./resources/assets/js/components/auth/register.vue");


/* eslint-disable no-unused-vars */

var app = new Vue({
  el: '#app',
  components: {
    register: _components_auth_register_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ 1:
/*!**********************************************************!*\
  !*** multi ./resources/assets/js/pages/auth/register.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /src/php/sites/goodwork/resources/assets/js/pages/auth/register.js */"./resources/assets/js/pages/auth/register.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL2luZGV4LmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lL2luZGV4LmVzLmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L2NvcmUvc2Nhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L2NvcmUvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3Rva2Vucy9jcmVhdGUtdG9rZW4tY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3Rva2Vucy9tdWx0aS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L2NvcmUvdG9rZW5zL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9wbHVnaW5zL21lbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS91dGlscy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L3V0aWxzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9wbHVnaW5zL21lbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWNsaWNrLW91dHNpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvcmVnaXN0ZXIudnVlPzIwYjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci52dWU/NDYwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci52dWU/NmIxMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsibWVudGlvbiIsImxpbmtpZnkiLCJ3aW5kb3ciLCJWdWUiLCJyZXF1aXJlIiwiYXhpb3MiLCJsdXhvbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iLCJpbyIsIkVjaG8iLCJicm9hZGNhc3RlciIsImhvc3QiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibmFtZXNwYWNlIiwibWl4aW4iLCJtZXRob2RzIiwiZ2VuZXJhdGVVcmwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicHJvdG9jb2wiLCJmaWx0ZXIiLCJsYW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInN1YnN0ciIsImRpcmVjdGl2ZSIsImluc2VydGVkIiwiZWwiLCJsaW5raWZ5RWxlbWVudCIsImNsYXNzTmFtZSIsImZvcm1hdEhyZWYiLCJocmVmIiwidHlwZSIsIm9yaWdpbiIsIkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkZvbnRBd2Vzb21lSWNvbiIsIkV2ZW50QnVzIiwiYXBwIiwiY29tcG9uZW50cyIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBb0I7QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5Qjs7QUFFQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFFB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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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TSxDQUFDeUMsUUFBUCxHQUFrQixJQUFJeEMsR0FBSixFQUFsQixDOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNeUMsR0FBRyxHQUFHLElBQUl6QyxHQUFKLENBQVE7QUFDbEI4QixJQUFFLEVBQUUsTUFEYztBQUVsQlksWUFBVSxFQUFFO0FBQ1ZDLFlBQVEsRUFBUkEscUVBQVFBO0FBREU7QUFGTSxDQUFSLENBQVosQyIsImZpbGUiOiIvanMvYXV0aC9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIF9XSU5ET1cgPSB7fTtcbnZhciBfRE9DVU1FTlQgPSB7fTtcbnZhciBfTVVUQVRJT05fT0JTRVJWRVIgPSBudWxsO1xudmFyIF9QRVJGT1JNQU5DRSA9IHtcbiAgbWFyazogbm9vcCxcbiAgbWVhc3VyZTogbm9vcFxufTtcblxudHJ5IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBfV0lORE9XID0gd2luZG93O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgX0RPQ1VNRU5UID0gZG9jdW1lbnQ7XG4gIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIF9NVVRBVElPTl9PQlNFUlZFUiA9IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnKSBfUEVSRk9STUFOQ0UgPSBwZXJmb3JtYW5jZTtcbn0gY2F0Y2ggKGUpIHt9XG5cbnZhciBfcmVmID0gX1dJTkRPVy5uYXZpZ2F0b3IgfHwge30sXG4gICAgX3JlZiR1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudCxcbiAgICB1c2VyQWdlbnQgPSBfcmVmJHVzZXJBZ2VudCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHVzZXJBZ2VudDtcblxudmFyIFdJTkRPVyA9IF9XSU5ET1c7XG52YXIgRE9DVU1FTlQgPSBfRE9DVU1FTlQ7XG52YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG52YXIgUEVSRk9STUFOQ0UgPSBfUEVSRk9STUFOQ0U7XG52YXIgSVNfQlJPV1NFUiA9ICEhV0lORE9XLmRvY3VtZW50O1xudmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBJU19JRSA9IH51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpIHx8IH51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKTtcblxudmFyIE5BTUVTUEFDRV9JREVOVElGSUVSID0gJ19fX0ZPTlRfQVdFU09NRV9fXyc7XG52YXIgVU5JVFNfSU5fR1JJRCA9IDE2O1xudmFyIERFRkFVTFRfRkFNSUxZX1BSRUZJWCA9ICdmYSc7XG52YXIgREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyA9ICdzdmctaW5saW5lLS1mYSc7XG52YXIgREFUQV9GQV9JMlNWRyA9ICdkYXRhLWZhLWkyc3ZnJztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORyA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50LXBlbmRpbmcnO1xudmFyIERBVEFfUFJFRklYID0gJ2RhdGEtcHJlZml4JztcbnZhciBEQVRBX0lDT04gPSAnZGF0YS1pY29uJztcbnZhciBIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MgPSAnZm9udGF3ZXNvbWUtaTJzdmcnO1xudmFyIE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DID0gJ2FzeW5jJztcbnZhciBUQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUyA9IFsnSFRNTCcsICdIRUFEJywgJ1NUWUxFJywgJ1NDUklQVCddO1xudmFyIFBST0RVQ1RJT04gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcbnZhciBQUkVGSVhfVE9fU1RZTEUgPSB7XG4gICdmYXMnOiAnc29saWQnLFxuICAnZmFyJzogJ3JlZ3VsYXInLFxuICAnZmFsJzogJ2xpZ2h0JyxcbiAgJ2ZhZCc6ICdkdW90b25lJyxcbiAgJ2ZhYic6ICdicmFuZHMnLFxuICAnZmEnOiAnc29saWQnXG59O1xudmFyIFNUWUxFX1RPX1BSRUZJWCA9IHtcbiAgJ3NvbGlkJzogJ2ZhcycsXG4gICdyZWd1bGFyJzogJ2ZhcicsXG4gICdsaWdodCc6ICdmYWwnLFxuICAnZHVvdG9uZSc6ICdmYWQnLFxuICAnYnJhbmRzJzogJ2ZhYidcbn07XG52YXIgTEFZRVJTX1RFWFRfQ0xBU1NOQU1FID0gJ2ZhLWxheWVycy10ZXh0JztcbnZhciBGT05UX0ZBTUlMWV9QQVRURVJOID0gL0ZvbnQgQXdlc29tZSA1IChTb2xpZHxSZWd1bGFyfExpZ2h0fER1b3RvbmV8QnJhbmRzfEZyZWV8UHJvKS87XG52YXIgRk9OVF9XRUlHSFRfVE9fUFJFRklYID0ge1xuICAnOTAwJzogJ2ZhcycsXG4gICc0MDAnOiAnZmFyJyxcbiAgJ25vcm1hbCc6ICdmYXInLFxuICAnMzAwJzogJ2ZhbCdcbn07XG52YXIgb25lVG9UZW4gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xudmFyIG9uZVRvVHdlbnR5ID0gb25lVG9UZW4uY29uY2F0KFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0pO1xudmFyIEFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04gPSBbJ2NsYXNzJywgJ2RhdGEtcHJlZml4JywgJ2RhdGEtaWNvbicsICdkYXRhLWZhLXRyYW5zZm9ybScsICdkYXRhLWZhLW1hc2snXTtcbnZhciBEVU9UT05FX0NMQVNTRVMgPSB7XG4gIEdST1VQOiAnZ3JvdXAnLFxuICBTV0FQX09QQUNJVFk6ICdzd2FwLW9wYWNpdHknLFxuICBQUklNQVJZOiAncHJpbWFyeScsXG4gIFNFQ09OREFSWTogJ3NlY29uZGFyeSdcbn07XG52YXIgUkVTRVJWRURfQ0xBU1NFUyA9IFsneHMnLCAnc20nLCAnbGcnLCAnZncnLCAndWwnLCAnbGknLCAnYm9yZGVyJywgJ3B1bGwtbGVmdCcsICdwdWxsLXJpZ2h0JywgJ3NwaW4nLCAncHVsc2UnLCAncm90YXRlLTkwJywgJ3JvdGF0ZS0xODAnLCAncm90YXRlLTI3MCcsICdmbGlwLWhvcml6b250YWwnLCAnZmxpcC12ZXJ0aWNhbCcsICdmbGlwLWJvdGgnLCAnc3RhY2snLCAnc3RhY2stMXgnLCAnc3RhY2stMngnLCAnaW52ZXJzZScsICdsYXllcnMnLCAnbGF5ZXJzLXRleHQnLCAnbGF5ZXJzLWNvdW50ZXInLCBEVU9UT05FX0NMQVNTRVMuR1JPVVAsIERVT1RPTkVfQ0xBU1NFUy5TV0FQX09QQUNJVFksIERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZLCBEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZXS5jb25jYXQob25lVG9UZW4ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChuLCBcInhcIik7XG59KSkuY29uY2F0KG9uZVRvVHdlbnR5Lm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gXCJ3LVwiLmNvbmNhdChuKTtcbn0pKTtcblxudmFyIGluaXRpYWwgPSBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgfHwge307XG5cbmZ1bmN0aW9uIGdldEF0dHJDb25maWcoYXR0cikge1xuICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFsnICsgYXR0ciArICddJyk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAvLyBHZXR0aW5nIGFuIGVtcHR5IHN0cmluZyB3aWxsIG9jY3VyIGlmIHRoZSBhdHRyaWJ1dGUgaXMgc2V0IG9uIHRoZSBIVE1MIHRhZyBidXQgd2l0aG91dCBhIHZhbHVlXG4gIC8vIFdlJ2xsIGFzc3VtZSB0aGF0IHRoaXMgaXMgYW4gaW5kaWNhdGlvbiB0aGF0IGl0IHNob3VsZCBiZSB0b2dnbGVkIHRvIHRydWVcbiAgLy8gRm9yIGV4YW1wbGUgPHNjcmlwdCBkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMgc3JjPVwiLi4uXCI+PC9zY3JpcHQ+XG4gIGlmICh2YWwgPT09ICcnKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodmFsID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdmFsO1xufVxuXG5pZiAoRE9DVU1FTlQgJiYgdHlwZW9mIERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgdmFyIGF0dHJzID0gW1snZGF0YS1mYW1pbHktcHJlZml4JywgJ2ZhbWlseVByZWZpeCddLCBbJ2RhdGEtcmVwbGFjZW1lbnQtY2xhc3MnLCAncmVwbGFjZW1lbnRDbGFzcyddLCBbJ2RhdGEtYXV0by1yZXBsYWNlLXN2ZycsICdhdXRvUmVwbGFjZVN2ZyddLCBbJ2RhdGEtYXV0by1hZGQtY3NzJywgJ2F1dG9BZGRDc3MnXSwgWydkYXRhLWF1dG8tYTExeScsICdhdXRvQTExeSddLCBbJ2RhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cycsICdzZWFyY2hQc2V1ZG9FbGVtZW50cyddLCBbJ2RhdGEtb2JzZXJ2ZS1tdXRhdGlvbnMnLCAnb2JzZXJ2ZU11dGF0aW9ucyddLCBbJ2RhdGEtbXV0YXRlLWFwcHJvYWNoJywgJ211dGF0ZUFwcHJvYWNoJ10sIFsnZGF0YS1rZWVwLW9yaWdpbmFsLXNvdXJjZScsICdrZWVwT3JpZ2luYWxTb3VyY2UnXSwgWydkYXRhLW1lYXN1cmUtcGVyZm9ybWFuY2UnLCAnbWVhc3VyZVBlcmZvcm1hbmNlJ10sIFsnZGF0YS1zaG93LW1pc3NpbmctaWNvbnMnLCAnc2hvd01pc3NpbmdJY29ucyddXTtcbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICBhdHRyID0gX3JlZjJbMF0sXG4gICAgICAgIGtleSA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIGluaXRpYWxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGZhbWlseVByZWZpeDogREVGQVVMVF9GQU1JTFlfUFJFRklYLFxuICByZXBsYWNlbWVudENsYXNzOiBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTLFxuICBhdXRvUmVwbGFjZVN2ZzogdHJ1ZSxcbiAgYXV0b0FkZENzczogdHJ1ZSxcbiAgYXV0b0ExMXk6IHRydWUsXG4gIHNlYXJjaFBzZXVkb0VsZW1lbnRzOiBmYWxzZSxcbiAgb2JzZXJ2ZU11dGF0aW9uczogdHJ1ZSxcbiAgbXV0YXRlQXBwcm9hY2g6ICdhc3luYycsXG4gIGtlZXBPcmlnaW5hbFNvdXJjZTogdHJ1ZSxcbiAgbWVhc3VyZVBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgc2hvd01pc3NpbmdJY29uczogdHJ1ZVxufTtcblxudmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfZGVmYXVsdCwgaW5pdGlhbCk7XG5cbmlmICghX2NvbmZpZy5hdXRvUmVwbGFjZVN2ZykgX2NvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG5cbnZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfY29uZmlnKTtcblxuV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnID0gY29uZmlnO1xuXG52YXIgdyA9IFdJTkRPVyB8fCB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0pIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMgPSBbXTtcbnZhciBuYW1lc3BhY2UgPSB3W05BTUVTUEFDRV9JREVOVElGSUVSXTtcblxudmFyIGZ1bmN0aW9ucyA9IFtdO1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgRE9DVU1FTlQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbiAgbG9hZGVkID0gMTtcbiAgZnVuY3Rpb25zLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfSk7XG59O1xuXG52YXIgbG9hZGVkID0gZmFsc2U7XG5cbmlmIChJU19ET00pIHtcbiAgbG9hZGVkID0gKERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChET0NVTUVOVC5yZWFkeVN0YXRlKTtcbiAgaWYgKCFsb2FkZWQpIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGRvbXJlYWR5IChmbikge1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZ1bmN0aW9ucy5wdXNoKGZuKTtcbn1cblxudmFyIFBFTkRJTkcgPSAncGVuZGluZyc7XG52YXIgU0VUVExFRCA9ICdzZXR0bGVkJztcbnZhciBGVUxGSUxMRUQgPSAnZnVsZmlsbGVkJztcbnZhciBSRUpFQ1RFRCA9ICdyZWplY3RlZCc7XG5cbnZhciBOT09QID0gZnVuY3Rpb24gTk9PUCgpIHt9O1xuXG52YXIgaXNOb2RlID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY1NldFRpbWVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyBzZXRUaW1lb3V0IDogc2V0SW1tZWRpYXRlO1xudmFyIGFzeW5jUXVldWUgPSBbXTtcbnZhciBhc3luY1RpbWVyO1xuXG5mdW5jdGlvbiBhc3luY0ZsdXNoKCkge1xuICAvLyBydW4gcHJvbWlzZSBjYWxsYmFja3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3luY1F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgYXN5bmNRdWV1ZVtpXVswXShhc3luY1F1ZXVlW2ldWzFdKTtcbiAgfSAvLyByZXNldCBhc3luYyBhc3luY1F1ZXVlXG5cblxuICBhc3luY1F1ZXVlID0gW107XG4gIGFzeW5jVGltZXIgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXN5bmNDYWxsKGNhbGxiYWNrLCBhcmcpIHtcbiAgYXN5bmNRdWV1ZS5wdXNoKFtjYWxsYmFjaywgYXJnXSk7XG5cbiAgaWYgKCFhc3luY1RpbWVyKSB7XG4gICAgYXN5bmNUaW1lciA9IHRydWU7XG4gICAgYXN5bmNTZXRUaW1lcihhc3luY0ZsdXNoLCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgcHJvbWlzZSkge1xuICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVqZWN0UHJvbWlzZShlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzdWJzY3JpYmVyKSB7XG4gIHZhciBvd25lciA9IHN1YnNjcmliZXIub3duZXI7XG4gIHZhciBzZXR0bGVkID0gb3duZXIuX3N0YXRlO1xuICB2YXIgdmFsdWUgPSBvd25lci5fZGF0YTtcbiAgdmFyIGNhbGxiYWNrID0gc3Vic2NyaWJlcltzZXR0bGVkXTtcbiAgdmFyIHByb21pc2UgPSBzdWJzY3JpYmVyLnRoZW47XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldHRsZWQgPSBGVUxGSUxMRUQ7XG5cbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkge1xuICB2YXIgcmVzb2x2ZWQ7XG5cbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAvLyB0aGVuIHNob3VsZCBiZSByZXRyaWV2ZWQgb25seSBvbmNlXG4gICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG5cbiAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UgPT09IHZhbHVlIHx8ICFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gdmFsdWU7XG4gICAgYXN5bmNDYWxsKHB1Ymxpc2hGdWxmaWxsbWVudCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgcHJvbWlzZS5fZGF0YSA9IHJlYXNvbjtcbiAgICBhc3luY0NhbGwocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gIHByb21pc2UuX3RoZW4gPSBwcm9taXNlLl90aGVuLmZvckVhY2goaW52b2tlQ2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoRnVsZmlsbG1lbnQocHJvbWlzZSkge1xuICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gIHB1Ymxpc2gocHJvbWlzZSk7XG5cbiAgaWYgKCFwcm9taXNlLl9oYW5kbGVkICYmIGlzTm9kZSkge1xuICAgIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHByb21pc2UuX2RhdGEsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeVJlamVjdGlvbkhhbmRsZWQocHJvbWlzZSkge1xuICBnbG9iYWwucHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG59XG4vKipcbiAqIEBjbGFzc1xuICovXG5cblxuZnVuY3Rpb24gUChyZXNvbHZlcikge1xuICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlciAnICsgcmVzb2x2ZXIgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodGhpcyBpbnN0YW5jZW9mIFAgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGNvbnN0cnVjdCBcXCdQcm9taXNlXFwnOiBQbGVhc2UgdXNlIHRoZSBcXCduZXdcXCcgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHRoaXMuX3RoZW4gPSBbXTtcbiAgaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHRoaXMpO1xufVxuXG5QLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFAsXG4gIF9zdGF0ZTogUEVORElORyxcbiAgX3RoZW46IG51bGwsXG4gIF9kYXRhOiB1bmRlZmluZWQsXG4gIF9oYW5kbGVkOiBmYWxzZSxcbiAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgIHZhciBzdWJzY3JpYmVyID0ge1xuICAgICAgb3duZXI6IHRoaXMsXG4gICAgICB0aGVuOiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihOT09QKSxcbiAgICAgIGZ1bGZpbGxlZDogb25GdWxmaWxsbWVudCxcbiAgICAgIHJlamVjdGVkOiBvblJlamVjdGlvblxuICAgIH07XG5cbiAgICBpZiAoKG9uUmVqZWN0aW9uIHx8IG9uRnVsZmlsbG1lbnQpICYmICF0aGlzLl9oYW5kbGVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCAmJiBpc05vZGUpIHtcbiAgICAgICAgYXN5bmNDYWxsKG5vdGlmeVJlamVjdGlvbkhhbmRsZWQsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gRlVMRklMTEVEIHx8IHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgLy8gYWxyZWFkeSByZXNvbHZlZCwgY2FsbCBjYWxsYmFjayBhc3luY1xuICAgICAgYXN5bmNDYWxsKGludm9rZUNhbGxiYWNrLCBzdWJzY3JpYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vic2NyaWJlXG4gICAgICB0aGlzLl90aGVuLnB1c2goc3Vic2NyaWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnNjcmliZXIudGhlbjtcbiAgfSxcbiAgY2F0Y2g6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9XG59O1xuXG5QLmFsbCA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLmFsbCgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZW1haW5pbmcgPSAwO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoaW5kZXgpIHtcbiAgICAgIHJlbWFpbmluZysrO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghIC0tcmVtYWluaW5nKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmVyKGkpLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tpXSA9IHByb21pc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZW1haW5pbmcpIHtcbiAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfVxuICB9KTtcbn07XG5cblAucmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLnJhY2UoKS4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuUC5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5QLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG52YXIgcGlja2VkID0gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgPyBQcm9taXNlIDogUDtcblxudmFyIGQgPSBVTklUU19JTl9HUklEO1xudmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICBzaXplOiAxNixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRlOiAwLFxuICBmbGlwWDogZmFsc2UsXG4gIGZsaXBZOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcykge1xuICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgdmFyIGhlYWRDaGlsZHJlbiA9IERPQ1VNRU5ULmhlYWQuY2hpbGROb2RlcztcbiAgdmFyIGJlZm9yZUNoaWxkID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gaGVhZENoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gaGVhZENoaWxkcmVuW2ldO1xuICAgIHZhciB0YWdOYW1lID0gKGNoaWxkLnRhZ05hbWUgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAoWydTVFlMRScsICdMSU5LJ10uaW5kZXhPZih0YWdOYW1lKSA+IC0xKSB7XG4gICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIERPQ1VNRU5ULmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBiZWZvcmVDaGlsZCk7XG4gIHJldHVybiBjc3M7XG59XG52YXIgaWRQb29sID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbmZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgdmFyIHNpemUgPSAxMjtcbiAgdmFyIGlkID0gJyc7XG5cbiAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICBpZCArPSBpZFBvb2xbTWF0aC5yYW5kb20oKSAqIDYyIHwgMF07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gKG9iaiB8fCBbXSkubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjbGFzc0FycmF5KG5vZGUpIHtcbiAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZS5jbGFzc0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZmFtaWx5UHJlZml4LCBjbHMpIHtcbiAgdmFyIHBhcnRzID0gY2xzLnNwbGl0KCctJyk7XG4gIHZhciBwcmVmaXggPSBwYXJ0c1swXTtcbiAgdmFyIGljb25OYW1lID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gIGlmIChwcmVmaXggPT09IGZhbWlseVByZWZpeCAmJiBpY29uTmFtZSAhPT0gJycgJiYgIWlzUmVzZXJ2ZWQoaWNvbk5hbWUpKSB7XG4gICAgcmV0dXJuIGljb25OYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBodG1sRXNjYXBlKHN0cikge1xuICByZXR1cm4gXCJcIi5jb25jYXQoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5mdW5jdGlvbiBqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChhdHRyaWJ1dGVOYW1lLCBcIj1cXFwiXCIpLmNvbmNhdChodG1sRXNjYXBlKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLCBcIlxcXCIgXCIpO1xuICB9LCAnJykudHJpbSgpO1xufVxuZnVuY3Rpb24gam9pblN0eWxlcyhzdHlsZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChzdHlsZU5hbWUsIFwiOiBcIikuY29uY2F0KHN0eWxlc1tzdHlsZU5hbWVdLCBcIjtcIik7XG4gIH0sICcnKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZm9ybS5zaXplICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5zaXplIHx8IHRyYW5zZm9ybS54ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS54IHx8IHRyYW5zZm9ybS55ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS55IHx8IHRyYW5zZm9ybS5yb3RhdGUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnJvdGF0ZSB8fCB0cmFuc2Zvcm0uZmxpcFggfHwgdHJhbnNmb3JtLmZsaXBZO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yU3ZnKF9yZWYpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgaWNvbldpZHRoID0gX3JlZi5pY29uV2lkdGg7XG4gIHZhciBvdXRlciA9IHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChjb250YWluZXJXaWR0aCAvIDIsIFwiIDI1NilcIilcbiAgfTtcbiAgdmFyIGlubmVyVHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54ICogMzIsIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS55ICogMzIsIFwiKSBcIik7XG4gIHZhciBpbm5lclNjYWxlID0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gIHZhciBpbm5lclJvdGF0ZSA9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcIiAwIDApXCIpO1xuICB2YXIgaW5uZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBcIlwiLmNvbmNhdChpbm5lclRyYW5zbGF0ZSwgXCIgXCIpLmNvbmNhdChpbm5lclNjYWxlLCBcIiBcIikuY29uY2F0KGlubmVyUm90YXRlKVxuICB9O1xuICB2YXIgcGF0aCA9IHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChpY29uV2lkdGggLyAyICogLTEsIFwiIC0yNTYpXCIpXG4gIH07XG4gIHJldHVybiB7XG4gICAgb3V0ZXI6IG91dGVyLFxuICAgIGlubmVyOiBpbm5lcixcbiAgICBwYXRoOiBwYXRoXG4gIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JDc3MoX3JlZjIpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYyLnRyYW5zZm9ybSxcbiAgICAgIF9yZWYyJHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICB3aWR0aCA9IF9yZWYyJHdpZHRoID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkd2lkdGgsXG4gICAgICBfcmVmMiRoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICBoZWlnaHQgPSBfcmVmMiRoZWlnaHQgPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiRoZWlnaHQsXG4gICAgICBfcmVmMiRzdGFydENlbnRlcmVkID0gX3JlZjIuc3RhcnRDZW50ZXJlZCxcbiAgICAgIHN0YXJ0Q2VudGVyZWQgPSBfcmVmMiRzdGFydENlbnRlcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN0YXJ0Q2VudGVyZWQ7XG4gIHZhciB2YWwgPSAnJztcblxuICBpZiAoc3RhcnRDZW50ZXJlZCAmJiBJU19JRSkge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkIC0gd2lkdGggLyAyLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCAtIGhlaWdodCAvIDIsIFwiZW0pIFwiKTtcbiAgfSBlbHNlIGlmIChzdGFydENlbnRlcmVkKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKGNhbGMoLTUwJSArIFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0pLCBjYWxjKC01MCUgKyBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkpIFwiKTtcbiAgfSBlbHNlIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pIFwiKTtcbiAgfVxuXG4gIHZhbCArPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gIHZhbCArPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCJkZWcpIFwiKTtcbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIEFMTF9TUEFDRSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmZ1bmN0aW9uIGZpbGxCbGFjayhhYnN0cmFjdCkge1xuICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgaWYgKGFic3RyYWN0LmF0dHJpYnV0ZXMgJiYgKGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCB8fCBmb3JjZSkpIHtcbiAgICBhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgPSAnYmxhY2snO1xuICB9XG5cbiAgcmV0dXJuIGFic3RyYWN0O1xufVxuXG5mdW5jdGlvbiBkZUdyb3VwKGFic3RyYWN0KSB7XG4gIGlmIChhYnN0cmFjdC50YWcgPT09ICdnJykge1xuICAgIHJldHVybiBhYnN0cmFjdC5jaGlsZHJlbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2Fic3RyYWN0XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlSWNvbk1hc2tpbmcgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuICB2YXIgbWFpbldpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgIG1haW5QYXRoID0gbWFpbi5pY29uO1xuICB2YXIgbWFza1dpZHRoID0gbWFzay53aWR0aCxcbiAgICAgIG1hc2tQYXRoID0gbWFzay5pY29uO1xuICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIGNvbnRhaW5lcldpZHRoOiBtYXNrV2lkdGgsXG4gICAgaWNvbldpZHRoOiBtYWluV2lkdGhcbiAgfSk7XG4gIHZhciBtYXNrUmVjdCA9IHtcbiAgICB0YWc6ICdyZWN0JyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICB9KVxuICB9O1xuICB2YXIgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluID0gbWFpblBhdGguY2hpbGRyZW4gPyB7XG4gICAgY2hpbGRyZW46IG1haW5QYXRoLmNoaWxkcmVuLm1hcChmaWxsQmxhY2spXG4gIH0gOiB7fTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICBjaGlsZHJlbjogW2ZpbGxCbGFjayhfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHRhZzogbWFpblBhdGgudGFnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpblBhdGguYXR0cmlidXRlcywgdHJhbnMucGF0aClcbiAgICB9LCBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4pKV1cbiAgfTtcbiAgdmFyIG1hc2tPdXRlckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICBjaGlsZHJlbjogW21hc2tJbm5lckdyb3VwXVxuICB9O1xuICB2YXIgbWFza0lkID0gXCJtYXNrLVwiLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBjbGlwSWQgPSBcImNsaXAtXCIuY29uY2F0KG5leHRVbmlxdWVJZCgpKTtcbiAgdmFyIG1hc2tUYWcgPSB7XG4gICAgdGFnOiAnbWFzaycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBpZDogbWFza0lkLFxuICAgICAgbWFza1VuaXRzOiAndXNlclNwYWNlT25Vc2UnLFxuICAgICAgbWFza0NvbnRlbnRVbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xuICAgIH0pLFxuICAgIGNoaWxkcmVuOiBbbWFza1JlY3QsIG1hc2tPdXRlckdyb3VwXVxuICB9O1xuICB2YXIgZGVmcyA9IHtcbiAgICB0YWc6ICdkZWZzJyxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ2NsaXBQYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQ6IGNsaXBJZFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBkZUdyb3VwKG1hc2tQYXRoKVxuICAgIH0sIG1hc2tUYWddXG4gIH07XG4gIGNoaWxkcmVuLnB1c2goZGVmcywge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgICB9LCBBTExfU1BBQ0UpXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uU3RhbmRhcmQgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGg6IG1haW4ud2lkdGgsXG4gICAgICBpY29uV2lkdGg6IG1haW4ud2lkdGhcbiAgICB9KTtcbiAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIHRhZzogbWFpbi5pY29uLnRhZyxcbiAgICAgICAgICBjaGlsZHJlbjogbWFpbi5pY29uLmNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbi5wdXNoKG1haW4uaWNvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzSWNvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXMsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkgJiYgbWFpbi5mb3VuZCAmJiAhbWFzay5mb3VuZCkge1xuICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB4OiB3aWR0aCAvIGhlaWdodCAvIDIsXG4gICAgICB5OiAwLjVcbiAgICB9O1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBqb2luU3R5bGVzKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlcywge1xuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIlwiLmNvbmNhdChvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYsIFwiZW0gXCIpLmNvbmNhdChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYsIFwiZW1cIilcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBhc1N5bWJvbCAoX3JlZikge1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG4gIHZhciBpZCA9IHN5bWJvbCA9PT0gdHJ1ZSA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6IHN5bWJvbDtcbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6IG5vbmU7J1xuICAgIH0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdzeW1ib2wnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICBpZDogaWRcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV1cbiAgfV07XG59XG5cbmZ1bmN0aW9uIG1ha2VJbmxpbmVTdmdBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIF9wYXJhbXMkaWNvbnMgPSBwYXJhbXMuaWNvbnMsXG4gICAgICBtYWluID0gX3BhcmFtcyRpY29ucy5tYWluLFxuICAgICAgbWFzayA9IF9wYXJhbXMkaWNvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IHBhcmFtcy5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IHBhcmFtcy5pY29uTmFtZSxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICBzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlO1xuXG4gIHZhciBfcmVmID0gbWFzay5mb3VuZCA/IG1hc2sgOiBtYWluLFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgdmFyIHdpZHRoQ2xhc3MgPSBcImZhLXctXCIuY29uY2F0KE1hdGguY2VpbCh3aWR0aCAvIGhlaWdodCAqIDE2KSk7XG4gIHZhciBhdHRyQ2xhc3MgPSBbY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIGljb25OYW1lID8gXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiAnJywgd2lkdGhDbGFzc10uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGV4dHJhLmNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTE7XG4gIH0pLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB7XG4gICAgICAnZGF0YS1wcmVmaXgnOiBwcmVmaXgsXG4gICAgICAnZGF0YS1pY29uJzogaWNvbk5hbWUsXG4gICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAncm9sZSc6IGV4dHJhLmF0dHJpYnV0ZXMucm9sZSB8fCAnaW1nJyxcbiAgICAgICd4bWxucyc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICAndmlld0JveCc6IFwiMCAwIFwiLmNvbmNhdCh3aWR0aCwgXCIgXCIpLmNvbmNhdChoZWlnaHQpXG4gICAgfSlcbiAgfTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgY29udGVudC5hdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICBpZiAodGl0bGUpIGNvbnRlbnQuY2hpbGRyZW4ucHVzaCh7XG4gICAgdGFnOiAndGl0bGUnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGlkOiBjb250ZW50LmF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddIHx8IFwidGl0bGUtXCIuY29uY2F0KG5leHRVbmlxdWVJZCgpKVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgfSk7XG5cbiAgdmFyIGFyZ3MgPSBfb2JqZWN0U3ByZWFkKHt9LCBjb250ZW50LCB7XG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIG1haW46IG1haW4sXG4gICAgbWFzazogbWFzayxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBzdHlsZXM6IGV4dHJhLnN0eWxlc1xuICB9KTtcblxuICB2YXIgX3JlZjIgPSBtYXNrLmZvdW5kICYmIG1haW4uZm91bmQgPyBtYWtlSWNvbk1hc2tpbmcoYXJncykgOiBtYWtlSWNvblN0YW5kYXJkKGFyZ3MpLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG4gIGFyZ3MuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgYXJncy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgcmV0dXJuIGFzU3ltYm9sKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhc0ljb24oYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNUZXh0QWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB3aWR0aCA9IHBhcmFtcy53aWR0aCxcbiAgICAgIGhlaWdodCA9IHBhcmFtcy5oZWlnaHQsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlMiA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZTIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGUyO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3Moe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBzdGFydENlbnRlcmVkOiB0cnVlLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9KTtcbiAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICB9XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYTtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8ge1xuICAgICd0aXRsZSc6IHRpdGxlXG4gIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoZXh0cmEuc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIHZhciB2YWwgPSBbXTtcbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgbm9vcCQxID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgcCA9IGNvbmZpZy5tZWFzdXJlUGVyZm9ybWFuY2UgJiYgUEVSRk9STUFOQ0UgJiYgUEVSRk9STUFOQ0UubWFyayAmJiBQRVJGT1JNQU5DRS5tZWFzdXJlID8gUEVSRk9STUFOQ0UgOiB7XG4gIG1hcms6IG5vb3AkMSxcbiAgbWVhc3VyZTogbm9vcCQxXG59O1xudmFyIHByZWFtYmxlID0gXCJGQSBcXFwiNS4xMC4yXFxcIlwiO1xuXG52YXIgYmVnaW4gPSBmdW5jdGlvbiBiZWdpbihuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIikpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlbmQobmFtZSk7XG4gIH07XG59O1xuXG52YXIgZW5kID0gZnVuY3Rpb24gZW5kKG5hbWUpIHtcbiAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xuICBwLm1lYXN1cmUoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG59O1xuXG52YXIgcGVyZiA9IHtcbiAgYmVnaW46IGJlZ2luLFxuICBlbmQ6IGVuZFxufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBoZWxwZXIgdG8gYmluZCBhIGZ1bmN0aW9uIGtub3duIHRvIGhhdmUgNCBhcmd1bWVudHNcbiAqIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAqL1xuXG52YXIgYmluZEludGVybmFsNCA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYywgZCk7XG4gIH07XG59O1xuXG4vKipcbiAqICMgUmVkdWNlXG4gKlxuICogQSBmYXN0IG9iamVjdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAqIEByZXR1cm4ge21peGVkfSAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHJlc3VsdC5cbiAqL1xuXG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0KHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3ViamVjdCksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgaSxcbiAgICAgIGtleSxcbiAgICAgIHJlc3VsdDtcblxuICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpID0gMTtcbiAgICByZXN1bHQgPSBzdWJqZWN0W2tleXNbMF1dO1xuICB9IGVsc2Uge1xuICAgIGkgPSAwO1xuICAgIHJlc3VsdCA9IGluaXRpYWxWYWx1ZTtcbiAgfVxuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgc3ViamVjdFtrZXldLCBrZXksIHN1YmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRvSGV4KHVuaWNvZGUpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pY29kZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBoZXggPSB1bmljb2RlLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgIHJlc3VsdCArPSAoJzAwMCcgKyBoZXgpLnNsaWNlKC00KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUljb25zKHByZWZpeCwgaWNvbnMpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBfcGFyYW1zJHNraXBIb29rcyA9IHBhcmFtcy5za2lwSG9va3MsXG4gICAgICBza2lwSG9va3MgPSBfcGFyYW1zJHNraXBIb29rcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHNraXBIb29rcztcbiAgdmFyIG5vcm1hbGl6ZWQgPSBPYmplY3Qua2V5cyhpY29ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGljb25OYW1lKSB7XG4gICAgdmFyIGljb24gPSBpY29uc1tpY29uTmFtZV07XG4gICAgdmFyIGV4cGFuZGVkID0gISFpY29uLmljb247XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGFjY1tpY29uLmljb25OYW1lXSA9IGljb24uaWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGlmICh0eXBlb2YgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2sgPT09ICdmdW5jdGlvbicgJiYgIXNraXBIb29rcykge1xuICAgIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrKHByZWZpeCwgbm9ybWFsaXplZCk7XG4gIH0gZWxzZSB7XG4gICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZCh7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9LCBub3JtYWxpemVkKTtcbiAgfVxuICAvKipcbiAgICogRm9udCBBd2Vzb21lIDQgdXNlZCB0aGUgcHJlZml4IG9mIGBmYWAgZm9yIGFsbCBpY29ucy4gV2l0aCB0aGUgaW50cm9kdWN0aW9uXG4gICAqIG9mIG5ldyBzdHlsZXMgd2UgbmVlZGVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVtLiBQcmVmaXggYGZhYCBpcyBub3cgYW4gYWxpYXNcbiAgICogZm9yIGBmYXNgIHNvIHdlJ2xsIGVhc3kgdGhlIHVwZ3JhZGUgcHJvY2VzcyBmb3Igb3VyIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHkgZGVmaW5pbmdcbiAgICogdGhpcyBhcyB3ZWxsLlxuICAgKi9cblxuXG4gIGlmIChwcmVmaXggPT09ICdmYXMnKSB7XG4gICAgZGVmaW5lSWNvbnMoJ2ZhJywgaWNvbnMpO1xuICB9XG59XG5cbnZhciBzdHlsZXMgPSBuYW1lc3BhY2Uuc3R5bGVzLFxuICAgIHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zO1xudmFyIF9ieVVuaWNvZGUgPSB7fTtcbnZhciBfYnlMaWdhdHVyZSA9IHt9O1xudmFyIF9ieU9sZE5hbWUgPSB7fTtcbnZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICB2YXIgbG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gcmVkdWNlKHN0eWxlcywgZnVuY3Rpb24gKG8sIHN0eWxlLCBwcmVmaXgpIHtcbiAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pO1xuICB9O1xuXG4gIF9ieVVuaWNvZGUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICBpZiAoaWNvblszXSkge1xuICAgICAgYWNjW2ljb25bM11dID0gaWNvbk5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIF9ieUxpZ2F0dXJlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgdmFyIGxpZ2F0dXJlcyA9IGljb25bMl07XG4gICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgIGxpZ2F0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdhdHVyZSkge1xuICAgICAgYWNjW2xpZ2F0dXJlXSA9IGljb25OYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICB2YXIgaGFzUmVndWxhciA9ICdmYXInIGluIHN0eWxlcztcbiAgX2J5T2xkTmFtZSA9IHJlZHVjZShzaGltcywgZnVuY3Rpb24gKGFjYywgc2hpbSkge1xuICAgIHZhciBvbGROYW1lID0gc2hpbVswXTtcbiAgICB2YXIgcHJlZml4ID0gc2hpbVsxXTtcbiAgICB2YXIgaWNvbk5hbWUgPSBzaGltWzJdO1xuXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIWhhc1JlZ3VsYXIpIHtcbiAgICAgIHByZWZpeCA9ICdmYXMnO1xuICAgIH1cblxuICAgIGFjY1tvbGROYW1lXSA9IHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lXG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuYnVpbGQoKTtcbmZ1bmN0aW9uIGJ5VW5pY29kZShwcmVmaXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIChfYnlVbmljb2RlW3ByZWZpeF0gfHwge30pW3VuaWNvZGVdO1xufVxuZnVuY3Rpb24gYnlMaWdhdHVyZShwcmVmaXgsIGxpZ2F0dXJlKSB7XG4gIHJldHVybiAoX2J5TGlnYXR1cmVbcHJlZml4XSB8fCB7fSlbbGlnYXR1cmVdO1xufVxuZnVuY3Rpb24gYnlPbGROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbFxuICB9O1xufVxuXG52YXIgc3R5bGVzJDEgPSBuYW1lc3BhY2Uuc3R5bGVzO1xudmFyIGVtcHR5Q2Fub25pY2FsSWNvbiA9IGZ1bmN0aW9uIGVtcHR5Q2Fub25pY2FsSWNvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgcmVzdDogW11cbiAgfTtcbn07XG5mdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWcuZmFtaWx5UHJlZml4LCBjbHMpO1xuXG4gICAgaWYgKHN0eWxlcyQxW2Nsc10pIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChjb25maWcuYXV0b0ZldGNoU3ZnICYmIFsnZmFzJywgJ2ZhcicsICdmYWwnLCAnZmFkJywgJ2ZhYicsICdmYSddLmluZGV4T2YoY2xzKSA+IC0xKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoaWNvbk5hbWUpIHtcbiAgICAgIHZhciBzaGltID0gYWNjLnByZWZpeCA9PT0gJ2ZhJyA/IGJ5T2xkTmFtZShpY29uTmFtZSkgOiB7fTtcbiAgICAgIGFjYy5pY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgaWNvbk5hbWU7XG4gICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcbiAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzLmluZGV4T2YoJ2ZhLXctJykgIT09IDApIHtcbiAgICAgIGFjYy5yZXN0LnB1c2goY2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBlbXB0eUNhbm9uaWNhbEljb24oKSk7XG59XG5mdW5jdGlvbiBpY29uRnJvbU1hcHBpbmcobWFwcGluZywgcHJlZml4LCBpY29uTmFtZSkge1xuICBpZiAobWFwcGluZyAmJiBtYXBwaW5nW3ByZWZpeF0gJiYgbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSHRtbChhYnN0cmFjdE5vZGVzKSB7XG4gIHZhciB0YWcgPSBhYnN0cmFjdE5vZGVzLnRhZyxcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPT09IHZvaWQgMCA/IHt9IDogX2Fic3RyYWN0Tm9kZXMkYXR0cmliLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID0gYWJzdHJhY3ROb2Rlcy5jaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcblxuICBpZiAodHlwZW9mIGFic3RyYWN0Tm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGh0bWxFc2NhcGUoYWJzdHJhY3ROb2Rlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiPFwiLmNvbmNhdCh0YWcsIFwiIFwiKS5jb25jYXQoam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcyksIFwiPlwiKS5jb25jYXQoY2hpbGRyZW4ubWFwKHRvSHRtbCkuam9pbignJyksIFwiPC9cIikuY29uY2F0KHRhZywgXCI+XCIpO1xuICB9XG59XG5cbnZhciBub29wJDIgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlO1xuICB9XG5cbiAgdmFyIG11dGF0b3IgPSBtdXRhdG9yc1tjb25maWcuYXV0b1JlcGxhY2VTdmddO1xuICByZXR1cm4gbXV0YXRvciB8fCBtdXRhdG9ycy5yZXBsYWNlO1xufVxuXG52YXIgbXV0YXRvcnMgPSB7XG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuICAgIHZhciBuZXdPdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICBub2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTCArIChjb25maWcua2VlcE9yaWdpbmFsU291cmNlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJyA/IFwiPCEtLSBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIC0tPlwiKSA6ICcnKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgdmFyIG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpO1xuICAgICAgbmV3Tm9kZS5vdXRlckhUTUwgPSBuZXdPdXRlckhUTUw7XG4gICAgfVxuICB9LFxuICBuZXN0OiBmdW5jdGlvbiBuZXN0KG11dGF0aW9uKSB7XG4gICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICB2YXIgYWJzdHJhY3QgPSBtdXRhdGlvblsxXTsgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVwbGFjZWQgbm9kZSB3ZSBkbyBub3Qgd2FudCB0byBjb250aW51ZSBuZXN0aW5nIHdpdGhpbiBpdC5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IHRvIHRoZSBzdGFuZGFyZCByZXBsYWNlbWVudFxuXG4gICAgaWYgKH5jbGFzc0FycmF5KG5vZGUpLmluZGV4T2YoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MpKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgdmFyIGZvclN2ZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItLipcIikpO1xuICAgIGRlbGV0ZSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLnN0eWxlO1xuICAgIHZhciBzcGxpdENsYXNzZXMgPSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgaWYgKGNscyA9PT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgfHwgY2xzLm1hdGNoKGZvclN2ZykpIHtcbiAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy50b05vZGUucHVzaChjbHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHtcbiAgICAgIHRvTm9kZTogW10sXG4gICAgICB0b1N2ZzogW11cbiAgICB9KTtcbiAgICBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcbiAgICB2YXIgbmV3SW5uZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHNwbGl0Q2xhc3Nlcy50b05vZGUuam9pbignICcpKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHLCAnJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb25TeW5jKG9wKSB7XG4gIG9wKCk7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQyO1xuXG4gIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcmFtZSA9IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuXG4gICAgaWYgKGNvbmZpZy5tdXRhdGVBcHByb2FjaCA9PT0gTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMpIHtcbiAgICAgIGZyYW1lID0gV0lORE9XLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBwZXJmb3JtT3BlcmF0aW9uU3luYztcbiAgICB9XG5cbiAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbXV0YXRvciA9IGdldE11dGF0b3IoKTtcbiAgICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignbXV0YXRlJyk7XG4gICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgbWFyaygpO1xuICAgICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG52YXIgZGlzYWJsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGRpc2FibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG52YXIgbW8gPSBudWxsO1xuZnVuY3Rpb24gb2JzZXJ2ZShvcHRpb25zKSB7XG4gIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWNvbmZpZy5vYnNlcnZlTXV0YXRpb25zKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRyZWVDYWxsYmFjayA9IG9wdGlvbnMudHJlZUNhbGxiYWNrLFxuICAgICAgbm9kZUNhbGxiYWNrID0gb3B0aW9ucy5ub2RlQ2FsbGJhY2ssXG4gICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gb3B0aW9ucy5wc2V1ZG9FbGVtZW50c0NhbGxiYWNrLFxuICAgICAgX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID0gb3B0aW9ucy5vYnNlcnZlTXV0YXRpb25zUm9vdCxcbiAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gX29wdGlvbnMkb2JzZXJ2ZU11dGF0ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9vcHRpb25zJG9ic2VydmVNdXRhdDtcbiAgbW8gPSBuZXcgTVVUQVRJT05fT0JTRVJWRVIoZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICB0b0FycmF5KG9iamVjdHMpLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uUmVjb3JkKSB7XG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlICYmIGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgdmFyIF9nZXRDYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG11dGF0aW9uUmVjb3JkLnRhcmdldCkpLFxuICAgICAgICAgICAgICBwcmVmaXggPSBfZ2V0Q2Fub25pY2FsSWNvbi5wcmVmaXgsXG4gICAgICAgICAgICAgIGljb25OYW1lID0gX2dldENhbm9uaWNhbEljb24uaWNvbk5hbWU7XG5cbiAgICAgICAgICBpZiAocHJlZml4KSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcsIHByZWZpeCk7XG4gICAgICAgICAgaWYgKGljb25OYW1lKSBtdXRhdGlvblJlY29yZC50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCBpY29uTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIG1vLm9ic2VydmUob2JzZXJ2ZU11dGF0aW9uc1Jvb3QsIHtcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICBpZiAoIW1vKSByZXR1cm47XG4gIG1vLmRpc2Nvbm5lY3QoKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIHZhciB2YWwgPSBbXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICB2YWwgPSBzdHlsZS5zcGxpdCgnOycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcHJvcCA9IHN0eWxlc1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlcy5zbGljZSgxKTtcblxuICAgICAgaWYgKHByb3AgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBhY2NbcHJvcF0gPSB2YWx1ZS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGNsYXNzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleGlzdGluZ1ByZWZpeCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcpO1xuICB2YXIgZXhpc3RpbmdJY29uTmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKTtcbiAgdmFyIGlubmVyVGV4dCA9IG5vZGUuaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQgPyBub2RlLmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgdmFyIHZhbCA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShub2RlKSk7XG5cbiAgaWYgKGV4aXN0aW5nUHJlZml4ICYmIGV4aXN0aW5nSWNvbk5hbWUpIHtcbiAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgdmFsLmljb25OYW1lID0gZXhpc3RpbmdJY29uTmFtZTtcbiAgfVxuXG4gIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlMaWdhdHVyZSh2YWwucHJlZml4LCBub2RlLmlubmVyVGV4dCk7XG4gIH0gZWxzZSBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID09PSAxKSB7XG4gICAgdmFsLmljb25OYW1lID0gYnlVbmljb2RlKHZhbC5wcmVmaXgsIHRvSGV4KG5vZGUuaW5uZXJUZXh0KSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgcGFyc2VUcmFuc2Zvcm1TdHJpbmcgPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICBzaXplOiAxNixcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGZsaXBZOiBmYWxzZSxcbiAgICByb3RhdGU6IDBcbiAgfTtcblxuICBpZiAoIXRyYW5zZm9ybVN0cmluZykge1xuICAgIHJldHVybiB0cmFuc2Zvcm07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG4pIHtcbiAgICAgIHZhciBwYXJ0cyA9IG4udG9Mb3dlckNhc2UoKS5zcGxpdCgnLScpO1xuICAgICAgdmFyIGZpcnN0ID0gcGFydHNbMF07XG4gICAgICB2YXIgcmVzdCA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICdoJykge1xuICAgICAgICBhY2MuZmxpcFggPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICAgIGFjYy5mbGlwWSA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHJlc3QgPSBwYXJzZUZsb2F0KHJlc3QpO1xuXG4gICAgICBpZiAoaXNOYU4ocmVzdCkpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChmaXJzdCkge1xuICAgICAgICBjYXNlICdncm93JzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICBhY2Mucm90YXRlID0gYWNjLnJvdGF0ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdHJhbnNmb3JtKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHRyYW5zZm9ybVBhcnNlciAobm9kZSkge1xuICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdHJhbnNmb3JtJykpO1xufVxuXG5mdW5jdGlvbiBzeW1ib2xQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIHN5bWJvbCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXN5bWJvbCcpO1xuICByZXR1cm4gc3ltYm9sID09PSBudWxsID8gZmFsc2UgOiBzeW1ib2wgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gdG9BcnJheShub2RlLmF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyKSB7XG4gICAgaWYgKGFjYy5uYW1lICE9PSAnY2xhc3MnICYmIGFjYy5uYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICBhY2NbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXh0cmFBdHRyaWJ1dGVzO1xufVxuXG5mdW5jdGlvbiBtYXNrUGFyc2VyIChub2RlKSB7XG4gIHZhciBtYXNrID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzaycpO1xuXG4gIGlmICghbWFzaykge1xuICAgIHJldHVybiBlbXB0eUNhbm9uaWNhbEljb24oKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0Q2Fub25pY2FsSWNvbihtYXNrLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaS50cmltKCk7XG4gICAgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJsYW5rTWV0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBpY29uTmFtZTogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICBzeW1ib2w6IGZhbHNlLFxuICAgIG1hc2s6IG51bGwsXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IFtdLFxuICAgICAgc3R5bGVzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VNZXRhKG5vZGUpIHtcbiAgdmFyIF9jbGFzc1BhcnNlciA9IGNsYXNzUGFyc2VyKG5vZGUpLFxuICAgICAgaWNvbk5hbWUgPSBfY2xhc3NQYXJzZXIuaWNvbk5hbWUsXG4gICAgICBwcmVmaXggPSBfY2xhc3NQYXJzZXIucHJlZml4LFxuICAgICAgZXh0cmFDbGFzc2VzID0gX2NsYXNzUGFyc2VyLnJlc3Q7XG5cbiAgdmFyIGV4dHJhU3R5bGVzID0gc3R5bGVQYXJzZXIobm9kZSk7XG4gIHZhciB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1QYXJzZXIobm9kZSk7XG4gIHZhciBzeW1ib2wgPSBzeW1ib2xQYXJzZXIobm9kZSk7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzUGFyc2VyKG5vZGUpO1xuICB2YXIgbWFzayA9IG1hc2tQYXJzZXIobm9kZSk7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIHRpdGxlOiBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBtYXNrOiBtYXNrLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICBzdHlsZXM6IGV4dHJhU3R5bGVzLFxuICAgICAgYXR0cmlidXRlczogZXh0cmFBdHRyaWJ1dGVzXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBNaXNzaW5nSWNvbihlcnJvcikge1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ0ljb24nO1xuICB0aGlzLm1lc3NhZ2UgPSBlcnJvciB8fCAnSWNvbiB1bmF2YWlsYWJsZSc7XG4gIHRoaXMuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbn1cbk1pc3NpbmdJY29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdJY29uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdJY29uO1xuXG52YXIgRklMTCA9IHtcbiAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbn07XG52YXIgQU5JTUFUSU9OX0JBU0UgPSB7XG4gIGF0dHJpYnV0ZVR5cGU6ICdYTUwnLFxuICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnLFxuICBkdXI6ICcycydcbn07XG52YXIgUklORyA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBkOiAnTTE1Ni41LDQ0Ny43bC0xMi42LDI5LjVjLTE4LjctOS41LTM1LjktMjEuMi01MS41LTM0LjlsMjIuNy0yMi43QzEyNy42LDQzMC41LDE0MS41LDQ0MCwxNTYuNSw0NDcuN3ogTTQwLjYsMjcySDguNSBjMS40LDIxLjIsNS40LDQxLjcsMTEuNyw2MS4xTDUwLDMyMS4yQzQ1LjEsMzA1LjUsNDEuOCwyODksNDAuNiwyNzJ6IE00MC42LDI0MGMxLjQtMTguOCw1LjItMzcsMTEuMS01NC4xbC0yOS41LTEyLjYgQzE0LjcsMTk0LjMsMTAsMjE2LjcsOC41LDI0MEg0MC42eiBNNjQuMywxNTYuNWM3LjgtMTQuOSwxNy4yLTI4LjgsMjguMS00MS41TDY5LjcsOTIuM2MtMTMuNywxNS42LTI1LjUsMzIuOC0zNC45LDUxLjUgTDY0LjMsMTU2LjV6IE0zOTcsNDE5LjZjLTEzLjksMTItMjkuNCwyMi4zLTQ2LjEsMzAuNGwxMS45LDI5LjhjMjAuNy05LjksMzkuOC0yMi42LDU2LjktMzcuNkwzOTcsNDE5LjZ6IE0xMTUsOTIuNCBjMTMuOS0xMiwyOS40LTIyLjMsNDYuMS0zMC40bC0xMS45LTI5LjhjLTIwLjcsOS45LTM5LjgsMjIuNi01Ni44LDM3LjZMMTE1LDkyLjR6IE00NDcuNywzNTUuNWMtNy44LDE0LjktMTcuMiwyOC44LTI4LjEsNDEuNSBsMjIuNywyMi43YzEzLjctMTUuNiwyNS41LTMyLjksMzQuOS01MS41TDQ0Ny43LDM1NS41eiBNNDcxLjQsMjcyYy0xLjQsMTguOC01LjIsMzctMTEuMSw1NC4xbDI5LjUsMTIuNiBjNy41LTIxLjEsMTIuMi00My41LDEzLjYtNjYuOEg0NzEuNHogTTMyMS4yLDQ2MmMtMTUuNyw1LTMyLjIsOC4yLTQ5LjIsOS40djMyLjFjMjEuMi0xLjQsNDEuNy01LjQsNjEuMS0xMS43TDMyMS4yLDQ2MnogTTI0MCw0NzEuNGMtMTguOC0xLjQtMzctNS4yLTU0LjEtMTEuMWwtMTIuNiwyOS41YzIxLjEsNy41LDQzLjUsMTIuMiw2Ni44LDEzLjZWNDcxLjR6IE00NjIsMTkwLjhjNSwxNS43LDguMiwzMi4yLDkuNCw0OS4yaDMyLjEgYy0xLjQtMjEuMi01LjQtNDEuNy0xMS43LTYxLjFMNDYyLDE5MC44eiBNOTIuNCwzOTdjLTEyLTEzLjktMjIuMy0yOS40LTMwLjQtNDYuMWwtMjkuOCwxMS45YzkuOSwyMC43LDIyLjYsMzkuOCwzNy42LDU2LjkgTDkyLjQsMzk3eiBNMjcyLDQwLjZjMTguOCwxLjQsMzYuOSw1LjIsNTQuMSwxMS4xbDEyLjYtMjkuNUMzMTcuNywxNC43LDI5NS4zLDEwLDI3Miw4LjVWNDAuNnogTTE5MC44LDUwIGMxNS43LTUsMzIuMi04LjIsNDkuMi05LjRWOC41Yy0yMS4yLDEuNC00MS43LDUuNC02MS4xLDExLjdMMTkwLjgsNTB6IE00NDIuMyw5Mi4zTDQxOS42LDExNWMxMiwxMy45LDIyLjMsMjkuNCwzMC41LDQ2LjEgbDI5LjgtMTEuOUM0NzAsMTI4LjUsNDU3LjMsMTA5LjQsNDQyLjMsOTIuM3ogTTM5Nyw5Mi40bDIyLjctMjIuN2MtMTUuNi0xMy43LTMyLjgtMjUuNS01MS41LTM0LjlsLTEyLjYsMjkuNSBDMzcwLjQsNzIuMSwzODQuNCw4MS41LDM5Nyw5Mi40eidcbiAgfSlcbn07XG5cbnZhciBPUEFDSVRZX0FOSU1BVEUgPSBfb2JqZWN0U3ByZWFkKHt9LCBBTklNQVRJT05fQkFTRSwge1xuICBhdHRyaWJ1dGVOYW1lOiAnb3BhY2l0eSdcbn0pO1xuXG52YXIgRE9UID0ge1xuICB0YWc6ICdjaXJjbGUnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgY3g6ICcyNTYnLFxuICAgIGN5OiAnMzY0JyxcbiAgICByOiAnMjgnXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTklNQVRJT05fQkFTRSwge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ3InLFxuICAgICAgdmFsdWVzOiAnMjg7MTQ7Mjg7Mjg7MTQ7Mjg7J1xuICAgIH0pXG4gIH0sIHtcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzE7MDsxOzE7MDsxOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBRVUVTVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZDogJ00yNjMuNywzMTJoLTE2Yy02LjYsMC0xMi01LjQtMTItMTJjMC03MSw3Ny40LTYzLjksNzcuNC0xMDcuOGMwLTIwLTE3LjgtNDAuMi01Ny40LTQwLjJjLTI5LjEsMC00NC4zLDkuNi01OS4yLDI4LjcgYy0zLjksNS0xMS4xLDYtMTYuMiwyLjRsLTEzLjEtOS4yYy01LjYtMy45LTYuOS0xMS44LTIuNi0xNy4yYzIxLjItMjcuMiw0Ni40LTQ0LjcsOTEuMi00NC43YzUyLjMsMCw5Ny40LDI5LjgsOTcuNCw4MC4yIGMwLDY3LjYtNzcuNCw2My41LTc3LjQsMTA3LjhDMjc1LjcsMzA2LjYsMjcwLjMsMzEyLDI2My43LDMxMnonXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzE7MDswOzA7MDsxOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBFWENMQU1BVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBvcGFjaXR5OiAnMCcsXG4gICAgZDogJ00yMzIuNSwxMzQuNWw3LDE2OGMwLjMsNi40LDUuNiwxMS41LDEyLDExLjVoOWM2LjQsMCwxMS43LTUuMSwxMi0xMS41bDctMTY4YzAuMy02LjgtNS4yLTEyLjUtMTItMTIuNWgtMjMgQzIzNy43LDEyMiwyMzIuMiwxMjcuNywyMzIuNSwxMzQuNXonXG4gIH0pLFxuICBjaGlsZHJlbjogW3tcbiAgICB0YWc6ICdhbmltYXRlJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHtcbiAgICAgIHZhbHVlczogJzA7MDsxOzE7MDswOydcbiAgICB9KVxuICB9XVxufTtcbnZhciBtaXNzaW5nID0ge1xuICB0YWc6ICdnJyxcbiAgY2hpbGRyZW46IFtSSU5HLCBET1QsIFFVRVNUSU9OLCBFWENMQU1BVElPTl1cbn07XG5cbnZhciBzdHlsZXMkMiA9IG5hbWVzcGFjZS5zdHlsZXM7XG5mdW5jdGlvbiBhc0ZvdW5kSWNvbihpY29uKSB7XG4gIHZhciB3aWR0aCA9IGljb25bMF07XG4gIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuXG4gIHZhciBfaWNvbiRzbGljZSA9IGljb24uc2xpY2UoNCksXG4gICAgICBfaWNvbiRzbGljZTIgPSBfc2xpY2VkVG9BcnJheShfaWNvbiRzbGljZSwgMSksXG4gICAgICB2ZWN0b3JEYXRhID0gX2ljb24kc2xpY2UyWzBdO1xuXG4gIHZhciBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2ZWN0b3JEYXRhKSkge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLkdST1VQKVxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMF1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZKSxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzFdXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0ge1xuICAgICAgdGFnOiAncGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBkOiB2ZWN0b3JEYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm91bmQ6IHRydWUsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGljb246IGVsZW1lbnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciB2YWwgPSB7XG4gICAgICBmb3VuZDogZmFsc2UsXG4gICAgICB3aWR0aDogNTEyLFxuICAgICAgaGVpZ2h0OiA1MTIsXG4gICAgICBpY29uOiBtaXNzaW5nXG4gICAgfTtcblxuICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgc3R5bGVzJDJbcHJlZml4XSAmJiBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXSkge1xuICAgICAgdmFyIGljb24gPSBzdHlsZXMkMltwcmVmaXhdW2ljb25OYW1lXTtcbiAgICAgIHJldHVybiByZXNvbHZlKGFzRm91bmRJY29uKGljb24pKTtcbiAgICB9XG5cbiAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmICFjb25maWcuc2hvd01pc3NpbmdJY29ucykge1xuICAgICAgcmVqZWN0KG5ldyBNaXNzaW5nSWNvbihcIkljb24gaXMgbWlzc2luZyBmb3IgcHJlZml4IFwiLmNvbmNhdChwcmVmaXgsIFwiIHdpdGggaWNvbiBuYW1lIFwiKS5jb25jYXQoaWNvbk5hbWUpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUodmFsKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgc3R5bGVzJDMgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gbm9kZU1ldGEuc3ltYm9sLFxuICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcGlja2VkLmFsbChbZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCksIGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KV0pLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgIG1haW4gPSBfcmVmMlswXSxcbiAgICAgICAgICBtYXNrID0gX3JlZjJbMV07XG5cbiAgICAgIHJlc29sdmUoW25vZGUsIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgfSldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSkge1xuICB2YXIgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gIHZhciB3aWR0aCA9IG51bGw7XG4gIHZhciBoZWlnaHQgPSBudWxsO1xuXG4gIGlmIChJU19JRSkge1xuICAgIHZhciBjb21wdXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5mb250U2l6ZSwgMTApO1xuICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHdpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgICBoZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgfVxuXG4gIGlmIChjb25maWcuYXV0b0ExMXkgJiYgIXRpdGxlKSB7XG4gICAgZXh0cmEuYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgfVxuXG4gIHJldHVybiBwaWNrZWQucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgY29udGVudDogbm9kZS5pbm5lckhUTUwsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBleHRyYTogZXh0cmEsXG4gICAgd2F0Y2hhYmxlOiB0cnVlXG4gIH0pXSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTXV0YXRpb24obm9kZSkge1xuICB2YXIgbm9kZU1ldGEgPSBwYXJzZU1ldGEobm9kZSk7XG5cbiAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgIHJldHVybiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24obm9kZSwgbm9kZU1ldGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuXG4gIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgaGNsUmVtb3ZlID0gZnVuY3Rpb24gaGNsUmVtb3ZlKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LnJlbW92ZShcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIHByZWZpeGVzID0gY29uZmlnLmF1dG9GZXRjaFN2ZyA/IE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRSkgOiBPYmplY3Qua2V5cyhzdHlsZXMkMyk7XG4gIHZhciBwcmVmaXhlc0RvbVF1ZXJ5ID0gW1wiLlwiLmNvbmNhdChMQVlFUlNfVEVYVF9DTEFTU05BTUUsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpXS5jb25jYXQocHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIFwiLlwiLmNvbmNhdChwLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKTtcbiAgfSkpLmpvaW4oJywgJyk7XG5cbiAgaWYgKHByZWZpeGVzRG9tUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcblxuICB0cnkge1xuICAgIGNhbmRpZGF0ZXMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbChwcmVmaXhlc0RvbVF1ZXJ5KSk7XG4gIH0gY2F0Y2ggKGUpIHsvLyBub29wXG4gIH1cblxuICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgaGNsQWRkKCdwZW5kaW5nJyk7XG4gICAgaGNsUmVtb3ZlKCdjb21wbGV0ZScpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtYXJrID0gcGVyZi5iZWdpbignb25UcmVlJyk7XG4gIHZhciBtdXRhdGlvbnMgPSBjYW5kaWRhdGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtdXRhdGlvbiA9IGdlbmVyYXRlTXV0YXRpb24obm9kZSk7XG5cbiAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICBhY2MucHVzaChtdXRhdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTWlzc2luZ0ljb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcGlja2VkLmFsbChtdXRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkTXV0YXRpb25zKSB7XG4gICAgICBwZXJmb3JtKHJlc29sdmVkTXV0YXRpb25zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGhjbEFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgaGNsUmVtb3ZlKCdwZW5kaW5nJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIG1hcmsoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgbWFyaygpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25Ob2RlKG5vZGUpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpLnRoZW4oZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICBwZXJmb3JtKFttdXRhdGlvbl0sIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgcG9zaXRpb24pIHtcbiAgdmFyIHBlbmRpbmdBdHRyaWJ1dGUgPSBcIlwiLmNvbmNhdChEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcpLmNvbmNhdChwb3NpdGlvbi5yZXBsYWNlKCc6JywgJy0nKSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSkgIT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgbm9kZSBpcyBhbHJlYWR5IGJlaW5nIHByb2Nlc3NlZFxuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0b0FycmF5KG5vZGUuY2hpbGRyZW4pO1xuICAgIHZhciBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpID09PSBwb3NpdGlvbjtcbiAgICB9KVswXTtcbiAgICB2YXIgc3R5bGVzID0gV0lORE9XLmdldENvbXB1dGVkU3R5bGUobm9kZSwgcG9zaXRpb24pO1xuICAgIHZhciBmb250RmFtaWx5ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JykubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgdmFyIGZvbnRXZWlnaHQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC13ZWlnaHQnKTtcblxuICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCAmJiAhZm9udEZhbWlseSkge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgLy8gdGhhdCBwcm9iYWJseSBtZWFucyB0aGF0IGEgY2xhc3MgbmFtZSB0aGF0IHdhcyBwcmV2aW91c2x5IHByZXNlbnQgdG8gbWFrZSB0aGUgaWNvbiBoYXMgYmVlblxuICAgICAgLy8gcmVtb3ZlZC4gU28gd2Ugbm93IHNob3VsZCBkZWxldGUgdGhlIGljb24uXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChmb250RmFtaWx5KSB7XG4gICAgICB2YXIgY29udGVudCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgICB2YXIgcHJlZml4ID0gflsnU29saWQnLCAnUmVndWxhcicsICdMaWdodCcsICdEdW90b25lJywgJ0JyYW5kcyddLmluZGV4T2YoZm9udEZhbWlseVsxXSkgPyBTVFlMRV9UT19QUkVGSVhbZm9udEZhbWlseVsxXS50b0xvd2VyQ2FzZSgpXSA6IEZPTlRfV0VJR0hUX1RPX1BSRUZJWFtmb250V2VpZ2h0XTtcbiAgICAgIHZhciBoZXhWYWx1ZSA9IHRvSGV4KGNvbnRlbnQubGVuZ3RoID09PSAzID8gY29udGVudC5zdWJzdHIoMSwgMSkgOiBjb250ZW50KTtcbiAgICAgIHZhciBpY29uTmFtZSA9IGJ5VW5pY29kZShwcmVmaXgsIGhleFZhbHVlKTtcbiAgICAgIHZhciBpY29uSWRlbnRpZmllciA9IGljb25OYW1lOyAvLyBPbmx5IGNvbnZlcnQgdGhlIHBzZXVkbyBlbGVtZW50IGluIHRoaXMgOmJlZm9yZS86YWZ0ZXIgcG9zaXRpb24gaW50byBhbiBpY29uIGlmIHdlIGhhdmVuJ3RcbiAgICAgIC8vIGFscmVhZHkgZG9uZSBzbyB3aXRoIHRoZSBzYW1lIHByZWZpeCBhbmQgaWNvbk5hbWVcblxuICAgICAgaWYgKGljb25OYW1lICYmICghYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfUFJFRklYKSAhPT0gcHJlZml4IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX0lDT04pICE9PSBpY29uSWRlbnRpZmllcikpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSwgaWNvbklkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCkge1xuICAgICAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIG9uZSwgc2luY2Ugd2UncmUgcmVwbGFjaW5nIGl0IHdpdGggYSBuZXcgb25lXG4gICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWV0YSA9IGJsYW5rTWV0YSgpO1xuICAgICAgICB2YXIgZXh0cmEgPSBtZXRhLmV4dHJhO1xuICAgICAgICBleHRyYS5hdHRyaWJ1dGVzW0RBVEFfRkFfUFNFVURPX0VMRU1FTlRdID0gcG9zaXRpb247XG4gICAgICAgIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLnRoZW4oZnVuY3Rpb24gKG1haW4pIHtcbiAgICAgICAgICB2YXIgYWJzdHJhY3QgPSBtYWtlSW5saW5lU3ZnQWJzdHJhY3QoX29iamVjdFNwcmVhZCh7fSwgbWV0YSwge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgbWFzazogZW1wdHlDYW5vbmljYWxJY29uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lOiBpY29uSWRlbnRpZmllcixcbiAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnOmJlZm9yZScpIHtcbiAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShub2RlKSB7XG4gIHJldHVybiBwaWNrZWQuYWxsKFtyZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YWZ0ZXInKV0pO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzYWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmhlYWQgJiYgIX5UQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUy5pbmRleE9mKG5vZGUudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSAmJiAhbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgJiYgKCFub2RlLnBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnROb2RlLnRhZ05hbWUgIT09ICdzdmcnKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoUHNldWRvRWxlbWVudHMgKHJvb3QpIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBvcGVyYXRpb25zID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuZmlsdGVyKHByb2Nlc3NhYmxlKS5tYXAocmVwbGFjZSk7XG4gICAgdmFyIGVuZCA9IHBlcmYuYmVnaW4oJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJyk7XG4gICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgcGlja2VkLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciBiYXNlU3R5bGVzID0gXCJzdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGhlaWdodDogMWVtO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1sZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEge1xcbiAgd2lkdGg6IDAuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yIHtcXG4gIHdpZHRoOiAwLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0zIHtcXG4gIHdpZHRoOiAwLjE4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNCB7XFxuICB3aWR0aDogMC4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy01IHtcXG4gIHdpZHRoOiAwLjMxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNiB7XFxuICB3aWR0aDogMC4zNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNyB7XFxuICB3aWR0aDogMC40Mzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTgge1xcbiAgd2lkdGg6IDAuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy05IHtcXG4gIHdpZHRoOiAwLjU2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTAge1xcbiAgd2lkdGg6IDAuNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTExIHtcXG4gIHdpZHRoOiAwLjY4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTIge1xcbiAgd2lkdGg6IDAuNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTMge1xcbiAgd2lkdGg6IDAuODEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNCB7XFxuICB3aWR0aDogMC44NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTUge1xcbiAgd2lkdGg6IDAuOTM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNiB7XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XFxuICB3aWR0aDogMS4wNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcXG4gIHdpZHRoOiAxLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOSB7XFxuICB3aWR0aDogMS4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGkge1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZhLWxheWVycyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyLCAuZmEtbGF5ZXJzLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRleHQge1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjI1M2E7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMS41ZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1heC13aWR0aDogNWVtO1xcbiAgbWluLXdpZHRoOiAxLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICByaWdodDogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtdG9wLWxlZnQge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzMzMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4wNjY3ZW07XFxufVxcblxcbi5mYS14cyB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLmZhLXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcXG59XFxuXFxuLmZhLTF4IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uZmEtMngge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5cXG4uZmEtNXgge1xcbiAgZm9udC1zaXplOiA1ZW07XFxufVxcblxcbi5mYS02eCB7XFxuICBmb250LXNpemU6IDZlbTtcXG59XFxuXFxuLmZhLTd4IHtcXG4gIGZvbnQtc2l6ZTogN2VtO1xcbn1cXG5cXG4uZmEtOHgge1xcbiAgZm9udC1zaXplOiA4ZW07XFxufVxcblxcbi5mYS05eCB7XFxuICBmb250LXNpemU6IDllbTtcXG59XFxuXFxuLmZhLTEweCB7XFxuICBmb250LXNpemU6IDEwZW07XFxufVxcblxcbi5mYS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uZmEtdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mYS1saSB7XFxuICBsZWZ0OiAtMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uZmEtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuMjVlbSAwLjE1ZW07XFxufVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmZhLmZhLXB1bGwtbGVmdCxcXG4uZmFzLmZhLXB1bGwtbGVmdCxcXG4uZmFyLmZhLXB1bGwtbGVmdCxcXG4uZmFsLmZhLXB1bGwtbGVmdCxcXG4uZmFiLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbn1cXG4uZmEuZmEtcHVsbC1yaWdodCxcXG4uZmFzLmZhLXB1bGwtcmlnaHQsXFxuLmZhci5mYS1wdWxsLXJpZ2h0LFxcbi5mYWwuZmEtcHVsbC1yaWdodCxcXG4uZmFiLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbn1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMjcwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuXFxuLmZhLWZsaXAtYm90aCwgLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG59XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsLFxcbjpyb290IC5mYS1mbGlwLWJvdGgge1xcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuLmZhLXN0YWNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTF4IHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNyLW9ubHkge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgY2xpcDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXByaW1hcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksIDEpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiB2YXIoLS1mYS1zZWNvbmRhcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwgMC40KTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtcHJpbWFyeSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1zZWNvbmRhcnktb3BhY2l0eSwgMC40KTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN3YXAtb3BhY2l0eSAuZmEtc2Vjb25kYXJ5IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBvcGFjaXR5OiB2YXIoLS1mYS1wcmltYXJ5LW9wYWNpdHksIDEpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtcHJpbWFyeSxcXG4uc3ZnLWlubGluZS0tZmEgbWFzayAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZmFkLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVwiO1xuXG5mdW5jdGlvbiBjc3MgKCkge1xuICB2YXIgZGZwID0gREVGQVVMVF9GQU1JTFlfUFJFRklYO1xuICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgdmFyIGZwID0gY29uZmlnLmZhbWlseVByZWZpeDtcbiAgdmFyIHJjID0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3M7XG4gIHZhciBzID0gYmFzZVN0eWxlcztcblxuICBpZiAoZnAgIT09IGRmcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgdmFyIGRQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRmcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgY3VzdG9tUHJvcFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC0tXCIuY29uY2F0KGRmcCwgXCJcXFxcLVwiKSwgJ2cnKTtcbiAgICB2YXIgclBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZHJjKSwgJ2cnKTtcbiAgICBzID0gcy5yZXBsYWNlKGRQYXR0LCBcIi5cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShjdXN0b21Qcm9wUGF0dCwgXCItLVwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKHJQYXR0LCBcIi5cIi5jb25jYXQocmMpKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufVxuXG52YXIgTGlicmFyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpYnJhcnkpO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpYnJhcnksIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGRlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSA9IF9vYmplY3RTcHJlYWQoe30sIF90aGlzLmRlZmluaXRpb25zW2tleV0gfHwge30sIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgZGVmaW5lSWNvbnMoa2V5LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1bGxEZWZpbml0aW9ucyhhZGRpdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gZGVmaW5pdGlvbi5wcmVmaXggJiYgZGVmaW5pdGlvbi5pY29uTmFtZSAmJiBkZWZpbml0aW9uLmljb24gPyB7XG4gICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgIH0gOiBkZWZpbml0aW9uO1xuICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgIHByZWZpeCA9IF9ub3JtYWxpemVkJGtleS5wcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZSA9IF9ub3JtYWxpemVkJGtleS5pY29uTmFtZSxcbiAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgaWYgKCFhZGRpdGlvbnNbcHJlZml4XSkgYWRkaXRpb25zW3ByZWZpeF0gPSB7fTtcbiAgICAgICAgYWRkaXRpb25zW3ByZWZpeF1baWNvbk5hbWVdID0gaWNvbjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFkZGl0aW9ucztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlicmFyeTtcbn0oKTtcblxuZnVuY3Rpb24gZW5zdXJlQ3NzKCkge1xuICBpZiAoY29uZmlnLmF1dG9BZGRDc3MgJiYgIV9jc3NJbnNlcnRlZCkge1xuICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwaU9iamVjdCh2YWwsIGFic3RyYWN0Q3JlYXRvcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnYWJzdHJhY3QnLCB7XG4gICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdodG1sJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbC5hYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZmluZEljb25EZWZpbml0aW9uKGljb25Mb29rdXApIHtcbiAgdmFyIF9pY29uTG9va3VwJHByZWZpeCA9IGljb25Mb29rdXAucHJlZml4LFxuICAgICAgcHJlZml4ID0gX2ljb25Mb29rdXAkcHJlZml4ID09PSB2b2lkIDAgPyAnZmEnIDogX2ljb25Mb29rdXAkcHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uTG9va3VwLmljb25OYW1lO1xuICBpZiAoIWljb25OYW1lKSByZXR1cm47XG4gIHJldHVybiBpY29uRnJvbU1hcHBpbmcobGlicmFyeS5kZWZpbml0aW9ucywgcHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbkZyb21NYXBwaW5nKG5hbWVzcGFjZS5zdHlsZXMsIHByZWZpeCwgaWNvbk5hbWUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSWNvbnMobmV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG1heWJlSWNvbkRlZmluaXRpb24pIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgaWNvbkRlZmluaXRpb24gPSAobWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSkuaWNvbiA/IG1heWJlSWNvbkRlZmluaXRpb24gOiBmaW5kSWNvbkRlZmluaXRpb24obWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSk7XG4gICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuICAgIGlmIChtYXNrKSB7XG4gICAgICBtYXNrID0gKG1hc2sgfHwge30pLmljb24gPyBtYXNrIDogZmluZEljb25EZWZpbml0aW9uKG1hc2sgfHwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KGljb25EZWZpbml0aW9uLCBfb2JqZWN0U3ByZWFkKHt9LCBwYXJhbXMsIHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KSk7XG4gIH07XG59XG5cbnZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbnZhciBub0F1dG8gPSBmdW5jdGlvbiBub0F1dG8oKSB7XG4gIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IGZhbHNlO1xuICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICBkaXNjb25uZWN0KCk7XG59O1xudmFyIF9jc3NJbnNlcnRlZCA9IGZhbHNlO1xudmFyIGRvbSA9IHtcbiAgaTJzdmc6IGZ1bmN0aW9uIGkyc3ZnKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKElTX0RPTSkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGUsXG4gICAgICAgICAgX3BhcmFtcyRjYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcblxuICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBzZWFyY2hQc2V1ZG9FbGVtZW50cyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9uVHJlZShub2RlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwaWNrZWQucmVqZWN0KCdPcGVyYXRpb24gcmVxdWlyZXMgYSBET00gb2Ygc29tZSBraW5kLicpO1xuICAgIH1cbiAgfSxcbiAgY3NzOiBjc3MsXG4gIGluc2VydENzczogZnVuY3Rpb24gaW5zZXJ0Q3NzJCQxKCkge1xuICAgIGlmICghX2Nzc0luc2VydGVkKSB7XG4gICAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IHBhcmFtcy5vYnNlcnZlTXV0YXRpb25zUm9vdDtcblxuICAgIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IGZhbHNlKSB7XG4gICAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gdHJ1ZTtcbiAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBhdXRvUmVwbGFjZSh7XG4gICAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdDogYXV0b1JlcGxhY2VTdmdSb290XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmUoe1xuICAgICAgICB0cmVlQ2FsbGJhY2s6IG9uVHJlZSxcbiAgICAgICAgbm9kZUNhbGxiYWNrOiBvbk5vZGUsXG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2s6IHNlYXJjaFBzZXVkb0VsZW1lbnRzLFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdDogb2JzZXJ2ZU11dGF0aW9uc1Jvb3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHBhcnNlID0ge1xuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgfVxufTtcbnZhciBpY29uID0gcmVzb2x2ZUljb25zKGZ1bmN0aW9uIChpY29uRGVmaW5pdGlvbikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcbiAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcbiAgcmV0dXJuIGFwaU9iamVjdChfb2JqZWN0U3ByZWFkKHtcbiAgICB0eXBlOiAnaWNvbidcbiAgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICBhdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICBpY29uczoge1xuICAgICAgICBtYWluOiBhc0ZvdW5kSWNvbihpY29uKSxcbiAgICAgICAgbWFzazogbWFzayA/IGFzRm91bmRJY29uKG1hc2suaWNvbikgOiB7XG4gICAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICBpY29uOiB7fVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xudmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybTIgPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0yID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtMixcbiAgICAgIF9wYXJhbXMkdGl0bGUyID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUyLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMiA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczIgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMixcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczIgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczIsXG4gICAgICBfcGFyYW1zJHN0eWxlczIgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMjtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHJldHVybiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtdGV4dFwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGNvdW50ZXIgPSBmdW5jdGlvbiBjb3VudGVyKGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRpdGxlMyA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTMgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMyxcbiAgICAgIF9wYXJhbXMkY2xhc3NlczMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczM7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICdjb3VudGVyJyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LnRvU3RyaW5nKCksXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy1jb3VudGVyXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgbGF5ZXIgPSBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJGNsYXNzZXM0ID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzNCA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXM0O1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnbGF5ZXInXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICBhc3NlbWJsZXIoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIEFycmF5LmlzQXJyYXkoYXJncykgPyBhcmdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhLmFic3RyYWN0KTtcbiAgICAgIH0pIDogY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYXJncy5hYnN0cmFjdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnNcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpLmpvaW4oJyAnKVxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dO1xuICB9KTtcbn07XG52YXIgYXBpID0ge1xuICBub0F1dG86IG5vQXV0byxcbiAgY29uZmlnOiBjb25maWcsXG4gIGRvbTogZG9tLFxuICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICBwYXJzZTogcGFyc2UsXG4gIGZpbmRJY29uRGVmaW5pdGlvbjogZmluZEljb25EZWZpbml0aW9uLFxuICBpY29uOiBpY29uLFxuICB0ZXh0OiB0ZXh0LFxuICBjb3VudGVyOiBjb3VudGVyLFxuICBsYXllcjogbGF5ZXIsXG4gIHRvSHRtbDogdG9IdG1sXG59O1xuXG52YXIgYXV0b1JlcGxhY2UgPSBmdW5jdGlvbiBhdXRvUmVwbGFjZSgpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgYXV0b1JlcGxhY2VTdmdSb290ID0gX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkYXV0b1JlcGxhY2VTdjtcbiAgaWYgKChPYmplY3Qua2V5cyhuYW1lc3BhY2Uuc3R5bGVzKS5sZW5ndGggPiAwIHx8IGNvbmZpZy5hdXRvRmV0Y2hTdmcpICYmIElTX0RPTSAmJiBjb25maWcuYXV0b1JlcGxhY2VTdmcpIGFwaS5kb20uaTJzdmcoe1xuICAgIG5vZGU6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGljb24sIG5vQXV0bywgY29uZmlnLCB0b0h0bWwsIGxheWVyLCB0ZXh0LCBjb3VudGVyLCBsaWJyYXJ5LCBkb20sIHBhcnNlLCBmaW5kSWNvbkRlZmluaXRpb24gfTtcbiIsImltcG9ydCB7IHBhcnNlLCBpY29uLCBjb25maWcsIHRleHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGh1bXBzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG4gIHZhciBfcHJvY2Vzc0tleXMgPSBmdW5jdGlvbihjb252ZXJ0LCBvYmosIG9wdGlvbnMpIHtcbiAgICBpZighX2lzT2JqZWN0KG9iaikgfHwgX2lzRGF0ZShvYmopIHx8IF9pc1JlZ0V4cChvYmopIHx8IF9pc0Jvb2xlYW4ob2JqKSB8fCBfaXNGdW5jdGlvbihvYmopKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciBvdXRwdXQsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsID0gMDtcblxuICAgIGlmKF9pc0FycmF5KG9iaikpIHtcbiAgICAgIG91dHB1dCA9IFtdO1xuICAgICAgZm9yKGw9b2JqLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2goX3Byb2Nlc3NLZXlzKGNvbnZlcnQsIG9ialtpXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG91dHB1dCA9IHt9O1xuICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICBvdXRwdXRbY29udmVydChrZXksIG9wdGlvbnMpXSA9IF9wcm9jZXNzS2V5cyhjb252ZXJ0LCBvYmpba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBTdHJpbmcgY29udmVyc2lvbiBtZXRob2RzXG5cbiAgdmFyIHNlcGFyYXRlV29yZHMgPSBmdW5jdGlvbihzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgc2VwYXJhdG9yID0gb3B0aW9ucy5zZXBhcmF0b3IgfHwgJ18nO1xuICAgIHZhciBzcGxpdCA9IG9wdGlvbnMuc3BsaXQgfHwgLyg/PVtBLVpdKS87XG5cbiAgICByZXR1cm4gc3RyaW5nLnNwbGl0KHNwbGl0KS5qb2luKHNlcGFyYXRvcik7XG4gIH07XG5cbiAgdmFyIGNhbWVsaXplID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgaWYgKF9pc051bWVyaWNhbChzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW1xcLV9cXHNdKyguKT8vZywgZnVuY3Rpb24obWF0Y2gsIGNocikge1xuICAgICAgcmV0dXJuIGNociA/IGNoci50b1VwcGVyQ2FzZSgpIDogJyc7XG4gICAgfSk7XG4gICAgLy8gRW5zdXJlIDFzdCBjaGFyIGlzIGFsd2F5cyBsb3dlcmNhc2VcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cigwLCAxKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cigxKTtcbiAgfTtcblxuICB2YXIgcGFzY2FsaXplID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgdmFyIGNhbWVsaXplZCA9IGNhbWVsaXplKHN0cmluZyk7XG4gICAgLy8gRW5zdXJlIDFzdCBjaGFyIGlzIGFsd2F5cyB1cHBlcmNhc2VcbiAgICByZXR1cm4gY2FtZWxpemVkLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxpemVkLnN1YnN0cigxKTtcbiAgfTtcblxuICB2YXIgZGVjYW1lbGl6ZSA9IGZ1bmN0aW9uKHN0cmluZywgb3B0aW9ucykge1xuICAgIHJldHVybiBzZXBhcmF0ZVdvcmRzKHN0cmluZywgb3B0aW9ucykudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvLyBVdGlsaXRpZXNcbiAgLy8gVGFrZW4gZnJvbSBVbmRlcnNjb3JlLmpzXG5cbiAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICB2YXIgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mKG9iaikgPT09ICdmdW5jdGlvbic7XG4gIH07XG4gIHZhciBfaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfTtcbiAgdmFyIF9pc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuICB2YXIgX2lzRGF0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgRGF0ZV0nO1xuICB9O1xuICB2YXIgX2lzUmVnRXhwID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBSZWdFeHBdJztcbiAgfTtcbiAgdmFyIF9pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBQZXJmb3JtYW50IHdheSB0byBkZXRlcm1pbmUgaWYgb2JqIGNvZXJjZXMgdG8gYSBudW1iZXJcbiAgdmFyIF9pc051bWVyaWNhbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIG9iaiA9IG9iaiAtIDA7XG4gICAgcmV0dXJuIG9iaiA9PT0gb2JqO1xuICB9O1xuXG4gIC8vIFNldHMgdXAgZnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBwcm9jZXNzaW5nIGtleXNcbiAgLy8gYWxsb3dpbmcgdGhlIGNvbnZlcnQgZnVuY3Rpb24gdG8gYmUgbW9kaWZpZWQgYnkgYSBjYWxsYmFja1xuICB2YXIgX3Byb2Nlc3NvciA9IGZ1bmN0aW9uKGNvbnZlcnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zICYmICdwcm9jZXNzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5wcm9jZXNzIDogb3B0aW9ucztcblxuICAgIGlmKHR5cGVvZihjYWxsYmFjaykgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb252ZXJ0O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhzdHJpbmcsIGNvbnZlcnQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaHVtcHMgPSB7XG4gICAgY2FtZWxpemU6IGNhbWVsaXplLFxuICAgIGRlY2FtZWxpemU6IGRlY2FtZWxpemUsXG4gICAgcGFzY2FsaXplOiBwYXNjYWxpemUsXG4gICAgZGVwYXNjYWxpemU6IGRlY2FtZWxpemUsXG4gICAgY2FtZWxpemVLZXlzOiBmdW5jdGlvbihvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBfcHJvY2Vzc0tleXMoX3Byb2Nlc3NvcihjYW1lbGl6ZSwgb3B0aW9ucyksIG9iamVjdCk7XG4gICAgfSxcbiAgICBkZWNhbWVsaXplS2V5czogZnVuY3Rpb24ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gX3Byb2Nlc3NLZXlzKF9wcm9jZXNzb3IoZGVjYW1lbGl6ZSwgb3B0aW9ucyksIG9iamVjdCwgb3B0aW9ucyk7XG4gICAgfSxcbiAgICBwYXNjYWxpemVLZXlzOiBmdW5jdGlvbihvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBfcHJvY2Vzc0tleXMoX3Byb2Nlc3NvcihwYXNjYWxpemUsIG9wdGlvbnMpLCBvYmplY3QpO1xuICAgIH0sXG4gICAgZGVwYXNjYWxpemVLZXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNhbWVsaXplS2V5cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgdW5kZWZpbmVkKGh1bXBzKTtcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGh1bXBzO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5odW1wcyA9IGh1bXBzO1xuICB9XG5cbn0pKGNvbW1vbmpzR2xvYmFsKTtcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgdG9Db25zdW1hYmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc3R5bGVUb09iamVjdChzdHlsZSkge1xuICByZXR1cm4gc3R5bGUuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy50cmltKCk7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGFpcikge1xuICAgIHZhciBpID0gcGFpci5pbmRleE9mKCc6Jyk7XG4gICAgdmFyIHByb3AgPSBodW1wcy5jYW1lbGl6ZShwYWlyLnNsaWNlKDAsIGkpKTtcbiAgICB2YXIgdmFsdWUgPSBwYWlyLnNsaWNlKGkgKyAxKS50cmltKCk7XG5cbiAgICBhY2NbcHJvcF0gPSB2YWx1ZTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY2xhc3NUb09iamVjdChjbHMpIHtcbiAgcmV0dXJuIGNscy5zcGxpdCgvXFxzKy8pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjKSB7XG4gICAgYWNjW2NdID0gdHJ1ZTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUNsYXNzT2JqZWN0cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9ianMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBvYmpzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG9ianMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG9iaikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIGFjYyA9IGFjYy5jb25jYXQob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2gob2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnQoaCwgZWxlbWVudCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG5cbiAgdmFyIGNoaWxkcmVuID0gKGVsZW1lbnQuY2hpbGRyZW4gfHwgW10pLm1hcChjb252ZXJ0LmJpbmQobnVsbCwgaCkpO1xuXG4gIHZhciBtaXhpbnMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gZWxlbWVudC5hdHRyaWJ1dGVzW2tleV07XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICBhY2NbJ2NsYXNzJ10gPSBjbGFzc1RvT2JqZWN0KHZhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBhY2NbJ3N0eWxlJ10gPSBzdHlsZVRvT2JqZWN0KHZhbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjLmF0dHJzW2tleV0gPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgeyAnY2xhc3MnOiB7fSwgc3R5bGU6IHt9LCBhdHRyczoge30gfSk7XG5cbiAgdmFyIF9kYXRhJGNsYXNzID0gZGF0YS5jbGFzcyxcbiAgICAgIGRDbGFzcyA9IF9kYXRhJGNsYXNzID09PSB1bmRlZmluZWQgPyB7fSA6IF9kYXRhJGNsYXNzLFxuICAgICAgX2RhdGEkc3R5bGUgPSBkYXRhLnN0eWxlLFxuICAgICAgZFN0eWxlID0gX2RhdGEkc3R5bGUgPT09IHVuZGVmaW5lZCA/IHt9IDogX2RhdGEkc3R5bGUsXG4gICAgICBfZGF0YSRhdHRycyA9IGRhdGEuYXR0cnMsXG4gICAgICBkQXR0cnMgPSBfZGF0YSRhdHRycyA9PT0gdW5kZWZpbmVkID8ge30gOiBfZGF0YSRhdHRycyxcbiAgICAgIHJlbWFpbmluZ0RhdGEgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhkYXRhLCBbJ2NsYXNzJywgJ3N0eWxlJywgJ2F0dHJzJ10pO1xuXG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBoKGVsZW1lbnQudGFnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzczogY29tYmluZUNsYXNzT2JqZWN0cyhtaXhpbnMuY2xhc3MsIGRDbGFzcyksXG4gICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG1peGlucy5zdHlsZSwgZFN0eWxlKSxcbiAgICAgIGF0dHJzOiBfZXh0ZW5kcyh7fSwgbWl4aW5zLmF0dHJzLCBkQXR0cnMpXG4gICAgfSwgcmVtYWluaW5nRGF0YSwge1xuICAgICAgcHJvcHM6IHByb3BzXG4gICAgfSksIGNoaWxkcmVuKTtcbiAgfVxufVxuXG52YXIgUFJPRFVDVElPTiA9IGZhbHNlO1xuXG50cnkge1xuICBQUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbn0gY2F0Y2ggKGUpIHt9XG5cbmZ1bmN0aW9uIGxvZyAoKSB7XG4gIGlmICghUFJPRFVDVElPTiAmJiBjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIF9jb25zb2xlO1xuXG4gICAgKF9jb25zb2xlID0gY29uc29sZSkuZXJyb3IuYXBwbHkoX2NvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2JqZWN0V2l0aEtleShrZXksIHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSA/IGRlZmluZVByb3BlcnR5KHt9LCBrZXksIHZhbHVlKSA6IHt9O1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3QocHJvcHMpIHtcbiAgdmFyIF9jbGFzc2VzO1xuXG4gIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge1xuICAgICdmYS1zcGluJzogcHJvcHMuc3BpbixcbiAgICAnZmEtcHVsc2UnOiBwcm9wcy5wdWxzZSxcbiAgICAnZmEtZncnOiBwcm9wcy5maXhlZFdpZHRoLFxuICAgICdmYS1ib3JkZXInOiBwcm9wcy5ib3JkZXIsXG4gICAgJ2ZhLWxpJzogcHJvcHMubGlzdEl0ZW0sXG4gICAgJ2ZhLWZsaXAtaG9yaXpvbnRhbCc6IHByb3BzLmZsaXAgPT09ICdob3Jpem9udGFsJyB8fCBwcm9wcy5mbGlwID09PSAnYm90aCcsXG4gICAgJ2ZhLWZsaXAtdmVydGljYWwnOiBwcm9wcy5mbGlwID09PSAndmVydGljYWwnIHx8IHByb3BzLmZsaXAgPT09ICdib3RoJ1xuICB9LCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhLScgKyBwcm9wcy5zaXplLCBwcm9wcy5zaXplICE9PSBudWxsKSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYS1yb3RhdGUtJyArIHByb3BzLnJvdGF0aW9uLCBwcm9wcy5yb3RhdGlvbiAhPT0gbnVsbCksIGRlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmEtcHVsbC0nICsgcHJvcHMucHVsbCwgcHJvcHMucHVsbCAhPT0gbnVsbCksIGRlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmEtc3dhcC1vcGFjaXR5JywgcHJvcHMuc3dhcE9wYWNpdHkpLCBfY2xhc3Nlcyk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGw7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY0NsYXNzKHRvLCB3aGF0KSB7XG4gIHZhciB2YWwgPSAodG8gfHwgJycpLmxlbmd0aCA9PT0gMCA/IFtdIDogW3RvXTtcblxuICByZXR1cm4gdmFsLmNvbmNhdCh3aGF0KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25BcmdzKGljb24kJDEpIHtcbiAgaWYgKGljb24kJDEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGljb24kJDEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGljb24kJDEpKSA9PT0gJ29iamVjdCcgJiYgaWNvbiQkMS5wcmVmaXggJiYgaWNvbiQkMS5pY29uTmFtZSkge1xuICAgIHJldHVybiBpY29uJCQxO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoaWNvbiQkMSkgJiYgaWNvbiQkMS5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IGljb24kJDFbMF0sIGljb25OYW1lOiBpY29uJCQxWzFdIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGljb24kJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHsgcHJlZml4OiAnZmFzJywgaWNvbk5hbWU6IGljb24kJDEgfTtcbiAgfVxufVxuXG52YXIgRm9udEF3ZXNvbWVJY29uID0ge1xuICBuYW1lOiAnRm9udEF3ZXNvbWVJY29uJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgYm9yZGVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGZpeGVkV2lkdGg6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZmxpcDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCddLmluZGV4T2YodmFsdWUpID4gLTE7XG4gICAgICB9XG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB0eXBlOiBbT2JqZWN0LCBBcnJheSwgU3RyaW5nXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtYXNrOiB7XG4gICAgICB0eXBlOiBbT2JqZWN0LCBBcnJheSwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGxpc3RJdGVtOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHB1bGw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1bHNlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHJvdGF0aW9uOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbOTAsIDE4MCwgMjcwXS5pbmRleE9mKHBhcnNlSW50KHZhbHVlLCAxMCkpID4gLTE7XG4gICAgICB9XG4gICAgfSxcbiAgICBzd2FwT3BhY2l0eToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnbGcnLCAneHMnLCAnc20nLCAnMXgnLCAnMngnLCAnM3gnLCAnNHgnLCAnNXgnLCAnNngnLCAnN3gnLCAnOHgnLCAnOXgnLCAnMTB4J10uaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNwaW46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgc3ltYm9sOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIHByb3BzID0gY29udGV4dC5wcm9wcztcbiAgICB2YXIgaWNvbkFyZ3MgPSBwcm9wcy5pY29uLFxuICAgICAgICBtYXNrQXJncyA9IHByb3BzLm1hc2ssXG4gICAgICAgIHN5bWJvbCA9IHByb3BzLnN5bWJvbCxcbiAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZTtcblxuICAgIHZhciBpY29uJCQxID0gbm9ybWFsaXplSWNvbkFyZ3MoaWNvbkFyZ3MpO1xuICAgIHZhciBjbGFzc2VzID0gb2JqZWN0V2l0aEtleSgnY2xhc3NlcycsIGNsYXNzTGlzdChwcm9wcykpO1xuICAgIHZhciB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCB0eXBlb2YgcHJvcHMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybShwcm9wcy50cmFuc2Zvcm0pIDogcHJvcHMudHJhbnNmb3JtKTtcbiAgICB2YXIgbWFzayA9IG9iamVjdFdpdGhLZXkoJ21hc2snLCBub3JtYWxpemVJY29uQXJncyhtYXNrQXJncykpO1xuXG4gICAgdmFyIHJlbmRlcmVkSWNvbiA9IGljb24oaWNvbiQkMSwgX2V4dGVuZHMoe30sIGNsYXNzZXMsIHRyYW5zZm9ybSwgbWFzaywgeyBzeW1ib2w6IHN5bWJvbCwgdGl0bGU6IHRpdGxlIH0pKTtcblxuICAgIGlmICghcmVuZGVyZWRJY29uKSB7XG4gICAgICByZXR1cm4gbG9nKCdDb3VsZCBub3QgZmluZCBvbmUgb3IgbW9yZSBpY29uKHMpJywgaWNvbiQkMSwgbWFzayk7XG4gICAgfVxuXG4gICAgdmFyIGFic3RyYWN0ID0gcmVuZGVyZWRJY29uLmFic3RyYWN0O1xuXG4gICAgdmFyIGNvbnZlcnRDdXJyeSA9IGNvbnZlcnQuYmluZChudWxsLCBjcmVhdGVFbGVtZW50KTtcblxuICAgIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIHt9LCBjb250ZXh0LmRhdGEpO1xuICB9XG59O1xuXG52YXIgRm9udEF3ZXNvbWVMYXllcnMgPSB7XG4gIG5hbWU6ICdGb250QXdlc29tZUxheWVycycsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGZpeGVkV2lkdGg6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIGZhbWlseVByZWZpeCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gICAgdmFyIHN0YXRpY0NsYXNzID0gY29udGV4dC5kYXRhLnN0YXRpY0NsYXNzO1xuXG5cbiAgICB2YXIgY2xhc3NlcyA9IFtmYW1pbHlQcmVmaXggKyAnLWxheWVycyddLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShjb250ZXh0LnByb3BzLmZpeGVkV2lkdGggPyBbZmFtaWx5UHJlZml4ICsgJy1mdyddIDogW10pKTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgY29udGV4dC5kYXRhLCB7XG4gICAgICBzdGF0aWNDbGFzczogYWRkU3RhdGljQ2xhc3Moc3RhdGljQ2xhc3MsIGNsYXNzZXMpXG4gICAgfSksIGNvbnRleHQuY2hpbGRyZW4pO1xuICB9XG59O1xuXG52YXIgRm9udEF3ZXNvbWVMYXllcnNUZXh0ID0ge1xuICBuYW1lOiAnRm9udEF3ZXNvbWVMYXllcnNUZXh0JyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIHByb3BzID0gY29udGV4dC5wcm9wcztcblxuICAgIHZhciB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCB0eXBlb2YgcHJvcHMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybShwcm9wcy50cmFuc2Zvcm0pIDogcHJvcHMudHJhbnNmb3JtKTtcblxuICAgIHZhciByZW5kZXJlZFRleHQgPSB0ZXh0KHByb3BzLnZhbHVlLnRvU3RyaW5nKCksIF9leHRlbmRzKHt9LCB0cmFuc2Zvcm0pKTtcblxuICAgIHZhciBhYnN0cmFjdCA9IHJlbmRlcmVkVGV4dC5hYnN0cmFjdDtcblxuXG4gICAgdmFyIGNvbnZlcnRDdXJyeSA9IGNvbnZlcnQuYmluZChudWxsLCBjcmVhdGVFbGVtZW50KTtcblxuICAgIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIHt9LCBjb250ZXh0LmRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBGb250QXdlc29tZUljb24sIEZvbnRBd2Vzb21lTGF5ZXJzLCBGb250QXdlc29tZUxheWVyc1RleHQgfTtcbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJtZDpiZy13aGl0ZSBjb250YWluZXIgbWQ6bXgtNCBtZDpteC1hdXRvIG1kOnNoYWRvdy1sZyByb3VuZGVkIG1kOm10LTMyIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgbWQ6bWF4LXctMnhsIGxnOm1heC13LTR4bCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgPGRpdiBjbGFzcz1cIm1kOnctMS8yIHRleHQtY2VudGVyIHB4LTggcHktNCBtZDpibG9ja1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXRlYWwtNTAwIGZvbnQtYm9sZCB0ZXh0LTR4bCBtZDpwdC04XCI+R09PRFdPUks8L2Rpdj5cbiAgICA8cCBjbGFzcz1cInRleHQtdGVhbC01MDAgdGV4dC14bFwiPiBTZW5zaWJsZSBBcHByb2FjaCB0byBXb3JrICYgQ29sbGFib3JhdGlvbiBmb3IgU29mdHdhcmUgVGVhbXMgPC9wPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlL3JlZ2lzdGVyLnN2Z1wiIGFsdD1cIndvcmsgZGVza1wiIGNsYXNzPVwicHQtMTYgaGlkZGVuIG1kOmJsb2NrXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6YmctaW5kaWdvLTEwMCBtZDp3LTEvMiBwLThcIj5cbiAgICA8Zm9ybSByb2xlPVwiZm9ybVwiIG1ldGhvZD1cIlBPU1RcIiA6YWN0aW9uPVwidXJsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJ0b2tlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICA8cCBjbGFzcz1cInB5LTRcIj5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTgwMFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1yZWQtNDAwIGJsb2NrIHB0LTJcIiB2LWlmPVwiZXJyb3JzXCI+e3sgZXJyb3JzLm5hbWUgfX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJweS00XCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktODAwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXJlZC00MDAgYmxvY2sgcHQtMlwiIHYtaWY9XCJlcnJvcnNcIj57eyBlcnJvcnMudXNlcm5hbWUgfX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJweS00XCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktODAwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1yZWQtNDAwIGJsb2NrIHB0LTJcIiB2LWlmPVwiZXJyb3JzXCI+e3sgZXJyb3JzLmVtYWlsIH19PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicHktNFwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTgwMFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtcmVkLTQwMCBibG9jayBwdC0yXCIgdi1pZj1cImVycm9yc1wiPnt7IGVycm9ycy5wYXNzd29yZCB9fTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInB5LTRcIj5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIiBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktODAwXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBZb3VyIFBhc3N3b3JkXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXJlZC00MDAgYmxvY2sgcHQtMlwiIHYtaWY9XCJlcnJvcnNcIj57eyBlcnJvcnMucGFzc3dvcmRfY29uZmlybWF0aW9uIH19PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicHktNFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmctdGVhbC01MDAgaG92ZXI6YmctdGVhbC02MDAgdGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtbWVkaXVtIHB5LTIgcHgtNCByb3VuZGVkXCI+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICB0b2tlbjogTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICB1cmw6IHVybFxuICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29ubmVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25uZWN0b3Igb3B0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aEVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy9hdXRoJyxcbiAgICAgICAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgICAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGhvc3Q6IG51bGwsXG4gICAgICAgICAgICBrZXk6IG51bGwsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdBcHAuRXZlbnRzJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZSB0aGUgY3VzdG9tIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdHMuXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKENvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dGguaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3QgdGhlIENTUkYgdG9rZW4gZnJvbSB0aGUgcGFnZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NzcmZUb2tlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjc3JmVG9rZW4oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydMYXJhdmVsJ10gJiYgd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3NyZlRva2VuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIChzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29ubmVjdG9yO1xufSgpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIGJhc2ljIGNoYW5uZWwuXG4gKi9cbnZhciBDaGFubmVsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICBrZXk6ICdsaXN0ZW5Gb3JXaGlzcGVyJyxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgYSB3aGlzcGVyIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdub3RpZmljYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLklsbHVtaW5hdGVcXFxcTm90aWZpY2F0aW9uc1xcXFxFdmVudHNcXFxcQnJvYWRjYXN0Tm90aWZpY2F0aW9uQ3JlYXRlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENoYW5uZWw7XG59KCk7XG5cbi8qKlxuICogRXZlbnQgbmFtZSBmb3JtYXR0ZXJcbiAqL1xudmFyIEV2ZW50Rm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFdmVudEZvcm1hdHRlcihuYW1lc3BhY2UpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRGb3JtYXR0ZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgZ2l2ZW4gZXZlbnQgbmFtZS5cbiAgICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoRXZlbnRGb3JtYXR0ZXIsIFt7XG4gICAgICAgIGtleTogJ2Zvcm1hdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFyQXQoMCkgPT09ICcuJyB8fCBldmVudC5jaGFyQXQoMCkgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSB0aGlzLm5hbWVzcGFjZSArICcuJyArIGV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGV2ZW50IG5hbWVzcGFjZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE5hbWVzcGFjZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROYW1lc3BhY2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEV2ZW50Rm9ybWF0dGVyO1xufSgpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBjaGFubmVsLlxuICovXG52YXIgUHVzaGVyQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlckNoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQdXNoZXJDaGFubmVsKHB1c2hlciwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDaGFubmVsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIFB1c2hlciBjaGFubmVsLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVW5zdWJzY3JpYmUgZnJvbSBhIFB1c2hlciBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlckNoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBwcml2YXRlIGNoYW5uZWwuXG4gKi9cbnZhciBQdXNoZXJQcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBpbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlclByaXZhdGVDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByaXZhdGVDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiAnd2hpc3BlcicsXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQdXNoZXJQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByZXNlbmNlIGNoYW5uZWwuXG4gKi9cbnZhciBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1lbWJlcnNba107XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIGNoYW5uZWwuXG4gKi9cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBldmVudCBjYWxsYmFja3MgYXBwbGllZCB0byB0aGUgY2hhbm5lbC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlUmVjb25uZWN0b3IoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gYSBTb2NrZXQuaW8gY2hhbm5lbC5cbiAgICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuc3Vic2NyaWJlIGZyb20gY2hhbm5lbCBhbmQgdWJpbmQgZXZlbnQgY2FsbGJhY2tzLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5yZW1vdmVMaXN0ZW5lcihuYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIHRoZSBjaGFubmVsJ3Mgc29ja2V0IHRvIGFuIGV2ZW50IGFuZCBzdG9yZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09IGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0YWNoIGEgJ3JlY29ubmVjdCcgbGlzdGVuZXIgYW5kIGJpbmQgdGhlIGV2ZW50LlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29uZmlndXJlUmVjb25uZWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlUmVjb25uZWN0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCB0byBhbiBldmVudCBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbmJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgZnJvbSBhbGwgc3RvcmVkIGV2ZW50IGNhbGxiYWNrcy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczQuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFNvY2tldC5pbyBwcmVzZW5jZSBjaGFubmVsLlxuICovXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbDtcbn0oU29ja2V0SW9DaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gcHJlc2VuY2UgY2hhbm5lbC5cbiAqL1xudmFyIFNvY2tldElvUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb1ByaXZhdGVDaGFubikge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBfU29ja2V0SW9Qcml2YXRlQ2hhbm4pO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpqb2luaW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpsZWF2aW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIGNoYW5uZWwuXG4gKi9cbnZhciBOdWxsQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICBpbmhlcml0cyhOdWxsQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIE51bGxDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVsbENoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdWxsQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTnVsbENoYW5uZWwsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIGNoYW5uZWwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIGZyb20gYSBjaGFubmVsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge31cbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbGlzdGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVsbENoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJpdmF0ZSBjaGFubmVsLlxuICovXG52YXIgTnVsbFByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9OdWxsQ2hhbm5lbCkge1xuICBpbmhlcml0cyhOdWxsUHJpdmF0ZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByaXZhdGVDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxQcml2YXRlQ2hhbm5lbCk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bGxQcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bGxQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTnVsbFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogJ3doaXNwZXInLFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bGxQcml2YXRlQ2hhbm5lbDtcbn0oTnVsbENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJlc2VuY2UgY2hhbm5lbC5cbiAqL1xudmFyIE51bGxQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX051bGxDaGFubmVsKSB7XG4gIGluaGVyaXRzKE51bGxQcmVzZW5jZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsUHJlc2VuY2VDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVsbFByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bGxQcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE51bGxQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiAnaGVyZScsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2pvaW5pbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xlYXZpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3doaXNwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdWxsUHJlc2VuY2VDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgY29ubmVjdG9yIHRvIFB1c2hlci5cbiAqL1xudmFyIFB1c2hlckNvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG9mIHRoZSBzdWJzY3JpYmVkIGNoYW5uZWwgbmFtZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDb25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDb25uZWN0b3IpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGZyZXNoIFB1c2hlciBjb25uZWN0aW9uLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlciA9IHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlc2VuY2VDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5sZWF2ZUNoYW5uZWwobmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzY29ubmVjdCBQdXNoZXIgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIGNvbm5uZWN0b3IgdG8gYSBTb2NrZXQuaW8gc2VydmVyLlxuICovXG52YXIgU29ja2V0SW9Db25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ29ubmVjdG9yKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9Db25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0Nvbm5lY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZnJlc2ggU29ja2V0LmlvIGNvbm5lY3Rpb24uXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgc29ja2V0LmlvIG1vZHVsZSBmcm9tIGdsb2JhbCBzY29wZSBvciBvcHRpb25zLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U29ja2V0SU8nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SU8oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ja2V0LmlvIGNsaWVudCBub3QgZm91bmQuIFNob3VsZCBiZSBnbG9iYWxseSBhdmFpbGFibGUgb3IgcGFzc2VkIHZpYSBvcHRpb25zLmNsaWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBTb2NrZXRJb0NoYW5uZWwodGhpcy5zb2NrZXQsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmxlYXZlQ2hhbm5lbChuYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNjb25uZWN0IFNvY2tldGlvIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIG51bGwgY29ubmVjdG9yLlxuICovXG52YXIgTnVsbENvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gIGluaGVyaXRzKE51bGxDb25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIE51bGxDb25uZWN0b3IoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbENvbm5lY3Rvcik7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdWxsQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVsbENvbm5lY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZyZXNoIGNvbm5lY3Rpb24uXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoTnVsbENvbm5lY3RvciwgW3tcbiAgICBrZXk6ICdjb25uZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gYSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsaXN0ZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY2hhbm5lbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcml2YXRlQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcmVzZW5jZUNoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge31cbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuICdmYWtlLXNvY2tldC1pZCc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3QgdGhlIGNvbm5lY3Rpb24uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgLy9cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bGxDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB0aGUgcHJpbWFyeSBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggYnJvYWRjYXN0aW5nLlxuICovXG5cbnZhciBFY2hvID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFY2hvKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRWNobyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcmNlcHRvcnMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhFY2hvLCBbe1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwoX2NoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5jaGFubmVsKF9jaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdwdXNoZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnc29ja2V0LmlvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFNvY2tldElvQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnbnVsbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBOdWxsQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2Nvbm5lY3QgZnJvbSB0aGUgRWNobyBzZXJ2ZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbihjaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShjaGFubmVsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5sZWF2ZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIFNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5zb2NrZXRJZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciAzcmQgcGFydHkgcmVxdWVzdCBpbnRlcmNlcHRpb3JzLiBUaGVzZSBhcmUgdXNlZCB0byBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAqIHNlbmQgYSBjb25uZWN0aW9ucyBzb2NrZXQgaWQgdG8gYSBMYXJhdmVsIGFwcCB3aXRoIGEgWC1Tb2NrZXQtSWQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJJbnRlcmNlcHRvcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcnMoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhIFZ1ZSBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhbiBBeGlvcyBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzWydYLVNvY2tldC1JZCddID0gX3RoaXMyLnNvY2tldElkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgalF1ZXJ5IEFqYXhTZXR1cCB0byBhZGQgdGhlIFgtU29ja2V0LUlEIGhlYWRlci5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyalF1ZXJ5QWpheFNldHVwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5LmFqYXggIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuYWpheFNldHVwKHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gYmVmb3JlU2VuZCh4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVNvY2tldC1JZCcsIF90aGlzMy5zb2NrZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFY2hvO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFY2hvO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9saW5raWZ5LWVsZW1lbnQnKS5kZWZhdWx0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9saW5raWZ5Jyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbGlua2lmeSA9IHJlcXVpcmUoJy4vbGlua2lmeScpO1xuXG52YXIgbGlua2lmeSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9saW5raWZ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIHRva2VuaXplID0gbGlua2lmeS50b2tlbml6ZSxcbiAgICBvcHRpb25zID0gbGlua2lmeS5vcHRpb25zOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdExpbmtpZnkgYSBIVE1MIERPTSBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIE9wdGlvbnMgPSBvcHRpb25zLk9wdGlvbnM7XG5cblxudmFyIFRFWFRfVE9LRU4gPSBsaW5raWZ5LnBhcnNlci5UT0tFTlMuVEVYVDtcblxudmFyIEhUTUxfTk9ERSA9IDEsXG4gICAgVFhUX05PREUgPSAzO1xuXG4vKipcblx0R2l2ZW4gYSBwYXJlbnQgZWxlbWVudCBhbmQgY2hpbGQgbm9kZSB0aGF0IHRoZSBwYXJlbnQgY29udGFpbnMsIHJlcGxhY2VzXG5cdHRoYXQgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gYXJyYXkgb2YgbmV3IGNoaWxkcmVuXG4qL1xuZnVuY3Rpb24gcmVwbGFjZUNoaWxkV2l0aENoaWxkcmVuKHBhcmVudCwgb2xkQ2hpbGQsIG5ld0NoaWxkcmVuKSB7XG5cdHZhciBsYXN0TmV3Q2hpbGQgPSBuZXdDaGlsZHJlbltuZXdDaGlsZHJlbi5sZW5ndGggLSAxXTtcblx0cGFyZW50LnJlcGxhY2VDaGlsZChsYXN0TmV3Q2hpbGQsIG9sZENoaWxkKTtcblx0Zm9yICh2YXIgaSA9IG5ld0NoaWxkcmVuLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZHJlbltpXSwgbGFzdE5ld0NoaWxkKTtcblx0XHRsYXN0TmV3Q2hpbGQgPSBuZXdDaGlsZHJlbltpXTtcblx0fVxufVxuXG4vKipcblx0R2l2ZW4gYW4gYXJyYXkgb2YgTXVsdGlUb2tlbnMsIHJldHVybiBhbiBhcnJheSBvZiBOb2RlcyB0aGF0IGFyZSBlaXRoZXJcblx0KGEpIFBsYWluIFRleHQgbm9kZXMgKG5vZGUgdHlwZSAzKVxuXHQoYikgQW5jaG9yIHRhZyBub2RlcyAodXN1YWxseSwgdW5sZXNzIHRhZyBuYW1lIGlzIG92ZXJyaWRkZW4gaW4gdGhlIG9wdGlvbnMpXG5cblx0VGFrZXMgdGhlIHNhbWUgb3B0aW9ucyBhcyBsaW5raWZ5RWxlbWVudCBhbmQgYW4gb3B0aW9uYWwgZG9jIGVsZW1lbnRcblx0KHRoaXMgc2hvdWxkIGJlIHBhc3NlZCBpbiBieSBsaW5raWZ5RWxlbWVudClcbiovXG5mdW5jdGlvbiB0b2tlbnNUb05vZGVzKHRva2Vucywgb3B0cywgZG9jKSB7XG5cdHZhciByZXN1bHQgPSBbXTtcblxuXHRmb3IgKHZhciBfaXRlcmF0b3IgPSB0b2tlbnMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG5cdFx0dmFyIF9yZWY7XG5cblx0XHRpZiAoX2lzQXJyYXkpIHtcblx0XHRcdGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcblx0XHRcdF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcblx0XHRcdGlmIChfaS5kb25lKSBicmVhaztcblx0XHRcdF9yZWYgPSBfaS52YWx1ZTtcblx0XHR9XG5cblx0XHR2YXIgdG9rZW4gPSBfcmVmO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09ICdubCcgJiYgb3B0cy5ubDJicikge1xuXHRcdFx0cmVzdWx0LnB1c2goZG9jLmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fSBlbHNlIGlmICghdG9rZW4uaXNMaW5rIHx8ICFvcHRzLmNoZWNrKHRva2VuKSkge1xuXHRcdFx0cmVzdWx0LnB1c2goZG9jLmNyZWF0ZVRleHROb2RlKHRva2VuLnRvU3RyaW5nKCkpKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhciBfb3B0cyRyZXNvbHZlID0gb3B0cy5yZXNvbHZlKHRva2VuKSxcblx0XHQgICAgZm9ybWF0dGVkID0gX29wdHMkcmVzb2x2ZS5mb3JtYXR0ZWQsXG5cdFx0ICAgIGZvcm1hdHRlZEhyZWYgPSBfb3B0cyRyZXNvbHZlLmZvcm1hdHRlZEhyZWYsXG5cdFx0ICAgIHRhZ05hbWUgPSBfb3B0cyRyZXNvbHZlLnRhZ05hbWUsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9vcHRzJHJlc29sdmUuY2xhc3NOYW1lLFxuXHRcdCAgICB0YXJnZXQgPSBfb3B0cyRyZXNvbHZlLnRhcmdldCxcblx0XHQgICAgZXZlbnRzID0gX29wdHMkcmVzb2x2ZS5ldmVudHMsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBfb3B0cyRyZXNvbHZlLmF0dHJpYnV0ZXM7XG5cblx0XHQvLyBCdWlsZCB0aGUgbGlua1xuXG5cblx0XHR2YXIgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZm9ybWF0dGVkSHJlZik7XG5cblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCB0YXJnZXQpO1xuXHRcdH1cblxuXHRcdC8vIEJ1aWxkIHVwIGFkZGl0aW9uYWwgYXR0cmlidXRlc1xuXHRcdGlmIChhdHRyaWJ1dGVzKSB7XG5cdFx0XHRmb3IgKHZhciBhdHRyIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50cykge1xuXHRcdFx0Zm9yICh2YXIgZXZlbnQgaW4gZXZlbnRzKSB7XG5cdFx0XHRcdGlmIChsaW5rLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50c1tldmVudF0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmsuYXR0YWNoRXZlbnQpIHtcblx0XHRcdFx0XHRsaW5rLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZXZlbnRzW2V2ZW50XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRsaW5rLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShmb3JtYXR0ZWQpKTtcblx0XHRyZXN1bHQucHVzaChsaW5rKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJlcXVpcmVzIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbmZ1bmN0aW9uIGxpbmtpZnlFbGVtZW50SGVscGVyKGVsZW1lbnQsIG9wdHMsIGRvYykge1xuXG5cdC8vIENhbiB0aGUgZWxlbWVudCBiZSBsaW5raWZpZWQ/XG5cdGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBIVE1MX05PREUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsaW5raWZ5ICcgKyBlbGVtZW50ICsgJyAtIEludmFsaWQgRE9NIE5vZGUgdHlwZScpO1xuXHR9XG5cblx0dmFyIGlnbm9yZVRhZ3MgPSBvcHRzLmlnbm9yZVRhZ3M7XG5cblx0Ly8gSXMgdGhpcyBlbGVtZW50IGFscmVhZHkgYSBsaW5rP1xuXHRpZiAoZWxlbWVudC50YWdOYW1lID09PSAnQScgfHwgb3B0aW9ucy5jb250YWlucyhpZ25vcmVUYWdzLCBlbGVtZW50LnRhZ05hbWUpKSB7XG5cdFx0Ly8gTm8gbmVlZCB0byBsaW5raWZ5XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHR2YXIgY2hpbGRFbGVtZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuXG5cdHdoaWxlIChjaGlsZEVsZW1lbnQpIHtcblx0XHR2YXIgc3RyID0gdm9pZCAwLFxuXHRcdCAgICB0b2tlbnMgPSB2b2lkIDAsXG5cdFx0ICAgIG5vZGVzID0gdm9pZCAwO1xuXG5cdFx0c3dpdGNoIChjaGlsZEVsZW1lbnQubm9kZVR5cGUpIHtcblx0XHRcdGNhc2UgSFRNTF9OT0RFOlxuXHRcdFx0XHRsaW5raWZ5RWxlbWVudEhlbHBlcihjaGlsZEVsZW1lbnQsIG9wdHMsIGRvYyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUWFRfTk9ERTpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0ciA9IGNoaWxkRWxlbWVudC5ub2RlVmFsdWU7XG5cdFx0XHRcdFx0dG9rZW5zID0gdG9rZW5pemUoc3RyKTtcblxuXHRcdFx0XHRcdGlmICh0b2tlbnMubGVuZ3RoID09PSAwIHx8IHRva2Vucy5sZW5ndGggPT09IDEgJiYgdG9rZW5zWzBdIGluc3RhbmNlb2YgVEVYVF9UT0tFTikge1xuXHRcdFx0XHRcdFx0Ly8gTm8gbm9kZSByZXBsYWNlbWVudCByZXF1aXJlZFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bm9kZXMgPSB0b2tlbnNUb05vZGVzKHRva2Vucywgb3B0cywgZG9jKTtcblxuXHRcdFx0XHRcdC8vIFN3YXAgb3V0IHRoZSBjdXJyZW50IGNoaWxkIGZvciB0aGUgc2V0IG9mIG5vZGVzXG5cdFx0XHRcdFx0cmVwbGFjZUNoaWxkV2l0aENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkRWxlbWVudCwgbm9kZXMpO1xuXG5cdFx0XHRcdFx0Ly8gc28gdGhhdCB0aGUgY29ycmVjdCBzaWJsaW5nIGlzIHNlbGVjdGVkIG5leHRcblx0XHRcdFx0XHRjaGlsZEVsZW1lbnQgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2hpbGRFbGVtZW50ID0gY2hpbGRFbGVtZW50Lm5leHRTaWJsaW5nO1xuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGxpbmtpZnlFbGVtZW50KGVsZW1lbnQsIG9wdHMpIHtcblx0dmFyIGRvYyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cblxuXHR0cnkge1xuXHRcdGRvYyA9IGRvYyB8fCBkb2N1bWVudCB8fCB3aW5kb3cgJiYgd2luZG93LmRvY3VtZW50IHx8IGdsb2JhbCAmJiBnbG9iYWwuZG9jdW1lbnQ7XG5cdH0gY2F0Y2ggKGUpIHsvKiBkbyBub3RoaW5nIGZvciBub3cgKi99XG5cblx0aWYgKCFkb2MpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGRvY3VtZW50IGltcGxlbWVudGF0aW9uLiAnICsgJ0lmIHlvdSBhcmUgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBsaWtlIE5vZGUuanMsICcgKyAncGFzcyB0aGUgZG9jdW1lbnQgaW1wbGVtZW50YXRpb24gYXMgdGhlIHRoaXJkIGFyZ3VtZW50IHRvIGxpbmtpZnlFbGVtZW50LicpO1xuXHR9XG5cblx0b3B0cyA9IG5ldyBPcHRpb25zKG9wdHMpO1xuXHRyZXR1cm4gbGlua2lmeUVsZW1lbnRIZWxwZXIoZWxlbWVudCwgb3B0cywgZG9jKTtcbn1cblxuLy8gTWFpbnRhaW4gcmVmZXJlbmNlIHRvIHRoZSByZWN1cnNpdmUgaGVscGVyIHRvIGNhY2hlIG9wdGlvbi1ub3JtYWxpemF0aW9uXG5saW5raWZ5RWxlbWVudC5oZWxwZXIgPSBsaW5raWZ5RWxlbWVudEhlbHBlcjtcbmxpbmtpZnlFbGVtZW50Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChvcHRzKSB7XG5cdHJldHVybiBuZXcgT3B0aW9ucyhvcHRzKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGxpbmtpZnlFbGVtZW50OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudG9rZW5pemUgPSBleHBvcnRzLnRlc3QgPSBleHBvcnRzLnNjYW5uZXIgPSBleHBvcnRzLnBhcnNlciA9IGV4cG9ydHMub3B0aW9ucyA9IGV4cG9ydHMuaW5oZXJpdHMgPSBleHBvcnRzLmZpbmQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2xhc3MgPSByZXF1aXJlKCcuL2xpbmtpZnkvdXRpbHMvY2xhc3MnKTtcblxudmFyIF9vcHRpb25zID0gcmVxdWlyZSgnLi9saW5raWZ5L3V0aWxzL29wdGlvbnMnKTtcblxudmFyIG9wdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfb3B0aW9ucyk7XG5cbnZhciBfc2Nhbm5lciA9IHJlcXVpcmUoJy4vbGlua2lmeS9jb3JlL3NjYW5uZXInKTtcblxudmFyIHNjYW5uZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc2Nhbm5lcik7XG5cbnZhciBfcGFyc2VyID0gcmVxdWlyZSgnLi9saW5raWZ5L2NvcmUvcGFyc2VyJyk7XG5cbnZhciBwYXJzZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcGFyc2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuaWYgKCFBcnJheS5pc0FycmF5KSB7XG5cdEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJnKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9O1xufVxuXG4vKipcblx0Q29udmVydHMgYSBzdHJpbmcgaW50byB0b2tlbnMgdGhhdCByZXByZXNlbnQgbGlua2FibGUgYW5kIG5vbi1saW5rYWJsZSBiaXRzXG5cdEBtZXRob2QgdG9rZW5pemVcblx0QHBhcmFtIHtTdHJpbmd9IHN0clxuXHRAcmV0dXJuIHtBcnJheX0gdG9rZW5zXG4qL1xudmFyIHRva2VuaXplID0gZnVuY3Rpb24gdG9rZW5pemUoc3RyKSB7XG5cdHJldHVybiBwYXJzZXIucnVuKHNjYW5uZXIucnVuKHN0cikpO1xufTtcblxuLyoqXG5cdFJldHVybnMgYSBsaXN0IG9mIGxpbmthYmxlIGl0ZW1zIGluIHRoZSBnaXZlbiBzdHJpbmcuXG4qL1xudmFyIGZpbmQgPSBmdW5jdGlvbiBmaW5kKHN0cikge1xuXHR2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuXHR2YXIgdG9rZW5zID0gdG9rZW5pemUoc3RyKTtcblx0dmFyIGZpbHRlcmVkID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cdFx0aWYgKHRva2VuLmlzTGluayAmJiAoIXR5cGUgfHwgdG9rZW4udHlwZSA9PT0gdHlwZSkpIHtcblx0XHRcdGZpbHRlcmVkLnB1c2godG9rZW4udG9PYmplY3QoKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZpbHRlcmVkO1xufTtcblxuLyoqXG5cdElzIHRoZSBnaXZlbiBzdHJpbmcgdmFsaWQgbGlua2FibGUgdGV4dCBvZiBzb21lIHNvcnRcblx0Tm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgdHJpbSB0aGUgdGV4dCBmb3IgeW91LlxuXG5cdE9wdGlvbmFsbHkgcGFzcyBpbiBhIHNlY29uZCBgdHlwZWAgcGFyYW0sIHdoaWNoIGlzIHRoZSB0eXBlIG9mIGxpbmsgdG8gdGVzdFxuXHRmb3IuXG5cblx0Rm9yIGV4YW1wbGUsXG5cblx0XHR0ZXN0KHN0ciwgJ2VtYWlsJyk7XG5cblx0V2lsbCByZXR1cm4gYHRydWVgIGlmIHN0ciBpcyBhIHZhbGlkIGVtYWlsLlxuKi9cbnZhciB0ZXN0ID0gZnVuY3Rpb24gdGVzdChzdHIpIHtcblx0dmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cblx0dmFyIHRva2VucyA9IHRva2VuaXplKHN0cik7XG5cdHJldHVybiB0b2tlbnMubGVuZ3RoID09PSAxICYmIHRva2Vuc1swXS5pc0xpbmsgJiYgKCF0eXBlIHx8IHRva2Vuc1swXS50eXBlID09PSB0eXBlKTtcbn07XG5cbi8vIFNjYW5uZXIgYW5kIHBhcnNlciBwcm92aWRlIHN0YXRlcyBhbmQgdG9rZW5zIGZvciB0aGUgbGV4aWNvZ3JhcGhpYyBzdGFnZVxuLy8gKHdpbGwgYmUgdXNlZCB0byBhZGQgYWRkaXRpb25hbCBsaW5rIHR5cGVzKVxuZXhwb3J0cy5maW5kID0gZmluZDtcbmV4cG9ydHMuaW5oZXJpdHMgPSBfY2xhc3MuaW5oZXJpdHM7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuZXhwb3J0cy5wYXJzZXIgPSBwYXJzZXI7XG5leHBvcnRzLnNjYW5uZXIgPSBzY2FubmVyO1xuZXhwb3J0cy50ZXN0ID0gdGVzdDtcbmV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0YXJ0ID0gZXhwb3J0cy5ydW4gPSBleHBvcnRzLlRPS0VOUyA9IGV4cG9ydHMuU3RhdGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlJyk7XG5cbnZhciBfbXVsdGkgPSByZXF1aXJlKCcuL3Rva2Vucy9tdWx0aScpO1xuXG52YXIgTVVMVElfVE9LRU5TID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX211bHRpKTtcblxudmFyIF90ZXh0ID0gcmVxdWlyZSgnLi90b2tlbnMvdGV4dCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vKipcblx0Tm90IGV4YWN0bHkgcGFyc2VyLCBtb3JlIGxpa2UgdGhlIHNlY29uZC1zdGFnZSBzY2FubmVyIChhbHRob3VnaCB3ZSBjYW5cblx0dGhlb3JldGljYWxseSBob3Rzd2FwIHRoZSBjb2RlIGhlcmUgd2l0aCBhIHJlYWwgcGFyc2VyIGluIHRoZSBmdXR1cmUuLi4gYnV0XG5cdGZvciBhIGxpdHRsZSBVUkwtZmluZGluZyB1dGlsaXR5IGFic3RyYWN0IHN5bnRheCB0cmVlcyBtYXkgYmUgYSBsaXR0bGVcblx0b3ZlcmtpbGwpLlxuXG5cdFVSTCBmb3JtYXQ6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVVJJX3NjaGVtZVxuXHRFbWFpbCBmb3JtYXQ6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRW1haWxfYWRkcmVzcyAobGlua3MgdG8gUkZDIGluXG5cdHJlZmVyZW5jZSlcblxuXHRAbW9kdWxlIGxpbmtpZnlcblx0QHN1Ym1vZHVsZSBwYXJzZXJcblx0QG1haW4gcGFyc2VyXG4qL1xuXG52YXIgbWFrZVN0YXRlID0gZnVuY3Rpb24gbWFrZVN0YXRlKHRva2VuQ2xhc3MpIHtcblx0cmV0dXJuIG5ldyBfc3RhdGUuVG9rZW5TdGF0ZSh0b2tlbkNsYXNzKTtcbn07XG5cbi8vIFRoZSB1bml2ZXJzYWwgc3RhcnRpbmcgc3RhdGUuXG52YXIgU19TVEFSVCA9IG1ha2VTdGF0ZSgpO1xuXG4vLyBJbnRlcm1lZGlhdGUgc3RhdGVzIGZvciBVUkxzLiBOb3RlIHRoYXQgZG9tYWlucyB0aGF0IGJlZ2luIHdpdGggYSBwcm90b2NvbFxuLy8gYXJlIHRyZWF0ZWQgc2xpZ2hseSBkaWZmZXJlbnRseSBmcm9tIHRob3NlIHRoYXQgZG9uJ3QuXG52YXIgU19QUk9UT0NPTCA9IG1ha2VTdGF0ZSgpOyAvLyBlLmcuLCAnaHR0cDonXG52YXIgU19NQUlMVE8gPSBtYWtlU3RhdGUoKTsgLy8gJ21haWx0bzonXG52YXIgU19QUk9UT0NPTF9TTEFTSCA9IG1ha2VTdGF0ZSgpOyAvLyBlLmcuLCAnLycsICdodHRwOi8nJ1xudmFyIFNfUFJPVE9DT0xfU0xBU0hfU0xBU0ggPSBtYWtlU3RhdGUoKTsgLy8gZS5nLiwgJy8vJywgJ2h0dHA6Ly8nXG52YXIgU19ET01BSU4gPSBtYWtlU3RhdGUoKTsgLy8gcGFyc2VkIHN0cmluZyBlbmRzIHdpdGggYSBwb3RlbnRpYWwgZG9tYWluIG5hbWUgKEEpXG52YXIgU19ET01BSU5fRE9UID0gbWFrZVN0YXRlKCk7IC8vIChBKSBkb21haW4gZm9sbG93ZWQgYnkgRE9UXG52YXIgU19UTEQgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIChBKSBTaW1wbGVzdCBwb3NzaWJsZSBVUkwgd2l0aCBubyBxdWVyeSBzdHJpbmdcbnZhciBTX1RMRF9DT0xPTiA9IG1ha2VTdGF0ZSgpOyAvLyAoQSkgVVJMIGZvbGxvd2VkIGJ5IGNvbG9uIChwb3RlbnRpYWwgcG9ydCBudW1iZXIgaGVyZSlcbnZhciBTX1RMRF9QT1JUID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBUTEQgZm9sbG93ZWQgYnkgYSBwb3J0IG51bWJlclxudmFyIFNfVVJMID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBMb25nIFVSTCB3aXRoIG9wdGlvbmFsIHBvcnQgYW5kIG1heWJlIHF1ZXJ5IHN0cmluZ1xudmFyIFNfVVJMX05PTl9BQ0NFUFRJTkcgPSBtYWtlU3RhdGUoKTsgLy8gVVJMIGZvbGxvd2VkIGJ5IHNvbWUgc3ltYm9scyAod2lsbCBub3QgYmUgcGFydCBvZiB0aGUgZmluYWwgVVJMKVxudmFyIFNfVVJMX09QRU5CUkFDRSA9IG1ha2VTdGF0ZSgpOyAvLyBVUkwgZm9sbG93ZWQgYnkge1xudmFyIFNfVVJMX09QRU5CUkFDS0VUID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSBbXG52YXIgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVCA9IG1ha2VTdGF0ZSgpOyAvLyBVUkwgZm9sbG93ZWQgYnkgPFxudmFyIFNfVVJMX09QRU5QQVJFTiA9IG1ha2VTdGF0ZSgpOyAvLyBVUkwgZm9sbG93ZWQgYnkgKFxudmFyIFNfVVJMX09QRU5CUkFDRV9RID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBVUkwgZm9sbG93ZWQgYnkgeyBhbmQgc29tZSBzeW1ib2xzIHRoYXQgdGhlIFVSTCBjYW4gZW5kIGl0XG52YXIgU19VUkxfT1BFTkJSQUNLRVRfUSA9IG1ha2VTdGF0ZShfbXVsdGkuVVJMKTsgLy8gVVJMIGZvbGxvd2VkIGJ5IFsgYW5kIHNvbWUgc3ltYm9scyB0aGF0IHRoZSBVUkwgY2FuIGVuZCBpdFxudmFyIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfUSA9IG1ha2VTdGF0ZShfbXVsdGkuVVJMKTsgLy8gVVJMIGZvbGxvd2VkIGJ5IDwgYW5kIHNvbWUgc3ltYm9scyB0aGF0IHRoZSBVUkwgY2FuIGVuZCBpdFxudmFyIFNfVVJMX09QRU5QQVJFTl9RID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBVUkwgZm9sbG93ZWQgYnkgKCBhbmQgc29tZSBzeW1ib2xzIHRoYXQgdGhlIFVSTCBjYW4gZW5kIGl0XG52YXIgU19VUkxfT1BFTkJSQUNFX1NZTVMgPSBtYWtlU3RhdGUoKTsgLy8gU19VUkxfT1BFTkJSQUNFX1EgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzIGl0IGNhbm5vdCBlbmQgaXRcbnZhciBTX1VSTF9PUEVOQlJBQ0tFVF9TWU1TID0gbWFrZVN0YXRlKCk7IC8vIFNfVVJMX09QRU5CUkFDS0VUX1EgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzIGl0IGNhbm5vdCBlbmQgaXRcbnZhciBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1NZTVMgPSBtYWtlU3RhdGUoKTsgLy8gU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RIGZvbGxvd2VkIGJ5IHNvbWUgc3ltYm9scyBpdCBjYW5ub3QgZW5kIGl0XG52YXIgU19VUkxfT1BFTlBBUkVOX1NZTVMgPSBtYWtlU3RhdGUoKTsgLy8gU19VUkxfT1BFTlBBUkVOX1EgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzIGl0IGNhbm5vdCBlbmQgaXRcbnZhciBTX0VNQUlMX0RPTUFJTiA9IG1ha2VTdGF0ZSgpOyAvLyBwYXJzZWQgc3RyaW5nIHN0YXJ0cyB3aXRoIGxvY2FsIGVtYWlsIGluZm8gKyBAIHdpdGggYSBwb3RlbnRpYWwgZG9tYWluIG5hbWUgKEMpXG52YXIgU19FTUFJTF9ET01BSU5fRE9UID0gbWFrZVN0YXRlKCk7IC8vIChDKSBkb21haW4gZm9sbG93ZWQgYnkgRE9UXG52YXIgU19FTUFJTCA9IG1ha2VTdGF0ZShfbXVsdGkuRU1BSUwpOyAvLyAoQykgUG9zc2libGUgZW1haWwgYWRkcmVzcyAoY291bGQgaGF2ZSBtb3JlIHRsZHMpXG52YXIgU19FTUFJTF9DT0xPTiA9IG1ha2VTdGF0ZSgpOyAvLyAoQykgVVJMIGZvbGxvd2VkIGJ5IGNvbG9uIChwb3RlbnRpYWwgcG9ydCBudW1iZXIgaGVyZSlcbnZhciBTX0VNQUlMX1BPUlQgPSBtYWtlU3RhdGUoX211bHRpLkVNQUlMKTsgLy8gKEMpIEVtYWlsIGFkZHJlc3Mgd2l0aCBhIHBvcnRcbnZhciBTX01BSUxUT19FTUFJTCA9IG1ha2VTdGF0ZShfbXVsdGkuTUFJTFRPRU1BSUwpOyAvLyBFbWFpbCB0aGF0IGJlZ2lucyB3aXRoIHRoZSBtYWlsdG8gcHJlZml4IChEKVxudmFyIFNfTUFJTFRPX0VNQUlMX05PTl9BQ0NFUFRJTkcgPSBtYWtlU3RhdGUoKTsgLy8gKEQpIEZvbGxvd2VkIGJ5IHNvbWUgbm9uLXF1ZXJ5IHN0cmluZyBjaGFyc1xudmFyIFNfTE9DQUxQQVJUID0gbWFrZVN0YXRlKCk7IC8vIExvY2FsIHBhcnQgb2YgdGhlIGVtYWlsIGFkZHJlc3NcbnZhciBTX0xPQ0FMUEFSVF9BVCA9IG1ha2VTdGF0ZSgpOyAvLyBMb2NhbCBwYXJ0IG9mIHRoZSBlbWFpbCBhZGRyZXNzIHBsdXMgQFxudmFyIFNfTE9DQUxQQVJUX0RPVCA9IG1ha2VTdGF0ZSgpOyAvLyBMb2NhbCBwYXJ0IG9mIHRoZSBlbWFpbCBhZGRyZXNzIHBsdXMgJy4nIChsb2NhbHBhcnQgY2Fubm90IGVuZCBpbiAuKVxudmFyIFNfTkwgPSBtYWtlU3RhdGUoX211bHRpLk5MKTsgLy8gc2luZ2xlIG5ldyBsaW5lXG5cbi8vIE1ha2UgcGF0aCBmcm9tIHN0YXJ0IHRvIHByb3RvY29sICh3aXRoICcvLycpXG5TX1NUQVJULm9uKF90ZXh0Lk5MLCBTX05MKS5vbihfdGV4dC5QUk9UT0NPTCwgU19QUk9UT0NPTCkub24oX3RleHQuTUFJTFRPLCBTX01BSUxUTykub24oX3RleHQuU0xBU0gsIFNfUFJPVE9DT0xfU0xBU0gpO1xuXG5TX1BST1RPQ09MLm9uKF90ZXh0LlNMQVNILCBTX1BST1RPQ09MX1NMQVNIKTtcblNfUFJPVE9DT0xfU0xBU0gub24oX3RleHQuU0xBU0gsIFNfUFJPVE9DT0xfU0xBU0hfU0xBU0gpO1xuXG4vLyBUaGUgdmVyeSBmaXJzdCBwb3RlbnRpYWwgZG9tYWluIG5hbWVcblNfU1RBUlQub24oX3RleHQuVExELCBTX0RPTUFJTikub24oX3RleHQuRE9NQUlOLCBTX0RPTUFJTikub24oX3RleHQuTE9DQUxIT1NULCBTX1RMRCkub24oX3RleHQuTlVNLCBTX0RPTUFJTik7XG5cbi8vIEZvcmNlIFVSTCBmb3IgcHJvdG9jb2wgZm9sbG93ZWQgYnkgYW55dGhpbmcgc2FuZVxuU19QUk9UT0NPTF9TTEFTSF9TTEFTSC5vbihfdGV4dC5UTEQsIFNfVVJMKS5vbihfdGV4dC5ET01BSU4sIFNfVVJMKS5vbihfdGV4dC5OVU0sIFNfVVJMKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfVVJMKTtcblxuLy8gQWNjb3VudCBmb3IgZG90cyBhbmQgaHlwaGVuc1xuLy8gaHlwaGVucyBhcmUgdXN1YWxseSBwYXJ0cyBvZiBkb21haW4gbmFtZXNcblNfRE9NQUlOLm9uKF90ZXh0LkRPVCwgU19ET01BSU5fRE9UKTtcblNfRU1BSUxfRE9NQUlOLm9uKF90ZXh0LkRPVCwgU19FTUFJTF9ET01BSU5fRE9UKTtcblxuLy8gSHlwaGVuIGNhbiBqdW1wIGJhY2sgdG8gYSBkb21haW4gbmFtZVxuXG4vLyBBZnRlciB0aGUgZmlyc3QgZG9tYWluIGFuZCBhIGRvdCwgd2UgY2FuIGZpbmQgZWl0aGVyIGEgVVJMIG9yIGFub3RoZXIgZG9tYWluXG5TX0RPTUFJTl9ET1Qub24oX3RleHQuVExELCBTX1RMRCkub24oX3RleHQuRE9NQUlOLCBTX0RPTUFJTikub24oX3RleHQuTlVNLCBTX0RPTUFJTikub24oX3RleHQuTE9DQUxIT1NULCBTX0RPTUFJTik7XG5cblNfRU1BSUxfRE9NQUlOX0RPVC5vbihfdGV4dC5UTEQsIFNfRU1BSUwpLm9uKF90ZXh0LkRPTUFJTiwgU19FTUFJTF9ET01BSU4pLm9uKF90ZXh0Lk5VTSwgU19FTUFJTF9ET01BSU4pLm9uKF90ZXh0LkxPQ0FMSE9TVCwgU19FTUFJTF9ET01BSU4pO1xuXG4vLyBTX1RMRCBhY2NlcHRzISBCdXQgdGhlIFVSTCBjb3VsZCBiZSBsb25nZXIsIHRyeSB0byBmaW5kIGEgbWF0Y2ggZ3JlZWRpbHlcbi8vIFRoZSBgcnVuYCBmdW5jdGlvbiBzaG91bGQgYmUgYWJsZSB0byBcInJvbGxiYWNrXCIgdG8gdGhlIGFjY2VwdGluZyBzdGF0ZVxuU19UTEQub24oX3RleHQuRE9ULCBTX0RPTUFJTl9ET1QpO1xuU19FTUFJTC5vbihfdGV4dC5ET1QsIFNfRU1BSUxfRE9NQUlOX0RPVCk7XG5cbi8vIEJlY29tZSByZWFsIFVSTHMgYWZ0ZXIgYFNMQVNIYCBvciBgQ09MT04gTlVNIFNMQVNIYFxuLy8gSGVyZSBQU1MgYW5kIG5vbi1QU1MgY29udmVyZ2VcblNfVExELm9uKF90ZXh0LkNPTE9OLCBTX1RMRF9DT0xPTikub24oX3RleHQuU0xBU0gsIFNfVVJMKTtcblNfVExEX0NPTE9OLm9uKF90ZXh0Lk5VTSwgU19UTERfUE9SVCk7XG5TX1RMRF9QT1JULm9uKF90ZXh0LlNMQVNILCBTX1VSTCk7XG5TX0VNQUlMLm9uKF90ZXh0LkNPTE9OLCBTX0VNQUlMX0NPTE9OKTtcblNfRU1BSUxfQ09MT04ub24oX3RleHQuTlVNLCBTX0VNQUlMX1BPUlQpO1xuXG4vLyBUeXBlcyBvZiBjaGFyYWN0ZXJzIHRoZSBVUkwgY2FuIGRlZmluaXRlbHkgZW5kIGluXG52YXIgcXNBY2NlcHRpbmcgPSBbX3RleHQuRE9NQUlOLCBfdGV4dC5BVCwgX3RleHQuTE9DQUxIT1NULCBfdGV4dC5OVU0sIF90ZXh0LlBMVVMsIF90ZXh0LlBPVU5ELCBfdGV4dC5QUk9UT0NPTCwgX3RleHQuU0xBU0gsIF90ZXh0LlRMRCwgX3RleHQuVU5ERVJTQ09SRSwgX3RleHQuU1lNLCBfdGV4dC5BTVBFUlNBTkRdO1xuXG4vLyBUeXBlcyBvZiB0b2tlbnMgdGhhdCBjYW4gZm9sbG93IGEgVVJMIGFuZCBiZSBwYXJ0IG9mIHRoZSBxdWVyeSBzdHJpbmdcbi8vIGJ1dCBjYW5ub3QgYmUgdGhlIHZlcnkgbGFzdCBjaGFyYWN0ZXJzXG4vLyBDaGFyYWN0ZXJzIHRoYXQgY2Fubm90IGFwcGVhciBpbiB0aGUgVVJMIGF0IGFsbCBzaG91bGQgYmUgZXhjbHVkZWRcbnZhciBxc05vbkFjY2VwdGluZyA9IFtfdGV4dC5DT0xPTiwgX3RleHQuRE9ULCBfdGV4dC5RVUVSWSwgX3RleHQuUFVOQ1RVQVRJT04sIF90ZXh0LkNMT1NFQlJBQ0UsIF90ZXh0LkNMT1NFQlJBQ0tFVCwgX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQsIF90ZXh0LkNMT1NFUEFSRU4sIF90ZXh0Lk9QRU5CUkFDRSwgX3RleHQuT1BFTkJSQUNLRVQsIF90ZXh0Lk9QRU5BTkdMRUJSQUNLRVQsIF90ZXh0Lk9QRU5QQVJFTl07XG5cbi8vIFRoZXNlIHN0YXRlcyBhcmUgcmVzcG9uc2libGUgcHJpbWFyaWx5IGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIG9yIG5vdCB0b1xuLy8gaW5jbHVkZSB0aGUgZmluYWwgcm91bmQgYnJhY2tldC5cblxuLy8gVVJMLCBmb2xsb3dlZCBieSBhbiBvcGVuaW5nIGJyYWNrZXRcblNfVVJMLm9uKF90ZXh0Lk9QRU5CUkFDRSwgU19VUkxfT1BFTkJSQUNFKS5vbihfdGV4dC5PUEVOQlJBQ0tFVCwgU19VUkxfT1BFTkJSQUNLRVQpLm9uKF90ZXh0Lk9QRU5BTkdMRUJSQUNLRVQsIFNfVVJMX09QRU5BTkdMRUJSQUNLRVQpLm9uKF90ZXh0Lk9QRU5QQVJFTiwgU19VUkxfT1BFTlBBUkVOKTtcblxuLy8gVVJMIHdpdGggZXh0cmEgc3ltYm9scyBhdCB0aGUgZW5kLCBmb2xsb3dlZCBieSBhbiBvcGVuaW5nIGJyYWNrZXRcblNfVVJMX05PTl9BQ0NFUFRJTkcub24oX3RleHQuT1BFTkJSQUNFLCBTX1VSTF9PUEVOQlJBQ0UpLm9uKF90ZXh0Lk9QRU5CUkFDS0VULCBTX1VSTF9PUEVOQlJBQ0tFVCkub24oX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCwgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVCkub24oX3RleHQuT1BFTlBBUkVOLCBTX1VSTF9PUEVOUEFSRU4pO1xuXG4vLyBDbG9zaW5nIGJyYWNrZXQgY29tcG9uZW50LiBUaGlzIGNoYXJhY3RlciBXSUxMIGJlIGluY2x1ZGVkIGluIHRoZSBVUkxcblNfVVJMX09QRU5CUkFDRS5vbihfdGV4dC5DTE9TRUJSQUNFLCBTX1VSTCk7XG5TX1VSTF9PUEVOQlJBQ0tFVC5vbihfdGV4dC5DTE9TRUJSQUNLRVQsIFNfVVJMKTtcblNfVVJMX09QRU5BTkdMRUJSQUNLRVQub24oX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQsIFNfVVJMKTtcblNfVVJMX09QRU5QQVJFTi5vbihfdGV4dC5DTE9TRVBBUkVOLCBTX1VSTCk7XG5TX1VSTF9PUEVOQlJBQ0VfUS5vbihfdGV4dC5DTE9TRUJSQUNFLCBTX1VSTCk7XG5TX1VSTF9PUEVOQlJBQ0tFVF9RLm9uKF90ZXh0LkNMT1NFQlJBQ0tFVCwgU19VUkwpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RLm9uKF90ZXh0LkNMT1NFQU5HTEVCUkFDS0VULCBTX1VSTCk7XG5TX1VSTF9PUEVOUEFSRU5fUS5vbihfdGV4dC5DTE9TRVBBUkVOLCBTX1VSTCk7XG5TX1VSTF9PUEVOQlJBQ0VfU1lNUy5vbihfdGV4dC5DTE9TRUJSQUNFLCBTX1VSTCk7XG5TX1VSTF9PUEVOQlJBQ0tFVF9TWU1TLm9uKF90ZXh0LkNMT1NFQlJBQ0tFVCwgU19VUkwpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9TWU1TLm9uKF90ZXh0LkNMT1NFQU5HTEVCUkFDS0VULCBTX1VSTCk7XG5TX1VSTF9PUEVOUEFSRU5fU1lNUy5vbihfdGV4dC5DTE9TRVBBUkVOLCBTX1VSTCk7XG5cbi8vIFVSTCB0aGF0IGJlaW5ncyB3aXRoIGFuIG9wZW5pbmcgYnJhY2tldCwgZm9sbG93ZWQgYnkgYSBzeW1ib2xzLlxuLy8gTm90ZSB0aGF0IHRoZSBmaW5hbCBzdGF0ZSBjYW4gc3RpbGwgYmUgYFNfVVJMX09QRU5CUkFDRV9RYCAoaWYgdGhlIFVSTCBvbmx5XG4vLyBoYXMgYSBzaW5nbGUgb3BlbmluZyBicmFja2V0IGZvciBzb21lIHJlYXNvbikuXG5TX1VSTF9PUEVOQlJBQ0Uub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDRV9RKTtcblNfVVJMX09QRU5CUkFDS0VULm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5BTkdMRUJSQUNLRVQub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfUSk7XG5TX1VSTF9PUEVOUEFSRU4ub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5QQVJFTl9RKTtcblNfVVJMX09QRU5CUkFDRS5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkJSQUNFX1NZTVMpO1xuU19VUkxfT1BFTkJSQUNLRVQub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1NZTVMpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVC5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9TWU1TKTtcblNfVVJMX09QRU5QQVJFTi5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTlBBUkVOX1NZTVMpO1xuXG4vLyBVUkwgdGhhdCBiZWdpbnMgd2l0aCBhbiBvcGVuaW5nIGJyYWNrZXQsIGZvbGxvd2VkIGJ5IHNvbWUgc3ltYm9sc1xuU19VUkxfT1BFTkJSQUNFX1Eub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDRV9RKTtcblNfVVJMX09QRU5CUkFDS0VUX1Eub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RLm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EpO1xuU19VUkxfT1BFTlBBUkVOX1Eub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5QQVJFTl9RKTtcblNfVVJMX09QRU5CUkFDRV9RLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0VfUSk7XG5TX1VSTF9PUEVOQlJBQ0tFVF9RLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5BTkdMRUJSQUNLRVRfUS5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5QQVJFTl9RLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOUEFSRU5fUSk7XG5cblNfVVJMX09QRU5CUkFDRV9TWU1TLm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0VfUSk7XG5TX1VSTF9PUEVOQlJBQ0tFVF9TWU1TLm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5BTkdMRUJSQUNLRVRfU1lNUy5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5QQVJFTl9TWU1TLm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOUEFSRU5fUSk7XG5TX1VSTF9PUEVOQlJBQ0VfU1lNUy5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkJSQUNFX1NZTVMpO1xuU19VUkxfT1BFTkJSQUNLRVRfU1lNUy5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkJSQUNLRVRfU1lNUyk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1NZTVMub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfU1lNUyk7XG5TX1VSTF9PUEVOUEFSRU5fU1lNUy5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTlBBUkVOX1NZTVMpO1xuXG4vLyBBY2NvdW50IGZvciB0aGUgcXVlcnkgc3RyaW5nXG5TX1VSTC5vbihxc0FjY2VwdGluZywgU19VUkwpO1xuU19VUkxfTk9OX0FDQ0VQVElORy5vbihxc0FjY2VwdGluZywgU19VUkwpO1xuXG5TX1VSTC5vbihxc05vbkFjY2VwdGluZywgU19VUkxfTk9OX0FDQ0VQVElORyk7XG5TX1VSTF9OT05fQUNDRVBUSU5HLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9OT05fQUNDRVBUSU5HKTtcblxuLy8gRW1haWwgYWRkcmVzcy1zcGVjaWZpYyBzdGF0ZSBkZWZpbml0aW9uc1xuLy8gTm90ZTogV2UgYXJlIG5vdCBhbGxvd2luZyAnLycgaW4gZW1haWwgYWRkcmVzc2VzIHNpbmNlIHRoaXMgd291bGQgaW50ZXJmZXJlXG4vLyB3aXRoIHJlYWwgVVJMc1xuXG4vLyBGb3IgYWRkcmVzc2VzIHdpdGggdGhlIG1haWx0byBwcmVmaXhcbi8vICdtYWlsdG86JyBmb2xsb3dlZCBieSBhbnl0aGluZyBzYW5lIGlzIGEgdmFsaWQgZW1haWxcblNfTUFJTFRPLm9uKF90ZXh0LlRMRCwgU19NQUlMVE9fRU1BSUwpLm9uKF90ZXh0LkRPTUFJTiwgU19NQUlMVE9fRU1BSUwpLm9uKF90ZXh0Lk5VTSwgU19NQUlMVE9fRU1BSUwpLm9uKF90ZXh0LkxPQ0FMSE9TVCwgU19NQUlMVE9fRU1BSUwpO1xuXG4vLyBHcmVlZGlseSBnZXQgbW9yZSBwb3RlbnRpYWwgdmFsaWQgZW1haWwgdmFsdWVzXG5TX01BSUxUT19FTUFJTC5vbihxc0FjY2VwdGluZywgU19NQUlMVE9fRU1BSUwpLm9uKHFzTm9uQWNjZXB0aW5nLCBTX01BSUxUT19FTUFJTF9OT05fQUNDRVBUSU5HKTtcblNfTUFJTFRPX0VNQUlMX05PTl9BQ0NFUFRJTkcub24ocXNBY2NlcHRpbmcsIFNfTUFJTFRPX0VNQUlMKS5vbihxc05vbkFjY2VwdGluZywgU19NQUlMVE9fRU1BSUxfTk9OX0FDQ0VQVElORyk7XG5cbi8vIEZvciBhZGRyZXNzZXMgd2l0aG91dCB0aGUgbWFpbHRvIHByZWZpeFxuLy8gVG9rZW5zIGFsbG93ZWQgaW4gdGhlIGxvY2FscGFydCBvZiB0aGUgZW1haWxcbnZhciBsb2NhbHBhcnRBY2NlcHRpbmcgPSBbX3RleHQuRE9NQUlOLCBfdGV4dC5OVU0sIF90ZXh0LlBMVVMsIF90ZXh0LlBPVU5ELCBfdGV4dC5RVUVSWSwgX3RleHQuVU5ERVJTQ09SRSwgX3RleHQuU1lNLCBfdGV4dC5BTVBFUlNBTkQsIF90ZXh0LlRMRF07XG5cbi8vIFNvbWUgb2YgdGhlIHRva2VucyBpbiBgbG9jYWxwYXJ0QWNjZXB0aW5nYCBhcmUgYWxyZWFkeSBhY2NvdW50ZWQgZm9yIGhlcmUgYW5kXG4vLyB3aWxsIG5vdCBiZSBvdmVyd3JpdHRlbiAoZG9uJ3Qgd29ycnkpXG5TX0RPTUFJTi5vbihsb2NhbHBhcnRBY2NlcHRpbmcsIFNfTE9DQUxQQVJUKS5vbihfdGV4dC5BVCwgU19MT0NBTFBBUlRfQVQpO1xuU19UTEQub24obG9jYWxwYXJ0QWNjZXB0aW5nLCBTX0xPQ0FMUEFSVCkub24oX3RleHQuQVQsIFNfTE9DQUxQQVJUX0FUKTtcblNfRE9NQUlOX0RPVC5vbihsb2NhbHBhcnRBY2NlcHRpbmcsIFNfTE9DQUxQQVJUKTtcblxuLy8gT2theSB3ZSdyZSBvbiBhIGxvY2FscGFydC4gTm93IHdoYXQ/XG4vLyBUT0RPOiBJUCBhZGRyZXNzZXMgYW5kIHdoYXQgaWYgdGhlIGVtYWlsIHN0YXJ0cyB3aXRoIG51bWJlcnM/XG5TX0xPQ0FMUEFSVC5vbihsb2NhbHBhcnRBY2NlcHRpbmcsIFNfTE9DQUxQQVJUKS5vbihfdGV4dC5BVCwgU19MT0NBTFBBUlRfQVQpIC8vIGNsb3NlIHRvIGFuIGVtYWlsIGFkZHJlc3Mgbm93XG4ub24oX3RleHQuRE9ULCBTX0xPQ0FMUEFSVF9ET1QpO1xuU19MT0NBTFBBUlRfRE9ULm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpO1xuU19MT0NBTFBBUlRfQVQub24oX3RleHQuVExELCBTX0VNQUlMX0RPTUFJTikub24oX3RleHQuRE9NQUlOLCBTX0VNQUlMX0RPTUFJTikub24oX3RleHQuTE9DQUxIT1NULCBTX0VNQUlMKTtcbi8vIFN0YXRlcyBmb2xsb3dpbmcgYEBgIGRlZmluZWQgYWJvdmVcblxudmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bih0b2tlbnMpIHtcblx0dmFyIGxlbiA9IHRva2Vucy5sZW5ndGg7XG5cdHZhciBjdXJzb3IgPSAwO1xuXHR2YXIgbXVsdGlzID0gW107XG5cdHZhciB0ZXh0VG9rZW5zID0gW107XG5cblx0d2hpbGUgKGN1cnNvciA8IGxlbikge1xuXHRcdHZhciBzdGF0ZSA9IFNfU1RBUlQ7XG5cdFx0dmFyIHNlY29uZFN0YXRlID0gbnVsbDtcblx0XHR2YXIgbmV4dFN0YXRlID0gbnVsbDtcblx0XHR2YXIgbXVsdGlMZW5ndGggPSAwO1xuXHRcdHZhciBsYXRlc3RBY2NlcHRpbmcgPSBudWxsO1xuXHRcdHZhciBzaW5jZUFjY2VwdHMgPSAtMTtcblxuXHRcdHdoaWxlIChjdXJzb3IgPCBsZW4gJiYgIShzZWNvbmRTdGF0ZSA9IHN0YXRlLm5leHQodG9rZW5zW2N1cnNvcl0pKSkge1xuXHRcdFx0Ly8gU3RhcnRpbmcgdG9rZW5zIHdpdGggbm93aGVyZSB0byBqdW1wIHRvLlxuXHRcdFx0Ly8gQ29uc2lkZXIgdGhlc2UgdG8gYmUganVzdCBwbGFpbiB0ZXh0XG5cdFx0XHR0ZXh0VG9rZW5zLnB1c2godG9rZW5zW2N1cnNvcisrXSk7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGN1cnNvciA8IGxlbiAmJiAobmV4dFN0YXRlID0gc2Vjb25kU3RhdGUgfHwgc3RhdGUubmV4dCh0b2tlbnNbY3Vyc29yXSkpKSB7XG5cblx0XHRcdC8vIEdldCB0aGUgbmV4dCBzdGF0ZVxuXHRcdFx0c2Vjb25kU3RhdGUgPSBudWxsO1xuXHRcdFx0c3RhdGUgPSBuZXh0U3RhdGU7XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhdGVzdCBhY2NlcHRpbmcgc3RhdGVcblx0XHRcdGlmIChzdGF0ZS5hY2NlcHRzKCkpIHtcblx0XHRcdFx0c2luY2VBY2NlcHRzID0gMDtcblx0XHRcdFx0bGF0ZXN0QWNjZXB0aW5nID0gc3RhdGU7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbmNlQWNjZXB0cyA+PSAwKSB7XG5cdFx0XHRcdHNpbmNlQWNjZXB0cysrO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJzb3IrKztcblx0XHRcdG11bHRpTGVuZ3RoKys7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbmNlQWNjZXB0cyA8IDApIHtcblxuXHRcdFx0Ly8gTm8gYWNjZXB0aW5nIHN0YXRlIHdhcyBmb3VuZCwgcGFydCBvZiBhIHJlZ3VsYXIgdGV4dCB0b2tlblxuXHRcdFx0Ly8gQWRkIGFsbCB0aGUgdG9rZW5zIHdlIGxvb2tlZCBhdCB0byB0aGUgdGV4dCB0b2tlbnMgYXJyYXlcblx0XHRcdGZvciAodmFyIGkgPSBjdXJzb3IgLSBtdWx0aUxlbmd0aDsgaSA8IGN1cnNvcjsgaSsrKSB7XG5cdFx0XHRcdHRleHRUb2tlbnMucHVzaCh0b2tlbnNbaV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIEFjY2VwdGluZyBzdGF0ZSFcblxuXHRcdFx0Ly8gRmlyc3QgY2xvc2Ugb2ZmIHRoZSB0ZXh0VG9rZW5zIChpZiBhdmFpbGFibGUpXG5cdFx0XHRpZiAodGV4dFRva2Vucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG11bHRpcy5wdXNoKG5ldyBfbXVsdGkuVEVYVCh0ZXh0VG9rZW5zKSk7XG5cdFx0XHRcdHRleHRUb2tlbnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUm9sbCBiYWNrIHRvIHRoZSBsYXRlc3QgYWNjZXB0aW5nIHN0YXRlXG5cdFx0XHRjdXJzb3IgLT0gc2luY2VBY2NlcHRzO1xuXHRcdFx0bXVsdGlMZW5ndGggLT0gc2luY2VBY2NlcHRzO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBuZXcgbXVsdGl0b2tlblxuXHRcdFx0dmFyIE1VTFRJID0gbGF0ZXN0QWNjZXB0aW5nLmVtaXQoKTtcblx0XHRcdG11bHRpcy5wdXNoKG5ldyBNVUxUSSh0b2tlbnMuc2xpY2UoY3Vyc29yIC0gbXVsdGlMZW5ndGgsIGN1cnNvcikpKTtcblx0XHR9XG5cdH1cblxuXHQvLyBGaW5hbGx5IGNsb3NlIG9mZiB0aGUgdGV4dFRva2VucyAoaWYgYXZhaWxhYmxlKVxuXHRpZiAodGV4dFRva2Vucy5sZW5ndGggPiAwKSB7XG5cdFx0bXVsdGlzLnB1c2gobmV3IF9tdWx0aS5URVhUKHRleHRUb2tlbnMpKTtcblx0fVxuXG5cdHJldHVybiBtdWx0aXM7XG59O1xuXG5leHBvcnRzLlN0YXRlID0gX3N0YXRlLlRva2VuU3RhdGU7XG5leHBvcnRzLlRPS0VOUyA9IE1VTFRJX1RPS0VOUztcbmV4cG9ydHMucnVuID0gcnVuO1xuZXhwb3J0cy5zdGFydCA9IFNfU1RBUlQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGFydCA9IGV4cG9ydHMucnVuID0gZXhwb3J0cy5UT0tFTlMgPSBleHBvcnRzLlN0YXRlID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZScpO1xuXG52YXIgX3RleHQgPSByZXF1aXJlKCcuL3Rva2Vucy90ZXh0Jyk7XG5cbnZhciBUT0tFTlMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdGV4dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciB0bGRzID0gJ2FhYXxhYXJwfGFiYXJ0aHxhYmJ8YWJib3R0fGFiYnZpZXxhYmN8YWJsZXxhYm9nYWRvfGFidWRoYWJpfGFjfGFjYWRlbXl8YWNjZW50dXJlfGFjY291bnRhbnR8YWNjb3VudGFudHN8YWNvfGFjdGl2ZXxhY3RvcnxhZHxhZGFjfGFkc3xhZHVsdHxhZXxhZWd8YWVyb3xhZXRuYXxhZnxhZmFtaWx5Y29tcGFueXxhZmx8YWZyaWNhfGFnfGFnYWtoYW58YWdlbmN5fGFpfGFpZ3xhaWdvfGFpcmJ1c3xhaXJmb3JjZXxhaXJ0ZWx8YWtkbnxhbHxhbGZhcm9tZW98YWxpYmFiYXxhbGlwYXl8YWxsZmluYW56fGFsbHN0YXRlfGFsbHl8YWxzYWNlfGFsc3RvbXxhbXxhbWVyaWNhbmV4cHJlc3N8YW1lcmljYW5mYW1pbHl8YW1leHxhbWZhbXxhbWljYXxhbXN0ZXJkYW18YW5hbHl0aWNzfGFuZHJvaWR8YW5xdWFufGFuenxhb3xhb2x8YXBhcnRtZW50c3xhcHB8YXBwbGV8YXF8YXF1YXJlbGxlfGFyfGFyYWJ8YXJhbWNvfGFyY2hpfGFybXl8YXJwYXxhcnR8YXJ0ZXxhc3xhc2RhfGFzaWF8YXNzb2NpYXRlc3xhdHxhdGhsZXRhfGF0dG9ybmV5fGF1fGF1Y3Rpb258YXVkaXxhdWRpYmxlfGF1ZGlvfGF1c3Bvc3R8YXV0aG9yfGF1dG98YXV0b3N8YXZpYW5jYXxhd3xhd3N8YXh8YXhhfGF6fGF6dXJlfGJhfGJhYnl8YmFpZHV8YmFuYW1leHxiYW5hbmFyZXB1YmxpY3xiYW5kfGJhbmt8YmFyfGJhcmNlbG9uYXxiYXJjbGF5Y2FyZHxiYXJjbGF5c3xiYXJlZm9vdHxiYXJnYWluc3xiYXNlYmFsbHxiYXNrZXRiYWxsfGJhdWhhdXN8YmF5ZXJufGJifGJiY3xiYnR8YmJ2YXxiY2d8YmNufGJkfGJlfGJlYXRzfGJlYXV0eXxiZWVyfGJlbnRsZXl8YmVybGlufGJlc3R8YmVzdGJ1eXxiZXR8YmZ8Ymd8Ymh8YmhhcnRpfGJpfGJpYmxlfGJpZHxiaWtlfGJpbmd8YmluZ298YmlvfGJpenxianxibGFja3xibGFja2ZyaWRheXxibGFuY298YmxvY2tidXN0ZXJ8YmxvZ3xibG9vbWJlcmd8Ymx1ZXxibXxibXN8Ym13fGJufGJubHxibnBwYXJpYmFzfGJvfGJvYXRzfGJvZWhyaW5nZXJ8Ym9mYXxib218Ym9uZHxib298Ym9va3xib29raW5nfGJvb3RzfGJvc2NofGJvc3Rpa3xib3N0b258Ym90fGJvdXRpcXVlfGJveHxicnxicmFkZXNjb3xicmlkZ2VzdG9uZXxicm9hZHdheXxicm9rZXJ8YnJvdGhlcnxicnVzc2Vsc3xic3xidHxidWRhcGVzdHxidWdhdHRpfGJ1aWxkfGJ1aWxkZXJzfGJ1c2luZXNzfGJ1eXxidXp6fGJ2fGJ3fGJ5fGJ6fGJ6aHxjYXxjYWJ8Y2FmZXxjYWx8Y2FsbHxjYWx2aW5rbGVpbnxjYW18Y2FtZXJhfGNhbXB8Y2FuY2VycmVzZWFyY2h8Y2Fub258Y2FwZXRvd258Y2FwaXRhbHxjYXBpdGFsb25lfGNhcnxjYXJhdmFufGNhcmRzfGNhcmV8Y2FyZWVyfGNhcmVlcnN8Y2Fyc3xjYXJ0aWVyfGNhc2F8Y2FzZXxjYXNlaWh8Y2FzaHxjYXNpbm98Y2F0fGNhdGVyaW5nfGNhdGhvbGljfGNiYXxjYm58Y2JyZXxjYnN8Y2N8Y2R8Y2VifGNlbnRlcnxjZW98Y2VybnxjZnxjZmF8Y2ZkfGNnfGNofGNoYW5lbHxjaGFubmVsfGNoYXNlfGNoYXR8Y2hlYXB8Y2hpbnRhaXxjaGxvZXxjaHJpc3RtYXN8Y2hyb21lfGNocnlzbGVyfGNodXJjaHxjaXxjaXByaWFuaXxjaXJjbGV8Y2lzY298Y2l0YWRlbHxjaXRpfGNpdGljfGNpdHl8Y2l0eWVhdHN8Y2t8Y2x8Y2xhaW1zfGNsZWFuaW5nfGNsaWNrfGNsaW5pY3xjbGluaXF1ZXxjbG90aGluZ3xjbG91ZHxjbHVifGNsdWJtZWR8Y218Y258Y298Y29hY2h8Y29kZXN8Y29mZmVlfGNvbGxlZ2V8Y29sb2duZXxjb218Y29tY2FzdHxjb21tYmFua3xjb21tdW5pdHl8Y29tcGFueXxjb21wYXJlfGNvbXB1dGVyfGNvbXNlY3xjb25kb3N8Y29uc3RydWN0aW9ufGNvbnN1bHRpbmd8Y29udGFjdHxjb250cmFjdG9yc3xjb29raW5nfGNvb2tpbmdjaGFubmVsfGNvb2x8Y29vcHxjb3JzaWNhfGNvdW50cnl8Y291cG9ufGNvdXBvbnN8Y291cnNlc3xjcnxjcmVkaXR8Y3JlZGl0Y2FyZHxjcmVkaXR1bmlvbnxjcmlja2V0fGNyb3dufGNyc3xjcnVpc2V8Y3J1aXNlc3xjc2N8Y3V8Y3Vpc2luZWxsYXxjdnxjd3xjeHxjeXxjeW1ydXxjeW91fGN6fGRhYnVyfGRhZHxkYW5jZXxkYXRhfGRhdGV8ZGF0aW5nfGRhdHN1bnxkYXl8ZGNsa3xkZHN8ZGV8ZGVhbHxkZWFsZXJ8ZGVhbHN8ZGVncmVlfGRlbGl2ZXJ5fGRlbGx8ZGVsb2l0dGV8ZGVsdGF8ZGVtb2NyYXR8ZGVudGFsfGRlbnRpc3R8ZGVzaXxkZXNpZ258ZGV2fGRobHxkaWFtb25kc3xkaWV0fGRpZ2l0YWx8ZGlyZWN0fGRpcmVjdG9yeXxkaXNjb3VudHxkaXNjb3ZlcnxkaXNofGRpeXxkanxka3xkbXxkbnB8ZG98ZG9jc3xkb2N0b3J8ZG9kZ2V8ZG9nfGRvaGF8ZG9tYWluc3xkb3R8ZG93bmxvYWR8ZHJpdmV8ZHR2fGR1YmFpfGR1Y2t8ZHVubG9wfGR1bnN8ZHVwb250fGR1cmJhbnxkdmFnfGR2cnxkenxlYXJ0aHxlYXR8ZWN8ZWNvfGVkZWthfGVkdXxlZHVjYXRpb258ZWV8ZWd8ZW1haWx8ZW1lcmNrfGVuZXJneXxlbmdpbmVlcnxlbmdpbmVlcmluZ3xlbnRlcnByaXNlc3xlcG9zdHxlcHNvbnxlcXVpcG1lbnR8ZXJ8ZXJpY3Nzb258ZXJuaXxlc3xlc3F8ZXN0YXRlfGVzdXJhbmNlfGV0fGV0aXNhbGF0fGV1fGV1cm92aXNpb258ZXVzfGV2ZW50c3xldmVyYmFua3xleGNoYW5nZXxleHBlcnR8ZXhwb3NlZHxleHByZXNzfGV4dHJhc3BhY2V8ZmFnZXxmYWlsfGZhaXJ3aW5kc3xmYWl0aHxmYW1pbHl8ZmFufGZhbnN8ZmFybXxmYXJtZXJzfGZhc2hpb258ZmFzdHxmZWRleHxmZWVkYmFja3xmZXJyYXJpfGZlcnJlcm98Zml8ZmlhdHxmaWRlbGl0eXxmaWRvfGZpbG18ZmluYWx8ZmluYW5jZXxmaW5hbmNpYWx8ZmlyZXxmaXJlc3RvbmV8ZmlybWRhbGV8ZmlzaHxmaXNoaW5nfGZpdHxmaXRuZXNzfGZqfGZrfGZsaWNrcnxmbGlnaHRzfGZsaXJ8ZmxvcmlzdHxmbG93ZXJzfGZseXxmbXxmb3xmb298Zm9vZHxmb29kbmV0d29ya3xmb290YmFsbHxmb3JkfGZvcmV4fGZvcnNhbGV8Zm9ydW18Zm91bmRhdGlvbnxmb3h8ZnJ8ZnJlZXxmcmVzZW5pdXN8ZnJsfGZyb2dhbnN8ZnJvbnRkb29yfGZyb250aWVyfGZ0cnxmdWppdHN1fGZ1aml4ZXJveHxmdW58ZnVuZHxmdXJuaXR1cmV8ZnV0Ym9sfGZ5aXxnYXxnYWx8Z2FsbGVyeXxnYWxsb3xnYWxsdXB8Z2FtZXxnYW1lc3xnYXB8Z2FyZGVufGdifGdiaXp8Z2R8Z2RufGdlfGdlYXxnZW50fGdlbnRpbmd8Z2VvcmdlfGdmfGdnfGdnZWV8Z2h8Z2l8Z2lmdHxnaWZ0c3xnaXZlc3xnaXZpbmd8Z2x8Z2xhZGV8Z2xhc3N8Z2xlfGdsb2JhbHxnbG9ib3xnbXxnbWFpbHxnbWJofGdtb3xnbXh8Z258Z29kYWRkeXxnb2xkfGdvbGRwb2ludHxnb2xmfGdvb3xnb29kaGFuZHN8Z29vZHllYXJ8Z29vZ3xnb29nbGV8Z29wfGdvdHxnb3Z8Z3B8Z3F8Z3J8Z3JhaW5nZXJ8Z3JhcGhpY3N8Z3JhdGlzfGdyZWVufGdyaXBlfGdyb2Nlcnl8Z3JvdXB8Z3N8Z3R8Z3V8Z3VhcmRpYW58Z3VjY2l8Z3VnZXxndWlkZXxndWl0YXJzfGd1cnV8Z3d8Z3l8aGFpcnxoYW1idXJnfGhhbmdvdXR8aGF1c3xoYm98aGRmY3xoZGZjYmFua3xoZWFsdGh8aGVhbHRoY2FyZXxoZWxwfGhlbHNpbmtpfGhlcmV8aGVybWVzfGhndHZ8aGlwaG9wfGhpc2FtaXRzdXxoaXRhY2hpfGhpdnxoa3xoa3R8aG18aG58aG9ja2V5fGhvbGRpbmdzfGhvbGlkYXl8aG9tZWRlcG90fGhvbWVnb29kc3xob21lc3xob21lc2Vuc2V8aG9uZGF8aG9uZXl3ZWxsfGhvcnNlfGhvc3BpdGFsfGhvc3R8aG9zdGluZ3xob3R8aG90ZWxlc3xob3RlbHN8aG90bWFpbHxob3VzZXxob3d8aHJ8aHNiY3xodHxodGN8aHV8aHVnaGVzfGh5YXR0fGh5dW5kYWl8aWJtfGljYmN8aWNlfGljdXxpZHxpZXxpZWVlfGlmbXxpa2Fub3xpbHxpbXxpbWFtYXR8aW1kYnxpbW1vfGltbW9iaWxpZW58aW58aW5kdXN0cmllc3xpbmZpbml0aXxpbmZvfGluZ3xpbmt8aW5zdGl0dXRlfGluc3VyYW5jZXxpbnN1cmV8aW50fGludGVsfGludGVybmF0aW9uYWx8aW50dWl0fGludmVzdG1lbnRzfGlvfGlwaXJhbmdhfGlxfGlyfGlyaXNofGlzfGlzZWxlY3R8aXNtYWlsaXxpc3R8aXN0YW5idWx8aXR8aXRhdXxpdHZ8aXZlY298aXdjfGphZ3VhcnxqYXZhfGpjYnxqY3B8amV8amVlcHxqZXR6dHxqZXdlbHJ5fGppb3xqbGN8amxsfGptfGptcHxqbmp8am98am9ic3xqb2J1cmd8am90fGpveXxqcHxqcG1vcmdhbnxqcHJzfGp1ZWdvc3xqdW5pcGVyfGthdWZlbnxrZGRpfGtlfGtlcnJ5aG90ZWxzfGtlcnJ5bG9naXN0aWNzfGtlcnJ5cHJvcGVydGllc3xrZmh8a2d8a2h8a2l8a2lhfGtpbXxraW5kZXJ8a2luZGxlfGtpdGNoZW58a2l3aXxrbXxrbnxrb2Vsbnxrb21hdHN1fGtvc2hlcnxrcHxrcG1nfGtwbnxrcnxrcmR8a3JlZHxrdW9rZ3JvdXB8a3d8a3l8a3lvdG98a3p8bGF8bGFjYWl4YXxsYWRicm9rZXN8bGFtYm9yZ2hpbml8bGFtZXJ8bGFuY2FzdGVyfGxhbmNpYXxsYW5jb21lfGxhbmR8bGFuZHJvdmVyfGxhbnhlc3N8bGFzYWxsZXxsYXR8bGF0aW5vfGxhdHJvYmV8bGF3fGxhd3llcnxsYnxsY3xsZHN8bGVhc2V8bGVjbGVyY3xsZWZyYWt8bGVnYWx8bGVnb3xsZXh1c3xsZ2J0fGxpfGxpYWlzb258bGlkbHxsaWZlfGxpZmVpbnN1cmFuY2V8bGlmZXN0eWxlfGxpZ2h0aW5nfGxpa2V8bGlsbHl8bGltaXRlZHxsaW1vfGxpbmNvbG58bGluZGV8bGlua3xsaXBzeXxsaXZlfGxpdmluZ3xsaXhpbHxsa3xsb2FufGxvYW5zfGxvY2tlcnxsb2N1c3xsb2Z0fGxvbHxsb25kb258bG90dGV8bG90dG98bG92ZXxscGx8bHBsZmluYW5jaWFsfGxyfGxzfGx0fGx0ZHxsdGRhfGx1fGx1bmRiZWNrfGx1cGlufGx1eGV8bHV4dXJ5fGx2fGx5fG1hfG1hY3lzfG1hZHJpZHxtYWlmfG1haXNvbnxtYWtldXB8bWFufG1hbmFnZW1lbnR8bWFuZ298bWFwfG1hcmtldHxtYXJrZXRpbmd8bWFya2V0c3xtYXJyaW90dHxtYXJzaGFsbHN8bWFzZXJhdGl8bWF0dGVsfG1iYXxtY3xtY2tpbnNleXxtZHxtZXxtZWR8bWVkaWF8bWVldHxtZWxib3VybmV8bWVtZXxtZW1vcmlhbHxtZW58bWVudXxtZW98bWVyY2ttc2R8bWV0bGlmZXxtZ3xtaHxtaWFtaXxtaWNyb3NvZnR8bWlsfG1pbml8bWludHxtaXR8bWl0c3ViaXNoaXxta3xtbHxtbGJ8bWxzfG1tfG1tYXxtbnxtb3xtb2JpfG1vYmlsZXxtb2JpbHl8bW9kYXxtb2V8bW9pfG1vbXxtb25hc2h8bW9uZXl8bW9uc3Rlcnxtb3Bhcnxtb3Jtb258bW9ydGdhZ2V8bW9zY293fG1vdG98bW90b3JjeWNsZXN8bW92fG1vdmllfG1vdmlzdGFyfG1wfG1xfG1yfG1zfG1zZHxtdHxtdG58bXRyfG11fG11c2V1bXxtdXR1YWx8bXZ8bXd8bXh8bXl8bXp8bmF8bmFifG5hZGV4fG5hZ295YXxuYW1lfG5hdGlvbndpZGV8bmF0dXJhfG5hdnl8bmJhfG5jfG5lfG5lY3xuZXR8bmV0YmFua3xuZXRmbGl4fG5ldHdvcmt8bmV1c3RhcnxuZXd8bmV3aG9sbGFuZHxuZXdzfG5leHR8bmV4dGRpcmVjdHxuZXh1c3xuZnxuZmx8bmd8bmdvfG5oa3xuaXxuaWNvfG5pa2V8bmlrb258bmluamF8bmlzc2FufG5pc3NheXxubHxub3xub2tpYXxub3J0aHdlc3Rlcm5tdXR1YWx8bm9ydG9ufG5vd3xub3dydXp8bm93dHZ8bnB8bnJ8bnJhfG5yd3xudHR8bnV8bnljfG56fG9iaXxvYnNlcnZlcnxvZmZ8b2ZmaWNlfG9raW5hd2F8b2xheWFufG9sYXlhbmdyb3VwfG9sZG5hdnl8b2xsb3xvbXxvbWVnYXxvbmV8b25nfG9ubHxvbmxpbmV8b255b3Vyc2lkZXxvb298b3BlbnxvcmFjbGV8b3JhbmdlfG9yZ3xvcmdhbmljfG9yaWdpbnN8b3Nha2F8b3RzdWthfG90dHxvdmh8cGF8cGFnZXxwYW5hc29uaWN8cGFuZXJhaXxwYXJpc3xwYXJzfHBhcnRuZXJzfHBhcnRzfHBhcnR5fHBhc3NhZ2Vuc3xwYXl8cGNjd3xwZXxwZXR8cGZ8cGZpemVyfHBnfHBofHBoYXJtYWN5fHBoZHxwaGlsaXBzfHBob25lfHBob3RvfHBob3RvZ3JhcGh5fHBob3Rvc3xwaHlzaW98cGlhZ2V0fHBpY3N8cGljdGV0fHBpY3R1cmVzfHBpZHxwaW58cGluZ3xwaW5rfHBpb25lZXJ8cGl6emF8cGt8cGx8cGxhY2V8cGxheXxwbGF5c3RhdGlvbnxwbHVtYmluZ3xwbHVzfHBtfHBufHBuY3xwb2hsfHBva2VyfHBvbGl0aWV8cG9ybnxwb3N0fHByfHByYW1lcmljYXxwcmF4aXxwcmVzc3xwcmltZXxwcm98cHJvZHxwcm9kdWN0aW9uc3xwcm9mfHByb2dyZXNzaXZlfHByb21vfHByb3BlcnRpZXN8cHJvcGVydHl8cHJvdGVjdGlvbnxwcnV8cHJ1ZGVudGlhbHxwc3xwdHxwdWJ8cHd8cHdjfHB5fHFhfHFwb258cXVlYmVjfHF1ZXN0fHF2Y3xyYWNpbmd8cmFkaW98cmFpZHxyZXxyZWFkfHJlYWxlc3RhdGV8cmVhbHRvcnxyZWFsdHl8cmVjaXBlc3xyZWR8cmVkc3RvbmV8cmVkdW1icmVsbGF8cmVoYWJ8cmVpc2V8cmVpc2VufHJlaXR8cmVsaWFuY2V8cmVufHJlbnR8cmVudGFsc3xyZXBhaXJ8cmVwb3J0fHJlcHVibGljYW58cmVzdHxyZXN0YXVyYW50fHJldmlld3xyZXZpZXdzfHJleHJvdGh8cmljaHxyaWNoYXJkbGl8cmljb2h8cmlnaHRhdGhvbWV8cmlsfHJpb3xyaXB8cm1pdHxyb3xyb2NoZXJ8cm9ja3N8cm9kZW98cm9nZXJzfHJvb218cnN8cnN2cHxydXxydWdieXxydWhyfHJ1bnxyd3xyd2V8cnl1a3l1fHNhfHNhYXJsYW5kfHNhZmV8c2FmZXR5fHNha3VyYXxzYWxlfHNhbG9ufHNhbXNjbHVifHNhbXN1bmd8c2FuZHZpa3xzYW5kdmlrY29yb21hbnR8c2Fub2ZpfHNhcHxzYXBvfHNhcmx8c2FzfHNhdmV8c2F4b3xzYnxzYml8c2JzfHNjfHNjYXxzY2J8c2NoYWVmZmxlcnxzY2htaWR0fHNjaG9sYXJzaGlwc3xzY2hvb2x8c2NodWxlfHNjaHdhcnp8c2NpZW5jZXxzY2pvaG5zb258c2NvcnxzY290fHNkfHNlfHNlYXJjaHxzZWF0fHNlY3VyZXxzZWN1cml0eXxzZWVrfHNlbGVjdHxzZW5lcnxzZXJ2aWNlc3xzZXN8c2V2ZW58c2V3fHNleHxzZXh5fHNmcnxzZ3xzaHxzaGFuZ3JpbGF8c2hhcnB8c2hhd3xzaGVsbHxzaGlhfHNoaWtzaGF8c2hvZXN8c2hvcHxzaG9wcGluZ3xzaG91aml8c2hvd3xzaG93dGltZXxzaHJpcmFtfHNpfHNpbGt8c2luYXxzaW5nbGVzfHNpdGV8c2p8c2t8c2tpfHNraW58c2t5fHNreXBlfHNsfHNsaW5nfHNtfHNtYXJ0fHNtaWxlfHNufHNuY2Z8c298c29jY2VyfHNvY2lhbHxzb2Z0YmFua3xzb2Z0d2FyZXxzb2h1fHNvbGFyfHNvbHV0aW9uc3xzb25nfHNvbnl8c295fHNwYWNlfHNwaWVnZWx8c3BvdHxzcHJlYWRiZXR0aW5nfHNyfHNybHxzcnR8c3R8c3RhZGF8c3RhcGxlc3xzdGFyfHN0YXJodWJ8c3RhdGViYW5rfHN0YXRlZmFybXxzdGF0b2lsfHN0Y3xzdGNncm91cHxzdG9ja2hvbG18c3RvcmFnZXxzdG9yZXxzdHJlYW18c3R1ZGlvfHN0dWR5fHN0eWxlfHN1fHN1Y2tzfHN1cHBsaWVzfHN1cHBseXxzdXBwb3J0fHN1cmZ8c3VyZ2VyeXxzdXp1a2l8c3Z8c3dhdGNofHN3aWZ0Y292ZXJ8c3dpc3N8c3h8c3l8c3lkbmV5fHN5bWFudGVjfHN5c3RlbXN8c3p8dGFifHRhaXBlaXx0YWxrfHRhb2Jhb3x0YXJnZXR8dGF0YW1vdG9yc3x0YXRhcnx0YXR0b298dGF4fHRheGl8dGN8dGNpfHRkfHRka3x0ZWFtfHRlY2h8dGVjaG5vbG9neXx0ZWx8dGVsZWNpdHl8dGVsZWZvbmljYXx0ZW1hc2VrfHRlbm5pc3x0ZXZhfHRmfHRnfHRofHRoZHx0aGVhdGVyfHRoZWF0cmV8dGlhYXx0aWNrZXRzfHRpZW5kYXx0aWZmYW55fHRpcHN8dGlyZXN8dGlyb2x8dGp8dGptYXh4fHRqeHx0a3x0a21heHh8dGx8dG18dG1hbGx8dG58dG98dG9kYXl8dG9reW98dG9vbHN8dG9wfHRvcmF5fHRvc2hpYmF8dG90YWx8dG91cnN8dG93bnx0b3lvdGF8dG95c3x0cnx0cmFkZXx0cmFkaW5nfHRyYWluaW5nfHRyYXZlbHx0cmF2ZWxjaGFubmVsfHRyYXZlbGVyc3x0cmF2ZWxlcnNpbnN1cmFuY2V8dHJ1c3R8dHJ2fHR0fHR1YmV8dHVpfHR1bmVzfHR1c2h1fHR2fHR2c3x0d3x0enx1YXx1YmFua3x1YnN8dWNvbm5lY3R8dWd8dWt8dW5pY29tfHVuaXZlcnNpdHl8dW5vfHVvbHx1cHN8dXN8dXl8dXp8dmF8dmFjYXRpb25zfHZhbmF8dmFuZ3VhcmR8dmN8dmV8dmVnYXN8dmVudHVyZXN8dmVyaXNpZ258dmVyc2ljaGVydW5nfHZldHx2Z3x2aXx2aWFqZXN8dmlkZW98dmlnfHZpa2luZ3x2aWxsYXN8dmlufHZpcHx2aXJnaW58dmlzYXx2aXNpb258dmlzdGF8dmlzdGFwcmludHx2aXZhfHZpdm98dmxhYW5kZXJlbnx2bnx2b2RrYXx2b2xrc3dhZ2VufHZvbHZvfHZvdGV8dm90aW5nfHZvdG98dm95YWdlfHZ1fHZ1ZWxvc3x3YWxlc3x3YWxtYXJ0fHdhbHRlcnx3YW5nfHdhbmdnb3V8d2FybWFufHdhdGNofHdhdGNoZXN8d2VhdGhlcnx3ZWF0aGVyY2hhbm5lbHx3ZWJjYW18d2ViZXJ8d2Vic2l0ZXx3ZWR8d2VkZGluZ3x3ZWlib3x3ZWlyfHdmfHdob3N3aG98d2llbnx3aWtpfHdpbGxpYW1oaWxsfHdpbnx3aW5kb3dzfHdpbmV8d2lubmVyc3x3bWV8d29sdGVyc2tsdXdlcnx3b29kc2lkZXx3b3JrfHdvcmtzfHdvcmxkfHdvd3x3c3x3dGN8d3RmfHhib3h8eGVyb3h8eGZpbml0eXx4aWh1YW58eGlufHhuLS0xMWI0YzNkfHhuLS0xY2syZTFifHhuLS0xcXF3MjNhfHhuLS0yc2NyajljfHhuLS0zMHJyN3l8eG4tLTNic3QwMG18eG4tLTNkczQ0M2d8eG4tLTNlMGI3MDdlfHhuLS0zaGNyajljfHhuLS0zb3ExOHZsOHBuMzZhfHhuLS0zcHh1OGt8eG4tLTQyYzJkOWF8eG4tLTQ1YnI1Y3lsfHhuLS00NWJyajljfHhuLS00NXExMWN8eG4tLTRnYnJpbXx4bi0tNTRiN2Z0YTBjY3x4bi0tNTVxdzQyZ3x4bi0tNTVxeDVkfHhuLS01c3UzNGo5MzZiZ3NnfHhuLS01dHptNWd8eG4tLTZmcno4Mmd8eG4tLTZxcTk4NmIzeGx8eG4tLTgwYWR4aGtzfHhuLS04MGFvMjFhfHhuLS04MGFxZWNkcjFhfHhuLS04MGFzZWhkYnx4bi0tODBhc3dnfHhuLS04eTBhMDYzYXx4bi0tOTBhM2FjfHhuLS05MGFlfHhuLS05MGFpc3x4bi0tOWRicTJhfHhuLS05ZXQ1MnV8eG4tLTlrcnQwMGF8eG4tLWI0dzYwNWZlcmR8eG4tLWJjazFiOWE1ZHJlNGN8eG4tLWMxYXZnfHhuLS1jMmJyN2d8eG4tLWNjazJiM2J8eG4tLWNnNGJraXx4bi0tY2xjaGMwZWEwYjJnMmE5Z2NkfHhuLS1jenI2OTRifHhuLS1jenJzMHR8eG4tLWN6cnUyZHx4bi0tZDFhY2ozYnx4bi0tZDFhbGZ8eG4tLWUxYTRjfHhuLS1lY2t2ZHRjOWR8eG4tLWVmdnk4OGh8eG4tLWVzdHY3NWd8eG4tLWZjdDQyOWt8eG4tLWZoYmVpfHhuLS1maXEyMjhjNWhzfHhuLS1maXE2NGJ8eG4tLWZpcXM4c3x4bi0tZmlxejlzfHhuLS1manE3MjBhfHhuLS1mbHczNTFlfHhuLS1mcGNyajljM2R8eG4tLWZ6YzJjOWUyY3x4bi0tZnp5czhkNjl1dmdtfHhuLS1nMnh4NDhjfHhuLS1nY2tyM2YwZnx4bi0tZ2Vjcmo5Y3x4bi0tZ2szYXQxZXx4bi0taDJicmVnM2V2ZXx4bi0taDJicmo5Y3x4bi0taDJicmo5YzhjfHhuLS1oeHQ4MTRlfHhuLS1pMWI2YjFhNmEyZXx4bi0taW1yNTEzbnx4bi0taW8wYTdpfHhuLS1qMWFlZnx4bi0tajFhbWh8eG4tLWo2dzE5M2d8eG4tLWpscTYxdTl3N2J8eG4tLWp2cjE4OW18eG4tLWtjcng3N2QxeDRhfHhuLS1rcHJ3MTNkfHhuLS1rcHJ5NTdkfHhuLS1rcHU3MTZmfHhuLS1rcHV0M2l8eG4tLWwxYWNjfHhuLS1sZ2JiYXQxYWQ4anx4bi0tbWdiOWF3YmZ8eG4tLW1nYmEzYTNlanR8eG4tLW1nYmEzYTRmMTZhfHhuLS1tZ2JhN2MwYmJuMGF8eG4tLW1nYmFha2M3ZHZmfHhuLS1tZ2JhYW03YThofHhuLS1tZ2JhYjJiZHx4bi0tbWdiYWk5YXpncXA2anx4bi0tbWdiYXloN2dwYXx4bi0tbWdiYjlmYnBvYnx4bi0tbWdiYmgxYXx4bi0tbWdiYmgxYTcxZXx4bi0tbWdiYzBhOWF6Y2d8eG4tLW1nYmNhN2R6ZG98eG4tLW1nYmVycDRhNWQ0YXJ8eG4tLW1nYmd1ODJhfHhuLS1tZ2JpNGVjZXhwfHhuLS1tZ2JwbDJmaHx4bi0tbWdidDNkaGR8eG4tLW1nYnR4MmJ8eG4tLW1nYng0Y2QwYWJ8eG4tLW1peDg5MWZ8eG4tLW1rMWJ1NDRjfHhuLS1teHRxMW18eG4tLW5nYmM1YXpkfHhuLS1uZ2JlOWUwYXx4bi0tbmdicnh8eG4tLW5vZGV8eG4tLW5xdjdmfHhuLS1ucXY3ZnMwMGVtYXx4bi0tbnlxeTI2YXx4bi0tbzNjdzRofHhuLS1vZ2JwZjhmbHx4bi0tcDFhY2Z8eG4tLXAxYWl8eG4tLXBidDk3N2N8eG4tLXBnYnMwZGh8eG4tLXBzc3kydXx4bi0tcTlqeWI0Y3x4bi0tcWNrYTFwbWN8eG4tLXF4YW18eG4tLXJocXY5Nmd8eG4tLXJvdnU4OGJ8eG4tLXJ2YzFlMGFtM2V8eG4tLXM5YnJqOWN8eG4tLXNlczU1NGd8eG4tLXQ2MGI1NmF8eG4tLXRja3dlfHhuLS10aXE0OXhxeWp8eG4tLXVudXA0eXx4bi0tdmVybWdlbnNiZXJhdGVyLWN0Ynx4bi0tdmVybWdlbnNiZXJhdHVuZy1wd2J8eG4tLXZocXV2fHhuLS12dXE4NjFifHhuLS13NHI4NWVsOGZodTVkbnJhfHhuLS13NHJzNDBsfHhuLS13Z2JoMWN8eG4tLXdnYmw2YXx4bi0teGhxNTIxYnx4bi0teGtjMmFsM2h5ZTJhfHhuLS14a2MyZGwzYTVlZTBofHhuLS15OWEzYXF8eG4tLXlmcm80aTY3b3x4bi0teWdiaTJhbW14fHhuLS16ZnIxNjRifHhwZXJpYXx4eHh8eHl6fHlhY2h0c3x5YWhvb3x5YW1heHVufHlhbmRleHx5ZXx5b2RvYmFzaGl8eW9nYXx5b2tvaGFtYXx5b3V8eW91dHViZXx5dHx5dW58emF8emFwcG9zfHphcmF8emVyb3x6aXB8emlwcG98em18em9uZXx6dWVyaWNofHp3Jy5zcGxpdCgnfCcpOyAvLyBtYWNybywgc2VlIGd1bHBmaWxlLmpzXG5cbi8qKlxuXHRUaGUgc2Nhbm5lciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgdGhhdCB0YWtlcyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0LCBhbmRcblx0b3V0cHV0cyBhbiBhcnJheSBvZiB0b2tlbnMgaW5zdGFuY2VzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGVhc3kgVVJMIHBhcnNpbmcuXG5cblx0QG1vZHVsZSBsaW5raWZ5XG5cdEBzdWJtb2R1bGUgc2Nhbm5lclxuXHRAbWFpbiBzY2FubmVyXG4qL1xuXG52YXIgTlVNQkVSUyA9ICcwMTIzNDU2Nzg5Jy5zcGxpdCgnJyk7XG52YXIgQUxQSEFOVU0gPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jy5zcGxpdCgnJyk7XG52YXIgV0hJVEVTUEFDRSA9IFsnICcsICdcXGYnLCAnXFxyJywgJ1xcdCcsICdcXHYnLCAnXFx4QTAnLCAnXFx1MTY4MCcsICdcXHUxODBFJ107IC8vIGV4Y2x1ZGluZyBsaW5lIGJyZWFrc1xuXG52YXIgZG9tYWluU3RhdGVzID0gW107IC8vIHN0YXRlcyB0aGF0IGp1bXAgdG8gRE9NQUlOIG9uIC9bYS16MC05XS9cbnZhciBtYWtlU3RhdGUgPSBmdW5jdGlvbiBtYWtlU3RhdGUodG9rZW5DbGFzcykge1xuXHRyZXR1cm4gbmV3IF9zdGF0ZS5DaGFyYWN0ZXJTdGF0ZSh0b2tlbkNsYXNzKTtcbn07XG5cbi8vIEZyZXF1ZW50bHkgdXNlZCBzdGF0ZXNcbnZhciBTX1NUQVJUID0gbWFrZVN0YXRlKCk7XG52YXIgU19OVU0gPSBtYWtlU3RhdGUoX3RleHQuTlVNKTtcbnZhciBTX0RPTUFJTiA9IG1ha2VTdGF0ZShfdGV4dC5ET01BSU4pO1xudmFyIFNfRE9NQUlOX0hZUEhFTiA9IG1ha2VTdGF0ZSgpOyAvLyBkb21haW4gZm9sbG93ZWQgYnkgMSBvciBtb3JlIGh5cGhlbiBjaGFyYWN0ZXJzXG52YXIgU19XUyA9IG1ha2VTdGF0ZShfdGV4dC5XUyk7XG5cbi8vIFN0YXRlcyBmb3Igc3BlY2lhbCBVUkwgc3ltYm9sc1xuU19TVEFSVC5vbignQCcsIG1ha2VTdGF0ZShfdGV4dC5BVCkpLm9uKCcuJywgbWFrZVN0YXRlKF90ZXh0LkRPVCkpLm9uKCcrJywgbWFrZVN0YXRlKF90ZXh0LlBMVVMpKS5vbignIycsIG1ha2VTdGF0ZShfdGV4dC5QT1VORCkpLm9uKCc/JywgbWFrZVN0YXRlKF90ZXh0LlFVRVJZKSkub24oJy8nLCBtYWtlU3RhdGUoX3RleHQuU0xBU0gpKS5vbignXycsIG1ha2VTdGF0ZShfdGV4dC5VTkRFUlNDT1JFKSkub24oJzonLCBtYWtlU3RhdGUoX3RleHQuQ09MT04pKS5vbigneycsIG1ha2VTdGF0ZShfdGV4dC5PUEVOQlJBQ0UpKS5vbignWycsIG1ha2VTdGF0ZShfdGV4dC5PUEVOQlJBQ0tFVCkpLm9uKCc8JywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5BTkdMRUJSQUNLRVQpKS5vbignKCcsIG1ha2VTdGF0ZShfdGV4dC5PUEVOUEFSRU4pKS5vbignfScsIG1ha2VTdGF0ZShfdGV4dC5DTE9TRUJSQUNFKSkub24oJ10nLCBtYWtlU3RhdGUoX3RleHQuQ0xPU0VCUkFDS0VUKSkub24oJz4nLCBtYWtlU3RhdGUoX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQpKS5vbignKScsIG1ha2VTdGF0ZShfdGV4dC5DTE9TRVBBUkVOKSkub24oJyYnLCBtYWtlU3RhdGUoX3RleHQuQU1QRVJTQU5EKSkub24oWycsJywgJzsnLCAnIScsICdcIicsICdcXCcnXSwgbWFrZVN0YXRlKF90ZXh0LlBVTkNUVUFUSU9OKSk7XG5cbi8vIFdoaXRlc3BhY2UganVtcHNcbi8vIFRva2VucyBvZiBvbmx5IG5vbi1uZXdsaW5lIHdoaXRlc3BhY2UgYXJlIGFyYml0cmFyaWx5IGxvbmdcblNfU1RBUlQub24oJ1xcbicsIG1ha2VTdGF0ZShfdGV4dC5OTCkpLm9uKFdISVRFU1BBQ0UsIFNfV1MpO1xuXG4vLyBJZiBhbnkgd2hpdGVzcGFjZSBleGNlcHQgbmV3bGluZSwgbW9yZSB3aGl0ZXNwYWNlIVxuU19XUy5vbihXSElURVNQQUNFLCBTX1dTKTtcblxuLy8gR2VuZXJhdGVzIHN0YXRlcyBmb3IgdG9wLWxldmVsIGRvbWFpbnNcbi8vIE5vdGUgdGhhdCB0aGlzIGlzIG1vc3QgYWNjdXJhdGUgd2hlbiB0bGRzIGFyZSBpbiBhbHBoYWJldGljYWwgb3JkZXJcbmZvciAodmFyIGkgPSAwOyBpIDwgdGxkcy5sZW5ndGg7IGkrKykge1xuXHR2YXIgbmV3U3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkodGxkc1tpXSwgU19TVEFSVCwgX3RleHQuVExELCBfdGV4dC5ET01BSU4pO1xuXHRkb21haW5TdGF0ZXMucHVzaC5hcHBseShkb21haW5TdGF0ZXMsIG5ld1N0YXRlcyk7XG59XG5cbi8vIENvbGxlY3QgdGhlIHN0YXRlcyBnZW5lcmF0ZWQgYnkgZGlmZmVyZW50IHByb3RvY2xzXG52YXIgcGFydGlhbFByb3RvY29sRmlsZVN0YXRlcyA9ICgwLCBfc3RhdGUuc3RhdGVpZnkpKCdmaWxlJywgU19TVEFSVCwgX3RleHQuRE9NQUlOLCBfdGV4dC5ET01BSU4pO1xudmFyIHBhcnRpYWxQcm90b2NvbEZ0cFN0YXRlcyA9ICgwLCBfc3RhdGUuc3RhdGVpZnkpKCdmdHAnLCBTX1NUQVJULCBfdGV4dC5ET01BSU4sIF90ZXh0LkRPTUFJTik7XG52YXIgcGFydGlhbFByb3RvY29sSHR0cFN0YXRlcyA9ICgwLCBfc3RhdGUuc3RhdGVpZnkpKCdodHRwJywgU19TVEFSVCwgX3RleHQuRE9NQUlOLCBfdGV4dC5ET01BSU4pO1xudmFyIHBhcnRpYWxQcm90b2NvbE1haWx0b1N0YXRlcyA9ICgwLCBfc3RhdGUuc3RhdGVpZnkpKCdtYWlsdG8nLCBTX1NUQVJULCBfdGV4dC5ET01BSU4sIF90ZXh0LkRPTUFJTik7XG5cbi8vIEFkZCB0aGUgc3RhdGVzIHRvIHRoZSBhcnJheSBvZiBET01BSU5lcmljIHN0YXRlc1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsUHJvdG9jb2xGaWxlU3RhdGVzKTtcbmRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgcGFydGlhbFByb3RvY29sRnRwU3RhdGVzKTtcbmRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgcGFydGlhbFByb3RvY29sSHR0cFN0YXRlcyk7XG5kb21haW5TdGF0ZXMucHVzaC5hcHBseShkb21haW5TdGF0ZXMsIHBhcnRpYWxQcm90b2NvbE1haWx0b1N0YXRlcyk7XG5cbi8vIFByb3RvY29sIHN0YXRlc1xudmFyIFNfUFJPVE9DT0xfRklMRSA9IHBhcnRpYWxQcm90b2NvbEZpbGVTdGF0ZXMucG9wKCk7XG52YXIgU19QUk9UT0NPTF9GVFAgPSBwYXJ0aWFsUHJvdG9jb2xGdHBTdGF0ZXMucG9wKCk7XG52YXIgU19QUk9UT0NPTF9IVFRQID0gcGFydGlhbFByb3RvY29sSHR0cFN0YXRlcy5wb3AoKTtcbnZhciBTX01BSUxUTyA9IHBhcnRpYWxQcm90b2NvbE1haWx0b1N0YXRlcy5wb3AoKTtcbnZhciBTX1BST1RPQ09MX1NFQ1VSRSA9IG1ha2VTdGF0ZShfdGV4dC5ET01BSU4pO1xudmFyIFNfRlVMTF9QUk9UT0NPTCA9IG1ha2VTdGF0ZShfdGV4dC5QUk9UT0NPTCk7IC8vIEZ1bGwgcHJvdG9jb2wgZW5kcyB3aXRoIENPTE9OXG52YXIgU19GVUxMX01BSUxUTyA9IG1ha2VTdGF0ZShfdGV4dC5NQUlMVE8pOyAvLyBNYWlsdG8gZW5kcyB3aXRoIENPTE9OXG5cbi8vIFNlY3VyZSBwcm90b2NvbHMgKGVuZCB3aXRoICdzJylcblNfUFJPVE9DT0xfRlRQLm9uKCdzJywgU19QUk9UT0NPTF9TRUNVUkUpLm9uKCc6JywgU19GVUxMX1BST1RPQ09MKTtcblxuU19QUk9UT0NPTF9IVFRQLm9uKCdzJywgU19QUk9UT0NPTF9TRUNVUkUpLm9uKCc6JywgU19GVUxMX1BST1RPQ09MKTtcblxuZG9tYWluU3RhdGVzLnB1c2goU19QUk9UT0NPTF9TRUNVUkUpO1xuXG4vLyBCZWNvbWUgcHJvdG9jb2wgdG9rZW5zIGFmdGVyIGEgQ09MT05cblNfUFJPVE9DT0xfRklMRS5vbignOicsIFNfRlVMTF9QUk9UT0NPTCk7XG5TX1BST1RPQ09MX1NFQ1VSRS5vbignOicsIFNfRlVMTF9QUk9UT0NPTCk7XG5TX01BSUxUTy5vbignOicsIFNfRlVMTF9NQUlMVE8pO1xuXG4vLyBMb2NhbGhvc3RcbnZhciBwYXJ0aWFsTG9jYWxob3N0U3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2xvY2FsaG9zdCcsIFNfU1RBUlQsIF90ZXh0LkxPQ0FMSE9TVCwgX3RleHQuRE9NQUlOKTtcbmRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgcGFydGlhbExvY2FsaG9zdFN0YXRlcyk7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZVxuLy8gRE9NQUlOcyBtYWtlIG1vcmUgRE9NQUlOc1xuLy8gTnVtYmVyIGFuZCBjaGFyYWN0ZXIgdHJhbnNpdGlvbnNcblNfU1RBUlQub24oTlVNQkVSUywgU19OVU0pO1xuU19OVU0ub24oJy0nLCBTX0RPTUFJTl9IWVBIRU4pLm9uKE5VTUJFUlMsIFNfTlVNKS5vbihBTFBIQU5VTSwgU19ET01BSU4pOyAvLyBudW1iZXIgYmVjb21lcyBET01BSU5cblxuU19ET01BSU4ub24oJy0nLCBTX0RPTUFJTl9IWVBIRU4pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7XG5cbi8vIEFsbCB0aGUgZ2VuZXJhdGVkIHN0YXRlcyBzaG91bGQgaGF2ZSBhIGp1bXAgdG8gRE9NQUlOXG5mb3IgKHZhciBfaSA9IDA7IF9pIDwgZG9tYWluU3RhdGVzLmxlbmd0aDsgX2krKykge1xuXHRkb21haW5TdGF0ZXNbX2ldLm9uKCctJywgU19ET01BSU5fSFlQSEVOKS5vbihBTFBIQU5VTSwgU19ET01BSU4pO1xufVxuXG5TX0RPTUFJTl9IWVBIRU4ub24oJy0nLCBTX0RPTUFJTl9IWVBIRU4pLm9uKE5VTUJFUlMsIFNfRE9NQUlOKS5vbihBTFBIQU5VTSwgU19ET01BSU4pO1xuXG4vLyBTZXQgZGVmYXVsdCB0cmFuc2l0aW9uXG5TX1NUQVJULmRlZmF1bHRUcmFuc2l0aW9uID0gbWFrZVN0YXRlKF90ZXh0LlNZTSk7XG5cbi8qKlxuXHRHaXZlbiBhIHN0cmluZywgcmV0dXJucyBhbiBhcnJheSBvZiBUT0tFTiBpbnN0YW5jZXMgcmVwcmVzZW50aW5nIHRoZVxuXHRjb21wb3NpdGlvbiBvZiB0aGF0IHN0cmluZy5cblxuXHRAbWV0aG9kIHJ1blxuXHRAcGFyYW0ge1N0cmluZ30gc3RyIElucHV0IHN0cmluZyB0byBzY2FuXG5cdEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBUT0tFTiBpbnN0YW5jZXNcbiovXG52YXIgcnVuID0gZnVuY3Rpb24gcnVuKHN0cikge1xuXG5cdC8vIFRoZSBzdGF0ZSBtYWNoaW5lIG9ubHkgbG9va3MgYXQgbG93ZXJjYXNlIHN0cmluZ3MuXG5cdC8vIFRoaXMgc2VsZWN0aXZlIGB0b0xvd2VyQ2FzZWAgaXMgdXNlZCBiZWNhdXNlIGxvd2VyY2FzaW5nIHRoZSBlbnRpcmVcblx0Ly8gc3RyaW5nIGNhdXNlcyB0aGUgbGVuZ3RoIGFuZCBjaGFyYWN0ZXIgcG9zaXRpb24gdG8gdmFyeSBpbiBzb21lIGluIHNvbWVcblx0Ly8gbm9uLUVuZ2xpc2ggc3RyaW5ncy4gVGhpcyBoYXBwZW5zIG9ubHkgb24gVjgtYmFzZWQgcnVudGltZXMuXG5cdHZhciBsb3dlclN0ciA9IHN0ci5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiBjLnRvTG93ZXJDYXNlKCk7XG5cdH0pO1xuXHR2YXIgbGVuID0gc3RyLmxlbmd0aDtcblx0dmFyIHRva2VucyA9IFtdOyAvLyByZXR1cm4gdmFsdWVcblxuXHR2YXIgY3Vyc29yID0gMDtcblxuXHQvLyBUb2tlbml6ZSB0aGUgc3RyaW5nXG5cdHdoaWxlIChjdXJzb3IgPCBsZW4pIHtcblx0XHR2YXIgc3RhdGUgPSBTX1NUQVJUO1xuXHRcdHZhciBuZXh0U3RhdGUgPSBudWxsO1xuXHRcdHZhciB0b2tlbkxlbmd0aCA9IDA7XG5cdFx0dmFyIGxhdGVzdEFjY2VwdGluZyA9IG51bGw7XG5cdFx0dmFyIHNpbmNlQWNjZXB0cyA9IC0xO1xuXG5cdFx0d2hpbGUgKGN1cnNvciA8IGxlbiAmJiAobmV4dFN0YXRlID0gc3RhdGUubmV4dChsb3dlclN0cltjdXJzb3JdKSkpIHtcblx0XHRcdHN0YXRlID0gbmV4dFN0YXRlO1xuXG5cdFx0XHQvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXRlc3QgYWNjZXB0aW5nIHN0YXRlXG5cdFx0XHRpZiAoc3RhdGUuYWNjZXB0cygpKSB7XG5cdFx0XHRcdHNpbmNlQWNjZXB0cyA9IDA7XG5cdFx0XHRcdGxhdGVzdEFjY2VwdGluZyA9IHN0YXRlO1xuXHRcdFx0fSBlbHNlIGlmIChzaW5jZUFjY2VwdHMgPj0gMCkge1xuXHRcdFx0XHRzaW5jZUFjY2VwdHMrKztcblx0XHRcdH1cblxuXHRcdFx0dG9rZW5MZW5ndGgrKztcblx0XHRcdGN1cnNvcisrO1xuXHRcdH1cblxuXHRcdGlmIChzaW5jZUFjY2VwdHMgPCAwKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9IC8vIFNob3VsZCBuZXZlciBoYXBwZW5cblxuXHRcdC8vIFJvbGwgYmFjayB0byB0aGUgbGF0ZXN0IGFjY2VwdGluZyBzdGF0ZVxuXHRcdGN1cnNvciAtPSBzaW5jZUFjY2VwdHM7XG5cdFx0dG9rZW5MZW5ndGggLT0gc2luY2VBY2NlcHRzO1xuXG5cdFx0Ly8gR2V0IHRoZSBjbGFzcyBmb3IgdGhlIG5ldyB0b2tlblxuXHRcdHZhciBUT0tFTiA9IGxhdGVzdEFjY2VwdGluZy5lbWl0KCk7IC8vIEN1cnJlbnQgdG9rZW4gY2xhc3NcblxuXHRcdC8vIE5vIG1vcmUganVtcHMsIGp1c3QgbWFrZSBhIG5ldyB0b2tlblxuXHRcdHRva2Vucy5wdXNoKG5ldyBUT0tFTihzdHIuc3Vic3RyKGN1cnNvciAtIHRva2VuTGVuZ3RoLCB0b2tlbkxlbmd0aCkpKTtcblx0fVxuXG5cdHJldHVybiB0b2tlbnM7XG59O1xuXG52YXIgc3RhcnQgPSBTX1NUQVJUO1xuZXhwb3J0cy5TdGF0ZSA9IF9zdGF0ZS5DaGFyYWN0ZXJTdGF0ZTtcbmV4cG9ydHMuVE9LRU5TID0gVE9LRU5TO1xuZXhwb3J0cy5ydW4gPSBydW47XG5leHBvcnRzLnN0YXJ0ID0gc3RhcnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGF0ZWlmeSA9IGV4cG9ydHMuVG9rZW5TdGF0ZSA9IGV4cG9ydHMuQ2hhcmFjdGVyU3RhdGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2xhc3MgPSByZXF1aXJlKCcuLi91dGlscy9jbGFzcycpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZUNsYXNzKCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHRDbGFzcykge1xuXHRcdHRoaXMuaiA9IFtdO1xuXHRcdHRoaXMuVCA9IHRDbGFzcyB8fCBudWxsO1xuXHR9O1xufVxuXG4vKipcblx0QSBzaW1wbGUgc3RhdGUgbWFjaGluZSB0aGF0IGNhbiBlbWl0IHRva2VuIGNsYXNzZXNcblxuXHRUaGUgYGpgIHByb3BlcnR5IGluIHRoaXMgY2xhc3MgcmVmZXJzIHRvIHN0YXRlIGp1bXBzLiBJdCdzIGFcblx0bXVsdGlkaW1lbnNpb25hbCBhcnJheSB3aGVyZSBmb3IgZWFjaCBlbGVtZW50OlxuXG5cdCogaW5kZXggWzBdIGlzIGEgc3ltYm9sIG9yIGNsYXNzIG9mIHN5bWJvbHMgdG8gdHJhbnNpdGlvbiB0by5cblx0KiBpbmRleCBbMV0gaXMgYSBTdGF0ZSBpbnN0YW5jZSB3aGljaCBtYXRjaGVzXG5cblx0VGhlIHR5cGUgb2Ygc3ltYm9sIHdpbGwgZGVwZW5kIG9uIHRoZSB0YXJnZXQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgY2xhc3MuXG5cdEluIExpbmtpZnksIHdlIGhhdmUgYSB0d28tc3RhZ2Ugc2Nhbm5lci4gRWFjaCBzdGFnZSB1c2VzIHRoaXMgc3RhdGUgbWFjaGluZVxuXHRidXQgd2l0aCBhIHNsaWdobHkgZGlmZmVyZW50IChwb2x5bW9ycGhpYykgaW1wbGVtZW50YXRpb24uXG5cblx0VGhlIGBUYCBwcm9wZXJ0eSByZWZlcnMgdG8gdGhlIHRva2VuIGNsYXNzLlxuXG5cdFRPRE86IENhbiB0aGUgYG9uYCBhbmQgYG5leHRgIG1ldGhvZHMgYmUgY29tYmluZWQ/XG5cblx0QGNsYXNzIEJhc2VTdGF0ZVxuKi9cbnZhciBCYXNlU3RhdGUgPSBjcmVhdGVTdGF0ZUNsYXNzKCk7XG5CYXNlU3RhdGUucHJvdG90eXBlID0ge1xuXHRkZWZhdWx0VHJhbnNpdGlvbjogZmFsc2UsXG5cblx0LyoqXG4gXHRAbWV0aG9kIGNvbnN0cnVjdG9yXG4gXHRAcGFyYW0ge0NsYXNzfSB0Q2xhc3MgUGFzcyBpbiB0aGUga2luZCBvZiB0b2tlbiB0byBlbWl0IGlmIHRoZXJlIGFyZVxuIFx0XHRubyBqdW1wcyBhZnRlciB0aGlzIHN0YXRlIGFuZCB0aGUgc3RhdGUgaXMgYWNjZXB0aW5nLlxuICovXG5cblx0LyoqXG4gXHRPbiB0aGUgZ2l2ZW4gc3ltYm9sKHMpLCB0aGlzIG1hY2hpbmUgc2hvdWxkIGdvIHRvIHRoZSBnaXZlbiBzdGF0ZVxuIFx0XHRAbWV0aG9kIG9uXG4gXHRAcGFyYW0ge0FycmF5fE1peGVkfSBzeW1ib2xcbiBcdEBwYXJhbSB7QmFzZVN0YXRlfSBzdGF0ZSBOb3RlIHRoYXQgdGhlIHR5cGUgb2YgdGhpcyBzdGF0ZSBzaG91bGQgYmUgdGhlXG4gXHRcdHNhbWUgYXMgdGhlIGN1cnJlbnQgaW5zdGFuY2UgKGkuZS4sIGRvbid0IHBhc3MgaW4gYSBkaWZmZXJlbnRcbiBcdFx0c3ViY2xhc3MpXG4gKi9cblx0b246IGZ1bmN0aW9uIG9uKHN5bWJvbCwgc3RhdGUpIHtcblx0XHRpZiAoc3ltYm9sIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9sLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuai5wdXNoKFtzeW1ib2xbaV0sIHN0YXRlXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0dGhpcy5qLnB1c2goW3N5bWJvbCwgc3RhdGVdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXG5cdC8qKlxuIFx0R2l2ZW4gdGhlIG5leHQgaXRlbSwgcmV0dXJucyBuZXh0IHN0YXRlIGZvciB0aGF0IGl0ZW1cbiBcdEBtZXRob2QgbmV4dFxuIFx0QHBhcmFtIHtNaXhlZH0gaXRlbSBTaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YgdGhlIHN5bWJvbHMgaGFuZGxlZCBieVxuIFx0XHR0aGlzIHBhcnRpY3VsYXIgbWFjaGluZS5cbiBcdEByZXR1cm4ge1N0YXRlfSBzdGF0ZSBSZXR1cm5zIGZhbHNlIGlmIG5vIGp1bXBzIGFyZSBhdmFpbGFibGVcbiAqL1xuXHRuZXh0OiBmdW5jdGlvbiBuZXh0KGl0ZW0pIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuai5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGp1bXAgPSB0aGlzLmpbaV07XG5cdFx0XHR2YXIgc3ltYm9sID0ganVtcFswXTsgLy8gTmV4dCBpdGVtIHRvIGNoZWNrIGZvclxuXHRcdFx0dmFyIHN0YXRlID0ganVtcFsxXTsgLy8gU3RhdGUgdG8ganVtcCB0byBpZiBpdGVtcyBtYXRjaFxuXG5cdFx0XHQvLyBjb21wYXJlIGl0ZW0gd2l0aCBzeW1ib2xcblx0XHRcdGlmICh0aGlzLnRlc3QoaXRlbSwgc3ltYm9sKSkge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTm93aGVyZSBsZWZ0IHRvIGp1bXAhXG5cdFx0cmV0dXJuIHRoaXMuZGVmYXVsdFRyYW5zaXRpb247XG5cdH0sXG5cblxuXHQvKipcbiBcdERvZXMgdGhpcyBzdGF0ZSBhY2NlcHQ/XG4gXHRgdHJ1ZWAgb25seSBvZiBgdGhpcy5UYCBleGlzdHNcbiBcdFx0QG1ldGhvZCBhY2NlcHRzXG4gXHRAcmV0dXJuIHtCb29sZWFufVxuICovXG5cdGFjY2VwdHM6IGZ1bmN0aW9uIGFjY2VwdHMoKSB7XG5cdFx0cmV0dXJuICEhdGhpcy5UO1xuXHR9LFxuXG5cblx0LyoqXG4gXHREZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGl0ZW0gXCJzeW1ib2xpemVzXCIgdGhlIHN5bWJvbCwgd2hlcmUgc3ltYm9sIGlzXG4gXHRhIGNsYXNzIG9mIGl0ZW1zIGhhbmRsZWQgYnkgdGhpcyBzdGF0ZSBtYWNoaW5lLlxuIFx0XHRUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGVuIGluIGV4dGVuZGVkIGNsYXNzZXMuXG4gXHRcdEBtZXRob2QgdGVzdFxuIFx0QHBhcmFtIHtNaXhlZH0gaXRlbSBEb2VzIHRoaXMgaXRlbSBtYXRjaCB0aGUgZ2l2ZW4gc3ltYm9sP1xuIFx0QHBhcmFtIHtNaXhlZH0gc3ltYm9sXG4gXHRAcmV0dXJuIHtCb29sZWFufVxuICovXG5cdHRlc3Q6IGZ1bmN0aW9uIHRlc3QoaXRlbSwgc3ltYm9sKSB7XG5cdFx0cmV0dXJuIGl0ZW0gPT09IHN5bWJvbDtcblx0fSxcblxuXG5cdC8qKlxuIFx0RW1pdCB0aGUgdG9rZW4gZm9yIHRoaXMgU3RhdGUgKGp1c3QgcmV0dXJuIGl0IGluIHRoaXMgY2FzZSlcbiBcdElmIHRoaXMgZW1pdHMgYSB0b2tlbiwgdGhpcyBpbnN0YW5jZSBpcyBhbiBhY2NlcHRpbmcgc3RhdGVcbiBcdEBtZXRob2QgZW1pdFxuIFx0QHJldHVybiB7Q2xhc3N9IFRcbiAqL1xuXHRlbWl0OiBmdW5jdGlvbiBlbWl0KCkge1xuXHRcdHJldHVybiB0aGlzLlQ7XG5cdH1cbn07XG5cbi8qKlxuXHRTdGF0ZSBtYWNoaW5lIGZvciBzdHJpbmctYmFzZWQgaW5wdXRcblxuXHRAY2xhc3MgQ2hhcmFjdGVyU3RhdGVcblx0QGV4dGVuZHMgQmFzZVN0YXRlXG4qL1xudmFyIENoYXJhY3RlclN0YXRlID0gKDAsIF9jbGFzcy5pbmhlcml0cykoQmFzZVN0YXRlLCBjcmVhdGVTdGF0ZUNsYXNzKCksIHtcblx0LyoqXG4gXHREb2VzIHRoZSBnaXZlbiBjaGFyYWN0ZXIgbWF0Y2ggdGhlIGdpdmVuIGNoYXJhY3RlciBvciByZWd1bGFyXG4gXHRleHByZXNzaW9uP1xuIFx0XHRAbWV0aG9kIHRlc3RcbiBcdEBwYXJhbSB7U3RyaW5nfSBjaGFyXG4gXHRAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGNoYXJPclJlZ0V4cFxuIFx0QHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXHR0ZXN0OiBmdW5jdGlvbiB0ZXN0KGNoYXJhY3RlciwgY2hhck9yUmVnRXhwKSB7XG5cdFx0cmV0dXJuIGNoYXJhY3RlciA9PT0gY2hhck9yUmVnRXhwIHx8IGNoYXJPclJlZ0V4cCBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBjaGFyT3JSZWdFeHAudGVzdChjaGFyYWN0ZXIpO1xuXHR9XG59KTtcblxuLyoqXG5cdFN0YXRlIG1hY2hpbmUgZm9yIGlucHV0IGluIHRoZSBmb3JtIG9mIFRleHRUb2tlbnNcblxuXHRAY2xhc3MgVG9rZW5TdGF0ZVxuXHRAZXh0ZW5kcyBCYXNlU3RhdGVcbiovXG52YXIgVG9rZW5TdGF0ZSA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKEJhc2VTdGF0ZSwgY3JlYXRlU3RhdGVDbGFzcygpLCB7XG5cblx0LyoqXG4gICogU2ltaWxhciB0byBgb25gLCBidXQgcmV0dXJucyB0aGUgc3RhdGUgdGhlIHJlc3VsdHMgaW4gdGhlIHRyYW5zaXRpb24gZnJvbVxuICAqIHRoZSBnaXZlbiBpdGVtXG4gICogQG1ldGhvZCBqdW1wXG4gICogQHBhcmFtIHtNaXhlZH0gaXRlbVxuICAqIEBwYXJhbSB7VG9rZW59IFt0b2tlbl1cbiAgKiBAcmV0dXJuIHN0YXRlXG4gICovXG5cdGp1bXA6IGZ1bmN0aW9uIGp1bXAodG9rZW4pIHtcblx0XHR2YXIgdENsYXNzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuXG5cdFx0dmFyIHN0YXRlID0gdGhpcy5uZXh0KG5ldyB0b2tlbignJykpOyAvLyBkdW1teSB0ZW1wIHRva2VuXG5cdFx0aWYgKHN0YXRlID09PSB0aGlzLmRlZmF1bHRUcmFuc2l0aW9uKSB7XG5cdFx0XHQvLyBNYWtlIGEgbmV3IHN0YXRlIVxuXHRcdFx0c3RhdGUgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0Q2xhc3MpO1xuXHRcdFx0dGhpcy5vbih0b2tlbiwgc3RhdGUpO1xuXHRcdH0gZWxzZSBpZiAodENsYXNzKSB7XG5cdFx0XHRzdGF0ZS5UID0gdENsYXNzO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cblxuXHQvKipcbiBcdElzIHRoZSBnaXZlbiB0b2tlbiBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gdG9rZW4gY2xhc3M/XG4gXHRcdEBtZXRob2QgdGVzdFxuIFx0QHBhcmFtIHtUZXh0VG9rZW59IHRva2VuXG4gXHRAcGFyYW0ge0NsYXNzfSB0b2tlbkNsYXNzXG4gXHRAcmV0dXJuIHtCb29sZWFufVxuICovXG5cdHRlc3Q6IGZ1bmN0aW9uIHRlc3QodG9rZW4sIHRva2VuQ2xhc3MpIHtcblx0XHRyZXR1cm4gdG9rZW4gaW5zdGFuY2VvZiB0b2tlbkNsYXNzO1xuXHR9XG59KTtcblxuLyoqXG5cdEdpdmVuIGEgbm9uLWVtcHR5IHRhcmdldCBzdHJpbmcsIGdlbmVyYXRlcyBzdGF0ZXMgKGlmIHJlcXVpcmVkKSBmb3IgZWFjaFxuXHRjb25zZWN1dGl2ZSBzdWJzdHJpbmcgb2YgY2hhcmFjdGVycyBpbiBzdHIgc3RhcnRpbmcgZnJvbSB0aGUgYmVnaW5uaW5nIG9mXG5cdHRoZSBzdHJpbmcuIFRoZSBmaW5hbCBzdGF0ZSB3aWxsIGhhdmUgYSBzcGVjaWFsIHZhbHVlLCBhcyBzcGVjaWZpZWQgaW5cblx0b3B0aW9ucy4gQWxsIG90aGVyIFwiaW4gYmV0d2VlblwiIHN1YnN0cmluZ3Mgd2lsbCBoYXZlIGEgZGVmYXVsdCBlbmQgc3RhdGUuXG5cblx0VGhpcyB0dXJucyB0aGUgc3RhdGUgbWFjaGluZSBpbnRvIGEgVHJpZS1saWtlIGRhdGEgc3RydWN0dXJlIChyYXRoZXIgdGhhbiBhXG5cdGludGVsbGlnZW50bHktZGVzaWduZWQgREZBKS5cblxuXHROb3RlIHRoYXQgSSBoYXZlbid0IHJlYWxseSB0cmllZCB0aGVzZSB3aXRoIGFueSBzdHJpbmdzIG90aGVyIHRoYW5cblx0RE9NQUlOLlxuXG5cdEBwYXJhbSB7U3RyaW5nfSBzdHJcblx0QHBhcmFtIHtDaGFyYWN0ZXJTdGF0ZX0gc3RhcnQgU3RhdGUgdG8ganVtcCBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXJcblx0QHBhcmFtIHtDbGFzc30gZW5kVG9rZW4gVG9rZW4gY2xhc3MgdG8gZW1pdCB3aGVuIHRoZSBnaXZlbiBzdHJpbmcgaGFzIGJlZW5cblx0XHRtYXRjaGVkIGFuZCBubyBtb3JlIGp1bXBzIGV4aXN0LlxuXHRAcGFyYW0ge0NsYXNzfSBkZWZhdWx0VG9rZW4gXCJGaWxsZXIgdG9rZW5cIiwgb3Igd2hpY2ggdG9rZW4gdHlwZSB0byBlbWl0IHdoZW5cblx0XHR3ZSBkb24ndCBoYXZlIGEgZnVsbCBtYXRjaFxuXHRAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiBuZXdseS1jcmVhdGVkIHN0YXRlc1xuKi9cbmZ1bmN0aW9uIHN0YXRlaWZ5KHN0ciwgc3RhcnQsIGVuZFRva2VuLCBkZWZhdWx0VG9rZW4pIHtcblx0dmFyIGkgPSAwLFxuXHQgICAgbGVuID0gc3RyLmxlbmd0aCxcblx0ICAgIHN0YXRlID0gc3RhcnQsXG5cdCAgICBuZXdTdGF0ZXMgPSBbXSxcblx0ICAgIG5leHRTdGF0ZSA9IHZvaWQgMDtcblxuXHQvLyBGaW5kIHRoZSBuZXh0IHN0YXRlIHdpdGhvdXQgYSBqdW1wIHRvIHRoZSBuZXh0IGNoYXJhY3RlclxuXHR3aGlsZSAoaSA8IGxlbiAmJiAobmV4dFN0YXRlID0gc3RhdGUubmV4dChzdHJbaV0pKSkge1xuXHRcdHN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdGkrKztcblx0fVxuXG5cdGlmIChpID49IGxlbikge1xuXHRcdHJldHVybiBbXTtcblx0fSAvLyBubyBuZXcgdG9rZW5zIHdlcmUgYWRkZWRcblxuXHR3aGlsZSAoaSA8IGxlbiAtIDEpIHtcblx0XHRuZXh0U3RhdGUgPSBuZXcgQ2hhcmFjdGVyU3RhdGUoZGVmYXVsdFRva2VuKTtcblx0XHRuZXdTdGF0ZXMucHVzaChuZXh0U3RhdGUpO1xuXHRcdHN0YXRlLm9uKHN0cltpXSwgbmV4dFN0YXRlKTtcblx0XHRzdGF0ZSA9IG5leHRTdGF0ZTtcblx0XHRpKys7XG5cdH1cblxuXHRuZXh0U3RhdGUgPSBuZXcgQ2hhcmFjdGVyU3RhdGUoZW5kVG9rZW4pO1xuXHRuZXdTdGF0ZXMucHVzaChuZXh0U3RhdGUpO1xuXHRzdGF0ZS5vbihzdHJbbGVuIC0gMV0sIG5leHRTdGF0ZSk7XG5cblx0cmV0dXJuIG5ld1N0YXRlcztcbn1cblxuZXhwb3J0cy5DaGFyYWN0ZXJTdGF0ZSA9IENoYXJhY3RlclN0YXRlO1xuZXhwb3J0cy5Ub2tlblN0YXRlID0gVG9rZW5TdGF0ZTtcbmV4cG9ydHMuc3RhdGVpZnkgPSBzdGF0ZWlmeTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGNyZWF0ZVRva2VuQ2xhc3MoKSB7XG5cdHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMudiA9IHZhbHVlO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0cy5jcmVhdGVUb2tlbkNsYXNzID0gY3JlYXRlVG9rZW5DbGFzczsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuVEVYVCA9IGV4cG9ydHMuTkwgPSBleHBvcnRzLkVNQUlMID0gZXhwb3J0cy5NQUlMVE9FTUFJTCA9IGV4cG9ydHMuQmFzZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVUb2tlbkNsYXNzID0gcmVxdWlyZSgnLi9jcmVhdGUtdG9rZW4tY2xhc3MnKTtcblxudmFyIF9jbGFzcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NsYXNzJyk7XG5cbnZhciBfdGV4dCA9IHJlcXVpcmUoJy4vdGV4dCcpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdE11bHRpLVRva2Vuc1xuXHRUb2tlbnMgY29tcG9zZWQgb2YgYXJyYXlzIG9mIFRleHRUb2tlbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gSXMgdGhlIGdpdmVuIHRva2VuIGEgdmFsaWQgZG9tYWluIHRva2VuP1xuLy8gU2hvdWxkIG51bXMgYmUgaW5jbHVkZWQgaGVyZT9cbmZ1bmN0aW9uIGlzRG9tYWluVG9rZW4odG9rZW4pIHtcblx0cmV0dXJuIHRva2VuIGluc3RhbmNlb2YgX3RleHQuRE9NQUlOIHx8IHRva2VuIGluc3RhbmNlb2YgX3RleHQuVExEO1xufVxuXG4vKipcblx0QWJzdHJhY3QgY2xhc3MgdXNlZCBmb3IgbWFudWZhY3R1cmluZyB0b2tlbnMgb2YgdGV4dCB0b2tlbnMuIFRoYXQgaXMgcmF0aGVyXG5cdHRoYW4gdGhlIHZhbHVlIGZvciBhIHRva2VuIGJlaW5nIGEgc21hbGwgc3RyaW5nIG9mIHRleHQsIGl0J3MgdmFsdWUgYW4gYXJyYXlcblx0b2YgdGV4dCB0b2tlbnMuXG5cblx0VXNlZCBmb3IgZ3JvdXBpbmcgdG9nZXRoZXIgVVJMcywgZW1haWxzLCBoYXNodGFncywgYW5kIG90aGVyIHBvdGVudGlhbFxuXHRjcmVhdGlvbnMuXG5cblx0QGNsYXNzIE11bHRpVG9rZW5cblx0QGFic3RyYWN0XG4qL1xudmFyIE11bHRpVG9rZW4gPSAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKTtcblxuTXVsdGlUb2tlbi5wcm90b3R5cGUgPSB7XG5cdC8qKlxuIFx0U3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBmb3IgdGhpcyB0b2tlblxuIFx0QHByb3BlcnR5IHR5cGVcbiBcdEBkZWZhdWx0ICdUT0tFTidcbiAqL1xuXHR0eXBlOiAndG9rZW4nLFxuXG5cdC8qKlxuIFx0SXMgdGhpcyBtdWx0aXRva2VuIGEgbGluaz9cbiBcdEBwcm9wZXJ0eSBpc0xpbmtcbiBcdEBkZWZhdWx0IGZhbHNlXG4gKi9cblx0aXNMaW5rOiBmYWxzZSxcblxuXHQvKipcbiBcdFJldHVybiB0aGUgc3RyaW5nIHRoaXMgdG9rZW4gcmVwcmVzZW50cy5cbiBcdEBtZXRob2QgdG9TdHJpbmdcbiBcdEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXHR0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0aGlzLnZbaV0udG9TdHJpbmcoKSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbignJyk7XG5cdH0sXG5cblxuXHQvKipcbiBcdFdoYXQgc2hvdWxkIHRoZSB2YWx1ZSBmb3IgdGhpcyB0b2tlbiBiZSBpbiB0aGUgYGhyZWZgIEhUTUwgYXR0cmlidXRlP1xuIFx0UmV0dXJucyB0aGUgYC50b1N0cmluZ2AgdmFsdWUgYnkgZGVmYXVsdC5cbiBcdFx0QG1ldGhvZCB0b0hyZWZcbiBcdEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXHR0b0hyZWY6IGZ1bmN0aW9uIHRvSHJlZigpIHtcblx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpO1xuXHR9LFxuXG5cblx0LyoqXG4gXHRSZXR1cm5zIGEgaGFzaCBvZiByZWxldmFudCB2YWx1ZXMgZm9yIHRoaXMgdG9rZW4sIHdoaWNoIGluY2x1ZGVzIGtleXNcbiBcdCogdHlwZSAtIEtpbmQgb2YgdG9rZW4gKCd1cmwnLCAnZW1haWwnLCBldGMuKVxuIFx0KiB2YWx1ZSAtIE9yaWdpbmFsIHRleHRcbiBcdCogaHJlZiAtIFRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgYW5jaG9yIHRhZydzIGhyZWZcbiBcdFx0YXR0cmlidXRlXG4gXHRcdEBtZXRob2QgdG9PYmplY3RcbiBcdEBwYXJhbSB7U3RyaW5nfSBbcHJvdG9jb2xdIGAnaHR0cCdgIGJ5IGRlZmF1bHRcbiBcdEByZXR1cm4ge09iamVjdH1cbiAqL1xuXHR0b09iamVjdDogZnVuY3Rpb24gdG9PYmplY3QoKSB7XG5cdFx0dmFyIHByb3RvY29sID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnaHR0cCc7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0dmFsdWU6IHRoaXMudG9TdHJpbmcoKSxcblx0XHRcdGhyZWY6IHRoaXMudG9IcmVmKHByb3RvY29sKVxuXHRcdH07XG5cdH1cbn07XG5cbi8qKlxuXHRSZXByZXNlbnRzIGFuIGFyYml0cmFyaWx5IG1haWx0byBlbWFpbCBhZGRyZXNzIHdpdGggdGhlIHByZWZpeCBpbmNsdWRlZFxuXHRAY2xhc3MgTUFJTFRPXG5cdEBleHRlbmRzIE11bHRpVG9rZW5cbiovXG52YXIgTUFJTFRPRU1BSUwgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwge1xuXHR0eXBlOiAnZW1haWwnLFxuXHRpc0xpbms6IHRydWVcbn0pO1xuXG4vKipcblx0UmVwcmVzZW50cyBhIGxpc3Qgb2YgdG9rZW5zIG1ha2luZyB1cCBhIHZhbGlkIGVtYWlsIGFkZHJlc3Ncblx0QGNsYXNzIEVNQUlMXG5cdEBleHRlbmRzIE11bHRpVG9rZW5cbiovXG52YXIgRU1BSUwgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwge1xuXHR0eXBlOiAnZW1haWwnLFxuXHRpc0xpbms6IHRydWUsXG5cdHRvSHJlZjogZnVuY3Rpb24gdG9IcmVmKCkge1xuXHRcdHJldHVybiAnbWFpbHRvOicgKyB0aGlzLnRvU3RyaW5nKCk7XG5cdH1cbn0pO1xuXG4vKipcblx0UmVwcmVzZW50cyBzb21lIHBsYWluIHRleHRcblx0QGNsYXNzIFRFWFRcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBURVhUID0gKDAsIF9jbGFzcy5pbmhlcml0cykoTXVsdGlUb2tlbiwgKDAsIF9jcmVhdGVUb2tlbkNsYXNzLmNyZWF0ZVRva2VuQ2xhc3MpKCksIHsgdHlwZTogJ3RleHQnIH0pO1xuXG4vKipcblx0TXVsdGktbGluZWJyZWFrIHRva2VuIC0gcmVwcmVzZW50cyBhIGxpbmUgYnJlYWtcblx0QGNsYXNzIE5MXG5cdEBleHRlbmRzIE11bHRpVG9rZW5cbiovXG52YXIgTkwgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwgeyB0eXBlOiAnbmwnIH0pO1xuXG4vKipcblx0UmVwcmVzZW50cyBhIGxpc3Qgb2YgdG9rZW5zIG1ha2luZyB1cCBhIHZhbGlkIFVSTFxuXHRAY2xhc3MgVVJMXG5cdEBleHRlbmRzIE11bHRpVG9rZW5cbiovXG52YXIgVVJMID0gKDAsIF9jbGFzcy5pbmhlcml0cykoTXVsdGlUb2tlbiwgKDAsIF9jcmVhdGVUb2tlbkNsYXNzLmNyZWF0ZVRva2VuQ2xhc3MpKCksIHtcblx0dHlwZTogJ3VybCcsXG5cdGlzTGluazogdHJ1ZSxcblxuXHQvKipcbiBcdExvd2VyY2FzZXMgcmVsZXZhbnQgcGFydHMgb2YgdGhlIGRvbWFpbiBhbmQgYWRkcyB0aGUgcHJvdG9jb2wgaWZcbiBcdHJlcXVpcmVkLiBOb3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBlc2NhcGUgdW5zYWZlIEhUTUwgY2hhcmFjdGVycyBpbiB0aGVcbiBcdFVSTC5cbiBcdFx0QG1ldGhvZCBocmVmXG4gXHRAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2xcbiBcdEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXHR0b0hyZWY6IGZ1bmN0aW9uIHRvSHJlZigpIHtcblx0XHR2YXIgcHJvdG9jb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdodHRwJztcblxuXHRcdHZhciBoYXNQcm90b2NvbCA9IGZhbHNlO1xuXHRcdHZhciBoYXNTbGFzaFNsYXNoID0gZmFsc2U7XG5cdFx0dmFyIHRva2VucyA9IHRoaXMudjtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0dmFyIGkgPSAwO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgZG9tYWluIGxvd2VyY2FzZVxuXHRcdC8vIExvd2VyY2FzZSBwcm90b2NvbFxuXHRcdHdoaWxlICh0b2tlbnNbaV0gaW5zdGFuY2VvZiBfdGV4dC5QUk9UT0NPTCkge1xuXHRcdFx0aGFzUHJvdG9jb2wgPSB0cnVlO1xuXHRcdFx0cmVzdWx0LnB1c2godG9rZW5zW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Ly8gU2tpcCBzbGFzaC1zbGFzaFxuXHRcdHdoaWxlICh0b2tlbnNbaV0gaW5zdGFuY2VvZiBfdGV4dC5TTEFTSCkge1xuXHRcdFx0aGFzU2xhc2hTbGFzaCA9IHRydWU7XG5cdFx0XHRyZXN1bHQucHVzaCh0b2tlbnNbaV0udG9TdHJpbmcoKSk7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0Ly8gTG93ZXJjYXNlIGFsbCBvdGhlciBjaGFyYWN0ZXJzIGluIHRoZSBkb21haW5cblx0XHR3aGlsZSAoaXNEb21haW5Ub2tlbih0b2tlbnNbaV0pKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0b2tlbnNbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHQvLyBMZWF2ZSBhbGwgb3RoZXIgY2hhcmFjdGVycyBhcyB0aGV5IHdlcmUgd3JpdHRlblxuXHRcdGZvciAoOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0b2tlbnNbaV0udG9TdHJpbmcoKSk7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gcmVzdWx0LmpvaW4oJycpO1xuXG5cdFx0aWYgKCEoaGFzUHJvdG9jb2wgfHwgaGFzU2xhc2hTbGFzaCkpIHtcblx0XHRcdHJlc3VsdCA9IHByb3RvY29sICsgJzovLycgKyByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblx0aGFzUHJvdG9jb2w6IGZ1bmN0aW9uIGhhc1Byb3RvY29sKCkge1xuXHRcdHJldHVybiB0aGlzLnZbMF0gaW5zdGFuY2VvZiBfdGV4dC5QUk9UT0NPTDtcblx0fVxufSk7XG5cbmV4cG9ydHMuQmFzZSA9IE11bHRpVG9rZW47XG5leHBvcnRzLk1BSUxUT0VNQUlMID0gTUFJTFRPRU1BSUw7XG5leHBvcnRzLkVNQUlMID0gRU1BSUw7XG5leHBvcnRzLk5MID0gTkw7XG5leHBvcnRzLlRFWFQgPSBURVhUO1xuZXhwb3J0cy5VUkwgPSBVUkw7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BTVBFUlNBTkQgPSBleHBvcnRzLkNMT1NFUEFSRU4gPSBleHBvcnRzLkNMT1NFQU5HTEVCUkFDS0VUID0gZXhwb3J0cy5DTE9TRUJSQUNLRVQgPSBleHBvcnRzLkNMT1NFQlJBQ0UgPSBleHBvcnRzLk9QRU5QQVJFTiA9IGV4cG9ydHMuT1BFTkFOR0xFQlJBQ0tFVCA9IGV4cG9ydHMuT1BFTkJSQUNLRVQgPSBleHBvcnRzLk9QRU5CUkFDRSA9IGV4cG9ydHMuV1MgPSBleHBvcnRzLlRMRCA9IGV4cG9ydHMuU1lNID0gZXhwb3J0cy5VTkRFUlNDT1JFID0gZXhwb3J0cy5TTEFTSCA9IGV4cG9ydHMuTUFJTFRPID0gZXhwb3J0cy5QUk9UT0NPTCA9IGV4cG9ydHMuUVVFUlkgPSBleHBvcnRzLlBPVU5EID0gZXhwb3J0cy5QTFVTID0gZXhwb3J0cy5OVU0gPSBleHBvcnRzLk5MID0gZXhwb3J0cy5MT0NBTEhPU1QgPSBleHBvcnRzLlBVTkNUVUFUSU9OID0gZXhwb3J0cy5ET1QgPSBleHBvcnRzLkNPTE9OID0gZXhwb3J0cy5BVCA9IGV4cG9ydHMuRE9NQUlOID0gZXhwb3J0cy5CYXNlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZVRva2VuQ2xhc3MgPSByZXF1aXJlKCcuL2NyZWF0ZS10b2tlbi1jbGFzcycpO1xuXG52YXIgX2NsYXNzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2xhc3MnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRUZXh0IFRva2Vuc1xuXHRUb2tlbnMgY29tcG9zZWQgb2Ygc3RyaW5nc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcblx0QWJzdHJhY3QgY2xhc3MgdXNlZCBmb3IgbWFudWZhY3R1cmluZyB0ZXh0IHRva2Vucy5cblx0UGFzcyBpbiB0aGUgdmFsdWUgdGhpcyB0b2tlbiByZXByZXNlbnRzXG5cblx0QGNsYXNzIFRleHRUb2tlblxuXHRAYWJzdHJhY3RcbiovXG52YXIgVGV4dFRva2VuID0gKDAsIF9jcmVhdGVUb2tlbkNsYXNzLmNyZWF0ZVRva2VuQ2xhc3MpKCk7XG5UZXh0VG9rZW4ucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMudiArICcnO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBpbmhlcml0c1Rva2VuKHZhbHVlKSB7XG5cdHZhciBwcm9wcyA9IHZhbHVlID8geyB2OiB2YWx1ZSB9IDoge307XG5cdHJldHVybiAoMCwgX2NsYXNzLmluaGVyaXRzKShUZXh0VG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCBwcm9wcyk7XG59XG5cbi8qKlxuXHRBIHZhbGlkIGRvbWFpbiB0b2tlblxuXHRAY2xhc3MgRE9NQUlOXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBET01BSU4gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRAY2xhc3MgQVRcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIEFUID0gaW5oZXJpdHNUb2tlbignQCcpO1xuXG4vKipcblx0UmVwcmVzZW50cyBhIHNpbmdsZSBjb2xvbiBgOmAgY2hhcmFjdGVyXG5cblx0QGNsYXNzIENPTE9OXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBDT0xPTiA9IGluaGVyaXRzVG9rZW4oJzonKTtcblxuLyoqXG5cdEBjbGFzcyBET1Rcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIERPVCA9IGluaGVyaXRzVG9rZW4oJy4nKTtcblxuLyoqXG5cdEEgY2hhcmFjdGVyIGNsYXNzIHRoYXQgY2FuIHN1cnJvdW5kIHRoZSBVUkwsIGJ1dCB3aGljaCB0aGUgVVJMIGNhbm5vdCBiZWdpblxuXHRvciBlbmQgd2l0aC4gRG9lcyBub3QgaW5jbHVkZSBjZXJ0YWluIEVuZ2xpc2ggcHVuY3R1YXRpb24gbGlrZSBwYXJlbnRoZXNlcy5cblxuXHRAY2xhc3MgUFVOQ1RVQVRJT05cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFBVTkNUVUFUSU9OID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0VGhlIHdvcmQgbG9jYWxob3N0IChieSBpdHNlbGYpXG5cdEBjbGFzcyBMT0NBTEhPU1Rcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIExPQ0FMSE9TVCA9IGluaGVyaXRzVG9rZW4oKTtcblxuLyoqXG5cdE5ld2xpbmUgdG9rZW5cblx0QGNsYXNzIE5MXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBOTCA9IGluaGVyaXRzVG9rZW4oJ1xcbicpO1xuXG4vKipcblx0QGNsYXNzIE5VTVxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgTlVNID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0QGNsYXNzIFBMVVNcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFBMVVMgPSBpbmhlcml0c1Rva2VuKCcrJyk7XG5cbi8qKlxuXHRAY2xhc3MgUE9VTkRcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFBPVU5EID0gaW5oZXJpdHNUb2tlbignIycpO1xuXG4vKipcblx0UmVwcmVzZW50cyBhIHdlYiBVUkwgcHJvdG9jb2wuIFN1cHBvcnRlZCB0eXBlcyBpbmNsdWRlXG5cblx0KiBgaHR0cDpgXG5cdCogYGh0dHBzOmBcblx0KiBgZnRwOmBcblx0KiBgZnRwczpgXG5cblx0QGNsYXNzIFBST1RPQ09MXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBQUk9UT0NPTCA9IGluaGVyaXRzVG9rZW4oKTtcblxuLyoqXG5cdFJlcHJlc2VudHMgdGhlIHN0YXJ0IG9mIHRoZSBlbWFpbCBVUkkgcHJvdG9jb2xcblxuXHRAY2xhc3MgTUFJTFRPXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBNQUlMVE8gPSBpbmhlcml0c1Rva2VuKCdtYWlsdG86Jyk7XG5cbi8qKlxuXHRAY2xhc3MgUVVFUllcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFFVRVJZID0gaW5oZXJpdHNUb2tlbignPycpO1xuXG4vKipcblx0QGNsYXNzIFNMQVNIXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBTTEFTSCA9IGluaGVyaXRzVG9rZW4oJy8nKTtcblxuLyoqXG5cdEBjbGFzcyBVTkRFUlNDT1JFXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBVTkRFUlNDT1JFID0gaW5oZXJpdHNUb2tlbignXycpO1xuXG4vKipcblx0T25lIG9yZSBtb3JlIG5vbi13aGl0ZXNwYWNlIHN5bWJvbC5cblx0QGNsYXNzIFNZTVxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgU1lNID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0QGNsYXNzIFRMRFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgVExEID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0UmVwcmVzZW50cyBhIHN0cmluZyBvZiBjb25zZWN1dGl2ZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblxuXHRAY2xhc3MgV1Ncblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFdTID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0T3BlbmluZy9jbG9zaW5nIGJyYWNrZXQgY2xhc3Nlc1xuKi9cblxudmFyIE9QRU5CUkFDRSA9IGluaGVyaXRzVG9rZW4oJ3snKTtcbnZhciBPUEVOQlJBQ0tFVCA9IGluaGVyaXRzVG9rZW4oJ1snKTtcbnZhciBPUEVOQU5HTEVCUkFDS0VUID0gaW5oZXJpdHNUb2tlbignPCcpO1xudmFyIE9QRU5QQVJFTiA9IGluaGVyaXRzVG9rZW4oJygnKTtcbnZhciBDTE9TRUJSQUNFID0gaW5oZXJpdHNUb2tlbignfScpO1xudmFyIENMT1NFQlJBQ0tFVCA9IGluaGVyaXRzVG9rZW4oJ10nKTtcbnZhciBDTE9TRUFOR0xFQlJBQ0tFVCA9IGluaGVyaXRzVG9rZW4oJz4nKTtcbnZhciBDTE9TRVBBUkVOID0gaW5oZXJpdHNUb2tlbignKScpO1xuXG52YXIgQU1QRVJTQU5EID0gaW5oZXJpdHNUb2tlbignJicpO1xuXG5leHBvcnRzLkJhc2UgPSBUZXh0VG9rZW47XG5leHBvcnRzLkRPTUFJTiA9IERPTUFJTjtcbmV4cG9ydHMuQVQgPSBBVDtcbmV4cG9ydHMuQ09MT04gPSBDT0xPTjtcbmV4cG9ydHMuRE9UID0gRE9UO1xuZXhwb3J0cy5QVU5DVFVBVElPTiA9IFBVTkNUVUFUSU9OO1xuZXhwb3J0cy5MT0NBTEhPU1QgPSBMT0NBTEhPU1Q7XG5leHBvcnRzLk5MID0gTkw7XG5leHBvcnRzLk5VTSA9IE5VTTtcbmV4cG9ydHMuUExVUyA9IFBMVVM7XG5leHBvcnRzLlBPVU5EID0gUE9VTkQ7XG5leHBvcnRzLlFVRVJZID0gUVVFUlk7XG5leHBvcnRzLlBST1RPQ09MID0gUFJPVE9DT0w7XG5leHBvcnRzLk1BSUxUTyA9IE1BSUxUTztcbmV4cG9ydHMuU0xBU0ggPSBTTEFTSDtcbmV4cG9ydHMuVU5ERVJTQ09SRSA9IFVOREVSU0NPUkU7XG5leHBvcnRzLlNZTSA9IFNZTTtcbmV4cG9ydHMuVExEID0gVExEO1xuZXhwb3J0cy5XUyA9IFdTO1xuZXhwb3J0cy5PUEVOQlJBQ0UgPSBPUEVOQlJBQ0U7XG5leHBvcnRzLk9QRU5CUkFDS0VUID0gT1BFTkJSQUNLRVQ7XG5leHBvcnRzLk9QRU5BTkdMRUJSQUNLRVQgPSBPUEVOQU5HTEVCUkFDS0VUO1xuZXhwb3J0cy5PUEVOUEFSRU4gPSBPUEVOUEFSRU47XG5leHBvcnRzLkNMT1NFQlJBQ0UgPSBDTE9TRUJSQUNFO1xuZXhwb3J0cy5DTE9TRUJSQUNLRVQgPSBDTE9TRUJSQUNLRVQ7XG5leHBvcnRzLkNMT1NFQU5HTEVCUkFDS0VUID0gQ0xPU0VBTkdMRUJSQUNLRVQ7XG5leHBvcnRzLkNMT1NFUEFSRU4gPSBDTE9TRVBBUkVOO1xuZXhwb3J0cy5BTVBFUlNBTkQgPSBBTVBFUlNBTkQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVudGlvbjtcbi8qKlxuXHRNZW50aW9uIHBhcnNlciBwbHVnaW4gZm9yIGxpbmtpZnlcbiovXG5mdW5jdGlvbiBtZW50aW9uKGxpbmtpZnkpIHtcblx0dmFyIFRUID0gbGlua2lmeS5zY2FubmVyLlRPS0VOUzsgLy8gVGV4dCB0b2tlbnNcblx0dmFyIF9saW5raWZ5JHBhcnNlciA9IGxpbmtpZnkucGFyc2VyLFxuXHQgICAgTVQgPSBfbGlua2lmeSRwYXJzZXIuVE9LRU5TLFxuXHQgICAgU3RhdGUgPSBfbGlua2lmeSRwYXJzZXIuU3RhdGU7IC8vIE11bHRpIHRva2Vucywgc3RhdGVcblxuXHR2YXIgTXVsdGlUb2tlbiA9IE1ULkJhc2U7XG5cdHZhciBTX1NUQVJUID0gbGlua2lmeS5wYXJzZXIuc3RhcnQ7XG5cblx0dmFyIFRUX0RPTUFJTiA9IFRULkRPTUFJTjtcblx0dmFyIFRUX0xPQ0FMSE9TVCA9IFRULkxPQ0FMSE9TVDtcblx0dmFyIFRUX05VTSA9IFRULk5VTTtcblx0dmFyIFRUX1NMQVNIID0gVFQuU0xBU0g7XG5cdHZhciBUVF9UTEQgPSBUVC5UTEQ7XG5cdHZhciBUVF9VTkRFUlNDT1JFID0gVFQuVU5ERVJTQ09SRTtcblx0dmFyIFRUX0RPVCA9IFRULkRPVDtcblx0dmFyIFRUX0FUID0gVFQuQVQ7XG5cblx0ZnVuY3Rpb24gTUVOVElPTih2YWx1ZSkge1xuXHRcdHRoaXMudiA9IHZhbHVlO1xuXHR9XG5cblx0bGlua2lmeS5pbmhlcml0cyhNdWx0aVRva2VuLCBNRU5USU9OLCB7XG5cdFx0dHlwZTogJ21lbnRpb24nLFxuXHRcdGlzTGluazogdHJ1ZSxcblx0XHR0b0hyZWY6IGZ1bmN0aW9uIHRvSHJlZigpIHtcblx0XHRcdHJldHVybiAnLycgKyB0aGlzLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXHRcdH1cblx0fSk7XG5cblx0dmFyIFNfQVQgPSBTX1NUQVJULmp1bXAoVFQuQVQpOyAvLyBAXG5cdHZhciBTX0FUX1NZTVMgPSBuZXcgU3RhdGUoKTtcblx0dmFyIFNfTUVOVElPTiA9IG5ldyBTdGF0ZShNRU5USU9OKTtcblx0dmFyIFNfTUVOVElPTl9ESVZJREVSID0gbmV3IFN0YXRlKCk7XG5cdHZhciBTX01FTlRJT05fRElWSURFUl9TWU1TID0gbmV3IFN0YXRlKCk7XG5cblx0Ly8gQF8sXG5cdFNfQVQub24oVFRfVU5ERVJTQ09SRSwgU19BVF9TWU1TKTtcblxuXHQvLyAgQF8qXG5cdFNfQVRfU1lNUy5vbihUVF9VTkRFUlNDT1JFLCBTX0FUX1NZTVMpLm9uKFRUX0RPVCwgU19BVF9TWU1TKTtcblxuXHQvLyBWYWxpZCBtZW50aW9uIChub3QgbWFkZSB1cCBlbnRpcmVseSBvZiBzeW1ib2xzKVxuXHRTX0FULm9uKFRUX0RPTUFJTiwgU19NRU5USU9OKS5vbihUVF9MT0NBTEhPU1QsIFNfTUVOVElPTikub24oVFRfVExELCBTX01FTlRJT04pLm9uKFRUX05VTSwgU19NRU5USU9OKTtcblxuXHRTX0FUX1NZTVMub24oVFRfRE9NQUlOLCBTX01FTlRJT04pLm9uKFRUX0xPQ0FMSE9TVCwgU19NRU5USU9OKS5vbihUVF9UTEQsIFNfTUVOVElPTikub24oVFRfTlVNLCBTX01FTlRJT04pO1xuXG5cdC8vIE1vcmUgdmFsaWQgbWVudGlvbnNcblx0U19NRU5USU9OLm9uKFRUX0RPTUFJTiwgU19NRU5USU9OKS5vbihUVF9MT0NBTEhPU1QsIFNfTUVOVElPTikub24oVFRfVExELCBTX01FTlRJT04pLm9uKFRUX05VTSwgU19NRU5USU9OKS5vbihUVF9VTkRFUlNDT1JFLCBTX01FTlRJT04pO1xuXG5cdC8vIE1lbnRpb24gd2l0aCBhIGRpdmlkZXJcblx0U19NRU5USU9OLm9uKFRUX1NMQVNILCBTX01FTlRJT05fRElWSURFUikub24oVFRfRE9ULCBTX01FTlRJT05fRElWSURFUikub24oVFRfQVQsIFNfTUVOVElPTl9ESVZJREVSKTtcblxuXHQvLyBNZW50aW9uIF8gdHJhaWxpbmcgc3Rhc2ggcGx1cyBzeW1zXG5cdFNfTUVOVElPTl9ESVZJREVSLm9uKFRUX1VOREVSU0NPUkUsIFNfTUVOVElPTl9ESVZJREVSX1NZTVMpO1xuXHRTX01FTlRJT05fRElWSURFUl9TWU1TLm9uKFRUX1VOREVSU0NPUkUsIFNfTUVOVElPTl9ESVZJREVSX1NZTVMpO1xuXG5cdC8vIE9uY2Ugd2UgZ2V0IGEgd29yZCB0b2tlbiwgbWVudGlvbnMgY2FuIHN0YXJ0IHVwIGFnYWluXG5cdFNfTUVOVElPTl9ESVZJREVSLm9uKFRUX0RPTUFJTiwgU19NRU5USU9OKS5vbihUVF9MT0NBTEhPU1QsIFNfTUVOVElPTikub24oVFRfVExELCBTX01FTlRJT04pLm9uKFRUX05VTSwgU19NRU5USU9OKTtcblxuXHRTX01FTlRJT05fRElWSURFUl9TWU1TLm9uKFRUX0RPTUFJTiwgU19NRU5USU9OKS5vbihUVF9MT0NBTEhPU1QsIFNfTUVOVElPTikub24oVFRfVExELCBTX01FTlRJT04pLm9uKFRUX05VTSwgU19NRU5USU9OKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaW5oZXJpdHMgPSBpbmhlcml0cztcbmZ1bmN0aW9uIGluaGVyaXRzKHBhcmVudCwgY2hpbGQpIHtcblx0dmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuXHR2YXIgZXh0ZW5kZWQgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuXHRmb3IgKHZhciBwIGluIHByb3BzKSB7XG5cdFx0ZXh0ZW5kZWRbcF0gPSBwcm9wc1twXTtcblx0fVxuXHRleHRlbmRlZC5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuXHRjaGlsZC5wcm90b3R5cGUgPSBleHRlbmRlZDtcblx0cmV0dXJuIGNoaWxkO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGRlZmF1bHRQcm90b2NvbDogJ2h0dHAnLFxuXHRldmVudHM6IG51bGwsXG5cdGZvcm1hdDogbm9vcCxcblx0Zm9ybWF0SHJlZjogbm9vcCxcblx0bmwyYnI6IGZhbHNlLFxuXHR0YWdOYW1lOiAnYScsXG5cdHRhcmdldDogdHlwZVRvVGFyZ2V0LFxuXHR2YWxpZGF0ZTogdHJ1ZSxcblx0aWdub3JlVGFnczogW10sXG5cdGF0dHJpYnV0ZXM6IG51bGwsXG5cdGNsYXNzTmFtZTogJ2xpbmtpZmllZCcgLy8gRGVwcmVjYXRlZCB2YWx1ZSAtIG5vIGRlZmF1bHQgY2xhc3Mgd2lsbCBiZSBwcm92aWRlZCBpbiB0aGUgZnV0dXJlXG59O1xuXG5leHBvcnRzLmRlZmF1bHRzID0gZGVmYXVsdHM7XG5leHBvcnRzLk9wdGlvbnMgPSBPcHRpb25zO1xuZXhwb3J0cy5jb250YWlucyA9IGNvbnRhaW5zO1xuXG5cbmZ1bmN0aW9uIE9wdGlvbnMob3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHR0aGlzLmRlZmF1bHRQcm90b2NvbCA9IG9wdHMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRQcm90b2NvbCcpID8gb3B0cy5kZWZhdWx0UHJvdG9jb2wgOiBkZWZhdWx0cy5kZWZhdWx0UHJvdG9jb2w7XG5cdHRoaXMuZXZlbnRzID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnZXZlbnRzJykgPyBvcHRzLmV2ZW50cyA6IGRlZmF1bHRzLmV2ZW50cztcblx0dGhpcy5mb3JtYXQgPSBvcHRzLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSA/IG9wdHMuZm9ybWF0IDogZGVmYXVsdHMuZm9ybWF0O1xuXHR0aGlzLmZvcm1hdEhyZWYgPSBvcHRzLmhhc093blByb3BlcnR5KCdmb3JtYXRIcmVmJykgPyBvcHRzLmZvcm1hdEhyZWYgOiBkZWZhdWx0cy5mb3JtYXRIcmVmO1xuXHR0aGlzLm5sMmJyID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnbmwyYnInKSA/IG9wdHMubmwyYnIgOiBkZWZhdWx0cy5ubDJicjtcblx0dGhpcy50YWdOYW1lID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgndGFnTmFtZScpID8gb3B0cy50YWdOYW1lIDogZGVmYXVsdHMudGFnTmFtZTtcblx0dGhpcy50YXJnZXQgPSBvcHRzLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IG9wdHMudGFyZ2V0IDogZGVmYXVsdHMudGFyZ2V0O1xuXHR0aGlzLnZhbGlkYXRlID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgndmFsaWRhdGUnKSA/IG9wdHMudmFsaWRhdGUgOiBkZWZhdWx0cy52YWxpZGF0ZTtcblx0dGhpcy5pZ25vcmVUYWdzID0gW107XG5cblx0Ly8gbGlua0F0dHJpYnV0ZXMgYW5kIGxpbmtDbGFzcyBpcyBkZXByZWNhdGVkXG5cdHRoaXMuYXR0cmlidXRlcyA9IG9wdHMuYXR0cmlidXRlcyB8fCBvcHRzLmxpbmtBdHRyaWJ1dGVzIHx8IGRlZmF1bHRzLmF0dHJpYnV0ZXM7XG5cdHRoaXMuY2xhc3NOYW1lID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyBvcHRzLmNsYXNzTmFtZSA6IG9wdHMubGlua0NsYXNzIHx8IGRlZmF1bHRzLmNsYXNzTmFtZTtcblxuXHQvLyBNYWtlIGFsbCB0YWdzIG5hbWVzIHVwcGVyIGNhc2Vcblx0dmFyIGlnbm9yZWRUYWdzID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlVGFncycpID8gb3B0cy5pZ25vcmVUYWdzIDogZGVmYXVsdHMuaWdub3JlVGFncztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpZ25vcmVkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHRoaXMuaWdub3JlVGFncy5wdXNoKGlnbm9yZWRUYWdzW2ldLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbk9wdGlvbnMucHJvdG90eXBlID0ge1xuXHQvKipcbiAgKiBHaXZlbiB0aGUgdG9rZW4sIHJldHVybiBhbGwgb3B0aW9ucyBmb3IgaG93IGl0IHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgKi9cblx0cmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh0b2tlbikge1xuXHRcdHZhciBocmVmID0gdG9rZW4udG9IcmVmKHRoaXMuZGVmYXVsdFByb3RvY29sKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9ybWF0dGVkOiB0aGlzLmdldCgnZm9ybWF0JywgdG9rZW4udG9TdHJpbmcoKSwgdG9rZW4pLFxuXHRcdFx0Zm9ybWF0dGVkSHJlZjogdGhpcy5nZXQoJ2Zvcm1hdEhyZWYnLCBocmVmLCB0b2tlbiksXG5cdFx0XHR0YWdOYW1lOiB0aGlzLmdldCgndGFnTmFtZScsIGhyZWYsIHRva2VuKSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5nZXQoJ2NsYXNzTmFtZScsIGhyZWYsIHRva2VuKSxcblx0XHRcdHRhcmdldDogdGhpcy5nZXQoJ3RhcmdldCcsIGhyZWYsIHRva2VuKSxcblx0XHRcdGV2ZW50czogdGhpcy5nZXRPYmplY3QoJ2V2ZW50cycsIGhyZWYsIHRva2VuKSxcblx0XHRcdGF0dHJpYnV0ZXM6IHRoaXMuZ2V0T2JqZWN0KCdhdHRyaWJ1dGVzJywgaHJlZiwgdG9rZW4pXG5cdFx0fTtcblx0fSxcblxuXG5cdC8qKlxuICAqIFJldHVybnMgdHJ1ZSBvciBmYWxzZSBiYXNlZCBvbiB3aGV0aGVyIGEgdG9rZW4gc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhXG4gICogbGluayBiYXNlZCBvbiB0aGUgdXNlciBvcHRpb25zLiBCeSBkZWZhdWx0LFxuICAqL1xuXHRjaGVjazogZnVuY3Rpb24gY2hlY2sodG9rZW4pIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ3ZhbGlkYXRlJywgdG9rZW4udG9TdHJpbmcoKSwgdG9rZW4pO1xuXHR9LFxuXG5cblx0Ly8gUHJpdmF0ZSBtZXRob2RzXG5cblx0LyoqXG4gICogUmVzb2x2ZSBhbiBvcHRpb24ncyB2YWx1ZSBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIG9wdGlvbiBhbmQgdGhlIGdpdmVuXG4gICogcGFyYW1zLlxuICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgTmFtZSBvZiBvcHRpb24gdG8gdXNlXG4gICogQHBhcmFtIG9wZXJhdG9yIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB0YXJnZXQgb3B0aW9uIGlmIGl0J3MgbWV0aG9kXG4gICogQHBhcmFtIHtNdWx0aVRva2VufSB0b2tlbiBUaGUgdG9rZW4gZnJvbSBsaW5raWZ5LnRva2VuaXplXG4gICovXG5cdGdldDogZnVuY3Rpb24gZ2V0KGtleSwgb3BlcmF0b3IsIHRva2VuKSB7XG5cdFx0dmFyIG9wdGlvblZhbHVlID0gdm9pZCAwLFxuXHRcdCAgICBvcHRpb24gPSB0aGlzW2tleV07XG5cdFx0aWYgKCFvcHRpb24pIHtcblx0XHRcdHJldHVybiBvcHRpb247XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlb2Ygb3B0aW9uID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb24pKSB7XG5cdFx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRcdHJldHVybiBvcHRpb24ob3BlcmF0b3IsIHRva2VuLnR5cGUpO1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0b3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkodG9rZW4udHlwZSkgPyBvcHRpb25bdG9rZW4udHlwZV0gOiBkZWZhdWx0c1trZXldO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nID8gb3B0aW9uVmFsdWUob3BlcmF0b3IsIHRva2VuLnR5cGUpIDogb3B0aW9uVmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9wdGlvbjtcblx0fSxcblx0Z2V0T2JqZWN0OiBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5LCBvcGVyYXRvciwgdG9rZW4pIHtcblx0XHR2YXIgb3B0aW9uID0gdGhpc1trZXldO1xuXHRcdHJldHVybiB0eXBlb2Ygb3B0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9uKG9wZXJhdG9yLCB0b2tlbi50eXBlKSA6IG9wdGlvbjtcblx0fVxufTtcblxuLyoqXG4gKiBRdWljayBpbmRleE9mIHJlcGxhY2VtZW50IGZvciBjaGVja2luZyB0aGUgaWdub3JlVGFncyBvcHRpb25cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoYXJyLCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChhcnJbaV0gPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBub29wKHZhbCkge1xuXHRyZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiB0eXBlVG9UYXJnZXQoaHJlZiwgdHlwZSkge1xuXHRyZXR1cm4gdHlwZSA9PT0gJ3VybCcgPyAnX2JsYW5rJyA6IG51bGw7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9saWIvbGlua2lmeS9wbHVnaW5zL21lbnRpb24nKS5kZWZhdWx0O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwiZnVuY3Rpb24gdmFsaWRhdGUoYmluZGluZykge1xyXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY29uc29sZS53YXJuKCdbVnVlLWNsaWNrLW91dHNpZGU6XSBwcm92aWRlZCBleHByZXNzaW9uJywgYmluZGluZy5leHByZXNzaW9uLCAnaXMgbm90IGEgZnVuY3Rpb24uJylcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQb3B1cChwb3B1cEl0ZW0sIGVsZW1lbnRzKSB7XHJcbiAgaWYgKCFwb3B1cEl0ZW0gfHwgIWVsZW1lbnRzKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHBvcHVwSXRlbS5jb250YWlucyhlbGVtZW50c1tpXSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbGVtZW50c1tpXS5jb250YWlucyhwb3B1cEl0ZW0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NlcnZlcih2Tm9kZSkge1xyXG4gIHJldHVybiB0eXBlb2Ygdk5vZGUuY29tcG9uZW50SW5zdGFuY2UgIT09ICd1bmRlZmluZWQnICYmIHZOb2RlLmNvbXBvbmVudEluc3RhbmNlLiRpc1NlcnZlclxyXG59XHJcblxyXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2Tm9kZSkge1xyXG4gICAgaWYgKCF2YWxpZGF0ZShiaW5kaW5nKSkgcmV0dXJuXHJcblxyXG4gICAgLy8gRGVmaW5lIEhhbmRsZXIgYW5kIGNhY2hlIGl0IG9uIHRoZSBlbGVtZW50XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcclxuICAgICAgaWYgKCF2Tm9kZS5jb250ZXh0KSByZXR1cm5cclxuXHJcbiAgICAgIC8vIHNvbWUgY29tcG9uZW50cyBtYXkgaGF2ZSByZWxhdGVkIHBvcHVwIGl0ZW0sIG9uIHdoaWNoIHdlIHNoYWxsIHByZXZlbnQgdGhlIGNsaWNrIG91dHNpZGUgZXZlbnQgaGFuZGxlci5cclxuICAgICAgdmFyIGVsZW1lbnRzID0gZS5wYXRoIHx8IChlLmNvbXBvc2VkUGF0aCAmJiBlLmNvbXBvc2VkUGF0aCgpKVxyXG4gICAgICBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICYmIGVsZW1lbnRzLnVuc2hpZnQoZS50YXJnZXQpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpIHx8IGlzUG9wdXAodk5vZGUuY29udGV4dC5wb3B1cEl0ZW0sIGVsZW1lbnRzKSkgcmV0dXJuXHJcblxyXG4gICAgICBlbC5fX3Z1ZUNsaWNrT3V0c2lkZV9fLmNhbGxiYWNrKGUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIEV2ZW50IExpc3RlbmVyc1xyXG4gICAgZWwuX192dWVDbGlja091dHNpZGVfXyA9IHtcclxuICAgICAgaGFuZGxlcjogaGFuZGxlcixcclxuICAgICAgY2FsbGJhY2s6IGJpbmRpbmcudmFsdWVcclxuICAgIH1cclxuICAgICFpc1NlcnZlcih2Tm9kZSkgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XHJcbiAgICBpZiAodmFsaWRhdGUoYmluZGluZykpIGVsLl9fdnVlQ2xpY2tPdXRzaWRlX18uY2FsbGJhY2sgPSBiaW5kaW5nLnZhbHVlXHJcbiAgfSxcclxuICBcclxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdk5vZGUpIHtcclxuICAgIC8vIFJlbW92ZSBFdmVudCBMaXN0ZW5lcnNcclxuICAgICFpc1NlcnZlcih2Tm9kZSkgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbC5fX3Z1ZUNsaWNrT3V0c2lkZV9fLmhhbmRsZXIpXHJcbiAgICBkZWxldGUgZWwuX192dWVDbGlja091dHNpZGVfX1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwibWQ6Ymctd2hpdGUgY29udGFpbmVyIG1kOm14LTQgbWQ6bXgtYXV0byBtZDpzaGFkb3ctbGcgcm91bmRlZCBtZDptdC0zMiBmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIG1kOm1heC13LTJ4bCBsZzptYXgtdy00eGwganVzdGlmeS1iZXR3ZWVuXCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7fSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWQ6YmctaW5kaWdvLTEwMCBtZDp3LTEvMiBwLThcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHsgYXR0cnM6IHsgcm9sZTogXCJmb3JtXCIsIG1ldGhvZDogXCJQT1NUXCIsIGFjdGlvbjogX3ZtLnVybCB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiX3Rva2VuXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50b2tlbiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7fSwgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS04MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmVycm9yc1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJlZC00MDAgYmxvY2sgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS04MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtNDAwIGJsb2NrIHB0LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnVzZXJuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTgwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtNDAwIGJsb2NrIHB0LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTgwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtNDAwIGJsb2NrIHB0LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnBhc3N3b3JkKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTgwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBZb3VyIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtNDAwIGJsb2NrIHB0LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZDp3LTEvMiB0ZXh0LWNlbnRlciBweC04IHB5LTQgbWQ6YmxvY2tcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtdGVhbC01MDAgZm9udC1ib2xkIHRleHQtNHhsIG1kOnB0LThcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiR09PRFdPUktcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtdGVhbC01MDAgdGV4dC14bFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIiBTZW5zaWJsZSBBcHByb2FjaCB0byBXb3JrICYgQ29sbGFib3JhdGlvbiBmb3IgU29mdHdhcmUgVGVhbXMgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHQtMTYgaGlkZGVuIG1kOmJsb2NrXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZS9yZWdpc3Rlci5zdmdcIiwgYWx0OiBcIndvcmsgZGVza1wiIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTYwMCB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1tZWRpdW0gcHktMiBweC00IHJvdW5kZWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlJlZ2lzdGVyXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJ3Z1ZS1jbGljay1vdXRzaWRlJ1xuaW1wb3J0ICogYXMgbGlua2lmeSBmcm9tICdsaW5raWZ5anMnXG5pbXBvcnQgbGlua2lmeUVsZW1lbnQgZnJvbSAnbGlua2lmeWpzL2VsZW1lbnQnXG5pbXBvcnQgbWVudGlvbiBmcm9tICdsaW5raWZ5anMvcGx1Z2lucy9tZW50aW9uJ1xuXG5tZW50aW9uKGxpbmtpZnkpXG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKVxuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbndpbmRvdy5sdXhvbiA9IHJlcXVpcmUoJ2x1eG9uJylcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxuICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn1cblxuaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4gICAgYnJvYWRjYXN0ZXI6ICdzb2NrZXQuaW8nLFxuICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6NjAwMScsXG4gICAgbmFtZXNwYWNlOiAnQXBwLkNvcmUuRXZlbnRzJ1xuICB9KVxufVxuXG53aW5kb3cuVnVlLm1peGluKHtcbiAgbWV0aG9kczoge1xuICAgIGdlbmVyYXRlVXJsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvaW1hZ2UvYXZhdGFyLmpwZydcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvJyArIHZhbHVlXG4gICAgfVxuICB9XG59KVxuXG53aW5kb3cuVnVlLmZpbHRlcignbG9jYWxpemUnLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnXG4gIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICByZXR1cm4gd2luZG93LmxhbmdbdmFsdWVdID8gd2luZG93LmxhbmdbdmFsdWVdIDogdmFsdWVcbn0pXG5cbndpbmRvdy5WdWUuZmlsdGVyKCdjYXBpdGFsaXplJywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJ1xuICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbn0pXG5cbndpbmRvdy5WdWUuZmlsdGVyKCdjbGlwJywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJ1xuICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cigwLCAyMCkgKyAnLi4uJ1xufSlcblxud2luZG93LlZ1ZS5kaXJlY3RpdmUoJ2xpbmtpZnknLCB7XG4gIGluc2VydGVkOiBmdW5jdGlvbiAoZWwpIHtcbiAgICBsaW5raWZ5RWxlbWVudChlbCwge1xuICAgICAgY2xhc3NOYW1lOiAndGV4dC1ibHVlLTUwMCcsXG4gICAgICBmb3JtYXRIcmVmOiBmdW5jdGlvbiAoaHJlZiwgdHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ21lbnRpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3VzZXJzJyArIGhyZWZcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHJlZlxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbndpbmRvdy5WdWUuZGlyZWN0aXZlKCdjbGljay1vdXRzaWRlJywgQ2xpY2tPdXRzaWRlKVxuXG53aW5kb3cuVnVlLmNvbXBvbmVudCgnZm9udC1hd2Vzb21lLWljb24nLCBGb250QXdlc29tZUljb24pXG5cbndpbmRvdy5FdmVudEJ1cyA9IG5ldyBWdWUoKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU2NGUxYTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcmMvcGhwL3NpdGVzL2dvb2R3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NTY0ZTFhMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NTY0ZTFhMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjRlMWEzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1NjRlMWEzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjRlMWEzJlwiIiwiaW1wb3J0ICcuLy4uLy4uL2Jvb3RzdHJhcCdcbmltcG9ydCByZWdpc3RlciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci52dWUnXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIHJlZ2lzdGVyXG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9