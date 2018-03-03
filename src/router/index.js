import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Step1 from '@/components/Step1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1
    }
  ]
})
