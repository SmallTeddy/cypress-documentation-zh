"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[5061],{5473:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=i(5893),s=i(1151);const l={title:"writeFile"},r=void 0,c={id:"api/commands/writefile",title:"writeFile",description:"Write to a file with the specified contents.",source:"@site/docs/api/commands/writefile.mdx",sourceDirName:"api/commands",slug:"/api/commands/writefile",permalink:"/api/commands/writefile",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/writefile.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"writeFile"},sidebar:"api",previous:{title:"wrap",permalink:"/api/commands/wrap"},next:{title:"Catalog of Events",permalink:"/api/cypress-api/catalog-of-events"}},o={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"Text",id:"Text",level:3},{value:"Write some text to a <code>txt</code> file",id:"Write-some-text-to-a-txt-file",level:4},{value:"JSON",id:"JSON",level:3},{value:"Write JSON to a file",id:"Write-JSON-to-a-file",level:4},{value:"Write response data to a fixture file",id:"Write-response-data-to-a-fixture-file",level:4},{value:"Encoding",id:"Encoding",level:3},{value:"Specify the encoding as a String",id:"Specify-the-encoding-as-a-String",level:4},{value:"Specify the encoding as part of the options object",id:"Specify-the-encoding-as-part-of-the-options-object",level:4},{value:"Flags",id:"Flags",level:3},{value:"Append contents to the end of a file",id:"Append-contents-to-the-end-of-a-file",level:4},{value:"Buffer",id:"Buffer",level:3},{value:"Write a buffer directly without encoding as a string",id:"Write-a-buffer-directly-without-encoding-as-a-string",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"History",id:"History",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{DocsImage:i,Icon:l}=n;return i||x("DocsImage",!0),l||x("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Write to a file with the specified contents."}),"\n",(0,t.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile(filePath, contents)\ncy.writeFile(filePath, contents, encoding)\ncy.writeFile(filePath, contents, options)\ncy.writeFile(filePath, contents, encoding, options)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{name:"check-circle",color:"green"})," ",(0,t.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('menu.json')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["filePath ",(0,t.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["A path to a file within the project root (the directory that contains the\n",(0,t.jsx)(n.a,{href:"/app/references/configuration",children:"Cypress configuration file"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["contents ",(0,t.jsx)(n.em,{children:"(String, Array, Object or Buffer)"})]})]}),"\n",(0,t.jsx)(n.p,{children:"The contents to be written to the file."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["encoding ",(0,t.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,t.jsx)(n.p,{children:"The encoding to be used when writing to the file. The following encodings are\nsupported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'ascii'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'base64'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'binary'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'hex'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'latin1'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'utf8'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'utf-8'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'ucs2'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'ucs-2'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'utf16le'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"'utf-16le'"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"null"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"null"})," explicitly will allows you to write a ",(0,t.jsx)(n.code,{children:"Buffer"})," directly, without\nfirst encoding it as a string."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["options ",(0,t.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,t.jsx)(n.code,{children:"cy.writeFile()"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"log"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["Displays the command in the ",(0,t.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"flag"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"w"})}),(0,t.jsxs)(n.td,{children:["File system flag as used with ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#fs_file_system_flags",children:(0,t.jsx)(n.code,{children:"fs.writeFile"})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"encoding"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"utf8"})}),(0,t.jsx)(n.td,{children:"The encoding to be used when writing to the file"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timeout"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,t.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,t.jsxs)(n.td,{children:["Time to wait for ",(0,t.jsx)(n.code,{children:".writeFile()"})," to resolve before ",(0,t.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To use encoding with other options, have your options object be your third\nparameter and include encoding there. This is the same behavior as\n",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback",children:(0,t.jsx)(n.code,{children:"fs.writeFile"})}),"."]})}),"\n",(0,t.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,t.jsx)(l,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," yields ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"Text",children:"Text"}),"\n",(0,t.jsxs)(n.h4,{id:"Write-some-text-to-a-txt-file",children:["Write some text to a ",(0,t.jsx)(n.code,{children:"txt"})," file"]}),"\n",(0,t.jsx)(n.p,{children:"If the path to the file does not exist, the file and its path will be created.\nIf the file already exists, it will be over-written."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('path/to/message.txt', 'Hello World')\ncy.readFile('path/to/message.txt').then((text) => {\n  expect(text).to.equal('Hello World') // true\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{projectRoot}/path/to/message.txt"})," will be created with the following contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:' "Hello World"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"JSON",children:"JSON"}),"\n",(0,t.jsx)(n.h4,{id:"Write-JSON-to-a-file",children:"Write JSON to a file"}),"\n",(0,t.jsx)(n.p,{children:"JavaScript arrays and objects are stringified and formatted into text."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('path/to/data.json', { name: 'Eliza', email: 'eliza@example.com' })\ncy.readFile('path/to/data.json').then((user) => {\n  expect(user.name).to.equal('Eliza') // true\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{projectRoot}/path/to/data.json"})," will be created with the following contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Eliza",\n  "email": "eliza@example.com"\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"Write-response-data-to-a-fixture-file",children:"Write response data to a fixture file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.request('https://jsonplaceholder.typicode.com/users').then((response) => {\n  cy.writeFile('cypress/fixtures/users.json', response.body)\n})\n\n// our fixture file is now generated and can be used\ncy.fixture('users').then((users) => {\n  expect(users[0].name).to.exist\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Encoding",children:"Encoding"}),"\n",(0,t.jsx)(n.h4,{id:"Specify-the-encoding-as-a-String",children:"Specify the encoding as a String"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('path/to/ascii.txt', 'Hello World', 'ascii'))\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{projectRoot}/path/to/message.txt"})," will be created with the following contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Hello World\n"})}),"\n",(0,t.jsx)(n.h4,{id:"Specify-the-encoding-as-part-of-the-options-object",children:"Specify the encoding as part of the options object"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('path/to/ascii.txt', 'Hello World', {\n  encoding: 'ascii',\n  flag: 'a+',\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Flags",children:"Flags"}),"\n",(0,t.jsx)(n.h4,{id:"Append-contents-to-the-end-of-a-file",children:"Append contents to the end of a file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('path/to/message.txt', 'Hello World', { flag: 'a+' })\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that appending assumes plain text file. If you want to merge a JSON object\nfor example, you need to read it first, add new properties, then write the\ncombined result back."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const filename = '/path/to/file.json'\n\ncy.readFile(filename).then((obj) => {\n  obj.id = '1234'\n  // write the merged object\n  cy.writeFile(filename, obj)\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"Similarly, if you need to push new items to an array"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const filename = '/path/to/list.json'\n\ncy.readFile(filename).then((list) => {\n  list.push({ item: 'example' })\n  // write the merged array\n  cy.writeFile(filename, list)\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Buffer",children:"Buffer"}),"\n",(0,t.jsx)(n.h4,{id:"Write-a-buffer-directly-without-encoding-as-a-string",children:"Write a buffer directly without encoding as a string"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const filename = '/path/to/file.png'\n\ncy.readFile(filename, null).then((obj) => {\n  // <Buffer ef 3a bf ... >\n  cy.writeFile(filename, obj, null)\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,t.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,t.jsx)(l,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," requires being chained off of ",(0,t.jsx)(n.code,{children:"cy"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," requires the file be successfully written to disk. Anything\npreventing this such as OS permission issues will cause it to fail."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,t.jsx)(l,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," will only run assertions you have chained once, and will not\n",(0,t.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,t.jsx)(l,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," can time out when the content being written takes a\nsignificant amount of time to encode."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Write an array to a file"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.writeFile('info.log', ['foo', 'bar', 'baz'])\n"})}),"\n",(0,t.jsx)(n.p,{children:"The command above will display in the Command Log as:"}),"\n",(0,t.jsx)(i,{src:"/img/api/writefile/write-data-to-system-file-for-testing.png",alt:"Command Log writeFile"}),"\n",(0,t.jsxs)(n.p,{children:["When clicking on the ",(0,t.jsx)(n.code,{children:"writeFile"})," command within the command log, the console\noutputs the following:"]}),"\n",(0,t.jsx)(i,{src:"/img/api/writefile/console-log-shows-contents-written-to-file.png",alt:"Console Log writeFile"}),"\n",(0,t.jsx)(n.h2,{id:"History",children:"History"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/changelog#9-2-0",children:"9.2.0"})}),(0,t.jsxs)(n.td,{children:["Added ",(0,t.jsx)(n.code,{children:"timeout"})," option"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/changelog#4-0-0",children:"4.0.0"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," now yields ",(0,t.jsx)(n.code,{children:"null"})," instead of ",(0,t.jsx)(n.code,{children:"contents"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/changelog#3-1-1",children:"3.1.1"})}),(0,t.jsxs)(n.td,{children:["Added ",(0,t.jsx)(n.code,{children:"flag"})," option and appending with ",(0,t.jsx)(n.code,{children:"a+"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/changelog#1-0-0",children:"1.0.0"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"cy.writeFile()"})," command added"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/commands/readfile",children:(0,t.jsx)(n.code,{children:"cy.readFile()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(7294);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);