<template>
	<view class="index_page">
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
		<!-- 轮播图 -->
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular>
				<swiper-item>
					<view class="swiper_item" style="background: #333333;">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper_item" style="background: #808080;">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper_item" style="background: #C8C7CC;">C</view>
				</swiper-item>
			</swiper>
		</view>
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
	export default {
		data() {
			return {
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
				this.$nextTick(() => {
					this.scrollTop = 0
				});
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
	.swiper_box{
		margin-top: 15px;
		margin-bottom: 15px;
		.swiper{
			height: 60px;
			.swiper_item{
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #ccc;
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
