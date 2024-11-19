"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[9228],{8773:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var s=l(5893),i=l(1151);const r={title:"prevAll",slug:"/api/commands/prevall"},c=void 0,t={id:"api/commands/prevall",title:"prevAll",description:"Get all previous siblings of each DOM element in a set of matched DOM elements.",source:"@site/docs/api/commands/prevall.mdx",sourceDirName:"api/commands",slug:"/api/commands/prevall",permalink:"/api/commands/prevall",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/prevall.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"prevAll",slug:"/api/commands/prevall"},sidebar:"api",previous:{title:"prev",permalink:"/api/commands/prev"},next:{title:"prevUntil",permalink:"/api/commands/prevuntil"}},o={},a=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Find all of the element&#39;s siblings before <code>.third</code>",id:"Find-all-of-the-elements-siblings-before-third",level:4},{value:"Selector",id:"Selector",level:3},{value:"Find all of the previous siblings of each <code>li</code>. Keep only the ones with a class <code>selected</code>",id:"Find-all-of-the-previous-siblings-of-each-li-Keep-only-the-ones-with-a-class-selected",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{DocsImage:l,Icon:r}=n;return l||p("DocsImage",!0),r||p("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Get all previous siblings of each DOM element in a set of matched DOM elements."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The querying behavior of this command matches exactly how\n",(0,s.jsx)(n.a,{href:"http://api.jquery.com/prevAll",children:(0,s.jsx)(n.code,{children:".prevAll()"})})," works in jQuery."]})}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:".prevAll()\n.prevAll(selector)\n.prevAll(options)\n.prevAll(selector, options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('.active').prevAll() // Yield all links previous to `.active`\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"exclamation-triangle",color:"red"})," ",(0,s.jsx)(n.strong,{children:"Incorrect Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.prevAll() // Errors, cannot be chained off 'cy'\ncy.getCookies().prevAll() // Errors, 'getCookies' does not yield DOM element\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["selector ",(0,s.jsx)(n.em,{children:"(String selector)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"A selector used to filter matching DOM elements."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:".prevAll()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"log"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Displays the command in the ",(0,s.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timeout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,s.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,s.jsxs)(n.td,{children:["Time to wait for ",(0,s.jsx)(n.code,{children:".prevAll()"})," to resolve before ",(0,s.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," yields the new DOM element(s) it found."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," is a query, and it is ",(0,s.jsx)(n.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"No-Args",children:"No Args"}),"\n",(0,s.jsxs)(n.h4,{id:"Find-all-of-the-elements-siblings-before-third",children:["Find all of the element's siblings before ",(0,s.jsx)(n.code,{children:".third"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li>apples</li>\n  <li>oranges</li>\n  <li class="third">bananas</li>\n  <li>pineapples</li>\n  <li>grapes</li>\n</ul>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// yields [<li>apples</li>, <li>oranges</li>]\ncy.get('.third').prevAll()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Selector",children:"Selector"}),"\n",(0,s.jsxs)(n.h4,{id:"Find-all-of-the-previous-siblings-of-each-li-Keep-only-the-ones-with-a-class-selected",children:["Find all of the previous siblings of each ",(0,s.jsx)(n.code,{children:"li"}),". Keep only the ones with a class ",(0,s.jsx)(n.code,{children:"selected"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li>apples</li>\n  <li>oranges</li>\n  <li>bananas</li>\n  <li class="selected">pineapples</li>\n  <li>grapes</li>\n</ul>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// yields <li>pineapples</li>\ncy.get('li').prevAll('.selected')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," requires being chained off a command that yields DOM element(s)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil the element(s)\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," can time out waiting for the element(s) to\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevAll()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["Find all elements before the ",(0,s.jsx)(n.code,{children:".active"})," li"]})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('.left-nav').find('li.active').prevAll()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,s.jsx)(l,{src:"/img/api/prevall/find-all-previous-elements-with-optional-selector.png",alt:"Command Log prevAll"}),"\n",(0,s.jsxs)(n.p,{children:["When clicking on ",(0,s.jsx)(n.code,{children:"prevAll"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,s.jsx)(l,{src:"/img/api/prevall/console-log-all-previous-elements-traversed.png",alt:"Console Log prevAll"}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/nextall",children:(0,s.jsx)(n.code,{children:".nextAll()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/parents",children:(0,s.jsx)(n.code,{children:".parents()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/prev",children:(0,s.jsx)(n.code,{children:".prev()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/prevuntil",children:(0,s.jsx)(n.code,{children:".prevUntil()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>c});var s=l(7294);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);