import Vue from 'vue'
import Router from 'vue-router'

const Index = r =>require.ensure([],() => r(require('@/pages/index')),'index')
const Search = r =>require.ensure([],() => r(require('@/pages/search')),'search')
Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/index',
     name:'index',
     component:Index
    },
    {
     path:'/search',
     name:'search',
     component:Search
    },
    {path:"/",redirect:"/index"}
  ]
})
