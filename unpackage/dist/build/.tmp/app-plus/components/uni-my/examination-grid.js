(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-my/examination-grid"],{1107:function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniGrid",props:{options:{type:Array,default:function(){return[]}},type:{type:String,default:"square"},columnNum:{type:[Number,String],default:3},showOutBorder:{type:Boolean,default:!0},showBorder:{type:Boolean,default:!0}},data:function(){return{}},computed:{gridGroup:function(){var t=this,n=[],u=[];if(this.options&&this.options.forEach(function(e,o){u.push(e),o%t.columnNum===t.columnNum-1&&(n.push(u),u=[])}),u.length>0){if(this.columnNum>u.length)for(var e=0,o=u.length;e<this.columnNum-o;e++)u.push({seize:!0});n.push(u)}return u=null,n}},created:function(){this.columnNumber=this.gridGroup[0].length},methods:{onClick:function(t,n){this.$emit("click",{index:t*this.columnNumber+n})}}};n.default=e},"343e":function(t,n,u){"use strict";u.r(n);var e=u("bd33"),o=u("93c8");for(var r in o)"default"!==r&&function(t){u.d(n,t,function(){return o[t]})}(r);u("da96");var i=u("2877"),a=Object(i["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=a.exports},"3aa8":function(t,n,u){},"93c8":function(t,n,u){"use strict";u.r(n);var e=u("1107"),o=u.n(e);for(var r in e)"default"!==r&&function(t){u.d(n,t,function(){return e[t]})}(r);n["default"]=o.a},bd33:function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return o})},da96:function(t,n,u){"use strict";var e=u("3aa8"),o=u.n(e);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-my/examination-grid-create-component',
    {
        'components/uni-my/examination-grid-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("343e"))
        })
    },
    [['components/uni-my/examination-grid-create-component']]
]);                
