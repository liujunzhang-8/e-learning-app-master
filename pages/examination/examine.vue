<template>
	<view>
		<view id="top-box" class="cu-bar bg-white solid-bottom" style="height: 200upx;">
			<view class="header">
				<view>
					<text style="font-size: 36upx;">测试考试</text>
					<text style="font-size:.28upx">{{this.subjectIndex + 1}}/{{subjectList.length}}</text>
				</view>
				<view>
					<text style="font-size:24upx;">倒计时</text>
					<text style="font-size:36upx">99:99</text>
				</view>
			</view>
			
		</view>

		<!-- 选择 -->
		<form >
			<view style="background:#f1f1f1; height: 0.3rem;"></view>
			<swiper :current="subjectIndex" class="swiper-box" @change="SwiperChange" :style="{'height':swiperHeight}">
				<swiper-item v-for="(subject,index) in subjectList">
					<view class="action text-black" style="position: absolute;top: 50upx;color: #d1d1d1;left: 50upx;font-size:24upx">
						<text v-if="currentType===1">判断</text>
						<text v-else-if="currentType===2">单选</text>
						<text v-else-if="currentType===3">多选</text>
						<text v-else-if="currentType===4">填空</text>
						<text v-else-if="currentType===5">问答</text>
					</view>
					<view v-if="index-subjectIndex>=-1&&index-subjectIndex<=1" style="margin-left: 15%;margin-top:50upx">

						<view class="cu-bar bg-white solid-bottom">
							<view class="action text-black">
								第{{subjectIndex + 1}}题:{{subject.title}}
							</view>
						</view>
						<view>

							<radio-group class="block" @change="RadioboxChange" v-if="subject.type===1||subject.type===2">
								<view class="cu-form-group" v-for="option in subject.optionList">
									<radio :value="option.id"></radio>
									<view class="title text-black">{{option.id}}.{{option.content}}</view>
								</view>
							</radio-group>

							<checkbox-group class="block" @change="CheckboxChange" v-else-if="subject.type===3">
								<view class="cu-form-group" v-for="option in subject.optionList">
									<checkbox :value="option.id" :class="subject.userAnswer.indexOf(option.id) > -1?'checked':''" :checked="subject.userAnswer.indexOf(option.id) > -1?true:false"></checkbox>
									<view class="title  text-black">{{option.id}}.{{option.content}}</view>
								</view>
							</checkbox-group>

							<view v-else-if="subject.type===4">
								<view class="cu-form-group solid-bottom">
									<view class="title  text-black">
										答：
									</view>
									<input placeholder="文本输入框" name="input" @blur="textInput"></input>
								</view>
							</view>

							<view v-else-if="subject.type===5">
								<view class="cu-bar cu-bar-title bg-white margin-top">
									<view class="action  text-black">
										答：
									</view>
								</view>
								<view class="cu-form-group solid margin">
									<textarea maxlength="-1" @blur="textInput" placeholder="多行文本输入框"></textarea>
								</view>
							</view>

						</view>

						<view v-show="subject.showAnswer" class="margin-top solid-top">
							<view class="cu-bar">
								<view class="action  text-grey">
									<text>正确答案：</text>
									<text class="solid-bottom  padding-left text-green">{{subject.answer}}</text>
								</view>
							</view>
							<view class="cu-bar cu-bar-title">
								<view class="action  text-grey">
									<text>解析：</text>
								</view>
							</view>
							<view class="text-content padding  text-grey">
								{{subject.explain}}
							</view>
						</view>

					</view>
				</swiper-item>
			</swiper>
		</form>
		<!-- foot -->
		<view id="foot-box" class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="MoveSubject(-1)">
				<view class="text-gray">上一题</view>
			</view>
			<view class="action" @click="MoveSubject(1)" style="color: white;background: #FF8864;border:none">
				<view class="text-gray" style="color: white;">{{submitnext}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userFavor: false, //是否已收藏
				currentType: 0, //当前题型
				subjectIndex: 0, //跳转索引
				autoShowAnswer: false, //答错是否显答案
				autoRadioNext: false, //判断题、单项题，自动移下一题
				swiperHeight: '800px', //
				submitnext:'下一题',
				title: '保险从业资格考试',
				subjectList: [{
						"title": "根据我国《保险法》的规定，从事保险活动必须遵守工商.税务法规，恪守职业道德，遵守竞争原则？",
						"type": 1,
						"optionList": [{
							"id": "A",
							"content": "对"
						}, {
							"id": "B",
							"content": "错"
						}],
						"answer": "A",
						"userAnswer": "",
						"userFavor": false,
						"explain": "难到是固体不成？"
					},
					{
						"title": "“保险营销员要讲明与保险公司之间的代理关系”的要求属于",
						"type": 2,
						"optionList": [{
							"id": "A",
							"content": "勤勉尽责"
						}, {
							"id": "B",
							"content": "守法遵规"
						}, {
							"id": "C",
							"content": "专业胜任"
						}, {
							"id": "D",
							"content": "如实告知"
						}],
						"answer": "C",
						"userAnswer": "",
						"userFavor": false,
						"explain": "科技学依据"
					},
					{
						"title": "寿险理赔的核定环节内容包括？",
						"type": 3,
						"optionList": [{
							"id": "A",
							"content": "给付理赔计算"
						}, {
							"id": "B",
							"content": "拒付"
						}, {
							"id": "C",
							"content": "豁免保费计算"
						}, {
							"id": "D",
							"content": "归档"
						}],
						"answer": "A,B,D",
						"userAnswer": "",
						"userFavor": false,
						"explain": "你怎么想都行，要的就是这个味，答案只能选A,B,D"
					},
					{
						"title": "保险商品是一种为（____）面临的风险提供保障的特殊产品。",
						"type": 4,
						"optionList": [{
							"id": "",
							"content": ""
						}],
						"answer": "明月",
						"userAnswer": "",
						"userFavor": false,
						"explain": "问答题没有选项，无法做答，且不参与计分"
					},
					{
						"title": "谈谈对保险行业的看法？",
						"type": 5,
						"optionList": [{
							"id": "",
							"content": ""
						}],
						"answer": "",
						"userAnswer": "",
						"userFavor": false,
						"explain": "问答题没有选项，无法做答，且不参与计分"
					}

				],
				modalCard: null, //显示答题卡
				modalError: null, //纠错卡
				errorList: ['题目不完整', '答案不正确', '含有错别字', '图片不存在', '解析不完整', '其他错误']
			}
		},
		onReady() {

			var tempHeight = 800;
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: function(res) {
					// console.log(res.model);                    
					// console.log(res.pixelRatio);                    
					// console.log(res.windowWidth);                    
					// console.log(res.windowHeight);
					// //这里是手机屏幕高度                    
					// console.log(res.language);                    
					// console.log(res.version);                    
					// console.log(res.platform);                    
					tempHeight = res.windowHeight;
					console.log("屏幕可用高度 " + tempHeight);

					uni.createSelectorQuery().select("#top-box").fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						tempHeight -= data.height;
						console.log("减掉顶部后的高度 " + tempHeight);

						uni.createSelectorQuery().select("#foot-box").fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							tempHeight -= data.height;
							console.log("减掉底部后的高度 " + tempHeight);
							_me.swiperHeight = tempHeight + 'px';
							console.log("滑屏最后高度 " + _me.swiperHeight);
						}).exec();

					}).exec();
				}
			});

		},
		onLoad() {

			this.currentType = this.subjectList[0].type;
			uni.setNavigationBarTitle({
				title: this.title
			});

			//添加用户显示答案字段
			for (var i = 0; i < this.subjectList.length; i++) {
				this.$set(this.subjectList[i], "showAnswer", false);
			}

		},
		methods: {
			showCardModal: function(e) {
				this.modalCard = e.currentTarget.dataset.target
			},
			hideCardModal: function(e) {
				this.modalCard = null
			},
			showErrorModal: function(e) {
				this.modalError = e.currentTarget.dataset.target
			},
			hideErrorModal: function(e) {
				this.modalError = null
			},
			SwiperChange: function(e) { //滑动事件

				let index = e.target.current;
				if (index != undefined) {
					this.subjectIndex = index;
					this.currentType = this.subjectList[index].type;
					this.userFavor = this.subjectList[index].userFavor;
				}

			},

			RadioboxChange: function(e) { //单选选中

				var items = this.subjectList[this.subjectIndex].optionList;
				var values = e.detail.value;
				this.subjectList[this.subjectIndex].userAnswer = values;
				if (this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1) {
					this.subjectIndex += 1;
				};

			},
			CheckboxChange: function(e) { //复选选中

				var items = this.subjectList[this.subjectIndex].optionList;
				var values = e.detail.value;
				this.subjectList[this.subjectIndex].userAnswer = "";
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].id == values[j]) {

							this.subjectList[this.subjectIndex].userAnswer += items[i].id;
							break
						}
					}
				}
			},
			textInput: function(e) { //填空题

				this.subjectList[this.subjectIndex].userAnswer = e.detail.value;

			},
			ShowAnswerChange: function(e) { //显示答案

				if (this.subjectList[this.subjectIndex].showAnswer) {
					this.subjectList[this.subjectIndex].showAnswer = false;
				} else {

					this.subjectList[this.subjectIndex].showAnswer = true;
				}
			},

			FavorSubject: function(e) { //收藏题

				if (this.userFavor) {
					this.userFavor = false;
					this.subjectList[this.subjectIndex].userFavor = false;
				} else {

					this.userFavor = true;
					this.subjectList[this.subjectIndex].userFavor = true;
				}
			},

			MoveSubject: function(e) { //上一题、下一题

				if (e === -1 && this.subjectIndex != 0) {
					this.subjectIndex -= 1;
				}
				if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
					this.subjectIndex += 1;
					
				}
				if (this.subjectIndex + 1 == this.subjectList.length) {
					console.log("asdasdsf")
					this.submitnext = '提交';
					this.startExamine();
				}else{
					console.log("fhgixcuhoxc")
					this.submitnext = '下一步';
				}
			},

			startExamine() {
				if (this.submitnext == '提交') {
					uni.navigateTo({
						url:'/pages/examination/examineresult'
					});
				}
			},

			AppointedSubject: function(e) { //题卡指定

				this.modalCard = null;
				this.subjectIndex = e;
			},

			SubmitError: function(e) { //提交纠错

				this.modalError = null;
			}

		}
	}
