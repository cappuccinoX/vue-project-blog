import Vue from 'vue'
import Router from 'vue-router'
import BlogHomePage from '@/components/BlogHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'BlogHomePage',
      component: BlogHomePage
    }
  ]
})
