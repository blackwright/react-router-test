(this["webpackJsonpreact-router-test"]=this["webpackJsonpreact-router-test"]||[]).push([[0],{22:function(e,n,t){e.exports=t(34)},33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(17),o=t.n(c),i=t(2),u=t(8),s=t(21),l=t(1),m=t(9),d=t(10);function b(){var e=Object(u.a)(["\n  background: ",";\n  z-index: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  min-width: 100vw;\n  min-height: 100vh;\n"]);return b=function(){return e},e}var f=Object(m.a)(d.b.div)(b(),(function(e){return e.background}),(function(e){return e.stackIndex})),h=function(e){return r.a.createElement(f,Object.assign({initial:"initial",animate:"animate",exit:"exit",transition:{clamp:!0,ease:"easeInOut",duration:.3}},e))};function g(){return"#"+Math.random().toString(16).substr(2,6)}var E=g(),p=g(),k=g(),x=g(),v=g(),j={"/login":{component:function(e){return r.a.createElement(h,Object.assign({background:E},e),r.a.createElement("h1",null,"Login"),r.a.createElement(i.b,{to:"/home"},"Log in"))},stackIndex:0},"/home":{component:function(e){return r.a.createElement(h,Object.assign({background:p},e),r.a.createElement(i.b,{to:"/login"},"Logout"),r.a.createElement("h1",null,"Home"),r.a.createElement(i.b,{to:"/course/123"},"Course"))},stackIndex:0},"/course/:id":{component:function(e){return r.a.createElement(h,Object.assign({background:k},e),r.a.createElement(i.b,{to:"/home"},"Back"),r.a.createElement("h1",null,"Course"),r.a.createElement(i.b,{to:"/lesson/123"},"Lesson"),r.a.createElement(i.b,{to:"/discussion/123"},"Discussion"))},stackIndex:1},"/lesson/:id":{component:function(e){return r.a.createElement(h,Object.assign({background:x},e),r.a.createElement(i.b,{to:"/course/123"},"Back"),r.a.createElement("h1",null,"Lesson"))},stackIndex:2},"/discussion/:id":{component:function(e){return r.a.createElement(h,Object.assign({background:v},e),r.a.createElement(i.b,{to:"/course/123"},"Back"),r.a.createElement("h1",null,"Discussion"))},stackIndex:2}},w=Object.keys(j);function O(){var e=Object(u.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n"]);return O=function(){return e},e}var I={initial:function(e){return e<0?{x:0}:0===e?{opacity:0}:{x:"100%"}},animate:function(e){return 0===e?{opacity:1}:{x:0}},exit:function(e){return e<0?{x:"100%"}:0===e?{opacity:0}:{x:0}}},y=m.a.div(O()),B=function(){var e,n=Object(l.g)(),t=r.a.useRef(),a=function(e,n){return e&&n?j[n].stackIndex-j[e].stackIndex:0}(t.current,(e=n.pathname,w.find((function(n){return Object(l.f)(e,{path:n})}))));return r.a.createElement(y,null,r.a.createElement(d.a,{initial:!1,custom:a},r.a.createElement(l.d,{key:n.pathname,location:n},Object.entries(j).map((function(e){var n=Object(s.a)(e,2),c=n[0],o=n[1];return r.a.createElement(l.b,{exact:!0,path:c,render:function(e){var n=e.match;return t.current=n.path,r.a.createElement(o.component,{custom:a,variants:I,stackIndex:o.stackIndex})}})})),r.a.createElement(l.a,{to:"/login"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(33);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9284b1a0.chunk.js.map