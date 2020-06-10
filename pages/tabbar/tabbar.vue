<template>
	<view class="uni-tab-bar">
		<view>
			<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
				 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
			</scroll-view>
		</view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)" v-if="index1==0">
					<!-- <block v-for="(newsitem,index2) in tab.data" :key="index2">
						<media-list :options="newsitem" @close="close(index1,index2)" @click="goDetail(newsitem)"></media-list>
					</block> -->
					<view class="live-list container">
						<view class="img"><image src="../../static/people_1.png"></image></view>
						<view class="live-list-right">
							<view class="live-list-top"><text class="live-time">2019/6/19 10:00</text><text class="go-live">进入直播</text></view>
							<text class="live-title">开门红年金销售流程讲解</text>
							<view class="live-list-bottom"><text>讲师：李丽</text><text>寿险特邀培训师</text></view>
						</view>
					</view>
					<view class="live-list container">
						<view class="img"><image src="../../static/people_2.png"></image></view>
						<view class="live-list-right">
							<view class="live-list-top"><text class="live-time">2019/6/17 13:00</text><text class="go-live">进入直播</text></view>
							<text class="live-title">最适合的三类增员</text>
							<view class="live-list-bottom"><text>讲师：王大拿</text><text>寿险特邀培训师</text></view>
						</view>
					</view>
					<view class="live-list container">
						<view class="img"><image src="../../static/people_3.png"></image></view>
						<view class="live-list-right">
							<view class="live-list-top"><text class="live-time">2019/6/12 11:00</text><text class="go-live">进入直播</text></view>
							<text class="live-title">玩转社群营销</text>
							<view class="live-list-bottom"><text>讲师：王大拿</text><text>寿险特邀培训师</text></view>
						</view>
					</view>
					<!-- <block  v-for="(newsitem,index2) in listData" :key="index2">
						<live-item></live-item>
					</block> -->
					<!-- <view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view> -->
				</scroll-view>
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)" v-if="index1==1">
					<!-- <block v-for="(newsitem,index2) in tab.data" :key="index2">
						<media-list :options="newsitem" @close="close(index1,index2)" @click="goDetail(newsitem)"></media-list>
					</block> -->
					<view class="live-list container">
						<view class="img"><image src="../../static/people_1.png"></image></view>
						<view class="live-list-right">
							<view class="live-list-top"><text class="live-time">2019/6/19 10:00</text><text class="go-live">进入直播</text></view>
							<text class="live-title">开门红年金销售流程讲解</text>
							<view class="live-list-bottom"><text>讲师：王大拿</text><text>平安寿险高级讲师</text></view>
						</view>
					</view>
					<!-- <block  v-for="(newsitem,index2) in listData" :key="index2">
						<live-item></live-item>
					</block> -->
					<!-- <view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view> -->
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	// import mediaList from '@/components/tab-nvue/mediaList.vue';
	import liveItem from '@/components/sz-list-template/live-item.vue'
	export default {
		components: {
			// mediaList,
			liveItem
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
					name: '全部',
					id: 'guanzhu'
				}, {
					name: '营销',
					id: 'tuijian'
				}, {
					name: '风险管理',
					id: 'tiyu'
				}],
			}
		},
		onLoad() {
			this.newsitems = this.randomfn()
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/template/tabbar/detail/detail?title=' + e.title
				});
			},
			loadMore(e) {//加载更多
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				//追加数据在这里写
				// for (let i = 1; i <= 10; i++) {
				// 	this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
				// }
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.newsitems[index].data.length === 0) {
					this.addData(index)
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
					
				})
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex)
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
			randomfn() {//对应的加载更多
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingText: '加载更多...',
						data: []
					};
					if (i < 1) {
						for (let j = 1; j <= 10; j++) {
							// aryItem.data.push(tpl['data' + Math.floor(Math.random() * 5)]);
						}
					}
					ary.push(aryItem);
				}
				return ary;
			}
		}
	}
</script>

<style>
	.uni-tab-bar{
		background-color:#fff;
		z-index:999;
	}
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
/* 	uni-page-body {
    background-color: #F4F5F6;
    height: 100%;
    font-size: 14px;
    line-height: 1.8;
} */
	.live-list{
		display: flex;
		/* justify-content: space-between; */
		flex:1;
		box-sizing: border-box;
		border-bottom:1upx solid #ddd;
		background-color:#fff;
		padding:30upx;
		flex-direction:row;
	}
	.live-list .img image{
		width:150upx;
		height:150upx;
		border-radius: 50%;
		margin-right:30upx;
	}
	.live-list .live-list-right{
		flex:1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.live-list .live-list-top{
		display: flex;
		justify-content: space-between;
	}
	.live-list .live-time{
		font-size:28upx;
		color:#333;
	}
	.live-list .go-live{
		font-size:24upx;
		color:#999;
	}
	.live-title{
		font-size:32upx;
		color:#666;
		line-height: 1;
	}
	.live-list .live-list-bottom{
		font-size:24upx;
		color:#999;
	}
	.live-list .live-list-bottom text{
		margin-right:30upx;
	}
	.uni-tab-bar .active{
		color:#FF0000;
	}
</style>
