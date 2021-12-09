import Mock from 'mockjs'
const Random = Mock.Random;

function recommendData() {
  let likeList = []
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
  let datalist = {"like_list":likeList}
  return {
    datalist
  }
}

const likeData = Mock.mock('/recommend_data',recommendData);

export default {
  likeData
}