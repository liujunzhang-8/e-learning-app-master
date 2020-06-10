<template>
		<view class="curriculum-type-item">
			<view class="type-title"><text class="ccc">——</text><text class="type-title-text">{{list.title}}</text><text class="ccc">——</text></view>
			<uni-grid :options="list.typeList" 
				:show-border="false" column-num="3" isCurriculum="true">
			</uni-grid>
		</view>
</template>

<script>
	import uniGrid from "@/components/uni-my/my-curriculum-grid"//九宫格
	export default {
		name: 'curriculum-type-item',
		props:{
			list: {
				//上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
			},
		},
		components: {uniGrid},
		
	}
</script>

<style>
	.ccc{
		color:#ccc;
	}
	.type-title-text{
		margin:0 20upx;
	}
	.uni-grid-item{
		margin:10upx;
		box-shadow: 0px 20upx 30upx #f8f8f8;
		border-radius: 12upx;
	}
	.uni-grid-item-text{
		font-size:28upx;
	}
/* 	.uni-grid-item[data-v-7bdbcfa6]:before{
		padding-bottom:70%;
	} */
	.type-title{
		text-align: center;
		font-size:32upx;
		margin:30upx 0;
	}
</style>
