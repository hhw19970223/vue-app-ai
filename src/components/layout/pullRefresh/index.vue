<template>
  <div class="pull-refresh" @touchstart="startTouch" @touchmove="move" @touchend="endTouch" @mousedown="startTouch"
    @mousemove="move" @mouseup="endTouch" @mouseleave="endTouch" ref="containerRef">
    <div class="content" ref="contentRef">
      <!-- 下拉显示 -->
      <div class="status" :style="{ 'height': marginTop + 'px' }">
        <div class="msg" :style="{ 'line-height': height + 'px' }">
          <RefreshSvg class="icon" :class="loading !== 2 ? 'stop' : ''"/>
          {{ msg }}
        </div>
      </div>
      <!-- 显示的数据 -->
      <slot name="main" />
      <!-- 上拉显示 -->
      <div class="status" v-show="gesture === 2" :style="{ 'height': height + 'px' }">
        <div class="msg" :style="{ 'line-height': height + 'px' }">
          <RefreshSvg class="icon" :class="loading !== 2 ? 'stop' : ''"/>
          {{ msg }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RefreshSvg from '@/assets/svg/refresh.svg';

const BEFORE_LOAD = 0;
const PULLING = 1;
const LOADING = 2;
const NO_DATA = 3;
const REFRESH_SUCCESS = 4;
const REFRESH_FAIL = 5;

const props = defineProps({
  refreshNext: Function as PropType<(onSuccess: (flag: boolean) => void, onFail: () => void) => void>,
  loadMoreNext: Function as PropType<(onSuccess: (flag: boolean) => void, onFail: () => void) => void>,
});

let touchStart = 0;
let distance = 0;
let timer: NodeJS.Timeout;

const loading = ref(0);
const gesture = ref(0);
const containerRef = ref<HTMLDivElement>();
const contentRef = ref<HTMLDivElement>();
const height = ref(44);
const marginTop = ref(104);

const msg = computed(() => {
  if (loading.value === BEFORE_LOAD) {
    return '拉动更新'
  } else if (loading.value === PULLING) {
    return '松开获取历史数据'
  } else if (loading.value === LOADING) {
    return '加载中...'
  } else if (loading.value === NO_DATA) {
    return '暂无更新内容'
  } else if (loading.value === REFRESH_SUCCESS) {
    return '刷新成功'
  } else if (loading.value === REFRESH_FAIL) {
    return '更新失败'
  }
  return ''
})

onMounted(() => {
  initData();
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})

function initData() {
  const $content = contentRef.value;
  if ($content) {
    $content.style.marginTop = `${-1 * marginTop.value}px`
    $content.style.transition = 'none'
    loading.value = BEFORE_LOAD
    touchStart = 0
    distance = 0
    gesture.value = 0
  }
}

function startTouch(e: TouchEvent | MouseEvent) {
  const clientY = (e instanceof TouchEvent ? e.targetTouches[0].clientY : e.clientY)
  if (loading.value === 0) {
    touchStart = clientY
  }
}

function move(e: TouchEvent | MouseEvent) {
  const $container = containerRef.value;
  const $content = contentRef.value;
  const diff = (e instanceof TouchEvent ? e.targetTouches[0].clientY : e.clientY) - touchStart; // 滑动距离
  const scrollTop = $container!.scrollTop;
  const clientHeight = $container!.clientHeight;
  const scrollHeight = $container!.scrollHeight;
  if (scrollTop === 0 && loading.value !== LOADING && diff > 0 && props.refreshNext) { // 页面没有下滑 并且数据没有更新 并且是下拉
    distance = diff;
    gesture.value = 1;
    if (distance < marginTop.value && $content) {
      $content.style.marginTop = `${distance - marginTop.value}px`;
      if (distance >= height.value) {
        loading.value = PULLING;
      }
    }
  } else if (scrollTop + clientHeight === scrollHeight && loading.value !== LOADING && diff < -20 && props.loadMoreNext) { // 上拉 // 除法有误差，设置误差范围0.4rem
    // 上拉加载
    gesture.value = 2;
    loading.value = PULLING;
  }
}

function endTouch() {
  // 松开判断loading
  if (loading.value === 1) {
    loading.value = LOADING // 加载中
    // 根据手势判断上拉还是下拉
    if (gesture.value === 1 && props.refreshNext) {
      const $content = contentRef.value;
      if ($content) {
        $content.style.marginTop = `${-1 * marginTop.value + height.value}px`
        props.refreshNext((flag: boolean) => {
          if (flag) {
            loading.value = REFRESH_SUCCESS
          } else {
            loading.value = NO_DATA
          }
          backToTop(500)
        }, () => {
          loading.value = REFRESH_FAIL
          backToTop(500)
        })
      }

    } else if (gesture.value === 2 && props.loadMoreNext) {
      props.loadMoreNext((flag) => {
        if (flag) {
          loading.value = REFRESH_SUCCESS
        } else {
          loading.value = NO_DATA
        }
        initData()
      }, () => {
        loading.value = REFRESH_FAIL
        initData()
      })
    }
  } else {
    if (gesture.value === 1) {
      backToTop(0)
    }
  }
};

function backToTop(duration: number) {
  if (timer) {
    clearTimeout(timer)
  }
  const $content = contentRef.value;
  if ($content) {
    $content.style.marginTop = `${-1 * marginTop.value}px`
    $content.style.transition = 'margin-top .2s .8s ease-in'
    timer = setTimeout(function () {
      initData()
    }, duration)
  }
}


</script>
<style lang="less" scoped>
.pull-refresh {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; // 解决h5苹果ios系统中overflow: auto滑动不流畅
  cursor: pointer;
  user-select: none;

  .content {
    .status {
      position: relative;
      background-color: #fff;

      .msg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        color: rgb(99, 99, 99);

        .iconfont {
          font-size: 20px;
          cursor: pointer;
        }

        .icon {
          display: inline-block;
          margin-right: 5px;
          height: 20px;
          width: 20px;

          animation: rotate .75s linear infinite;
          &.stop {
            display: none;
            animation: none;
          }
        }
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg)
    }
  }
}
</style>