<template>
	<view class="train-detile">
		<view class="header">
			<image src="../../static/train-detile_5.jpg"></image>
			<view class="mask">
				<view class="title">
					<text class="title-text">新人入司培训</text>
					<text class="state">未参与</text>
				</view>
				<view class="info">
					<text>培训时间：6月1日至6月1日</text>
					<text><text style="margin-right:30upx">共6门课</text><text>100人参与</text></text>
				</view>
			</view>
		</view>
		<!--  -->
		<wuc-tab :tab-list="tabList" textFlex :tabCur.sync="TabCur" tab-class="text-center text-black bg-white" select-class="text-orange"></wuc-tab>
		<swiper :current="TabCur" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
			<swiper-item v-for="(item,index) in tabList" :key="index">
			 <!-- <div class="bg-white padding margin text-center text-black">{{item.name}}</div> -->
			 <!-- 课件 -->
			 <view class="box" v-if="index==0">
				<view class="curriculum" @click="goNext()">
					<view class="curriculum-left">
						<image class="left-img" src="../../static/train-detile_1.jpg"></image>
						<view>线上</view>
					</view>
					<view class="curriculum-right">
						<view>
							<view class="curriculum-title"><text>保险小百科</text><text class="state">待参加</text></view>
							<view class="curriculum-length">共3节 75分钟</view>
						</view>
						<view class="curriculum-time">6月1日9:15至10:30</view>
					</view>
				</view>
				<view class="curriculum">
					<view class="curriculum-left">
						<image class="left-img" src="../../static/train-detile_6.jpg"></image>
						<view>堂授</view>
					</view>
					<view class="curriculum-right">
						<view>
							<view class="curriculum-title"><text>保险让生活更美好</text><text class="state">待参加</text></view>
							<view class="curriculum-length">共2节 75分钟</view>
						</view>
						<view class="curriculum-time">6月1日10:45至12:00</view>
					</view>
				</view>
				<view class="curriculum">
					<view class="curriculum-left">
						<image class="left-img" src="../../static/train-detile_9.jpg"></image>
						<view>直播</view>
					</view>
					<view class="curriculum-right">
						<view>
							<view class="curriculum-title"><text>朝阳行业欢迎你</text><text class="state">待参加</text></view>
							<view class="curriculum-length">共2节 120分钟</view>
						</view>
						<view class="curriculum-time">6月1日13:00至15:00</view>
					</view>
				</view>
				<view class="curriculum">
					<view class="curriculum-left">
						<image class="left-img" src="../../static/train-detile_4.jpg"></image>
						<view>线上</view>
					</view>
					<view class="curriculum-right">
						<view>
							<view class="curriculum-title"><text>合规教育</text><text class="state">待参加</text></view>
							<view class="curriculum-length">共3节 105分钟</view>
						</view>
						<view class="curriculum-time">6月1日15:15至17:00</view>
					</view>
				</view>
			</view>
			<!-- 介绍 -->
			<view class="box" v-if="index==1">
				<view class="introduce">
					<view>
						<!-- <view class="introduce-title">课程介绍</view> -->
						<view class="introduce-text">
							
							<view>培训时间：2019/06/01 09:00 - 2019/06/01 17:00</view>
							<view>培训地点：上海市浦东新区峨山路68号A座6楼101室</view>
							<view>培训须知：必须着正装</view>
							<view class="qiandao">
								<view>培训行程：</view>
								<view>
									<view>6月1日09:00-09:15 签到</view>
									<view>6月1日09:15-12:00 培训</view>
									<view>6月1日13:00-15:00 培训</view>
									<view>6月1日15:15-17:00 培训</view>
								</view>
							</view>
						</view>
					</view>
					<view style="margin">
