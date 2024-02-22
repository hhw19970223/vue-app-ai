<template>
  <div class="desktop">
    <van-grid :column-num="4">
      <van-grid-item v-for="(app, index) in apps" :key="index">
        <van-icon :name="app.icon" size="2rem" />
        <span>{{ app.name }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: [
        { name: 'App 1', icon: 'chat-o' },
        { name: 'App 2', icon: 'friends-o' },
        { name: 'App 3', icon: 'smile-comment-o' },
        { name: 'App 4', icon: 'wechat' }
      ]
    };
  }
};
</script>

<style scoped>
.desktop {
  padding: 20px;
}
</style>