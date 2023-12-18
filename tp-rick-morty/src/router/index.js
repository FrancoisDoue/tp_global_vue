import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogginView from '@/views/LogginView.vue'
import LogOnView from '@/views/LogOnView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: HomeView},
    {path: '/loggin', name: 'connexion', component: LogginView},
    {path: '/log_on', name: 'inscription', component: LogOnView},
  ]
})

export default router
