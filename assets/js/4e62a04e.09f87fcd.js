"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[6979],{5535:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var s=i(5893),c=i(1151);const l={title:"children",slug:"/api/commands/children"},r=void 0,t={id:"api/commands/children",title:"children",description:"Get the children of each DOM element within a set of DOM elements.",source:"@site/docs/api/commands/children.mdx",sourceDirName:"api/commands",slug:"/api/commands/children",permalink:"/api/commands/children",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/children.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"children",slug:"/api/commands/children"},sidebar:"api",previous:{title:"check",permalink:"/api/commands/check"},next:{title:"clear",permalink:"/api/commands/clear"}},d={},o=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Get the children of the <code>.secondary-nav</code>",id:"Get-the-children-of-the-secondary-nav",level:4},{value:"Selector",id:"Selector",level:3},{value:"Get the children with class <code>active</code>",id:"Get-the-children-with-class-active",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{DocsImage:i,Icon:l}=n;return i||m("DocsImage",!0),l||m("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Get the children of each DOM element within a set of DOM elements."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The querying behavior of this command matches exactly how\n",(0,s.jsx)(n.a,{href:"http://api.jquery.com/children",children:(0,s.jsx)(n.code,{children:".children()"})})," works in jQuery."]})}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:".children()\n.children(selector)\n.children(options)\n.children(selector, options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('nav').children() // Yield children of nav\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"exclamation-triangle",color:"red"})," ",(0,s.jsx)(n.strong,{children:"Incorrect Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.children() // Errors, cannot be chained off 'cy'\ncy.clock().children() // Errors, 'clock' does not yield DOM elements\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["selector ",(0,s.jsx)(n.em,{children:"(String selector)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"A selector used to filter matching DOM elements."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:".children()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"log"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Displays the command in the ",(0,s.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timeout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,s.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,s.jsxs)(n.td,{children:["Time to wait for ",(0,s.jsx)(n.code,{children:".children()"})," to resolve before ",(0,s.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," yields the new DOM element(s) it found."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," is a query, and it is ",(0,s.jsx)(n.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"No-Args",children:"No Args"}),"\n",(0,s.jsxs)(n.h4,{id:"Get-the-children-of-the-secondary-nav",children:["Get the children of the ",(0,s.jsx)(n.code,{children:".secondary-nav"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li>About</li>\n  <li>\n    Services\n    <ul class="secondary-nav">\n      <li class="services-1">Web Design</li>\n      <li class="services-2">Logo Design</li>\n      <li class="services-3">\n        Print Design\n        <ul class="tertiary-nav">\n          <li>Signage</li>\n          <li>T-Shirt</li>\n          <li>Business Cards</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li>Contact</li>\n</ul>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// yields [\n//  <li class="services-1">Web Design</li>,\n//  <li class="services-2">Logo Design</li>,\n//  <li class="services-3">Print Design</li>\n// ]\ncy.get(\'ul.secondary-nav\').children()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Selector",children:"Selector"}),"\n",(0,s.jsxs)(n.h4,{id:"Get-the-children-with-class-active",children:["Get the children with class ",(0,s.jsx)(n.code,{children:"active"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div>\n  <ul>\n    <li class="active">Unit Testing</li>\n    <li>Integration Testing</li>\n  </ul>\n</div>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// yields [\n//  <li class=\"active\">Unit Testing</li>\n// ]\ncy.get('ul').children('.active')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," requires being chained off a command that yields DOM element(s)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil the element(s)\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," can time out waiting for the element(s) to\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".children()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Assert that there should be 8 children elements in a nav"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('.left-nav>.nav').children().should('have.length', 8)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,s.jsx)(i,{src:"/img/api/children/children-elements-shown-in-command-log.png",alt:"Command log for children"}),"\n",(0,s.jsxs)(n.p,{children:["When clicking on the ",(0,s.jsx)(n.code,{children:"children"})," command within the command log, the console\noutputs the following:"]}),"\n",(0,s.jsx)(i,{src:"/img/api/children/children-yielded-in-console.png",alt:"console.log for children"}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/next",children:(0,s.jsx)(n.code,{children:".next()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/parent",children:(0,s.jsx)(n.code,{children:".parent()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/parents",children:(0,s.jsx)(n.code,{children:".parents()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/siblings",children:(0,s.jsx)(n.code,{children:".siblings()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>r});var s=i(7294);const c={},l=s.createContext(c);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);