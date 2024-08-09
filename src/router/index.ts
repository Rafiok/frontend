import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/search',
    component: () => import('@/views/SearchPage.vue')
  },
  {
    path: '/welcome',
    component: () => import('@/views/WelcomePage.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/notification',
    component: () => import('@/views/NotificationPage.vue')
  },
  {
    path: '/aide',
    component: () => import('@/views/AidePage.vue')
  },
  
  {
    path: '/publie',
    component: () => import('@/views/PubliePage.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/RegisterPage.vue')
  },
  {
    path: '/room/:typ/:id',
    component: () => import('@/views/RoomPage.vue')
  },
  {
    path: '/mypub',
    component: () => import('@/views/MyPubPage.vue')
  },
  {
    path: '/test',
    component: () => import('@/views/TestPage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
