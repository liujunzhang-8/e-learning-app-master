<template>
	<view>
		<view id="top-box" class="cu-bar bg-white solid-bottom">
			<view class="header">
				<view>
					<text style="font-size: 36upx;">考试成绩：55</text>
					<text style="font-size:28upx;">用时：1分钟</text>
				</view>
				<view>
					<text style="font-size:1rem;">未通过</text>
				</view>
			</view>
		</view>
		<view class="color"></view>
		<!-- 表格 -->
		<view class="div-table">
			<view class="thead">
				<view class="th">
					<view class="td">     </view>
					<view class="td" style="color: #39B54A;">正确数</view>
					<view class="td" style="color: #ED1C24">错误数</view>
				</view>
			</view>
			<view class="tr">
				<view class="td">单选</view>
				<view class="td" style="color: #39B54A;">1题</view>
				<view class="td" style="color: #ED1C24">0题</view>
			</view>
			<view class="tr">
				<view class="td">多选</view>
				<view class="td" style="color: #39B54A;">0题</view>
				<view class="td" style="color: #ED1C24">1题</view>
			</view>
			<view class="tr">
				<view class="td">判断</view>
				<view class="td" style="color: #39B54A;">1题</view>
				<view class="td" style="color: #ED1C24">0题</view>
			</view>
			<view class="tr">
				<view class="td">填空</view>
				<view class="td" style="color: #39B54A;">0题</view>
				<view class="td" style="color: #ED1C24">1题</view>
			</view>
		</view>
		<view id="foot-box" class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="MoveSubject(-1)" style="border:2upx solid #ddd">
				上一题
			</view>
			<view class="action" @click="MoveSubject(1)" style="color: white;background: #FF8864;border:none">
				下一题
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color:#fff;
	height:100%;
}
#top-box{
	background-color:#fff;
	padding:44upx 0;
	height:auto;
}
.header{
		width:700upx;
		height:134upx;
		background-color:red;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		border-radius: 6upx;
		background-image:url('../../static/my_bg.jpg');
		background-size:cover;
	}
	.header view{
		display: flex;
		flex-direction: column;
		line-height: 1;
		justify-content: space-around;
		padding:20upx 30upx;
	}
	.header view text{
		color:#fff;
	}
	.color{
		height:10upx;
		background-color:#F4F5F6;
	}
.h1 {
	text-align: left;
	font-size: 30upx;
	font-weight: bold;
	padding: 10upx 0;
}
.wrap {
	margin: 20upx;
}
$div-table-border-color: #ccc;
$div-table-border-width: 1upx;


.div-table {
	margin:0 auto;
	margin-top:30upx;
	display: table;
	width:700upx;
	height: 100%;
	border: $div-table-border-width solid $div-table-border-color;
	box-sizing: border-box;
	table-layout: fixed;
	position: relative;
	.celspan {
		display: table;
		width: 100%;
		height: 100%;
		.td {
			display: table-cell;
			border: none !important;
		}
		.td + .td {
			border-left: $div-table-border-width solid $div-table-border-color !important;
		}
	}
	.rowspan {
		display: table;
		width: 100%;
		height: 100%;
		.tr {
			display: table-row;
			border: none !important;
		}
	}

	&.fixed-thead {
		.tbody,
		.thead,
		.tr,
		.th,
		.td {
			display: block;
		}
		.tr,
		.th {
			&:after {
				content: '';
				display: block;
				visibility: hidden;
				clear: both;
				height: 100upx;
			}
		}
		.td {
			float: left;
			width: 33.33%;
		}
		.tbody {
			height: 400upx;
			overflow-y: auto;
			overflow-x: hidden;
		}
	}

	.tr,
	.th {
		display: table-row;
		& + .tr,
		& + .th {
			.td,
			.th {
				border-top: $div-table-border-width solid $div-table-border-color;
				word-break: break-word;
			}
		}
	}
	.rowspan {
		.tr,
		.th {
			display: table-row;
			.td,
			.th {
				border: none;
			}
			& + .tr,
			& + .th {
				.td,
				.th {
					border-top: $div-table-border-width solid $div-table-border-color;
				}
			}
		}
	}
	.td {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		box-sizing: border-box;
		padding: 30upx;
		&.noPadding {
			padding: 0;
		}
		& + .td {
			border-left: $div-table-border-width solid $div-table-border-color;
		}
	}
	.th .td {
		font-weight: bold;
	}
	.tbody {
		display: table-row-group;
	}
	.thead {
		display: table-header-group;
		.tr,
		.th {
			.td,
			.th {
				border-bottom: $div-table-border-width solid $div-table-border-color;
			}
		}
	}
	.tfoot {
		display: table-footer-group;
		.tr,
		.th {
			.td,
			.th {
				border-top: $div-table-border-width solid $div-table-border-color;
			}
		}
	}
	.colgroup {
		display: table-column-group;
	}
	.col {
		display: table-column;
	}
	.caption {
		display: table-caption;
	}
}
	.foot{
		position: fixed;
		bottom:0;
		width: 100%;
		box-shadow: 0 0.5px 3px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: space-around;
		padding-bottom:46upx;
		padding-top:20upx;
	}
	.foot view{
		width:45%;
		text-align:center;
		height:72upx;
		border-radius: 6upx;
		line-height:72upx;
	}
</style>
