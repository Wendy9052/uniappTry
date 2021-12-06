<template>
	<view class="my_page">
		<view class="">
			<view class="user_msg_outer">
				<view class="user_avatars">
					<image class="avatars_img" src="https://avatars.githubusercontent.com/u/71574611?s=40&v=4"></image>
				</view>
				<view class="user_msg_box">
					<view class="user_name">{{user_name}}</view>
					<view class="text_box">
						<view class="text text_mr">钻石：{{diamond_num}} </view>
						<view class="text">小鱼干：{{dried_fish_num}}</view>
					</view>
				</view>
			</view>
			<view class="statistics_box">
				<view class="statistics_item_box">
					<view class="text">已购</view>
					<view class="num">{{purchased_num}}</view>
				</view>
				<view class="line"></view>
				<view class="statistics_item_box">
					<view class="text">关注</view>
					<view class="num">{{purchased_num}}</view>
				</view>
				<view class="line"></view>
				<view class="statistics_item_box">
					<view class="text">粉丝</view>
					<view class="num">{{purchased_num}}</view>
				</view>
				<view class="line"></view>
				<view class="statistics_item_box">
					<view class="text">音频</view>
					<view class="num">{{purchased_num}}</view>
				</view>
			</view>
			
			<view class="function_box_outer">
				<view class="function_box" v-for="(item,index) in function_list" :key="index">
					
					<view class="function_item_outer">
						<view class="icon_box">
							<icon type="success" color="#ccc" size="30"/>
							<view class="text">{{item.function_text}}</view>
						</view>
						<view class="line"></view>
						<view class="icon_box">
							<icon type="success" color="#ccc" size="30"/>
							<view class="text">{{item.function_text}}</view>
						</view>
						<view class="line"></view>
						<view class="icon_box">
							<icon type="success" color="#ccc" size="30"/>
							<view class="text">{{item.function_text}}</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			user_name: "Wendy斯达", //用户名
			diamond_num: 5, // 钻石数
			dried_fish_num: 600, //小鱼干数
			purchased_num: 2,
			function_text: "xxx",
			function_list:[
				// [
				// 	{
				// 		id:1,
				// 		function_text: "111"
				// 	},
				// 	{
				// 		id:2,
				// 		function_text: "222"
				// 	},
				// ]
				
			]
		}
	},
	created() {
		
		for(let i = 0; i < 4; i++) {
			let str = i + "" + i + i
			let item = {
				id: i,
				function_text: str,
			}
			this.function_list.push(item)
		}
		// for(let i = 0; i < 12; i++){
		// 	let function_list_item = []
		// 	for(let j = 0; j < 3; j++) {
		// 		let str = i + "" + i + i
		// 		let item = {
		// 			id: i,
		// 			function_text: str,
		// 		}
		// 		function_list_item.push(item)
		// 	}
		// 	this.function_list.push(function_list_item)
		// }
		console.log("数据：",this.function_list)
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.my_page{
	padding: 15px;
	.function_box_outer{
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 0 6px #DCDCDC;
		margin-top: 20px;
		.function_box{
			padding: 10px;
			.function_item_outer{
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				padding-top: 20px;
				padding-bottom: 20px;
				.line{
					height: 25px;
					width: 1px;
					background: rgba(0,0,0,0.1);
				}
				.icon_box{
					display: flex;
					flex-direction: column;
					align-items: center;
					.text{
						font-size: 12px;
						margin-top: 5px;
					}
				}
			}
			
		}
	}
	
	.statistics_box{
		background: #fff;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 20px;
		padding: 10px;
		box-shadow: 0 0 6px #DCDCDC;
		.line{
			height: 25px;
			width: 1px;
			background: rgba(0,0,0,0.1);
		}
		.statistics_item_box{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.text{
				font-size: 14px;
				color: #6A6A6A;
			}
			.num{
				font-size: 12px;
				color: #A5A4A4;
			}
		}
	}
	.user_msg_outer{
		display: flex;
		align-items: center;
		.user_msg_box{
			.user_name{
				font-size: 22px;
				color: #606266;
				margin-bottom: 5px;
			}
			.text_box{
				display: flex;
				.text{
					font-size: 14px;
					color: #A5A4A4;
				}
				.text_mr{
					 margin-right: 5px;
				}
			}
		}
		.user_avatars{
			width: 55px;
			height: 55px;
			border-radius: 50%;
			margin-right: 20px;
			.avatars_img{
				width: 100%;
				height: 100%;
				border-radius: 50%;
				object-fit: cover;
			}
		}
	}
	
}
</style>
