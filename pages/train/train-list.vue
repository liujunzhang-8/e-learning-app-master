<template>
	<view>
		<view style="background-color:#fff">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" tab-class="text-center bg-white wuc-tab" select-class="text-blue" @change="tabChange"></wuc-tab>
		</view>
<!--      <div class="bg-white padding margin text-center text-black">{{tabList[TabCur].name}}</div> -->
		<view class="container">
			<!-- <curriculum-item img1="../../../static/home_10.png" img2="../../static/home_11.png" v-for="(item,key) in curriculumList" :key="key" :list="item"></curriculum-item> -->
			<view class="curriculum-item" v-for="(item,key) in curriculumList" :key="key" @click="nextTo()">
				<image :src="item.image" alt=""></image>
				<view class="hot-right">
					<view class="hot-title">
					{{item.title}}
					<view class="time-length">时长：<text>{{item.timeLength}}</text>分钟</view>
					</view>
					
					<view class="hot-evaluate">
						<view><image src="../../static/home_10.png"></image><text>{{item.peopleNumber}}</text>人</view>
						<view><image src="../../static/home_11.png"></image><text>{{item.score}}</text>分</view>
					</view>
				</view>
			</view>
		</view>
	 </view>
</template>

<script>
import curriculumItem from '@/components/sz-list-template/curriculum-item.vue'
import WucTab from '@/components/wuc-tab/wuc-tab.vue';

export default {
    data() {
        return {
            tabList: [
				{ name: '全部' },
                { name: '诚信守则'},
                { name: '衔接训练' },
                { name: '菁英90天' },
                { name: '保险从业道德' },
                { name: '业务经营环节' },
                { name: '诚信经营' },
				{ name: '法商风险' },
				{ name: '风险管理师' },
				{ name: '健康风险' },
				{ name: '主顾开拓' },
				{ name: '个性销售行为' },
				{ name: '成交后销售' },
            ],
			curriculumList:[
				{image:'../../static/train-detile_1.jpg',title:"保险小百科",timeLength:15,peopleNumber:189,score:4.5},
				{image:'../../static/train-detile_7.jpg',title:"产品介绍",timeLength:45,peopleNumber:39,score:4.6},
				{image:'../../static/train-detile_6.jpg',title:"让耸智充满爱",timeLength:60,peopleNumber:121,score:4.5},
				{image:'../../static/train-detile_9.jpg',title:"朝阳行业欢迎你",timeLength:60,peopleNumber:121,score:4.5},
				{image:'../../static/train-detile_10.jpg',title:"保险让生活更美好",timeLength:60,peopleNumber:121,score:4.5},
				{image:'../../static/train-detile_4.jpg',title:"合规教育",timeLength:60,peopleNumber:121,score:4.5},
			],
            TabCur: 0,
        };
    },
	onLoad(option){
		if(option.type=="岗前培训"){
			this.TabCur=1
		}
	},

    components: { WucTab, curriculumItem},

    computed: {},

    methods: {
        tabChange(index) {
            this.TabCur = index;
        },
		nextTo(){
			uni.navigateTo({
				url: '/pages/train/train-item'
			});
		}
    },

    onReady() {}
};
</script>
<style>
/* @import "~@/styles/icon.scss"; */
div,
scroll-view,
swiper {
    box-sizing: border-box;
}
div {
  font-size: 28upx;
  background-color: #f1f1f1;
}
.swiper {
    height: 140upx;
}

.cu-bar {
    display: flex;
    position: relative;
    align-items: center;
    min-height: 100upx;
    justify-content: space-between;
}

.cu-bar .action {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    max-width: 100%;
  background-color: #ffffff;
}

.cu-bar .action:first-child {
    margin-left: 30upx;
    font-size: 30upx;
}

.solid,
.solid-bottom {
    position: relative;
}

.solid::after,
.solid-bottom::after{
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
}

.solid::after {
    border: 1upx solid rgba(0, 0, 0, 0.1);
}

.solid-bottom::after {
    border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
}

.text-orange{
  color:#f37b1d
}
.text-black{
  color:#333333;
}
.bg-white{
    background-color: #ffffff;
}

.padding {
    padding: 30upx;
}

.margin {
    margin: 30upx;
}

.margin-top {
    margin-top: 30upx;
}
.text-center {
    text-align: center;
}


.hot-list{
		margin-top:20upx;
	}
	.curriculum-item{
		display: flex;
		padding:30upx 0;
	}
	.curriculum-item:last-child{
		border:none;
	}
	.curriculum-item image{
		width:248upx;
		height:160upx;
		border-radius: 6upx;
	}
	.curriculum-item .hot-right{
		display: flex;
		flex-direction:column;
		margin-left:30upx;
		justify-content: space-between;
	}
	.curriculum-item .hot-title{
		font-size:32upx;
		line-height: 1.2;
	}
	.curriculum-item .time-length{
		font-size:28upx;
		color:#999;
	}
	.curriculum-item .time-length text{
		color:#FF993F;
	}
	.curriculum-item .hot-evaluate{
		display: flex;
		font-size:24upx;
		line-height:1.2;
		color:#999;
	}
	.curriculum-item .hot-evaluate view{
		margin-right:40upx;
	}
	.hot-evaluate image{
		width:30upx;
		height:30upx;
		margin-right:12upx;
	}
	
</style>