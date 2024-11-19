"use strict";(self.webpackChunkcypress_docusaurus_zh=self.webpackChunkcypress_docusaurus_zh||[]).push([[1280],{1189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(1151);const r={title:"GitLab Integration | Cypress Documentation",description:"Configure GitLab status checks and merge request comments to show Cypress test results from Cypress Cloud.",sidebar_position:20,sidebar_label:"GitLab"},o="GitLab",a={id:"cloud/integrations/source-control/gitlab",title:"GitLab Integration | Cypress Documentation",description:"Configure GitLab status checks and merge request comments to show Cypress test results from Cypress Cloud.",source:"@site/docs/cloud/integrations/source-control/gitlab.mdx",sourceDirName:"cloud/integrations/source-control",slug:"/cloud/integrations/source-control/gitlab",permalink:"/cloud/integrations/source-control/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/cloud/integrations/source-control/gitlab.mdx",tags:[],version:"current",lastUpdatedAt:1732009455,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:20,frontMatter:{title:"GitLab Integration | Cypress Documentation",description:"Configure GitLab status checks and merge request comments to show Cypress test results from Cypress Cloud.",sidebar_position:20,sidebar_label:"GitLab"},sidebar:"cloud",previous:{title:"GitHub",permalink:"/cloud/integrations/source-control/github"},next:{title:"Bitbucket",permalink:"/cloud/integrations/source-control/bitbucket"}},l={},c=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:5},{value:"GitLab for Enterprise (Self-managed)",id:"GitLab-for-Enterprise-Self-managed",level:2},{value:"Installing the GitLab integration",id:"Installing-the-GitLab-integration",level:2},{value:"Configuring the GitLab integration",id:"Configuring-the-GitLab-integration",level:2},{value:"Status checks",id:"Status-checks",level:3},{value:"Merge Request comments",id:"Merge-Request-comments",level:3},{value:"Uninstalling the GitLab integration",id:"Uninstalling-the-GitLab-integration",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{DocsImage:n,Icon:r,TestReplayInfo:o}=t;return n||u("DocsImage",!0),r||u("Icon",!0),o||u("TestReplayInfo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"GitLab",children:"GitLab"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.h5,{id:"What-youll-learn",children:[(0,i.jsx)(r,{name:"question-circle",color:"#4BBFD2"})," What you'll learn"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to install the Cypress GitLab integration"}),"\n",(0,i.jsx)(t.li,{children:"How to configure status checks and merge request comments"}),"\n"]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://on.cypress.io/cloud",children:"Cypress Cloud"})," can integrate your Cypress tests\nwith your GitLab workflow via ",(0,i.jsx)(t.a,{href:"#Status-checks",children:"status checks"})," and\n",(0,i.jsx)(t.a,{href:"#Merge-Request-comments",children:"merge request comments"}),". A project first needs to be\n",(0,i.jsx)(t.a,{href:"/cloud/account-management/projects",children:"set up to record"})," to Cypress Cloud\nto use GitLab integration."]}),"\n",(0,i.jsx)(n,{src:"/img/cloud/integrations/gitlab/gitlab-merge-request-comment.jpg",alt:"GitLab merge request comment showing run properties, test results, and tests for review",width:800}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(r,{name:"exclamation-triangle"})," The user enabling the integration needs to have\nadmin access to GitLab."]})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["GitLab Integration depends on your CI environment reliably providing a commit\nSHA (typically via an environment variable). This is not a problem for most\nusers, but if you are facing GitLab integration issues with your CI setup,\nplease make sure the git information is being sent properly by following\n",(0,i.jsx)(t.a,{href:"/app/continuous-integration/overview#Git-information",children:"these guidelines"}),".\nIf you still face issues after this, please\n",(0,i.jsx)(t.a,{href:"mailto:support@cypress.io",children:"contact us"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"GitLab-for-Enterprise-Self-managed",children:"GitLab for Enterprise (Self-managed)"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(r,{name:"star"})," ",(0,i.jsx)(t.strong,{children:"Premium Cypress Cloud Feature"})]}),(0,i.jsxs)(t.p,{children:["GitLab for Enterprise (Self-managed) is included in our\n",(0,i.jsx)(t.a,{href:"https://www.cypress.io/pricing",children:"Business and Enterprise paid pricing plans"}),"."]})]}),"\n",(0,i.jsx)(t.p,{children:"GitLab for Enterprise (Self-managed) Integration depends on your GitLab instance\nbeing able to reach our Cypress Cloud API on the open internet. If your instance\nis running behind a firewall, you may need to reconfigure your security\ninfrastructure to allow communication with our servers."}),"\n",(0,i.jsx)(t.h2,{id:"Installing-the-GitLab-integration",children:"Installing the GitLab integration"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"GitLab OAuth2 applications will allow Cypress Cloud to authenticate as the user\nthat registered the application. That means Cypress will have visibility into\nevery GitLab repo the registered user can access. If you want tighter control of\nthe repos that Cypress will see, consider creating a service account in GitLab\nwith more limited access permissions."})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to Cypress Cloud\n",(0,i.jsx)(t.a,{href:"https://cloud.cypress.io/organizations",children:"Organizations page"})," or open the\norganization switcher."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select the organization you wish to integrate with a GitLab."}),"\n",(0,i.jsx)(n,{src:"/img/cloud/organizations/select-cypress-organization.jpg",alt:"Select an organization",width:600}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Visit the selected organization's ",(0,i.jsx)(t.strong,{children:"Integrations"})," page via the side\nnavigation."]}),"\n",(0,i.jsx)(n,{src:"/img/cloud/organizations/navigate-to-organization-integrations.jpg",alt:"Install Cypress GitLab from Integrations",width:600}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the enable button under ",(0,i.jsx)(t.strong,{children:"GitLab"})," or ",(0,i.jsx)(t.strong,{children:"GitLab for Enterprise\n(Self-managed)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Follow the instructions to create a new OAuth2 application in GitLab. See the\n",(0,i.jsx)(t.a,{href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#adding-an-application-through-the-profile",children:"GitLab docs"}),"\nfor more details."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Copy the Application ID and Secret back to Cypress Cloud."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"(GitLab Self-managed only) Copy the base URL of your GitLab instance to the\nGitLab URL field in Cypress Cloud."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Connect your projects to a GitLab repo in ",(0,i.jsx)(t.strong,{children:"Project Settings \u2192 GitLab\nIntegration"})," or ",(0,i.jsx)(t.strong,{children:"GitLab for Enterprise Integration"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"(Optional) Configure the behavior for each project."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["If you are running the tests from within a restrictive VPN, see\n",(0,i.jsx)(t.a,{href:"/cloud/faq#Im-working-with-a-restrictive-VPN-Which-subdomains-do-I-have-to-allow-on-my-VPN-for-Cypress-Cloud-to-work-properly",children:"which subdomains to add to your allowlist for Cypress Cloud and your GitLab integration to work properly"})]})}),"\n",(0,i.jsx)(t.h2,{id:"Configuring-the-GitLab-integration",children:"Configuring the GitLab integration"}),"\n",(0,i.jsx)(t.h3,{id:"Status-checks",children:"Status checks"}),"\n",(0,i.jsxs)(t.p,{children:["By default, Cypress will post a ",(0,i.jsx)(t.strong,{children:"cypress/run"})," commit status containing the\nresults of the Cypress run. This will prevent your team from merging any MRs\nwith failing Cypress tests."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, Cypress can post a ",(0,i.jsx)(t.strong,{children:"cypress/flake"})," commit status indicating\nwhether the Cypress run contained any flaky tests. This will prevent your team\nfrom merging any MRs with flaky tests."]}),"\n",(0,i.jsxs)(t.p,{children:["You can manage this behavior on your project's ",(0,i.jsx)(t.strong,{children:"Project Settings"})," page."]}),"\n",(0,i.jsx)(n,{src:"/img/cloud/integrations/gitlab/gitlab-status-checks.jpg",alt:"Project Settings page toggle for Status Checks to toggle Report run status or Report flaky tests",width:800}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(r,{name:"star"})," ",(0,i.jsx)(t.strong,{children:"Premium Cypress Cloud Feature"})]}),(0,i.jsxs)(t.p,{children:["Reporting on flaky status checks is included in our\n",(0,i.jsx)(t.a,{href:"https://www.cypress.io/pricing",children:"Team, Business and Enterprise paid pricing plans"}),"."]})]}),"\n",(0,i.jsx)(t.h3,{id:"Merge-Request-comments",children:"Merge Request comments"}),"\n",(0,i.jsx)(t.p,{children:"By default, Cypress will post an MR comment summarizing the run when the run\ncompletes. It will include test results, run info, and a summary of tests that\nfailed or were flaky."}),"\n",(0,i.jsxs)(t.p,{children:["You can manage this behavior on your project's ",(0,i.jsx)(t.strong,{children:"Project Settings"})," page."]}),"\n",(0,i.jsx)(n,{src:"/img/cloud/integrations/gitlab/gitlab-merge-requests.jpg",alt:"Project Settings page toggle for Merge Request comments to toggle Run status comments",width:800}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(t.h2,{id:"Uninstalling-the-GitLab-integration",children:"Uninstalling the GitLab integration"}),"\n",(0,i.jsxs)(t.p,{children:["You can remove this integration by visiting the ",(0,i.jsx)(t.strong,{children:"Integrations \u2192 GitLab"})," or\n",(0,i.jsx)(t.strong,{children:"GitLab for Enterprise Integration"})," page of your organization. This will stop\nall commit checks and MR comments from Cypress."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);