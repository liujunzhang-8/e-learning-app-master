(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"2a9e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"0df6"))},r=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"2fc4"))},u={components:{uniStatusBar:i,uniIcon:r},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:""},shadow:{type:String,default:""}},computed:{isFixed:function(){return"true"===String(this.fixed)},insertStatusBar:function(){switch(String(this.statusBar)){case"true":return!0;case"false":return!1;default:return this.isFixed}},hasShadow:function(){var t=this.backgroundColor;switch(String(this.shadow)){case"true":return!0;case"false":return!1;default:return"transparent"!==t&&t.indexOf("rgba")<0}}},methods:{onClickLeft:function(){this.$emit("clickLeft"),this.$emit("click-left")},onClickRight:function(){this.$emit("clickRight"),this.$emit("click-right")}}};n.default=u},"85c3":function(t,n,e){"use strict";var i=e("a7b9"),r=e.n(i);r.a},"98f3":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},a7b9:function(t,n,e){},ab37:function(t,n,e){"use strict";e.r(n);var i=e("2a9e"),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=r.a},cb34:function(t,n,e){"use strict";e.r(n);var i=e("98f3"),r=e("ab37");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("85c3");var a=e("2877"),c=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("cb34"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);                