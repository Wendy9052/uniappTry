import Mock from 'mockjs'
const Random = Mock.Random;

//推荐页数据
function recommendData() {
  let likeList = [] // 猜你喜欢数据
  let boutiqueList = [] // 精品周更数据
  let weekList = [] //广播剧打赏周榜数据
  let liveList = [] //正在直播数据
  let monthList = [] //人气月榜
  let workslist = [] //作品列表
  let mixList = [] //混合展示
  let recommendList = [
    {
      title:"耳机里的男朋友",
      type:"horizontal"
    },
    {
      title:"偶遇爱情的一万种方式",
      type:"vertical"
    },
    {
      title:"你的非人类男友",
      type:"horizontal"
    },
    {
      title:"睡眠、解压与放松",
      type:"horizontal"
    },
    {
      title:"乙女心，独占你的爱",
      type:"vertical"
    },
    {
      title:"我与他的二次元恋情",
      type:"vertical"
    },
    {
      title:"这里有甜甜的糖糖",
      type:"vertical"
    },
    {
      title:"这本漫画你听了没",
      type:"vertical"
    },
    {
      title:"来我怀里做个美梦",
      type:"horizontal"
    },
    {
      title:"一切都是，与你的恋曲",
      type:"horizontal"
    },
    {
      title:"叮！广播剧曲目新鲜速递~",
      type:"horizontal"
    },
    {
      title:"铃铃铃，心动的讯号",
      type:"horizontal"
    },
    {
      title:"你不得不听的花絮+FT",
      type:"horizontal"
    },
    {
      title:"起床铃，让男神唤醒你的清晨！",
      type:"horizontal"
    }
  ]
  
  for(let i = 0; i < 14; i++){
    let mixData = {
      id: Random.increment(),
      title: recommendList[i].title,
      type: recommendList[i].type,
      img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      text_title: "默读",
      mixItem: []
    }
    for(let j = 0; j < 3; j++) {
      let item = {
        item_id: Random.increment(),
        img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
        detail_text: "一些描述一些描述一些描述一些描述一些描述一些描述一些描述",  
        if_pay: Random.integer(0,1),
        item_title: "破云",
        item_describe: "简介一些描述简介一些描述简介一些描述简介一些描述简介一些描述简介一些描述简介一些描述",
        play_num: Random.integer(0,6000),
        if_over: Random.integer(0,1),
      }
      mixData.mixItem.push(item)
    }
    mixList.push(mixData)
  }
  for(let i = 0; i < 5; i++) {
    let worksData = {
      id: Random.increment(),
      title: Random.word(),
      worksItem: [],
    }
    for(let i = 0; i < 3; i++) {
      let item = {
        item_id: Random.increment(),
        img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
        item_title: "杀破狼 第三季",
        item_describe: "简介一些描述简介一些描述简介一些描述简介一些描述简介一些描述简介一些描述简介一些描述",
        play_num: "5044.3万播放量",
        state_text:"已完结"
      }
      worksData.worksItem.push(item)
    }
    workslist.push(worksData)
  }
  for(let i = 0; i < 6; i++) {
    let likeData = {
      id: Random.increment(),
      img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      play_num: Random.float(1,100,0,2),
      comment_num: Random.integer(1,1000),
      describe_text: Random.paragraph()
    }
    likeList.push(likeData)
  }
  for(let i = 0; i < 2; i++) {
    let  boutiqueData = {
      id: Random.increment(),
      img_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      tag_text: "今日更新",
      text_title: "某某-第二季",
      ouline_text: "猫耳FM、光合积木工作室联合出品"
    }
    boutiqueList.push(boutiqueData)
  }
  for(let i=0; i < 8; i++) {
    let weekData = {
      id: Random.increment(),
      img_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      text_title: "小蘑菇 第二季",
    }
    weekList.push(weekData)
  }
  for(let i=0; i < 3; i++) {
    let liveData = {
      id: Random.increment(),
      img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      text_title: "天官赐福",
      avatars_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      detail_text: "一些描述一些描述一些描述一些描述"
    }
    liveList.push(liveData)
  }
  for(let i=0; i < 10; i++) {
    let monthData = {
      id: Random.increment(),
      img_url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc7%2Fe9%2F8a%2Fc7e98a2c84a2c508d868299a369843b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641451177&t=0cffd46efceb3053dbf7b0cb9e2eb8bf",
      text_title: "默读",
      if_pay: Random.integer(0,1),
    }
    monthList.push(monthData)
  }
  
  let datalist = {
    "like_list": likeList,
    "boutique_list": boutiqueList,
    "week_list": weekList,
    "live_list": liveList,
    "month_list": monthList,
    "works_list":workslist,
    "mix_list":mixList,
  }
  return {
    datalist
  }
}

const likeData = Mock.mock('/recommend_data',recommendData);

export default {
  likeData
}