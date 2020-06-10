<template>
	<view class="conduct-item">
		<image :src="list.image" mode="aspectFill"></image>
		<text class="clamp">{{list.title}}</text>
	</view>
</template>

<script>
	export default {
		name: 'conduct-item',
		props:{
			list: {
				//上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
			},
		}
		
	}
</script>

<style>
	.conduct-item{
			/* width: 304upx;
			height:188upx; */
			margin-right: 30upx;
			font-size: 39upx;
			color: #303133;
			line-height: 1.2;
			text-align: center;
	}
	.conduct-item image{
			width: 304upx;
			height:188upx;
			border-radius: 9upx;
	}
	.clamp {
	    overflow: hidden;
	    -o-text-overflow: ellipsis;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    display: block;
		font-size:24upx;
		color:#999;
	}
	/* .seckill-section .conduct-item .price[data-v-1ba83716] {
	    color: #fa436a;
	} */
</style>
