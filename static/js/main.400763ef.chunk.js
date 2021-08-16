(this.webpackJsonpfeellucky=this.webpackJsonpfeellucky||[]).push([[0],{39:function(n,e,t){},67:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var c,a=t(0),r=t.n(a),i=t(31),o=t.n(i),s=(t(39),t(15)),l=t(2),d=t(4),u=t(5),j=t(1);function p(n){var e=n.props;return Object(j.jsxs)(b,{style:{backgroundImage:"url(".concat(e.hdurl,")")},children:[Object(j.jsx)("h1",{children:"Astronomy Picture of the Day:"}),Object(j.jsxs)("p",{children:["Copyright: ",Object(j.jsxs)("span",{className:"header_copyright",children:[e.copyright," (",e.date,")"]})]}),Object(j.jsx)("i",{className:"header_explanation",children:e.explanation})]})}var h,b=u.a.header(c||(c=Object(d.a)(["\n  height: 95vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-attachment: fixed;\n  color: #fff;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 15px;\n  gap: 2em;\n\n  .header_copyright {\n    font-size: 22px;\n    font-weight: 600;\n    letter-spacing: 1px;\n  }\n  .header_explanation {\n    width: 25%;\n    max-height: 35%;\n    overflow: auto;\n    padding-right: 15px;\n    line-height: 20px;\n    word-spacing: 5px;\n    background-color: #13131396;\n    padding: 15px;\n    border-radius: 15px;\n  }\n"]))),f=t(10),g=Object(a.createContext)({}),x=function(){return Object(a.useContext)(g)},m=function(n){var e=n.children,c=t(11),r=Object(a.useState)(),i=Object(f.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)(),d=Object(f.a)(l,2),u=d[0],p=d[1];Object(a.useEffect)((function(){c.get("".concat("https://api.nasa.gov/planetary/apod").concat("?api_key=1Mvfb1zgc1HqrIe0skLQcd81uTFs3ei5qejUarGU")).then((function(n){s(n)})).catch((function(n){console.log("Error API_APOD_URL",n)}))}),[c]);return Object(j.jsx)(g.Provider,{value:{nasaPic:o,handleSearch:function(n){c.get("".concat("https://images-api.nasa.gov/search?q=").concat(n)).then((function(n){p(n)})).catch((function(n){return console.log("Error API_SEARCH_URL",n)}))},searchValue:u,handleClear:function(){p()}},children:e})};function O(){return Object(j.jsx)(y,{children:Object(j.jsx)("h1",{children:"Cargando..."})})}var v,y=u.a.div(h||(h=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  overflow: hidden;\n  background-color: #000;\n  color: #fff;\n  h1 {\n    animation: load infinite ease 750;\n    @keyframes load {\n      from {\n        opacity: 0%;\n      }\n      to {\n        opacity: 100%;\n      }\n    }\n  }\n"]))),k=t(11),w=t.n(k),C=t.p+"static/media/noImage.236e0a1a.png";function S(n){var e=n.props,t=Object(a.useState)(),c=Object(f.a)(t,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){e&&w.a.get("".concat(e.href)).then((function(n){var e=n.data.find((function(n){return".jpg"===n.substring(n.length-4)}));i(e)})).catch((function(n){return console.log("Background image not found",n)}))}),[e]),Object(j.jsx)(E,{title:e.data[0].title,style:{backgroundImage:"url(".concat(r||C,")")}})}var _,E=u.a.div(v||(v=Object(d.a)(["\n  height: 180px;\n  width: 180px;\n  background-position: center;\n  background-size: cover;\n\n  border: 1px solid white;\n"])));function I(n){var e=n.props;return Object(j.jsx)(A,{children:void 0===e?Object(j.jsx)("h1",{children:"Cargando..."}):e.map((function(n,e){return Object(j.jsx)(s.c,{"data-aos":"fade-up",to:n.data[0].nasa_id,children:Object(j.jsx)(S,{props:n})},e)}))})}var P,A=u.a.section(_||(_=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1em;\n  width: 95%;\n  margin: auto;\n  padding: 2em 0;\n"])));function N(){var n=x(),e=n.handleSearch,t=n.searchValue,c=n.handleClear,r=Object(a.useState)(),i=Object(f.a)(r,2),o=i[0],s=i[1];return Object(j.jsxs)(D,{children:[Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(o)},children:[Object(j.jsx)("input",{onChange:function(n){s(n.currentTarget.value)},type:"text",placeholder:"Moon",required:!0}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"submit",children:"Search"}),Object(j.jsx)("button",{type:"reset",className:"clear",onClick:c,children:"Clear"})]})]}),t?Object(j.jsx)(I,{props:t.data.collection.items}):null]})}var z,D=u.a.section(P||(P=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 1em;\n  margin-top: 3em;\n  form {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 1em;\n    input {\n      border: none;\n      border-bottom: 2px solid #d9d9d9;\n      outline: none;\n      transition: all 250;\n      padding: 15px;\n      border-radius: 5px;\n    }\n    div{\n      display: flex;\n      justify-content: center;\n      gap: 1em;\n      .clear{\n        color: #fb3737;\n      }\n      button {\n        padding: 10px 20px;\n        border-radius: 5px;\n        outline: none;\n        border: none;\n        background-color: #dadada;\n        font-size: 14px;\n        letter-spacing: 2px;\n        cursor: pointer;\n        font-weight: 600;\n        text-transform: uppercase;\n        &:hover{\n          background-color: #c7c7c7;\n        }\n      }\n    }\n  }\n"])));function L(){var n=x().nasaPic;return Object(j.jsxs)(F,{style:{backgroundImage:"url(".concat(void 0===n?"":n.data.hdurl,")")},children:[void 0===n?Object(j.jsx)(O,{}):Object(j.jsx)(p,{props:n.data}),Object(j.jsx)(N,{})]})}var q,F=u.a.section(z||(z=Object(d.a)(["\n  position: relative;\n  min-height: 250vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n"])));function M(n){var e=n.props,t=n.images;n.video;return Object(j.jsxs)(U,{children:[Object(j.jsxs)("h1",{children:["Article: ",e.title]}),Object(j.jsx)("div",{className:"description",children:Object(j.jsx)("p",{children:e.description})}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("h5",{children:["Photographer:",Object(j.jsxs)("span",{className:"important",children:[e.photographer,e.secondary_creator]})]}),Object(j.jsxs)("h5",{children:["Location: ",Object(j.jsx)("span",{className:"important",children:e.location})]})]}),Object(j.jsx)("h4",{children:"Images (large, small, original)"}),Object(j.jsx)("div",{className:"gallery",children:void 0===t?Object(j.jsx)("h2",{children:"Cargando imagenes..."}):t.map((function(n,e){return Object(j.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{loading:"lazy",className:"gallery_image",src:n,alt:n})},e)}))})]})}var T,U=u.a.section(q||(q=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 2em;\n  padding: 2em;\n  .description {\n    width: 75%;\n    margin: auto;\n  }\n  .details {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .important {\n    font-size: 20px;\n  }\n  .gallery {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 1em;\n    .gallery_image {\n      width: 300px;\n      object-fit: cover;\n    }\n  }\n"])));function B(){var n=Object(l.e)().nasaIdParam,e=Object(a.useState)([]),t=Object(f.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(),o=Object(f.a)(i,2),s=o[0],d=o[1],u=Object(a.useState)(),p=Object(f.a)(u,2),h=p[0],b=p[1];return Object(a.useEffect)((function(){w.a.get("https://images-assets.nasa.gov/image/".concat(n,"/collection.json")).then((function(n){var e=n.data.filter((function(n){return"jpg"===n.substring(n.length-3)}));r(e)})).catch((function(n){return console.log("Error SearchDetailContainer imgAxios",n)}))}),[n]),Object(a.useEffect)((function(){w.a.get("https://images-api.nasa.gov/search?q=".concat(n)).then((function(n){return d(n.data.collection.items[0].data[0])})).catch((function(n){return console.log("Error SearchDetailContainer setArticleAxios",n)}))}),[n]),Object(a.useEffect)((function(){w.a.get("https://images-assets.nasa.gov/image/".concat(n,"/collection.json")).then((function(n){var e=n.data.filter((function(n){return".mp4"===n.substring(n.length-4)}));b(e)})).catch((function(n){return console.log("Error SearchDetailContainer imgAxios",n)}))}),[n]),Object(j.jsx)(H,{children:void 0===s?Object(j.jsx)(O,{}):Object(j.jsx)(M,{props:s,images:c,videos:h})})}var R,H=u.a.section(T||(T=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])));t(67);function J(){return Object(j.jsx)(V,{children:Object(j.jsxs)("h2",{children:["Made with ",Object(j.jsx)("span",{children:"\u2665"})," by"," ",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/nicolasmauna/",rel:"noreferrer",target:"_blank",children:"Nicolas Mauna"})]})})}var V=u.a.footer(R||(R=Object(d.a)(["\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  a {\n    color: #37fb99;\n    text-decoration: none;\n    letter-spacing: 2px;\n    &:hover {\n      color: #37fb99;\n    }\n  }\n  span {\n    color: red;\n    font-size: 35px;\n  }\n"]))),G=[{path:"/:nasaIdParam",exact:!0,component:function(){return Object(j.jsx)(B,{})}},{path:"/",exact:!0,component:function(){return Object(j.jsx)(L,{})}}];var Q=function(){return Object(j.jsx)(m,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(s.b,{basename:"/",children:[Object(j.jsx)(s.a,{children:G.map((function(n,e){return Object(j.jsx)(l.a,{path:n.path,exact:n.exact,children:Object(j.jsx)(n.component,{})},e)}))}),Object(j.jsx)(J,{})]})})})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),c(n),a(n),r(n),i(n)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.400763ef.chunk.js.map