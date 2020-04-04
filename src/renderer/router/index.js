import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import Tab from '../components/Tab.vue'
import Personal from '../components/Personal.vue'
import Registered from '../components/Registered.vue'


Vue.use(Router)
// const electron = require('electron')
// /*获取electron窗体的菜单栏*/
// const Menu = electron.Menu
// /*隐藏electron创听的菜单栏*/
// Menu.setApplicationMenu(null)


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
         },
         {
          path:'/personal',
          name:'personal',
          component:Personal
        }

    ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/registered',
      name:'registered',
      component:Registered
    }
  ]
})
