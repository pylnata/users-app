(this["webpackJsonpusers-app"]=this["webpackJsonpusers-app"]||[]).push([[0],{120:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),i=n.n(c),s=n(16),u=n(26),o=n(14),l=n(129),p=n(130),f=n(3),d=n.n(f),m=n(7),b=n(52),g=n(126),v=n(46),_=n(127),y=n(128),O=n(18),j=n(77),h=n.n(j),E=n(43),U=n(78),w=n.n(U).a.create({baseURL:"https://api.github.com/users",timeout:1e4});function k(){return(k=Object(m.a)(d.a.mark((function e(){var t,n,r,a,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,e.prev=1,e.next=4,w.get("",{params:{since:t,per_page:E.c}});case 4:return n=e.sent,r=h()(n.headers.link),a=!(null===r||void 0===r?void 0:r.hasOwnProperty("next")),e.abrupt("return",{isLastPage:a,items:n.data});case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function x(){return(x=Object(m.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(){return(L=Object(m.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/".concat(t,"/events/public?page=0&per_page=").concat(E.a),e.prev=1,e.next=4,w.get(n);case 4:return r=e.sent,a=r.data,e.abrupt("return",{items:a});case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function S(){return(S=Object(m.a)(d.a.mark((function e(t){var n,r,a,c,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:0,r="/".concat(t,"/repos?page=").concat(n,"&per_page=").concat(E.b,"&sort=created"),e.prev=2,e.next=5,w.get(r);case 5:return a=e.sent,c=a.data,e.abrupt("return",{items:c});case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var B=n(29),P=n(31),N=function(e){var t;return{action:e.payload.action,date:e.created_at,id:e.id,repo:{id:e.repo.id,name:e.repo.name},type:e.type,urlPR:null===(t=e.payload.pull_request)||void 0===t?void 0:t.html_url}},C=n(131),R=n(23),D=function(e){return{avatarUrl:e.avatar_url,id:e.id,login:e.login}},F=n(32),I=function(e){return{id:e.id,name:e.name}},H=Object(p.a)((function(e,t){return e.pipe(Object(g.a)(Object(O.isOfType)(R.c.type)),Object(C.a)(500),Object(_.a)((function(){return Object(b.a)(function(){return k.apply(this,arguments)}(t.value.users.since)).pipe(Object(v.a)((function(e){return{users:e.items.map(D),isLastPage:e.isLastPage}})),Object(v.a)((function(e){return Object(R.d)(e)})),Object(y.a)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({payload:t.message,type:R.b.type}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})))}),(function(e){return e.pipe(Object(g.a)(Object(O.isOfType)(B.c.type)),Object(v.a)((function(e){return e})),Object(_.a)((function(e){return Object(b.a)(function(e){return x.apply(this,arguments)}(e.payload.login)).pipe(Object(v.a)((function(e){return{avatarUrl:(t=e).avatar_url,id:t.id,login:t.login,name:t.name,publicRepos:t.public_repos};var t})),Object(v.a)((function(e){return Object(B.d)(e)})),Object(y.a)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({payload:t.message,type:B.b.type}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})))}),(function(e){return e.pipe(Object(g.a)(Object(O.isOfType)(P.c.type)),Object(v.a)((function(e){return e})),Object(_.a)((function(e){return Object(b.a)(function(e){return L.apply(this,arguments)}(e.payload.login)).pipe(Object(v.a)((function(e){return e.items.filter((function(e){return"PullRequestEvent"===e.type})).map(N)})),Object(v.a)((function(t){return Object(P.d)({login:e.payload.login,events:t})})),Object(y.a)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({payload:t.message,type:P.b.type}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})))}),(function(e){return e.pipe(Object(g.a)(Object(O.isOfType)(F.c.type)),Object(v.a)((function(e){return e})),Object(_.a)((function(e){return Object(b.a)(function(e){return S.apply(this,arguments)}(e.payload.login,e.payload.page)).pipe(Object(v.a)((function(e){return e.items.map(I)})),Object(v.a)((function(t){return Object(F.d)({login:e.payload.login,repos:t})})),Object(y.a)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve({payload:t.message,type:F.b.type}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))})))})),T=n(10),G=Object(T.c)({userDetails:B.a,userEvents:P.a,userRepos:F.a,users:R.a}),M=Object(l.a)(),A=Object(o.a)({middleware:function(e){return e().concat(M)},reducer:G});M.run(H);var J=A;n(120);!function(){var e=n(124).default;i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:J},a.a.createElement(u.a,null,a.a.createElement(e,null)))),document.getElementById("root"))}()},124:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(7),i=n(0),s=n.n(i),u=n(4),o=n(16),l=n(17),p=n(75),f=n(26),d=n(63),m=n.n(d),b=i.memo((function(e){var t=e.login,n=Object(o.c)((function(e){return e.users})).usersByLogin[t];return n?i.createElement("div",{className:m.a.item},i.createElement(l.e,{user:n}),i.createElement("div",{className:m.a.footer},i.createElement(f.b,{to:"/user/".concat(t)},"Details"))):i.createElement(i.Fragment,null)})),g=n(84),v=n.n(g),_=n(23),y=function(){var e=Object(o.c)((function(e){return e.users})),t=e.visibleUsers,n=e.loading,r=e.error,a=e.isLastPage,c=Object(i.useRef)(null);Object(p.a)(),function(e,t){var n=Object(o.b)(),r=Object(i.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&n(t())}))})).observe(e)}),[t,n]);Object(i.useEffect)((function(){e.current&&r(e.current)}),[r,e,t])}(c,_.c);var u=s.a.createElement("div",{className:v.a.list},t.map((function(e){return s.a.createElement(b,{key:e,login:e})})));return s.a.createElement(s.a.Fragment,null,u,n&&s.a.createElement(l.d,null),r&&s.a.createElement(l.b,{message:r}),!a&&s.a.createElement("div",{ref:c}))},O=(n(122),s.a.lazy(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([n.e(5),n.e(3)]).then(n.bind(null,138)));case 1:case"end":return e.stop()}}),e)}))))),j=s.a.lazy(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.e(4).then(n.bind(null,133)));case 1:case"end":return e.stop()}}),e)}))));t.default=function(){var e="user"===Object(u.f)().pathname.split("/")[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.c,{withBackLink:e}),s.a.createElement("main",null,s.a.createElement(i.Suspense,{fallback:s.a.createElement(l.d,null)},s.a.createElement(u.c,null,s.a.createElement(u.a,{path:"/user/:login",exact:!0,component:O}),s.a.createElement(u.a,{path:"/",exact:!0,component:y}),s.a.createElement(u.a,{component:j})))))}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return _})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return w}));var r=n(0),a=n.n(r),c=n(26),i=n(40),s=n.n(i),u=function(e){var t=e.withBackLink,n=void 0!==t&&t;return a.a.createElement("header",{className:s.a.header},n&&a.a.createElement("div",{className:s.a.back},a.a.createElement(c.b,{to:"/"},"Back")),a.a.createElement("div",{className:s.a.logoBox},a.a.createElement("i",{className:s.a.git}),a.a.createElement("h1",null,"GitHub Users")))},o=n(80),l=n(33),p=n.n(l),f=n(54),d=n(24),m=n.n(d),b=function(e){var t=e.user,n=e.lg,r=void 0!==n&&n,c=t.id,i=t.login,s=t.avatarUrl,u=t.name;return a.a.createElement("div",{className:p()("card",m.a.body,Object(o.a)({},m.a.lg,r))},a.a.createElement(f.b,{src:s,alt:i,type:r?f.a.Profile:f.a.List}),a.a.createElement("div",{className:m.a.info},u&&a.a.createElement("h3",{className:m.a.name},u),a.a.createElement("h4",{className:m.a.login},"@",i),a.a.createElement("div",null,a.a.createElement("span",null,"ID: #",c)),a.a.createElement("a",{href:"https://github.com/".concat(i),className:m.a.gitLink},a.a.createElement("i",{className:m.a.git}),"GitHub Page")))},g=n(81),v=n.n(g),_=function(){return a.a.createElement("div",{className:v.a.spinner})},y=n(82),O=n.n(y),j=function(e){var t=e.message;return a.a.createElement("div",{className:O.a.error},a.a.createElement("p",null,t))},h=n(55),E=n(83),U=n.n(E),w=function(e){var t=e.onClick,n=e.className,r=e.children,c=Object(h.a)(e,["onClick","className","children"]);return a.a.createElement("button",Object.assign({},c,{className:p()(U.a.btn,n),onClick:t}),r)}},23:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(14),a=Object(r.b)({name:"users",initialState:{error:null,isLastPage:!1,loading:!1,since:0,usersByLogin:{},visibleUsers:[]},reducers:{getUsersStart:function(e){e.loading=!0,e.error=null},getUsersSuccess:function(e,t){var n=t.payload;e.loading=!1,e.error=null,n.users.forEach((function(t){e.usersByLogin[t.login.toLowerCase()]=t})),e.visibleUsers=e.visibleUsers.concat(n.users.map((function(e){return e.login.toLowerCase()}))),e.since=e.visibleUsers.length?e.usersByLogin[e.visibleUsers[e.visibleUsers.length-1]].id:0,e.isLastPage=n.isLastPage},getUsersFailure:function(e,t){var n=t.payload;e.loading=!1,e.error=n}}}),c=a.actions,i=c.getUsersStart,s=c.getUsersSuccess,u=c.getUsersFailure;t.a=a.reducer},24:function(e,t,n){e.exports={body:"UserCard_body__2r8Ii",lg:"UserCard_lg__1Mf6J",info:"UserCard_info__1ThQU",gitLink:"UserCard_gitLink__B78ai",git:"UserCard_git__3TRn_",login:"UserCard_login__2evx8",name:"UserCard_name__s-Gf2"}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(14),a=Object(r.b)({name:"userDetails",initialState:{detailsByUser:{},error:null,loading:!1},reducers:{getUserDetailsStart:function(e,t){e.loading=!0,e.error=null},getUserDetailsSuccess:function(e,t){e.loading=!1,e.error=null;var n=t.payload,r=n.id,a=n.login,c=n.avatarUrl,i=n.name,s=n.publicRepos;e.detailsByUser[a.toLowerCase()]={avatarUrl:c,id:r,login:a,name:i,publicRepos:s}},getUserDetailsFailure:function(e,t){e.loading=!1,e.error=t.payload}}}),c=a.actions,i=c.getUserDetailsStart,s=c.getUserDetailsSuccess,u=c.getUserDetailsFailure;t.a=a.reducer},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(14),a=Object(r.b)({name:"events",initialState:{error:null,eventsByUser:{},loading:!1},reducers:{getEventsStart:function(e,t){e.loading=!0,e.error=null},getEventsSuccess:function(e,t){var n=t.payload.login;e.eventsByUser[n.toLowerCase()]=t.payload.events,e.loading=!1,e.error=null},getEventsFailure:function(e,t){e.loading=!1,e.error=t.payload}}}),c=a.actions,i=c.getEventsStart,s=c.getEventsSuccess,u=c.getEventsFailure;t.a=a.reducer},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(64),a=n(14),c=Object(a.b)({name:"repos",initialState:{error:null,loading:!1,reposByUser:{}},reducers:{getReposStart:function(e,t){e.loading=!0,e.error=null},getReposSuccess:function(e,t){e.loading=!1,e.error=null;var n=t.payload.login.toLowerCase(),a=e.reposByUser[n]||[];e.reposByUser[n]=[].concat(Object(r.a)(a),Object(r.a)(t.payload.repos))},getReposFailure:function(e,t){e.loading=!1,e.error=t.payload}}}),i=c.actions,s=i.getReposStart,u=i.getReposSuccess,o=i.getReposFailure;t.a=c.reducer},40:function(e,t,n){e.exports={header:"Header_header__1X_E4",back:"Header_back__1r-Cq",logoBox:"Header_logoBox__1_ElQ",git:"Header_git__3TAgP"}},43:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=30,a=20,c=100},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return r}));var r,a=n(55),c=n(33),i=n.n(c),s=n(0),u=n.n(s),o=n(62),l=n.n(o);!function(e){e.List="list",e.Profile="profile",e.Timeline="timeline"}(r||(r={}));var p=function(e){var t=e.alt,n=e.type,r=Object(a.a)(e,["alt","type"]);return u.a.createElement("img",Object.assign({},r,{alt:t,className:i()(l.a.ava,l.a[n])}))}},62:function(e,t,n){e.exports={ava:"AvatarImage_ava__azuWj",timeline:"AvatarImage_timeline__26fB8",list:"AvatarImage_list__3KZD3",profile:"AvatarImage_profile__1oJ9M"}},63:function(e,t,n){e.exports={item:"UserListItem_item__17e9M",footer:"UserListItem_footer__TDMJE"}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){Object(r.useLayoutEffect)((function(){document.title=e?e+" | GitHub Users":"GitHub Users"}),[e])}},81:function(e,t,n){e.exports={spinner:"Spinner_spinner__UKmoP",spin:"Spinner_spin__1vpI4",small:"Spinner_small__y7_Nt"}},82:function(e,t,n){e.exports={error:"ErrorBox_error__VXGQQ"}},83:function(e,t,n){e.exports={btn:"ButtonLink_btn__28M6y"}},84:function(e,t,n){e.exports={list:"UserListPage_list__XuLHj"}},87:function(e,t,n){e.exports=n(123)}},[[87,1,2]]]);
//# sourceMappingURL=main.326c175a.chunk.js.map