<!-- 						<view class="lecturer-info" style="margin-bottom: 30upx;">
							<view>
								<image class="people-img" src="../../static/home_9.png"></image>
								<view class="info">
									<text class="name">张老师</text>
									<text class="label">金牌讲师</text>
								</view>
							</view>
							<image src="../../static/fanhui.png" class="fanhui"></image>
						</view> -->
						<view>培训介绍：培训涉及的课程从保险业的起源和发展等角度解读我国保险业的现状，通过与银行、证券行业的对比分析体现保险行业的独特优势。详细讲解保险深度、保险密度以及保险对我国经济、政策、民生的需求分析，揭示我国保险业大发展的必然性。加入保险行业大有所为！</view>
					</view>
				</view>
			</view>
			<!-- 互动 -->
			<view class="box" v-if="index==2">
				<view class="interaction">
					<view class="tabbar">
						<view class="tabbar1" @click="toggle()">评价</view>
						<view class="tabbar2" @click="toggle()">课堂交流区</view>
						<view class="tabbar3">在线沟通</view>
					</view>
					<view v-if="ispingjia">
						<view class="my-evaluate container">
							<view  class="my-evaluate-title">我的评价</view>
							<view>
								<view class="my-evaluate-text">您对本次评价会务安排是否满意</view>
								<view class="xingxing"><uni-rate size="20" max="5" value="3"></uni-rate><text>满意</text></view>
							</view>
							<view>
								<view class="my-evaluate-text">本次培训内容是否对您的工作有帮助，并符合实际工作情况，您的评价是？</view>
								<view class="xingxing"><uni-rate size="20" max="5" value="3"></uni-rate><text>4分</text></view>
							</view>
							
							
						</view>
						<view  class="my-evaluate-title container">全部评价</view>
						<image src="../../static/test_1.jpg" class="img"></image>
						<div class="container">
							 <uni-evaluate :list-data="lists" :rate="rate"/>
						</div>
					</view>
					<!-- 课堂交流区 -->
					<view v-if="!ispingjia" class="classroom container">
						<view class="classroom-item">
							<view class="classroom-title"><text>老师参与</text>我在做缘故销售时，每次一说到保险得到的答复都是“保险我早就买过了”，这样的情况如何继续和客户沟通呢？      </view>
							<view class="classroom-content">A：一般情况下可以使用反问或引导的方法，反问的作用是转换话题，引导缘故客户对问题本质的思考，如“你当初是什么原因买保险的呢”。
引导就是把客户的异议往“对保险多一些了解”方向引导，比如：“今天正好有机会，我们就好好聊一聊，你对保险多一些了解也没什么坏处。” 这样做的好处是在客户不抵触的情况下，顺理成章地导入“三讲”。</view>
							<view class="classroom-content-info">
								<view class="classroom-left">
									<text class="classroom-name">匿名</text>
									<text class="classroom-time">05月11日</text>
								</view>
								<view class="classroom-right">
									<view><image src="/static/dianzan.png"></image><text>10</text></view>
									<view><image src="/static/liuyan.png"></image><text>10</text></view>
								</view>
							</view>
						</view>
						<view class="classroom-item">
							<view class="classroom-title"><text>老师参与</text>一般情况下客户有哪些保险需求？</view>
							<view class="classroom-content">1）子女教育。2）养老费用。
