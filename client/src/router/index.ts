import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{title:'Home'},//mettre un titre 
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta:{title:'about'}, 
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
