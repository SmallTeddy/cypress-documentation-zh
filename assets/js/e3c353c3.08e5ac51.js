"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[7664],{8264:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(5893),c=n(1151);const i={title:"closest",slug:"/api/commands/closest"},l=void 0,o={id:"api/commands/closest",title:"closest",description:"Get the first DOM element that matches the selector (whether it be itself or one",source:"@site/docs/api/commands/closest.mdx",sourceDirName:"api/commands",slug:"/api/commands/closest",permalink:"/api/commands/closest",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/closest.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"closest",slug:"/api/commands/closest"},sidebar:"api",previous:{title:"clock",permalink:"/api/commands/clock"},next:{title:"contains",permalink:"/api/commands/contains"}},r={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"Selector",id:"Selector",level:3},{value:"Find the closest element of the <code>.error</code> with the class &#39;banner&#39;",id:"Find-the-closest-element-of-the-error-with-the-class-banner",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"Find the closest element of <code>li.active</code> with the class &#39;nav&#39;",id:"Find-the-closest-element-of-liactive-with-the-class-nav",level:4},{value:"See also",id:"See-also",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{DocsImage:n,Icon:i}=s;return n||m("DocsImage",!0),i||m("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Get the first DOM element that matches the selector (whether it be itself or one\nof its ancestors)."}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["The querying behavior of this command matches exactly how\n",(0,t.jsx)(s.a,{href:"https://api.jquery.com/closest",children:(0,t.jsx)(s.code,{children:".closest()"})})," works in jQuery."]})}),"\n",(0,t.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:".closest(selector)\n.closest(selector, options)\n"})}),"\n",(0,t.jsx)(s.h3,{id:"Usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(i,{name:"check-circle",color:"green"})," ",(0,t.jsx)(s.strong,{children:"Correct Usage"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.get('td').closest('.filled') // Yield closest el with class '.filled'\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(i,{name:"exclamation-triangle",color:"red"})," ",(0,t.jsx)(s.strong,{children:"Incorrect Usage"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.closest('.active') // Errors, cannot be chained off 'cy'\ncy.clock().closest() // Errors, 'clock' does not yield DOM elements\n"})}),"\n",(0,t.jsx)(s.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(i,{name:"angle-right"})," ",(0,t.jsxs)(s.strong,{children:["selector ",(0,t.jsx)(s.em,{children:"(String selector)"})]})]}),"\n",(0,t.jsx)(s.p,{children:"A selector used to filter matching DOM elements."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(i,{name:"angle-right"})," ",(0,t.jsxs)(s.strong,{children:["options ",(0,t.jsx)(s.em,{children:"(Object)"})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Pass in an options object to change the default behavior of ",(0,t.jsx)(s.code,{children:".closest()"}),"."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Option"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"log"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsxs)(s.td,{children:["Displays the command in the ",(0,t.jsx)(s.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"timeout"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/app/references/configuration#Timeouts",children:(0,t.jsx)(s.code,{children:"defaultCommandTimeout"})})}),(0,t.jsxs)(s.td,{children:["Time to wait for ",(0,t.jsx)(s.code,{children:".closest()"})," to resolve before ",(0,t.jsx)(s.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,t.jsxs)(s.h3,{id:"Yields",children:["Yields ",(0,t.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,t.jsx)(i,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," yields the new DOM element(s) it found."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," is a query, and it is ",(0,t.jsx)(s.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,t.jsx)(s.h3,{id:"Selector",children:"Selector"}),"\n",(0,t.jsxs)(s.h4,{id:"Find-the-closest-element-of-the-error-with-the-class-banner",children:["Find the closest element of the ",(0,t.jsx)(s.code,{children:".error"})," with the class 'banner'"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.get('p.error').closest('.banner')\n"})}),"\n",(0,t.jsx)(s.h2,{id:"Rules",children:"Rules"}),"\n",(0,t.jsxs)(s.h3,{id:"Requirements",children:["Requirements ",(0,t.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,t.jsx)(i,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," requires being chained off a command that yields DOM element(s)."]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"Assertions",children:["Assertions ",(0,t.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,t.jsx)(i,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," will automatically ",(0,t.jsx)(s.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil the element(s)\n",(0,t.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," will automatically ",(0,t.jsx)(s.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed."]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"Timeouts",children:["Timeouts ",(0,t.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,t.jsx)(i,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," can time out waiting for the element(s) to\n",(0,t.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".closest()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,t.jsxs)(s.h4,{id:"Find-the-closest-element-of-liactive-with-the-class-nav",children:["Find the closest element of ",(0,t.jsx)(s.code,{children:"li.active"})," with the class 'nav'"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.get('li.active').closest('.nav')\n"})}),"\n",(0,t.jsx)(s.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,t.jsx)(n,{src:"/img/api/closest/find-closest-nav-element-in-test.png",alt:"Command Log closest"}),"\n",(0,t.jsxs)(s.p,{children:["When clicking on the ",(0,t.jsx)(s.code,{children:"closest"})," command within the command log, the console\noutputs the following:"]}),"\n",(0,t.jsx)(n,{src:"/img/api/closest/closest-console-logs-elements-found.png",alt:"console.log closest"}),"\n",(0,t.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/first",children:(0,t.jsx)(s.code,{children:".first()"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/parent",children:(0,t.jsx)(s.code,{children:".parent()"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/parents",children:(0,t.jsx)(s.code,{children:".parents()"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/parentsuntil",children:(0,t.jsx)(s.code,{children:".parentsUntil()"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/prev",children:(0,t.jsx)(s.code,{children:".prev()"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/prevall",children:(0,t.jsx)(s.code,{children:".prevAll()"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/commands/prevuntil",children:(0,t.jsx)(s.code,{children:".prevUntil()"})})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>l});var t=n(7294);const c={},i=t.createContext(c);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);