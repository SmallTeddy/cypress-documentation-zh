"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[6632],{5486:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(5893),n=t(1151);const a={title:"Cypress.platform"},o=void 0,i={id:"api/cypress-api/platform",title:"Cypress.platform",description:"Cypress.platform returns the underlying OS name, as returned from Node's",source:"@site/docs/api/cypress-api/platform.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/platform",permalink:"/api/cypress-api/platform",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/platform.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Cypress.platform"},sidebar:"api",previous:{title:"Cypress.Keyboard",permalink:"/api/cypress-api/keyboard-api"},next:{title:"Cypress.require",permalink:"/api/cypress-api/require"}},p={},l=[{value:"Syntax",id:"Syntax",level:2},{value:"Examples",id:"Examples",level:2},{value:"Conditionals",id:"Conditionals",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Cypress.platform"})," returns the underlying OS name, as returned from Node's\n",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/os.html#os_os_platform",children:(0,r.jsx)(s.code,{children:"os.platform()"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Even though Cypress runs in the browser, it automatically makes this property\navailable for use in your tests."}),"\n",(0,r.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"Cypress.platform // 'darwin'\n"})}),"\n",(0,r.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"Conditionals",children:"Conditionals"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"it('has JSON files', () => {\n  // if windows do one thing, else do another\n  const cmd = Cypress.platform === 'win32' ? 'dir *.json' : 'ls *.json'\n\n  cy.exec(cmd).its('stdout').should('include', 'package.json')\n})\n"})})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>o});var r=t(7294);const n={},a=r.createContext(n);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);