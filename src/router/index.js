import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import detail from '@/components/detail'
import me from '@/components/me'
import home from '@/components/home'
import order from '@/components/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'order',
          name: 'order',
          component: order
        },
        {
          path: 'me',
          name: 'me',
          component: me
        }

      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
