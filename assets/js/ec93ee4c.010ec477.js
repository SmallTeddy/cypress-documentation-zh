"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[9126],{8861:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(5893),l=s(1151);const t={title:"prev",slug:"/api/commands/prev"},r=void 0,c={id:"api/commands/prev",title:"prev",description:"Get the immediately preceding sibling of each element in a set of the elements.",source:"@site/docs/api/commands/prev.mdx",sourceDirName:"api/commands",slug:"/api/commands/prev",permalink:"/api/commands/prev",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/prev.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"prev",slug:"/api/commands/prev"},sidebar:"api",previous:{title:"pause",permalink:"/api/commands/pause"},next:{title:"prevAll",permalink:"/api/commands/prevall"}},o={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Find the previous element of the element with class of <code>active</code>",id:"Find-the-previous-element-of-the-element-with-class-of-active",level:4},{value:"Selector",id:"Selector",level:3},{value:"Find the previous element with a class of <code>active</code>",id:"Find-the-previous-element-with-a-class-of-active",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{DocsImage:s,Icon:t}=n;return s||p("DocsImage",!0),t||p("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Get the immediately preceding sibling of each element in a set of the elements."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The querying behavior of this command matches exactly how\n",(0,i.jsx)(n.a,{href:"http://api.jquery.com/prev",children:(0,i.jsx)(n.code,{children:".prev()"})})," works in jQuery."]})}),"\n",(0,i.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:".prev()\n.prev(selector)\n.prev(options)\n.prev(selector, options)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{name:"check-circle",color:"green"})," ",(0,i.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('tr.highlight').prev() // Yield previous 'tr'\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{name:"exclamation-triangle",color:"red"})," ",(0,i.jsx)(n.strong,{children:"Incorrect Usage"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.prev() // Errors, cannot be chained off 'cy'\ncy.getCookies().prev() // Errors, 'getCookies' does not yield DOM element\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{name:"angle-right"})," ",(0,i.jsxs)(n.strong,{children:["selector ",(0,i.jsx)(n.em,{children:"(String selector)"})]})]}),"\n",(0,i.jsx)(n.p,{children:"A selector used to filter matching DOM elements."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{name:"angle-right"})," ",(0,i.jsxs)(n.strong,{children:["options ",(0,i.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,i.jsx)(n.code,{children:".prev()"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"log"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["Displays the command in the ",(0,i.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"timeout"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,i.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,i.jsxs)(n.td,{children:["Time to wait for ",(0,i.jsx)(n.code,{children:".prev()"})," to resolve before ",(0,i.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,i.jsx)(t,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," yields the new DOM element(s) it found."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," is a query, and it is ",(0,i.jsx)(n.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"No-Args",children:"No Args"}),"\n",(0,i.jsxs)(n.h4,{id:"Find-the-previous-element-of-the-element-with-class-of-active",children:["Find the previous element of the element with class of ",(0,i.jsx)(n.code,{children:"active"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li>Cockatiels</li>\n  <li>Lorikeets</li>\n  <li class="active">Cockatoos</li>\n  <li>Conures</li>\n  <li>Eclectus</li>\n</ul>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// yields <li>Lorikeets</li>\ncy.get('.active').prev()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Selector",children:"Selector"}),"\n",(0,i.jsxs)(n.h4,{id:"Find-the-previous-element-with-a-class-of-active",children:["Find the previous element with a class of ",(0,i.jsx)(n.code,{children:"active"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li>Cockatiels</li>\n  <li>Lorikeets</li>\n  <li class="active">Cockatoos</li>\n  <li>Conures</li>\n  <li>Eclectus</li>\n</ul>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// yields <li>Cockatoos</li>\ncy.get('li').prev('.active')\n"})}),"\n",(0,i.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,i.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,i.jsx)(t,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," requires being chained off a command that yields DOM element(s)."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,i.jsx)(t,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," will automatically ",(0,i.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil the element(s)\n",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," will automatically ",(0,i.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,i.jsx)(t,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," can time out waiting for the element(s) to\n",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".prev()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsxs)(n.em,{children:["Find the previous element of the active ",(0,i.jsx)(n.code,{children:"li"})]})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('.left-nav').find('li.active').prev()\n"})}),"\n",(0,i.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,i.jsx)(s,{src:"/img/api/prev/find-prev-element-in-list-of-els.png",alt:"Command Log prev"}),"\n",(0,i.jsxs)(n.p,{children:["When clicking on ",(0,i.jsx)(n.code,{children:"prev"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,i.jsx)(s,{src:"/img/api/prev/previous-element-in-console-log.png",alt:"Console Log prev"}),"\n",(0,i.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/next",children:(0,i.jsx)(n.code,{children:".next()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/prevall",children:(0,i.jsx)(n.code,{children:".prevAll()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/prevuntil",children:(0,i.jsx)(n.code,{children:".prevUntil()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(7294);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);