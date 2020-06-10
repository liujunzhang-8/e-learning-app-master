<template>
	<view>
		<uni-nav-bar @click-left="left()" left-icon="back" left-text="" right-text="帮助" title="我的积分" background-color="transparent" fixed="true" color="#fff"></uni-nav-bar>
		<view class="header">
			<view>
				<view class="integral-number">100</view>
				<view class="integral-text">可用积分</view>
			</view>
		</view>
		<view class="body">
			<view class="body-item">
				<view class="body-item-number">0</view>
				<view class="body-item-text">今日收益</view>
			</view>
			<view class="body-item">
				<view class="body-item-number">100</view>
				<view class="body-item-text">本月收益</view>
			</view>
			<view class="body-item">
				<view class="body-item-number">100</view>
				<view class="body-item-text">累计收益</view>
			</view>
		</view>
		<view class="container curriculum">
			<view class="title">积分明细</view>
			<view class="more"><text>更多</text><image src="../../static/fanhui.png"></image></view>
		</view>
		<view class="integral-list container">
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">保险小百科</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">产品介绍</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">让耸智充满爱</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">朝阳行业欢迎你</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">新人培训</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">保险让生活更美好</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">合规教育</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">新人培训</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
			<view class="integral-list-item">
					<view>
						<view class="integral-list-item-title">新人培训</view>
						<view class="integral-list-item-time">2019/5/20 12:00</view>
					</view>
					<view class="integral-list-item-add">
						+10
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		methods:{
			left(){
				uni.navigateBack({
				    delta: 1
				});
			}
			
		},
		components: {uniNavBar}
	}
</script>

<style>
	view{
		line-height:1.4;
	}
	.header{
		width:100%;
		height:330upx;
		padding:44upx 32upx;
		box-sizing: border-box;
		background-image: url('../../static/my_bg.jpg');
		background-size:cover;
	}
	.header view{
		text-align: center;
		color:#fff;
		line-height: 1;
	}
	.integral-number{
		margin-top:80upx;
		font-size:96upx;
		margin-bottom:14upx;
	}
	.integral-text{
		font-size:28upx;
	}
	.body{
		display: flex;
		background-color:#fff;
		margin:0 30upx;
		margin-top:-30upx;
		margin-bottom:30upx;
		border-radius: 6upx;
		padding:24upx;
	}
	.body .body-item{
		flex:1;
		text-align: center;
		
		border-left:1upx solid #ddd;
	}
	.body .body-item:first-child{
		border-left:none;
	}
	.body .body-item .body-item-number{
		font-size:40upx;
		color:#666;
	}
	.body .body-item .body-item-text{
		font-size:24upx;
		color:#333;
	}
	.curriculum{
		background-color:#fff;
		display: flex;
		justify-content: space-between;
		height:88upx;
	}
	.curriculum .title{
		font-size:36upx;
		color:#333;
		line-height: 88upx;
	}
	.curriculum image{
		width:16upx;
		height:24upx;
		margin-left:6upx;
	}
	.curriculum .more{
		display: flex;
		line-height: 88upx;
		align-items: center;
		font-size:24upx;
		color:#ccc;
	}
	.integral-list{
		margin-top:30upx;
	}
	.integral-list-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom:30upx;
	}
	.integral-list-item-title{
		font-size:32upx;
		color:#666;
	}
	.integral-list-item-time{
		font-size:24upx;
		color:#999;
	}
	.integral-list-item-add{
		font-size:28upx;
		color:#ff993f;
	}
</style>
