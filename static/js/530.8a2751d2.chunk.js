"use strict";(self.webpackChunkcvpage=self.webpackChunkcvpage||[]).push([[530],{530:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(982),a=n(885),o="Projects_cards_container__55uUd",s="Projects_CardElement__voefY",i="Projects_category_container__-yIHp",c="Projects_card__-vb8d",l="Projects_tooltiptext__alqQd",p="Projects_row_container__Y6pkh",_="Projects_backdrop__jyDwO",d="Projects_project_presenation__container__wt8Qi",u="Projects_close_panel__jtt31",j="Projects_project_presenation__exit__T4sJk",h="Projects_project_presentation__ln+VL",m="Projects_presentation_link__oaNjo",g="Projects_icon_link__0-EDy",v="Projects_current_page_indicator__0pAay",k="Projects_btn_link__llMp2",N=[{Name:"Javascript",Photo:"javascript.png"},{Name:"react",Photo:"react_project.png"},{Name:"Typescript",Photo:"typescript.png"},{Name:"Node",Photo:"nodejs.png"},{Name:"Sass",Photo:"sass.png"},{Name:"Angular",Photo:"angular.png"},{Name:"Vue",Photo:"vuejs.jpg"},{Name:"Firebase",Photo:"firebase.jpg"},{Name:"redux",Photo:"redux_icon.png"},{Name:"Supabase",Photo:"supabse.jpg"},{Name:"Query",Photo:"react_query.png"},{Name:"react native",Photo:"react_native.png"}],b=n(791);var x=n.p+"static/media/icon_github.7aa9e9140e14d9692b592cdefac167ad.svg";var P=n.p+"static/media/icon_bitbucket.dd613b9566dfb1a81524998b64cae760.svg",f=n(184),C=[{name:"github",logo:x},{name:"bitbucket",logo:P}];var y=function(e){var t=e.link,n=e.children,r=e.svg,a=!!r&&C.map((function(e){return e.name})).indexOf(r),o=!!r&&-1!==a,s=o&&{"--svg-url":'url("'.concat(C[a].logo,'")')};return(0,f.jsxs)("div",{className:m,children:[o&&(0,f.jsx)("div",{className:g,style:s}),(0,f.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:n})]})};var w=function(e){var t=(0,b.useRef)(),n=e.content,r=n.description,a=n.github,o=n.bitbucket,s="Portfolio"!==e.title,i=Object.entries(r).map((function(e,t){return(0,f.jsx)("p",{children:e[1]},e[0])})),c=function(n){t.current.classList.add(u),setTimeout(e.onClosePanel,600)};return(0,f.jsx)("div",{className:_,onClick:c,children:(0,f.jsxs)("div",{className:d,ref:t,children:[!s&&(0,f.jsxs)("div",{className:v,children:[" ","The current page"]}),(0,f.jsxs)("div",{className:h,onClick:function(e){return e.stopPropagation()},children:[(0,f.jsx)("h2",{children:e.title}),s&&(0,f.jsx)("button",{onClick:function(){e.link&&window.open(e.link,"_blank")},className:k,children:"Visit the website"}),i.length>0&&i,(0,f.jsxs)("div",{children:[a&&(0,f.jsx)(y,{link:a.link,svg:"github",children:a.text}),o&&(0,f.jsx)(y,{link:o.link,svg:"bitbucket",children:o.text})]})]}),(0,f.jsx)("button",{className:j,onClick:c,children:"\xd7"})]})})};function A(e){var t=(0,b.useState)(!1),r=(0,a.Z)(t,2),o=r[0],_=r[1];var d=Object.keys(e.categories).map((function(t,r){var a=e.categories[t],o=N.filter((function(e){return e.Name.toLowerCase()===a.toLowerCase()}));return o.length>0?(0,f.jsx)("img",{alt:o[0].Name,className:i,src:n(303)("./".concat(o[0].Photo))},r):(0,f.jsx)("div",{className:i,children:a},r)})),u=e.description;return(0,f.jsxs)(f.Fragment,{children:[o&&(0,f.jsx)(w,{onClosePanel:function(){_(!1)},content:e.presentation,title:e.children,link:e.link}),(0,f.jsxs)("div",{className:s,onClick:function(){e.presentation?_(!0):window.open(e.link,"_blank")},children:[(0,f.jsx)("div",{className:p,children:d}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("img",{src:n(303)("./".concat(e.photoName)),alt:e.photoName}),(0,f.jsx)("label",{children:e.children})]}),(0,f.jsx)("span",{className:l,onClick:function(e){e.stopPropagation()},children:u})]})]})}var L=n(240);function O(){var e=(0,b.useContext)(L.S),t=[];e.projectsArr&&(t=(0,r.Z)(e.projectsArr));var n=t.map((function(e,t){return(0,f.jsx)(A,{photoName:e.photoName,link:e.link,category:e.category,categories:e.categories,description:e.description,presentation:null===e||void 0===e?void 0:e.presentation,children:e.title},t)}));return(0,f.jsx)("section",{className:o,children:n})}}}]);
//# sourceMappingURL=530.8a2751d2.chunk.js.map