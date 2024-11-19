"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[7669],{6537:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(5893),i=s(1151);const r={title:"GitLab CI"},a=void 0,o={id:"app/continuous-integration/gitlab-ci",title:"GitLab CI",description:"What you'll learn",source:"@site/docs/app/continuous-integration/gitlab-ci.mdx",sourceDirName:"app/continuous-integration",slug:"/app/continuous-integration/gitlab-ci",permalink:"/app/continuous-integration/gitlab-ci",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/continuous-integration/gitlab-ci.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"GitLab CI"},sidebar:"app",previous:{title:"GitHub Actions",permalink:"/app/continuous-integration/github-actions"},next:{title:"IDE Integration",permalink:"/app/tooling/IDE-integration"}},l={},c=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Basic Setup",id:"Basic-Setup",level:2},{value:"Testing with Cypress Docker Images",id:"Testing-with-Cypress-Docker-Images",level:2},{value:"Caching Dependencies and Build Artifacts",id:"Caching-Dependencies-and-Build-Artifacts",level:2},{value:"Parallelization",id:"Parallelization",level:2},{value:"Install Job",id:"Install-Job",level:3},{value:"Worker Jobs",id:"Worker-Jobs",level:3},{value:"Using Cypress Cloud with GitLab CI/CD",id:"Using-Cypress-Cloud-with-GitLab-CICD",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{CiProviderCloudSteps:s,Icon:r}=n;return s||p("CiProviderCloudSteps",!0),r||p("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.h5,{id:"What-youll-learn",children:[(0,t.jsx)(r,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to set up GitLab CI/CD to run Cypress tests"}),"\n",(0,t.jsx)(n.li,{children:"How to cache dependencies and build artifacts"}),"\n",(0,t.jsx)(n.li,{children:"How to parallelize Cypress tests with GitLab CI/CD"}),"\n",(0,t.jsx)(n.li,{children:"How to use Cypress Cloud with GitLab CI/CD"}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["With its hosted\n",(0,t.jsx)(n.a,{href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",children:"CI/CD Service"}),",\n",(0,t.jsx)(n.a,{href:"https://gitlab.com",children:"GitLab"}),' offers developers "a tool built into GitLab for\nsoftware development through the continuous methodologies".']}),"\n",(0,t.jsxs)(n.p,{children:["Detailed documentation is available in the\n",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/",children:"GitLab CI/CD Documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"Basic-Setup",children:"Basic Setup"}),"\n",(0,t.jsxs)(n.p,{children:["The example below is basic CI setup and job using\n",(0,t.jsx)(n.a,{href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",children:"GitLab CI/CD"}),"\nto run Cypress tests within the Electron browser. This GitLab CI configuration\nis placed within ",(0,t.jsx)(n.code,{children:".gitlab-ci.yml"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - test\n\ntest:\n  image: node:latest\n  stage: test\n  script:\n    # install dependencies\n    - npm ci\n    # start the server in the background\n    - npm start &\n    # run Cypress tests\n    - npm run e2e\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"How this configuration works:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On ",(0,t.jsx)(n.em,{children:"push"})," to this repository, this job will provision and start GitLab-hosted\nLinux instance for running the outlined ",(0,t.jsx)(n.code,{children:"stages"})," declared in ",(0,t.jsx)(n.code,{children:"script"})," within\nthe ",(0,t.jsx)(n.code,{children:"test"})," job section of the configuration."]}),"\n",(0,t.jsx)(n.li,{children:"The code is checked out from the GitLab repository."}),"\n",(0,t.jsxs)(n.li,{children:["Finally, our scripts will:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install npm dependencies"}),"\n",(0,t.jsxs)(n.li,{children:["Start the project web server (",(0,t.jsx)(n.code,{children:"npm start"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Run the Cypress tests within the GitLab repository using Electron."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Testing-with-Cypress-Docker-Images",children:"Testing with Cypress Docker Images"}),"\n",(0,t.jsxs)(n.p,{children:["The Cypress team maintains the official\n",(0,t.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-docker-images",children:"Docker Images"})," for running\nCypress tests locally and in CI, which are built with Google Chrome, Mozilla Firefox and Microsoft Edge.\nFor example, this allows us to run the tests in Firefox by passing the\n",(0,t.jsx)(n.code,{children:"--browser firefox"})," attribute to ",(0,t.jsx)(n.code,{children:"cypress run"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - test\n\ntest:\n  image: cypress/browsers:node-22.11.0-chrome-130.0.6723.69-1-ff-132.0-edge-130.0.2849.56-1\n  stage: test\n  script:\n    # install dependencies\n    - npm ci\n    # start the server in the background\n    - npm start &\n    # run Cypress tests\n    - npx cypress run --browser firefox\n"})}),"\n",(0,t.jsx)(n.h2,{id:"Caching-Dependencies-and-Build-Artifacts",children:"Caching Dependencies and Build Artifacts"}),"\n",(0,t.jsxs)(n.p,{children:["Caching of dependencies and build artifacts can be accomplished with the ",(0,t.jsx)(n.code,{children:"cache"}),"\nconfiguration. The\n",(0,t.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/caching/",children:"caching documentation"})," contains all\noptions for caching dependencies and build artifacts across many different\nworkflows. Artifacts from a job can be defined by providing paths and an\noptional expiry time."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - test\n\ncache:\n  key: ${CI_COMMIT_REF_SLUG}\n  paths:\n    - node_modules/\n    - .npm/\n\ntest:\n  image: cypress/browsers:node-22.11.0-chrome-130.0.6723.69-1-ff-132.0-edge-130.0.2849.56-1\n  stage: test\n  script:\n    # install dependencies\n    - npm ci\n    # start the server in the background\n    - npm start &\n    # run Cypress tests\n    - npx cypress run --browser firefox\n  artifacts:\n    when: always\n    paths:\n      - cypress/videos/**/*.mp4\n      - cypress/screenshots/**/*.png\n    expire_in: 1 day\n"})}),"\n",(0,t.jsx)(n.h2,{id:"Parallelization",children:"Parallelization"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/cloud/get-started/introduction",children:"Cypress Cloud"})," offers the ability to\n",(0,t.jsx)(n.a,{href:"/cloud/features/smart-orchestration/parallelization",children:"parallelize and group test runs"}),"\nalong with additional insights and ",(0,t.jsx)(n.a,{href:"/cloud/features/analytics/overview",children:"analytics"})," for\nCypress tests."]}),"\n",(0,t.jsxs)(n.p,{children:["The addition of the\n",(0,t.jsxs)(n.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#parallel",children:[(0,t.jsx)(n.code,{children:"parallel"})," attribute"]})," to the\nconfiguration of a job will allow us to run multiples instances of Cypress at\nsame time as we will see later in this section."]}),"\n",(0,t.jsx)(n.p,{children:"Before diving into an example of a parallelization setup, it is important to\nunderstand the two different types of jobs that we will declare:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Install Job"}),": A job that installs and caches dependencies that will be used\nby subsequent jobs later in the GitLab CI workflow."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Worker Job"}),": A job that handles execution of Cypress tests and depends on\nthe ",(0,t.jsx)(n.em,{children:"install job"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"Install-Job",children:"Install Job"}),"\n",(0,t.jsx)(n.p,{children:"The separation of installation from test running is necessary when running\nparallel jobs. It allows for reuse of various build steps aided by caching."}),"\n",(0,t.jsxs)(n.p,{children:["First, we will define the ",(0,t.jsx)(n.code,{children:"build"})," stage along with ",(0,t.jsx)(n.code,{children:"cache"})," and variables related\nto the cache."]}),"\n",(0,t.jsxs)(n.p,{children:["Then we define the ",(0,t.jsx)(n.code,{children:"install"})," step that will be used by the worker jobs and\nassign it to the ",(0,t.jsx)(n.code,{children:"build"})," stage."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - build\n\n## Set environment variables for folders in \"cache\" job settings\n## for npm modules and Cypress binary\nvariables:\n  npm_config_cache: '$CI_PROJECT_DIR/.npm'\n  CYPRESS_CACHE_FOLDER: '$CI_PROJECT_DIR/cache/Cypress'\n\ncache:\n  key: ${CI_COMMIT_REF_SLUG}\n  paths:\n    - cache/Cypress\n    - node_modules\n    - build\n\n## Install npm dependencies and Cypress\ninstall:\n  image: cypress/browsers:node-22.11.0-chrome-130.0.6723.69-1-ff-132.0-edge-130.0.2849.56-1\n  stage: build\n  script:\n    - npm ci\n"})}),"\n",(0,t.jsx)(n.h3,{id:"Worker-Jobs",children:"Worker Jobs"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we add a ",(0,t.jsx)(n.code,{children:"test"})," stage and define the worker job named ",(0,t.jsx)(n.code,{children:"ui-chrome-tests"}),"\nthat will run Cypress tests with Chrome in parallel during the ",(0,t.jsx)(n.code,{children:"test"})," stage."]}),"\n",(0,t.jsxs)(n.p,{children:["The addition of the\n",(0,t.jsxs)(n.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#parallel",children:[(0,t.jsx)(n.code,{children:"parallel"})," attribute"]})," to the\nconfiguration of a job will allow us to run multiples instances of Cypress at\nsame time."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The following configuration using the ",(0,t.jsx)(n.code,{children:"--parallel"})," and ",(0,t.jsx)(n.code,{children:"--record"})," flags to\n",(0,t.jsx)(n.a,{href:"/app/references/command-line#cypress-run",children:"cypress run"})," requires setting up\nrecording test results to ",(0,t.jsx)(n.a,{href:"/cloud/get-started/introduction",children:"Cypress Cloud"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - build\n  - test\n\n## Set environment variables for folders in \"cache\" job settings\n## for npm modules and Cypress binary\nvariables:\n  npm_config_cache: '$CI_PROJECT_DIR/.npm'\n  CYPRESS_CACHE_FOLDER: '$CI_PROJECT_DIR/cache/Cypress'\n\ncache:\n  key: ${CI_COMMIT_REF_SLUG}\n  paths:\n    - .cache/*\n    - cache/Cypress\n    - node_modules\n    - build\n\n## Install npm dependencies and Cypress\ninstall:\n  image: cypress/browsers:node-22.11.0-chrome-130.0.6723.69-1-ff-132.0-edge-130.0.2849.56-1\n  stage: build\n  script:\n    - npm ci\n\nui-chrome-tests:\n  image: cypress/browsers:node-22.11.0-chrome-130.0.6723.69-1-ff-132.0-edge-130.0.2849.56-1\n  stage: test\n  parallel: 5\n  script:\n    # install dependencies\n    - npm ci\n    # start the server in the background\n    - npm start &\n    # run Cypress tests in parallel\n    - npx cypress run --record --parallel --browser chrome --group UI-Chrome\n"})}),"\n",(0,t.jsx)(n.h2,{id:"Using-Cypress-Cloud-with-GitLab-CICD",children:"Using Cypress Cloud with GitLab CI/CD"}),"\n",(0,t.jsxs)(n.p,{children:["In the GitLab CI configuration we have defined in the previous section, we are\nleveraging three useful features of\n",(0,t.jsx)(n.a,{href:"/cloud/get-started/introduction",children:"Cypress Cloud"}),":"]}),"\n",(0,t.jsx)(s,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);