"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[7254],{8047:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(5893),i=s(1151);const r={title:"task"},o=void 0,a={id:"api/commands/task",title:"task",description:"Execute code in Node via the task plugin event.",source:"@site/docs/api/commands/task.mdx",sourceDirName:"api/commands",slug:"/api/commands/task",permalink:"/api/commands/task",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/task.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"task"},sidebar:"api",previous:{title:"submit",permalink:"/api/commands/submit"},next:{title:"then",permalink:"/api/commands/then"}},c={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"Read a file that might not exist",id:"Read-a-file-that-might-not-exist",level:3},{value:"Return number of files in the folder",id:"Return-number-of-files-in-the-folder",level:3},{value:"Seed a database",id:"Seed-a-database",level:3},{value:"Return a Promise from an asynchronous task",id:"Return-a-Promise-from-an-asynchronous-task",level:3},{value:"Save a variable across non same-origin URL visits",id:"Save-a-variable-across-non-same-origin-URL-visits",level:3},{value:"Command options",id:"Command-options",level:3},{value:"Change the timeout",id:"Change-the-timeout",level:4},{value:"Notes",id:"Notes",level:2},{value:"Tasks must end",id:"Tasks-must-end",level:3},{value:"Tasks that do not end are not supported",id:"Tasks-that-do-not-end-are-not-supported",level:4},{value:"Tasks are merged automatically",id:"Tasks-are-merged-automatically",level:3},{value:"Reset timeout via <code>Cypress.config()</code>",id:"Reset-timeout-via-Cypressconfig",level:3},{value:"Set timeout in the test configuration",id:"Set-timeout-in-the-test-configuration",level:3},{value:"Allows a single argument only",id:"Allows-a-single-argument-only",level:3},{value:"Argument should be serializable",id:"Argument-should-be-serializable",level:3},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"History",id:"History",level:2},{value:"See also",id:"See-also",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{CypressConfigFileTabs:s,DocsImage:r,Icon:o}=n;return s||u("CypressConfigFileTabs",!0),r||u("DocsImage",!0),o||u("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Execute code in ",(0,t.jsx)(n.a,{href:"https://nodejs.org",children:"Node"})," via the ",(0,t.jsx)(n.code,{children:"task"})," plugin event."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)("strong",{children:"Anti-Pattern"}),(0,t.jsxs)(n.p,{children:["We do not recommend starting a web server using ",(0,t.jsx)(n.code,{children:"cy.task()"}),". Read about\n",(0,t.jsx)(n.a,{href:"/app/core-concepts/best-practices#Web-Servers",children:"best practices"})," here."]})]}),"\n",(0,t.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.task(event)\ncy.task(event, arg)\ncy.task(event, arg, options)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(o,{name:"check-circle",color:"green"})," ",(0,t.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ncy.task('log', 'This will be output to the terminal')\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        log(message) {\n          console.log(message)\n\n          return null\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        log(message) {\n          console.log(message)\n\n          return null\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"task"})," plugin event handler can return a value or a promise. The command\nwill fail if ",(0,t.jsx)(n.code,{children:"undefined"})," is returned or if the promise is resolved with\n",(0,t.jsx)(n.code,{children:"undefined"}),". This helps catch typos or cases where the task event is not\nhandled."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not need to return a value, explicitly return ",(0,t.jsx)(n.code,{children:"null"})," to signal that\nthe given event has been handled."]}),"\n",(0,t.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(o,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["event ",(0,t.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["An event name to be handled via the ",(0,t.jsx)(n.code,{children:"task"})," event in the\n",(0,t.jsx)(n.a,{href:"/app/plugins/plugins-guide#Using-a-plugin",children:"setupNodeEvents"})," function."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(o,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["arg ",(0,t.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["An argument to send along with the event. This can be any value that can be\nserialized by\n",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:"JSON.stringify()"}),".\nUnserializable types such as functions, regular expressions, or symbols will be\nomitted to ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you need to pass multiple arguments, use an object"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ncy.task('hello', { greeting: 'Hello', name: 'World' })\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        // deconstruct the individual properties\n        hello({ greeting, name }) {\n          console.log('%s, %s', greeting, name)\n\n          return null\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        // deconstruct the individual properties\n        hello({ greeting, name }) {\n          console.log('%s, %s', greeting, name)\n\n          return null\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(o,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["options ",(0,t.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,t.jsx)(n.code,{children:"cy.task()"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"log"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["Displays the command in the ",(0,t.jsx)(n.a,{href:"/app/core-concepts/open-mode#Command-Log",children:"Command log"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timeout"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/configuration#Timeouts",children:(0,t.jsx)(n.code,{children:"taskTimeout"})})}),(0,t.jsxs)(n.td,{children:["Time to wait for ",(0,t.jsx)(n.code,{children:"cy.task()"})," to resolve before ",(0,t.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,t.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Subject-Management",children:(0,t.jsx)(o,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," yields the value returned or resolved by the ",(0,t.jsx)(n.code,{children:"task"})," event in\n",(0,t.jsx)(n.a,{href:"/app/plugins/plugins-guide#Using-a-plugin",children:"setupNodeEvents"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," provides an escape hatch for running arbitrary Node code, so you can\ntake actions necessary for your tests outside of the scope of Cypress. This is\ngreat for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Seeding your test database."}),"\n",(0,t.jsx)(n.li,{children:"Storing state in Node that you want persisted between spec files."}),"\n",(0,t.jsx)(n.li,{children:"Performing parallel tasks, like making multiple http requests outside of\nCypress."}),"\n",(0,t.jsx)(n.li,{children:"Running an external process."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"Read-a-file-that-might-not-exist",children:"Read a file that might not exist"}),"\n",(0,t.jsxs)(n.p,{children:["Command ",(0,t.jsx)(n.a,{href:"/api/commands/readfile",children:"cy.readFile()"})," assumes the file exists. If you\nneed to read a file that might not exist, use ",(0,t.jsx)(n.code,{children:"cy.task"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ncy.task('readFileMaybe', 'my-file.txt').then((textOrNull) => { ... })\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nconst fs = require('fs')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        readFileMaybe(filename) {\n          if (fs.existsSync(filename)) {\n            return fs.readFileSync(filename, 'utf8')\n          }\n\n          return null\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nimport fs from 'fs'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        readFileMaybe(filename) {\n          if (fs.existsSync(filename)) {\n            return fs.readFileSync(filename, 'utf8')\n          }\n\n          return null\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"Return-number-of-files-in-the-folder",children:"Return number of files in the folder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ncy.task('countFiles', 'cypress/downloads').then((count) => { ... })\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nconst fs = require('fs')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        countFiles(folderName) {\n          return new Promise((resolve, reject) => {\n            fs.readdir(folderName, (err, files) => {\n              if (err) {\n                return reject(err)\n              }\n\n              resolve(files.length)\n            })\n          })\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nimport fs from 'fs'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        countFiles(folderName) {\n          return new Promise((resolve, reject) => {\n            fs.readdir(folderName, (err, files) => {\n              if (err) {\n                return reject(err)\n              }\n\n              resolve(files.length)\n            })\n          })\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"Seed-a-database",children:"Seed a database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// in test\ndescribe('e2e', () => {\n  beforeEach(() => {\n    cy.task('defaults:db')\n    cy.visit('/')\n  })\n\n  it('displays article values', () => {\n    cy.get('.article-list').should('have.length', 10)\n  })\n})\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n// we require some code in our app that\n// is responsible for seeding our database\nconst db = require('../../server/src/db')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        'defaults:db': () => {\n          return db.seed('defaults')\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n// we require some code in our app that\n// is responsible for seeding our database\nimport db from '../../server/src/db'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        'defaults:db': () => {\n          return db.seed('defaults')\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"Return-a-Promise-from-an-asynchronous-task",children:"Return a Promise from an asynchronous task"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ncy.task('pause', 1000)\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        pause(ms) {\n          return new Promise((resolve) => {\n            // tasks should not resolve with undefined\n            setTimeout(() => resolve(null), ms)\n          })\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        pause(ms) {\n          return new Promise((resolve) => {\n            // tasks should not resolve with undefined\n            setTimeout(() => resolve(null), ms)\n          })\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"Save-a-variable-across-non-same-origin-URL-visits",children:"Save a variable across non same-origin URL visits"}),"\n",(0,t.jsxs)(n.p,{children:["When visiting non same-origin URL, Cypress will\n",(0,t.jsx)(n.a,{href:"/app/guides/cross-origin-testing",children:"change the hosted URL to the new URL"}),", wiping the\nstate of any local variables. We want to save a variable across visiting non\nsame-origin URLs."]}),"\n",(0,t.jsxs)(n.p,{children:["We can save the variable and retrieve the saved variable outside of the test\nusing ",(0,t.jsx)(n.code,{children:"cy.task()"})," as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ndescribe('Href visit', () => {\n  it('captures href', () => {\n    cy.visit('https://example.cypress.io')\n    cy.get('a')\n      .invoke('attr', 'href')\n      .then((href) => {\n        // href is not same-origin as current url\n        // like https://www.cypress-dx.com\n        cy.task('setHref', href)\n      })\n  })\n\n  it('visit href', () => {\n    cy.task('getHref').then((href) => {\n      // visit non same-origin url https://www.cypress-dx.com\n      cy.visit(href)\n    })\n  })\n})\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nlet href\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        setHref: (val) => {\n          return (href = val)\n        },\n        getHref: () => {\n          return href\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nlet href: string\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        setHref: (val) => {\n          return (href = val)\n        },\n        getHref: () => {\n          return href\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"Command-options",children:"Command options"}),"\n",(0,t.jsx)(n.h4,{id:"Change-the-timeout",children:"Change the timeout"}),"\n",(0,t.jsxs)(n.p,{children:["You can increase the time allowed to execute the task, although ",(0,t.jsx)(n.em,{children:"we do not\nrecommend executing tasks that take a long time to exit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Cypress will ",(0,t.jsx)(n.em,{children:"not"})," continue running any other commands until ",(0,t.jsx)(n.code,{children:"cy.task()"})," has\nfinished, so a long-running command will drastically slow down your test runs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// will fail if seeding the database takes longer than 20 seconds to finish\ncy.task('seedDatabase', null, { timeout: 20000 })\n"})}),"\n",(0,t.jsx)(n.h2,{id:"Notes",children:"Notes"}),"\n",(0,t.jsx)(n.h3,{id:"Tasks-must-end",children:"Tasks must end"}),"\n",(0,t.jsx)(n.h4,{id:"Tasks-that-do-not-end-are-not-supported",children:"Tasks that do not end are not supported"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," does not support tasks that do not end, such as:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Starting a server."}),"\n",(0,t.jsx)(n.li,{children:"A task that watches for file changes."}),"\n",(0,t.jsx)(n.li,{children:"Any process that needs to be manually interrupted to stop."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A task must end within the ",(0,t.jsx)(n.code,{children:"taskTimeout"})," or Cypress will fail the current test."]}),"\n",(0,t.jsx)(n.h3,{id:"Tasks-are-merged-automatically",children:"Tasks are merged automatically"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you might be using plugins that export their tasks for registration.\nCypress automatically merges ",(0,t.jsx)(n.code,{children:"on('task')"})," objects for you. For example if you\nare using\n",(0,t.jsx)(n.a,{href:"https://github.com/bahmutov/cypress-skip-and-only-ui",children:"cypress-skip-and-only-ui"}),"\nplugin and want to install your own task to read a file that might not exist:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nconst skipAndOnlyTask = require('cypress-skip-and-only-ui/task')\nconst fs = require('fs')\nconst myTask = {\n  readFileMaybe(filename) {\n    if (fs.existsSync(filename)) {\n      return fs.readFileSync(filename, 'utf8')\n    }\n\n    return null\n  },\n}\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      // register plugin's task\n      on('task', skipAndOnlyTask)\n      // and register my own task\n      on('task', myTask)\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nimport skipAndOnlyTask from 'cypress-skip-and-only-ui/task'\nimport fs from 'fs'\nconst myTask = {\n  readFileMaybe(filename) {\n    if (fs.existsSync(filename)) {\n      return fs.readFileSync(filename, 'utf8')\n    }\n\n    return null\n  },\n}\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      // register plugin's task\n      on('task', skipAndOnlyTask)\n      // and register my own task\n      on('task', myTask)\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/issues/2284",children:"#2284"})," for\nimplementation."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)("strong",{children:"Duplicate task keys"}),(0,t.jsx)(n.p,{children:"If multiple task objects use the same key, the later registration will overwrite\nthat particular key, similar to how merging multiple objects with duplicate keys\nwill overwrite the first one."})]}),"\n",(0,t.jsxs)(n.h3,{id:"Reset-timeout-via-Cypressconfig",children:["Reset timeout via ",(0,t.jsx)(n.code,{children:"Cypress.config()"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can change the timeout of ",(0,t.jsx)(n.code,{children:"cy.task()"})," for the remainder of the tests by\nsetting the new values for ",(0,t.jsx)(n.code,{children:"taskTimeout"})," within\n",(0,t.jsx)(n.a,{href:"/api/cypress-api/config",children:"Cypress.config()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Cypress.config('taskTimeout', 30000)\nCypress.config('taskTimeout') // => 30000\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Set-timeout-in-the-test-configuration",children:"Set timeout in the test configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure the ",(0,t.jsx)(n.code,{children:"cy.task()"})," timeout within a suite or test by passing the\nnew configuration value within the\n",(0,t.jsx)(n.a,{href:"/app/references/configuration#Test-Configuration",children:"test configuration"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This will set the timeout throughout the duration of the tests, then return it\nto the default ",(0,t.jsx)(n.code,{children:"taskTimeout"})," when complete."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"describe('has data available from database', { taskTimeout: 90000 }, () => {\n  before(() => {\n    cy.task('seedDatabase')\n  })\n\n  // tests\n\n  after(() => {\n    cy.task('resetDatabase')\n  })\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Allows-a-single-argument-only",children:"Allows a single argument only"}),"\n",(0,t.jsxs)(n.p,{children:["The syntax ",(0,t.jsx)(n.code,{children:"cy.task(name, arg, options)"})," only has place for a single argument to\nbe passed from the test code to the plugins code. In the situations where you\nwould like to pass multiple arguments, place them into an object to be\ndestructured inside the task code. For example, if you would like to execute a\ndatabase query and pass the database profile name you could do:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\nconst dbName = 'stagingA'\nconst query = 'SELECT * FROM users'\n\ncy.task('queryDatabase', { dbName, query })\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nconst mysql = require('mysql')\n// the connection strings for different databases could\n// come from the Cypress configuration or from environment variables\nconst connections = {\n  stagingA: {\n    host: 'staging.my.co',\n    user: 'test',\n    password: '***',\n    database: 'users',\n  },\n  stagingB: {\n    host: 'staging-b.my.co',\n    user: 'test',\n    password: '***',\n    database: 'users',\n  },\n}\n\n// querying the database from Node\nfunction queryDB(connectionInfo, query) {\n  const connection = mysql.createConnection(connectionInfo)\n\n  connection.connect()\n\n  return new Promise((resolve, reject) => {\n    connection.query(query, (error, results) => {\n      if (error) {\n        return reject(error)\n      }\n\n      connection.end()\n\n      return resolve(results)\n    })\n  })\n}\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        // destructure the argument into the individual fields\n        queryDatabase({ dbName, query }) {\n          const connectionInfo = connections[dbName]\n\n          if (!connectionInfo) {\n            throw new Error(`Do not have DB connection under name ${dbName}`)\n          }\n\n          return queryDB(connectionInfo, query)\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nimport mysql from 'mysql'\n// the connection strings for different databases could\n// come from the Cypress configuration or from environment variables\nconst connections = {\n  stagingA: {\n    host: 'staging.my.co',\n    user: 'test',\n    password: '***',\n    database: 'users',\n  },\n  stagingB: {\n    host: 'staging-b.my.co',\n    user: 'test',\n    password: '***',\n    database: 'users',\n  },\n}\n\n// querying the database from Node\nfunction queryDB(connectionInfo, query) {\n  const connection = mysql.createConnection(connectionInfo)\n\n  connection.connect()\n\n  return new Promise((resolve, reject) => {\n    connection.query(query, (error, results) => {\n      if (error) {\n        return reject(error)\n      }\n\n      connection.end()\n\n      return resolve(results)\n    })\n  })\n}\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        // destructure the argument into the individual fields\n        queryDatabase({ dbName, query }) {\n          const connectionInfo = connections[dbName]\n\n          if (!connectionInfo) {\n            throw new Error(`Do not have DB connection under name ${dbName}`)\n          }\n\n          return queryDB(connectionInfo, query)\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"Argument-should-be-serializable",children:"Argument should be serializable"}),"\n",(0,t.jsxs)(n.p,{children:["The argument ",(0,t.jsx)(n.code,{children:"arg"})," sent via ",(0,t.jsx)(n.code,{children:"cy.task(name, arg)"})," should be serializable; it\ncannot have circular dependencies (issue\n",(0,t.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/issues/5539",children:"#5539"}),"). If there are any\nspecial fields like ",(0,t.jsx)(n.code,{children:"Date"}),", you are responsible for their conversion (issue\n",(0,t.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/issues/4980",children:"#4980"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// in test\ncy.task('date', new Date()).then((s) => {\n  // the yielded result is a string\n  // we need to convert it to Date object\n  const result = new Date(s)\n})\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        date(s) {\n          // s is a string, so convert it to Date\n          const d = new Date(s)\n\n          // do something with the date\n          // and return it back\n          return d\n        },\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        date(s) {\n          // s is a string, so convert it to Date\n          const d = new Date(s)\n\n          // do something with the date\n          // and return it back\n          return d\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,t.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,t.jsx)(o,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," requires being chained off of ",(0,t.jsx)(n.code,{children:"cy"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," requires the task to eventually end."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Assertions",children:(0,t.jsx)(o,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," will only run assertions you have chained once, and will not\n",(0,t.jsx)(n.a,{href:"/app/core-concepts/retry-ability",children:"retry"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,t.jsx)(n.a,{href:"/app/core-concepts/introduction-to-cypress#Timeouts",children:(0,t.jsx)(o,{name:"question-circle"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," can time out waiting for the task to end."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,t.jsxs)(n.p,{children:["This example uses the\n",(0,t.jsx)(n.a,{href:"#Return-number-of-files-in-the-folder",children:"Return number of files in the folder"}),"\ntask defined above."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.task('countFiles', 'cypress/e2e')\n"})}),"\n",(0,t.jsx)(n.p,{children:"The command above will display in the Command Log as:"}),"\n",(0,t.jsx)(r,{src:"/img/api/task/task-count-files.png",alt:"Command Log task"}),"\n",(0,t.jsxs)(n.p,{children:["When clicking on the ",(0,t.jsx)(n.code,{children:"task"})," command within the command log, the console outputs\nthe following:"]}),"\n",(0,t.jsx)(r,{src:"/img/api/task/console-shows-task-result.png",alt:"Console Log task"}),"\n",(0,t.jsx)(n.h2,{id:"History",children:"History"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/app/references/changelog#3-0-0",children:"3.0.0"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"cy.task()"})," command added"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/commands/exec",children:(0,t.jsx)(n.code,{children:"cy.exec()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/commands/fixture",children:(0,t.jsx)(n.code,{children:"cy.fixture()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/commands/readfile",children:(0,t.jsx)(n.code,{children:"cy.readFile()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/commands/request",children:(0,t.jsx)(n.code,{children:"cy.request()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/commands/writefile",children:(0,t.jsx)(n.code,{children:"cy.writeFile()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);