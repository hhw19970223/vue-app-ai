<template>
  <div class="app">
    <van-cell :title="name" :icon="icon" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    description: String
  }
};
</script>

<style scoped>
.app {
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
}
</style>