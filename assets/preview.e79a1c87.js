var A=(u,r)=>()=>(r||u((r={exports:{}}).exports,r),r.exports);import{w as R,j as H,n as O,S as b}from"./iframe.598c618a.js";var V=A((z,c)=>{var v="storybook/a11y",N="a11yHighlight",k="".concat(v,"/result"),$="".concat(v,"/request"),P="".concat(v,"/running"),D="".concat(v,"/error"),C="".concat(v,"/manual"),q="".concat(v,"/highlight"),h={RESULT:k,REQUEST:$,RUNNING:P,ERROR:D,MANUAL:C,HIGHLIGHT:q};function y(u,r,n,i,a,s,e){try{var o=u[s](e),l=o.value}catch(m){n(m);return}o.done?r(l):Promise.resolve(l).then(i,a)}function E(u){return function(){var r=this,n=arguments;return new Promise(function(i,a){var s=u.apply(r,n);function e(l){y(s,i,a,e,o,"next",l)}function o(l){y(s,i,a,e,o,"throw",l)}e(void 0)})}}var M=R.document,Y=R.window;c&&c.hot&&c.hot.decline&&c.hot.decline();var f=H.getChannel(),g=!1,d,_=function(){var u=E(regeneratorRuntime.mark(function r(n){var i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n);case 2:if(i=e.sent,a=i.manual,a){e.next=7;break}return e.next=7,S(n);case 7:case"end":return e.stop()}},r)}));return function(n){return u.apply(this,arguments)}}(),S=function(){var u=E(regeneratorRuntime.mark(function r(n){var i,a,s,e,o,l,m,w,T;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=n,t.prev=1,t.next=4,G(n);case 4:if(i=t.sent,g){t.next=19;break}return g=!0,f.emit(h.RUNNING),t.next=10,O(()=>import("./axe.c31f72b2.js").then(U=>U.a),["assets/axe.c31f72b2.js","assets/iframe.598c618a.js"]);case 10:return a=t.sent.default,s=i.element,e=s===void 0?"#root":s,o=i.config,l=i.options,m=l===void 0?{}:l,w=M.querySelector(e),a.reset(),o&&a.configure(o),t.next=17,a.run(w,m);case 17:T=t.sent,d===n?f.emit(h.RESULT,T):(g=!1,S(d));case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),f.emit(h.ERROR,t.t0);case 24:return t.prev=24,g=!1,t.finish(24);case 27:case"end":return t.stop()}},r,null,[[1,21,24,27]])}));return function(n){return u.apply(this,arguments)}}(),G=function(){var u=E(regeneratorRuntime.mark(function r(n){var i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.__STORYBOOK_STORY_STORE__.loadStory({storyId:n});case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return i=e.t0,a=i.parameters,e.abrupt("return",a.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return e.stop()}},r)}));return function(n){return u.apply(this,arguments)}}();f.on(h.REQUEST,_);f.on(h.MANUAL,S);var B=function(r){return`
  outline: 2px dashed `.concat(r,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},p=R.document;c&&c.hot&&c.hot.decline&&c.hot.decline();var I=H.getChannel(),Q=function(r){var n=N;L();var i=Array.from(new Set(r.elements)),a=p.createElement("style");a.setAttribute("id",n),a.innerHTML=i.map(function(s){return"".concat(s,`{
          `).concat(B(r.color),`
         }`)}).join(" "),p.head.appendChild(a)},L=function(){var r=N,n=p.getElementById(r);n&&n.parentNode.removeChild(n)};I.on(b,L);I.on(h.HIGHLIGHT,Q)});export default V();
//# sourceMappingURL=preview.e79a1c87.js.map
