"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[4470],{4269:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=s(5893),r=s(1151);const t={title:"then"},l=void 0,c={id:"api/commands/then",title:"then",description:"Enables you to work with the subject yielded from the previous command.",source:"@site/docs/api/commands/then.mdx",sourceDirName:"api/commands",slug:"/api/commands/then",permalink:"/api/commands/then",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/then.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"then"},sidebar:"api",previous:{title:"task",permalink:"/api/commands/task"},next:{title:"tick",permalink:"/api/commands/tick"}},d={},a=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"DOM element",id:"DOM-element",level:3},{value:"The <code>button</code> element is yielded",id:"The-button-element-is-yielded",level:4},{value:"The number is yielded from previous command",id:"The-number-is-yielded-from-previous-command",level:4},{value:"Change subject",id:"Change-subject",level:3},{value:"The el subject is changed with another command",id:"The-el-subject-is-changed-with-another-command",level:4},{value:"The number subject is changed with another command",id:"The-number-subject-is-changed-with-another-command",level:4},{value:"The number subject is changed by returning",id:"The-number-subject-is-changed-by-returning",level:4},{value:"Returning <code>undefined</code> will not modify the yielded subject",id:"Returning-undefined-will-not-modify-the-yielded-subject",level:4},{value:"Raw HTMLElements are wrapped with jQuery",id:"Raw-HTMLElements-are-wrapped-with-jQuery",level:3},{value:"Promises",id:"Promises",level:3},{value:"Example using Q",id:"Example-using-Q",level:4},{value:"Example using bluebird",id:"Example-using-bluebird",level:4},{value:"Example using jQuery deferred&#39;s",id:"Example-using-jQuery-deferreds",level:4},{value:"Notes",id:"Notes",level:2},{value:"Differences",id:"Differences",level:3},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"History",id:"History",level:2},{value:"See also",id:"See-also",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Icon:s,ThenShouldAndDifference:t}=n;return s||u("Icon",!0),t||u("ThenShouldAndDifference",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Enables you to work with the subject yielded from the previous command."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," ",(0,i.jsx)(n.code,{children:".then()"})," assumes you are already familiar with core concepts such as\n",(0,i.jsx)(n.a,{href:"/app/core-concepts/variables-and-aliases#Closures",children:"closures"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Prefer ",(0,i.jsxs)(n.a,{href:"/api/commands/should#Function",children:[(0,i.jsx)(n.code,{children:".should()"})," with callback"]})," over\n",(0,i.jsx)(n.code,{children:".then()"})," for assertions as they are automatically rerun until no assertions\nthrow within it but be aware of ",(0,i.jsx)(n.a,{href:"/api/commands/should#Differences",children:"differences"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:".then(callbackFn)\n.then(options, callbackFn)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{name:"check-circle",color:"green"})," ",(0,i.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('.nav').then(($nav) => {}) // Yields .nav as first arg\ncy.location().then((loc) => {}) // Yields location object as first arg\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{name:"angle-right"})," ",(0,i.jsxs)(n.strong,{children:["options ",(0,i.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,i.jsx)(n.code,{children:".then()"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"timeout"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,i.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,i.jsxs)(n.td,{children:["Time to wait for ",(0,i.jsx)(n.code,{children:".then()"})," to resolve before ",(0,i.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s,{name:"angle-right"})," ",(0,i.jsxs)(n.strong,{children:["callbackFn ",(0,i.jsx)(n.em,{children:"(Function)"})]})]}),"\n",(0,i.jsx)(n.p,{children:"Pass a function that takes the previously yielded subject as its first argument."}),"\n",(0,i.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,i.jsx)(s,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Whatever is returned from the callback function becomes the new subject and will\nflow into the next command (with the exception of ",(0,i.jsx)(n.code,{children:"undefined"})," or ",(0,i.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the return value is a chain of Cypress commands (eg\n",(0,i.jsx)(n.code,{children:"return cy.get('button')"}),"), Cypress will wait for them to resolve and use\ntheir return value as the new subject."]}),"\n",(0,i.jsx)(n.li,{children:"If the return value is a Promise, Cypress will wait for it to resolve, and use\nthe resolved value as the new subject to continue the chain of commands."}),"\n",(0,i.jsxs)(n.li,{children:["If the callback returns ",(0,i.jsx)(n.code,{children:"undefined"})," or ",(0,i.jsx)(n.code,{children:"null"})," (or there is no return value),\nthe result of the last Cypress command in the callback function will be\nyielded as the new subject instead, and flow into the next command."]}),"\n",(0,i.jsxs)(n.li,{children:["If the callback returns ",(0,i.jsx)(n.code,{children:"undefined"})," or ",(0,i.jsx)(n.code,{children:"null"})," (or there is no return value)\nand the callback does not call any Cypress commands, the subject will not be\nmodified, and the previous subject will carry over to the next command."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The callback function of ",(0,i.jsx)(n.code,{children:".then()"})," is not retried. It is\n",(0,i.jsx)(n.a,{href:"/app/core-concepts/retry-ability#Only-queries-are-retried",children:"unsafe"})," to return\nDOM elements directly from the callback and then use further commands on them.\nInstead, use Cypress queries to locate the elements you're interested in acting\nor asserting on."]}),"\n",(0,i.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["We have several more examples in our\n",(0,i.jsx)(n.a,{href:"/app/core-concepts/variables-and-aliases",children:"Core Concepts Guide"})," which go into\nthe various ways you can use ",(0,i.jsx)(n.code,{children:".then()"})," to store, compare, and debug values."]})}),"\n",(0,i.jsx)(n.h3,{id:"DOM-element",children:"DOM element"}),"\n",(0,i.jsxs)(n.h4,{id:"The-button-element-is-yielded",children:["The ",(0,i.jsx)(n.code,{children:"button"})," element is yielded"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('button').then(($btn) => {\n  const cls = $btn.attr('class')\n\n  cy.wrap($btn).click().should('not.have.class', cls)\n})\n"})}),"\n",(0,i.jsx)(n.h4,{id:"The-number-is-yielded-from-previous-command",children:"The number is yielded from previous command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"cy.wrap(1)\n  .then((num) => {\n    cy.wrap(num).should('equal', 1) // true\n  })\n  .should('equal', 1) // true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Change-subject",children:"Change subject"}),"\n",(0,i.jsx)(n.h4,{id:"The-el-subject-is-changed-with-another-command",children:"The el subject is changed with another command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('button')\n  .then(($btn) => {\n    const cls = $btn.attr('class')\n\n    cy.wrap($btn).click().should('not.have.class', cls).find('i')\n    // since there is no explicit return\n    // the last Cypress command's yield is yielded\n  })\n  .should('have.class', 'spin') // assert on i element\n"})}),"\n",(0,i.jsx)(n.h4,{id:"The-number-subject-is-changed-with-another-command",children:"The number subject is changed with another command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.wrap(1).then((num) => {\n  cy.wrap(num)).should('equal', 1) // true\n  cy.wrap(2)\n}).should('equal', 2) // true\n"})}),"\n",(0,i.jsx)(n.h4,{id:"The-number-subject-is-changed-by-returning",children:"The number subject is changed by returning"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.wrap(1)\n  .then((num) => {\n    cy.wrap(num)\n      .should('equal', 1) // true\n      .then(() => {\n        return 2\n      })\n  })\n  .should('equal', 2) // true\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"Returning-undefined-will-not-modify-the-yielded-subject",children:["Returning ",(0,i.jsx)(n.code,{children:"undefined"})," will not modify the yielded subject"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('form')\n  .then(($form) => {\n    console.log('form is:', $form)\n    // undefined is returned here, but $form will be\n    // yielded to allow for continued chaining\n  })\n  .find('input')\n  .then(($input) => {\n    // we have our $input element here since\n    // our form element was yielded and we called\n    // .find('input') on it\n  })\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Raw-HTMLElements-are-wrapped-with-jQuery",children:"Raw HTMLElements are wrapped with jQuery"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('div')\n  .then(($div) => {\n    return $div[0] // type => HTMLDivElement\n  })\n  .then(($div) => {\n    $div // type => JQuery<HTMLDivElement>\n  })\n"})}),"\n",(0,i.jsx)(n.h3,{id:"Promises",children:"Promises"}),"\n",(0,i.jsx)(n.p,{children:"Cypress waits for Promises to resolve before continuing"}),"\n",(0,i.jsx)(n.h4,{id:"Example-using-Q",children:"Example using Q"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('button')\n  .click()\n  .then(($button) => {\n    const p = Q.defer()\n\n    setTimeout(() => {\n      p.resolve()\n    }, 1000)\n\n    return p.promise\n  })\n"})}),"\n",(0,i.jsx)(n.h4,{id:"Example-using-bluebird",children:"Example using bluebird"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('button')\n  .click()\n  .then(($button) => {\n    return Promise.delay(1000)\n  })\n"})}),"\n",(0,i.jsx)(n.h4,{id:"Example-using-jQuery-deferreds",children:"Example using jQuery deferred's"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"cy.get('button')\n  .click()\n  .then(($button) => {\n    const df = $.Deferred()\n\n    setTimeout(() => {\n      df.resolve()\n    }, 1000)\n\n    return df\n  })\n"})}),"\n",(0,i.jsx)(n.h2,{id:"Notes",children:"Notes"}),"\n",(0,i.jsx)(n.h3,{id:"Differences",children:"Differences"}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,i.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,i.jsx)(s,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".then()"})," requires being chained off a previous command."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,i.jsx)(s,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".then()"})," will only run assertions you have chained once, and will not\n",(0,i.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,i.jsx)(s,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".then()"})," can time out waiting for a promise you've returned to resolve."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".then()"})," does ",(0,i.jsx)(n.em,{children:"not"})," log in the Command Log"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"History",children:"History"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Changes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/app/references/changelog#0-14-0",children:"0.14.0"})}),(0,i.jsxs)(n.td,{children:["Added ",(0,i.jsx)(n.code,{children:"timeout"})," option"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/app/references/changelog#0-3-3",children:"< 0.3.3"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:".then()"})," command added"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/and",children:(0,i.jsx)(n.code,{children:".and()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/each",children:(0,i.jsx)(n.code,{children:".each()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/invoke",children:(0,i.jsx)(n.code,{children:".invoke()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/its",children:(0,i.jsx)(n.code,{children:".its()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/should",children:(0,i.jsx)(n.code,{children:".should()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/commands/spread",children:(0,i.jsx)(n.code,{children:".spread()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/app/core-concepts/variables-and-aliases#Closures",children:"Guide: Using Closures to compare values"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:"Guide: Chains of Commands"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);