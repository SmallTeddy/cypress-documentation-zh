"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[7006],{8263:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=i(5893),t=i(1151);const r={title:"fixture"},c=void 0,d={id:"api/commands/fixture",title:"fixture",description:"Load a fixed set of data located in a file.",source:"@site/docs/api/commands/fixture.mdx",sourceDirName:"api/commands",slug:"/api/commands/fixture",permalink:"/api/commands/fixture",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/fixture.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"fixture"},sidebar:"api",previous:{title:"first",permalink:"/api/commands/first"},next:{title:"focus",permalink:"/api/commands/focus"}},l={},o=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"JSON",id:"JSON",level:3},{value:"Load a <code>users.json</code> fixture",id:"Load-a-usersjson-fixture",level:4},{value:"Omit the fixture file&#39;s extension",id:"Omit-the-fixture-files-extension",level:4},{value:"Use import statement",id:"Use-import-statement",level:4},{value:"Images",id:"Images",level:3},{value:"Image fixtures are sent as <code>base64</code> by default",id:"Image-fixtures-are-sent-as-base64-by-default",level:4},{value:"Change encoding of Image fixture",id:"Change-encoding-of-Image-fixture",level:4},{value:"Playing MP3 file",id:"Playing-MP3-file",level:3},{value:"Accessing Fixture Data",id:"Accessing-Fixture-Data",level:3},{value:"Using <code>.then()</code> to access fixture data",id:"Using-then-to-access-fixture-data",level:4},{value:"Using fixtures to bootstrap data",id:"Using-fixtures-to-bootstrap-data",level:4},{value:"Modifying fixture data before using it",id:"Modifying-fixture-data-before-using-it",level:4},{value:"Notes",id:"Notes",level:2},{value:"Shortcuts",id:"Shortcuts",level:3},{value:"Using the <code>fixture</code> <code>StaticResponse</code> property",id:"Using-the-fixture-StaticResponse-property",level:4},{value:"Validation",id:"Validation",level:3},{value:"Automated File Validation",id:"Automated-File-Validation",level:4},{value:"Encoding",id:"Encoding",level:3},{value:"Default Encoding",id:"Default-Encoding",level:4},{value:"<code>this</code> context",id:"this-context",level:3},{value:"Loaded just once",id:"Loaded-just-once",level:3},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{E2EOrCtTabs:i,Icon:r}=n;return i||x("E2EOrCtTabs",!0),r||x("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Load a fixed set of data located in a file."}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture(filePath)\ncy.fixture(filePath, encoding)\ncy.fixture(filePath, options)\ncy.fixture(filePath, encoding, options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('users').as('usersJson') // load data from users.json\ncy.fixture('logo.png').then((logo) => {\n  // load data from logo.png\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["filePath ",(0,s.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["A path to a file within the\n",(0,s.jsx)(n.a,{href:"/app/references/configuration#Folders--Files",children:(0,s.jsx)(n.code,{children:"fixturesFolder"})})," , which\ndefaults to ",(0,s.jsx)(n.code,{children:"cypress/fixtures"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can nest fixtures within folders and reference them by defining the path\nfrom the fixturesFolder:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('users/admin.json') // Get data from {fixturesFolder}/users/admin.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["encoding ",(0,s.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"The encoding to be used when reading the file. The following encodings are\nsupported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'ascii'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'base64'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'binary'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'hex'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'latin1'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'utf8'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'utf-8'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'ucs2'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'ucs-2'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'utf16le'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'utf-16le'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"null"})," explicitly will return the fixture as a\n",(0,s.jsx)(n.a,{href:"/api/utilities/buffer",children:(0,s.jsx)(n.code,{children:"Cypress.Buffer"})})," instance, regardless of file\nextension."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:"cy.fixture()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timeout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,s.jsx)(n.code,{children:"responseTimeout"})})}),(0,s.jsxs)(n.td,{children:["Time to wait for ",(0,s.jsx)(n.code,{children:"cy.fixture()"})," to resolve before ",(0,s.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.fixture()"})," yields the contents of the file. Formatting is determined by\nits file extension."]}),"\n",(0,s.jsxs)(n.li,{children:["The yielded subject is ",(0,s.jsx)(n.strong,{children:"not"})," updated if the contents change on disk."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"JSON",children:"JSON"}),"\n",(0,s.jsxs)(n.h4,{id:"Load-a-usersjson-fixture",children:["Load a ",(0,s.jsx)(n.code,{children:"users.json"})," fixture"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('users.json').as('usersData')\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Omit-the-fixture-files-extension",children:"Omit the fixture file's extension"}),"\n",(0,s.jsxs)(n.p,{children:["When no extension is passed to ",(0,s.jsx)(n.code,{children:"cy.fixture()"}),", Cypress will search for files\nwith the specified name within the\n",(0,s.jsx)(n.a,{href:"/app/references/configuration#Folders--Files",children:(0,s.jsx)(n.code,{children:"fixturesFolder"})})," (which\ndefaults to ",(0,s.jsx)(n.code,{children:"cypress/fixtures"}),") and resolve the first one."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('admin').as('adminJSON')\n"})}),"\n",(0,s.jsx)(n.p,{children:"The example above would resolve in the following order:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.coffee"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.csv"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.png"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.jpg"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.jpeg"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.gif"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.tif"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.tiff"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cypress/fixtures/admin.zip"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Use-import-statement",children:"Use import statement"}),"\n",(0,s.jsxs)(n.p,{children:["If you are loading a JSON fixture, you can simply use the ",(0,s.jsx)(n.code,{children:"import"})," statement and\nlet the bundler load it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// cypress/e2e/spec.cy.js\nimport user from '../fixtures/user.json'\nit('loads the same object', () => {\n  cy.fixture('user').then((userFixture) => {\n    expect(user, 'the same data').to.deep.equal(userFixture)\n  })\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Images",children:"Images"}),"\n",(0,s.jsxs)(n.h4,{id:"Image-fixtures-are-sent-as-base64-by-default",children:["Image fixtures are sent as ",(0,s.jsx)(n.code,{children:"base64"})," by default"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('images/logo.png').then((logo) => {\n  // logo will be encoded as base64\n  // and should look something like this:\n  // aIJKnwxydrB10NVWqhlmmC+ZiWs7otHotSAAAOw==...\n})\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Change-encoding-of-Image-fixture",children:"Change encoding of Image fixture"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('images/logo.png', null).then((logo) => {\n  // logo will be read as a buffer\n  // and should look something like this:\n  // Buffer([0, 0, ...])\n  expect(Cypress.Buffer.isBuffer(logo)).to.be.true\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Playing-MP3-file",children:"Playing MP3 file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('audio/sound.mp3', 'base64').then((mp3) => {\n  const uri = 'data:audio/mp3;base64,' + mp3\n  const audio = new Audio(uri)\n\n  audio.play()\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Accessing-Fixture-Data",children:"Accessing Fixture Data"}),"\n",(0,s.jsxs)(n.h4,{id:"Using-then-to-access-fixture-data",children:["Using ",(0,s.jsx)(n.code,{children:".then()"})," to access fixture data"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.fixture('users').then((json) => {\n  cy.intercept('GET', '/users/**', json)\n})\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Using-fixtures-to-bootstrap-data",children:"Using fixtures to bootstrap data"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"/app/references/recipes#Server-Communication",children:["Check out our example recipe using ",(0,s.jsx)(n.code,{children:"cy.fixture()"})," to bootstrap data for our application."]})})}),"\n",(0,s.jsx)(n.h4,{id:"Modifying-fixture-data-before-using-it",children:"Modifying fixture data before using it"}),"\n",(0,s.jsx)(n.p,{children:"You can modify fixture data directly before visiting a URL or mounting a\ncomponent that makes a network request to that URL."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"cy.fixture('user').then((user) => {\n  user.firstName = 'Jane'\n  cy.intercept('GET', '/users/1', user).as('getUser')\n})\n\ncy.visit('/users')\ncy.wait('@getUser').then(({ request }) => {\n  expect(request.body.firstName).to.eq('Jane')\n})\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"cy.fixture('user').then((user) => {\n  user.firstName = 'Jane'\n  cy.intercept('GET', '/users/1', user).as('getUser')\n})\n\ncy.mount(<Users />)\ncy.wait('@getUser').then(({ request }) => {\n  expect(request.body.firstName).to.eq('Jane')\n})\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"Notes",children:"Notes"}),"\n",(0,s.jsx)(n.h3,{id:"Shortcuts",children:"Shortcuts"}),"\n",(0,s.jsxs)(n.h4,{id:"Using-the-fixture-StaticResponse-property",children:["Using the ",(0,s.jsx)(n.code,{children:"fixture"})," ",(0,s.jsx)(n.code,{children:"StaticResponse"})," property"]}),"\n",(0,s.jsxs)(n.p,{children:["Fixtures can also be referenced directly without using the ",(0,s.jsx)(n.code,{children:".fixture()"})," command\nby using the special property ",(0,s.jsx)(n.code,{children:"fixture"})," on the\n",(0,s.jsx)(n.a,{href:"/api/commands/intercept",children:(0,s.jsx)(n.code,{children:"cy.intercept()"})})," ",(0,s.jsx)(n.code,{children:"StaticResponse"})," object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.intercept('GET', '/users/**', { fixture: 'users' })\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Validation",children:"Validation"}),"\n",(0,s.jsx)(n.h4,{id:"Automated-File-Validation",children:"Automated File Validation"}),"\n",(0,s.jsxs)(n.p,{children:["Cypress automatically validates your fixtures. If your ",(0,s.jsx)(n.code,{children:".json"}),", ",(0,s.jsx)(n.code,{children:".js"}),", or\n",(0,s.jsx)(n.code,{children:".coffee"})," files contain syntax errors, they will be shown in the Command Log."]}),"\n",(0,s.jsx)(n.h3,{id:"Encoding",children:"Encoding"}),"\n",(0,s.jsx)(n.h4,{id:"Default-Encoding",children:"Default Encoding"}),"\n",(0,s.jsx)(n.p,{children:"Cypress automatically determines the encoding for the following file types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".coffee"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".csv"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".png"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".jpg"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".jpeg"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".gif"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".tif"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".tiff"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".zip"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For other types of files, they will be read as ",(0,s.jsx)(n.code,{children:"utf8"})," by default, unless\nspecified in the second argument of ",(0,s.jsx)(n.code,{children:"cy.fixture()"}),". You can specify ",(0,s.jsx)(n.code,{children:"null"})," as\nthe encoding in order to read the file as a\n",(0,s.jsx)(n.a,{href:"/api/utilities/buffer",children:(0,s.jsx)(n.code,{children:"Cypress.Buffer"})})," instance instead."]}),"\n",(0,s.jsxs)(n.h3,{id:"this-context",children:[(0,s.jsx)(n.code,{children:"this"})," context"]}),"\n",(0,s.jsxs)(n.p,{children:["If you store and access the fixture data using ",(0,s.jsx)(n.code,{children:"this"})," test context object, make\nsure to use ",(0,s.jsx)(n.code,{children:"function () { ... }"})," callbacks. Otherwise the test engine will NOT\nhave ",(0,s.jsx)(n.code,{children:"this"})," pointing at the test context."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"describe('User page', () => {\n  beforeEach(function () {\n    // \"this\" points at the test context object\n    cy.fixture('user').then((user) => {\n      // \"this\" is still the test context object\n      this.user = user\n    })\n  })\n\n  // the test callback is in \"function () { ... }\" form\n  it('has user', function () {\n    // this.user exists\n    expect(this.user.firstName).to.equal('Jane')\n  })\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Loaded-just-once",children:"Loaded just once"}),"\n",(0,s.jsx)(n.p,{children:"Please keep in mind that fixture files are assumed to be unchanged during the\ntest, and thus Cypress loads them just once. Even if you overwrite the fixture\nfile itself, the already loaded fixture data remains the same."}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to dynamically change the contents of a file during your tests,\nconsider ",(0,s.jsx)(n.a,{href:"/api/commands/readfile",children:(0,s.jsx)(n.code,{children:"cy.readFile()"})})," instead."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you want to reply to a network request with different object,\nthe following ",(0,s.jsx)(n.strong,{children:"will not work"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \ud83d\udea8 DOES NOT WORK\ncy.intercept('GET', '/todos/1', { fixture: 'todo' }).as('todo')\n// application requests the /todos/1 resource\n// the intercept replies with the object from todo.json file\n\ncy.wait('@todo').then(() => {\n  cy.writeFile('/cypress/fixtures/todo.json', { title: 'New data' })\n})\n// application requests the /todos/1 resource again\n// the intercept replies with the originally loaded object\n// from the todo.json file and NOT { \"title\": \"New data\" }\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this situation, avoid using the fixture file and instead respond to the\nnetwork request with the object"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u2705 RESPOND WITH OBJECT\ncy.fixture('todo.json').then((todo) => {\n  cy.intercept('GET', '/todos/1', { body: todo }).as('todo')\n  // application requests the /todos/1 resource\n  // the intercept replies with the initial object\n\n  cy.wait('@todo').then(() => {\n    // modify the response object\n    todo.title = 'New data'\n    // and override the intercept\n    cy.intercept('GET', '/todos/1', { body: todo })\n  })\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.fixture()"})," requires being chained off of ",(0,s.jsx)(n.code,{children:"cy"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.fixture()"})," will only run assertions you have chained once, and will not\n",(0,s.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(r,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.fixture()"})," should never time out."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Because ",(0,s.jsx)(n.code,{children:"cy.fixture()"})," is asynchronous it is technically possible for there to\nbe a timeout while talking to the internal Cypress automation APIs. But for\npractical purposes it should never happen."]})}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.fixture()"})," does ",(0,s.jsx)(n.em,{children:"not"})," log in the Command Log"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/app/core-concepts/variables-and-aliases",children:"Guide: Variables and Aliases"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/intercept",children:(0,s.jsx)(n.code,{children:"cy.intercept()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/then",children:(0,s.jsx)(n.code,{children:".then()"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/api/commands/readfile",children:(0,s.jsx)(n.code,{children:".readFile()"})})," for a similar command without caching\nand with builtin retryability"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/app/references/recipes#Server-Communication",children:"Recipe: Bootstrapping App Test Data"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var s=i(7294);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);