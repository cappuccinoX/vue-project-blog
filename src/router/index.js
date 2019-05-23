import Vue from 'vue'
import Router from 'vue-router'
import BlogHomePage from '@/components/BlogHomePage'
import msgboard from '@/components/msgboard'
import article from '@/components/article'
import life from '@/components/life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'BlogHomePage',
      component: BlogHomePage,
      meta: {
        title: 'homepage'
      }
    },
    {
      path: '/article',
      name: 'MyArticles',
      component: article,
      meta: {
        title: 'article'
      }
    },
    {
      path: '/life',
      name: 'MyLife',
      component: life,
      meta: {
        title: 'life'
      }
    },
    {
      path: '/msgboard',
      name: 'MessageBoard',
      component: msgboard,
      meta: {
        title: 'message board'
      }
    }
  ]
})
