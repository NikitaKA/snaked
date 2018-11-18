!function(c){function t(t){for(var e,i,n=t[0],s=t[1],r=t[2],o=0,a=[];o<n.length;o++)i=n[o],u[i]&&a.push(u[i][0]),u[i]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(c[e]=s[e]);for(d&&d(t);a.length;)a.shift()();return l.push.apply(l,r||[]),h()}function h(){for(var t,e=0;e<l.length;e++){for(var i=l[e],n=!0,s=1;s<i.length;s++){var r=i[s];0!==u[r]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=i[0]))}return t}var i={},u={1:0,2:0,3:0,4:0,5:0,6:0,7:0,9:0,10:0,11:0,12:0},l=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=c,o.c=i,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var s=0;s<e.length;s++)t(e[s]);var d=n;l.push([17,0]),h()}([,,function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return c});var n=i(0),s=i.n(n),r=i(1),o=i.n(r);function a(t){var e=Math.round(Math.random()*(t.size.x-1))*t.cellSize,i=Math.round(Math.random()*(t.size.y-1))*t.cellSize;return new c(e,i)}var c=function(){function i(t,e){s()(this,i),this.x=t,this.y=e}return o()(i,null,[{key:"generate",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=a(t.field),n=null;if(!e)for(;!n;)t.coordsIntersectingWithSnakes(i)?i=a(t.field):n=i;return n||i}}]),i}()},function(t,e,i){"use strict";i.r(e),i.d(e,"STATE_INITIALIZED",function(){return l}),i.d(e,"STATE_PAUSED",function(){return d}),i.d(e,"STATE_RUNNING",function(){return f}),i.d(e,"STATE_STOPPED",function(){return p}),i.d(e,"default",function(){return v});var n=i(0),o=i.n(n),s=i(1),a=i.n(s),r=i(7),c=i.n(r),h=i(11),u=i(6),l="STATE_INITIALIZED",d="STATE_PAUSED",f="STATE_RUNNING",p="STATE_STOPPED",v=function(){function r(t,e){var i=this,n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).debug,s=void 0!==n&&n;o()(this,r),c()(this,"tick",function(t){var e=i.setDelta(t);i.update(e),i.render(e),i.onTickEnd(),i.state!==p&&(i.reqAnimationFrame=window.requestAnimationFrame(i.tick))}),this.field=t,this.controls=e,this.snakes=[],this.state=l,this.reqAnimationFrame=null,this.debug=s,this.then=0,this.started=!1,this.gameover=!1,this.onTickEndCallbacks=[],this.food=[],(this.field.app=this).controls.app=this}return a()(r,[{key:"start",value:function(){this.gameover||(this.state===l&&(this.field.addSnakes(this.snakes),this.snakes.forEach(function(t){return t.spawn()})),this.state=f,this.reqAnimationFrame||(this.then=performance.now(),this.reqAnimationFrame=window.requestAnimationFrame(this.tick)))}},{key:"pause",value:function(){this.state=d}},{key:"stop",value:function(){window.cancelAnimationFrame(this.reqAnimationFrame),this.reqAnimationFrame=null,this.state=p}},{key:"meetSnake",value:function(t){t.app=this,t.field=this.field,t.controls=this.controls,this.snakes.push(t)}},{key:"setDelta",value:function(t){var e=t-this.then;return this.then=t,e}},{key:"update",value:function(e){this.generateFood(),this.snakes.forEach(function(t){return t.tick(e)})}},{key:"render",value:function(t){this.field.draw(t)}},{key:"generateFood",value:function(){if(!this.food.length){var t=new h.default(this);this.food.push(t)}}},{key:"cellIntersectingWithObstacles",value:function(t){return this.coordsIntersectingWithSnakes(t)?this.gameOver():!this.field.endless&&(!!this.coorsOutsideField(t)&&this.gameOver())}},{key:"gameOver",value:function(){return this.gameover=!0,this.stop(),this.onTickEnd(this.field.gameOver),u.default.checkScore(this.snakes[0].score),!0}},{key:"onTickEnd",value:function(t){t?this.onTickEndCallbacks.push(t):(this.onTickEndCallbacks.forEach(function(t){return t()}),this.onTickEndCallbacks=[])}},{key:"coorsOutsideField",value:function(t){return t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height}},{key:"coordsIntersectingWithSnakes",value:function(e){var i=!1;return this.snakes.forEach(function(t){i||t.body.forEach(function(t){e.x===t.coords.x&&e.y===t.coords.y&&(i=!0)})}),i}}]),r}()},function(t,e,i){"use strict";i.r(e),i.d(e,"DIRECTION_LEFT",function(){return c}),i.d(e,"DIRECTION_RIGHT",function(){return h}),i.d(e,"DIRECTION_UP",function(){return u}),i.d(e,"DIRECTION_DOWN",function(){return l}),i.d(e,"default",function(){return d});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(3),c="DIRECTION_LEFT",h="DIRECTION_RIGHT",u="DIRECTION_UP",l="DIRECTION_DOWN",d=function(){function t(){s()(this,t),this.app=null,this.direction=null,this.keysPressed={},this.init()}return o()(t,[{key:"init",value:function(){var e=this;window.addEventListener("keydown",function(t){if(e.app.state===a.STATE_PAUSED||e.app.state===a.STATE_STOPPED)return!1;e.keyDown(t)}),window.addEventListener("keyup",function(t){if(e.app.state===a.STATE_PAUSED||e.app.state===a.STATE_STOPPED)return!1;e.keyUp(t)}),window.addEventListener("keypress",function(t){e.appControl(t)}),window.addEventListener("blur",function(){e.app.stop()}),window.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?e.app.start():e.app.stop()}),window.addEventListener("focus",function(){e.app.start()})}},{key:"appControl",value:function(t){switch(t.code){case"Space":switch(this.app.state){case a.STATE_RUNNING:this.app.pause();break;case a.STATE_PAUSED:this.app.start()}break;case"Enter":this.app.state===a.STATE_STOPPED?this.app.start():this.app.stop()}}},{key:"keyDown",value:function(t){this.keysPressed[t.code]=performance.now(),this.selectDirection()}},{key:"keyUp",value:function(t){this.keysPressed[t.code]=0,this.selectDirection()}},{key:"selectDirection",value:function(){var i=this,n=null,s=0;switch(Object.keys(this.keysPressed).forEach(function(t){var e=i.keysPressed[t];(!s&&e||s&&e&&s<e)&&(n=t,s=e)}),n){case"ArrowLeft":this.direction=c;break;case"ArrowRight":this.direction=h;break;case"ArrowUp":this.direction=u;break;case"ArrowDown":this.direction=l}}}]),t}()},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return c});var n=i(0),s=i.n(n),r=i(1),o=i.n(r),a=i(2),c=function(){function e(t){s()(this,e),this.coords=t}return o()(e,null,[{key:"generate",value:function(t){return new e(a.default.generate(t))}}]),e}()},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return o});var n=i(0),s=i.n(n),r=i(1),a=i.n(r),o=function(){function o(){s()(this,o)}return a()(o,null,[{key:"checkScore",value:function(n){if(n){var t=o.score,s=t.length?-1:0;t.forEach(function(t,e){var i=t.points;s<0&&i<n&&(s=e)}),o.addScore(n,s)}}},{key:"addScore",value:function(t,e){var i,n=prompt("Whats your name?");if(n){var s={name:n,points:t,date:new Date},r=o.score;e<0?r.push(s):r.splice(e,0,s),5<r.length&&r.pop(),localStorage.setItem("snaked-score",(i=r,JSON.stringify(i)))}}},{key:"score",get:function(){var t=localStorage.getItem("snaked-score")||"[]",e=null;try{e=JSON.parse(t)}catch(t){e=[]}return e}}]),o}()},,,,,function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return h});var n=i(0),u=i.n(n),s=i(1),r=i.n(s),o=i(8),l=i.n(o),a=i(9),d=i.n(a),c=i(10),f=i.n(c),p=i(2),h=function(t){function h(t){var e,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=i.coords,s=void 0===n?p.default.generate(t):n,r=i.power,o=void 0===r?1:r,a=i.score,c=void 0===a?100:a;return u()(this,h),(e=l()(this,d()(h).call(this,s))).app=t,e.power=o,e.score=c,e}return f()(h,t),r()(h,[{key:"destroy",value:function(){var i=this,n=null;this.app.food.forEach(function(t,e){t===i&&(n=e)}),this.app.food.splice(n,1)}}]),h}(i(5).default)},function(t,e,i){"use strict";i.r(e),i.d(e,"DRAWTEXT_ALIGN_CENTER",function(){return a}),i.d(e,"drawText",function(){return n});var a="center";function n(e,i,t){var n=t.padding||0,s=0,r=0;switch(t.lines.forEach(function(t){e.font=t.font,t.width=e.measureText(t.text).width,t.width>s&&(s=t.width),r+=t.height}),e.fillStyle=t.bgcolor,e.globalAlpha=t.bgAlpha||1,t.align){case a:e.save(),e.translate(0,(i.height-r-2*n)/2),e.fillRect(i.width/2-s/2-n,0,s+2*n,r+2*n),e.globalAlpha=t.alpha||1;var o=n;t.lines.forEach(function(t){e.textBaseline=t.baseline||"middle",e.fillStyle=t.color||"black",e.font=t.font,e.fillText(t.text,i.width/2-t.width/2,o+t.height/2),o+=t.height}),e.restore()}}},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return l});var n=i(0),s=i.n(n),r=i(8),o=i.n(r),a=i(9),c=i.n(a),h=i(10),u=i.n(h),l=function(t){function e(){return s()(this,e),o()(this,c()(e).apply(this,arguments))}return u()(e,t),e}(i(5).default)},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return h});var n=i(0),d=i.n(n),s=i(1),r=i.n(s),o=i(7),f=i.n(o),a=i(6),c=i(12),h=function(){function l(t){var e=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=i.width,s=void 0===n?0:n,r=i.height,o=void 0===r?0:r,a=i.cellSize,c=void 0===a?10:a,h=i.endless,u=void 0!==h&&h;i.debug;d()(this,l),f()(this,"gameOver",function(){e.clearField(),e.draw();var t="GAME OVER! SCORE: ".concat(e.app.snakes[0].score);e.ctx.font="bold ".concat(10,"px Arial"),e.ctx.fillStyle="white",e.ctx.fillRect(e.width/2-e.ctx.measureText(t).width/2-2,e.height/2-5-2,e.ctx.measureText(t).width+4,14),e.ctx.textBaseline="middle",e.ctx.fillStyle="black",e.ctx.fillText(t,e.width/2-e.ctx.measureText(t).width/2,e.height/2)}),this.app=null,s||(s=Math.floor(window.innerWidth/c)),o||(o=Math.floor(window.innerHeight/c)),this.size={x:s,y:o},this.cellSize=c,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.width=s*this.cellSize,this.height=o*this.cellSize,this.endless=u,this.hue=0,this.hueDirection=1,this.init()}return r()(l,[{key:"init",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px"}},{key:"addSnakes",value:function(t){this.snakes=t}},{key:"draw",value:function(t){this.clearField(),this.drawFood(),this.drawSnakes(),this.app.started||this.drawScore(),this.app.debug&&t&&this.drawDebug(t),this.hue+=this.hueDirection,255<this.hue&&(this.hueDirection*=-1,this.hue=255),this.hue<0&&(this.hueDirection*=-1,this.hue=0)}},{key:"drawScore",value:function(){var t=a.default.score;if(t.length){var n=[];t.forEach(function(t){var e=t.name,i=t.points;n.push({font:"14px Arial",height:14,text:"".concat(e," ").concat(i)})}),Object(c.drawText)(this.ctx,this,{align:c.DRAWTEXT_ALIGN_CENTER,padding:2,bgcolor:"#ffffff",bgAlpha:.75,lines:[{font:"bold 14px Arial",height:14,text:"BEST SCORES",color:"black",baseline:"middle"}].concat(n)})}}},{key:"clearField",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"drawSnakes",value:function(){var e=this;this.snakes.forEach(function(t){return e.drawSnake(t)})}},{key:"drawSnake",value:function(t){var s=this;this.ctx.fillStyle="black",t.body.forEach(function(t){var e=t.coords,i=e.x,n=e.y;s.ctx.fillRect(i,n,s.cellSize,s.cellSize)})}},{key:"drawFood",value:function(){var s=this;this.app.food.forEach(function(t){var e=t.coords,i=e.x,n=e.y;s.ctx.fillStyle="hsl("+s.hue+",100%,50%)",s.ctx.fillRect(i,n,s.cellSize,s.cellSize)})}},{key:"drawDebug",value:function(t){this.ctx.font="bold 10px Arial";var e=0<t?Math.round(1e3/t):"00",i="FPS: ".concat(e,", SCORE: ").concat(this.app.snakes[0].score);this.ctx.fillStyle="black",this.ctx.globalAlpha=.5,this.ctx.fillText(i,this.cellSize,this.height-this.cellSize),this.ctx.globalAlpha=1}}]),l}()},function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return v});var n=i(0),a=i.n(n),s=i(1),o=i.n(s),r=i(7),c=i.n(r),h=i(16),u=i.n(h),l=i(3),d=i(4),f=i(2),p=i(13),v=function(){function r(){var o=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.speed,i=void 0===e?5:e,n=t.toGrow,s=void 0===n?2:n;a()(this,r),c()(this,"move",function(){if(o.app.state!==l.STATE_RUNNING)return!1;var t=o.head.coords,e=t.x,i=t.y,n=null,s=o.checkReverse()?o.direction:o.controls.direction;switch(s){case d.DIRECTION_LEFT:n=new f.default(e-o.field.cellSize,i);break;case d.DIRECTION_RIGHT:n=new f.default(e+o.field.cellSize,i);break;case d.DIRECTION_UP:n=new f.default(e,i-o.field.cellSize);break;case d.DIRECTION_DOWN:n=new f.default(e,i+o.field.cellSize)}if(o.controls.direction&&(o.app.started||(o.app.started=!0),!o.app.cellIntersectingWithObstacles(n))){var r=o.sideTravel(n);o.direction=s,o.eat(r)}}),this.app=null,this.field=null,this.controls=null,this.body=[],this.baseSpeed=200-10*(i-1),this.minimumSpeed=20,this.direction=null,this.passed=0,this.toGrow=s,this.consumed=0,this.score=0,this.speedEasing=u()(.25,.46,.45,.94)}return o()(r,[{key:"tick",value:function(t){this.passed+=t,this.deTick(this.move)}},{key:"deTick",value:function(t){this.passed>=this.speed&&(this.passed=this.passed-this.speed,t(),this.deTick(t))}},{key:"spawn",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,i=null!=t&&null!=e?new f.default(t,e):f.default.generate(this.app);this.body.push(new p.default(i))}},{key:"checkReverse",value:function(){return this.direction===d.DIRECTION_LEFT&&this.controls.direction===d.DIRECTION_RIGHT||this.direction===d.DIRECTION_RIGHT&&this.controls.direction===d.DIRECTION_LEFT||this.direction===d.DIRECTION_UP&&this.controls.direction===d.DIRECTION_DOWN||this.direction===d.DIRECTION_DOWN&&this.controls.direction===d.DIRECTION_UP}},{key:"addBody",value:function(t){this.body.unshift(new p.default(t))}},{key:"eat",value:function(t){this.addBody(t),this.feed(t)}},{key:"feed",value:function(t){var e=this.checkFoodInCoords(t);e&&(this.consumed++,this.score+=e.score,this.toGrow=e.power,e.destroy()),this.tailTrimmer()}},{key:"tailTrimmer",value:function(){if(this.toGrow)return this.toGrow--,!1;this.body.pop()}},{key:"checkFoodInCoords",value:function(e){var i=null;return this.app.food.forEach(function(t){i||t.coords.x===e.x&&t.coords.y===e.y&&(i=t)}),i}},{key:"sideTravel",value:function(t){var e,i,n=null;(t.x<0||t.x>=this.field.width||t.y<0||t.y>=this.field.height)&&(t.x<0&&(e=this.field.width-this.field.cellSize),t.y<0&&(i=this.field.height-this.field.cellSize),t.x>=this.field.width&&(e=0),t.y>=this.field.height&&(i=0),n=new f.default(e,i));return n||t}},{key:"speed",get:function(){var t=this.baseSpeed;if(this.consumed){var e=this.speedEasing(this.consumed/50);t=Math.round(this.baseSpeed-(this.baseSpeed-this.minimumSpeed)*e)}return t}},{key:"size",get:function(){return this.body.length}},{key:"head",get:function(){return this.body[0]}}]),r}()},,function(t,e,i){"use strict";i.r(e);var n=i(3),s=i(4),r=i(14),o=i(15),a=document.getElementById("app"),c=new r.default(a,{width:20,height:20,cellSize:10}),h=new s.default,u=new n.default(c,h,{debug:!0});u.meetSnake(new o.default),u.start()}]);