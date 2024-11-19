"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[3924],{1372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const r={title:"Cypress Studio",e2eSpecific:!0},a=void 0,o={id:"app/guides/cypress-studio",title:"Cypress Studio",description:"What you'll learn",source:"@site/docs/app/guides/cypress-studio.mdx",sourceDirName:"app/guides",slug:"/app/guides/cypress-studio",permalink:"/app/guides/cypress-studio",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/guides/cypress-studio.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Cypress Studio",e2eSpecific:!0},sidebar:"app",previous:{title:"Cross Origin Testing",permalink:"/app/guides/cross-origin-testing"},next:{title:"Debugging",permalink:"/app/guides/debugging"}},c={},d=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Limitations",id:"Limitations",level:2},{value:"Overview",id:"Overview",level:2},{value:"Extending a Test",id:"Extending-a-Test",level:3},{value:"Step 1 - Run the spec",id:"Step-1---Run-the-spec",level:4},{value:"Step 2 - Launch Cypress Studio",id:"Step-2---Launch-Cypress-Studio",level:4},{value:"Step 3 - Interact with the Application",id:"Step-3---Interact-with-the-Application",level:4},{value:"Generated Test Code",id:"Generated-Test-Code",level:4},{value:"Adding a New Test",id:"Adding-a-New-Test",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{CypressConfigFileTabs:n,DocsImage:r,Icon:a}=t;return n||u("CypressConfigFileTabs",!0),r||u("DocsImage",!0),a||u("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.h5,{id:"What-youll-learn",children:[(0,s.jsx)(a,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"How to use Cypress Studio by recording interactions and generate tests"}),"\n",(0,s.jsx)(t.li,{children:"How to add new tests and extend existing tests with Cypress Studio"}),"\n"]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(a,{name:"exclamation-triangle"})," ",(0,s.jsx)(t.strong,{children:"Experimental"})]}),(0,s.jsxs)(t.p,{children:["Cypress Studio is an experimental feature and can be enabled by adding the\n",(0,s.jsx)(t.a,{href:"/app/references/experiments#End-to-End-Testing",children:"experimentalStudio"}),"\nattribute to your Cypress configuration."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  e2e: {\n    experimentalStudio: true,\n  },\n})\n"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  e2e: {\n    experimentalStudio: true,\n  },\n})\n"})})]}),"\n",(0,s.jsx)(t.h2,{id:"Limitations",children:"Limitations"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Cypress Studio is currently only available for writing E2E tests, and doesn't\nyet work with Component Testing."}),"\n",(0,s.jsxs)(t.li,{children:["Cypress Studio does not support writing tests that use domains of ",(0,s.jsx)(t.a,{href:"/app/guides/cross-origin-testing",children:"multiple\norigins"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"Overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["Cypress Studio provides a visual way to generate tests within Cypress, by\n",(0,s.jsx)(t.em,{children:"recording interactions"})," against the application under test."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/api/commands/click",children:(0,s.jsx)(t.code,{children:".click()"})}),", ",(0,s.jsx)(t.a,{href:"/api/commands/type",children:(0,s.jsx)(t.code,{children:".type()"})}),",\n",(0,s.jsx)(t.a,{href:"/api/commands/check",children:(0,s.jsx)(t.code,{children:".check()"})}),", ",(0,s.jsx)(t.a,{href:"/api/commands/uncheck",children:(0,s.jsx)(t.code,{children:".uncheck()"})}),", and\n",(0,s.jsx)(t.a,{href:"/api/commands/select",children:(0,s.jsx)(t.code,{children:".select()"})})," Cypress commands are supported and will\ngenerate test code when interacting with the DOM inside of the Cypress Studio."]}),"\n",(0,s.jsx)(t.p,{children:"You can also generate assertions by right clicking on an element that you would\nlike to assert on."}),"\n",(0,s.jsxs)(t.p,{children:["The Cypress ",(0,s.jsx)(a,{name:"github"}),"\n",(0,s.jsx)(t.a,{href:"https://github.com/cypress-io/cypress-realworld-app",children:"Real World App (RWA)"})," is\nan open source project implementing a payment application to demonstrate\nreal-world usage of Cypress testing methods, patterns, and workflows. It will be\nused to demonstrate the functionality of Cypress Studio below."]}),"\n",(0,s.jsx)(t.h3,{id:"Extending-a-Test",children:"Extending a Test"}),"\n",(0,s.jsx)(t.p,{children:"You can extend any preexisting test or start by creating a new test with the\nfollowing test scaffolding."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Clone the ",(0,s.jsx)(a,{name:"github",inline:"true",contentType:"rwa"})," and refer to\nthe\n",(0,s.jsx)(t.a,{href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/tests/demo/cypress-studio.spec.ts",children:"cypress/tests/demo/cypress-studio.cy.ts"}),"\nfile."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Code from Real World App (RWA)\ndescribe('Cypress Studio Demo', () => {\n  beforeEach(() => {\n    // Seed database with test data\n    cy.task('db:seed')\n\n    // Login test user\n    cy.database('find', 'users').then((user) => {\n      cy.login(user.username, 's3cret', true)\n    })\n  })\n\n  it('create new transaction', () => {\n    // Extend test with Cypress Studio\n  })\n})\n"})}),"\n",(0,s.jsx)(t.h4,{id:"Step-1---Run-the-spec",children:"Step 1 - Run the spec"}),"\n",(0,s.jsxs)(t.p,{children:['We\'ll use Cypress Studio to perform a "New Transaction" user journey. First,\nlaunch Cypress and select ',(0,s.jsx)(t.strong,{children:"End To End testing"}),", then choose a browser to run specs\nin."]}),"\n",(0,s.jsx)(t.p,{children:"Once the browser is open, run the spec created in the previous step."}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/run-spec-1.png",alt:"Cypress Studio"}),"\n",(0,s.jsx)(t.h4,{id:"Step-2---Launch-Cypress-Studio",children:"Step 2 - Launch Cypress Studio"}),"\n",(0,s.jsxs)(t.p,{children:["Once the tests complete their run, hover over a test in the ",(0,s.jsx)(t.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command Log"})," to\nreveal an ",(0,s.jsx)(t.strong,{children:"Add Commands to Test"})," button."]}),"\n",(0,s.jsxs)(t.p,{children:["Clicking on ",(0,s.jsx)(t.strong,{children:"Add Commands to Test"})," will launch the Cypress Studio."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Cypress will automatically execute all hooks and currently present test code,\nand then the test can be extended from that point on (e.g. We are logged into\nthe application inside the ",(0,s.jsx)(t.code,{children:"beforeEach"})," block)."]})}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-activate-studio.png",alt:"Activate Cypress Studio"}),"\n",(0,s.jsx)(t.p,{children:"Next, Cypress will execute the test in isolation and pause after the last\ncommand in the test."}),"\n",(0,s.jsx)(t.p,{children:"Now, we can begin updating the test to create a new transaction between users."}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-ready.png",alt:"Cypress Studio Ready"}),"\n",(0,s.jsx)(t.h4,{id:"Step-3---Interact-with-the-Application",children:"Step 3 - Interact with the Application"}),"\n",(0,s.jsxs)(t.p,{children:["To record actions, begin interacting with the application. Here we will click on\nthe ",(0,s.jsx)(t.strong,{children:"New"})," button on the right side of the header and as a result we will see our\nclick recorded in the Command Log."]}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-click-new-transaction.png",alt:"Cypress Studio Recording Click"}),"\n",(0,s.jsx)(t.p,{children:"Next, we can start typing in the name of a user that we want to pay."}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-type-user-name.png",alt:"Cypress Studio Recording Type"}),"\n",(0,s.jsxs)(t.p,{children:["Once we see the name come up in the results, we want to add an assertion to\nensure that our search function works correctly. ",(0,s.jsx)(t.strong,{children:"Right click"})," on the user's\nname to bring up a menu from which we can add an assertion to check that the\nelement contains the correct text (the user's name)."]}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-assert-user-name.png",alt:"Cypress Studio Add Assertion"}),"\n",(0,s.jsx)(t.p,{children:"We can then click on that user in order to progress to the next screen. We'll\ncomplete the transaction form by clicking on and typing in the amount and\ndescription inputs."}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-type-transaction-form.png",alt:"Cypress Studio Recording Type"}),"\n",(0,s.jsx)(t.p,{children:'Now it\'s time to complete the transaction. You might have noticed that the "Pay"\nbutton was disabled before we typed into the inputs. To make sure that our form\nvalidation works properly, let\'s add an assertion to make sure the "Pay" button\nis enabled.'}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-assert-button-enabled.png",alt:"Cypress Studio Add Assertion"}),"\n",(0,s.jsx)(t.p,{children:'Finally, we will click the "Pay" button and get presented with a confirmation\npage of our new transaction.'}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/extend-save-test.png",alt:"Cypress Studio Save Commands"}),"\n",(0,s.jsxs)(t.p,{children:["To discard the interactions, click the ",(0,s.jsx)(t.strong,{children:"Cancel"})," button to exit Cypress Studio.\nIf satisfied with the interactions with the application, click ",(0,s.jsx)(t.strong,{children:"Save Commands"}),"\nand the test code will be saved to your spec file. Alternatively you can choose\nthe ",(0,s.jsx)(t.strong,{children:"copy"})," button in order to copy the generated commands to your clipboard."]}),"\n",(0,s.jsx)(t.h4,{id:"Generated-Test-Code",children:"Generated Test Code"}),"\n",(0,s.jsxs)(t.p,{children:["Viewing our test code, we can see that the test is updated after clicking ",(0,s.jsx)(t.strong,{children:"Save\nCommands"})," with the actions we recorded in Cypress Studio."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Code from Real World App (RWA)\ndescribe('Cypress Studio Demo', () => {\n  beforeEach(() => {\n    // Seed database with test data\n    cy.task('db:seed')\n\n    // Login test user\n    cy.database('find', 'users').then((user) => {\n      cy.login(user.username, 's3cret', true)\n    })\n  })\n\n  it('create new transaction', () => {\n    /* ==== Generated with Cypress Studio ==== */\n    cy.get('[data-test=nav-top-new-transaction]').click()\n    cy.get('[data-test=user-list-search-input]').clear()\n    cy.get('[data-test=user-list-search-input]').type('dev')\n    cy.get(\n      '[data-test=user-list-item-tsHF6_D5oQ] > .MuiListItemText-root > .MuiListItemText-primary'\n    ).should('have.text', 'Devon Becker')\n    cy.get('[data-test=user-list-item-tsHF6_D5oQ]').click()\n    cy.get('#amount').clear()\n    cy.get('#amount').type('$25')\n    cy.get('#transaction-create-description-input').clear()\n    cy.get('#transaction-create-description-input').type('Sushi dinner')\n    cy.get('[data-test=transaction-create-submit-payment]').should('be.enabled')\n    cy.get('[data-test=transaction-create-submit-payment]').click()\n    /* ==== End Cypress Studio ==== */\n  })\n})\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The selectors are generated according to the\n",(0,s.jsxs)(t.a,{href:"/api/cypress-api/selector-playground-api#Default-Selector-Priority",children:[(0,s.jsx)(t.code,{children:"Cypress.SelectorPlayground"})," selector priority"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"Adding-a-New-Test",children:"Adding a New Test"}),"\n",(0,s.jsxs)(t.p,{children:["You can add a new test to any existing ",(0,s.jsx)(t.code,{children:"describe"})," or ",(0,s.jsx)(t.code,{children:"context"})," block, by\nclicking ",(0,s.jsx)(t.strong,{children:"Add New Test"})," on our defined ",(0,s.jsx)(t.code,{children:"describe"})," block."]}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-1.png",alt:"Cypress Studio Add Test"}),"\n",(0,s.jsx)(t.p,{children:"We are launched into Cypress Studio and can begin interacting with our\napplication to generate the test."}),"\n",(0,s.jsx)(t.p,{children:"For this test, we will add a new bank account. Our interactions are as follows:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:['Click "Bank Accounts" in left hand navigation',"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-2.png",alt:"Cypress Studio Begin Add Test"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:['Click the "Create" button on Bank Accounts page',"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-create.png",alt:"Cypress Studio Add Test Create Bank Account"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Fill out the bank account information","\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-form-complete.png",alt:"Cypress Studio Add Test Complete Bank Account Form"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:['Click the "Save" button',"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-form-save.png",alt:"Cypress Studio Add Test Save Bank Account"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To discard the interactions, click the ",(0,s.jsx)(t.strong,{children:"Cancel"})," button to exit Cypress Studio."]}),"\n",(0,s.jsxs)(t.p,{children:["If satisfied with the interactions with the application, click ",(0,s.jsx)(t.strong,{children:"Save Commands"}),"\nand prompt will ask for the name of the test. Click ",(0,s.jsx)(t.strong,{children:"Save Test"})," and the test\nwill be saved to the file."]}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-save-test.png",alt:"Cypress Studio Add Test Completed Run"}),"\n",(0,s.jsx)(t.p,{children:"Once saved, the file will be run again in Cypress."}),"\n",(0,s.jsx)(r,{src:"/img/app/cypress-studio/add-test-final.png",alt:"Cypress Studio Add Test Completed Run"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, viewing our test code, we can see that the test is updated after\nclicking ",(0,s.jsx)(t.strong,{children:"Save Commands"})," with the actions we recorded in Cypress Studio."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Code from Real World App (RWA)\nimport { User } from 'models'\n\ndescribe('Cypress Studio Demo', () => {\n  beforeEach(() => {\n    cy.task('db:seed')\n\n    cy.database('find', 'users').then((user: User) => {\n      cy.login(user.username, 's3cret', true)\n    })\n  })\n\n  it('create new transaction', () => {\n    // Extend test with Cypress Studio\n  })\n\n  /* === Test Created with Cypress Studio === */\n  it('create bank account', function () {\n    /* ==== Generated with Cypress Studio ==== */\n    cy.get('[data-test=sidenav-bankaccounts]').click()\n    cy.get('[data-test=bankaccount-new] > .MuiButton-label').click()\n    cy.get('#bankaccount-bankName-input').click()\n    cy.get('#bankaccount-bankName-input').type('Test Bank Account')\n    cy.get('#bankaccount-routingNumber-input').click()\n    cy.get('#bankaccount-routingNumber-input').type('987654321')\n    cy.get('#bankaccount-accountNumber-input').click()\n    cy.get('#bankaccount-accountNumber-input').type('123456789')\n    cy.get('[data-test=bankaccount-submit] > .MuiButton-label').click()\n    /* ==== End Cypress Studio ==== */\n  })\n})\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Clone the ",(0,s.jsx)(a,{name:"github",inline:"true",contentType:"rwa"})," and refer to\nthe\n",(0,s.jsx)(t.a,{href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/tests/demo/cypress-studio.spec.ts",children:"cypress/tests/demo/cypress-studio.cy.ts"}),"\nfile."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);