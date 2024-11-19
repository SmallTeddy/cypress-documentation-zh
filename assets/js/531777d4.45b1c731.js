"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[438],{1867:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(5893),l=i(1151);const t={title:"prevUntil",slug:"/api/commands/prevuntil"},r=void 0,c={id:"api/commands/prevuntil",title:"prevUntil",description:"Get all previous siblings of each DOM element in a set of matched DOM elements",source:"@site/docs/api/commands/prevuntil.mdx",sourceDirName:"api/commands",slug:"/api/commands/prevuntil",permalink:"/api/commands/prevuntil",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/prevuntil.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"prevUntil",slug:"/api/commands/prevuntil"},sidebar:"api",previous:{title:"prevAll",permalink:"/api/commands/prevall"},next:{title:"readFile",permalink:"/api/commands/readfile"}},o={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"Selector",id:"Selector",level:3},{value:"Find all of the element&#39;s siblings before <code>#nuts</code> until <code>#veggies</code>",id:"Find-all-of-the-elements-siblings-before-nuts-until-veggies",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{DocsImage:i,Icon:t}=n;return i||p("DocsImage",!0),t||p("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Get all previous siblings of each DOM element in a set of matched DOM elements\nup to, but not including, the element provided."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The querying behavior of this command matches exactly how\n",(0,s.jsx)(n.a,{href:"http://api.jquery.com/prevUntil",children:(0,s.jsx)(n.code,{children:".prevUntil()"})})," works in jQuery."]})}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:".prevUntil(selector)\n.prevUntil(selector, filter)\n.prevUntil(selector, filter, options)\n.prevUntil(element)\n.prevUntil(element, filter)\n.prevUntil(element, filter, options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('p').prevUntil('.intro') // Yield siblings before 'p' until '.intro'\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{name:"exclamation-triangle",color:"red"})," ",(0,s.jsx)(n.strong,{children:"Incorrect Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.prevUntil() // Errors, cannot be chained off 'cy'\ncy.location().prevUntil('path') // Errors, 'location' does not yield DOM element\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["selector ",(0,s.jsx)(n.em,{children:"(String selector)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"The selector where you want finding previous siblings to stop."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["element ",(0,s.jsx)(n.em,{children:"(DOM node, jQuery Object)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"The element where you want finding previous siblings to stop."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["filter ",(0,s.jsx)(n.em,{children:"(String selector)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"A selector used to filter matching DOM elements."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:".prevUntil()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"log"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Displays the command in the ",(0,s.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timeout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,s.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,s.jsxs)(n.td,{children:["Time to wait for ",(0,s.jsx)(n.code,{children:".prevUntil()"})," to resolve before ",(0,s.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(t,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," yields the new DOM element(s) it found."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," is a query, and it is ",(0,s.jsx)(n.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"Selector",children:"Selector"}),"\n",(0,s.jsxs)(n.h4,{id:"Find-all-of-the-elements-siblings-before-nuts-until-veggies",children:["Find all of the element's siblings before ",(0,s.jsx)(n.code,{children:"#nuts"})," until ",(0,s.jsx)(n.code,{children:"#veggies"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li id="fruits" class="header">Fruits</li>\n  <li>apples</li>\n  <li>oranges</li>\n  <li>bananas</li>\n  <li id="veggies" class="header">Vegetables</li>\n  <li>cucumbers</li>\n  <li>carrots</li>\n  <li>corn</li>\n  <li id="nuts" class="header">Nuts</li>\n  <li>walnuts</li>\n  <li>cashews</li>\n  <li>almonds</li>\n</ul>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// yields [<li>cucumbers</li>, <li>carrots</li>, <li>corn</li>]\ncy.get('#nuts').prevUntil('#veggies')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(t,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," requires being chained off a command that yields DOM\nelement(s)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(t,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil the element(s)\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(t,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," can time out waiting for the element(s) to\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".prevUntil()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["Find all of the element's siblings before ",(0,s.jsx)(n.code,{children:"#nuts"})," until ",(0,s.jsx)(n.code,{children:"#veggies"})]})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('#nuts').prevUntil('#veggies')\n"})}),"\n",(0,s.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,s.jsx)(i,{src:"/img/api/prevuntil/prev-until-finding-elements-in-command-log.png",alt:"Command Log prevUntil"}),"\n",(0,s.jsxs)(n.p,{children:["When clicking on ",(0,s.jsx)(n.code,{children:"prevUntil"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,s.jsx)(i,{src:"/img/api/prevuntil/console-log-previous-elements-until-defined-el.png",alt:"Console Log prevUntil"}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/prev",children:(0,s.jsx)(n.code,{children:".prev()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/prevall",children:(0,s.jsx)(n.code,{children:".prevAll()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/parentsuntil",children:(0,s.jsx)(n.code,{children:".parentsUntil()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/nextuntil",children:(0,s.jsx)(n.code,{children:".nextUntil()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);