!function(n){function e(e){for(var r,i,a=e[0],f=e[1],l=e[2],s=0,d=[];s<a.length;s++)i=a[s],o[i]&&d.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);for(c&&c(e);d.length;)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,a=1;a<t.length;a++){var f=t[a];0!==o[f]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={7:0,3:0,5:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=f;u.push([11,0]),t()}({11:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return h});var r=t(0),o=t.n(r),u=t(1),i=t.n(u),a=t(8),f=t.n(a),l=t(9),c=t.n(l),s=t(10),d=t.n(s),p=t(2),h=function(n){function e(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=r.coords,i=void 0===u?p.default.generate(n):u,a=r.power,l=void 0===a?1:a,s=r.score,d=void 0===s?100:s;return o()(this,e),(t=f()(this,c()(e).call(this,i))).app=n,t.power=l,t.score=d,t}return d()(e,n),i()(e,[{key:"destroy",value:function(){var n=this,e=null;this.app.food.forEach(function(t,r){t===n&&(e=r)}),this.app.food.splice(e,1)}}]),e}(t(5).default)},2:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return f});var r=t(0),o=t.n(r),u=t(1),i=t.n(u);function a(n){var e=Math.round(Math.random()*(n.size.x-1))*n.cellSize,t=Math.round(Math.random()*(n.size.y-1))*n.cellSize;return new f(e,t)}var f=function(){function n(e,t){o()(this,n),this.x=e,this.y=t}return i()(n,null,[{key:"generate",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=a(n.field),r=null;if(!e)for(;!r;)n.coordsIntersectingWithSnakes(t)?t=a(n.field):r=t;return r||t}}]),n}()},5:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return f});var r=t(0),o=t.n(r),u=t(1),i=t.n(u),a=t(2),f=function(){function n(e){o()(this,n),this.coords=e}return i()(n,null,[{key:"generate",value:function(e){return new n(a.default.generate(e))}}]),n}()}});