import { createApp } from 'vue';
import { createHead } from '@unhead/vue'
import './style.css';
import App from '@/App.vue';
import { router } from './router';
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate';
import Layout from '@/layout/index.vue';

// import '@/style/base.less';
import '@/styles/mixin.less';
import '@/styles/theme.css';
/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

export const app = createApp(App);
const head = createHead();
const pinia = createPinia();

pinia.use(
  createPersistedState({
    storage: window.sessionStorage // 指定存储类型为会话存储
  })
);

app.config.globalProperties.$filters = {
  // encryption(value: string) {

  // },
};

app
  .use(head)
  .use(pinia)
  .use(router)
  .component('MyLayout', Layout)
  .mount('#app');
