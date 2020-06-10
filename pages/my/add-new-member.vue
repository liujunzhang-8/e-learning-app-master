<template>
	<view class="padding-wrap common-pb">
		<view class="header-logo">
			<image src="/static/companglogo.png"></image>
		</view>
		<view class="hello-text common-pb">
			 快培训是由上海耸智信息科技公司打造的一款保险学习平台，主要给广大想从事保险行业的社会各界人士打开学习之窗。
		</view>
		
		<view class="bottom-btn">
				<!-- 增员记录 -->
				<view class="add-record">
					<button type="primary" @click="add()">增员记录</button>
				</view>
				<!-- 邀请好友	-->
				<view class="invite-friends">
					<button type="primary" @click="invite()">邀请好友</button>
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
			add () {  
				uni.navigateTo({
					url: '/pages/add-record'
				}); 		
            },
						
			invite() {  
	
            },						
		}
	}
</script>

<style>
	
	.padding-wrap{
		width:690upx;
		padding:0 30upx;
	}	
		
	.common-pb{
		padding-bottom:30upx;
	}
	
	.header-logo{
		text-align:center;
		padding-top:30upx;
	}
	
		
	.header-logo image{
		width: 400upx;
		height: 100upx;
	}
		
	.hello-text{
		text-align:left;
		margin-top:50upx;
		font-size: 35upx;
	}
		
	.bottom-btn{
		margin-top:650upx;
		display: flex;
		flex-direction: row;
	}	
		
	.add-record {
		width: 40%;
	}
		
	.add-record button{
		margin-left: 0upx;
		width: 80%;
	}
	
	.invite-friends {
		width: 60%;
	}
	
	.invite-friends button{
		margin-left: 0upx;
		width: 100%;
	}	

</style>
