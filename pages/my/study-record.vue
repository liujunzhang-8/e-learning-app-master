<template>
	<view>
		<view class="container data-table" style="border-bottom:2upx solid #f5f5f5">
			<view class="table-item" v-for="(item,key) in tabList" :key="key">
				<view><text class="time">{{item.time}}</text><text class="company">{{item.company}}</text></view>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
		<view class="container data-table">
			<view class="table-item" v-for="(item,key) in tabList2" :key="key">
				<view><text class="time">{{item.time}}</text><text class="company">{{item.company}}</text></view>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
		<view class="tips">再忙也不能忘记学习，记得每天来哦</view>
		<view class="container">
		<view class="month">
			<text>六月</text>
		</view>
		<view class="uni-timeline container" style="padding: 0upx 0upx;background-color: #fff;">
			<view class="uni-timeline-item uni-timeline-first-item">
				<view class="uni-timeline-item-keynode">6.06</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-title">助新人留存，享首续共赢</view>
					<view class="uni-timeline-item-text"><image src="../../static/people_1.png"></image><text>讲师：朱燕</text>寿险特邀培训师</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-keynode">6.05</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-title">财富如何传承才能不缩水 </view>
					<view class="uni-timeline-item-text"><image src="../../static/people_2.png"></image><text>讲师：张迪</text>寿险特邀培训师</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-keynode">6.04</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-title">政企大客户营销</view>
					<view class="uni-timeline-item-text"><image src="../../static/people_3.png"></image><text>讲师：王炸炸</text>寿险特邀培训师</view>
				</view>
			</view>
			
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-keynode">6.03</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-title">实用演讲技巧</view>
					<view class="uni-timeline-item-text"><image src="../../static/people_4.png"></image><text>讲师：牛丽</text>寿险特邀培训师</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-keynode">6.02</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-title">营销竞争力</view>
					<view class="uni-timeline-item-text"><image src="../../static/people_5.png"></image><text>讲师：朱丹</text>寿险特邀培训师</view>
				</view>
			</view>
			<view class="uni-timeline-item uni-timeline-last-item">
				<view class="uni-timeline-item-keynode">6.01</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-title">冲刺百万精英</view>
					<view class="uni-timeline-item-text"><image src="../../static/people_6.png"></image><text>讲师：李萍萍</text>寿险特邀培训师</view>
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
					{title:'累计学习',company:"分钟",time:"175"},
					{title:'连续学习',company:"天",time:"6"},
					{title:'今日学习',company:"分钟",time:"0"},
					{title:'人均时间',company:"分钟",time:"26"},
				],
				tabList2:[
					{title:'参加培训',company:"场",time:"2"},
					{title:'参与课程',company:"个",time:"5"},
					{title:'参加直播',company:"个",time:"1"},
					{title:'参加考试',company:"次",time:"2"},
				]		
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color:#fff;
	}
	/* 表格 */
	.data-table{
		display: flex;
		padding:20upx 0;
		background-color:#fff;
		height:100upx;
	}
	.data-table>view{
		flex:1;
	}
	.data-table .time{
		font-size:32upx;
		color:#FF8864;
	}
	.data-table .company{
		font-size:24upx;
		color:#ccc;
	}
	.data-table .title{
		font-size:24upx;
		color:#333;
	}
	.data-table .table-item{
		display: flex;
		text-align: center;
		flex-direction:column;
		justify-content: space-between;
	}
	.study-trajectory{
		background-color:#fff;
	}
	.study-trajectory .title{
		margin:20upx 0;
		width:100%;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items:center;
	}
	.study-trajectory .title-text{
		font-size:36upx;
	}
	.study-trajectory .title-right{
		font-size: 13px;
		color: #ccc;
	}
	
	.time-axis{
		background-color:#fff;
		padding:0 30upx;
	}
	/* 表格 */
	.tips{
		text-align: center;
		font-size:28upx;
		color:#666;
		border-bottom:1upx solid #f5f5f5;
		margin:0 30upx;
		padding:20upx 0;
	}
	/* 时间轴样式修改 */
	.uni-timeline{
		margin:0;
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
	.uni-timeline-last-item .uni-timeline-item-divider{
		background-color:#ccc;
	}
	.uni-timeline-item-title{
		font-size:32upx;
		
	}
		.table-item{
		position:relative;
	}
	.table-item+.table-item:before{
		content:"";
		position:absolute;
		width:2upx;
		top:0upx;
		height:100upx;
		background-color:#f5f5f5;
		left:0;
		
	}
	.month{
		font-size:36upx;
		color:#333;
		padding:20upx 0;
	}
</style>
