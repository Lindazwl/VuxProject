import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '../views/UserCenter/UserInfo'
import homePage from '../views/homePage/index'
import HelloFromVux from '../views/HelloFromVux'

Vue.use(Router)

export  const constantRouterMap = [
    {
      path: '/',
      name: 'homePage',
      component:() => import('@/views/homePage/index')
    },
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      meta: {
        hidden: true
      }
    },
    // {
    //   path: '/HelloBox',
    //   name: 'HelloBox',
    //   component: HelloBox
    // },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux,
    },
    // {
    //   path: '/personlInfo',
    //   name: 'personlInfo',
    //   component: personlInfo
    // },

  ]


export default new Router({
  scrollBehavior:() => ({ y:0 }),
  routes: constantRouterMap
})
