(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my-task"],{3064:function(t,i,e){"use strict";var a=e("c0df"),n=e.n(a);n.a},5316:function(t,i,e){"use strict";e.r(i);var a=e("a0da"),n=e("7b9c");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("3064");var l=e("2877"),c=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,"2ac913a7",null);i["default"]=c.exports},"630e":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".nav[data-v-2ac913a7]{\n\t\t/* position: fixed;\n\t\tleft: 0; */\n\t\t/* top: 88upx; */color:#fff;width:100%;height:%?90?%;\n\t\t/* margin-top: 88upx; */display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;font-size:%?24?%;background-color:#fff;z-index:996}.navTab[data-v-2ac913a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?90?%;position:relative;color:#000}.click[data-v-2ac913a7]{color:red}.underline[data-v-2ac913a7]{width:50%;height:3px;background-color:red}.underlineBox[data-v-2ac913a7]{width:50%;height:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.5s;-o-transition:.5s;transition:.5s}.navTabItem[data-v-2ac913a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;font-size:%?30?%}.content[data-v-2ac913a7]{width:100%}.media-list[data-v-2ac913a7]{position:relative;width:100%;margin-top:%?2?%;padding:%?20?% %?30?%;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.add-time[data-v-2ac913a7]{position:absolute;right:%?30?%;top:%?20?%;font-size:%?24?%;color:#ccc}.media-list-title[data-v-2ac913a7]{font-size:%?32?%}.navigate-left[data-v-2ac913a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.media-list-logo[data-v-2ac913a7]{height:%?88?%;width:%?88?%;padding:%?6?%;margin-right:%?20?%}.media-list-logo uni-image[data-v-2ac913a7]{height:100%;width:100%;border-radius:%?50?%}.navigate-right[data-v-2ac913a7]{height:%?20?%;width:%?12?%\n\t/* \tmargin-right: 10upx;\n\t\tmargin-top: 20upx; */}\n\n\t/* \t.navigate-right image {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t} */.media-list-body[data-v-2ac913a7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.media-list-text-top[data-v-2ac913a7]{width:100%;color:#333;margin-bottom:%?5?%}.media-list-text-top uni-view[data-v-2ac913a7]{line-height:1.4}.media-list-describe[data-v-2ac913a7]{font-size:%?24?%;color:#999}.media-list-text-bottom[data-v-2ac913a7]{width:100%;\n/* \t\tline-height: 30upx; */font-size:%?24?%;color:#999}.ellipsis[data-v-2ac913a7]{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}",""])},"7b9c":function(t,i,e){"use strict";e.r(i);var a=e("a506"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},a0da:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"nav"},[e("v-uni-view",{staticClass:"navTab"},t._l(t.agents,function(i,a){return e("v-uni-view",{key:a,staticClass:"navTabItem",class:a===t.tabClick?"click":"",on:{click:function(i){i=t.$handleEvent(i),t.navClick(a)}}},[t._v(t._s(i.title))])}),1),e("v-uni-view",{staticClass:"underlineBox",style:"transform:translateX("+t.isLeft+"px)"},[e("v-uni-view",{staticClass:"underline"})],1)],1),e("v-uni-swiper",{staticStyle:{"min-height":"88vh"},attrs:{current:t.currentTab},on:{change:function(i){i=t.$handleEvent(i),t.swiperTab(i)}}},t._l(t.agents,function(i,a){return e("v-uni-swiper-item",{key:a},[e("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){i=t.$handleEvent(i),t.lower1(i)}}},[e("v-uni-view",{staticClass:"content"},t._l(i.list,function(a,n){return i.list.length>0?e("v-uni-view",{key:n,staticClass:"media-list",on:{click:function(i){i=t.$handleEvent(i),t.nextTo(a.src)}}},[e("v-uni-view",{staticClass:"navigate-left"},[e("v-uni-view",{staticClass:"media-list-logo"},[e("v-uni-image",{attrs:{src:a.image}})],1),e("v-uni-view",{staticClass:"media-list-body"},[e("v-uni-view",{staticClass:"media-list-text-top"},[e("v-uni-view",{staticClass:"media-list-title"},[t._v(t._s(a.title))]),e("v-uni-view",{staticClass:"media-list-describe"},[t._v(t._s(a.title2))])],1),e("v-uni-view",{staticClass:"media-list-text-bottom ellipsis"},[t._v(t._s(a.time))])],1)],1),e("v-uni-image",{staticClass:"navigate-right",attrs:{src:"/static/fanhui.png"}}),e("v-uni-view",{staticClass:"add-time"},[t._v("19/12/12")])],1):t._e()}),1)],1)],1)}),1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},a506:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{currentTab:0,tabClick:0,isHeight:"",isLeft:0,agents:[{title:"未完成",list:[{title:"保险从业资格考试",title2:"寿险职涯第一步",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_1.png",src:"/pages/examination/examination"},{title:"Limra保险业务员能力测评",title2:"完成Limra能力测评后，平台会进行智能教辅",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_2.png",src:"/pages/my/my-evaluation"},{title:"部门晨会",title2:"部门晨会",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_3.png",src:""},{title:"岗前培训",title2:"请参加岗前培训",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_4.png",src:"/pages/train/train-detile"},{title:"开门红方案达成",title2:"港澳游已达成，日韩游冲刺",time:"19/01/01 12:00 - 19/03/31 13:00",image:"/static/task_5.png",src:"/pages/train/train-detile"},{title:"增员进度",title2:"本月增员10人，剩余缺口5人",time:"19/06/01 12:00 - 19/07/01 12:00",image:"/static/task_6.png",src:"/pages/train/train-detile"}]},{title:"已完成",list:[{title:"保险从业资格考试",title2:"寿险职涯第一步",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_1.png",src:"/pages/examination/examination"},{title:"Limra保险业务员能力测评",title2:"完成Limra能力测评后，平台会进行智能教辅",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_2.png",src:"/pages/my/my-evaluation"},{title:"部门晨会",title2:"部门晨会",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_3.png",src:""},{title:"岗前培训",title2:"请参加岗前培训",time:"19/04/05 12:00 - 19/07/12 13:00",image:"/static/task_4.png",src:"/pages/train/train-detile"}]}],isWidth:0}},mounted:function(){var t=this;uni.getSystemInfo({success:function(i){t.isWidth=i.windowWidth/t.agents.length}})},methods:{navClick:function(t){this.currentTab=t,this.tabClick=t,this.isLeft=t*this.isWidth},swiperTab:function(t){console.log(t);var i=t.detail.current;this.navClick(i)},nextTo:function(t){uni.navigateTo({url:t})}}};i.default=a},c0df:function(t,i,e){var a=e("630e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("c9c9e392",a,!0,{sourceMap:!1,shadowMode:!1})}}]);