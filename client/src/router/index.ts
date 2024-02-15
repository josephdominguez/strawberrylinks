import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';

import ShortenView from '@/views/ShortenView.vue';
import ElongateView from '@/views/ElongateView.vue';
import DashboardView from '@/views/DashboardView.vue';
import CallbackViewVue from '@/views/CallbackView.vue';
import ShortenedUrlView from '@/views/ShortenedUrlView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShortenView,
    },
    {
      path: '/elongate',
      name: 'elongate',
      component: ElongateView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: authGuard,
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackViewVue,
    },
    {
      path: '/:shortUrl',
      name: 'ShortenedUrl',
      component: ShortenedUrlView,
    },
  ]
})

export default router
