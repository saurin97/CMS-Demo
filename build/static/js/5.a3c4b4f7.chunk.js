(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("p",{className:"error"},e.children)}},381:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("option",{value:e.value},e.name)}},382:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=function(e){return n.createElement("div",{className:[e.className,"ibox-title"].join(" ")},n.createElement("h5",{"data-testid":"module-title"},e.title),n.createElement("div",{className:"justify-content-space-between"},e.children))},r=function(e){return n.createElement("div",{className:"table-responsive"},n.createElement("table",{className:["table table-bordered table-hover dataTables-example dataTable",e.className].join(" ")},e.children[0],e.children[1]))},o=function(e){return l.a.createElement("thead",{"data-testid":"".concat(e.dataTestId||"list-column-header")},e.children)},m=function(e){return l.a.createElement("tr",e,e.children)},i=t(381),s=function(e){var a=function(a){e.onInputChange&&e.onInputChange(a.target.value)};return e.header?l.a.createElement("th",{className:"text-capitalize cursor-pointer ".concat(e.className||""),onClick:e.onClick,colSpan:e.colSpan,rowSpan:e.rowSpan,style:e.style},(e.children,e.children)):e.input?l.a.createElement("td",{className:e.className,rowSpan:e.rowSpan,colSpan:e.colSpan,style:e.style},e.inputLabel?l.a.createElement("label",{className:"mb-3"},e.inputLabel):"",e.dropDownOptions?l.a.createElement("select",{placeholder:e.placeholder||"",className:"form-control",value:e.inputValue,onChange:a,disabled:e.disabled},e.dropDownOptions.map(function(e){return l.a.createElement(i.a,Object.assign({key:e.name},e))})):l.a.createElement("input",{value:e.inputValue||"",onChange:a,className:"form-control",placeholder:e.placeholder||""})):l.a.createElement("td",{className:[e.className,"Cell"].join(" "),colSpan:e.colSpan,rowSpan:e.rowSpan,style:e.style},e.children)},u=function(e){return l.a.createElement("tbody",{"data-testid":"".concat(e["data-testid"]||"list-rows")},e.children)},d=(t(34),t(12),t(391),function(e){return l.a.createElement("div",{className:"empty-data-wrapper"},e.text||"No data found")}),p=function(e){return l.a.createElement(m,null,l.a.createElement(s,{colSpan:e.colSpan},l.a.createElement(d,{text:e.text})))},E=t(88),b=function(e){return l.a.createElement(m,null,l.a.createElement(s,{colSpan:e.colSpan},l.a.createElement(E.a,null)))},f=t(18),h=t(19),N=t(21),g=t(20),v=t(22);l.a.Component;t.d(a,"h",function(){return c}),t.d(a,"e",function(){return r}),t.d(a,"c",function(){return o}),t.d(a,"d",function(){return m}),t.d(a,"b",function(){return s}),t.d(a,"a",function(){return u}),t.d(a,"f",function(){return p}),t.d(a,"g",function(){return b})},390:function(e,a,t){"use strict";t.d(a,"a",function(){return d}),t.d(a,"b",function(){return p});var n=t(0),l=t.n(n),c=t(424),r=t(412),o=t.n(r),m=t(386),i=t(380),s=t(381),u=(t(411),function(e){switch(e.type){case"textarea":return l.a.createElement(l.a.Fragment,null,e.showLabels&&e.config.label&&l.a.createElement("label",{className:"text-capitalize input-label-wrapper"},e.config.label),l.a.createElement("textarea",Object.assign({},e.field,{value:N(e.field.value),id:e.name,className:"".concat(e.className||""," form-control"),placeholder:e.placeholder,readOnly:e.readOnly,autoComplete:"".concat(e.autoComplete||"off")})),l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"text":case"email":case"password":case"number":return l.a.createElement(l.a.Fragment,null,e.showLabels&&e.config.label&&l.a.createElement("label",{className:"text-capitalize input-label-wrapper"},e.config.label),l.a.createElement("input",Object.assign({},e.field,{value:N(e.field.value),id:e.name,type:e.type,className:"".concat(e.className||""," form-control"),placeholder:e.placeholder,readOnly:e.readOnly,autoComplete:"".concat(e.autoComplete||"off")})),l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"radio":return l.a.createElement("div",{className:"radio-input-wrapper"},l.a.createElement("input",Object.assign({},e.field,{type:"radio",id:e.name+e.value,name:e.name,checked:e.field.value===e.value,value:e.value,onChange:function(){return e.setFieldValue(e.name,e.value)}})),l.a.createElement("label",{className:"pointer text--secondary font--medium ".concat(e.field.value===e.value?"checked":"","\n\t\t\t\t\t\t").concat(e.className?e.className:""),htmlFor:e.name+e.value},e.children),!e.config.hideErrorMessage&&l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"checkbox":return l.a.createElement("div",{className:"form-group d-flex align-items-baseline"},e.config.label&&l.a.createElement("label",{className:"text-capitalize col-xs-4 col-sm-2 control-label"},e.config.label),l.a.createElement("div",{className:"checkbox-wrapper col-xs-8 col-sm-10"},h(e.config).map(function(a){var t=(e.field.value||[]).map(function(e){return(e||"").toString()}).includes(a.value.toString());return l.a.createElement("div",{className:"checkbox-content",key:a.value},l.a.createElement("label",{className:"text-capitalize checkbox-label"},a.name,l.a.createElement("input",{placeholder:a.name,checked:t,onChange:function(a){e.setFieldValue(e.config.name,b(e.field,a))},type:"checkbox",name:a.name,value:a.value}),l.a.createElement("span",{className:"checkmark"})))})),l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"dropdown":return l.a.createElement("div",{className:"row"},e.config.label&&l.a.createElement("label",{className:"text-capitalize col-sm-12 control-label"},e.config.label),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("select",{placeholder:e.config.placeHolder||e.config.label,value:e.field.value,onChange:function(a){(e.config.otherOptions||{}).isMultiSelect?e.setFieldValue(e.config.name,[].slice.call(a.target.selectedOptions).map(function(e){return e.value})):e.setFieldValue(e.config.name,a.target.value),e.onChange&&e.onChange(a)},name:e.config.name,className:"form-control",multiple:(e.config.otherOptions||{}).isMultiSelect},l.a.createElement("option",{value:""},"---SELECT---"),f(e.config).map(function(e){return l.a.createElement(s.a,{key:e.name,name:e.name,value:e.value})})),l.a.createElement(m.a,{name:e.config.name,component:i.a})));default:return l.a.createElement(l.a.Fragment,null)}}),d=function(e){return l.a.createElement(m.b,{name:e.name,render:function(a){var t=a.field;return l.a.createElement(u,Object.assign({},e,{field:t}))}})},p=function(e){Object(r.registerLocale)("en-gb",c.a);return l.a.createElement(m.b,{name:e.name,render:function(a){var t=a.field;return l.a.createElement(E,Object.assign({},e,{field:t}))}})},E=function(e){return l.a.createElement(l.a.Fragment,null,e.label&&l.a.createElement("label",{className:"text-capitalize input-label-wrapper"},e.label,e.asterisk&&l.a.createElement("span",{className:"required"},"*")),l.a.createElement(o.a,Object.assign({},e.field,{todayButton:"Today",inline:e.inline,className:"form-control custom-datepicker",autoComplete:"off",locale:"en-gb",placeholderText:e.placeHolder||"",selected:e.field.value&&new Date(e.field.value),onChange:e.onChange,showMonthDropdown:!0,showYearDropdown:!0,showTimeSelect:!!e.showTimeSelect,minDate:e.minDate,maxDate:e.maxDate,timeFormat:e.timeFormat||"p",timeIntervals:e.timeIntervals||15,dateFormat:e.dateFormat||"Pp",dropdownMode:"select",fixedHeight:!0})),l.a.createElement(m.a,{name:e.name,component:i.a}))},b=function(e,a){e.value||(e.value=[]);var t=e.value.indexOf(a.target.value.toString());return a.target.checked?e.value.push(a.target.value.toString()):-1!==t&&e.value.splice(t,1),e.value},f=function(e){return(e.otherOptions||{}).dropDownOptions||[]},h=function(e){return(e.otherOptions||{}).checkboxOptions||[]},N=function(e){return void 0===e||null===e?"":e}},391:function(e,a,t){},395:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(370),r=t(34),o=t(369),m=function(e){return l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},l.a.createElement("h2",{className:"text-capitalize","data-testid":"breadcrumb-title"},e.title),l.a.createElement("ol",{className:"breadcrumb text-capitalize"},e.data.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(o.a,{to:e.link},e.name))}),l.a.createElement("li",{className:"active"},l.a.createElement("strong",null,e.text||e.title)),"\xa0",e.linkText&&e.linkText.name&&l.a.createElement("a",{href:e.linkText.link,target:"blank"},"(",e.linkText.name,")")))};a.a=Object(c.a)(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"row wrapper border-bottom white-bg page-heading"},l.a.createElement(m,e),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},e.provideBackBtn&&l.a.createElement("div",{className:"breadcrumb-btn"},l.a.createElement(r.a,{className:"back-btn width-100px",onClick:e.history.goBack,btnType:"info"},"Back")),e.children)))})},611:function(e,a,t){"use strict";t.r(a);var n=t(18),l=t(19),c=t(21),r=t(20),o=t(22),m=t(0),i=t.n(m),s=t(137),u=t(382),d=t(12),p=t(395),E=t(386),b=t(396),f=t(34),h=t(380),N=t(390),g=t(88),v=t(92),y=[{name:"ENERGY",value:"ENERGY"},{name:"QUESTION",value:"QUESTION"}],O=b.object().shape({companyId:b.string().required(v.a.required("companyId")).strict(!0),contactTitle:b.string().required(v.a.required("contactTitle")).strict(!0),jobTitle:b.string().required(v.a.required("jobTitle")).strict(!0),firstName:b.string().required(v.a.required("firstName")).strict(!0),lastName:b.string().required(v.a.required("lastName")).strict(!0),phoneNumber:b.number().required(v.a.required("phoneNumber")).strict(!0),contactMobile:b.number().required(v.a.required("contactMobile")).strict(!0),NFDUserId:b.string().required(v.a.required("NFDUserId")).strict(!0),NFDUserPassword:b.string().required(v.a.required("NFDUserPassword")).strict(!0).matches(/(?=.*\d)(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/,v.a.customPasswordMessage),emailAddress:b.string().email("Invalid email").required(v.a.required("Email Address"))}),x=function(e){return i.a.createElement(E.c,{initialValues:{companyId:"",contactTitle:"",jobTitle:"",firstName:"",lastName:"",phoneNumber:"",contactMobile:"",NFDUserId:"",NFDUserPassword:"",emailAddress:"",optOutOfPostalContact:!1,optOutOfPhoneFax:!1,optOutOfEmailsSMS:!1,consentToUpdateNFD:!1},onSubmit:function(a){return e.handleSubmit(a)},validationSchema:O},function(a){var t=a.handleSubmit,n=a.setFieldValue,l=a.values;return i.a.createElement("form",{onSubmit:t,className:"media-form"},i.a.createElement("fieldset",{className:"row"},e.loading&&i.a.createElement("div",{className:"form-loading d-flex justify-content-center align-items--center"},i.a.createElement(g.a,null)),i.a.createElement("div",{className:"form-group col-xs-12 col-sm-12 col-md-6"},i.a.createElement(N.a,{type:"dropdown",name:"companyId",placeholder:"Company ID",showLabels:!0,setFieldValue:n,config:{type:"dropdown",label:"Company ID",name:"companyId",otherOptions:{dropDownOptions:y}}})),w.map(function(e){return i.a.createElement("div",{className:"form-group col-xs-12 col-sm-12 col-md-6",key:e.key},i.a.createElement(N.a,{type:e.type,name:e.key,placeholder:e.placeHolder,showLabels:!0,setFieldValue:n,config:{type:e.type,label:e.placeHolder,name:e.key}}),i.a.createElement(E.a,{name:"mediaContent.".concat(e.key),component:h.a}))}),i.a.createElement("div",{className:"form-group col-xs-12 col-sm-6 col-md-3"},i.a.createElement("div",{className:"checkbox-content"},i.a.createElement("label",{className:"text-capitalize input-label-wrapper d-block   full-width"},"optOutOfPostalContact"),i.a.createElement("label",{className:"switch no-margins"},i.a.createElement("input",{placeholder:"switch",type:"checkbox",onChange:function(){return n("optOutOfPostalContact",!l.optOutOfPostalContact)}}),i.a.createElement("small",null))),i.a.createElement(E.a,{name:"mediaContent.optOutOfPostalContact",component:h.a})),i.a.createElement("div",{className:"form-group col-xs-12 col-sm-6 col-md-3"},i.a.createElement("div",{className:"checkbox-content"},i.a.createElement("label",{className:"text-capitalize input-label-wrapper d-block   full-width"},"optOutOfPhoneFax"),i.a.createElement("label",{className:"switch no-margins"},i.a.createElement("input",{placeholder:"switch",type:"checkbox",onChange:function(){return n("optOutOfPhoneFax",!l.optOutOfPhoneFax)}}),i.a.createElement("small",null))),i.a.createElement(E.a,{name:"mediaContent.optOutOfPhoneFax",component:h.a})),i.a.createElement("div",{className:"form-group col-xs-12 col-sm-6 col-md-3"},i.a.createElement("div",{className:"checkbox-content"},i.a.createElement("label",{className:"text-capitalize input-label-wrapper d-block   full-width"},"optOutOfEmailsSMS"),i.a.createElement("label",{className:"switch no-margins"},i.a.createElement("input",{placeholder:"switch",type:"checkbox",onChange:function(){return n("optOutOfEmailsSMS",!l.optOutOfEmailsSMS)}}),i.a.createElement("small",null))),i.a.createElement(E.a,{name:"mediaContent.optOutOfEmailsSMS",component:h.a})),i.a.createElement("div",{className:"form-group col-xs-12 col-sm-6 col-md-3"},i.a.createElement("div",{className:"checkbox-content"},i.a.createElement("label",{className:"text-capitalize input-label-wrapper d-block   full-width"},"consentToUpdateNFD"),i.a.createElement("label",{className:"switch no-margins"},i.a.createElement("input",{placeholder:"switch",type:"checkbox",onChange:function(){return n("consentToUpdateNFD",!l.consentToUpdateNFD)}}),i.a.createElement("small",null))),i.a.createElement(E.a,{name:"mediaContent.consentToUpdateNFD",component:h.a})),i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-5"},i.a.createElement(f.a,{className:"",type:"submit",disabled:e.loading,btnType:"primary"},"Add Customer"),i.a.createElement(f.a,{className:"ml-20",type:"button",disabled:e.loading,btnType:"danger",onClick:e.handelReset},"Cancel"))))})},w=[{key:"contactTitle",type:"text",placeHolder:"Contact Title"},{key:"jobTitle",type:"text",placeHolder:"Job Title"},{key:"firstName",type:"text",placeHolder:"First Name"},{key:"lastName",type:"text",placeHolder:"Last Name"},{key:"phoneNumber",type:"number",placeHolder:"Phone Number"},{key:"contactMobile",type:"number",placeHolder:"Contact Mobile"},{key:"NFDUserId",type:"text",placeHolder:"NFD User ID"},{key:"NFDUserPassword",type:"text",placeHolder:"NFD User Password"},{key:"emailAddress",type:"text",placeHolder:"Email Address"}],D=function(e){return i.a.createElement(u.e,null,i.a.createElement(u.c,null,i.a.createElement(u.d,null,i.a.createElement(u.b,{style:{width:"25px"},header:!0},"No."),i.a.createElement(u.b,{header:!0},"Company ID"),i.a.createElement(u.b,{header:!0},"Name"),i.a.createElement(u.b,{header:!0},"Job title"),i.a.createElement(u.b,{className:"text-center",style:{width:"200px"},header:!0},"Actions"))),i.a.createElement(u.a,null,e.loading&&i.a.createElement(u.g,{colSpan:5}),!e.loading&&!e.customerDetailList.length&&i.a.createElement(u.f,{colSpan:5,text:"No Customer content found"}),!e.loading&&e.customerDetailList.length>0&&e.customerDetailList.map(function(a,t){return i.a.createElement(u.d,{key:t},i.a.createElement(u.b,null,t+1),i.a.createElement(u.b,null,a.companyId),i.a.createElement(u.b,null,"".concat(a.firstName," ").concat(a.lastName)),i.a.createElement(u.b,null,a.jobTitle),i.a.createElement(u.b,{className:"text-center"},i.a.createElement(f.a,{abbr:"View",className:"action-btn",btnType:"primary",onClick:function(){return e.changeActionType("view","".concat(t))}},i.a.createElement("i",{className:"fa fa-eye"}))))})))},k=t(91),C=function(e){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},i.a.createElement("p",null,"Company ID -  ",i.a.createElement("b",null,e.customerDetail.companyId)),i.a.createElement("p",null,"First Name -  ",i.a.createElement("b",null,e.customerDetail.firstName)),i.a.createElement("p",null,"Last Name -  ",i.a.createElement("b",null,e.customerDetail.lastName)),i.a.createElement("p",null,"E-mail Address -  ",i.a.createElement("b",null,e.customerDetail.emailAddress)),i.a.createElement("p",null,"Job Title -  ",i.a.createElement("b",null,e.customerDetail.jobTitle)),i.a.createElement("p",null,"Contact Title -  ",i.a.createElement("b",null,e.customerDetail.contactTitle)),i.a.createElement("p",null,"Password -  ",i.a.createElement("b",null,e.customerDetail.NFDUserPassword))),i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},i.a.createElement("p",null,"NFD User ID -  ",i.a.createElement("b",null,e.customerDetail.NFDUserId)),i.a.createElement("p",null,"Phone Number -  ",i.a.createElement("b",null,e.customerDetail.phoneNumber)),i.a.createElement("p",null,"Mobile -  ",i.a.createElement("b",null,e.customerDetail.contactMobile)),i.a.createElement("p",null,"consentToUpdateNFD -  ",i.a.createElement("b",{className:"badge badge-".concat(e.customerDetail.consentToUpdateNFD?"success":"danger")},e.customerDetail.consentToUpdateNFD?"YES":"NO")),i.a.createElement("p",null,"optOutOfEmailsSMS -  ",i.a.createElement("b",{className:"badge badge-".concat(e.customerDetail.optOutOfEmailsSMS?"success":"danger")},e.customerDetail.optOutOfEmailsSMS?"YES":"NO")),i.a.createElement("p",null,"optOutOfPhoneFax -  ",i.a.createElement("b",{className:"badge badge-".concat(e.customerDetail.optOutOfPhoneFax?"success":"danger")},e.customerDetail.optOutOfPhoneFax?"YES":"NO")),i.a.createElement("p",null,"optOutOfPostalContact -  ",i.a.createElement("b",{className:"badge badge-".concat(e.customerDetail.optOutOfPostalContact?"success":"danger")},e.customerDetail.optOutOfPostalContact?"YES":"NO"))))},S=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,o=new Array(l),m=0;m<l;m++)o[m]=arguments[m];return(t=Object(c.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(o)))).state={loading:!1,addDetail:!1,customerDetailList:[],isModalOpen:!1,actionType:"",selectedCustomer:""},t.handleSubmit=function(e){var a=t.state.customerDetailList;a.push(e),t.setState({customerDetailList:a,addDetail:!1})},t.changeActionType=function(e,a){t.setState({isModalOpen:!0,actionType:e,selectedCustomer:a})},t.handleCloseModel=function(){return t.setState({isModalOpen:!1,actionType:""})},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.addDetail,n=a.customerDetailList,l=a.loading,c=a.actionType,r=a.isModalOpen,o=a.selectedCustomer;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{data:d.b,title:"".concat(t?"Add Customer":"Customer Detail List")},!t&&i.a.createElement("div",{className:"breadcrumb-btn"},i.a.createElement(f.a,{className:"mr-2",btnType:"primary",onClick:function(){return e.setState({addDetail:!0})}},"Add Customer"))),i.a.createElement("div",{className:"row mt-3"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"ibox float-e-margins"},i.a.createElement(u.h,{title:"".concat(t?"Add Customer":"Customer Details"),className:"text-capitalize"}),i.a.createElement("div",{className:"ibox-content"},t&&i.a.createElement(x,{loading:this.state.loading,handleSubmit:this.handleSubmit,handelReset:function(){return e.setState({addDetail:!1})}}),!t&&i.a.createElement(D,{customerDetailList:n,loading:l,changeActionType:this.changeActionType}),"view"===c&&r&&i.a.createElement(k.a,{show:!0,modalTitle:"Customer Detail",handleClose:this.handleCloseModel},i.a.createElement(C,{customerDetail:n[o]})))))))}}]),a}(m.Component);a.default=Object(s.a)(S)}}]);
//# sourceMappingURL=5.a3c4b4f7.chunk.js.map