!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},,function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t(0),o=t.n(r),u=t(1),i=t.n(u);function a(e){var n=Math.round(Math.random()*(e.size.x-1))*e.cellSize,t=Math.round(Math.random()*(e.size.y-1))*e.cellSize;return new f(n,t)}var f=function(){function e(n,t){o()(this,e),this.x=n,this.y=t}return i()(e,null,[{key:"generate",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=a(e.field),r=null;if(!n)for(;!r;)e.coordsIntersectingWithSnakes(t)?t=a(e.field):r=t;return r||t}}]),e}()}]);