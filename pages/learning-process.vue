<template>
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
		</view>
		<!-- 数据表格 -->
		<view class="container data-table">
			<view class="table-item" v-for="(item,key) in tabList" :key="key">
				<view><text class="time">{{item.time}}</text><text class="company">{{item.company}}</text></view>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
		
		<view class="study-trajectory container">
			<view class="title"><text class="title-text">学习轨迹</text><view class="title-right" @click="more()">更多<image src="../static/fanhui.png"></image></view></view>
			<!-- <uni-steps class="time-axis" :data="livelist" direction="column" :active="2"></uni-steps> -->
			<view class="uni-timeline" style="padding: 0upx 0upx;background-color: #fff;" @click="nextTo()">
				<view class="uni-timeline-item uni-timeline-first-item">
					<view class="uni-timeline-item-keynode">6.06</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">保险小百科</view>
						<view class="uni-timeline-item-text"><image src="../static/people_1.png"></image><text>讲师：朱燕</text>寿险特邀培训师</view>
					</view>
				</view>
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">6.05</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">产品介绍</view>
						<view class="uni-timeline-item-text"><image src="../static/people_2.png"></image><text>讲师：张迪</text>寿险特邀培训师</view>
					</view>
				</view>
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">6.04</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">让耸智充满爱</view>
						<view class="uni-timeline-item-text"><image src="../static/people_3.png"></image><text>讲师：王炸炸</text>寿险特邀培训师</view>
					</view>
				</view>
				
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">6.03</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">朝阳行业欢迎你</view>
						<view class="uni-timeline-item-text"><image src="../static/people_4.png"></image><text>讲师：牛丽</text>寿险特邀培训师</view>
					</view>
				</view>
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">6.02</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">保险让生活更美好</view>
						<view class="uni-timeline-item-text"><image src="../static/people_5.png"></image><text>讲师：朱丹</text>寿险特邀培训师</view>
					</view>
				</view>
				<view class="uni-timeline-item uni-timeline-last-item">
					<view class="uni-timeline-item-keynode">6.01</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">
						<view class="uni-timeline-item-title">合规教育</view>
						<view class="uni-timeline-item-text"><image src="../static/people_6.png"></image><text>讲师：李萍萍</text>寿险特邀培训师</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from "@/components/uni-steps/uni-steps.vue"//时间轴
	import uCharts from '@/js_sdk/u-charts/components/u-charts/u-charts.js';//图表
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				livelist:[//时间轴数据
					{title:'买家下单',desc:'2018-11-11'},
					{title:'卖家发货',desc:'2018-11-12'},
					{title:'买家签收',desc:'2018-11-13'},
					{title:'交易完成',desc:'2018-11-14'}],
				tabList:[
					{title:'累计学习',company:"分钟",time:"175"},
					{title:'学习时间',company:"天",time:"6"},
					{title:'今日学习',company:"分钟",time:"0"},
					{title:'日均学习',company:"分钟",time:"26"},
				],
					
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
			if(!this.sz.isDemo){
				this.tabList=[
					{title:'累计学习',company:"分钟",time:"175"},
					{title:'学习时间',company:"天",time:"6"},
					{title:'今日学习',company:"分钟",time:"0"},
					{title:'获得勋章',company:"枚",time:"3"},
				]
			}
		},  
		methods: {
			getServerData(){
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let LineA={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						// LineA.categories=res.data.data.LineA.categories;
						LineA.categories=['6.1','6.2','6.3','6.4','6.5','6.6','6.7']
						// LineA.series=res.data.data.LineA.series;
						LineA.series=[
							{
								color:"#FF8864",
								data:[55,10,30,20,50,10],
								name: "学习时间",
								type: "line"
							}
						]
						_self.showLineA("canvasLineA",LineA);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			nextTo(){
				uni.navigateTo({
					url: '/pages/train/train-item'
				});
				
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:13,
					legend:true,
					dataLabel:false,
					dataPointShape:true,
					background:'red',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
						disableGrid:true
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:6,
						min:0,
						max:60,
						disabled:true,
						format:(val)=>{return val.toFixed(0)+'分钟'}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'curve'
						}
					}
				});
				
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			more(){
				uni.navigateTo({
					url: '/pages/my/study-record'
				});
			}
		},
		components: {uniSteps}
		// onNavigationBarButtonTap(e){
		// 	console.log(e)
		// }
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	page{
		height:auto;
	}
	.qiun-charts {
		width: 750upx;
		height: 500upx;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
	}
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
		font-size:36upx;
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
	.study-trajectory .title{
		height:80upx;
		line-height:80upx;
		position:relative;
		display: flex;
		justify-content: space-between;
	}
	.study-trajectory .title image{
		width:16upx;
		height:24upx;
		margin-left:6upx;
	/* 		vertical-align:middle; */
	}
	.study-trajectory .title-text{
		font-size:36upx;
			/* font-weight: 600; */
		color:#333;
	}
	.study-trajectory .title-right{
		display: flex;
		align-items: center;
		font-size:24upx;
		color:#ccc;
		line-height:80upx;
	}
	.time-axis{
		background-color:#fff;
		padding:0 30upx;
	}
	
	
	
	
	/* 时间轴样式修改 */
	.uni-timeline-item .uni-timeline-item-divider{
		background-color:#ccc;
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
	.uni-timeline-item .uni-timeline-item-divider{
		width:33upx;
		height:33upx;
	}
	.uni-timeline-last-item .uni-timeline-item-divider{
		background-color:#ccc;
	}
	.uni-timeline-item-title{
		font-size:32upx;
		
	}

</style>
