(this["webpackJsonpusers-app"]=this["webpackJsonpusers-app"]||[]).push([[3,4],{132:function(e,t,a){e.exports={boxContainer:"ErrorPage_boxContainer__2kxSl",message:"ErrorPage_message__1TGK2",footer:"ErrorPage_footer__ZxKal"}},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a(132),o=a.n(c);t.default=function(){return r.a.createElement("div",{className:o.a.boxContainer},r.a.createElement("div",{className:o.a.message}," Page is not found "),r.a.createElement("div",{className:o.a.footer},r.a.createElement(l.b,{to:"/"},"Back to Home")))}},135:function(e,t,a){e.exports={item:"EventListItem_item__15DC_",date:"EventListItem_date__1xmGw",body:"EventListItem_body__37faP"}},136:function(e,t,a){e.exports={repos:"RepoList_repos__lEmSd"}},137:function(e,t,a){e.exports={container:"UserPage_container__2UYZp",section:"UserPage_section__2cqvk",mtop:"UserPage_mtop__3b_3V"}},138:function(e,t,a){"use strict";a.r(t),a.d(t,"UserPage",(function(){return x}));var n=a(0),r=a.n(n),l=a(16),c=a(4),o=a(17),s=a(75),i=a(133),m=a(134),u=a.n(m),E=a(54),p=a(135),d=a.n(p),f=function(e){var t=e.event,a=e.user,n=t.repo,l=t.action,c=t.date,o=t.urlPR;return r.a.createElement("div",{className:d.a.item},r.a.createElement("p",{className:d.a.date},u()(new Date(c)).format("MMM DD, YYYY")),r.a.createElement("div",{className:d.a.body},r.a.createElement(E.b,{src:a.avatarUrl,alt:a.login,type:E.a.Timeline}),r.a.createElement("div",null,r.a.createElement("p",null,"@",a.login," ",l," ",r.a.createElement("a",{href:o},"PR")),r.a.createElement("p",null,n.name))))},g=a(31),b=function(e){var t=e.user,a=t.login,c=Object(l.b)(),s=Object(l.c)((function(e){return e.userEvents})),i=s.loading,m=s.error,u=s.eventsByUser[t.login.toLowerCase()];return Object(n.useEffect)((function(){u||c(Object(g.c)({login:a}))}),[u,a,c]),i?r.a.createElement(o.d,null):m?r.a.createElement(o.b,{message:m}):r.a.createElement("div",{"data-testid":"events"},u&&u.length?u.map((function(e){return r.a.createElement(f,{key:e.id,event:e,user:t})})):r.a.createElement("div",null,"No PR events recently."))},v=a(43),_=a(136),j=a.n(_),O=a(32),P=function(e){var t=e.user,a=t.login,c=t.publicRepos,s=Object(l.b)(),i=Object(l.c)((function(e){return e.userRepos})),m=i.loading,u=i.error,E=i.reposByUser[t.login.toLowerCase()];Object(n.useEffect)((function(){E||s(Object(O.c)({login:a,page:0}))}),[E,a,s]);var p;return u&&(p=r.a.createElement(o.b,{message:u})),E&&(p=E.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,E.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))),c>E.length&&!m&&r.a.createElement(o.a,{onClick:function(){if(E){var e=Math.floor(E.length/v.b);s(Object(O.c)({login:a,page:e+1}))}}},"Load more")):r.a.createElement("div",null,"No pubic repos.")),r.a.createElement("div",{className:j.a.repos},r.a.createElement("p",null,r.a.createElement("b",null,"Repositories count: ")," ",r.a.createElement("span",{"data-testid":"repoCnt"},c)),r.a.createElement("p",null,r.a.createElement("b",null,"Repositories list:")),p,m&&r.a.createElement(o.d,null))},N=a(137),h=a.n(N),y=a(29),x=function(){var e=Object(c.g)().login,t=Object(l.b)(),a=Object(l.c)((function(e){return e.userDetails})),m=a.detailsByUser,u=a.error,E=a.loading,p=m[e.toLowerCase()];return Object(s.a)(p&&p.login),Object(n.useEffect)((function(){p||t(Object(y.c)({login:e})),window.scrollTo({top:0})}),[e,p,t]),u?r.a.createElement(i.default,null):E||!p?r.a.createElement(o.d,null):r.a.createElement("div",{className:h.a.container},r.a.createElement("div",{className:h.a.section},r.a.createElement("div",null,r.a.createElement("h2",null,"Profile"),r.a.createElement(o.e,{user:p,lg:!0}),r.a.createElement("h2",{className:h.a.mtop},"Repositories"),r.a.createElement(P,{user:p}))),r.a.createElement("div",{className:h.a.section},r.a.createElement("h2",null,"History of PR"),r.a.createElement(b,{user:p})))};t.default=x}}]);
//# sourceMappingURL=3.a3edb7b0.chunk.js.map