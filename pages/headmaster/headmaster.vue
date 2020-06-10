<template>
	<view>
		<view class="grid">
			<view class="grid-title">日常管理</view>
			<uni-grid :options="column" 
				:show-border="true" column-num="3" @click="test" :show-out-border="false">
			</uni-grid>
		</view>
		<view class="grid">
			<view class="grid-title">数据统计</view>
			<uni-grid :options="column2" 
				:show-border="true" column-num="3" :show-out-border="false">
				
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-my/my-grid.vue"//九宫格
	export default {
		data() {
			return {
				column:[//九宫格
				{image:'../../static/home_1.png',text:'培训',url:'/pages/headmaster/admin'},
				{image:'../../static/headmaster_2.png',text:'会议',url:'/pages/headmaster/add-meeting'},
				{image:'../../static/headmaster_3.png',text:'班级'},],
				column2:[//九宫格
				{image:'../../static/headmaster_4.png',text:'课程统计'},
				{image:'../../static/headmaster_5.png',text:'培训统计'},
				{image:'../../static/headmaster_6.png',text:'讲师统计'},
				{image:'../../static/headmaster_7.png',text:'考试统计'},
				],
			}
		},
		methods: {
			test(e){
				let url=this.column[e.index].url;
				console.log(url)
					uni.navigateTo({
						url: url
					});
			}
		},
		components:{uniGrid}
	}
</script>

<style>
	.grid{
		background-color:#fff;
		margin:20upx;
		border-radius: 20upx;
		overflow: hidden;
	}
	.grid .grid-title{
		padding:30upx;
		border-bottom:2upx solid #c8c7cc;
	}
</style>
