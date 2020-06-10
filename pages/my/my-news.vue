<template>
	<view>
		<view class='media-list' v-for="(listItem,listIndex) in list" :key="listIndex" @click="nextTo(listItem.src)">
			<view class="navigate-left">
				<view class="media-list-logo">
					<image :src="listItem.image"></image>
				</view>
				<view class="media-list-body">
					<view class="media-list-info"><view class="media-list-title">{{listItem.title}}</view><view class="media-list-time">19/12/12</view></view>
					<view class="media-list-describe">{{listItem.title2}}</view>
				</view>
			</view>
		</view>	
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
				list: [{
					title:'培训消息 - 保险从业资格考试',
					title2:'保险从业考试还有四天就要开始了',
					time:'19/06/19',
					image:'/static/task_1.png',
					src:'/pages/examination/examination'
				},{
					title:'系统消息 - 能力测评',
					title2:'Limra保险业务员能力测评',
					time:'19/06/05',
					image:'/static/task_4.png',
					src:'/pages/my/my-evaluation'
				},{
					title:'系统消息',
					title2:'保险专家平台升级啦 新增消息板块',
					time:'19/06/01',
					image:'/static/task_3.png',
				},{
					title:'增员消息',
					title2:'您增员的王先生已成功注册,感谢您的增员',
					time:'19/05/20',
					image:'/static/task_2.png',
				}]
			}
		},
		methods:{
			nextTo(url){
				uni.navigateTo({
					url: url
				});
			}
		}

	}
</script>

<style>
	.media-list {
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
	.media-list-title{
		font-size:32upx;
	}
	.navigate-left{
		display: flex;
		align-items: center;
		flex:1;
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
	.media-list-time{
		font-size:24upx;
		color:#ccc;
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
	.media-list-info{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ellipsis {
		overflow: hidden; 
		white-space: nowrap; 
		text-overflow: ellipsis;
	}	
</style>
