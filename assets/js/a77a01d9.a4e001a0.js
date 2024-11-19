"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[416],{7100:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(5893),n=i(1151);const o={title:"Accessibility score | Cypress Documentation",description:"Cypress produces a top-line percentage score that indicates a general sense of accessibility for a project.",sidebar_label:"Accessibility score",sidebar_position:30},r="Accessibility score",c={id:"accessibility/core-concepts/accessibility-score",title:"Accessibility score | Cypress Documentation",description:"Cypress produces a top-line percentage score that indicates a general sense of accessibility for a project.",source:"@site/docs/accessibility/core-concepts/accessibility-score.mdx",sourceDirName:"accessibility/core-concepts",slug:"/accessibility/core-concepts/accessibility-score",permalink:"/accessibility/core-concepts/accessibility-score",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/accessibility/core-concepts/accessibility-score.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:30,frontMatter:{title:"Accessibility score | Cypress Documentation",description:"Cypress produces a top-line percentage score that indicates a general sense of accessibility for a project.",sidebar_label:"Accessibility score",sidebar_position:30},sidebar:"accessibility",previous:{title:"Inspecting violation details",permalink:"/accessibility/core-concepts/inspecting-violation-details"},next:{title:"How it works",permalink:"/accessibility/core-concepts/how-it-works"}},a={},l=[{value:"Algorithm",id:"Algorithm",level:2},{value:"Interpreting your scores",id:"Interpreting-your-scores",level:2},{value:"What a 100% score means",id:"What-a-100-score-means",level:2},{value:"Improving Accessibility scores",id:"Improving-Accessibility-scores",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{AccessibilityAddon:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("AccessibilityAddon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"Accessibility-score",children:"Accessibility score"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsxs)(s.p,{children:["Cypress produces a top-line percentage score that indicates a general sense of accessibility for a project. This overall score for a run is based on the ",(0,t.jsx)(s.strong,{children:"average score of"})," ",(0,t.jsx)(s.strong,{children:"all application snapshots"})," that were captured during the run, and is rooted in the ratio of passing and failing accessibility checks performed on each snapshot, weighted according to the severity of the issues. "]}),"\n",(0,t.jsxs)(s.p,{children:["The severity levels presented in Cypress Cloud match the Axe Core\xae ",(0,t.jsx)(s.code,{children:"impact"})," level for each rule. This impact classification was developed by the creators of Axe, Deque Systems, to aid in prioritization of accessibility results, by highlighting rules that are likely to reveal the most substantial barriers (such as missing label text) so they can be addressed first."]}),"\n",(0,t.jsxs)(s.p,{children:["It's important to note that the Web Content Accessibility Guidelines (WCAG) standards do not have a concept of relative severity of the Success Criteria. For ",(0,t.jsx)(s.strong,{children:"compliance"})," purposes, all failures of the Success Criteria count and must be addressed. For ",(0,t.jsx)(s.strong,{children:"usability"})," purposes, however, the impact values provided by Axe Core\xae provide excellent guidance about which issues to take up first to bring the most benefit to disabled users of your platform as quickly as possible."]}),"\n",(0,t.jsx)(s.h2,{id:"Algorithm",children:"Algorithm"}),"\n",(0,t.jsx)(s.p,{children:"The following weights are applied to the accessibility report data:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Severity of Issue"}),(0,t.jsx)(s.th,{children:"Weight"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Critical"}),(0,t.jsx)(s.td,{children:"10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Serious"}),(0,t.jsx)(s.td,{children:"7"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Moderate"}),(0,t.jsx)(s.td,{children:"3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Minor"}),(0,t.jsx)(s.td,{children:"1"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"In order to create scores for each snapshot, View, and the entire run, we use the following process:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For each Snapshot","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Sum the weights of each passed check"}),"\n",(0,t.jsx)(s.li,{children:"Sum the weights of each failed check"}),"\n",(0,t.jsxs)(s.li,{children:["Score equals ratio of passed weight over total weight","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"[Sum of weights from passed checks] / [Sum of weights from passed checks + Sum of weights from failed checks]"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["For each View","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Score equals the average of all Snapshot scores found in the View"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["For the Run","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Score equals the average of all Snapshots in the Run"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Interpreting-your-scores",children:"Interpreting your scores"}),"\n",(0,t.jsx)(s.p,{children:"Whether a score is good or bad for you depends on context. There is no single number that can tell you the accessibility of your application. A 99% score may be good for your goals if the score was 90% before and you are making progress, or it might be bad if you previously had no problems."}),"\n",(0,t.jsx)(s.p,{children:"Even if 1000 checks pass, if there is 1 check that fails, that may happen to have a huge impact on accessibility. For example, if your login page is not accessible, disabled users may not be able to enter your application at all, even if after the login step all the scores are 100%. So even a single issue requires human judgment as to how much of a barrier it represents."}),"\n",(0,t.jsx)(s.p,{children:"The most important thing about the score is that it is deterministic and consistent across runs, so that when changes in the application do bubble up to show an increase or decrease in the score, that is going be meaningful, and not noise."}),"\n",(0,t.jsx)(s.p,{children:"In general, the ideal state is a clean 100% score in your Cypress Accessibility report, which you can achieve with a combination of fixing existing issues and ignoring things you know you will not fix."}),"\n",(0,t.jsx)(s.h2,{id:"What-a-100-score-means",children:"What a 100% score means"}),"\n",(0,t.jsxs)(s.p,{children:["If there are no axe-core violations detected in what you test with Cypress, you can be confident that up to 57% of the issues (",(0,t.jsx)(s.a,{href:"https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/",children:"source"}),") that a manual audit would detect have already been addressed. This does not mean you have a fully compliant, accessible, or user-friendly application, but it does mean your team has considered the experience and needs of disabled users in the application's development process. This often means the team is well placed to understand and fix any issues that are reported by users or revealed in manual testing. "]}),"\n",(0,t.jsx)(s.p,{children:'Reaching this "Axe-clean" status is a good sign that basic usability needs are likely met for disabled users well enough that they can experience your application and provide you more general usability feedback as needed. '}),"\n",(0,t.jsx)(s.h2,{id:"Improving-Accessibility-scores",children:"Improving Accessibility scores"}),"\n",(0,t.jsxs)(s.p,{children:['Many violations are easily addressed by HTML and CSS changes that can be made in your application\'s code. Click the "Learn More" link for any violation to understand the impact of this violation on users and how to fix it. More details about this are available in the ',(0,t.jsx)(s.a,{href:"/accessibility/core-concepts/inspecting-violation-details",children:"Inspecting Violation Details section"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>r});var t=i(7294);const n={},o=t.createContext(n);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);