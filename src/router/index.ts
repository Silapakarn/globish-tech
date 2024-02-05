import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/q1',
    name: 'q1',
    component: () => import('../views/Q1.vue')
  },
  {
    path: '/q2',
    name: 'q2',
    component: () => import('@/views/Q2.vue')
  },
  {
    path: '/q3',
    name: 'q3',
    component: () => import('@/views/Q3.vue')
  },
  {
    path: '/q4',
    name: 'q4',
    component: () => import('@/views/Q4.vue')
  },
  {
    path: '/q5',
    name: 'q5',
    component: () => import('@/views/Q5.vue')
  },
  {
    path: '/q6',
    name: 'q6',
    component: () => import('@/views/Q6.vue')
  },
  {
    path: '/q7',
    name: 'q7',
    component: () => import('@/views/Q7.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/result.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('@/views/ContentView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
