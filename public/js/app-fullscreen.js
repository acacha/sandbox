/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 394);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 11:
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(55);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(23);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(23);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

window.Vue = __webpack_require__(33);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('register-user-by-email', __webpack_require__(313));
Vue.component('invite-user-fullscreen', __webpack_require__(322));

/* eslint-disable no-undef, no-unused-vars */
var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
      current: 0,
      questions: [],
      questionsCount: 0,
      isFilled: false,
      showNext: false
    };
  },

  computed: {
    currentProgress: function currentProgress() {
      return this.current * (100 / this.questionsCount);
    }
  },
  methods: {
    nextQuestion: function nextQuestion() {
      //TODO Validate using acacha forms
      // Show errors

      // check if form is filled
      if (this.current === this.questionsCount - 1) {
        this.isFilled = true;
      }

      // clear any previous error messages
      // TODO this._clearError();

      // current question
      var currentQuestion = this.questions[this.current];

      ++this.current;

      if (!this.isFilled) {
        // change the current question number/status
        this._updateQuestionNumber();

        // add class "show-next" to form element (start animations)
        //          classie.addClass( this.el, 'show-next' );

        // remove class "current" from current question and add it to the next one
        // current question
        //TODO HOW TO ADD CLASS WITOUTH USING CLASSIE!
        //          var nextQuestion = this.questions[ this.current ];
        //          classie.removeClass( currentQuestion, 'current' );
        //          classie.addClass( nextQuestion, 'current' );
      }
    }
  },
  mounted: function mounted() {
    this.questions = [].slice.call(this.$el.querySelectorAll('ol > li'));
    this.questionsCount = this.questions.length;
    this.showNext = true;
    // show first question
    //      classie.addClass( this.questions[0], 'current' );

    //      new stepsForm( theForm, {
    //        onSubmit : function( form ) {
    //          // hide form
    //          classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
    //
    //            /*
    //             form.submit()
    //             or
    //             AJAX request (maybe show loading indicator while we don't have an answer..)
    //             */
    //
    //          // let's just simulate something...
    //          var messageEl = theForm.querySelector( '.final-message' );
    //          messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
    //          classie.addClass( messageEl, 'show' );
    //        }
    //      } );
  }
});

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Form__ = __webpack_require__(60);
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Form__["a" /* default */]],
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post(this.apiUrl).then(function (response) {
        _this.$emit('onSubmit', response);
      }).catch(function (error) {
        console.log(_this.form.errors.all());
        _this.$emit('onSubmitError', error);
      });
    }
  },
  mounted: function mounted() {
    this.form.clearOnSubmit = false;
  }
});

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_SimpleStepForm_vue__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_SimpleStepForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forms_SimpleStepForm_vue__);
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
  components: {
    'simple-step-form': __WEBPACK_IMPORTED_MODULE_0__forms_SimpleStepForm_vue___default.a
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_SingleStepForm_vue__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_SingleStepForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forms_SingleStepForm_vue__);
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
  components: {
    'single-step-form': __WEBPACK_IMPORTED_MODULE_0__forms_SingleStepForm_vue___default.a
  },
  props: {
    apiUrl: {
      type: String,
      default: 'http://localhost:8080/api/v1/invite/user'
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      console.log('OnSubmit event received');
    }
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n@font-face {\n    font-weight: normal;\n    font-style: normal;\n    font-family: 'icomoon';\n    src:url('/fonts/icomoon/icomoon.eot?-9heso');\n    src:url('/fonts/icomoon/icomoon.eot?#iefix-9heso') format('embedded-opentype'),\n    url('/fonts/icomoon/icomoon.woff?-9heso') format('woff'),\n    url('/fonts/icomoon/icomoon.ttf?-9heso') format('truetype'),\n    url('/fonts/icomoon/icomoon.svg?-9heso#icomoon') format('svg');\n}\n.simform {\n    position: relative;\n    margin: 0 auto;\n    padding: 2em 0;\n    max-width: 860px;\n    width: 100%;\n    text-align: left;\n    font-size: 2.5em;\n}\n.simform .submit {\n    display: none;\n}\n\n/* Question list style */\n.simform ol {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative;\n    transition: height 0.4s;\n}\n.simform ol:before {\n    content: '';\n    background-color: rgba(0,0,0,0.1);\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2.35em;\n}\n.questions li {\n    z-index: 100;\n    position: relative;\n    visibility: hidden;\n    height: 0;\n    transition: visibility 0s 0.4s, height 0s 0.4s;\n}\n.questions li.current,\n.no-js .questions li {\n    visibility: visible;\n    height: auto;\n    transition: none;\n}\n\n/* Labels */\n.questions li > span {\n    display: block;\n    overflow: hidden;\n}\n.questions li > span label {\n    display: block;\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n}\n.questions li.current > span label,\n.no-js .questions li > span label {\n    transition: none;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n.show-next .questions li.current > span label {\n    -webkit-animation: moveUpFromDown 0.4s both;\n    animation: moveUpFromDown 0.4s both;\n}\n@-webkit-keyframes moveUpFromDown {\nfrom { -webkit-transform: translateY(100%);\n}\nto { -webkit-transform: translateY(0);\n}\n}\n@keyframes moveUpFromDown {\nfrom { -webkit-transform: translateY(100%); transform: translateY(100%);\n}\nto { -webkit-transform: translateY(0); transform: translateY(0);\n}\n}\n\n/* Input field */\n.questions input {\n    display: block;\n    margin: 0.3em 0 0 0;\n    padding: 0.2em 1em 0.5em 0.7em;\n    width: calc(100% - 2em);\n    border: none;\n    background: transparent;\n    color: rgba(0,0,0,0.8);\n    font-size: 1em;\n    line-height: 1;\n    opacity: 0;\n    transition: opacity 0.3s;\n    height: 2.1em;\n}\n.questions .current input,\n.no-js .questions input {\n    opacity: 1;\n}\n.questions input:focus,\n.simform button:focus {\n    outline: none;\n}\n\n/* Next question button */\n.next {\n    position: absolute;\n    right: 0;\n    bottom: 2.15em; /* padding-bottom of form plus progress bar height */\n    display: block;\n    padding: 0;\n    width: 2em;\n    height: 2em;\n    border: none;\n    background: none;\n    color: rgba(0,0,0,0.4);\n    text-align: center;\n    opacity: 0;\n    z-index: 100;\n    cursor: pointer;\n    transition: opacity 0.3s, -webkit-transform 0.3s;\n    transition: transform 0.3s, opacity 0.3s;\n    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n    -webkit-transform: translateX(-20%);\n    transform: translateX(-20%);\n    pointer-events: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.next:hover {\n    color: rgba(0,0,0,0.5);\n}\n.next::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\\e600\";\n    text-transform: none;\n    font-weight: normal;\n    font-style: normal;\n    font-variant: normal;\n    font-family: 'icomoon';\n    line-height: 2;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.next.show {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    pointer-events: auto;\n}\n\n/* Progress bar */\n.simform .progress {\n    width: 0%;\n    height: 0.15em;\n    background: rgba(0,0,0,0.3);\n    transition: width 0.4s ease-in-out;\n}\n.simform .progress::before {\n    position: absolute;\n    top: auto;\n    width: 100%;\n    height: inherit;\n    background: rgba(0,0,0,0.05);\n    content: '';\n}\n\n/* Number indicator */\n.simform .number {\n    position: absolute;\n    right: 0;\n    overflow: hidden;\n    margin: 0.4em 0;\n    width: 3em;\n    font-weight: 700;\n    font-size: 0.4em;\n}\n.simform .number:after {\n    position: absolute;\n    left: 50%;\n    content: '/';\n    opacity: 0.4;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n}\n.simform .number span {\n    float: right;\n    width: 40%;\n    text-align: center;\n}\n.simform .number .number-current {\n    float: left;\n}\n.simform .number-next {\n    position: absolute;\n    left: 0;\n}\n.simform.show-next .number-current {\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n}\n.simform.show-next .number-next {\n    -webkit-animation: moveUpFromDown 0.4s both;\n    animation: moveUpFromDown 0.4s both;\n}\n\n/* Error and final message */\n.simform .error-message,\n.simform .final-message {\n    position: absolute;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n.simform .error-message {\n    padding: 0.4em 3.5em 0 0;\n    width: 100%;\n    color: orangered;\n    font-style: italic;\n    font-size: 0.4em;\n}\n.final-message {\n    top: 50%;\n    left: 0;\n    padding: 0.5em;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n}\n.error-message.show,\n.final-message.show {\n    visibility: visible;\n    opacity: 1;\n}\n.final-message.show {\n    transition-delay: 0.5s;\n}\n\n/* Final hiding of form / showing message */\n.simform-inner.hide {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.3s, visibility 0s 0.3s;\n}\n\n/* No JS Fallback */\n.no-js .simform {\n    font-size: 1.75em;\n}\n.no-js .questions li {\n    padding: 0 0 2em;\n}\n.no-js .simform .submit {\n    display: block;\n    float: right;\n    padding: 10px 20px;\n    border: none;\n    background: rgba(0,0,0,0.3);\n    color: rgba(0,0,0,0.4);\n}\n.no-js .simform .controls {\n    display: none;\n}\n\n/* Remove IE clear cross */\ninput[type=text]::-ms-clear {\n    display: none;\n}\n\n/* Adjust form for smaller screens */\n@media screen and (max-width: 44.75em) {\n.simform {\n        font-size: 1.8em;\n}\n}\n@media screen and (max-width: 33.5625em) {\n.simform {\n        font-size: 1.2em;\n}\n}\n", ""]);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n@font-face {\n    font-weight: normal;\n    font-style: normal;\n    font-family: 'icomoon';\n    src:url('/fonts/icomoon/icomoon.eot?-9heso');\n    src:url('/fonts/icomoon/icomoon.eot?#iefix-9heso') format('embedded-opentype'),\n    url('/fonts/icomoon/icomoon.woff?-9heso') format('woff'),\n    url('/fonts/icomoon/icomoon.ttf?-9heso') format('truetype'),\n    url('/fonts/icomoon/icomoon.svg?-9heso#icomoon') format('svg');\n}\n.simform {\n    position: relative;\n    margin: 0 auto;\n    padding: 2em 0;\n    max-width: 860px;\n    width: 100%;\n    text-align: left;\n    font-size: 2.5em;\n}\n.simform .submit {\n    display: none;\n}\n\n/* Question list style */\n.simform ol {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative;\n    transition: height 0.4s;\n}\n.simform ol:before {\n    content: '';\n    background-color: rgba(0,0,0,0.1);\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2.35em;\n}\n.questions li {\n    z-index: 100;\n    position: relative;\n    visibility: hidden;\n    height: 0;\n    transition: visibility 0s 0.4s, height 0s 0.4s;\n}\n.questions li.current,\n.no-js .questions li {\n    visibility: visible;\n    height: auto;\n    transition: none;\n}\n\n/* Labels */\n.questions li > span {\n    display: block;\n    overflow: hidden;\n}\n.questions li > span label {\n    display: block;\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n}\n.questions li.current > span label,\n.no-js .questions li > span label {\n    transition: none;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n.show-next .questions li.current > span label {\n    -webkit-animation: moveUpFromDown 0.4s both;\n    animation: moveUpFromDown 0.4s both;\n}\n@-webkit-keyframes moveUpFromDown {\nfrom { -webkit-transform: translateY(100%);\n}\nto { -webkit-transform: translateY(0);\n}\n}\n@keyframes moveUpFromDown {\nfrom { -webkit-transform: translateY(100%); transform: translateY(100%);\n}\nto { -webkit-transform: translateY(0); transform: translateY(0);\n}\n}\n\n/* Input field */\n.questions input {\n    display: block;\n    margin: 0.3em 0 0 0;\n    padding: 0.2em 1em 0.5em 0.7em;\n    width: calc(100% - 2em);\n    border: none;\n    background: transparent;\n    color: rgba(0,0,0,0.8);\n    font-size: 1em;\n    line-height: 1;\n    opacity: 0;\n    transition: opacity 0.3s;\n    height: 2.1em;\n}\n.questions .current input,\n.no-js .questions input {\n    opacity: 1;\n}\n.questions input:focus,\n.simform button:focus {\n    outline: none;\n}\n\n/* Next question button */\n.next {\n    position: absolute;\n    right: 0;\n    bottom: 2.15em; /* padding-bottom of form plus progress bar height */\n    display: block;\n    padding: 0;\n    width: 2em;\n    height: 2em;\n    border: none;\n    background: none;\n    color: rgba(0,0,0,0.4);\n    text-align: center;\n    opacity: 0;\n    z-index: 100;\n    cursor: pointer;\n    transition: opacity 0.3s, -webkit-transform 0.3s;\n    transition: transform 0.3s, opacity 0.3s;\n    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n    -webkit-transform: translateX(-20%);\n    transform: translateX(-20%);\n    pointer-events: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.next:hover {\n    color: rgba(0,0,0,0.5);\n}\n.next::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\\e600\";\n    text-transform: none;\n    font-weight: normal;\n    font-style: normal;\n    font-variant: normal;\n    font-family: 'icomoon';\n    line-height: 2;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.next.show {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    pointer-events: auto;\n}\n\n/* Progress bar */\n.simform .progress {\n    width: 0%;\n    height: 0.15em;\n    background: rgba(0,0,0,0.3);\n    transition: width 0.4s ease-in-out;\n}\n.simform .progress::before {\n    position: absolute;\n    top: auto;\n    width: 100%;\n    height: inherit;\n    background: rgba(0,0,0,0.05);\n    content: '';\n}\n\n/* Number indicator */\n.simform .number {\n    position: absolute;\n    right: 0;\n    overflow: hidden;\n    margin: 0.4em 0;\n    width: 3em;\n    font-weight: 700;\n    font-size: 0.4em;\n}\n.simform .number:after {\n    position: absolute;\n    left: 50%;\n    content: '/';\n    opacity: 0.4;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n}\n.simform .number span {\n    float: right;\n    width: 40%;\n    text-align: center;\n}\n.simform .number .number-current {\n    float: left;\n}\n.simform .number-next {\n    position: absolute;\n    left: 0;\n}\n.simform.show-next .number-current {\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n}\n.simform.show-next .number-next {\n    -webkit-animation: moveUpFromDown 0.4s both;\n    animation: moveUpFromDown 0.4s both;\n}\n\n/* Error and final message */\n.simform .error-message,\n.simform .final-message {\n    position: absolute;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n.simform .error-message {\n    padding: 0.4em 3.5em 0 0;\n    width: 100%;\n    color: orangered;\n    font-style: italic;\n    font-size: 0.4em;\n}\n.final-message {\n    top: 50%;\n    left: 0;\n    padding: 0.5em;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n}\n.error-message.show,\n.final-message.show {\n    visibility: visible;\n    opacity: 1;\n}\n.final-message.show {\n    transition-delay: 0.5s;\n}\n\n/* Final hiding of form / showing message */\n.simform-inner.hide {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.3s, visibility 0s 0.3s;\n}\n\n/* No JS Fallback */\n.no-js .simform {\n    font-size: 1.75em;\n}\n.no-js .questions li {\n    padding: 0 0 2em;\n}\n.no-js .simform .submit {\n    display: block;\n    float: right;\n    padding: 10px 20px;\n    border: none;\n    background: rgba(0,0,0,0.3);\n    color: rgba(0,0,0,0.4);\n}\n.no-js .simform .controls {\n    display: none;\n}\n\n/* Remove IE clear cross */\ninput[type=text]::-ms-clear {\n    display: none;\n}\n\n/* Adjust form for smaller screens */\n@media screen and (max-width: 44.75em) {\n.simform {\n        font-size: 1.8em;\n}\n}\n@media screen and (max-width: 33.5625em) {\n.simform {\n        font-size: 1.2em;\n}\n}\n", ""]);

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n    transition: opacity 1s ease;\n}\n.fade-enter, .fade-leave-to {\n    opacity: 0;\n}", ""]);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(47);
var buildURL = __webpack_require__(50);
var parseHeaders = __webpack_require__(56);
var isURLSameOrigin = __webpack_require__(54);
var createError = __webpack_require__(26);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(49);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(52);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(46);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(27);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(380)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(349),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/sergi/Code/acacha/users/sandbox/resources/assets/js/components/forms/SimpleStepForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SimpleStepForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5901dbd1", Component.options)
  } else {
    hotAPI.reload("data-v-5901dbd1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(370)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(332),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/sergi/Code/acacha/users/sandbox/resources/assets/js/components/forms/SingleStepForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SingleStepForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11dcfd67", Component.options)
  } else {
    hotAPI.reload("data-v-11dcfd67", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(360),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/sergi/Code/acacha/users/sandbox/resources/assets/js/components/users/RegisterUserByEmail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RegisterUserByEmail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0425f9e", Component.options)
  } else {
    hotAPI.reload("data-v-a0425f9e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(383)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(354),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/sergi/Code/acacha/users/sandbox/resources/assets/js/components/users/invitations/InviteUserFullScreen.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InviteUserFullScreen.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62a363ba", Component.options)
  } else {
    hotAPI.reload("data-v-62a363ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.3.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (true) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    } )); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isDef(last) && isDef(last.text)) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isDef(c.text) && isDef(last) && isDef(last.text)) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            reject(
               true
                ? ("timeout (" + (res.timeout) + "ms)")
                : null
            );
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && child.data.slot != null) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns
) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (true) {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (true) {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (true) {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (true) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    return this.$vnode.ssrContext
  }
});

