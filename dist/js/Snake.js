!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},function(t,e,n){"use strict";n.r(e),n.d(e,"DIRECTION_LEFT",function(){return u}),n.d(e,"DIRECTION_RIGHT",function(){return a}),n.d(e,"DIRECTION_UP",function(){return l}),n.d(e,"DIRECTION_DOWN",function(){return d}),n.d(e,"default",function(){return c});var i=n(0),f=n.n(i),r=n(1),o=n.n(r),s=n(4),u="DIRECTION_LEFT",a="DIRECTION_RIGHT",l="DIRECTION_UP",d="DIRECTION_DOWN",c=function(){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.left,n=void 0===e?"ArrowLeft":e,i=t.right,r=void 0===i?"ArrowRight":i,o=t.up,s=void 0===o?"ArrowUp":o,u=t.down,a=void 0===u?"ArrowDown":u;f()(this,c),this.app=null,this.direction=null,this.keysPressed={},this.kLeft=n,this.kRight=r,this.kUp=s,this.kDown=a,this.init()}return o()(c,[{key:"init",value:function(){var e=this;window.addEventListener("keydown",function(t){if(e.app.state===s.STATE_PAUSED||e.app.state===s.STATE_STOPPED)return!1;e.keyDown(t)}),window.addEventListener("keyup",function(t){if(e.app.state===s.STATE_PAUSED||e.app.state===s.STATE_STOPPED)return!1;e.keyUp(t)})}},{key:"keyDown",value:function(t){this.keysPressed[t.code]=performance.now(),this.selectDirection()}},{key:"keyUp",value:function(t){this.keysPressed[t.code]=0,this.selectDirection()}},{key:"selectDirection",value:function(){var n=this,i=null,r=0;switch(Object.keys(this.keysPressed).forEach(function(t){var e=n.keysPressed[t];(!r&&e||r&&e&&r<e)&&(i=t,r=e)}),i){case this.kLeft:this.direction=u;break;case this.kRight:this.direction=a;break;case this.kUp:this.direction=l;break;case this.kDown:this.direction=d}}}]),c}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var i=n(0),r=n.n(i),o=n(1),s=n.n(o);function u(t){var e=Math.round(Math.random()*(t.size.x-1))*t.cellSize,n=Math.round(Math.random()*(t.size.y-1))*t.cellSize;return new a(e,n)}var a=function(){function n(t,e){r()(this,n),this.x=t,this.y=e}return s()(n,null,[{key:"generate",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=u(t.field),i=null;if(!e)for(;!i;)t.coordsIntersectingWithSnakes(n)?n=u(t.field):i=n;return i||n}}]),n}()},function(t,e,n){"use strict";n.r(e),n.d(e,"STATE_INITIALIZED",function(){return h}),n.d(e,"STATE_PAUSED",function(){return p}),n.d(e,"STATE_RUNNING",function(){return v}),n.d(e,"STATE_STOPPED",function(){return y}),n.d(e,"default",function(){return k});var i=n(0),o=n.n(i),r=n(1),s=n.n(r),u=n(9),a=n.n(u),c=n(13),f=n(10),l=n(2),d=n(12),h="STATE_INITIALIZED",p="STATE_PAUSED",v="STATE_RUNNING",y="STATE_STOPPED",k=function(){function r(t){var n=this,e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).debug,i=void 0!==e&&e;o()(this,r),a()(this,"tick",function(t){var e=n.setDelta(t);n.update(e),n.render(e),n.onTickEnd(),n.state!==y&&(n.reqAnimationFrame=window.requestAnimationFrame(n.tick))}),this.field=t,this.snakes=[],this.state=h,this.reqAnimationFrame=null,this.debug=i,this.then=0,this.started=!1,this.gameover=!1,this.onTickEndCallbacks=[],this.food=[],(this.field.app=this).init()}return s()(r,[{key:"init",value:function(){var e=this;window.addEventListener("keypress",function(t){e.appControl(t)}),window.addEventListener("blur",function(){e.stop()}),window.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?e.start():e.stop()}),window.addEventListener("focus",function(){e.start()})}},{key:"addSnake",value:function(){if(this.snakes.length){if(1===this.snakes.length){var t=new l.default({left:"KeyA",right:"KeyD",up:"KeyW",down:"KeyS"}),e=new d.default(this,t,{color:"red"});this.snakes.push(e),e.spawn()}}else{var n=new l.default,i=new d.default(this,n);this.snakes.push(i),i.spawn()}}},{key:"appControl",value:function(t){switch(t.code){case"Space":switch(this.state){case v:this.pause();break;case p:this.start()}break;case"Enter":this.addSnake()}}},{key:"start",value:function(){this.gameover||(this.state=v,this.reqAnimationFrame||(this.then=performance.now(),this.reqAnimationFrame=window.requestAnimationFrame(this.tick)))}},{key:"pause",value:function(){this.state=p}},{key:"stop",value:function(){window.cancelAnimationFrame(this.reqAnimationFrame),this.reqAnimationFrame=null,this.state=y}},{key:"setDelta",value:function(t){var e=t-this.then;return this.then=t,e}},{key:"update",value:function(e){this.generateFood(),this.snakes.forEach(function(t){return t.tick(e)})}},{key:"render",value:function(t){this.field.draw(t)}},{key:"generateFood",value:function(){if(!this.food.length){var t=new c.default(this);this.food.push(t)}}},{key:"cellIntersectingWithObstacles",value:function(t,e){return this.coordsIntersectingWithSnakes(e)?this.gameOver(t):!this.field.endless&&(!!this.coorsOutsideField(e)&&this.gameOver(t))}},{key:"killSnake",value:function(e){var t=this.snakes.findIndex(function(t){return t===e});this.snakes.splice(t,1)}},{key:"gameOver",value:function(t){return 1<this.snakes.length?this.killSnake(t):(this.gameover=!0,this.stop(),this.onTickEnd(this.field.gameOver),f.default.checkScore(this.snakes[0].score)),!0}},{key:"onTickEnd",value:function(t){t?this.onTickEndCallbacks.push(t):(this.onTickEndCallbacks.forEach(function(t){return t()}),this.onTickEndCallbacks=[])}},{key:"coorsOutsideField",value:function(t){return t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height}},{key:"coordsIntersectingWithSnakes",value:function(e){var n=!1;return this.snakes.forEach(function(t){n||t.body.forEach(function(t){e.x===t.coords.x&&e.y===t.coords.y&&(n=!0)})}),n}}]),r}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),u=n(3),a=function(){function e(t){r()(this,e),this.coords=t}return s()(e,null,[{key:"generate",value:function(t){return new e(u.default.generate(t))}}]),e}()},function(t,e,n){var i=n(15),r=n(16);t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?r(t):e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){var i=n(17);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),u=function(){function o(){r()(this,o)}return s()(o,null,[{key:"checkScore",value:function(i){if(i){var t=o.score,r=t.length?-1:0;t.forEach(function(t,e){var n=t.points;r<0&&n<i&&(r=e)}),o.addScore(i,r)}}},{key:"addScore",value:function(t,e){var n=prompt("Whats your name?");if(n){var i={name:n,points:t,date:new Date},r=o.score;e<0?r.push(i):r.splice(e,0,i),5<r.length&&r.pop(),localStorage.setItem("snaked-score",JSON.stringify(r))}}},{key:"score",get:function(){var t=localStorage.getItem("snaked-score")||"[]",e=null;try{e=JSON.parse(t)}catch(t){e=[]}return e}}]),o}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l});var i=n(0),r=n.n(i),o=n(6),s=n.n(o),u=n(7),a=n.n(u),c=n(8),f=n.n(c),l=function(t){function e(){return r()(this,e),s()(this,a()(e).apply(this,arguments))}return f()(e,t),e}(n(5).default)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var i=n(0),l=n.n(i),r=n(1),o=n.n(r),s=n(9),d=n.n(s),u=n(18),h=n.n(u),p=n(4),v=n(2),y=n(3),a=n(11),c=function(){function f(t,e){var s=this,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=n.speed,r=void 0===i?5:i,o=n.toGrow,u=void 0===o?2:o,a=n.color,c=void 0===a?"black":a;l()(this,f),d()(this,"move",function(){if(s.app.state!==p.STATE_RUNNING)return!1;var t=s.head.coords,e=t.x,n=t.y,i=null,r=s.checkReverse()?s.direction:s.controls.direction;switch(r){case v.DIRECTION_LEFT:i=new y.default(e-s.field.cellSize,n);break;case v.DIRECTION_RIGHT:i=new y.default(e+s.field.cellSize,n);break;case v.DIRECTION_UP:i=new y.default(e,n-s.field.cellSize);break;case v.DIRECTION_DOWN:i=new y.default(e,n+s.field.cellSize)}if(s.controls.direction&&(s.app.started||(s.app.started=!0),!s.app.cellIntersectingWithObstacles(s,i))){var o=s.sideTravel(i);s.direction=r,s.eat(o)}}),this.app=t,this.field=this.app.field,this.controls=e,this.controls.app=t,this.body=[],this.baseSpeed=200-10*(r-1),this.minimumSpeed=20,this.direction=null,this.passed=0,this.toGrow=u,this.consumed=0,this.score=0,this.color=c,this.speedEasing=h()(.25,.46,.45,.94)}return o()(f,[{key:"tick",value:function(t){this.passed+=t,this.deTick(this.move)}},{key:"deTick",value:function(t){this.passed>=this.speed&&(this.passed=this.passed-this.speed,t(),this.deTick(t))}},{key:"spawn",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=null!=t&&null!=e?new y.default(t,e):y.default.generate(this.app);this.body.push(new a.default(n))}},{key:"checkReverse",value:function(){return this.direction===v.DIRECTION_LEFT&&this.controls.direction===v.DIRECTION_RIGHT||this.direction===v.DIRECTION_RIGHT&&this.controls.direction===v.DIRECTION_LEFT||this.direction===v.DIRECTION_UP&&this.controls.direction===v.DIRECTION_DOWN||this.direction===v.DIRECTION_DOWN&&this.controls.direction===v.DIRECTION_UP}},{key:"addBody",value:function(t){this.body.unshift(new a.default(t))}},{key:"eat",value:function(t){this.addBody(t),this.feed(t)}},{key:"feed",value:function(t){var e=this.checkFoodInCoords(t);e&&(this.consumed++,this.score+=e.score,this.toGrow=e.power,e.destroy()),this.tailTrimmer()}},{key:"tailTrimmer",value:function(){if(this.toGrow)return this.toGrow--,!1;this.body.pop()}},{key:"checkFoodInCoords",value:function(e){var n=null;return this.app.food.forEach(function(t){n||t.coords.x===e.x&&t.coords.y===e.y&&(n=t)}),n}},{key:"sideTravel",value:function(t){var e,n,i=null;(t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height)&&(t.x<0&&(e=this.field.width-this.field.cellSize),t.y<0&&(n=this.field.height-this.field.cellSize),t.x>=this.field.width&&(e=0),t.y>=this.field.height&&(n=0),i=new y.default(e,n));return i||t}},{key:"speed",get:function(){var t=this.baseSpeed;if(this.consumed){var e=this.speedEasing(this.consumed/50);t=Math.round(this.baseSpeed-(this.baseSpeed-this.minimumSpeed)*e)}return t}},{key:"size",get:function(){return this.body.length}},{key:"head",get:function(){return this.body[0]}}]),f}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var i=n(0),f=n.n(i),r=n(1),o=n.n(r),s=n(6),l=n.n(s),u=n(7),d=n.n(u),a=n(8),h=n.n(a),p=n(3),c=function(t){function c(t){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=n.coords,r=void 0===i?p.default.generate(t):i,o=n.power,s=void 0===o?1:o,u=n.score,a=void 0===u?100:u;return f()(this,c),(e=l()(this,d()(c).call(this,r))).app=t,e.power=s,e.score=a,e}return h()(c,t),o()(c,[{key:"destroy",value:function(){var n=this,i=null;this.app.food.forEach(function(t,e){t===n&&(i=e)}),this.app.food.splice(i,1)}}]),c}(n(5).default)},,function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(t){return n(t)}:e.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(t)}e.exports=i},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(n,t){function i(t,e){return n.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}n.exports=i},function(t,e){var a=4,c=1e-7,f=10,r="function"==typeof Float32Array;function i(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,n){return((i(e,n)*t+o(e,n))*t+s(e))*t}function d(t,e,n){return 3*i(e,n)*t*t+2*o(e,n)*t+s(e)}function h(t){return t}t.exports=function(o,e,s,n){if(!(0<=o&&o<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");if(o===e&&s===n)return h;for(var u=r?new Float32Array(11):new Array(11),t=0;t<11;++t)u[t]=l(.1*t,o,s);function i(t){for(var e=0,n=1;10!==n&&u[n]<=t;++n)e+=.1;var i=e+.1*((t-u[--n])/(u[n+1]-u[n])),r=d(i,o,s);return.001<=r?function(t,e,n,i){for(var r=0;r<a;++r){var o=d(e,n,i);if(0===o)return e;e-=(l(e,n,i)-t)/o}return e}(t,i,o,s):0===r?i:function(t,e,n,i,r){for(var o,s,u=0;0<(o=l(s=e+(n-e)/2,i,r)-t)?n=s:e=s,Math.abs(o)>c&&++u<f;);return s}(t,e,e+.1,o,s)}return function(t){return 0===t?0:1===t?1:l(i(t),e,n)}}}]);