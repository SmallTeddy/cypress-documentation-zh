"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[3856],{399:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var i=n(5893),r=n(1151);const t={title:"Cypress.isCy"},a=void 0,c={id:"api/cypress-api/iscy",title:"Cypress.isCy",description:"Cypress.isCy() checks if a variable is a valid instance of cy or a cy",source:"@site/docs/api/cypress-api/iscy.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/iscy",permalink:"/api/cypress-api/iscy",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/iscy.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Cypress.isCy"},sidebar:"api",previous:{title:"Cypress.isBrowser",permalink:"/api/cypress-api/isbrowser"},next:{title:"Cypress.Keyboard",permalink:"/api/cypress-api/keyboard-api"}},o={},p=[{value:"Syntax",id:"Syntax",level:2},{value:"Arguments",id:"Arguments",level:3},{value:"Examples",id:"Examples",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Icon:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Cypress.isCy()"})," checks if a variable is a valid instance of ",(0,i.jsx)(s.code,{children:"cy"})," or a ",(0,i.jsx)(s.code,{children:"cy"}),"\nchainable."]}),"\n",(0,i.jsxs)(s.p,{children:["This utility may be useful when writing a plugin using ",(0,i.jsx)(s.a,{href:"/api/node-events/overview",children:"Node Events"}),"\nfor Cypress and you want to determine if a value is a valid Cypress chainable."]}),"\n",(0,i.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"Cypress.isCy(obj)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(n,{name:"angle-right"})," ",(0,i.jsxs)(s.strong,{children:["obj ",(0,i.jsx)(s.em,{children:"(Object)"})]})]}),"\n",(0,i.jsx)(s.p,{children:"The object to test."}),"\n",(0,i.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"Cypress.isCy(cy) // true\n\nconst chainer = cy.wrap().then(() => {\n  Cypress.isCy(chainer) // true\n})\n\nCypress.isCy(undefined) // false\n\nCypress.isCy(() => {}) // false\n"})})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var i=n(7294);const r={},t=i.createContext(r);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);