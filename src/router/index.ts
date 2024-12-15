import {
  HOME_ROUTER_NAME,
  HOME_ROUTER_URL,
  WAITING_ROOM_ROUTER_NAME,
  WAITING_ROOM_ROUTER_URL,
} from '@/constants/RouterConstants'
import WaitingRoom from '@/views/WaitingRoom.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: HOME_ROUTER_URL,
    name: HOME_ROUTER_NAME,
    component: HomePage,
  },
  {
    path: WAITING_ROOM_ROUTER_URL,
    name: WAITING_ROOM_ROUTER_NAME,
    component: WaitingRoom,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   //component: () => import('../views/AboutView.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
