"use strict";(self.webpackChunkcvpage=self.webpackChunkcvpage||[]).push([[161],{161:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var o=n(982),a=n(885),s="Projects_cards_container__I5qf4",r="Projects_CardElement__1kF6H",c="Projects_category_container__2z8SO",i="Projects_card__6xl7W",l="Projects_tooltiptext__YP9ZR",p="Projects_column_container__5CZub",_="Projects_backdrop__w7WHA",u="Projects_exit_btn__gX7Vn",d="Projects_project_presentation__B+7Lq",j="Projects_close_panel__eRAId",m=[{Name:"Javascript",Photo:"JavaScript-logo.png"},{Name:"React",Photo:"react-Project.png"},{Name:"Typescript",Photo:"typescript-logo.png"},{Name:"Node",Photo:"node-js.png"},{Name:"Sass",Photo:"sass.png"},{Name:"Angular",Photo:"Angular.png"},{Name:"Vue",Photo:"vue_js.jpg"},{Name:"Firebase",Photo:"firebase.jpg"}],h=n(791),g=n(184);var N=function(e){var t=(0,h.useRef)();return(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("div",{className:d,ref:t}),(0,g.jsx)("button",{className:u,onClick:function(n){t.current.classList.add(j),setTimeout(e.onClosePanel,600)},children:"\xd7"})]})};function P(e){var t=(0,h.useState)(!1),o=(0,a.Z)(t,2),s=o[0],_=o[1];var u=Object.keys(e.categories).map((function(t,o){var a=e.categories[t],s=m.filter((function(e){return e.Name===a}));return s.length>0?(0,g.jsx)("img",{alt:s[0].Name,className:c,src:n(303)("./".concat(s[0].Photo))},o):(0,g.jsx)("div",{className:c,children:a},o)})),d=e.description;return(0,g.jsxs)(g.Fragment,{children:[s&&(0,g.jsx)(N,{onClosePanel:function(){_(!1)}}),(0,g.jsxs)("div",{className:r,onClick:function(){_(!0),e.presentation?_(!0):window.open(e.link,"_blank")},children:[(0,g.jsx)("div",{className:p,children:u}),(0,g.jsxs)("div",{className:i,children:[(0,g.jsx)("img",{src:n(303)("./".concat(e.photoName)),alt:e.photoName}),(0,g.jsx)("label",{children:e.children})]}),(0,g.jsx)("span",{className:l,onClick:function(e){e.stopPropagation()},children:d})]})]})}var v=n(240);function f(){var e=(0,h.useContext)(v.S),t=[];e.projectsArr&&(t=(0,o.Z)(e.projectsArr));var n=t.map((function(e,t){return(0,g.jsx)(P,{photoName:e.photoName,link:e.link,category:e.category,categories:e.categories,description:e.description,presentation:null===e||void 0===e?void 0:e.presentation,children:e.title},t)}));return(0,g.jsx)("section",{className:s,children:n})}}}]);
//# sourceMappingURL=161.54bfdb62.chunk.js.map