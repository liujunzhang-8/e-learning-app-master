<template>

	<view>
		<view class="card" @click.native="nextTo">
			<view class="card-haader">
				<image src="../../static/mytrain_1.jpg"></image>
				<view class="card-title">李老师</view>
				<view class="card-time">2019.05.29</view>
			</view>
			<view class="card-content">
				<view class="img"><image src="../../static/train-detile_5.jpg"></image>
					<view>
						<view class="card-content-title"><text>岗前培训</text><text class="state">待参加</text></view>
						<view class="card-content-time">培训时间：6月1日至6月1日</view>
						<view class="card-content-text">简介：通过岗位要求的培训,新员工能够很快胜任岗位,提高工作效率,取得较好的工作业绩,起到事半功倍的效果</view>
					</view>
				</view>
			</view>
		</view>
		<view class="card" @click.native="nextTo">
			<view class="card-haader">
				<image src="../../static/mytrain_1.jpg"></image>
				<view class="card-title">张老师</view>
				<view class="card-time">2019.06.01</view>
			</view>
			<view class="card-content">
				<view class="img"><image src="../../static/train-detile_8.jpg"></image>
					<view>
						<view class="card-content-title"><text>岗前培训</text><text class="state">待参加</text></view>
						<view class="card-content-time">培训时间：6月1日至6月1日</view>
						<view class="card-content-text">简介：通过岗位要求的培训,新员工能够很快胜任岗位,提高工作效率,取得较好的工作业绩,起到事半功倍的效果</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card.vue"
	export default {
		data() {
			return {
				listData:[
					{identity:'班主任',addTime:"2019.12.12",title:"新员工入司培训",state:"待参加",time:"2019/12/12 12:00 - 2019/12/12 13:00",text:"培训描述培训描述培训描述培训描述培训描述培训描述培训描述"},
					{identity:'讲师',addTime:"2019.12.12",title:"新员工入司培训",state:"待参加",time:"2019/12/12 12:00 - 2019/12/12 13:00",text:"培训描述培训描述培训描述培训描述培训描述培训描述培训描述"}
				]
			}
		},
		methods: {
			nextTo(){
				uni.navigateTo({
					url: '/pages/train/train-detile'
				});
			}
		},
	}
</script>

<style>
	view{
		line-height: 1;
	}
	.card{
		margin:30upx;
		background-color:#fff;
		box-shadow: 0px 0upx 20upx #e5e5e5;
		padding:0 16upx;
		padding-bottom:30upx;
		border-radius: 12upx;
	}
	.card .card-haader{
		display: flex;
		align-items: center;
		height:80upx;
		line-height: 80upx;
		margin-bottom:30upx;
		border-bottom:1upx dashed #E8E8EA;
	}
	.card .card-haader .card-title{
		font-size:32upx;
		color:#333;
	}
	.card .card-haader image{
		width:30upx;
		height:34upx;
		margin-right:12upx;
	}
	.card .card-content .img{
		padding:0 20upx;
	}
	.card .card-title{
		flex:1;
		font-size:32upx;
		color:#333;
	}
	.card .card-time{
		flex: 0 0 auto;
		text-align: right;
		font-size:24upx;
		color:#999;
	}
	.card-content image{
		width:100%;
		height:240upx;
		margin-bottom:16upx;
	}
	.card-content-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size:32upx;
		color:#333;
		margin-bottom:6upx;
/* 		line-height: 1.2; */
	}
	.card-content-title .state{
		color:#FF993F;
		font-size:24upx;
		border:1upx solid #FF993F;
		padding:8upx 10upx;
		border-radius: 4upx;
	}
	.card-content-time{
		color:#999;
		font-size:24upx;
		margin-bottom:20upx;
	}
	.card-content-text{
		font-size:28upx;
		color:#333;
		line-height: 1.8;
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
</style>
