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
      :class="isShow ? 'scale-y-100' : 'scale-y-0'"></nav>
    <div>
      <section class="relative z-0 flex min-h-screen overflow-hidden bg-gray-200 md:snap-proximity md:snap-start">
        <!-- <div class="absolute" style="background-color: red; height: 100vh; width: calc(100vw - 460px); opacity: 0.3; margin: 0 230px;" /> 
      <div class="absolute" style="background-color: yellow; height: calc(100vh - 460px); width: 100vw; opacity: 0.3; margin: 230px 0; " />  -->
        <div
          class="absolute left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-[90%] translate-y-[-50%] rotate-45 shadow-3xl md:-translate-x-[75%] md:translate-y-[-50%] bg-secondary shadow-secondary">
        </div>
        <div
          class="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] -translate-x-[-90%] translate-y-[50%] rotate-45 shadow-2xl md:-translate-x-[-75%] md:translate-y-[50%] bg-primary shadow-primary">
        </div>
        <div class="container flex flex-col justify-center px-5 py-5 mx-auto md:px-10 md:py-10">
          <div class="gap-8 mx-auto md:grid md:grid-cols-3 md:grid-rows-3">
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/20 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/20 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/20 shadow-primary/20 hover:shadow-hover-primary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-primary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-primary/20 shadow-primary/20 hover:shadow-hover-primary">
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
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/20 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/20 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/20 shadow-secondary/20 hover:shadow-hover-secondary">
              <h3 class="mb-2 text-xl font-semibold font-ubuntu md:mb-4 lg:text-2xl text-secondary">
                已验证产业效益
              </h3>
              <p class="text-sm lg:text-xl">
                已经验证出产业效益，免担心无法带来效益 快速验证、快速导入
              </p>
            </div>
            <div
              class="p-5 mx-auto mb-8 border border-gray-200 shadow-lg rounded-3xl backdrop-blur-2xl md:mb-0 md:h-full md:w-full bg-secondary/20 shadow-secondary/20 hover:shadow-hover-secondary">
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
      <!-- <section class="relative z-0 min-h-screen overflow-hidden bg-gray-200 md:snap-proximity md:snap-start">
        <div class="absolute" style="background-color: red; height: 100vh; width: calc(100vw - 460px); opacity: 0.3; margin: 0 230px;" /> 
        <div class="absolute" style="background-color: yellow; height: calc(100vh - 460px); width: 100vw; opacity: 0.3; margin: 230px 0; " /> 
        <div
          class="absolute top-0 right-0 -z-10 h-[500px] w-[500px] -translate-x-[-90%] translate-y-[-50%] rotate-45 shadow-2xl md:-translate-x-[-75%] md:translate-y-[-50%] bg-primary shadow-primary">
        </div>
        <div
          class="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] -translate-x-[90%] translate-y-[50%] rotate-45 shadow-3xl md:-translate-x-[75%] md:translate-y-[50%] bg-secondary shadow-secondary">
        </div>
      </section> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import H_512 from '/H_512.png';

const isShow = ref(false);

function show() {
  isShow.value = !isShow.value;
}

</script>
<style lang="less" scoped></style>