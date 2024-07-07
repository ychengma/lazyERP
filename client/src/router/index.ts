import { createRouter,createWebHashHistory } from "vue-router";
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[{
        path: '/',
        meta:{title:'login'},//mettre un titre 
        component:()=>import('@/views/Login.vue'),
        },
        {
            path: '/login',
            redirect:'/',
        },
        {
            path: '/index',
            meta:{title:'acceuil'},
            component:()=>import('@/views/Index.vue'),
            children:[
                {
                    path:'home',
                    meta:{title:'Acceuil'},
                    component:()=>import('@/views/Home.vue')
                }, 
                {
                    path:'users',
                    meta:{title:'gestion des users'},
                    component:()=>import('@/views/users/Users.vue')
                }
            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{ 
    NProgress.start()
    next()
})

router.afterEach((to,from)=>{
    if(to.meta && to.meta.title){
        document.title = to.meta.title as string
    }
    NProgress.done()
})
export default router;
