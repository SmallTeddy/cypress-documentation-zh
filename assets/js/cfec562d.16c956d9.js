"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[1822],{2317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(5893),t=s(1151);const i={title:"Cypress.dom"},l=void 0,a={id:"api/cypress-api/dom",title:"Cypress.dom",description:"Cypress.dom.method() is a collection of DOM related helper methods.",source:"@site/docs/api/cypress-api/dom.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/dom",permalink:"/api/cypress-api/dom",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/dom.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Cypress.dom"},sidebar:"api",previous:{title:"Cypress.log",permalink:"/api/cypress-api/cypress-log"},next:{title:"Cypress.ensure",permalink:"/api/cypress-api/ensure"}},d={},c=[{value:"Syntax",id:"Syntax",level:2},{value:"Examples",id:"Examples",level:2},{value:"Is attached",id:"Is-attached",level:3},{value:"Is descendent",id:"Is-descendent",level:3},{value:"Is detached",id:"Is-detached",level:3},{value:"Is document",id:"Is-document",level:3},{value:"Is DOM",id:"Is-DOM",level:3},{value:"Is element",id:"Is-element",level:3},{value:"Is focusable",id:"Is-focusable",level:3},{value:"Is focused",id:"Is-focused",level:3},{value:"Is hidden",id:"Is-hidden",level:3},{value:"Is jQuery",id:"Is-jQuery",level:3},{value:"Is scrollable",id:"Is-scrollable",level:3},{value:"Is visible",id:"Is-visible",level:3},{value:"Is window",id:"Is-window",level:3},{value:"Unwrap",id:"Unwrap",level:3},{value:"Wrap",id:"Wrap",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Cypress.dom.method()"})," is a collection of DOM related helper methods."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["There are actually dozens of methods attached to ",(0,r.jsx)(n.code,{children:"Cypress.dom"})," that are not\ndocumented below. These methods are used internally by Cypress in nearly every\nsingle built in command."]}),(0,r.jsxs)(n.p,{children:["We suggest\n",(0,r.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/blob/develop/packages/driver/src/dom/index.ts",children:"reading through the source code here"}),"\nto see all of the methods and what they do."]})]}),"\n",(0,r.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"Cypress.dom.isHidden(element)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"Is-attached",children:"Is attached"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element is attached to the DOM."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('button').then(($el) => {\n  Cypress.dom.isAttached($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-descendent",children:"Is descendent"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element is a descendent of another\nelement."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('div').then(($el) => {\n  Cypress.dom.isDescendent($el.parent(), $el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-detached",children:"Is detached"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element is detached from the DOM."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('button').then(($el) => {\n  Cypress.dom.isDetached($el) // false\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-document",children:"Is document"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether a node is of document type."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('p').then(($el) => {\n  Cypress.dom.isDocument($el) // false\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-DOM",children:"Is DOM"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an object is a DOM object."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('body').then(($el) => {\n  Cypress.dom.isDom($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-element",children:"Is element"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an object is a DOM element."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('p').then(($el) => {\n  Cypress.dom.isElement($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-focusable",children:"Is focusable"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element can receive focus."})}),"\n",(0,r.jsxs)(n.p,{children:["Cypress internally uses this method ",(0,r.jsx)(n.em,{children:"everywhere"})," to figure out whether an\nelement is hidden,\n",(0,r.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements",children:"mostly for actionability"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('input').then(($el) => {\n  Cypress.dom.isFocusable($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-focused",children:"Is focused"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element currently has focus."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('button').then(($el) => {\n  Cypress.dom.isFocused($el)\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-hidden",children:"Is hidden"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element is hidden."})}),"\n",(0,r.jsxs)(n.p,{children:["Cypress internally uses this method ",(0,r.jsx)(n.em,{children:"everywhere"})," to figure out whether an\nelement is hidden,\n",(0,r.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements",children:"mostly for actionability"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('p').then(($el) => {\n  Cypress.dom.isHidden($el) // false\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-jQuery",children:"Is jQuery"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an object is a jQuery object."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('input').then(($el) => {\n  Cypress.dom.isJquery($el)\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-scrollable",children:"Is scrollable"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element is scrollable."})}),"\n",(0,r.jsxs)(n.p,{children:["Cypress internally uses this method ",(0,r.jsx)(n.em,{children:"everywhere"})," to figure out whether an\nelement can be scrolled,\n",(0,r.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements",children:"mostly for actionability"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('body').then(($el) => {\n  Cypress.dom.isScrollable($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-visible",children:"Is visible"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an element is visible."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('img').then(($el) => {\n  Cypress.dom.isVisible($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Is-window",children:"Is window"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a boolean indicating whether an object is a window object."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get(window).then(($el) => {\n  Cypress.dom.isWindow($el) // true\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Unwrap",children:"Unwrap"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns an array of raw elements pulled out from a jQuery object."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('body').then(($el) => {\n  Cypress.dom.unwrap($el)\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"Wrap",children:"Wrap"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns a jQuery object obtained by wrapping an object in jQuery."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cy.get('p').then(($el) => {\n  Cypress.dom.wrap($el)\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var r=s(7294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);