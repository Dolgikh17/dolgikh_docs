"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[984],{4869:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"API/my_api_info","title":"my_api_info","description":"\u0411\u044b\u043b\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043f\u044f\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u0432:","source":"@site/docs/API/my_api_info.md","sourceDirName":"API","slug":"/API/my_api_info","permalink":"/dolgikh_docs/docs/API/my_api_info","draft":false,"unlisted":false,"editUrl":"https://github.com/dolgikh17/dolgikh_docs/docs/API/my_api_info.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"API 1 - Swagger MapMates","permalink":"/dolgikh_docs/docs/API/mapmates"},"next":{"title":"DB","permalink":"/dolgikh_docs/docs/category/db"}}');var t=s(4848),c=s(8453);const r={},d=void 0,o={},l=[];function a(e){const n={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u0411\u044b\u043b\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043f\u044f\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u0432:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GET /meetings"}),": \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u0441\u0442\u0440\u0435\u0447."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"POST /meetings"}),": \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0438."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GET /meetings/{meetingId}"}),": \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0435."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DELETE /meetings/{meetingId}"}),": \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GET /friends"}),": \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0440\u0443\u0437\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u044b\u043b\u0438 \u0432\u044b\u043d\u0435\u0441\u0435\u043d\u044b \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0445\u0435\u043c\u044b"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u0430\u0445, \u0432\u044b\u043d\u0435\u0441\u0435\u043d\u044b \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,t.jsx)(n.strong,{children:"parameters"}),", \u0447\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u043b\u043e \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u043b\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 API:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PageParam"})," \u0438 ",(0,t.jsx)(n.code,{children:"PageSizeParam"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438 \u0432 ",(0,t.jsx)(n.code,{children:"GET /meetings"})," \u0438 ",(0,t.jsx)(n.code,{children:"GET /friends"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MeetingIdParam"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f ",(0,t.jsx)(n.code,{children:"meetingId"})," \u0432 ",(0,t.jsx)(n.code,{children:"GET"})," \u0438 ",(0,t.jsx)(n.code,{children:"DELETE"})," \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u0434\u043b\u044f ",(0,t.jsx)(n.code,{children:"meetings/{meetingId}"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);