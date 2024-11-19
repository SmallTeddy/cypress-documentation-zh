"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[669],{2925:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(5893),n=s(1151);const r={title:"Accessibility Run-level Reports | Cypress Documentation",description:"Review the main areas to pay attention to when first reviewing an accessibility report for a Cypress run.",sidebar_position:10,sidebar_label:"Run-level reports"},l="Run-level reports",a={id:"accessibility/core-concepts/run-level-reports",title:"Accessibility Run-level Reports | Cypress Documentation",description:"Review the main areas to pay attention to when first reviewing an accessibility report for a Cypress run.",source:"@site/docs/accessibility/core-concepts/run-level-reports.mdx",sourceDirName:"accessibility/core-concepts",slug:"/accessibility/core-concepts/run-level-reports",permalink:"/accessibility/core-concepts/run-level-reports",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/accessibility/core-concepts/run-level-reports.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:10,frontMatter:{title:"Accessibility Run-level Reports | Cypress Documentation",description:"Review the main areas to pay attention to when first reviewing an accessibility report for a Cypress run.",sidebar_position:10,sidebar_label:"Run-level reports"},sidebar:"accessibility",previous:{title:"Get Started",permalink:"/accessibility/get-started/setup"},next:{title:"Inspecting violation details",permalink:"/accessibility/core-concepts/inspecting-violation-details"}},o={},c=[{value:"Run summary",id:"Run-summary",level:2},{value:"Views",id:"Views",level:2},{value:"Table data",id:"Table-data",level:3},{value:"Snapshots",id:"Snapshots",level:4},{value:"Score",id:"Score",level:4},{value:"Elements",id:"Elements",level:4},{value:"Failed rules",id:"Failed-rules",level:4},{value:"Severity",id:"Severity",level:4},{value:"Rules",id:"Rules",level:2},{value:"Table data",id:"Table-data-1",level:3},{value:"Filtering",id:"Filtering",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{AccessibilityAddon:s,DocsImage:r}=i;return s||u("AccessibilityAddon",!0),r||u("DocsImage",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"Run-level-reports",children:"Run-level reports"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(i.p,{children:"In this document we'll review the three main areas to pay attention to when first reviewing an accessibility report for a Cypress run, as well as explain what terms we use and how we define them."}),"\n",(0,t.jsx)(i.h2,{id:"Run-summary",children:"Run summary"}),"\n",(0,t.jsx)(r,{src:"/img/accessibility/core-concepts/cypress-accessibility-summary-metrics.png",width:"60%",alt:"A heading reads Cypress Accessibility, above some summary metrics that are describe in detail in this document's text."}),"\n",(0,t.jsx)(i.p,{children:"This section includes some top-line numbers to describe the accessibility information for the run at a glance. These numbers show the following details, and clicking any of them will navigate you to the related report details, with the live HTML and CSS snapshots for every issue available to review."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The overall combined Score for that run."}),"\n",(0,t.jsx)(i.li,{children:"The total number of Elements that were found to fail any accessibility Rule"}),"\n",(0,t.jsx)(i.li,{children:"The total number of Elements with inconclusive accessibility checks in need of manual review"}),"\n",(0,t.jsx)(i.li,{children:"The total number Elements that were ignored by your configuration, but had either a failed or inconclusive Rule"}),"\n",(0,t.jsx)(i.li,{children:"A mini chart showing the Axe Core\xae severity levels of Rules that failed during the run, and how many failed at each severity level -- critical, serious, moderate, and minor"}),"\n",(0,t.jsx)(i.li,{children:"The total count of failed Rules"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"All of these terms are defined in detail below."}),"\n",(0,t.jsx)(i.h2,{id:"Views",children:"Views"}),"\n",(0,t.jsx)(i.p,{children:"A View is a collection of snapshots from the application(s) tested in your recorded run. Views represent pages or components in your app. These snapshots are either grouped under their URLs if they came from a full page, or under a component spec path if they were rendered with Cypress Component Testing. View grouping behavior is highly configurable, see the Views config."}),"\n",(0,t.jsx)(r,{src:"/img/accessibility/core-concepts/cypress-accessibility-views-dashboard.png",alt:"The Cypress Accessibility Views List, in context in Cypress Cloud, reflecting a run of the Cypress Realworld App where violations of accessibility rules were detected on multiple pages."}),"\n",(0,t.jsx)(i.h3,{id:"Table-data",children:"Table data"}),"\n",(0,t.jsx)(i.h4,{id:"Snapshots",children:"Snapshots"}),"\n",(0,t.jsx)(i.p,{children:"The count of snapshots captured for the View. A Snapshot is a live HTML and CSS recreation of your application at a single moment in time. A View will usually have more than one Snapshot, which are collected as tests render variants of the page and modify state by interacting with elements, or as dynamic content is loaded and modified by the application itself."}),"\n",(0,t.jsx)(i.h4,{id:"Score",children:"Score"}),"\n",(0,t.jsxs)(i.p,{children:["An overall score is calculated based on all the Snapshots for a given View. The score for each snapshot is a ratio of passed checks to failed checks, weighted according to the impact of the issues. This produces a top-line percentage score that indicates a general sense of accessibility for a project. For more details, see the ",(0,t.jsx)(i.a,{href:"/accessibility/core-concepts/accessibility-score",children:"Accessibility Score section"}),"."]}),"\n",(0,t.jsx)(i.h4,{id:"Elements",children:"Elements"}),"\n",(0,t.jsx)(i.p,{children:"The count of elements in a view that failed a Rule, had an inconclusive check for a Rule, or were explicitly ignored by configuration."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Failed"})," elements had at least one accessibility Rule fail during the run. These are considered in your accessibility Score and must be fixed. "]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Inconclusive"}),' elements had at least one check marked "incomplete" by Axe Core\xae during the run. These represent checks that couldn\'t be completed for technical reasons, or items that need manual review to confirm if there is an accessibility issue. These do not affect your score.']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Ignored"})," elements are those that had either failing or incomplete checks, but were ignored with ",(0,t.jsx)(i.a,{href:"/accessibility/configuration/elementfilters",children:"CSS selectors in your configuration"}),". They do not affect your score. Cypress still processes these elements and makes the results available, so that you always know results were was ignored, since these elements are still present in your UI and users will encounter them."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"Failed-rules",children:"Failed rules"}),"\n",(0,t.jsx)(i.p,{children:"Failed rules are broken down for each View with a mini chart displaying Axe Core\xae severity levels, as well as a total count for failed rules. Both of these help you identify at a glance which pages or components have high numbers serious issues."}),"\n",(0,t.jsx)(i.h4,{id:"Severity",children:"Severity"}),"\n",(0,t.jsxs)(i.p,{children:["In Cypress Accessibility, severity levels are mapped to Axe Core's ",(0,t.jsx)(i.code,{children:"impact"})," level for each rule. It's important to note that these levels were created by Deque Systems, the creators of Axe Core, and not a part of the Web Content Accessibility Guidelines themselves. For more details on this, see our ",(0,t.jsx)(i.a,{href:"https://github.com/dequelabs/axe-core/blob/develop/doc/issue_impact.md",children:"accessibility score documentation"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"Rules",children:"Rules"}),"\n",(0,t.jsx)(i.p,{children:"This section lists the outcome of every Axe Core\xae rule that was enabled at the time of this run."}),"\n",(0,t.jsx)(r,{src:"/img/accessibility/core-concepts/cypress-accessibility-rules-list.png",alt:"The Cypress Accessibility rules list showing multiple accessibility rules failing in this run of the Cypress Realworld App."}),"\n",(0,t.jsx)(i.h3,{id:"Table-data-1",children:"Table data"}),"\n",(0,t.jsx)(i.p,{children:"Each Rule in the table has the following attributes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["An icon representing the overall status for the rule, which can be any one of these:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Passed"})," -- every time this rule applied to an element, the element either passed that rule's checks or was intentionally ignored"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Failed"})," -- at least one failing element was detected in the run"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Inconclusive"}),' -- no elements failed this rule, but at least one element was labelled "incomplete" by Axe Core\xae and requires manual review']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Inapplicable"})," -- this rule was enabled during the run, but there were no elements detected that required the rule to run"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Ignored by config"})," -- this rule was ignored at the config level for the project and did not run"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"The description for the rule"}),"\n",(0,t.jsx)(i.li,{children:"The Axe Core\xae severity level for the rule"}),"\n",(0,t.jsx)(i.li,{children:"The counts of failed, inconclusive, and ignored elements for each rule"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"Filtering",children:"Filtering"}),"\n",(0,t.jsx)(i.p,{children:'The Views and Rules for your accessibility reports can be filtered but WCAG conformance level, severity, and the status of the related content. This allows you to get a full understanding of everything that Cypress saw and evaluated during the run, as well as the effects of any configuration that was applied, but also drill into see something like "only components where critical rules are failing".'})]})}function d(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>l});var t=s(7294);const n={},r=t.createContext(n);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);