window.__require=function t(e,i,r){function o(n,s){if(!i[n]){if(!e[n]){var c=n.split("/");if(c=c[c.length-1],!e[c]){var h="function"==typeof __require&&__require;if(!s&&h)return h(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+n+"'")}n=c}var l=i[n]={exports:{}};e[n][0].call(l.exports,function(t){return o(e[n][1][t]||t)},l,l.exports,t,e,i,r)}return i[n].exports}for(var a="function"==typeof __require&&__require,n=0;n<r.length;n++)o(r[n]);return o}({cell:[function(t,e,i){"use strict";cc._RF.push(e,"52a07evkRpMjJhtkfzEW4iu","cell"),cc.Class({extends:cc.Component,properties:{colorNode:cc.Node},setState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.state=t;var e=["#52E4C3","#F5A625","#FF8536","#FFFEFF","#FB5900","#0055A6"];0==this.state?this.colorNode.color=cc.Color.WHITE:this.colorNode.color=cc.Color.BLACK.fromHEX(e[parseInt(Math.random()*e.length)])},switchState:function(){var t=0==this.state?1:0;this.setState(t)}}),cc._RF.pop()},{}],game:[function(t,e,i){"use strict";cc._RF.push(e,"65f6dz9ggNKtpto4GJnrMEq","game"),cc.Class({extends:cc.Component,properties:{cellPrefab:cc.Prefab,cellAreaNode:cc.Node},onLoad:function(){this.maxSize=10,this.maxWCnt=this.cellAreaNode.width/this.maxSize,this.maxHCnt=this.cellAreaNode.height/this.maxSize,this.tt=0,this.pause=!0,this.cellNodeArr=[];for(var t=0;t<this.maxHCnt;t++){this.cellNodeArr[t]=[];for(var e=0;e<this.maxWCnt;e++){var i=cc.instantiate(this.cellPrefab);i.setPosition(cc.v2(e*this.maxSize,t*this.maxSize)),i.getComponent("cell").setState(0),this.cellAreaNode.addChild(i),this.cellNodeArr[t][e]=i}}this.cellAreaNode.on("touchstart",this.onTouchStart,this)},onTouchStart:function(t){var e=t.getLocation(),i=this.cellAreaNode.convertToNodeSpaceAR(e),r=parseInt(i.y/this.maxSize),o=parseInt(i.x/this.maxSize);this.cellNodeArr[r][o].getComponent("cell").switchState()},update:function(t){this.pause||(this.tt+=t,this.tt>=.1&&(this.tt=0,this.lifeChange()))},lifeChange:function(){for(var t=[],e=[],i=0;i<this.maxHCnt;i++){t[i]=[],e[i]=[];for(var r=0;r<this.maxWCnt;r++){var o=this.cellNodeArr[i][r].getComponent("cell").state;t[i][r]=o,e[i][r]=o}}for(var a=0;a<this.maxHCnt;a++)for(var n=0;n<this.maxWCnt;n++){var s=this.cellLifeCheck(t,{i:a,j:n});0!=s&&1!=s||(e[a][n]=s)}for(var c=0;c<this.maxHCnt;c++)for(var h=0;h<this.maxWCnt;h++){var l=e[c][h];this.cellNodeArr[c][h].getComponent("cell").setState(l)}},cellLifeCheck:function(t,e){for(var i=0,r=0,o=[{i:1,j:-1},{i:1,j:0},{i:1,j:1},{i:0,j:-1},{i:0,j:1},{i:-1,j:-1},{i:-1,j:0},{i:-1,j:1}];r<o.length;r++){var a=o[r],n=a.i+e.i,s=a.j+e.j;n>=this.maxHCnt&&(n=0),s>=this.maxWCnt&&(s=0),n<0&&(n=this.maxHCnt-1),s<0&&(s=this.maxWCnt-1),0!=t[n][s]&&i++}return 3==i?1:(i=2)?-1:0},pauseGame:function(){this.pause=!this.pause,cc.find("Canvas/bg/pauseBtn/Background/Label").getComponent(cc.Label).string=this.pause?"\u5f00\u59cb":"\u6682\u505c"}}),cc._RF.pop()},{}]},{},["cell","game"]);