<template>
	<view>
		<!-- 轮播图 -->
		<view style="height:360upx">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" indicator-active-color="#fff">
				<swiper-item v-for="(item,key) in bannerList" :key="key">
					<view class="swiper-item uni-bg-red" @click="go('/pages/train/train-detile')"><image :src="item.image" alt=""></image></view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 九宫格 -->
		<view class="grid">
			<uni-grid :options="column" 
				:show-border="false" column-num="4" @click="gridGo">
			</uni-grid>
		</view>
		<!-- 消息 -->	
		<view class="uni-swiper-msg container" @click="go('/pages/my/my-news')">
			<view class="uni-swiper-msg-icon">
				<image src="../static/laba.png" mode="widthFix" style="width:46upx;height:24upx"></image>
			</view>
			<swiper vertical="true" autoplay="true" circular="true" interval="3000">
				<swiper-item v-for="(item, index) in msg" :key="index">
					<navigator>{{item}}</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- <uni-notice-bar class="news" show-icon="true" scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar> -->
		<!-- 正在进行 -->
		<view class="container conduct">
			<view class="title">
				<text class="title-text">我正在进行的</text>
				<view class="title-right" @click="go('/pages/my/my-collection')">更多<image src="../static/fanhui.png"></image></view>
			</view>
			<scroll-view class="conduct-list" scroll-x>
				<view class="scoll-wrapper" @click="go('/pages/train/train-detile')">
					<conduct-item v-for="(item,key) in conductList" :list="item" :key="key" ></conduct-item>
				</view>
			</scroll-view>
		</view>
		<!-- 直播 -->
		<view class="container live">
			<view class="title">
				<text class="title-text">直播</text>
				<view class="title-right" @click="go('/pages/tabbar/tabbar')">更多<image src="../static/fanhui.png"></image></view>
			</view>
			<!-- <uni-steps :data="livelist" direction="column" :active="2"></uni-steps> -->
			<view class="uni-timeline" style="padding: 0upx 0upx;background-color: #fff;">
				<view class="uni-timeline-item uni-timeline-first-item">
					<view class="uni-timeline-item-keynode">
						<view>2019/6/19</view>
						<view>10:00</view>
					</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">开门红年金销售流程讲解</view>
						<view class="uni-timeline-item-text"><image src="../static/people_1.png"></image><text>讲师：李丽</text>寿险特邀培训师</view>
					</view>
				</view>
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">
						<view>2019/6/17</view>
						<view>13:00</view>
					</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">最适合的三类增员</view>
						<view class="uni-timeline-item-text"><image src="../static/people_2.png"></image><text>讲师：朱飞</text>寿险特邀培训师</view>
					</view>
				</view>
				<view class="uni-timeline-item uni-timeline-last-item">
					<view class="uni-timeline-item-keynode">
						<view>2019/6/12</view>
						<view>11:00</view>
					</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">玩转社群营销</view>
						<view class="uni-timeline-item-text"><image src="../static/people_3.png"></image><text>讲师：梅雨</text>寿险特邀培训师</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 热播课程 -->
		<view class="container curriculum-list">
			<view class="title">
				<text class="title-text">热播课程</text>
				<view class="title-right" @click="go('/pages/train/train-list')">更多<image src="../static/fanhui.png"></image></view>
			</view>
			<view @click="goDetile()">
				<curriculum-item  img1="../static/home_10.png" img2="../static/home_11.png" v-for="(item,key) in curriculumList" :key="key" :list="item"></curriculum-item>
			</view>
		</view>
		<!-- 精选热播 -->
		<view class="container curriculum-list">
			<view class="title">
				<text class="title-text">精选课程</text>
				<view class="title-right" @click="go('/pages/train/train-list')">更多<image src="../static/fanhui.png"></image></view>
			</view>
			<view @click="goDetile()">
				<curriculum-item v-for="(item,key) in listData" :key="key" :list="item"></curriculum-item>
			</view>
		</view>
	</view>
</template>

