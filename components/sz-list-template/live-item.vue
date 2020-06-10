<template>
	<view class="liveList container">
		<view class="img"><image src="../../static/home_9.png"></image></view>
		<view>
			<view><text>18:30</text><text>进入直播</text></view>
			<text>寿险保险业务培训：新手入门必修课</text>
			<view><text>讲师：某某某</text><text>平安寿险高级讲师</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'live-item',
		props:{
			list: {
				//上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
			},
		}
		
	}
</script>

<style>
	.liveList{
		display: flex;
		/* justify-content: space-between; */
		flex:1;
		box-sizing: border-box;
		border-bottom:1upx solid #ddd;
		background-color:#fff;
		padding:30upx;
	}
	.liveList .img image{
		width:150upx;
		height:150upx;
		border-radius: 50%;
	}
</style>
