(this["webpackJsonpreact-state-form"]=this["webpackJsonpreact-state-form"]||[]).push([[0],{198:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(35),c=n.n(a),i=(n(95),n(79)),u=n(80),s=n(87),m=n(81),p=n(88),l=n(13),f=n(201),b=n(200),O=n(83),h=function(e){return e?{name:e.get("name")||"",phone:e.getIn(["contactDetails","phone"]),email:e.getIn(["contactDetails","email"])}:{}},j=function(e){return{name:e.name,contactDetails:{phone:e.phone,email:e.email}}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.load)("123")}},{key:"render",value:function(){var e=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:e,className:"personForm"},o.a.createElement(f.a,{className:"personForm-input",name:"name",component:"input"}),o.a.createElement(f.a,{className:"personForm-input",name:"phone",component:"input"}),o.a.createElement(f.a,{className:"personForm-input",name:"email",component:"input"}),o.a.createElement("button",{className:"personForm-button"},"Submit"))}}]),t}(r.Component),y=Object(l.b)((function(e,t){return{initialValues:(n="123",function(e){return h(function(e){return function(t){return t.getIn(["entities","persons",e])}}(n)(e))})(e)};var n}),(function(e,t){return{load:function(t){return e(function(e){return{type:"LOAD_USER",id:e}}(t))},onSubmit:function(t){return e((n=t,function(e){Promise.resolve().then((function(){e({type:"SAVE_USER",data:j(d({},n,{name:n.name+" SAVED"}))})}))}));var n}}}))(Object(b.a)({form:"PersonForm",getFormState:function(e){return e.get("form")},enableReinitialize:!0,destroyOnUnmount:!0})(v)),E=n(5),S=n(85),D=n(202),P=n(16),w=Object(P.fromJS)({persons:[]}),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER":return Object(P.fromJS)({persons:{123:{name:"Demo User",contactDetails:{phone:"+42 141 512 52",email:"goran.bregovic@google.com"}}}});case"SAVE_USER":return Object(P.fromJS)({persons:{123:t.data}});default:return e}},A=Object(S.combineReducers)({entities:F,form:D.a}),N=n(86);n(198);var R=function(){var e=Object(E.c)(A,Object(E.a)(N.a));return o.a.createElement(l.a,{store:e},o.a.createElement("div",{className:"App"},o.a.createElement(y,null)))};c.a.render(o.a.createElement(R,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n(199)},95:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.8c58c8cf.chunk.js.map