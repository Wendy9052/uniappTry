<template>
	<view class="index_page">
		<view class="top_part">
			<view class="searchBox">
				<van-icon name="search" />
				<input type="text" value="" class="search_ipt" />
			</view>
		</view>
		<uni-badge text="1"></uni-badge>
		<!-- 轮播图 -->
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular>
				<swiper-item>
					<view class="swiper_item" style="background: #333333;">Addd</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper_item" style="background: #808080;">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper_item" style="background: #C8C7CC;">C</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 五个图标选项 -->
		
		<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
			<view class="date_box">
				<view class="date_label">日期</view>
				<view class="date_text">{{date}}</view>
			</view>
		</picker>
		<scroll-view :scroll-top="scrollTop" class="scroll_box" scroll-y="true" @scroll="scroll" scroll-left="120">
			<view id="demo1" class="box">A</view>
			<view id="demo2" class="box">B</view>
			<view id="demo3" class="box">C</view>
		</scroll-view>
		<button type="default" @click="goTop">回到顶部</button>
		
		<view class="date_box">
			<text>幻灯片切换时长(ms)</text>
			<text class="info">{{duration}}</text>
		</view>
		<slider @change="durationChange" :value="duration" min="500" max="2000" />
		<view class="date_box">
			<text>自动播放间隔时长(ms)</text>
			<text class="info">{{interval}}</text>
		</view>
		<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
	</view>
</template>

<script>
	// import {uniBadge} from '@dcloudio/uni-ui'
	// import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
	// import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		// components: { WucTab },
		data() {
			return {
				TabCur: 0,
				tabList: [
					{ name: '文字' }, 
					{ name: '文字' },
					{ name: '三个字' },
					{ name: '四个字的' },
					{ name: '文字' },
				],
				active: 1,
				value: "", //搜索框中的值
				
				
				date:"",
				"buttonText":"按钮",
				"buttondisble":false,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {

		},
		methods: {
			swiperChange(e) {
				let { current } = e.target;
				this.TabCur2 = current;
			},
			tabChange(index) {
				this.TabCur = index;
			},
			// onChange(event) {
			// 	wx.showToast({
			// 		title: `切换到标签 ${event.detail.name}`,
			// 		icon: 'none',
			// 	});
			// },
			// 轮播图
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			// 区域滚动
			bindDateChange(e) {
				this.date = e.detail.value
				console.log((e))
			},
			scroll(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop(e) {
				this.scrollTop = this.old.scrollTop
				// this.$nextTick(() => {
				// 	this.scrollTop = 0
				// });
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.index_page{
	padding: 15px;
	.tab_part{
		.tab_class{
			// background: #C0C0C0;
			font-size: 14px;
			border-bottom: none;
		}
		.select_class{
			border-bottom: 1px solid #000000;
		}
	}
	.top_part{
		display: flex;
		justify-content: space-between;
		.searchBox{
			display: flex;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
			height: 30px;
			border-radius: 15px;
			text-indent: 5px;
			align-items: center;
			.search_ipt{
				width: 70vw;
			}
		}
	}
	.swiper_box{
		margin-top: 15px;
		margin-bottom: 15px;
		height: 170px;
		border-radius: 20px;
		overflow: hidden;
		.swiper{
			height: 100%;
			border-radius: 20px;
			.swiper_item{
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #ccc;
				color: #fff;
			}
		}
	}
	.scroll_box{
		height: 60px;
		margin-bottom: 15px;
		.box{
			height: 28px;
			// background: #ccc;
			text-align: center;
			background: rgba(0,0,0,.2);
			margin-bottom: 5px;
		}
	}
	.date_box{
		display: flex;
		justify-content: space-between;
		padding: 10px;
		box-shadow: 0 0 5px rgba(204,204,204,0.6);
		margin-bottom: 15px;
		margin-top: 15px;
		.date_label{
			font-size: 14px;
			color: #a5a5a5;
		}
		.date_text{
			font-size: 16px;
			color: #5a5a5a;
		}
	}
}
</style>
