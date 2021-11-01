import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '@/views/Admin.vue'
import Login from '@/views/Login.vue'
import Alarm from '@/views/admin/Alarm.vue'
import Home from '@/views/admin/Home.vue'
import Keywords from '@/views/admin/Keywords.vue'
import Report from '@/views/admin/Report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/',
    name:'Admin',
    component:Admin,
    children:[{
      path:'',
      name:'Home',
      component:Home
    },{
      path:'/alarm',
      name:'Alarm',
      component:Alarm
    },{
      path:'/keywords',
      name:'Keywords',
      component:Keywords
    },{
      path:'/report',
      name:'Report',
      component:Report
    },]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
