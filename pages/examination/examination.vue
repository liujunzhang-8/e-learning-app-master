<template>
	<view>
		<view id="top-box" class="cu-bar bg-white solid-bottom">
			<view class="header">
				<view>
					<text class="title">测试考试</text>
				</view>
				<view>
					<text class="text">必考</text>
				</view>
			</view>
		</view>
		<view class="color"></view>
		<view class="table">
			<view class="table-item">
				<view class="table-number">5题</view>
				<view class="table-text">题目数量</view>
			</view>
			<view class="table-item">
				<view>5题</view>
				<view>题目数量</view>
			</view>
			<view class="table-item">
				<view>5题</view>
				<view>题目数量</view>
			</view>
			<view class="table-item">
				<view>5题</view>
				<view>题目数量</view>
			</view>
		</view>
		<view class="color"></view>
		<!-- foot -->
		<view class="footer">
			<view class="text">若考试未通过可参加重考，次数不限</view>
			<button @click="startExamine()">开始考试</button>
		</view>

	</view>
</template>

<script>
	import uniGrid from "@/components/uni-my/examination-grid"
	export default{
		components: {uniGrid},
		
		methods: {
			startExamine() {
				uni.navigateTo({
					url:'/pages/examination/examine'
				});
			},
		}	
	}
	
</script>

<style>
	@import "../../common/main.css";
	@import "../../common/icon.css";
/* 	@import "../../colorui/animation.css"; */

	page {
		background-color: #FFFFFF;
	}
	#top-box{
		padding:44upx 0;
	}
	.cu-form-group {
		justify-content: flex-start
	}

	.cu-form-group .title {
		padding-left: 30upx;
		padding-right: 0upx;
	}

	.cu-form-group+.cu-form-group {
		border-top: none;
	}

	.cu-bar-title {
		min-height: 50upx;
	}

	.cu-list.menu>.cu-item-error {
		justify-content: flex-start;
	}
	.header{
		display: flex;
		width:700upx;
		height:134upx;
		background-image:url('../../static/my_bg.jpg');
		background-size:cover;
		margin:0 auto;
		justify-content: space-between;
		border-radius: 6upx;
	}
	.header view{
		line-height: 134upx;
		padding:0 30upx;
	}
	.header .title{
		font-size:36upx;
		color:#fff;
	}
	.header .text{
		font-size:28upx;
		color:#fff;
	}
	.table{
		display: flex;
		flex-wrap:wrap;
		background-color:#fff;
		margin:10upx 0;
	}
	.table view{
		line-height: 1.4;
	}
	.table .table-item{
		width:50%;
		text-align: center;
		margin:46upx 0;
	}
	.table .table-item:nth-child(even){
		border-left: 1upx solid #f5f5f5;
	}
	.table-number{
		font-size:40upx;
		color:#333;
	}
	.table-text{
		font-size:24upx;
		color:#333;
	}
	.color{
		background-color:#F4F5F6;
		height:10upx;
	}
	.cu-bar.tabbar .action{
		background-color:#FF8864;
		border:none;
	}
	.footer{
		width:100%;
		position: fixed;
		bottom:0;
		text-align: center;
		border-top:2upx solid #e3e3e3;
	}
	.footer .text{
		font-size:24upx;
		color:#999;
		padding:18upx;
	}
	.footer button{
		width:700upx;
		background-color:#FF8864;
		height:72upx;
		line-height: 72upx;
		border-radius: 6upx;
		color:#fff;
		font-size:36upx;
		margin-bottom:46upx;
	}
</style>
