!function(t){function e(e){for(var n,o,a=e[0],c=e[1],h=e[2],u=0,d=[];u<a.length;u++)o=a[u],s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);d.length;)d.shift()();return r.push.apply(r,h||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={1:0,2:0,3:0,4:0,5:0,6:0,7:0,9:0,10:0,11:0,12:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var h=0;h<a.length;h++)e(a[h]);var l=c;r.push([17,0]),i()}([,,function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return c});var n=i(0),s=i.n(n),r=i(1),o=i.n(r);function a(t){var e=Math.round(Math.random()*(t.size.x-1))*t.cellSize,i=Math.round(Math.random()*(t.size.y-1))*t.cellSize;return new c(e,i)}var c=function(){function t(e,i){s()(this,t),this.x=e,this.y=i}return o()(t,null,[{key:"generate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a(t.field),n=null;if(!e)for(;!n;)t.coordsIntersectingWithSnakes(i)?i=a(t.field):n=i;return n||i}}]),t}()},function(t,e,i){"use strict";i.r(e),i.d(e,"STATE_INITIALIZED",function(){return u}),i.d(e,"STATE_PAUSED",function(){return d}),i.d(e,"STATE_RUNNING",function(){return f}),i.d(e,"STATE_STOPPED",function(){return p}),i.d(e,"default",function(){return v});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(7),c=i.n(a),h=i(11),l=i(6),u="STATE_INITIALIZED",d="STATE_PAUSED",f="STATE_RUNNING",p="STATE_STOPPED",v=function(){function t(e,i){var n=this,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).debug,o=void 0!==r&&r;s()(this,t),c()(this,"tick",function(t){var e=n.setDelta(t);n.update(e),n.render(e),n.onTickEnd(),n.state!==p&&(n.reqAnimationFrame=window.requestAnimationFrame(n.tick))}),this.field=e,this.controls=i,this.snakes=[],this.state=u,this.reqAnimationFrame=null,this.debug=o,this.then=0,this.started=!1,this.gameover=!1,this.onTickEndCallbacks=[],this.food=[],this.field.app=this,this.controls.app=this}return o()(t,[{key:"start",value:function(){this.gameover||(this.state===u&&(this.field.addSnakes(this.snakes),this.snakes.forEach(function(t){return t.spawn()})),this.state=f,this.reqAnimationFrame||(this.then=performance.now(),this.reqAnimationFrame=window.requestAnimationFrame(this.tick)))}},{key:"pause",value:function(){this.state=d}},{key:"stop",value:function(){window.cancelAnimationFrame(this.reqAnimationFrame),this.reqAnimationFrame=null,this.state=p}},{key:"meetSnake",value:function(t){t.app=this,t.field=this.field,t.controls=this.controls,this.snakes.push(t)}},{key:"setDelta",value:function(t){var e=t-this.then;return this.then=t,e}},{key:"update",value:function(t){this.generateFood(),this.snakes.forEach(function(e){return e.tick(t)})}},{key:"render",value:function(t){this.field.draw(t)}},{key:"generateFood",value:function(){if(!this.food.length){var t=new h.default(this);this.food.push(t)}}},{key:"cellIntersectingWithObstacles",value:function(t){return this.coordsIntersectingWithSnakes(t)?this.gameOver():!this.field.endless&&(!!this.coorsOutsideField(t)&&this.gameOver())}},{key:"gameOver",value:function(){return this.gameover=!0,this.stop(),this.onTickEnd(this.field.gameOver),l.default.checkScore(this.snakes[0].score),!0}},{key:"onTickEnd",value:function(t){t?this.onTickEndCallbacks.push(t):(this.onTickEndCallbacks.forEach(function(t){return t()}),this.onTickEndCallbacks=[])}},{key:"coorsOutsideField",value:function(t){return t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height}},{key:"coordsIntersectingWithSnakes",value:function(t){var e=!1;return this.snakes.forEach(function(i){e||i.body.forEach(function(i){t.x===i.coords.x&&t.y===i.coords.y&&(e=!0)})}),e}}]),t}()},function(t,e,i){"use strict";i.r(e),i.d(e,"DIRECTION_LEFT",function(){return c}),i.d(e,"DIRECTION_RIGHT",function(){return h}),i.d(e,"DIRECTION_UP",function(){return l}),i.d(e,"DIRECTION_DOWN",function(){return u}),i.d(e,"default",function(){return d});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(3),c="DIRECTION_LEFT",h="DIRECTION_RIGHT",l="DIRECTION_UP",u="DIRECTION_DOWN",d=function(){function t(){s()(this,t),this.app=null,this.direction=null,this.keysPressed={},this.init()}return o()(t,[{key:"init",value:function(){var t=this;window.addEventListener("keydown",function(e){if(t.app.state===a.STATE_PAUSED||t.app.state===a.STATE_STOPPED)return!1;t.keyDown(e)}),window.addEventListener("keyup",function(e){if(t.app.state===a.STATE_PAUSED||t.app.state===a.STATE_STOPPED)return!1;t.keyUp(e)}),window.addEventListener("keypress",function(e){t.appControl(e)}),window.addEventListener("blur",function(){t.app.stop()}),window.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?t.app.start():t.app.stop()}),window.addEventListener("focus",function(){t.app.start()})}},{key:"appControl",value:function(t){switch(t.code){case"Space":switch(this.app.state){case a.STATE_RUNNING:this.app.pause();break;case a.STATE_PAUSED:this.app.start()}break;case"Enter":this.app.state===a.STATE_STOPPED?this.app.start():this.app.stop()}}},{key:"keyDown",value:function(t){this.keysPressed[t.code]=performance.now(),this.selectDirection()}},{key:"keyUp",value:function(t){this.keysPressed[t.code]=0,this.selectDirection()}},{key:"selectDirection",value:function(){var t=this,e=null,i=0;switch(Object.keys(this.keysPressed).forEach(function(n){var s=t.keysPressed[n];(!i&&s||i&&s&&s>i)&&(e=n,i=s)}),e){case"ArrowLeft":this.direction=c;break;case"ArrowRight":this.direction=h;break;case"ArrowUp":this.direction=l;break;case"ArrowDown":this.direction=u}}}]),t}()},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return c});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(2),c=function(){function t(e){s()(this,t),this.coords=e}return o()(t,null,[{key:"generate",value:function(e){return new t(a.default.generate(e))}}]),t}()},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return a});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=function(){function t(){s()(this,t)}return o()(t,null,[{key:"checkScore",value:function(e){if(e){var i=t.score,n=i.length?-1:0;i.forEach(function(t,i){var s=t.points;n<0&&e>s&&(n=i)}),t.addScore(e,n)}}},{key:"addScore",value:function(e,i){var n,s=prompt("Whats your name?");if(s){var r={name:s,points:e,date:new Date},o=t.score;i<0?o.push(r):o.splice(i,0,r),o.length>10&&o.pop(),localStorage.setItem("snaked-score",(n=o,JSON.stringify(n)))}}},{key:"score",get:function(){var t=localStorage.getItem("snaked-score")||"[]",e=null;try{e=JSON.parse(t)}catch(t){e=[]}return e}}]),t}()},,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return p});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(8),c=i.n(a),h=i(9),l=i.n(h),u=i(10),d=i.n(u),f=i(2),p=function(t){function e(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.coords,o=void 0===r?f.default.generate(t):r,a=n.power,h=void 0===a?1:a,u=n.score,d=void 0===u?100:u;return s()(this,e),(i=c()(this,l()(e).call(this,o))).app=t,i.power=h,i.score=d,i}return d()(e,t),o()(e,[{key:"destroy",value:function(){var t=this,e=null;this.app.food.forEach(function(i,n){i===t&&(e=n)}),this.app.food.splice(e,1)}}]),e}(i(5).default)},function(t,e,i){"use strict";i.r(e),i.d(e,"DRAWTEXT_ALIGN_CENTER",function(){return n}),i.d(e,"drawText",function(){return s});var n="center";function s(t,e,i){var s=i.padding||0,r=0,o=0;switch(i.lines.forEach(function(e){t.font=e.font,e.width=t.measureText(e.text).width,e.width>r&&(r=e.width),o+=e.height}),t.fillStyle=i.bgcolor,t.globalAlpha=i.bgAlpha||1,i.align){case n:t.fillRect(e.width/2-r/2-s,e.height/2-o/2-s,r+2*s,o+2*s),t.globalAlpha=i.alpha||1,i.lines.forEach(function(n,s){t.textBaseline=n.baseline||"middle",t.fillStyle=n.color||"black";var r=e.height/2-(i.lines.length-1-s)*n.height+n.height/i.lines.length;t.font=n.font,t.fillText(n.text,e.width/2-n.width/2,r)})}}},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return u});var n=i(0),s=i.n(n),r=i(8),o=i.n(r),a=i(9),c=i.n(a),h=i(10),l=i.n(h),u=function(t){function e(){return s()(this,e),o()(this,c()(e).apply(this,arguments))}return l()(e,t),e}(i(5).default)},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return u});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(7),c=i.n(a),h=i(6),l=i(12),u=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=void 0===r?0:r,a=n.height,h=void 0===a?0:a,l=n.cellSize,u=void 0===l?10:l,d=n.endless,f=void 0!==d&&d;n.debug;s()(this,t),c()(this,"gameOver",function(){i.clearField(),i.draw();var t="GAME OVER! SCORE: ".concat(i.app.snakes[0].score);i.ctx.font="bold ".concat(10,"px Arial"),i.ctx.fillStyle="white",i.ctx.fillRect(i.width/2-i.ctx.measureText(t).width/2-2,i.height/2-5-2,i.ctx.measureText(t).width+4,14),i.ctx.textBaseline="middle",i.ctx.fillStyle="black",i.ctx.fillText(t,i.width/2-i.ctx.measureText(t).width/2,i.height/2)}),this.app=null,o||(o=Math.floor(window.innerWidth/u)),h||(h=Math.floor(window.innerHeight/u)),this.size={x:o,y:h},this.cellSize=u,this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.width=o*this.cellSize,this.height=h*this.cellSize,this.endless=f,this.hue=0,this.hueDirection=1,this.init()}return o()(t,[{key:"init",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px"}},{key:"addSnakes",value:function(t){this.snakes=t}},{key:"draw",value:function(t){this.clearField(),this.drawFood(),this.drawSnakes(),this.app.started||this.drawScore(),this.app.debug&&t&&this.drawDebug(t),this.hue+=this.hueDirection,this.hue>255&&(this.hueDirection*=-1,this.hue=255),this.hue<0&&(this.hueDirection*=-1,this.hue=0)}},{key:"drawScore",value:function(){var t=h.default.score;if(t.length){var e=t[0],i=e.name,n=e.points;Object(l.drawText)(this.ctx,this,{align:l.DRAWTEXT_ALIGN_CENTER,padding:2,bgcolor:"#ffffff",bgAlpha:.75,lines:[{font:"bold 14px Arial",height:14,text:"BEST SCORE",color:"black",baseline:"middle"},{font:"14px Arial",height:14,text:"".concat(i," ").concat(n),color:"black",baseline:"middle"}]})}}},{key:"clearField",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"drawSnakes",value:function(){var t=this;this.snakes.forEach(function(e){return t.drawSnake(e)})}},{key:"drawSnake",value:function(t){var e=this;this.ctx.fillStyle="black",t.body.forEach(function(t){var i=t.coords,n=i.x,s=i.y;e.ctx.fillRect(n,s,e.cellSize,e.cellSize)})}},{key:"drawFood",value:function(){var t=this;this.app.food.forEach(function(e){var i=e.coords,n=i.x,s=i.y;t.ctx.fillStyle="hsl("+t.hue+",100%,50%)",t.ctx.fillRect(n,s,t.cellSize,t.cellSize)})}},{key:"drawDebug",value:function(t){this.ctx.font="bold 10px Arial";var e=t>0?Math.round(1e3/t):"00",i="FPS: ".concat(e,", SCORE: ").concat(this.app.snakes[0].score);this.ctx.fillStyle="black",this.ctx.globalAlpha=.5,this.ctx.fillText(i,this.cellSize,this.height-this.cellSize),this.ctx.globalAlpha=1}}]),t}()},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return v});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(7),c=i.n(a),h=i(16),l=i.n(h),u=i(3),d=i(4),f=i(2),p=i(13),v=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i.speed,r=void 0===n?5:n,o=i.toGrow,a=void 0===o?2:o;s()(this,t),c()(this,"move",function(){if(e.app.state!==u.STATE_RUNNING)return!1;var t=e.head.coords,i=t.x,n=t.y,s=null,r=e.checkReverse()?e.direction:e.controls.direction;switch(r){case d.DIRECTION_LEFT:s=new f.default(i-e.field.cellSize,n);break;case d.DIRECTION_RIGHT:s=new f.default(i+e.field.cellSize,n);break;case d.DIRECTION_UP:s=new f.default(i,n-e.field.cellSize);break;case d.DIRECTION_DOWN:s=new f.default(i,n+e.field.cellSize)}if(e.controls.direction&&(e.app.started||(e.app.started=!0),!e.app.cellIntersectingWithObstacles(s))){var o=e.sideTravel(s);e.direction=r,e.eat(o)}}),this.app=null,this.field=null,this.controls=null,this.body=[],this.baseSpeed=200-10*(r-1),this.minimumSpeed=20,this.direction=null,this.passed=0,this.toGrow=a,this.consumed=0,this.score=0,this.speedEasing=l()(.25,.46,.45,.94)}return o()(t,[{key:"tick",value:function(t){this.passed+=t,this.deTick(this.move)}},{key:"deTick",value:function(t){this.passed>=this.speed&&(this.passed=this.passed-this.speed,t(),this.deTick(t))}},{key:"spawn",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=null!=t&&null!=e?new f.default(t,e):f.default.generate(this.app);this.body.push(new p.default(i))}},{key:"checkReverse",value:function(){return this.direction===d.DIRECTION_LEFT&&this.controls.direction===d.DIRECTION_RIGHT||this.direction===d.DIRECTION_RIGHT&&this.controls.direction===d.DIRECTION_LEFT||this.direction===d.DIRECTION_UP&&this.controls.direction===d.DIRECTION_DOWN||this.direction===d.DIRECTION_DOWN&&this.controls.direction===d.DIRECTION_UP}},{key:"addBody",value:function(t){this.body.unshift(new p.default(t))}},{key:"eat",value:function(t){this.addBody(t),this.feed(t)}},{key:"feed",value:function(t){var e=this.checkFoodInCoords(t);e&&(this.consumed++,this.score+=e.score,this.toGrow=e.power,e.destroy()),this.tailTrimmer()}},{key:"tailTrimmer",value:function(){if(this.toGrow)return this.toGrow--,!1;this.body.pop()}},{key:"checkFoodInCoords",value:function(t){var e=null;return this.app.food.forEach(function(i){e||i.coords.x===t.x&&i.coords.y===t.y&&(e=i)}),e}},{key:"sideTravel",value:function(t){var e,i,n=null;(t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height)&&(t.x<0&&(e=this.field.width-this.field.cellSize),t.y<0&&(i=this.field.height-this.field.cellSize),t.x>=this.field.width&&(e=0),t.y>=this.field.height&&(i=0),n=new f.default(e,i));return n||t}},{key:"speed",get:function(){var t=this.baseSpeed;if(this.consumed){var e=this.speedEasing(this.consumed/50);t=Math.round(this.baseSpeed-(this.baseSpeed-this.minimumSpeed)*e)}return t}},{key:"size",get:function(){return this.body.length}},{key:"head",get:function(){return this.body[0]}}]),t}()},,function(t,e,i){"use strict";i.r(e);var n=i(3),s=i(4),r=i(14),o=i(15),a=document.getElementById("app"),c=new r.default(a,{width:20,height:20,cellSize:10}),h=new s.default,l=new n.default(c,h,{debug:!0});l.meetSnake(new o.default),"visible"!==document.visibilityState?l.start():l.field.drawScore()}]);