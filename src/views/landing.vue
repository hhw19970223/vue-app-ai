<template>
  <div class="w-full">
    <div @click="show"
      class="fixed z-50 inline-block px-4 py-4 bg-white rounded-lg cursor-pointer right-4 top-4 opacity-90 hover:shadow-hover-1 md:scale-125 md:right-6 md:top-6">
      <div class="h-1 mb-2 transition-all ease-in-out transform duration-400 w-9 bg-secondary"
        :class="isShow ? 'translate-y-3 rotate-[-45deg]' : ''"></div>
      <div class="h-1 mb-2 transition-all ease-in-out bg-black duration-400 w-9" :class="isShow ? 'opacity-0' : ''"></div>
      <div class="h-1 transition-all ease-in-out transform duration-400 w-9 bg-primary"
        :class="isShow ? '-translate-y-3 rotate-45' : ''"></div>
    </div>
    <nav
      class="flex flex-1 fixed -top-2 z-40 mx-auto w-full max-w-full origin-top items-start justify-start overflow-y-auto rounded-xl bg-white px-0 py-2 shadow-2xl transition-all duration-500 max-h-max h-[90vh] opacity-100"
      :class="isShow ? 'scale-y-100' : 'scale-y-0'">
      
    </nav>
    <div class="bg-gray-200">
      <section class="relative z-0 flex min-h-screen overflow-hidden md:snap-proximity md:snap-start bg-bg">
        <div class="container flex flex-col justify-center px-5 py-5 mx-auto">
          <div class="gap-8 mx-auto md:grid md:grid-cols-3 md:grid-rows-3">
            <div ref="ref1" data-card="fade-down-right" :class="showInfo.isShow1 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/30 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div ref="ref2" data-card="fade-down" :class="showInfo.isShow2 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/30 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div ref="ref3" data-card="fade-down-left" :class="showInfo.isShow3 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/30 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div ref="ref4" data-card="fade-right" :class="showInfo.isShow4 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/30 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div class="flex items-center justify-center max-md:mb-8">
              <van-image round width="10rem" height="10rem" :src="H_512" />
            </div>
            <div ref="ref5" data-card="fade-left" :class="showInfo.isShow5 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/30 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div ref="ref6" data-card="fade-up-right" :class="showInfo.isShow6 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/30 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div ref="ref7" data-card="fade-up" :class="showInfo.isShow7 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/30 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div ref="ref8" data-card="fade-up-left" :class="showInfo.isShow8 ? 'show-animate' : ''"
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/30 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EVENT_MITT, gMitt } from '../utils/event/gMitt';
import H_512 from '/H_512.png';

let scrollTop: number = 0;
const isShow = ref(false);

const showInfo = reactive({
  isShow1: false,
  isShow2: false,
  isShow3: false,
  isShow4: false,
  isShow5: false,
  isShow6: false,
  isShow7: false,
  isShow8: false,
})


const ref1 = ref<HTMLElement>();
const ref2 = ref<HTMLElement>();
const ref3 = ref<HTMLElement>();
const ref4 = ref<HTMLElement>();
const ref5 = ref<HTMLElement>();
const ref6 = ref<HTMLElement>();
const ref7 = ref<HTMLElement>();
const ref8 = ref<HTMLElement>();

onMounted(() => {
  onSrcoll(0);
  gMitt.on(EVENT_MITT.scroll, onSrcoll);
  gMitt.on(EVENT_MITT.resize, onResize);
})

onUnmounted(() => {
  gMitt.off(EVENT_MITT.scroll, onSrcoll);
  gMitt.off(EVENT_MITT.resize, onResize);
})

function show() {
  isShow.value = !isShow.value;
}

function onResize() {
  onSrcoll(0);
}

function onSrcoll(_scrollTop?: number) {
  if (_scrollTop != null) scrollTop = _scrollTop;
  const height = window.innerHeight;

  if (ref1.value) {
    const $ref = ref1.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow1 = true;
    } else {
      showInfo.isShow1 = false;
    }
  }

  if (ref2.value) {
    const $ref = ref2.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow2 = true;
    } else {
      showInfo.isShow2 = false;
    }
  }

  if (ref3.value) {
    const $ref = ref3.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow3 = true;
    } else {
      showInfo.isShow3 = false;
    }
  }

  if (ref4.value) {
    const $ref = ref4.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow4 = true;
    } else {
      showInfo.isShow4 = false;
    }
  }

  if (ref5.value) {
    const $ref = ref5.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow5 = true;
    } else {
      showInfo.isShow5 = false;
    }
  }

  if (ref6.value) {
    const $ref = ref6.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow6 = true;
    } else {
      showInfo.isShow6 = false;
    }
  }

  if (ref7.value) {
    const $ref = ref7.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow7 = true;
    } else {
      showInfo.isShow7 = false;
    }
  }

  if (ref8.value) {
    const $ref = ref8.value as HTMLElement;
    if ($ref.offsetTop - scrollTop + Math.ceil($ref.offsetHeight / 2) < height && scrollTop < $ref.offsetTop + Math.ceil($ref.offsetHeight * 0.5)) {
      showInfo.isShow8 = true;
    } else {
      showInfo.isShow8 = false;
    }
  }
}

</script>
<style lang="less" scoped>
[data-card^=fade] {
  opacity: 0;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 1.5s;
}

[data-card^=fade].show-animate {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

[data-card=fade-down-right] {
  transform: translate3d(-100px, -100px, 0);
}

[data-card=fade-down] {
  transform: translate3d(0, -100px, 0);
}

[data-card=fade-down-left] {
  transform: translate3d(100px, -100px, 0);
}

[data-card=fade-right] {
  transform: translate3d(-100px, 0, 0);
}

[data-card=fade-left] {
  transform: translate3d(100px, 0, 0);
}

[data-card=fade-up-right] {
  transform: translate3d(-100px, 100px, 0);
}

[data-card=fade-up] {
  transform: translate3d(0, 100px, 0);
}

[data-card=fade-up-left] {
  transform: translate3d(100px, 100px, 0);
}
</style>