webpackJsonp([8],{VKKr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("bZ8Z"),o=r("caxk"),a=r("XyMi"),n=r.i(a.a)(s.a,o.a,o.b,!1,null,null,null);e.default=n.exports},bZ8Z:function(t,e,r){"use strict";var s=r("NYxO"),o=r("lHQJ"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t};e.a={name:"RwvSettings",computed:a({},r.i(s.a)(["currentUser"])),methods:{updateSettings:function(){var t=this;this.$store.dispatch(o.t,this.currentUser).then(function(){t.$router.push({name:"home"})})},logout:function(){var t=this;this.$store.dispatch(o.r).then(function(){t.$router.push({name:"home"})})}}}},caxk:function(t,e,r){"use strict";r.d(e,"a",function(){return s}),r.d(e,"b",function(){return o});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("Your Settings")]),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.updateSettings()}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.image,expression:"currentUser.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:t.currentUser.image},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"image",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.username,expression:"currentUser.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your username"},domProps:{value:t.currentUser.username},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"username",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.bio,expression:"currentUser.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:t.currentUser.bio},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"bio",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.email,expression:"currentUser.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.currentUser.email},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"email",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.password,expression:"currentUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.currentUser.password},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"password",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n              Update Settings\n            ")])])]),t._v(" "),r("hr"),t._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("\n          Or click here to logout.\n        ")])])])])])},o=[]}});
//# sourceMappingURL=8.f7086e0cd9f3e8ade960.js.map