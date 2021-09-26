(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return i}),a.d(t,"d",function(){return d});var n=a(141),r=a.n(n),c=a(142),o=a.n(c),s=a(2),i=[{name:"Home",link:"/"}],l={baseUrl:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE_URL),path:{login:"auth/login",userList:"auth/getAllAdmins",addUser:"auth/createAdminUser",deleteUser:"auth/deleteAdminUser",logout:"logout",forgetPassword:"auth/forgot-password",resetPassword:"auth/password/reset",profile:"profile",changePassword:"change-password",users:"users",awsCreds:"auth/contentUploadCreds",getAllPayPalConfig:"payment/getAllPaypalConfig",mediaList:function(e){return"media/:channelId/events/:eventId/list-media".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},addMedia:function(e){return"media/:channelId/events/:eventId/upload-media".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},deleteMedia:function(e){return"media/:channelId/events/:eventId/delete-media".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},pollList:function(e){return"polls/:channelId/events/:eventId/fetch-polls".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},addPoll:function(e){return"polls/:channelId/events/:eventId/add-polls".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},deletePoll:function(e){return"polls/:channelId/events/:eventId/remove-polls".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},getStar:function(e){return"stars/:channelId/events/:eventId/get-stars".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},setStar:function(e){return"stars/:channelId/events/:eventId/set-stars".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},setPaypalConfigOfEvent:function(e){return"payment/:channelId/events/:eventId/setPaypalConfigOfEvent".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},events:"show/shows",event:function(e){return"show/:channelId/events/:eventId".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},participant:function(e){return"participants/:channelId/events/:eventId/fetch-participants".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},fetchPolls:function(e){return"polls/:channelId/events/:eventId/fetch-polls".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))},participantQuestion:function(e){return"polls/:channelId/events/:eventId/add/participant".replace(":channelId",Object(s.c)(e)).replace(":eventId",Object(s.d)(e))}}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a="".concat(l.baseUrl,"/").concat(e);return t&&!o()(t)&&(a+="?".concat(r.a.stringify(t))),a},d=[15,30,50,100];Object({NODE_ENV:"production",PUBLIC_URL:""}).ENVIRONMENT},167:function(e,t,a){e.exports=a(366)},179:function(e,t,a){},180:function(e,t,a){},2:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o});a(139),a(140);var n=function(e){return e.split("_")[1].split("::")[0]},r=function(e){return e.split("_")[0]},c=function(e){return{type:e,payload:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}},o=function(e){return function(t){for(var a=!1,n=0;n<e.length;n+=1)if(t.loading.api[e[n]]){a=!0;break}return a}}},34:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),o=a.n(c);t.a=function(e){var t=r.a.createElement("button",{"data-testid":e.dataTestId||null,title:e.abbr||"",type:e.type,className:o()("btn","btn-".concat(e.btnType||"default"),"text-capitalize",e.className),disabled:e.loading||e.disabled,style:e.style||{},onClick:e.disabled||e.loading?function(){}:function(t){return!e.loading&&e.onClick&&e.onClick(t)}},e.loading?r.a.createElement("i",{className:"fa fa-spin fa-spinner"}):(e.children,e.children));return e.abbr?r.a.createElement("abbr",{title:e.abbr||"",className:"custom-abbr"},t):t}},358:function(e,t,a){},366:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(13),s=a.n(o),i=a(24),l=a(373),u=a(18),d=a(19),m=a(21),p=a(20),f=a(22),h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidCatch",value:function(e,t){this.logError(e)}},{key:"render",value:function(){return this.state.error?"Application has errors. Please check logs to fix this":this.props.children}},{key:"logError",value:function(e){console.log(e)}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),t}(c.a.Component),g=a(374),v=a(371),b=a(372),O=(a(175),a(176),a(177),a(178),a(179),a(180),a(32)),E=a(370),S=a(369),j=function(e){return e.split("/").filter(function(e){return""!==e})},y=function(e,t){if("/"===t)return e===t?"active":"";var a=j(t),n=j(e);return a[0]===n[0]?"active":""},I={users:"users",building:"building",document:"file-text"},N=Object(E.a)(function(e){return c.a.createElement("li",{className:y(e.location.pathname,e.menu.route),onClick:function(){e.renderSideNav(),e.toggleIsOpen(e.menu.name)}},c.a.createElement(S.a,{to:e.menu.route},c.a.createElement("i",{className:"fa fa-".concat(I[e.menu.icon])}),c.a.createElement("span",{className:"nav-label"},e.menu.name)))}),C=a(2),U=a(9),w=a.n(U),T="adsfghjkla2312safaaszAS",A=function(e){var t=w.a.AES.encrypt(JSON.stringify(e),T);localStorage.setItem("userData",t.toString())},_={checkLogin:function(){return!!localStorage.authData},getAccessToken:function(){try{var e=localStorage.authData;if(e){var t=w.a.AES.decrypt(e.toString(),T),a=JSON.parse(t.toString(w.a.enc.Utf8));return!(!a||!a.token)&&a.token}return!1}catch(n){return!1}},getUserData:function(){var e=localStorage.userData;if(e){var t=w.a.AES.decrypt(e.toString(),T),a=JSON.parse(t.toString(w.a.enc.Utf8));return a||{}}return{}},setAuthData:function(e){var t=w.a.AES.encrypt(JSON.stringify(e),T);localStorage.setItem("authData",t.toString())},getAuthData:function(){var e=localStorage.authData;if(e){var t=w.a.AES.decrypt(e.toString(),T);return JSON.parse(t.toString(w.a.enc.Utf8))}},removeAuthData:function(){localStorage.removeItem("authData")},setUserData:A,getUserLanguage:function(){var e=localStorage.userData;if(!e)return"de";var t=w.a.AES.decrypt(e.toString(),T),a=JSON.parse(t.toString(w.a.enc.Utf8));return a&&(a.user||{}).language||"de"},setUserLanguage:function(e){var t=localStorage.userData;if(t){var a=w.a.AES.decrypt(t.toString(),T),n=JSON.parse(a.toString(w.a.enc.Utf8));n&&(n.user.language=e,A(n))}},checkSuperAdmin:function(){var e=localStorage.authData;if(e){var t=w.a.AES.decrypt(e.toString(),T);return JSON.parse(t.toString(w.a.enc.Utf8)).isSuperAdmin}return!1}},D=a(4),k=a(86),L=a.n(k),P=a(12),M=L.a.create(),x=L.a.CancelToken,R=function(e){var t=e.method,a=e.url,n=e.data,r=e.isAccessTokenRequire,c=void 0===r||r,o=e.contentType,s=void 0===o?"application/json":o,i={"Content-Type":s},l=c&&_.getAccessToken();l&&(i.access_token="".concat(l));var u=null;return u="application/json"===s?JSON.stringify(n):n,new Promise(function(e,n){M({method:t,url:a,cancelToken:new x(function(e){e}),headers:i,data:u}).then(function(t){e(t.data.data)}).catch(function(e){n(e)})})},q={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return R(Object(D.a)({method:"GET",url:Object(P.c)(e,t)},a))},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return R(Object(D.a)({method:"POST",url:Object(P.c)(e,a),data:t},n))},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return R(Object(D.a)({method:"PUT",url:Object(P.c)(e),data:t},a))},deleteRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return R(Object(D.a)({method:"DELETE",url:Object(P.c)(e),data:t},a))},patch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return R(Object(D.a)({method:"PATCH",url:Object(P.c)(e),data:t},a))}},H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={openStatus:{}},a.toggleIsOpen=function(e){a.state.openStatus[e]?a.setState({openStatus:{}}):a.setState({openStatus:Object(O.a)({},e,!0)})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar-default navbar-static-side",role:"navigation"},c.a.createElement("ul",{className:"nav",id:"side-menu"},c.a.createElement("li",{className:"nav-header cursor-pointer"},c.a.createElement("h3",{className:"profile-element"},"CMS Admin"),c.a.createElement("div",{className:"logo-element"},"CMS")),c.a.createElement(N,{isOpen:this.state.openStatus.Events||!1,toggleIsOpen:this.toggleIsOpen,key:"Customer-detail",renderSideNav:this.props.renderSideNav,menu:{name:"Customer Detail",route:"/customer-detail",icon:"users"}}),c.a.createElement(N,{isOpen:this.state.openStatus.Events||!1,toggleIsOpen:this.toggleIsOpen,key:"Company-detail",renderSideNav:this.props.renderSideNav,menu:{name:"Company Detail",route:"/company-detail",icon:"building"}}),c.a.createElement(N,{isOpen:this.state.openStatus.Events||!1,toggleIsOpen:this.toggleIsOpen,key:"Quotation",renderSideNav:this.props.renderSideNav,menu:{name:"Quotation",route:"/quotation",icon:"document"}})))}}]),t}(r.PureComponent),G=Object(i.b)(function(e){return e},function(e){return{renderSideNav:function(){return e(Object(C.a)("NO_ACTION"))},getProfile:function(){return e(function(e){e(Object(C.a)("GET_PROFILE_INIT")),q.get(P.a.path.profile).then(function(t){_.setUserData(t),e(Object(C.a)("GET_PROFILE_SUCCESS",t))}).catch(function(){e(Object(C.a)("GET_PROFILE_FAIL"))})})}}})(Object(E.a)(H)),F=a(64),J=a(91),B=a(34),z=function(e){return c.a.createElement(J.a,{show:e.show,handleClose:e.handleClose,className:"confirm-wrapper"},c.a.createElement("div",{className:"confirm-icon","data-testid":"confirm-icon"},c.a.createElement("i",{className:"fa fa-exclamation"})),c.a.createElement("p",{className:"mt-3 font-20 text-align-center"},e.message),c.a.createElement(F.a.Footer,{className:"modal-footer-area text-align-center"},c.a.createElement(B.a,{className:"width-100px",btnType:"danger",onClick:e.handleClose},e.cancelBtnText||"No"),c.a.createElement(B.a,{className:"width-100px",btnType:"primary",loading:e.loading,onClick:e.handleConfirm},e.submitBtnText||"Yes")))},V=a(92),W=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleModalStatus=function(){return a.setState({isOpen:!a.state.isOpen})},a.onLogout=function(){return a.props.logout()},a.toggleSidebar=function(){return document.body&&document.body.classList.toggle("mini-navbar")},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<=768&&document.body&&document.body.classList.add("mini-navbar")}},{key:"render",value:function(){return c.a.createElement("div",{className:"row border-bottom"},c.a.createElement("nav",{className:"navbar navbar-static-top",role:"navigation"},c.a.createElement("div",{className:"navbar-header"},c.a.createElement("button",{className:"navbar-minimalize minimalize-styl-2 btn btn-primary",onClick:this.toggleSidebar},c.a.createElement("i",{className:"fa fa-bars"})))),this.state.isOpen&&c.a.createElement(z,{show:this.state.isOpen,handleClose:this.toggleModalStatus,handleConfirm:this.onLogout,loading:this.props.loading,message:V.b.confirmLogout}))}}]),t}(c.a.Component),Q=Object(C.b)(["AUTH_LOGOUT"]),X=Object(i.b)(function(e){return Object(D.a)({},e.auth,{loading:Q(e)})},function(e){return{logout:function(){return e(function(e){e(Object(C.a)("AUTH_LOGOUT_SUCCESS"))})}}})(Object(E.a)(W)),Y=function(e){return c.a.createElement("div",{id:"wrapper"},c.a.createElement(G,null),c.a.createElement("div",{id:"page-wrapper",className:"gray-bg"},c.a.createElement(X,null),e.children))},$=a(88),K=a(137),Z=Object(K.a)(Object(r.lazy)(function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,611))})),ee=Object(K.a)(Object(r.lazy)(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,612))})),te=Object(K.a)(Object(r.lazy)(function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,610))})),ae=function(){return localStorage.setItem("authData","true"),c.a.createElement(Y,null,c.a.createElement(r.Suspense,{fallback:c.a.createElement($.a,null)},c.a.createElement(g.a,null,c.a.createElement(v.a,{exact:!0,path:"/customer-detail",component:Z}),c.a.createElement(v.a,{exact:!0,path:"/company-detail",component:ee}),c.a.createElement(v.a,{exact:!0,path:"/quotation",component:te}),c.a.createElement(b.a,{to:"/customer-detail"}))))},ne=a(26),re=a(147),ce={authData:{auth:_.checkLogin()},userData:_.getUserData(),closeModal:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(D.a)({},e,{authData:{auth:!0},userData:t.payload});case"NO_ACTION":return Object(D.a)({},e);case"AUTH_LOGOUT_SUCCESS":return Object(D.a)({},e,{authData:{auth:!1}});case"GET_PROFILE_SUCCESS":return Object(D.a)({},e,{userData:t.payload});case"CHANGE_PASSWORD_SUCCESS":case"RESET_PASSWORD_SUCCESS":return Object(D.a)({},e,{closeModal:!0});case"UPDATE_PROFILE_SUCCESS":return Object(D.a)({},e,{userData:Object(D.a)({},e.userData,{user:Object(D.a)({},e.userData.user,{name:t.payload.name,email:t.payload.email,language:t.payload.language})}),closeModal:!0});case"RESET_MODAL":return Object(D.a)({},e,{closeModal:!1});default:return e}},se=a(97),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{api:{}},t=(arguments.length>1?arguments[1]:void 0).type,a=/(.*)_(INIT|SUCCESS|FAIL)/.exec(t);if(!a)return e;var n=Object(se.a)(a,3),r=n[1],c=n[2];return Object(D.a)({},e,{api:Object(D.a)({},e.api,Object(O.a)({},r,"INIT"===c))})},le=Object(ne.c)({auth:oe,loading:ie}),ue=function(e,t){return"AUTH_LOGOUT_SUCCESS"!==t.type&&"AUTH_LOGOUT_FAIL"!==t.type||(localStorage.removeItem("authData"),localStorage.removeItem("userData"),e=void 0),le(e,t)},de=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,ne.d),me=Object(ne.e)(ue,de(Object(ne.a)(re.a))),pe=a(63),fe=function(e){var t=e.open,a=e.message,n=e.type;if(t){var r="".concat(a[0].toUpperCase()).concat(a.substr(1));"success"===n?pe.toast.success(r,{toastId:"".concat(Math.random())}):"error"===n&&pe.toast.error(r,{toastId:"".concat(Math.random())})}return c.a.createElement(pe.ToastContainer,{position:"bottom-right",autoClose:4e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0,pauseOnHover:!0})},he=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={message:"",type:""},a.componentWillMount=function(){n=M.interceptors.response.use(function(e){if(e.data&&e.data.isError&&e.data.message)throw a.addNotification(e.data.message,"error"),new Error(e.data.message);return e.data&&e.data.message&&a.addNotification(e.data.message,"success"),e},function(e){var t=!0;if(e&&e.request&&e.request.responseURL.includes("customer-phoenix-license/")&&e.request.responseURL.includes("/companies/")&&404===e.request.status&&(t=!1),e&&e.request&&e.request.responseURL.includes("/company/confirm-validation")&&504===e.request.status)throw new Error("504 Timeout");if(e.response&&e.response.data&&e.response.status&&t){var n=e.response.status,r=e.response.data;if(401===n&&r.data&&"SESSION_EXPIRED"===r.data.type)a.props.logout();else if(r.errorMessages&&Object.keys(r.errorMessages).length){var c=r.errorMessages[Object.keys(r.errorMessages)[0]];a.addNotification(c[0],"error")}else e.response&&r&&r.message&&a.addNotification(r.message,"error");throw e}})},a.componentWillUnmount=function(){M.interceptors.response.eject(n)},a.addNotification=function(e,t){a.setState({message:e,type:t}),setTimeout(function(){a.setState({message:"",type:""})})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(fe,{open:!!this.state.message,type:this.state.type,message:this.state.message}),this.props.children)}}]),t}(c.a.Component),ge=Object(i.b)(null,function(e){return{logout:function(){return e(Object(C.a)("AUTH_LOGOUT_SUCCESS"))}}})(he),ve=function(e){return c.a.createElement(i.a,{store:me},c.a.createElement(h,null,c.a.createElement(ge,null,c.a.createElement(l.a,null,c.a.createElement(ae,e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be,Oe=document.getElementById("root");be=ve,s.a.render(c.a.createElement(be,null),Oe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(358);t.a=function(){return r.a.createElement("div",{className:"spinner","data-testid":"spinner"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}},91:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(64),o=a(34);t.a=function(e){return r.a.createElement(c.a,{show:e.show,onHide:function(){},className:"".concat(e.className||""," fadeIn")},e.modalTitle?r.a.createElement(c.a.Header,{closeButton:!0,onHide:e.handleClose},r.a.createElement(c.a.Title,null,e.modalTitle,"\xa0",e.modalTitle2)):r.a.createElement(o.a,{className:"modal-close-btn",onClick:e.handleClose},r.a.createElement("span",null,"\xd7"),r.a.createElement("span",{className:"sr-only"},"Close")),r.a.createElement(c.a.Body,null,e.children))}},92:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n={required:function(e){return"".concat(e," is required!")},select:function(e){return"please select ".concat(e)},exactLength:function(e,t){return"".concat(e," must be having exact ").concat(t," characters!")},minLength:function(e,t){return"".concat(e," must be longer than ").concat(t," characters!")},minLengthArray:function(e,t){return"".concat(e," must contain minimum ").concat(t," items!")},maxLength:function(e,t){return"".concat(e," must be shorter than ").concat(t," characters!")},maxLengthArray:function(e,t){return"".concat(e," must contain maximum ").concat(t," items!")},minValue:function(e,t){return"".concat(e," must be greater than or equal to ").concat(t,"!")},maxValue:function(e,t){return"".concat(e," must be less than or equal to ").concat(t,"!")},validType:function(e,t){return"".concat(e," must be a valid ").concat(t,"!")},passwordMatchValidate:function(){return"Passwords do not match"},customPasswordMessage:function(){return"Password must contain 1 Small Character, 1 Upper character, 1 special character and min length should be 8."}},r={confirmDelete:function(e){return"Are you sure, you want to remove ".concat(e,"?")},confirmLogout:"Are you sure, you want to remove logout?"}}},[[167,2,3]]]);
//# sourceMappingURL=main.61580e65.chunk.js.map