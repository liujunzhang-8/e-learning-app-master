<template>
	<view class="curriculum-item">
		<image :src="list.image" alt=""></image>
		<view class="hot-right">
			<view class="hot-title">
			{{list.title}}
			<view class="time-length">时长：<text>{{list.timeLength}} </text>分钟</view>
			</view>
			
			<view class="hot-evaluate">
				<view><image src="../../static/home_10.png"></image><text>{{list.peopleNumber}}人</text></view>
				<view><image src="../../static/home_11.png"></image><text>{{list.score}}分</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'curriculum-item',
		props:{
			list: {
				//上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
			},
		}
		
	}
</script>

<style>
	page{
		background-color:#fff;
	}
	.hot-list{
		margin-top:20upx;
	}
	.curriculum-item{
		display: flex;
		padding:30upx 0;
	}
	.curriculum-item:last-child{
		border:none;
	}
	.curriculum-item image{
		width:248upx;
		height:160upx;
		border-radius: 6upx;
	}
	.curriculum-item .hot-right{
		display: flex;
		flex-direction:column;
		margin-left:30upx;
		justify-content: space-between;
	}
	.curriculum-item .hot-title{
		font-size:32upx;
		line-height: 1.2;
	}
	.curriculum-item .time-length{
		font-size:28upx;
		color:#999;
	}
	.curriculum-item .time-length text{
		color:#FF993F;
	}
	.curriculum-item .hot-evaluate{
		display: flex;
		font-size:24upx;
		line-height:1.2;
		color:#999;
	}
	.curriculum-item .hot-evaluate view{
		display: flex;
		align-items: center;
		margin-right:40upx;
	}
	.hot-evaluate image{
		width:30upx;
		height:30upx;
		margin-right:12upx;
	}
</style>
