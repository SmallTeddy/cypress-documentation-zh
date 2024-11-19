"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[9523],{4072:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=o(5893),t=o(1151);const i={title:"Test your component's styles | Cypress Documentation",description:"Learn how to test your component's markup, styles, and script logic with Cypress Component Testing",sidebar_label:"Styling Components",sidebar_position:20},r="Styling Components",l={id:"app/component-testing/styling-components",title:"Test your component's styles | Cypress Documentation",description:"Learn how to test your component's markup, styles, and script logic with Cypress Component Testing",source:"@site/docs/app/component-testing/styling-components.mdx",sourceDirName:"app/component-testing",slug:"/app/component-testing/styling-components",permalink:"/app/component-testing/styling-components",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/component-testing/styling-components.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:20,frontMatter:{title:"Test your component's styles | Cypress Documentation",description:"Learn how to test your component's markup, styles, and script logic with Cypress Component Testing",sidebar_label:"Styling Components",sidebar_position:20},sidebar:"app",previous:{title:"Get Started",permalink:"/app/component-testing/get-started"},next:{title:"Configuration",permalink:"/app/component-testing/component-framework-configuration"}},a={},c=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Why Test Your Component&#39;s Styles?",id:"Why-Test-Your-Components-Styles",level:2},{value:"Rendering Components Correctly",id:"Rendering-Components-Correctly",level:2},{value:"Component Support File",id:"Component-Support-File",level:2},{value:"3rd Party CSS Libraries (Tailwind, Bootstrap, PopperJS)",id:"3rd-Party-CSS-Libraries-Tailwind-Bootstrap-PopperJS",level:2},{value:"Importing Stylesheets",id:"Importing-Stylesheets",level:2},{value:"Rules for Setting Up Your Styles",id:"Rules-for-Setting-Up-Your-Styles",level:2},{value:"Global App Styles",id:"Global-App-Styles",level:3},{value:"CSS Reset or Normalize isn&#39;t applied",id:"CSS-Reset-or-Normalize-isnt-applied",level:3},{value:"Fonts: Everything is rendering in Times New Roman",id:"Fonts-Everything-is-rendering-in-Times-New-Roman",level:3},{value:"Icon Fonts: None of my icons are rendering",id:"Icon-Fonts-None-of-my-icons-are-rendering",level:3},{value:"Theme Providers: My components don&#39;t look right/compile because they can&#39;t access providers",id:"Theme-Providers-My-components-dont-look-rightcompile-because-they-cant-access-providers",level:3}];function p(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Icon:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"Styling-Components",children:"Styling Components"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.h5,{id:"What-youll-learn",children:[(0,s.jsx)(o,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Why you should test your component's styles"}),"\n",(0,s.jsx)(n.li,{children:"How to render components correctly with their CSS styles"}),"\n",(0,s.jsx)(n.li,{children:"How to handle 3rd party CSS libraries"}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"Why-Test-Your-Components-Styles",children:"Why Test Your Component's Styles?"}),"\n",(0,s.jsxs)(n.p,{children:["Stylesheets are a critical part of your component's business logic. One of the\nbest examples of this is a modal component. Common modal bugs include: z-index\nissues, inability to dismiss the overlay, and inability to interact with the\nparent page ",(0,s.jsx)(n.em,{children:"after"})," dismissing the modal."]}),"\n",(0,s.jsxs)(n.p,{children:["Node-based test runners like Jest or Vitest can't catch these kinds of issues\nbecause they render your styles in ",(0,s.jsx)(n.strong,{children:"emulated DOM environments"})," like JSDom.\nJSDom doesn't have a box model and certain kinds of assertions, such as if a\nparent is covering a child and preventing clicks, are not possible to test\nwithout a more realistic environment."]}),"\n",(0,s.jsxs)(n.p,{children:["On the other hand, browser-based runners like Cypress allow you to render your\napplication's styles and components and allow Cypress's Driver to take advantage\nof the real box-model and style rendering engine. Cypress's commands like\n",(0,s.jsx)(n.code,{children:"cy.click"})," and assertions like ",(0,s.jsx)(n.code,{children:"should('be.visible')"})," have business logic that\nmakes sure the UI you're trying to assert on and interact with is visible and\ninteractible for your end users. This is a benefit unique to browser-based test\nrunners."]}),"\n",(0,s.jsx)(n.h2,{id:"Rendering-Components-Correctly",children:"Rendering Components Correctly"}),"\n",(0,s.jsxs)(n.p,{children:["The first time you mount ",(0,s.jsx)(n.em,{children:"any"})," new component, you may notice that the component\ndoesn't look like it should. Unless your application is written ",(0,s.jsx)(n.em,{children:"exclusively"}),"\nusing Component-scoped CSS (e.g. Styled Components or Vue's Scoped Styles) you\nwill need to follow this guide in order to get your component looking ",(0,s.jsx)(n.strong,{children:"and\nbehaving"})," like it will in production."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Ensure that whatever you're doing in production is happening within either the\nComponent HTML file or the Component Support File."})}),"\n",(0,s.jsx)(n.h2,{id:"Component-Support-File",children:"Component Support File"}),"\n",(0,s.jsxs)(n.p,{children:["When you load a component or end-to-end spec file, it will first load something\ncalled a supportFile. By default, this is created for you during first-time\nsetup of Cypress Component Testing and is located at\n",(0,s.jsx)(n.code,{children:"cypress/support/component.js"}),". This file gives you the opportunity to set up\nyour spec's environment."]}),"\n",(0,s.jsx)(n.p,{children:"For component specs, you use this file to set up page-level concerns that would\nusually exist by the time you mount the component. Some examples include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Run-time JavaScript code (state management, routers, UI libraries)"}),"\n",(0,s.jsx)(n.li,{children:"Global styles (style resets, Tailwind)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As a rule, your Component Support File should look ",(0,s.jsx)(n.strong,{children:"very similar"})," to your\napplication's main JavaScript (ie: main.js, index.js) and main CSS (ie:\nmain.css, index.css) files."]}),"\n",(0,s.jsx)(n.h2,{id:"3rd-Party-CSS-Libraries-Tailwind-Bootstrap-PopperJS",children:"3rd Party CSS Libraries (Tailwind, Bootstrap, PopperJS)"}),"\n",(0,s.jsx)(n.p,{children:"Components can have three parts: markup, styles, and script logic. All three of\nthese work together in order to deliver a working component."}),"\n",(0,s.jsx)(n.p,{children:"Styles are business logic, too."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Tailwind"}),"\n",(0,s.jsx)(n.li,{children:"CSS Modules"}),"\n",(0,s.jsx)(n.li,{children:"Scoped Styled"}),"\n",(0,s.jsx)(n.li,{children:"Styled Components"}),"\n",(0,s.jsx)(n.li,{children:"Regular Stylesheets"}),"\n",(0,s.jsx)(n.li,{children:"UI Libraries"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you setup your test infrastructure to render your\ncomponent's styles properly."}),"\n",(0,s.jsx)(n.p,{children:"Depending on how your application is built, the first time you mount a new\ncomponent, it may be completely or somewhat unstyled."}),"\n",(0,s.jsx)(n.p,{children:"This makes sense. Many applications have some amount of one-time setup that is\nrun outside of the component file."}),"\n",(0,s.jsxs)(n.p,{children:["We build our applications within the context that they're supposed to run in,\nand we make assumptions that our components will always be rendered within a\nroot-level component (such as an ",(0,s.jsx)(n.code,{children:"<App>"}),") or a top-level selector with style\nrules (such as ",(0,s.jsx)(n.code,{children:"#app { /* styles in here */ }"})," )"]}),"\n",(0,s.jsx)(n.p,{children:"When we attempt to isolate our component to put it under test, we need to put\nthat environment back together. We'll go into that in a moment. First, let's\ntalk about stylesheets, testing, and one of Cypress's biggest differences in\ncontrast to other component testing tools."}),"\n",(0,s.jsx)(n.h2,{id:"Importing-Stylesheets",children:"Importing Stylesheets"}),"\n",(0,s.jsx)(n.p,{children:"Each application or component library imports styles a little differently. We'll\ngo over a few methods and describe how you can quickly restructure your\ncomponents to become more testable."}),"\n",(0,s.jsx)(n.p,{children:"If you do not follow this guide, your components will mount, but they won't look\ncorrect and you may not be able to benefit from some of the most valuable parts\nof Cypress. Namely, implicit checks for width, height, and overflow to ensure\nthat your components not only exist in the page's HTML but are also visible."}),"\n",(0,s.jsx)(n.h2,{id:"Rules-for-Setting-Up-Your-Styles",children:"Rules for Setting Up Your Styles"}),"\n",(0,s.jsx)(n.p,{children:"All of your application's styles need to end up in Cypress so that when your\ncomponent mounts, it looks right."}),"\n",(0,s.jsx)(n.p,{children:"We expose two hooks for you to configure your styles:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["An HTML file called ",(0,s.jsx)(n.code,{children:"cypress/support/component-index.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["A JavaScript support file called ",(0,s.jsx)(n.code,{children:"cypress/support/component.js"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When creating a production-like test environment, you should ",(0,s.jsx)(n.em,{children:"always"})," mimic your\nown application's setup. If your application has multiple ",(0,s.jsx)(n.code,{children:"<link>"})," tags to load\nfonts or other stylesheets within the ",(0,s.jsx)(n.code,{children:"head"}),", ensure that the\n",(0,s.jsx)(n.code,{children:"cypress/support/component-index.html"})," file contains the same ",(0,s.jsx)(n.code,{children:"<link>"})," tags. The\nsame logic follows for any styles loaded in your Application's ",(0,s.jsx)(n.code,{children:"main.js"})," file.\nIf you import a ",(0,s.jsx)(n.code,{children:"./styles.css"})," at the top of your ",(0,s.jsx)(n.code,{children:"main.js"})," file, make sure to\n",(0,s.jsx)(n.code,{children:"import"})," it in your ",(0,s.jsx)(n.code,{children:"cypress/support/component.js"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["For this reason, it's strongly suggested to make a ",(0,s.jsx)(n.code,{children:"src/setup.js"})," file that will\nbe re-used in your ",(0,s.jsx)(n.code,{children:"main.js"})," entrypoint as well as in your test setup. An\nexample project structure would look like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> /cypress\n>   /support\n>    /component.js\n> /src\n>  /main.js\n>  /main.css\n>  /setup.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The contents of ",(0,s.jsx)(n.strong,{children:"setup.js"})," may look like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import '~normalize/normalize.css'\nimport 'font-awesome'\nimport './main.css'\n\nexport const createStore = () => {\n  return /* store */\n}\n\nexport const createRouter = () => {\n  return /* router */\n}\n\nexport const createApp = () => {\n  return <App router={createRouter()} store={createStore()}></App>\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and its usage in ",(0,s.jsx)(n.code,{children:"main.js"})," could look like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { createApp } from './setup.js'\n\nReactDOM.render(createApp())\n"})}),"\n",(0,s.jsx)(n.p,{children:"and Cypress would re-use it in its support file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* And that's it! */\nimport '../../src/setup.js'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The rest of this section is dedicated to discussing specific style problems you\nmay have, including: Fonts, Icon Fonts, Style Resets, Global App Styles, and 3rd\nparty component library styles."}),"\n",(0,s.jsx)(n.h3,{id:"Global-App-Styles",children:"Global App Styles"}),"\n",(0,s.jsx)(n.p,{children:"Your global application styles are usually in one of the following places:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"styles.css"})," file you import within the ",(0,s.jsx)(n.code,{children:"head"})," of your application."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This should be loaded within your Cypress Index HTML file."}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Within a root-level component like ",(0,s.jsx)(n.code,{children:"App.jsx"}),", ",(0,s.jsx)(n.code,{children:"App.vue"}),", ",(0,s.jsx)(n.code,{children:"App.svelte"}),", etc."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Decouple your Root CSS from your App or Entrypoint component by pulling out\nthese global styles into a top-level stylesheet. Both Vue and Svelte embed\nglobal application styles into the main entry point components. The rest of your\napplication expects to be rendered ",(0,s.jsx)(n.em,{children:"within"})," those components, and so any\nassumptions you made when writing those components must be replicated in your\ntest environment or else your components won't look right."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<style>\n  /* In certain scaffolds, the App.vue file does not have a separate styles file */\n\n  #app {\n    font-family: Sans-serif;\n  }\n</style>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Should become"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'/* App.vue */ <style src="./app.css" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"and"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"/* cypress/support/component.js */ import '../../src/app.css'\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Within the ",(0,s.jsx)(n.code,{children:"main.js"})," file of your application (which subsequently mounts your\nroot-level component)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Re-using stylesheets that are imported in the beginning of your application was\ncovered in the last section."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import './main.css'\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Within a configuration file like ",(0,s.jsx)(n.code,{children:"next.config.js"})," or ",(0,s.jsx)(n.code,{children:"nuxt.config.js"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You're usually providing public paths to these stylesheets. You can import the\nsame paths within your ",(0,s.jsx)(n.code,{children:"cypress/support/component-index.html"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"CSS-Reset-or-Normalize-isnt-applied",children:"CSS Reset or Normalize isn't applied"}),"\n",(0,s.jsxs)(n.p,{children:["Are you importing your normalize file within\n",(0,s.jsx)(n.code,{children:"cypress/support/component-index.html"})," or within ",(0,s.jsx)(n.code,{children:"cypress/support/component.js"}),"?"]}),"\n",(0,s.jsx)(n.h3,{id:"Fonts-Everything-is-rendering-in-Times-New-Roman",children:"Fonts: Everything is rendering in Times New Roman"}),"\n",(0,s.jsx)(n.p,{children:"Most applications handle fonts in one of two ways."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Your ",(0,s.jsx)(n.code,{children:"index.html"})," loads external fonts in the ",(0,s.jsx)(n.code,{children:"head"})," tag."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<head>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link\n    href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&family=Roboto&display=swap"\n    rel="stylesheet"\n  />\n</head>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or via an ",(0,s.jsx)(n.code,{children:"@import"})," statement"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<head>\n  <style>\n    @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&family=Roboto&display=swap');\n  </style>\n</head>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Your main stylesheet loads fonts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* main.css */\n@font-face {\n  font-family: 'Fira Sans';\n  src: url('fonts/fira/eot/FiraSans-Regular.eot');\n  src:\n    url('fonts/fira/eot/FiraSans-Regular.eot') format('embedded-opentype'),\n    url('fonts/fira/woff2/FiraSans-Regular.woff2') format('woff2'),\n    url('fonts/fira/woff/FiraSans-Regular.woff') format('woff'),\n    url('fonts/fira/woff2/FiraSans-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Icon-Fonts-None-of-my-icons-are-rendering",children:"Icon Fonts: None of my icons are rendering"}),"\n",(0,s.jsx)(n.h3,{id:"Theme-Providers-My-components-dont-look-rightcompile-because-they-cant-access-providers",children:"Theme Providers: My components don't look right/compile because they can't access providers"}),"\n",(0,s.jsx)(n.p,{children:"Theme Provider or other application-level wrappers like I18n or Material UI work\nby injecting themselves around your application. When you're component testing,\nyou haven't rendered the component hierarchy surrounding your component."}),"\n",(0,s.jsx)(n.p,{children:"To solve issues like these, people review the Custom Commands and Wrappers"}),"\n",(0,s.jsx)(n.p,{children:"To first explain why it's not right, you first have to explain what\nproduction-like even means."}),"\n",(0,s.jsx)(n.p,{children:"So we have this before & after up, and now our job is to step through the\ncomponent under test and try to figure out where the differences between\nProduction and Test are."}),"\n",(0,s.jsx)(n.p,{children:"Sometimes these are as simple as colors or fonts not lining up. Other times, the\nentire component or sections of it may not compile."}),"\n",(0,s.jsx)(n.p,{children:"The reason this doesn't look right is because:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"My browser supports dark mode"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"<App>"})," component provides its own styles"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var s=o(7294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);