import { Directive, createApp, App as IApp } from 'vue';
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
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';

import 'default-passive-events'//由于 Chrome 想提高浏览器动画渲染帧数，要修改 eventListener 相关接口，出现了遮罩层无法屏蔽滚动动作的情况。
import { copy } from './directives/copy';
import { draggable } from './directives/draggable';
import { debounce } from './directives/debounce';
import { throttle } from './directives/throttle';
import { longpress } from './directives/longpress';

export const app = createApp(App);
const head = createHead();
const pinia = createPinia();

const directivesList: { [key: string]: Directive } = {
  copy,
  draggable,
  debounce,
  throttle,
  longpress
};

const directives = {
  install: function (app: IApp<Element>) {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key]);
    });
  }
};

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
  .use(directives)
  .component('MyLayout', Layout)
  .mount('#app');
