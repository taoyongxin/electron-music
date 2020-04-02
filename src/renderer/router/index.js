import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})
