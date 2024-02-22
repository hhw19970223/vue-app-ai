<template>
  <div class="border border-black border-solid a">123456</div>
  <van-cell title="选择单个日期" :value="date" @click="show = true" />
  <van-calendar v-model:show="show" @confirm="onConfirm" />
  <van-button type="primary" @click="onclick">主要按钮</van-button>
</template>

<script setup lang="ts">
const date = ref('');
const show = ref(false);

const formatDate = (date: any) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value: any) => {
  show.value = false;
  date.value = formatDate(value);
};

function onclick() {
  window.pwaPrompt?.();
}

</script>
<style lang="less" scoped>
.a {
  color: @primary;
}
</style>