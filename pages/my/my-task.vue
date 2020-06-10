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
					<view class='media-list' v-for="(listItem,listIndex) in item.list" v-if="item.list.length > 0" :key="listIndex" @click="nextTo(listItem.src)">
						<view class="navigate-left">
							<view class="media-list-logo">
								<image :src="listItem.image"></image>
							</view>
							<view class="media-list-body">
								<view class="media-list-text-top">
									<view class="media-list-title">{{listItem.title}}</view>
									<view class="media-list-describe">{{listItem.title2}}</view>
								</view>
								<view class="media-list-text-bottom ellipsis">{{listItem.time}}</view>
							</view>
							</view>
							<image src="/static/fanhui.png" class="navigate-right"></image>
							<view class="add-time">19/12/12</view>
					</view>	
				</view>
				
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				tabClick: 0,
				isHeight: '',
				isLeft: 0,
				agents: [
				{
					title: '未完成',
					list: [{
						title:'保险从业资格考试',
						title2:"寿险职涯第一步",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_1.png',
						src:'/pages/examination/examination'
					},{
						title:'Limra保险业务员能力测评',
						title2:"完成Limra能力测评后，平台会进行智能教辅",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_2.png',
						src:'/pages/my/my-evaluation'
					},{
						title:'部门晨会',
						title2:"部门晨会",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_3.png',
						src:''
					},{
						title:'岗前培训',
						title2:"请参加岗前培训",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_4.png',
						src:'/pages/train/train-detile'
					},{
						title:'开门红方案达成',
						title2:"港澳游已达成，日韩游冲刺",
						time:'19/01/01 12:00 - 19/03/31 13:00',
						image:'/static/task_5.png',
						src:'/pages/train/train-detile'
					},{
						title:'增员进度',
						title2:"本月增员10人，剩余缺口5人",
						time:'19/06/01 12:00 - 19/07/01 12:00',
						image:'/static/task_6.png',
						src:'/pages/train/train-detile'
					}
					]
				}, {
					title: '已完成',
					list:[{
						title:'保险从业资格考试',
						title2:"寿险职涯第一步",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_1.png',
						src:'/pages/examination/examination'
					},{
						title:'Limra保险业务员能力测评',
						title2:"完成Limra能力测评后，平台会进行智能教辅",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_2.png',
						src:'/pages/my/my-evaluation'
					},{
						title:'部门晨会',
						title2:"部门晨会",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_3.png',
						src:''
					},{
						title:'岗前培训',
						title2:"请参加岗前培训",
						time:'19/04/05 12:00 - 19/07/12 13:00',
						image:'/static/task_4.png',
						src:'/pages/train/train-detile'
					},
					 
					]
				}
				
				],
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
		methods: {

			// 导航栏点击
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
			nextTo(url){
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style>
	
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

	.content {
		width: 100%;
	}
	
	.media-list {
		position:relative;
		width: 100%;
		margin-top: 2upx;
		padding: 20upx 30upx;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}
	.add-time{
		position:absolute;
		right:30upx;
		top:20upx;
		font-size:24upx;
		color:#ccc;
	}
	.media-list-title{
		font-size:32upx;
	}
	.navigate-left{
		display: flex;
		align-items: center;
	}
	.media-list-logo {
		height:88upx;
		width: 88upx;
		padding:6upx;
		margin-right: 20upx;
	}
	.media-list-logo image {
		height: 100%;
		width: 100%;
		border-radius:50upx;
	}
	
	.navigate-right {
		height: 20upx;
		width: 12upx;
	/* 	margin-right: 10upx;
		margin-top: 20upx; */
	}
	
/* 	.navigate-right image {
		height: 100%;
		width: 100%;
	} */
	
	.media-list-body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}

	.media-list-text-top {
		width: 100%;
		color:#333;
		margin-bottom:5upx;
	}
	.media-list-text-top view{
		line-height: 1.4;
	}
	.media-list-describe {
		font-size:24upx;
		color:#999;
	}
	.media-list-text-bottom {
		width: 100%;
/* 		line-height: 30upx; */
		font-size: 24upx;
		color: #999;
	}
	.ellipsis {
		overflow: hidden; 
		white-space: nowrap; 
		text-overflow: ellipsis;
	}
	
</style>
