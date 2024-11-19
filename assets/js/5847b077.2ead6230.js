"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[9503],{8052:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(5893),c=i(1151);const r={title:"clear",slug:"/api/commands/clear"},t=void 0,l={id:"api/commands/clear",title:"clear",description:"Clear the value of an input or textarea.",source:"@site/docs/api/commands/clear.mdx",sourceDirName:"api/commands",slug:"/api/commands/clear",permalink:"/api/commands/clear",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/clear.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"clear",slug:"/api/commands/clear"},sidebar:"api",previous:{title:"children",permalink:"/api/commands/children"},next:{title:"clearAllCookies",permalink:"/api/commands/clearallcookies"}},a={},o=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Clear the input and type a new value",id:"Clear-the-input-and-type-a-new-value",level:4},{value:"Notes",id:"Notes",level:2},{value:"Actionability",id:"Actionability",level:3},{value:"The element must first reach actionability",id:"The-element-must-first-reach-actionability",level:4},{value:"Documentation",id:"Documentation",level:3},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{DocsImage:i,Icon:r}=n;return i||x("DocsImage",!0),r||x("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Clear the value of an ",(0,s.jsx)(n.code,{children:"input"})," or ",(0,s.jsx)(n.code,{children:"textarea"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability#Only-queries-are-retried",children:"unsafe"})," to\nchain further commands that rely on the subject after ",(0,s.jsx)(n.code,{children:".clear()"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["An alias for ",(0,s.jsx)(n.a,{href:"/api/commands/type",children:(0,s.jsx)(n.code,{children:".type('{selectall}{del}')"})})]})}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:".clear()\n.clear(options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('[type=\"text\"]').clear() // Clear text input\ncy.get('textarea').type('Hi!').clear() // Clear textarea\ncy.focused().clear() // Clear focused input/textarea\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"exclamation-triangle",color:"red"})," ",(0,s.jsx)(n.strong,{children:"Incorrect Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.clear() // Errors, cannot be chained off 'cy'\ncy.get('nav').clear() // Errors, 'get' doesn't yield input or textarea\ncy.clock().clear() // Errors, 'clock' does not yield DOM elements\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:".clear()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"animationDistanceThreshold"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Actionability",children:(0,s.jsx)(n.code,{children:"animationDistanceThreshold"})})}),(0,s.jsxs)(n.td,{children:["The distance in pixels an element must exceed over time to be ",(0,s.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements#Animations",children:"considered animating"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"force"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["Forces the action, disables ",(0,s.jsx)(n.a,{href:"#Assertions",children:"waiting for actionability"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"log"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Displays the command in the ",(0,s.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"scrollBehavior"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Actionability",children:(0,s.jsx)(n.code,{children:"scrollBehavior"})})}),(0,s.jsxs)(n.td,{children:["Viewport position to where an element ",(0,s.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements#Scrolling",children:"should be scrolled"})," before executing the command"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timeout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,s.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,s.jsxs)(n.td,{children:["Time to wait for ",(0,s.jsx)(n.code,{children:".clear()"})," to resolve before ",(0,s.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"waitForAnimations"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Actionability",children:(0,s.jsx)(n.code,{children:"waitForAnimations"})})}),(0,s.jsxs)(n.td,{children:["Whether to wait for elements to ",(0,s.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements#Animations",children:"finish animating"})," before executing the command."]})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," yields the same subject it was given."]}),"\n",(0,s.jsxs)(n.li,{children:["It is ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability#Only-queries-are-retried",children:"unsafe"}),"\nto chain further commands that rely on the subject after ",(0,s.jsx)(n.code,{children:".clear()"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"No-Args",children:"No Args"}),"\n",(0,s.jsx)(n.h4,{id:"Clear-the-input-and-type-a-new-value",children:"Clear the input and type a new value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('textarea').clear().type('Hello, World')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Notes",children:"Notes"}),"\n",(0,s.jsx)(n.h3,{id:"Actionability",children:"Actionability"}),"\n",(0,s.jsx)(n.h4,{id:"The-element-must-first-reach-actionability",children:"The element must first reach actionability"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".clear()"}),' is an "action command" that follows all the rules of\n',(0,s.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements",children:"Actionability"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"Documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".clear()"})," is an alias for\n",(0,s.jsx)(n.a,{href:"/api/commands/type",children:(0,s.jsx)(n.code,{children:".type({selectall}{del})"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Please read the ",(0,s.jsx)(n.a,{href:"/api/commands/type",children:(0,s.jsx)(n.code,{children:".type()"})})," documentation for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," requires being chained off a command that yields DOM element(s)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," requires the element to be an ",(0,s.jsx)(n.code,{children:"input"})," or ",(0,s.jsx)(n.code,{children:"textarea"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," will automatically wait for the element to reach an\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements",children:"actionable state"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," will automatically ",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," can time out waiting for the element to reach an\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/interacting-with-elements",children:"actionable state"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".clear()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Clear the input and type a new value"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('input[name=\"name\"]').clear().type('Jane Lane')\n"})}),"\n",(0,s.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,s.jsx)(i,{src:"/img/api/clear/clear-input-in-cypress.png",alt:"Command log for clear"}),"\n",(0,s.jsxs)(n.p,{children:["When clicking on ",(0,s.jsx)(n.code,{children:"clear"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,s.jsx)(i,{src:"/img/api/clear/one-input-cleared-in-tests.png",alt:"console.log for clear"}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/blur",children:(0,s.jsx)(n.code,{children:".blur()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/focus",children:(0,s.jsx)(n.code,{children:".focus()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/type",children:(0,s.jsx)(n.code,{children:".type()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var s=i(7294);const c={},r=s.createContext(c);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);