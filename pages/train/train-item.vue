<template>
	<view class="train-detile">
		<view class="header">
			<image src="../../static/train-detile_1.jpg"></image>
			<view class="mask">
				<view class="title">
					<text class="title-text">保险小百科</text>
					<view>
						<image src="../../static/train-item_1.png"></image>
						<image src="../../static/train-item_2.png"></image>
						<image src="../../static/train-item_3.png"></image>
					</view>
				</view>
				<view class="info">
					<text>2016/1 09:15 - 6/1 10:30</text>
					<text><text>共3节课</text></text>
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
				<view class="catalog container" @click="goNext()">
					<view class="catalog-text">
						1.新人培训课程第一部分
					</view>
					<view class="state">
						已完成
					</view>
				</view>
				<view class="catalog container" @click="goNext()">
					<view class="catalog-text">
						1.新人培训课程第二部分
					</view>
					<view class="state">
						已完成
					</view>
				</view>
				<view class="catalog container" @click="goNext()">
					<view class="catalog-text">
						1.新人培训课程第三部分
					</view>
					<view class="state">
						已完成
					</view>
				</view>
			</view>
			<!-- 介绍 -->
			<view class="box" v-if="index==1">
				<view class="introduce">
					<view>
						<!-- <view class="introduce-title">课程介绍</view> -->
						<view class="introduce-text">
							
							<view>课程时间：2019/06/01 09:15 - 2019/06/01 10:30</view>
							<view>课程地点：上海市浦东新区峨山路68号A座6楼101室</view>
							<view>课程须知：必须着正装</view>
							<view class="qiandao">
								<view>培训行程：</view>
								<view>
									<view>6月1日09:00  签到</view>
									<view>6月1日09:15 - 10:30  上课</view>
								</view>
							</view>
						</view>
					</view>
					<view>
						<view class="introduce-title">讲师</view>
						<view class="lecturer-info" style="margin-bottom: 30upx;">
							<view>
								<image class="people-img" src="../../static/home_9.png"></image>
								<view class="info">
									<text class="name">张老师</text>
									<text class="label">金牌讲师</text>
								</view>
							</view>
							<image src="../../static/fanhui.png" class="fanhui"></image>
						</view>
						<view>课程介绍：课程主旨在于强调少儿保险的必要性，提高少儿和家长的保险意识，为推动我国少儿保险事业的发展尽绵薄之力。课程主要从三个方面来阐述少儿保险的相关知识。</view>
					</view>
				</view>
			</view>
			<!-- 互动 -->
			<view class="box" v-if="index==2">
				<view class="interaction">
					<view class="tabbar">
						<view class="tabbar1">评价</view>
						<view class="tabbar2">课堂交流区</view>
						<view class="tabbar3">在线沟通</view>
					</view>
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
					<image src="../../static/test_1.jpg" class="img"></image>
					<div class="container">
						 <uni-evaluate :list-data="lists" :rate="rate"/>
					</div>
					
				</view>
			</view>
			</swiper-item>
		</swiper>
		<view class="fixed-bottom">
			<view>签到</view>
			<view @click="toBeike">备课</view>
		</view>
	</view>
</template>

<script>
	import uniEvaluate from '../../components/xiujun-evaluate/uni-evaluate.vue';
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		data() {
			return {
				tabList: [{ name: '目录' }, { name: '介绍' }, { name: '互动' }],
				TabCur: 0,
				height:0,
				lists:[{
	header_img: "http://cs.zhangkaixing.com/face/face_2.jpg",
	user_name: "测试1",
	rate:5,
	create_time: "2019-04-12",
	content: "我很懒，懒得写评论，很好，非常好，真的好",
	// imgs:[
	// 	'http://cs.zhangkaixing.com/face/face.jpg',
	// 	'http://cs.zhangkaixing.com/face/p10.jpg',
	// 	'http://cs.zhangkaixing.com/face/face_14.jpg',
	// 	'http://cs.zhangkaixing.com/face/face.jpg',
	// 	'http://cs.zhangkaixing.com/face/p10.jpg',
	// ]
},
{
	content: "中评",
	create_time: "2019-04-12",
	header_img: "http://cs.zhangkaixing.com/face/face_12.jpg",
	user_name: "测试2",
	rate:3.5,
},
{
	content: "",
	create_time: "2019-04-12",
	header_img: "http://cs.zhangkaixing.com/face/face_15.jpg",
	user_name: "测试3",
	rate:2.3,
	// imgs:[]
},{
	content: "好评",
	create_time: "2019-04-12",
	header_img: "http://cs.zhangkaixing.com/face/face_2.jpg",
	user_name: "测试1",
	rate:5,
},
{
	content: "中评",
	create_time: "2019-04-12",
	header_img: "http://cs.zhangkaixing.com/face/face_12.jpg",
	user_name: "测试2",
	rate:3.5,
	// imgs:[]
},
{
	content: "",
	create_time: "2019-04-12",
	header_img: "http://cs.zhangkaixing.com/face/face_15.jpg",
	user_name: "测试3",
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
				console.log(111)
			},
			toBeike(){
				uni.navigateTo({
					url: '/pages/lecturer/lesson-preparation'
				});
			}
		},

		onReady() {
			console.log(document.body.clientHeight )
			this.height=document.body.clientHeight*2-374-180;
		},
	};
</script>

<style>
	page{
		background-color:#fff;
	}
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
		height: 1000upx;
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
	.header .mask .title image{
		width:32upx;
		height:32upx;
		margin-left:16upx;
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
		top:5upx;
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
		line-height: 1.2;
		padding:4upx;
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
		flex:1;
		background-size:cover;
		text-align:center;
		margin:30upx;
		color:#fff;
		font-size:28upx;
		padding:6upx 0;
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
		
	}
	.my-evaluate-title{
		font-size:32upx;
		color:#333;
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
	.catalog{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:30upx;
		border-bottom:1upx solid #f8f8f8;
	}
	.catalog-text{
		font-size:32upx;
		color:#333;
	}
	.catalog .state{
		font-size:24upx;
		color:#7ED321;
		border:1upx solid #7ED321;
		padding:0 20upx;
	}
	
	
	.fixed-bottom{
		width:100%;
		display: flex;
		position:fixed;
		bottom:0;
		background-color:#fff;
	}
	.fixed-bottom view{
		flex:1;
		text-align: center;
		font-size:32upx;
		height:88upx;
		line-height: 88upx;
	}
</style>
