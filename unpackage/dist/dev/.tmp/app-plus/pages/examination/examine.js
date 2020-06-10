(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/examination/examine"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      userFavor: false, //是否已收藏
      currentType: 0, //当前题型
      subjectIndex: 0, //跳转索引
      autoShowAnswer: false, //答错是否显答案
      autoRadioNext: false, //判断题、单项题，自动移下一题
      swiperHeight: '800px', //
      submitnext: '下一题',
      title: '保险从业资格考试',
      subjectList: [{
        "title": "根据我国《保险法》的规定，从事保险活动必须遵守工商.税务法规，恪守职业道德，遵守竞争原则？",
        "type": 1,
        "optionList": [{
          "id": "A",
          "content": "对" },
        {
          "id": "B",
          "content": "错" }],

        "answer": "A",
        "userAnswer": "",
        "userFavor": false,
        "explain": "难到是固体不成？" },

      {
        "title": "“保险营销员要讲明与保险公司之间的代理关系”的要求属于",
        "type": 2,
        "optionList": [{
          "id": "A",
          "content": "勤勉尽责" },
        {
          "id": "B",
          "content": "守法遵规" },
        {
          "id": "C",
          "content": "专业胜任" },
        {
          "id": "D",
          "content": "如实告知" }],

        "answer": "C",
        "userAnswer": "",
        "userFavor": false,
        "explain": "科技学依据" },

      {
        "title": "寿险理赔的核定环节内容包括？",
        "type": 3,
        "optionList": [{
          "id": "A",
          "content": "给付理赔计算" },
        {
          "id": "B",
          "content": "拒付" },
        {
          "id": "C",
          "content": "豁免保费计算" },
        {
          "id": "D",
          "content": "归档" }],

        "answer": "A,B,D",
        "userAnswer": "",
        "userFavor": false,
        "explain": "你怎么想都行，要的就是这个味，答案只能选A,B,D" },

      {
        "title": "保险商品是一种为（____）面临的风险提供保障的特殊产品。",
        "type": 4,
        "optionList": [{
          "id": "",
          "content": "" }],

        "answer": "明月",
        "userAnswer": "",
        "userFavor": false,
        "explain": "问答题没有选项，无法做答，且不参与计分" },

      {
        "title": "谈谈对保险行业的看法？",
        "type": 5,
        "optionList": [{
          "id": "",
          "content": "" }],

        "answer": "",
        "userAnswer": "",
        "userFavor": false,
        "explain": "问答题没有选项，无法做答，且不参与计分" }],



      modalCard: null, //显示答题卡
      modalError: null, //纠错卡
      errorList: ['题目不完整', '答案不正确', '含有错别字', '图片不存在', '解析不完整', '其他错误'] };

  },
  onReady: function onReady() {

    var tempHeight = 800;
    var _me = this;
    uni.getSystemInfo({
      //获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
      success: function success(res) {
        // console.log(res.model);                    
        // console.log(res.pixelRatio);                    
        // console.log(res.windowWidth);                    
        // console.log(res.windowHeight);
        // //这里是手机屏幕高度                    
        // console.log(res.language);                    
        // console.log(res.version);                    
        // console.log(res.platform);                    
        tempHeight = res.windowHeight;
        console.log("屏幕可用高度 " + tempHeight, " at pages\\examination\\examine.vue:224");

        uni.createSelectorQuery().select("#top-box").fields({
          size: true,
          scrollOffset: true },
        function (data) {
          tempHeight -= data.height;
          console.log("减掉顶部后的高度 " + tempHeight, " at pages\\examination\\examine.vue:231");

          uni.createSelectorQuery().select("#foot-box").fields({
            size: true,
            scrollOffset: true },
          function (data) {
            tempHeight -= data.height;
            console.log("减掉底部后的高度 " + tempHeight, " at pages\\examination\\examine.vue:238");
            _me.swiperHeight = tempHeight + 'px';
            console.log("滑屏最后高度 " + _me.swiperHeight, " at pages\\examination\\examine.vue:240");
          }).exec();

        }).exec();
      } });


  },
  onLoad: function onLoad() {

    this.currentType = this.subjectList[0].type;
    uni.setNavigationBarTitle({
      title: this.title });


    //添加用户显示答案字段
    for (var i = 0; i < this.subjectList.length; i++) {
      this.$set(this.subjectList[i], "showAnswer", false);
    }

  },
  methods: {
    showCardModal: function showCardModal(e) {
      this.modalCard = e.currentTarget.dataset.target;
    },
    hideCardModal: function hideCardModal(e) {
      this.modalCard = null;
    },
    showErrorModal: function showErrorModal(e) {
      this.modalError = e.currentTarget.dataset.target;
    },
    hideErrorModal: function hideErrorModal(e) {
      this.modalError = null;
    },
    SwiperChange: function SwiperChange(e) {//滑动事件

      var index = e.target.current;
      if (index != undefined) {
        this.subjectIndex = index;
        this.currentType = this.subjectList[index].type;
        this.userFavor = this.subjectList[index].userFavor;
      }

    },

    RadioboxChange: function RadioboxChange(e) {//单选选中

      var items = this.subjectList[this.subjectIndex].optionList;
      var values = e.detail.value;
      this.subjectList[this.subjectIndex].userAnswer = values;
      if (this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1) {
        this.subjectIndex += 1;
      };

    },
    CheckboxChange: function CheckboxChange(e) {//复选选中

      var items = this.subjectList[this.subjectIndex].optionList;
      var values = e.detail.value;
      this.subjectList[this.subjectIndex].userAnswer = "";
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].id == values[j]) {

            this.subjectList[this.subjectIndex].userAnswer += items[i].id;
            break;
          }
        }
      }
    },
    textInput: function textInput(e) {//填空题

      this.subjectList[this.subjectIndex].userAnswer = e.detail.value;

    },
    ShowAnswerChange: function ShowAnswerChange(e) {//显示答案

      if (this.subjectList[this.subjectIndex].showAnswer) {
        this.subjectList[this.subjectIndex].showAnswer = false;
      } else {

        this.subjectList[this.subjectIndex].showAnswer = true;
      }
    },

    FavorSubject: function FavorSubject(e) {//收藏题

      if (this.userFavor) {
        this.userFavor = false;
        this.subjectList[this.subjectIndex].userFavor = false;
      } else {

        this.userFavor = true;
        this.subjectList[this.subjectIndex].userFavor = true;
      }
    },

    MoveSubject: function MoveSubject(e) {//上一题、下一题

      if (e === -1 && this.subjectIndex != 0) {
        this.subjectIndex -= 1;
      }
      if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
        this.subjectIndex += 1;

      }
      if (this.subjectIndex + 1 == this.subjectList.length) {
        console.log("asdasdsf", " at pages\\examination\\examine.vue:347");
        this.submitnext = '提交';
        this.startExamine();
      } else {
        console.log("fhgixcuhoxc", " at pages\\examination\\examine.vue:351");
        this.submitnext = '下一步';
      }
    },

    startExamine: function startExamine() {
      if (this.submitnext == '提交') {
        uni.navigateTo({
          url: '/pages/examination/examineresult' });

      }
    },

    AppointedSubject: function AppointedSubject(e) {//题卡指定

      this.modalCard = null;
      this.subjectIndex = e;
    },

    SubmitError: function SubmitError(e) {//提交纠错

      this.modalError = null;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=template&id=ca68dce8&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue?vue&type=template&id=ca68dce8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.subjectList.map(function(subject, index) {
    var l0 = subject.optionList.map(function(option, __i1__) {
      var g0 = subject.userAnswer.indexOf(option.id)
      var g1 = subject.userAnswer.indexOf(option.id)
      return {
        $orig: _vm.__get_orig(option),
        g0: g0,
        g1: g1
      }
    })
    return {
      $orig: _vm.__get_orig(subject),
      l0: l0
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue":
/*!*****************************************************************************************!*\
  !*** C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examine_vue_vue_type_template_id_ca68dce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examine.vue?vue&type=template&id=ca68dce8& */ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=template&id=ca68dce8&");
/* harmony import */ var _examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examine.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examine.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _examine_vue_vue_type_template_id_ca68dce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _examine_vue_vue_type_template_id_ca68dce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./examine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./examine.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=template&id=ca68dce8&":
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator.EDZ-20180628SKN/Desktop/test/pages/examination/examine.vue?vue&type=template&id=ca68dce8& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_template_id_ca68dce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./examine.vue?vue&type=template&id=ca68dce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\pages\\examination\\examine.vue?vue&type=template&id=ca68dce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_template_id_ca68dce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_examine_vue_vue_type_template_id_ca68dce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator.EDZ-20180628SKN\\Desktop\\test\\main.js?{\"page\":\"pages%2Fexamination%2Fexamine\"}","common/runtime","common/vendor"]]]);