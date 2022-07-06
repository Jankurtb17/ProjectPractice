import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../components/HomeView.vue';
import AboutView from '../components/AboutView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
  ]

});

export default router;