<script>
import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"// 重要消息通知组件
import uniSteps from "@/components/uni-steps/uni-steps.vue"//时间轴
import uniGrid from "@/components/uni-grid/uni-grid.vue"//九宫格
import conductItem from "@/components/sz-list-template/conduct-item"//我正在进行的列表
import curriculumItem from "@/components/sz-list-template/curriculum-item"//课程列表
export default {
	data() {
		return {
			bannerList:[
				{image:'../static/train-detile_2.jpg'},
				{image:'../static/train-detile_3.jpg'}
			],
			column:[//九宫格
			{image:'../static/home_1.png',text:'我的任务',url:"/pages/my/my-task"},
			{image:'../static/home_2.png',text:'我的培训',url:"/pages/my-train1/my-train1"},
			{image:'../static/home_3.png',text:'大咖讲堂'},
			{image:'../static/home_4.png',text:'荣誉殿堂',url:"/pages/my/honor"},
			{image:'../static/home_5.png',text:'即时解困',url:"/pages/customer-service/customer-service"},
			{image:'../static/home_6.png',text:'智能教辅'},
			{image:'../static/home_7.png',text:'闯关学习'},
			{image:'../static/home_8.png',text:'客户分析'},],
			listData:[
				{image:'../static/train-detile_9.jpg',title:"朝阳行业欢迎你",timeLength:40,peopleNumber:298,score:4.5},
				{image:'../static/train-detile_10.jpg',title:"保险让生活更美好",timeLength:35,peopleNumber:36,score:4.6},
				{image:'../static/train-detile_4.jpg',title:"合规教育",timeLength:50,peopleNumber:77,score:4.5},
			],
			conductList:[
				{image:'../static/train-detile_9.jpg',title:"朝阳行业欢迎你"},
				{image:'../static/train-detile_10.jpg',title:"保险让生活更美好90天"},
				{image:'../static/train-detile_4.jpg',title:"合规教育"},
			],
			livelist:[
				{title:'买家下单',desc:'2018-11-11'},
				{title:'卖家发货',desc:'2018-11-12'},
				{title:'买家签收',desc:'2018-11-13'},
				{title:'交易完成',desc:'2018-11-14'}],
			curriculumList:[
				{image:'../static/train-detile_1.jpg',title:"保险小百科",timeLength:15,peopleNumber:189,score:4.5},
				{image:'../static/train-detile_7.jpg',title:"产品介绍",timeLength:45,peopleNumber:39,score:4.6},
				{image:'../static/train-detile_6.jpg',title:"让耸智充满爱",timeLength:60,peopleNumber:121,score:4.5},
			],
			title:"滚动公告",
			msg : [
				'华夏菁英90天 诚邀大咖讲师',
				'保险专家平台升级啦 新增消息板块'
			]
			
		}
	},
	methods:{
		// 九宫格跳转
		gridGo(e){
			let index=e.index;
			// let url=
				uni.navigateTo({
					url:this.column[index].url
				});		
		},
		goLive(e){
			uni.navigateTo({
				url: '/pages/tabbar/tabbar'
			});
		},
		
		go(url){//更多跳转
			uni.navigateTo({
				url: url
			});
		},
		goDetile(){//链到课程详情
			console.log(111)
			uni.navigateTo({
				url: '/pages/train/train-item'
			});
		},
	},
    components: {uniNoticeBar,uniSteps,uniGrid,conductItem,curriculumItem},
	onLoad(){
		if(!this.sz.isDemo){
			this.column=[{image:'../static/home_1.png',text:'我的任务',url:"/pages/my/my-task"},
			{image:'../static/home_2.png',text:'我的培训',url:"/pages/train/my-train"},
			{image:'../static/home_7.png',text:'闯关学习'},
			{image:'../static/home_8.png',text:'学习成就'},]
		}
	},
	onNavigationBarButtonTap() {  
        uni.navigateTo({
        	url: '/pages/my/my-news'
        });
    }  
}
</script>
<style>
	/* 九宫格圆角 */
	/* uni-swiper{
		height:400upx;
	} */
	page{
		height:auto;
	}
	.uni-swiper-msg-icon{
		line-height: 0;
	}
	.uni-swiper-msg{
		margin:20upx 0;
		box-sizing: border-box;
		align-items:center;
		line-height:1.4;
	}
	.swiper{
		height:100%;
	}
	.grid{
		background-color:#fff;
		/* margin-bottom:16upx; */
	}
	/* >>>.uni-grid-item-image{
		border-radius: 50%;
	} */
	.uni-timeline-item .uni-timeline-item-divider{
		color:#e3e3e3;
	}
	.uni-grid-item-text{
		font-size:24upx;
		color:#666;
	}
	.swiper-item{
		height:100%;
	}
	.swiper image{
		width:100%;
		height:100%;
	}
	.container .title{
		height:80upx;
		line-height:80upx;
		position:relative;
		display: flex;
		justify-content: space-between;
	}
	.container .title image{
		width:16upx;
		height:24upx;
		margin-left:6upx;
/* 		vertical-align:middle; */
	}
	.container .title-text{
		font-size:36upx;
		/* font-weight: 600; */
		color:#333;
	}
	.container .title-right{
		display: flex;
		align-items: center;
		font-size:24upx;
		color:#ccc;
		line-height:80upx;
	}
	.live{
		margin:16upx 0;
		padding-bottom:30upx;
		background-color:#fff;
	}
	.curriculum-list{
		background-color:#fff;
		margin-bottom:16upx;
	}
	/* 正在进行 */
	.conduct{
		background-color:#fff;
	}
	.conduct-list{
		padding:20upx 0;
	}
	.scoll-wrapper{
		display: flex;
		align-items: flex-start;
	}
	
	
	/* 时间轴样式修改 */
	.uni-timeline-item .uni-timeline-item-divider{
		background-color:#ccc;
	}
	.uni-timeline-item .uni-timeline-item-keynode{
		width:auto;
		text-align: left;
	}
	.uni-timeline-item .uni-timeline-item-content{
		border-radius: 6upx;
		background-color:#f7f7f7;
		width:100%;
		margin-left:24upx;
		padding:22upx;
	}
	.uni-timeline-item .uni-timeline-item-content image{
		width:32upx;
		height:32upx;
		vertical-align: middle;
		margin-right:16upx;
	}
	.uni-timeline-item .uni-timeline-item-content text{
		margin-right:16upx;
	}
	.uni-timeline-item .uni-timeline-item-text{
		font-size:24upx;
		color:#999;
	}
	.uni-timeline-item .uni-timeline-item-divider{
		width:33upx;
		height:33upx;
	}
	.uni-timeline-last-item .uni-timeline-item-divider{
		background-color:#ccc;
	}
	.uni-timeline-item-title{
		font-size:32upx;
		
	}
</style>
