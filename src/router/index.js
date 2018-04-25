import Vue from 'vue'
import Router from 'vue-router'

const Index = r =>require.ensure([],() => r(require('@/pages/index')),'index')//首页
const Search = r =>require.ensure([],() => r(require('@/pages/search')),'search')//搜索
const Part = r =>require.ensure([],() => r(require('@/pages/part')),'part')//选项的页面
//component in Part
const Used = r =>require.ensure([],() => r(require('@/components/part/used')),'used')
const Car = r =>require.ensure([],() => r(require('@/components/part/car')),'car')
const Rent = r =>require.ensure([],() => r(require('@/components/part/houserent')),'rent')
const Merchant = r =>require.ensure([],() => r(require('@/components/part/merchant')),'merchant')

//component in Part end 


const Details = r =>require.ensure([],() => r(require('@/components/part/details')),'details')//详情模块


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
    {
        path:'/part',
        name:'part',
        component:Part,
        children:[
                {
                    path:'/part/used',
                    component:Used
                },
                {
                    path:'/part/car',
                    component:Car
                },
                {
                    path:'/part/rent',
                    component:Rent
                },
                {
                    path:'/part/merchant',
                    component:Merchant
                }
            ]
    },
    {
        path:'/details/:id',
        name:'details',
        component:Details
    },
    {path:"/",redirect:"/index"}
  ]
})
