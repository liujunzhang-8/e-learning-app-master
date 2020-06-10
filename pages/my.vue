<template>
	<view class="center">
		<view  class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title">
				<view class="logo-content">
					<text class="name">张大鹏</text>
					<view class="company"><text>上海分公司</text><text>浦东中支</text><text>张江营服</text></view>
					<view class="label"><text>精英学员</text><text>金牌讲师</text></view>
				</view>
				<view class="logo-right">
					<image class="qr-code" src="../static/qr_code.png"></image>
					<image class="go-login navigat-arrow" src="../static/my_fanhui.png"></image>
				</view>
			</view>
		</view>
		<view class="my-list" v-for="(item,key) in myList" :key="key">
			<view class="my-list-item" v-for="(item1,key1) in item" :key="key1" @click="goNext(item1)">
				<view class="item-left">
					<image :src="item1.image"></image>
					<text>{{item1.title}}</text>
				</view>
				<view class="item-right">
					<image src="../static/fanhui.png"></image>
				</view>
			</view>
		</view>
		<!-- <uni-list class="my-list" v-for="(item,key) in myList" :key="key">
			<uni-list-item @click="test(child.src)" v-for="(child,index) in item" :key="index" :title="child.title" 
				show-extra-icon="true" 
				:thumb="child.image">
			</uni-list-item>
		</uni-list> -->
	</view>
</template>


<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/my_logo.png',
				myList:[
					[
						{title:'我要增员',image:'/static/my_3.png',src:'/pages/my/add-new-member'},
						{title:'资格认证',image:'/static/my_4.png'},
						{title:'我的收藏',image:'/static/my_6.png',src:'/pages/my/underway'},
					],
					[
						{title:'我的社区',image:'/static/my_7.png'},
						{title:'我的护照',image:'/static/my_8.png'},
						{title:'我的积分',image:'/static/my_9.png',src:'/pages/my/my-integral'}
					],
					[
						{title:'讲师管理',image:'/static/headmaster_3.png',src:'/pages/lecturer/lecturer'},
						{title:'班主任管理',image:'/static/headmaster_5.png',src:'/pages/headmaster/headmaster'},
					],
					[
						{title:'我要反馈',image:'/static/my_10.png'},
						{title:'设置',image:'/static/my_11.png'},
					],
				],
				// backgroundDiv:{
				// 	backgroundImage:'url(' + require('../static/my_bg.png') + ')',
				// 	backgroundRepeat:'no-repeat',
				// 	backgroundSize:'100% 100%'
				// }
			}
		},
		methods: {
			goLogin() {
				if (!this.login) {
					console.log('点击前往登录');
				}
			},
			goNext(e){
				let url=e.src;
				uni.navigateTo({
					url: url
				});
			}
		},
		onLoad(){
			if(!this.sz.isDemo){
				this.myList=[
					[
						{title:'资格认证',image:'/static/my_4.png'},
						{title:'我的收藏',image:'/static/my_6.png',src:'/pages/my/underway'},
					],
					[
						{title:'我的护照',image:'/static/my_8.png'},
					],
					[
						{title:'讲师管理',image:'/static/headmaster_3.png',src:'/pages/lecturer/lecturer'},
						{title:'班主任管理',image:'/static/headmaster_5.png',src:'/pages/headmaster/headmaster'},
					],
					[
						{title:'我要反馈',image:'/static/my_10.png'},
						{title:'设置',image:'/static/my_11.png'},
					],
				]
			}
		},
		components: {uniList,uniListItem}
	}
</script>

<style>
	page,
	view {
		display: flex;
	}

/* 
	page {
		background-color: #f8f8f8;
	} */
	page{
		min-height:auto;
	}
	.center {
		flex-direction: column;
	}

	.logo {
		width: 750upx;
		height: 300upx;
		padding: 40upx 30upx;
		padding-top:180upx;
		padding-bottom:130upx;
		box-sizing: border-box;
		background-image: url('../static/my_bg.jpg');
		background-size:cover;
		flex-direction: row;
		align-items: center;
		margin-bottom:20upx;
		
	}
	.logo .navigat-arrow{
		width:18upx;
		height:26upx;
	}
	.logo view{
		line-height: 1.2;
	}
	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 128upx;
		height: 128upx;
		border-radius: 150upx;
	}
	.logo-content .name{
		font-size:36upx;
		color:#fff;
	}
	.logo-content .company text{
		font-size:24upx;
		color:#fff;
		margin-right:6upx;
	}
	.logo-content .label text{
		line-height: 1.2;
		border:1upx solid #fff;
		color:#fff;
		font-size:24upx;
		padding:4upx 10upx;
		border-radius: 5upx;
		margin-right:10upx;
	}
	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}

	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}

	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}
	.logo-content{
		display: flex;
		height:100%;
		flex-direction:column;
		justify-content: space-around;
	}
	.logo-right{
		display: flex;
		align-items: center;
	}
	.qr-code{
		width:46upx;
		height:46upx;
		margin-right:14upx;
	}
	.my-list{
		display: block;
		margin-bottom:20upx;
		background-color:#fff;
		padding-left:30upx;
		flex-direction: column;
	}
	.my-list .my-list-item{
		box-sizing: border-box;
		display: flex;
		height:100upx;
		width:100%;
		padding-right:30upx;
		justify-content: space-between;
		align-items: center;
		border-bottom:1upx solid #EBEBEA;
		
	}
	.my-list .my-list-item .item-left{
		display: flex;
		align-items: center;
	}
	.my-list .my-list-item .item-left{
		font-size:28upx;
		color:#333;
	}
	.my-list .my-list-item .item-left image{
		width:32upx;
		height:32upx;
		margin-right:20upx;
	}
	.my-list .my-list-item .item-right image{
		width:18upx;
		height:30upx;
	}
</style>
