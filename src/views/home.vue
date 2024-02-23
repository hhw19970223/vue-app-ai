<template>
  <div>123123123</div>
  <PullRefresh :refreshNext="refreshNext" :loadMoreNext="loadMoreNext">
    <template #main>
      <Desktop />
      <App name="App 1" icon="chat-o" description="This is App 1." />
      <App name="App 2" icon="friends-o" description="This is App 2." />
      <App name="App 3" icon="smile-comment-o" description="This is App 3." />
      <App name="App 4" icon="wechat" description="This is App 4." />
    </template>
  </PullRefresh>  
</template>

<script setup lang="ts">
function refreshNext(onSuccess: (flag: boolean) => void) {
  console.log('refreshNext');
  setTimeout(() => {
    onSuccess(true);
  }, 2000)
  
}

function loadMoreNext(onSuccess: (flag: boolean) => void) {
  console.log('loadMoreNext')
    setTimeout(() => {
    onSuccess(true);
  }, 2000)
}
</script>
<style lang="less" scoped>
.a {
  color: @primary;
}
</style>