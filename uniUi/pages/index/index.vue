<template>
	<view class="index_page">
		<view class="top_part">
			<uni-icons color="#999999" type="calendar-filled" size="25"></uni-icons>
			<view class="searchBox">
				<uni-search-bar @confirm="search" @input="input" bgColor="#F8F8F8" class="search_ipt" maxlength="100">
					<uni-icons slot="searchIcon" color="#999999" size="18" type="search" />
				</uni-search-bar>
			</view>
			<uni-icons color="#999999" type="calendar-filled" size="25"></uni-icons>
		</view>
		<view class="tab_box_outer">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" tab-class="tab_list" select-class="select_tab" textFlex @change="tabChange"></wuc-tab>
			<swiper class="tab_swiper" :current="TabCur" duration="300" @change="swiperChange">
			  <swiper-item class="tab_swiper_item" v-for="(item,index) in tabList" :key="index">
			    <view v-if="item.id == 1">
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
					<view class="icon_box_outer">
						<view class="icon_box">
							<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
							<text class="icon_text">文字</text>
						</view>
						<view class="icon_box">
							<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
							<text class="icon_text">文字</text>
						</view>
						<view class="icon_box">
							<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
							<text class="icon_text">文字</text>
						</view>
						<view class="icon_box">
							<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
							<text class="icon_text">文字</text>
						</view>
						<view class="icon_box">
							<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
							<text class="icon_text">文字</text>
						</view>
					</view>
					<!-- 运势语音 -->
					<view class="banner_box">
						
					</view>
					<!-- 左右滑动 -->
					<scroll-view class="scroll_box_outer" scroll-x upper-threshold="100vw">
						<view class="scroll_item_box">
							<view v-for="(item,index) in 5" :key="item.id" class="scroll_item">
								{{item}}
							</view>
						</view>
					</scroll-view>
					<!-- 猜你喜欢 -->
					<view class="title_text">猜你喜欢</view>
					<view class="like_box">
						<view v-for="(item,index) in 6" class="like_box_item">
							<view class="cover_box">
								
							</view>
						</view>
					</view>
				</view>
			  </swiper-item>
			</swiper>
		</view>
		<!-- <uni-badge text="1"></uni-badge> -->
		<!-- uni-ui的轮播图 -->
		<!-- <view class="swiper_outer">
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							{{item.content}}
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view> -->
		<!-- 轮播图 -->
		<!-- <view class="swiper_box">
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
		</view> -->
		<!-- 五个图标选项 -->
		<!-- <view class="icon_box_outer">
			<view class="icon_box">
				<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
				<text class="icon_text">文字</text>
			</view>
			<view class="icon_box">
				<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
				<text class="icon_text">文字</text>
			</view>
			<view class="icon_box">
				<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
				<text class="icon_text">文字</text>
			</view>
			<view class="icon_box">
				<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
				<text class="icon_text">文字</text>
			</view>
			<view class="icon_box">
				<uni-icons color="#999999" type="calendar-filled" size="45"></uni-icons>
				<text class="icon_text">文字</text>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {uniBadge} from '@dcloudio/uni-ui'
	// import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		components: { WucTab },
		data() {
			return {
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				}],
				current: 0,
				mode: 'dot',
				TabCur: 0,
				tabList: [
					{ id:1,name: '智博' }, 
					{ id:2,name: '推荐' },
					{ id:3,name: '桄卜狙' },
					{ id:4,name: '圣印链刃' },
					{ id:5,name: '分类' },
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
			change(e) {
				this.current = e.detail.current;
			},
			swiperChange(e) {
				let { current } = e.target;
				this.TabCur = current;
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
	// height: 200vh;
	height: auto;
	.tab_box_outer{
		padding-top: 10px;
		// height: 100%;
		height: 200vh;
		// padding-left: 15px;
		// padding-right: 15px;
		.tab_swiper{
			height: 100%;
			.tab_swiper_item{
				width: 200vw;
				background: #ccc;
				.like_box{
					// background: pink;
					width: 100%;
					display:flex;
					flex-wrap: wrap;
					height: auto;
					.like_box_item{
						width: calc(calc(100% / 3) - 10px);
						margin:5px;
						// height:50px;
						box-sizing: border-box;
						border:1px  solid #000;
						.cover_box{
							content:"";
							display: inline-block;
							padding-bottom: 100%;
						}
					}
				}
				.title_text{
					font-size: 14px;
					color: #333333;
					// font-weight: bold;
				}
				.scroll_box_outer{
					background: pink;
					height: 100px;
					padding: 15px 0; 
					width: 100%;
					
					.scroll_item_box{
						width: 100%;
						display: flex;
						.scroll_item{
							width: 100px;
							height: 100px;
							background: #F0AD4E;
							border-radius: 10px;
							margin-right: 8px;
							flex-grow:0;
							flex-shrink:0;
						}
					}
				}
				.banner_box{
					// background: pink;
					background: #76868c;
					height: 100px;
					border-radius: 10px;
				}
				.icon_box_outer{
					display: flex;
					justify-content: space-between;
					.icon_box{
						display: flex;
						flex-direction: column;
						align-items: center;
						.icon_text{
							font-size: 12px;
							margin-top: 5px;
						}
					}
					.icon_btn{
					}
				}
			}
		}
		.select_tab{
			color: #000;
			font-weight: bold;
			border-bottom: 1px solid #000;
		}
		.tab_list{
			width: 100%;
			// background: pink;
			display: flex;
			color: #303133;
			
		}
		
	}
	.swiper_box{
		margin-top: 15px;
		margin-bottom: 15px;
		height: 170px;
		width: 100%;
		background: yellow;
		// border-radius: 20px;
		// overflow: hidden;
		.swiper{
			height: 100%;
			width: 100%;
			background: pink;
			// border-radius: 20px;
			.swiper-item {
				height: 100%;
			}
			.swiper_item{
				background: green;
				border-radius: 10px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #ccc;
				color: #fff;
				.item_content{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.top_part{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.searchBox{
			display: flex;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
			height: 25px;
			border-radius: 15px;
			text-indent: 5px;
			align-items: center;
			overflow: hidden;
			.search_ipt{
				width: 70vw;
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
