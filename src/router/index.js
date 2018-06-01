import Vue from 'vue'
import Router from 'vue-router'
const Index = r =>require.ensure([],() => r(require('@/pages/index')),'index')

const Login = r =>require.ensure([],() => r(require('@/pages/login')),'login')









const PartIndex = r =>require.ensure([],() => r(require('@/components/index/index')),'Pindex')
const PartRanking = r =>require.ensure([],() => r(require('@/components/index/ranking')),'ranking')
const PartCion= r =>require.ensure([],() => r(require('@/components/index/coin')),'cion')













Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/index',
     name:'index',
     component:Index,
     children:[
     	{
     		path:'/index/index',
     		name:'pindex',
     		component:PartIndex
     	},
        {
            path:'/index/ranking',
            name:'ranking',
            component:PartRanking
        },
        {
            path:'/index/cion/:id',
            name:'cion',
            component:PartCion
        },
     
     	{path: '/index', redirect: "/index/index"}
     ]
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
   
    { path: '*', redirect: "/index"}
  ]
})
