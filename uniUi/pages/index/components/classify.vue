<template>
	<view class="classify_page">
		<uni-grid :column="4" :showBorder="showBorder" class="icon_box_outer">
		    <uni-grid-item v-for="(item,index) in 12" :key="index">
				<view class="classify_icon_box">
					<uni-icons type="home" size="25"></uni-icons>
					<text class="text">文本</text>
				</view>
		    </uni-grid-item>
		</uni-grid>
		<!-- 今日推荐 -->
		<view class="title_text">今日推荐</view>
		<view class="like_box">
		  <view v-for="item in likeList" class="like_box_item" :key="item.id">
		    <view class="cover_box">
		      <view
		        class="img_box"
		        :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
		      >
		        <view class="icon_box">
		          <view class="icon_item"
		            ><uni-icons
		              custom-prefix="iconfont"
		              color="#fff"
		              type="videocam"
		              size="18"
		            ></uni-icons>
		            {{ item.play_num }}</view
		          >
		          <view class="icon_item"
		            ><uni-icons
		              custom-prefix="iconfont"
		              color="#fff"
		              type="videocam"
		              size="18"
		            ></uni-icons>
		            {{ item.comment_num }}</view
		          >
		        </view>
		      </view>
		    </view>
		    <view class="detail_text">
		      {{ item.describe_text }}
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
import { recommendData } from "../../../api/api.js";
export default {
	data() {
		return {
			showBorder: false, //是否显示边框
			likeList: [],
		}
	},
	created() {
		this.init()
	},
	methods: {
		async init() {
			await recommendData().then(res => {
				this.likeList = res.data.datalist.like_list;
			}).catch(err => {
				console.log("err", err);
			})
		}
	}
	
}
</script>
<style lang="scss" scoped>
.classify_page{
	.like_box {
	  // background: pink;
	  width: 100%;
	  display: flex;
	  flex-wrap: wrap;
	  height: auto;
	  .like_box_item {
	    width: calc(calc(100% / 3) - 10px);
	    margin: 5px;
	    // height:50px;
	    box-sizing: border-box;
	    border: 1px solid #dcdcdc;
	    .detail_text {
	      font-size: 12px;
	      line-height: 18px;
	      color: #303133;
	      width: 100%;
	      overflow: hidden;
	      text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
	      display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
	      -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
	      -webkit-line-clamp: 2; /* 文本需要显示多少行 */
	    }
	    .cover_box {
	      width: 100%;
	      height: 0;
	      padding-top: 100%;
	      position: relative;
	      .img_box {
	        position: absolute;
	        top: 0;
	        left: 0;
	        width: 100%;
	        height: 100%;
	        background-repeat: no-repeat;
	        background-position: center;
	        background-size: cover;
	        display: flex;
	        align-items: flex-end;
	        .icon_music {
	          width: 100%;
	          display: flex;
	          // background: pink;
	          justify-content: flex-end;
	          // text-align: right;
	          .icon_music_text {
	            display: flex;
	            align-items: center;
	            font-size: 12px;
	            color: #fff;
	            padding-right: 5px;
	            text {
	              margin-left: 3px;
	            }
	          }
	        }
	        .icon_box {
	          width: 100%;
	          display: flex;
	          justify-content: space-between;
	          color: #fff;
	          font-size: 10px;
	          .icon_item {
	            display: flex;
	          }
	        }
	      }
	    }
	  }
	}
	.title_text {
	  font-size: 14px;
	  color: #333333;
	  text-indent: 5px;
	}
	.icon_box_outer{
		// margin-top: 15px;
		.classify_icon_box{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.text{
				font-size: 12px;
			}
		}
	}
	
}
</style>