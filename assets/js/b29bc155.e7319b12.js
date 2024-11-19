"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[1636],{4027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(5893),r=t(1151);const o={title:"Trade-offs",e2eSpecific:!0},i=void 0,a={id:"app/references/trade-offs",title:"Trade-offs",description:"Cypress automates the browser with its own unique architecture. While this",source:"@site/docs/app/references/trade-offs.mdx",sourceDirName:"app/references",slug:"/app/references/trade-offs",permalink:"/app/references/trade-offs",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/references/trade-offs.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Trade-offs",e2eSpecific:!0},sidebar:"app",previous:{title:"Roadmap",permalink:"/app/references/roadmap"},next:{title:"Troubleshooting",permalink:"/app/references/troubleshooting"}},c={},l=[{value:"Permanent trade-offs:",id:"Permanent-trade-offs",level:4},{value:"Temporary trade-offs:",id:"Temporary-trade-offs",level:4},{value:"Permanent trade-offs",id:"Permanent-trade-offs-1",level:2},{value:"Automation restrictions",id:"Automation-restrictions",level:3},{value:"Inside the browser",id:"Inside-the-browser",level:3},{value:"Multiple browsers open at the same time",id:"Multiple-browsers-open-at-the-same-time",level:3},{value:"1. Use only the browser:",id:"1-Use-only-the-browser",level:4},{value:"2. Stub the other connection:",id:"2-Stub-the-other-connection",level:4},{value:"3: Introduce another connection:",id:"3-Introduce-another-connection",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Cypress automates the browser with its own unique architecture. While this\nunlocks the power to do things you will not find anywhere else, there are\nspecific trade-offs that are made."}),"\n",(0,s.jsx)(n.p,{children:"In this guide we'll lay out what some of the trade-offs are - and specifically\nhow you can work around them."}),"\n",(0,s.jsxs)(n.p,{children:["While at first it may seem like these are strict limitations in Cypress - we\nthink you will soon realize that many of these boundaries are actually ",(0,s.jsx)(n.strong,{children:"good"}),"\nto have. In a sense they prevent you from writing bad, slow, or flaky tests."]}),"\n",(0,s.jsx)(n.h4,{id:"Permanent-trade-offs",children:"Permanent trade-offs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cypress is not a general purpose ",(0,s.jsx)(n.a,{href:"#Automation-restrictions",children:"automation tool"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cypress commands run ",(0,s.jsx)(n.a,{href:"#Inside-the-browser",children:"inside of a browser"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["You cannot use Cypress to drive\n",(0,s.jsx)(n.a,{href:"#Multiple-browsers-open-at-the-same-time",children:"two browsers at the same time"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Each test is bound to a single superdomain. Cross-origin navigation inside\ntests can be enabled by using the ",(0,s.jsx)(n.a,{href:"/api/commands/origin",children:(0,s.jsx)(n.code,{children:"cy.origin"})})," command.\nPlease read our\n",(0,s.jsx)(n.a,{href:"/app/guides/cross-origin-testing",children:"Cross Origin Testing Guide"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Temporary-trade-offs",children:"Temporary trade-offs:"}),"\n",(0,s.jsxs)(n.p,{children:["We want to highlight some ",(0,s.jsx)(n.em,{children:"temporary"})," restrictions that Cypress hopes to\neventually address."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"/api/commands/hover",children:["Workarounds for the lack of a ",(0,s.jsx)(n.code,{children:"cy.hover()"})," command."]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://github.com/cypress-io/cypress/issues/299",children:[(0,s.jsx)(n.code,{children:"cy.tab()"})," command."]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/issues/311#issuecomment-339824191",children:"There is not any native or mobile events support."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/issues/136",children:"iframe support is somewhat limited, but does work."})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Permanent-trade-offs-1",children:"Permanent trade-offs"}),"\n",(0,s.jsx)(n.h3,{id:"Automation-restrictions",children:"Automation restrictions"}),"\n",(0,s.jsx)(n.p,{children:"The Cypress App is a specialized tool that does end-to-end, component, and API\ntesting really well. We don't think Cypress is the optimal tool for things such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Indexing the web"}),"\n",(0,s.jsx)(n.li,{children:"Spidering links"}),"\n",(0,s.jsx)(n.li,{children:"Performance testing"}),"\n",(0,s.jsx)(n.li,{children:"Scripting 3rd party sites"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There are other excellent tools that are optimized for doing each item listed\nabove."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"sweet spot"})," of Cypress is to be used as a tool to test your own\napplication."]}),"\n",(0,s.jsx)(n.h3,{id:"Inside-the-browser",children:"Inside the browser"}),"\n",(0,s.jsx)(n.p,{children:"In case you missed it before - Cypress tests run inside of the browser! This\nmeans we can do things nobody else can. There is no object serialization or JSON\nwire protocols. You have real, native access to everything in your application\nunder test."}),"\n",(0,s.jsxs)(n.p,{children:["But this also means that your test code ",(0,s.jsx)(n.strong,{children:"is being evaluated inside the\nbrowser"}),". Test code is not evaluated in Node, or any other server side\nlanguage. The ",(0,s.jsx)(n.strong,{children:"only"})," language we'll ever support is the language of the web:\nJavaScript."]}),"\n",(0,s.jsxs)(n.p,{children:["This trade-off means it makes it a little bit more challenging to communicate with the\nback end - like your server or database. You will not be able to connect or\n",(0,s.jsx)(n.code,{children:"import"})," those server-side libraries or modules directly. Although you can require\n",(0,s.jsx)(n.code,{children:"node_modules"})," which can be used in the browser. Additionally, you have the\nability to use Node to import or talk directly to your back end scripts using\n",(0,s.jsx)(n.a,{href:"/api/node-events/overview",children:"our Node Events"})," or\n",(0,s.jsx)(n.a,{href:"/api/commands/task",children:"cy.task()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To talk to your database or server you need to use the\n",(0,s.jsx)(n.a,{href:"/api/commands/exec",children:(0,s.jsx)(n.code,{children:"cy.exec()"})}),", ",(0,s.jsx)(n.a,{href:"/api/commands/task",children:(0,s.jsx)(n.code,{children:"cy.task()"})}),", or\n",(0,s.jsx)(n.a,{href:"/api/commands/request",children:(0,s.jsx)(n.code,{children:"cy.request()"})})," commands. That means you will need to\nexpose a way to seed and setup your database. It might take a bit more elbow grease\nthan other testing tools written in your back end language."]}),"\n",(0,s.jsx)(n.p,{children:"The trade-off here is that doing everything in the browser is a much better\nexperience in Cypress. But doing things outside of\nthe browser may take a little extra work."}),"\n",(0,s.jsx)(n.h3,{id:"Multiple-browsers-open-at-the-same-time",children:"Multiple browsers open at the same time"}),"\n",(0,s.jsxs)(n.p,{children:["Cypress does not support controlling more than 1 open browser at a time.\nYou can test multiple tabs, however, using our ",(0,s.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/tree/develop/npm/puppeteer",children:"@cypress/puppeteer"})," plugin."]}),"\n",(0,s.jsx)(n.p,{children:"With that said, except in the most unusual and rare circumstances, you can still\ntest most application behavior without opening multiple browsers at the same\ntime."}),"\n",(0,s.jsx)(n.p,{children:"You may ask about this functionality like this:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"I'm trying to test a chat application. Can I run more than one browser at a\ntime with Cypress?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Whether you are testing a chat application or anything else - what you are\nreally asking about is testing collaboration. But, ",(0,s.jsx)(n.strong,{children:"you don't need to recreate\nthe entire environment in order to test collaboration with 100% coverage"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Doing it this way can be faster, more accurate, and more scalable."}),"\n",(0,s.jsx)(n.p,{children:"While outside the scope of this article, you could test a chat application using\nthe following principles. Each one will incrementally introduce more\ncollaboration:"}),"\n",(0,s.jsx)(n.h4,{id:"1-Use-only-the-browser",children:"1. Use only the browser:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"    \u2193\n\u2190 browser \u2192\n    \u2191\n"})}),"\n",(0,s.jsx)(n.p,{children:'Avoid the server, invoke your JavaScript callbacks manually thereby simulating\nwhat happens when "notifications come in", or "users leave the chat" purely in\nthe browser.'}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.a,{href:"/api/commands/stub",children:"stub"})," everything and simulate every single\nscenario. Chat messages, offline messages, connections, reconnections,\ndisconnections, group chat, etc. Everything that happens inside of the browser\ncan be fully tested. Requests leaving the browser could also be stubbed and you\ncould assert that the request bodies were correct."]}),"\n",(0,s.jsx)(n.h4,{id:"2-Stub-the-other-connection",children:"2. Stub the other connection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"server \u2192 browser\n            \u2193\nserver \u2190 browser\n  \u2193\n(other connections stubbed)\n  \u2193\nserver \u2192 browser\n"})}),"\n",(0,s.jsx)(n.p,{children:'Use your server to receive messages from the browser, and simulate "the other\nparticipant" by sending messages as that participant. This is certainly\napplication specific, but generally you could insert records into the database\nor do whatever it takes for your server to act as if a message of one client\nneeds to be sent back to the browser.'}),"\n",(0,s.jsx)(n.p,{children:"Typically this pattern enables you to avoid making a secondary WebSocket\nconnection and yet still fulfills the bidirectional browser and server contract.\nThis means you could also test edge cases (disconnections, etc) without actually\nhandling real connections."}),"\n",(0,s.jsx)(n.h4,{id:"3-Introduce-another-connection",children:"3: Introduce another connection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"server \u2192 browser\n            \u2193\nserver \u2190 browser\n  \u2193\nserver \u2192 other connection\n            \u2193\nserver \u2190 other connection\n  \u2193\nserver \u2192 browser\n"})}),"\n",(0,s.jsx)(n.p,{children:"To do this - you would need a background process outside of the browser to make\nthe underlying WebSocket connection that you can then communicate with and\ncontrol."}),"\n",(0,s.jsx)(n.p,{children:"You can do this in many ways and here is an example of using an HTTP server to\nact as the client and exposing a REST interface that enables us to control it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Cypress tests\n\n// tell the http server at 8081 to connect to 8080\ncy.request('http://localhost:8081/connect?url=http://localhost:8080')\n\n// tell the http server at 8081 to send a message\ncy.request('http://localhost:8081/message?m=hello')\n\n// tell the http server at 8081 to disconnect\ncy.request('http://localhost:8081/disconnect')\n"})}),"\n",(0,s.jsx)(n.p,{children:"And the HTTP server code would look something like this..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const client = require('socket.io:client')\nconst express = require('express')\n\nconst app = express()\n\nlet socket\n\napp.get('/connect', (req, res) => {\n  const url = req.query.url\n\n  socket = client(url)\n\n  socket.on('connect', () => {\n    res.sendStatus(200)\n  })\n})\n\napp.get('/message', (req, res) => {\n  const msg = req.query.m\n\n  socket.send(msg, () => {\n    res.sendStatus(200)\n  })\n})\n\napp.get('/disconnect', (req, res) => {\n  socket.on('disconnect', () => {\n    res.sendStatus(200)\n  })\n\n  socket.disconnect()\n})\n\napp.listen(8081, () => {})\n"})}),"\n",(0,s.jsx)(n.p,{children:"This avoids ever needing a second open browser, but still gives you an\nend-to-end test that provides 100% confidence that the two clients can\ncommunicate with each other."})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);