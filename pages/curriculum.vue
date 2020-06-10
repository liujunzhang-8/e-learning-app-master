<template>
	<view>
		<view class="nextTo container" @tap="nextTo">
			<view class="all">
				<text class="all-text">全部课程</text>
				<text class="all-number">共6门课程</text>
			</view>
			<view class="you">
				<image src="../static/curriculum_1.png"></image>
				<image src="../static/fanhui.png" class="fanhui"></image>
			</view>
		</view>
		<view @tap="goNext">
			<curriculum-type-item v-for="(item,key) in list" :list="item" :key="key"></curriculum-type-item>
		</view>
	</view>
</template>

<script>
import curriculumTypeItem from "@/components/sz-list-template/curriculum-type-item.vue"//九宫格
export default {
	data() {
		return {
			list:[
				{
					title:'新人育成',
					typeList:[//九宫格
					{image:'../static/curriculum_2.png',text:'诚信守则'},
					{image:'../static/curriculum_3.png',text:'保险起源'},
					{image:'../static/curriculum_4.png',text:'保险的发展'},
					{image:'../static/curriculum_5.png',text:'保险与生活'},
					{image:'../static/curriculum_6.png',text:'新人必备技能'}]
				},{
					title:'风险与保险',
					typeList:[//九宫格
					{image:'../static/curriculum_7.png',text:'风险概述'},
					{image:'../static/curriculum_8.png',text:'风险管理'},
					{image:'../static/curriculum_9.png',text:'保险要素与特征'},
					{image:'../static/curriculum_10.png',text:'保险的分类'},
					{image:'../static/curriculum_11.png',text:'保险的功能'}]
				}
			]
		}
	},
	methods:{
		nextTo(){
			uni.navigateTo({
				url: '/pages/train/train-list'
			});
		},
		goNext(){
			uni.navigateTo({
				url: '/pages/train/train-list?type=岗前培训'
			});
		}
	},
	components: {curriculumTypeItem},
}
</script>
<style>
	/* 左右间距15upx 容器 */
	page{
		background-color:#fff;
		height:auto;
	}
	.nextTo{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin:30upx;
		border-radius: 10upx;
		padding:20upx;
		box-shadow: 0px 0upx 20upx #e5e5e5;
	}
	.nextTo image{
		width:100upx;
		height:100upx;
		margin-right:30upx;
	}
	.nextTo .all{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.nextTo .all .all-text{
		font-size:36upx;
	}
	.nextTo .all .all-number{
		font-size:24upx;
		color:#ccc;
	}
	.nextTo .you{
		display: flex;
		align-items: center;
	}
	.nextTo .you .fanhui{
		width:20upx;
		height:30upx;
	} 
</style>
