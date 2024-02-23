<template>
  <div class="w-screen h-screen overflow-x-hidden overflow-y-auto" :class="globalStore.isMobile ? '' : 'pc'">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
// import { storeToRefs } from 'pinia';
import { useGlobalStore } from '../stores/global';
import { isMobile as isMobileFuc } from '../utils/common';
import { EVENT_MITT, gMitt } from '../utils/event/gMitt';

const globalStore = useGlobalStore();


onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
})

watch(() => globalStore.isMobile, (newV: boolean) => {
  console.log(newV);
})

function onResize() {

  gMitt.emit(EVENT_MITT.resize);

  const isMobile = isMobileFuc();
  globalStore.updateType(isMobile);
}

</script>

<style lang="less" scoped>

.pc::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f5f5;
}

.pc::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 8px;
}
  
</style>

