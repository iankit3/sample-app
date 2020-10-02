(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),c=n.n(r),i=(n(28),n(29),n(7)),u=n(4),o=n(5);function d(){var e=Object(u.a)(["\n    display: flex;\n\n"]);return d=function(){return e},e}var s=o.a.div(d()),m=function(e){var t=e.id,n=e.name,a=e.age,r=e.duration,c=e.validity,i=e.description,u=e.setCurrentId,o=e.deletePackage;return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,a),l.a.createElement("td",null,r.days," days and ",r.nights," nights"),l.a.createElement("td",null,c),l.a.createElement("td",null,i),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(e){return u(t)}},"Edit"),l.a.createElement("button",{onClick:function(e){return o(t)}},"delet")))},h=n(22);function E(){var e=Object(u.a)(["\n    flex: 1 1 200px;\n"]);return E=function(){return e},e}var g=Object(o.a)((function(e){var t=e.children,n=Object(h.a)(e,["children"]);return l.a.createElement("table",{className:n.className,border:"1"},t)}))(E()),f=n(21);function p(){var e=Object(u.a)(["\n    flex: 0 1 200px;\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n    display: block;\n    font-weight: 900;\n"]);return b=function(){return e},e}var v=o.a.label(b()),y=function(e){var t=Object(f.a)({initialValues:e.initialValues,enableReinitialize:!0,onSubmit:function(t){var n=JSON.stringify(t,null,2);console.log(n),e.addPackage(t)}});return l.a.createElement("form",{onSubmit:t.handleSubmit,className:e.className},l.a.createElement(v,{htmlFor:"name"},"Name"),l.a.createElement("input",{id:"name",name:"name",type:"text",onChange:t.handleChange,value:t.values.name}),l.a.createElement("br",null),l.a.createElement(v,{htmlFor:"age"},"Age"),l.a.createElement("input",{id:"age",name:"age",type:"number",onChange:t.handleChange,value:t.values.age}),l.a.createElement("br",null),l.a.createElement(v,{htmlFor:"duration_days"},"Duration"),"Days:",l.a.createElement("br",null),l.a.createElement("input",{id:"duration_days",name:"duration.days",type:"number",onChange:t.handleChange,value:t.values.duration.days,placeholder:"days"}),l.a.createElement("br",null),"Nights:",l.a.createElement("br",null),l.a.createElement("input",{id:"duration_nights",name:"duration.nights",type:"number",onChange:t.handleChange,value:t.values.duration.nights,placeholder:"nights"}),l.a.createElement("br",null),l.a.createElement(v,{htmlFor:"validity"},"Validity"),l.a.createElement("input",{id:"validity",name:"validity",type:"number",onChange:t.handleChange,value:t.values.validity}),l.a.createElement("br",null),l.a.createElement(v,{htmlFor:"description"},"Description"),l.a.createElement("input",{id:"description",name:"description",type:"text",onChange:t.handleChange,value:t.values.description}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit"))},j=Object(o.a)(y)(p()),k=Object(a.createContext)(),O=function(){var e=Object(a.useContext)(k),t=e.packages,n=e.getPackages,r=e.addPackage,c=e.deletePackage,u=Object(a.useState)({name:"",age:0,duration:{days:0,nights:0},validity:0,description:""}),o=Object(i.a)(u,2),d=o[0],h=o[1],E=Object(a.useState)(-1),f=Object(i.a)(E,2),p=f[0],b=f[1];return Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){if(-1!=p){var e=t.filter((function(e){return e.id===p}));e.length>0&&h(e[0])}}),[p]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Packages"),l.a.createElement(s,null,l.a.createElement(j,{initialValues:d,addPackage:r}),l.a.createElement(g,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Duration"),l.a.createElement("th",null,"Validity"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(m,Object.assign({},e,{key:e.id,setCurrentId:b,deletePackage:c}))}))))))},C="http://localhost:8080/packages/",P=function(e){e.intialState;var t=e.children,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],u=r[1],o=function(){fetch(C,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){u(e)}))};return l.a.createElement(k.Provider,{value:{packages:c,getPackages:o,addPackage:function(e){fetch(C,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then(o)},updatePackage:function(e,t){fetch(C,{method:"PUT",body:JSON.stringify({id:e,hotelPackage:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then(o)},deletePackage:function(e){fetch("".concat(C,"/").concat(e),{method:"DELETE",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then(o)}}},t)};var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(P,{initialState:{}},l.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8faa8ab2.chunk.js.map