3）社保补充。
4）财务规划。5）创业基金、婚嫁基金。6）医疗费用、重疾保障。以上这些需求都可以通过保险的方式来解决，保险需求不仅呈现出多样性，而且越来越大。</view>
							<view class="classroom-content-info">
								<view class="classroom-left">
									<text class="classroom-name">匿名</text>
									<text class="classroom-time">05月11日</text>
								</view>
								<view class="classroom-right">
									<view><image src="/static/dianzan.png"></image><text>10</text></view>
									<view><image src="/static/liuyan.png"></image><text>10</text></view>
								</view>
							</view>
						</view>
						<!-- <view class="classroom-item">
							<view class="classroom-title"><text>老师参与</text>怎么才能做好销售工作呢</view>
							<view class="classroom-content">销售工作中遇到一些问题，听了本次课程之后，学会了如何销售沟通</view>
							<view class="classroom-content-info">
								<view class="classroom-left">
									<text class="classroom-name">匿名</text>
									<text class="classroom-time">05月11日</text>
								</view>
								<view class="classroom-right">
									<view><image src="/static/dianzan.png"></image><text>10</text></view>
									<view><image src="/static/liuyan.png"></image><text>10</text></view>
								</view>
							</view>
						</view>
						<view class="classroom-item">
							<view class="classroom-title"><text>老师参与</text>怎么才能做好销售工作呢</view>
							<view class="classroom-content">销售工作中遇到一些问题，听了本次课程之后，学会了如何销售沟通</view>
							<view class="classroom-content-info">
								<view class="classroom-left">
									<text class="classroom-name">匿名</text>
									<text class="classroom-time">05月11日</text>
								</view>
								<view class="classroom-right">
									<view><image src="/static/dianzan.png"></image><text>10</text></view>
									<view><image src="/static/liuyan.png"></image><text>10</text></view>
								</view>
							</view>
						</view> -->
					</view>
				</view>
			</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniEvaluate from '../../components/xiujun-evaluate/uni-evaluate.vue';
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		data() {
			return {
				ispingjia:true,
				tabList: [{ name: '课程' }, { name: '介绍' }, { name: '互动' }],
				TabCur: 0,
				height:0,
				lists:[{
					header_img: "http://cs.zhangkaixing.com/face/face_2.jpg",
					user_name: "王鼎",
					rate:5,
					create_time: "2019-06-03",
					content: "我很懒，懒得写评论，很好，非常好，真的好",
				},
				{
					content: "中评",
					create_time:"2019-06-02",
					header_img: "http://cs.zhangkaixing.com/face/face_12.jpg",
					user_name: "王刚",
					rate:3.5,
				},
				{
					content: "",
					create_time:"2019-06-02",
					header_img: "http://cs.zhangkaixing.com/face/face_15.jpg",
					user_name: "李丽丽",
					rate:2.3,
					// imgs:[]
				},{
					content: "好评",
					create_time: "2019-06-02",
					header_img: "http://cs.zhangkaixing.com/face/face_2.jpg",
					user_name: "朱燕",
					rate:5,
				},
				{
					content: "中评",
					create_time: "2019-06-02",
					header_img: "http://cs.zhangkaixing.com/face/face_12.jpg",
					user_name: "梅丽芳",
					rate:3.5,
					// imgs:[]
				},
				{
					content: "",
					create_time: "2019-04-12",
					header_img: "http://cs.zhangkaixing.com/face/face_15.jpg",
					user_name: "王路",
					rate:2.3,
					// imgs:[]
				}],
						rate:4.6
					};
				},
		
		components: { WucTab,uniRate,uniEvaluate },

		computed: {},

		methods: {
			swiperChange(e) {
				let { current } = e.target;
				this.TabCur = current;
			},
			goNext(){
				uni.navigateTo({
					url: '/pages/train/train-item'
				});
			},
			toggle(){
				this.ispingjia=!this.ispingjia
			}
		},

		onReady() {
			// console.log(document.body.clientHeight )
			// this.height=document.body.clientHeight*2-374-180;
		},
	};
</script>

<style>
	.img{
		width:100%;
		height:150upx;
	}
