import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import Tab from '../components/Tab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: Tab,
      children:[
        {
          path: '/',
          redirect:'index'
         },
         {
           path:'/index',
           name:'index',
           component:Index
         },
         {
           path:'/main',
           name:'main',
           component:Main
         }
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
