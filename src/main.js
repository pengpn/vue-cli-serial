// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
      todos:[]
    },
    mutations: {//主要为了修改todos的数据
      get_todos_list (state, todos) {
        state.todos = todos
      }
    },
    actions: {
      getTodos(store) {
          Vue.axios.get('http://laravel.dev/api/todos').then((response) => {
              store.commit('get_todos_list', response.data)
          })
      }
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
