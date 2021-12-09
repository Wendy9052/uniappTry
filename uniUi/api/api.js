import axios from 'axios'

// 获取推荐页的数据
export function recommendData(data) {
  return axios.get('/recommend_data',data)
}
