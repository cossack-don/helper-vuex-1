import Vue from 'vue'
import Vuex from 'vuex'
// подключение модуля - компонента
import post from './modules/posts'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },

  // подключение всех модулей
  modules: {
    post
  }
})
