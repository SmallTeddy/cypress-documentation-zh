"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[964],{7188:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(5893),a=n(1151);const r={title:"as",slug:"/api/commands/as"},t=void 0,c={id:"api/commands/as",title:"as",description:"Assign an alias for later use. Reference the alias later within a",source:"@site/docs/api/commands/as.mdx",sourceDirName:"api/commands",slug:"/api/commands/as",permalink:"/api/commands/as",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/as.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"as",slug:"/api/commands/as"},sidebar:"api",previous:{title:"and",permalink:"/api/commands/and"},next:{title:"blur",permalink:"/api/commands/blur"}},d={},l=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"DOM element",id:"DOM-element",level:3},{value:"Intercept",id:"Intercept",level:3},{value:"Fixture",id:"Fixture",level:3},{value:"Notes",id:"Notes",level:2},{value:"Aliases are reset",id:"Aliases-are-reset",level:3},{value:"Reserved words",id:"Reserved-words",level:3},{value:"Alias names cannot match some reserved words.",id:"Alias-names-cannot-match-some-reserved-words",level:4},{value:"<code>as</code> is asynchronous",id:"as-is-asynchronous",level:3},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"History",id:"History",level:2},{value:"See also",id:"See-also",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{DocsImage:n,Icon:r}=s;return n||u("DocsImage",!0),r||u("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Assign an alias for later use. Reference the alias later within a\n",(0,i.jsx)(s.a,{href:"/api/commands/get",children:(0,i.jsx)(s.code,{children:"cy.get()"})})," query or ",(0,i.jsx)(s.a,{href:"/api/commands/wait",children:(0,i.jsx)(s.code,{children:"cy.wait()"})}),"\ncommand with an ",(0,i.jsx)(s.code,{children:"@"})," prefix."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," ",(0,i.jsx)(s.code,{children:".as()"})," assumes you are already familiar with core concepts such as\n",(0,i.jsx)(s.a,{href:"/app/core-concepts/variables-and-aliases",children:"aliases"})]})}),"\n",(0,i.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:".as(aliasName)\n.as(aliasName, options)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"Usage",children:"Usage"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(r,{name:"check-circle",color:"green"})," ",(0,i.jsx)(s.strong,{children:"Correct Usage"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"cy.get('.main-nav').find('li').first().as('firstNav') // Alias element as @firstNav\ncy.get('input.username').invoke('val').as('username', { type: 'static' }) // Alias that references the value at the time the alias was created\ncy.intercept('PUT', '/users').as('putUser') // Alias route as @putUser\ncy.stub(api, 'onUnauth').as('unauth') // Alias stub as @unauth\ncy.spy(win, 'fetch').as('winFetch') // Alias spy as @winFetch\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(r,{name:"exclamation-triangle",color:"red"})," ",(0,i.jsx)(s.strong,{children:"Incorrect Usage"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"cy.as('foo') // Errors, cannot be chained off 'cy'\n"})}),"\n",(0,i.jsx)(s.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(r,{name:"angle-right"})," ",(0,i.jsxs)(s.strong,{children:["aliasName ",(0,i.jsx)(s.em,{children:"(String)"})]})]}),"\n",(0,i.jsxs)(s.p,{children:["The name of the alias to be referenced later within a\n",(0,i.jsx)(s.a,{href:"/api/commands/get",children:(0,i.jsx)(s.code,{children:"cy.get()"})})," or ",(0,i.jsx)(s.a,{href:"/api/commands/wait",children:(0,i.jsx)(s.code,{children:"cy.wait()"})})," command\nusing an ",(0,i.jsx)(s.code,{children:"@"})," prefix."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(r,{name:"angle-right"})," ",(0,i.jsxs)(s.strong,{children:["options ",(0,i.jsx)(s.em,{children:"(Object)"})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Pass in an options object to change the default behavior of ",(0,i.jsx)(s.code,{children:".as()"}),"."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Option"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"type"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"query"})}),(0,i.jsxs)(s.td,{children:["The type of alias to store, which impacts how the value is retrieved later in the test. Valid values are ",(0,i.jsx)(s.code,{children:"query"})," and ",(0,i.jsx)(s.code,{children:"static"}),". A ",(0,i.jsx)(s.code,{children:"query"})," alias re-runs all queries leading up to the resulting value each time the alias is requested. A ",(0,i.jsx)(s.code,{children:"static"})," alias is retrieved once when the alias is stored, and will never change. ",(0,i.jsx)(s.code,{children:"type"})," has no effect when aliasing intercepts, spies, and stubs."]})]})})]}),"\n",(0,i.jsxs)(s.h3,{id:"Yields",children:["Yields ",(0,i.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,i.jsx)(r,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".as()"})," yields the same subject it was given."]}),"\n",(0,i.jsxs)(s.li,{children:["It is ",(0,i.jsx)(s.em,{children:"safe"})," to chain further commands after ",(0,i.jsx)(s.code,{children:".as()"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,i.jsx)(s.h3,{id:"DOM-element",children:"DOM element"}),"\n",(0,i.jsxs)(s.p,{children:["Aliasing a DOM element and then using ",(0,i.jsx)(s.a,{href:"/api/commands/get",children:(0,i.jsx)(s.code,{children:"cy.get()"})})," to access\nthe aliased element."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"it('disables on click', () => {\n  cy.get('button[type=submit]').as('submitBtn')\n  cy.get('@submitBtn').click().should('be.disabled')\n})\n"})}),"\n",(0,i.jsx)(s.h3,{id:"Intercept",children:"Intercept"}),"\n",(0,i.jsxs)(s.p,{children:["Aliasing an intercepted route defined with\n",(0,i.jsx)(s.a,{href:"/api/commands/intercept",children:(0,i.jsx)(s.code,{children:"cy.intercept()"})})," and then using\n",(0,i.jsx)(s.a,{href:"/api/commands/wait",children:(0,i.jsx)(s.code,{children:"cy.wait()"})})," to wait for the aliased route."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"// `PUT` requests on the `/users` endpoint will be stubbed with\n// the `user` fixture and be aliased as `editUser`\ncy.intercept('PUT', '/users', { fixture: 'user' }).as('editUser')\n\n// we'll assume submitting `form` triggers a matching request\ncy.get('form').submit()\n\n// once a response comes back from the `editUser`\n// this `wait` will resolve with the subject containing `url`\ncy.wait('@editUser').its('url').should('contain', 'users')\n"})}),"\n",(0,i.jsxs)(s.p,{children:["More examples of aliasing routes can be found\n",(0,i.jsx)(s.a,{href:"/api/commands/intercept#Aliasing-an-intercepted-route",children:"here"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"Fixture",children:"Fixture"}),"\n",(0,i.jsxs)(s.p,{children:["Aliasing ",(0,i.jsx)(s.a,{href:"/api/commands/fixture",children:(0,i.jsx)(s.code,{children:"cy.fixture()"})})," data and then using ",(0,i.jsx)(s.code,{children:"this"})," to\naccess it via the alias."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"beforeEach(() => {\n  cy.fixture('users-admins.json').as('admins')\n})\n\nit('the users fixture is bound to this.admins', function () {\n  cy.log(`There are ${this.admins.length} administrators.`)\n})\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:["Note the use of the standard function syntax. Using\n",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",children:"arrow functions"}),"\nto access aliases via ",(0,i.jsx)(s.code,{children:"this"})," won't work because of\n",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this",children:"the lexical binding"}),"\nof ",(0,i.jsx)(s.code,{children:"this"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"Notes",children:"Notes"}),"\n",(0,i.jsx)(s.h3,{id:"Aliases-are-reset",children:"Aliases are reset"}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," all aliases are reset before each test. See the\n",(0,i.jsx)(s.a,{href:"/app/core-concepts/variables-and-aliases",children:"aliases guide"})," for details."]})}),"\n",(0,i.jsx)(s.h3,{id:"Reserved-words",children:"Reserved words"}),"\n",(0,i.jsx)(s.h4,{id:"Alias-names-cannot-match-some-reserved-words",children:"Alias names cannot match some reserved words."}),"\n",(0,i.jsxs)(s.p,{children:["Some strings are not allowed as alias names since they are reserved words in\nCypress. These words include: ",(0,i.jsx)(s.code,{children:"test"}),", ",(0,i.jsx)(s.code,{children:"runnable"}),", ",(0,i.jsx)(s.code,{children:"timeout"}),", ",(0,i.jsx)(s.code,{children:"slow"}),", ",(0,i.jsx)(s.code,{children:"skip"}),", and\n",(0,i.jsx)(s.code,{children:"inspect"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"as-is-asynchronous",children:[(0,i.jsx)(s.code,{children:"as"})," is asynchronous"]}),"\n",(0,i.jsxs)(s.p,{children:["Remember that ",(0,i.jsx)(s.strong,{children:"Cypress commands are async"}),", including ",(0,i.jsx)(s.code,{children:".as()"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Because of this you cannot ",(0,i.jsx)(s.em,{children:"synchronously"})," access anything you have aliased. You\nmust use other asynchronous commands such as ",(0,i.jsx)(s.a,{href:"/api/commands/then",children:(0,i.jsx)(s.code,{children:".then()"})})," to\naccess what you've aliased."]}),"\n",(0,i.jsxs)(s.p,{children:["Here are some further examples of using ",(0,i.jsx)(s.code,{children:".as()"})," that illustrate the asynchronous\nbehavior."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"describe('A fixture', () => {\n  describe('alias can be accessed', () => {\n    it('via get().', () => {\n      cy.fixture('admin-users.json').as('admins')\n      cy.get('@admins').then((users) => {\n        cy.log(`There are ${users.length} admins.`)\n      })\n    })\n\n    it('via then().', function () {\n      cy.fixture('admin-users.json').as('admins')\n      cy.visit('/').then(() => {\n        cy.log(`There are ${this.admins.length} admins.`)\n      })\n    })\n  })\n\n  describe('aliased in beforeEach()', () => {\n    beforeEach(() => {\n      cy.fixture('admin-users.json').as('admins')\n    })\n\n    it('is bound to this.', function () {\n      cy.log(`There are ${this.admins.length} admins.`)\n    })\n  })\n})\n"})}),"\n",(0,i.jsx)(s.h2,{id:"Rules",children:"Rules"}),"\n",(0,i.jsxs)(s.h3,{id:"Requirements",children:["Requirements ",(0,i.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,i.jsx)(r,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".as()"})," requires being chained off a previous command."]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"Assertions",children:["Assertions ",(0,i.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,i.jsx)(r,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".as()"})," is a utility command."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".as()"})," will not run assertions. Assertions will pass through as if this\ncommand did not exist."]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"Timeouts",children:["Timeouts ",(0,i.jsx)(s.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,i.jsx)(r,{name:"question-circle"})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".as()"})," cannot time out."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.em,{children:"Alias several routes"})})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"cy.intercept('/company/*').as('companyGet')\ncy.intercept('/roles/*').as('rolesGet')\ncy.intercept('/teams/*').as('teamsGet')\ncy.intercept(/users\\/\\d+/).as('userGet')\ncy.intercept('PUT', /^\\/users\\/\\d+/).as('userPut')\n"})}),"\n",(0,i.jsx)(s.p,{children:"Aliases of routes display in the routes instrument panel:"}),"\n",(0,i.jsx)(n,{src:"/img/api/as/routes-table-in-command-log.png",alt:"Command log for route"}),"\n",(0,i.jsx)(s.h2,{id:"History",children:"History"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Version"}),(0,i.jsx)(s.th,{children:"Changes"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/app/references/changelog#12-3-0",children:"12.3.0"})}),(0,i.jsxs)(s.td,{children:["Added option ",(0,i.jsx)(s.code,{children:"type"})," to opt into the pre-12.0.0 behavior."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/app/references/changelog#12-0-0",children:"12.0.0"})}),(0,i.jsx)(s.td,{children:"All aliases now re-run queries leading up to them by default."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/commands/get",children:(0,i.jsx)(s.code,{children:"cy.get()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/commands/wait",children:(0,i.jsx)(s.code,{children:"cy.wait()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/app/core-concepts/variables-and-aliases",children:"Aliases"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var i=n(7294);const a={},r=i.createContext(a);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);