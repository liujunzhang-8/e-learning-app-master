<template>
	<view>
		<view class="add-list">
			<view class="add-list-item">
				<text class="list-title">培训类型</text>
				<picker mode = "selector" :range="['制式','非制式','堂授','非堂授']">
					<view class="add-list-right">
						<text>制式</text>
						<image class="fanhui" src="../../static/fanhui.png"></image>
					</view>
				</picker>
			</view>
			<view class="add-list-item">
				<text class="list-title">培训名称</text>
				<input style="text-align:right" type="text" placeholder="请输入" placeholder-style="text-align:right">
			</view>
			<view class="add-list-item">
				<text class="list-title">培训地点</text>
				<view class="add-list-right">
					<image class="fanhui" src="../../static/address.png" style="width:28upx;height:36upx;"></image>
				</view>
			</view>
			<view class="add-list-item">
				<text class="list-title">开始时间</text>
				
				<view class="add-list-right">
					<ruiDatePicker
					fields="second"
					start="2010-00-00 00:00:00"
					end="2030-12-30 23:59:59"
					:value="value"
					@change="bindChange"
					@cancel="bindCancel"
				></ruiDatePicker>
					<image class="fanhui" src="../../static/fanhui.png"></image>
				</view>
			</view>
			<view class="add-list-item">
				<text class="list-title">结束时间</text>
				<view class="add-list-right">
					<ruiDatePicker
						fields="second"
						start="2010-00-00 00:00:00"
						end="2030-12-30 23:59:59"
						:value="value"
						@change="bindChange"
						@cancel="bindCancel"
					></ruiDatePicker>
					<image class="fanhui" src="../../static/fanhui.png"></image>
				</view>
			</view>
			<view class="add-list-item">
				<text class="list-title">参与人</text>
				<picker mode = "selector" :range="['1','2','3','4']">
					<view class="add-list-right">
						<text>38</text>
						<image class="fanhui" src="../../static/fanhui.png"></image>
					</view>
				</picker>
			</view>
			<view class="add-list-item">
				<text class="list-title">培训模板</text>
				<picker mode = "selector" :range="['经典课程模板','堂训模板一','直播在线课程模板']">
					<view class="add-list-right">
						<text>模板</text>
						<image class="fanhui" src="../../static/fanhui.png"></image>
					</view>
				</picker>
			</view>
		</view>
		<view class="activity-info">
			<view class="activity-info-title">活动详情</view>
			<textarea class="textarea" placeholder="请输入"/>
		</view>
		
		
		<view class="add-list">
			<view class="add-list-item">
				<text class="list-title">需要签到</text>
					<view class="add-list-right">
						<image class="fanhui" src="../../static/fanhui.png"></image>
					</view>
			</view>
			<view class="add-list-item">
				<text class="list-title">需要签退</text>
					<view class="add-list-right">
						<image class="fanhui" src="../../static/fanhui.png"></image>
					</view>
			</view>
		</view>
		<view class="footer">
			<view>取消培训</view>
			<view style="border:none;background-color:#FF8864;color:#fff">提交</view>
		</view>
	</view>
</template>

<script>
	import ruiDatePicker from '@/components/rattenking-dtpicker/rattenking-dtpicker.vue';
	export default {
		components: {ruiDatePicker}
	}
</script>

<style>
	view{
		line-height: 1.4;
	}
	.add-list{
		background-color:#fff;
	}
	.add-list .add-list-item{
		box-sizing: border-box;
		width:100%;
		display: flex;
		justify-content: space-between;
		padding:20upx 30upx;
		border-bottom:2upx solid #ddd;
	}
	.add-list .list-title{
		font-size:30upx;
		color:#333;
	}
	.add-list-right{
		display: flex;
		align-items: center;
	}
	.add-list-right text{
		
	}
	.add-list-right .fanhui{
		width:16upx;
		height:26upx;
		margin-left:22upx;
	}
	.activity-info{
		margin-top:20upx;
		background-color:#fff;
		padding:20upx 30upx;
		margin-bottom:20upx;
	}
	.textarea{
		margin-top:20upx;
		width:100%;
		height:200upx;
	}
	.footer{
		display: flex;
		bottom:0;
		width:100%;
		position: fixed;
		background-color:#fff;
		justify-content:space-around;
	}
	.footer view{
		flex:1;
		margin:18upx 24upx;
		height:72upx;
		border:1px solid #ddd;
		text-align: center;
		line-height: 72upx;
		border-radius: 6upx;
		font-size:36upx;
	}
</style>
