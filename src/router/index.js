// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { store } from '@/store';

import HomeView from '@/views/HomeView.vue';
import mHomeView from '@/views/m/mHomeView.vue';

import About from '@/views/AboutView.vue';
import mAbout from '@/views/m/AboutView.vue';

import mGame from '@/views/m/gameView.vue'

const routes = [
  // 電腦網頁
  {
    path: '/',
    name: 'home',
    component: store.isMobile ? mHomeView : HomeView,
  },
  {
    path: '/test',
    name: 'test',
    component: store.isMobile ? mAbout : About,
  },
  {
    path: '/game',
    name: 'game',
    component: store.isMobile ? mGame : mGame,
  },

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router;
