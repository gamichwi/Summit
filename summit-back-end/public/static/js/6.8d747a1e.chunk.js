(this["webpackJsonpsummit-front-end"]=this["webpackJsonpsummit-front-end"]||[]).push([[6],{101:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a.n(n),c=a(16),s=a(0),m=a.n(s),u=a(92),l=a(8),i=function(e){return m.a.createElement(u.a,{className:"bg-dark text-white userItem"},m.a.createElement(l.b,{to:"/".concat(e.id,"/summits")},m.a.createElement(u.a.Img,{src:"/".concat(e.image)})),m.a.createElement(u.a.Body,null,m.a.createElement(u.a.Title,null,e.name),m.a.createElement(u.a.Text,null,"Conquering ",e.summitCount," Summits!")))},o=(a(101),function(e){return 0===e.items.length?m.a.createElement("div",{className:"default"},m.a.createElement("h2",null,"No users were found.")):m.a.createElement("div",{className:"flexContainer"},e.items.map((function(e){return m.a.createElement(i,{key:e.id,id:e.id,image:e.image,name:e.name,summitCount:e.summits.length})})))}),f=a(54),d=a(35),E=a(55);t.default=function(){var e=Object(E.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,u=e.clearError,l=Object(s.useState)(),i=Object(c.a)(l,2),p=i[0],g=i[1];return Object(s.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(n("/api/users"));case 3:e=t.sent,g(e.users),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),null,null,[[0,7]])}()}),[n]),m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{error:a,hide:u}),t&&m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{asOverlay:!0})),!t&&p&&m.a.createElement(o,{items:p}))}}}]);
//# sourceMappingURL=6.8d747a1e.chunk.js.map