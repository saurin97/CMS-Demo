(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{380:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("p",{className:"error"},e.children)}},381:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("option",{value:e.value},e.name)}},382:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=function(e){return n.createElement("div",{className:[e.className,"ibox-title"].join(" ")},n.createElement("h5",{"data-testid":"module-title"},e.title),n.createElement("div",{className:"justify-content-space-between"},e.children))},r=function(e){return n.createElement("div",{className:"table-responsive"},n.createElement("table",{className:["table table-bordered table-hover dataTables-example dataTable",e.className].join(" ")},e.children[0],e.children[1]))},o=function(e){return l.a.createElement("thead",{"data-testid":"".concat(e.dataTestId||"list-column-header")},e.children)},m=function(e){return l.a.createElement("tr",e,e.children)},i=t(381),s=function(e){var a=function(a){e.onInputChange&&e.onInputChange(a.target.value)};return e.header?l.a.createElement("th",{className:"text-capitalize cursor-pointer ".concat(e.className||""),onClick:e.onClick,colSpan:e.colSpan,rowSpan:e.rowSpan,style:e.style},(e.children,e.children)):e.input?l.a.createElement("td",{className:e.className,rowSpan:e.rowSpan,colSpan:e.colSpan,style:e.style},e.inputLabel?l.a.createElement("label",{className:"mb-3"},e.inputLabel):"",e.dropDownOptions?l.a.createElement("select",{placeholder:e.placeholder||"",className:"form-control",value:e.inputValue,onChange:a,disabled:e.disabled},e.dropDownOptions.map(function(e){return l.a.createElement(i.a,Object.assign({key:e.name},e))})):l.a.createElement("input",{value:e.inputValue||"",onChange:a,className:"form-control",placeholder:e.placeholder||""})):l.a.createElement("td",{className:[e.className,"Cell"].join(" "),colSpan:e.colSpan,rowSpan:e.rowSpan,style:e.style},e.children)},d=function(e){return l.a.createElement("tbody",{"data-testid":"".concat(e["data-testid"]||"list-rows")},e.children)},p=(t(34),t(12),t(391),function(e){return l.a.createElement("div",{className:"empty-data-wrapper"},e.text||"No data found")}),u=function(e){return l.a.createElement(m,null,l.a.createElement(s,{colSpan:e.colSpan},l.a.createElement(p,{text:e.text})))},f=t(88),y=function(e){return l.a.createElement(m,null,l.a.createElement(s,{colSpan:e.colSpan},l.a.createElement(f.a,null)))},E=t(18),b=t(19),h=t(21),g=t(20),v=t(22);l.a.Component;t.d(a,"h",function(){return c}),t.d(a,"e",function(){return r}),t.d(a,"c",function(){return o}),t.d(a,"d",function(){return m}),t.d(a,"b",function(){return s}),t.d(a,"a",function(){return d}),t.d(a,"f",function(){return u}),t.d(a,"g",function(){return y})},390:function(e,a,t){"use strict";t.d(a,"a",function(){return p}),t.d(a,"b",function(){return u});var n=t(0),l=t.n(n),c=t(424),r=t(412),o=t.n(r),m=t(386),i=t(380),s=t(381),d=(t(411),function(e){switch(e.type){case"textarea":return l.a.createElement(l.a.Fragment,null,e.showLabels&&e.config.label&&l.a.createElement("label",{className:"text-capitalize input-label-wrapper"},e.config.label),l.a.createElement("textarea",Object.assign({},e.field,{value:h(e.field.value),id:e.name,className:"".concat(e.className||""," form-control"),placeholder:e.placeholder,readOnly:e.readOnly,autoComplete:"".concat(e.autoComplete||"off")})),l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"text":case"email":case"password":case"number":return l.a.createElement(l.a.Fragment,null,e.showLabels&&e.config.label&&l.a.createElement("label",{className:"text-capitalize input-label-wrapper"},e.config.label),l.a.createElement("input",Object.assign({},e.field,{value:h(e.field.value),id:e.name,type:e.type,className:"".concat(e.className||""," form-control"),placeholder:e.placeholder,readOnly:e.readOnly,autoComplete:"".concat(e.autoComplete||"off")})),l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"radio":return l.a.createElement("div",{className:"radio-input-wrapper"},l.a.createElement("input",Object.assign({},e.field,{type:"radio",id:e.name+e.value,name:e.name,checked:e.field.value===e.value,value:e.value,onChange:function(){return e.setFieldValue(e.name,e.value)}})),l.a.createElement("label",{className:"pointer text--secondary font--medium ".concat(e.field.value===e.value?"checked":"","\n\t\t\t\t\t\t").concat(e.className?e.className:""),htmlFor:e.name+e.value},e.children),!e.config.hideErrorMessage&&l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"checkbox":return l.a.createElement("div",{className:"form-group d-flex align-items-baseline"},e.config.label&&l.a.createElement("label",{className:"text-capitalize col-xs-4 col-sm-2 control-label"},e.config.label),l.a.createElement("div",{className:"checkbox-wrapper col-xs-8 col-sm-10"},b(e.config).map(function(a){var t=(e.field.value||[]).map(function(e){return(e||"").toString()}).includes(a.value.toString());return l.a.createElement("div",{className:"checkbox-content",key:a.value},l.a.createElement("label",{className:"text-capitalize checkbox-label"},a.name,l.a.createElement("input",{placeholder:a.name,checked:t,onChange:function(a){e.setFieldValue(e.config.name,y(e.field,a))},type:"checkbox",name:a.name,value:a.value}),l.a.createElement("span",{className:"checkmark"})))})),l.a.createElement(m.a,{name:e.config.name,component:i.a}));case"dropdown":return l.a.createElement("div",{className:"row"},e.config.label&&l.a.createElement("label",{className:"text-capitalize col-sm-12 control-label"},e.config.label),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("select",{placeholder:e.config.placeHolder||e.config.label,value:e.field.value,onChange:function(a){(e.config.otherOptions||{}).isMultiSelect?e.setFieldValue(e.config.name,[].slice.call(a.target.selectedOptions).map(function(e){return e.value})):e.setFieldValue(e.config.name,a.target.value),e.onChange&&e.onChange(a)},name:e.config.name,className:"form-control",multiple:(e.config.otherOptions||{}).isMultiSelect},l.a.createElement("option",{value:""},"---SELECT---"),E(e.config).map(function(e){return l.a.createElement(s.a,{key:e.name,name:e.name,value:e.value})})),l.a.createElement(m.a,{name:e.config.name,component:i.a})));default:return l.a.createElement(l.a.Fragment,null)}}),p=function(e){return l.a.createElement(m.b,{name:e.name,render:function(a){var t=a.field;return l.a.createElement(d,Object.assign({},e,{field:t}))}})},u=function(e){Object(r.registerLocale)("en-gb",c.a);return l.a.createElement(m.b,{name:e.name,render:function(a){var t=a.field;return l.a.createElement(f,Object.assign({},e,{field:t}))}})},f=function(e){return l.a.createElement(l.a.Fragment,null,e.label&&l.a.createElement("label",{className:"text-capitalize input-label-wrapper"},e.label,e.asterisk&&l.a.createElement("span",{className:"required"},"*")),l.a.createElement(o.a,Object.assign({},e.field,{todayButton:"Today",inline:e.inline,className:"form-control custom-datepicker",autoComplete:"off",locale:"en-gb",placeholderText:e.placeHolder||"",selected:e.field.value&&new Date(e.field.value),onChange:e.onChange,showMonthDropdown:!0,showYearDropdown:!0,showTimeSelect:!!e.showTimeSelect,minDate:e.minDate,maxDate:e.maxDate,timeFormat:e.timeFormat||"p",timeIntervals:e.timeIntervals||15,dateFormat:e.dateFormat||"Pp",dropdownMode:"select",fixedHeight:!0})),l.a.createElement(m.a,{name:e.name,component:i.a}))},y=function(e,a){e.value||(e.value=[]);var t=e.value.indexOf(a.target.value.toString());return a.target.checked?e.value.push(a.target.value.toString()):-1!==t&&e.value.splice(t,1),e.value},E=function(e){return(e.otherOptions||{}).dropDownOptions||[]},b=function(e){return(e.otherOptions||{}).checkboxOptions||[]},h=function(e){return void 0===e||null===e?"":e}},391:function(e,a,t){},395:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(370),r=t(34),o=t(369),m=function(e){return l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},l.a.createElement("h2",{className:"text-capitalize","data-testid":"breadcrumb-title"},e.title),l.a.createElement("ol",{className:"breadcrumb text-capitalize"},e.data.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(o.a,{to:e.link},e.name))}),l.a.createElement("li",{className:"active"},l.a.createElement("strong",null,e.text||e.title)),"\xa0",e.linkText&&e.linkText.name&&l.a.createElement("a",{href:e.linkText.link,target:"blank"},"(",e.linkText.name,")")))};a.a=Object(c.a)(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"row wrapper border-bottom white-bg page-heading"},l.a.createElement(m,e),l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},e.provideBackBtn&&l.a.createElement("div",{className:"breadcrumb-btn"},l.a.createElement(r.a,{className:"back-btn width-100px",onClick:e.history.goBack,btnType:"info"},"Back")),e.children)))})},612:function(e,a,t){"use strict";t.r(a);var n=t(18),l=t(19),c=t(21),r=t(20),o=t(22),m=t(0),i=t.n(m),s=t(137),d=t(382),p=t(12),u=t(395),f=t(386),y=t(396),E=t(34),b=t(380),h=t(390),g=t(88),v=t(92),N=y.object().shape({companyName:y.string().required(v.a.required("companyName")).strict(!0),companyOccupation:y.string().required(v.a.required("companyOccupation")).strict(!0),companyAdd1:y.string().required(v.a.required("companyAdd1")).strict(!0),UKAddress1:y.string().required(v.a.required("UKAddress1")).strict(!0),companyAdd2:y.string().required(v.a.required("companyAdd2")).strict(!0),UKAddress2:y.string().required(v.a.required("UKAddress2")).strict(!0),companyAdd3:y.string().required(v.a.required("companyAdd3")).strict(!0),UKAddress3:y.string().required(v.a.required("UKAddress3")).strict(!0),companyAdd4:y.string().required(v.a.required("companyAdd4")).strict(!0),UKAddress4:y.string().required(v.a.required("UKAddress4")).strict(!0)}),x=function(e){return i.a.createElement(f.c,{initialValues:{companyName:"",companyOccupation:"",companyAdd1:"",UKAddress1:"",companyAdd2:"",UKAddress2:"",companyAdd3:"",UKAddress3:"",companyAdd4:"",UKAddress4:""},onSubmit:function(a){return e.handleSubmit(a)},validationSchema:N},function(a){var t=a.handleSubmit,n=a.setFieldValue;return a.values,i.a.createElement("form",{onSubmit:t,className:"media-form"},i.a.createElement("fieldset",{className:"row"},e.loading&&i.a.createElement("div",{className:"form-loading d-flex justify-content-center align-items--center"},i.a.createElement(g.a,null)),A.map(function(e){return i.a.createElement("div",{className:"form-group col-xs-12 col-sm-12 col-md-6",key:e.key},i.a.createElement(h.a,{type:e.type,name:e.key,placeholder:e.placeHolder,showLabels:!0,setFieldValue:n,config:{type:e.type,label:e.placeHolder,name:e.key}}),i.a.createElement(f.a,{name:"mediaContent.".concat(e.key),component:b.a}))}),i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-5"},i.a.createElement(E.a,{className:"",type:"submit",disabled:e.loading,btnType:"primary"},"Add Company"),i.a.createElement(E.a,{className:"ml-20",type:"button",disabled:e.loading,btnType:"danger",onClick:e.handelReset},"Cancel"))))})},A=[{key:"companyName",type:"text",placeHolder:"Company Name"},{key:"companyOccupation",type:"text",placeHolder:"Company Occupation"},{key:"companyAdd1",type:"text",placeHolder:"Company Address 1"},{key:"UKAddress1",type:"text",placeHolder:"UK Address 1"},{key:"companyAdd2",type:"text",placeHolder:"Company Address 2"},{key:"UKAddress2",type:"text",placeHolder:"UK Address 2"},{key:"companyAdd3",type:"text",placeHolder:"Company Address 3"},{key:"UKAddress3",type:"text",placeHolder:"UK Address 3"},{key:"companyAdd4",type:"text",placeHolder:"Company Address 4"},{key:"UKAddress4",type:"text",placeHolder:"UK Address 4"}],C=t(91),k=function(e){return i.a.createElement("div",{className:"row"},i.a.createElement("p",null,"Company Name -  ",i.a.createElement("b",null,e.companyDetail.companyName)),i.a.createElement("p",null,"Company Occupation -  ",i.a.createElement("b",null,e.companyDetail.companyOccupation)),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"Company Address 1 - "),i.a.createElement("p",null,e.companyDetail.companyAdd1)),i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"UK Address 1 - "),i.a.createElement("p",null,e.companyDetail.UKAddress1))),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"Company Address 2 - "),i.a.createElement("p",null,e.companyDetail.companyAdd2)),i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"UK Address 2 - "),i.a.createElement("p",null,e.companyDetail.UKAddress2))),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"Company Address 3 - "),i.a.createElement("p",null,e.companyDetail.companyAdd3)),i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"UK Address 3 - "),i.a.createElement("p",null,e.companyDetail.UKAddress3))),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"Company Address 4 - "),i.a.createElement("p",null,e.companyDetail.companyAdd4)),i.a.createElement("div",{className:"d-flex"},i.a.createElement("p",{className:"font-bold"},"UK Address 4 - "),i.a.createElement("p",null,e.companyDetail.UKAddress4))))},w=function(e){return i.a.createElement(d.e,null,i.a.createElement(d.c,null,i.a.createElement(d.d,null,i.a.createElement(d.b,{style:{width:"25px"},header:!0},"No."),i.a.createElement(d.b,{header:!0},"Company Name"),i.a.createElement(d.b,{header:!0},"companyOccupation"),i.a.createElement(d.b,{className:"text-center",style:{width:"200px"},header:!0},"Actions"))),i.a.createElement(d.a,null,e.loading&&i.a.createElement(d.g,{colSpan:4}),!e.loading&&!e.companyDetailList.length&&i.a.createElement(d.f,{colSpan:4,text:"No Company content found"}),!e.loading&&e.companyDetailList.length>0&&e.companyDetailList.map(function(a,t){return i.a.createElement(d.d,{key:t},i.a.createElement(d.b,null,t+1),i.a.createElement(d.b,null,a.companyName),i.a.createElement(d.b,null,a.companyOccupation),i.a.createElement(d.b,{className:"text-center"},i.a.createElement(E.a,{abbr:"View",className:"action-btn",btnType:"primary",onClick:function(){return e.changeActionType("view","".concat(t))}},i.a.createElement("i",{className:"fa fa-eye"}))))})))},O=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,o=new Array(l),m=0;m<l;m++)o[m]=arguments[m];return(t=Object(c.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(o)))).state={loading:!1,addDetail:!1,companyDetailList:[],isModalOpen:!1,actionType:"",selectedCompany:""},t.handleSubmit=function(e){var a=t.state.companyDetailList;a.push(e),t.setState({companyDetailList:a,addDetail:!1})},t.changeActionType=function(e,a){t.setState({isModalOpen:!0,actionType:e,selectedCompany:a})},t.handleCloseModel=function(){return t.setState({isModalOpen:!1,actionType:""})},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.addDetail,l=a.companyDetailList,c=a.isModalOpen,r=a.actionType,o=a.selectedCompany;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{data:p.b,title:"".concat(n?"Add Company":"Company Detail List")},!n&&i.a.createElement("div",{className:"breadcrumb-btn"},i.a.createElement(E.a,{className:"mr-2",btnType:"primary",onClick:function(){return e.setState({addDetail:!0})}},"Add Company"))),i.a.createElement("div",{className:"row mt-3"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"ibox float-e-margins"},i.a.createElement(d.h,{title:"".concat(n?"Add Company":"Company Details"),className:"text-capitalize"}),i.a.createElement("div",{className:"ibox-content"},n&&i.a.createElement(x,{loading:t,handleSubmit:this.handleSubmit,handelReset:function(){return e.setState({addDetail:!1})}}),!n&&i.a.createElement(w,{companyDetailList:l,loading:t,changeActionType:this.changeActionType}),"view"===r&&c&&i.a.createElement(C.a,{show:!0,modalTitle:"Company Detail",handleClose:this.handleCloseModel},i.a.createElement(k,{companyDetail:l[o]})))))))}}]),a}(m.Component);a.default=Object(s.a)(O)}}]);
//# sourceMappingURL=4.c87f4f69.chunk.js.map