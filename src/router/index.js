import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/index/home'
import elementDemo from '@/views/elementDemo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/eleindex',
      name: 'eleIndex',
      component: Home
    },{
      path:'/elementDemo',
      name:'elementDemo',
      component: elementDemo
    }
  ]
})