</script>

<style>
/* 	@import "../../colorui/animation.css"; */
	@import "../../common/main.css";
	@import "../../common/icon.css";
	@import '../../common/animation.css';
	.text-gray{
		height:72upx;
		line-height: 72upx;
	}
	.header{
		width:700upx;
		height:134upx;
		background-color:red;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		border-radius: 6upx;
		background-image:url('../../static/my_bg.jpg');
		background-size:cover;
	}
	.header view{
		display: flex;
		flex-direction: column;
		line-height: 1;
		justify-content: space-around;
		padding:20upx 30upx;
	}
	.header view text{
		color:#fff;
	}
	page {
		background-color: #FFFFFF;
	}

	.cu-form-group {
		justify-content: flex-start
	}

	.cu-form-group .title {
		padding-left: 30upx;
		padding-right: 0upx;
	}

	.cu-form-group+.cu-form-group {
		border-top: none;
	}

	.cu-bar-title {
/* 		min-height: 50upx; */
	}

	.cu-list.menu>.cu-item-error {
		justify-content: flex-start;
	}
	.cu-bar .action[data-v-ca68dce8]:first-child{
		font-size:34upx;
		font-weight: 400;
		line-height: 1.4;
	}
	.cu-bar{
		min-height: 0;
	}
	uni-radio::before, uni-checkbox::before{
		content:""
	}
	.cu-bar .action:first-child{
		margin-left:20upx;
	}
	.uni-radio-input uni-radio-input-checked{
		background-color:#42BE0D;
	}
</style>
