import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classifyList: []
  },
  mutations: {
    changeClassifyList(state, data) {
      state.classifyList = data
    }
  },
  actions: {
    getClassifyList(store, classId) {
      let url = `/index/item/cateList.json?__timestamp=1600266898004&categoryId=${classId}`
      axios.get(url).
      then((res) => {
        // console.log('分类页面左侧导航,请求数据成功……')
        store.commit('changeClassifyList', res.data.data)
        console.log(this.state.classifyList)
      })
    }
  },
  modules: {}
})