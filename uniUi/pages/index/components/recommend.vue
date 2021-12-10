<template>
  <view class="recommend_page">
    <!-- 轮播图 -->
    <view class="swiper_box">
      <swiper
        class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        circular
      >
        <swiper-item>
          <view
            class="swiper_item"
            :style="{ backgroundImage: 'url(' + img_url_2 + ')' }"
          ></view>
        </swiper-item>
        <swiper-item>
          <view
            class="swiper_item"
            :style="{ backgroundImage: 'url(' + img_url_3 + ')' }"
          ></view>
        </swiper-item>
        <swiper-item>
          <view
            class="swiper_item"
            :style="{ backgroundImage: 'url(' + img_url_2 + ')' }"
          ></view>
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
    <view
      class="banner_box"
      :style="{ backgroundImage: 'url(' + img_url_2 + ')' }"
    >
    </view>
    <!-- 左右滑动 -->
    <scroll-view class="scroll_box_outer" scroll-x upper-threshold="100vw">
      <view class="scroll_item_box">
        <view
          v-for="(item, index) in 5"
          :key="index"
          class="scroll_item"
          :style="{ backgroundImage: 'url(' + img_url + ')' }"
        >
          {{ item }}
        </view>
      </view>
    </scroll-view>
    <!-- 猜你喜欢 -->
    <view class="title_text">猜你喜欢</view>
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
    <!-- 换一批 -->
    <view class="change_btn">
      <view class="btn_text"> 换一批 </view>
      <view class="btn_icon">
        <uni-icons
          custom-prefix="iconfont"
          type="refreshempty"
          size="18"
        ></uni-icons>
      </view>
    </view>
    <!-- banner -->
    <view
      class="banner_box"
      :style="{ backgroundImage: 'url(' + img_url_2 + ')' }"
    >
    </view>
    <view class="title_box">
      <view class="title_text">精品周更</view>
      <view class="more_box"
        >更多<uni-icons
          custom-prefix="iconfont"
          color="#909399"
          type="right"
          size="12"
        ></uni-icons
      ></view>
    </view>
    <!-- 精品周更 -->
    <view class="boutique_box">
      <view v-for="item in boutiqueList" class="boutique_item" :key="item.id">
        <view class="boutique_cover_box">
          <view
            class="boutique_cover"
            :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
          >
            <view class="tag_box">
              {{ item.tag_text }}
            </view>
          </view>
          <view class="text_title">
            {{ item.text_title }}
          </view>
          <view class="ouline_text">
            {{ item.ouline_text }}
          </view>
        </view>
      </view>
    </view>
    <view class="title_box">
      <view class="title_text">广播剧打赏榜周榜</view>
      <view class="more_box"
        >查看榜单<uni-icons
          custom-prefix="iconfont"
          color="#909399"
          type="right"
          size="12"
        ></uni-icons
      ></view>
    </view>
    <!-- 左右滑动 -->
    <scroll-view class="scroll_box_outer_list" scroll-x upper-threshold="100vw">
      <view class="scroll_item_box_list">
        <view class="" v-for="item in weekList" :key="item.id">
          <view
            class="scroll_item_list"
            :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
          >
          </view>
          <view class="title_text">
            {{ item.text_title }}
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="title_box">
      <view class="title_text">正在直播</view>
      <view class="more_box"
        >更多<uni-icons
          custom-prefix="iconfont"
          color="#909399"
          type="right"
          size="12"
        ></uni-icons
      ></view>
    </view>
    <view class="like_box_live">
      <view v-for="item in liveList" class="like_box_item_live" :key="item.id">
        <view class="cover_box_live">
          <view
            class="img_box_live"
            :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
          >
            <view class="icon_box_live">
              <view class="icon_item_live">· LIVE</view>
            </view>
          </view>
        </view>
        <view class="detail_title">
          {{ item.text_title }}
        </view>
        <view class="detail_text_live">
          <view
            class="detail_avatars"
            :style="{ backgroundImage: 'url(' + item.avatars_url + ')' }"
          >
          </view>
          <view class="detail_text">{{ item.detail_text }}</view>
        </view>
      </view>
    </view>
    <view class="title_box">
      <view class="title_text">人气月榜</view>
      <view class="more_box"
        >更多<uni-icons
          custom-prefix="iconfont"
          color="#909399"
          type="right"
          size="12"
        ></uni-icons
      ></view>
    </view>
    <scroll-view class="scroll_box_outer_list" scroll-x upper-threshold="100vw">
      <view class="scroll_item_box_list">
        <view class="" v-for="item in monthList" :key="item.id">
          <view
            class="scroll_item_list img_bg"
            :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
          >
            <view :class="item.if_pay == 1 ? 'pay_text' : 'free_text'">
              {{ item.if_pay == 1 ? "付费" : "免费" }}
            </view>
          </view>
          <view class="title_text">
            {{ item.text_title }}
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="" v-for="item in worksList" :key="item.id">
      <view class="title_box">
        <view class="title_text">{{ item.title }}</view>
        <view class="more_box"
          >更多<uni-icons
            custom-prefix="iconfont"
            color="#909399"
            type="right"
            size="12"
          ></uni-icons
        ></view>
      </view>
      <view class="list_box">
        <view
          class="list_item"
          v-for="item_child in item.worksItem"
          :key="item_child.item_id"
        >
          <view
            class="list_cover"
            :style="{ backgroundImage: 'url(' + item_child.img_url + ')' }"
          >
            <view :class="item_child.if_pay == 1 ? 'pay_text' : 'free_text'">{{
              item_child.if_pay == 1 ? "付费" : "免费"
            }}</view>
          </view>
          <view class="list_detail">
            <text class="item_title">{{ item_child.item_title }}</text>
            <view class="item_describe">
              {{ item_child.item_describe }}
            </view>
            <view class="item_data">
              <view class="">{{ item_child.play_num }}万播放量</view>
              <view class="">{{
                item_child.if_over == 1 ? "已完结" : "连载中"
              }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="" v-for="(item, index) in mixList" :key="index">
      <view class="title_box">
        <view class="title_text">{{ item.title }}</view>
        <view class="more_box"
          >更多<uni-icons
            custom-prefix="iconfont"
            color="#909399"
            type="right"
            size="12"
          ></uni-icons
        ></view>
      </view>
      <view class="like_box" v-if="item.type == 'horizontal'">
        <view
          v-for="mix_item in item.mixItem"
          class="like_box_item"
          :key="mix_item.item_id"
        >
          <view class="cover_box">
            <view
              class="img_box"
              :style="{ backgroundImage: 'url(' + mix_item.img_url + ')' }"
            >
              <view class="icon_music">
                <view class="icon_music_text">
                  <uni-icons
                    custom-prefix="iconfont"
                    color="#fff"
                    type="headphones"
                    size="15"
                  ></uni-icons>
                  <text> 7</text>
                </view>
              </view>
            </view>
          </view>
          <view class="detail_text">
            {{ mix_item.item_describe }}
          </view>
        </view>
      </view>
      <view class="list_box" v-if="item.type == 'vertical'">
        <view
          class="list_item"
          v-for="mix_item in item.mixItem"
          :key="mix_item.item_id"
        >
          <view
            class="list_cover"
            :style="{ backgroundImage: 'url(' + mix_item.img_url + ')' }"
          >
            <view :class="mix_item.if_pay == '1' ? 'pay_text' : 'free_text'">{{
              mix_item.if_pay == "1" ? "付费" : "免费"
            }}</view>
          </view>
          <view class="list_detail">
            <text class="item_title">{{ mix_item.item_title }}</text>
            <view class="item_describe">
              {{ mix_item.item_describe }}
            </view>
            <view class="item_data">
              <view class="">{{ mix_item.play_num }}万播放量</view>
              <view class="">{{
                mix_item.if_over == 1 ? "已完结" : "未完结"
              }}</view>
            </view>
          </view>
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
      mixList: [], //混合推荐
      worksList: [], //作品列表
      monthList: [], //人气月榜
      liveList: [], //正在直播
      weekList: [], //广播剧打赏周榜数据
      boutiqueList: [], //精品周更
      likeList: [], //猜你喜欢
      img_url_3:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1111%2F052GQ22314%2F1P52G22314-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641544188&t=7982849db358713895028bdc49745d70",
      img_url_2:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-05-29%2F5ed0c8e507044.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641544023&t=2882d37d568b0a3a7076c0e011e6c583",
      img_url:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await recommendData()
        .then((res) => {
          console.log("推荐页的信息", res);
          this.likeList = res.data.datalist.like_list;
          this.boutiqueList = res.data.datalist.boutique_list;
          this.weekList = res.data.datalist.week_list;
          this.liveList = res.data.datalist.live_list;
          this.monthList = res.data.datalist.month_list;
          this.worksList = res.data.datalist.works_list;
          this.mixList = res.data.datalist.mix_list;
          console.log("workslist", this.worksList);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    // 轮播图
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend_page {
  .list_box {
    .list_item {
      display: flex;
      padding-bottom: 10px;
      margin-top: 10px;
      border-bottom: 1px solid #c0c4cc;
      // justify-content: space-between;
      .list_detail {
        margin-left: 15px;

        .item_data {
          display: flex;
          color: #808080;
          justify-content: space-between;
          font-size: 12px;
          margin-top: 15px;
        }
        .item_describe {
          font-size: 10px;
          color: #808080;
          overflow: hidden;
          text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
          display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
          -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-line-clamp: 2; /* 文本需要显示多少行 */
        }
        .item_title {
          font-size: 13px;
        }
      }
      .list_cover {
        width: 80px;
        height: 100px;
        border-radius: 5px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        flex-grow: 0;
        flex-shrink: 0;
        .pay_text {
          position: absolute;
          right: 0;
          font-size: 10px;
          color: #ffffff;
          background: #fec109;
          width: 30px;
          height: 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .free_text {
          position: absolute;
          right: 0;
          font-size: 10px;
          color: #ffffff;
          background: #3680ff;
          width: 30px;
          height: 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .like_box_live {
    // background: pink;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    .like_box_item_live {
      width: calc(calc(100% / 3) - 10px);
      margin: 5px;
      // height:50px;
      box-sizing: border-box;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      .detail_title {
        text-indent: 5px;
      }
      .detail_text_live {
        font-size: 12px;
        line-height: 18px;
        color: #303133;
        width: 100%;
        display: flex;
        .detail_avatars {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          margin: 0 5px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          flex-grow: 0;
          flex-shrink: 0;
        }
        .detail_text {
          overflow: hidden;
          text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
          display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
          -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-line-clamp: 1; /* 文本需要显示多少行 */
        }
      }
      .cover_box_live {
        width: 100%;
        height: 0;
        padding-top: 100%;
        position: relative;
        .img_box_live {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          display: flex;
          .icon_box_live {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 10px;
            background: 120px;
            height: 20px;
            background: linear-gradient(#f76863, #fc8467, #fd8d5c);
            border-radius: 10px;
            padding: 0 8px;
            margin-top: 5px;
            margin-left: 5px;
            .icon_item_live {
              display: flex;
            }
          }
        }
      }
    }
  }
  .scroll_box_outer_list {
    // background: pink;
    // height: 140px;
    // padding: 25px 0;
    width: 100%;
    .scroll_item_box_list {
      width: 100%;
      display: flex;
      .title_text {
        font-size: 13px;
        color: #3a3a3a;
      }
      .scroll_item_list {
        width: 75px;
        height: 100px;
        background: #f0ad4e;
        border-radius: 10px;
        margin-right: 8px;
        flex-grow: 0;
        flex-shrink: 0;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .pay_text {
          position: absolute;
          right: 0;
          font-size: 12px;
          color: #ffffff;
          background: #fec109;
          width: 30px;
          height: 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .free_text {
          position: absolute;
          right: 0;
          font-size: 12px;
          color: #ffffff;
          background: #3680ff;
          width: 30px;
          height: 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .img_bg {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
  }
  .boutique_box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin-bottom: 50px;
    .boutique_item {
      width: calc(calc(100% / 2) - 10px);
      margin: 5px;
      // height:50px;
      box-sizing: border-box;
      // border:1px  solid #DCDCDC;
      .boutique_cover_box {
        width: 100%;
        height: 0;
        padding-top: 100%;
        position: relative;
        .text_title {
          font-size: 15px;
          color: #3a3a3a;
        }
        .ouline_text {
          width: 100%;
          font-size: 12px;
          color: #606266;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .boutique_cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: green;
          border-radius: 5px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          .tag_box {
            position: relative;
            display: inline;
            height: 25px; /** height 即为长方形的高h **/
            width: 85px;
            // padding: 0 20px 0 45px;

            display: flex;
            // justify-content: center;
            align-items: center;

            background-color: #ee1f21;
            color: white;
            font-size: 12px;
            text-indent: 10px;
            user-select: none;
            margin-top: 15px;
          }
          .tag_box::before {
            /** 首端正方形 **/
            position: absolute;
            right: -12px; /** 平移距离为x/2 **/
            width: 20px; /** 正方形边长 **/
            height: 20px; /** 正方形边长 **/

            transform: rotate(-45deg); /** 旋转45° **/
            content: "";

            background: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
  .title_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
    .more_box {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #909399;
    }
  }
  .change_btn {
    border: 1px solid #a5a4a4;
    height: 26px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin: 20px auto;
    padding: 0 10px;
    .btn_text {
      font-size: 12px;
    }
  }
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
  .scroll_box_outer {
    // background: pink;
    height: 100px;
    padding: 15px 0;
    width: 100%;

    .scroll_item_box {
      width: 100%;
      display: flex;
      .scroll_item {
        width: 100px;
        height: 100px;
        // background: #F0AD4E;
        border-radius: 10px;
        margin-right: 8px;
        flex-grow: 0;
        flex-shrink: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
  }
  .banner_box {
    height: 100px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .icon_box_outer {
    display: flex;
    justify-content: space-between;
    .icon_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon_text {
        font-size: 12px;
        margin-top: 5px;
      }
    }
    .icon_btn {
    }
  }
  .swiper_box {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 170px;
    width: 100%;
    background: yellow;
    // border-radius: 20px;
    // overflow: hidden;
    .swiper {
      height: 100%;
      width: 100%;
      background: pink;
      // border-radius: 20px;
      .swiper-item {
        height: 100%;
      }
      .swiper_item {
        border-radius: 10px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        .item_content {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
