(this["webpackJsonpsummit-front-end"]=this["webpackJsonpsummit-front-end"]||[]).push([[4],{77:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(78);function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}},78:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return r}))},79:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return l})),t.d(a,"d",(function(){return i}));var r=function(){return{type:"REQUIRE"}},n=function(e){return{type:"MINLENGTH",val:e}},l=function(){return{type:"EMAIL"}},i=function(e,a){var t=!0,r=!0,n=!1,l=void 0;try{for(var i,s=a[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var c=i.value;"REQUIRE"===c.type&&(t=t&&e.trim().length>0),"MINLENGTH"===c.type&&(t=t&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(t=t&&e.trim().length<=c.val),"MIN"===c.type&&(t=t&&+e>=c.val),"MAX"===c.type&&(t=t&&+e<=c.val),"EMAIL"===c.type&&(t=t&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){n=!0,l=o}finally{try{r||null==s.return||s.return()}finally{if(n)throw l}}return t}},80:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}return(0,l.default)(r)};var r,n=t(81),l=(r=n)&&r.__esModule?r:{default:r};e.exports=a.default},81:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,n,l,i){var s=n||"<<anonymous>>",c=i||r;if(null==t[r])return a?new Error("Required "+l+" `"+c+"` was not specified in `"+s+"`."):null;for(var o=arguments.length,u=Array(o>6?o-6:0),d=6;d<o;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,r,s,l,c].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},82:function(e,a,t){"use strict";var r=t(1),n=t(2),l=t(3),i=t.n(l),s=t(0),c=t.n(s),o=t(5),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,d=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(o.b)(t,"col"),p=[],b=[];return u.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var l=n.span;a=void 0===l||l,t=n.offset,r=n.order}else a=n;var i="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+m+i:""+m+i+"-"+a),null!=r&&b.push("order"+i+"-"+r),null!=t&&b.push("offset"+i+"-"+t)})),p.length||p.push(m),c.a.createElement(d,Object(r.a)({},f,{ref:a,className:i.a.apply(void 0,[l].concat(p,b))}))}));d.displayName="Col",a.a=d},83:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(14),n=t(78),l=t(77),i=t(0),s=function(e,a){switch(a.type){case"INPUT_CHANGE":var t=!0;for(var r in e.inputs)e.inputs[r]&&(t=r===a.inputId?t&&a.isValid:t&&e.inputs[r].isValid);return Object(l.a)({},e,{inputs:Object(l.a)({},e.inputs,Object(n.a)({},a.inputId,{value:a.value,isValid:a.isValid})),isValid:t});case"SET_DATA":return{inputs:a.inputs,isValid:a.formIsValid};default:return e}},c=function(e,a){var t=Object(i.useReducer)(s,{inputs:e,isValid:a}),n=Object(r.a)(t,2),l=n[0],c=n[1];return[l,Object(i.useCallback)((function(e,a,t){c({type:"INPUT_CHANGE",value:a,isValid:t,inputId:e})}),[]),Object(i.useCallback)((function(e,a){c({type:"SET_DATA",inputs:e,formIsValid:a})}),[])]}},84:function(e,a,t){"use strict";var r=t(14),n=t(77),l=t(0),i=t.n(l),s=t(1),c=t(2),o=t(3),u=t.n(o),d=(t(80),t(4)),f=t.n(d),m={type:f.a.string.isRequired,as:f.a.elementType},p=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,n=e.className,l=e.type,o=Object(c.a)(e,["as","className","type"]);return i.a.createElement(r,Object(s.a)({},o,{ref:a,className:u()(n,l&&l+"-feedback")}))}));p.displayName="Feedback",p.propTypes=m,p.defaultProps={type:"valid"};var b=p,v=i.a.createContext({controlId:void 0}),O=t(5),j=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,d=e.isValid,f=e.isInvalid,m=e.isStatic,p=e.as,b=void 0===p?"input":p,j=Object(c.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(l.useContext)(v),E=y.controlId;return r=y.custom?Object(O.b)(n,"custom-control-input"):Object(O.b)(r,"form-check-input"),i.a.createElement(b,Object(s.a)({},j,{ref:a,id:t||E,className:u()(o,r,d&&"is-valid",f&&"is-invalid",m&&"position-static")}))}));j.displayName="FormCheckInput",j.defaultProps={type:"checkbox"};var y=j,E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,o=e.htmlFor,d=Object(c.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(v),m=f.controlId;return t=f.custom?Object(O.b)(r,"custom-control-label"):Object(O.b)(t,"form-check-label"),i.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:o||m,className:u()(n,t)}))}));E.displayName="FormCheckLabel";var h=E,N=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,o=e.inline,d=e.disabled,f=e.isValid,m=e.isInvalid,p=e.feedback,j=e.className,E=e.style,N=e.title,x=e.type,P=e.label,g=e.children,w=e.custom,I=e.as,C=void 0===I?"input":I,V=Object(c.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===x||w;r=k?Object(O.b)(n,"custom-control"):Object(O.b)(r,"form-check");var T=Object(l.useContext)(v).controlId,R=Object(l.useMemo)((function(){return{controlId:t||T,custom:k}}),[T,k,t]),F=null!=P&&!1!==P&&!g,S=i.a.createElement(y,Object(s.a)({},V,{type:"switch"===x?"checkbox":x,ref:a,isValid:f,isInvalid:m,isStatic:!F,disabled:d,as:C}));return i.a.createElement(v.Provider,{value:R},i.a.createElement("div",{style:E,className:u()(j,r,k&&"custom-"+x,o&&r+"-inline")},g||i.a.createElement(i.a.Fragment,null,S,F&&i.a.createElement(h,{title:N},P),(f||m)&&i.a.createElement(b,{type:f?"valid":"invalid"},p))))}));N.displayName="FormCheck",N.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},N.Input=y,N.Label=h;var x=N,P=(t(53),i.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,o=e.type,d=e.size,f=e.id,m=e.className,p=e.isValid,b=e.isInvalid,j=e.plaintext,y=e.readOnly,E=e.as,h=void 0===E?"input":E,N=Object(c.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(l.useContext)(v).controlId;if(n=Object(O.b)(n,"form-control"),j)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===o){var P;(P={})[n+"-file"]=!0,t=P}else{var g;(g={})[n]=!0,g[n+"-"+d]=d,t=g}return i.a.createElement(h,Object(s.a)({},N,{type:o,ref:a,readOnly:y,id:f||x,className:u()(m,t,p&&"is-valid",b&&"is-invalid")}))})));P.displayName="FormControl",P.Feedback=b;var g=P,w=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,o=e.controlId,d=e.as,f=void 0===d?"div":d,m=Object(c.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(O.b)(t,"form-group");var p=Object(l.useMemo)((function(){return{controlId:o}}),[o]);return i.a.createElement(v.Provider,{value:p},i.a.createElement(f,Object(s.a)({},m,{ref:a,className:u()(r,t)}),n))}));w.displayName="FormGroup";var I=w,C=t(82),V=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.column,n=e.srOnly,o=e.className,d=e.htmlFor,f=Object(c.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),m=Object(l.useContext)(v).controlId;t=Object(O.b)(t,"form-label");var p=u()(o,t,n&&"sr-only",r&&"col-form-label");return d=d||m,r?i.a.createElement(C.a,Object(s.a)({as:"label",className:p,htmlFor:d},f)):i.a.createElement("label",Object(s.a)({ref:a,className:p,htmlFor:d},f))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var k=V,T=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,l=void 0===n?"small":n,o=e.muted,d=Object(c.a)(e,["bsPrefix","className","as","muted"]);return t=Object(O.b)(t,"form-text"),i.a.createElement(l,Object(s.a)({},d,{ref:a,className:u()(r,t,o&&"text-muted")}))}));T.displayName="FormText";var R=T,F=i.a.forwardRef((function(e,a){return i.a.createElement(x,Object(s.a)({},e,{ref:a,type:"switch"}))}));F.displayName="Switch",F.Input=x.Input,F.Label=x.Label;var S=F,G=t(7),L=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,n=e.className,l=e.validated,o=e.as,d=void 0===o?"form":o,f=Object(c.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(O.b)(t,"form"),i.a.createElement(d,Object(s.a)({},f,{ref:a,className:u()(n,l&&"was-validated",r&&t+"-inline")}))}));L.displayName="Form",L.defaultProps={inline:!1},L.Row=Object(G.a)("form-row"),L.Group=I,L.Control=g,L.Check=x,L.Switch=S,L.Label=k,L.Text=R;var A=L,M=t(79),_=function(e,a){switch(a.type){case"CHANGE":return Object(n.a)({},e,{value:a.val,isValid:Object(M.d)(a.val,a.validators)});case"TOUCH":return Object(n.a)({},e,{value:a.val,isTouched:!0});default:return e}};a.a=function(e){var a=Object(l.useReducer)(_,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),t=Object(r.a)(a,2),n=t[0],s=t[1],c=e.id,o=e.onInput,u=n.value,d=n.isValid;Object(l.useEffect)((function(){o(c,u,d)}),[c,u,d,o]);var f=function(a){s({type:"CHANGE",val:a.target.value,validators:e.validators})},m=function(a){s({type:"TOUCH",val:a.target.value,validators:e.validators})},p="input"===e.element?i.a.createElement(i.a.Fragment,null,i.a.createElement(A.Control,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:m,value:n.value})):i.a.createElement(i.a.Fragment,null,i.a.createElement(A.Control,{id:e.id,rows:e.rows||3,onChange:f,onBlur:m,value:n.value}));return i.a.createElement("div",null,i.a.createElement(A.Label,{htmlFor:e.id},e.label),p,!n.isValid&&n.isTouched&&i.a.createElement("p",null,e.errorText))}},85:function(e,a,t){"use strict";var r=t(14),n=t(0),l=t.n(n),i=t(12);t(86);a.a=function(e){var a=Object(n.useState)(),t=Object(r.a)(a,2),s=t[0],c=t[1],o=Object(n.useState)(),u=Object(r.a)(o,2),d=u[0],f=u[1],m=Object(n.useState)(!1),p=Object(r.a)(m,2),b=p[0],v=p[1],O=Object(n.useRef)();Object(n.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(s)}}),[s]);return l.a.createElement("div",null,l.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(a){var t,r=b;a.target.files&&1===a.target.files.length?(t=a.target.files[0],c(t),v(!0),r=!0):(v(!1),r=!1),e.onInput(e.id,t,r)}}),l.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},l.a.createElement("div",{className:"image-upload__preview"},d&&l.a.createElement("img",{src:d,alt:"Preview"}),!d&&l.a.createElement("p",null,"Please pick an image.")),l.a.createElement(i.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")))}},86:function(e,a,t){},87:function(e,a,t){"use strict";var r=t(1),n=t(2),l=t(3),i=t.n(l),s=t(0),c=t.n(s),o=t(5),u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.noGutters,s=e.as,u=void 0===s?"div":s,d=e.className,f=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),m=Object(o.b)(t,"row");return c.a.createElement(u,Object(r.a)({ref:a},f,{className:i()(d,m,l&&"no-gutters")}))}));u.defaultProps={noGutters:!1},a.a=u},91:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t.n(r),l=t(77),i=t(14),s=t(0),c=t.n(s),o=t(87),u=t(82),d=t(84),f=t(12),m=t(41),p=t(31),b=t(85),v=t(79),O=t(83),j=t(42),y=t(24);a.default=function(){var e=Object(s.useContext)(y.a),a=Object(s.useState)(!0),t=Object(i.a)(a,2),r=t[0],E=t[1],h=Object(j.a)(),N=h.isLoading,x=h.error,P=h.sendRequest,g=h.clearError,w=Object(O.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),I=Object(i.a)(w,3),C=I[0],V=I[1],k=I[2];return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{error:x,hide:g}),N&&c.a.createElement(p.a,{asOverlay:!0}),c.a.createElement("h2",null,"Login Required"),c.a.createElement("form",{onSubmit:function(a){var t,l,i;return n.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),!r){s.next=13;break}return s.prev=2,s.next=5,n.a.awrap(P("/api/users/login","POST",JSON.stringify({email:C.inputs.email.value,password:C.inputs.password.value}),{"Content-Type":"application/json"}));case 5:t=s.sent,e.login(t.userId,t.token),s.next=11;break;case 9:s.prev=9,s.t0=s.catch(2);case 11:s.next=27;break;case 13:return s.prev=13,(l=new FormData).append("email",C.inputs.email.value),l.append("name",C.inputs.name.value),l.append("password",C.inputs.password.value),l.append("image",C.inputs.image.value),s.next=21,n.a.awrap(P("/api/users/signup","POST",l));case 21:i=s.sent,e.login(i.userId,i.token),s.next=27;break;case 25:s.prev=25,s.t1=s.catch(13);case 27:case"end":return s.stop()}}),null,null,[[2,9],[13,25]])}},c.a.createElement(o.a,null,c.a.createElement(u.a,null,!r&&c.a.createElement(d.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(v.c)()],errorText:"Please enter your name.",onInput:V}),c.a.createElement(d.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(v.a)()],errorText:"Please enter a valid email address.",onInput:V}),c.a.createElement(d.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(v.b)(8)],errorText:"Please enter a valid password, at least 8 characters.",onInput:V})),c.a.createElement(u.a,null,c.a.createElement("br",null),!r&&c.a.createElement(b.a,{center:!0,id:"image",onInput:V,errorText:"Please provide an image."}))),c.a.createElement("br",null),c.a.createElement(o.a,null,c.a.createElement(f.a,{type:"submit",disabled:!C.isValid},r?"LOGIN":"SIGNUP"),c.a.createElement(f.a,{onClick:function(){r?k(Object(l.a)({},C.inputs,{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):k(Object(l.a)({},C.inputs,{name:void 0,image:void 0}),C.inputs.email.isValid&&C.inputs.password.isValid),E((function(e){return!e}))},variant:"secondary"},"SWITCH TO ",r?"SIGNUP":"LOGIN"))))}}}]);
//# sourceMappingURL=4.3c90518d.chunk.js.map