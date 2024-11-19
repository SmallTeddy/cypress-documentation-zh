"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[3733],{7172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151);const s={title:"Google Authentication: Cypress Guide",sidebar_label:"Google Authentication",description:"Google Authentication: Cypress Guide. Secure testing with seamless integration of Google Authentication, ensuring reliable and protected test scenarios"},r="Google Authentication",l={id:"app/guides/authentication-testing/google-authentication",title:"Google Authentication: Cypress Guide",description:"Google Authentication: Cypress Guide. Secure testing with seamless integration of Google Authentication, ensuring reliable and protected test scenarios",source:"@site/docs/app/guides/authentication-testing/google-authentication.mdx",sourceDirName:"app/guides/authentication-testing",slug:"/app/guides/authentication-testing/google-authentication",permalink:"/app/guides/authentication-testing/google-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/guides/authentication-testing/google-authentication.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{title:"Google Authentication: Cypress Guide",sidebar_label:"Google Authentication",description:"Google Authentication: Cypress Guide. Secure testing with seamless integration of Google Authentication, ensuring reliable and protected test scenarios"},sidebar:"app",previous:{title:"Azure Active Directory Authentication",permalink:"/app/guides/authentication-testing/azure-active-directory-authentication"},next:{title:"Okta Authentication",permalink:"/app/guides/authentication-testing/okta-authentication"}},a={},c=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Google Project and Application Setup",id:"Google-Project-and-Application-Setup",level:2},{value:"Using the Google OAuth 2.0 Playground to Create Testing Credentials",id:"Using-the-Google-OAuth-20-Playground-to-Create-Testing-Credentials",level:2},{value:"Setting Google app credentials in Cypress",id:"Setting-Google-app-credentials-in-Cypress",level:2},{value:"Custom Command for Google Authentication",id:"Custom-Command-for-Google-Authentication",level:2},{value:"Adapting a Google App for Testing",id:"Adapting-a-Google-App-for-Testing",level:2},{value:"Adapting the back end",id:"Adapting-the-back-end",level:3},{value:"Adapting the front end",id:"Adapting-the-front-end",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{CypressConfigFileTabs:t,Icon:s}=n;return t||p("CypressConfigFileTabs",!0),s||p("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"Google-Authentication",children:"Google Authentication"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.h5,{id:"What-youll-learn",children:[(0,o.jsx)(s,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"How to set up Cypress to test authentication with Google"}),"\n",(0,o.jsx)(n.li,{children:"How to set Google app credentials in Cypress"}),"\n",(0,o.jsx)(n.li,{children:"How to create a custom command for Google authentication"}),"\n",(0,o.jsx)(n.li,{children:"How to adapt a Google app for testing"}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["The technique we'll use for testing is to use the\n",(0,o.jsx)(n.a,{href:"https://developers.google.com/oauthplayground",children:"Google OAuth 2.0 Playground"})," to\ncreate a refresh token that can be exchanged for an access token and id token\nduring the testing phase."]}),"\n",(0,o.jsx)(n.h2,{id:"Google-Project-and-Application-Setup",children:"Google Project and Application Setup"}),"\n",(0,o.jsxs)(n.p,{children:["First, a ",(0,o.jsx)(n.a,{href:"https://google.com",children:"Google"})," project is required. If you don't already\nhave a project, you can create one using the\n",(0,o.jsx)(n.a,{href:"https://console.cloud.google.com",children:"Google Cloud Console"}),". More information is\navailable in the\n",(0,o.jsx)(n.a,{href:"https://cloud.google.com/apis/docs/getting-started#creating_a_google_project",children:"Google Cloud APIs Getting Started"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, use the ",(0,o.jsx)(n.a,{href:"https://console.developers.google.com/APIs",children:"Google API Console"}),"\nto ",(0,o.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"create credentials"}),"\nfor your web application. In the top navigation, click ",(0,o.jsx)(n.code,{children:"Create Credentials"})," and\nchoose ",(0,o.jsx)(n.code,{children:"OAuth client ID"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["On the ",(0,o.jsx)(n.code,{children:"Create OAuth client ID"})," page, enter the following:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Application Type:"})," Web Application"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Name:"})," Your Web Application Name"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Authorized JavaScript origins:"})," ",(0,o.jsx)(n.code,{children:"http://localhost:3000"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Authorized redirect URIs:"})," ",(0,o.jsx)(n.code,{children:"http://localhost:3000/callback"})," and\n",(0,o.jsx)(n.code,{children:"https://developers.google.com/oauthplayground"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Once saved, note the ",(0,o.jsx)(n.strong,{children:"client ID"})," and ",(0,o.jsx)(n.strong,{children:"client secret"}),'. You can find these under the\n"OAuth 2.0 Client IDs" on the\n',(0,o.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"Google API Credentials"}),"\npage."]}),"\n",(0,o.jsx)(n.h2,{id:"Using-the-Google-OAuth-20-Playground-to-Create-Testing-Credentials",children:"Using the Google OAuth 2.0 Playground to Create Testing Credentials"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"The refresh token from this process is unique to the authenticated Google user.\nThis process must be repeated for each user intended for testing."})}),"\n",(0,o.jsxs)(n.p,{children:["Visit the\n",(0,o.jsx)(n.a,{href:"https://developers.google.com/oauthplayground",children:"Google OAuth 2.0 Playground"}),".\nClick the ",(0,o.jsx)(s,{name:"cog"})," icon in the upper right corner to reveal a\n",(0,o.jsx)(n.code,{children:"OAuth 2.0 configuration"})," panel. In this panel set the following:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"OAuth flow"}),": Server-side"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Access type"}),": Offline"]}),"\n",(0,o.jsxs)(n.li,{children:["Check ",(0,o.jsx)(n.code,{children:"Use your own OAuth credentials"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"OAuth Client ID"}),": Your Google Application Client ID"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"OAuth Client secret"}),": Your Google Application Client Secret"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Select the Google APIs needed for your application under\n",(0,o.jsx)(n.strong,{children:"Step 1 (Select & authorize APIs)"}),", including the\n",(0,o.jsx)(n.code,{children:"https://www.googleapis.com/auth/userinfo.profile"})," endpoint under\n",(0,o.jsx)(n.strong,{children:"Google OAuth2 API v2"})," at a minimum. Click ",(0,o.jsx)(n.strong,{children:"Authorize APIs"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, sign in with Google credentials to your test Google user account. You'll be redirected back to the\n",(0,o.jsx)(n.a,{href:"https://developers.google.com/oauthplayground",children:"Google OAuth 2.0 Playground"}),"\nunder ",(0,o.jsx)(n.strong,{children:"Step 2 (Exchange authorization code for tokens)"}),". Click the\n",(0,o.jsx)(n.strong,{children:"Exchange authorization code for token"})," button."]}),"\n",(0,o.jsxs)(n.p,{children:["You'll be taken to ",(0,o.jsx)(n.strong,{children:"Step 3 (Configure request to API)"}),". Note the returned\nrefresh token to be used with testing."]}),"\n",(0,o.jsx)(n.h2,{id:"Setting-Google-app-credentials-in-Cypress",children:"Setting Google app credentials in Cypress"}),"\n",(0,o.jsxs)(n.p,{children:["To have access to test user credentials within our tests we need to configure\nCypress to use the ",(0,o.jsx)(n.a,{href:"https://google.com",children:"Google"})," environment variables set in the\n",(0,o.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title=".env"',children:"REACT_APP_GOOGLE_CLIENTID = 'your-client-id'\nREACT_APP_GOOGLE_CLIENT_SECRET = 'your-client-secret'\nGOOGLE_REFRESH_TOKEN = 'your-refresh-token'\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n// Populate process.env with values from .env file\nrequire('dotenv').config()\n\nmodule.exports = defineConfig({\n  env: {\n    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,\n    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,\n    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,\n  },\n})\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n// Populate process.env with values from .env file\nrequire('dotenv').config()\n\nexport default defineConfig({\n  env: {\n    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,\n    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,\n    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,\n  },\n})\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"Custom-Command-for-Google-Authentication",children:"Custom Command for Google Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["Next, we'll write a command named ",(0,o.jsx)(n.code,{children:"loginByGoogleApi"})," to perform a programmatic\nlogin into Google and set an item in ",(0,o.jsx)(n.code,{children:"localStorage"})," with the\nauthenticated users details, which we'll use in our application code to verify\nwe are authenticated under test."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"loginByGoogleApi"})," command will execute the following steps:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Use the refresh token from the\n",(0,o.jsx)(n.a,{href:"https://developers.google.com/oauthplayground",children:"Google OAuth 2.0 Playground"}),"\nto perform the programmatic login, exchanging the refresh token for an\n",(0,o.jsx)(n.code,{children:"access_token"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Use the ",(0,o.jsx)(n.code,{children:"access_token"})," returned to get the Google User profile."]}),"\n",(0,o.jsxs)(n.li,{children:["Finally the ",(0,o.jsx)(n.code,{children:"googleCypress"})," localStorage item is set with the ",(0,o.jsx)(n.code,{children:"access token"}),"\nand user profile."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="cypress/support/commands.js"',children:"Cypress.Commands.add('loginByGoogleApi', () => {\n  cy.log('Logging in to Google')\n  cy.request({\n    method: 'POST',\n    url: 'https://www.googleapis.com/oauth2/v4/token',\n    body: {\n      grant_type: 'refresh_token',\n      client_id: Cypress.env('googleClientId'),\n      client_secret: Cypress.env('googleClientSecret'),\n      refresh_token: Cypress.env('googleRefreshToken'),\n    },\n  }).then(({ body }) => {\n    const { access_token, id_token } = body\n\n    cy.request({\n      method: 'GET',\n      url: 'https://www.googleapis.com/oauth2/v3/userinfo',\n      headers: { Authorization: `Bearer ${access_token}` },\n    }).then(({ body }) => {\n      cy.log(body)\n      const userItem = {\n        token: id_token,\n        user: {\n          googleId: body.sub,\n          email: body.email,\n          givenName: body.given_name,\n          familyName: body.family_name,\n          imageUrl: body.picture,\n        },\n      }\n\n      window.localStorage.setItem('googleCypress', JSON.stringify(userItem))\n      cy.visit('/')\n    })\n  })\n})\n"})}),"\n",(0,o.jsxs)(n.p,{children:["With our Google app setup properly, necessary environment variables in place,\nand our ",(0,o.jsx)(n.code,{children:"loginByGoogleApi"})," command implemented, we'll be able to authenticate\nwith Google while our app is under test. Below is a test to login as a user via\nGoogle, complete the onboarding process and logout."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)("strong",{children:"Try it out"}),(0,o.jsxs)(n.p,{children:["The\n",(0,o.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/tests/ui-auth-providers/google.spec.ts",children:"runnable version of this test"}),"\nis in the ",(0,o.jsx)(s,{name:"github",inline:"true",contentType:"rwa"}),"."]})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="auth.cy.js"',children:"describe('Google', function () {\n  beforeEach(function () {\n    cy.task('db:seed')\n    cy.loginByGoogleApi()\n  })\n\n  it('shows onboarding', function () {\n    cy.contains('Get Started').should('be.visible')\n  })\n})\n"})}),"\n",(0,o.jsx)(n.h2,{id:"Adapting-a-Google-App-for-Testing",children:"Adapting a Google App for Testing"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)("strong",{children:"Note"}),(0,o.jsx)(n.p,{children:"The previous sections focused on the recommended Google authentication practice\nwithin Cypress tests. To use this practice it's assumed you're testing an app\nappropriately built or adapted to use Google."}),(0,o.jsx)(n.p,{children:"The following sections provides guidance on building or adapting an app to use\nGoogle authentication."})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(s,{name:"github",inline:"true",contentType:"rwa"})," is\nused and provides configuration and runnable code for both the React SPA and the\nExpress back end."]}),"\n",(0,o.jsxs)(n.p,{children:["The front end uses the\n",(0,o.jsx)(n.a,{href:"https://github.com/anthonyjgrove/react-google-login",children:"react-google-login component"}),"\nand the back end uses ",(0,o.jsx)(n.a,{href:"https://github.com/auth0/express-jwt",children:"express-jwt"})," to\nvalidate the JWT provided by Google."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"yarn dev:google"})," command when starting the\n",(0,o.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-realworld-app",children:"Cypress Real World App"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"Adapting-the-back-end",children:"Adapting the back end"}),"\n",(0,o.jsxs)(n.p,{children:["In order to validate API requests from the frontend, we install\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0/express-jwt",children:"express-jwt"})," and\n",(0,o.jsx)(n.a,{href:"https://github.com/auth0/node-jwks-rsa",children:"jwks-rsa"})," and configure validation for\nJWT's from Google."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"title='backend/helpers.ts'",children:"import jwt from 'express-jwt'\nimport jwksRsa from 'jwks-rsa'\n\ndotenv.config()\nconst googleJwtConfig = {\n  secret: jwksRsa.expressJwtSecret({\n    cache: true,\n    rateLimit: true,\n    jwksRequestsPerMinute: 5,\n    jwksUri: 'https://www.googleapis.com/oauth2/v3/certs',\n  }),\n  // Validate the audience and the issuer.\n  audience: process.env.REACT_APP_GOOGLE_CLIENTID,\n  issuer: 'accounts.google.com',\n  algorithms: ['RS256'],\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, we'll define an Express middleware function to be use in our routes to\nverify the Google JWT sent by the front end API requests\nas the ",(0,o.jsx)(n.code,{children:"Bearer"})," token."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"title='backend/helpers.ts'",children:"// ...\nexport const checkJwt = jwt(googleJwtConfig).unless({ path: ['/testData/*'] })\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once this helper is defined, we can use globally to apply to all routes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"title='backend/app.ts'",children:"// initial imports ...\nimport { checkJwt } from './helpers'\n\n// ...\nif (process.env.REACT_APP_GOOGLE) {\n  app.use(checkJwt)\n}\n// routes ...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"Adapting-the-front-end",children:"Adapting the front end"}),"\n",(0,o.jsxs)(n.p,{children:["We need to update our front end React app to allow for authentication with\nGoogle. As mentioned above, the front end uses the\n",(0,o.jsx)(n.a,{href:"https://github.com/anthonyjgrove/react-google-login",children:"react-google-login component"}),"\nto perform the login."]}),"\n",(0,o.jsxs)(n.p,{children:["First, we create an ",(0,o.jsx)(n.code,{children:"AppGoogle.tsx"})," container to render our application as it is\nauthenticated with Google. The component is identical to\nthe ",(0,o.jsx)(n.code,{children:"App.tsx"})," component, but has the addition of a ",(0,o.jsx)(n.code,{children:"GoogleLogin"})," component in\nplace of the original Sign Up and Sign In components."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"useGoogleLogin"})," hook is added to send a ",(0,o.jsx)(n.code,{children:"GOOGLE"})," event with the ",(0,o.jsx)(n.code,{children:"user"})," and\n",(0,o.jsx)(n.code,{children:"token"})," objects to work with the existing authentication layer\n(",(0,o.jsx)(n.code,{children:"authMachine.ts"}),")."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The full\n",(0,o.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/src/containers/AppGoogle.tsx",children:"AppGoogle.tsx component"}),"\nis in the ",(0,o.jsx)(s,{name:"github",inline:"true",contentType:"rwa"}),"."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"title='containers/AppGoogle.tsx'",children:"// initial imports ...\nimport { GoogleLogin, useGoogleLogin } from 'react-google-login'\n// ...\nconst AppGoogle = () => {\n  // ...\n  useGoogleLogin({\n    clientId: process.env.REACT_APP_GOOGLE_CLIENTID!,\n    onSuccess: (res) => {\n      authService.send('GOOGLE', { user: res.profileObj, token: res.tokenId })\n    },\n    cookiePolicy: 'single_host_origin',\n    isSignedIn: true,\n  })\n  // ...\n  const isLoggedIn =\n    isAuthenticated &&\n    (authState.matches('authorized') ||\n      authState.matches('refreshing') ||\n      authState.matches('updating'))\n  return (\n    <div className={classes.root}>\n      // ...\n      {authState.matches('unauthorized') && (\n        <Container component=\"main\" maxWidth=\"xs\">\n          <CssBaseline />\n          <div className={classes.paper}>\n            <GoogleLogin\n              clientId={process.env.REACT_APP_GOOGLE_CLIENTID!}\n              buttonText=\"Login\"\n              cookiePolicy={'single_host_origin'}\n            />\n          </div>\n        </Container>\n      )}\n    </div>\n  )\n}\nexport default AppGoogle\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, we update our entry point (",(0,o.jsx)(n.code,{children:"index.tsx"}),") to conditionally load the\n",(0,o.jsx)(n.code,{children:"AppGoogle"})," component if we start the application with the ",(0,o.jsx)(n.code,{children:"REACT_APP_GOOGLE"}),"\nenvironment variable set to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"title='src/index.tsx'",children:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Router } from 'react-router-dom'\nimport { history } from './utils/historyUtils'\nimport App from './containers/App'\nimport AppGoogle from './containers/AppGoogle'\nimport { createMuiTheme, ThemeProvider } from '@material-ui/core'\nconst theme = createMuiTheme({\n  palette: {\n    secondary: {\n      main: '#fff',\n    },\n  },\n})\nReactDOM.render(\n  <Router history={history}>\n    <ThemeProvider theme={theme}>\n      {process.env.REACT_APP_GOOGLE ? <AppGoogle /> : <App />}\n    </ThemeProvider>\n  </Router>,\n  document.getElementById('root')\n)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);