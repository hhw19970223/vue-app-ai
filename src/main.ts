import { createApp } from 'vue';
import './style.css';
import App from '@/App.vue';
import { router } from './router';
import { createPinia } from 'pinia'
import Layout from '@/layout/index.vue';

// import '@/style/base.less';
import '@/styles/mixin.less';
import '@/styles/theme.css';

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
