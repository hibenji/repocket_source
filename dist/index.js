(()=>{"use strict";var e={607:function(e,o,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0});const t=r(n(566)),s=n(147),c=n(735),i=process.env.RP_EMAIL,p=process.env.RP_API_KEY,d=(0,t.default)(process.argv.slice(2)),a=d.e||i,u=d.p||p;function l(){process.exit()}console.log("Your current version is :",s.version),a&&u||(console.error("User credentials are missing!\n\nPlease declare environment variables RP_EMAIL and RP_API_KEY.\n\nTo get your Api Key please visit in https://app.repocket.co/\n\nAlternatively, supply credentials as command line arguments:\n-e 'Your Email' -p 'Your Api key'"),process.exit(1)),(0,c.nodeLogIn)(a,u).then((e=>{const{userId:o,peerApiToken:n}=e,r=new c.PeerService({peerApiToken:n,userId:o});r.createPeer(),r.events.on(r.EVENTS_NAMES.connected,(()=>{console.log("peer connected")})),r.events.on(r.EVENTS_NAMES.connecting,(()=>{console.log("peer resetting")})),r.events.on(r.EVENTS_NAMES.disconnected,(()=>{console.log("peer disconnected")})),r.events.on(r.EVENTS_NAMES.refresh_token_required,(()=>{console.log("peer refresh_token_required")}))})),process.on("SIGTERM",l),process.on("SIGINT",l),process.on("uncaughtException",(function(e){console.log("[uncaughtException]: ",e.stack),l()}))},735:e=>{e.exports=require("@geonode/repocket-peer-client")},566:e=>{e.exports=require("minimist")},147:e=>{e.exports=JSON.parse('{"name":"repocket-docker","version":"1.1.28","description":"","main":"index.js","scripts":{"start":"nodemon --watch \'src/**/*\' -e ts,tsx --exec ts-node src/index.ts","build":"webpack","start:prod":"node dist/index.js"},"repository":{"type":"git","url":"git+https://adirgeonode@bitbucket.org/consumerchoicemvp/repocket-docker.git"},"keywords":[],"author":"","license":"ISC","bugs":{"url":"https://bitbucket.org/consumerchoicemvp/repocket-docker/issues"},"homepage":"https://bitbucket.org/consumerchoicemvp/repocket-docker#readme","devDependencies":{"@types/minimist":"^1.2.2","@types/node":"^20.3.0","nodemon":"^2.0.22","ts-loader":"^9.4.3","ts-node":"^10.9.1","typescript":"^5.1.3","webpack":"^5.86.0","webpack-cli":"^5.1.4","webpack-node-externals":"^3.0.0"},"dependencies":{"@geonode/repocket-peer-client":"^1.0.10","minimist":"^1.2.8"}}')}},o={};!function n(r){var t=o[r];if(void 0!==t)return t.exports;var s=o[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}(607)})();