"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[2056],{8243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var o=t(5893),s=t(1151);const c={title:"Svelte Examples",sidebar_position:30,sidebar_label:"Examples"},i=void 0,a={id:"app/component-testing/svelte/examples",title:"Svelte Examples",description:"What you'll learn",source:"@site/docs/app/component-testing/svelte/examples.mdx",sourceDirName:"app/component-testing/svelte",slug:"/app/component-testing/svelte/examples",permalink:"/app/component-testing/svelte/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/app/component-testing/svelte/examples.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:30,frontMatter:{title:"Svelte Examples",sidebar_position:30,sidebar_label:"Examples"},sidebar:"app",previous:{title:"Overview",permalink:"/app/component-testing/svelte/overview"},next:{title:"API",permalink:"/app/component-testing/svelte/api"}},l={},p=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"Mounting Components",id:"Mounting-Components",level:2},{value:"Using <code>cy.mount()</code>",id:"Using-cymount",level:3},{value:"Passing Data to a Component",id:"Passing-Data-to-a-Component",level:3},{value:"Testing Event Handlers",id:"Testing-Event-Handlers",level:3},{value:"Accessing the Component Instance",id:"Accessing-the-Component-Instance",level:3}];function r(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.h5,{id:"What-youll-learn",children:[(0,o.jsx)(t,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"How to mount a Svelte component"}),"\n",(0,o.jsx)(n.li,{children:"How to pass props to a Svelte component"}),"\n",(0,o.jsx)(n.li,{children:"How to test event handlers in a Svelte component"}),"\n",(0,o.jsx)(n.li,{children:"How to access the component instance in a test"}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"Mounting-Components",children:"Mounting Components"}),"\n",(0,o.jsxs)(n.h3,{id:"Using-cymount",children:["Using ",(0,o.jsx)(n.code,{children:"cy.mount()"})]}),"\n",(0,o.jsxs)(n.p,{children:["To mount a component with ",(0,o.jsx)(n.code,{children:"cy.mount()"}),", import the component and pass it to the\nmethod:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { Stepper } from './stepper.svelte'\n\nit('mounts', () => {\n  cy.mount(Stepper)\n})\n"})}),"\n",(0,o.jsx)(n.h3,{id:"Passing-Data-to-a-Component",children:"Passing Data to a Component"}),"\n",(0,o.jsxs)(n.p,{children:["You can pass props to a component by setting props in the options: ",(0,o.jsx)(n.code,{children:"cy.mount()"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"it('mounts', () => {\n  cy.mount(Stepper, { props: { count: 100 } })\n})\n"})}),"\n",(0,o.jsx)(n.h3,{id:"Testing-Event-Handlers",children:"Testing Event Handlers"}),"\n",(0,o.jsxs)(n.p,{children:["To test emitted events from a Svelte component, we can use access the component\ninstances and use ",(0,o.jsx)(n.code,{children:"$on"})," method to listen to events raised. We can also pass in a\nCypress spy so we can query the spy later for results. In the example below, we\nlisten to the ",(0,o.jsx)(n.code,{children:"change"})," event and validate it was called as expected:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"it('clicking + fires a change event with the incremented value', () => {\n  const changeSpy = cy.spy().as('changeSpy')\n  cy.mount(Stepper).then(({ component }) => {\n    component.$on('change', changeSpy)\n  })\n  cy.get('[data-cy=increment]').click()\n  cy.get('@changeSpy').should('have.been.calledWithMatch', {\n    detail: { count: 1 },\n  })\n})\n"})}),"\n",(0,o.jsx)(n.h3,{id:"Accessing-the-Component-Instance",children:"Accessing the Component Instance"}),"\n",(0,o.jsxs)(n.p,{children:["There might be times when you might want to access the component instance\ndirectly in your tests. To do so, use ",(0,o.jsx)(n.code,{children:".then()"}),", which enables us to work with\nthe subject that was yielded from the ",(0,o.jsx)(n.code,{children:"cy.mount()"})," command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"cy.mount(Stepper).then(({ component }) => {\n  //component is the rendered instance of Stepper\n})\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const s={},c=o.createContext(s);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);