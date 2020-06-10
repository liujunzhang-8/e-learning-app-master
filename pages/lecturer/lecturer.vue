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
				{image:'../../static/headmaster_7.png',text:'课程'},],
				column2:[//九宫格
				{image:'../../static/headmaster_4.png',text:'课程统计'},
				{image:'../../static/headmaster_5.png',text:'学员统计'},
				{image:'../../static/headmaster_7.png',text:'考试统计'},
				],
			}
		},
		methods: {
			// test(e){
			// 	if(e.index==0){
			// 		uni.navigateTo({
			// 			url: '/pages/train/train-item'
			// 		});
			// 	}
			// }
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
