(this["webpackJsonpkintone-auth-token-generator"]=this["webpackJsonpkintone-auth-token-generator"]||[]).push([[0],{57:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=t(110),i=t(111),s=t(39),m=t(102),u=t(103),p=t(49),d=t(41),E=t.n(d),g=t(104);var b=t(42),h=t(15),f=t(43),v=Object(f.a)((function(e){var a=Object(n.useState)("auth"),t=Object(h.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(""),c=Object(h.a)(o,2),i=c[0],s=c[1],m=Object(n.useState)(""),u=Object(h.a)(m,2),p=u[0],d=u[1],E=Object(n.useState)(""),g=Object(h.a)(E,2),b=g[0],f=g[1];return{type:r,id:i,pass:p,token:b,handleChangeId:function(e){s(e.target.value)},handleChangePass:function(e){d(e.target.value)},handleChangeType:function(e){document.title="".concat("auth"===e.target.value?"\u901a\u5e38\u306e\u8a8d\u8a3c":"Basic\u8a8d\u8a3c","\u7528\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),l(e.target.value)},generateToken:function(e){var a=btoa("".concat(i.trim(),":").concat(p.trim()));f("auth"===r?a:"Basic ".concat(a))},copyText:function(e){return!!navigator.clipboard&&(navigator.clipboard.writeText(b),!0)}}})),O=t(68),y=t(105),k=t(109),w=t(116),j=t(107),C=t(114),x=t(108),N=t(113),P=t(115),S=t(106),D=t(69),F=t(112),T=t(46),B=t.n(T),G=t(47),I=t.n(G),q=t(44),z=t.n(q),A=t(45),J=t.n(A),W=t(48),H=t.n(W);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var Y=Object(s.a)((function(e){return{root:{padding:e.spacing(3,2),margin:e.spacing(3,0)},fg1:{flexGrow:1},button:{margin:e.spacing(1)},textField:{margin:e.spacing(1)}}})),$=function(e){var a=Y(),t=v.useContainer(),n=r.a.useState({visible:!1}),l=Object(h.a)(n,2),o=l[0],c=l[1],i=r.a.useState(!1),s=Object(h.a)(i,2),m=s[0],u=s[1],p=function(e,a){"clickaway"!==a&&u(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:a.root},r.a.createElement(w.a,{component:"fieldset"},r.a.createElement(D.a,{component:"legend"},"\u30c8\u30fc\u30af\u30f3\u306e\u30bf\u30a4\u30d7"),r.a.createElement(P.a,{"aria-label":"gender",name:"type",value:t.type,onChange:t.handleChangeType},r.a.createElement(y.a,{container:!0,className:a.fg1},r.a.createElement(y.a,{item:!0,xs:12,sm:6,className:a.fg1},r.a.createElement(S.a,{value:"auth",control:r.a.createElement(N.a,{color:"primary"}),label:"\u8a8d\u8a3c"})),r.a.createElement(y.a,{item:!0,xs:12,sm:6,className:a.fg1},r.a.createElement(S.a,{value:"basic",control:r.a.createElement(N.a,{color:"primary"}),label:"Basic \u8a8d\u8a3c"})))))),r.a.createElement(O.a,{className:a.root},r.a.createElement(w.a,{className:a.textField},r.a.createElement(j.a,{htmlFor:"login-name"},"\u30ed\u30b0\u30a4\u30f3\u540d*"),r.a.createElement(C.a,{required:!0,id:"login-name",value:t.id,onChange:t.handleChangeId})),r.a.createElement(w.a,{className:a.textField},r.a.createElement(j.a,{htmlFor:"opassword"},"Password*"),r.a.createElement(C.a,{required:!0,id:"password",type:o.visible?"text":"password",value:t.pass,onChange:t.handleChangePass,endAdornment:r.a.createElement(x.a,{position:"end"},r.a.createElement(g.a,{"aria-label":"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8868\u793a",onClick:function(){c(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(t,!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},o,{visible:!o.visible}))},onMouseDown:function(e){e.preventDefault()}},o.visible?r.a.createElement(z.a,null):r.a.createElement(J.a,null)))})),r.a.createElement(k.a,{color:"primary",variant:"contained",className:a.button,startIcon:r.a.createElement(B.a,null),onClick:t.generateToken},"\u30c8\u30fc\u30af\u30f3\u751f\u6210")),r.a.createElement(O.a,{className:a.root},r.a.createElement(w.a,null,r.a.createElement(j.a,{htmlFor:"token"},"\u30c8\u30fc\u30af\u30f3"),r.a.createElement(C.a,{id:"token",value:t.token,readOnly:!0})),r.a.createElement(k.a,{size:"small",variant:"outlined",color:"primary",className:a.button,onClick:function(e){return function(e){t.copyText(e)?u(!0):alert("\u30b3\u30d4\u30fc\u3067\u304d\u307e\u305b\u3093\u3002\n\u624b\u52d5\u3067\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}(e)}},r.a.createElement(I.a,null)," \u30b3\u30d4\u30fc")),r.a.createElement(F.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:m,autoHideDuration:2e3,onClose:p,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f"),action:[r.a.createElement(g.a,{key:"close","aria-label":"close",color:"inherit",onClick:p},r.a.createElement(H.a,null))]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement("div",{className:"App"},r.a.createElement((function(){var e=Object(s.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}))();return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(p.a,{variant:"h6",color:"inherit",className:e.title},"kintone \u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u4f5c\u6210\u30c4\u30fc\u30eb"),r.a.createElement("div",null,r.a.createElement(g.a,{"aria-label":"Open Github.",onClick:function(){window.open("https://github.com/Yanchi4425/kintone-auth-token-generator","_blank")},color:"inherit"},r.a.createElement(E.a,null))))))}),null),r.a.createElement(c.a,null),r.a.createElement(i.a,{fixed:!0},r.a.createElement((function(e){return r.a.createElement(v.Provider,null,r.a.createElement($,null))}),null)),r.a.createElement((function(){return r.a.createElement("footer",null,r.a.createElement("h3",null,"\u30d5\u30c3\u30bf\u30fc"))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.d1c7c962.chunk.js.map