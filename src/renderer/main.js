import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
  }
});

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
  Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip =
    false

    /* eslint-disable no-new */
    new Vue({components: {App}, router, store, template: '<App/>'})
        .$mount('#app')
