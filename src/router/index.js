import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Todos},
    { path: '/todo/:id', component: Todo, name: 'todo'}
  ]
})
