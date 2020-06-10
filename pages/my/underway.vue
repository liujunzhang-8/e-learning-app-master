<template>
	<view class="content">
		<view class="item">
			<image class="pic" src="../../static/train-detile_9.jpg"></image>
			<view class="info">
				<view>
					<view class="title">朝阳行业欢迎您</view>
					<view class="text">时长：<text class="times">{{datas[0].times.toFixed(2)}}</text>小时</view>
				</view>
				<view>
					<view class="text-pro">已学习<text >{{datas[0].percent+'%'}}</text></view>
					<progress class="progress" :percent="datas[0].percent" stroke-width="2" activeColor="#FFA500"></progress>
				</view>				
			</view>
		</view>
		<view class="item">
			<image class="pic" src="../../static/train-detile_10.jpg"></image>
			<view class="info">
				<view class="title">保险让生活更美好90天</view>
				<view class="text">时长：<text class="times">{{datas[1].times.toFixed(2)}}</text>小时</view>
				<view class="text-pro">已学习<text >{{datas[1].percent+'%'}}</text></view>
				<progress class="progress" :percent="datas[1].percent" stroke-width="2" activeColor="#FFA500"></progress>				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas:[	
					{times:2.00,percent:10},
					{times:3.00,percent:50}
				]	
			}
		}
	}
</script>

<style>
	page{
		background-color:#fff;
	}
	.content{
		/* margin: 20upx; */
	}
	.item{
		display: flex;
		padding: 20upx;
		background-color:#fff;
	}
	.pic{
		width: 250upx;
		height: 160upx;
		margin-right:24upx;
	}
	.info{
		flex:1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.title{
		font-size: 28upx;
	}
	.text{
		font-size: 24upx;
		color: #8F8F94;
	}
	.times{
		color: #ffa500;
	}
	.text-pro{
		font-size: 22upx;
		color: #8F8F94;
		/* text-align: right; */
		text-align: right;
	}
</style>
