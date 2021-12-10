<template>
	<view class="index_page">
		<view class="top_part">
			<uni-icons color="#999999" type="calendar-filled" size="25"></uni-icons>
			<view class="searchBox">
				<!-- 替换组件的搜索图标 -->
				<uni-search-bar placeholder="" @confirm="search" @cancel="cancel" class="search_ipt" cancel-text="cancel">
				    <uni-icons slot="searchIcon" class="search_icon" color="#999999" size="18" type="search" />
				</uni-search-bar>

			</view>
			<uni-icons color="#999999" type="calendar-filled" size="25"></uni-icons>
		</view>
		<view class="tab_box_outer">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" tab-class="tab_list" select-class="select_tab" textFlex @change="tabChange"></wuc-tab>
			<swiper class="tab_swiper" :current="TabCur" duration="300" @change="swiperChange">
			  <swiper-item class="tab_swiper_item" v-for="(item,index) in tabList" :key="index">
			    <view v-if="item.id == 2">
						<recommend></recommend>
				</view>
			  </swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import recommend from './components/recommend.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		components: { WucTab,recommend},
		data() {
			return {
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
		created() {
			this.init()
		},
		onLoad() {

		},
		methods: {
			async init() {
			},
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
		height: 1180vh;
		// padding-left: 15px;
		// padding-right: 15px;
		.tab_swiper{
			height: 100%;
			.tab_swiper_item{
				width: 200vw;
				height: 1180vh;
				::-webkit-scrollbar { //隐藏滚动条
				  width: 0;
				  height: 0;
				  color: transparent;
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
				border-radius: 10px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
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
				position: relative;
				.search_icon{
					position: absolute;
					left: 0;
				}
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
}
</style>
