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
        todos: [],
        newTodo: {id:null,title:'',completed:false}
    },
    mutations: {//主要为了修改todos的数据
        get_todos_list(state, todos) {
            state.todos = todos
        },
        complete_todo(state, todo) {
            todo.completed = !todo.completed
        },
        delete_todo(state,index) {
            state.todos.splice(index, 1)
        },
        add_todo (state, todo) {
            state.todos.push(todo)
        }
    },
    actions: {
        getTodos(store) {
            Vue.axios.get('http://laravel.dev/api/todos').then((response) => {
                store.commit('get_todos_list', response.data)
            })
        },
        completeTodo(store, todo) {
            Vue.axios.patch('http://laravel.dev/api/todo/' + todo.id +'/completed').then((response) => {
                store.commit('complete_todo', todo)
            })
        },
        removeTodo (store, todo , index) {
            Vue.axios.delete('http://laravel.dev/api/todo/' + todo.id + '/delete').then(response => {
                console.log(response.data)
                store.commit('delete_todo', index)
            })
        },
        saveTodo (store, todo) {
            Vue.axios.post('http://laravel.dev/api/todo/create',{title: todo.title}).then(response => {
                console.log(response.data)
                store.commit('add_todo', todo)
            })
            store.state.newTodo = {id: null,title: '',completed: false}
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
