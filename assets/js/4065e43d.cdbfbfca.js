"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[7405],{1808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const r={title:"Cypress.Keyboard"},a=void 0,o={id:"api/cypress-api/keyboard-api",title:"Cypress.Keyboard",description:"The Keyboard API allows you set the default values for how the",source:"@site/docs/api/cypress-api/keyboard-api.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/keyboard-api",permalink:"/api/cypress-api/keyboard-api",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/keyboard-api.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Cypress.Keyboard"},sidebar:"api",previous:{title:"Cypress.isCy",permalink:"/api/cypress-api/iscy"},next:{title:"Cypress.platform",permalink:"/api/cypress-api/platform"}},l={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Arguments",id:"Arguments",level:3},{value:"Examples",id:"Examples",level:2},{value:"Slow down typing by increasing the keystroke delay",id:"Slow-down-typing-by-increasing-the-keystroke-delay",level:3},{value:"Remove the keystroke delay",id:"Remove-the-keystroke-delay",level:3},{value:"Notes",id:"Notes",level:2},{value:"Where to put Keyboard configuration",id:"Where-to-put-Keyboard-configuration",level:3},{value:"Set the keystroke delay in test configuration",id:"Set-the-keystroke-delay-in-test-configuration",level:3},{value:"See also",id:"See-also",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Icon:n,SupportFileConfiguration:r}=t;return n||y("Icon",!0),r||y("SupportFileConfiguration",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The Keyboard API allows you set the default values for how the\n",(0,s.jsx)(t.a,{href:"/api/commands/type",children:".type()"})," command is executed."]}),"\n",(0,s.jsx)(t.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"Cypress.Keyboard.defaults(options)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{name:"angle-right"})," ",(0,s.jsxs)(t.strong,{children:["options ",(0,s.jsx)(t.em,{children:"(Object)"})]})]}),"\n",(0,s.jsx)(t.p,{children:"An object containing the following:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"keystrokeDelay"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"10"})}),(0,s.jsxs)(t.td,{children:["The delay, in milliseconds, between keystrokes while typing with ",(0,s.jsx)(t.a,{href:"/api/commands/type",children:".type()"}),". Set to ",(0,s.jsx)(t.code,{children:"0"})," to remove the delay. Must be a non-negative number."]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"Slow-down-typing-by-increasing-the-keystroke-delay",children:"Slow down typing by increasing the keystroke delay"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"Cypress.Keyboard.defaults({\n  keystrokeDelay: 20,\n})\n"})}),"\n",(0,s.jsx)(t.h3,{id:"Remove-the-keystroke-delay",children:"Remove the keystroke delay"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"Cypress.Keyboard.defaults({\n  keystrokeDelay: 0,\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"Notes",children:"Notes"}),"\n",(0,s.jsx)(t.h3,{id:"Where-to-put-Keyboard-configuration",children:"Where to put Keyboard configuration"}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(t.h3,{id:"Set-the-keystroke-delay-in-test-configuration",children:"Set the keystroke delay in test configuration"}),"\n",(0,s.jsxs)(t.p,{children:["The keystroke delay can also be set via\n",(0,s.jsx)(t.a,{href:"/app/core-concepts/writing-and-organizing-tests#Test-Configuration",children:"test configuration"}),",\nwhich can be useful when setting it for a single test or a subset of tests."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"it('removes keystroke delay for all typing in this test', { keystrokeDelay: 0 }, () => {\n  cy.get('input').eq(0).type('fast typing')\n  cy.get('input').eq(1).type('more fast typing')\n})\n\ndescribe('removes keystroke delay in all tests in this suite', { keystrokeDelay: 0 }, () => {\n  it('types fast in the first input', () => {\n    cy.get('input').eq(0).type('fast typing')\n  })\n\n  it('types fast in the second input', () => {\n    cy.get('input').eq(1).type('more fast typing')\n  })\n}))\n"})}),"\n",(0,s.jsx)(t.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/api/commands/type",children:(0,s.jsx)(t.code,{children:".type()"})})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function y(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);