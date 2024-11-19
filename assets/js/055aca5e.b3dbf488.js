"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[954],{9512:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var c=o(5893),i=o(1151);const t={title:"location",e2eSpecific:!0,slug:"/api/commands/location"},s=void 0,l={id:"api/commands/location",title:"location",description:"Get the global window.location object of the page that is currently active.",source:"@site/docs/api/commands/location.mdx",sourceDirName:"api/commands",slug:"/api/commands/location",permalink:"/api/commands/location",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/location.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"location",e2eSpecific:!0,slug:"/api/commands/location"},sidebar:"api",previous:{title:"last",permalink:"/api/commands/last"},next:{title:"log",permalink:"/api/commands/log"}},a={},r=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"When not given a <code>key</code> argument:",id:"When-not-given-a-key-argument",level:4},{value:"When given a <code>key</code> argument:",id:"When-given-a-key-argument",level:4},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Make assertions about every location property",id:"Make-assertions-about-every-location-property",level:4},{value:"Check location for query params and pathname",id:"Check-location-for-query-params-and-pathname",level:4},{value:"Key",id:"Key",level:3},{value:"Assert that a redirect works",id:"Assert-that-a-redirect-works",level:4},{value:"Notes",id:"Notes",level:2},{value:"Native Location",id:"Native-Location",level:3},{value:"No need to use <code>window.location</code>",id:"No-need-to-use-windowlocation",level:4},{value:"Console output of <code>window.location</code>",id:"Console-output-of-windowlocation",level:4},{value:"Console output of <code>.location()</code>",id:"Console-output-of-location",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{DocsImage:o,Icon:t}=n;return o||p("DocsImage",!0),t||p("Icon",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["Get the global ",(0,c.jsx)(n.code,{children:"window.location"})," object of the page that is currently active."]}),"\n",(0,c.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.location()\ncy.location(key)\ncy.location(options)\ncy.location(key, options)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(t,{name:"check-circle",color:"green"})," ",(0,c.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.location() // Get location object\ncy.location('host') // Get the host of the location object\ncy.location('port') // Get the port of the location object\n"})}),"\n",(0,c.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(t,{name:"angle-right"})," ",(0,c.jsxs)(n.strong,{children:["key ",(0,c.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,c.jsx)(n.p,{children:"A key on the location object. Returns this value instead of the full location\nobject."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(t,{name:"angle-right"})," ",(0,c.jsxs)(n.strong,{children:["options ",(0,c.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,c.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,c.jsx)(n.code,{children:"cy.location()"}),"."]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Option"}),(0,c.jsx)(n.th,{children:"Default"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"log"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"true"})}),(0,c.jsxs)(n.td,{children:["Displays the command in the ",(0,c.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"timeout"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,c.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,c.jsxs)(n.td,{children:["Time to wait for ",(0,c.jsx)(n.code,{children:"cy.location()"})," to resolve before ",(0,c.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,c.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,c.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"cy.location()"})," is a query, and it is ",(0,c.jsx)(n.em,{children:"safe"})," to chain further commands."]}),"\n",(0,c.jsxs)(n.h4,{id:"When-not-given-a-key-argument",children:["When not given a ",(0,c.jsx)(n.code,{children:"key"})," argument:"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"cy.location()"})," yields the location object with the following properties:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"hash"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"host"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"hostname"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"href"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"origin"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"pathname"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"port"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"protocol"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"search"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"toString"})}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"When-given-a-key-argument",children:["When given a ",(0,c.jsx)(n.code,{children:"key"})," argument:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cy.location()"})," yields the value of the location property as a string"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,c.jsx)(n.h3,{id:"No-Args",children:"No Args"}),"\n",(0,c.jsx)(n.h4,{id:"Make-assertions-about-every-location-property",children:"Make assertions about every location property"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.visit('http://localhost:8000/app/index.html?q=dan#/users/123/edit')\n\ncy.location().should((loc) => {\n  expect(loc.hash).to.eq('#/users/123/edit')\n  expect(loc.host).to.eq('localhost:8000')\n  expect(loc.hostname).to.eq('localhost')\n  expect(loc.href).to.eq(\n    'http://localhost:8000/app/index.html?q=dan#/users/123/edit'\n  )\n  expect(loc.origin).to.eq('http://localhost:8000')\n  expect(loc.pathname).to.eq('/app/index.html')\n  expect(loc.port).to.eq('8000')\n  expect(loc.protocol).to.eq('http:')\n  expect(loc.search).to.eq('?q=dan')\n  expect(loc.toString()).to.eq(\n    'http://localhost:8000/app/index.html?q=brian#/users/123/edit'\n  )\n})\n"})}),"\n",(0,c.jsx)(n.h4,{id:"Check-location-for-query-params-and-pathname",children:"Check location for query params and pathname"}),"\n",(0,c.jsxs)(n.p,{children:["We can yield the location object within a ",(0,c.jsx)(n.a,{href:"/api/commands/should",children:(0,c.jsx)(n.code,{children:".should()"})}),"\ncommand and work with it directly."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.get('#search').type('niklas{enter}')\ncy.location().should((loc) => {\n  expect(loc.search).to.eq('?search=niklas')\n  expect(loc.pathname).to.eq('/users')\n})\n"})}),"\n",(0,c.jsx)(n.h3,{id:"Key",children:"Key"}),"\n",(0,c.jsx)(n.h4,{id:"Assert-that-a-redirect-works",children:"Assert that a redirect works"}),"\n",(0,c.jsxs)(n.p,{children:["Grab only the ",(0,c.jsx)(n.code,{children:"pathname"})," and add an assertion."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.visit('http://localhost:3000/admin')\ncy.location('pathname').should('eq', '/login')\n"})}),"\n",(0,c.jsx)(n.h2,{id:"Notes",children:"Notes"}),"\n",(0,c.jsx)(n.h3,{id:"Native-Location",children:"Native Location"}),"\n",(0,c.jsxs)(n.h4,{id:"No-need-to-use-windowlocation",children:["No need to use ",(0,c.jsx)(n.code,{children:"window.location"})]}),"\n",(0,c.jsxs)(n.p,{children:["Cypress automatically normalizes the ",(0,c.jsx)(n.code,{children:"cy.location()"})," command and strips out\nextraneous values and properties found in ",(0,c.jsx)(n.code,{children:"window.location"}),". Also, the object\nliteral yielded by ",(0,c.jsx)(n.code,{children:"cy.location()"})," is a basic object literal, not the special\n",(0,c.jsx)(n.code,{children:"window.location"})," object."]}),"\n",(0,c.jsxs)(n.p,{children:["When changing properties on the real ",(0,c.jsx)(n.code,{children:"window.location"})," object, it forces the\nbrowser to navigate away. In Cypress, the object yielded is a plain object, so\nchanging its properties will have no effect on navigation."]}),"\n",(0,c.jsxs)(n.h4,{id:"Console-output-of-windowlocation",children:["Console output of ",(0,c.jsx)(n.code,{children:"window.location"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.window().then((win) => {\n  console.log(win.location)\n})\n"})}),"\n",(0,c.jsx)(o,{src:"/img/api/location/window-location-object-printed-in-console-log.png",alt:"Console.log of window.location"}),"\n",(0,c.jsxs)(n.h4,{id:"Console-output-of-location",children:["Console output of ",(0,c.jsx)(n.code,{children:".location()"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.location().then((loc) => {\n  console.log(loc)\n})\n"})}),"\n",(0,c.jsx)(o,{src:"/img/api/location/special-cypress-location-object-logged-in-console-output.png",alt:"Console Log of Cypress location command"}),"\n",(0,c.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,c.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,c.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cy.location()"})," requires being chained off of ",(0,c.jsx)(n.code,{children:"cy"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,c.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cy.location()"})," will automatically\n",(0,c.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"})," until all chained assertions have\npassed"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,c.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cy.location()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.em,{children:"Assert on the location's href"})})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"cy.location().should((loc) => {\n  expect(loc.href).to.include('commands/querying')\n})\n"})}),"\n",(0,c.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,c.jsx)(o,{src:"/img/api/location/make-assertion-about-location-url-in-tests.png",alt:"Command Log of Cypress location command"}),"\n",(0,c.jsxs)(n.p,{children:["When clicking on ",(0,c.jsx)(n.code,{children:"location"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,c.jsx)(o,{src:"/img/api/location/location-object-in-console-log.png",alt:"Console Log of Cypress location command"}),"\n",(0,c.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/api/commands/hash",children:(0,c.jsx)(n.code,{children:"cy.hash()"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/api/commands/url",children:(0,c.jsx)(n.code,{children:"cy.url()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var c=o(7294);const i={},t=c.createContext(i);function s(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);