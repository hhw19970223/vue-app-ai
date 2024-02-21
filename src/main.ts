import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import { router } from './router';
import { createPinia } from 'pinia'
import Layout from '@/layout/index.vue';

export const app = createApp(App);

app.config.globalProperties.$filters = {
  // encryption(value: string) {

  // },
};

app
  .use(createPinia())
  .use(router)
  .component('MyLayout', Layout)
  .mount('#app');
