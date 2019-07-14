import Settings from '@/components/Settings.vue'
import Start from '@/components/Start.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: history,
  routes: [
    {path: '/', component: Start}, {path: '/settings', component: Settings}, {
      path: '*',
      redirect: '/'
    },  // "いずれにもマッチしないと/に自動でリダイレクト"
  ]
})
