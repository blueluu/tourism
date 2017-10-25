import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/index/home'
import elementDemo from '@/views/elementDemo/index'
import GeolocationDemo from '@/views/elementDemo/location'
import Webworker from '@/views/elementDemo/webworker'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },{
      path: '/eleindex',
      name: 'eleIndex',
      component: Home
    },{
      path:'/elementDemo',
      name:'elementDemo',
      component: elementDemo
    },{
      path: '/GeolocationDemo',
      name: "GeolocationDemo",
      component: GeolocationDemo
    },{
      path: '/Webworker',
      name: 'Webworker',
      component: Webworker
    }
  ]
})
