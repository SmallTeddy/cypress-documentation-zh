"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[7250],{3613:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=n(5893),o=n(1151);const t={title:"Reporters"},i=void 0,l={id:"app/tooling/reporters",title:"Reporters",description:"What you'll learn",source:"@site/docs/app/tooling/reporters.mdx",sourceDirName:"app/tooling",slug:"/app/tooling/reporters",permalink:"/app/tooling/reporters",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/tooling/reporters.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Reporters"},sidebar:"app",previous:{title:"Code Coverage",permalink:"/app/tooling/code-coverage"},next:{title:"TypeScript",permalink:"/app/tooling/typescript-support"}},c={},a=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Introduction",id:"Introduction",level:2},{value:"Built in reporters",id:"Built-in-reporters",level:2},{value:"Custom reporters",id:"Custom-reporters",level:2},{value:"Installed locally",id:"Installed-locally",level:3},{value:"Cypress configuration",id:"Cypress-configuration",level:4},{value:"Command Line",id:"Command-Line",level:4},{value:"Installed via npm",id:"Installed-via-npm",level:3},{value:"Cypress configuration",id:"Cypress-configuration-1",level:4},{value:"Command line",id:"Command-line",level:4},{value:"Reporter Options",id:"Reporter-Options",level:2},{value:"Cypress configuration",id:"Cypress-configuration-2",level:4},{value:"Command line",id:"Command-line-1",level:4},{value:"Merging reports across spec files",id:"Merging-reports-across-spec-files",level:2},{value:"Cypress configuration",id:"Cypress-configuration-3",level:4},{value:"Command line",id:"Command-line-2",level:4},{value:"Multiple reporters",id:"Multiple-reporters",level:2},{value:"Examples",id:"Examples",level:3},{value:"Spec to <code>STDOUT</code>, save JUnit XML files",id:"Spec-to-STDOUT-save-JUnit-XML-files",level:4},{value:"Cypress configuration",id:"Cypress-configuration-4",level:4},{value:"Command line",id:"Command-line-3",level:4},{value:"Spec to <code>STDOUT</code>, produce a combined Mochawesome JSON file",id:"Spec-to-STDOUT-produce-a-combined-Mochawesome-JSON-file",level:4},{value:"Cypress configuration",id:"Cypress-configuration-5",level:4},{value:"Command line",id:"Command-line-4",level:4},{value:"History",id:"History",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{CloudFreePlan:n,CypressConfigFileTabs:t,DocsImage:i,Icon:l}=r;return n||h("CloudFreePlan",!0),t||h("CypressConfigFileTabs",!0),i||h("DocsImage",!0),l||h("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.admonition,{type:"info",children:[(0,s.jsxs)(r.h5,{id:"What-youll-learn",children:[(0,s.jsx)(l,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"How to use custom reporters in Cypress"}),"\n",(0,s.jsx)(r.li,{children:"How to use multiple reporters"}),"\n",(0,s.jsx)(r.li,{children:"How to merge reports across spec files"}),"\n"]})]}),"\n",(0,s.jsx)(r.h2,{id:"Introduction",children:"Introduction"}),"\n",(0,s.jsx)(r.p,{children:"After writing and running tests in Cypress, reviewing the results of those tests is crucial.\nCypress provides several options to review results of a test run."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/cloud/get-started/introduction",children:"Cypress Cloud"})," - See test results, spec data, errors,\nscreenshots, videos, and Test Replay in Cypress Cloud."]}),"\n",(0,s.jsx)(r.li,{children:"Cypress App's open source built in and custom reporters."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["This document covers how to use [built in](#Built in reporter) and ",(0,s.jsx)(r.a,{href:"#Custom-reporters",children:"custom"})," reporters in Cypress App."]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(n,{})}),"\n",(0,s.jsx)(r.h2,{id:"Built-in-reporters",children:"Built in reporters"}),"\n",(0,s.jsx)(r.p,{children:"Because Cypress is built on top of Mocha, that means any reporter built for\nMocha can be used with Cypress. Here is a list of built in Mocha reporters."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://mochajs.org/#reporters",children:"Mocha's built-in reporters"})}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["By default, Cypress uses the ",(0,s.jsx)(r.code,{children:"spec"})," reporter to output information to ",(0,s.jsx)(r.code,{children:"STDOUT"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"We've also added the two most common 3rd party reporters for Mocha. These are\nbuilt into Cypress and you can use them without installing anything."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/cypress-io/mocha-teamcity-reporter",children:(0,s.jsx)(r.code,{children:"teamcity"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/michaelleeallen/mocha-junit-reporter",children:(0,s.jsx)(r.code,{children:"junit"})})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"Custom-reporters",children:"Custom reporters"}),"\n",(0,s.jsx)(r.p,{children:"Cypress supports creating your own custom reporters or using any kind of 3rd\nparty reporter."}),"\n",(0,s.jsx)(r.h3,{id:"Installed-locally",children:"Installed locally"}),"\n",(0,s.jsxs)(r.p,{children:["You can load\n",(0,s.jsx)(r.a,{href:"https://mochajs.org/api/tutorial-custom-reporter.html",children:"custom Mocha reporters"}),"\nthrough a relative or absolute path. These can be specified in your Cypress\nconfiguration file or via the ",(0,s.jsx)(r.a,{href:"/app/references/command-line",children:"command line"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"For example, if you have the following directory structure:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-txt",children:"> my-project\n  > cypress\n  > src\n  > reporters\n    - custom.js\n"})}),"\n",(0,s.jsx)(r.p,{children:"You would specify the path to your custom reporter in either of the ways below."}),"\n",(0,s.jsx)(r.h4,{id:"Cypress-configuration",children:"Cypress configuration"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  reporter: 'reporters/custom.js',\n})\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  reporter: 'reporters/custom.js',\n})\n"})})]}),"\n",(0,s.jsx)(r.h4,{id:"Command-Line",children:"Command Line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"npx cypress run --reporter reporters/custom.js\n"})}),"\n",(0,s.jsx)(r.h3,{id:"Installed-via-npm",children:"Installed via npm"}),"\n",(0,s.jsx)(r.p,{children:"When using custom reporters via npm, specify the package name."}),"\n",(0,s.jsx)(r.h4,{id:"Cypress-configuration-1",children:"Cypress configuration"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  reporter: 'mochawesome',\n})\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  reporter: 'mochawesome',\n})\n"})})]}),"\n",(0,s.jsx)(r.h4,{id:"Command-line",children:"Command line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"npx cypress run --reporter mochawesome\n"})}),"\n",(0,s.jsx)(r.h2,{id:"Reporter-Options",children:"Reporter Options"}),"\n",(0,s.jsxs)(r.p,{children:["Some reporters accept options that customize their behavior. These can be\nspecified in your Cypress configuration or via\n",(0,s.jsx)(r.a,{href:"/app/references/command-line",children:"command line"})," options."]}),"\n",(0,s.jsx)(r.p,{children:"Reporter options differ depending on the reporter (and may not be supported at\nall). Refer to the documentation for the reporter you are using for details on\nwhich options are supported."}),"\n",(0,s.jsxs)(r.p,{children:["The below configuration will output the JUnit report to ",(0,s.jsx)(r.code,{children:"STDOUT"})," and save it\ninto an XML file."]}),"\n",(0,s.jsx)(r.h4,{id:"Cypress-configuration-2",children:"Cypress configuration"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  reporter: 'junit',\n  reporterOptions: {\n    mochaFile: 'results/my-test-output.xml',\n    toConsole: true,\n  },\n})\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  reporter: 'junit',\n  reporterOptions: {\n    mochaFile: 'results/my-test-output.xml',\n    toConsole: true,\n  },\n})\n"})})]}),"\n",(0,s.jsx)(r.h4,{id:"Command-line-1",children:"Command line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'npx cypress run --reporter junit \\\n  --reporter-options "mochaFile=results/my-test-output.xml,toConsole=true"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"Merging-reports-across-spec-files",children:"Merging reports across spec files"}),"\n",(0,s.jsxs)(r.p,{children:["Each spec file is processed completely separately during each ",(0,s.jsx)(r.code,{children:"cypress run"}),"\nexecution. Thus each spec run ",(0,s.jsx)(r.em,{children:"overwrites"})," the previous report file. To preserve\nunique reports for each specfile, use the ",(0,s.jsx)(r.code,{children:"[hash]"})," in the ",(0,s.jsx)(r.code,{children:"mochaFile"})," filename."]}),"\n",(0,s.jsxs)(r.p,{children:["The following configuration will create separate XML files in the ",(0,s.jsx)(r.code,{children:"results"}),"\nfolder. You can then merge the reported output in a separate step using a 3rd\nparty tool. For example, for the\n",(0,s.jsx)(r.a,{href:"https://github.com/adamgruber/mochawesome",children:"Mochawesome"})," reporter, you can use\nthe ",(0,s.jsx)(r.a,{href:"https://github.com/antontelesh/mochawesome-merge",children:"mochawesome-merge"})," tool."]}),"\n",(0,s.jsx)(r.h4,{id:"Cypress-configuration-3",children:"Cypress configuration"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  reporter: 'junit',\n  reporterOptions: {\n    mochaFile: 'results/my-test-output-[hash].xml',\n  },\n})\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  reporter: 'junit',\n  reporterOptions: {\n    mochaFile: 'results/my-test-output-[hash].xml',\n  },\n})\n"})})]}),"\n",(0,s.jsx)(r.h4,{id:"Command-line-2",children:"Command line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'npx cypress run --reporter junit \\\n  --reporter-options "mochaFile=results/my-test-output-[hash].xml"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"Multiple-reporters",children:"Multiple reporters"}),"\n",(0,s.jsxs)(r.p,{children:["Oftentimes we see users wanting the ability to use multiple reporters. When\nrunning in CI, you might want to generate a report for ",(0,s.jsx)(r.code,{children:"junit"})," and perhaps a\n",(0,s.jsx)(r.code,{children:"json"})," report. This is great, but by setting this reporter you won't receive any\nadditional feedback while the tests are running!"]}),"\n",(0,s.jsx)(r.p,{children:"The solution here is to use multiple reporters. You will have the benefit of\nboth worlds."}),"\n",(0,s.jsxs)(r.p,{children:["We suggest using the npm module, ",(0,s.jsx)(l,{name:"github",inline:"true",url:"https://github.com/you54f/cypress-multi-reporters"})]}),"\n",(0,s.jsx)(r.h3,{id:"Examples",children:"Examples"}),"\n",(0,s.jsxs)(r.h4,{id:"Spec-to-STDOUT-save-JUnit-XML-files",children:["Spec to ",(0,s.jsx)(r.code,{children:"STDOUT"}),", save JUnit XML files"]}),"\n",(0,s.jsxs)(r.p,{children:["We want to output a ",(0,s.jsx)(r.code,{children:"spec"})," report to ",(0,s.jsx)(r.code,{children:"STDOUT"}),", while saving a JUnit XML file for\neach spec file."]}),"\n",(0,s.jsx)(r.p,{children:"We need to install additional dependencies:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/you54f/cypress-multi-reporters",children:(0,s.jsx)(r.code,{children:"cypress-multi-reporters"})}),":\nenables multiple reporters"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/michaelleeallen/mocha-junit-reporter",children:(0,s.jsx)(r.code,{children:"mocha-junit-reporter"})}),"\nthe actual junit reporter, as we cannot use the ",(0,s.jsx)(r.code,{children:"junit"})," reporter that comes\nwith Cypress"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"npm install cypress-multi-reporters mocha-junit-reporter --save-dev\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Specify your reporter and reporterOptions in your Cypress configuration or via\nthe ",(0,s.jsx)(r.a,{href:"/app/references/command-line",children:"command line"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"Cypress-configuration-4",children:"Cypress configuration"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  reporter: 'cypress-multi-reporters',\n  reporterOptions: {\n    configFile: 'reporter-config.json',\n  },\n})\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  reporter: 'cypress-multi-reporters',\n  reporterOptions: {\n    configFile: 'reporter-config.json',\n  },\n})\n"})})]}),"\n",(0,s.jsx)(r.h4,{id:"Command-line-3",children:"Command line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"npx cypress run --reporter cypress-multi-reporters \\\n  --reporter-options configFile=reporter-config.json\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Then add the separate ",(0,s.jsx)(r.code,{children:"reporter-config.json"})," file (defined in your\nconfiguration) to enable ",(0,s.jsx)(r.code,{children:"spec"})," and ",(0,s.jsx)(r.code,{children:"junit"})," reporters and direct the ",(0,s.jsx)(r.code,{children:"junit"}),"\nreporter to save separate XML files."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",metastring:'title="reporter-config.json"',children:'{\n  "reporterEnabled": "spec, mocha-junit-reporter",\n  "mochaJunitReporterReporterOptions": {\n    "mochaFile": "cypress/results/results-[hash].xml"\n  }\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["We recommend deleting all files from the ",(0,s.jsx)(r.code,{children:"cypress/results"})," folder before running\nthis command, since each run will output new XML files. For example, you can add\nthe npm script commands below to your ",(0,s.jsx)(r.code,{children:"package.json"})," then call ",(0,s.jsx)(r.code,{children:"npm run report"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "delete:reports": "rm cypress/results/* || true",\n    "prereport": "npm run delete:reports",\n    "report": "cypress run --reporter cypress-multi-reporters --reporter-options configFile=reporter-config.json"\n  }\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["In case you want to combine generated XML files into a single one,\n",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/junit-report-merger",children:"junit-report-merger"})," can be\nadded. For example, to combine all files into\n",(0,s.jsx)(r.code,{children:"cypress/results/combined-report.xml"})," the ",(0,s.jsx)(r.code,{children:"combine:reports"})," script can be added."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "delete:reports": "rm cypress/results/* || true",\n    "combine:reports": "jrm cypress/results/combined-report.xml \\"cypress/results/*.xml\\"",\n    "prereport": "npm run delete:reports",\n    "report": "cypress run --reporter cypress-multi-reporters --reporter-options configFile=reporter-config.json",\n    "postreport": "npm run combine:reports"\n  }\n}\n'})}),"\n",(0,s.jsxs)(r.h4,{id:"Spec-to-STDOUT-produce-a-combined-Mochawesome-JSON-file",children:["Spec to ",(0,s.jsx)(r.code,{children:"STDOUT"}),", produce a combined Mochawesome JSON file"]}),"\n",(0,s.jsxs)(r.p,{children:["This example is shown in the branch ",(0,s.jsx)(r.code,{children:"spec-and-single-mochawesome-json"})," in\n",(0,s.jsx)(r.a,{href:"https://github.com/cypress-io/cypress-example-circleci-orb",children:"https://github.com/cypress-io/cypress-example-circleci-orb"}),'.\nWe want to output a "spec" report to ',(0,s.jsx)(r.code,{children:"STDOUT"}),", save an individual Mochawesome\nJSON file per test file, and then combine all JSON reports into a single report."]}),"\n",(0,s.jsx)(r.p,{children:"We need to install some additional dependencies."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev\n"})}),"\n",(0,s.jsxs)(r.p,{children:["We need to configure the reporter in your\n",(0,s.jsx)(r.a,{href:"/app/references/configuration",children:"Cypress configuration"})," to skip the HTML\nreport generation and save each individual JSON file in the ",(0,s.jsx)(r.code,{children:"cypress/results"}),"\nfolder."]}),"\n",(0,s.jsx)(r.h4,{id:"Cypress-configuration-5",children:"Cypress configuration"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  reporter: 'mochawesome',\n  reporterOptions: {\n    reportDir: 'cypress/results',\n    overwrite: false,\n    html: false,\n    json: true,\n  },\n})\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  reporter: 'mochawesome',\n  reporterOptions: {\n    reportDir: 'cypress/results',\n    overwrite: false,\n    html: false,\n    json: true,\n  },\n})\n"})})]}),"\n",(0,s.jsx)(r.h4,{id:"Command-line-4",children:"Command line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'npx cypress run --reporter mochawesome \\\n  --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Our run will generate files\n",(0,s.jsx)(r.code,{children:"cypress/results/mochawesome.json, cypress/results/mochawesome_001.json, ..."}),".\nThen we can combine them using the\n",(0,s.jsx)(r.a,{href:"https://github.com/antontelesh/mochawesome-merge",children:"mochawesome-merge"})," utility."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'npx mochawesome-merge "cypress/results/*.json" > mochawesome.json\n'})}),"\n",(0,s.jsxs)(r.p,{children:["We can now generate a combined HTML report from the ",(0,s.jsx)(r.code,{children:"mochawesome.json"})," file\nusing the\n",(0,s.jsx)(r.a,{href:"https://github.com/adamgruber/mochawesome-report-generator",children:"https://github.com/adamgruber/mochawesome-report-generator"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"npx marge mochawesome.json\n"})}),"\n",(0,s.jsxs)(r.p,{children:["It generates the beautiful standalone HTML report file\n",(0,s.jsx)(r.code,{children:"mochawesome-report/mochawesome.html"})," shown below. As you can see all test\nresults, timing information, and even test bodies are included."]}),"\n",(0,s.jsx)(i,{src:"/img/app/reporters/mochawesome-report.png",alt:"Mochawesome HTML report"}),"\n",(0,s.jsxs)(r.p,{children:["For more information, see\n",(0,s.jsx)(r.a,{href:"http://antontelesh.github.io/testing/2019/02/04/mochawesome-merge.html",children:"Integrating Mochawesome reporter with Cypress's"})]}),"\n",(0,s.jsx)(r.h2,{id:"History",children:"History"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Version"}),(0,s.jsx)(r.th,{children:"Changes"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/app/references/changelog",children:"4.4.2"})}),(0,s.jsxs)(r.td,{children:["Custom Mocha reporters updated to use the version of Mocha bundled with Cypress. No need to install ",(0,s.jsx)(r.code,{children:"mocha"})," separately to use custom reporters."]})]})})]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function h(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var s=n(7294);const o={},t=s.createContext(o);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);