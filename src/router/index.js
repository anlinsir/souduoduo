import Vue from 'vue'
import Router from 'vue-router'
const Index = r =>require.ensure([],() => r(require('@/pages/index')),'index')

const Login = r =>require.ensure([],() => r(require('@/pages/login')),'login')









const PartIndex = r =>require.ensure([],() => r(require('@/components/index/index')),'Pindex')











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
