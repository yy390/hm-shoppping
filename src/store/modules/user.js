import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      // 动态获取个人信息
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
      // 将数据存储到本地
      setInfo(obj)
    }
  },
  actions: {

  },
  getters: {

  }
}
