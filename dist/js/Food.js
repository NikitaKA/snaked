!function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=13)}([function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},,function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return c});var o=e(0),r=e.n(o),u=e(1),i=e.n(u);function f(t){var n=Math.round(Math.random()*(t.size.x-1))*t.cellSize,e=Math.round(Math.random()*(t.size.y-1))*t.cellSize;return new c(n,e)}var c=function(){function e(t,n){r()(this,e),this.x=t,this.y=n}return i()(e,null,[{key:"generate",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],e=f(t.field),o=null;if(!n)for(;!o;)t.coordsIntersectingWithSnakes(e)?e=f(t.field):o=e;return o||e}}]),e}()},,function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return c});var o=e(0),r=e.n(o),u=e(1),i=e.n(u),f=e(3),c=function(){function n(t){r()(this,n),this.coords=t}return i()(n,null,[{key:"generate",value:function(t){return new n(f.default.generate(t))}}]),n}()},function(t,n,e){var o=e(15),r=e(16);t.exports=function(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?r(t):n}},function(n,t){function e(t){return n.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}n.exports=e},function(t,n,e){var o=e(17);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}},,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return l});var o=e(0),a=e.n(o),r=e(1),u=e.n(r),i=e(6),s=e.n(i),f=e(7),p=e.n(f),c=e(8),y=e.n(c),d=e(3),l=function(t){function l(t){var n,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=e.coords,r=void 0===o?d.default.generate(t):o,u=e.power,i=void 0===u?1:u,f=e.score,c=void 0===f?100:f;return a()(this,l),(n=s()(this,p()(l).call(this,r))).app=t,n.power=i,n.score=c,n}return y()(l,t),u()(l,[{key:"destroy",value:function(){var e=this,o=null;this.app.food.forEach(function(t,n){t===e&&(o=n)}),this.app.food.splice(o,1)}}]),l}(e(5).default)},,function(n,t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?n.exports=o=function(t){return e(t)}:n.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},o(t)}n.exports=o},function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},o(t,n)}e.exports=o}]);