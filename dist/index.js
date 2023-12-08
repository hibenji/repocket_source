(()=>{"use strict";var e={607:function(e,o,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0});const n=r(t(566)),s=t(147),i=t(735),c=t(5),p=process.env.RP_EMAIL,l=process.env.RP_API_KEY,d=(0,n.default)(process.argv.slice(2)),a=d.e||p,u=d.p||l;async function g(e){const o=()=>(0,c.getRandomInt)(15,90);try{await e.createPeer()?(e.events.on(e.EVENTS_NAMES.connected,(()=>{console.log("peer connected")})),e.events.on(e.EVENTS_NAMES.connecting,(()=>{console.log("peer resetting")})),e.events.on(e.EVENTS_NAMES.disconnected,(()=>{console.log("peer disconnected")})),e.events.on(e.EVENTS_NAMES.peer_server_502_error,(()=>{console.log("peer_server_502_error, reconnecting in 15-90 seconds..."),setTimeout((()=>{g(e)}),1e3*o())})),e.events.on(e.EVENTS_NAMES.refresh_token_required,(()=>{console.log("peer refresh_token_required")}))):setTimeout((()=>{g(e)}),1e3*o())}catch(t){setTimeout((()=>{g(e)}),1e3*o())}}function h(){process.exit()}console.log("Your current version is :",s.version),a&&u||(console.error("User credentials are missing!\n\nPlease declare environment variables RP_EMAIL and RP_API_KEY.\n\nTo get your Api Key please visit in https://app.repocket.co/\n\nAlternatively, supply credentials as command line arguments:\n-e 'Your Email' -p 'Your Api key'"),process.exit(1)),(0,i.nodeLogIn)(a,u).then((async e=>{const{userId:o,peerApiToken:t}=e,r=new i.PeerService({peerApiToken:t,userId:o});await g(r)})).catch((e=>{console.log("e",e)})),process.on("SIGTERM",h),process.on("SIGINT",h),process.on("uncaughtException",(function(e){console.log("[uncaughtException]: ",e.stack),h()}))},5:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.RPLogger=o.LOG_LEVEL=o.getRandomInt=void 0,o.getRandomInt=function(e,o){return Math.floor(Math.random()*(o-e+1))+e},o.LOG_LEVEL={SILENT:0,INFO:1,DEBUG:2},o.RPLogger=new class{constructor(){this._storedLog=function(e){let o=[];return o.push=function(){return this.length>=200&&this.shift(),Array.prototype.push.apply(this,arguments)},o}(),this.disabled=!1,this.logLevel=o.LOG_LEVEL.DEBUG}error(e,...o){this.logWithLevel(Number.MIN_SAFE_INTEGER,e,...o)}debug(e,...t){this.logWithLevel(o.LOG_LEVEL.DEBUG,e,...t)}log(e,...t){this.logWithLevel(o.LOG_LEVEL.DEBUG,e,...t)}info(e,...t){this.logWithLevel(o.LOG_LEVEL.INFO,e,...t)}logWithLevel(e,o,...t){var r;this.disabled||(this.logLevel>=e?console.log(o,...t):e===Number.MIN_SAFE_INTEGER&&console.error(o,...t)),this._storedLog.push(null!==(r=o)?"string"==typeof r?r:"object"==typeof r?JSON.stringify(r):r+"":null)}exportLog(){return this._storedLog.join("\n")}setLogLevel(e){this.logLevel=e}}},735:e=>{e.exports=require("@geonode/repocket-peer-client")},566:e=>{e.exports=require("minimist")},147:e=>{e.exports=JSON.parse('{"name":"repocket-docker","version":"1.1.31","description":"","main":"index.js","scripts":{"start":"nodemon --watch \'src/**/*\' -e ts,tsx --exec ts-node src/index.ts","build":"webpack","start:prod":"node dist/index.js"},"repository":{"type":"git","url":"git+https://adirgeonode@bitbucket.org/consumerchoicemvp/repocket-docker.git"},"keywords":[],"author":"","license":"ISC","bugs":{"url":"https://bitbucket.org/consumerchoicemvp/repocket-docker/issues"},"homepage":"https://bitbucket.org/consumerchoicemvp/repocket-docker#readme","devDependencies":{"@types/minimist":"^1.2.2","@types/node":"^20.3.0","nodemon":"^2.0.22","ts-loader":"^9.4.3","ts-node":"^10.9.1","typescript":"^5.1.3","webpack":"^5.86.0","webpack-cli":"^5.1.4","webpack-node-externals":"^3.0.0"},"dependencies":{"@geonode/repocket-peer-client":"^1.0.13","minimist":"^1.2.8"}}')}},o={};!function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r].call(s.exports,s,s.exports,t),s.exports}(607)})();