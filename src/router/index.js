import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Installation from '@/views/Installation.vue'
import Deployment from '@/views/Deployment.vue'
import Documentation from '@/views/Documentation.vue' 
import Blog from '@/views/Blog.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about', 
      name: 'about',
      component: About,
    },
    {
      path: '/installation', 
      name: 'installation',
      component: Installation,
    },
    {
      path: '/deployment', 
      name: 'deployment',
      component: Deployment,
    },
    {
      path: '/documentation', 
      name: 'documentation',
      component: Documentation,
    },
    {
      path: '/blog', 
      name: 'blog',
      component: Blog,
    },
  ]
})

export default router
