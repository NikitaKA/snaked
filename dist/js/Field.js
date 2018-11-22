!function(l){function e(e){for(var t,i,n=e[0],s=e[1],a=e[2],o=0,r=[];o<n.length;o++)i=n[o],h[i]&&r.push(h[i][0]),h[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(l[t]=s[t]);for(d&&d(e);r.length;)r.shift()();return u.push.apply(u,a||[]),c()}function c(){for(var e,t=0;t<u.length;t++){for(var i=u[t],n=!0,s=1;s<i.length;s++){var a=i[s];0!==h[a]&&(n=!1)}n&&(u.splice(t--,1),e=o(o.s=i[0]))}return e}var i={},h={6:0,2:0,3:0,4:0,5:0,7:0,9:0,10:0,11:0,12:0,13:0,14:0},u=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=i,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var s=0;s<t.length;s++)e(t[s]);var d=n;u.push([22,0]),c()}([,,,,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return l});var n=i(2),s=i.n(n),a=i(3),o=i.n(a);function r(e){var t=Math.round(Math.random()*(e.sizeX-1))*e.cellSize,i=Math.round(Math.random()*(e.sizeY-1))*e.cellSize;return new l(t,i)}var l=function(){function i(e,t){s()(this,i),this.x=e,this.y=t}return o()(i,null,[{key:"generate",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=r(e),n=null;if(!t)for(;!n;)e.getCell(i)?i=r(e):n=i;return n||i}}]),i}()},function(e,t,i){"use strict";i.r(t),i.d(t,"DIRECTION_LEFT",function(){return c}),i.d(t,"DIRECTION_RIGHT",function(){return h}),i.d(t,"DIRECTION_UP",function(){return u}),i.d(t,"DIRECTION_DOWN",function(){return d}),i.d(t,"CONTROLS_ARROWS",function(){return f}),i.d(t,"CONTROLS_WSAD",function(){return o}),i.d(t,"default",function(){return v});var n=i(2),r=i.n(n),s=i(3),a=i.n(s),l=i(8),c="DIRECTION_LEFT",h="DIRECTION_RIGHT",u="DIRECTION_UP",d="DIRECTION_DOWN",f={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},o={left:"KeyA",right:"KeyD",up:"KeyW",down:"KeyS"},v=function(){function o(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:f,i=t.left,n=t.right,s=t.up,a=t.down;r()(this,o),this.app=e,this.direction=null,this.keysPressed={},this.kLeft=i,this.kRight=n,this.kUp=s,this.kDown=a,this.init()}return a()(o,[{key:"init",value:function(){var t=this;window.addEventListener("keydown",function(e){if(t.app.state===l.STATE_PAUSED||t.app.state===l.STATE_STOPPED)return!1;t.keyDown(e)}),window.addEventListener("keyup",function(e){if(t.app.state===l.STATE_PAUSED||t.app.state===l.STATE_STOPPED)return!1;t.keyUp(e)})}},{key:"keyDown",value:function(e){this.keysPressed[e.code]=performance.now(),this.selectDirection()}},{key:"keyUp",value:function(e){this.keysPressed[e.code]=0,this.selectDirection()}},{key:"selectDirection",value:function(){var i=this,n=null,s=0;switch(Object.keys(this.keysPressed).forEach(function(e){var t=i.keysPressed[e];(!s&&t||s&&t&&s<t)&&(n=e,s=t)}),n){case this.kLeft:this.direction=c;break;case this.kRight:this.direction=h;break;case this.kUp:this.direction=u;break;case this.kDown:this.direction=d}}}]),o}()},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return l});var n=i(2),s=i.n(n),a=i(3),o=i.n(a),r=i(4),l=function(){function n(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).animationSpeed,i=void 0===t?0:t;s()(this,n),this.coords=e,this.msPassed=0,this.animationSpeed=i}return o()(n,[{key:"tick",value:function(e){this.msPassed+=e,this.animationSpeed?this.deTick(this.update):this.update()}},{key:"deTick",value:function(e){this.msPassed>=this.animationSpeed&&(this.msPassed=this.msPassed-this.animationSpeed,e(),this.deTick(e))}},{key:"update",value:function(){}}],[{key:"generate",value:function(e){return new n(r.default.generate(e))}}]),n}()},function(e,t,i){"use strict";i.r(t),i.d(t,"DRAWTEXT_ALIGN_CENTER",function(){return o}),i.d(t,"drawText",function(){return n});var o="center";function n(t,e){var i=e.padding||0,n=0,s=0;switch(e.lines.forEach(function(e){t.font=e.font,e.paddingBottom=e.paddingBottom||0,e.width=t.measureText(e.text).width,e.width>n&&(n=e.width),s+=e.height+e.paddingBottom}),t.save(),e.align){case o:t.translate(0,(t.canvas.height-s-2*i)/2),t.fillStyle=e.bgcolor,t.globalAlpha=e.bgAlpha||1,t.fillRect(t.canvas.width/2-n/2-i,0,n+2*i,s+2*i),t.globalAlpha=e.alpha||1;var a=i;e.lines.forEach(function(e){t.textBaseline=e.baseline||"middle",t.fillStyle=e.color||"black",t.font=e.font,t.fillText(e.text,t.canvas.width/2-e.width/2,a+e.height/2),a+=e.height+e.paddingBottom})}t.restore()}},function(e,t,i){"use strict";i.r(t),i.d(t,"STATE_INITIALIZED",function(){return v}),i.d(t,"STATE_PAUSED",function(){return p}),i.d(t,"STATE_RUNNING",function(){return w}),i.d(t,"STATE_STOPPED",function(){return k}),i.d(t,"default",function(){return y});var n=i(2),a=i.n(n),s=i(3),o=i.n(s),r=i(1),l=i.n(r),c=i(0),h=i.n(c),u=i(15),d=i(11),f=i(16),v="STATE_INITIALIZED",p="STATE_PAUSED",w="STATE_RUNNING",k="STATE_STOPPED",y=function(){function s(e){var i=this,t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).debug,n=void 0!==t&&t;a()(this,s),g.set(this,{writable:!0,value:!1}),S.set(this,{writable:!0,value:null}),b.set(this,{writable:!0,value:v}),T.set(this,{writable:!0,value:0}),E.set(this,{writable:!0,value:[]}),m.set(this,{writable:!0,value:null}),D.set(this,{writable:!0,value:function(){i.field.app=i,window.addEventListener("keypress",function(e){h()(i,O).call(i,e)}),window.addEventListener("blur",function(){i.stop()}),window.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?i.start():i.stop()}),window.addEventListener("focus",function(){i.start()}),h()(i,x).call(i)}}),x.set(this,{writable:!0,value:function(){h()(i,m).set({title:"MAIN MENU",options:[{text:"Player 1",func:function(){i.field.addSnake(),h()(i,I).call(i)}},{text:"Player 2",func:function(){i.field.addSnake(),i.field.addSnake(),h()(i,I).call(i)}},{text:"Show scores",func:function(){i.field.showScores=!0,h()(i,I).call(i)}}]}),h()(i,m).show()}}),I.set(this,{writable:!0,value:function(){h()(i,m).hide()}}),O.set(this,{writable:!0,value:function(e){switch(e.code){case"Space":switch(h()(i,b)){case w:i.pause();break;case p:i.start()}}}}),A.set(this,{writable:!0,value:function(e){var t=h()(i,R).call(i,e);h()(i,N).call(i,t),h()(i,_).call(i,t),h()(i,W).call(i),h()(i,b)!==k&&l()(i,S,window.requestAnimationFrame(h()(i,A)))}}),R.set(this,{writable:!0,value:function(e){var t=e-h()(i,T);return l()(i,T,e),t}}),N.set(this,{writable:!0,value:function(e){i.field.tick(e),h()(i,m).tick(e)}}),_.set(this,{writable:!0,value:function(e){i.field.draw(e),h()(i,m).draw(e)}}),z.set(this,{writable:!0,value:function(e){return 1<i.field.snakes.length?i.field.killSnake(e):(l()(i,g,!0),i.stop(),h()(i,W).call(i,i.field.gameOver),u.default.checkScore(i.field.snakes[0].score)),!0}}),W.set(this,{writable:!0,value:function(e){e?h()(i,E).push(e):(h()(i,E).forEach(function(e){return e()}),l()(i,E,[]))}}),this.field=e,this.debug=n,l()(this,m,new f.default(this.field.ctx)),h()(this,D).call(this)}return o()(s,[{key:"start",value:function(){h()(this,g)||(l()(this,b,w),h()(this,S)||(l()(this,T,performance.now()),l()(this,S,window.requestAnimationFrame(h()(this,A)))))}},{key:"pause",value:function(){l()(this,b,p)}},{key:"stop",value:function(){window.cancelAnimationFrame(h()(this,S)),l()(this,S,null),l()(this,b,k)}},{key:"cellIntersectingWithObstacles",value:function(e,t){var i=this.field.getCell(t);return i&&!d.default.isFood(i)?h()(this,z).call(this,e):!this.field.endless&&(!!this.coorsOutsideField(t)&&h()(this,z).call(this,e))}},{key:"coorsOutsideField",value:function(e){return e.x<0||e.x>=this.field.width||e.y<0||e.y>=this.field.height}},{key:"isGameOver",get:function(){return h()(this,g)}},{key:"state",get:function(){return h()(this,b)}}]),s}(),g=new WeakMap,S=new WeakMap,b=new WeakMap,T=new WeakMap,E=new WeakMap,m=new WeakMap,D=new WeakMap,x=new WeakMap,I=new WeakMap,O=new WeakMap,A=new WeakMap,R=new WeakMap,N=new WeakMap,_=new WeakMap,z=new WeakMap,W=new WeakMap},,,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return k});var n=i(2),c=i.n(n),s=i(3),a=i.n(s),o=i(12),h=i.n(o),r=i(13),u=i.n(r),l=i(14),d=i.n(l),f=i(9),v=i.n(f),p=i(10),w=i.n(p),k=function(e){function l(e,t){var i,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},s=n.power,a=void 0===s?1:s,o=n.score,r=void 0===o?100:o;return c()(this,l),i=h()(this,u()(l).call(this,t)),w()(v()(v()(i)),"update",function(){i.hue+=i.hueStep*i.hueDirection,255<i.hue&&(i.hueDirection*=-1,i.hue=255),i.hue<0&&(i.hueDirection*=-1,i.hue=0),i.currentZoom+=i.zoomStep*i.zoomDirection,(i.zoomDirection&&i.currentZoom>=i.zoom||i.zoomDirection&&i.currentZoom<=-i.zoom)&&(i.zoomDirection=-1*i.zoomDirection),i.currentDegree+=i.degreeStep,i.currentDegree>=i.rotate&&(i.currentDegree=0)}),w()(v()(v()(i)),"draw",function(e){e.save(),e.translate(i.coords.x+i.field.cellSize/2,i.coords.y+i.field.cellSize/2),e.rotate(i.currentDegree*Math.PI/180),e.translate(-i.coords.x-i.field.cellSize/2,-i.coords.y-i.field.cellSize/2),e.fillStyle="hsl("+i.hue+",100%,50%)",e.fillRect(i.coords.x-i.currentZoom,i.coords.y-i.currentZoom,i.field.cellSize+2*i.currentZoom,i.field.cellSize+2*i.currentZoom),e.restore()}),i.field=e,i.power=a,i.score=r,i.hue=0,i.hueDirection=1,i.hueStep=3,i.zoom=1,i.currentZoom=0,i.zoomStep=.1,i.zoomDirection=1,i.rotate=360,i.currentDegree=0,i.degreeStep=1,i}return d()(l,e),a()(l,[{key:"consume",value:function(){this.destroy()}},{key:"destroy",value:function(){var i=this,n=null;this.field.food.forEach(function(e,t){e===i&&(n=t)});var e=this.field.food.splice(n,1)[0];this.field.deleteCell(e)}}],[{key:"isFood",value:function(e){return e instanceof l}}]),l}(i(6).default)},,,,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return r});var n=i(2),s=i.n(n),a=i(3),o=i.n(a),r=function(){function a(){s()(this,a)}return o()(a,null,[{key:"checkScore",value:function(n){if(n){var e=a.score,s=e.length?-1:0;e.forEach(function(e,t){var i=e.points;s<0&&i<n&&(s=t)}),a.addScore(n,s)}}},{key:"addScore",value:function(e,t){var i=prompt("Whats your name?");if(i){var n={name:i,points:e,date:new Date},s=a.score;t<0?s.push(n):s.splice(t,0,n),5<s.length&&s.pop(),localStorage.setItem("snaked-score",JSON.stringify(s))}}},{key:"score",get:function(){var e=localStorage.getItem("snaked-score")||"[]",t=null;try{t=JSON.parse(e)}catch(e){t=[]}return t}}]),a}()},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return v});var n=i(18),a=i.n(n),s=i(2),o=i.n(s),r=i(3),l=i.n(r),c=i(0),h=i.n(c),u=i(1),d=i.n(u),f=i(7),v=function(){function s(e){var t=this,i=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).animationSpeed,n=void 0===i?0:i;o()(this,s),p.set(this,{writable:!0,value:null}),w.set(this,{writable:!0,value:""}),k.set(this,{writable:!0,value:[]}),y.set(this,{writable:!0,value:0}),g.set(this,{writable:!0,value:!1}),S.set(this,{writable:!0,value:0}),b.set(this,{writable:!0,value:0}),T.set(this,{writable:!0,value:1}),E.set(this,{writable:!0,value:1}),m.set(this,{writable:!0,value:function(e){h()(t,y)>=t.animationSpeed&&(d()(t,y,h()(t,y)-t.animationSpeed),e(),h()(t,m).call(t,e))}}),D.set(this,{writable:!0,value:function(){d()(t,b,h()(t,b)+h()(t,E)*h()(t,T)),255<h()(t,b)&&(d()(t,T,-1*h()(t,T)),d()(t,b,255)),h()(t,b)<0&&(d()(t,T,-1*h()(t,T)),d()(t,b,0)),h()(t,k)[h()(t,S)].color="hsl(".concat(h()(t,b),",100%,50%)")}}),d()(this,p,e),this.animationSpeed=n,this.init()}return l()(s,[{key:"init",value:function(){var t=this;window.addEventListener("keypress",function(e){t.keyPress(e)}),window.addEventListener("keydown",function(e){t.keyDown(e)})}},{key:"keyPress",value:function(e){if(h()(this,g))switch(e.code){case"Enter":h()(this,k)[h()(this,S)].func()}}},{key:"keyDown",value:function(e){if(h()(this,g))switch(e.code){case"ArrowUp":d()(this,S,+h()(this,S)-1),h()(this,S)<0&&d()(this,S,h()(this,k).length-1),this.updateOptions();break;case"ArrowDown":d()(this,S,1+ +h()(this,S)),h()(this,S)>h()(this,k).length-1&&d()(this,S,0),this.updateOptions()}}},{key:"set",value:function(){var i=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"":t,s=e.options,a=void 0===s?[]:s;d()(this,w,n),d()(this,k,a),h()(this,k).forEach(function(e,t){e.font=t===h()(i,S)?"bold 12px Arial":"12px Arial",e.color=t===h()(i,S)?"hsl(".concat(h()(i,b),",100%,50%)"):"black",e.height=12,e.paddingBottom=t===h()(i,k).length-1?0:4})}},{key:"updateOptions",value:function(){var i=this;d()(this,b,0),h()(this,k).forEach(function(e,t){t===h()(i,S)?(e.font="bold 12px Arial",e.color="hsl(".concat(h()(i,b),",100%,50%)")):(e.font="12px Arial",e.color="black")})}},{key:"tick",value:function(e){d()(this,y,h()(this,y)+e),this.animationSpeed?h()(this,m).call(this,h()(this,D)):h()(this,D).call(this)}},{key:"draw",value:function(){h()(this,g)&&Object(f.drawText)(h()(this,p),{align:f.DRAWTEXT_ALIGN_CENTER,padding:10,bgcolor:"#ffffff",bgAlpha:.75,lines:[{font:"bold 14px Arial",height:14,text:h()(this,w),paddingBottom:6}].concat(a()(h()(this,k)))})}},{key:"show",value:function(){d()(this,b,0),d()(this,g,!0)}},{key:"hide",value:function(){d()(this,g,!1)}}]),s}(),p=new WeakMap,w=new WeakMap,k=new WeakMap,y=new WeakMap,g=new WeakMap,S=new WeakMap,b=new WeakMap,T=new WeakMap,E=new WeakMap,m=new WeakMap,D=new WeakMap},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return f});var n=i(2),s=i.n(n),a=i(3),o=i.n(a),r=i(12),l=i.n(r),c=i(13),h=i.n(c),u=i(14),d=i.n(u),f=function(e){function n(e,t){var i;return s()(this,n),(i=l()(this,h()(n).call(this,t))).snake=e,i}return d()(n,e),o()(n,null,[{key:"isBody",value:function(e){return e instanceof n}}]),n}(i(6).default)},,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return h});var n=i(2),d=i.n(n),s=i(3),a=i.n(s),o=i(10),f=i.n(o),r=i(21),v=i.n(r),p=i(8),w=i(5),k=i(4),l=i(17),c=i(11),h=function(){function u(e,t,i){var o=this,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},s=n.speed,a=void 0===s?5:s,r=n.toGrow,l=void 0===r?2:r,c=n.color,h=void 0===c?"black":c;d()(this,u),f()(this,"move",function(){if(o.app.state!==p.STATE_RUNNING)return!1;var e=o.head.coords,t=e.x,i=e.y,n=null,s=o.checkReverse()?o.direction:o.controls.direction;switch(s){case w.DIRECTION_LEFT:n=new k.default(t-o.field.cellSize,i);break;case w.DIRECTION_RIGHT:n=new k.default(t+o.field.cellSize,i);break;case w.DIRECTION_UP:n=new k.default(t,i-o.field.cellSize);break;case w.DIRECTION_DOWN:n=new k.default(t,i+o.field.cellSize)}if(o.controls.direction&&!o.app.cellIntersectingWithObstacles(o,n)){var a=o.sideTravel(n);o.direction=s,o.eat(a)}}),this.app=e,this.field=t,this.controls=i,this.body=[],this.baseSpeed=200-10*(a-1),this.minimumSpeed=20,this.direction=null,this.passed=0,this.toGrow=l,this.consumed=0,this.score=0,this.color=h,this.speedEasing=v()(.25,.46,.45,.94)}return a()(u,[{key:"tick",value:function(e){this.passed+=e,this.deTick(this.move)}},{key:"deTick",value:function(e){this.passed>=this.speed&&(this.passed=this.passed-this.speed,e(),this.deTick(e))}},{key:"spawn",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,i=null!=e&&null!=t?new k.default(e,t):k.default.generate(this.field),n=new l.default(this,i);this.body.push(n),this.field.writeCell(n)}},{key:"checkReverse",value:function(){return this.direction===w.DIRECTION_LEFT&&this.controls.direction===w.DIRECTION_RIGHT||this.direction===w.DIRECTION_RIGHT&&this.controls.direction===w.DIRECTION_LEFT||this.direction===w.DIRECTION_UP&&this.controls.direction===w.DIRECTION_DOWN||this.direction===w.DIRECTION_DOWN&&this.controls.direction===w.DIRECTION_UP}},{key:"addBody",value:function(e){var t=new l.default(this,e);this.body.unshift(t),this.field.writeCell(t),this.tailTrimmer()}},{key:"eat",value:function(e){this.feed(e),this.addBody(e)}},{key:"feed",value:function(e){var t=this.field.getCell(e);c.default.isFood(t)&&(this.consumed++,this.score+=t.score,this.toGrow=t.power,t.consume())}},{key:"tailTrimmer",value:function(){if(this.toGrow)return this.toGrow--,!1;var e=this.body.pop();this.field.deleteCell(e)}},{key:"sideTravel",value:function(e){var t,i,n=null;(e.x<0||e.x>=this.field.width||e.y<0||e.y>=this.field.height)&&(e.x<0&&(t=this.field.width-this.field.cellSize),e.y<0&&(i=this.field.height-this.field.cellSize),e.x>=this.field.width&&(t=0),e.y>=this.field.height&&(i=0),n=new k.default(t,i));return n||e}},{key:"destroy",value:function(){var t=this;this.body.forEach(function(e){t.field.deleteCell(e)})}},{key:"speed",get:function(){var e=this.baseSpeed;if(this.consumed){var t=this.speedEasing(this.consumed/50);e=Math.round(this.baseSpeed-(this.baseSpeed-this.minimumSpeed)*t)}return e}},{key:"size",get:function(){return this.body.length}},{key:"head",get:function(){return this.body[0]}}]),u}()},function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return f});var n=i(2),s=i.n(n),a=i(3),o=i.n(a),r=i(12),l=i.n(r),c=i(13),h=i.n(c),u=i(14),d=i.n(u),f=function(e){function n(e,t){var i;return s()(this,n),(i=l()(this,h()(n).call(this,t))).field=e,i}return d()(n,e),o()(n,[{key:"draw",value:function(e){e.save(),e.fillStyle="#aaa",e.fillRect(this.coords.x,this.coords.y,this.field.cellSize,this.field.cellSize),e.restore()}}],[{key:"isWall",value:function(e){return e instanceof n}}]),n}(i(6).default)},,function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return u});var n=i(2),d=i.n(n),s=i(3),a=i.n(s),o=i(10),f=i.n(o),r=i(4),l=i(11),c=i(15),h=i(19),v=i(5),p=i(7),w=i(20),u=function(){function u(e){var t=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=i.width,s=void 0===n?20:n,a=i.height,o=void 0===a?20:a,r=i.cellSize,l=void 0===r?10:r,c=i.endless,h=void 0!==c&&c;d()(this,u),f()(this,"gameOver",function(){t.clearField(),t.draw(),Object(p.drawText)(t.ctx,{align:p.DRAWTEXT_ALIGN_CENTER,padding:2,bgcolor:"#ffffff",bgAlpha:.75,lines:[{font:"bold 14px Arial",height:14,text:"GAME OVER"},{font:"12px Arial",height:12,text:"SCORE: ".concat(t.snakes[0].score)}]})}),this.app=null,this.sizeX=s,this.sizeY=o,this.cellSize=l,this.width=s*this.cellSize,this.height=o*this.cellSize,this.snakes=[],this.cells=[],this.food=[],this.walls=[],this.endless=h,this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.showScores=!1,this.init()}return a()(u,[{key:"init",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px";for(var e=0;e<this.sizeY;e++){for(var t=[],i=0;i<this.sizeX;i++)t.push(null);this.cells.push(t)}}},{key:"addSnake",value:function(e){if(this.snakes.length){if(1===this.snakes.length){var t=new v.default(this.app,v.CONTROLS_WSAD),i=new h.default(this.app,this,t,{color:"red"});this.snakes.push(i),i.spawn()}}else{if(!e){var n=new v.default(this.app);e=new h.default(this.app,this,n)}this.snakes.push(e),e.spawn();for(var s=0;s<5;s++)this.addWall(new w.default(this,r.default.generate(this)))}}},{key:"killSnake",value:function(t){var e=this.snakes.findIndex(function(e){return e===t});this.snakes.splice(e,1),t.destroy()}},{key:"getCell",value:function(e){var t;return null===(t=this.cells[e.y/this.cellSize])||void 0===t?void 0:t[e.x/this.cellSize]}},{key:"writeCell",value:function(e){return this.cells[e.coords.y/this.cellSize][e.coords.x/this.cellSize]=e}},{key:"deleteCell",value:function(e){return!(this.cells[e.coords.y/this.cellSize][e.coords.x/this.cellSize]=null)}},{key:"tick",value:function(t){this.snakes.forEach(function(e){return e.tick(t)}),this.generateFood()}},{key:"generateFood",value:function(){if(!this.food.length){var e=r.default.generate(this),t=new l.default(this,e);this.writeCell(t),this.food.push(t)}}},{key:"addWall",value:function(e){this.writeCell(e),this.walls.push(e)}},{key:"draw",value:function(e){this.clearField(),this.drawWalls(),this.drawSnakes(),this.drawFood(e),this.showScores&&this.drawScore(),this.app.debug&&e&&this.drawDebug(e)}},{key:"drawScore",value:function(){var s=c.default.score;if(s.length){var a=[];s.forEach(function(e,t){var i=e.name,n=e.points;a.push({font:"12px Arial",height:12,paddingBottom:t<s.length?4:0,text:"".concat(i," ").concat(n)})}),Object(p.drawText)(this.ctx,{align:p.DRAWTEXT_ALIGN_CENTER,padding:10,bgcolor:"#ffffff",bgAlpha:.75,lines:[{font:"bold 14px Arial",height:14,text:"BEST SCORES",paddingBottom:6}].concat(a)})}}},{key:"clearField",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"drawSnakes",value:function(){var t=this;this.snakes.forEach(function(e){return t.drawSnake(e)})}},{key:"drawSnake",value:function(e){var s=this;this.ctx.save(),this.ctx.fillStyle=e.color,e.body.forEach(function(e){var t=e.coords,i=t.x,n=t.y;s.ctx.fillRect(i,n,s.cellSize,s.cellSize)}),this.ctx.restore()}},{key:"drawFood",value:function(t){var i=this;this.food.forEach(function(e){e.tick(t),e.draw(i.ctx)})}},{key:"drawWalls",value:function(t){var i=this;this.walls.forEach(function(e){e.tick(t),e.draw(i.ctx)})}},{key:"drawDebug",value:function(e){this.ctx.font="bold 10px Arial";var t=0<e?Math.round(1e3/e):"00",i="FPS: ".concat(t);this.ctx.fillStyle="black",this.ctx.globalAlpha=.5,this.ctx.fillText(i,this.cellSize,this.height-this.cellSize),this.ctx.globalAlpha=1}}]),u}()}]);