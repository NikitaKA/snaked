!function(t){function e(e){for(var i,s,a=e[0],u=e[1],c=e[2],l=0,d=[];l<a.length;l++)s=a[l],r[s]&&d.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);for(f&&f(e);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={4:0,3:0,5:0,7:0,9:0,11:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=u;o.push([4,0]),n()}([,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var i=n(0),r=n.n(i),o=n(1),s=n.n(o);function a(t){var e=Math.round(Math.random()*(t.size.x-1))*t.cellSize,n=Math.round(Math.random()*(t.size.y-1))*t.cellSize;return new u(e,n)}var u=function(){function t(e,n){r()(this,t),this.x=e,this.y=n}return s()(t,null,[{key:"generate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a(t.field),i=null;if(!e)for(;!i;)t.coordsIntersectingWithSnakes(n)?n=a(t.field):i=n;return i||n}}]),t}()},function(t,e,n){"use strict";n.r(e),n.d(e,"STATE_INITIALIZED",function(){return l}),n.d(e,"STATE_PAUSED",function(){return d}),n.d(e,"STATE_RUNNING",function(){return h}),n.d(e,"STATE_STOPPED",function(){return p}),n.d(e,"default",function(){return v});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),a=n(7),u=n.n(a),c=n(11),f=n(6),l="STATE_INITIALIZED",d="STATE_PAUSED",h="STATE_RUNNING",p="STATE_STOPPED",v=function(){function t(e,n){var i=this,o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).debug,s=void 0!==o&&o;r()(this,t),u()(this,"tick",function(t){var e=i.setDelta(t);i.update(e),i.render(e),i.onTickEnd(),i.state!==p&&(i.reqAnimationFrame=window.requestAnimationFrame(i.tick))}),this.field=e,this.controls=n,this.snakes=[],this.state=l,this.reqAnimationFrame=null,this.debug=s,this.then=0,this.started=!1,this.gameover=!1,this.onTickEndCallbacks=[],this.food=[],this.field.app=this,this.controls.app=this}return s()(t,[{key:"start",value:function(){this.gameover||(this.state===l&&(this.field.addSnakes(this.snakes),this.snakes.forEach(function(t){return t.spawn()})),this.state=h,this.reqAnimationFrame||(this.then=performance.now(),this.reqAnimationFrame=window.requestAnimationFrame(this.tick)))}},{key:"pause",value:function(){this.state=d}},{key:"stop",value:function(){window.cancelAnimationFrame(this.reqAnimationFrame),this.reqAnimationFrame=null,this.state=p}},{key:"meetSnake",value:function(t){t.app=this,t.field=this.field,t.controls=this.controls,this.snakes.push(t)}},{key:"setDelta",value:function(t){var e=t-this.then;return this.then=t,e}},{key:"update",value:function(t){this.generateFood(),this.snakes.forEach(function(e){return e.tick(t)})}},{key:"render",value:function(t){this.field.draw(t)}},{key:"generateFood",value:function(){if(!this.food.length){var t=new c.default(this);this.food.push(t)}}},{key:"cellIntersectingWithObstacles",value:function(t){return this.coordsIntersectingWithSnakes(t)?this.gameOver():!this.field.endless&&(!!this.coorsOutsideField(t)&&this.gameOver())}},{key:"gameOver",value:function(){return this.gameover=!0,this.stop(),this.onTickEnd(this.field.gameOver),f.default.checkScore(this.snakes[0].score),!0}},{key:"onTickEnd",value:function(t){t?this.onTickEndCallbacks.push(t):(this.onTickEndCallbacks.forEach(function(t){return t()}),this.onTickEndCallbacks=[])}},{key:"coorsOutsideField",value:function(t){return t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height}},{key:"coordsIntersectingWithSnakes",value:function(t){var e=!1;return this.snakes.forEach(function(n){e||n.body.forEach(function(n){t.x===n.coords.x&&t.y===n.coords.y&&(e=!0)})}),e}}]),t}()},function(t,e,n){"use strict";n.r(e),n.d(e,"DIRECTION_LEFT",function(){return u}),n.d(e,"DIRECTION_RIGHT",function(){return c}),n.d(e,"DIRECTION_UP",function(){return f}),n.d(e,"DIRECTION_DOWN",function(){return l}),n.d(e,"default",function(){return d});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),a=n(3),u="DIRECTION_LEFT",c="DIRECTION_RIGHT",f="DIRECTION_UP",l="DIRECTION_DOWN",d=function(){function t(){r()(this,t),this.app=null,this.direction=null,this.keysPressed={},this.init()}return s()(t,[{key:"init",value:function(){var t=this;window.addEventListener("keydown",function(e){if(t.app.state===a.STATE_PAUSED||t.app.state===a.STATE_STOPPED)return!1;t.keyDown(e)}),window.addEventListener("keyup",function(e){if(t.app.state===a.STATE_PAUSED||t.app.state===a.STATE_STOPPED)return!1;t.keyUp(e)}),window.addEventListener("keypress",function(e){t.appControl(e)}),window.addEventListener("blur",function(){t.app.stop()}),window.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?t.app.start():t.app.stop()}),window.addEventListener("focus",function(){t.app.start()})}},{key:"appControl",value:function(t){switch(t.code){case"Space":switch(this.app.state){case a.STATE_RUNNING:this.app.pause();break;case a.STATE_PAUSED:this.app.start()}break;case"Enter":this.app.state===a.STATE_STOPPED?this.app.start():this.app.stop()}}},{key:"keyDown",value:function(t){this.keysPressed[t.code]=performance.now(),this.selectDirection()}},{key:"keyUp",value:function(t){this.keysPressed[t.code]=0,this.selectDirection()}},{key:"selectDirection",value:function(){var t=this,e=null,n=0;switch(Object.keys(this.keysPressed).forEach(function(i){var r=t.keysPressed[i];(!n&&r||n&&r&&r>n)&&(e=i,n=r)}),e){case"ArrowLeft":this.direction=u;break;case"ArrowRight":this.direction=c;break;case"ArrowUp":this.direction=f;break;case"ArrowDown":this.direction=l}}}]),t}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),a=n(2),u=function(){function t(e){r()(this,t),this.coords=e}return s()(t,null,[{key:"generate",value:function(e){return new t(a.default.generate(e))}}]),t}()},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),a=function(){function t(){r()(this,t)}return s()(t,null,[{key:"checkScore",value:function(e){if(e){var n=t.score,i=n.length?-1:0;n.forEach(function(t,n){var r=t.points;i<0&&e>r&&(i=n)}),t.addScore(e,i)}}},{key:"addScore",value:function(e,n){var i,r=prompt("Whats your name?");if(r){var o={name:r,points:e,date:new Date},s=t.score;n<0?s.push(o):s.splice(n,0,o),s.length>10&&s.pop(),localStorage.setItem("snaked-score",(i=s,JSON.stringify(i)))}}},{key:"score",get:function(){var t=localStorage.getItem("snaked-score")||"[]",e=null;try{e=JSON.parse(t)}catch(t){e=[]}return e}}]),t}()},,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p});var i=n(0),r=n.n(i),o=n(1),s=n.n(o),a=n(8),u=n.n(a),c=n(9),f=n.n(c),l=n(10),d=n.n(l),h=n(2),p=function(t){function e(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.coords,s=void 0===o?h.default.generate(t):o,a=i.power,c=void 0===a?1:a,l=i.score,d=void 0===l?100:l;return r()(this,e),(n=u()(this,f()(e).call(this,s))).app=t,n.power=c,n.score=d,n}return d()(e,t),s()(e,[{key:"destroy",value:function(){var t=this,e=null;this.app.food.forEach(function(n,i){n===t&&(e=i)}),this.app.food.splice(e,1)}}]),e}(n(5).default)}]);