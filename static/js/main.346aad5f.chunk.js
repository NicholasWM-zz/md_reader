(this.webpackJsonpbloco_fundamental=this.webpackJsonpbloco_fundamental||[]).push([[0],{442:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43),o=t.n(c),u=t(51),l=t(8),i=t(26),s=t(44),f=t.n(s),m=t(45),p="https://raw.githubusercontent.com/NicholasWM/cc2020/master",d=t.n(m).a.create({baseURL:p}),h=t(46),v=t(47),b=t(54),E=t(55),g=t(444),j=t(50),O=function(e){Object(E.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props.language||"html",n=this.props.showLineNumbers||!1;return r.a.createElement(g.a,{language:e,style:j.darcula,showLineNumbers:n||!0},this.props.value?this.props.value:this.props.children)}}]),t}(a.Component);var k=function(){var e=Object(a.useState)("/README.md"),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],s=u[1];Object(a.useEffect)((function(){d.get(t).then((function(e){var n=e.data;s(void 0!==l?n:"# Nao encontrado")}))}),[t]),Object(a.useEffect)((function(){var e=document.getElementsByTagName("a");if(console.log(e),e.length>0)for(var n=function(n){e[n].onclick=function(t){t.preventDefault();var a=e[n].pathname.replace("/markdown/","");console.log("finalURI -> ",a),c(a)}},t=0;t<e.length;t++)n(t)}),[l]);var m=function(e,n){function a(e){return e.split("/")}var r=function(e){return e.split("/").reduce((function(e,n){return".."===n&&e++,e}),0)}(e),c=(function(e){e.filter((function(e){return!e.includes(n)})).join("/")}(a(e)),a(t));c=function(e){return e.filter((function(e){return""!==e}))}(c);for(var o=0;o<=r;o++)c.pop();c=c.join("/");var u=e.substring(e.lastIndexOf("../")+1).replace("./","/");return"/"!==u[0]&&(u="/".concat(u)),"".concat(c).concat(u)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Bloco Fundamental"),r.a.createElement("h2",null,"Path Selecionado: ",t),r.a.createElement(f.a,{escapeHtml:!1,renderers:{code:O},transformImageUri:function(e){return"".concat(p,"/").concat(m(e,".md"))},transformLinkUri:function(e){return"/markdown/".concat(m(e,".md"))},source:l}))};function w(){return r.a.createElement(u.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:k})))}function y(){return r.a.createElement("div",null,r.a.createElement(w,null))}o.a.render(r.a.createElement(y,null),document.getElementById("root"))},56:function(e,n,t){e.exports=t(442)}},[[56,1,2]]]);
//# sourceMappingURL=main.346aad5f.chunk.js.map