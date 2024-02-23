import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/landing',
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'), meta: {
      index: 1,
    },
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    children: [],
    meta: {
      index: 1,
    },
  },
  {
    path: '/landing',
    component: () => import('@/views/landing.vue'),
    children: [],
    meta: {
      index: 1,
    },
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
