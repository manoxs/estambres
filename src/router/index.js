import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'

import 'bulma/css/bulma.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    }
  ]
})
