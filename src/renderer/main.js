import Vue from 'vue'
import axios from 'axios'
import global_ from '@/util/Global'

import App from './App'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(ElementUI);

Vue.use(VueMaterial)

Vue.prototype.$axios= axios

Vue.prototype.GLOBAL = global_

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
