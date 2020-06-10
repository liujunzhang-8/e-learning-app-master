<template>
	<view>
		<view class='nav'>
			<view class='navTab'>
				<view v-for="(item,index) in agents" :key="index" class='navTabItem' :class="index===tabClick?'click':''" @click='navClick(index)'>{{item.title}}</view>
			</view>
			<view class="underlineBox" :style='"transform:translateX("+isLeft+"px)"'>
				<view class="underline"></view>
			</view>
		</view>
		
		<swiper style="min-height: 88vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(item,index) in agents" :key="index">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1">
		
				<view class='content'>
					<view class="text">您当前尚未获取勋章，加油激活更多勋章吧！</view>
					<view @tap="goNext">
						<uni-grid :options="list"></uni-grid>
					</view>
				</view>
				
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
import uniGrid from "@/components/uni-my/my-honor"//九宫格
export default {
	data() {
		return {
			list:[
				{image:'../../static/honor_1.png',text:'初来乍到',text2:'出来乍到'},
				{image:'../../static/honor_2.png',text:'好好学习'},
				{image:'../../static/honor_3.png',text:'初出茅庐'},
				{image:'../../static/honor_4.png',text:'论坛达人'},
				{image:'../../static/honor_5.png',text:'快培训大神'},
				{image:'../../static/honor_6.png',text:'金牌观众'},
				{image:'../../static/honor_7.png',text:'善于分享'},
				{image:'../../static/honor_8.png',text:'知行合一'},
				{image:'../../static/honor_9.png',text:'天天向上'},
				{image:'../../static/honor_10.png',text:'新人必备技能'},
				{image:'../../static/honor_11.png',text:'新人必备技能'},
				{image:'../../static/honor_12.png',text:'新人必备技能'},
			],
			currentTab: 0,
			tabClick: 0,
			isHeight: '',
			isLeft: 0,
			agents: [{title: '勋章'}, {title: '个人荣誉',}],
			isWidth: 0
		}
	},
	mounted() {
		var that = this
		// 获取设备宽度
		uni.getSystemInfo({
			success(e) {
				that.isWidth = e.windowWidth / that.agents.length
			}
		})
	},
	methods:{
		navClick(index) {
			this.currentTab = index	//设置swiper的第几页
			this.tabClick = index	//设置导航点击了哪一个
			this.isLeft = index * this.isWidth //设置下划线位置
		},
		// swiper 滑动
		swiperTab: function(e) {
			console.log(e)
			var index = e.detail.current //获取索引
			this.navClick(index)
		}, 
		
	},
	components: {uniGrid},
}
</script>
<style>
	/* 左右间距15upx 容器 */
	page{
		background-color:#fff;
		height:auto;
	}
	.nav {
		/* position: fixed;
		left: 0; */
		/* top: 88upx; */
		color: white;
		width: 100%;
		height: 90upx;
		/* margin-top: 88upx; */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #FFFFFF;
		z-index: 996;
	}
	
	.navTab {
		display: flex;
		width: 100%;
		height: 90upx;
		position: relative;
		color: #000000;
	}
	
	.click {
		color: #FF0000;
	}
	
	.underline {
		width: 50%;
		height: 3px;
		background-color: #FF0000;
	}
	
	.underlineBox {
		width: 50%;
		height: 3px;
		display: flex;
		align-content: center;
		justify-content: center;
		transition: .5s;
	}
	
	.navTabItem {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		font-size: 30upx;
	}
	.text{
		font-size:24upx;
		color:#ccc;
		padding-left:40upx;
		margin:20upx 0;
	}
	
</style>
