import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/404',
    component: () => import('@/pages/404.vue'),
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
    children: [],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((_to, _from, next) => {
  next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});