/* 	uni-page-body {
    background-color: #F4F5F6;
    height: 100%;
    font-size: 15px;
    line-height: 1.8;
} */
	.train-detile{
		height:100%;
	}
	.swiper{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
		height: 1200upx;
	}
	.header{
		position:relative;
		width:100%;
		height:374upx;
	}
	.header image{
		width:100%;
		height:100%;
	}
	.header .title-text{
		font-size:32upx;
	}
	.header .title .state{
		font-size:24upx;
		line-height: 1;
		color:#FF993F;
		border:1upx solid #FF993F;
		padding:8upx 10upx;
		border-radius: 6upx;
	}
	.header .mask{
		box-sizing: border-box;
		width:100%;
		position:absolute;
		bottom:0;
		background-color:rgba(0,0,0,.4);
		padding:15upx 30upx;
	}
	.header .mask view{
		display: flex;
		justify-content: space-between;
	}
	.header .mask text{
		color:#fff;
	}
	.header .mask .title{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header .mask button{
		margin:0;
	}
	/* 课件 */
	.curriculum{
		border-bottom:1upx solid #f5f5f5;
		display: flex;
		background-color:#fff;
		padding:30upx;
	}
	.curriculum-left{
		position:relative;
	}
	.curriculum-left view{
		position:absolute;
		left:10upx;
		top:10upx;
		color:#fff;
		background-color:#FF993F;
		font-size:24upx;
		line-height:1.2;
		padding:6upx 10upx;
		border-radius: 6upx;
	}
	.curriculum .left-img{
		width:250upx;
		height:160upx;
		margin-right:24upx;
		border-radius: 12upx;
	}
	.curriculum-title{
		font-size:32upx;
		color:#333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.curriculum-title view{
		font-size:
	}
	.curriculum-title .state{
		font-size:24upx;
		color:#FF993F;
		border:1upx solid #FF993F;
		line-height: 1;
		padding:8upx 10upx;
		border-radius: 6upx;
	}
	.curriculum-length{
		font-size:28upx;
		color:#999;
	}
	.curriculum-time{
		font-size:24upx;
		color:#999;
	}
	.curriculum-right{
		flex:1;
		display: flex;
		flex-direction:column;
		justify-content: space-between;
	}
	/* .curriculum>view{
		flex:1;
	} */
	/* 培训end */
	/* .box{
		height:100%;
	} */
	/* 介绍start */
	.box{
		height:100%;
	}
	.introduce{
		background-color:#fff;
		height:100%;
		padding:20upx 30upx;
	}
	.introduce-title{
		font-size:32upx;
		color:#333;
		margin:10upx 0;
	}
	.introduce-text{
		font-size:28upx;
		color:#333;
		line-height: 1.4;
	}
	.lecturer-info .people-img{
		width:84upx;
		height:84upx;
		margin-right:22upx;
	}
	.lecturer-info{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.lecturer-info .fanhui{
		width:12upx;
		height:20upx;
	}
	.lecturer-info>view{
		display: flex;
		flex-direction:row;
	}
	.lecturer-info .info{
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		line-height:1.2;
	}
	.lecturer-info .name{
		font-size:32upx;
		color:#333;
	}
	.lecturer-info .label{
		font-size:24upx;
		color:#333;
	}
	.qiandao{
		display: flex;
	}
	
	
	/* 互动 */
	.interaction{
		background-color:#fff;
	}
	.interaction .tabbar{
		display: flex;
		justify-content:space-between;
	}
	.interaction .tabbar view{
		/* padding:6upx 50upx; */
		/* flex:1; */
		background-size:cover;
		text-align:center;
		margin:30upx;
		color:#fff;
		font-size:28upx;
		width:180upx;
		height:66upx;
		line-height: 66upx;
		border-radius: 6upx;
	}
	.tabbar1{
		background-image:url('../../static/interaction_1.png');
	}
	.tabbar2{
		background-image:url('../../static/interaction_2.png')
	}
	.tabbar3{
		background-image:url('../../static/interaction_3.png')
	}
	.my-evaluate{
		margin-bottom:50upx;
	}
	.my-evaluate-title{
		font-size:32upx;
		color:#333;
/* 		text-shadow: 0px 0px #000; */
		font-weight: 700;
	}
	.my-evaluate-text{
		margin-top:20upx;
	}
	.xingxing{
		display:flex;
		justify-content:space-between;
		align-items:center;
		font-size:28upx;
		color:#333;
		margin:20upx 0;
	}
	.box{
		overflow: scroll;
	}
	/* 课堂交流区 */
	.classroom{
		
	}
	.classroom-item{
		padding:20upx 0;
	}
	.classroom view{
		line-height: 1;
	}
	.classroom .classroom-title{
	/* 	display: flex;
		align-items: center; */
		font-size:28upx;
		color:#333;
		margin-bottom:14upx;
		line-height: 1.4;
	}
	.classroom .classroom-title text{
		font-size:24upx;
		color:#FF993F;
		border:1upx solid #ff993f;
		padding:4upx 10upx;
		margin-right:10upx;
		border-radius: 6upx;
	}
	.classroom .classroom-content{
		font-size:24upx;
		color:#999;
		line-height: 1.6;
	}
	.classroom-content-info{
		width:100%;
		display: flex;
		justify-content: space-between;
	}
	.classroom-content-info view{
		display: flex;
		align-content: center;
	}
	.classroom-name{
		font-size:24upx;
		color:#7ED321;
		margin-right:18upx;
	}
	.classroom-time{
		font-size:24upx;
		color:#ccc;
	}
	.classroom-right view{
		margin-left:20upx;
		font-size:24upx;
		color:#ccc;
	}
	.classroom-right image{
		width:25upx;
		height:25upx;
		margin-right:6upx;
	}
</style>
