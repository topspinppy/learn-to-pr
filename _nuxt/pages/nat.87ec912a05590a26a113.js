webpackJsonp([5],{"3r5t":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"h1[data-v-0ec5b774],h2[data-v-0ec5b774]{font-weight:400}ul[data-v-0ec5b774]{list-style-type:none;padding:0}li[data-v-0ec5b774]{display:inline-block;margin:0 10px}a[data-v-0ec5b774]{color:#42b983}",""])},CY9N:function(t,e,n){"use strict";function a(t){n("ntbk")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("xY4Z"),u=n("RAkI"),s=n("VU/8"),r=a,l=s(i.a,u.a,!1,r,"data-v-0ec5b774",null);e.default=l.exports},RAkI:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.count))]),n("input",{attrs:{type:"button",name:"",value:"++"},on:{click:t.plus}}),n("h1",[t._v(t._s(t.realtimeplus))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num1,expression:"num1"}],attrs:{type:"number",name:"",value:""},domProps:{value:t.num1},on:{input:function(e){e.target.composing||(t.num1=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num2,expression:"num2"}],attrs:{type:"number",name:"",value:""},domProps:{value:t.num2},on:{input:function(e){e.target.composing||(t.num2=e.target.value)}}}),n("br"),n("br"),t._v("\n  Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],attrs:{type:"text"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}}),n("br"),t._v("\n  Email: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEmail,expression:"inputEmail"}],attrs:{type:"text"},domProps:{value:t.inputEmail},on:{input:function(e){e.target.composing||(t.inputEmail=e.target.value)}}}),n("br"),n("button",{on:{click:t.addUser}},[t._v("Add")]),n("hr"),n("table",[t._m(0),t._l(t.users,function(e,a){return n("tr",[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.email))]),n("td",[n("button",{on:{click:function(e){t.deleteUser(a)}}},[t._v("Delete")])])])})],2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("Name")]),n("td",[t._v("email")]),n("td")])}],u={render:a,staticRenderFns:i};e.a=u},ntbk:function(t,e,n){var a=n("3r5t");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("b66e48aa",a,!0)},xY4Z:function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{count:0,num1:0,num2:0,patt:/.+@\w+\..+/g,inputName:"",inputEmail:"",warning:"",users:[{name:"nati",email:"na@sellsuki.com"},{name:"somchai",email:"somchai@kmutnb.ac.th"}]}},methods:{plus:function(){this.count++},addUser:function(){if(""!==this.inputName&&""!==this.inputEmail){/.+@\w+\..+/g.test(this.inputEmail)?(this.warning="",this.users.push({name:this.inputName,email:this.inputEmail})):alert("Wrong email !!\nPlaese enter a valid email address.")}},deleteUser:function(t){this.users.splice(t,1)}},computed:{realtimeplus:function(){return 1*this.num1+1*this.num2}}}}});
//# sourceMappingURL=nat.87ec912a05590a26a113.js.map