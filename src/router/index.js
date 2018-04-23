import Vue from 'vue'
import Router from 'vue-router'

const Index = r =>require.ensure([],() => r(require('@/pages/index')),'index')
const Search = r =>require.ensure([],() => r(require('@/pages/search')),'search')
const Part = r =>require.ensure([],() => r(require('@/pages/part')),'part')
//component in Part
const Used = r =>require.ensure([],() => r(require('@/components/part/used')),'used')
const Car = r =>require.ensure([],() => r(require('@/components/part/car')),'car')
const Rent = r =>require.ensure([],() => r(require('@/components/part/houserent')),'rent')


//component in Part end 

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
                }
            ]
    },
    {path:"/",redirect:"/index"}
  ]
})