Vue$3.version = '2.3.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (isUndef(value)) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
      "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number || type === 'number') {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
      config.productionTip !== false &&
      inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var decoder;

function decode (html) {
  decoder = decoder || document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest$1 = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
            (i > pos || !tagName) &&
            options.warn) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      walkThroughConditionsBlocks(node.ifConditions, isInFor);
    }
  }
}

function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
    markStaticRoots(conditionBlocks[i].block, isInFor);
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  native,
  warn
) {
  var res = native ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
        name === 'click' &&
        handler && handler.modifiers && handler.modifiers.right
      ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  bind: bind$1,
  cloak: noop
};

/*  */

// configurable state
var warn$3;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var isPlatformReservedTag$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$3 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  isPlatformReservedTag$1 = options.isReservedTag || no;
  var code = ast ? genElement(ast) : '_c("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el)
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el) {
  el.staticProcessed = true;
  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && warn$3(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el)
    }
    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el)
  }
}

function genIf (el) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice())
}

function genIfConditions (conditions) {
  if (!conditions.length) {
    return '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return el.once ? genOnce(el) : genElement(el)
  }
}

function genFor (el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (
    "development" !== 'production' &&
    maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key
  ) {
    warn$3(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, warn$3)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, warn$3)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$3);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    warn$3('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, currentOptions);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (slots) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "])")
}

function genScopedSlot (key, el) {
  return "[" + key + ",function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el) || 'void 0'
      : genElement(el)) + "}]"
}

