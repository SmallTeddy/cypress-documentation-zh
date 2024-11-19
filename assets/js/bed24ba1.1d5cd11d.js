"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[4259],{8640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(5893),s=t(1151);const i={title:"Social Authentication"},c=void 0,a={id:"app/guides/authentication-testing/social-authentication",title:"Social Authentication",description:"What you'll learn",source:"@site/docs/app/guides/authentication-testing/social-authentication.mdx",sourceDirName:"app/guides/authentication-testing",slug:"/app/guides/authentication-testing/social-authentication",permalink:"/app/guides/authentication-testing/social-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/guides/authentication-testing/social-authentication.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Social Authentication"},sidebar:"app",previous:{title:"Okta Authentication",permalink:"/app/guides/authentication-testing/okta-authentication"},next:{title:"Conditional Testing",permalink:"/app/guides/conditional-testing"}},r={},l=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Application Setup",id:"Application-Setup",level:2},{value:"Set up the Auth0 tenant",id:"Set-up-the-Auth0-tenant",level:3},{value:"Set up the application",id:"Set-up-the-application",level:3},{value:"Test with Cypress",id:"Test-with-Cypress",level:2},{value:"Setting Auth0 app credentials in Cypress",id:"Setting-Auth0-app-credentials-in-Cypress",level:2},{value:"Login with <code>cy.origin()</code>",id:"Login-with-cyorigin",level:3},{value:"Facebook Login Function",id:"Facebook-Login-Function",level:4},{value:"Google Login Function",id:"Google-Login-Function",level:4},{value:"Microsoft Login Function",id:"Microsoft-Login-Function",level:4},{value:"Combined Login Command",id:"Combined-Login-Command",level:4},{value:"See also",id:"See-also",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{DocsVideo:t,Icon:i}=n;return t||p("DocsVideo",!0),i||p("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.h5,{id:"What-youll-learn",children:[(0,o.jsx)(i,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["How to authenticate with Auth0 for Tenant with ",(0,o.jsx)(n.code,{children:"cy.origin()"})]}),"\n",(0,o.jsxs)(n.li,{children:["How to use ",(0,o.jsx)(n.code,{children:"cy.session()"})," to cache authenticated users"]}),"\n"]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(i,{name:"exclamation-triangle"})," ",(0,o.jsx)(n.strong,{children:"Not recommended in CI"})]}),(0,o.jsxs)(n.p,{children:["Cypress does ",(0,o.jsx)(n.strong,{children:"not"})," recommend testing social connection authentication as a\nprimary means of authentication testing. This is due to the\n",(0,o.jsx)(n.a,{href:"/app/core-concepts/best-practices#Potential-Challenges-Authenticating-with-Social-Platforms",children:"challenges"}),"\nmentioned in our\n",(0,o.jsx)(n.a,{href:"/app/core-concepts/best-practices",children:"Best Practices Guide"}),"."]}),(0,o.jsx)(n.p,{children:"Relying on social authentication in CI will likely result in bot detection and\nin some cases, account suspension due to violating the provider's Terms of\nService."})]}),"\n",(0,o.jsx)(n.h2,{id:"Application-Setup",children:"Application Setup"}),"\n",(0,o.jsx)(n.p,{children:"For this guide, we're going to set up an application that uses Auth0 for Tenant\nthat has social connections set up for Google, Facebook, and Microsoft which\nwill authenticate users on our behalf to our application."}),"\n",(0,o.jsx)(n.h3,{id:"Set-up-the-Auth0-tenant",children:"Set up the Auth0 tenant"}),"\n",(0,o.jsxs)(n.p,{children:["To get started, first create a free ",(0,o.jsx)(n.a,{href:"https://auth0.com/signup",children:"Auth0"}),"\naccount and select the ",(0,o.jsx)(n.strong,{children:"I am a new Auth0 User"})," flow. This will have 4 steps:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Step 1:"})," When configuring your Sample App, please select the\n",(0,o.jsx)(n.strong,{children:"Single-Page App"})," for you platform and ",(0,o.jsx)(n.strong,{children:"React"})," for the technology."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Step 2:"})," For ",(0,o.jsx)(n.strong,{children:"Social Connections"}),", please select ",(0,o.jsx)(n.strong,{children:"Facebook"}),", ",(0,o.jsx)(n.strong,{children:"Microsoft"}),", and\n",(0,o.jsx)(n.strong,{children:"Google"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Step 3:"})," Try login and verify the connections are set up properly"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Step 4:"})," You can either download the sample via the ",(0,o.jsx)(n.strong,{children:"Download Sample App"}),"\nbutton or clone it\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0-samples/auth0-react-samples/tree/d5848ed710db85d6ef060731b296603c0eca744b/Sample-01",children:"here"}),".\nWe'll need this application in the next step. Select\n",(0,o.jsx)(n.strong,{children:"I am Ready to Use Auth0"}),". Your social connections on your Auth0 tenant\nshould now be configured correctly"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"Set-up-the-application",children:"Set up the application"}),"\n",(0,o.jsxs)(n.p,{children:["On your Auth0 dashboard, visit ",(0,o.jsx)(n.strong,{children:"Applications Dropdown"})," in the left menu.\nSelect the dropdown and go to ",(0,o.jsx)(n.strong,{children:"Applications"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Default Application"})]}),"\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.strong,{children:"Settings"})," tab","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Copy the ",(0,o.jsx)(n.code,{children:"domain"})," and ",(0,o.jsx)(n.code,{children:"client ID"})," fields inside ",(0,o.jsx)(n.strong,{children:"Basic Information"}),". These\nwill be needed shortly."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"Application Properties"})," should have ",(0,o.jsx)(n.strong,{children:"Single Page Application"})," selected\nfor ",(0,o.jsx)(n.strong,{children:"Application Type"}),","]}),"\n",(0,o.jsxs)(n.li,{children:["Inside ",(0,o.jsx)(n.strong,{children:"Application URIs"}),", please add ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," to\n",(0,o.jsx)(n.strong,{children:"Allowed Callback URLs"}),", ",(0,o.jsx)(n.strong,{children:"Allowed Web Origins"})," and ",(0,o.jsx)(n.strong,{children:"Allowed Logout URLs"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Create the ",(0,o.jsx)(n.code,{children:"src/auth_config.json"})," file from the\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0-samples/auth0-react-samples/blob/d5848ed710db85d6ef060731b296603c0eca744b/Sample-01/src/auth_config.json.example",children:(0,o.jsx)(n.code,{children:"src/auth_config.json.example"})}),"\nfile as described in the\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0-samples/auth0-react-samples/tree/d5848ed710db85d6ef060731b296603c0eca744b/Sample-01#create-an-api",children:"sample app"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Once created, paste the ",(0,o.jsx)(n.code,{children:"domain"})," and ",(0,o.jsx)(n.code,{children:"client ID"})," into their respective fields\ninside ",(0,o.jsx)(n.code,{children:"src/auth_config.json"}),". The ",(0,o.jsx)(n.code,{children:"audience"})," key can be removed. The\nlogin/callback URIs will default to ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," which is the url\nof our test application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/auth0-samples/auth0-react-samples/tree/d5848ed710db85d6ef060731b296603c0eca744b/Sample-01#project-setup",children:"Install"}),"\nthe application dependencies and\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0-samples/auth0-react-samples/tree/d5848ed710db85d6ef060731b296603c0eca744b/Sample-01#compile-and-hot-reload-for-development",children:"start the dev server"})]}),"\n",(0,o.jsxs)(n.li,{children:["Verify the application is running correctly by visiting\n",(0,o.jsx)(n.code,{children:"http://localhost:3000"})," and clicking the ",(0,o.jsx)(n.strong,{children:"Log in"})," button in the top right\ncorner. Select one of our social connections and log in and make sure to\ncomplete the ",(0,o.jsx)(n.strong,{children:"Authorize App"})," prompt. This only needs to be done once. This\nshould take you back to the sample app authenticated as the test user. When\nfinished, click the ",(0,o.jsx)(n.strong,{children:"Log Out"})," dropdown button. Repeat for Google, Microsoft,\nand Facebook or the accounts you would like to test."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here is what this process should look like for Facebook setup:"}),"\n",(0,o.jsx)(t,{src:"https://vimeo.com/789093604",title:"Facebook social application setup"}),"\n",(0,o.jsx)(n.h2,{id:"Test-with-Cypress",children:"Test with Cypress"}),"\n",(0,o.jsx)(n.p,{children:"Now that our application is set up and ready to go, we're ready to write our\nautomated tests."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["For these social connections, the\n",(0,o.jsx)(n.a,{href:"/app/guides/cross-origin-testing#Modifying-Obstructive-Third-Party-Code",children:(0,o.jsx)(n.code,{children:"experimentalModifyObstructiveThirdPartyCode"})}),"\nconfiguration option must be enabled."]})}),"\n",(0,o.jsx)(n.h2,{id:"Setting-Auth0-app-credentials-in-Cypress",children:"Setting Auth0 app credentials in Cypress"}),"\n",(0,o.jsxs)(n.p,{children:["To have access to test user credentials within our tests we need to configure\nCypress to use the social username, password, and name environment variables set\nin the ",(0,o.jsx)(n.code,{children:"cypress.env.json"})," file or by one of our\n",(0,o.jsx)(n.a,{href:"/app/references/environment-variables#Setting",children:"supported methods"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:"title='cypress.env.json'",children:'{\n  "GOOGLE_USERNAME": "",\n  "GOOGLE_PASSWORD": "",\n  "GOOGLE_NAME": "",\n  "MICROSOFT_USERNAME": "",\n  "MICROSOFT_PASSWORD": "",\n  "MICROSOFT_NAME": "",\n  "FACEBOOK_USERNAME": "",\n  "FACEBOOK_PASSWORD": "",\n  "FACEBOOK_NAME": ""\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"Login-with-cyorigin",children:["Login with ",(0,o.jsx)(n.code,{children:"cy.origin()"})]}),"\n",(0,o.jsxs)(n.p,{children:["We'll write a custom command called ",(0,o.jsx)(n.code,{children:"loginToAuth0ViaSocial"})," to perform a\nlogin to either Facebook, Google, or Microsoft. This command will use\n",(0,o.jsx)(n.a,{href:"/api/commands/origin",children:(0,o.jsx)(n.code,{children:"cy.origin()"})})," to:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate to the Auth0 login"}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Continue with ..."})," button and sign in with social credentials"]}),"\n",(0,o.jsxs)(n.li,{children:["Sign in and redirect back to the\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0-samples/auth0-react-samples/tree/d5848ed710db85d6ef060731b296603c0eca744b/Sample-01",children:"sample app"})]}),"\n",(0,o.jsxs)(n.li,{children:["Cache the results with ",(0,o.jsx)(n.a,{href:"/api/commands/session",children:(0,o.jsx)(n.code,{children:"cy.session()"})})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For demonstration, we'll have a function for each provider."}),"\n",(0,o.jsx)(n.h4,{id:"Facebook-Login-Function",children:"Facebook Login Function"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="cypress/support/commands.ts"',children:"import { domain as Auth0Domain } from '../../src/auth_config.json'\n\nfunction logIntoFacebook(username: string, password: string, name: string) {\n  cy.visit('http://localhost:3000')\n  cy.get('#qsLoginBtn').click()\n\n  cy.origin(Auth0Domain, () => {\n    cy.scrollTo('bottom')\n    cy.get('form[data-provider=\"facebook\"]').submit()\n  })\n\n  cy.origin(\n    'https://www.facebook.com',\n    {\n      args: {\n        username,\n        password,\n      },\n    },\n    ({ username, password }) => {\n      cy.get('input#email').type(username)\n      cy.get('input#pass').type(password, {\n        log: false,\n      })\n      cy.get('[type=\"submit\"]').contains('Log In').click()\n    }\n  )\n\n  cy.get('h6.dropdown-header').should('contain', name)\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"Google-Login-Function",children:"Google Login Function"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="cypress/support/commands.ts"',children:"import { domain as Auth0Domain } from '../../src/auth_config.json'\n\nfunction logIntoGoogle(username: string, password: string, name: string) {\n  Cypress.on(\n    'uncaught:exception',\n    (err) =>\n      !err.message.includes('ResizeObserver loop') &&\n      !err.message.includes('Error in protected function')\n  )\n  cy.visit('http://localhost:3000')\n  cy.get('#qsLoginBtn').click()\n\n  cy.origin(Auth0Domain, () => {\n    cy.scrollTo('bottom')\n    cy.get('form[data-provider=\"google\"]').submit()\n  })\n\n  cy.origin(\n    'https://accounts.google.com',\n    {\n      args: {\n        username,\n        password,\n      },\n    },\n    ({ username, password }) => {\n      Cypress.on(\n        'uncaught:exception',\n        (err) =>\n          !err.message.includes('ResizeObserver loop') &&\n          !err.message.includes('Error in protected function')\n      )\n\n      cy.get('input[type=\"email\"]').type(username, {\n        log: false,\n      })\n      // NOTE: The element exists on the original form but is hidden and gets rerendered, which leads to intermittent detached DOM issues\n      cy.contains('Next').click().wait(4000)\n      cy.get('[type=\"password\"]').type(password, {\n        log: false,\n      })\n      cy.contains('Next').click().wait(4000)\n    }\n  )\n\n  cy.get('h6.dropdown-header').should('contain', name)\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"Microsoft-Login-Function",children:"Microsoft Login Function"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="cypress/support/commands.ts"',children:"import { domain as Auth0Domain } from '../../src/auth_config.json'\n\nfunction logIntoMicrosoft(username: string, password: string, name: string) {\n  cy.visit('http://localhost:3000')\n  cy.get('#qsLoginBtn').click()\n\n  cy.origin(Auth0Domain, () => {\n    cy.scrollTo('bottom')\n    cy.get('form[data-provider=\"windowslive\"]').submit()\n  })\n\n  cy.origin(\n    'login.live.com',\n    {\n      args: {\n        username,\n        password,\n      },\n    },\n    ({ username, password }) => {\n      cy.get('input[type=\"email\"]').type(username)\n      cy.get('input[type=\"submit\"]').click()\n      cy.get('input[type=\"password\"]').type(password, {\n        log: false,\n      })\n      cy.get('input[type=\"submit\"]').click()\n      cy.get('#idBtn_Back').click()\n    }\n  )\n\n  cy.get('h6.dropdown-header').should('contain', name)\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"Combined-Login-Command",children:"Combined Login Command"}),"\n",(0,o.jsx)(n.p,{children:"We can wire these functions together in a single command, like so:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="cypress/support/commands.ts"',children:"Cypress.Commands.add(\n  'loginToAuth0ViaSocial',\n  (SOCIAL_PROVIDER: 'microsoft' | 'google' | 'facebook') => {\n    const log = Cypress.log({\n      displayName: 'Social LOGIN',\n      message: [`\ud83d\udd10 Authenticating | ${SOCIAL_PROVIDER}`],\n      // @ts-ignore\n      autoEnd: false,\n    })\n    log.snapshot('before')\n\n    switch (SOCIAL_PROVIDER) {\n      case 'microsoft':\n        logIntoMicrosoft(\n          Cypress.env('MICROSOFT_USERNAME'),\n          Cypress.env('MICROSOFT_PASSWORD'),\n          Cypress.env('MICROSOFT_NAME')\n        )\n        break\n      case 'google':\n        logIntoGoogle(\n          Cypress.env('GOOGLE_USERNAME'),\n          Cypress.env('GOOGLE_PASSWORD'),\n          Cypress.env('GOOGLE_NAME')\n        )\n        break\n      case 'facebook':\n        logIntoFacebook(\n          Cypress.env('FACEBOOK_USERNAME'),\n          Cypress.env('FACEBOOK_PASSWORD'),\n          Cypress.env('FACEBOOK_NAME')\n        )\n        break\n      default:\n        throw new Error('no social provider configured!')\n    }\n\n    log.snapshot('after')\n    log.end()\n  }\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, we can use our ",(0,o.jsx)(n.code,{children:"loginToAuth0ViaSocial"})," command in the test. Below is our\ntest to login as a user via Auth0 and run a basic check."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"title='auth.cy.js'",children:"describe('Social Logins Demo', () => {\n  beforeEach(() => {\n    // can provide facebook, google, or microsoft here\n    cy.loginToAuth0ViaSocial('facebook')\n    cy.visit('http://localhost:3000/')\n  })\n\n  it('navigates to the app after navigation and displays the sample project header', () => {\n    cy.get('h1').should('contain', 'React.js Sample Project')\n  })\n})\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here's a sample of what all 3 should look like in order."}),"\n",(0,o.jsx)(t,{src:"https://vimeo.com/789093473",title:"Google, Microsoft, and Facebook social with cy.origin()"}),"\n",(0,o.jsxs)(n.p,{children:["Lastly, we can refactor our login command to take advantage of\n",(0,o.jsx)(n.a,{href:"/api/commands/session",children:(0,o.jsx)(n.code,{children:"cy.session()"})})," to store our logged in user so we don't\nhave to reauthenticate before every test. This also largely cuts down on the\nlikelihood your account is blocked for frequent authentication attempts. Feel\nfree to DRY this up a bit!"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="cypress/support/commands.ts"',children:"Cypress.Commands.add(\n  'loginToAuth0ViaSocial',\n  (SOCIAL_PROVIDER: 'microsoft' | 'google' | 'facebook') => {\n    const log = Cypress.log({\n      displayName: 'Social LOGIN',\n      message: [`\ud83d\udd10 Authenticating | ${SOCIAL_PROVIDER}`],\n      // @ts-ignore\n      autoEnd: false,\n    })\n    log.snapshot('before')\n\n    cy.session(\n      `social-${SOCIAL_PROVIDER}`,\n      () => {\n        switch (SOCIAL_PROVIDER) {\n          case 'microsoft':\n            logIntoMicrosoft(\n              Cypress.env('MICROSOFT_USERNAME'),\n              Cypress.env('MICROSOFT_PASSWORD'),\n              Cypress.env('MICROSOFT_NAME')\n            )\n            break\n          case 'google':\n            logIntoGoogle(\n              Cypress.env('GOOGLE_USERNAME'),\n              Cypress.env('GOOGLE_PASSWORD'),\n              Cypress.env('GOOGLE_NAME')\n            )\n            break\n          case 'facebook':\n            logIntoFacebook(\n              Cypress.env('FACEBOOK_USERNAME'),\n              Cypress.env('FACEBOOK_PASSWORD'),\n              Cypress.env('FACEBOOK_NAME')\n            )\n            break\n          default:\n            throw new Error('no social provider configured!')\n        }\n      },\n      {\n        validate: () => {\n          cy.visit('http://localhost:3000')\n          switch (SOCIAL_PROVIDER) {\n            case 'microsoft':\n              cy.get('h6.dropdown-header').should(\n                'contain',\n                Cypress.env('MICROSOFT_NAME')\n              )\n              break\n            case 'google':\n              cy.get('h6.dropdown-header').should(\n                'contain',\n                Cypress.env('GOOGLE_NAME')\n              )\n              break\n            case 'facebook':\n              cy.get('h6.dropdown-header').should(\n                'contain',\n                Cypress.env('FACEBOOK_NAME')\n              )\n              break\n            default:\n              throw new Error('no social provider configured!')\n          }\n        },\n      }\n    )\n\n    log.snapshot('after')\n    log.end()\n  }\n)\n"})}),"\n",(0,o.jsx)(t,{src:"https://vimeo.com/789093516",title:"Facebook social with cy.session()"}),"\n",(0,o.jsxs)(n.p,{children:["With the use of ",(0,o.jsx)(n.a,{href:"/api/commands/session",children:(0,o.jsx)(n.code,{children:"cy.session()"})}),", our tests should now\nrun quicker!"]}),"\n",(0,o.jsxs)(n.p,{children:["We hope this guide was able to get you up and running with\n",(0,o.jsx)(n.a,{href:"/api/commands/origin",children:(0,o.jsx)(n.code,{children:"cy.origin()"})})," and\n",(0,o.jsx)(n.a,{href:"/api/commands/session",children:(0,o.jsx)(n.code,{children:"cy.session()"})}),". If you ran into any issues while\nfollowing this guide, or have any feedback, please let us know and submit a\n",(0,o.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-documentation/issues/new/choose",children:"Github issue"}),".\nHappy testing!"]}),"\n",(0,o.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/app/guides/cross-origin-testing",children:"Cross Origin Testing Guide"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/app/guides/authentication-testing/amazon-cognito-authentication",children:"AWS Cognito Authentication Guide"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/app/guides/authentication-testing/azure-active-directory-authentication",children:"Azure Active Directory Authentication Guide"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/api/commands/origin",children:(0,o.jsx)(n.code,{children:"cy.origin()"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/api/commands/session",children:(0,o.jsx)(n.code,{children:"cy.session()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var o=t(7294);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);