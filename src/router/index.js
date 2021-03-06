import Vue from 'vue'
import Router from 'vue-router'
const Index = r =>require.ensure([],() => r(require('@/pages/index')),'index')

const Login = r =>require.ensure([],() => r(require('@/pages/login')),'login')



const Ca= r =>require.ensure([],() => r(require('@/components/can')),'ca')


const Robot= r =>require.ensure([],() => r(require('@/pages/robot')),'robot')







const PartIndex = r =>require.ensure([],() => r(require('@/components/index/index')),'Pindex')
const PartRanking = r =>require.ensure([],() => r(require('@/components/index/ranking')),'ranking')
const PartCion= r =>require.ensure([],() => r(require('@/components/index/coin')),'cion')
const PartTrading= r =>require.ensure([],() => r(require('@/components/index/trading')),'trading')
const PartTradDetali= r =>require.ensure([],() => r(require('@/components/index/tradDetali')),'tradDetali')
const PartEncy= r =>require.ensure([],() => r(require('@/components/index/ency')),'ency')
const PartEncyDetali= r =>require.ensure([],() => r(require('@/components/index/encyDetali')),'encyDetali')
const PartTwitter= r =>require.ensure([],() => r(require('@/components/index/twitter')),'twitter')
const PartAnnouncement= r =>require.ensure([],() => r(require('@/components/index/announcement')),'announcement')
const PartAnnDetali= r =>require.ensure([],() => r(require('@/components/index/annDetali')),'annDetali')
const PartEvent= r =>require.ensure([],() => r(require('@/components/index/event')),'event')
const PartSearchIcon= r =>require.ensure([],() => r(require('@/components/index/searchIcontypes')),'searchIcontypes')
const PartConcept= r =>require.ensure([],() => r(require('@/components/index/concept')),'concept')

const PartMy= r =>require.ensure([],() => r(require('@/components/index/my')),'my')
const PartFlash= r =>require.ensure([],() => r(require('@/components/index/newFlash')),'flash')

const PartFlashDetali= r =>require.ensure([],() => r(require('@/components/index/flashDetali')),'flashDetali')








const PartFaq= r =>require.ensure([],() => r(require('@/components/index/faq')),'faq')


const Faqfaq= r =>require.ensure([],() => r(require('@/components/faq/Faq')),'Faq')
const FaqAbout= r =>require.ensure([],() => r(require('@/components/faq/about')),'about')
const FaqCall= r =>require.ensure([],() => r(require('@/components/faq/call')),'call')






















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
     		component:PartIndex,
             meta: {
                keepAlive: true // 不需要缓存
              }
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
        {
            path:'/index/trading',
            name:'trading',
            component:PartTrading
        },
        {
            path:'/index/tradDetali/:id',
            name:'tradDetali',
            component:PartTradDetali
        },
         {
            path:'/index/ency',
            name:'ency',
            component:PartEncy
        },
        
         {
            path:'/index/encyDetali/:id',
            name:'encyDetali',
            component:PartEncyDetali
        },
        {
            path:'/index/twitter',
            name:'twitter',
            component:PartTwitter
        },
         {
            path:'/index/announcement',
            name:'announcement',
            component:PartAnnouncement
        },
         {
            path:'/index/annDetali',
            name:'annDetali',
            component:PartAnnDetali
        },
         {
            path:'/index/event',
            name:'event',
            component:PartEvent
        },
         {
            path:'/index/searchIcontypes',
            name:'searchIcontypes',
            component:PartSearchIcon
        },
          {
            path:'/index/concept',
            name:'concept',
            component:PartConcept
        },
         {
            path:'/index/my',
            name:'my',
            component:PartMy
        },
         {
            path:'/index/flash',
            name:'flash',
            component:PartFlash
        },
          {
            path:'/index/flashDetali/:id',
            name:'flashDetali',
            component:PartFlashDetali
        },

        {
            path:'/index/faq',
            name:'faq',
            component:PartFaq,
            children:[
                {
                    path:'/index/faq/faq',
                    name:'faqfaq',
                    component:Faqfaq,  
                },
                 {
                    path:'/index/faq/about',
                    name:'about',
                    component:FaqAbout,  
                },
                {
                    path:'/index/faq/call',
                    name:'call',
                    component:FaqCall,  
                },

                {   path:'/index/faq', redirect:'/index/faq/about'}
            ]
        },
     
     	{path: '/index', redirect: "/index/index"}
     ]
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:'/ca',
        name:'ca',
        component:Ca,
    },
    {
        path:'/robot',
        name:'robot',
        component:Robot,
    },
   
    { path: '*', redirect: "/index"}
  ]
})
