import Vue from 'vue'
import Vuex from 'vuex'
import http from '../util/http'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局状态
  state: {
    categoryList: [],
    tagList: [],
    moment: {}
  },
  // 集中式修改状态
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    clearCategoryList (state) {
      state.categoryList = []
    },
    setTagList (state, tagList) {
      state.tagList = tagList
    },
    clearTagList (state) {
      state.tagList = []
    },
    setMoment (state, moment) {
      state.moment = moment
    }
  },
  // 异步操作
  actions: {
    getCategoryList (store) {
      http.get('api/categories').then(res => {
        store.commit('setCategoryList', res.data)
      })
    },
    addCategory (store, category) {
      return http.post('api/category', JSON.stringify(category), {
        headers: {
          'content-type': 'application/json;charset=utf8'
        }
      }).then(res => {
        store.dispatch('getCategoryList')
      })
    },
    deleteCategory (store, id) {
      return http.delete(`api/category/${id}`).then(res => {
        store.dispatch('getCategoryList')
      })
    },
    getMoment (store, id) {
      return http.get(`api/moment/${id}`).then(res => {
        store.commit('setMoment', res.data)
      })
    }
  },
  modules: {
  }
})
