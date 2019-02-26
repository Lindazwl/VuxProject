import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../Pages/HelloWorld'
import HelloBox from '../Pages/HelloBox'
import HelloFromVux from '../Pages/HelloFromVux'
import personlInfo from '../pages/personlInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloBox',
      name: 'HelloBox',
      component: HelloBox
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/personlInfo',
      name: 'personlInfo',
      component: personlInfo
    },

  ]
})
