!function(u){function e(e){for(var t,i,n=e[0],r=e[1],s=e[2],o=0,a=[];o<n.length;o++)i=n[o],l[i]&&a.push(l[i][0]),l[i]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t]);for(h&&h(e);a.length;)a.shift()();return d.push.apply(d,s||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var i=d[t],n=!0,r=1;r<i.length;r++){var s=i[r];0!==l[s]&&(n=!1)}n&&(d.splice(t--,1),e=o(o.s=i[0]))}return e}var i={},l={10:0,2:0,3:0,4:0,5:0,7:0,9:0,11:0},d=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=u,o.c=i,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var h=n;d.push([17,0]),c()}([,,,,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return u});var n=i(1),r=i.n(n),s=i(2),o=i.n(s);function a(e){var t=Math.round(Math.random()*(e.sizeX-1))*e.cellSize,i=Math.round(Math.random()*(e.sizeY-1))*e.cellSize;return new u(t,i)}var u=function(){function i(e,t){r()(this,i),this.x=e,this.y=t}return o()(i,null,[{key:"generate",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=a(e),n=null;if(!t)for(;!n;)e.coordsIntersectingWithSnakes(i)?i=a(e):n=i;return n||i}}]),i}()},function(e,t,i){"use strict";i.r(t),i.d(t,"DIRECTION_LEFT",function(){return a}),i.d(t,"DIRECTION_RIGHT",function(){return u}),i.d(t,"DIRECTION_UP",function(){return c}),i.d(t,"DIRECTION_DOWN",function(){return h}),i.d(t,"default",function(){return l});var n=i(1),d=i.n(n),r=i(2),s=i.n(r),o=i(6),a="DIRECTION_LEFT",u="DIRECTION_RIGHT",c="DIRECTION_UP",h="DIRECTION_DOWN",l=function(){function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=t.left,n=void 0===i?"ArrowLeft":i,r=t.right,s=void 0===r?"ArrowRight":r,o=t.up,a=void 0===o?"ArrowUp":o,u=t.down,c=void 0===u?"ArrowDown":u;d()(this,l),this.app=e,this.direction=null,this.keysPressed={},this.kLeft=n,this.kRight=s,this.kUp=a,this.kDown=c,this.init()}return s()(l,[{key:"init",value:function(){var t=this;window.addEventListener("keydown",function(e){if(t.app.state===o.STATE_PAUSED||t.app.state===o.STATE_STOPPED)return!1;t.keyDown(e)}),window.addEventListener("keyup",function(e){if(t.app.state===o.STATE_PAUSED||t.app.state===o.STATE_STOPPED)return!1;t.keyUp(e)})}},{key:"keyDown",value:function(e){this.keysPressed[e.code]=performance.now(),this.selectDirection()}},{key:"keyUp",value:function(e){this.keysPressed[e.code]=0,this.selectDirection()}},{key:"selectDirection",value:function(){var i=this,n=null,r=0;switch(Object.keys(this.keysPressed).forEach(function(e){var t=i.keysPressed[e];(!r&&t||r&&t&&r<t)&&(n=e,r=t)}),n){case this.kLeft:this.direction=a;break;case this.kRight:this.direction=u;break;case this.kUp:this.direction=c;break;case this.kDown:this.direction=h}}}]),l}()},function(e,t,i){"use strict";i.r(t),i.d(t,"STATE_INITIALIZED",function(){return f}),i.d(t,"STATE_PAUSED",function(){return v}),i.d(t,"STATE_RUNNING",function(){return p}),i.d(t,"STATE_STOPPED",function(){return k}),i.d(t,"default",function(){return w});var n=i(1),s=i.n(n),r=i(2),o=i.n(r),a=i(3),u=i.n(a),c=i(0),l=i.n(c),d=i(8),h=i(14),f="STATE_INITIALIZED",v="STATE_PAUSED",p="STATE_RUNNING",k="STATE_STOPPED",w=function(){function r(e){var i=this,t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).debug,n=void 0!==t&&t;s()(this,r),y.set(this,{writable:!0,value:!1}),T.set(this,{writable:!0,value:null}),m.set(this,{writable:!0,value:f}),S.set(this,{writable:!0,value:0}),g.set(this,{writable:!0,value:[]}),E.set(this,{writable:!0,value:[]}),I.set(this,{writable:!0,value:function(){l()(i,E).app=i,window.addEventListener("keypress",function(e){l()(i,b).call(i,e)}),window.addEventListener("blur",function(){i.stop()}),window.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?i.start():i.stop()}),window.addEventListener("focus",function(){i.start()})}}),b.set(this,{writable:!0,value:function(e){switch(e.code){case"Space":switch(l()(i,m)){case p:i.pause();break;case v:i.start()}break;case"Enter":l()(i,E).addSnake()}}}),D.set(this,{writable:!0,value:function(e){var t=l()(i,O).call(i,e);l()(i,_).call(i,t),l()(i,N).call(i,t),l()(i,R).call(i),l()(i,m)!==k&&u()(i,T,window.requestAnimationFrame(l()(i,D)))}}),O.set(this,{writable:!0,value:function(e){var t=e-l()(i,S);return u()(i,S,e),t}}),_.set(this,{writable:!0,value:function(e){l()(i,E).update(e)}}),N.set(this,{writable:!0,value:function(e){l()(i,E).draw(e)}}),P.set(this,{writable:!0,value:function(e){return 1<l()(i,E).snakes.length?l()(i,E).killSnake(e):(u()(i,y,!0),i.stop(),l()(i,R).call(i,l()(i,E).gameOver),h.default.checkScore(l()(i,E).snakes[0].score)),!0}}),R.set(this,{writable:!0,value:function(e){e?l()(i,g).push(e):(l()(i,g).forEach(function(e){return e()}),u()(i,g,[]))}}),this.debug=n,u()(this,E,e),l()(this,I).call(this)}return o()(r,[{key:"start",value:function(){l()(this,y)||(u()(this,m,p),l()(this,T)||(u()(this,S,performance.now()),u()(this,T,window.requestAnimationFrame(l()(this,D)))))}},{key:"pause",value:function(){u()(this,m,v)}},{key:"stop",value:function(){window.cancelAnimationFrame(l()(this,T)),u()(this,T,null),u()(this,m,k)}},{key:"cellIntersectingWithObstacles",value:function(e,t){var i=l()(this,E).getCell(t);return d.default.isBody(i)?l()(this,P).call(this,e):!l()(this,E).endless&&(!!this.coorsOutsideField(t)&&l()(this,P).call(this,e))}},{key:"coorsOutsideField",value:function(e){return e.x<0||e.x>=l()(this,E).width||e.y<0||e.y>=l()(this,E).height}},{key:"isGameOver",get:function(){return l()(this,y)}},{key:"state",get:function(){return l()(this,m)}}]),r}(),y=new WeakMap,T=new WeakMap,m=new WeakMap,S=new WeakMap,g=new WeakMap,E=new WeakMap,I=new WeakMap,b=new WeakMap,D=new WeakMap,O=new WeakMap,_=new WeakMap,N=new WeakMap,P=new WeakMap,R=new WeakMap},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return u});var n=i(1),r=i.n(n),s=i(2),o=i.n(s),a=i(4),u=function(){function n(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).animationSpeed,i=void 0===t?0:t;r()(this,n),this.coords=e,this.msPassed=0,this.animationSpeed=i}return o()(n,[{key:"tick",value:function(e){this.msPassed+=e,this.animationSpeed?this.deTick(this.update):this.update()}},{key:"deTick",value:function(e){this.msPassed>=this.animationSpeed&&(this.msPassed=this.msPassed-this.animationSpeed,e(),this.deTick(e))}},{key:"update",value:function(){}}],[{key:"generate",value:function(e){return new n(a.default.generate(e))}}]),n}()},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return f});var n=i(1),r=i.n(n),s=i(2),o=i.n(s),a=i(9),u=i.n(a),c=i(10),l=i.n(c),d=i(11),h=i.n(d),f=function(e){function n(e,t){var i;return r()(this,n),(i=u()(this,l()(n).call(this,t))).snake=e,i}return h()(n,e),o()(n,null,[{key:"isBody",value:function(e){return e instanceof n}}]),n}(i(7).default)},,,,,,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return a});var n=i(1),r=i.n(n),s=i(2),o=i.n(s),a=function(){function s(){r()(this,s)}return o()(s,null,[{key:"checkScore",value:function(n){if(n){var e=s.score,r=e.length?-1:0;e.forEach(function(e,t){var i=e.points;r<0&&i<n&&(r=t)}),s.addScore(n,r)}}},{key:"addScore",value:function(e,t){var i=prompt("Whats your name?");if(i){var n={name:i,points:e,date:new Date},r=s.score;t<0?r.push(n):r.splice(t,0,n),5<r.length&&r.pop(),localStorage.setItem("snaked-score",JSON.stringify(r))}}},{key:"score",get:function(){var e=localStorage.getItem("snaked-score")||"[]",t=null;try{t=JSON.parse(e)}catch(e){t=[]}return t}}]),s}()},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return w});var n=i(1),c=i.n(n),r=i(2),s=i.n(r),o=i(9),l=i.n(o),a=i(10),d=i.n(a),u=i(11),h=i.n(u),f=i(13),v=i.n(f),p=i(12),k=i.n(p),w=function(e){function u(e,t){var i,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.power,s=void 0===r?1:r,o=n.score,a=void 0===o?100:o;return c()(this,u),i=l()(this,d()(u).call(this,t)),k()(v()(v()(i)),"update",function(){i.hue+=i.hueStep*i.hueDirection,255<i.hue&&(i.hueDirection*=-1,i.hue=255),i.hue<0&&(i.hueDirection*=-1,i.hue=0),i.currentZoom+=i.zoomStep*i.zoomDirection,(i.zoomDirection&&i.currentZoom>=i.zoom||i.zoomDirection&&i.currentZoom<=-i.zoom)&&(i.zoomDirection=-1*i.zoomDirection),i.currentDegree+=i.degreeStep,i.currentDegree>=i.rotate&&(i.currentDegree=0)}),k()(v()(v()(i)),"draw",function(e){e.save(),e.translate(i.coords.x+i.field.cellSize/2,i.coords.y+i.field.cellSize/2),e.rotate(i.currentDegree*Math.PI/180),e.translate(-i.coords.x-i.field.cellSize/2,-i.coords.y-i.field.cellSize/2),e.fillStyle="hsl("+i.hue+",100%,50%)",e.fillRect(i.coords.x-i.currentZoom,i.coords.y-i.currentZoom,i.field.cellSize+2*i.currentZoom,i.field.cellSize+2*i.currentZoom),e.restore()}),i.field=e,i.power=s,i.score=a,i.hue=0,i.hueDirection=1,i.hueStep=3,i.zoom=1,i.currentZoom=0,i.zoomStep=.1,i.zoomDirection=1,i.rotate=360,i.currentDegree=0,i.degreeStep=1,i}return h()(u,e),s()(u,[{key:"consume",value:function(){this.destroy()}},{key:"destroy",value:function(){var i=this,n=null;this.field.food.forEach(function(e,t){e===i&&(n=t)});var e=this.field.food.splice(n,1)[0];this.field.deleteCell(e)}}],[{key:"isFood",value:function(e){return e instanceof u}}]),u}(i(7).default)},,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return l});var n=i(1),h=i.n(n),r=i(2),s=i.n(r),o=i(12),f=i.n(o),a=i(18),v=i.n(a),p=i(6),k=i(5),w=i(4),u=i(8),c=i(15),l=function(){function d(e,t,i){var o=this,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=n.speed,s=void 0===r?5:r,a=n.toGrow,u=void 0===a?2:a,c=n.color,l=void 0===c?"black":c;h()(this,d),f()(this,"move",function(){if(o.app.state!==p.STATE_RUNNING)return!1;var e=o.head.coords,t=e.x,i=e.y,n=null,r=o.checkReverse()?o.direction:o.controls.direction;switch(r){case k.DIRECTION_LEFT:n=new w.default(t-o.field.cellSize,i);break;case k.DIRECTION_RIGHT:n=new w.default(t+o.field.cellSize,i);break;case k.DIRECTION_UP:n=new w.default(t,i-o.field.cellSize);break;case k.DIRECTION_DOWN:n=new w.default(t,i+o.field.cellSize)}if(o.controls.direction&&!o.app.cellIntersectingWithObstacles(o,n)){var s=o.sideTravel(n);o.direction=r,o.eat(s)}}),this.app=e,this.field=t,this.controls=i,this.body=[],this.baseSpeed=200-10*(s-1),this.minimumSpeed=20,this.direction=null,this.passed=0,this.toGrow=u,this.consumed=0,this.score=0,this.color=l,this.speedEasing=v()(.25,.46,.45,.94)}return s()(d,[{key:"tick",value:function(e){this.passed+=e,this.deTick(this.move)}},{key:"deTick",value:function(e){this.passed>=this.speed&&(this.passed=this.passed-this.speed,e(),this.deTick(e))}},{key:"spawn",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,i=null!=e&&null!=t?new w.default(e,t):w.default.generate(this.field),n=new u.default(this,i);this.body.push(n),this.field.writeCell(n)}},{key:"checkReverse",value:function(){return this.direction===k.DIRECTION_LEFT&&this.controls.direction===k.DIRECTION_RIGHT||this.direction===k.DIRECTION_RIGHT&&this.controls.direction===k.DIRECTION_LEFT||this.direction===k.DIRECTION_UP&&this.controls.direction===k.DIRECTION_DOWN||this.direction===k.DIRECTION_DOWN&&this.controls.direction===k.DIRECTION_UP}},{key:"addBody",value:function(e){var t=new u.default(this,e);this.body.unshift(t),this.field.writeCell(t),this.tailTrimmer()}},{key:"eat",value:function(e){this.feed(e),this.addBody(e)}},{key:"feed",value:function(e){var t=this.field.getCell(e);c.default.isFood(t)&&(this.consumed++,this.score+=t.score,this.toGrow=t.power,t.consume())}},{key:"tailTrimmer",value:function(){if(this.toGrow)return this.toGrow--,!1;var e=this.body.pop();this.field.deleteCell(e)}},{key:"sideTravel",value:function(e){var t,i,n=null;(e.x<0||e.x>=this.field.width||e.y<0||e.y>=this.field.height)&&(e.x<0&&(t=this.field.width-this.field.cellSize),e.y<0&&(i=this.field.height-this.field.cellSize),e.x>=this.field.width&&(t=0),e.y>=this.field.height&&(i=0),n=new w.default(t,i));return n||e}},{key:"destroy",value:function(){var t=this;this.body.forEach(function(e){t.field.deleteCell(e)})}},{key:"speed",get:function(){var e=this.baseSpeed;if(this.consumed){var t=this.speedEasing(this.consumed/50);e=Math.round(this.baseSpeed-(this.baseSpeed-this.minimumSpeed)*t)}return e}},{key:"size",get:function(){return this.body.length}},{key:"head",get:function(){return this.body[0]}}]),d}()}]);