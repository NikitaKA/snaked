!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}({15:function(e,t,n){"use strict";n.r(t),n.d(t,"DRAWTEXT_ALIGN_CENTER",function(){return r}),n.d(t,"drawText",function(){return o});var r="center";function o(e,t,n){var o=n.padding||0,i=0,l=0;switch(n.lines.forEach(function(t){e.font=t.font,t.width=e.measureText(t.text).width,t.width>i&&(i=t.width),l+=t.height}),e.save(),n.align){case r:e.translate(0,(t.height-l-2*o)/2),e.fillStyle=n.bgcolor,e.globalAlpha=n.bgAlpha||1,e.fillRect(t.width/2-i/2-o,0,i+2*o,l+2*o),e.globalAlpha=n.alpha||1;var u=o;n.lines.forEach(function(n){e.textBaseline=n.baseline||"middle",e.fillStyle=n.color||"black",e.font=n.font,e.fillText(n.text,t.width/2-n.width/2,u+n.height/2),u+=n.height})}e.restore()}}});