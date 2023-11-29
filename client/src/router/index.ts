import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShortenedUrlView from '../views/ShortenedUrlView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:shortUrl',
      name: 'ShortenedUrl',
      component: ShortenedUrlView,
    },
  ]
})

export default router