function genChildren (el, checkSkip) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot') {
      return genElement(el$1)
    }
    var normalizationType = checkSkip ? getNormalizationType(children) : 0;
    return ("[" + (children.map(genNode).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (children) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function maybeComponent (el) {
  return !isPlatformReservedTag$1(el.tag)
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genSlot (el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el, true);
  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

function makeFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompiler (baseOptions) {
  var functionCompileCache = Object.create(null);

  function compile (
    template,
    options
  ) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];
    finalOptions.warn = function (msg, tip$$1) {
      (tip$$1 ? tips : errors).push(msg);
    };

    if (options) {
      // merge custom modules
      if (options.modules) {
        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
      }
      // merge custom directives
      if (options.directives) {
        finalOptions.directives = extend(
          Object.create(baseOptions.directives),
          options.directives
        );
      }
      // copy other options
      for (var key in options) {
        if (key !== 'modules' && key !== 'directives') {
          finalOptions[key] = options[key];
        }
      }
    }

    var compiled = baseCompile(template, finalOptions);
    if (true) {
      errors.push.apply(errors, detectErrors(compiled.ast));
    }
    compiled.errors = errors;
    compiled.tips = tips;
    return compiled
  }

  function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (functionCompileCache[key]) {
      return functionCompileCache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = makeFunction(compiled.render, fnGenErrors);
    var l = compiled.staticRenderFns.length;
    res.staticRenderFns = new Array(l);
    for (var i = 0; i < l; i++) {
      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
    }

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (functionCompileCache[key] = res)
  }

  return {
    compile: compile,
    compileToFunctions: compileToFunctions
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "simform",
    attrs: {
      "id": "theForm",
      "autocomplete": "off"
    }
  }, [_c('div', {
    staticClass: "simform-inner",
    class: {
      hide: _vm.form.succeeded
    }
  }, [_vm._t("default", null, {
    form: _vm.form
  }), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('button', {
    staticClass: "next show",
    attrs: {
      "aria-label": "Next"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.submit()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "error-message",
    class: {
      show: _vm.form.errors.has('email')
    },
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('email'))
    }
  })])], 2), _vm._v(" "), _c('span', {
    staticClass: "final-message",
    class: {
      show: _vm.form.succeeded
    }
  }, [_vm._t("message", [_vm._v("Form send ok!")])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11dcfd67", module.exports)
  }
}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "simform",
    attrs: {
      "id": "theForm",
      "autocomplete": "off"
    }
  }, [_c('div', {
    staticClass: "simform-inner",
    class: {
      hide: _vm.isFilled
    }
  }, [_vm._t("default", null, {
    current: _vm.current,
    shit: "shit"
  }), _vm._v(" "), _c('button', {
    staticClass: "submit",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Send answers")]), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('button', {
    staticClass: "next",
    class: {
      show: _vm.showNext
    },
    attrs: {
      "aria-label": "Next"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.nextQuestion()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "progress",
    style: ({
      width: _vm.currentProgress + '%'
    }),
    attrs: {
      "role": "progressbar",
      "aria-readonly": "true",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": _vm.currentProgress
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_c('span', {
    staticClass: "number-current"
  }, [_vm._v(_vm._s(_vm.current + 1))]), _vm._v(" "), _c('span', {
    staticClass: "number-total"
  }, [_vm._v(_vm._s(_vm.questionsCount))])]), _vm._v(" "), _c('span', {
    staticClass: "error-message"
  })])], 2), _vm._v(" "), _c('span', {
    staticClass: "final-message",
    class: {
      show: _vm.isFilled
    }
  }, [_vm._v("Missatge final")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5901dbd1", module.exports)
  }
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('single-step-form', {
    attrs: {
      "apiUrl": _vm.apiUrl
    },
    on: {
      "onSubmit": _vm.onSubmit
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('ol', {
          staticClass: "questions"
        }, [_c('li', {
          staticClass: "current"
        }, [_c('span', [_c('label', {
          attrs: {
            "for": "email"
          }
        }, [_vm._v("Email to send invitation?")])]), _vm._v(" "), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: (props.form.email),
            expression: "props.form.email"
          }],
          attrs: {
            "id": "email",
            "name": "email",
            "type": "email",
            "placeholder": "myuser@email.com",
            "autofocus": ""
          },
          domProps: {
            "value": (props.form.email)
          },
          on: {
            "input": function($event) {
              if ($event.target.composing) { return; }
              props.form.email = $event.target.value
            }
          }
        })])])]
      }]
    ])
  }, [_c('div', {
    slot: "message"
  }, [_vm._v("Invitation sent!")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62a363ba", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('simple-step-form', {
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('ol', {
          staticClass: "questions",
          attrs: {
            "scope": "props"
          }
        }, [_c('li', {
          class: {
            current: props.current == 0
          }
        }, [_c('span', [_c('label', {
          attrs: {
            "for": "q1"
          }
        }, [_vm._v(_vm._s(props.current) + " | What's your email?")])]), _vm._v(" "), _c('input', {
          attrs: {
            "id": "email",
            "name": "email",
            "type": "email"
          }
        })]), _vm._v(" "), _c('li', {
          class: {
            current: props.current == 1
          }
        }, [_c('span', [_c('label', {
          attrs: {
            "for": "q2"
          }
        }, [_vm._v("Your name?")])]), _vm._v(" "), _c('input', {
          attrs: {
            "id": "name",
            "name": "name",
            "type": "text"
          }
        })]), _vm._v(" "), _c('li', {
          class: {
            current: props.current == 2
          }
        }, [_c('span', [_c('label', {
          attrs: {
            "for": "q3"
          }
        }, [_vm._v("What time do you go to work?")])]), _vm._v(" "), _c('input', {
          attrs: {
            "id": "q3",
            "name": "q3",
            "type": "text"
          }
        })]), _vm._v(" "), _c('li', {
          class: {
            current: props.current == 3
          }
        }, [_c('span', [_c('label', {
          attrs: {
            "for": "q4"
          }
        }, [_vm._v("How do you like your veggies?")])]), _vm._v(" "), _c('input', {
          attrs: {
            "id": "q4",
            "name": "q4",
            "type": "text"
          }
        })])])]
      }]
    ])
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a0425f9e", module.exports)
  }
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("45775811", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-11dcfd67\",\"scoped\":false,\"hasInlineConfig\":true}!./full-screen-forms.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-11dcfd67\",\"scoped\":false,\"hasInlineConfig\":true}!./full-screen-forms.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7ea38de3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5901dbd1\",\"scoped\":false,\"hasInlineConfig\":true}!./full-screen-forms.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5901dbd1\",\"scoped\":false,\"hasInlineConfig\":true}!./full-screen-forms.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("004a56d5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-62a363ba\",\"scoped\":false,\"hasInlineConfig\":true}!./fade.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-62a363ba\",\"scoped\":false,\"hasInlineConfig\":true}!./fade.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(27);
var Axios = __webpack_require__(43);
var defaults = __webpack_require__(12);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(24);
axios.CancelToken = __webpack_require__(42);
axios.isCancel = __webpack_require__(25);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(57);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(24);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(12);
var utils = __webpack_require__(3);
var InterceptorManager = __webpack_require__(44);
var dispatchRequest = __webpack_require__(45);
var isAbsoluteURL = __webpack_require__(53);
var combineURLs = __webpack_require__(51);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(48);
var isCancel = __webpack_require__(25);
var defaults = __webpack_require__(12);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(26);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(75)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_acacha_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_acacha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_acacha_forms__);


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_0_acacha_forms___default.a({ email: '' })
    };
  },
  props: {
    apiUrl: {
      type: String,
      default: 'http://localhost:8080/api/v1/management/users/invitations'
    }
  },
  methods: {
    clearErrors: function clearErrors(name) {
      this.form.errors.clear(name);
    }
  },
  mounted: function mounted() {
    this.form.clearOnSubmit = true;
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t(__webpack_require__(22)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AcachaForm = t(require("axios")) : e.AcachaForm = t(e.axios);
}(undefined, function (e) {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
    }var n = {};return t.m = e, t.c = n, t.i = function (e) {
      return e;
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 3);
  }([function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = function () {
      function e() {
        r(this, e), this.errors = {};
      }return i(e, [{ key: "any", value: function value() {
          return Object.keys(this.errors).length > 0;
        } }, { key: "hasErrors", value: function value() {
          return this.any();
        } }, { key: "all", value: function value() {
          return this.errors;
        } }, { key: "has", value: function value(e) {
          return this.errors.hasOwnProperty(e);
        } }, { key: "get", value: function value(e) {
          if (this.has(e)) return "string" == typeof this.errors[e] ? this.errors[e] : this.errors[e][0];
        } }, { key: "record", value: function value(e) {
          this.set(e);
        } }, { key: "set", value: function value(e) {
          this.errors = e;
        } }, { key: "clear", value: function value(e) {
          if (e) return void delete this.errors[e];this.errors = {};
        } }, { key: "forget", value: function value(e) {
          this.clear(e);
        } }]), e;
    }();t.default = o, e.exports = t.default;
  }, function (e, t, n) {
    var r, i;!function (o) {
      r = [n(4)], void 0 !== (i = function (e) {
        return function () {
          function t(e, t, n) {
            return h({ type: w.error, iconClass: g().iconClasses.error, message: e, optionsOverride: n, title: t });
          }function n(t, n) {
            return t || (t = g()), m = e("#" + t.containerId), m.length ? m : (n && (m = f(t)), m);
          }function r(e, t, n) {
            return h({ type: w.info, iconClass: g().iconClasses.info, message: e, optionsOverride: n, title: t });
          }function i(e) {
            y = e;
          }function o(e, t, n) {
            return h({ type: w.success, iconClass: g().iconClasses.success, message: e, optionsOverride: n, title: t });
          }function s(e, t, n) {
            return h({ type: w.warning, iconClass: g().iconClasses.warning, message: e, optionsOverride: n, title: t });
          }function a(e, t) {
            var r = g();m || n(r), l(e, r, t) || c(r);
          }function u(t) {
            var r = g();if (m || n(r), t && 0 === e(":focus", t).length) return void v(t);m.children().length && m.remove();
          }function c(t) {
            for (var n = m.children(), r = n.length - 1; r >= 0; r--) {
              l(e(n[r]), t);
            }
          }function l(t, n, r) {
            var i = !(!r || !r.force) && r.force;return !(!t || !i && 0 !== e(":focus", t).length) && (t[n.hideMethod]({ duration: n.hideDuration, easing: n.hideEasing, complete: function complete() {
                v(t);
              } }), !0);
          }function f(t) {
            return m = e("<div/>").attr("id", t.containerId).addClass(t.positionClass).attr("aria-live", "polite").attr("role", "alert"), m.appendTo(e(t.target)), m;
          }function d() {
            return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1 };
          }function p(e) {
            y && y(e);
          }function h(t) {
            function r(e) {
              return null == e && (e = ""), new String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }function i() {
              t.iconClass && C.addClass(y.toastClass).addClass(w);
            }function o() {
              y.newestOnTop ? m.prepend(C) : m.append(C);
            }function s() {
              t.title && (k.append(y.escapeHtml ? r(t.title) : t.title).addClass(y.titleClass), C.append(k));
            }function a() {
              t.message && (E.append(y.escapeHtml ? r(t.message) : t.message).addClass(y.messageClass), C.append(E));
            }function u() {
              y.closeButton && (D.addClass("toast-close-button").attr("role", "button"), C.prepend(D));
            }function c() {
              y.progressBar && (S.addClass("toast-progress"), C.prepend(S));
            }function l(t) {
              var n = t && !1 !== y.closeMethod ? y.closeMethod : y.hideMethod,
                  r = t && !1 !== y.closeDuration ? y.closeDuration : y.hideDuration,
                  i = t && !1 !== y.closeEasing ? y.closeEasing : y.hideEasing;if (!e(":focus", C).length || t) return clearTimeout(j.intervalId), C[n]({ duration: r, easing: i, complete: function complete() {
                  v(C), y.onHidden && "hidden" !== N.state && y.onHidden(), N.state = "hidden", N.endTime = new Date(), p(N);
                } });
            }function f() {
              (y.timeOut > 0 || y.extendedTimeOut > 0) && (T = setTimeout(l, y.extendedTimeOut), j.maxHideTime = parseFloat(y.extendedTimeOut), j.hideEta = new Date().getTime() + j.maxHideTime);
            }function d() {
              clearTimeout(T), j.hideEta = 0, C.stop(!0, !0)[y.showMethod]({ duration: y.showDuration, easing: y.showEasing });
            }function h() {
              var e = (j.hideEta - new Date().getTime()) / j.maxHideTime * 100;S.width(e + "%");
            }var y = g(),
                w = t.iconClass || y.iconClass;if (void 0 !== t.optionsOverride && (y = e.extend(y, t.optionsOverride), w = t.optionsOverride.iconClass || w), !function (e, t) {
              if (e.preventDuplicates) {
                if (t.message === x) return !0;x = t.message;
              }return !1;
            }(y, t)) {
              b++, m = n(y, !0);var T = null,
                  C = e("<div/>"),
                  k = e("<div/>"),
                  E = e("<div/>"),
                  S = e("<div/>"),
                  D = e(y.closeHtml),
                  j = { intervalId: null, hideEta: null, maxHideTime: null },
                  N = { toastId: b, state: "visible", startTime: new Date(), options: y, map: t };return function () {
                i(), s(), a(), u(), c(), o();
              }(), function () {
                C.hide(), C[y.showMethod]({ duration: y.showDuration, easing: y.showEasing, complete: y.onShown }), y.timeOut > 0 && (T = setTimeout(l, y.timeOut), j.maxHideTime = parseFloat(y.timeOut), j.hideEta = new Date().getTime() + j.maxHideTime, y.progressBar && (j.intervalId = setInterval(h, 10)));
              }(), function () {
                C.hover(d, f), !y.onclick && y.tapToDismiss && C.click(l), y.closeButton && D && D.click(function (e) {
                  e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), l(!0);
                }), y.onclick && C.click(function (e) {
                  y.onclick(e), l();
                });
              }(), p(N), y.debug && console && console.log(N), C;
            }
          }function g() {
            return e.extend({}, d(), T.options);
          }function v(e) {
            m || (m = n()), e.is(":visible") || (e.remove(), e = null, 0 === m.children().length && (m.remove(), x = void 0));
          }var m,
              y,
              x,
              b = 0,
              w = { error: "error", info: "info", success: "success", warning: "warning" },
              T = { clear: a, remove: u, error: t, getContainer: n, info: r, options: {}, subscribe: i, success: o, version: "2.1.2", warning: s };return T;
        }();
      }.apply(t, r)) && (e.exports = i);
    }(n(5));
  }, function (t, n) {
    t.exports = e;
  }, function (e, t, n) {
    "use strict";
    (function (r) {
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          a = n(0),
          u = i(a),
          c = n(1),
          l = (i(c), function () {
        function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];o(this, e), t = this.convertFromFormData(t), this.clearOnSubmit = !1, this.originalFields = t, this.errors = new u.default(), this.resetStatus();for (var i in t) {
            this[i] = t[i];
          }this.toastr = n, this.debug = r;
        }return s(e, [{ key: "convertFromFormData", value: function value(e) {
            if ("undefined" != typeof window && e instanceof FormData) {
              var t = {},
                  n = !0,
                  r = !1,
                  i = void 0;try {
                for (var o, s = e.entries()[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                  var a = o.value;void 0 !== a[1] && (t[a[0]] = a[1]);
                }
              } catch (e) {
                r = !0, i = e;
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (r) throw i;
                }
              }return t;
            }return e;
          } }, { key: "getField", value: function value(e) {
            if (this.has(e)) return this[e];
          } }, { key: "setField", value: function value(e, t) {
            this.has(e) && (this[e] = t);
          } }, { key: "has", value: function value(e) {
            return this.hasOwnProperty(e);
          } }, { key: "reset", value: function value() {
            this.fields = {};for (var e in this.originalFields) {
              this[e] = "";
            }this.errors.clear();
          } }, { key: "clearOnSubmit", value: function value() {
            this.clearOnSubmit = !0;
          } }, { key: "resetStatus", value: function value() {
            this.errors.forget(), this.submitting = !1, this.submitted = !1, this.succeeded = !1;
          } }, { key: "data", value: function value() {
            var e = {};for (var t in this.originalFields) {
              e[t] = this[t];
            }return e;
          } }, { key: "startProcessing", value: function value() {
            this.errors.forget(), this.submitting = !0, this.succeeded = !1;
          } }, { key: "finishProcessing", value: function value() {
            this.submitting = !1, this.submitted = !1, this.succeeded = !0;
          } }, { key: "finishProcessingOnErrors", value: function value() {
            this.submitting = !1, this.submitted = !1, this.succeeded = !1;
          } }, { key: "get", value: function value(e) {
            return this.submit("get", e);
          } }, { key: "post", value: function value(e) {
            return this.submit("post", e);
          } }, { key: "put", value: function value(e) {
            return this.submit("put", e);
          } }, { key: "patch", value: function value(e) {
            return this.submit("patch", e);
          } }, { key: "delete", value: function value(e) {
            return this.submit("delete", e);
          } }, { key: "configureAxios", value: function value() {
            r.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";var e = document.head.querySelector('meta[name="csrf-token"]');e && (r.defaults.headers.common["X-CSRF-TOKEN"] = e.content);
          } }, { key: "submit", value: function value(e, t) {
            var n = this;return this.startProcessing(), new Promise(function (i, o) {
              n.configureAxios(), r[e](t, n.data()).then(function (e) {
                n.onSuccess(), i(e);
              }).catch(function (e) {
                n.onFail(e), o(e);
              });
            });
          } }, { key: "onSuccess", value: function value() {
            this.finishProcessing(), this.clearOnSubmit && this.reset();
          } }, { key: "onFail", value: function value(e) {
            e.response.data && this.errors.record(e.response.data), this.finishProcessingOnErrors(), this.toastr && toastr.error(e, "Error"), this.debug && (e.response ? (console.log(e.response.data), console.log(e.response.status), console.log(e.response.headers)) : e.request ? console.log(e.request) : console.log("Error", e.message), console.log(e.config));
          } }, { key: "setErrors", value: function value(e) {
            this.submitting = !1, this.errors.set(e);
          } }]), e;
      }());t.default = l, e.exports = t.default;
    }).call(t, n(2));
  }, function (e, t, n) {
    var r, i; /*!
              * jQuery JavaScript Library v3.2.1
              * https://jquery.com/
              *
              * Includes Sizzle.js
              * https://sizzlejs.com/
              *
              * Copyright JS Foundation and other contributors
              * Released under the MIT license
              * https://jquery.org/license
              *
              * Date: 2017-03-20T18:59Z
              */
    !function (t, n) {
      "use strict";
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");return n(e);
      } : n(t);
    }("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      function s(e, t) {
        t = t || se;var n = t.createElement("script");n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
      }function a(e) {
        var t = !!e && "length" in e && e.length,
            n = ye.type(e);return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }function c(e, t, n) {
        return ye.isFunction(t) ? ye.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? ye.grep(e, function (e) {
          return e === t !== n;
        }) : "string" != typeof t ? ye.grep(e, function (e) {
          return fe.call(t, e) > -1 !== n;
        }) : Ee.test(t) ? ye.filter(t, e, n) : (t = ye.filter(t, e), ye.grep(e, function (e) {
          return fe.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
      }function l(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
      }function f(e) {
        var t = {};return ye.each(e.match(Ae) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }function d(e) {
        return e;
      }function p(e) {
        throw e;
      }function h(e, t, n, r) {
        var i;try {
          e && ye.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && ye.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }function g() {
        se.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), ye.ready();
      }function v() {
        this.expando = ye.expando + v.uid++;
      }function m(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Me.test(e) ? JSON.parse(e) : e);
      }function y(e, t, n) {
        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = m(n);
          } catch (e) {}Pe.set(e, t, n);
        } else n = void 0;return n;
      }function x(e, t, n, r) {
        var i,
            o = 1,
            s = 20,
            a = r ? function () {
          return r.cur();
        } : function () {
          return ye.css(e, t, "");
        },
            u = a(),
            c = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
            l = (ye.cssNumber[t] || "px" !== c && +u) && We.exec(ye.css(e, t));if (l && l[3] !== c) {
          c = c || l[3], n = n || [], l = +u || 1;do {
            o = o || ".5", l /= o, ye.style(e, t, l + c);
          } while (o !== (o = a() / u) && 1 !== o && --s);
        }return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i;
      }function b(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = Xe[r];return i || (t = n.body.appendChild(n.createElement(r)), i = ye.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Xe[r] = i, i);
      }function w(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++) {
          r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n)));
        }for (o = 0; o < s; o++) {
          null != i[o] && (e[o].style.display = i[o]);
        }return e;
      }function T(e, t) {
        var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && u(e, t) ? ye.merge([e], n) : n;
      }function C(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"));
        }
      }function k(e, t, n, r, i) {
        for (var o, s, a, u, c, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) {
          if ((o = e[p]) || 0 === o) if ("object" === ye.type(o)) ye.merge(d, o.nodeType ? [o] : o);else if (Ye.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Ue.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[a] || Ge._default, s.innerHTML = u[1] + ye.htmlPrefilter(o) + u[2], l = u[0]; l--;) {
              s = s.lastChild;
            }ye.merge(d, s.childNodes), s = f.firstChild, s.textContent = "";
          } else d.push(t.createTextNode(o));
        }for (f.textContent = "", p = 0; o = d[p++];) {
          if (r && ye.inArray(o, r) > -1) i && i.push(o);else if (c = ye.contains(o.ownerDocument, o), s = T(f.appendChild(o), "script"), c && C(s), n) for (l = 0; o = s[l++];) {
            Ve.test(o.type || "") && n.push(o);
          }
        }return f;
      }function E() {
        return !0;
      }function S() {
        return !1;
      }function D() {
        try {
          return se.activeElement;
        } catch (e) {}
      }function j(e, t, n, r, i, o) {
        var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
          "string" != typeof n && (r = r || n, n = void 0);for (a in t) {
            j(e, a, n, r, t[a], o);
          }return e;
        }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = S;else if (!i) return e;return 1 === o && (s = i, i = function i(e) {
          return ye().off(e), s.apply(this, arguments);
        }, i.guid = s.guid || (s.guid = ye.guid++)), e.each(function () {
          ye.event.add(this, t, i, r, n);
        });
      }function N(e, t) {
        return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") ? ye(">tbody", e)[0] || e : e;
      }function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }function q(e) {
        var t = nt.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
      }function O(e, t) {
        var n, r, i, o, s, a, u, c;if (1 === t.nodeType) {
          if (Fe.hasData(e) && (o = Fe.access(e), s = Fe.set(t, o), c = o.events)) {
            delete s.handle, s.events = {};for (i in c) {
              for (n = 0, r = c[i].length; n < r; n++) {
                ye.event.add(t, i, c[i][n]);
              }
            }
          }Pe.hasData(e) && (a = Pe.access(e), u = ye.extend({}, a), Pe.set(t, u));
        }
      }function L(e, t) {
        var n = t.nodeName.toLowerCase();"input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
      }function H(e, t, n, r) {
        t = ce.apply([], t);var i,
            o,
            a,
            u,
            c,
            l,
            f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            g = ye.isFunction(h);if (g || d > 1 && "string" == typeof h && !me.checkClone && tt.test(h)) return e.each(function (i) {
          var o = e.eq(i);g && (t[0] = h.call(this, i, o.html())), H(o, t, n, r);
        });if (d && (i = k(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (a = ye.map(T(i, "script"), A), u = a.length; f < d; f++) {
            c = i, f !== p && (c = ye.clone(c, !0, !0), u && ye.merge(a, T(c, "script"))), n.call(e[f], c, f);
          }if (u) for (l = a[a.length - 1].ownerDocument, ye.map(a, q), f = 0; f < u; f++) {
            c = a[f], Ve.test(c.type || "") && !Fe.access(c, "globalEval") && ye.contains(l, c) && (c.src ? ye._evalUrl && ye._evalUrl(c.src) : s(c.textContent.replace(rt, ""), l));
          }
        }return e;
      }function F(e, t, n) {
        for (var r, i = t ? ye.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
          n || 1 !== r.nodeType || ye.cleanData(T(r)), r.parentNode && (n && ye.contains(r.ownerDocument, r) && C(T(r, "script")), r.parentNode.removeChild(r));
        }return e;
      }function P(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.style;return n = n || st(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ye.contains(e.ownerDocument, e) || (s = ye.style(e, t)), !me.pixelMarginRight() && ot.test(s) && it.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
      }function M(e, t) {
        return { get: function get() {
            return e() ? void delete this.get : (this.get = t).apply(this, arguments);
          } };
      }function R(e) {
        if (e in dt) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;) {
          if ((e = ft[n] + t) in dt) return e;
        }
      }function I(e) {
        var t = ye.cssProps[e];return t || (t = ye.cssProps[e] = R(e) || e), t;
      }function W(e, t, n) {
        var r = We.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }function B(e, t, n, r, i) {
        var o,
            s = 0;for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) {
          "margin" === n && (s += ye.css(e, n + Be[o], !0, i)), r ? ("content" === n && (s -= ye.css(e, "padding" + Be[o], !0, i)), "margin" !== n && (s -= ye.css(e, "border" + Be[o] + "Width", !0, i))) : (s += ye.css(e, "padding" + Be[o], !0, i), "padding" !== n && (s += ye.css(e, "border" + Be[o] + "Width", !0, i)));
        }return s;
      }function $(e, t, n) {
        var r,
            i = st(e),
            o = P(e, t, i),
            s = "border-box" === ye.css(e, "boxSizing", !1, i);return ot.test(o) ? o : (r = s && (me.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + B(e, t, n || (s ? "border" : "content"), r, i) + "px");
      }function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i);
      }function X() {
        ht && (!1 === se.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(X) : n.setTimeout(X, ye.fx.interval), ye.fx.tick());
      }function z() {
        return n.setTimeout(function () {
          pt = void 0;
        }), pt = ye.now();
      }function U(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
          n = Be[r], i["margin" + n] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
      }function V(e, t, n) {
        for (var r, i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), o = 0, s = i.length; o < s; o++) {
          if (r = i[o].call(n, t, e)) return r;
        }
      }function G(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            g = e.nodeType && $e(e),
            v = Fe.get(e, "fxshow");n.queue || (s = ye._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, d.always(function () {
          d.always(function () {
            s.unqueued--, ye.queue(e, "fx").length || s.empty.fire();
          });
        }));for (r in t) {
          if (i = t[r], gt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !v || void 0 === v[r]) continue;g = !0;
            }p[r] = v && v[r] || ye.style(e, r);
          }
        }if ((u = !ye.isEmptyObject(t)) || !ye.isEmptyObject(p)) {
          f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = Fe.get(e, "display")), l = ye.css(e, "display"), "none" === l && (c ? l = c : (w([e], !0), c = e.style.display || c, l = ye.css(e, "display"), w([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === ye.css(e, "float") && (u || (d.done(function () {
            h.display = c;
          }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
          })), u = !1;for (r in p) {
            u || (v ? "hidden" in v && (g = v.hidden) : v = Fe.access(e, "fxshow", { display: c }), o && (v.hidden = !g), g && w([e], !0), d.done(function () {
              g || w([e]), Fe.remove(e, "fxshow");for (r in p) {
                ye.style(e, r, p[r]);
              }
            })), u = V(g ? v[r] : 0, r, d), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
          }
        }
      }function Y(e, t) {
        var n, r, i, o, s;for (n in e) {
          if (r = ye.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = ye.cssHooks[r]) && "expand" in s) {
            o = s.expand(o), delete e[r];for (n in o) {
              n in e || (e[n] = o[n], t[n] = i);
            }
          } else t[r] = i;
        }
      }function Q(e, t, n) {
        var r,
            i,
            o = 0,
            s = Q.prefilters.length,
            a = ye.Deferred().always(function () {
          delete u.elem;
        }),
            u = function u() {
          if (i) return !1;for (var t = pt || z(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; s < u; s++) {
            c.tweens[s].run(o);
          }return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (u || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
        },
            c = a.promise({ elem: e, props: ye.extend({}, t), opts: ye.extend(!0, { specialEasing: {}, easing: ye.easing._default }, n), originalProperties: t, originalOptions: n, startTime: pt || z(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
            var r = ye.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(r), r;
          }, stop: function stop(t) {
            var n = 0,
                r = t ? c.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
              c.tweens[n].run(1);
            }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
          } }),
            l = c.props;for (Y(l, c.opts.specialEasing); o < s; o++) {
          if (r = Q.prefilters[o].call(c, e, l, c.opts)) return ye.isFunction(r.stop) && (ye._queueHooks(c.elem, c.opts.queue).stop = ye.proxy(r.stop, r)), r;
        }return ye.map(l, V, c), ye.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ye.fx.timer(ye.extend(u, { elem: e, anim: c, queue: c.opts.queue })), c;
      }function J(e) {
        return (e.match(Ae) || []).join(" ");
      }function K(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }function Z(e, t, n, r) {
        var i;if (Array.isArray(t)) ye.each(t, function (t, i) {
          n || Et.test(e) ? r(e, i) : Z(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== ye.type(t)) r(e, t);else for (i in t) {
          Z(e + "[" + i + "]", t[i], n, r);
        }
      }function ee(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");var r,
              i = 0,
              o = t.toLowerCase().match(Ae) || [];if (ye.isFunction(n)) for (; r = o[i++];) {
            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          }
        };
      }function te(e, t, n, r) {
        function i(a) {
          var u;return o[a] = !0, ye.each(e[a] || [], function (e, a) {
            var c = a(t, n, r);return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1);
          }), u;
        }var o = {},
            s = e === Ot;return i(t.dataTypes[0]) || !o["*"] && i("*");
      }function ne(e, t) {
        var n,
            r,
            i = ye.ajaxSettings.flatOptions || {};for (n in t) {
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && ye.extend(!0, e, r), e;
      }function re(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) {
          u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        }if (r) for (i in a) {
          if (a[i] && a[i].test(r)) {
            u.unshift(i);break;
          }
        }if (u[0] in n) o = u[0];else {
          for (i in n) {
            if (!u[0] || e.converters[i + " " + u[0]]) {
              o = i;break;
            }s || (s = i);
          }o = o || s;
        }if (o) return o !== u[0] && u.unshift(o), n[o];
      }function ie(e, t, n, r) {
        var i,
            o,
            s,
            a,
            u,
            c = {},
            l = e.dataTypes.slice();if (l[1]) for (s in e.converters) {
          c[s.toLowerCase()] = e.converters[s];
        }for (o = l.shift(); o;) {
          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(s = c[u + " " + o] || c["* " + o])) for (i in c) {
              if (a = i.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));break;
              }
            }if (!0 !== s) if (s && e.throws) t = s(t);else try {
              t = s(t);
            } catch (e) {
              return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o };
            }
          }
        }return { state: "success", data: t };
      }var oe = [],
          se = n.document,
          ae = Object.getPrototypeOf,
          ue = oe.slice,
          ce = oe.concat,
          le = oe.push,
          fe = oe.indexOf,
          de = {},
          pe = de.toString,
          he = de.hasOwnProperty,
          ge = he.toString,
          ve = ge.call(Object),
          me = {},
          ye = function ye(e, t) {
        return new ye.fn.init(e, t);
      },
          xe = function xe(e, t) {
        return t.toUpperCase();
      };ye.fn = ye.prototype = { jquery: "3.2.1", constructor: ye, length: 0, toArray: function toArray() {
          return ue.call(this);
        }, get: function get(e) {
          return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function pushStack(e) {
          var t = ye.merge(this.constructor(), e);return t.prevObject = this, t;
        }, each: function each(e) {
          return ye.each(this, e);
        }, map: function map(e) {
          return this.pushStack(ye.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        }, slice: function slice() {
          return this.pushStack(ue.apply(this, arguments));
        }, first: function first() {
          return this.eq(0);
        }, last: function last() {
          return this.eq(-1);
        }, eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function end() {
          return this.prevObject || this.constructor();
        }, push: le, sort: oe.sort, splice: oe.splice }, ye.extend = ye.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || ye.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) {
          if (null != (e = arguments[a])) for (t in e) {
            n = s[t], r = e[t], s !== r && (c && r && (ye.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && ye.isPlainObject(n) ? n : {}, s[t] = ye.extend(c, o, r)) : void 0 !== r && (s[t] = r));
          }
        }return s;
      }, ye.extend({ expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
          throw new Error(e);
        }, noop: function noop() {}, isFunction: function isFunction(e) {
          return "function" === ye.type(e);
        }, isWindow: function isWindow(e) {
          return null != e && e === e.window;
        }, isNumeric: function isNumeric(e) {
          var t = ye.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }, isPlainObject: function isPlainObject(e) {
          var t, n;return !(!e || "[object Object]" !== pe.call(e)) && (!(t = ae(e)) || "function" == typeof (n = he.call(t, "constructor") && t.constructor) && ge.call(n) === ve);
        }, isEmptyObject: function isEmptyObject(e) {
          var t;for (t in e) {
            return !1;
          }return !0;
        }, type: function type(e) {
          return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? de[pe.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
        }, globalEval: function globalEval(e) {
          s(e);
        }, camelCase: function camelCase(e) {
          return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, xe);
        }, each: function each(e, t) {
          var n,
              r = 0;if (a(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }return e;
        }, trim: function trim(e) {
          return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }, makeArray: function makeArray(e, t) {
          var n = t || [];return null != e && (a(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
          return null == t ? -1 : fe.call(t, e, n);
        }, merge: function merge(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
            e[i++] = t[r];
          }return e.length = i, e;
        }, grep: function grep(e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) {
            !t(e[i], i) !== s && r.push(e[i]);
          }return r;
        }, map: function map(e, t, n) {
          var r,
              i,
              o = 0,
              s = [];if (a(e)) for (r = e.length; o < r; o++) {
            null != (i = t(e[o], o, n)) && s.push(i);
          } else for (o in e) {
            null != (i = t(e[o], o, n)) && s.push(i);
          }return ce.apply([], s);
        }, guid: 1, proxy: function proxy(e, t) {
          var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), ye.isFunction(e)) return r = ue.call(arguments, 2), i = function i() {
            return e.apply(t || this, r.concat(ue.call(arguments)));
          }, i.guid = e.guid = e.guid || ye.guid++, i;
        }, now: Date.now, support: me }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = oe[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        de["[object " + t + "]"] = t.toLowerCase();
      });var be = /*!
                  * Sizzle CSS Selector Engine v2.3.3
                  * https://sizzlejs.com/
                  *
                  * Copyright jQuery Foundation and other contributors
                  * Released under the MIT license
                  * http://jquery.org/license
                  *
                  * Date: 2016-08-08
                  */
      function (e) {
        function t(e, t, n, r) {
          var i,
              o,
              s,
              a,
              u,
              l,
              d,
              p = t && t.ownerDocument,
              h = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, L)) {
            if (11 !== h && (u = ge.exec(e))) if (i = u[1]) {
              if (9 === h) {
                if (!(s = t.getElementById(i))) return n;if (s.id === i) return n.push(s), n;
              } else if (p && (s = p.getElementById(i)) && M(t, s) && s.id === i) return n.push(s), n;
            } else {
              if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n;
            }if (b.qsa && !X[e + " "] && (!H || !H.test(e))) {
              if (1 !== h) p = t, d = e;else if ("object" !== t.nodeName.toLowerCase()) {
                for ((a = t.getAttribute("id")) ? a = a.replace(xe, be) : t.setAttribute("id", a = R), l = k(e), o = l.length; o--;) {
                  l[o] = "#" + a + " " + f(l[o]);
                }d = l.join(","), p = ve.test(e) && c(t.parentNode) || t;
              }if (d) try {
                return Q.apply(n, p.querySelectorAll(d)), n;
              } catch (e) {} finally {
                a === R && t.removeAttribute("id");
              }
            }
          }return S(e.replace(oe, "$1"), t, n, r);
        }function n() {
          function e(n, r) {
            return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r;
          }var t = [];return e;
        }function r(e) {
          return e[R] = !0, e;
        }function i(e) {
          var t = q.createElement("fieldset");try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }function o(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) {
            w.attrHandle[n[r]] = t;
          }
        }function s(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }return e ? 1 : -1;
        }function a(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e;
          };
        }function u(e) {
          return r(function (t) {
            return t = +t, r(function (n, r) {
              for (var i, o = e([], n.length, t), s = o.length; s--;) {
                n[i = o[s]] && (n[i] = !(r[i] = n[i]));
              }
            });
          });
        }function c(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }function l() {}function f(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }return r;
        }function d(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = B++;return t.first ? function (t, n, i) {
            for (; t = t[r];) {
              if (1 === t.nodeType || s) return e(t, n, i);
            }return !1;
          } : function (t, n, u) {
            var c,
                l,
                f,
                d = [W, a];if (u) {
              for (; t = t[r];) {
                if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
              }
            } else for (; t = t[r];) {
              if (1 === t.nodeType || s) if (f = t[R] || (t[R] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                if ((c = l[o]) && c[0] === W && c[1] === a) return d[2] = c[2];if (l[o] = d, d[2] = e(t, n, u)) return !0;
              }
            }return !1;
          };
        }function p(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) {
              if (!e[i](t, n, r)) return !1;
            }return !0;
          } : e[0];
        }function h(e, n, r) {
          for (var i = 0, o = n.length; i < o; i++) {
            t(e, n[i], r);
          }return r;
        }function g(e, t, n, r, i) {
          for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++) {
            (o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
          }return s;
        }function v(e, t, n, i, o, s) {
          return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, s)), r(function (r, s, a, u) {
            var c,
                l,
                f,
                d = [],
                p = [],
                v = s.length,
                m = r || h(t || "*", a.nodeType ? [a] : a, []),
                y = !e || !r && t ? m : g(m, d, e, a, u),
                x = n ? o || (r ? e : v || i) ? [] : s : y;if (n && n(y, x, a, u), i) for (c = g(x, p), i(c, [], a, u), l = c.length; l--;) {
              (f = c[l]) && (x[p[l]] = !(y[p[l]] = f));
            }if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], l = x.length; l--;) {
                    (f = x[l]) && c.push(y[l] = f);
                  }o(null, x = [], c, u);
                }for (l = x.length; l--;) {
                  (f = x[l]) && (c = o ? K(r, f) : d[l]) > -1 && (r[c] = !(s[c] = f));
                }
              }
            } else x = g(x === s ? x.splice(v, x.length) : x), o ? o(null, s, x, u) : Q.apply(s, x);
          });
        }function m(e) {
          for (var t, n, r, i = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = d(function (e) {
            return e === t;
          }, s, !0), c = d(function (e) {
            return K(t, e) > -1;
          }, s, !0), l = [function (e, n, r) {
            var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));return t = null, i;
          }]; a < i; a++) {
            if (n = w.relative[e[a].type]) l = [d(p(l), n)];else {
              if (n = w.filter[e[a].type].apply(null, e[a].matches), n[R]) {
                for (r = ++a; r < i && !w.relative[e[r].type]; r++) {}return v(a > 1 && p(l), a > 1 && f(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(oe, "$1"), n, a < r && m(e.slice(a, r)), r < i && m(e = e.slice(r)), r < i && f(e));
              }l.push(n);
            }
          }return p(l);
        }function y(e, n) {
          var i = n.length > 0,
              o = e.length > 0,
              s = function s(r, _s, a, u, c) {
            var l,
                f,
                d,
                p = 0,
                h = "0",
                v = r && [],
                m = [],
                y = D,
                x = r || o && w.find.TAG("*", c),
                b = W += null == y ? 1 : Math.random() || .1,
                T = x.length;for (c && (D = _s === q || _s || c); h !== T && null != (l = x[h]); h++) {
              if (o && l) {
                for (f = 0, _s || l.ownerDocument === q || (A(l), a = !L); d = e[f++];) {
                  if (d(l, _s || q, a)) {
                    u.push(l);break;
                  }
                }c && (W = b);
              }i && ((l = !d && l) && p--, r && v.push(l));
            }if (p += h, i && h !== p) {
              for (f = 0; d = n[f++];) {
                d(v, m, _s, a);
              }if (r) {
                if (p > 0) for (; h--;) {
                  v[h] || m[h] || (m[h] = G.call(u));
                }m = g(m);
              }Q.apply(u, m), c && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u);
            }return c && (W = b, D = y), v;
          };return i ? r(s) : s;
        }var x,
            b,
            w,
            T,
            C,
            k,
            E,
            S,
            D,
            j,
            N,
            A,
            q,
            O,
            L,
            H,
            F,
            P,
            M,
            R = "sizzle" + 1 * new Date(),
            I = e.document,
            W = 0,
            B = 0,
            $ = n(),
            _ = n(),
            X = n(),
            z = function z(e, t) {
          return e === t && (N = !0), 0;
        },
            U = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            Y = V.push,
            Q = V.push,
            J = V.slice,
            K = function K(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }return -1;
        },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(re),
            le = new RegExp("^" + te + "$"),
            fe = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + Z + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
            de = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function ye(e, t, n) {
          var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function be(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            we = function we() {
          A();
        },
            Te = d(function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        }, { dir: "parentNode", next: "legend" });try {
          Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType;
        } catch (e) {
          Q = { apply: V.length ? function (e, t) {
              Y.apply(e, J.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
            } };
        }b = t.support = {}, C = t.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
        }, A = t.setDocument = function (e) {
          var t,
              n,
              r = e ? e.ownerDocument || e : I;return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, O = q.documentElement, L = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), b.getElementsByTagName = i(function (e) {
            return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length;
          }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function (e) {
            return O.appendChild(e).id = R, !q.getElementsByName || !q.getElementsByName(R).length;
          }), b.getById ? (w.filter.ID = function (e) {
            var t = e.replace(me, ye);return function (e) {
              return e.getAttribute("id") === t;
            };
          }, w.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && L) {
              var n = t.getElementById(e);return n ? [n] : [];
            }
          }) : (w.filter.ID = function (e) {
            var t = e.replace(me, ye);return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
            };
          }, w.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && L) {
              var n,
                  r,
                  i,
                  o = t.getElementById(e);if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                }
              }return [];
            }
          }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);if ("*" === e) {
              for (; n = o[i++];) {
                1 === n.nodeType && r.push(n);
              }return r;
            }return o;
          }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e);
          }, F = [], H = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function (e) {
            O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]");
          }), i(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = q.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:");
          })), (b.matchesSelector = he.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
            b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), F.push("!=", re);
          }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), t = he.test(O.compareDocumentPosition), M = t || he.test(O.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }return !1;
          }, z = t ? function (e, t) {
            if (e === t) return N = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && M(I, e) ? -1 : t === q || t.ownerDocument === I && M(I, t) ? 1 : j ? K(j, e) - K(j, t) : 0 : 4 & n ? -1 : 1);
          } : function (e, t) {
            if (e === t) return N = !0, 0;var n,
                r = 0,
                i = e.parentNode,
                o = t.parentNode,
                a = [e],
                u = [t];if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : j ? K(j, e) - K(j, t) : 0;if (i === o) return s(e, t);for (n = e; n = n.parentNode;) {
              a.unshift(n);
            }for (n = t; n = n.parentNode;) {
              u.unshift(n);
            }for (; a[r] === u[r];) {
              r++;
            }return r ? s(a[r], u[r]) : a[r] === I ? -1 : u[r] === I ? 1 : 0;
          }, q) : q;
        }, t.matches = function (e, n) {
          return t(e, null, null, n);
        }, t.matchesSelector = function (e, n) {
          if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && L && !X[n + " "] && (!F || !F.test(n)) && (!H || !H.test(n))) try {
            var r = P.call(e, n);if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
          } catch (e) {}return t(n, q, null, [e]).length > 0;
        }, t.contains = function (e, t) {
          return (e.ownerDocument || e) !== q && A(e), M(e, t);
        }, t.attr = function (e, t) {
          (e.ownerDocument || e) !== q && A(e);var n = w.attrHandle[t.toLowerCase()],
              r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;return void 0 !== r ? r : b.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, t.escape = function (e) {
          return (e + "").replace(xe, be);
        }, t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function (e) {
          var t,
              n = [],
              r = 0,
              i = 0;if (N = !b.detectDuplicates, j = !b.sortStable && e.slice(0), e.sort(z), N) {
            for (; t = e[i++];) {
              t === e[i] && (r = n.push(i));
            }for (; r--;) {
              e.splice(n[r], 1);
            }
          }return j = null, e;
        }, T = t.getText = function (e) {
          var t,
              n = "",
              r = 0,
              i = e.nodeType;if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                n += T(e);
              }
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; t = e[r++];) {
            n += T(t);
          }return n;
        }, w = t.selectors = { cacheLength: 50, createPseudo: r, match: fe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
              return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            }, CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
            }, PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            } }, filter: { TAG: function TAG(e) {
              var t = e.replace(me, ye).toLowerCase();return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            }, CLASS: function CLASS(e) {
              var t = $[e + " "];return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            }, ATTR: function ATTR(e, n, r) {
              return function (i) {
                var o = t.attr(i, e);return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            }, CHILD: function CHILD(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode;
              } : function (t, n, u) {
                var c,
                    l,
                    f,
                    d,
                    p,
                    h,
                    g = o !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = a && t.nodeName.toLowerCase(),
                    y = !u && !a,
                    x = !1;if (v) {
                  if (o) {
                    for (; g;) {
                      for (d = t; d = d[g];) {
                        if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                      }h = g = "only" === e && !h && "nextSibling";
                    }return !0;
                  }if (h = [s ? v.firstChild : v.lastChild], s && y) {
                    for (d = v, f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], p = c[0] === W && c[1], x = p && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();) {
                      if (1 === d.nodeType && ++x && d === t) {
                        l[e] = [W, p, x];break;
                      }
                    }
                  } else if (y && (d = t, f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], p = c[0] === W && c[1], x = p), !1 === x) for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[e] = [W, x]), d !== t));) {}return (x -= i) === r || x % r == 0 && x / r >= 0;
                }
              };
            }, PSEUDO: function PSEUDO(e, n) {
              var i,
                  o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                for (var r, i = o(e, n), s = i.length; s--;) {
                  r = K(e, i[s]), e[r] = !(t[r] = i[s]);
                }
              }) : function (e) {
                return o(e, 0, i);
              }) : o;
            } }, pseudos: { not: r(function (e) {
              var t = [],
                  n = [],
                  i = E(e.replace(oe, "$1"));return i[R] ? r(function (e, t, n, r) {
                for (var o, s = i(e, null, r, []), a = e.length; a--;) {
                  (o = s[a]) && (e[a] = !(t[a] = o));
                }
              }) : function (e, r, o) {
                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
              };
            }), has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }), contains: r(function (e) {
              return e = e.replace(me, ye), function (t) {
                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
              };
            }), lang: r(function (e) {
              return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(), function (t) {
                var n;do {
                  if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
              };
            }), target: function target(t) {
              var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
            }, root: function root(e) {
              return e === O;
            }, focus: function focus(e) {
              return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            }, enabled: a(!1), disabled: a(!0), checked: function checked(e) {
              var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
            }, selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            }, empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }return !0;
            }, parent: function parent(e) {
              return !w.pseudos.empty(e);
            }, header: function header(e) {
              return pe.test(e.nodeName);
            }, input: function input(e) {
              return de.test(e.nodeName);
            }, button: function button(e) {
              var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
            }, text: function text(e) {
              var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            }, first: u(function () {
              return [0];
            }), last: u(function (e, t) {
              return [t - 1];
            }), eq: u(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }), even: u(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }return e;
            }), odd: u(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }return e;
            }), lt: u(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) {
                e.push(r);
              }return e;
            }), gt: u(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }return e;
            }) } }, w.pseudos.nth = w.pseudos.eq;for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
          w.pseudos[x] = function (e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }(x);
        }for (x in { submit: !0, reset: !0 }) {
          w.pseudos[x] = function (e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
            };
          }(x);
        }return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), k = t.tokenize = function (e, n) {
          var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l = _[e + " "];if (l) return n ? 0 : l.slice(0);for (a = e, u = [], c = w.preFilter; a;) {
            r && !(i = se.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ae.exec(a)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(oe, " ") }), a = a.slice(r.length));for (s in w.filter) {
              !(i = fe[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({ value: r, type: s, matches: i }), a = a.slice(r.length));
            }if (!r) break;
          }return n ? a.length : a ? t.error(e) : _(e, u).slice(0);
        }, E = t.compile = function (e, t) {
          var n,
              r = [],
              i = [],
              o = X[e + " "];if (!o) {
            for (t || (t = k(e)), n = t.length; n--;) {
              o = m(t[n]), o[R] ? r.push(o) : i.push(o);
            }o = X(e, y(i, r)), o.selector = e;
          }return o;
        }, S = t.select = function (e, t, n, r) {
          var i,
              o,
              s,
              a,
              u,
              l = "function" == typeof e && e,
              d = !r && k(e = l.selector || e);if (n = n || [], 1 === d.length) {
            if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && L && w.relative[o[1].type]) {
              if (!(t = (w.find.ID(s.matches[0].replace(me, ye), t) || [])[0])) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
            }for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !w.relative[a = s.type]);) {
              if ((u = w.find[a]) && (r = u(s.matches[0].replace(me, ye), ve.test(o[0].type) && c(t.parentNode) || t))) {
                if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;break;
              }
            }
          }return (l || E(e, d))(r, t, !L, n, !t || ve.test(e) && c(t.parentNode) || t), n;
        }, b.sortStable = R.split("").sort(z).join("") === R, b.detectDuplicates = !!N, A(), b.sortDetached = i(function (e) {
          return 1 & e.compareDocumentPosition(q.createElement("fieldset"));
        }), i(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), b.attributes && i(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), i(function (e) {
          return null == e.getAttribute("disabled");
        }) || o(Z, function (e, t, n) {
          var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), t;
      }(n);ye.find = be, ye.expr = be.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = be.uniqueSort, ye.text = be.getText, ye.isXMLDoc = be.isXML, ye.contains = be.contains, ye.escapeSelector = be.escape;var we = function we(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
          if (1 === e.nodeType) {
            if (i && ye(e).is(n)) break;r.push(e);
          }
        }return r;
      },
          Te = function Te(e, t) {
        for (var n = []; e; e = e.nextSibling) {
          1 === e.nodeType && e !== t && n.push(e);
        }return n;
      },
          Ce = ye.expr.match.needsContext,
          ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
          Ee = /^.[^:#\[\.,]*$/;ye.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ye.find.matchesSelector(r, e) ? [r] : [] : ye.find.matches(e, ye.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, ye.fn.extend({ find: function find(e) {
          var t,
              n,
              r = this.length,
              i = this;if ("string" != typeof e) return this.pushStack(ye(e).filter(function () {
            for (t = 0; t < r; t++) {
              if (ye.contains(i[t], this)) return !0;
            }
          }));for (n = this.pushStack([]), t = 0; t < r; t++) {
            ye.find(e, i[t], n);
          }return r > 1 ? ye.uniqueSort(n) : n;
        }, filter: function filter(e) {
          return this.pushStack(c(this, e || [], !1));
        }, not: function not(e) {
          return this.pushStack(c(this, e || [], !0));
        }, is: function is(e) {
          return !!c(this, "string" == typeof e && Ce.test(e) ? ye(e) : e || [], !1).length;
        } });var Se,
          De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ye.fn.init = function (e, t, n) {
        var r, i;if (!e) return this;if (n = n || Se, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
            if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), ke.test(r[1]) && ye.isPlainObject(t)) for (r in t) {
              ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            }return this;
          }return i = se.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
        }return e.nodeType ? (this[0] = e, this.length = 1, this) : ye.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ye) : ye.makeArray(e, this);
      }).prototype = ye.fn, Se = ye(se);var je = /^(?:parents|prev(?:Until|All))/,
          Ne = { children: !0, contents: !0, next: !0, prev: !0 };ye.fn.extend({ has: function has(e) {
          var t = ye(e, this),
              n = t.length;return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (ye.contains(this, t[e])) return !0;
            }
          });
        }, closest: function closest(e, t) {
          var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" != typeof e && ye(e);if (!Ce.test(e)) for (; r < i; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                o.push(n);break;
              }
            }
          }return this.pushStack(o.length > 1 ? ye.uniqueSort(o) : o);
        }, index: function index(e) {
          return e ? "string" == typeof e ? fe.call(ye(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
          return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))));
        }, addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } }), ye.each({ parent: function parent(e) {
          var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
          return we(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
          return we(e, "parentNode", n);
        }, next: function next(e) {
          return l(e, "nextSibling");
        }, prev: function prev(e) {
          return l(e, "previousSibling");
        }, nextAll: function nextAll(e) {
          return we(e, "nextSibling");
        }, prevAll: function prevAll(e) {
          return we(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
          return we(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
          return we(e, "previousSibling", n);
        }, siblings: function siblings(e) {
          return Te((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
          return Te(e.firstChild);
        }, contents: function contents(e) {
          return u(e, "iframe") ? e.contentDocument : (u(e, "template") && (e = e.content || e), ye.merge([], e.childNodes));
        } }, function (e, t) {
        ye.fn[e] = function (n, r) {
          var i = ye.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ye.filter(r, i)), this.length > 1 && (Ne[e] || ye.uniqueSort(i), je.test(e) && i.reverse()), this.pushStack(i);
        };
      });var Ae = /[^\x20\t\r\n\f]+/g;ye.Callbacks = function (e) {
        e = "string" == typeof e ? f(e) : ye.extend({}, e);var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            u = function u() {
          for (i = i || e.once, r = t = !0; s.length; a = -1) {
            for (n = s.shift(); ++a < o.length;) {
              !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
            }
          }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            c = { add: function add() {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
              ye.each(n, function (n, r) {
                ye.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== ye.type(r) && t(r);
              });
            }(arguments), n && !t && u()), this;
          }, remove: function remove() {
            return ye.each(arguments, function (e, t) {
              for (var n; (n = ye.inArray(t, o, n)) > -1;) {
                o.splice(n, 1), n <= a && a--;
              }
            }), this;
          }, has: function has(e) {
            return e ? ye.inArray(e, o) > -1 : o.length > 0;
          }, empty: function empty() {
            return o && (o = []), this;
          }, disable: function disable() {
            return i = s = [], o = n = "", this;
          }, disabled: function disabled() {
            return !o;
          }, lock: function lock() {
            return i = s = [], n || t || (o = n = ""), this;
          }, locked: function locked() {
            return !!i;
          }, fireWith: function fireWith(e, n) {
            return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this;
          }, fire: function fire() {
            return c.fireWith(this, arguments), this;
          }, fired: function fired() {
            return !!r;
          } };return c;
      }, ye.extend({ Deferred: function Deferred(e) {
          var t = [["notify", "progress", ye.Callbacks("memory"), ye.Callbacks("memory"), 2], ["resolve", "done", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ye.Callbacks("once memory"), ye.Callbacks("once memory"), 1, "rejected"]],
              r = "pending",
              i = { state: function state() {
              return r;
            }, always: function always() {
              return o.done(arguments).fail(arguments), this;
            }, catch: function _catch(e) {
              return i.then(null, e);
            }, pipe: function pipe() {
              var e = arguments;return ye.Deferred(function (n) {
                ye.each(t, function (t, r) {
                  var i = ye.isFunction(e[r[4]]) && e[r[4]];o[r[1]](function () {
                    var e = i && i.apply(this, arguments);e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            }, then: function then(e, r, i) {
              function o(e, t, r, i) {
                return function () {
                  var a = this,
                      u = arguments,
                      c = function c() {
                    var n, c;if (!(e < s)) {
                      if ((n = r.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");c = n && ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n) && n.then, ye.isFunction(c) ? i ? c.call(n, o(s, t, d, i), o(s, t, p, i)) : (s++, c.call(n, o(s, t, d, i), o(s, t, p, i), o(s, t, d, t.notifyWith))) : (r !== d && (a = void 0, u = [n]), (i || t.resolveWith)(a, u));
                    }
                  },
                      l = i ? c : function () {
                    try {
                      c();
                    } catch (n) {
                      ye.Deferred.exceptionHook && ye.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= s && (r !== p && (a = void 0, u = [n]), t.rejectWith(a, u));
                    }
                  };e ? l() : (ye.Deferred.getStackHook && (l.stackTrace = ye.Deferred.getStackHook()), n.setTimeout(l));
                };
              }var s = 0;return ye.Deferred(function (n) {
                t[0][3].add(o(0, n, ye.isFunction(i) ? i : d, n.notifyWith)), t[1][3].add(o(0, n, ye.isFunction(e) ? e : d)), t[2][3].add(o(0, n, ye.isFunction(r) ? r : p));
              }).promise();
            }, promise: function promise(e) {
              return null != e ? ye.extend(e, i) : i;
            } },
              o = {};return ye.each(t, function (e, n) {
            var s = n[2],
                a = n[5];i[n[1]] = s.add, a && s.add(function () {
              r = a;
            }, t[3 - e][2].disable, t[0][2].lock), s.add(n[3].fire), o[n[0]] = function () {
              return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[n[0] + "With"] = s.fireWith;
          }), i.promise(o), e && e.call(o, o), o;
        }, when: function when(e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = ue.call(arguments),
              o = ye.Deferred(),
              s = function s(e) {
            return function (n) {
              r[e] = this, i[e] = arguments.length > 1 ? ue.call(arguments) : n, --t || o.resolveWith(r, i);
            };
          };if (t <= 1 && (h(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ye.isFunction(i[n] && i[n].then))) return o.then();for (; n--;) {
            h(i[n], s(n), o.reject);
          }return o.promise();
        } });var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ye.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && qe.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }, ye.readyException = function (e) {
        n.setTimeout(function () {
          throw e;
        });
      };var Oe = ye.Deferred();ye.fn.ready = function (e) {
        return Oe.then(e).catch(function (e) {
          ye.readyException(e);
        }), this;
      }, ye.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
          (!0 === e ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, !0 !== e && --ye.readyWait > 0 || Oe.resolveWith(se, [ye]));
        } }), ye.ready.then = Oe.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? n.setTimeout(ye.ready) : (se.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));var Le = function Le(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            c = null == n;if ("object" === ye.type(n)) {
          i = !0;for (a in n) {
            Le(e, t, a, n[a], !0, o, s);
          }
        } else if (void 0 !== r && (i = !0, ye.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function t(e, _t, n) {
          return c.call(ye(e), n);
        })), t)) for (; a < u; a++) {
          t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        }return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
      },
          He = function He(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };v.uid = 1, v.prototype = { cache: function cache(e) {
          var t = e[this.expando];return t || (t = {}, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        }, set: function set(e, t, n) {
          var r,
              i = this.cache(e);if ("string" == typeof t) i[ye.camelCase(t)] = n;else for (r in t) {
            i[ye.camelCase(r)] = t[r];
          }return i;
        }, get: function get(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ye.camelCase(t)];
        }, access: function access(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
          var n,
              r = e[this.expando];if (void 0 !== r) {
            if (void 0 !== t) {
              Array.isArray(t) ? t = t.map(ye.camelCase) : (t = ye.camelCase(t), t = t in r ? [t] : t.match(Ae) || []), n = t.length;for (; n--;) {
                delete r[t[n]];
              }
            }(void 0 === t || ye.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        }, hasData: function hasData(e) {
          var t = e[this.expando];return void 0 !== t && !ye.isEmptyObject(t);
        } };var Fe = new v(),
          Pe = new v(),
          Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Re = /[A-Z]/g;ye.extend({ hasData: function hasData(e) {
          return Pe.hasData(e) || Fe.hasData(e);
        }, data: function data(e, t, n) {
          return Pe.access(e, t, n);
        }, removeData: function removeData(e, t) {
          Pe.remove(e, t);
        }, _data: function _data(e, t, n) {
          return Fe.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
          Fe.remove(e, t);
        } }), ye.fn.extend({ data: function data(e, t) {
          var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;if (void 0 === e) {
            if (this.length && (i = Pe.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
              for (n = s.length; n--;) {
                s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ye.camelCase(r.slice(5)), y(o, r, i[r])));
              }Fe.set(o, "hasDataAttrs", !0);
            }return i;
          }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
            Pe.set(this, e);
          }) : Le(this, function (t) {
            var n;if (o && void 0 === t) {
              if (void 0 !== (n = Pe.get(o, e))) return n;if (void 0 !== (n = y(o, e))) return n;
            } else this.each(function () {
              Pe.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, !0);
        }, removeData: function removeData(e) {
          return this.each(function () {
            Pe.remove(this, e);
          });
        } }), ye.extend({ queue: function queue(e, t, n) {
          var r;if (e) return t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || Array.isArray(n) ? r = Fe.access(e, t, ye.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
          t = t || "fx";var n = ye.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = ye._queueHooks(e, t),
              s = function s() {
            ye.dequeue(e, t);
          };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";return Fe.get(e, n) || Fe.access(e, n, { empty: ye.Callbacks("once memory").add(function () {
              Fe.remove(e, [t + "queue", n]);
            }) });
        } }), ye.fn.extend({ queue: function queue(e, t) {
          var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = ye.queue(this, e, t);ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e);
          });
        }, dequeue: function dequeue(e) {
          return this.each(function () {
            ye.dequeue(this, e);
          });
        }, clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
          var n,
              r = 1,
              i = ye.Deferred(),
              o = this,
              s = this.length,
              a = function a() {
            --r || i.resolveWith(o, [o]);
          };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
            (n = Fe.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
          }return a(), i.promise(t);
        } });var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          We = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
          Be = ["Top", "Right", "Bottom", "Left"],
          $e = function $e(e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && ye.contains(e.ownerDocument, e) && "none" === ye.css(e, "display");
      },
          _e = function _e(e, t, n, r) {
        var i,
            o,
            s = {};for (o in t) {
          s[o] = e.style[o], e.style[o] = t[o];
        }i = n.apply(e, r || []);for (o in t) {
          e.style[o] = s[o];
        }return i;
      },
          Xe = {};ye.fn.extend({ show: function show() {
          return w(this, !0);
        }, hide: function hide() {
          return w(this);
        }, toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            $e(this) ? ye(this).show() : ye(this).hide();
          });
        } });var ze = /^(?:checkbox|radio)$/i,
          Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          Ve = /^$|\/(?:java|ecma)script/i,
          Ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;var Ye = /<|&#?\w+;/;!function () {
        var e = se.createDocumentFragment(),
            t = e.appendChild(se.createElement("div")),
            n = se.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), me.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", me.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
      }();var Qe = se.documentElement,
          Je = /^key/,
          Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ze = /^([^.]*)(?:\.(.+)|)/;ye.event = { global: {}, add: function add(e, t, n, r, i) {
          var o,
              s,
              a,
              u,
              c,
              l,
              f,
              d,
              p,
              h,
              g,
              v = Fe.get(e);if (v) for (n.handler && (o = n, n = o.handler, i = o.selector), i && ye.find.matchesSelector(Qe, i), n.guid || (n.guid = ye.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
            return void 0 !== ye && ye.event.triggered !== t.type ? ye.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || "").match(Ae) || [""], c = t.length; c--;) {
            a = Ze.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = ye.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = ye.event.special[p] || {}, l = ye.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ye.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), ye.event.global[p] = !0);
          }
        }, remove: function remove(e, t, n, r, i) {
          var o,
              s,
              a,
              u,
              c,
              l,
              f,
              d,
              p,
              h,
              g,
              v = Fe.hasData(e) && Fe.get(e);if (v && (u = v.events)) {
            for (t = (t || "").match(Ae) || [""], c = t.length; c--;) {
              if (a = Ze.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                for (f = ye.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) {
                  l = d[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                }s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ye.removeEvent(e, p, v.handle), delete u[p]);
              } else for (p in u) {
                ye.event.remove(e, p + t[c], n, r, !0);
              }
            }ye.isEmptyObject(u) && Fe.remove(e, "handle events");
          }
        }, dispatch: function dispatch(e) {
          var t,
              n,
              r,
              i,
              o,
              s,
              a = ye.event.fix(e),
              u = new Array(arguments.length),
              c = (Fe.get(this, "events") || {})[a.type] || [],
              l = ye.event.special[a.type] || {};for (u[0] = a, t = 1; t < arguments.length; t++) {
            u[t] = arguments[t];
          }if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
            for (s = ye.event.handlers.call(this, a, c), t = 0; (i = s[t++]) && !a.isPropagationStopped();) {
              for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) {
                a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((ye.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
              }
            }return l.postDispatch && l.postDispatch.call(this, a), a.result;
          }
        }, handlers: function handlers(e, t) {
          var n,
              r,
              i,
              o,
              s,
              a = [],
              u = t.delegateCount,
              c = e.target;if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++) {
                r = t[n], i = r.selector + " ", void 0 === s[i] && (s[i] = r.needsContext ? ye(i, this).index(c) > -1 : ye.find(i, this, null, [c]).length), s[i] && o.push(r);
              }o.length && a.push({ elem: c, handlers: o });
            }
          }return c = this, u < t.length && a.push({ elem: c, handlers: t.slice(u) }), a;
        }, addProp: function addProp(e, t) {
          Object.defineProperty(ye.Event.prototype, e, { enumerable: !0, configurable: !0, get: ye.isFunction(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[e];
            }, set: function set(t) {
              Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
            } });
        }, fix: function fix(e) {
          return e[ye.expando] ? e : new ye.Event(e);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
              if (this !== D() && this.focus) return this.focus(), !1;
            }, delegateType: "focusin" }, blur: { trigger: function trigger() {
              if (this === D() && this.blur) return this.blur(), !1;
            }, delegateType: "focusout" }, click: { trigger: function trigger() {
              if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), !1;
            }, _default: function _default(e) {
              return u(e.target, "a");
            } }, beforeunload: { postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            } } } }, ye.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, ye.Event = function (e, t) {
        if (!(this instanceof ye.Event)) return new ye.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? E : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), this[ye.expando] = !0;
      }, ye.Event.prototype = { constructor: ye.Event, isDefaultPrevented: S, isPropagationStopped: S, isImmediatePropagationStopped: S, isSimulated: !1, preventDefault: function preventDefault() {
          var e = this.originalEvent;this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault();
        }, stopPropagation: function stopPropagation() {
          var e = this.originalEvent;this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        } }, ye.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
          var t = e.button;return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        } }, ye.event.addProp), ye.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
        ye.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
            var n,
                r = this,
                i = e.relatedTarget,
                o = e.handleObj;return i && (i === r || ye.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
          } };
      }), ye.fn.extend({ on: function on(e, t, n, r) {
          return j(this, e, t, n, r);
        }, one: function one(e, t, n, r) {
          return j(this, e, t, n, r, 1);
        }, off: function off(e, t, n) {
          var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
            for (i in e) {
              this.off(i, t, e[i]);
            }return this;
          }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function () {
            ye.event.remove(this, e, n, t);
          });
        } });var et = /<script|<style|<link/i,
          tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          nt = /^true\/(.*)/,
          rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ye.extend({ htmlPrefilter: function htmlPrefilter(e) {
          return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>");
        }, clone: function clone(e, t, n) {
          var r,
              i,
              o,
              s,
              a = e.cloneNode(!0),
              u = ye.contains(e.ownerDocument, e);if (!(me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e))) for (s = T(a), o = T(e), r = 0, i = o.length; r < i; r++) {
            L(o[r], s[r]);
          }if (t) if (n) for (o = o || T(e), s = s || T(a), r = 0, i = o.length; r < i; r++) {
            O(o[r], s[r]);
          } else O(e, a);return s = T(a, "script"), s.length > 0 && C(s, !u && T(e, "script")), a;
        }, cleanData: function cleanData(e) {
          for (var t, n, r, i = ye.event.special, o = 0; void 0 !== (n = e[o]); o++) {
            if (He(n)) {
              if (t = n[Fe.expando]) {
                if (t.events) for (r in t.events) {
                  i[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, t.handle);
                }n[Fe.expando] = void 0;
              }n[Pe.expando] && (n[Pe.expando] = void 0);
            }
          }
        } }), ye.fn.extend({ detach: function detach(e) {
          return F(this, e, !0);
        }, remove: function remove(e) {
          return F(this, e);
        }, text: function text(e) {
          return Le(this, function (e) {
            return void 0 === e ? ye.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        }, append: function append() {
          return H(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              N(this, e).appendChild(e);
            }
          });
        }, prepend: function prepend() {
          return H(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = N(this, e);t.insertBefore(e, t.firstChild);
            }
          });
        }, before: function before() {
          return H(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        }, after: function after() {
          return H(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        }, empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (ye.cleanData(T(e, !1)), e.textContent = "");
          }return this;
        }, clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return ye.clone(this, e, t);
          });
        }, html: function html(e) {
          return Le(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !et.test(e) && !Ge[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = ye.htmlPrefilter(e);try {
                for (; n < r; n++) {
                  t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(T(t, !1)), t.innerHTML = e);
                }t = 0;
              } catch (e) {}
            }t && this.empty().append(e);
          }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
          var e = [];return H(this, arguments, function (t) {
            var n = this.parentNode;ye.inArray(this, e) < 0 && (ye.cleanData(T(this)), n && n.replaceChild(t, this));
          }, e);
        } }), ye.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
        ye.fn[e] = function (e) {
          for (var n, r = [], i = ye(e), o = i.length - 1, s = 0; s <= o; s++) {
            n = s === o ? this : this.clone(!0), ye(i[s])[t](n), le.apply(r, n.get());
          }return this.pushStack(r);
        };
      });var it = /^margin/,
          ot = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
          st = function st(e) {
        var t = e.ownerDocument.defaultView;return t && t.opener || (t = n), t.getComputedStyle(e);
      };!function () {
        function e() {
          if (a) {
            a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);var e = n.getComputedStyle(a);t = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, a.style.marginRight = "50%", i = "4px" === e.marginRight, Qe.removeChild(s), a = null;
          }
        }var t,
            r,
            i,
            o,
            s = se.createElement("div"),
            a = se.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ye.extend(me, { pixelPosition: function pixelPosition() {
            return e(), t;
          }, boxSizingReliable: function boxSizingReliable() {
            return e(), r;
          }, pixelMarginRight: function pixelMarginRight() {
            return e(), i;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return e(), o;
          } }));
      }();var at = /^(none|table(?!-c[ea]).+)/,
          ut = /^--/,
          ct = { position: "absolute", visibility: "hidden", display: "block" },
          lt = { letterSpacing: "0", fontWeight: "400" },
          ft = ["Webkit", "Moz", "ms"],
          dt = se.createElement("div").style;ye.extend({ cssHooks: { opacity: { get: function get(e, t) {
              if (t) {
                var n = P(e, "opacity");return "" === n ? "1" : n;
              }
            } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
                o,
                s,
                a = ye.camelCase(t),
                u = ut.test(t),
                c = e.style;if (u || (t = I(a)), s = ye.cssHooks[t] || ye.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];o = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === o && (i = We.exec(n)) && i[1] && (n = x(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ye.cssNumber[a] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
          }
        }, css: function css(e, t, n, r) {
          var i,
              o,
              s,
              a = ye.camelCase(t);return ut.test(t) || (t = I(a)), s = ye.cssHooks[t] || ye.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = P(e, t, r)), "normal" === i && t in lt && (i = lt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        } }), ye.each(["height", "width"], function (e, t) {
        ye.cssHooks[t] = { get: function get(e, n, r) {
            if (n) return !at.test(ye.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, r) : _e(e, ct, function () {
              return $(e, t, r);
            });
          }, set: function set(e, n, r) {
            var i,
                o = r && st(e),
                s = r && B(e, t, r, "border-box" === ye.css(e, "boxSizing", !1, o), o);return s && (i = We.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ye.css(e, t)), W(e, n, s);
          } };
      }), ye.cssHooks.marginLeft = M(me.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, { marginLeft: 0 }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), ye.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        ye.cssHooks[e + t] = { expand: function expand(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
              i[e + Be[r] + t] = o[r] || o[r - 2] || o[0];
            }return i;
          } }, it.test(e) || (ye.cssHooks[e + t].set = W);
      }), ye.fn.extend({ css: function css(e, t) {
          return Le(this, function (e, t, n) {
            var r,
                i,
                o = {},
                s = 0;if (Array.isArray(t)) {
              for (r = st(e), i = t.length; s < i; s++) {
                o[t[s]] = ye.css(e, t[s], !1, r);
              }return o;
            }return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t);
          }, e, t, arguments.length > 1);
        } }), ye.Tween = _, _.prototype = { constructor: _, init: function init(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ye.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
          var e = _.propHooks[this.prop];return e && e.get ? e.get(this) : _.propHooks._default.get(this);
        }, run: function run(e) {
          var t,
              n = _.propHooks[this.prop];return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this;
        } }, _.prototype.init.prototype = _.prototype, _.propHooks = { _default: { get: function get(e) {
            var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
          }, set: function set(e) {
            ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit);
          } } }, _.propHooks.scrollTop = _.propHooks.scrollLeft = { set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, ye.easing = { linear: function linear(e) {
          return e;
        }, swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing" }, ye.fx = _.prototype.init, ye.fx.step = {};var pt,
          ht,
          gt = /^(?:toggle|show|hide)$/,
          vt = /queueHooks$/;ye.Animation = ye.extend(Q, { tweeners: { "*": [function (e, t) {
            var n = this.createTween(e, t);return x(n.elem, e, We.exec(t), n), n;
          }] }, tweener: function tweener(e, t) {
          ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);for (var n, r = 0, i = e.length; r < i; r++) {
            n = e[r], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t);
          }
        }, prefilters: [G], prefilter: function prefilter(e, t) {
          t ? Q.prefilters.unshift(e) : Q.prefilters.push(e);
        } }), ye.speed = function (e, t, n) {
        var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? ye.extend({}, e) : { complete: n || !n && t || ye.isFunction(e) && e, duration: e, easing: n && t || t && !ye.isFunction(t) && t };return ye.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ye.fx.speeds ? r.duration = ye.fx.speeds[r.duration] : r.duration = ye.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue);
        }, r;
      }, ye.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
          return this.filter($e).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(e, t, n, r) {
          var i = ye.isEmptyObject(e),
              o = ye.speed(t, n, r),
              s = function s() {
            var t = Q(this, ye.extend({}, e), o);(i || Fe.get(this, "finish")) && t.stop(!0);
          };return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        }, stop: function stop(e, t, n) {
          var r = function r(e) {
            var t = e.stop;delete e.stop, t(n);
          };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0,
                i = null != e && e + "queueHooks",
                o = ye.timers,
                s = Fe.get(this);if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
              s[i] && s[i].stop && vt.test(i) && r(s[i]);
            }for (i = o.length; i--;) {
              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            }!t && n || ye.dequeue(this, e);
          });
        }, finish: function finish(e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t,
                n = Fe.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = ye.timers,
                s = r ? r.length : 0;for (n.finish = !0, ye.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            }for (t = 0; t < s; t++) {
              r[t] && r[t].finish && r[t].finish.call(this);
            }delete n.finish;
          });
        } }), ye.each(["toggle", "show", "hide"], function (e, t) {
        var n = ye.fn[t];ye.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i);
        };
      }), ye.each({ slideDown: U("show"), slideUp: U("hide"), slideToggle: U("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
        ye.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }), ye.timers = [], ye.fx.tick = function () {
        var e,
            t = 0,
            n = ye.timers;for (pt = ye.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || ye.fx.stop(), pt = void 0;
      }, ye.fx.timer = function (e) {
        ye.timers.push(e), ye.fx.start();
      }, ye.fx.interval = 13, ye.fx.start = function () {
        ht || (ht = !0, X());
      }, ye.fx.stop = function () {
        ht = null;
      }, ye.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ye.fn.delay = function (e, t) {
        return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
          var i = n.setTimeout(t, e);r.stop = function () {
            n.clearTimeout(i);
          };
        });
      }, function () {
        var e = se.createElement("input"),
            t = se.createElement("select"),
            n = t.appendChild(se.createElement("option"));e.type = "checkbox", me.checkOn = "" !== e.value, me.optSelected = n.selected, e = se.createElement("input"), e.value = "t", e.type = "radio", me.radioValue = "t" === e.value;
      }();var mt,
          yt = ye.expr.attrHandle;ye.fn.extend({ attr: function attr(e, t) {
          return Le(this, ye.attr, e, t, arguments.length > 1);
        }, removeAttr: function removeAttr(e) {
          return this.each(function () {
            ye.removeAttr(this, e);
          });
        } }), ye.extend({ attr: function attr(e, t, n) {
          var r,
              i,
              o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ye.prop(e, t, n) : (1 === o && ye.isXMLDoc(e) || (i = ye.attrHooks[t.toLowerCase()] || (ye.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ye.find.attr(e, t), null == r ? void 0 : r));
        }, attrHooks: { type: { set: function set(e, t) {
              if (!me.radioValue && "radio" === t && u(e, "input")) {
                var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
              }
            } } }, removeAttr: function removeAttr(e, t) {
          var n,
              r = 0,
              i = t && t.match(Ae);if (i && 1 === e.nodeType) for (; n = i[r++];) {
            e.removeAttribute(n);
          }
        } }), mt = { set: function set(e, t, n) {
          return !1 === t ? ye.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || ye.find.attr;yt[t] = function (e, t, r) {
          var i,
              o,
              s = t.toLowerCase();return r || (o = yt[s], yt[s] = i, i = null != n(e, t, r) ? s : null, yt[s] = o), i;
        };
      });var xt = /^(?:input|select|textarea|button)$/i,
          bt = /^(?:a|area)$/i;ye.fn.extend({ prop: function prop(e, t) {
          return Le(this, ye.prop, e, t, arguments.length > 1);
        }, removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[ye.propFix[e] || e];
          });
        } }), ye.extend({ prop: function prop(e, t, n) {
          var r,
              i,
              o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, i = ye.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function get(e) {
              var t = ye.find.attr(e, "tabindex");return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
            } } }, propFix: { for: "htmlFor", class: "className" } }), me.optSelected || (ye.propHooks.selected = { get: function get(e) {
          var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function set(e) {
          var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        } }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ye.propFix[this.toLowerCase()] = this;
      }), ye.fn.extend({ addClass: function addClass(e) {
          var t,
              n,
              r,
              i,
              o,
              s,
              a,
              u = 0;if (ye.isFunction(e)) return this.each(function (t) {
            ye(this).addClass(e.call(this, t, K(this)));
          });if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[u++];) {
            if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
              for (s = 0; o = t[s++];) {
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              }a = J(r), i !== a && n.setAttribute("class", a);
            }
          }return this;
        }, removeClass: function removeClass(e) {
          var t,
              n,
              r,
              i,
              o,
              s,
              a,
              u = 0;if (ye.isFunction(e)) return this.each(function (t) {
            ye(this).removeClass(e.call(this, t, K(this)));
          });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[u++];) {
            if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
              for (s = 0; o = t[s++];) {
                for (; r.indexOf(" " + o + " ") > -1;) {
                  r = r.replace(" " + o + " ", " ");
                }
              }a = J(r), i !== a && n.setAttribute("class", a);
            }
          }return this;
        }, toggleClass: function toggleClass(e, t) {
          var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function (n) {
            ye(this).toggleClass(e.call(this, n, K(this), t), t);
          }) : this.each(function () {
            var t, r, i, o;if ("string" === n) for (r = 0, i = ye(this), o = e.match(Ae) || []; t = o[r++];) {
              i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            } else void 0 !== e && "boolean" !== n || (t = K(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""));
          });
        }, hasClass: function hasClass(e) {
          var t,
              n,
              r = 0;for (t = " " + e + " "; n = this[r++];) {
            if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1) return !0;
          }return !1;
        } });ye.fn.extend({ val: function val(e) {
          var t,
              n,
              r,
              i = this[0];{
            if (arguments.length) return r = ye.isFunction(e), this.each(function (n) {
              var i;1 === this.nodeType && (i = r ? e.call(this, n, ye(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = ye.map(i, function (e) {
                return null == e ? "" : e + "";
              })), (t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
            });if (i) return (t = ye.valHooks[i.type] || ye.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n);
          }
        } }), ye.extend({ valHooks: { option: { get: function get(e) {
              var t = ye.find.attr(e, "value");return null != t ? t : J(ye.text(e));
            } }, select: { get: function get(e) {
              var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  c = s ? o + 1 : i.length;for (r = o < 0 ? c : s ? o : 0; r < c; r++) {
                if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                  if (t = ye(n).val(), s) return t;a.push(t);
                }
              }return a;
            }, set: function set(e, t) {
              for (var n, r, i = e.options, o = ye.makeArray(t), s = i.length; s--;) {
                r = i[s], (r.selected = ye.inArray(ye.valHooks.option.get(r), o) > -1) && (n = !0);
              }return n || (e.selectedIndex = -1), o;
            } } } }), ye.each(["radio", "checkbox"], function () {
        ye.valHooks[this] = { set: function set(e, t) {
            if (Array.isArray(t)) return e.checked = ye.inArray(ye(e).val(), t) > -1;
          } }, me.checkOn || (ye.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      });var wt = /^(?:focusinfocus|focusoutblur)$/;ye.extend(ye.event, { trigger: function trigger(e, t, r, i) {
          var o,
              s,
              a,
              u,
              c,
              l,
              f,
              d = [r || se],
              p = he.call(e, "type") ? e.type : e,
              h = he.call(e, "namespace") ? e.namespace.split(".") : [];if (s = a = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(p + ye.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[ye.expando] ? e : new ye.Event(p, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ye.makeArray(t, [e]), f = ye.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
            if (!i && !f.noBubble && !ye.isWindow(r)) {
              for (u = f.delegateType || p, wt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) {
                d.push(s), a = s;
              }a === (r.ownerDocument || se) && d.push(a.defaultView || a.parentWindow || n);
            }for (o = 0; (s = d[o++]) && !e.isPropagationStopped();) {
              e.type = o > 1 ? u : f.bindType || p, l = (Fe.get(s, "events") || {})[e.type] && Fe.get(s, "handle"), l && l.apply(s, t), (l = c && s[c]) && l.apply && He(s) && (e.result = l.apply(s, t), !1 === e.result && e.preventDefault());
            }return e.type = p, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), t) || !He(r) || c && ye.isFunction(r[p]) && !ye.isWindow(r) && (a = r[c], a && (r[c] = null), ye.event.triggered = p, r[p](), ye.event.triggered = void 0, a && (r[c] = a)), e.result;
          }
        }, simulate: function simulate(e, t, n) {
          var r = ye.extend(new ye.Event(), n, { type: e, isSimulated: !0 });ye.event.trigger(r, null, t);
        } }), ye.fn.extend({ trigger: function trigger(e, t) {
          return this.each(function () {
            ye.event.trigger(e, t, this);
          });
        }, triggerHandler: function triggerHandler(e, t) {
          var n = this[0];if (n) return ye.event.trigger(e, t, n, !0);
        } }), ye.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        ye.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }), ye.fn.extend({ hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        } }), me.focusin = "onfocusin" in n, me.focusin || ye.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function n(e) {
          ye.event.simulate(t, e.target, ye.event.fix(e));
        };ye.event.special[t] = { setup: function setup() {
            var r = this.ownerDocument || this,
                i = Fe.access(r, t);i || r.addEventListener(e, n, !0), Fe.access(r, t, (i || 0) + 1);
          }, teardown: function teardown() {
            var r = this.ownerDocument || this,
                i = Fe.access(r, t) - 1;i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0), Fe.remove(r, t));
          } };
      });var Tt = n.location,
          Ct = ye.now(),
          kt = /\?/;ye.parseXML = function (e) {
        var t;if (!e || "string" != typeof e) return null;try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }return t && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t;
      };var Et = /\[\]$/,
          St = /^(?:submit|button|image|reset|file)$/i,
          Dt = /^(?:input|select|textarea|keygen)/i;ye.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
          var n = ye.isFunction(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };if (Array.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function () {
          i(this.name, this.value);
        });else for (n in e) {
          Z(n, e[n], t, i);
        }return r.join("&");
      }, ye.fn.extend({ serialize: function serialize() {
          return ye.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
          return this.map(function () {
            var e = ye.prop(this, "elements");return e ? ye.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;return this.name && !ye(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e) && (this.checked || !ze.test(e));
          }).map(function (e, t) {
            var n = ye(this).val();return null == n ? null : Array.isArray(n) ? ye.map(n, function (e) {
              return { name: t.name, value: e.replace(/\r?\n/g, "\r\n") };
            }) : { name: t.name, value: n.replace(/\r?\n/g, "\r\n") };
          }).get();
        } });var jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          At = /^(?:GET|HEAD)$/,
          qt = {},
          Ot = {},
          Lt = "*/".concat("*"),
          Ht = se.createElement("a");Ht.href = Tt.href, ye.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: Nt.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Lt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ye.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
          return t ? ne(ne(e, ye.ajaxSettings), t) : ne(ye.ajaxSettings, e);
        }, ajaxPrefilter: ee(qt), ajaxTransport: ee(Ot), ajax: function ajax(e, t) {
          function r(e, t, r, a) {
            var c,
                d,
                p,
                b,
                w,
                T = t;l || (l = !0, u && n.clearTimeout(u), i = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (b = re(h, C, r)), b = ie(h, b, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ye.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (ye.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, p = b.error, c = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", c ? m.resolveWith(g, [d, T, C]) : m.rejectWith(g, [C, T, p]), C.statusCode(x), x = void 0, f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : p]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --ye.active || ye.event.trigger("ajaxStop")));
          }"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};var i,
              o,
              s,
              a,
              u,
              c,
              l,
              f,
              d,
              p,
              h = ye.ajaxSetup({}, t),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? ye(g) : ye.event,
              m = ye.Deferred(),
              y = ye.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              w = {},
              T = "canceled",
              C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
              var t;if (l) {
                if (!a) for (a = {}; t = jt.exec(s);) {
                  a[t[1].toLowerCase()] = t[2];
                }t = a[e.toLowerCase()];
              }return null == t ? null : t;
            }, getAllResponseHeaders: function getAllResponseHeaders() {
              return l ? s : null;
            }, setRequestHeader: function setRequestHeader(e, t) {
              return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
            }, overrideMimeType: function overrideMimeType(e) {
              return null == l && (h.mimeType = e), this;
            }, statusCode: function statusCode(e) {
              var t;if (e) if (l) C.always(e[C.status]);else for (t in e) {
                x[t] = [x[t], e[t]];
              }return this;
            }, abort: function abort(e) {
              var t = e || T;return i && i.abort(t), r(0, t), this;
            } };if (m.promise(C), h.url = ((e || h.url || Tt.href) + "").replace(/^\/\//, Tt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain) {
            c = se.createElement("a");try {
              c.href = h.url, c.href = c.href, h.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host;
            } catch (e) {
              h.crossDomain = !0;
            }
          }if (h.data && h.processData && "string" != typeof h.data && (h.data = ye.param(h.data, h.traditional)), te(qt, h, t, C), l) return C;f = ye.event && h.global, f && 0 == ye.active++ && ye.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !At.test(h.type), o = h.url.replace(/#.*$/, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(/%20/g, "+")) : (p = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(/([?&])_=[^&]*/, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + Ct++ + p), h.url = o + p), h.ifModified && (ye.lastModified[o] && C.setRequestHeader("If-Modified-Since", ye.lastModified[o]), ye.etag[o] && C.setRequestHeader("If-None-Match", ye.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]);for (d in h.headers) {
            C.setRequestHeader(d, h.headers[d]);
          }if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || l)) return C.abort();if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = te(Ot, h, t, C)) {
            if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), l) return C;h.async && h.timeout > 0 && (u = n.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));try {
              l = !1, i.send(b, r);
            } catch (e) {
              if (l) throw e;r(-1, e);
            }
          } else r(-1, "No Transport");return C;
        }, getJSON: function getJSON(e, t, n) {
          return ye.get(e, t, n, "json");
        }, getScript: function getScript(e, t) {
          return ye.get(e, void 0, t, "script");
        } }), ye.each(["get", "post"], function (e, t) {
        ye[t] = function (e, n, r, i) {
          return ye.isFunction(n) && (i = i || r, r = n, n = void 0), ye.ajax(ye.extend({ url: e, type: t, dataType: i, data: n, success: r }, ye.isPlainObject(e) && e));
        };
      }), ye._evalUrl = function (e) {
        return ye.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
      }, ye.fn.extend({ wrapAll: function wrapAll(e) {
          var t;return this[0] && (ye.isFunction(e) && (e = e.call(this[0])), t = ye(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }return e;
          }).append(this)), this;
        }, wrapInner: function wrapInner(e) {
          return ye.isFunction(e) ? this.each(function (t) {
            ye(this).wrapInner(e.call(this, t));
          }) : this.each(function () {
            var t = ye(this),
                n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
          });
        }, wrap: function wrap(e) {
          var t = ye.isFunction(e);return this.each(function (n) {
            ye(this).wrapAll(t ? e.call(this, n) : e);
          });
        }, unwrap: function unwrap(e) {
          return this.parent(e).not("body").each(function () {
            ye(this).replaceWith(this.childNodes);
          }), this;
        } }), ye.expr.pseudos.hidden = function (e) {
        return !ye.expr.pseudos.visible(e);
      }, ye.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, ye.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest();
        } catch (e) {}
      };var Ft = { 0: 200, 1223: 204 },
          Pt = ye.ajaxSettings.xhr();me.cors = !!Pt && "withCredentials" in Pt, me.ajax = Pt = !!Pt, ye.ajaxTransport(function (e) {
        var _t2, r;if (me.cors || Pt && !e.crossDomain) return { send: function send(i, o) {
            var s,
                a = e.xhr();if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
              a[s] = e.xhrFields[s];
            }e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (s in i) {
              a.setRequestHeader(s, i[s]);
            }_t2 = function t(e) {
              return function () {
                _t2 && (_t2 = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
              };
            }, a.onload = _t2(), r = a.onerror = _t2("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
              4 === a.readyState && n.setTimeout(function () {
                _t2 && r();
              });
            }, _t2 = _t2("abort");try {
              a.send(e.hasContent && e.data || null);
            } catch (e) {
              if (_t2) throw e;
            }
          }, abort: function abort() {
            _t2 && _t2();
          } };
      }), ye.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), ye.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
            return ye.globalEval(e), e;
          } } }), ye.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), ye.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, _n;return { send: function send(r, i) {
              t = ye("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
                t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
              }), se.head.appendChild(t[0]);
            }, abort: function abort() {
              _n && _n();
            } };
        }
      });var Mt = [],
          Rt = /(=)\?(?=&|$)|\?\?/;ye.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
          var e = Mt.pop() || ye.expando + "_" + Ct++;return this[e] = !0, e;
        } }), ye.ajaxPrefilter("json jsonp", function (e, t, r) {
        var i,
            o,
            s,
            a = !1 !== e.jsonp && (Rt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Rt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return s || ye.error(i + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
          s = arguments;
        }, r.always(function () {
          void 0 === o ? ye(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Mt.push(i)), s && ye.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script";
      }), me.createHTMLDocument = function () {
        var e = se.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
      }(), ye.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var r, i, o;return t || (me.createHTMLDocument ? (t = se.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = se.location.href, t.head.appendChild(r)) : t = se), i = ke.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = k([e], t, o), o && o.length && ye(o).remove(), ye.merge([], i.childNodes));
      }, ye.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");return a > -1 && (r = J(e.slice(a)), e = e.slice(0, a)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && ye.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
          o = arguments, s.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
          s.each(function () {
            n.apply(this, o || [e.responseText, t, e]);
          });
        }), this;
      }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ye.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), ye.expr.pseudos.animated = function (e) {
        return ye.grep(ye.timers, function (t) {
          return e === t.elem;
        }).length;
      }, ye.offset = { setOffset: function setOffset(e, t, n) {
          var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l = ye.css(e, "position"),
              f = ye(e),
              d = {};"static" === l && (e.style.position = "relative"), a = f.offset(), o = ye.css(e, "top"), u = ye.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d);
        } }, ye.fn.extend({ offset: function offset(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            ye.offset.setOffset(this, e, t);
          });var t,
              n,
              r,
              i,
              o = this[0];if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, { top: r.top + i.pageYOffset - n.clientTop, left: r.left + i.pageXOffset - n.clientLeft }) : { top: 0, left: 0 };
        }, position: function position() {
          if (this[0]) {
            var e,
                t,
                n = this[0],
                r = { top: 0, left: 0 };return "fixed" === ye.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), u(e[0], "html") || (r = e.offset()), r = { top: r.top + ye.css(e[0], "borderTopWidth", !0), left: r.left + ye.css(e[0], "borderLeftWidth", !0) }), { top: t.top - r.top - ye.css(n, "marginTop", !0), left: t.left - r.left - ye.css(n, "marginLeft", !0) };
          }
        }, offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === ye.css(e, "position");) {
              e = e.offsetParent;
            }return e || Qe;
          });
        } }), ye.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
        var n = "pageYOffset" === t;ye.fn[e] = function (r) {
          return Le(this, function (e, r, i) {
            var o;if (ye.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
          }, e, r, arguments.length);
        };
      }), ye.each(["top", "left"], function (e, t) {
        ye.cssHooks[t] = M(me.pixelPosition, function (e, n) {
          if (n) return n = P(e, t), ot.test(n) ? ye(e).position()[t] + "px" : n;
        });
      }), ye.each({ Height: "height", Width: "width" }, function (e, t) {
        ye.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
          ye.fn[r] = function (i, o) {
            var s = arguments.length && (n || "boolean" != typeof i),
                a = n || (!0 === i || !0 === o ? "margin" : "border");return Le(this, function (t, n, i) {
              var o;return ye.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ye.css(t, n, a) : ye.style(t, n, i, a);
            }, t, s ? i : void 0, s);
          };
        });
      }), ye.fn.extend({ bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
          return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
          return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } }), ye.holdReady = function (e) {
        e ? ye.readyWait++ : ye.ready(!0);
      }, ye.isArray = Array.isArray, ye.parseJSON = JSON.parse, ye.nodeName = u, r = [], void 0 !== (i = function () {
        return ye;
      }.apply(t, r)) && (e.exports = i);var It = n.jQuery,
          Wt = n.$;return ye.noConflict = function (e) {
        return n.$ === ye && (n.$ = Wt), e && n.jQuery === ye && (n.jQuery = It), ye;
      }, o || (n.jQuery = n.$ = ye), ye;
    });
  }, function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ })

/******/ });