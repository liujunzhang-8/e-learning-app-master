(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab/wuc-tab"],{"290c":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},"4a6e":function(t,e,n){"use strict";var u=n("7f17"),r=n.n(u);r.a},"69a1":function(t,e,n){"use strict";n.r(e);var u=n("ab9c"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},"7f17":function(t,e,n){},ab9c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,e){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};e.default=u},e1ed:function(t,e,n){"use strict";n.r(e);var u=n("290c"),r=n("69a1");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("4a6e");var c=n("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab/wuc-tab-create-component',
    {
        'components/wuc-tab/wuc-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("e1ed"))
        })
    },
    [['components/wuc-tab/wuc-tab-create-component']]
]);                
