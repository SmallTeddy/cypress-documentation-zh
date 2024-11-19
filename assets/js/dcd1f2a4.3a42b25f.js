"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[2919],{6062:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(5893),i=n(1151);const r={title:"Network Requests"},a=void 0,o={id:"app/guides/network-requests",title:"Network Requests",description:"What you'll learn",source:"@site/docs/app/guides/network-requests.mdx",sourceDirName:"app/guides",slug:"/app/guides/network-requests",permalink:"/app/guides/network-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/guides/network-requests.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Network Requests"},sidebar:"app",previous:{title:"Migrating from Selenium",permalink:"/app/guides/migration/selenium-to-cypress"},next:{title:"Screenshots and Videos",permalink:"/app/guides/screenshots-and-videos"}},l={},c=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Testing Strategies",id:"Testing-Strategies",level:2},{value:"Use Server Responses",id:"Use-Server-Responses",level:3},{value:"Stub Responses",id:"Stub-Responses",level:3},{value:"<Icon></Icon> Real World Example",id:"Real-World-Example",level:3},{value:"Stubbing",id:"Stubbing",level:2},{value:"Routing",id:"Routing",level:2},{value:"Fixtures",id:"Fixtures",level:2},{value:"Organizing",id:"Organizing",level:3},{value:"Waiting",id:"Waiting",level:2},{value:"Flake",id:"Flake",level:3},{value:"<Icon></Icon> Real World Example",id:"Real-World-Example-1",level:3},{value:"Failures",id:"Failures",level:3},{value:"Assertions",id:"Assertions",level:3},{value:"Working with GraphQL",id:"Working-with-GraphQL",level:2},{value:"Alias multiple queries or mutations",id:"Alias-multiple-queries-or-mutations",level:3},{value:"Expectations for Query or Mutation Results",id:"Expectations-for-Query-or-Mutation-Results",level:3},{value:"Modifying a Query or Mutation Response",id:"Modifying-a-Query-or-Mutation-Response",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{DocsImage:n,E2EOrCtTabs:r,Icon:a}=s;return n||u("DocsImage",!0),r||u("E2EOrCtTabs",!0),a||u("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.h5,{id:"What-youll-learn",children:[(0,t.jsx)(a,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Strategies for testing network requests in Cypress"}),"\n",(0,t.jsx)(s.li,{children:"How to stub and wait for network responses"}),"\n",(0,t.jsx)(s.li,{children:"Best practices for testing GraphQL queries and mutations"}),"\n"]})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," If you're looking for a resource to make an HTTP request take a look\nat ",(0,t.jsx)(s.a,{href:"/api/commands/request",children:"cy.request()"})]})}),"\n",(0,t.jsx)(s.h2,{id:"Testing-Strategies",children:"Testing Strategies"}),"\n",(0,t.jsx)(s.p,{children:"Cypress helps you test the entire lifecycle of HTTP requests within your\napplication. Cypress provides you access to the objects with information about\nthe request, enabling you to make assertions about its properties. Additionally\nyou can even stub and mock a request's response."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Common testing scenarios:"})})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Asserting on a request's body"}),"\n",(0,t.jsx)(s.li,{children:"Asserting on a request's url"}),"\n",(0,t.jsx)(s.li,{children:"Asserting on a request's headers"}),"\n",(0,t.jsx)(s.li,{children:"Stubbing a response's body"}),"\n",(0,t.jsx)(s.li,{children:"Stubbing a response's status code"}),"\n",(0,t.jsx)(s.li,{children:"Stubbing a response's headers"}),"\n",(0,t.jsx)(s.li,{children:"Delaying a response"}),"\n",(0,t.jsx)(s.li,{children:"Waiting for a response to happen"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Within Cypress, you have the ability to choose whether to stub responses or\nallow them to actually hit your server. You can also mix and match within the\nsame test by choosing to stub certain requests, while allowing others to hit\nyour server."}),"\n",(0,t.jsx)(s.p,{children:"Let's investigate both strategies, why you would use one versus the other, and\nwhy you should regularly use both."}),"\n",(0,t.jsx)(s.h3,{id:"Use-Server-Responses",children:"Use Server Responses"}),"\n",(0,t.jsxs)(s.p,{children:["Requests that are not stubbed actually reach your server. By ",(0,t.jsx)(s.em,{children:"not"})," stubbing your\nresponses, you are writing true ",(0,t.jsx)(s.em,{children:"end-to-end"})," tests. This means you are driving\nyour application the same way a real user would."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["When requests are not stubbed, this guarantees that the ",(0,t.jsx)(s.em,{children:"contract"})," between\nyour client and server is working correctly."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["In other words, you can have confidence your server is sending the correct data\nin the correct structure to your client to consume. It is a good idea to have\n",(0,t.jsx)(s.em,{children:"end-to-end"})," tests around your application's ",(0,t.jsx)(s.em,{children:"critical paths"}),". These typically\ninclude user login, signup, or other critical paths such as billing."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"There are downsides to not stubbing responses you should be aware of:"})})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Since no responses are stubbed, that means ",(0,t.jsx)(s.strong,{children:"your server has to actually send\nreal responses"}),". This can be problematic because you may have to ",(0,t.jsx)(s.em,{children:"seed a\ndatabase"})," before every test to generate state. For instance, if you were\ntesting ",(0,t.jsx)(s.em,{children:"pagination"}),", you'd have to seed the database with every object that\nit takes to replicate this feature in your application."]}),"\n",(0,t.jsxs)(s.li,{children:["Since real responses go through every single layer of your server\n(controllers, models, views, etc) the tests are often ",(0,t.jsx)(s.strong,{children:"much slower"})," than\nstubbed responses."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If you are writing a traditional server-side application where most of the\nresponses are HTML you will likely have few stubbed responses. However, most\nmodern applications that serve JSON can take advantage of stubbing."}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)("strong",{children:"Benefits"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"More likely to work in production"}),"\n",(0,t.jsx)(s.li,{children:"Test coverage around server endpoints"}),"\n",(0,t.jsx)(s.li,{children:"Great for traditional server-side HTML rendering"}),"\n"]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)("strong",{children:"Downsides"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Requires seeding data"}),"\n",(0,t.jsx)(s.li,{children:"Much slower"}),"\n",(0,t.jsx)(s.li,{children:"Harder to test edge cases"}),"\n"]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)("strong",{children:"Suggested Use"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Use sparingly"}),"\n",(0,t.jsxs)(s.li,{children:["Great for the ",(0,t.jsx)(s.em,{children:"critical paths"})," of your application"]}),"\n",(0,t.jsxs)(s.li,{children:["Helpful to have one test around the ",(0,t.jsx)(s.em,{children:"happy path"})," of a feature"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h3,{id:"Stub-Responses",children:"Stub Responses"}),"\n",(0,t.jsxs)(s.p,{children:["Stubbing responses enables you to control every aspect of the response,\nincluding the response ",(0,t.jsx)(s.code,{children:"body"}),", the ",(0,t.jsx)(s.code,{children:"status"}),", ",(0,t.jsx)(s.code,{children:"headers"}),", and even network\n",(0,t.jsx)(s.code,{children:"delay"}),". Stubbing is extremely fast, most responses will be returned in less\nthan 20ms."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Stubbing responses is a great way to control the data that is returned to your\nclient."})}),"\n",(0,t.jsxs)(s.p,{children:["You don't have to do any work on the server. Your application will have no idea\nits requests are being stubbed, so there are ",(0,t.jsx)(s.em,{children:"no code changes"})," needed."]}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)("strong",{children:"Benefits"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Control of response bodies, status, and headers"}),"\n",(0,t.jsx)(s.li,{children:"Can force responses to take longer to simulate network delay"}),"\n",(0,t.jsx)(s.li,{children:"No code changes to your server or client code"}),"\n",(0,t.jsx)(s.li,{children:"Fast, < 20ms response times"}),"\n"]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)("strong",{children:"Downsides"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"No guarantee your stubbed responses match the actual data the server sends"}),"\n",(0,t.jsx)(s.li,{children:"No test coverage on some server endpoints"}),"\n",(0,t.jsx)(s.li,{children:"Not as useful if you're using traditional server side HTML rendering"}),"\n"]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)("strong",{children:"Suggested Use"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Use for the vast majority of tests"}),"\n",(0,t.jsx)(s.li,{children:"Mix and match, typically have one true end-to-end test, and then stub the rest"}),"\n",(0,t.jsx)(s.li,{children:"Perfect for JSON APIs"}),"\n"]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.h3,{id:"Real-World-Example",children:[(0,t.jsx)(a,{name:"graduation-cap"})," Real World Example"]}),(0,t.jsxs)(s.p,{children:["The Cypress ",(0,t.jsx)(a,{name:"github",inline:"true",contentType:"rwa"})," end-to-end\ntests predominately rely on server responses, and only stub network responses\n",(0,t.jsx)(s.a,{href:"https://github.com/cypress-io/cypress-realworld-app/blob/07a6483dfe7ee44823380832b0b23a4dacd72504/cypress/tests/ui/notifications.spec.ts#L250-L264",children:"on a few occasions"}),"\nto conveniently ",(0,t.jsx)(s.strong,{children:"create edge-case"})," or ",(0,t.jsx)(s.strong,{children:"hard-to-create application states"}),"."]}),(0,t.jsxs)(s.p,{children:["This practice allows the project to achieve full\n",(0,t.jsx)(s.a,{href:"/app/tooling/code-coverage",children:"code-coverage"})," for the front end ",(0,t.jsx)(s.em,{children:"and back end"}),"\nof the app, but this has also required creating intricate database seeding or\ntest data factory scripts that can generate appropriate data in compliance with\nthe business-logic of the app."]}),(0,t.jsxs)(s.p,{children:["Check out any of the\n",(0,t.jsx)(s.a,{href:"https://github.com/cypress-io/cypress-realworld-app/tree/develop/cypress/tests/ui",children:"Real World App test suites"}),"\nto see Cypress network handling in action."]})]}),"\n",(0,t.jsx)(s.h2,{id:"Stubbing",children:"Stubbing"}),"\n",(0,t.jsxs)(s.p,{children:["Cypress enables you to stub a response and control the ",(0,t.jsx)(s.code,{children:"body"}),", ",(0,t.jsx)(s.code,{children:"status"}),",\n",(0,t.jsx)(s.code,{children:"headers"}),", or even delay."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/commands/intercept",children:(0,t.jsx)(s.code,{children:"cy.intercept()"})})," is used to control the behavior of\nHTTP requests. You can statically define the body, HTTP status code, headers,\nand other response characteristics."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"/api/commands/intercept",children:"cy.intercept()"})," for more information and for\nexamples on stubbing responses."]})}),"\n",(0,t.jsx)(s.h2,{id:"Routing",children:"Routing"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.intercept(\n  {\n    method: 'GET', // Route all GET requests\n    url: '/users/*', // that have a URL that matches '/users/*'\n  },\n  [] // and force the response to be: []\n).as('getUsers') // and assign an alias\n"})}),"\n",(0,t.jsxs)(s.p,{children:["When you use ",(0,t.jsx)(s.a,{href:"/api/commands/intercept",children:(0,t.jsx)(s.code,{children:"cy.intercept()"})}),' to define a route,\nCypress displays this under "Routes" in the Command Log.']}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/v10/server-routing-table.png",alt:"Routing Table"}),"\n",(0,t.jsxs)(s.p,{children:["When a new test runs, Cypress will restore the default behavior and remove all\nroutes and stubs. For a complete reference of the API and options, refer to the\ndocumentation for ",(0,t.jsx)(s.a,{href:"/api/commands/intercept",children:(0,t.jsx)(s.code,{children:"cy.intercept()"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"Fixtures",children:"Fixtures"}),"\n",(0,t.jsxs)(s.p,{children:["A fixture is a fixed set of data located in a file that is used in your tests.\nThe purpose of a test fixture is to ensure that there is a well known and fixed\nenvironment in which tests are run so that results are repeatable. Fixtures are\naccessed within tests by calling the ",(0,t.jsx)(s.a,{href:"/api/commands/fixture",children:(0,t.jsx)(s.code,{children:"cy.fixture()"})}),"\ncommand."]}),"\n",(0,t.jsx)(s.p,{children:"With Cypress, you can stub network requests and have it respond instantly with\nfixture data."}),"\n",(0,t.jsx)(s.p,{children:"When stubbing a response, you typically need to manage potentially large and\ncomplex JSON objects. Cypress allows you to integrate fixture syntax directly\ninto responses."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"// we set the response to be the activites.json fixture\ncy.intercept('GET', '/activities/*', { fixture: 'activities.json' })\n"})}),"\n",(0,t.jsx)(s.h3,{id:"Organizing",children:"Organizing"}),"\n",(0,t.jsxs)(s.p,{children:["Cypress automatically scaffolds out a suggested folder structure for organizing\nyour fixtures on every new project. By default it will create an ",(0,t.jsx)(s.code,{children:"example.json"}),"\nfile when you add your project to Cypress."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"/cypress/fixtures/example.json\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Your fixtures can be further organized within additional folders. For instance,\nyou could create another folder called ",(0,t.jsx)(s.code,{children:"images"})," and add images:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"/cypress/fixtures/images/cats.png\n/cypress/fixtures/images/dogs.png\n/cypress/fixtures/images/birds.png\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To access the fixtures nested within the ",(0,t.jsx)(s.code,{children:"images"})," folder, include the folder in\nyour ",(0,t.jsx)(s.a,{href:"/api/commands/fixture",children:(0,t.jsx)(s.code,{children:"cy.fixture()"})})," command."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.fixture('images/dogs.png') // yields dogs.png as Base64\n"})}),"\n",(0,t.jsx)(s.h2,{id:"Waiting",children:"Waiting"}),"\n",(0,t.jsxs)(s.p,{children:["Whether or not you choose to stub responses, Cypress enables you to\ndeclaratively ",(0,t.jsx)(s.a,{href:"/api/commands/wait",children:(0,t.jsx)(s.code,{children:"cy.wait()"})})," for requests and their\nresponses."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["This following section utilizes a concept known as\n",(0,t.jsx)(s.a,{href:"/app/core-concepts/variables-and-aliases",children:"Aliasing"}),". If you're new to\nCypress you might want to check that out first."]})}),"\n",(0,t.jsx)(s.p,{children:"Here is an example of aliasing requests and then subsequently waiting on them:"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"cy.intercept('/activities/*', { fixture: 'activities' }).as('getActivities')\ncy.intercept('/messages/*', { fixture: 'messages' }).as('getMessages')\n\n// visiting the dashboard should make requests that match\n// the two routes above\ncy.visit('http://localhost:8888/dashboard')\n\n// pass an array of Route Aliases that forces Cypress to wait\n// until it sees a response for each request that matches\n// each of these aliases\ncy.wait(['@getActivities', '@getMessages'])\n\n// these commands will not run until the wait command resolves above\ncy.get('h1').should('contain', 'Dashboard')\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"cy.intercept('/activities/*', { fixture: 'activities' }).as('getActivities')\ncy.intercept('/messages/*', { fixture: 'messages' }).as('getMessages')\n\n// mounting the dashboard should make requests that match\n// the two routes above\ncy.mount(<Dashboard />)\n\n// pass an array of Route Aliases that forces Cypress to wait\n// until it sees a response for each request that matches\n// each of these aliases\ncy.wait(['@getActivities', '@getMessages'])\n\n// these commands will not run until the wait command resolves above\ncy.get('h1').should('contain', 'Dashboard')\n"})})]}),"\n",(0,t.jsxs)(s.p,{children:["If you would like to check the response data of each response of an aliased\nroute, you can use several ",(0,t.jsx)(s.code,{children:"cy.wait()"})," calls."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.intercept({\n  method: 'POST',\n  url: '/myApi',\n}).as('apiCheck')\n\ncy.visit('/')\ncy.wait('@apiCheck').then((interception) => {\n  assert.isNotNull(interception.response.body, '1st API call has data')\n})\n\ncy.wait('@apiCheck').then((interception) => {\n  assert.isNotNull(interception.response.body, '2nd API call has data')\n})\n\ncy.wait('@apiCheck').then((interception) => {\n  assert.isNotNull(interception.response.body, '3rd API call has data')\n})\n"})}),"\n",(0,t.jsx)(s.p,{children:"Waiting on an aliased route has big advantages:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Tests are more robust with much less flake."}),"\n",(0,t.jsx)(s.li,{children:"Failure messages are much more precise."}),"\n",(0,t.jsx)(s.li,{children:"You can assert about the underlying request object."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Let's investigate each benefit."}),"\n",(0,t.jsx)(s.h3,{id:"Flake",children:"Flake"}),"\n",(0,t.jsxs)(s.p,{children:["One advantage of declaratively waiting for responses is that it decreases test\nflake. You can think of ",(0,t.jsx)(s.a,{href:"/api/commands/wait",children:(0,t.jsx)(s.code,{children:"cy.wait()"})})," as a guard that\nindicates to Cypress when you expect a request to be made that matches a\nspecific routing alias. This prevents the next commands from running until\nresponses come back and it guards against situations where your requests are\ninitially delayed."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Auto-complete Example:"})})}),"\n",(0,t.jsxs)(s.p,{children:["What makes this example below so powerful is that Cypress will automatically\nwait for a request that matches the ",(0,t.jsx)(s.code,{children:"getSearch"})," alias. Instead of forcing\nCypress to test the ",(0,t.jsx)(s.em,{children:"side effect"})," of a successful request (the display of the\nBook results), you can test the actual ",(0,t.jsx)(s.em,{children:"cause"})," of the results."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.intercept('/search*', [{ item: 'Book 1' }, { item: 'Book 2' }]).as(\n  'getSearch'\n)\n\n// our autocomplete field is throttled\n// meaning it only makes a request after\n// 500ms from the last keyPress\ncy.get('[data-testid=\"autocomplete\"]').type('Book')\n\n// wait for the request + response\n// thus insulating us from the\n// throttled request\ncy.wait('@getSearch')\n\ncy.get('[data-testid=\"results\"]')\n  .should('contain', 'Book 1')\n  .and('contain', 'Book 2')\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.h3,{id:"Real-World-Example-1",children:[(0,t.jsx)(a,{name:"graduation-cap"})," Real World Example"]}),(0,t.jsxs)(s.p,{children:["The Cypress ",(0,t.jsx)(a,{name:"github",inline:"true",contentType:"rwa"})," has various\ntests for testing an auto-complete field within a large user journey test that\nproperly await requests triggered upon auto-complete input changes. Check out\nthe example:"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(a,{name:"github",inline:"true",url:"https://github.com/cypress-io/cypress-realworld-app/blob/07a6483dfe7ee44823380832b0b23a4dacd72504/cypress/tests/ui/new-transaction.spec.ts#L36-L50",callout:"Auto-complete test code"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(a,{name:"video",inline:"true",url:"https://cloud.cypress.io/projects/7s5okt/runs/2352/test-results/3bf064fd-6959-441c-bf31-a9f276db0627/video",callout:"Auto-complete test run video recording"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(a,{name:"video",url:"https://cloud.cypress.io/projects/7s5okt/runs/2352/test-results/3bf064fd-6959-441c-bf31-a9f276db0627/video",callout:"Auto-complete test run video recording"})," in Cypress Dashboard."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h3,{id:"Failures",children:"Failures"}),"\n",(0,t.jsx)(s.p,{children:"In our example above, we added an assertion to the display of the search\nresults."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"The search results working are coupled to a few things in our application:"})})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Our application making a request to the correct URL."}),"\n",(0,t.jsx)(s.li,{children:"Our application correctly processing the response."}),"\n",(0,t.jsx)(s.li,{children:"Our application inserting the results into the DOM."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["In this example, there are many possible sources of failure. In most testing\ntools, if our request failed to go out, we would normally only ever get an error\nonce we attempt to find the results in the DOM and see that there is no matching\nelement. This is problematic because it's unknown ",(0,t.jsx)(s.em,{children:"why"})," the results failed to be\ndisplayed. Was there a problem with our rendering code? Did we modify or change\nan attribute such as an ",(0,t.jsx)(s.code,{children:"id"})," or ",(0,t.jsx)(s.code,{children:"class"})," on an element? Perhaps our server sent\nus different Book items."]}),"\n",(0,t.jsxs)(s.p,{children:["With Cypress, by adding a ",(0,t.jsx)(s.a,{href:"/api/commands/wait",children:(0,t.jsx)(s.code,{children:"cy.wait()"})}),", you can more easily\npinpoint your specific problem. If the response never came back, you'll receive\nan error like this:"]}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/v10/clear-source-of-failure.png",alt:"Wait Failure"}),"\n",(0,t.jsx)(s.p,{children:"Now we know exactly why our test failed. It had nothing to do with the DOM.\nInstead we can see that either our request never went out or a request went out\nto the wrong URL."}),"\n",(0,t.jsx)(s.h3,{id:"Assertions",children:"Assertions"}),"\n",(0,t.jsxs)(s.p,{children:["Another benefit of using ",(0,t.jsx)(s.a,{href:"/api/commands/wait",children:(0,t.jsx)(s.code,{children:"cy.wait()"})})," on requests is that\nit allows you to access the actual request object. This is useful when you want\nto make assertions about this object."]}),"\n",(0,t.jsx)(s.p,{children:"In our example above we can assert about the request object to verify that it\nsent data as a query string in the URL. Although we're mocking the response, we\ncan still verify that our application sends the correct request."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"// any request to \"/search/*\" endpoint will\n// automatically receive an array with two book objects\ncy.intercept('/search/*', [{ item: 'Book 1' }, { item: 'Book 2' }]).as(\n  'getSearch'\n)\n\ncy.get('[data-testid=\"autocomplete\"]').type('Book')\n\n// this yields us the interception cycle object\n// which includes fields for the request and response\ncy.wait('@getSearch').its('request.url').should('include', '/search?query=Book')\n\ncy.get('[data-testid=\"results\"]')\n  .should('contain', 'Book 1')\n  .and('contain', 'Book 2')\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsxs)(s.em,{children:["The interception object that ",(0,t.jsx)(s.a,{href:"/api/commands/wait",children:(0,t.jsx)(s.code,{children:"cy.wait()"})})," yields you has\neverything you need to make assertions including:"]})})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"URL"}),"\n",(0,t.jsx)(s.li,{children:"Method"}),"\n",(0,t.jsx)(s.li,{children:"Status Code"}),"\n",(0,t.jsx)(s.li,{children:"Request Body"}),"\n",(0,t.jsx)(s.li,{children:"Request Headers"}),"\n",(0,t.jsx)(s.li,{children:"Response Body"}),"\n",(0,t.jsx)(s.li,{children:"Response Headers"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"// spy on POST requests to /users endpoint\ncy.intercept('POST', '/users').as('new-user')\n\n// trigger network calls by manipulating web app's\n// user interface, then\ncy.wait('@new-user').should('have.property', 'response.statusCode', 201)\n\n// we can grab the completed interception object\n// again to run more assertions using cy.get(<alias>)\ncy.get('@new-user') // yields the same interception object\n  .its('request.body')\n  .should(\n    'deep.equal',\n    JSON.stringify({\n      id: '101',\n      firstName: 'Joe',\n      lastName: 'Black',\n    })\n  )\n\n// and we can place multiple assertions in a\n// single \"should\" callback\ncy.get('@new-user').should(({ request, response }) => {\n  expect(request.url).to.match(/\\/users$/)\n  expect(request.method).to.equal('POST')\n  // it is a good practice to add assertion messages\n  // as the 2nd argument to expect()\n  expect(response.headers, 'response headers').to.include({\n    'cache-control': 'no-cache',\n    expires: '-1',\n    'content-type': 'application/json; charset=utf-8',\n    location: '<domain>/users/101',\n  })\n})\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Tip:"})," you can inspect the full request cycle object by logging it to the\nconsole"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"cy.wait('@new-user').then(console.log)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"Working-with-GraphQL",children:"Working with GraphQL"}),"\n",(0,t.jsx)(s.p,{children:"The strategies below follow best known practices for waiting and asserting\nagainst GraphQL queries or mutations."}),"\n",(0,t.jsx)(s.p,{children:"Waiting and asserting on GraphQL API requests rely on matching a query or\nmutation name in the POST body."}),"\n",(0,t.jsxs)(s.p,{children:["Using ",(0,t.jsx)(s.a,{href:"/api/commands/intercept",children:"cy.intercept()"})," we can override the response to\na GraphQL query or mutation by declaring an intercept at the beginning of the\ntest or closer to the expectation."]}),"\n",(0,t.jsx)(s.h3,{id:"Alias-multiple-queries-or-mutations",children:"Alias multiple queries or mutations"}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.code,{children:"beforeEach"}),", we will use ",(0,t.jsx)(s.a,{href:"/api/commands/intercept",children:"cy.intercept()"})," to\ncapture all requests for a GraphQL endpoint (e.g. ",(0,t.jsx)(s.code,{children:"/graphql"}),"), use conditionals\nto match the query or mutation and set an alias for using ",(0,t.jsx)(s.code,{children:"req.alias"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"First, we'll create a set of utility functions to help match and alias our\nqueries and mutations."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// utils/graphql-test-utils.js\n\n// Utility to match GraphQL mutation based on the operation name\nexport const hasOperationName = (req, operationName) => {\n  const { body } = req\n  return (\n    Object.prototype.hasOwnProperty.call(body, 'operationName') &&\n    body.operationName === operationName\n  )\n}\n\n// Alias query if operationName matches\nexport const aliasQuery = (req, operationName) => {\n  if (hasOperationName(req, operationName)) {\n    req.alias = `gql${operationName}Query`\n  }\n}\n\n// Alias mutation if operationName matches\nexport const aliasMutation = (req, operationName) => {\n  if (hasOperationName(req, operationName)) {\n    req.alias = `gql${operationName}Mutation`\n  }\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In our test file, we can import these utilities and use them to alias the\nqueries and mutations for our tests in a ",(0,t.jsx)(s.code,{children:"beforeEach"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// app.cy.js\nimport { aliasQuery, aliasMutation } from '../utils/graphql-test-utils'\n\ncontext('Tests', () => {\n  beforeEach(() => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      // Queries\n      aliasQuery(req, 'GetLaunchList')\n      aliasQuery(req, 'LaunchDetails')\n      aliasQuery(req, 'GetMyTrips')\n\n      // Mutations\n      aliasMutation(req, 'Login')\n      aliasMutation(req, 'BookTrips')\n    })\n  })\n  // ...\n})\n"})}),"\n",(0,t.jsx)(s.h3,{id:"Expectations-for-Query-or-Mutation-Results",children:"Expectations for Query or Mutation Results"}),"\n",(0,t.jsxs)(s.p,{children:["Expectations can be made against the response of an intercepted GraphQL query or\nmutation using ",(0,t.jsx)(s.a,{href:"/api/commands/wait",children:"cy.wait()"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// app.cy.js\nimport { aliasQuery } from '../utils/graphql-test-utils'\n\ncontext('Tests', () => {\n  beforeEach(() => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      // Queries\n      aliasQuery(req, 'Login')\n\n      // ...\n    })\n  })\n\n  it('should verify login data', () => {\n    cy.wait('@gqlLoginQuery')\n      .its('response.body.data.login')\n      .should('have.property', 'id')\n      .and('have.property', 'token')\n  })\n})\n"})}),"\n",(0,t.jsx)(s.h3,{id:"Modifying-a-Query-or-Mutation-Response",children:"Modifying a Query or Mutation Response"}),"\n",(0,t.jsx)(s.p,{children:"In the test below, the response is modified to test the UI for a single page of\nresults."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// app.cy.js\nimport { hasOperationName, aliasQuery } from '../utils/graphql-test-utils'\n\ncontext('Tests', () => {\n  beforeEach(() => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      // Queries\n      aliasQuery(req, 'GetLaunchList')\n\n      // ...\n    })\n  })\n\n  it('should not display the load more button on the launches page', () => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      if (hasOperationName(req, 'GetLaunchList')) {\n        // Declare the alias from the initial intercept in the beforeEach\n        req.alias = 'gqlGetLaunchListQuery'\n\n        // Set req.fixture or use req.reply to modify portions of the response\n        req.reply((res) => {\n          // Modify the response body directly\n          res.body.data.launches.hasMore = false\n          res.body.data.launches.launches =\n            res.body.data.launches.launches.slice(5)\n        })\n      }\n    })\n\n    // Must visit after cy.intercept\n    cy.visit('/')\n\n    cy.wait('@gqlGetLaunchListQuery')\n      .its('response.body.data.launches')\n      .should((launches) => {\n        expect(launches.hasMore).to.be.false\n        expect(launches.length).to.be.lte(20)\n      })\n\n    cy.get('#launch-list').its('length').should('be.gte', 1).and('be.lt', 20)\n    cy.contains('button', 'Load More').should('not.exist')\n  })\n})\n"})}),"\n",(0,t.jsx)(s.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Cypress logs all ",(0,t.jsx)(s.code,{children:"XMLHttpRequest"}),"s and ",(0,t.jsx)(s.code,{children:"fetch"}),"es made by the\napplication under test in the Command Log. Here is an example of what this looks\nlike:"]}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/command-log-requests.png",alt:"Screenshot of fetch and XHR requests"}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Logging can be disabled by passing ",(0,t.jsx)(s.code,{children:"{ log: false }"})," with the static\nresponse."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"cy.intercept('/users*', { body: ['user1', 'user2'], log: false }).as('getUsers')\n"})}),(0,t.jsxs)(s.p,{children:["To disable logs for all xhr/fetch requests, checkout our\n",(0,t.jsx)(s.a,{href:"/api/commands/intercept#Disabling-logs-for-a-request",children:"example"})," on the intercept\napi page."]})]}),"\n",(0,t.jsxs)(s.p,{children:["The circular indicator on the left side indicates if the request went to the\ndestination server or not. If the circle is solid, the request went to the\ndestination server; if it is outlined, the response was stubbed by\n",(0,t.jsx)(s.code,{children:"cy.intercept()"})," and not sent outbound."]}),"\n",(0,t.jsxs)(s.p,{children:["If we re-run our previous test to make the same requests, but this time, add a\n",(0,t.jsx)(s.code,{children:"cy.intercept()"})," to stub the response to ",(0,t.jsx)(s.code,{children:"/users"}),", we can see that the indicator\nchanges. After adding the following line:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"cy.intercept('/users*', ['user1', 'user2']).as('getUsers')\n"})}),"\n",(0,t.jsx)(s.p,{children:"The Command Log will look like this:"}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/command-log-stubbed.png",alt:"Screenshot of stubbed fetch and unstubbed XHR requests"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"fetch"})," request now has an open circle, to indicate that it has been\nstubbed. Also, note that the alias for the ",(0,t.jsx)(s.code,{children:"cy.intercept()"})," is now displayed on\nthe right-hand side of the Command Log. If you mouse over the alias, you can see\nmore information about how the request was handled:"]}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/command-log-stubbed-tooltip.png",alt:"Screenshot of stubbed fetch request with tooltip and unstubbed XHR request"}),"\n",(0,t.jsxs)(s.p,{children:["Additionally, the request will be flagged if the request and/or response was\nmodified by a ",(0,t.jsx)(s.code,{children:"cy.intercept()"})," handler function. If we add this code to modify\noutgoing requests to ",(0,t.jsx)(s.code,{children:"/users"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"cy.intercept('/users*', (req) => {\n  req.headers['authorization'] = 'bearer my-bearer-auth-token'\n}).as('addAuthHeader')\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The request log for ",(0,t.jsx)(s.code,{children:"/users"})," will reflect that the ",(0,t.jsx)(s.code,{children:"req"})," object was modified,\nbut the request was still fulfilled from the destination (filled indicator):"]}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/command-log-req-modified.png",alt:"Screenshot of request that has had the req modified"}),"\n",(0,t.jsxs)(s.p,{children:['As you can see, "req modified" is displayed in the badge, to indicate the\nrequest object was modified. "res modified" and "req + res modified" can also be\ndisplayed, depending on if ',(0,t.jsx)(s.code,{children:"res"})," was modified inside of a ",(0,t.jsx)(s.code,{children:"req.continue()"}),"\ncallback."]}),"\n",(0,t.jsxs)(s.p,{children:["As with all command logs, logs for network requests can be clicked to display\nadditional information in the Console. For example, after clicking the previous\nrequest for ",(0,t.jsx)(s.code,{children:"/users?limit=100"})," and opening Developer Tools, we can see the\nfollowing:"]}),"\n",(0,t.jsx)(n,{src:"/img/app/network-requests/request-console-props.png",alt:"Screenshot of request that has had the req modified"}),"\n",(0,t.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.a,{href:"/api/commands/intercept",children:[(0,t.jsx)(s.code,{children:"cy.intercept()"})," docs"]})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/e2e/2-advanced-examples/network_requests.cy.js",children:"Network requests in Kitchen Sink example"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.a,{href:"/api/commands/request",children:["See how to make a request with ",(0,t.jsx)(s.code,{children:"cy.request()"})]})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/cypress-io/cypress-realworld-app",children:"Real World App (RWA)"}),"\ntest suites to see Cypress network handling in action."]}),"\n",(0,t.jsxs)(s.li,{children:["Read the blog post\n",(0,t.jsx)(s.a,{href:"https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests/",children:"Asserting Network Calls from Cypress Tests"})]}),"\n",(0,t.jsxs)(s.li,{children:["If you want to test the application in offline mode, read\n",(0,t.jsx)(s.a,{href:"https://www.cypress.io/blog/2020/11/12/testing-application-in-offline-network-mode/",children:"Testing an Application in Offline Network Mode"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(7294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);